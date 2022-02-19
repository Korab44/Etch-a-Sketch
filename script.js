const container = document.getElementById("container");


function makeRows(rows, cols = rows) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = ('');
    cell.style.backgroundColor = "white";
    container.appendChild(cell).className = "grid-item";
    
   // cell.addEventListener("mouseover", mouseOver);
   // function mouseOver() {
   //       let picker = document.getElementById('picker'); 
   //       let penColour = '';
   //       penColour = picker.value;
   //       cell.style.backgroundColor = penColour;
   //    }  
   cell.addEventListener('click', changeColor);
   function changeColor() {
         let picker = document.getElementById('picker'); 
         let penColour = '';
         penColour = picker.value;
         cell.style.backgroundColor = penColour;
      }

    let clear = document.getElementById("clear");
    clear.addEventListener('click', changeColors);
    function changeColors() {
      cell.remove();
     
    }
   };
};

let btn = document.getElementById('clear');
btn.addEventListener("click", eraseBoard)
function eraseBoard(){
let input = prompt("How many rows and collums you want your Grid?");
if(input <= 100) {
    makeRows(input);
  }else if (input > 100) {
     alert('Please enter a number lower than 100'), eraseBoard();
  }else if (input !== Number) {
     alert('Please enter a valid number to 100'), eraseBoard();
  }if(input == "null" || input == null || input == "")  {
     makeRows(16);
  }
}

makeRows(16);
