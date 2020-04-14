/*
clase 7 Interacción mouse

Crear interacción humano-computadora se puede lograr por medio del mouse
como vínculo entre las dos partes.

P5JS tiene varias maneras de hacer esto, veremos las más útiles:

--------------------------------------------------------------------------------
- Coordenadas del mouse
https://p5js.org/reference/#/p5/mouseX
https://p5js.org/reference/#/p5/mouseY

Las funciones mouseX y mouseY entregan el valor entero de la posición del mouse
en relación al origen (0, 0) del canvas. Esto nos permite por ejemplo posicionar
elementos en la posición del mouse, para eso tenemos usar el mouse en conjunto
con booleanas activadas por el teclado para dejar las coordenadas como
información de las variables que estamos usando.

Sintaxis
mouseX mouseY

Ejemplo
let posx, posy, guardar_pos

if (guardar_pos == true) {		// si la condición es verdadera
	posx = mouseX				// posx toma el valor del mouse en x
	posy = mouseY				// posy toma el valor del mouse en y
	guardar_pos = false			// se modifica la condición
}

if(key == 'p') {
	guardar_pos = true
}


--------------------------------------------------------------------------------
- Click del mouse
https://p5js.org/reference/#/p5/mouseClicked

Se llama a la función cada vez que el botón del mouse se presiona y luego suelta
Funciona solamente con el botón izquierdo del mouse, su uso puede gatillar:
- cambios en booleanas: cuando se hace click cambia de true = !true (false)
- sumar valores de variables globales: cambiar tamaños, rotación, lista de color

Sintaxis
function mouseClicked() {
	declaraciones

  return false;		// prevent default
}

Ejemplo
let indice
let coloresLista = []

fill(coloresLista[indice])

// función global
function mouseClicked() {
	indice++		// cambia el indice por 1 y cambia el color de la lista

  return false;		// prevent default
}


--------------------------------------------------------------------------------
- Rueda del mouse
https://p5js.org/reference/#/p5/mouseWheel

Función global que permite utilizar la rueda del mouse o el trackpad, el valor
que entrega es importante imprimirlo en la consola para poder darle uso.
Entrega valores positivos y negativos en relación al movimiento de la rueda,
y un factor que varia dependiendo del dispositovo utilizado.
Su estructura tiene un parámetro que gatilla la lectura de la rueda y es la
variable que se utiliza.

Sintaxis
function mouseWheel(evento) {
  print(evento.delta);
  declaraciones
  //return false; 		  //descomentar para bloquear scroll en página
}

Ejemplo
function mouseWheel(evento) {
  print(evento.delta);
  escala += (evento.delta * 0.01)
  //return false; 		  //descomentar para bloquear scroll en página
}

*/

// variables del curso
let a, b, c, d
let posx, posy, guardar_pos
let indice
let coloresLista = []

// ---- variables del programa
let spaceEnableX, spaceEnableY, spaceX, spaceY, escala

function setup() {
  	createCanvas(400, 400)
  	a = 30
  	b = 4
  	c = 4
	d = 0
	posx = width * .75
	posy = height * .5
	coloresLista[0] = color('#95aca3')
	coloresLista[1] = color('#deb23a')
	coloresLista[2] = color('#cc585c')
	coloresLista[3] = color('#bfe55d')
	indice = 0

	// --- variables del programa
	spaceEnableX = spaceEnableY = false
	spaceX = spaceY = .1
	escala = .2
}

function draw() {
	background(255)
	textSize(20);
	text(key, 10, height* .9)					// muestra letra en uso

	for(let i = 0; i < b; i++) {
      for (let j = 0; j < c; j++) {
        push()
        translate(width * (i+1)*spaceX, height * (j+1)*spaceY)
        scale(escala)                           	// disminuir tamaño
        modulo('#BADCF4', a, .8, i*j)      		// llamado de la función
        pop()
      }
    }

	if (guardar_pos == true) {		// si la condición es verdadera
		posx = mouseX				// posx toma el valor del mouse en x
		posy = mouseY				// posy toma el valor del mouse en y
		guardar_pos = false			// se modifica la condición
	}

	// dar la vuelta en el indice
	if (indice >= coloresLista.length) {
		indice = 0
	}

	push()
	translate(posx, posy)
	rotate(radians(d))
  	modulo(coloresLista[indice], 30, .8, 40)           	// llamado de la función
	pop()

}


// Teclado alfanumérico
function keyTyped() {
  if (key === 's') { // aumenta tamaño general
    a += 10
  } else if (key === 'A') { // disminuye tamaño general
    a -= 10
  } else if (key === 'r') {
    d += 10 // rotación en 10 grados
  } else if (key === 'p') { // cambio de posición al mouse
    guardar_pos = true
	} else if (key === '1') {
	spaceEnableX = !spaceEnableX
} else if (key === '2') {
	spaceEnableY = !spaceEnableY
	}
}

// Teclas especiales
function keyPressed() {
  if (keyCode === UP_ARROW) {
    b++ // aumenta columnas
  } else if (keyCode === DOWN_ARROW) {
    b-- // disminuye columnas
  }
}

// función global
function mouseClicked() {
  print(coloresLista.length, indice)
  indice++ // cambia el indice por 1 y cambia el color de la lista
  return false; // prevent default
}

// rueda del mouse
function mouseWheel(evento) {
  	print(evento.delta);
  		   if (spaceEnableX) { spaceX += (evento.delta * 0.01)	}
  	  else if (spaceEnableY) { spaceY += (evento.delta * 0.01)	}
      else {escala += (evento.delta * 0.01)					}

  //return false; 		  //descomentar para bloquear scroll en página
}

// Descripción de la función
function modulo (color_1, f_size, trans, crl_pos) {
  stroke(255)                             // línea blanca
  strokeWeight(10)                        // grosor de línea

  fill(color_1)                           // un rectángulo verde aebajo
  rectMode(CENTER)
  rect(0, f_size * 3, f_size * 5, f_size * 3)
  fill(35, 78, 40, 255 * trans)           // un círculo azul arriba
  circle(0, crl_pos, f_size * 5)
}
