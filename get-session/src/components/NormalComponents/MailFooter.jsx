import React from "react";

export default function MailFooter({mailData}) {
    const displayData = mailData[0];
    return(
        <>
            <div className="bg-green-500 p-20">
                <div className = "w-[75%]">
                    <h2 className = "text-3xl font-bold py-2">{displayData.heading}</h2>
                    <p className = "text-xl py-2">{displayData.paragraph}</p>
                    <input
                    type="text"
                    placeholder="Your Email"
                    className = "p-2 border border-black pr-56 rounded-md bg-green-500 placeholder-black focus:border focus:border-blue-500 mt-5"
                    ></input>
                </div>
                <button className = "mt-4 px-10 py-[5px] bg-black text-green-300     rounded-2xl hover:text-green-500">{displayData.buttonHeading}</button>
            </div>
        </>
    )
}