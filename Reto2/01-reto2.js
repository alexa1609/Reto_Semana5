let N = +prompt("Cuántas hamburguesas son:");
let PA = 0;
let CA = 0;

let TI = +prompt("Ingrese tipo de hamburguesa: 1 = sencilla $20 , 2 = doble $25 , 3 = triple $28");
let TP = +prompt("Ingrese tipo de pago: 1 = efectivo , 2 = tarjeta")

if (TI == 1){
    PA = 20;
} else if (TI == 2) {
    PA = 25;
} else {
    PA = 28;
}

TO = PA * N;

if (TP == 1){
    console.log( `El total por pagar es: ${TO}`)
}else if (TP == 2){
    CA = TO * 0.05; 
    TOT = TO + CA
    console.log(`El total por pagar es: ${TOT}`)
    console.log(`El cargo es: ${CA}`)
}





    


