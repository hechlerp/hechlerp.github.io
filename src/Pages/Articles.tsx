import { Box, Container, Typography } from "@mui/material";
import ProjectTile, { ArticleTileProps } from "../Components/ArticleTile";
import xcomSS from "../assets/xcom shot.png";

const gameTileData: ArticleTileProps[] = [
    {
        title: "RTS Discourse is a Disaster",
        headerMedia: { src: xcomSS, type: "image", name: "articleHeader" },
        description: `If you’ve spent any amount of time around competitive gamers, you’ve heard people complain about 
        “RNG”, short for Random Number Generation. Maybe you’ve heard “This game is all RNG, there's no skill.” 

        These discussions suck. And it's not because the people involved are arguing in bad faith...`,
        articleURL: 'https://waywardstrategy.com/2025/03/03/rng-discourse-is-a-disaster/'
    },
    {
        title: "Of Archers and Artillery: Range Dynamics in RTS",
        headerMedia: { src: "https://bccasteel.files.wordpress.com/2024/01/trebuchet.jpg", type: "image", name: "articleHeader" },
        description: `If you’ve ever played Age of Empires 2, you know how deeply satisfying it is to use the Trebuchet…
        the firing sound, the arcing rock/fireball about to lay waste to your opponent’s castle. That moment of dread 
        your opponent must feel as they see your siege weapons unpacking just outside of where their castle can 
        fight back. And their panic as they send out a wave of cavalry to hopefully end your assault...`,
        articleURL: 'https://waywardstrategy.com/2024/03/12/of-archers-and-artillery-range-dynamics-in-rts/'
    },
    {
        title: "Fixing Stealth in RTS",
        headerMedia: { src: "https://bccasteel.files.wordpress.com/2023/06/6001862.jpg", type: "image", name: "articleHeader" },
        description: `It’s no secret that people love stealth mechanics. From dedicated stealth games like Dishonored 
            and Desperados 3 to awkward, forced stealth mechanics in The Witcher 2, stealth is all over 
            gaming. Today I’d like to take a few minutes to talk about stealth in RTS games, how different 
            games have done it, and the key components of a good stealth system...
            `,
        articleURL: 'https://waywardstrategy.com/2023/06/26/fixing-stealth-in-rts/'
    }

]

function Articles() {
    const tiles = gameTileData.map((tile, index) => {
        const line = index === gameTileData.length - 1 ? "" : (
            <div className="project-tile-divider-line" />
        );
        return (
            <Box sx={{ marginTop: "20px" }} key={index}>
                <ProjectTile {...tile} />
                {line}
            </Box>
        );
    });
    return (
        <Container>
            <Box>
                <Typography sx={{ textAlign: "left" }} variant="h4">
                    Articles
                </Typography>
                <Box>
                    {tiles}
                </Box>

            </Box>
        </Container>
    )
}

export default Articles;