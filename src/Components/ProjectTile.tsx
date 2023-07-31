import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";

type Props = {
    title: string;
    description: string;
    thumbnailSrc: string;
    links: {
        label: string;
        url: string;
        note?: string;
    }[];
};

function ProjectTile({ title, description, thumbnailSrc, links }: Props) {

    const renderableLinks = links.map((link, index) => {
        const { label, url, note = ""} = link;
        return (
            <Box sx={{ margin: "0 10px" }} key={index + "-" + label}>
                <Button variant="contained" component={Link} href={url} target={"_blank"} sx={{width: "130px"}}>
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
        <Box sx={{ display: "flex", flexDirection: "column", maxWidth: {xs: "400px", md: "600px", lg: "700px"}, margin: "0 auto" }}>
            <Typography variant="h5" sx={{fontStyle: "italic"}}>
                {title}
            </Typography>
            <Box sx={{ maxWidth: "300px", margin: "0 auto", border: "1px solid #000", display: "flex", marginTop: "10px"}}>
                <img src={thumbnailSrc} alt={title} style={{ height: "100%", width: "100%" }} referrerPolicy="no-referrer"/>
            </Box>
            <Typography sx={{marginTop: "20px", textAlign: "left", whiteSpace: "pre-line"}} variant="body2">
                {description}
            </Typography>
            <Box sx={{display: "flex", margin: "20px auto 0 auto"}}>
                {renderableLinks}
            </Box>
        </Box>
    )
}

export default ProjectTile;