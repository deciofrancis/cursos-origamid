function numParImpar (num) {
  num%2 == 0 ? console.log('O numero `$num` é par') : console.log('O numero `$num` é impar')
}

numParImpar(7);

function conTriangulo (numTri) {
  for (let i = 1; i <= numTri; i++) {
    for (let j = numTri - 1; j >= 1; j--) {
        console.log(' ');
    }
    for (j = 1; j <= i; j++) {
      console.log('*');
    }  
  }
}

conTriangulo(4);