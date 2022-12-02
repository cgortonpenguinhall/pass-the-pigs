let whichPlayer = 0
playerDesign(whichPlayer)
function handleClick(whichBTN) {

    //makes  players turn  
    
        if (whichBTN == 'player' +whichPlayer+ 'RollButton') {
            let pig1 = roll()
            let pig2 = roll()
            presentPigs(whichPlayer,pig1,pig2)

        } else if(whichBTN == 'player' +whichPlayer+ 'PassButton'){
            console.log('thats a Pass  ' + whichPlayer)
            getNextPlayer(whichPlayer)
            playerDesign(whichPlayer)
        }
    }

    //changePlayer
    function getNextPlayer(CurrentPlayer){
        if(CurrentPlayer <3){
            whichPlayer++
        }else{
            whichPlayer = 0
        }
    }