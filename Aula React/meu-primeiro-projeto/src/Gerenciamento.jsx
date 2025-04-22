import { useState } from "react";
import { Formulario } from "./Formulario";

export function Gerenciamento() {

  const[desabilitarTodos, setDesabilitarTodos] = useState(false);

  return (
    <div>
      <button onClick={()=>setDesabilitarTodos(!desabilitarTodos)}>{desabilitarTodos ? "Habilitar Todos os Formulários" : "Desabilitar Todos os Formularios"}</button>
      <Formulario desabilitarTodos={desabilitarTodos}/>

      <Formulario desabilitarTodos={desabilitarTodos}/>

      <Formulario desabilitarTodos={desabilitarTodos}/>
    </div>
  );
}
