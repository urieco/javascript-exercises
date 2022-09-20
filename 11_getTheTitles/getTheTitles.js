const getTheTitles = function(array) {
    let result = [];
    let item = "title";
    for (let i = 0; i < array.length; i++) {
        result.push(array[i][item]);
    }
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
