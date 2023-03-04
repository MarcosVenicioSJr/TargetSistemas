const fs = require('fs')

const path = './dados.json'

fs.readFile(path, (data, err) => {
    if(err) throw err

    const user = JSON.parse(data)
    console.log(user)
})