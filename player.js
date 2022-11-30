//this dose not work yet
function playerDesign(whichPlayer){
    // document.getElementById('player'+ whichPlayer).setAttribute('class', 'w3-card w3-container w3-dark-gray w3-round-large')

    if(whichPlayer == 0){
        document.getElementById('player0').setAttribute('class', 'w3-card w3-container w3-dark-gray w3-round-large')
        document.getElementById("player0RollButton").disabled = false;
        document.getElementById("player0PassButton").disabled = false;
    }else{
        document.getElementById('player0').setAttribute('class', 'w3-card w3-container w3-light-gray w3-round-large')
        document.getElementById("player0RollButton").disabled = true;
        document.getElementById("player0PassButton").disabled = true;
    }

    if(whichPlayer == 1){
        document.getElementById('player1').setAttribute('class', 'w3-card w3-container w3-dark-gray w3-round-large')
        document.getElementById("player1RollButton").disabled = false;
        document.getElementById("player1PassButton").disabled = false;
    }else{
        document.getElementById('player1').setAttribute('class', 'w3-card w3-container w3-light-gray w3-round-large')
        document.getElementById("player1RollButton").disabled = true;
        document.getElementById("player1PassButton").disabled = true;
    }

    if(whichPlayer == 2){
        document.getElementById('player2').setAttribute('class', 'w3-card w3-container w3-dark-gray w3-round-large')
        document.getElementById("player2RollButton").disabled = false;
        document.getElementById("player2PassButton").disabled = false;
    }else{
        document.getElementById('player2').setAttribute('class', 'w3-card w3-container w3-light-gray w3-round-large')
        document.getElementById("player2RollButton").disabled = true;
        document.getElementById("player2PassButton").disabled = true;
    }

    if(whichPlayer == 3){
        document.getElementById('player3').setAttribute('class', 'w3-card w3-container w3-dark-gray w3-round-large')
        document.getElementById("player3RollButton").disabled = false;
        document.getElementById("player3PassButton").disabled = false;
    }else{
        document.getElementById('player3').setAttribute('class', 'w3-card w3-container w3-light-gray w3-round-large')
        document.getElementById("player3RollButton").disabled = true;
        document.getElementById("player3PassButton").disabled = true;
    }
}