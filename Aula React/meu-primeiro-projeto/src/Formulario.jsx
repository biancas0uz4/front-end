import { useState } from "react";

export function Formulario(props) {
  const [disable, setDisable] = useState(false);

  const isDisable = disable || props.desabilitarTodos;

  return (
    <div> 
      <div>
        <label>
          Nome:
          <input disabled={isDisable} type="text" />
        </label>
      </div>
      <br />
      <div>
        <label>
          Profissião:
          <input disabled={isDisable} type="text" />
        </label>
      </div>
      <br />
      <div>
        <label>
          Comentario:
          <input disabled={isDisable} type="text" />
        </label>
      </div>
      <br />
      <button onClick={() => setDisable(!disable)} disabled={props.desabilitarTodos}>
        {isDisable ? "Habilitar formulario" : "Desabilitar formulario"}
      </button>
    </div>
  );
}
