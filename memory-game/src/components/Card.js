import '../styles/Card.css'

const Card = (props) => {

	const cardData = props.cardData;
	const imgSrc = `images/${cardData.img}`

    return (
		<div className="card">
			<h3>{cardData.name}</h3>
			<img src={process.env.PUBLIC_URL + imgSrc} alt="pic" />
		</div>
	);
}

export default Card;