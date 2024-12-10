import React from "react";
import About from "./NormalComponents/About";
import Benefits from "./NormalComponents/Benefits";
import Features from "./NormalComponents/Features";

const Overview = ()=> {
    const heading = "What is Session?";
    const paragraph = "Session is an end-to-end encrypted messenger that minimises sensitive metadata, designed and built for people who want absolute privacy and freedom from any form of surveillance.";
    return(
        <>
            <About heading = {heading}  paragraph = {paragraph}/>
            <Benefits heading = "Benefits"/>
            <Features heading = "Features"/>
        </>
    )
}

export default Overview;