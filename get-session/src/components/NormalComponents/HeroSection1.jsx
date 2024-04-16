import React from "react";
import Button from "../SmallComponents/Button";

export default function HeroSection1(props) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-col">
                <div>
                    <h1>{props.l1}</h1>
                    <h1>{props.l2}</h1>
                    <h1>{props.l3}</h1>
                </div>
                <Button buttonData={"Download"} />
            </div>
            <div>
                <img className="w-2/4" src="/ui-showcase.webp" alt="section1Img" />
            </div>
        </div>
    )
}
