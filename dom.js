var container=document.querySelector(".container");
function createGrid(numberOfCells){
    var dimensions=((600/numberOfCells)-2).toFixed(2);
    var size=Math.pow(numberOfCells,2);
    while(size>0){
        var div=document.createElement("div");
        container.appendChild(div);
        div.classList.add("grid");
        div.style.height=dimensions+"px";
        div.style.width=dimensions+"px";
        div.style.border="1px solid black";
        size--;
    }
    var Cells=document.querySelectorAll(".grid");
    Cells.forEach(cell=>cell.addEventListener('mouseenter',changeColor));
}
function changeColor(){
    this.style.backgroundColor="red";
}
function clear(){
    var reqGridSize = prompt('How many squares per side?'); 
    console.log("abhi")
    
        if (reqGridSize >= 1 && reqGridSize <= 100) { 
            while (container.hasChildNodes()) {
                container.removeChild(container.lastChild); // removes all grid squares
            }
            addDiv(reqGridSize); // create new grid 
        } else {
            alert ('Choose a number between 1-100'); 
            clear();
        }
}
window.onload=createGrid(16);
