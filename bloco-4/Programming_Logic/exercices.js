/* exercicio 1 */

let n = 5;
let symbol = '*';
let inputLine = '';

for (let index = 0; index < n; index +=1){
    inputLine = inputLine + symbol;
};

for (let index = 0; index < n ; index +=1){
    console.log(inputLine);
};

/* exercicio 2 */
let piramide = '';

for (let index = 0; index < n; index +=1){
    console.log(piramide);
    piramide = piramide + symbol;
}

/* exercicio 3 */

let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};

/* exercicio 4 */

