import React from "react";
import Button from "./SubComponents/Button";

export default function AlertMessage(props) {
    return(
        <>
            <div style ={{backgroundColor: "#333132" }} className="flex justify-center items-center py-6">
                <p className = "text-white">{props.paragraph}</p>
                <Button buttonData = {"Learn More"}/>
            </div>
        </>
    )
}