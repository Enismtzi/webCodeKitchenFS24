/*jshint esversion: 6 */
"use strict";

/*jshint -W097 */

function convertRomanToInteger() {
    const romanInput = document.getElementById("romanNumber").value.toLowerCase();

    const romanValues = {
        "i": 1, "v": 5, "x": 10, "l": 50, "c": 100, "d": 500, "m": 1000
    };

    const romanArray = [...romanInput];

    //logic for 1-10
    let sum = 0;
    // recursiv approach
    for (let i = romanArray.length; i > 0; i--) {
        if (i === 1) {
            sum += romanValues[romanArray[i - 1]];
        } (i === 2) {
            // check if addition or subtraction


        }

    }

    document.getElementById("convertedOutput").innerText = "Integer Value: " + romanInput.toLowerCase();

}