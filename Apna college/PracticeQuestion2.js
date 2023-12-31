// const n = prompt('enter value');
const n = 5;

let arr = [];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
  // 0th pr 1 and so on.
}

console.log(arr);


let sum = arr.reduce((prev, curr) => {
  return prev + curr;
})
console.log("Addition is " + sum);



let multiplication = arr.reduce((prev, curr) => {
  return prev * curr;
})
console.log("Multiplicaton is " + multiplication);