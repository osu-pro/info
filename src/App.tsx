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
        <Navigation/>
        <Line/>
        <Routes>
          <Route index path="/info/" element={<Home/>}/>
          <Route path="/info/players" element={<Players/>}/>
          <Route path="/info/epidemy" element={<Epidemy/>}/>
          <Route path="/info/phrases" element={<Phrases/>}/>
          <Route path="/info/skins" element={<Skins/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </div>
    </div>
  </BrowserRouter>
}

export default App;
