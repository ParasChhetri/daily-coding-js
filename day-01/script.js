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

// Q.4 SOLUTION
function areaOfTraingle(height, base) {
    area = (height * base) / 2;
    return console.log("the area of the triangle is ", area);
}

areaOfTraingle(51, 121);

// Q.5 SOLUTION

function parameterOfTriangle(sideOne, sideTwo, sideThree){
    parameter = sideOne + sideTwo + sideThree;
    return console.log("parameter of triangle is ",parameter);
}

parameterOfTriangle(12,34,57);

function volumeOfCylinder(radius, height){
    volume = 22/7.0 * radius * radius * height;
    return console.log("The volume of cylinder is: ", volume);
}

volumeOfCylinder(12,43);

function lateralSurfaceArea(radius, height){
    let laterl_surface_area = 2 * 22/7.0 * radius * height;
    return console.log(laterl_surface_area);
}

lateralSurfaceArea(35,79);