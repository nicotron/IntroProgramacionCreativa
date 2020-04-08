/*
clase 6 Interacción teclado

Crear interacción humano-computadora se puede lograr por medio del teclado
como vínculo entre las dos partes.

P5JS tiene varias maneras de hacer esto, veremos las dos más útiles:
- Letras minúsculas y mayúsculas, y los números
	https://p5js.org/reference/#/p5/keyTyped

- Teclas especiales como flechas y barra espaciadora
	https://p5js.org/reference/#/p5/keyCode



Para leer las teclas se usa la función keyTyped que se ejecuta cada vez alguna
tecla alfanumérica es apretada, excluyendo a teclas de funciones como Shift.
La manera de utilizar la función del teclado es para modificar información de
variables globales, así el código que está en draw es más legible y todo el
programa es más ordenado.

Uso
Dentro del ámbito de esta función se deben declarar condicionales con
tres iguales para comparar con la palabra key la letra que se usa,
devolviendo verdadero y funcionando como una condición estándar.
Debe declararse una condición por cada tecla que se usa.

Sintaxis
function keyTyped() {
	if( key === 'a') {
		declaraciones
	}
	if( key === 'A') {
		declaraciones
	}
}

Para usar las siguientes teclas especiales
BACKSPACE, DELETE, ENTER, RETURN, TAB,
ESCAPE, SHIFT, CONTROL, OPTION, ALT,
UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW

Se deben declarar dentro de la función keyPressed y comparar con la palabra
keyCode

Sintaxis
function keyPressed() {
  if (keyCode === UP_ARROW) {
	declaraciones
  } else if (keyCode === DOWN_ARROW) {
  	declaraciones
  }
}


*/

let a, b, c, d

function setup() {
  	createCanvas(400, 400)
  	a = 30
  	b = 4
  	c = 4
	d = 0
}

function draw() {
	background(255)
	textSize(50);
	text(key, 10, height* .9)					// muestra letra en uso

	for(let i = 0; i < b; i++) {
      for (let j = 0; j < c; j++) {
        push()
        translate(width * (i+1)*0.1, height * (j+1)*0.1)
        scale(.2)                           	// disminuir tamaño
        modulo('#BADCF4', a, .8, i*j)      		// llamado de la función
        pop()
      }
    }

	push()
	translate(width * .75, height * .5)
	rotate(radians(d))
  	modulo('#BADCF4', 30, .8, 40)           	// llamado de la función
	pop()


}

// Teclado alfanumérico
function keyTyped() {
	if( key === 's') {						// aumenta tamaño general
		a += 10
	}
	else if( key === 'A') {					// disminuye tamaño general
		a -= 10
	}
	else if ( key === 'r') {
		d += 10								// rotación en 10 grados
	}
}

// Teclas especiales
function keyPressed() {
  	if (keyCode === UP_ARROW) {
		b++                                    // aumenta columnas
  	} else if (keyCode === DOWN_ARROW) {
  		b--                                    // disminuye columnas
  	}
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
