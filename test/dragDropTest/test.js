let delement = document.getElementById("draggable"),
div1 = document.getElementById("div1")

//when mouse movememnt starts
var mouseDown = 0;
div1.onmousedown = function(e){ 
    ++mouseDown;
    offset = [
        delement.offsetLeft - e.clientX,
        delement.offsetTop - e.clientY
    ];
}
//when mouse movement stops
div1.onmouseup = function(){
    --mouseDown;
    document.removeEventListener('mousemove', this.onmousemove);
}
//when mouse moves
document.onmousemove = function(e){
    e.preventDefault();
    if (mouseDown == 1){
        mousePos = {
            x:e.clientX,
            y:e.clientY
        };
        delement.style.left = (mousePos.x + offset[0]) + "px";
        delement.style.top = (mousePos.y + offset[1]) + "px"
    }
}
//added the listeners to document and not the div AND IT FINALLY WORKS