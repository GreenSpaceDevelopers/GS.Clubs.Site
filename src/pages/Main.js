import React, { useState, useEffect } from 'react';
import './Main.css';
import Slider from '../components/Slider';

const messages = [
    'Киберспорт в сердце Северной столицы!',
    'Где сердце Северной столицы бьется в ритме киберспорта!',
    'Под звездами Петербурга рождаются киберлегенды!',
    'Твой киберспортивный путь начинается с северной столицы!'
];

function Main() {
    const [currentMessage, setCurrentMessage] = useState('Киберспорт в сердце Северной столицы!');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextIndex = (index + 1) % messages.length;
            setIndex(nextIndex);
            setCurrentMessage(messages[nextIndex]);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [index]);
    
    
    return (
        <div className='mainContainer'>
            <Slider />
            <div className='swapText'>
                {currentMessage}
                <p>Итальянская 12Е</p>
            </div>
        </div>
    );
};

export default Main;
