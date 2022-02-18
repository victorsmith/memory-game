import '../App.css';
import Card from './Card';
import React, { useState } from 'react';

function Gameboard (props) {

	return (
		<div className="gameboard">
            {props.cards.map((card) => { 
                return <Card cardData={card} key={card.id}/>; 
            })}
		</div>
	);
}

export default Gameboard;
