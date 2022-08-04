// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let ageAuthor = 33;
let ageParents = 37;

if (ageAuthor > ageParents) {
    console.log('E maior');
} else if (ageAuthor === ageParents) {
    console.log('E igual');
} else {
    console.log('E menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);
console.log(5 - ' ');

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log('Brazil has more inhabitants');
} else {
    console.log('China has more inhabitants');
}

// Igual (==) -> Retorna verdadeiro caso os operandos sejam iguais.
// Estritamente igual (===) -> Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo.

if (brasil === china){
    console.log('yes');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}