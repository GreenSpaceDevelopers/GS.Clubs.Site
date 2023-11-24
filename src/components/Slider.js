import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import club1 from '../images/club1.jpg';
import club2 from '../images/club2.jpg';
import club3 from '../images/club3.jpg';
import club4 from '../images/club4.jpg';
import club5 from '../images/club5.jpg';
import club6 from '../images/club6.jpg';

function Slider() {
    return (
        <>
            <Carousel className='carusel' interval={900}>
                
                <Carousel.Item>
                    
                    <img src={club1} style={{ objectFit: "contain", width: "100%", height: "100%" }} alt='1'/>
                    
                </Carousel.Item>
                
                <Carousel.Item>
                    
                    <img src={club2} style={{ objectFit: "contain", width: "100%", height: "100%" }} alt='2' />
                    
                </Carousel.Item>
                
                <Carousel.Item>
                    
                    <img src={club3} style={{ objectFit: "contain", width: "100%", height: "100%" }} alt='3' />
                    
                </Carousel.Item>
                
                <Carousel.Item>
                    
                    <img src={club4} style={{ objectFit: "contain", width: "100%", height: "100%" }} alt='4' />
                    
                </Carousel.Item>
                
                <Carousel.Item>
                    
                    <img src={club5} style={{ objectFit: "contain", width: "100%", height: "100%" }} alt='5' />
                    
                </Carousel.Item>
                
                <Carousel.Item>
                    
                    <img src={club6} style={{ objectFit: "contain", width: "100%", height: "100%" }} alt='6' />
                    
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Slider;
