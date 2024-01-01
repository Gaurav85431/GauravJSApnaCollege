let students = [85, 97, 44, 37, 76, 60];

let sum = 0;
const total = students.length;
for (let marks of students) {
  // sum= sum+marks;
  sum += marks;
}
let avg = sum / total;
console.log("Average is " + avg);


// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// price and offerprice

// 1st way

let items = [250, 645, 300, 900, 50];

let index = 0;
for (let val of items) {
  console.log(`Value at index ${index} is ${val}`);
  index++;

  offer = (val * 10) / 100;
  val = val - offer;

  console.log(`After offer the final price is ${val}`);
}


// 2nd way

let items2 = [250, 645, 300, 900, 50];
console.log("Before offer ");
for (let price of items2) { console.log(price); }


for (let i = 0; i < items2.length; i++) {
  items2[i] = (items2[i] * 90) / 100;

}

console.log("After offer ");
for (let price of items2) { console.log(price); }


// 3rd way::-

console.log("3rd");
let items3 = [250, 645, 300, 900, 50];

for (let i = 0; i < items3.length; i++) {
  let offer3 = (items3[i] * 0.9);
  items3[i] = offer3;
}
for (let i = 0; i < items3.length; i++)
  console.log(items3[i]);

