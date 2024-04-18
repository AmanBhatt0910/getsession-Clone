import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";
import FooterCardComponent from "../SmallComponents/FooterCardComponent";

export default function Footer(props) {
    const footerCardData = [
        {
            heading: "ABOUT",
            nav1: "Whitepaper",
            nav2: "Privacy Policy",
            nav3: "Terms of Service",
            nav4: "Blog",
            nav5: "FAQ"
        },
        {
            heading: "ABOUTCOMPANY",
            nav1: "OPTF",
            nav2: "Oxen",
            nav3: "Lokinet",
            nav4: "Media Kit",
            nav5: "Transparency Report"
        }
    ];

    return (
        <>
            <div style={{ backgroundColor: "#333132" }} className="text-white h-[70vh] flex">
                <div className="w-[50%] flex flex-col text-center justify-center">
                    <h1 className="text-xl font-semibold">{props.heading}</h1>
                    <p>{props.paragraph}</p>
                </div>
                <div className="flex flex-col w-[50%]">
                    <div className="h-[50%] border-[1.5px] border-green-500 border-dotted flex">
                        <FooterCardComponent footerCardData={footerCardData} />
                        <div className="flex flex-col">
                            <div className="flex text-left pl-10 py-3 px-4 h-[50%] flex-col">
                                <h2 className="font-bold">{props.heading3}</h2>
                                <div className="flex my-5">
                                    <FontAwesomeIcon icon={faTwitter} className="mx-2" />
                                    <FontAwesomeIcon icon={faInstagram} className="mx-2" />
                                    <FontAwesomeIcon icon={faYoutube} className="mx-2" />
                                    <FontAwesomeIcon icon={faGithub} className="mx-2" />
                                </div>
                            </div>
                            <div className="flex text-left pl-10 py-3 px-4 h-[50%] flex-col">
                                <h2 className="font-bold">{props.heading4}</h2> 
                                <button className="pt-2 text-green-500 hover:text-white transform duration-500">
                                    {props.paragraph2}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="h-[50%] border-[1.5px] border-green-500  border-dotted">
                        <div className = "m-8">
                            <img src="/logo-white.png" alt="" />
                            <p className = "my-2">
                                {props.paragraph3}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
