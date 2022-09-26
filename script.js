const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('.btnCalcular');
const pResult = document.querySelector('#result');

function btnOnClick() {
    let resultado = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerHTML = "El resultado es: " + resultado;
}

btn.addEventListener('click', btnOnClick);