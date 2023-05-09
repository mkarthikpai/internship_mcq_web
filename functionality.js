const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let showScore = document.getElementById("score");
let play = false;
let newWords = "";
let randWords = "";
let score=0;
let k=0;
let gamearea = document.querySelector(".gameArea");

let sWords = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Watermelon", "Butterfruit", "Chikku", "Strawberry", "Muskmelon"];

const createNewWords = () =>{
    let ranNum = Math.floor(Math.random()* sWords.length);
    let newTempSwords = sWords[ranNum];
    
    return newTempSwords;
}

const scrambleWords = (arr) => {
    for (let i = arr.length-1; i>=0; i--){
        let temp = arr[i];
        let j = Math.floor(Math.random()*(i+1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

btn.addEventListener('click', function () {
    if(!play){
        play = true;
        btn.innerHTML= "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randWords = scrambleWords(newWords.split("")).join("");
        msg.innerHTML = `GUESS THE FRUIT: ${randWords}`;
    }
    else{
        let tempWord = guess.value;
        if (tempWord === newWords) {
            play = false;
            msg.innerHTML = `BRAVO! YOUR CORRECT. IT'S ${newWords}`;
            score = score+10;
            k = score;
            showScore.innerHTML=k;
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";
            if(k==30){
                btn.classList.toggle('hidden');
                msg.innerHTML = "Thank you! you have reached max score you can logout now";
                
            }
        }
        else{
            msg.innerHTML = `WRONG!. ${randWords} . PLEASE GUESS THIS ONCE AGAIN`;
            
        }
    }
})