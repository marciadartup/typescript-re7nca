let button = document.getElementById('button');
let input1 = document.getElementById('input');
let input2 = document.getElementById('input');

function somarNumeros (numero1 , numero2){
  return numero1 + numero2
}

button.addEventListener('click', () =>{
  somarNumeros(input1.value, input2.value);
})