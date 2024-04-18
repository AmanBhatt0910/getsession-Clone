import React from "react";
import MailFooter from "./NormalComponents/MailFooter";

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
        </>
    )
}