//THIS CODE ALLOWS FOR DRAGGING
//////////////////////// START//////////////////
function onDragStart(event){
    event.dataTransfer.setData("text/plain", event.target.id);
    event.currentTarget.style.backgroundColor = "yellow";
}
function onDragOver(event){
    event.preventDefault();
}
function onDrop(event){
    const id=event.id
    const draggableElement = document.getElementById(id)
    const dropzone = event.target; // no work
    dropzone.appendChild(draggableElement)
    event.dataTransfer.clearData();

}
///////////////////////// END/////////////////////

