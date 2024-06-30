import React, { useEffect } from "react";

function Card() {

    useEffect(()=> {
        fetchData();
    },[])

    const fetchData = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        const data = await response.json();

        console.log(data);
    }

	return (
    <div className="card">
        <img src="" alt="poke-" />
    </div>);
}

export default Card;
