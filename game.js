let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let hand =document.getElementById("hand")
let your = document.getElementById("your")
let computer  = document.getElementById("computer")
let operator=0;
let out = document.getElementById("out")
let score1 = 0;
let score2 = 0;
let sc1= document.getElementById("sc1")
let sc2 = document.getElementById("sc2")
let rps = document.getElementById("rps")
let inner =document.getElementById("inner")
let again =document.getElementById("again")
rock.addEventListener("click",PlayRock)
paper.addEventListener("click",PlayPaper)
scissors.addEventListener("click",PlayScissors)
function random(){
    operator = Math.floor(Math.random() * 3);
    switch (operator) {
        case 1: out.setAttribute("src","./assets/rock-hand.png")
            break;
        case 2: out.setAttribute("src","./assets/paper-hand.png")
            break;
        case 3: out.setAttribute("src","./assets/scissors-hand.png")
            break;
    }
}
function score(){
    sc1.textContent=score1
    sc2.textContent=score2
}
function PlayRock(){
    hand.setAttribute("src","./assets/rock-hand.png")
    random()
    if(operator==3){
        score1++
    }else if(operator==2){
        score2++
    }
    score()
    winning()
}
function PlayPaper(){
    hand.setAttribute("src","./assets/paper-hand.png")
    random()
    if(operator==1){
        score1++
    }else if(operator==3){
        score2++
    }
    score()
    winning()
}
function PlayScissors(){
    hand.setAttribute("src","./assets/scissors-hand.png")
    random()
    if(operator==2){
        score1++
    }else if(operator==1){
        score2++

    }
    
    score()
    winning()
}
score()
function winning(){
    if(score1==5){
        rock.style.visibility="hidden"
        paper.style.visibility="hidden"
        scissors.style.visibility="hidden"
        inner.textContent="You won the game"
        inner.style.visibility="visible"
        again.style.visibility="visible"
    }
    if(score2==5){
        rock.style.visibility="hidden"
        paper.style.visibility="hidden"
        scissors.style.visibility="hidden"
        inner.textContent="You lost the game"
        inner.style.visibility="visible"
        again.style.visibility="visible"
    }
}
again.onclick=()=>{
    location.reload();
}

