//posicao da rainha
let posicaoRainhaLinha = 3;
let posicaoRainhaColuna = 6;

//posicao da outra peca
let posicaoPecaLinha = 5;
let posicaoPecaColuna = 2;

//identifica se o ataque pode ocorrer ou não
let ataqueBemSucedido = false;

if (posicaoRainhaLinha === posicaoPecaLinha || posicaoRainhaColuna === posicaoPecaColuna) {
  ataqueBemSucedido = true;
}

//diagonal superior direita
for (let supDir = 1; supDir < 8; supDir += 1) {
  let linhaRainha = posicaoRainhaLinha + supDir;
  let colunaRainha = posicaoRainhaColuna + supDir;

   //se o tabuleiro acabou, sai do loop
  if (linhaRainha > 8 || colunaRainha > 8) {
    break;
  }

  if ((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna == colunaRainha)) {
    ataqueBemSucedido = true;
  }
}

//diagonal superior esquerda
for (let supEsq = 1; supEsq < 8; supEsq += 1) {
  let linhaRainha = posicaoRainhaLinha + supEsq;
  let colunaRainha = posicaoRainhaColuna - supEsq;

   //se o tabuleiro acabou, sai do loop
  if (linhaRainha > 8 || colunaRainha < 1) {
    break;
  }

  if ((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna == colunaRainha)) {
    ataqueBemSucedido = true;
  }
}

//diagonal inferior esquerda
for (let infEsq = 1; infEsq < 8; infEsq += 1) {
  let linhaRainha = posicaoRainhaLinha - infEsq;
  let colunaRainha = posicaoRainhaColuna - infEsq;

   //se o tabuleiro acabou, sai do loop
  if (linhaRainha < 1 || colunaRainha < 1) {
    break;
  }

  if ((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna == colunaRainha)) {
    ataqueBemSucedido = true;
  }
}

//diagonal inferior direita
for (let infDir = 1; infDir < 8; infDir += 1) {
  let linhaRainha = posicaoRainhaLinha - infDir;
  let colunaRainha = posicaoRainhaColuna + infDir;

   //se o tabuleiro acabou, sai do loop
  if (linhaRainha < 1 || colunaRainha > 8) {
    break;
  }

  if ((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna == colunaRainha)) {
    ataqueBemSucedido = true;
  }
}

console.log(ataqueBemSucedido);