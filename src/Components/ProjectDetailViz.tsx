import { Accordion, AccordionDetails, AccordionSummary, Box, Button, CardMedia, Link, Modal, Typography } from "@mui/material";
import { DetailProjectData, LinksData, TextLinkBlock } from "./DetailProjectTile";
import { ReactElement, useCallback, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TYPE_TO_COMPONENT: {
    [key: string]: 
        (props: ActionBlockProps) => ReactElement;
    } = {
        text: DetailParagraph,
        img: DetailImage,
        projectTitle: DetailProjectTitle,
        subsectionTitle: DetailSubsectionTitle,
        title: DetailTitle,
        video: DetailVideo
    };

interface ActionBlockProps {
    content: string;
    textLinks?: TextLinkBlock,
    openModal: (imageSrc: string) => void;
}

interface ActionBlockLinkProps {
    content: LinksData;
};

function ProjectDetailViz({ projectData } : {projectData: DetailProjectData}) {
    const [ isModalOpen, toggleModalState ] = useState(false);
    const [ modalImageSrc, updateImageSrc ] = useState("");
    const closeModal = useCallback(() => {
        toggleModalState(false);
    }, [toggleModalState]);
    const openModal = useCallback((nextImgSrc: string) => {
        updateImageSrc(nextImgSrc);
        toggleModalState(true);
    }, [toggleModalState, updateImageSrc]);

    const projectTitle = <DetailProjectTitle content={projectData.projectTitle} />;
    const projectHeaderMedia = projectData.projectHeaderMediaType === "video" ? (
        <DetailVideo content={projectData.projectHeaderMedia} openModal={openModal} /> 
    ) : ( 
        <DetailImage content={projectData.projectHeaderMedia} openModal={openModal} />
    );
    const projectLinks = <DetailLinks content={projectData.projectLinks} />;
    const projectSubsections = projectData.subsections.map((subsection, idx: number) => {
        const subsectionContents = subsection.contents.map((subsectionContents, idx: number) => {
            const BlockComponent = TYPE_TO_COMPONENT[subsectionContents.type];
            return (
                <Box className="project-block-container" key={subsection.title + idx}>
                    <BlockComponent {...subsectionContents} openModal={openModal}/>
                </Box>
            );
        });
        return (
            <Accordion defaultExpanded={idx === 0} key={subsection.title + projectData.projectTitle} className="project-accordion" slotProps={{transition: {timeout: 250}}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="project-accordion-expander" />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    >
                    <DetailTitle content={subsection.title} openModal={openModal} />
                </AccordionSummary>
                <AccordionDetails>
                    {subsectionContents}
                </AccordionDetails>
            </Accordion>
        )
    });
    const renderProjectData = (
        <Box className="project-block-container">
            <Box className="project-block-container">
                {projectHeaderMedia}
            </Box>
            
            <Box className="project-block-container">
                {projectTitle}
            </Box>
            
            <Box className="project-block-container">
                {projectLinks}
            </Box>
            
            <Box className="project-block-container">
                {projectSubsections}
            </Box>
        </Box>
    )

    return (
        <div>
            {renderProjectData}
            <Modal open={isModalOpen} onClose={closeModal} >
                <Box className="project-image-modal-container">
                    <img src={modalImageSrc} className="modal-image" />
                    {/* <Box className="modal-image-container">
                    </Box> */}
                </Box>
            </Modal>
        </div>
    );
}

function createLinkSentence(name: string, textLinks: TextLinkBlock) {
    const links = textLinks[name];
    return (
        <span key={name}>
            {links.map(link => {
                let contents;
                if (!link.icon) {
                    contents = <Typography>{link.label}</Typography>;
                } else {
                    switch (link.iconType) {
                        case "img":
                            contents = <img className="credited-social-icon" src={link.icon} />;
                            break;
                        case "svg":
                            contents = <link.icon className="credited-social-icon" />;
                            break;
                        case "mui":
                            contents = <link.icon className="credited-social-icon" />;
                            break;
                    }
                }
                return (<Button component={Link} key={link.href} href={link.href} target={"_blank"} title={link.label} style={{minWidth: "24px"}}>
                    {contents}
                </Button>);
}               )}
        </span>
    );
}

function DetailParagraph({content, textLinks} : ActionBlockProps) {
    let renderableContent = [];
    if (textLinks) {
        const regex = new RegExp(/{(.+)}/, "gm");
        const splitContent = content.split(regex);
        renderableContent = [];
        const isFirstElReplaced = content[0] === "{";
        for (let i = 0; i < splitContent.length; i++) {
            if (i % 2 == 0) {
                renderableContent.push(isFirstElReplaced ? createLinkSentence(splitContent[i], textLinks) : <span key={i}>{splitContent[i]}</span>);
            } else {
                renderableContent.push(isFirstElReplaced ? <span key={i}>{splitContent[i]}</span> : createLinkSentence(splitContent[i], textLinks));
            }
        }
    } else {
        renderableContent = [<span key={0}>{content}</span>];
    }

    return <Typography sx={{marginTop: "20px", textAlign: "left", whiteSpace: "pre-line"}} variant="body2">{renderableContent}</Typography>;
}

function DetailImage({content, openModal} : ActionBlockProps) {
    const openModalImage = useCallback(() => {
        openModal(content);
    }, [openModal, content]);
    return (
        <Box className="project-image-block bordered-media" onClick={openModalImage}>
            <img src={content} className="project-image" />
            {/* <CardMedia image={content} className="tile-media" component={"image"} /> */}
        </Box>
    );
}

function DetailTitle({content} : ActionBlockProps) {
    return (
        <Typography variant="h5" sx={{fontStyle: "italic"}}>
            {content}
        </Typography>
    );
}

function DetailProjectTitle({content} : {content: string}) {
    return (
        <Typography variant="h4" sx={{fontStyle: "bold"}}>
            {content}
        </Typography>
    );
}

function DetailSubsectionTitle({content} : ActionBlockProps) {
    return (
        <Typography variant="h6" sx={{}}>
            {content}
        </Typography>
    );
}


function DetailVideo({content} : ActionBlockProps) {
    return (
        <Box className="project-image-block">
            <CardMedia image={content} className="tile-media bordered-media" component="iframe" />
        </Box>
    );
}

function DetailLinks({content} : ActionBlockLinkProps) {
    const renderableLinks = content.map((link, index) => {
        const { label, url, note = "", disabled = false} = link;
        return (
            <Box sx={{ margin: "0 10px" }} key={index + "-" + label}>
                <Button variant="contained" className="button-link" component={Link} href={url} target={"_blank"} sx={{width: "150px"}} disabled={disabled}>
                    {label}
                </Button>
                {note ? (
                    <Typography variant="caption" display="block" width={"130px"}>
                        {note}
                    </Typography>
                ) : ""}
            </Box>
        );
    })
    return (
        <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {renderableLinks}
        </Box>
    )
}

export default ProjectDetailViz;