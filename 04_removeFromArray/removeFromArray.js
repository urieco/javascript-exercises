const removeFromArray = function(array, ...items) {
    items.forEach((item) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === item) {
                array.splice(i, 1);
            }
        }
    })
    return array;
};

//SOLUTION:
// const removeFromArray = function (...args) {
//     const array = args[0]; 
//     //the very first item in our list of arguments is the array, we pull it out with args[0];
//     const newArray = [];
//     array.forEach((item) => {
//         if (!args.includes(item)) {
//             //for each item in the array given, check if each item is equal to the args. Push the ones that aren't into a new array and output it.
//             newArray.push(item);
//         }
//     });
//     return newArray;
// }

//SOLUTION 2: 
// var removeFromArray = function(...args) {
//     const array = args[0];
//     return array.filter(val => !args.includes(val));
// }

// Do not edit below this line
module.exports = removeFromArray;
