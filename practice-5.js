const numbers = [3, 0, 3, 44, 2, -2, -33, 22, 5555, 33, 2];
let positiveNumber = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element >= 0) {
        positiveNumber.push(element);
    }
    else {
        break;
    }
}
console.log(positiveNumber);