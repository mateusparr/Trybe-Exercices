let a = 10;
let b = 20;
let c = 17;

/* adição */

let adicao = a+b;
console.log(adicao);

/* Subtração */

let subtracao = a-b;
console.log(subtracao);

/* mutiplicação */

let mutiplica = a*b;
console.log(mutiplica);

/* divisao */

let divisao = a/b;
console.log(divisao);

/* modulo */

let modulo = a % b;
console.log(modulo);

/* requisito 2 */

if (a > b){
    console.log(a);
}

else if (a < b){
    console.log(b);
}

/* requisito 3 */

if (a > b && a > c){
    console.log(a);
}

else if (b > a && b > c){
    console.log(b);
}

else{
    console.log(c);
}

/* exercicio 4 */

if (a>0) {
    console.log('positive');
}

else if (a<0) {
    console.log('negative');
}

else {
    console.log('zero');
};

/* exercicio 5 */

let angleA = 35;
let angleB = 45;
let angleC = 60;
let somaAngulos = angleA+angleB+angleC;

if (somaAngulos == 180){
    console.log('true');
}

else{
    console.log('false');
}

/* exercicio 6 */

let pecaDeXadrez = "Cavalo";

switch(pecaDeXadrez){
    case "Cavalo": 
        console.log('A peça anda em L');
        break; 
    case "Bispo":
        console.log('Anda em diagonais');
        break;
    case "Torre":
        console.log('Linha reta em horizontal e vertical');
        break;
    case "Rei":
        console.log('Move se em qualquer direção, uma casa por vez');
        break;   
    case "Dama":
        console.log('Move se em qualquer direção quantas casas quiser');
        break;
    case "Peão":
        console.log('Move sempre pra frente uma casa');
        break;
    }

/* exercicio 7 */

let notaDada = 40;
let porcentagem = notaDada/100 * 100 + "%"

if (notaDada >= 90){
    console.log("A");
}

else if (notaDada >= 80){
    console.log("B");
}

else if (notaDada >= 70){
    console.log("C");
}

else if (notaDada >= 60){
    console.log("D");
}

else if (notaDada >= 50){
    console.log("E");
}

else if (notaDada < 50){
    console.log("F");
}

else if(notaDada < 0 && notaDada > 100){
    console.log("ERROR");
}

/* exercicio 8 */

let isEven = false;

if ((a % 2 === 0 || b % 2 == 0 || c % 2 == 0)){
    isEven = true;
};

console.log(isEven);

/* exercicio 9 */

let isOdd = false;

if ((a % 2 ==0 || b % 2 == 0 || c % 2 == 0 )){
    isOdd = true;
}

console.log(isOdd);

/* Exercicio 10 */

let custoDoProduto = 300;
let valorVenda = 600;

if (custoDoProduto >= 0 && valorVenda >= 0){
    let custoTotal = custoDoProduto * 1.2;
    let lucroTotal = (valorVenda - custoTotal);
    console.log(lucroTotal);
}

else {
    console.log("Error, os valores não podem ser negativos");
};