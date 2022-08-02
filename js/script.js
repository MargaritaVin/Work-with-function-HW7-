"use strict";

function sumTo(n) {
    if (n === 1) {
        return n;
    }
    return n + sumTo(n - 1);
};
console.log(sumTo(4)); 
console.log(sumTo(3)); 

const sentance = "Lorem ipsum dolor sit amet";
function findShort(string) {
    let array = string.split(" ");
    return array.reduce((elem, index) => index.length < elem.length ? index : elem, array[0]);
};
console.log(findShort(sentance));
console.log(findShort("Hello world")); 
console.log(findShort("Hi")); 
console.log(findShort("She is David's sister")); 