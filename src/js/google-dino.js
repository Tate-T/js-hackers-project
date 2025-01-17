const dino = document.querySelector(".dino");
const cactus = document.querySelector(".cactus");
const button = document.querySelector(".dino-button");
const help = document.querySelector(".help");
const lose = document.querySelector(".dino-lose")
let isJumping = false;
let isGameOver = false;


function jump() {
    if (isJumping) {
        return;
    }
    isJumping = true;
    let position = 0;

    const upInterval = setInterval(() => {
        if (position >= 200) {
            clearInterval(upInterval);

            const downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 10;
                    dino.style.bottom = `${position}px`;
                }
            }, 20);
        } else {

            position += 7;
            dino.style.bottom = `${position}px`;
        }
    }, 20);
}
// я устал :(

function checkCollision() {
    const dinoRect = dino.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();

    if (dinoRect.right > cactusRect.left && dinoRect.left < cactusRect.right && dinoRect.bottom > cactusRect.top) {
        cactus.style.animationPlayState = "paused";
        isGameOver === true;
        lose.style.display = "block"
    } else {


    }
}

document.addEventListener("mousedown", (event) => {
    if (event.button === 0) jump();
});


setInterval(() => {
    if (!isGameOver) {
        checkCollision()
    }
}, 10);

if (button) {

    button.id = "b_epr";
    button.innerText = "Restart";
    button.addEventListener("click", () => window.location.reload());
    button.insertAdjacentElement("afterend", button);
}