// Blog.js
import React from "react";
import MainContainerBlog from "../MainContainerBlog";
import SmallContainerBlog from "../SmallComponents/SmallContainerBlog";

export default function Blog() {
    const cardsData = [
        {
            imageUrl: "https://getsession.org/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ftl6gyyqswoaz%2F2sdLz8XFxQ1Nx7VFdiLXY7%2F95cbfe97d31cac2dd47db5dfa28fc3ca%2FArtboard_1__2_.png%3Fw%3D400&w=1920&q=75",
            heading: "Upgrading from Oxen Network to Session Network",
            paragraph: "The Session Network will be a new decentralised network with the purpose of supporting and amplifying Session.",
        },
        {
            imageUrl: "https://getsession.org/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ftl6gyyqswoaz%2F4Ad3GQZL8FsztbIYdVLwsk%2F77506422c612c2be49d5c3705f207f72%2Fsurveilance_generation_3.png%3Fw%3D400&w=1920&q=75",
            heading: "Little Brother: How Digital Technology Normalises Surveillance For Young People",
            paragraph: "Are the kids alright? Typically, young people are anti-establishment and pro-sticking it to the man. But some worrying new data suggests that todays young people may have been conditioned through technology to support invasive surveillance.",
        },
        {
            imageUrl: "https://getsession.org/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ftl6gyyqswoaz%2F3lL05Pv5nZ2uYqxV2lh6YC%2Fc67bbc52ab80f6b37fc5ce4829e18486%2Fupdate_blog.png.jpeg%3Fw%3D400&w=1920&q=75",
            heading: "Session Release Roundup #17: The long awaited syncing update",
            paragraph: "After one of the most challenging periods of development in Session history, we present to you: syncing that just works!",
        },
        {
            imageUrl: "https://getsession.org/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ftl6gyyqswoaz%2F5YgUnYpNS0JjTtTuvGQb8G%2F319354bd9ad52e37c4ea36d35dc11cd0%2Fwpfd.png%3Fw%3D400&w=1920&q=75",
            heading: "Protecting a Free and Secure Internet: World Press Freedom Day",
            paragraph: "Strong encryption saves lives. Journalists rely on encrypted communication tools every day to protect their safety and the safety of their sources. To promote World Press Freedom Day, we have joined our allies in privacy tech to demand the protection of secure communication and the protection of a free press.",
        },
        {
            imageUrl: "https://getsession.org/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ftl6gyyqswoaz%2F2RguY8tY63HHpraVDkFVeg%2F407ff624ad7566f4c7ee8ca2975a7c30%2Fbeta.png%3Fw%3D400&w=1920&q=75",
            heading: "Session Beta: Your all access pass.",
            paragraph: "A step-by-step guide for enabling Session Beta across any device, and why you should consider opting in today.",
        },
        {
            imageUrl: "https://getsession.org/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ftl6gyyqswoaz%2F3sptdoRS6gAtk4cHTTODoA%2F2303c45780a947af438872379bd00454%2FAsset_1.png%3Fw%3D400&w=1920&q=75",
            heading: "Encrypted messaging apps urge for changes to the UK Online Safety Bill",
            paragraph: "An open letter from encrypted messaging apps urging the UK Government to address the risks the Online Safety Bill poses to everyone's privacy and safety.",
        },
    ];
    return (
        <>
            <MainContainerBlog heading = "Disappearing Messages v2: a new way to protect your privacy with Session."
            paragraph = "Our latest release brings with it a major upgrade for disappearing messages, improving existing functionality and adding all new features."/>
            <h2 className = "text-xl font-semibold mx-12 my-10 text-green-600">
                <span className="pr-2">&mdash;&mdash;</span>More posts
            </h2>
            <SmallContainerBlog  cardData = {cardsData}/>
        </>
    );
}
