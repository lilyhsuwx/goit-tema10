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

let size = 0;

setInterval(() => {

    let r = Math.round(Math.random() * (255 - 1) * 1);
    let g = Math.round(Math.random() * (255 - 1) * 1);
    let b = Math.round(Math.random() * (255 - 1) * 1);

    colorEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    size += 1;

    sizeEl.style.width = size + "px";
    sizeEl.style.height = size + "px";

},1000);

// =================================================================

// Завдання 3

// Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінці протягом певного інтервалу часу, використовуючи setInterval. Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.