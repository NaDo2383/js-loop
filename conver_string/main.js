let word1 = prompt("ymar negen ug oruulna uu");
let word2 = word1.toLocaleUpperCase();
let i = 0, wordlast = "";
console.log(word1);
while (i < word1.length) {
    if (word1[i] != word2[i]) {

        wordlast = wordlast + word1[i].toUpperCase();
    } else {
        wordlast = wordlast + word1[i].toLowerCase();
    }

    i++;
}
console.log(wordlast);
