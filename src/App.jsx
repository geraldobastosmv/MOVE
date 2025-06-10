import { useState } from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./layouts/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/produtos" element={<h1>Produtos</h1>} />
          <Route path="/blog" element={<h1>Blog</h1>} />
          <Route path="/sobre" element={<h1>Sobre</h1>} />
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
