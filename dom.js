var container=document.querySelector('.grid-container');
var button=document.getElementById('clear');


function addDiv(numberOfDivisions){
    var dimensions=((600/numberOfDivisions)-2).toFixed(2);
    var numberOfCells=Math.pow(numberOfDivisions,2);
    
    while (numberOfCells>0){
        var newDiv = document.createElement("div");
        container.appendChild(newDiv);
        newDiv.classList.add('grid');
        newDiv.style.height= dimensions+'px';
        newDiv.style.width=  dimensions+'px';
        newDiv.style.border='1px solid black';
        numberOfCells--;
    }
    
    var cells=document.querySelectorAll('.grid');
    cells.forEach(cell => cell.addEventListener('mouseenter',changeColor));
    console.log(dimensions);
}
function changeColor(){
    this.style.backgroundColor='#ff9999';
}
function clear() {    	
    
}
window.onload=addDiv(16);