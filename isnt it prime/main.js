let n = prompt("100 s baga buhel too oruulna uu"), i = 2, a = true;

while (i < n && n < 100) {
    if (n % i == 0) {
        a = false;
    }

    i++;
}
if (n > 100) {
    console.log("tanii oruulsan too 100s ih bn")
} else {
    console.log(a);
}
