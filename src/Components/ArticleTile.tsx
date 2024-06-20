import { Box, Button, CardMedia, Link, Typography } from "@mui/material";

export type ArticleTileProps = {
    title: string;
    description: string;
    headerMedia: {
        src: string;
        name: string;
        type: "video" | "image" | "iframe"
    };
    articleURL: string;
};

function ArticleTile({ title, description, headerMedia, articleURL }: ArticleTileProps) {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", maxWidth: {xs: "400px", md: "600px", lg: "700px"}, margin: "0 auto" }}>
            <Typography variant="h5" sx={{fontStyle: "italic"}}>
                {title}
            </Typography>
            
            <Box className="tile-media-container">
                <Box className="tile-media-positioner">
                    <a href={articleURL} target="_blank" rel="no-referrer" >
                        <CardMedia image={headerMedia.src} className="tile-media bordered-media" component={headerMedia.type} />
                    </a>
                </Box>
            </Box>
            <Typography sx={{marginTop: "20px", textAlign: "left", whiteSpace: "pre-line"}} variant="body2">
                {description}
            </Typography>
            <Box sx={{display: "flex", margin: "20px auto 0 auto", flexWrap: "wrap"}}>
                <Button variant="contained" className="button-link" component={Link} href={articleURL} target={"_blank"} sx={{width: "130px"}}>
                    Full Article
                </Button>
            </Box>
        </Box>
    )
}

export default ArticleTile;