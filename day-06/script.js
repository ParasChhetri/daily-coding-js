// Q.1 Solustion Method 1

const find_longest_word = (str) => {
    if (str.trim().length === 0) {
        return console.log(false);;
    }
    return console.log(str.split(" ").sort((a,b) => b.length - a.length).at(0));
}

find_longest_word("welcome to my eoutube channel be happy coder");

// Q.1 Solution Method 2
// Using reduce method

const findLongest = (str) => {
    if (str.trim().length === 0) {
        return console.log(false);;
    }
    return console.log(str.split(" ").reduce((longestWord, currentWord) => currentWord.length > longestWord.length ? currentWord : longestWord), "");
}

findLongest(" Any string it can be ");
find_longest_word("  ");
findLongest("  ")



// Dosent work the way it needs to be
// const findLongestWord = (str) => {
//     if(str.trim().length === 0) {
//         return console.log(false);
//     }
//     let word = str.split(" ");
//     let longestWord = 0;
//     for( let i = 0; i < word.length; i++) {
//         if (word[i].length > longestWord) {
//             longestWord = word[i].length;
//         }
//     }
//     return console.log(longestWord);
// }

// findLongestWord("It can be me myown ");


const arrangement = (str) => {
    return console.log(str.split("").sort((a,b)=> b.charCodeAt() - a.charCodeAt()));
}

arrangement("a2ZEbD3@O!1&pXn jcsdbcubc");

const check = () => {
    let a = 10;
    return console.log(Number(a+"8"));   
}
check();

const check2 = (aplNum, aplNum2) => {
    let myChar = aplNum.charCodeAt();
    let myChar2 = aplNum2.charCodeAt();
    console.log(myChar);
    console.log(typeof myChar);
    let finalChar = myChar - myChar2;
    return console.log(finalChar);
    // return console.log(aplNum.charCodeAt());
}

check2("z", "F");