let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* exercicio 1 */

console.log(numbers);

/* exercicio 2 */

let soma = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9];

console.log(soma);

/* exercicio 3 */

let mediaAritimetica = soma / numbers.length;

console.log(mediaAritimetica);

/* exercicio 4 */

if (mediaAritimetica > 20){
    console.log('valor maior que vinte')
}

else if (mediaAritimetica <= 20){
    console.log('valor menor ou igual a 20')
}

/* exercicio 5 */

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1){
    if (numbers[index] > higherNumber) {
        higherNumber = numbers[index];
    }
}

console.log(higherNumber);

/* exercicio 6 */

let result = 0;

for (let index = 0; index < numbers.length; index += 1){

    if (numbers[index] % 2 !== 0){
    result += 1
    }
}

if (result == 0){
    console.log('Nenhum valor ímpar enconrado');
}
else{
    console.log(result);
}

/* Exercicio 7 */

let lowestNumber = numbers[0];

for (index = 0; index < numbers.length; index += 1){
    if(numbers[index] < lowestNumber){
        lowestNumber = numbers[index];
    }
}

console.log(lowestNumber);

/* Exercício 8 */

let count = [];

for (index = 0; index < 25; index += 1){
    count.push(index);
}

console.log(count);

/* Exercicio 9 */

let division = 0;
let countDivision = []

for (index = 0; index < count.length; index += 1){
    division = count[index] / 2;
    countDivision.push(division);
}

console.log(countDivision);