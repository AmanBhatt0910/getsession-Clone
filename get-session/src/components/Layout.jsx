import React, { Children } from 'react'
import AlertMessage from "./NormalComponents/AlertMessage";
import NavBar from "./NormalComponents/NavBar";
import Footer from './NormalComponents/Footer';

const Layout = ({children}) => {
    const alertMessage = "We are upgrading to the Session Network and migrating to Session Token.";
    const navItems = [
        {
        title:"GITHUB",
            link: "https://github.com/oxen-io",
            newTab: true,
        },
        {
            title:"BLOG",
            link: "/blog",
            newTab: false
        },
        {
            title:"TECHNICALS",
            link: "https://getsession.org/lightpaper/pdf",
            newTab: true
        },
        {
            title:"SUPPORT",
            link: "/support",
            newTab: false
        },
        {
            title:"DONATE",
            link: "https://donorbox.org/optf-donation",
            newTab: true
        }
    ];
  return (
    <>
        <AlertMessage paragraph = {alertMessage}/>
        <NavBar navItems = {navItems}/>
        {children}
        <Footer heading= "Join the movement to keep the internet private!" 
            paragraph = "Chat with like-minded individuals in the Session Community."
            heading3 = "LINKS"
            heading4 = "SUPPORT"
            paragraph2 = "Visit our Help Centre"
            paragraph3 = "Session is an end-to-end encrypted messenger that removes sensitive metadata collection, and is designed for people who want privacy and freedom from any forms of surveillance."
        />
    </>
  )
}

export default Layout