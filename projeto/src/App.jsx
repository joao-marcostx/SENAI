import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import CardCurso from './Componentes/CardCurso';
// import Navbarr from './Componentes/Navbarr'
import CadastrarCurso from "./pages/CadastrarCurso";

import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/CadastararCurso" element={<CadastrarCurso />} />
        {/* <Route path="/Animais/editar/:id" element={<EditarProduto/>} />
      <Route path="/produto/cadastrar" element={<CadastroAnimais/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
