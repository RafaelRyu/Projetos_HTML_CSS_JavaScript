var calcularTabuada = document.getElementById("calcular")

calcularTabuada.addEventListener('click', calcular)

function calcular() {
let numtxt = document.getElementById('numero')
let tab = document.getElementById('tabuada1')

if (numtxt.value.length == 0) {
    window.alert('Por favor, digite um número')
} else {

let num = Number(numtxt.value)

 
tabuada1.innerHTML = ''
    for (let i = 1; i<=10; i++) {
        let item = document.createElement('option')
        item.text = `${num} X ${i} = ${num*i}`
        tabuada1.appendChild(item)
    }
}



}