import React from "react";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import About from "./About";
import Service from "./Services";
import Contact from "./Contact";
import WhyChooseUs from "./WhyChooseUs";
import DesignServices from "./DesignServices";
import WebDesignSection from "./WebDesignSection";
import Project from "./Project";
import Snowfall from "./Snowfall";
import WWD from "./WWD";



export default function App() {
  return (
    <>
      <Snowfall />
      <Navbar />
      <main>
        <Portfolio />
        <Project />
        <Service />
        <About />
        <DesignServices />
        <WebDesignSection />
        <WWD />
        <WhyChooseUs />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
