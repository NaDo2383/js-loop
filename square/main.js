let n = prompt("n*n haritsaatai square iin n utgiig oruulna uu"), od1 = "*\n", od2 = "*", mor = "", zai = " ", zai1 = "", mor1 = "";
// for (x = 1; x < n; x++) {
//     od1 = od1 + od2;
// }
// console.log(od1);
// for (let z = 2; z < n; z++) {
//     for (let y = 2; y < n; y++) {
//         zai1 = zai1 + zai;
//     }
//     mor = "*" + zai1 + "*";
//     console.log(mor);
//     zai1 = "";
// }
// console.log(od1);


for (x = 1; x < n; x++) {
    od1 = od2 + od1;
}
for (let y = 2; y < n; y++) {
    zai1 = zai1 + zai;
}
mor = "*" + zai1 + "*\n";
zai1 = "";
for (let z = 2; z < n; z++) {
    mor1 = mor1 + mor;
}
square = od1 + mor1 + od1;
console.log(square);