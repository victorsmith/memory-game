import '../styles/Card.css'

const Card = (props) => {

	const cardData = props.cardData;
	console.log(cardData);

	const imgSrc = `images/${cardData.img}`
	console.log(imgSrc);

    return (
		<div className="card">
			<h1>{cardData.id}</h1>
			<h3>{cardData.name}</h3>
			<img src={process.env.PUBLIC_URL + imgSrc} alt="pic" />
		</div>
	);
}

export default Card;