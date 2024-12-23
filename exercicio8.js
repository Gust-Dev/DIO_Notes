const notas = [];


notas.push(8);
notas.push(3);
notas.push(2);
notas.push(9);
notas.push(9);
notas.push(5);
notas.push(7);
notas.push(6);
notas.push(3);
notas.push(9);
notas.push(2);


let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i]
    soma = (nota + soma)
  
}

console.log(soma)