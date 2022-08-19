function numParImpar (num) {
  num%2 == 0 ? console.log('O numero `$num` é par') : console.log('O numero `$num` é impar')
}

numParImpar(7);

function conTriangulo (numTri) {
  for (let i = 1; i <= numTri; i++) {
    let linha = '';
    for (let j = 1; j <= i; j++) {
      linha += '* ';
    }
    console.log(linha);
  }
}

conTriangulo(4);