//Inputs
let versuche4 = document.getElementById("4times")
let versuche5 = document.getElementById("5times")
// console.log(versuche5)
let versuche6 = document.getElementById("6times")
let custum = document.getElementById("cutom")
// console.log(manuelleEingabe)
let guessInput = document.getElementById("guessUser")

//HTML
let versucheUser = document.getElementById("versucheUser")
let ubersichtVersuche = document.getElementById("ubersichtVersuche")
let box = document.getElementById("box")
let eingabeFensterUser = document.getElementById("eingabeFensterUser")
let disableButton = document.getElementById("disableButton")
let ausgabe = document.getElementById("ausgabe")

//Variablen
const random = (Math.random() *100).toFixed(0);
console.log(random)
let versuche; 
let i=0;



//Custom Box ein-/ausblenden
function getRounds(){
    if(custum.checked){
        eingabeFensterUser.style.display = "block"
    }
    else{
        eingabeFensterUser.style.display = "none"
    }
}
    
    
//Versuche User einlesen

    function guess(){
        if (versuche4.checked){
            versuche = 4
        } else if(versuche5.checked){
            versuche = 5
        } else if(versuche6.checked){
            versuche = 6
        } else if(custum.checked){
            versuche = eingabeFensterUser.value;
            // console.log('Eingabe User ' + eingabeFensterUser.value)
        }   
        // console.log('Versuche User ' + versuche)


        let guessUser;
        guessUser = guessInput.value
        console.log(guessUser)
        

        if(guessUser < random){
            i++
            box.style.display = "none"
            ubersichtVersuche.style.display = "block"
            ubersichtVersuche.innerHTML = `${i} / ${versuche}`    
            ausgabe.innerHTML += `${i}. You need to guess heigher then ${guessUser}<br/>`
            
        } else if(guessUser > random){
            i++
            box.style.display = "none"
            ubersichtVersuche.style.display = "block"
            ubersichtVersuche.innerHTML = `${i} / ${versuche}`
            ausgabe.innerHTML += `${i}. You need to guess lower then ${guessUser} <br/>`

        } else if(guessUser == random){
            i++
            disableButton.disabled = true
            ubersichtVersuche.style.display = "block"
            ubersichtVersuche.innerHTML = `${i} / ${versuche}`
            ausgabe.innerHTML += `Congratulatios! You won after ${i} rounds. <a href="index.html">Play again!</a>`
                        
            box.style.display = "none"
            disableButton.style.backgroundColor = "green"
            disableButton.style.color = "white"
            ausgabe.style.color = "green"
        }
        
        
        if (i == versuche){
            disableButton.disabled = true   
            disableButton.style.backgroundColor = "red"
            disableButton.style.color = "white"
            ausgabe.style.color = "red"
            ausgabe.innerHTML += `Sorry, you lost after ${i} Rounds. The number was ${versuche}. <a href="index.html">Play again!</a>`
        }
        

        
    }

        


        






    
    
