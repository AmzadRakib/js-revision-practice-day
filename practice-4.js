function bestFriend(friendName) {
    let largest = friendName[0];
    for (let i = 0; i < friendName.length; i++) {
        const element = friendName[i];
        if (element.length > largest.length) {
            largest = element;
        }
    }
    return largest;
}

const fName = ['towfiq Alahi', 'Hasan Al Ferdaus', 'adnan ahir', 'Antenio Rudiger'];
const largestName = bestFriend(fName);
console.log(largestName);