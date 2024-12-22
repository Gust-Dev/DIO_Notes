class AlunoSala{
     constructor(userAluno, nota1, nota2, nota3) {
    
         this.userAluno = userAluno
         this.nota1 = nota1
         this.nota2 = nota2
         this.nota3 = nota3
        }
        media() {
    
         let calculo = (this.nota1 + this.nota2 + this.nota3 )/3
         return calculo
        }
        resultado(){

            let calculo = (this.nota1 + this.nota2 + this.nota3 )/3
            let resultado1;

            if (calculo < 5 || calculo == 0){
                resultado1 = "Reprovado"
                return resultado1
            } else if (calculo >= 5 && calculo <= 6) {
                resultado1 = "Recuperação"
                return resultado1
            } else if (calculo >= 7){
                resultado1 = "Aprovado"
                return resultado1
            } else {
                resultado1 = "Sem nota"
                return resultado1
            }
    }
}
const aluno1 = new AlunoSala("Apollo", 10, 6, 9)
console.log(`O aluno, ${aluno1.userAluno}, teve media igual a: ${aluno1.media().toFixed(1)} : ${aluno1.resultado()}`)
