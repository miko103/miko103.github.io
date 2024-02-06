let movable = document.getElementById("to_move"),
body = document.body



//when mouse movememnt starts
var mouseDown = 0;
body.onmousedown = function(e){ 
    ++mouseDown;
    offset = [
        movable.offsetLeft - e.clientX,
        movable.offsetTop - e.clientY
    ];
}
//when mouse movement stops
body.onmouseup = function(){
    --mouseDown;
    document.removeEventListener('mousemove', this.onmousemove);
    // changes url 
    const url = './objPosInParam.html';
    const data = mousePos;
    history.pushState({}, null, `${url}?pos=${mousePos}`);
    load()
}
//when mouse moves
document.onmousemove = function(e){
    e.preventDefault();
    if (mouseDown == 1){
        mousePos = {
            x:e.clientX,
            y:e.clientY
        };
        movable.style.left = (mousePos.x + offset[0]) + "px";
        movable.style.top = (mousePos.y + offset[1]) + "px"
    }
}

function load(){
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    var dataToWrite = urlParams.get("pos");
    console.log("mouse pos: " + dataToWrite);
    mousePos = {
        x:e.clientX,
        y:e.clientY
    }

}
//added the listeners to document and not the div AND IT FINALLY WORKS