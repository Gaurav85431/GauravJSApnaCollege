
console.log("3rd way");
let items3 = [250, 645, 300, 900, 50];

for (let i = 0; i < items3.length; i++) {
  let offer3 = (items3[i] * 1 / 10);
  console.log(offer3);
  items3[i] -= offer3;
  console.log(items3[i]);
}
for (let i = 0; i < items3.length; i++)
  console.log(items3[i]);


