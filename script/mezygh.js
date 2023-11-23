/* on récupère les élèments */

let nav = document.getElementById("mezygh")
let navButton = document.getElementById('mezy2')

/*on crée de variables utiles*/

let isHidden = true 

/* on définit les fonctions*/

function moveNav(){
    if(isHidden){
        nav.style.transform = "translateX(20vw)"
        isHidden = false
        
    } else{
        nav.style.transform = "translateX(-20vw)"
        isHidden = true
    }
    
}

function move


//on régle les élèments déclencheur 

navButton.addEventListener('click' , moveNav)