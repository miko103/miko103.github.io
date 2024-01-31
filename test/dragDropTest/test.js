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
delement.onmousemove = function(){
    if (mouseDown == )
}

 // everything dont work. it works by detecting when click fully finished (mouseup), 
 //when it should be mouse down

// calculate the new cursor position:
//  pos1 = pos3 - e.clientX;
//  pos2 = pos4 - e.clientY;
//  pos3 = e.clientX;
//  pos4 = e.clientY;
