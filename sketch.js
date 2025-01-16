let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Configuración de la cámara
  capture = createCapture(VIDEO);
  capture.size(400, 300); // Tamaño del video
  capture.hide(); // Ocultar el elemento HTML por defecto de la cámara
}

function draw() {
  background(0); // Fondo negro

  // Título
  fill(191, 30, 131); // Color rosa fuerte para el título
  textAlign(CENTER, TOP);
  textSize(80);
  text("GALERÍA DE ARTE EN VIVO", width / 2, height * 0.05);

  // Descripción
  fill(255); // Texto blanco
  textSize(28);
  textAlign(CENTER, TOP);
  let marginX = width * 0.1; // Márgenes laterales
  text(
    "Es una experiencia interactiva que fusiona tecnología, arte y machine learning. A través de movimientos con las manos, " +
      "la aplicación asigna un estilo visual (como efectos abstractos, trazos pictóricos o patrones geométricos). " +
      "Crea un ambiente de museo digital, permitiendo al usuario explorar y experimentar con estilos visuales que se adaptan a los movimientos que hace con la mano.",
    marginX,
    height * 0.15,
    width - 2 * marginX // Texto alineado al ancho disponible
  );

  // Cuadro izquierdo (Movimientos y Acciones)
  fill(80, 0, 40); // Fondo morado oscuro
  rect(width * 0.05, height * 0.4, width * 0.35, height * 0.4, 20);

  fill(255); // Texto blanco
  textAlign(LEFT, TOP);
  textSize(28);
  text("Movimientos y Acciones", width * 0.07, height * 0.42);

  textSize(25);
  text("Mano izquierda abierta", width * 0.07, height * 0.47);
  text("• Patrones Geométricos", width * 0.1, height * 0.5);

  text("Mano derecha cerrada", width * 0.07, height * 0.54);
  text("• Efecto abstracto", width * 0.1, height * 0.57);

  text("Dos manos abiertas", width * 0.07, height * 0.61);
  text("• Trazos Pictóricos", width * 0.1, height * 0.64);

  // Cuadro derecho (Cámara)
  fill(255); // Fondo blanco
  rect(width * 0.6, height * 0.4, width * 0.35, height * 0.4, 20);

  // Dibujar el video de la cámara dentro del cuadro derecho
  image(capture, width * 0.61, height * 0.41, width * 0.33, height * 0.38);
}
