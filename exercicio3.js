<<<<<<< HEAD
const Peso = 60
const Altura = 1.80
let imc = Peso / (Altura*Altura)
if(imc >=18.5 && imc <=25){
    console.log("Peso normal")
}else if(imc > 25 && imc <= 30 ){
    console.log("Você esta a cima do peso")
}else if(imc >30 && imc == 40){
    console.log("você esta obeso")
}else if(imc <18.5 ){
    console.log("Você esta a baixo do peso")
}else if(imc > 40){
    console.log("Você tem obesidade gravissima e precisa de tratamento")
}else{
    console.log("informações invalidas")
}
=======
const Peso = 60
const Altura = 1.80
let imc = Peso / (Altura*Altura)
if(imc >=18.5 && imc <=25){
    console.log("Peso normal")
}else if(imc > 25 && imc <= 30 ){
    console.log("Você esta a cima do peso")
}else if(imc >30 && imc == 40){
    console.log("você esta obeso")
}else if(imc <18.5 ){
    console.log("Você esta a baixo do peso")
}else if(imc > 40){
    console.log("Você tem obesidade gravissima e precisa de tratamento")
}else{
    console.log("informações invalidas")
}
>>>>>>> 0975906 (novo up)
console.log(imc.toFixed(2))