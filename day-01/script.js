// Q.1 SOLUTION
function reverseWords( str ) {
    return console.log(str.split("").reverse().join("").split(" ").reverse().join(" "));
}

reverseWords("This is an example!");
reverseWords("double  spaces");

// Q.2 SOLUTION
function extractMiddle(str) {
    var position;
    var length;
    if(str.length % 2 == 1) {
        position = str.length / 2;
        length = 1;
    } else {
        position = str.length / 2 - 1;
        length = 2;
    }
    return str.substring(position, position + length)
}
console.log(extractMiddle("test"));
console.log(extractMiddle("testing"));
console.log(extractMiddle("middle"));
console.log(extractMiddle("A"));

// Q.3 SOLUTION
function doubleVal(someValue) {
    return someValue.map(num => num * 2);
}

console.log(doubleVal([1,2,3]));