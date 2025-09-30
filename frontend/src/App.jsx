// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/Main";
import Home from "./pages/Home";
import Veiculos from "./pages/Veiculos";
import Anuncio from "./pages/Anuncio";
import Cadastro from "./pages/CadastroUsuario/Cadastro";
import Entrar from "./pages/CadastroUsuario/Entrar";
import Login from "./pages/Admin/Login";
import Page404 from "./pages/Page404";
import CadastroVeiculo from "./pages/CadastroVeiculo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/veiculos/lancha" element={<Veiculos tipo="lancha" />} />
          <Route path="/veiculos/utv" element={<Veiculos tipo="utv" />} />
          <Route
            path="/veiculos/moto-aquatica"
            element={<Veiculos tipo="moto aquatica" />}
          />
          <Route
            path="/veiculos/quadriciclo"
            element={<Veiculos tipo="quadriciclo" />}
          />
          <Route path="/veiculos/" element={<Veiculos tipo="todos" />} />
          <Route path="/cadastro-veiculo/" element={<CadastroVeiculo/>} />
          <Route path="/anuncio/:id" element={<Anuncio />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/entrar" element={<Entrar />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
