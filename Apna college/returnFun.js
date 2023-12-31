//  return keyword se sirf ek hi value ko return kara sakte hai.
// wo value may be array, object, string, number

function returnFun(a, b, c) {
  s = a + b + c;
  return s;
}
let result = returnFun(2, 3, 4);
console.log(result);



// CASE 2:::::::::--------------------
// When we not passing any value to the parameterized function and call it, then 
// it will throw error;


function test(msg) { console.log("Message is " + msg); }
test();

// CASE 3 :-
//  if pass one value of two then;

function testing(x, y) {
  console.log(x + "  " + y);
}
testing(3);






// 

// After return keyword used not a single line will execute

function learn(a) {
  console.log("Before return");
  return a;
  console.log("After Return");
}
learn(3);