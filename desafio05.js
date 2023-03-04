const reverse = (phrase) => {
    let nemPhrase = ''

    for (let i = phrase.length - 1; i>=0; i--){
        nemPhrase += phrase[i]
    }

    return nemPhrase
}

console.log(reverse('javascript'))