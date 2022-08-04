// Crie uma função para verificar se um valor é Truthy
function checkTruthy (numCheck) {
  return !!numCheck;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function squarePerimeter (side) {
  return side * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function fullName (name, lastname) {
  return name + ' ' + lastname;
}

// Crie uma função que verifica se um número é par
function numPar (varNum) {
  return varNum % 2 == 0;
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function checkTypeof (varType) {
  return typeof varType;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function() {
  console.log('Decio');
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);