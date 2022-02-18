import '../App.css';
import Card from './Card';
import React, { useState } from 'react';

function Gameboard (props) {

	return (
		<div className="gameboard">
            {props.cards.map((card) => { 
                return <Card name={card.name} img={card.img}/> 
            })}
		</div>
	);
}

export default Gameboard;
