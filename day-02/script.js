// Q.1 SOLUTION
const lastWordLength = (s) => {
    if (s.length === 0) {
        return 0;
    }
    else {
        const word = s.trim().split(' ');
        const wordLength = word[word.length - 1].length;
        return wordLength;
    }
}

console.log(lastWordLength("  my naem is paras    o "));


// Q.2 SOLUTION
const firstWordLength = (s) => {
    if (s.length === 0) {
        return 0;
    }
    else {
        const word = s.trim().split(' ');
        const wordLength = word[0].length;
        return wordLength;
    }
}

console.log(firstWordLength("     abc hrlo "));

// Q.3 SOLUTION
const isIsomorphic = (s,t) => {
    let mapS = {}, mapT = {};
    for (let i = 0; i < s.length; i++) {
        if (mapS[s[i]]) {
            if (mapS[s[i]] !== t[i]) {
                return false;
            }
        }
        else {
            mapS[s[i]] = t[i];
        }
        if (mapT[t[i]]) {
            if (mapT[t[i]] !== s[i]) {
                return false;
            }
        }
        else {
            mapT[t[i]] = s[i];
        }
    }
    return true;
}

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo","bar"));
console.log(isIsomorphic("paper","title"));
console.log(isIsomorphic("badc","kikp"));