// Callback function::-
//  The function which can be pass as an parameter to another function is called 
//  callback function

// e.g.
/*

(function printVal(val) {
  console.log(val);
})

*/

let arr = [1, 2, 3, 4];

arr.forEach(function printVal(val) {
  console.log(val);
})


// e.g. 2

let city = ["Bihar", "Bengal", "Hydrabad", "Chennai"];
city.forEach(function printCity(element) {
  console.log(element);
  console.log(element.toUpperCase());
  console.log(element.toLocaleUpperCase());
  console.log(element.toLowerCase());
})



// Parameter that can be passed;

let x = [121, 324, 543, 23, 65, 432];
x.forEach(function (val, index) {
  console.log(val + "  ---  " + index);
})

// callback can also be written as::-

let num = [12, 13, 14];
let calcSqur = (num) => {
  console.log(num * num);
}

num.forEach(calcSqur); // callback function


// Higher Order Function::--
/*
 wo function jo ki kisi dusre function ko as a parameter use karte hai ya fir kisi
  function ko return karte hai.*/