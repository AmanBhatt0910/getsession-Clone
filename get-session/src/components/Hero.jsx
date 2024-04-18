import React from "react";
import Button from "./SmallComponents/Button";

export default function Hero(props) {
    return(
        <div className="flex items-center justify-between">
            <div className="flex flex-col ml-[100px] align-middle justify-center">
                <div className="font-semibold text-6xl">
                    <h1>{props.l1}</h1>
                    <h1>{props.l2}</h1>
                    <h1>{props.l3}</h1>
                </div>
                <div className="pt-5">
                <Button buttonData={"Download"} />
                </div>
            </div>
            <img className="w-2/4 mr-[100px] mt-[80px] mb-[100px]" src="/ui-showcase.webp" alt="section1Img" />
        </div>
    )
}
