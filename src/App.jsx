import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Services";
import Contact from "./Contact";
import WhyChooseUs from "./WhyChooseUs";
import DesignServices from "./DesignServices";
import WebDesignSection from "./WebDesignSection";
import Project from "./Project";

import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/whychooseus" element={<WhyChooseUs />} />
        <Route path="/designservices" element={<DesignServices />} />
        <Route path="/webdesignsection" element={<WebDesignSection />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
