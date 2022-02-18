import '../App.css';
import Header from './Header'
import Gameboard from './Gameboard';
import Footer from './Footer';

import React, { useState } from 'react';


function Game () {

	const [score, SetScore] = useState(0);
	const [highScore, SetHighScore] = useState(0);
    const [gameCards, SetCards] = useState([
        { name: 'Ramen', img: 'ramen.jpg' },
        { name: 'Sushi', img: 'sushi.jpg' },
        { name: 'Burger', img: 'burger.jpg' },
        { name: 'Steak', img: 'steak.jpg' },
    ]);
	

    return (
        <>
            <Header score={score} highScore={highScore}/>
            <Gameboard cards={gameCards}/>
            {/* <Footer/> */}
        </>
	);
}

export default Game;
