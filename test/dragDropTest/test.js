let delement = document.getElementById("draggable").addEventListener("click", clicked);

var mouseDown = 0;
document.body.onmousedown = function(){
    ++mouseDown;
}
document.body.onmouseup = function(){
    --mouseDown;
}

 // everything dont work. it works by detecting when click fully finished (mouseup), 
 //when it should be mouse down
function clicked(e){
    let pos1 = e.clientX;
    let pos2 = e.clientY;
    console.log(pos1)
    console.log(pos2)
    moveDiv(pos1,pos2)
}
function moveDiv(p1,p2){
    while (mouseDown == 1){
        p1 = pos3 - e.clientX;
        p2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
    }

}

// calculate the new cursor position:
//  pos1 = pos3 - e.clientX;
//  pos2 = pos4 - e.clientY;
//  pos3 = e.clientX;
//  pos4 = e.clientY;
