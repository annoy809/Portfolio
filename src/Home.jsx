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


export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Portfolio />
        <Project />
        <Service />
        <About />
        <DesignServices />
        <WebDesignSection />
        <WhyChooseUs />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
