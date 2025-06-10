let txtnum1 = document.getElementById('num1');
let txtnum2 = document.getElementById('num2');

let botaoAdicao = document.getElementById('adicao')
let botaoSubtracao = document.getElementById('subtracao')
let botaoMultiplicacao = document.getElementById('multiplicacao')
let botaoDivisao = document.getElementById('divisao')
let botaoLimpar = document.getElementById('limpar')

botaoAdicao.addEventListener('click', adicionar)
botaoSubtracao.addEventListener('click', subtrair)
botaoMultiplicacao.addEventListener('click', multiplicar)
botaoDivisao.addEventListener('click', dividir)
botaoLimpar.addEventListener('click', limparHistorico)


function adicionar() {
if (txtnum1.value == '' || txtnum2.value == '') {
    alert('Por favor, insira dois valores para calcular !')
} else {


res.innerHTML = ''

let num1 = Number(txtnum1.value)
let num2 = Number(txtnum2.value)

let soma = num1 + num2

res.innerHTML = soma
contas.innerHTML+=`<p>${num1} + ${num2} = ${soma} </p>`
txtnum1.value = ''
txtnum2.value = ''
}
}

function subtrair() {
if (txtnum1.value == '' || txtnum2.value == '') {
    alert('Por favor, insira dois valores para calcular !')
} else {

res.innerHTML = ''

let num1 = Number(txtnum1.value)
let num2 = Number(txtnum2.value)

let subtracao = num1 - num2

res.innerHTML = subtracao
contas.innerHTML+=`<p>${num1} - ${num2} = ${subtracao}</p>`
txtnum1.value = ''
txtnum2.value = ''
}
}

function dividir() {

if (txtnum1.value == '' || txtnum2.value == '') {
    alert('Por favor, insira dois valores para calcular !')
} else if (txtnum2.value == 0) {
alert('Não é possivel dividir por zero, insira um valor diferente de zero')
}


else {
    res.innerHTML = ''

let num1 = Number(txtnum1.value)
let num2 = Number(txtnum2.value)

let divisao = num1 / num2

res.innerHTML = divisao
contas.innerHTML+=`<p>${num1} / ${num2} = ${divisao} </p>`
txtnum1.value = ''
txtnum2.value = ''
}
}

function multiplicar() {

if (txtnum1.value == '' || txtnum2.value == '') {
    alert('Por favor, insira dois valores para calcular !')
} else {
    res.innerHTML = ''

let num1 = Number(txtnum1.value)
let num2 = Number(txtnum2.value)

let multiplicacao = num1 * num2

res.innerHTML = multiplicacao

contas.innerHTML+=`<p>${num1} * ${num2} = ${multiplicacao}</p>`
txtnum1.value = ''
txtnum2.value = ''
}
}

function limparHistorico() {
 contas.innerHTML = ''
}