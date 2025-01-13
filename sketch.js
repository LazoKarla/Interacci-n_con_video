function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0); // Fondo negro
  noLoop();

  drawText();
}

function drawText() {
  fill(255); // Texto blanco
  noStroke();

  // Título
  textFont("Poppins Bold");
  textSize(60); // Tamaño de la fuente del título
  textAlign(CENTER, TOP);
  fill(191, 30, 131); // Color del título (fucsia)
  text("GALERÍA DE ARTE EN VIVO", width / 2, height * 0.1); // Centrado horizontalmente

  // Descripción
  textFont("Arial");
  textSize(28); // Tamaño de la fuente del cuerpo
  fill(255); // Color del texto (blanco)
  textAlign(CENTER, TOP);
  let description =
    "El proyecto transforma objetos cotidianos en estilos artísticos aplicados en tiempo real a la imagen capturada por la cámara del usuario. Cada objeto clasificado se traduce en un estilo artístico diferente aplicado a la imagen en tiempo real. ";

  let marginX = width * 0.1; // Márgenes laterales del texto
  let textWidthValue = width - 2 * marginX;
  text(description, marginX, height * 0.2, textWidthValue, height * 0.5); // Ajuste del ancho del texto y posición
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0); // Fondo negro
  drawText();
}
