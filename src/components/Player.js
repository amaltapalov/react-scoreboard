import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";

// PureComponent is used to speed up performance
class Player extends PureComponent {
	// static is used for class based component
	static propTypes = {
		changeScore: PropTypes.func,
		removePlayer: PropTypes.func,
		isHighScore: PropTypes.bool,
		name: PropTypes.string.isRequired,
		score: PropTypes.number,
		index: PropTypes.number,
		id: PropTypes.number
	};

	render() {
		// Desctructuring props is used just below
		const {
			name,
			id,
			score,
			index,
			changeScore,
			removePlayer,
			isHighScore
		} = this.props;
		return (
			<div className="player">
				<span className="player-name">
					<button
						className="remove-player"
						onClick={() => removePlayer(id)}
					>
						✖
					</button>
					<Icon isHighScore={isHighScore} />
					{name}
				</span>
				<Counter
					score={score}
					changeScore={changeScore}
					index={index}
				/>
			</div>
		);
	}
}

export default Player;
