import React from 'react';
import './App.css';
import {
  BrowserRouter,
} from "react-router-dom";
import {Line} from "./Common/Miscellaneous";


function App() {
  return <BrowserRouter>
    <div className="main-content-outer">
      <div className="main-content">
        <div className="disclaimer">
          <h1> Сайтик про осу временно отключен </h1>
          <Line/>
          <span> Сайт был изначально сделан как локальный рофл, и оттого много кто понял его совершенно неправильно. Мне не нравится негативный фидбек, который я получил из-за сайта, поэтому к сожалению сайтик временно (или постоянно) работать не будет</span>
          <span> Если у вас есть желание что-то спросить у автора, пишите в </span> <a href="https://github.com/osu-pro/info/blob/main/README.md"> Issues</a>
          <Line/>
          <span> Но в целом, эксперимент прошел успешно, и у многих указанных на сайте реально сгорела жопа, что и было нашей целью)) </span>
        </div>
      </div>
    </div>
  </BrowserRouter>
}

export default App;
