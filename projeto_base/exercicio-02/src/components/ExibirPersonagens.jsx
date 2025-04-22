import React, { useEffect, useState } from "react";

export function ExibirPersonagem() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setPersonagens(data.results))
      .catch((error) => console.error("Erro ao buscar personagens:", error));
  }, []);

  return (
    <div>
      <h1>Personagens</h1>
      <ul>
        {personagens.map((personagem) => (
          <li key={personagem.id}>
            <img src={personagem.image} alt={personagem.name} />
            <p>Nome: {personagem.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
