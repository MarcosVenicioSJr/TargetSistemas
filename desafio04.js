const path = require("./desafio04.json");

function TotalValue() {
  let totalValue = 0;
  for (let i = 0; i < path.length; i++) {
    totalValue += path[i].Value;
  }

  return totalValue / 100;
}
console.log(TotalValue());


function PercentValue() {
let totalValue = TotalValue()
let percentValue = 0

  path.forEach(element => {
    percentValue = (element.Value / totalValue) * 100
    
    console.log(`Cidade: ${element.City}, percentual: ${percentValue.toFixed(0) / 100}%`)
    percentTotal += percentValue
  })
 
}

PercentValue();
