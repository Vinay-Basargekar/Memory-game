import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";

const App = () => {
	const [pokemonIds, setPokemonIds] = useState([
		1, 5, 25, 38, 380, 381, 392, 393, 395, 405, 378, 2,
	]);
	const [currentScore, setCurrentScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [clickedCards, setClickedCards] = useState([]);

	const shuffleArray = (array) => {
		let shuffledArray = array.slice();
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [
				shuffledArray[j],
				shuffledArray[i],
			];
		}
		return shuffledArray;
	};

	const shuffleCards = (id) => {
		if (clickedCards.includes(id)) {
			setCurrentScore(0);
			setClickedCards([]);
		} else {
			setClickedCards([...clickedCards, id]);
			setCurrentScore((prevScore) => {
				const newScore = prevScore + 1;
				if (newScore > bestScore) {
					setBestScore(newScore);
				}
				return newScore;
			});
		}
		setPokemonIds(shuffleArray(pokemonIds));
	};

	return (
		<div className="app">
			<div className="header">
				{/* <h1>Memory Game</h1> */}
				<img
					src="https://greenarron.github.io/pikapuzzle/pikapuzzle.svg"
					alt="pokemon-logo" id="logo"
				/>
				<div className="scores">
					<p>Current Score: {currentScore}</p>
					<p>Best Score: {bestScore}</p>
				</div>
			</div>
			<div className="container">
				{pokemonIds.map((id) => (
					<Card key={id} pokemonId={id} shuffleCards={() => shuffleCards(id)} />
				))}
			</div>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
