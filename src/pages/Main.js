import React, { useState, useEffect } from 'react';
import './Main.css';
import Slider from '../components/Slider';

function Main() {
    const [currentMessage, setCurrentMessage] = useState('Киберспорт в сердце Северной столицы!');
    const [index, setIndex] = useState(0);
    
    const messages = [
        'Киберспорт в сердце Северной столицы!', 
        'Где сердце Северной столицы бьется в ритме киберспорта!', 
        'Под звездами Петербурга рождаются киберлегенды!', 
        'Твой киберспортивный путь начинается с северной столицы!'
    ];
    
    useEffect(() => {
    const intervalId = setInterval(() => {
        const nextIndex = (index + 1) % messages.length;
        setIndex(nextIndex);
        setCurrentMessage(messages[nextIndex]);
    }, 5000);
    
    return () => clearInterval(intervalId);
    }, [index, messages]);
    
    return (
        <div className='mainContainer'>
            <Slider />
            <div className='swapText'>
                {currentMessage}
            </div>
        </div>
    );
};

export default Main;
