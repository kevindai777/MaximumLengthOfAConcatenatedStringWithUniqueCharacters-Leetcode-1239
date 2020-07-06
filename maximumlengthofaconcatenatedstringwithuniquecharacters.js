//Objective is to find the longest concenated string with unique characters in a 1-D array.

let temp = []
let index = 0
let result = []
    
backtrack(temp, index)
    
//Get all possible subsets w/ backtracking
function backtrack(temp, index) {
    result.push([...temp].join(''))
        
    for (let i = index; i < arr.length; i++) {
        temp.push(arr[i])
        backtrack(temp, i + 1)
        temp.pop()
    }
}
    
let tempResult = []
    
//Get all lengths of strings that have unique characters
for (let i = 0; i < result.length; i++) {
    if (isUnique(result[i])) {
        tempResult.push(result[i].length)
    }
}
    
//Find the string with the longest length
if (tempResult.length == 0) {
    return 0
} else {
    return Math.max(...tempResult)    
}
    
//This is to see if the string has unique characters
function isUnique(temp) {
    if (temp.length == 0) {
        return false
    }
        
    let set = new Set()
        
    for (let i = 0; i < temp.length; i++) {
        if (!set.has(temp[i])) {
            set.add(temp[i])
        } else {
            return false
        }
    }
        
    return true
}