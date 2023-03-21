function feetToInch(feet) {
    const inch = 12;
    const MyInch = inch * feet;
    return MyInch;
}

const height = 5.8;
const myHeight = feetToInch(height);
console.log(myHeight);