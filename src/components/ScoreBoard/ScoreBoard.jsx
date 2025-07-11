import { useState } from "react";
import "./ScoreBoard.css";

const players = [
	{ id: 1, name: "Mario", score: 10 },
	{ id: 2, name: "Lucía", score: 15 },
	{ id: 3, name: "David", score: 8 },
];

export const ScoreBoard = () => {
	const [statePlayers, setStatePlayers] = useState(players);

	const onChangeScore = (id, operation) => {
		setStatePlayers((prevPlayers) =>
			prevPlayers.map((player) => (player.id === id ? { ...player, score: player.score + operation } : player))
		);
	};

	return (
		<ul className="score-board-list">
			{statePlayers.map(({ id, name, score }) => (
				<li key={id}>
					<h4>{name}</h4>
					<span>score: {score}</span>
					<div className="score-board-btns">
						<button onClick={() => onChangeScore(id, +1)}>➕</button>
						<button onClick={() => onChangeScore(id, -1)}>➖</button>
					</div>
				</li>
			))}
		</ul>
	);
};
