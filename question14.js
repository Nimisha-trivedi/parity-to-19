let str = "AATCAG";
let arr = str.split("");
for (i = 0; i < arr.length; i++) {
  if (arr[i] == "A") {
    arr[i] = "U";
  } else if (arr[i] == "T") {
    arr[i] = "A";
  } else if (arr[i] == "C") {
    arr[i] = "G";
  } else if (arr[i] == "G") {
    arr[i] = "C";
  }
}

console.log(arr.join(""));
