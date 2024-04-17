import React from "react";
import About from "./NormalComponents/About";
import Benefits from "./NormalComponents/Benefits";

const Overview = ()=> {
    const heading = "What is Session?";
    const paragraph = "Session is an end-to-end encrypted messenger that minimises sensitive metadata, designed and built for people who want absolute privacy and freedom from any form of surveillance.";
    return(
        <>
            <About heading = {heading}  paragraph = {paragraph}/>
            <Benefits heading = "Benefits"/>
        </>
    )
}

export default Overview;