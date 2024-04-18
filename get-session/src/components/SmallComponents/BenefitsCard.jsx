import React, { useState } from "react";

export default function BenefitsCard({ cardData }) {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="flex flex-wrap justify-around mx-20">
            {cardData.map((card, index) => (
                <div 
                    key={index}
                    className="w-1/3 p-2"
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="bg-green-500 my-14 px-14 relative overflow-hidden flex flex-col items-center">
                        <img
                            src={hoveredCard === card.id ? card.hoverImageUrl : card.imageUrl}
                            alt={card.heading}
                            className="w-full h-auto mb-4 transition duration-300"
                        />
                        <h2 className="text-3xl font-bold mb-2 text-center whitespace-nowrap overflow-hidden">{card.heading}</h2>
                        <p className="text-gray-600 text-center">{card.paragraph}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
