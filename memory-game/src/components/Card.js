import '../styles/Card.css'

const Card = (props) => {
	
	// console.log(pics);
	const imgSrc = `images/${props.img}`
	console.log(imgSrc);

    return (
		<div className="card">
			<h3>{props.name}</h3>
			<img src={process.env.PUBLIC_URL + imgSrc} alt="pic" />
		</div>
	);
}

export default Card;