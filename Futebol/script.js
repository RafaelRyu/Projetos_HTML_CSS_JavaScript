let brasileirao = document.getElementById('btnBra')
let premierLeague = document.getElementById('btnEng')
let laLiga = document.getElementById('btnEsp')
let bundesliga = document.getElementById('btnGer')
let serieA = document.getElementById('btnIta')
let lista = document.getElementById('links')

brasileirao.addEventListener('mouseenter', mostrarBrasileirao)
premierLeague.addEventListener('mouseenter', mostrarPremierLeague)
laLiga.addEventListener('mouseenter', mostrarLaLiga)
bundesliga.addEventListener('mouseenter', mostrarBundesliga)
serieA.addEventListener('mouseenter', mostrarSerieA)


function mostrarBrasileirao() {
    lista.style.backgroundImage = "url('images/images (3).jpeg')"
}
function mostrarPremierLeague() {
    lista.style.backgroundImage = "url('images/images (4).jpeg')"
}
function mostrarLaLiga() {
    lista.style.backgroundImage = "url('images/images (5).jpeg')"
}
function mostrarBundesliga() {
    lista.style.backgroundImage = "url('images/images (6).jpeg')"
}
function mostrarSerieA() {
    lista.style.backgroundImage = "url('images/images (2).jpeg')"
}