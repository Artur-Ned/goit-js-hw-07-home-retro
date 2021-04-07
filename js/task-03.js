const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const getImagesById = document.querySelector('#gallery');
getImagesById.style.display = 'flex';
getImagesById.style.justifyContent = 'space-between';


const listItemEl = images.map(images => {
 const creatliEl = document.createElement('li');
  creatliEl.style.listStyle = 'none';
  creatliEl.insertAdjacentHTML('afterbegin', `<img src=${images.url}, alt=${images.alt} width='400px' height='260px'>`);
  
  return creatliEl;
  
})

getImagesById.append(...listItemEl);



// Используй массив объектов images для создания тегов img вложенных 
// в li.Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
