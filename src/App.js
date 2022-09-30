import './App.css';
import Collision from "./calkRenderer/components/Collision";
import React, {useEffect} from "react";

function App() {
  return (
    <div className="app-container">
        <div className="link-container">
            <a href="https://www.dropbox.com/scl/fo/wncnzkgyemjsbz5s42al1/h?dl=0&rlkey=casu45m43yunbrnk7k0dkc0bu"><img className="dropbox-img" src="/dropbox.png"/></a>
        </div>
        <div className="canvas-container">
            <Collision card_id={1} onlyFirstFrame={false}/>
        </div>
    </div>
  );
}

export default App;
