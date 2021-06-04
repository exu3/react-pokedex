import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function About() {
  const { slug } = useParams();
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        console.log(data);
      });
  }, [slug]);
  return (
    <div>
      {pokemon && (
        <div className="w-3/12">
          <h3>{pokemon.name}</h3>
          <div className="flex justify-center">
            <img
              className="w-48"
              src={pokemon.sprites["front_shiny"]}
              alt="Pokemon"
            />
            <img
              className="w-48"
              src={pokemon.sprites["back_shiny"]}
              alt="Pokemon"
            />
          </div>
        </div>
      )}
    </div>
  );
}
