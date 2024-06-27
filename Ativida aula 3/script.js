//PRATICA 1
//var contador = prompt(`Digite um numero`)
//
//while ( contador >= 0) {
    //console.log(contador)
  //  contador--
//}
//---------------------------------------------


//PRATICA 2
var contador = 0
var notas = 0

while (true) {
    
    let valor = prompt( 'Digite suas notas')
    
    let media = notas/contador

    if(valor == `parar`){
        console.log(`o valor da media `, media)
        break
    }
 notas = notas + Number(valor)  
contador++


}

