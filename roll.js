// let results = [
//     'no dot',
//     'dot',
//     'trotter',
//     'razorback',
//     'leaning jowler',
//     'snouter'
// ]
// let allResults = results[Math.floor(Math.random() * results.length)]
// console.log(allResults)

function roll() {
    return randomNumber
}


let randomNumber = Math.random()

if (randomNumber <= 0.349) {
    console.log("Dot");
} else if (randomNumber <= 0.651) {
    console.log("No Dot")
} else if (randomNumber <= 0.875) {
    console.log("Razorback")
} else if (randomNumber <= 0.963) {
    console.log("Trotter")
} else if (randomNumber <= 0.993) {
    console.log("Snouter")
} else if (randomNumber <= 1) {
    console.log("Leabning Jowler")
}



