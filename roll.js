
function roll() {
    let randomNumber = Math.random()
    if (randomNumber <= 0.349) {
        console.log("Dot")
    } else if (randomNumber <= 0.651) {
        console.log("No Dot")
    } else if (randomNumber <= 0.875) {
        console.log("Razorback")
    } else if (randomNumber <= 0.963) {
        console.log("Trotter")
    } else if (randomNumber <= 0.993) {
        console.log("Snouter")
    } else if (randomNumber <= 1) {
        console.log("Leaning Jowler")
    }
}


for (let i = 0; i <= 1000; i++) {
    roll()
}

