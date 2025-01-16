let video;
let classifier;
let label = "Cargando modelo...";
let effectType = "none";

function preload() {
  const modelURL = "https://teachablemachine.withgoogle.com/models/bWBy7tKxD/";
  classifier = ml5.imageClassifier(modelURL + "model.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(width * 0.4, height * 0.6); // Tamaño ajustado para ocupar el lado derecho
  video.hide();
  classifyVideo();

  background(0); // Fondo negro
  noLoop(); // Evitar dibujar automáticamente
  drawUI();
}

function drawUI() {
  // Fondo negro
  background(0);

  // Título
  fill(191, 30, 131); // Color del título
  textFont("Poppins Bold");
  textSize(60);
  textAlign(CENTER, TOP);
  text("GALERÍA DE ARTE EN VIVO", width / 2, height * 0.05);

  // Descripción
  fill(255);
  textFont("Arial");
  textSize(28);
  textAlign(CENTER, TOP);
  let description =
    "Es una experiencia interactiva que fusiona tecnología, arte y machine learning. A través de movimientos con las manos, la aplicación asigna un estilo visual (como efectos abstractos, trazos pictóricos o patrones geométricos). Crea un ambiente de museo digital, permitiendo al usuario explorar y experimentar con estilos visuales que se adaptan a los movimientos que hace con la mano.";
  let marginX = width * 0.1;
  text(description, marginX, height * 0.15, width - 2 * marginX, height * 0.3);

  // Caja de movimientos y acciones
  fill(80, 0, 40);
  rect(width * 0.05, height * 0.5, width * 0.35, height * 0.3, 20); // Caja redondeada
  fill(255);
  textAlign(LEFT, TOP);
  textSize(24);
  text("Movimientos y Acciones", width * 0.07, height * 0.52);

  textSize(20);
  text(
    "- Mano izquierda abierta: Patrones Geométricos\n- Mano derecha cerrada: Efecto abstracto\n- Dos manos abiertas: Trazos Pictóricos",
    width * 0.07,
    height * 0.58
  );

  // Área de video en el lado derecho
  fill(255);
  rect(width * 0.6, height * 0.3, width * 0.35, height * 0.6, 20); // Marco del área de video
  image(video, width * 0.61, height * 0.31, width * 0.33, height * 0.58);

  // Mostrar etiqueta actual en la parte inferior
  fill(255);
  textAlign(CENTER, BOTTOM);
  textSize(24);
  text(label, width / 2, height - 20);
}

function draw() {
  // Redibujar el video
  fill(0);
  rect(width * 0.6, height * 0.3, width * 0.35, height * 0.6, 20);
  image(video, width * 0.61, height * 0.31, width * 0.33, height * 0.58);

  // Aplicar efecto visual según el tipo detectado
  if (effectType === "botanico") {
    drawBotanicalEffect();
  } else if (effectType === "lineas abstractas") {
    drawAbstractLinesEffect();
  } else if (effectType === "futurista") {
    drawFuturisticEffect();
  }

  // Mostrar la etiqueta actual
  fill(255);
  textSize(24);
  textAlign(CENTER);
  text(label, width / 2, height - 20);
}

function classifyVideo() {
  classifier.classify(video, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;

  if (label === "Mano abierta") {
    effectType = "botanico";
  } else if (label === "Mano Cerrada") {
    effectType = "lineas abstractas";
  } else if (label === "Dedo") {
    effectType = "futurista";
  } else {
    effectType = "none";
  }
  classifyVideo();
}

function drawBotanicalEffect() {
  noStroke();
  for (let i = 0; i < 20; i++) {
    fill(random(50, 200), random(100, 255), random(50, 150), 150);
    ellipse(
      random(width * 0.6, width * 0.95),
      random(height * 0.3, height * 0.85),
      random(20, 50)
    );
  }
}

function drawAbstractLinesEffect() {
  stroke(255, 150);
  strokeWeight(2);
  for (let i = 0; i < 10; i++) {
    line(
      random(width * 0.6, width * 0.95),
      random(height * 0.3, height * 0.85),
      random(width * 0.6, width * 0.95),
      random(height * 0.3, height * 0.85)
    );
  }
}

function drawFuturisticEffect() {
  noFill();
  stroke(random(100, 255), random(100, 255), random(100, 255), 150);
  strokeWeight(3);
  for (let i = 0; i < 15; i++) {
    ellipse(
      random(width * 0.6, width * 0.95),
      random(height * 0.3, height * 0.85),
      random(30, 100)
    );
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  drawUI();
}
