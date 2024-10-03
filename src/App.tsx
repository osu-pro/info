import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Home} from "./Pages/Home";
import {Epidemy} from "./Pages/Epidemy";
import {Players} from "./Pages/Players";
import {Navigation} from "./Common/Navigation";
import {Line} from "./Common/Miscellaneous";
import {Phrases} from "./Pages/Phrases";


function App() {
  return <BrowserRouter>
    <div className="main-content-outer">
      <div className="main-content">
        <Navigation/>
        <Line/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/players" element={<Players/>}/>
          <Route path="/epidemy" element={<Epidemy/>}/>
          <Route path="/phrases" element={<Phrases/>}/>
        </Routes>
      </div>
    </div>
  </BrowserRouter>
}

export default App;
