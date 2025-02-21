import React, { useState } from "react";
 import Style from "../style/CadastrarCurso.module";

const CadastrarCurso = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setsetDescicao] = useState("");
  const [number, setNumber] = useState("");


  return (
    <div>
      <form onSubmit={handleCadastrar()}>
        <input
        className={}
          type="text"
          placeholder="Digite o nome do curso"
          value={titulo}
          onChange={(e) => {
            setTitulo(e.target.value);
          }}
        />
        <input type="text" placeholder="Digite a descriçaõ do curso" />
        <input type="number" placeholder="Digite o numero de vagas" />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default CadastrarCurso;
