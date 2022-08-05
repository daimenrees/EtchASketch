/* Daimen Rees - 2022*/
const container = document.getElementById("canvas");
let penColorPicker = document.getElementById("pen-color-picker");
let bgColorPicker = document.getElementById("bg-color-picker");

createGrid(16,16);

let currentColor = penColorPicker.value;

penColorPicker.addEventListener('click', () => {
    document.getElementById("penColorPickerText")
    .textContent=penColorPicker.value;
});

bgColorPicker.addEventListener('click', () =>{
    changeBackgroundColor(currentbgColor);
});


function createGrid(rows, cols) {
  /*Remove old divs*/
  while(container.firstChild) {
    container.firstChild.remove()
  };
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "pixel";
    cell.addEventListener('mouseover', () => {
            changeColor(cell);
        }
    )
  };
};

function clearGrid() {
    let nodes = container.childNodes;
    for (i=0; i<nodes.length; i++){
        if(nodes[i].nodeName.toLowerCase() == 'div'){
            nodes[i].style.backgroundColor = "white";
        }
    }
};

function changeColor(cell) {
    cell.style.backgroundColor = penColorPicker.value;
};

function takeshot() {
    let div =
        document.getElementById('canvas');
    html2canvas(div).then(
        function (canvas) {
            canvas.removeAttribute("style");
            document
            .getElementById('output')
            .appendChild(canvas).className="outputImage";
        })
};


