import React, { useState } from 'react';
import { SliderImages } from './SliderImages';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }

    return (
        <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        <div className="home-items">
        <h1>Fresh Organic Food</h1>
          <h2>We enable people to enjoy locally grown eco-friendly and healthy<br/>
foods that are reasonably priced and conveniently delivered.</h2>
       <div className="btns">
        <NavLink to="/" className="btn1">SHOP NOW</NavLink>
        <NavLink to="/" className="btn2">KNOW MORE</NavLink>
        </div>
        </div>
        {SliderImages.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt='food' className='images' />
              )}
            </div>
          );
        })}
      </section>
    )
}

export default Slider
