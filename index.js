// Code your solution here
function findMatching(someArray,someString){
    return someArray.filter(n =>{
        return n.toLowerCase() == someString.toLowerCase()
    })
}

function fuzzyMatch(someArray,someString){
    return someArray.filter(n => 
        n.toLowerCase().indexOf(someString.toLowerCase()) === 0
    )
}

function matchName(someArray,someString){
    return someArray.filter(n => 
        n.name === someString
    )
}