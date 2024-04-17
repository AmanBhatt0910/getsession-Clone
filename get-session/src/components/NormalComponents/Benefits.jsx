import React from "react";
import BenefitsCard from "../SmallComponents/BenefitsCard";

const Benefits = (props)=> {
    return(
        <>
        <div className = "bg-green-500 p-10">
            <div className = "mx-12">
                <h1 className="text-xl font-semibold" >
                    <span className = "mr-2" style={{fontSize: "1.5em"}}>&mdash;&mdash;</span>
                    {props.heading}
                </h1>
                <BenefitsCard/>
            </div>
            
        </div>
        </>
    )
}

export default Benefits;