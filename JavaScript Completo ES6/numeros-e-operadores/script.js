// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;

console.log(total);

// Crie duas expressões que retornem NaN

let testNaN = '1um' * 2;
let testNan2 = 'testesoma' - 3;

console.log(testNaN, testNan2);

// Somar a string '200' com o número 50 e retornar 250
let someString = +'200' + 50;

console.log(someString);

// Incremente o número 5 e retorne o seu valor incrementado
let numFive = 5;

++numFive;

console.log(numFive);

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = (numero + unidade); // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

console.log(peso);
