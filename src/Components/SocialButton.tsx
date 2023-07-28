import { Button } from "@mui/material";
import React, { ReactElement } from "react";

export type SocialButtonProps = {
    icon: ReactElement | string;
    label: string;
    href: string;
}

function SocialButton({ icon, href, label }: SocialButtonProps) {
    return (
        <Button href={href} color={"primary"} aria-label={label} title={label} target={"_blank"} className="social-icon-wrapper">{icon}</Button>
    );
}

export default SocialButton;