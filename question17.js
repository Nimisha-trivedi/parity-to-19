let arr = [
  { name: "A", done: "no" },
  { name: "B", done: "yes" },
  { name: "C", done: "yes" },
];
let count = 0;
arr.forEach(function (val) {
  if (val.done == "yes") {
    count = count + 1;
  }
});
let percentage = 100 - (count / arr.length) * 100;
console.log(percentage);
console.log(percentage);
console.log(percentage);
console.log(percentage);
