import { Box, Container, Typography } from "@mui/material";
import ProjectTile, { TileProps } from "../Components/ProjectTile";

const gameTileData: TileProps[] = [
    {
        title: "Planar Peril",
        thumbnailSrc: "https://i.imgur.com/93sqcAV.png",
        description: `An in-progress RTS made with Unity/C#. In the current build, there are two playable scenarios: the tutorial and the wave defense mode.

            Gather resources, build a base, and fight off the increasingly dangerous waves of enemies in this war of alternate versions of Earth.

            Play as either the zealous Benedictum, a fantastical version of the Eastern Roman Empire c. 400 BCE, or the Free State, a Cyberpunk city-state ruled by Megacorporations and the insatiable thirst for progress.
                        
            Most assets currently in the game are placeholders.
            `,
        links: [
            { label: 'Live Demo (on Itch.io)', url: 'https://johaggis.itch.io/planar-peril-demo' }
        ]
    },
    {
        title: "Shrouded City",
        thumbnailSrc: "https://i.imgur.com/QngmlmA.png",
        description: "A 2D dungeon crawler built with Pixi.js. Navigate the rooms of the occult and reach the cliffs at the end.",
        links: [
            { label: 'Github', url: 'https://github.com/hechlerp/ShroudedCity' },
            { label: 'Live', url: 'http://hechlerp.github.io/ShroudedCity/' }
        ]
    },
    {
        title: "Rat Burglar",
        thumbnailSrc: "https://ggjv4.s3.us-west-1.amazonaws.com/files/styles/sidebar_full/s3/games/2024/815430/featured/Cover.png?VersionId=n1pnDlFxuV_a0aMuoqKUrueA9n4ZMu16&itok=383X6ZVo",
        description: `
            Crreated with a team for Global Game Jam 2024.

        Traverse a New York subway station as one of two rats in this local co-op game. In honor of Pizza Rat, your quest is to grab the pizza and drag it from the first platform to your hole. Be careful of subways and people, as they have no respect for Ratkind and will flatten you. Squeak at the subway passengers to make them run away in panic!

        May your heist go off without a hitch!
        
        (Created for the 2024 Global Game Jam)
        `,
        links: [
            { label: "Github", url: "https://github.com/hechlerp/Rat-Burglar" },
            { label: 'GGJ Website', url: 'https://globalgamejam.org/games/2024/rat-burglar-4' },
            { label: 'Itch.io', url: 'https://johaggis.itch.io/rat-burglar' }
        ]
    },
    {
        title: "The Necrofixer",
        thumbnailSrc: "https://img.itch.zone/aW1hZ2UvNTYxNjA1LzI5NTE4MzIuanBn/original/D0suYE.jpg",
        description: `Created with a team for Global Game Jam 2020.

            Following the theme of repair, our team set about to build a  game centered around a humble business owner: Zeusly Tangwystl Phd, The Necrofixer!

            Want a cuter cat? visit the Necrofixer!
            Want a familiar that strikes fear into your enemies? Dr. Tanwystl can supply you with what you need!

            Players play as Dr. Tangwystl, who owns a small shop where wizards, witches, warlocks, and other magic folk can bring their familiar creatures to undergo strange operations. By casting magic spells on the customer's familiar pet (clicking limbs), players make adjustments to the animal's appearance in order to please each patron.

            However, if you make too many mistakes you'll get bad ratings and your business might go under!.
            `,
        links: [
            { label: 'Github', url: 'https://github.com/hechlerp/necrofixer' },
            { label: 'GGJ Website', url: 'https://globalgamejam.org/2020/games/necrofixer-familiar-fixerupper-extraordinaire-zuesly-tangwystl-phd-8' },
            { label: 'Itch.io', url: 'https://charlieartifact.itch.io/the-necrofixer' }

        ]
    },
    {
        title: "Belong",
        thumbnailSrc: "https://ggj.s3.amazonaws.com/styles/game_sidebar__wide/game/featured_image/screenshot_2018-01-28_21.40.05.png?itok=Ys2wi2iW&timestamp=1517236977",
        description: `Created with a team for Global Game Jam 2018.

            Eat seeds and poop trees to traverse planets and reach your flock. The Chinese word in the logo, 歸途 (guī tu) means: the way back, one's journey home.`,
        links: [
            { label: 'Github', url: 'https://github.com/Davis-B-Allen/birdtest' },
            { label: 'GGJ Website', url: 'https://globalgamejam.org/2018/games/belong', note: 'PC version available for download' },
            { label: 'Live', url: 'http://hechlerp.github.io/belong-web/', note: 'Runs best on Chrome' }
        ]
    }
]

function Games() {
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
                    Games
                </Typography>
                <Box>
                    {tiles}
                </Box>

            </Box>
        </Container>
    )
}

export default Games;