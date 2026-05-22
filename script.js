let correctnum = Math.floor(Math.random() * 10) + 1
console.log(correctnum)

let form = document.querySelector('.input')
let guess = document.querySelector('.userinput')
let submit = document.querySelector('.submit')
let previousguess = document.querySelector('.previousguess')
let remainingattempt = document.querySelector('.remainingattempt')
let correctguess = document.querySelector('.correctguess')
let guessednum = document.querySelector('.guessednum')

let leftnum = document.querySelector('.leftnum')
let previousguesses = []
console.log(previousguesses)
let attempt = 1



// i have not made any function which validate that the userinput(guess) are in String or isNaN form bacause in Html Tag i have already used the Number format in Input Tag which do not take any input apart from Number 
form.addEventListener('submit', (s)=>{
    let gues = parseInt(guess.value)
s.preventDefault()


if(attempt <= 10){
    
    if (gues <0 || gues > 10){
        alert("Please Enter a Valid Number between 1 - 10")
    }
    else if(gues === correctnum){
correctguess.innerHTML = `Your Guessed It Right : ${gues}`


}
    else{
        
       
    }
}
else{
    alert("You have no more Attempt ")
    attempt = 0
    
    guessednum.innerHTML = 0 
}
guess.value = '' 
guessednum.innerHTML += `${gues} , ` 
attempt++
leftnum.innerHTML = 11-attempt
    
})