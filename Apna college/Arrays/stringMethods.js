let name = "Gaurav Pushpam";

console.log(name.slice(0, 4));
console.log(name.slice(0, 10));





let hero = ['srk', 'ak', 'rr'];
// 1st way to access each element of array
for (let i = 0; i < hero.length; i++) {
  console.log(hero[i]);
}

// 2nd way to access each element of array
// for of

for (let x of hero) {
  console.log(x);
}


// for of --------------e.g.

const cities = ['DL', 'MH', 'HR', 'BR', 'AP']
for (let city of cities) {
  console.log(" cities are--------" + city);
}
for (let city in cities) { console.log('Index are--' + city); }