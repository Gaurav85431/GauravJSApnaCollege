let heading = document.getElementById('heading');
console.log(heading);
console.dir(heading);



let headings = document.getElementsByClassName('h');
console.log(headings);
console.dir(headings);
// o/p:-
/**
 script2.js:3 h1#heading.h
script2.js:8 HTMLCollection(2) [h1#heading.h, h1#heading2.h, heading: h1#heading.h, heading2: h1#heading2.h]
script2.js:9 HTMLCollection(2)

 */



// getElementByTagName(

let pgaph = document.getElementsByTagName('p');
console.log(pgaph);
console.dir(pgaph);



// Query Selector::-

let firstElement = document.querySelector('p');
console.log(firstElement);
console.dir(firstElement);

let allElement = document.querySelectorAll('p');
console.log(allElement);
console.dir(allElement);

let classElement = document.querySelector('.p')
console.log(classElement);
console.dir(classElement);

let idElement = document.querySelector('#heading');
console.log(idElement);
console.dir(idElement);


console.log(firstElement.tagName);

console.log(document.body.firstChild);

console.log(document.querySelector('div').firstChild);


let div = document.querySelector('div')
console.log(div.children);

console.log(document.querySelector('div').children);


// innerText::-

let divInnerText = document.querySelector('div')
console.log(divInnerText.innerText);

console.log(divInnerText.innerHTML);


// set text::-
divInnerText.innerText = "Gaurav";
console.log(divInnerText);

// set HTML::-
divInnerText.innerHTML = "<div>Gaurav This is HTML</div>";
console.log(divInnerText);


// textContent:-
// see hidden visibility content;

let headingHide = document.querySelector('h2');
// console.log(headingHide);
headingHide.textContent
console.log(headingHide.textContent);