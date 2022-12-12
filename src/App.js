import React from "react";
import Navbar from "./components/Bars/Navbar";
import { Route, Routes } from "react-router-dom";
import Stats from "./pages/dashboard/Stats";
import AddActivity from "./pages/dashboard/AddActivity";
import FormComponent from "./components/FormComponent/FormComponent";
import CustomizedDialogs from "./components/FormComponent/dialog";
import CardActivity from "./components/Cards/CardActivity";

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
          </header>
      <main>
        <Routes>
            <Route path="/all" element={<CardActivity />} exact />
            <Route path="/add" element={<AddActivity />} exact />
            <Route path="/stats" element={<Stats />} exact />
        </Routes>
      </main>

      <div className="App">
        <CustomizedDialogs>
          <FormComponent />
        </CustomizedDialogs>
      </div>

  </React.Fragment>     

  );
};

export default App;