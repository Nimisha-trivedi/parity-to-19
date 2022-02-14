let a = "11110";
let count = 0;
let arr = a.split("");
if (arr[arr.length - 1] != "1") {
  console.log("not Corrupted");
} else {
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] == "1") {
      count = count + 1;
      console.log(count);
    }
  }
  console.log(count);
  if (count % 2 == 0) {
    console.log("Corrupted");
  } else {
    console.log("not Corrupted");
  }
}
