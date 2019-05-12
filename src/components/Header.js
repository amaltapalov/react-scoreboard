import React from "react";
import PropTypes from "prop-types";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

function Header(props) {
	return (
		<header>
			<Stats players={props.players} />
			<h1>{props.title}</h1>
			<Stopwatch />
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

Header.propTypes = {
	title: PropTypes.string,
	players: PropTypes.arrayOf(PropTypes.object)
};

Header.defaultProps = {
	title: "Scoreboard"
};

export default Header;
