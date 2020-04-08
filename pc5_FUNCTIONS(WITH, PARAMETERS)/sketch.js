/*
clase 5 Funciones (y, parametros)

Se crean por medio la palabra clave "function" seguido de un nombre, parámetros entre los paréntesis, un ámbito local, y dentro de este, declaraciones que se quiera. La cantidad de declaraciones deben ser las necesaria para encapsularlas en una sola palabra. Los parámetros crean variables locales de la función que permiten modificar partes del código. El orden y la cantidad de estos dependerá de cuán diverso sea el resultado diseñado.
De deben describir fuera de todo ámbito.
De esta manera se logran desarrollar los conceptos de encapsulamiento, y reutilización, que junto con los loops permiten resultados más complejos, fáciles de leer, modificar y eficientes en los programas.

functions - https://p5js.org/reference/#/p5/function

// Descripción de una función
function nombre_de_la_funcion ( parámetros, separados, por, coma ) {
    declaraciones()
    declaraciones(parámetros)
    declaraciones(coma, por)
    declaraciones(separados)
}

// Llamado de la función
function draw() {
  background(color)
  nombre_de_la_funcion(1, 4, 3, "A")
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Describir luego funciones con retorno
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

rojo
197, 69, 57
verde
35, 78, 40
azul
27, 36, 87
*/

let a, b, c

function setup() {
  createCanvas(400, 400)
  a = 30
  b = 0.5
  c_verde = color(35, 78, 40)
}

function draw() {
  background(255)

  push()                                  // DIBUJO DE UN MODULO
  translate(width * .25, height * .25)    // un tercio al centro vertical
  stroke(255)                             // línea blanca
  strokeWeight(10)                        // grosor de línea

  fill(35, 78, 40)                        // un rectángulo verde abajo
  rectMode(CENTER)
  rect(0, a * 3, a * 5, a * 3)
  fill(27, 36, 87, 255*b)                 // un círculo azul arriba
  circle(0, 0, a * 5)
  pop()


  let c_rojo = color(197, 69, 57)
  push()                                  // DIBUJO DE UN MODULO (REPETICION)
  translate(width * .75, height * .25)    // un tercio al centro vertical
  stroke(255)                             // línea blanca
  strokeWeight(10)                        // grosor de línea

  fill(c_rojo)                            // un rectángulo verde abajo
  rectMode(CENTER)
  rect(0, a * 3, a * 5, a * 3)
  fill(35, 78, 40, 255*b)                 // un círculo azul arriba
  circle(0, 20, a * 5)
  pop()


  push()
  translate(width *.25, height *.65)
  modulo('#6CD2C6', 30, .2, 10)              // llamado de la función
  pop()

  push()
  translate(width *.75, height *.65)
  modulo('#BADCF4', 30,  .8, 40)              // llamado de la función
  pop()

  for(let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      push()
      translate(width * (i+1)*0.1, height * (j+1)*0.1)
      scale(.2)                           // disminuir tamaño
      modulo('#BADCF4', 30, i*.1, i*j)       // llamado de la función
      pop()
    }
  }
}

// Descripción de la función
function modulo (color_1, a, trans, crl_pos) {
  stroke(255)                             // línea blanca
  strokeWeight(10)                        // grosor de línea

  fill(color_1)                           // un rectángulo verde abajo
  rectMode(CENTER)
  rect(0, a * 3, a * 5, a * 3)
  fill(35, 78, 40, 255 * trans)           // un círculo azul arriba
  circle(0, crl_pos, a * 5)
}
