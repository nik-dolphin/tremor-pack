import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css/bundle";
import "./slider.css";

const Slider = () => {
  useEffect(() => {
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: "1",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 4,
        slideShadows: false,
      },
      keyboard: {
        enabled: true,
      },
      mousewheel: {
        thresholdDelta: 70,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
      },
    });

    // Clean up the Swiper instance when component unmounts
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="slider">
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"
              alt="Grilled steak with vegetables"
            />
            <div>
              <h2>Grilled steak with vegetables</h2>
            </div>
          </div>
          <div className="swiper-slide">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=481&q=80"
              alt="Pizza"
            />
            <div>
              <h2>Pizza</h2>
            </div>
          </div>
          <div className="swiper-slide">
            <img
              src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=410&q=80"
              alt="Sandwich with boiled egg"
            />
            <div>
              <h2>Sandwich with boiled egg</h2>
            </div>
          </div>
          <div className="swiper-slide">
            <img
              src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=449&q=80"
              alt="Toast bread with blueberry"
            />
            <div>
              <h2>Toast bread with blueberry</h2>
            </div>
          </div>
          <div className="swiper-slide">
            <img
              src="https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
              alt="Chicken burger"
            />
            <div>
              <h2>Chicken burger</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
