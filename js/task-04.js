
const counter = {
    counterValue: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
};

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение
// счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса



const decrementBtn = document.querySelector('.decrement');
const incrementBtn = document.querySelector('.increment');
const counterValueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function () {
    console.log('Кликнули на декремент');

    counter.decrement();
    console.log(counter);
    counterValueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
    console.log('Кликнули на инкремент');

    counter.increment();
    console.log(counter);
    counterValueEl.textContent = counter.value;
});

console.log(window);