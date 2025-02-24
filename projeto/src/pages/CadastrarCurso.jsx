import React, { useState } from "react";
import Style from "../style/CadastrarCurso.module.css";
import { useNavigate } from "react-router-dom";

const CadastrarCurso = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescicao] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const Url = "http://localhost:5000/Cursos";

  const handleCadastro = async (e) => {
    e.preventDefault();

    if (!titulo || !descricao || !number)
      alert("todos os campos tem que ser preenchidos");

    try {
      const novoUsuario = { titulo, descricao, number };
      const req = await fetch(Url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoUsuario),
      });
      if (req.ok) {
        alert("Cadastro efetuado com sucesso");
        navigate("/home");
      }
    } catch (error) {
      console.error("Erro ao cadastrar curso:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleCadastro}>
        <input
          className={Style.bv}
          type="text"
          placeholder="Digite o nome do curso"
          value={titulo}
          onChange={(e) => {
            setTitulo(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Digite a descriçaõ do curso"
          value={descricao}
          onChange={(e) => {
            setDescicao(e.target.value);
          }}
        />

        <input
          type="number"
          placeholder="Digite o numero de vagas"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CadastrarCurso;
