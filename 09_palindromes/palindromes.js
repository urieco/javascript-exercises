const palindromes = function (string) {
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    string = string.toLowerCase();
    string = string.replace(/\s/g, "")
    let newString ="";
    for (let i = 0; i < string.length; i++) {
        newString += string[string.length - 1 - i];
    }
    if (newString == string) return true;
    else return false;
};


// Do not edit below this line
module.exports = palindromes;
