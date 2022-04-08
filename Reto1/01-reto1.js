let L = +prompt("Cuántos litros de leche produce");
let PG = +prompt("Cuánto es el precio del galón");

let TG = L / 3.785;

let GA = PG * TG;

console.log(`El total por ${L} litros de leche es: ${GA}`);