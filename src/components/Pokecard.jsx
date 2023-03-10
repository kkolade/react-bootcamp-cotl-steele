import React from 'react';
const POKI_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
const Pokecard = ({ id, name, type, exp }) => {
  const paddedSrc = `${POKI_API}${id.toString().padStart(3, '0')}.png`;
  console.log(paddedSrc);

  return (
    <div className="pokecard">
      <h3>{name}</h3>
      <img src={paddedSrc} alt={name} />
      <span>{type}</span>
      <span>{exp}</span>
    </div>
  );
};

export default Pokecard;
