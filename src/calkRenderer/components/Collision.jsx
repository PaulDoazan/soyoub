import React, { useRef, useEffect } from 'react';
import root from '../Animation/modules/root';

export default function Collision(props) {
    const canvasRef = useRef(null);
    let createjs;

    useEffect(() => {
        createjs = window.createjs;
        let stage = new createjs.Stage(canvasRef.current);
        stage.card_id = props.card_id;

        if(!props.onlyFirstFrame){
            createjs.Touch.enable(stage);
            createjs.Ticker.timingMode = createjs.Ticker.RAF;
            stage.on('mousedown', ()=>{
                createjs.Ticker.removeAllEventListeners("tick");
                createjs.Ticker.on('tick', ()=>{
                    stage.update();
                })
            })
        }

        root(stage, props.onlyFirstFrame);
        fitToContainer(canvasRef.current, stage);
    }, [])

    return (
        <canvas id="canvas" ref={canvasRef} className="canvas" width="600" height="600"></canvas>
    )
}

function fitToContainer(canvas, stage){
    // Make it visually fill the positioned parent
    canvas.style.width ='100%';
    canvas.style.height='100%';
    // ...then set the internal size to match
    var rect = canvas.parentNode.getBoundingClientRect();

    canvas.width = rect.width;
    canvas.height = rect.height;

    let ratio = rect.width / 600;
    stage.scaleX = stage.scaleY = ratio;
}
