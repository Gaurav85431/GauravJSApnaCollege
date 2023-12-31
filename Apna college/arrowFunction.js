// Arrow Function

// -> It can be stored in a variable.
// e.g. 
// (a,b)=>{console.log(a+b);}    ==> Arrow function

// const s= (a,b)=>{console.log(a+b);}    ==> Arrow function stored in s variable
// s variable will be a function;  i.e. function variable


const sum = (a, b) => {
  console.log("a + b =  " + (a + b));

}
sum(3, 4);
console.log(sum); //[Function: sum]






// 

const printHello = () => { console.log("Hellow"); }
printHello();

x = () => console.log("Gaurav");
x()