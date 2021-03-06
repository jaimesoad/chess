"use strict";


class ficha{
    constructor(){
        this.x = 0, this.y = 0;
        this.posicion = document.getElementById(`${this.x}-${this.y}`).innerHTML;
        this.movDisp = [];
        this.path = this.posicion;
        this.posInic = this.posicion;
        this.square = document.getElementsByClassName(`fila-${this.y}`)[this.x];
        this.find(this.x, this.y);
    }

    move(x, y){
        for(let element of this.movDisp){
            if(element == document.getElementsByClassName(`fila-${y}`)[x]){
                this.square = element;
                this.posicion = document.getElementById(`${x}-${y}`).innerHTML;
                this.path = `${this.path}, ${this.posicion}`;
                console.log(`${this.posicion}: (${x}, ${y})`);
                this.x = x, this.y = y;
                this.find(x, y);
            }
        }
    }
}

class knight extends ficha{

    find(x, y){
        let arrayPos = 0;
        this.movDisp.length = 0;
        render();
        document.getElementsByClassName(`fila-${y}`)[x].style.backgroundColor = "green";
    
        if(x + 2 <= 7 && y - 1 >= 0){
            this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y - 1}`)[x + 2];
            arrayPos++;
        }
        if(x + 2 <= 7 && y + 1 <= 7){
            this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y + 1}`)[x + 2];
            arrayPos++;
        }
        if(x + 1 <= 7 && y - 2 >= 0){
            this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y - 2}`)[x + 1];
            arrayPos++;
        }
        if(x + 1 <= 7 && y + 2 <= 7){
            this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y + 2}`)[x + 1];
            arrayPos++;
        }
        if(x - 1 >= 0 && y - 2 >= 0){
            this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y - 2}`)[x - 1];
            arrayPos++;
        }
        if(x - 1 >= 0 && y + 2 <= 7){
            this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y + 2}`)[x - 1];
            arrayPos++;
        }
        if(x - 2 >= 0 && y - 1 >= 0){
            this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y - 1}`)[x - 2];
            arrayPos++;
        }
        if(x - 2 >= 0 && y + 1 <= 7){
            this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y + 1}`)[x - 2];
        }
    
        for(let element of this.movDisp){
            element.style.backgroundColor = "gold";
        }
    }
    
}

class tower extends ficha{
    find(x, y){
        let arrayPos = 0;
        this.movDisp.length = 0;
        render();
        document.getElementsByClassName(`fila-${y}`)[x].style.backgroundColor = "green";

        for(let height = 7; height > 0; height--){
            if(x + height < 8){
                this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y}`)[x + height];
                arrayPos++;
            }
        }
        for(let width = -7; width < 8; width++){
            if(width == 0) continue;
            else if(y + width >= 0 && y + width < 8){
                this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y + width}`)[x];
                arrayPos++;
            }
        }
        for(let height = -1; height > -8; height--){
            if(x + height >= 0){
                this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y}`)[x + height];
                arrayPos++;
            }
        }

        for(let element of this.movDisp){
            element.style.backgroundColor = "gold";
        }
    }
}

class king extends ficha{
    find(x, y){
        let arrayPos = 0;
        this.movDisp.length = 0;
        render();
        document.getElementsByClassName(`fila-${y}`)[x].style.backgroundColor = "green";

        if(x + 1 <= 7 && y - 1 >= 0){
            this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y - 1}`)[x + 1];
            arrayPos++;
        }
        if(x + 1 <= 7){
            this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y}`)[x + 1];
            arrayPos++;
        }
        if(x + 1 <= 7 && y + 1 <= 7){
            this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y + 1}`)[x + 1];
            arrayPos++;
        }
        if(y - 1 >= 0){
            this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y - 1}`)[x];
            arrayPos++;
        }
        if(y + 1 <= 7){
            this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y + 1}`)[x];
            arrayPos++;
        }
        if(x - 1 >= 0 && y - 1 >= 0){
            this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y - 1}`)[x - 1];
            arrayPos++;
        }
        if(x - 1 >= 0){
            this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y}`)[x - 1];
            arrayPos++;
        }
        if(x - 1 >= 0 && y + 1 <= 7){
            this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y + 1}`)[x - 1];
            arrayPos++;
        }
        
        for(let element of this.movDisp){
            element.style.backgroundColor = "gold";
        }
    }
}

class bishop extends ficha{
    find(x, y){
        let arrayPos = 0;
        this.movDisp.length = 0;
        render();
        document.getElementsByClassName(`fila-${y}`)[x].style.backgroundColor = "green";

        let j = -7;
        for(let i = 7; i > 0; i--){
            
            if(x + i < 8 && y + j >= 0){
                this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y +j}`)[x + i];
                arrayPos++;
            }
            if(x + i < 8 && y - j < 8){
                this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y - j}`)[x + i];
                arrayPos++;
            }

            j++;
        }
        j = 1;
        for(let i = 1; i < 8; i++){

            if(x - i >= 0 && y - j >= 0){
                this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y - j}`)[x - i];
                arrayPos++;
            }
            if(x - i >= 0 && y + j < 8){
                this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y + j}`)[x - j];
                arrayPos++;
            }

            j++;
        }
        
        for(let element of this.movDisp){
            element.style.backgroundColor = "gold";
        }
    }
}

class pawn extends ficha{
    find(x, y){
        let arrayPos = 0;
        this.movDisp.length = 0;
        render();
        document.getElementsByClassName(`fila-${y}`)[x].style.backgroundColor = "green";

        if(x + 2 < 8 && this.path == this.posInic){
            this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y + 2}`)[x];
            arrayPos++;
        }
        if(x + 1 < 8){
            this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y + 1}`)[x];
            arrayPos++;
        }
        
        for(let element of this.movDisp){
            element.style.backgroundColor = "gold";
        }
    }
}

class queen extends ficha{
    find(x, y){
        let arrayPos = 0;
        this.movDisp.length = 0;
        render();
        document.getElementsByClassName(`fila-${y}`)[x].style.backgroundColor = "green";
        
        let j = -7;
        for(let i = 7; i > 0; i--){

        if(x + i < 8 && y + j >= 0){
            this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y + j}`)[x + i];
            arrayPos++;
        }
        if(x + i < 8){
            this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y}`)[x + i];
            arrayPos++;
        }
        if(x + i < 8 && y - j < 8){
            this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y - j}`)[x + i];
            arrayPos++;
        }

        j++;
        }
        for(j = -7; j < 8; j++){

            if(j == 0) continue;
            else if(y + j >= 0 && y + j < 8){
                this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y + j}`)[x];
                arrayPos++;
            }

        }
        j = 1;
        for(let i = 1; i < 8; i++){

            if(x - i >= 0 && y - j >= 0){
                this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y - j}`)[x - i];
                arrayPos++;
            }
            if(x - i >= 0){
                this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y}`)[x - i];
                arrayPos++;
            }
            if(x - i >= 0 && y + j < 8){
                this.movDisp[arrayPos] = document.getElementsByClassName(`fila-${y + j}`)[x - i];
                arrayPos++;
            }

            j++;
        }
        
        for(let element of this.movDisp){
            element.style.backgroundColor = "gold";
        }
    }
}

document.write("<div class='board'>");
let cls = 7;
let letter = 72;
let row = 7;

for(let x = 0; x < 8; x++){
    document.write("<div class='cont'>");
    let number = 49;
    let square = 0;

    for(let y = 0; y < 8; y++){
        document.write(`</p><div class='square fila-${cls}' onclick="piece.move(${square}, ${row})"><p id="${square}-${row}">${String.fromCharCode(letter)}${String.fromCharCode(number)}</p></div>`);
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

/* let movDisp = [];

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
find(0, 0); */

let piece = new knight;