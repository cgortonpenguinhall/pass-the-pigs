
let totalScore = document.getElementById('player' +whichPlayer+ 'TotalScore') 
let score = document.getElementById('player' +whichPlayer+ 'HandScore') 

function checkWinner(player,score){
    if((totalScore + score) == 100 || (totalScore + score) > 100){
        console.log("winner")
    }
}
