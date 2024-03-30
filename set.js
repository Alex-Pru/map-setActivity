let myArray = [30, 30, 40, 5, 225, 2039, 2045, 5]

function noRepetitions(array){
    let mySet = new Set(array)
    return mySet
}

console.log(noRepetitions(myArray))