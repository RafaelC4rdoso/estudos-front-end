function load(){
    var hour = new Date().getHours()
    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('#img')
    msg.innerHTML = `Atualmente são ${hour} horas`
    if(hour >= 4 && hour < 13){
        loadMorning(img)
        document.body.style.background = 'rgb(218,165,32)'
    }else if(hour <= 18){
        loadAfternoon(img)
        document.body.style.background = 'rgb(255,69,0)'
    } else {
        loadNight(img)
        document.body.style.background = 'rgb(0,0,60)'
    }
}

function loadMorning(img){
    img.src = 'images/sol-da-manha-400.png'
    img.alt = 'Sol da manhã'
}

function loadAfternoon(img){
    img.src = 'images/sol-da-tarde-400.png'
    img.alt = 'Sol da tarde'
}

function loadNight(img){
    img.src = 'images/noite-400.png'
    img.alt = 'Noite'
}