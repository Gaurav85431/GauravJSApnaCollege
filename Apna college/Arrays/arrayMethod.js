// Array are mutuable(changable) but string is not mutuable:::-

// push()  -> add value at last of the array;

let foodItems = ['Banana', 'Papaya', 'Apple', 'Blackberry'];
foodItems.push('Jackfruit');
console.log(foodItems);


// pop() -> remove an element from end and retrun new array.

let foodItem = ['Banana', 'Papaya', 'Apple', 'Blackberry'];
foodItem.pop();
console.log(foodItem);


// toString() -> convert an array to the string.


let food = ['Banana', 'Papaya', 'Apple', 'Blackberry'];
console.log(food);
console.log(food.toString());

let myarray = [123, 234, 54, "Gaurav", 458.5];
console.log("Array me --" + myarray);
console.log(myarray.toString());





// concat() method

let arr1 = [13, 43, 5436, 345];
let arr2 = ['Gaurav', 23, 2330, 333.4];
let arrConcat = arr1.concat(arr2);
let arrConcat2 = arr2.concat(arr1);
console.log(arrConcat);
console.log(arrConcat2);



// unshift() -> Add item to start. 
//          -> 1 item multiple bar enter ho sakta hai.

let myItem = [12, 32, 43, 56];
myItem.unshift(23);
console.log(myItem);

myItem.unshift(12);
console.log(myItem);


// shift()-> Remove element from start; 
//         -> shift jo v delete karta hai usko delete kr deti hai. aur original 
//         -> array me change karke deta hia
//        -> will not take any parameter.

let myItem2 = [12, 32, 43, 56];
let delVal = myItem2.shift();
console.log(delVal);

console.log(myItem2);

myItem2.shift();
console.log(myItem2);



// slice(start,end)::-

let myVal = [12, 32, 54, 67];
console.log(myVal.slice(1, 3));


// splice(strtIndx, delCount, newElements) :::->
//        -> Change original array i.e. add, remove, replace;

let mArr = [23, 23, 453, 54, 55];
mArr.splice(2, 1, 43);
console.log(mArr);
mArr.splice(2, 4, 23, 43, 3454, 34, 34, 23, 23);
console.log(mArr);

let arry = [12, 32, 54, 43, 65, 75, 34];
/**add using splice */
console.log("Original array is " + arry);
let newarry = arry.splice(2, 0, 12, 23);
console.log(arry);
console.log(" " + newarry); // return original array.


/** delete using splice() */
let delary = arry.splice(2, 2);
console.log(arry);
console.log("Deleted items " + delary);



/** Update using splice() */

let updateAry = arry.splice(1, 1, 15);
// console.log(updateAry);
console.log(arry);

/** delete all element from a particular index to end */

let deleteAll = arry.splice(4);
console.log("Element will be delete from the index 4");
console.log(arry);


/** If we not pass any value to the splice() method then no impact on our array */

let noImpact = arry.splice();
console.log(noImpact);