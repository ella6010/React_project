import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Detail from "./page/Detail";

function App() {
  return (
    <>
      <header>
        <h1>💚 동물 조아 💚</h1>
      </header>
      <Routes>
        <Route path='/' element={<Main /> }></Route>
        <Route path='/detail' element={<Detail />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
      <footer>all rights reserved to OZ</footer>
    </>
  );
}

export default App;


