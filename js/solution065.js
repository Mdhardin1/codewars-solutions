// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

function parse(data) {
    let arr = data.split('');
    let val = 0;
    let result = [];
    arr.forEach(x => {
        switch (x) {
            case 'i':
                val++;
                break;
            case 'd':
                val--;
                break;
            case 's':
                val = val**2;
                break;
            case 'o':
                result.push(val);
                break;
        }
    })
    return result;
}