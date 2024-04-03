const button = document.querySelector(".change-color");

    function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
};

button.addEventListener("click", () => {
    const bodyColor = document.querySelector("body");
    const newColor = getRandomHexColor();
    bodyColor.style.backgroundColor = newColor;
    const spanColor = document.querySelector(".color");
    spanColor.textContent = newColor;
});