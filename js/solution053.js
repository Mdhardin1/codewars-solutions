// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    let str = num.toString();
    let len = str.length
    let result=""
    for (let i = 0; i < len; i++) {
        if (str[i] != '0') {
            let tempNum=''
            for (let j = 0; j < len - i; j++) {
                if (j == 0) {
                    tempNum = str[i]
                } else {
                    tempNum += '0'
                }
            }
            if (i == len -1){
                result += tempNum;
            }else {
                result += tempNum + " + ";
            }
        }  
    }
    if (result[result.length - 1] == "+" || result[result.length - 1] == " ") {
         result = result.slice(0,result.length - 2);
    }
    return result.trim();
}