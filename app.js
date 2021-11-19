let pt = document.getElementById('portugues')
let en = document.getElementById('english')
let subtitle = document.querySelector('h2')

function Portugues() {
    pt.classList.remove('d-none')
    en.classList.add('d-none')
    subtitle.innerHTML = 'desenvolvedora'
}

function English() {    
    en.classList.remove('d-none')
    pt.classList.add('d-none')
    subtitle.innerHTML = 'developer'
}