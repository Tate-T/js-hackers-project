
const gameField = document.getElementById("game-field");
const ball = document.getElementById("ball");
const gates = document.getElementById("gates");
const result = document.getElementById("football-result");
const button = document.getElementById("football-button");
const button2 = document.getElementById("football-button2");
gameField.addEventListener("mousemove", (event) => {
    const gameFieldRect = gameField.getBoundingClientRect();

    const x = event.clientX - gameFieldRect.left;
    const y = event.clientY - gameFieldRect.top;
    const maxX = Math.max(0, Math.min(x, gameFieldRect.width - ball.offsetWidth));
    const maxY = Math.max(0, Math.min(y, gameFieldRect.height - ball.offsetHeight));

    ball.style.left = `${maxX}px`;
    ball.style.top = `${maxY}px`;
    
    
    if(ball.style.left === "500.4px"){
    ball.style.left = "10px"
    result.textContent  = "Молодець" ;
    }else{

    }
});

if (button) {

  button.id = "b_epr";
  button.innerText = "Restart";
  button.addEventListener("click", () => window.location.reload());
  button.insertAdjacentElement("afterend", button);
}
if (button2) {

    button2.id = "b_epr";
    button2.innerText = "Restart";
    button2.addEventListener("click", () => window.location.reload());
    button2.insertAdjacentElement("afterend", button2);
  }
