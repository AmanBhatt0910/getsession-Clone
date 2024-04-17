import React from "react";

export default function Button(props) {
    return (
        <button className=" px-7 py-2 text-black font-bold mr-4 rounded-full bg-green-400 hover:bg-black hover:text-green-400 transition duration-300">{props.buttonData}</button>
    )
}