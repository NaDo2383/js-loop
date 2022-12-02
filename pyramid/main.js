let zai1 = " ", mor = "*", od2 = "**", n = prompt("piramidiin mornii dugaariig oruulna uu"), zai = " ", i = n - 1, a = 0, b = n;
while (b > 0) {
    for (let y = 1; y <= i; y++) {
        zai1 = zai1 + zai;
    }
    for (let x = 0; x < a; x++) {
        mor = mor + od2;
    }
    mor = zai1 + mor;
    console.log(mor);
    b--;
    i--;
    a++;
    mor = "*";
    zai1 = " ";
}
