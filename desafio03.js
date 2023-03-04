const path = require("./dados.json");
let bigValue = 0;

path.map((value) => {
  if (value.dia != 0)
    if (value.valor > bigValue) {
      bigValue = value.valor;
    }
});

console.log(bigValue.toFixed(2));
