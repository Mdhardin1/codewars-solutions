// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
    let arr = str.split('')

    for (let i = arr.length - 1; i >= 0; i--) {
        let currentLetter = arr.pop().toLowerCase()
        if (arr.includes(currentLetter)) {
            return false
        }
    }
    return true
}