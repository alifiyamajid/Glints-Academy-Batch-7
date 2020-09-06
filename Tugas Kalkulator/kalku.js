function input() {
    let total1 = ''
    let angka1 = prompt('Angka 1', '');
    let angka2 = prompt('Angka 2', '');
    let simbol = prompt('Simbol', '');

    let total = {
        angka1: parseInt(angka1),
        angka2: parseInt(angka2),
        simbol: simbol
    }
    total1 = calculate(total)
    alert("Hasil = " + total1)
    return total1
}

//kumpulan penghitungan
//Kali
function kali(angka1, angka2) {
    let total2 = ''
    total2 = angka1 * angka2
    return total2
}
//Tambah
function tambah(angka1, angka2) {
    let total2 = ''
    total2 = angka1 + angka2
    return total2
}
//Kurang
function kurang(angka1, angka2) {
    let total2 = ''
    total2 = angka1 - angka2
    return total2
}
//Bagi
function bagi(angka1, angka2) {
    let total2 = ''
    total2 = angka1 / angka2
    return total2
}
//Pangkat
function pangkat(angka1, angka2) {
    let total2 = ''
    total2 = angka1 ^ angka2
    return total2
}
//Math.max
function max(angka1, angka2) {
    let total2 = ''
    total2 = Math.max(angka1, angka2)
    return total2
}
//Math.min
function min(angka1, angka2) {
    let total2 = ''
    total2 = Math.min(angka1, angka2)
    return total2
}

//Demo
function calculate(angka) {
    let template = ''
    if (angka.simbol == '*') {
        template = kali(angka.angka1, angka.angka2)
    } else if (angka.simbol == '+') {
        template = tambah(angka.angka1, angka.angka2)
    } else if (angka.simbol == '-') {
        template = kurang(angka.angka1, angka.angka2)
    } else if (angka.simbol == '^') {
        template = pangkat(angka.angka1, angka.angka2)
    } else if (angka.simbol == 'max') {
        console.log(angka.simbol)
        template = max(angka.angka1, angka.angka2)
    } else if (angka.simbol == 'min') {
        console.log(angka.simbol)
        template = min(angka.angka1, angka.angka2)
    } else {
        template = bagi(angka.angka1, angka.angka2)
    }
    return template
}