var botao = document.getElementById('iniciar')

botao.addEventListener('click', contar)

function contar() {
    var elemento_inicio = document.getElementById('inicio')
    var elemento_fim = document.getElementById('fim')
    var elemento_passo = document.getElementById('passo')
    var inicio = Number(elemento_inicio.value)
    var fim = Number(elemento_fim.value)
    var passo = Number(elemento_passo.value)
    var res = document.getElementById('res')

    if (elemento_inicio.value.length == 0 || elemento_fim.value.length == 0 || elemento_passo.value.length == 0) {
        window.alert('Faltam Dados, revise os dados e tente novamente')
        res.innerHTML = 'Impossível contar'
    } else if (inicio == fim ) {
// início e fim são iguais
        window.alert('Não há números no intervalo para contar')
        res.innerHTML = 'Não há números para contar'
    } else if (inicio <= fim ) {
        // contagem crescente
        res.innerHTML = ''
for ( var i = inicio; i<= fim; i += passo) {
res.innerHTML += `${i} \u{27A1}`
}
res.innerHTML +=` \u{1F3C1}`
} else if (inicio > fim) {
        // contagem decrescente
        res.innerHTML = ''
      for ( var i = inicio; i>= fim; i -= passo) {
res.innerHTML += `${i} \u{27A1}`  
      }
      res.innerHTML +=` \u{1F3C1}`
    } else {
        window.alert('Um erro inesperado aconteceu') 
    }
    

}



