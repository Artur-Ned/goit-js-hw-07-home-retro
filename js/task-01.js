// const selectUlEl = document.querySelector('#categories');
// console.log(selectUlEl);

// const all = selectUlEl.children;
// console.log(all);


// const containsUL = document.querySelectorAll('li.item');
// containsUL.forEach(element => console.log(element));


const categoriesEl = document.querySelectorAll('.item');

console.log(`В списке ${categoriesEl.length} категории.`);
categoriesEl.forEach(element => {
    const tiltleEl = element.querySelector('h2');
    const liItem = element.querySelectorAll('ul>li');
    console.log(`Категория: ${tiltleEl.textContent}`);
    console.log(`Количество элементов: ${liItem.length}`);
});


// const ulCategories = selectUlEl.querySelectorAll('ul');
// console.log(ulCategories);
// const containsUL = [...ulCategories];
// console.log(containsUL);
// const selectLi = document.querySelectorAll('li');
// console.log(selectLi);

// console.log(selectUlEl.getAttribute('item'));
// const navEl = document.querySelector('.site-nav');
// console.log('navEl', navEl);

// const navLinksEl = document.querySelectorAll('.site-nav__link');
// console.log('navLinksEl', navLinksEl);




// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4


// const refs = {
//   selectedListId: document.querySelector('#categories'),
//   getListElem: document.querySelectorAll('#categories li[class="item"]'),
// };

// console.log(`В списке ${refs.selectedListId.childElementCount} категории`);
// refs.getListElem.forEach((element) => {
//   console.log(`Категория: ${element.firstElementChild.textContent}`);
//   console.log(
//     `Количество элементов: ${element.lastChild.previousSibling.childElementCount}`
//   );
// });