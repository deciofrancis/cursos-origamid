// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dataPersonal = {
  name: 'Decio',
  lastName: 'Silva',
  idade: '30',
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dataPersonal.fullName = function() {
  return this.name + ' ' + this.lastName;
}


// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var dog = {
  name: 'Labra',
  breed: 'Labrador',
  color: 'black',
  age: '10',
  bark(person) {
    if (person === 'man') {
      return 'bark';
    } else {
      return 'silence';
    }
  }
}

