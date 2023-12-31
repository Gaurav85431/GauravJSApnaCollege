//   Parameterized Function
console.log("Parameterized Function");

function Gaurav(msg) {
  console.log(msg);
}
Gaurav(5);
Gaurav("Gaurav");

console.log(Gaurav());  // O/P:-
/*
  5
Gaurav
undefined   //clg(Gaurav)
undefined   // Gaurav()
*/
console.log(Gaurav(5));



// Pass multiple parameter to the function
console.log("Pass multiple parameter to the function");

function Detail(Name, age) {
  console.log("Name is " + Name + " Age is " + age);
}

Detail('Gaurav', 23);




// Case2:-  
console.log("Case 2");

function getNum(val) {
  return val;
}
console.log(getNum(5));



// Case3:-
console.log("case 3");

function getVal(val) {

}
console.log(getVal(5));  //undefined





// 
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




// After return keyword used not a single line will execute

function learn(a) {
  console.log("Before return");
  return a;
  console.log("After Return");
}
learn(3);