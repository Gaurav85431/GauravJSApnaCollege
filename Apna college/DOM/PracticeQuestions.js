let h2 = document.querySelector('h2');
h2.innerText = h2.innerText + "from Apna COllege";

// -----------1st end----------------

let myBox = document.querySelectorAll('.box');
// console.log(myBox);
// // console.dir(myBox);
// myBox[0].innerText = "first";
// myBox[1].innerText = "second";
// myBox[2].innerText = "Third";


// ya

let index = 0;
for (let x of myBox) {
  console.log(x.innerText);
  x.innerText = `Unique text ${index}`;
  index++

}