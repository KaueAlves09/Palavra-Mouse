let palavra;

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatoria();
}

function palavraAleatoria() {
  let palavras = ["Dragon", "Eve", "Mel", "Mia"];
  return palavra = random(palavras);
}

function inicializaCores() {
  background("white");
  fill("black");
  textSize(100);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
   
  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
  
 
}