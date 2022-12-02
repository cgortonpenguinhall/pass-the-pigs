function scorePigs(pig1, pig2) {


    if ((pig1 == "Dot" || pig1 == "No Dot") && (pig2 == "Razer" ||pig2 ==  "Trotter" ||pig2 ==  "Leaning Jowler")) {
        console.log("5")
    } else if ((pig1 == "Dot") && (pig2 == "dot")) {
        console.log("1")
    } else if ((pig1 == "No Dot") && (pig2 == "No Dot")) {
        console.log("1")
    } else if ((pig1 == "Dot") && (pig2 == "No Dot")) {
        console.log("0")
    } else if ((pig1 == "No Dot") && (pig2 == "Dot")) {
        console.log("0")
    } else if ((pig1 == "Dot" || pig1 == "Not Dot") && (pig2 == "Snouter")) {
        console.log("10")
    } else if ((pig1 == "Snouter") && (pig2 == "Dot" ||pig2 == "No Dot")) {
        console.log("10")
    } else if ((pig1 == "Razer" ||pig1 ==  "Trotter" ||pig1 ==  "Leaning Jowler") && (pig2 == "Dot" || pig2 == "No Dot")) {
        console.log("5")
    } else if ((pig1 == "Razorback") && (pig2 == "Razorback")) {
        console.log("20")
    } else if ((pig1 == "Trotter") && (pig2 == "Trotter")) {
        console.log("20")
    }


    return 0




}

let x = "Snouter"
let y = "Dot"
console.log(scorePigs(x, y))
