// 1st Question
let btn = document.createElement("button");
btn.style.backgroundColor = "red";
btn.style.color = "white";
btn.innerText = "clickme"


let body = document.querySelector('body');

body.prepend(btn);// body ke under 1st element ke roop me
// body.append(btn);
// body.after(btn);
body.before(btn);


// 2nd Question:-

// 1st way::- class will replace by newClass

let myP = document.querySelector('.myP');
console.log(myP);
let y = myP.getAttribute('class');
console.log(y);
myP.setAttribute('class', 'newClass')  //replace class by newclass




// 2nd way:-
// if we want ki newclass,  class se replace na ho to
// we will use the classlist;

// let myP = document.querySelector('.myP');
console.log(myP);
console.log(myP.classList);
myP.classList.add("newClass");
