// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str){
    let vowelsCount = 0; 
    let arr = str.split('')
    for (let letter of arr) {
        if (letter == 'a' ||
           letter == 'e' ||
           letter == 'i' ||
           letter == 'o' ||
           letter == 'u') {
          vowelsCount++;
        }
    }
    return vowelsCount;
}