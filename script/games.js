/*Récupération des élèments html*/

let menu = document.getElementById("menu")
let zone = document.getElementById("gameZone")

/*définit les functions*/

function menuChange() {
    switch(menu.value){
        case '1':
            fairNumber()
            break 
        default:
            reset()
            break
    }

}
    function reset() {
        zone.innerHTML = ""

    }


/**
 * cett
 */
function fairNumber() {
    /*initialiser la zone*/
    reset()
    zone.innerHTML = "<h2>Le jeu du juste nombre</h2>"

    /*on initialise les variables*/
    let randomTarget = Math.floor(Math.random() * 100) +1
    console.log(randomTarget)
    let count = 0

    /*on ajoute des élèments html*/
    let playerInput = document.createElement("input")
    playerInput.setAttribute('type' , 'text')
    playerInput.setAttribute('id' , 'playerInput')
    playerInput.setAttribute('placeholder' , 'Tapez votre proposition')
    let inputLabel = document.createElement("label")
    inputLabel.setAttribute('for' , 'playerInput')
    inputLabel.innerHTML = "Devinez un nombre entre 1 et 100"

    let submitButton = document.createElement("button")
    submitButton.innerHTML = "Valider"
    submitButton.addEventListener('click')


    zone.appendChild(inputLabel)
    zone.appendChild(playerInput)
    zone.appendChild(submitButton)

    /* le fonctinnement du jeu*/
    function compareNumber(){
        count++

        let userNumber = parseInt(playerInput.value)

        let userNumber = parseInt(playerInput.value)
        let message = `coup n°${}`
        if ( isNaN(userNumber)) {
            alert("il faut entrer un nombre")
        }else if(userNumber > randomTarget)
        if(userNumber > randomTarget) {
            alert("C'est trop grand")
        } else if ( userNumber < randomTarget) {
            alert ("C'est trop petit")
        }else {
            alert ( `bravo vous avez trouvé") ${count} coups ` ) 
        }
    }

    
}


    
/* on configure les évènements*/
/*
    if(menu.value == '0'){
        zone.style.backgroundColor="bleue"
    }else if (menu.value == '1'){
        zone.style.backgroundColor="red"
    }
*/
/*on configure les évènements*/

menu.addEventListener("change" , menuChange)