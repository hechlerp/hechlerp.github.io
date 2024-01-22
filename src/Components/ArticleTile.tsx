import { Box, Button, Link, Typography } from "@mui/material";

export type ArticleTileProps = {
    title: string;
    description: string;
    thumbnailSrc: string;
    articleURL: string;
};

function ArticleTile({ title, description, thumbnailSrc, articleURL }: ArticleTileProps) {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", maxWidth: {xs: "400px", md: "600px", lg: "700px"}, margin: "0 auto" }}>
            <Typography variant="h5" sx={{fontStyle: "italic"}}>
                {title}
            </Typography>
            <Box sx={{ maxWidth: "300px", margin: "0 auto", border: "1px solid #000", display: "flex", marginTop: "10px"}}>
                <a href={articleURL} >
                    <img src={thumbnailSrc} alt={title} style={{ height: "100%", width: "100%" }} referrerPolicy="no-referrer"/>
                </a>
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