import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import bgImage from "./images/bg.jpg";
import Winner from "./components/Winner";
import PlayAgainModal from "./components/PlayAgainModal";  

const App = () => {
	const [pokemonIds, setPokemonIds] = useState([
		1, 5, 25, 38, 380, 381, 392, 393, 395, 405, 378, 2,
	]);
	const [currentScore, setCurrentScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [clickedCards, setClickedCards] = useState([]);
	const [showWinner, setShowWinner] = useState(false);
	const [showPlayAgainModal, setShowPlayAgainModal] = useState(false);

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
			setShowPlayAgainModal(true);
			setCurrentScore(0);
			setClickedCards([]);
		} else {
			setClickedCards([...clickedCards, id]);
			setCurrentScore((prevScore) => {
				const newScore = prevScore + 1;
				if (newScore > bestScore) {
					setBestScore(newScore);
					if (newScore === 12) {
						setShowWinner(true);
					}
				}
				return newScore;
			});
		}
		setPokemonIds(shuffleArray(pokemonIds));
	};

	

	return (
		<div>
			<img src={bgImage} alt="background" className="bg-cover absolute -z-10" />
			<div className="flex flex-col justify-between items-center">
				<img
					className="w-[36rem] m-4"
					src="https://greenarron.github.io/pikapuzzle/pikapuzzle.svg"
					alt="pokemon-logo"
				/>
				<div className="font-mono flex text-[2rem] bg-orange-300 opacity-[80%]">
					<p className="p-3">Current Score: {currentScore}</p>
					<p className="p-3">Best Score: {bestScore}</p>
				</div>
			</div>
			<div className="flex flex-wrap gap-4 justify-center p-5 w-4/5 mx-auto mt-12">
				{pokemonIds.map((id) => (
					<Card key={id} pokemonId={id} shuffleCards={() => shuffleCards(id)} />
				))}
				{showWinner && (
					<Winner onClose={() => setShowWinner(false)} /> 
				)}
				{showPlayAgainModal && (
					<PlayAgainModal onClose={() => setShowPlayAgainModal(false)} />
				)}
			</div>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
