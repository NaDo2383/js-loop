let a = Math.round(Math.random() * 100), b;
console.log(a);
while (b != a) {
    b = prompt("ta too oruulna uu")
    if (b != a) {
        if (a > b) {
            alert("tanii oruulsan too songogdson toonoos baga bn");
        } else {
            alert("tanii oruulsan too songogdson toonoos ikh bn");
        }
    } else {
        alert("bayar hurgey ta songogdson toog taalaa");
    }
}