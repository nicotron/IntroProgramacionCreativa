/*
clase 6 Interacción teclado



*/

let a, b, c

function setup() {
  createCanvas(400, 400)
}

function draw() {
	background(255)
	push()
	translate(width * .75, height * .65)
	modulo('#BADCF4', 30, .8, 40)            // llamado de la función
	pop()
}

// Descripción de la función:
function modulo (color_1, a, trans, crl_pos) {
	stroke(255)                             // línea blanca
	strokeWeight(10)                        // grosor de línea

	fill(color_1)                           // un rectángulo verde abajo
	rectMode(CENTER)
	rect(0, a * 3, a * 5, a * 3)
	fill(35, 78, 40, 255 * trans)           // un círculo azul arriba
	circle(0, crl_pos, a * 5)
}
