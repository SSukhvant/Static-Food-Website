import React from 'react'
import Slider from './components/Slider';
import { SliderImages } from './components/SliderImages';

const Home = () => {
    return (
        <>
          <Slider slides={SliderImages}/>
        </>
    )
}

export default Home;
