var data = ['0001', 'Roman Alamsyah ', 'Bandar Lampung', '21/05/1989', 'Membaca'];

//splice
data.splice(1, 1, 'Roman Alamsyah Elsharawy');
data.splice(2, 1, 'Provinsi Bandar Lampung');
data.splice(4, 1, 'Pria', 'SMA Internasional Metro');

console.log(data);

//Split
var split = data[3].split("/");
console.log(split);

//Switch
var bulan = split[1];
switch (bulan = '05') {
    case '01':
        console.log('Januari');
        break;
    case '02':
        console.log('Februari');
        break;
    case '03':
        console.log('Maret');
        break;
    case '04':
        console.log('April');
        break;
    case '05':
        console.log('Mei');
        break;
        defaiult:
            console.log('default');
}

//console punya si Split.
console.log(bulan);

//Sort Descending
var sortDesc = data[3].split("/").sort(function (value1, value2) {
    return value2 - value1
});
console.log(sortDesc);

//Join
join = split.join(" - ");
console.log(join);

// Slice
var data = data[1];
var potongNama = data.slice(0, 14);
console.log(potongNama);