function capitalize(input){
    let firstLetter = input.charAt(0);
    return input.replace(input.charAt(0), firstLetter.toUpperCase());
};

module.exports = capitalize;