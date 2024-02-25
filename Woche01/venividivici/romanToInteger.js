/*jshint esversion: 6 */
"use strict";

/*jshint -W097 */

function convertRomanToInteger() {

    // get the input value
    const romanInput = document.getElementById("romanNumber").value.toLowerCase();

    // dictionary for the roman values
    const romanValues = {
        "i": 1, "v": 5, "x": 10, "l": 50, "c": 100, "d": 500, "m": 1000
    };

    // convert the input to an array
    const romanArray = [...romanInput];


    // convert the roman number to an integer
    let sum;
    const arrayLength = romanArray.length;
    if (arrayLength === 1) {
        sum = romanValues[romanArray[arrayLength - 1]];
    } else if (arrayLength === 2) {
        const index0 = romanValues[romanArray[arrayLength - 2]];
        const index1 = romanValues[romanArray[arrayLength - 1]];
        if (index0 >= index1) {
            sum = index0 + index1;
        } else {
            sum = index1 - index0;
        }
    } else {
        sum = "not implemented yet!";
    }

    document.getElementById("convertedOutput").innerText = "Integer Value: " + sum;

    sum = 0;

}