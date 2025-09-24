import React from "react";
import Header from "../components/Header/";
import Footer from "../components/Footer/";
import NavMobile from "../components/NavMobile";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
      <NavMobile/>
    </>
  );
}
