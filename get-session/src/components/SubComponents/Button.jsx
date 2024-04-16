import React from "react";

export default function Button(props) {
    return (
        <button className="px-6 py-2 text-black font-bold mx-4 rounded-full bg-green-500 hover:bg-black hover:text-green-400 transition duration-300">{props.buttonData}</button>
    )
}