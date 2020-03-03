let arrayIntegers = [1, 3, 4, 10, 100, 55, 22, 77];

function getArrSquareTwoNumbers(array) {
    let arraySquareTwoNumbers = [];
    for (let i = 0; i < array.length - 1; i++) {
        arraySquareTwoNumbers.push(array[i] * array[i + 1]);
    }
    return arraySquareTwoNumbers;
}

function getIndex(array) {
    let max = array[0];
    let indexMax = null;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            indexMax = i;
        }
    }
    return indexMax;
}

function showResult(indexMax) {
    alert(arrayIntegers[indexMax] + " và " + arrayIntegers[indexMax + 1] + " là 2 số liền kề có tích lớn nhất trong mảng");
}

let newArr = getArrSquareTwoNumbers(arrayIntegers);
let index = getIndex(newArr);
showResult(index);