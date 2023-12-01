/*Récupération des élèments html*/

let menu = document.getElementById("menu")
let zone = document.getElementById("gameZone")

/*définit les functions*/

function menuChange() {
    switch(menu.value){
        case '1':
            fairNumber()
            break 
        case'2' : 
        ticTacDoe()
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

        
        let message = `coup n°${count}`
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


function reset () {
    
}


function fairNumber () {
}
    
function ticTacDoe () {
    reset ()
    console.log ('jeu du morpion')

    /*déclaration des variables*/
    let squares = []
    let isActive = []
    let score = []
    let redPlayer = true; 


    let infoPanel = document.createElement('div')
    infoPanel.classList.add('infoPanel')

    let grid = document.createElement('div')
    grid.classList.add('grid')

    zone.appendChild(infoPanel)
    zone.appendChild(grid)
    zone.classList.add('ttdZone')

    /* création de la grille*/

    for(let i = 0 ; i<9 ; i++) {
        let square = document.createElement
        ('div')
        square.classList.add('square')
        grid.appendChild(square)
        squares.push(square)
        isActive.push(true)
        score.push(0)
    }

    for(let i= 0; i<9; i++) {
        squares[i].addEventListener('click' , squareClick.bind(squares[i], i))
    }

    console.log(squares, isActive)

    function squareClick(squareNumber){
        if(isActive[squareNumber]){
            if(redPlayer) {
                this.style.backgroundImage = 'url(../assets/croixNoir.png)' 
                score[squareNumber] = 1 
            } else {
                this.style.backgroundImage = 'url(../assets/rondNoir.png)' 
                score[squareNumber] = 4
            } 

            isActive[squareNumber] = false
        
            redPlayer = !redPlayer
            checkVictory()
            console.log(score)

        }
    }

    function checkVictory(){
        let lineScore = [
            score[0] + score[1] + score[2],
            score[3] + score[4] + score[5],
            score[6] + score[7] + score[8],
            score[0] + score[3] + score[6],
            score[1] + score[4] + score[7],
            score[2] + score[5] + score[8],
            score[0] + score[4] + score[8],
            score[2] + score[4] + score[6],
        ]

        let endGameMessage = ""
        if(lineScore.includes(3)) {
                endGameMessage = " Victoire Rouge"
                endGameMessage(endGameMessage)
            }else if (lineScore.includes(12)){
                endGameMessage = "Victoire vert"
                endGameMessage(endGameMessage)
            }else if (!isActive.includes(true)) {
                endGameMessage = "Egalité"
                endGameMessage(endGameMessage)
            }
                
            
        

        console.log(lineScore, endGameMessage)

    }

    function endGame(endGameMessage) {
        for(let i = 0; i<8; i++) {
            isActive[i] = false

        }
        let endOverGame = document.createElement('h2')
        gameOverGame.classList.add('gameOver')
        gameOverGame.innerHTML = endGameMessage

        infoPanel.appendChild (gameOverGame)

        let restartBut = document.createElement('button')
        restartBut.addEventListener('click' , ticTacDoe)

        infoPanel.appendChild(restartBut)

    }
}



/* on configure les évènements*/


menu.addEventListener("change" , menuChange)