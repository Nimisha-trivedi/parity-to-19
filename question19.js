let arr = [1, 3, 4, 3, 4];
let result = arr.reduce(function (a, b) {
  console.log(a);
  console.log(b);
  return a[b] ? ++a[b] : (a[b] = 1), a;
}, {});

console.log(result);
