import React from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";


const Home =() => (
    <div>
        <Header />
        <Nav />
        <Hero 
        {...Hero}
        key = {Hero.id}
        />   
        <QuickLinks />
        <Footer />
    </div>
)

export default Home;