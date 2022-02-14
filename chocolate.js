function countRec(choc, wrap) {
  if (choc < wrap) return 0;

  let newChoc = Math.floor(choc / wrap);

  return newChoc + countRec(newChoc + (newChoc % wrap), wrap);
}

function countMaxChoco(money, price, wrap) {
  const choc = money / price;
  //console.log(choc);

  return choc + countRec(choc, wrap);
}

const money = 20;
const price = 1;

const wrap = 3;
console.log(
  "Number of choclate is:" + Math.floor(countMaxChoco(money, price, wrap))
);
