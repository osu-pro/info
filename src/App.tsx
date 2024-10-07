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
        <div className="disclaimer">
          <h1> Сайтик про осу временно отключен </h1>
          <Line/>
          <span> Сайт был изначально сделан как локальный рофл, и оттого много кто понял его совершенно неправильно. Мне не нравится негативный фидбек, который я получил из-за сайта, поэтому к сожалению сайтик временно (или постоянно) работать не будет</span>
        </div>
      </div>
    </div>
  </BrowserRouter>
}

export default App;
