"use strict";

document.write("<div class='board'>");
let cls = 7;
let letter = 72;
let row = 7;

for(let x = 0; x < 8; x++){
    document.write("<div class='cont'>");
    let number = 49;
    let square = 0;

    for(let y = 0; y < 8; y++){
        document.write(`</p><div class='square fila-${cls}' onclick="move(${square}, ${row})"><p id="${square}-${row}">${String.fromCharCode(letter)}${String.fromCharCode(number)}</p></div>`);
        number++;
        square++;
    }
    document.write("</div>");
    cls--;
    letter--;
    row--;
}

document.write("</div>");

const render = () => {
    for(let i = 0; i < 8; i++){
        let square = document.getElementsByClassName(`fila-${i}`);
    
        if(i%2 == 1){
            for(let j = 0; j < square.length; j++){
                if(j%2 == 1){
                    square[j].style.backgroundColor = "rgb(78, 78, 78)";
    
                }else{
                    square[j].style.backgroundColor = "rgb(39, 39, 39)";
                }
            }
    
        }else{
            for(let j = 0; j < square.length; j++){
                if(j%2 == 0){
                    square[j].style.backgroundColor = "rgb(78, 78, 78)";
    
                }else{
                    square[j].style.backgroundColor = "rgb(39, 39, 39)";
                }
            }
        }
    }
}
render();

let movDisp = [];

function find(x, y){
    let arrayPos = 0;
    movDisp.length = 0;
    render();
    document.getElementsByClassName(`fila-${y}`)[x].style.backgroundColor = "green";

    if(x + 2 <= 7 && y - 1 >= 0){
        movDisp[arrayPos] = document.getElementsByClassName(`fila-${y - 1}`)[x + 2];
        arrayPos++;
    }
    if(x + 2 <= 7 && y + 1 <= 7){
        movDisp[arrayPos] = document.getElementsByClassName(`fila-${y + 1}`)[x + 2];
        arrayPos++;
    }
    if(x + 1 <= 7 && y - 2 >= 0){
        movDisp[arrayPos] = document.getElementsByClassName(`fila-${y - 2}`)[x + 1];
        arrayPos++;
    }
    if(x + 1 <= 7 && y + 2 <= 7){
        movDisp[arrayPos] = document.getElementsByClassName(`fila-${y + 2}`)[x + 1];
        arrayPos++;
    }
    if(x - 1 >= 0 && y - 2 >= 0){
        movDisp[arrayPos] = document.getElementsByClassName(`fila-${y - 2}`)[x - 1];
        arrayPos++;
    }
    if(x - 1 >= 0 && y + 2 <= 7){
        movDisp[arrayPos] = document.getElementsByClassName(`fila-${y + 2}`)[x - 1];
        arrayPos++;
    }
    if(x - 2 >= 0 && y - 1 >= 0){
        movDisp[arrayPos] = document.getElementsByClassName(`fila-${y - 1}`)[x - 2];
        arrayPos++;
    }
    if(x - 2 >= 0 && y + 1 <= 7){
        movDisp[arrayPos] = document.getElementsByClassName(`fila-${y + 1}`)[x - 2];
    }

    for(let element of movDisp){
        element.style.backgroundColor = "gold";
    }
}

function move(x, y){
    for(let element of movDisp){
        if(element == document.getElementsByClassName(`fila-${y}`)[x]){
            find(x, y);
            knight = element;
            posicion = document.getElementById(`${x}-${y}`).innerHTML;
            path = `${path}, ${posicion}`;
            console.log(`${posicion}: (${x}, ${y})`);
        }
    }
}

let knight = document.getElementsByClassName("fila-0")[0];
let posicion = document.getElementById("0-0").innerHTML;
let path = posicion;
find(0, 0);