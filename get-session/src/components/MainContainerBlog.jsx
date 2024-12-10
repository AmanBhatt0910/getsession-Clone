import React from "react";

export default function MainContainerBlog(props) {
    return(
        <>
            <div className="flex justify-around p-10 m-10">
                <img src = "/dissapearing_msg2.webp" alt="dissapearing_msg2"></img>
                <div className="pl-10">
                    <h1  className="text-4xl font-bold">{props.heading}</h1>
                    <p className = "text-lg font-normal pt-5">{props.paragraph}</p>
                </div>
            </div>
        </>
    )
}