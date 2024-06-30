import React, { useEffect, useState } from "react";

function Card({ pokemonId, shuffleCards }) {
	const [pokeImg, setPokeImg] = useState("");

	useEffect(() => {
		fetchData();
	}, [pokemonId]);

	const fetchData = async () => {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemonId}`
		);
		const data = await response.json();

		const pokemon = data.sprites.other.dream_world.front_default;
		setPokeImg(pokemon);
	};

	return (
		<div className="card" onClick={shuffleCards}>
			<img src={pokeImg} alt={`Pokemon ${pokemonId}`} />
		</div>
	);
}

export default Card;
