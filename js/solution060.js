// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

function getLengthOfMissingArray(arr) {
    let j = 0;
    if (arr == null) {
      return 0;
    }
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == null) {
        return 0;
      }
    }
    
    
    let lengthArr = arr.map(x => x.length).sort((a,b) => a - b)
    
      if (lengthArr[0] == 0 || lengthArr[0] == null) {
        return 0
      }else {
        var newarr = []
        for (let i = lengthArr[0]; i < lengthArr[lengthArr.length - 1]; i++) {
            if (i != lengthArr[j]) {
                newarr.push(i);
            } 
          j++;
        }
      }
      
      return newarr[0];
  }