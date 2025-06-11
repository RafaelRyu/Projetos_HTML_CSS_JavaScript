let botaoInicio = document.getElementById('inicio')
let botaoFim = document.getElementById('fim')
let botaoVolta = document.getElementById('volta')
let botaoZerar = document.getElementById('zerar')
// elementos HTML
let historicoVoltas = document.getElementById('voltas')
let contagem = document.getElementById('contagem')
let aviso = document.getElementById('aviso')

botaoInicio.addEventListener('click', iniciar)
botaoFim.addEventListener('click', acabar)
botaoVolta.addEventListener('click', marcarVolta)
botaoZerar.addEventListener('click', zerar)

let cronometro = null;
let contagemOn = false;
let tempoMostrado = "0.00";
let numeroVoltas = 0;


function iniciar() {
   if (contagemOn === false) {

   cronometro = setInterval( function() {
 let contagemAtual = contagem.innerHTML;

 let tempo = parseFloat(contagemAtual) + 0.01;
 tempoMostrado = tempo.toFixed(2) 
document.getElementById('contagem').innerHTML = tempoMostrado;
   }, 10)

   contagemOn = true
   } else {
 aviso.innerHTML = "O cronômetro está sendo usado"
      setTimeout( function() {
         aviso.innerHTML = ""
      }, 2000)
      
   }
}

function acabar() {
   clearInterval(cronometro);
   contagemOn = false;
}

function marcarVolta() {
   numeroVoltas += 1;
   historicoVoltas.innerHTML += `<p>${numeroVoltas}º volta : ${tempoMostrado}</p>`
}

function zerar() {
   contagemOn = false;
   clearInterval(cronometro);
   contagem.innerHTML = "0.00";
   historicoVoltas.innerHTML = "";
   tempoMostrado = "0.00";
   numeroVoltas = 0;
}