// Завдання 1

// Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.

const counterEl = document.querySelector(".counter");

let number = 0;

const id = setInterval(() => {
    number += 1;
    counterEl.textContent = number;

    if (number === 5) {
        clearInterval(id);
    }

},1000);

// =================================================================

// Завдання 2

// Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.

const colorEl = document.querySelector(".block1");
const sizeEl = document.querySelector(".block2");

let size = 10;

setInterval(() => {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    colorEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    size += 1;

    sizeEl.style.width = size + "px";
    sizeEl.style.height = size + "px";

},1000);


console.log(counterEl, colorEl, sizeEl);
// =================================================================

// Завдання 3

// Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінці протягом певного інтервалу часу, використовуючи setInterval. Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.

const playfield = document.querySelector(".game");
const bolEl = document.querySelector(".bol");
const numberEl = document.querySelector(".number");

let score = 0;
let time = 30; 
let gameInterval;
let moveInterval;


function moveBall() {
    const maxX = playfield.clientWidth - bolEl.clientWidth;
    const maxY = playfield.clientHeight - bolEl.clientHeight;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    bolEl.style.left = x + "px";
    bolEl.style.top = y + "px";
}


bolEl.addEventListener("click", () => {
    if (time > 0) {
        score++;
        numberEl.textContent = score;
    }
});


function startGame() {

    moveInterval = setInterval(() => {
        moveBall();
    }, 800);

    gameInterval = setInterval(() => {
        time--;

        if (time <= 0) {
            clearInterval(gameInterval);
            clearInterval(moveInterval);

            alert("Гра завершена! Ваш результат: " + score);
        }

    }, 1000);
}

moveBall();
startGame();




// =================================================================

// Завдання 4

// Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час (у секундах) за допомогою введення з клавіатури. Потім використовуйте setTimeout або setInterval, щоб після встановленого часу вивести повідомлення.

const timeInput = document.querySelector(".time");
const btnTime = document.querySelector(".btn-time");

btnTime.addEventListener("click", () => {
    let time = Number(timeInput.value);

    if (!time || time <= 0) {
        alert("Введи правильний час у секундах!");
        return;
    }

    let timeMs = time * 1000;

    setTimeout(() => {
        alert("Час вийшов!");
    }, timeMs);
});


