import React from 'react'
import User from '/images/banner.jpg'; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../TinyCarts/TinyCarts.css';

const Vision = () => {
    
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
    <div>
      <section>
        <div className='head1'>
            
            <span className='Vision'>Our Vision</span>
        </div>

        
        <div className='banner'>
          

            <div className='banner-1'> 
                <div>
                    {/* React Slick Slider */}
                    <Slider {...settings} className="border-2">
                        <div>
                            <img src={User} alt="Image 1" style={{ width: '100%' }}  className='img-round'  />
                        </div>
                        <div>
                            <img src={User} alt="Image 2" style={{ width: '100%' }}   className='img-round'  />
                        </div>
                        <div>
                            <img src={User} alt="Image 3" style={{ width: '100%' }}   className='img-round' />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='slide para'>
              <p>We believe in creating a sustainable
platform where rural talent meets global
demand. Tinykarts is not just an ecommerce
site; it’s a movement to
empower communities and promote
responsible consumerism.</p>
            </div>
        </div>

      </section>
    </div>
  )
}

export default Vision;
