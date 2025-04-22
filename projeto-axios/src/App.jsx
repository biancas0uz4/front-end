import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { api } from './provider/apiInstance'
import { Card } from './Card'


function App() {

  useEffect(()=>{}, [])

  function adicionarUsuario(){
    api.post("/usuarios", {
      nome:"Bianca",
      dataNascimento:"24-02-2005",
      profissao:"Analista"
    })
  }

  function buscarUsuario(){
    api.get("/usuarios")
    .then(response=>{
      console.log(response.data)
    })
  }

  function atualizarUsuario(){
    api.patch("/usuarios/6098", {
      nome:"Fernando",
      dataNascimento:"23-05-2003",
      profissao:"Professor"
    })
  }

  function deletarUsuario(){
    api.delete("/usuarios/51da")
    .then(response=>{
      console.log("Delete funcionou")
    })
  }

  return (
    <>
      {/* <button onClick={adicionarUsuario}>Adicionar Usuario</button>
      <button onClick={buscarUsuario}>Buscar Usuario</button>
      <button onClick={atualizarUsuario}>Atualizar Usuario</button>
      <button onClick={deletarUsuario}>Deletar Usuario</button> */}

      <Card/>
    </>
  )
}

export default App
