function sum (a = 1, b) {
    return a + b;
}

// const a = {
//
// };

const sumAsArrowFunc = (a, b) => a + b;

console.log(sumAsArrowFunc(1, 12));

function duplicate(arr) {
    const res = [];

    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] * 2);
    }

    return res;
}

console.log(duplicate([123, 456, 324]));
