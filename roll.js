
function roll() {
    let randomNumber = Math.random()
    if (randomNumber <= 0.349) {
        return "Dot"
    } else if (randomNumber <= 0.651) {
        return "No Dot"
    } else if (randomNumber <= 0.875) {
        return "Razorback"
    } else if (randomNumber <= 0.963) {
        return "Trotter"
    } else if (randomNumber <= 0.993) {
        return "Snouter"
    } else  {
        return "Leaning Jowler"
    }
}
   

function presentPigs(whichPlayer, pig1, pig2) {
    document.getElementById('player' + whichPlayer + 'Pig1').innerHTML = pig1
    document.getElementById('player' + whichPlayer + 'Pig2').innerHTML = pig2
    console.log('ur mom')
}
