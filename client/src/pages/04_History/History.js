import React, { Component } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";
import heroImages from "../../HeroImages.json";


class History extends Component { 
   
  render() {
    return(
    <div>
      <Header />
      <Nav />
      <Hero 
      id  = {heroImages[4].id}
      src  = {heroImages[4].image}
      alt = {heroImages[4].name}
      />
      <Wrapper /> 
      <QuickLinks />
      <Footer />
    </div>
    )
  }
  
}

export default History;
