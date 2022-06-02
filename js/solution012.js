// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//PREP (parameters, returns, examples, pseudocode)
//Parameters
//You are given an array of single letter strings that are either n, s, w, e and it can be any length long

//Returns
//You need to return whether or not the directions given in the array will return you to you starting point in exactly ten minutes which means the length of the array has to be exactly ten since each block (and therefore each direction) takes one minute each. Can do this by making sure the number of n/s and w/e match each other and there are ten total directions in the array. 

//Examples
//['w','s','w'] returns false
//['n','s','n','s','w','e','w','e','w','e']

//Psuedocode
function isValidWalk(walk) {
    if (walk.length === 10) {
        let ns = 0;
        let ew = 0;
        //going to iterate through the array and count the number of n/s and e/w and those sums are equal to zero, then return true
        walk.forEach(element => {
            if (element.toLowerCase() === 'w') {
                ew++;
            }else if (element.toLowerCase() === 'n') {
                ns++;
            }else if (element.toLowerCase() === 'e') {
                ew--;
            }else if (element.toLowerCase() === 's') {
                ns--;
            }
        })
        return ns === 0 && ew === 0;
        
    }else {
        return false
    }
}