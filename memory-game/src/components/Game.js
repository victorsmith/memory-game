import '../App.css';
import Header from './Header'
import Gameboard from './Gameboard';
import Footer from './Footer';
import { v4 as uuid } from 'uuid'


import React, { useState } from 'react';


function Game () {

	const [score, SetScore] = useState(0);
	const [highScore, SetHighScore] = useState(0);
    const [gameCards, SetCards] = useState([
		{ name: 'Ramen', img: 'ramen.jpg', id: uuid() },
		{ name: 'Sushi', img: 'sushi.jpg', id: uuid() },
		{ name: 'Burger', img: 'burger.jpg', id: uuid() },
		{ name: 'Steak', img: 'steak.jpg', id: uuid() },
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
