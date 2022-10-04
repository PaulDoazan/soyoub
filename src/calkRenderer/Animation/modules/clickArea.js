let createjs;
let radius = 30;
let count = 0;
let maxCount = 240;

export default function clickArea() {
    createjs = window.createjs;
    let mc = new createjs.MovieClip();
    let gr = new createjs.Graphics();
    let sh = new createjs.Shape(gr);

    gr.beginFill('rgba(0,0,0,0.01)');
    gr.drawRect(0, 0, 1024, 768);

    mc.addChild(sh);

    //mc.on("mousedown", onDown);
    mc.on("click", onUp);
    mc.on("tick", onTick);
    //mc.on("pressmove", onMove);

    return mc;

    function onTick(e) {
        let stage = e.currentTarget.parent;
        
        count++;
        if(count > maxCount) {
            count = 0;
            stage.dispatchEvent(new createjs.Event("changeFrame"));
            stage.dispatchEvent(new createjs.Event("targetUp"));
        }
    }    
}


function onDown(e) {
    let tg = e.currentTarget;
    let stage = tg.parent;
    let coords = tg.globalToLocal(stage.mouseX, stage.mouseY);

    let g = new createjs.Graphics();
    let s = new createjs.Shape(g);

    //tg.addChild(s);
    tg.targetCircle = s;

    /*g.setStrokeStyle(2);
    g.beginStroke("black");
    g.drawCircle(0, 0, radius);*/

    s.x = coords.x;
    s.y = coords.y;

    tg.prevX = s.x;
    tg.prevY = s.y;

    let event = new createjs.Event("targetDown");
    stage.dispatchEvent(event);

    onMove(e);
}

function onUp(e) {
    count = 0;
    let tg = e.currentTarget;
    let stage = tg.parent;
    tg.removeChild(tg.targetCircle);

    stage.dispatchEvent(new createjs.Event("changeFrame"));
    stage.dispatchEvent(new createjs.Event("targetUp"));
}

function onMove(e) {
    let tg = e.currentTarget;
    let stage = tg.parent;
    let coords = tg.globalToLocal(stage.mouseX, stage.mouseY);

    tg.targetCircle.x = coords.x;
    tg.targetCircle.y = coords.y;

    let dx = coords.x - tg.prevX;
    let dy = coords.y - tg.prevY;

    if (dx === 0 && dy === 0) {
        dx = dy = 1;
    }

    tg.prevX = coords.x;
    tg.prevY = coords.y;

    let dist = Math.sqrt((dx * dx) + (dy * dy));
    let angle = Math.atan2(dy, dx);
    if (dist > 10) dist = 10;

    let event = new createjs.Event("targetMove");
    event.coords = coords;
    event.radius = radius;
    event.angle = angle;
    event.speed = dist / 10;
    stage.dispatchEvent(event);
}

