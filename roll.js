
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
   

console.log(roll()) 
