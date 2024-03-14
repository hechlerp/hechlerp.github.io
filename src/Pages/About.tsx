import { Box, Container, Link, Typography } from "@mui/material";
import { SyntheticEvent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import personalImage from "../assets/peter-photo.jpg";

function About() {

    const navigate = useNavigate();
    const handleLinkNav = useCallback((e: SyntheticEvent) => {
        e.preventDefault();
        navigate("/games");
    }, [navigate]);
    return (
        <Container>
            <Typography sx={{ textAlign: "left", marginBottom: "20px" }} variant="h4">
                About Me
            </Typography>
            <Box sx={{ marginBottom: "20px", display: { xs: "block", md: "flex" }}}>
                <Box className="profile-img-container" sx={{ marginBottom: {xs: "20px", md: "inherit"}}}>
                    <img className="profile-img" src={personalImage} alt="picture of peter" />
                </Box>
            </Box>
            <Box>
                <Box sx={{ margin: { xs: "inherit", md: "auto 0" } }}>
                        <Typography className="bio across-from-pic">
                            Welcome to my site! I'm Peter Hechler, a game developer based out of New York City. I've been coding professionally for around 7 years now,
                            and until recently worked as a Front End Web Developer. I've been programming and designing a larger scale RTS in my spare time over the last few years, as well as
                            building a number of smaller-scale games.
                            <br />
                            <br />
                        </Typography>
                </Box>
                <Typography className="bio">
                    You can find the games I've made here on my site, on the <Link href="/games" onClick={handleLinkNav}>Games page</Link>. They include my personal projects and a few choice games I worked on as part of game jams.
                    <br />
                    <br />
                    If you're looking for my resume/cv, click <Link target="_blank" sx={{ padding: "0" }} href="https://drive.google.com/file/d/1ETbjKq9oAUNDGMdvKYlg0_AMXdCH7Wrp/view?usp=sharing">here</Link> or on the page icon in the footer.
                    <br />
                    <br />
                    If you have any other questions or want to get in contact, feel free to reach out to me at
                    <Link sx={{paddingLeft: "4px"}} href="mailto:peter.hechler@gmail.com">peter.hechler@gmail.com</Link> or via one of the links in the footer.
                </Typography>

            </Box>

        </Container>
    )
}

export default About;