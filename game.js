let Mole;
let flower;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    
    for (let i = 0; i < 9; i++) { 
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1000);
    setInterval(setPlant, 2000);
}

function getRandom(){
    
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole(){
    if(gameOver){
        return;
    }

    if(Mole){
        Mole.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "monty-mole.png";
    
    let num = getRandom();
    if(flower && flower.id == num){
        return;
    }
    Mole = document.getElementById(num);
    Mole.appendChild(mole);
}

function setPlant(){
    if(gameOver){
        return;
    }

    if(flower){
        flower.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "mole.flower.PNG";

    let num = getRandom();
    if(Mole && Mole.id == num){
        return;
    }
    flower = document.getElementById(num);
    flower.appendChild(plant);
}

function selectTile(){
    if(gameOver){
        return;
    }

    if(this == Mole){
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if(this == flower){
        document.getElementById("score").innerText = "Game Over: " + score.toString();
        gameOver = true;
    }
}