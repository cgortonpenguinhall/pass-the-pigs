//this dose not work yet
function playerDesign(whichPlayer){
    // document.getElementById('player'+ whichPlayer).setAttribute('class', 'w3-card w3-container w3-dark-gray w3-round-large')

    if(whichPlayer == 0){
        document.getElementById('player0').setAttribute('class', 'w3-card w3-container w3-dark-gray w3-round-large')
    }else{
        document.getElementById('player0').setAttribute('class', 'w3-card w3-container w3-light-gray w3-round-large')
    }

    if(whichPlayer == 1){
        document.getElementById('player1').setAttribute('class', 'w3-card w3-container w3-dark-gray w3-round-large')
    }else{
        document.getElementById('player1').setAttribute('class', 'w3-card w3-container w3-light-gray w3-round-large')
    }

    if(whichPlayer == 2){
        document.getElementById('player2').setAttribute('class', 'w3-card w3-container w3-dark-gray w3-round-large')
    }else{
        document.getElementById('player2').setAttribute('class', 'w3-card w3-container w3-light-gray w3-round-large')
    }

    if(whichPlayer == 3){
        document.getElementById('player3').setAttribute('class', 'w3-card w3-container w3-dark-gray w3-round-large')
    }else{
        document.getElementById('player3').setAttribute('class', 'w3-card w3-container w3-light-gray w3-round-large')
    }
}