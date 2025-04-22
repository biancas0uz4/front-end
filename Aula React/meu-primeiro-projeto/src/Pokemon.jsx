import { useEffect, useState } from "react";

export function Pokemon() {
  const [informacoes, setInformacoes] = useState({
    nome:"",
    experiencia: 0,
    habilidades: []
  });

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((resposta) => resposta.json())
      .then((json) =>
        setInformacoes({
          nome: json.name,
          experiencia: json.base_experience,
          habilidades: json.abilities
        })
      )
      .catch((error) => console.log("DEU RUIM"));
  });

  return (
    <div>
      <h2>{informacoes.nome}</h2>
      <p>Experiencia: {informacoes.experiencia}</p> 
      {informacoes.habilidades.map((elemento)=>(
        <div>
        <div>{elemento.ability.name}</div>
        <div>{elemento.ability.url}</div>
        </div>
      ))}
    </div>
  )
}


