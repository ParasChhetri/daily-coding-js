// Q.1 Solution
function hashGenerator(str) {
    if (str.trim().length === 0 || str.length > 200) {
        return console.log(false);
    }
    // First convert the string to array
    let strTOArray = str.trim().split(" ");
    console.log(strTOArray);
    // Now map over the array for a perticular character i.e first charcter then replace all the first character with the uppercase
    let change = strTOArray.map((firstChr) => firstChr.replace(firstChr[0], firstChr[0].toUpperCase()));
    console.log(change);
    // After getting first charcter of all the array to uppercase join them to form a single string
    let joinWords = change.join("");
    console.log(joinWords);
    // After joining add # at first along with the string that we get from above
    return console.log(`#${joinWords}`);
}

hashGenerator(" hi my name is paras welcome ");

// 2ND way of solving Q.1
function generateaHash(str) {
    if(str.trim().length === 0 || str.length > 200) {
        return console.log(false);
    }
    let convertTOArray = str.trim().split(" ");
    console.log(convertTOArray);
    let changeChr = convertTOArray.map((firstChr) => firstChr.charAt(0).toUpperCase() + firstChr.slice(1));
    let joinWord = changeChr.join("");
    return console.log(`#${joinWord}`);
}

generateaHash(" hi my self paras abc ");