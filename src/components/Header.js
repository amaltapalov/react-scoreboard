import React from "react";
import Stats from "./Stats";

function Header(props) {
	return (
		<header>
			<Stats players={props.players} />
			<h1>{props.title}</h1>
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
