function numParImpar (num) {
  num%2 == 0 ? console.log('O numero `$num` é par') : console.log('O numero `$num` é impar')
}

numParImpar(7);

function conTriangulo (numTri) {
  let linha = '';
  for (let i = 1; i <= numTri; i++) {
    for (let j = 0; j < i; j++) {
        linha += '*';
    }
    console.log(linha);
  }
}

conTriangulo(4);