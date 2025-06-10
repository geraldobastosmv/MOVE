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
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
