const input = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const box = document.querySelector("#boxes");

create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);

function createBoxes() {
    const amount = input.value;
    if (amount < 1 || amount > 100 || isNaN(amount)) {
        return ;
    };

    box.innerHTML = "";

    for (let i = 0; i < amount; i++){
        const div = document.createElement("div");
        const size = 30 + 10 * i
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor();
        box.appendChild(div); 
        // додати нові елекменти div в DOM
    };
    input.value = ""; 
    // очищуємо input
}

function destroyBoxes() {
    box.innerHTML = ""; 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

