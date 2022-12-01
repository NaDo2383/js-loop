let n = prompt("yamar negen too oruulna uu"), a = n.length - 1, b = 0, c = true;
while (a >= b) {
    if (n[a] != n[b]) {
        c = false;
    }
    b++;
    a--;
}
console.log(c);
