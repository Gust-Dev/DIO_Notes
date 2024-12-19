class formaDeBolo {

//Vamos construir um metodo - função que trabalha em contexto 
//De uma Classe 

        constructor(saborDaMassa, saborRecheio){
            this.saborDaMassa = saborDaMassa
            this.saborRecheio = saborRecheio
        }
        escrever(){
            console.log(`Um Delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
        }
}

let boloFesta  = new formaDeBolo("Massa de Morando", "Chocolate")
let boloAniversario = new formaDeBolo("Massa de caramelo", "Amendoim")

boloFesta.escrever()
boloAniversario.escrever()