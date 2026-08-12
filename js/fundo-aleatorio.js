// trocando o fundo do site com base no horário

const date = new Date()
const hora = date.getHours()

// pegando outros elementos
const minutos = date.getMinutes()
const anoCompleto = date.getFullYear()

// se for de manhã, o background da pagina vai ser um

// se for de tarde, o background da pagina vai ser outro

// se for de noite, o background da pagina vai ser outro


//  A        E        B
if (hora>= 6 && hora < 12) {

    // document.body.style.background = "linear-gradient(135deg, #faff65, #FFD180, #90CAF9)"

    document.body.style.backgroundImage = "url(../assets/dia.jpg)"

} else if(hora >= 12 && hora < 18){
    
    // document.body.style.background = "linear-gradient(145deg, #FF8A65, #FFB74D, #64B5F6)"

    document.body.style.backgroundImage = "url(../assets/tarde.jpg)"

} else if(hora >= 18 && hora < 24){
    
    // document.body.style.background = "linear-gradient(155deg, #000428, #211132, #004E92)"
    
    document.body.style.backgroundImage = "url(../assets/noite.jpg)"
    
} else {
    // document.body.style.background = "linear-gradient(155deg, #059b8c, #211132, #004E92)"

    document.body.style.backgroundImage = "url(../assets/espere.jpg)"    
}