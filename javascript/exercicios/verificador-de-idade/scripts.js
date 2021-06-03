function result(){
    var birthYear = Number(window.document.querySelector('#txtBirthYear').value)
    var actualYear = new Date().getFullYear()
    var gender = window.document.getElementsByName('radGender')
    var msg = document.querySelector('#msg')
    if(verifyFields(birthYear, actualYear)){
        fillInFields(birthYear, actualYear, gender, msg)
    }
}

function verifyFields(birthYear, actualYear){
    if (birthYear.length == 0 || birthYear >= actualYear || birthYear <= 1900){
        window.alert('[ERROR] Preencha os campos corretamente')
        return false;
    } else {
        return true;
    }
}

function fillInFields(birthYear, actualYear, gender, msg){
    var img = document.createElement('img')
    img.setAttribute('id', 'img')
    var age = actualYear - birthYear;
    switch (gender[0].checked) {
        case true:  
            gender = 'Homem'
            break;
    
        default:
            gender = 'Mulher'
            break;
    }
    msg.innerHTML = `Detectamos um ${gender} com ${age} anos`
    if (age < 18){
        if (gender == 'Homem'){
            img.setAttribute('src', 'images/male/crianca-300.png')
        } else {
            img.setAttribute('src', 'images/female/crianca-300.png')
        }
    } else if (age < 60){
        if (gender == 'Homem'){
            img.setAttribute('src', 'images/male/adulto-300.png')
        } else {
            img.setAttribute('src', 'images/female/adulta-300.png')
        }
    } else if (age < 110){
        if (gender == 'Homem'){
            img.setAttribute('src', 'images/male/idoso-300.png')
        } else {
            img.setAttribute('src', 'images/female/idosa-300.png')
        }
    }
    msg.appendChild(img)
    msg.style.margin = 'auto'
}