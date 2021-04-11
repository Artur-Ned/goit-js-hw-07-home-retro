
const inputEl = document.querySelector('#validation-input');

// console.log(inputEl.dataset.length);
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
   
    if (inputEl.value.length === +inputEl.getAttribute('data-length'))
    {
        onAddValid();
        inputEl.classList.remove('invalid');
    } else {
        removeValid();
        inputEl.classList.add('invalid');
    }
     
};

function onAddValid() {
    inputEl.classList.add('valid');
};

function removeValid () {
    inputEl.classList.remove('valid');
};





// inputEl.getAttribute.data - length
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов. https://youtu.be/iJq-NwbZL84?t=2707

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
//     если неправильное - красным.

// const inputEl = document.querySelector('#validation-input');
// inputEl.addEventListener('blur', () => {
//     if (inputEl.value.length === +inputEl.dataset.length)
//     { changeClassList('valid', 'invalid'); } else { changeClassList('invalid', 'valid'); }
// });
// const changeClassList = (add, rem) => { inputEl.classList.add(add); 
// inputEl.classList.remove(rem); }
// (edited)




// let inputEl = document.querySelector('#validation-input');
// let inputEllength = inputEl.dataset.length;
// inputEl.addEventListener('blur', onInputBlur);
// function onInputBlur(event) {
//     const validColorLength = event.currentTarget.value.length;
//     if (validColorLength === +inputEllength) {
//         console.log('зеленый')
//         event.currentTarget.classList.add('valid');
//         event.currentTarget.classList.remove('invalid');
//     } else {
//         console.log('красный');
//         event.currentTarget.classList.add('invalid');
//         event.currentTarget.classList.remove('valid');
//     }
// }