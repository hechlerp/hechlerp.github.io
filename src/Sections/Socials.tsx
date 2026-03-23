import { Box } from "@mui/material";
import SocialButton, { SocialButtonProps } from "../Components/SocialButton";
import { Twitter, GitHub, Email, LinkedIn, Description } from "@mui/icons-material";


const socialsData: SocialButtonProps[] = [
    {
        icon: <Description />,
        label: "Resume",
        href: "https://drive.google.com/file/d/1IFvBqoFKFUpzLxh-QlmnDAArFzcdm2xE/view?usp=sharing"
    },
    {
        icon: <LinkedIn />,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/peter-hechler-ab4238b4"
    },
    {
        icon: <Twitter />,
        label: "Twitter",
        href: "https://twitter.com/ItsNotJohaggis"
    },
    {
        icon: <GitHub />,
        label: "Github",
        href: "https://github.com/hechlerp"
    },
    {
        icon: <Email />,
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