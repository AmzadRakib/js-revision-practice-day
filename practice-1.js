function feetToInch(feet) {
    const MyInch = feet * 12;
    return MyInch;
}

const height = 5.8;
const myHeight = feetToInch(height);
console.log(myHeight);