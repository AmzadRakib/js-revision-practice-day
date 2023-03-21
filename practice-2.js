function centimeterToMeter(centimeter) {
    const mymeters = centimeter / 100;
    return mymeters;
}
const width = 500;
const myWidth = centimeterToMeter(width);
console.log(myWidth);