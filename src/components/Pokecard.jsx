import React from 'react';
import './Pokecard.css';

const POKI_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
const Pokecard = ({ id, name, type, exp }) => {
  const paddedSrc = `${POKI_API}${id.toString().padStart(3, '0')}.png`;

  return (
    <div className="Pokecard">
      <h3>{name}</h3>
      <img src={paddedSrc} alt={name} />
      <span className="Pokecard-type">Type: {type}</span>
      <span className="Pokecard-exp">EXP: {exp}</span>
    </div>
  );
};

export default Pokecard;
