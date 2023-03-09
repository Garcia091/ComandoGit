let num1;
let num2;

let btnSuma = document.getElementById('Ejercicio1');
let btnResta = document.querySelector('#Ejercicio2');
let btnMul = document.getElementById('Ejercicio3');
let btnDiv = document.querySelector('#Ejercicio4');

let ResOpe = document.getElementById('Resultado')


function Suma(num1,num2) {
    let suma = num1+num2;
    return suma;
}
function Resta(num1,num2) {
    let resta = num1-num2;
    return resta;
}

function LeerDAtos() {
    num1 = Number(prompt('Ingrese número 1'))
    num2 = Number(prompt('Ingrese número 2'))
}

btnResta.addEventListener('click',function () {
    LeerDAtos()
    console.log(`El resultado es: ${Resta(num1,num2)}`);
    ResOpe.innerHTML=`<h3>El resultado es: ${Resta(num1,num2)}</h3>`;

})

btnSuma.addEventListener('click',function () {
    LeerDAtos()
    console.log(`El resultado es: ${Suma(num1,num2)}`);
    ResOpe.innerHTML=`<h3>El resultado es: ${Suma(num1,num2)}</h3>`;

})
