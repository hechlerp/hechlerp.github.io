import { Box, Button, CardMedia, Link, Typography } from "@mui/material";
import { ReactElement } from "react";

export type TileProps = {
    title: string;
    description: string;
    headerMedia: {
        src: string;
        name: string;
        type: "video" | "image" | "iframe"
    };
    links: {
        label: string;
        url: string;
        note?: string;
        disabled?: boolean;
    }[];
};

function ProjectTile({ title, description, headerMedia, links }: TileProps) {

    const renderableLinks = links.map((link, index) => {
        const { label, url, note = "", disabled = false} = link;
        return (
            <Box sx={{ margin: "0 10px", lineHeight: "3em" }} key={index + "-" + label}>
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

    let renderableMedia: string | ReactElement = "";
    // if (additionalMedia) {
    //     const mediaTiles = additionalMedia.map(media => {
    //         return (
    //             <Box className="tile-media-positioner">
    //                 <CardMedia className="tile-media" key={media.name} src={media.src} component={media.type} />
    //             </Box>
    //         );
    //     })
    //     renderableMedia = <Box className="tile-media-container">{mediaTiles}</Box>;
    // }
    console.log(headerMedia.src);

    return (
        <Box sx={{ display: "flex", flexDirection: "column", maxWidth: {xs: "400px", md: "600px", lg: "700px"}, margin: "0 auto" }}>
            <Typography variant="h5" sx={{fontStyle: "italic"}}>
                {title}
            </Typography>
            <Box /*sx={{ maxWidth: "300px", margin: "0 auto", border: "1px solid #000", display: "flex", marginTop: "10px"}}*/ className="tile-media-container">
                {/* <img src={thumbnailSrc} alt={title} style={{ height: "100%", width: "100%" }} referrerPolicy="no-referrer"/> */}
                <Box className="tile-media-positioner">
                    <CardMedia image={headerMedia.src} className="tile-media bordered-media" component={headerMedia.type} />
                </Box>
            </Box>
            <Typography sx={{marginTop: "20px", textAlign: "left", whiteSpace: "pre-line"}} variant="body2">
                {description}
            </Typography>
            {renderableMedia}
            <Box sx={{display: "flex", margin: "20px auto 0 auto", flexWrap: "wrap"}}>
                {renderableLinks}
            </Box>
        </Box>
    )
}

export default ProjectTile;