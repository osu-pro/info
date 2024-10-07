import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {Home} from "./Pages/Home";
import {Epidemy} from "./Pages/Epidemy";
import {Players} from "./Pages/Players";
import {Navigation} from "./Common/Navigation";
import {Line} from "./Common/Miscellaneous";
import {Phrases} from "./Pages/Phrases";
import {Skins} from "./Pages/Skins";


function App() {
  return <BrowserRouter>
    <div className="main-content-outer">
      <div className="main-content">
        <h1> Вебсайт временно отключен </h1>
      </div>
    </div>
  </BrowserRouter>
}

export default App;
