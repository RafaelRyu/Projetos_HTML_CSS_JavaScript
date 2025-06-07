let add = document.getElementById('adicionar')
let end = document.getElementById('finalizar')
let txtnum = document.getElementById('num')
let valores = []
add.addEventListener('click', adicionar)
end.addEventListener('click', mostrarDados)

function isNumero(num) {
    if (Number(num) >= 1 && Number(num) <=100) {
        return true
    } else {
        return false
    }
}

function inLista(num, lista) {
    if (lista.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(txtnum.value) && !inLista(txtnum.value, valores)) {
let num = Number(txtnum.value)
valores.push(num)
let item = document.createElement('option')
item.text = `${num}`
nums.appendChild(item)
res.innerHTML = ''
    } else {
        window.alert('Desculpe, mas esse número é inválido ou já se encontra na lista !')
    }
    txtnum.value = ''
    txtnum.focus()

}

function mostrarDados() {
    if (valores.length == 0) {
        window.alert('Não há valores para analisar !')
    } else {
    let maiorNum = 0
    for (let i = 0; i < valores.length; i++) {
        if (maiorNum < valores[i]) {
            maiorNum = valores[i]
        }
    }

let menorNum = valores[0]
    for (let i = 0; i < valores.length; i++) {
        if (menorNum > valores[i]) {
            menorNum = valores[i]
        }
    }

let media = 0
    for (let i = 0; i < valores.length; i++) {
        media += valores[i]
    }

    media /= valores.length









        res.innerHTML = ''
        res.innerHTML = `<p>Você registrou ${valores.length} valores</p>
        <p>O maior número é ${maiorNum}</p>
         <p>O menor número é ${menorNum}</p>
          <p>A média dos números é ${media}</p>`
        
    }
}