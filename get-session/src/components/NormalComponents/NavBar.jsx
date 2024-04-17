import React from "react";
import Button from "../SmallComponents/Button";

export default function NavBar({ navItems }) {
    return (
        <div className="flex justify-around items-center">
            <div>
                <img className="w-52 p-4" src="/logo.webp" alt="logo"/>
            </div>
            <div className="">
                <ul className="flex items-center font-bold">
                    {navItems.map((item, index) => (
                        <li key={index} className={index < navItems.length - 1 ? "mr-4" : ""}>
                            <button className="">
                                <span className=" mr-3 transition-colors duration-300 hover:text-green-500 hover:border-b-2 hover:border-green-500 transition duration-300 ">{item}</span>
                            </button>
                        </li>
                    ))}
                    <Button buttonData={"Download"}/>
                </ul>
            </div>
        </div>
    )
}
