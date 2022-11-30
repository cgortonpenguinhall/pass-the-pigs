function scorePigs(pig1, pig2) {


    if (pig1 == 'Dot' && pig2 == 'Dot') {
        console.log('Dot and Dot')
        return 1
    } else if (pig1 == 'Dot' && pig2 == 'No Dot'){
        console.log('Dot and No Dot')
        return 2 
    }


    return 0 




}

let x = "No Dot"
let y = "Dot"
console.log(scorePigs(x, y))