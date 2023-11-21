//console.log("Hello World")



/*let nomUtilisateur
let ageUtilisateur

nomUtilisateur = prompt("comment vous appelez-vous,")
ageUtilisateur = prompt ("Quel age avez-vous?")

let a = "mazigh"
let b = " jiji"

console.log(a+" "+b)*/

/*alert(`bonjour ${nomUtilisateur}, vous avez ${ageUtilisateur}ans!`)*/

/*Premier script complet*/

let randomTarget = Math.floor(Math.random() * 100) +1
console.log(randomTarget)

let userNumber = null
let count = 0 

while(userNumber! = randomTarget) [
userNumber = prompt("Devinez un nombre entre 1 et 100")
count ++
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
]

