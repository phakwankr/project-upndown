import React from "react";
import Navbar from "./components/Bars/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import FormComponent from "./components/FormComponent/FormComponent";
import Stat from "./components/Pages/Stat";
import CardList from "./components/Cards/CardList";

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
          </header>
      <main>
        <Routes>
            <Route path="/home" element={<Home />} exact />
            <Route path="/add" element={<FormComponent />} exact />
            <Route path="/stat" element={<Stat />} exact />
            <Route path="/all" element={<CardList />} exact />
        </Routes>
      </main>
  </React.Fragment>     
  );
};

export default App;