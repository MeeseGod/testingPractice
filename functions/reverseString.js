function reverseString(input){
    let newString = "";
    for(let i = input.length - 1; i >= 0; i--){
        newString = newString + input.charAt(i);
    }
    return newString;
};

module.exports = reverseString;