
const selectUl = document.querySelector('#categories');
// console.log(selectUl);

const selectLi = selectUl.querySelectorAll('.item');
console.log(`В списке ${selectLi.length} категории.`);
// console.log(selectLi);
selectLi.forEach(element => {
    const titleEl = element.querySelector('h2');
    const liEl = element.querySelectorAll('ul>li')
    console.log(`Категория: ${titleEl.textContent}`);
    console.log(`Количество элементов: ${liEl.length}`);

});



// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4