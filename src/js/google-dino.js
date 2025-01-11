const dinoGame = document.querySelector(".game-container")
const dino = document.querySelector(".dino");
const cactus = document.querySelector(".cactus");
const cloud = document.querySelector(".cloud");

dinoGame.addEventListener("mousedown", event =>{
    dino.style.top = "80px"
    
} );
dinoGame.addEventListener("mouseup", event =>{
    dino.style.top = "200px"
    
} );