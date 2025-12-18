import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader3D from "./Loader3D";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Service = lazy(() => import("./Services"));
const Contact = lazy(() => import("./Contact"));
const WhyChooseUs = lazy(() => import("./WhyChooseUs"));
const DesignServices = lazy(() => import("./DesignServices"));
const WebDesignSection = lazy(() => import("./WebDesignSection"));
const Project = lazy(() => import("./Project"));
const WWD = lazy(() => import("./WWD"));

import "./App.css";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000); // 👈 LOADING TIME (ms)

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {showLoader ? (
        <Loader3D />
      ) : (
        <Suspense fallback={<Loader3D />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/whychooseus" element={<WhyChooseUs />} />
            <Route path="/designservices" element={<DesignServices />} />
            <Route path="/webdesignsection" element={<WebDesignSection />} />
            <Route path="/project" element={<Project />} />
            <Route path="/wwd" element={<WWD />} />
          </Routes>
        </Suspense>
      )}
    </BrowserRouter>
  );
}

export default App;
