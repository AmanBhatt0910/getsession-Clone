import React from "react";

export default function FooterCardComponent({footerCardData}) {
    const style = " text-left text-sm text-l text-green-500 my-1 transition-colors duration-300 hover:text-white";
    return(
        <>
            <div className = "flex text-left pl-10">
                {footerCardData.map((card, index) => (
                    <div className="py-3 px-4">
                        <h1 className = "font-bold">{card.heading}</h1>
                        <div key={index} className = "flex flex-col">
                            <button className={style}>{card.nav1}</button>
                            <button className={style}>{card.nav2}</button>
                            <button className={style}>{card.nav3}</button>
                            <button className={style}>{card.nav4}</button>
                            <button className={style}>{card.nav5}</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}