let whichPlayer = 0
playerDesign(whichPlayer)
function handleClick(whichBTN) {
  
    //makes  players turn  
    if (whichPlayer == 0 && (whichBTN == 'player0RollButton' || whichBTN == 'player0PassButton')){
        if (whichBTN == 'player0RollButton') {
            console.log('thats a Roll')
        }else{
            console.log('thats a Pass  ' + whichPlayer)
            whichPlayer++
            playerDesign(whichPlayer)
        }
    }

    if (whichPlayer == 1 && (whichBTN == 'player1RollButton' || whichBTN == 'player1PassButton')){
        if (whichBTN == 'player1RollButton') {
            console.log('thats a Roll')
        }else{
            console.log('thats a Pass  ' + whichPlayer)
            whichPlayer++
            playerDesign(whichPlayer)
        }
    }


    if (whichPlayer == 2 && (whichBTN == 'player2RollButton' || whichBTN == 'player2PassButton')){
        if (whichBTN == 'player2RollButton') {
            console.log('thats a Roll')
        }else{
            console.log('thats a Pass  ' + whichPlayer)
            whichPlayer++
            playerDesign(whichPlayer)
        }
    }


    if (whichPlayer == 3 && (whichBTN == 'player3RollButton' || whichBTN == 'player3PassButton')){
        if (whichBTN == 'player3RollButton') {
            console.log('thats a Roll')
        }else{
            console.log('thats a Pass  ' + whichPlayer)
            whichPlayer = 0
            playerDesign(whichPlayer)
        }
    }
}
