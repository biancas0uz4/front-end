import React, {useState} from "react";

export function ListaTelefonica() {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [contatos, setContatos] = useState([]);

  function Contato({ id, nome, sobrenome, telefone, excluir }) {
    return (
      <li>
        Nome: {nome} {sobrenome} - Telefone: {telefone}
        <button onClick={() => excluir(id)}>Excluir</button>
      </li>
    );
  }
  
 
    const cadastrar = () => {
      if (!nome || !sobrenome || !telefone) 
        return alert("Preencha todos os campos!");
  
      const novoContato = {
        id: Date.now(), 
        nome,
        sobrenome,
        telefone,
      };
  
      setContatos([...contatos, novoContato]); // os ... estão copiando 
  
      setNome("");
      setSobrenome("");
      setTelefone("");
    };
  
    const excluir = (id) => {
      const novaLista = contatos.filter((contato) => contato.id !== id);
      setContatos(novaLista);
    };
  
    return (
      <div>
        <h1>Lista Telefônica</h1>
  
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Sobrenome"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
  
        <button onClick={cadastrar}>Cadastrar</button>
  
        <ul>
          {contatos.map((contato) => ( // faz renderizar na página
            <Contato
              key={contato.id}
              id={contato.id}
              nome={contato.nome}
              sobrenome={contato.sobrenome}
              telefone={contato.telefone}
              excluir={excluir}
            />
          ))}
        </ul>
      </div>
    );
  }