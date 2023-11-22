import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';
import club1 from '../images/club1.jpg';
import club2 from '../images/club2.jpg';
import club3 from '../images/club3.jpg';
import club4 from '../images/club4.jpg';
import club5 from '../images/club5.jpg';
import club6 from '../images/club6.jpg';

function Slider() {
    return (
        <>
            <Carousel className='carusel'>
                
                <Carousel.Item>
                    
                    <img src={club1} alt='First Slide' />
                    
                </Carousel.Item>
                
                <Carousel.Item>
                    
                    <img src={club2} style={{ objectFit: "contain", width: "100%", height: "100%" }} alt='First Slide' />
                    
                </Carousel.Item>
                
                <Carousel.Item>
                    
                    <img src={club3} style={{ objectFit: "contain", width: "100%", height: "100%" }} alt='First Slide' />
                    
                </Carousel.Item>
                
                <Carousel.Item>
                    
                    <img src={club4} style={{ objectFit: "contain", width: "100%", height: "100%" }} alt='First Slide' />
                    
                </Carousel.Item>
                
                <Carousel.Item>
                    
                    <img src={club5} style={{ objectFit: "contain", width: "100%", height: "100%" }} alt='First Slide' />
                    
                </Carousel.Item>
                
                <Carousel.Item>
                    
                    <img src={club6} style={{ objectFit: "contain", width: "100%", height: "100%" }} alt='First Slide' />
                    
                </Carousel.Item>
                
            </Carousel>
        </>
    );
}

export default Slider;
