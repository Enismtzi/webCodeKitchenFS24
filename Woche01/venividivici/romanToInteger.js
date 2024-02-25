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
        sum = calculateTwoRomanDigits(index0, index1);
    } else if (arrayLength === 3) {
        const index0 = romanValues[romanArray[arrayLength - 3]];
        const index1 = romanValues[romanArray[arrayLength - 2]];
        const index2 = romanValues[romanArray[arrayLength - 1]];
        if ((index0 >= index1) >= index2) {
            sum = index0;
            sum += calculateTwoRomanDigits(index1, index2);
        } else if ((index0 <= index1) <= index2) {
            sum = index2;
            sum -= calculateTwoRomanDigits(index0, index1);
        }
    } else {
        sum = "not implemented yet!";
    }


    //function to calculate 2 digits
    function calculateTwoRomanDigits(digit1, digit2) {
        if (digit1 >= digit2) {
            return digit1 + digit2;
        } else {
            return digit2 - digit1;
        }
    }

    document.getElementById("convertedOutput").innerText = "Integer Value: " + (sum > 0 ? sum : "not implemented yet! or invalid input!");

}