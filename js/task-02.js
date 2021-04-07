const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// console.log(ingredients);

const getUlById = document.querySelector('#ingredients');

const createElLi = ingredients.map(ingredient => {
    const listEl = document.createElement('li');
    listEl.textContent = ingredient;
    // getUlById.append(listEl);
  // console.log(listEl);
  return listEl;
  
});
getUlById.append(...createElLi);



// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию в
// список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().



