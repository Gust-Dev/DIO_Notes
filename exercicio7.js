    
function Pagamento(Valor, TypeShop){
     TypeShop;

if (TypeShop == 0 ) {
    console.log(`Valor da compra: R$${-(10/100*Valor)+Valor} reais. Forma de pagamento:Debito`  )
         return
    }else if(TypeShop == 1){
        console.log(`Valor da compra: R$${-(15/100*Valor)+Valor} reais. Forma de pagamento:Dinheiro`  )
         return
    }else if(TypeShop == 2){
        console.log(`Valor da compra: R$${-(15/100*Valor)+Valor} reais. Forma de pagamento:Pix`  )
        return
    }else if (TypeShop == 3){
        console.log(`Valor da compra: R$${Valor} reais. Forma de pagamento:Cartão 2x`  )
        return
    }else if (TypeShop == 4){
        console.log(`Valor da compra: R$${Valor+(10/100*Valor)} reais. Forma de pagamento:Cartão 3x`  )
        return
    }else {
        console.log(`Valor da compra: R$${Valor} reais. Forma de pagamento:Invalida`)}

}

Pagamento(500, 4)


