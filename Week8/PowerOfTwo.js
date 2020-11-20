function powersOfTwo(angka) {
    let string = "";

    const number = angka.toString();

    for (let i = 0; i < number.length; i++) {
        string += number[i];
    }
    if (string[0] === string[1]) {
        console.log(false);
    } else {
        console.log(true);
    }
}
powersOfTwo(16); // true
powersOfTwo(22); // false