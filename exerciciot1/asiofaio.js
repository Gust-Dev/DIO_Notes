const N = [5,3,4,10,8,1];
let maiorNumeroPar = 0;
let menorNumeroImpar = 1;

for (let i = 0; i < N; i++) {
  const numero = parseInt(gets());

  if (numero % 2 == 0) {
    if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
        
    }
  } else {
    if (numero < menorNumeroImpar) { 
      menorNumeroImpar = numero;
    }
  }
}

print(`Maior número par: ${maiorNumeroPar}`);
print(`Menor número ímpar: ${menorNumeroImpar}`);
