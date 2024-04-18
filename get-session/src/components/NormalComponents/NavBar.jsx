import React from "react";
import Button from "../SmallComponents/Button";
import { Link } from "react-router-dom";

export default function NavBar({ navItems }) {
    return (
        <div className="flex justify-around items-center">
            <div>
                <a href="/">
                    <img className="w-52 p-4" src="/logo.webp" alt="logo"/>
                </a>
            </div>
            <div className="">
                <ul className="flex items-center font-bold">
                    {navItems.map((item, index) => (
                        <li key={index} className={index < navItems.length - 1 ? "mr-4" : ""}>
                            <Link to={item.link} target={(item.newTab ? "_blank" : "")} rel="noopener noreferrer">
                                <span className="mr-3 transition-colors duration-300 hover:text-green-500 hover:border-b-2 hover:border-green-500 ">{item.title}</span>
                            </Link>
                        </li>
                    ))}
                    <Button buttonData={"Download"}/>
                </ul>
            </div>
        </div>
    )
}
