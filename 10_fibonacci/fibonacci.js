const fibonacci = function(num) {
    // if (typeof num === "string") num = parseInt(num);
    let n1 = 1;
    let n2 = 1;

    if (num < 0) return "OOPS";
    if (num == 1 || num == 2) return 1;
    else {
        for (let i = 3; i <= num; i++) {
            n2 = n1 + n2;
            n1 = n2 - n1;
        }
    }
    return n2;
};


// Do not edit below this line
module.exports = fibonacci;
