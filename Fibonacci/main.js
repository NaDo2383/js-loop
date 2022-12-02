let n = prompt("durin buhel too oruulna uu");
let a = 0, b = 1, series, i = 1, next = 0;
series = b;
while (i < n) {
    next = a + b;
    a = b;
    b = next;
    series = series + " " + next;
    i++;
}

console.log(series);