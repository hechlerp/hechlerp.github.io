import { Box, Container, Grid, Typography } from "@mui/material";
import gameTileData from "../Data/ProjectData/ProjectData";
import DetailProjectTile from "../Components/DetailProjectTile";
import { useCallback, useEffect, useState } from "react";
import ProjectDetailViz from "../Components/ProjectDetailViz";


function Games() {

    const [currentTab, updateTab] = useState(-1);
    const tiles = gameTileData.map((tile, index) => {
        const selectionCallback = useCallback(() => {
            if (index !== currentTab) {
                updateTab(index)
            }
        }, [currentTab, updateTab]);
        return (
            <Grid item xs="auto" md="auto" key={index}>
                <DetailProjectTile projectData={{...tile}} onSelect={selectionCallback} />
            </Grid>
        );
    });
    const projectDetails = currentTab >= 0 ? <ProjectDetailViz projectData={gameTileData[currentTab]} /> : "";
    useEffect(() => {
        if (currentTab >= 0) {
            document.getElementById("projectDetailContainer")?.scrollIntoView({behavior: "smooth"});
        }
    }, [currentTab])
    return (
        <Container>
            <Box>
                <Typography sx={{ textAlign: "left" }} variant="h4">
                    Games
                </Typography>
                <Grid container spacing={3} justifyContent={"center"}>
                    {tiles}
                </Grid>

            </Box>
            <div className="project-tile-divider-line" />
            <Box id="projectDetailContainer" className="project-detail-container">
                {projectDetails}
            </Box>
        </Container>
    )
}

export default Games;