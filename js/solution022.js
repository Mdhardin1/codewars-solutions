// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: r must be without duplicates.

//PREP
//parameters
//you are given two arrays containing different strings as elements. The strings in the first array are the ones we are looking for to see if those are in the words of the second array

//returns
//You need to check the second array and see if the words in the first make up part of the words in the second and then return an array with the words that fit

//examples
//Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

//Psuedocode
//create a function that takes in two arrays
function inArray(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i].includes(arr1[j])) {
                if (!newArr.includes(arr1[j])){
                newArr.push(arr1[j]);
                }
            }
        }
    }
    return newArr.sort();
}