import React from "react";
import BenefitsCard from "../SmallComponents/BenefitsCard";

const Benefits = (props) => {
    const cardData = [
        {
            id: "1",
            imageUrl: "/no-phone.svg",
            hoverImageUrl: "/no-phone-redacted.svg",
            heading: "No Phone Numbers",
            paragraph: "Session accounts are completely anonymous."
        },
        {
            id: "2",
            imageUrl: "/no-data.svg",
            hoverImageUrl: "/no-data-redacted.svg",
            heading: "No Data Breaches",
            paragraph: "Session doesn’t collect data,"
        },
        {
            id: "3",
            imageUrl: "/no-footprint.svg",
            hoverImageUrl: "/no-footprint-redacted.svg",
            heading: "No FootPrints",
            paragraph: "Send messages through our onion"
        },
        {
            id: "4",
            imageUrl: "/open-source.svg",
            hoverImageUrl: "/open-source-redacted.svg",
            heading: "Open Source",
            paragraph: "Session’s code has nothing to hide. Anyone can"
        },
        {
            id: "5",
            imageUrl: "/censorship-resistant.svg",
            hoverImageUrl: "/censorship-resistant-redacted.svg",
            heading: "Censorship Resistance",
            paragraph: "With no central point of failure,"
        }
    ];

    return (
        <>
            <div className="bg-green-500 p-10">
                <div className="mx-12">
                    <h1 className="text-xl font-semibold">
                        <span className="mr-2">
                        &mdash;&mdash;
                        </span>
                        {props.heading}
                    </h1>
                </div>
                <BenefitsCard cardData={cardData} />
            </div>

        </>
    );
}

export default Benefits;
