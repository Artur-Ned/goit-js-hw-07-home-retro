const input = document.querySelector('#name-input');
// console.log(input);
const span = document.querySelector('#name-output')
// console.log(span);


input.addEventListener('input', contentInputMassages);

function contentInputMassages(masseges) {
   
    if (masseges.currentTarget.value === '')
        {return span.textContent = 'незнакомец'}
    return span.textContent = masseges.currentTarget.value;
 
    
}

// console.log(span);




// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его текущее
// значение в span#name - output.Если инпут пустой, в спане должна
// отображаться строка 'незнакомец'.

