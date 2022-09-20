const sumAll = function(num1, num2) {
    let sum = 0;
    if (num1*num2 < 0 || typeof (num1 + num2) !== "number") {
        return "ERROR";
    } else {
    let array = [num1, num2];
    array.sort();
    for (let i = array[0]; i <= array[1]; i++) {
        sum += i;
    }
    } 
    return sum;
};

//SOLUTION
// const sumAll = function(min, max) {
//     if (!Number.isInterger(min) || !Number.isInteger(max)) return "ERROR";
//     if (min < 0 || max < 0) return "ERROR";
//     if (min > max) {
//         const tempt = min;
//         min = max;
//         max = temp;
//         //min and max swap values
//     }
//     let sum = 0;
//     for (let i = min; i < max + 1; i++) {
//         sum += i;
//     }
//     return sum;
// };

// Do not edit below this line
module.exports = sumAll;
