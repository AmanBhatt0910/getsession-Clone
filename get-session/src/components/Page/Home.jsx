import React from 'react'
import Hero from '../Hero'
import Overview from "../Overview";
import MainPageBottomSection from '../MainPageBottomSection';

const Home = () => {
  return (
    <>
        <Hero l1 = {"Send"} l2 = {"Messages,"} l3 = {"Not Metadata."}/>
        <Overview/>
        <MainPageBottomSection/>
    </>
  )
}

export default Home