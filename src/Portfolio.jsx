import React, { useEffect, useRef, useState } from "react";
import "./Portfolio.css";
import "./Slider.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";

const Portfolio = () => {
  // 1. State for Form Data


  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const backRef = useRef(null);

  // Contact form submission
  

  // Slider logic
  useEffect(() => {
  const carousel = carouselRef.current;
  const listHTML = listRef.current;
  const nextButton = nextRef.current;
  const prevButton = prevRef.current;
  const backButton = backRef.current;
  const seeMoreButtons = carousel.querySelectorAll(".seeMore");

  if (!carousel) return;

  let unAcceptClick;
  let autoSlide;

  const showSlider = (type) => {
    nextButton.style.pointerEvents = "none";
    prevButton.style.pointerEvents = "none";

    carousel.classList.remove("next", "prev");
    const items = listHTML.querySelectorAll(".item");

    if (type === "next") {
      listHTML.appendChild(items[0]);
      carousel.classList.add("next");
    } else {
      listHTML.prepend(items[items.length - 1]);
      carousel.classList.add("prev");
    }

    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() => {
      nextButton.style.pointerEvents = "auto";
      prevButton.style.pointerEvents = "auto";
    }, 2000);
  };

  // Click handlers
  nextButton.onclick = () => showSlider("next");
  prevButton.onclick = () => showSlider("prev");
  seeMoreButtons.forEach((btn) => btn.onclick = () => carousel.classList.add("showDetail"));
  backButton.onclick = () => carousel.classList.remove("showDetail");

  // ----------- AUTO SLIDE -----------
  autoSlide = setInterval(() => {
    showSlider("next");
  }, 3000); // 5 seconds per slide

  // Cleanup
  return () => clearInterval(autoSlide);
}, []);


  // Projects array (unchanged)


  return (
    <div>
      {/* ---------------- HERO WITH SLIDER ---------------- */}
 <div className="carousel" ref={carouselRef}>
  <div className="list" ref={listRef}>

    {/* ITEM 2 */}
<div className="item">
  <img src={img2} alt="Corporate Website" />
  <div className="introduce">
    <div className="title">Corporate Website</div>
    <div className="topic">KGN Centre</div>
    <div className="des">
      A professional corporate website with modern UI, responsive layout, and smooth animations to showcase company services.
    </div>
  </div>
  <div className="detail">
    <div className="title">KGN Centre Full Details</div>
    <div className="des">
      Built with HTML, CSS, and React. Features a responsive design, interactive sections, and optimized performance for desktop and mobile devices.
    </div>
  </div>
</div>
    {/* ITEM 1 */}
    <div className="item">
      <img src={img1} alt="E-commerce Website" />
      <div className="introduce">
        <div className="title">E-Commerce Platform</div>
        <div className="topic">ShopEase</div>
        <div className="des">
          A modern e-commerce website with responsive design, seamless checkout, and dynamic product listings.
        </div>
      </div>
      <div className="detail">
        <div className="title">ShopEase Full Details</div>
        <div className="des">
          Built with React and Node.js, featuring product filtering, payment integration, and admin dashboard.
        </div>
      </div>
    </div>

    {/* ITEM 2 */}
    <div className="item">
      <img src={img4} alt="E-commerce Website" />
      <div className="introduce">
        <div className="title">E-Commerce Platform</div>
        <div className="topic">ShopEase</div>
        <div className="des">
          A modern e-commerce website with responsive design, seamless checkout, and dynamic product listings.
        </div>
      </div>
      <div className="detail">
        <div className="title">ShopEase Full Details</div>
        <div className="des">
          Built with React and Node.js, featuring product filtering, payment integration, and admin dashboard.
        </div>
      </div>
    </div>

    {/* ITEM 3 */}
    <div className="item">
      <img src={img3} alt="Corporate Website" />
      <div className="introduce">
        <div className="title">Corporate Website</div>
        <div className="topic">KGN Centre</div>
        <div className="des">
          Professional corporate website showcasing services, portfolio, and client testimonials with clean UI.
        </div>
      </div>
      <div className="detail">
        <div className="title">KGN Centre Full Details</div>
        <div className="des">
          Responsive design with optimized performance, CMS integration, and contact form functionality.
        </div>
      </div>
    </div>

    {/* ITEM 3 */}
    {/* ITEM 2 */}
    <div className="item">
      <img src={img5} alt="E-commerce Website" />
      <div className="introduce">
        <div className="title">E-Commerce Platform</div>
        <div className="topic">ShopEase</div>
        <div className="des">
          A modern e-commerce website with responsive design, seamless checkout, and dynamic product listings.
        </div>
      </div>
      <div className="detail">
        <div className="title">ShopEase Full Details</div>
        <div className="des">
          Built with React and Node.js, featuring product filtering, payment integration, and admin dashboard.
        </div>
      </div>
    </div>


  </div>

  {/* Slider Controls */}
  <div className="arrows">
    <button id="prev" ref={prevRef}>&lt;</button>
    <button id="next" ref={nextRef}>&gt;</button>
  </div>
  <button id="back" ref={backRef}>BACK</button>
</div>

           </div>
  );
};

export default Portfolio;
