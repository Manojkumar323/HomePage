import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import User from '/images/banner.jpg'; // Example image, replace with your actual path.

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Change image every 5 seconds (5000ms)
  };

  return (
    <div className="w-full">
      {/* React Slick Slider */}
      <Slider {...settings} className="border">
        <div className="w-full">
          <img
            src={User}
            alt="Image 1"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full">
          <img
            src={User}
            alt="Image 2"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full">
          <img
            src={User}
            alt="Image 3"
            className="w-full h-auto object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Testimonials;
