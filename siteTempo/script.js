window.addEventListener('load', carregar)

function carregar() {
    var mensagem = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
mensagem.innerText = `Agora são ${hora} horas`

hora = 20
if (hora >= 0 && hora<=9) {
    imagem.src = 'images/manha.png'
    document.body.style.background = '#DFCA3E'
} else if (hora > 9 && hora <= 15 ) {
    imagem.src = 'images/dia.png'
    document.body.style.background = '#77D9FA'
} else if (hora > 15 && hora <=19) {
    imagem.src = 'images/tarde.png'
    document.body.style.background = '#FA5F47'
} else {
    imagem.src = 'images/noite.png'
    document.body.style.background = '#191970'
}




}


