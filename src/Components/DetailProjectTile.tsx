import { Box, CardMedia, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { FunctionComponent, SVGProps, SyntheticEvent } from "react";

export type DetailTileProps = {
    projectData: DetailProjectData;
    onSelect: (e: SyntheticEvent) => void;
    isSelected: boolean;
    isTouchScreen: boolean;
};

export type DetailTileMedia = {
    title: string;
    headerMedia: {
        src: string;
    }
}

export type LinksData = {
    label: string;
    url: string;
    note?: string;
    disabled?: boolean;
}[]

type TextLink = {
    href: string;
    label?: string;
} & (
    {
        iconType: undefined;
        icon: undefined;
    } | {
        iconType: "img"; 
        icon: string
    } | {
        iconType: "svg",
        icon: FunctionComponent<SVGProps<SVGSVGElement>>;
    } | {
        iconType: "mui",
        icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
            muiName: string;
        }
    }
)

export type TextLinkBlock = {
    [name: string]: TextLink[];
}

export type ProjectSubsection = {
    title: string;
    contents: {
        type: "subsectionTitle" | "text" | "img" | "video";
        content: string;
        textLinks?: TextLinkBlock;
    }[]
}

export type DetailProjectData = {
    description: string;
    tileMedia: DetailTileMedia;
    projectTitle: string;
    projectLinks: LinksData;
    projectHeaderMedia: string;
    projectHeaderMediaType: "img" | "video";
    projectType: "Personal Project" | "Game Jam Project"
    subsections: ProjectSubsection[];
}

function DetailProjectTile({ projectData, onSelect, isSelected, isTouchScreen}: DetailTileProps) {
    const { tileMedia } = projectData;
    const labelSection = isTouchScreen ? (
        <Box className="mobile-label">
            <Typography variant="h6">
                {tileMedia.title} - {projectData.projectType}
            </Typography>
        </Box>
    ) : "";
    return (
        <Box sx={{ display: "flex", flexDirection: "column", maxWidth: {xs: "400px", md: "600px", lg: "700px"}, margin: "0 auto", }}>
            <Box className={["tile-media-container", isSelected ? "selected-tile" : ""].join(" ")}>
                <Box className={["tile-media-positioner tile-media-positioner-v2 bordered-media", isSelected ? "selected-tile-border" : ""].join(" ")}>
                    <CardMedia image={tileMedia.headerMedia.src} className="tile-media" component={"image"} />
                    <Box className="tile-media-overlay" onClick={onSelect}>
                        <Typography variant="h5" className="tile-media-overlay-text">
                            {tileMedia.title}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {labelSection}
        </Box>
    )
}

export default DetailProjectTile;