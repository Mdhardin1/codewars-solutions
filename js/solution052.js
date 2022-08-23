// If you have completed the Tribonacci sequence kata, you would know by now that mister Fibonacci has at least a bigger brother. If not, give it a quick look to get how things work.

// Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.

// Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.



//PREP

//Parameters and Returns
//you are given an array of numbers and the length of that array determines what each subsequent number in the resultant array will be. 
//Examples
// xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
// xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}
// xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
// xbonacci {1,1} produces the Fibonacci sequence

//Pseudocode
//I will need to loop through the given array and make a new array containing n elements

function Xbonacci(signature, n) {
    
    let sliceStart = 0;
    let sliceEnd = signature.length;
    if (n < signature.length) {
        return signature.slice(0,n);
    }else {
    
        for (let i = signature.length; i < n; i++) {
            let arr = signature.slice(sliceStart, sliceEnd);
            let sum = arr.reduce((acc, a) => acc + a, 0);
            sliceEnd++;
            sliceStart++;
            signature.push(sum);
        }
    }
    return signature;
}