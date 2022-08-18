let arrNum = [1, 2, 3]

document.querySelector("#resultado").innerHTML = `
    <h2>A Média dos números é: ${media()}
`
function media() {
  let soma = 0;
  for(let i in arrNum) {
    soma += arrNum[i]
  }
  return media = soma / arrNum.length;
}