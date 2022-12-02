let whichPlayer = 0
let score = 0
let TotalScore0 = 0
let TotalScore1 = 0
let TotalScore2 = 0
let TotalScore3 = 0

playerDesign(whichPlayer)
function handleClick(whichBTN) {

    //makes  players turn  
    
        if (whichBTN == 'player' +whichPlayer+ 'RollButton') {
            let pig1 = roll()
            let pig2 = roll()
            let rollScore = scorePigs(pig1, pig2)
            presentPigs(whichPlayer,pig1,pig2)
            console.log(scorePigs(pig1, pig2))
            
            if(rollScore == 0){
                score = 0
                document.getElementById('player' +whichPlayer+ 'HandScore').innerHTML = 'Score: PIG OUT!'
                Pass()
            }else{
              score += rollScore  
            }
            
            document.getElementById('player' +whichPlayer+ 'HandScore').innerHTML = 'Score: '+ score
            console.log(score)

        } else if(whichBTN == 'player' +whichPlayer+ 'PassButton'){
            Pass()
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

    function Pass(){
        console.log('thats a Pass  ' + whichPlayer)
            
            //add score
            if(whichPlayer == 0){
                TotalScore0 += score 
                document.getElementById('player' +whichPlayer+ 'TotalScore').innerHTML = 'Total Score: ' + TotalScore0
            }else if(whichPlayer == 1){
                TotalScore1 += score 
                document.getElementById('player' +whichPlayer+ 'TotalScore').innerHTML = 'Total Score: ' + TotalScore1
            }else  if(whichPlayer == 2){
                TotalScore2 += score 
                document.getElementById('player' +whichPlayer+ 'TotalScore').innerHTML = 'Total Score: ' + TotalScore2
            }else  if(whichPlayer == 3){
                TotalScore3 += score 
                document.getElementById('player' +whichPlayer+ 'TotalScore').innerHTML = 'Total Score: ' + TotalScore3
            }

            getNextPlayer(whichPlayer)
            playerDesign(whichPlayer)
            
            

            score = 0
    }