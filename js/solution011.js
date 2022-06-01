// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".

// Examples:
// (form of the result depends on the language)

// race(720, 850, 70) => [0, 32, 18] or "0 32 18"
// race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
// Note:
// See other examples in "Your test cases".

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

// ** Hints for people who don't know how to convert to hours, minutes, seconds:

// Tortoises don't care about fractions of seconds
// Think of calculation by hand using only integers (in your code use or simulate integer division)
// or Google: "convert decimal time to hours minutes seconds"



//PREP

//Parameters
//the parameter g given in feet is the amount that t1 leads when t2 starts moving
//v1 and v2 are the respective speeds of t1 and t2 in ft/hr

//Returns
//need to return the amount of time in format of [hr, min, s] that it will take t2 to catch-up to t1
//if v1 >= v2, then return null



function race(v1, v2, g) {
    //create equations for t1 and t2
    let t = -g / (v1 - v2);
  
    //solve for t since we know that when the distances are equal, t2 will have caught t1
    if (v2 > v1) {
        return [Math.floor(t), Math.floor(t * 60 % 60), Math.floor( (t * 60 - Math.floor(t * 60 % 60)) * 60 % 60 ) ]
    }else {
        return null;
    }
}