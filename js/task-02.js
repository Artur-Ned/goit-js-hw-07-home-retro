const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// console.log(ingredients);

const contentUlEl = document.querySelector('#ingredients');

ingredients.forEach(element => {
    const list = document.createElement('li');
    list.textContent = element;
    contentUlEl.append(list);
    
});




// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию в
// список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().



