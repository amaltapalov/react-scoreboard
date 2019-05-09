import React from "react";

function Header(props) {
	return (
		<header>
			<h1>{props.title}</h1>
			<span className="stats">Players: {props.totalPlayers}</span>
		</header>
	);
}

// Optional Syntax as arrow function:
// const Header = () => (
// 	<header>
// 		<h1>Scoreboard</h1>
// 		<span>Players: 1</span>
// 	</header>
// );

export default Header;
