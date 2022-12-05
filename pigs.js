let whichPlayer = 0
let score = 0
let TotalScore0 = 0
let TotalScore1 = 0
let TotalScore2 = 0
let TotalScore3 = 0

playerDesign(whichPlayer)
function handleClick(whichBTN) {
    //replay
    if (whichBTN == 'replayButton') {
        location.reload();
    }
    //makes  players turn  

    if (whichBTN == 'player' + whichPlayer + 'RollButton') {
        let pig1 = roll()
        let pig2 = roll()
        let rollScore = scorePigs(pig1, pig2)
        presentPigs(whichPlayer, pig1, pig2)

        if (rollScore == 0) {
            score = 0
            document.getElementById('player' + whichPlayer + 'HandScore').innerHTML = 'Score: PIG OUT!'
            Pass()
        } else {
            score += rollScore
        }

        document.getElementById('player' + whichPlayer + 'HandScore').innerHTML = 'Score: ' + score
        checkWinner()


    } else if (whichBTN == 'player' + whichPlayer + 'PassButton') {
        Pass()
    }
}

//changePlayer
function getNextPlayer(CurrentPlayer) {
    if (CurrentPlayer < 3) {
        whichPlayer++
    } else {
        whichPlayer = 0
    }
}

function Pass() {

    //add score
    if (whichPlayer == 0) {
        TotalScore0 += score
        document.getElementById('player' + whichPlayer + 'TotalScore').innerHTML = 'Total Score: ' + TotalScore0
    } else if (whichPlayer == 1) {
        TotalScore1 += score
        document.getElementById('player' + whichPlayer + 'TotalScore').innerHTML = 'Total Score: ' + TotalScore1
    } else if (whichPlayer == 2) {
        TotalScore2 += score
        document.getElementById('player' + whichPlayer + 'TotalScore').innerHTML = 'Total Score: ' + TotalScore2
    } else if (whichPlayer == 3) {
        TotalScore3 += score
        document.getElementById('player' + whichPlayer + 'TotalScore').innerHTML = 'Total Score: ' + TotalScore3
    }

    getNextPlayer(whichPlayer)
    playerDesign(whichPlayer)



    score = 0
}

function checkWinner() {
    let finalScore

    if (whichPlayer == 0) {
        finalScore = TotalScore0
    } else if (whichPlayer == 1) {
        finalScore = TotalScore1
    } else if (whichPlayer == 2) {
        finalScore = TotalScore2
    } else if (whichPlayer == 3) {
        finalScore = TotalScore3
    }

    if ((finalScore + score) >= 100) {
        document.getElementById('player' + whichPlayer).setAttribute('class', 'w3-card w3-container w3-yellow w3-round-large')
        score = 0
        document.getElementById('replay').setAttribute('class', "w3-row w3-container w3-show")

        document.getElementById("player" + whichPlayer + "RollButton").disabled = true;
        document.getElementById("player" + whichPlayer + "PassButton").disabled = true;
    }
}