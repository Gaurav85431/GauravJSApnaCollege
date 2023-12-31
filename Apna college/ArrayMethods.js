// Map()

/** To print value using map()
    similar to forEach();
    map naya array deta hai, forEach() nhi.
 */

let num = [23, 43, 54];
num.map((val) => {
  console.log(val);
});


/** To print value in new array using map() */

let value = [32, 34, 56];
const valueRecvr = value.map((val) => {
  return val;
})
console.log("New Array returns ");
console.log(valueRecvr);


/** If we want to store value square in new array using map() method */

let val = [32, 34, 56];
const newAry = val.map((val) => {
  return val * val;
})
console.log("New Array returns the square of number ");
console.log(newAry);




// Filter() method
// ->  It creates a new array of elements that give true for a condition/ filter.
// e.g. all even elements.

// Jo condition ko satisfy karega wo nya array me store hoga.

let myArray = [12, 32, 43, 23, 54];
let evenArr = myArray.filter((val) => {
  return val % 2 == 0;
})

console.log(evenArr);

let newArr = myArray.filter((val) => {
  return val > 25;
})
console.log(newArr);




// Reduce() method:-
//  Array me jo value hia uspr kuch operation ko perform krke last me hme single
//  value chahiye
// -> Input me bahoot ho but o/p me 1 chahiye.

// e.g.
let arr = [1, 2, 3, 4];
const output = arr.reduce((res, current) => {
  return res + current;
});
console.log(output);

// e.g. To get bigger value:-

let myAr = [3, 4, 2, 5, 6];
const BigVal = myAr.reduce((prev, curr) => {

  return prev > curr ? prev : curr;

})
console.log(BigVal);