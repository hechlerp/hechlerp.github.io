import { Box } from "@mui/material";
import SocialButton, { SocialButtonProps } from "../Components/SocialButton";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';


const socialsData: SocialButtonProps[] = [
    {
        icon: <DescriptionIcon />,
        label: "Resume",
        href: "https://drive.google.com/file/d/1YTYMTr0x_aA5WK7r7LyJDLih7_9QZcwy/view?usp=sharing"
    },
    {
        icon: <LinkedInIcon />,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/peter-hechler-ab4238b4"
    },
    {
        icon: <TwitterIcon />,
        label: "Twitter",
        href: "https://twitter.com/ItsNotJohaggis"
    },
    {
        icon: <GitHubIcon />,
        label: "Github",
        href: "https://github.com/hechlerp"
    },
    {
        icon: <EmailIcon />,
        label: "Email",
        href: "mailto:peter.hechler@gmail.com"
    },
];

function Socials() {
    const socialButtons = socialsData.map((socialDatum, index) => {
        return <SocialButton {...socialDatum} key={index + socialDatum.label} />;
    })
    return (
        <Box sx={{ display: "flex", width: "100%" }}>
            <Box sx={{display: "flex", width: "300px", justifyContent: "space-evenly", margin: "20px auto"}}>
                {socialButtons}
            </Box>
        </Box>
    )
}

export default Socials;