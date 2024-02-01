let delement = document.getElementById("draggable"),
div1 = document.getElementById("div1")
//more code from internet\/ 
function moveAt(pageX,pageY){  
    delement.style.top
}

var mouseDown = 0;
div1.onmousedown = function(e){ 
    ++mouseDown;
    delement.offset = [
        delement.offsetLeft - e.clientX,
        delement.offsetTop - e.clientY
    ];
}

div1.onmouseup = function(){
    --mouseDown;
}
div1.onmousemove = function(event){
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