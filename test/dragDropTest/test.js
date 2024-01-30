let delement = document.getElementById("draggable")[0].addEventListener("click", clicked);

function clicked(e){
    let pos1 = e.clientX;
    let pos2 = e.clientY;
    console.log(pos1)
    console.log(pos2)
}

// calculate the new cursor position:
//  pos1 = pos3 - e.clientX;
//  pos2 = pos4 - e.clientY;
//  pos3 = e.clientX;
//  pos4 = e.clientY;
