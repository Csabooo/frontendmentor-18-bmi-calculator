import React from "react";
import Header from "./components/Header/Header";
import Calculator from "./components/Calculator/Calculator";
import MainTable from "./components/MainTable/MainTable";
import Attribution from "./components/Attribution/Attribution";


function App() {

  return (
    <div className="container mx-auto relative">
      <Header></Header>
      <div className="relative -top-40 md:-top-60" >
        <Calculator></Calculator>
        <MainTable></MainTable>
        <Attribution></Attribution>
      </div>

    </div>
  )
}

export default App
