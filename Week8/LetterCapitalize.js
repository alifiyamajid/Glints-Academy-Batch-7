const letterCapitalize = (str) => {
    let word = "";
    let text = str.split(" ");

    for (let i = 0; i < text.length; i++) {
        word += text[i][0].toUpperCase() + text[i].slice(1) + " ";
    }

    return word;
};

console.log(letterCapitalize("hello world"));
console.log(letterCapitalize("alif hanamifiya majid"));
