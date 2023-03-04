const jsonData= require('./dados.json'); 
let bigValue = 0


const data = jsonData.map((value) => {
    if(value.dia != 0)
    if(value.valor > bigValue){
        bigValue = value.valor
    }
})

console.log(bigValue)