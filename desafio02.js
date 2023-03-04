let sequence = new Array();
function Fibonacci(number) {
  sequence[0] = 0;
  sequence[1] = 1;
  for (let i = 2; i < number; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

function ValidateFibonacci(number) {
  const verify = sequence.includes(number);

  if (verify) {
    return `O valor: ${number} está contido na sequencia Fibonacci`;
  }

  return `O valor: ${number} não está contido na sequencia Fibonacci`;
}

console.log(Fibonacci(10));
console.log(ValidateFibonacci(8));
