
//Calcula a quantidade de golpes necessarios para quebrar um bloco especifico utilizando For e uma estrutura logica.

const quantidadeGolpes = 7

//Defina aqui os tipos de minerais Carvao, Ferro, Diamante e Pedra
let minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
// Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
  let minaIndex = (i-1) % minerais.length;
  
//Agora exiba o índice i, concatene com o caractere ":", após, concatene com tipo de minerais[minaIndex]:
  console.log( i + ":" + minerais[minaIndex] );
}
