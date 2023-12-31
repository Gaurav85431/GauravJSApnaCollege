let Marks = [58, 75, 89, 90, 79, 90, 95, 72, 35];
let count = 0;

const marks90 = Marks.filter((val) => {

  // return val > 90;

  if (val > 90) {
    count++;
    return val;
  }
  else {

  }

})

console.log(marks90);
console.log(count);