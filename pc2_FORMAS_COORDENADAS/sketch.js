/*
recordar que los valores ingresados en la función del canvas
crean variables globales width, height

setup programas estáicos
draw  programas estáticos, dinamicos (frameRate)

posición: dos primeros parámetros (3 3D)
tamaño: siguentes dos parámetros
color: se llama antes de las figuras

*/
function draw() {
  background(color) // 0 - 255
  // coordenadas cartesianas: 1 tipo de existencia
  point(x, y) 	// punto
  line(x1, y1, x2, y2) // línea
  cirle(x, y, radio) // círculo
  square(x, y, tamaño) // cuadrado
  // cuadrado con radios diferentes
  square(x, y, tamaño, [tl], [tr], [br], [bl])
}


/*
Mover en relación al origen.

Los parámetros de una función de dibujo
	rect(parámetro, parámetro, ...)
son valores numéricos que siempre están en relación a un origen
	(0, 0) vértice superior izquiedo
Para mover un objeto debemos modificar los valores de esos parámetros
	rect(parámetro+1, parámetro+1, ...)
No es conveniente para >2 parámetros.

Mover en relación al origen:
translate(x, y, z)
Convierte el origen global a uno local.
Entonces los dibujos pueden
mantener sus propiedades formales
cambiando su posición.

Trasladar el origen es acumulativo por lo que
afectará a todos los objetos declarados después
Sin embargo esto se controla agregando
push()
translate()
dibujo
pop()

-------------------------------------------------------------------
Rotar nace desde translate
rotate() gira en el eje Z
rotate(radians) // 0-360 : 0-TWO_PI || radians(angulo)

rotateX() // rotación en X
rotateY() // rotación en y
rotateZ() // rotación en z
*/

function draw() {
  background(220)
  push()
  translate(width*.5, height*.5)
  line(0, 0, 50, 0)
  pop()

  push()
  translate(width*.25, height*.5)
  rotate(radians(-45))
  line(0, 0, 50, 0)
  pop()
}
