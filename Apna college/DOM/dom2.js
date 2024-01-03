let myDiv = document.querySelector("div");
console.log(myDiv);

// Get ID of div
let getDivID = myDiv.getAttribute("id");
console.log(getDivID);

// Get Name of div
let getDivName = myDiv.getAttribute("Name");
console.log("Name of div is " + getDivName);

//  To access paragraph by their name; and print the name of class of p
let paragraph = document.querySelector("p");
console.log("Name of p class is " + paragraph.getAttribute("class"));


// setAttribute():::---

// to change the name of paragraph:-
let para = document.querySelector("p");
let changeName = para.setAttribute("class", "myNewName");
console.log(changeName);


// Yadi hmen javascript ke help se style ko change karna ho.
/** 1st access div */
let myDiv2 = document.querySelector("#box");
console.log(myDiv2);
console.log(myDiv2.style);




/** To change color of div */
let myDiv22 = document.querySelectorAll("#box2");
console.log(myDiv22);
// let changeColor = myDiv22.style.backgroundColor("pink")
// console.log(changeColor);
// myDiv22.style.backgroundColor = "red";


/*
// css me               JS me 
background-color     backgroundColor
font-size               fontSize

*/

/*
myDiv22.style.fontSize = "20px";

myDiv22.style.color = "red";

myDiv22.innerText = "Hello!";

-*/


// e.g. To create new button then add.

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

let div1 = document.querySelector("#box");
div1.append(newBtn);

div1.prepend(newBtn);

div1.after(newBtn);

div1.before(newBtn);


// TO create h1 tag
let myh1 = document.createElement("h1");
// myh1.innerText = "welcome";
myh1.innerHTML = "<i>HEllO</i>";
console.log(myh1);

// To add btn

document.querySelector("body").prepend(myh1);

/** To delete element  */

let para2 = document.querySelectorAll("p");
para2.remove();

let myPara = document.querySelector("#p1");
myPara.remove();