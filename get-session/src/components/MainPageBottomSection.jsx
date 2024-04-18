import React from "react";
import MailFooter from "./NormalComponents/MailFooter";
import Footer from "./NormalComponents/Footer";

export default function MainPageBottomSection() {
    const mailData = [
        {
            heading: "Friends don’t let friends use compromised messengers.",
            paragraph: "Sign up to the mailing list and start taking action!",
            buttonHeading: "Sign up"
        }
    ]

    return(
        <>
            <MailFooter mailData = {mailData}/>
            <Footer heading= "Join the movement to keep the internet private!" 
            paragraph = "Chat with like-minded individuals in the Session Community."
            heading3 = "LINKS"
            heading4 = "SUPPORT"
            paragraph2 = "Visit our Help Centre"
            paragraph3 = "Session is an end-to-end encrypted messenger that removes sensitive metadata collection, and is designed for people who want privacy and freedom from any forms of surveillance."
            />
        </>
    )
}