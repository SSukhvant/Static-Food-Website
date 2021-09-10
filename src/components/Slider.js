import React, { useState } from 'react';
import { SliderImages } from './SliderImages';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

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
        <a href="#" className="btn1">SHOP NOW</a>
        <a href="#" className="btn2">KNOW MORE</a>
        </div>
        </div>
        {SliderImages.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt='travel image' className='image' />
              )}
            </div>
          );
        })}
      </section>
    )
}

export default Slider
