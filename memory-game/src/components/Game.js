import '../App.css';
import Header from './Header';
import Gameboard from './Gameboard';
import Footer from './Footer';
import Card from './Card';

import { v4 as uuid } from 'uuid';

import React, { useEffect, useState } from 'react';

function Game() {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [gameCards, setCards] = useState([
		{ name: 'Ramen', img: 'ramen.jpg', id: uuid() },
		{ name: 'Sushi', img: 'sushi.jpg', id: uuid() },
		{ name: 'Burger', img: 'burger.jpg', id: uuid() },
		{ name: 'Steak', img: 'steak.jpg', id: uuid() },
	]);
	const [cardsPlayed, setCard] = useState([]);

	useEffect(() => {
		console.log(cardsPlayed);

		if (score > highScore) {
			setHighScore(score);
		}
	}, [score, highScore]);

	function pushCard(cardObject) {
		const isDuplicate = checkDuplicate(cardObject);

		if (isDuplicate) {
			resetCardsPlayed();
		} else {
			setScore((prevScore) => prevScore + 1);
			setCard(cardsPlayed.concat(cardObject));
		}
	}

	function resetCardsPlayed() {
		setCard([]);
        setScore(0);
	}

	function checkDuplicate(obj) {
		for (let i = 0; i < cardsPlayed.length; i++) {
			if (cardsPlayed[i].id === obj.id) {
				console.log('duplicate');
				return true;
			}
			return false;
		}

		return false;
	}

	return (
		<>
			<Header score={score} highScore={highScore} />
			{/* <Gameboard cards={gameCards}/> */}
			<div className="gameboard">
				{gameCards.map((card) => {
					return (
						<div onClick={() => pushCard(card)}>
							<Card cardData={card} key={card.id} />;
						</div>
					);
				})}
			</div>
			{/* <Footer/> */}
		</>
	);
}

export default Game;
