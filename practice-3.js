function paperRequirements(firstBook, secondBook, thirdBook) {
    return firstBook + secondBook + thirdBook;
}

const firstBookPage = 100;
const secondBookPage = 200;
const thirdBookPage = 300;
const allBookPage = paperRequirements(firstBookPage, secondBookPage, thirdBookPage);
console.log('Total nedded page is:', allBookPage);