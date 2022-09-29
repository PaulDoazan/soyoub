import './App.css';
import Collision from "./calkRenderer/components/Collision";
import React, {useEffect} from "react";

function App() {
  return (
    <div className="app-container">
        <div className="canvas-container">
            <Collision card_id={1} onlyFirstFrame={false}/>
        </div>
        <a href="https://www.dropbox.com/scl/fo/wncnzkgyemjsbz5s42al1/h?dl=0&rlkey=casu45m43yunbrnk7k0dkc0bu">Share your pictures on DropBox</a>
    </div>
  );
}

export default App;
