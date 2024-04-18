import React from "react";

export default function FeaturesCard({ cardData }) {
    return (
        <div className="flex flex-col justify-around my-36 w-[45%] ml-10">
            {cardData.map((card, id) => (
                <div key={id}>
                    <h2 className = "font-bold text-4xl my-2">{card.heading}</h2>
                    <p className = "text-gray-500 my-2">{card.paragraph}</p>
                </div>
            ))}
        </div>
    );
}
