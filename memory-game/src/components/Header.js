const Header = (props) => {
	const style = {
		height: 'fit-content',
		width: '100%',
		backgroundColor: 'grey',
		display: 'flex',
        flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	};

	return (
		<header style={style}>
			<h1>Memory Game</h1>

            <div>
			    <p>High Score: {props.highScore}</p>
			    <p>Score: {props.score}</p>
            </div>

		</header>
	);
};

export default Header;
