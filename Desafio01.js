function Fibonacci(number){
    let sequence = new Array
    sequence[0] = 0;
    sequence[1] = 1;
    for(let i = 2; i < number; i++){
        sequence.push(sequence[i-1] + sequence[i-2])
    }

    return sequence
}

console.log(Fibonacci(10))