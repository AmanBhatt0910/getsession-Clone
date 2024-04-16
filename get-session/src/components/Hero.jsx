import React from "react";
import AlertMessage from "./NormalComponents/AlertMessage";
import NavBar from "./NormalComponents/NavBar";
import HeroSection1 from "./NormalComponents/HeroSection1";

export default function Hero() {
    const alertMessage = "We are upgrading to the Session Network and migrating to Session Token.";
    const navItems = ["GITHUB", "BLOG", "TECHNICALS", "HELP", "DONATE"];
    return(
        <>
            <AlertMessage paragraph = {alertMessage}/>
            <NavBar navItems = {navItems}/>
            <HeroSection1 l1 = {"Send"} l2 = {"Messages,"} l3 = {"Not Metadata."}/>
        </>
    )
}