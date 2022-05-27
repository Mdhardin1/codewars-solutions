// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    //break up the string into an array of single characters
    //check that array number of x's and o's
    //return true or false depending on whether the array has equal amounts of x's or o's or not
    let arr = str.split('');
    let numO = 0;
    let numX = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() == 'o') {
            numO++;
        }else if (arr[i].toLowerCase() == 'x') {
            numX++;
        }
    }
    return numO == numX;
}