// Q.1 Solution
function squarePattern() {
    debugger;
    let n = 5;
    let pattern = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            pattern += " * ";
        }
        pattern += "\n";
    }
    console.log(pattern);
}

squarePattern();

// Q.2 Solution
function hollowSquarePatten() {
    // debugger;
    let n = 5;
    let pattern = "";
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(i === 0 || i === n - 1) {
                pattern += " * ";
            }
            else {
                if(j === 0 || j === n - 1) {
                    pattern += " + ";
                    // if (j === 0) {
                    //     pattern += " $ "
                    // }
                }
                else {
                    pattern += "  ";
                }
            }
        }
        pattern += "\n";
    }
    console.log(pattern);
}

hollowSquarePatten();

// Q.3 Solution
function rightTrianglePattern() {
    let n = 5;
    let pattern = "";
    for(let i = 1; i < n; i++) {
        // This below for loop is for printing the spaces
        for(let j = 0; j < n - i; j++) {
            pattern += "   ";
        }

        // THIS BELOW FOR LOOP IS FOR PRINTING STARS
        for(let k = 0; k < i; k++) {
            pattern += " * ";
        }
        pattern += "\n";
    }
    console.log(pattern);
}

rightTrianglePattern()

function pyramidPattern() {
    let n = 8;
    let pattern = "";
    for(let i = 1; i < n; i++) {
        // THIS BELOW FOR LOOP IS FOR PRINTIG THE SPACE
        for(let j = 1; j <= n - i; j++) {
            pattern += "   ";
        }

        // THIS BELOW FOR LOOP IS FOR PRINTING THE STAR
        for(let k = 0; k < 2* i - 1; k++) {
            pattern += " * ";
        }
        pattern += "\n";
    }
    console.log(pattern);
}

pyramidPattern();