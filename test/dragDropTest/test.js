let delement = document.getElementById("draggable")

var mouseDown = 0;
delement.onmousedown = function(e){
    ++mouseDown;
    delement.offset = [
        delement.offsetLeft -e.clientX,
        delement.offsetTop - e.clientY
    ];
}
delement.onmouseup = function(){
    --mouseDown;
}
delement.onmousemove = function(event){
    if (mouseDown == 1){
        mousePos = {
            x:event.clientX,
            y:event.clientY
        };
        delement.style.left = (mousePos.x + delement.offset[0]) + "px";
        delement.style.top = (mousePos.y + delement.offset[1]) + "px"
    }
}

//works but only when mouse is on the box. if not, the box wont move even when being "dragged"