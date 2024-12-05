import React, { useEffect } from 'react';
import './Product.css';
import img from '/images/hand.jpg';
import img2 from '/images/organic3.jpg';
import img3 from '/images/Traditional.jpg';
import img4 from '/images/box2.jpeg';
import Aos from "aos"
import 'aos/dist/aos.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';



export const Product = () => {

  useEffect(()=>{
Aos.init()
  },[]) 
  return (
    <div>
      <section>
    
        <div className='head1'>
            <h1>Our Product Categories </h1>
            <span>Explore a wide range of locally sourced products</span>
        </div>
        <div className='All-box'>
          <div data-aos="fade-down-left" data-aos-delay="100" data-aos-duration="1000"
            data-aos-easing="ease">
          <div className='box bg-image hover-zoom'><img src={img}alt="" /></div>
          <span className='box-label'>Handcrafted Home Décor</span>
          </div>
         
<div data-aos="fade-down-left" data-aos-delay="300" data-aos-duration="1000" data-aos-easing="ease">
<div className='box'><img src={img2}alt="" /></div>
<span className='box-label'>Organic and Sustainable Goods</span>
</div>
         
       
<div data-aos="fade-down-left" data-aos-delay="300" data-aos-duration="1000"
            data-aos-easing="ease">
<div className='box'><img src={img3}alt="" /></div>
<span className='box-label'>Traditional Wear and Accessories</span>
</div>
       
         
<div data-aos="fade-down-left" data-aos-delay="300" data-aos-duration="1000"
            data-aos-easing="ease">
<div className='box'><img src={img4}alt="" /></div>
<span className='box-label'>Unique Gifts and Souvenirs</span>
</div>
         
        </div>
      </section>
    </div>
  );
};
