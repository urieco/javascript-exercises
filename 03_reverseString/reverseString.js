const reverseString = function(string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        result += string[string.length-1-i];
    }
return result;
};

// Do not edit below this line
module.exports = reverseString;
