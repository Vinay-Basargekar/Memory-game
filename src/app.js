import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";

const App = () => {
	const [pokemonIds, setPokemonIds] = useState([1, 5, 25,38,380,381,392,393,394,395,405,378,2,4,6,9]);

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

		const shuffleCards = () => {
			setPokemonIds(shuffleArray(pokemonIds));
		};

		return (
			<div className="app">
				<div className="container">
					{pokemonIds.map((id) => (
						<Card key={id} pokemonId={id} shuffleCards={shuffleCards} />
					))}
				</div>
			</div>
		);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
