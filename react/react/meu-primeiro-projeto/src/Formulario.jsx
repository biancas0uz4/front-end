import { useState } from "react";

export function Formulario() {
  const [disable, setDisable] = useState(false);

  return (
    <div>
      <label>
        Nome:
        <input disabled={disable} type="text" />
      </label>
      <label>
        Profissião:
        <input disabled={disable} type="text" />
      </label>
      <label>
        Comentario:
        <input disabled={disable} type="text" />
      </label>

      <button onClick={() => setDisable(!disable)}>
        {disable ? "Habilitar formulario" : "Desabilitar formulario"}
      </button>
    </div>
  );
}
