const isPalindrome = (str) => {
    let text = str.length;

    for (let i = 0; i < text / 2; i++) {
        if (string[i] !== string[text - 1 - i]) {
            return "false";
        }
    }
    return "true";
};

// let string = "world"; //false
let string = "racecar"; //true
let value = isPalindrome(string);

console.log(value);