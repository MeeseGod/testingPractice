function cipher(input){
    let output = "";
    let regex = /^[a-zA-Z\s]*$/;

    if(input.match(regex) != null){
        for(let i = 0; i < input.length; i++){
                let targetedChar = input.charCodeAt(i);
                targetedChar = exceptions(targetedChar);
                output = output + String.fromCharCode(targetedChar);
        };
        return output;
    }
    else{
        return "Error";
    }
};

function exceptions(input){
    if(input == 32){
        return 32;
    }
    else if(input == 122){
        return 97;
    }
    else if(input == 90){
        return 65;
    }
    else{
        return input = input + 1;
    }
}

module.exports = cipher;