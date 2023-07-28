import { Box, /*Button,*/ Container, Link, /*TextField,*/ Typography } from "@mui/material";
//import React, { SyntheticEvent, useCallback, useState } from "react";

//const INPUT_NAMES = {
//    email: "email",
//    name: "name",
//    message: "message"
//}

//const validateEmail = (email: string) => {
//    return String(email)
//        .toLowerCase()
//        .match(
//            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//        );
//};

function Contact() {

    //const [name, updateName] = useState("");
    //const [nameError, setNameError] = useState("");
    //const [email, updateEmail] = useState("");
    //const [emailError, setEmailError] = useState("");
    //const [message, updateMessage] = useState("");
    //const [messageError, setMessageError] = useState("");
    //const updateInput = useCallback((e: React.ChangeEvent) => {
    //    if (!e.target) {
    //        return;
    //    }
    //    switch (e.target.name) {
    //        case INPUT_NAMES.email:
    //            updateEmail(e.target.value);
    //            if (emailError) {
    //                setEmailError("");
    //            }
    //            break;
    //        case INPUT_NAMES.name:
    //            updateName(e.target.value);
    //            if (nameError) {
    //                setNameError("");
    //            }
    //            break;
    //        case INPUT_NAMES.message:
    //            updateMessage(e.target.value);
    //            if (messageError) {
    //                setMessageError("");
    //            }
    //            break;
    //        default:
    //            return;
    //    }
    //}, [emailError, nameError, messageError, setEmailError, setNameError, setMessageError, updateName, updateEmail, updateMessage]);

    //const [isSendingEmail, updateSendingState] = useState(false);

    //const handleSubmit = useCallback((e: SyntheticEvent) => {
    //    e.preventDefault();
    //    const isEmailValid = validateEmail(email);
    //    if (!isEmailValid) {
    //        setEmailError("Invalid email");
    //    }

    //    if (!name) {
    //        setNameError("Name required");
    //    }

    //    if (!message) {
    //        setMessageError("Message required");
    //    }

    //    updateSendingState(true);
    //    console.log({ email, name, message });
    //    updateSendingState(false);
    //}, [name, email, message]);

    return (
        <Container>
            <Typography sx={{textAlign: "left", marginBottom: "20px"}} variant="h4">
                Contact Me
            </Typography>
            <Box sx={{ display: "flex", flexDirection: {xs: "column", md: "row"} }}>
                {/*<Box sx={{ flexGrow: 1 }}>*/}
                {/*    <form*/}
                {/*        noValidate*/}
                {/*        autoComplete="off"*/}
                {/*        onSubmit={handleSubmit}*/}
                {/*    >*/}
                {/*        <div className={"contact-form-fields-container"}>*/}
                {/*            <TextField*/}
                {/*                required*/}
                {/*                id="name-required"*/}
                {/*                className={"contact-form-field"}*/}
                {/*                label="Your Name"*/}
                {/*                name={INPUT_NAMES.name}*/}
                {/*                error={nameError !== ""}*/}
                {/*                helperText={nameError}*/}
                {/*                onChange={updateInput}*/}
                {/*                value={name}*/}
                {/*            />*/}

                {/*            <TextField*/}
                {/*                required*/}
                {/*                id="email-required"*/}
                {/*                className={"contact-form-field"}*/}
                {/*                label="Your Email"*/}
                {/*                name={INPUT_NAMES.email}*/}
                {/*                error={emailError !== ""}*/}
                {/*                helperText={emailError}*/}
                {/*                onChange={updateInput}*/}
                {/*                value={email}*/}
                {/*            />*/}

                {/*            <TextField*/}
                {/*                required*/}
                {/*                multiline*/}
                {/*                minRows={4}*/}
                {/*                id="message-required"*/}
                {/*                className={"contact-form-field"}*/}
                {/*                label="Your Message"*/}
                {/*                name={INPUT_NAMES.message}*/}
                {/*                error={messageError !== ""}*/}
                {/*                helperText={messageError}*/}
                {/*                onChange={updateInput}*/}
                {/*                value={message}*/}
                {/*            />*/}
                {/*            <Button disabled={isSendingEmail} type="submit" variant="contained" size="medium" sx={{maxWidth: "150px"}}>*/}
                {/*                {isSendingEmail ? "Sending..." : "Send"}*/}
                {/*            </Button>*/}
                {/*        </div>*/}
                {/*    </form>*/}
                {/*</Box>*/}
                <Box sx={{ textAlign: "left" }}>
                    <Box className="contact-info-box">
                        <Typography display="block">
                            Email:
                        </Typography>
                        <Typography sx={{ fontWeight: 700 }}>
                            <Link href="mailto:peter.hechler@gmail.com">
                                peter.hechler@gmail.com
                            </Link>
                        </Typography>
                    </Box>
                    <Box className="contact-info-box">
                        <Typography display="block">
                            Phone Number:
                        </Typography>
                        <Typography sx={{fontWeight: 700}}>
                            +1 (914) 419-9542
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Contact;