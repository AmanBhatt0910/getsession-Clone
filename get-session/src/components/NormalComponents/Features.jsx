import React from "react";
import FeaturesCard from "../SmallComponents/Features.Card";

export default function Features(props) {
    const cardData = [
        {
            id: 1,
            heading: "Group chats",
            paragraph: "Talk to your friends or talk to the world. You decide. Groups let you talk to up to 100 friends at once, with the same encrypted protections as one-on-one chats. Got a bigger crowd? Use a community to connect with as many people as you want.",
        },
        {
            id: 2,
            heading: "Voice messages",
            paragraph: "Sometimes, a text just isn’t enough. Voice messages let you send something a little more personal, so nothing gets lost in translation.",
        },
        {
            id: 3,
            heading: "Attachments",
            paragraph: "Don’t leak those docs. Send all your files, images, and attachments through a network that takes your privacy seriously."
        }
    ]

    return(
        <>
            <div className="p-10">
                <h2 className = "text-xl font-semibold mx-12 my-10">
                    <span className = "mr-2">&mdash;&mdash;</span>
                    {props.heading}
                </h2>
                <div className="flex  justify-around">
                    <FeaturesCard cardData = {cardData}/>
                    <img className="w-[50%] pr-2 align-middle" src="/mockup-desktop.webp" alt="" />
                </div>
            </div>
        </>
    )
}