
/*
Todo el contenido del curso Introducción a la programación creativa
De este código se extraen los ejemplos de cada clase.

clase 1 variable numero texto / consola / operadores / condicionales
clase 2 basic shapes b/n / coordenadas / translate / rotate
clase 3 color / array[] /
clase 4 loops / module
clase 5 funciones / llamados / parámetros
clase 6 7 interacción / teclado / cámara / sonido
clase 8 9 movimiento /
*/

/*
clase 1 variable numero texto / consola / operadores math* / condicionales

tipos de variables - palabra clave de creación 'let'
pasos: declaración, inicialización, uso
sintaxis:
let nombre_de_variable;                         // declaración
let nombre_de_variable = valor;                 // declaración e inicialización

let nombre = 'Nicolas'                          // Texto se contiene entre
                                                // simple o doble comillas
let x = 1                                       // Números
let bool = true                                 // Boolean true 0 false

// consola: se accede con la función print()
print(nombre)
print(edad)

------------------------------------------------
operadores aritméticos modifican información en variables y entre varaibles
+ - * / %
let y = x+1
let z = x/y

operadores relacionales entregan True False al relacionar valores
< > <= => <>
=   asigna informacion a variables
==  compara valor de variables
=== compara valor y tipo de variable

operadores lógicos: entregan True o False dependiendo de su uso
not and or
!   not: devuelve el opuesto de la operación
&&  and: agrupa condiciones, devuelve true si todas las operaciones lo son
||  or:  agrupa condiciones, devuelve trua si al menos una operación lo es

print(!(2>1)) // no(True)

------------------------------------------------
Árbol de decisión: una condición que evalua por verdadero, si no se cumple
se puede crear un ámbito de descarte. En cada estado se crea un ámbito local,
se pueden agregar condiciones entre estas declaraciones, en donde solo una se
ejecutará como verdadera.

Sintaxis:
if (bool) {
    print("Valor variable bool: " + bool)
}
* else if
else

*/
let colores = [] // variable que almacena mas de un valor
let a

function setup() {
  createCanvas(400, 400)
    // llenar con informacion desde el primer elemento de indice 0
    colores[0] = color(0)
    // siguientes elementos
    colores[1] = color(255)
    // colores[...]
    colores[2] = color('magenta')                   // en palabras (algunas)
    colores[3] = color('#0f0')                      // en codigo hex
    colores[4] = color('rgb(0,0,255)')              // en rgb
    colores[5] = color('rgba(0, 0, 255, 1)')        // en rgb + alpha
    colores[6] = color(255, 204, 0)                 // en rgb P5JS

    a = 1
    frameRate(1)
}

function draw() {

    // llamando a los diferentes colores dentro de la lista
    if (a > 0) {
        background( colores[0] )
        /*
        Color en dibujos:
        SIEMPRE SE DECLARAN ANTES DE LAS FUNCIONES DE DIBUJO
        se puede usar tanto color en contorno como en relleno
        Si no se quiere contorno o relleno:
        SE DEBE DECLARAR QUE NO SE QUIERE
        */
        stroke( colores[2] )                            // contorno de color
        noFill()                                        // sin relleno

        // dibujos: CUADRADO
        push()
        translate( width*.5, height*.5 )
        rectMode( CENTER )
        square( 0,0,width*.5 )
        pop()
    } else {
        background( colores[1] )

        noStroke()                                      // sin contorno
        fill( colores[3] )                              // relleno de color

        // dibujos: CIRCULO
        push()
        translate( width*.5, height*.5 )
        circle( 0,0,width*.5 )
        pop()
    }

    // modificaciones de valores para cambiar decisiones en los arboles
    a *= -1
}
