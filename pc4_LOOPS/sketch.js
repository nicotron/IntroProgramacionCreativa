/*
clase 4 loops / module

Loops permiten ejecutar una sección de código muchas veces.
While loop  - https://p5js.org/reference/#/p5/while
For loop    - https://p5js.org/reference/#/p5/for

while loop: recibe una condición y ejecuta el código dentro de su ámbito
mientras sea verdadera. Es importante que dentro del ámbito se modifique la condición, si no, no se saldrá del loop.

while ( condición ) {
    código
}

for loop: consiste en tres expresiones diferentes dentro de los paréntesis,
Estas expresiones controlan la cantidad que el loop se ejecuta. La primera es la
declaración e inicialización de una variable que da inicio  al loop; La segunda
expresión es una condición que se evalua antes del loop, si la expresión
devuelve falso, entonces el loop termina; La tercera expresión se ejecuta al
final del loop.
El código dentro del ámbito se ejecuta entre la evaluación de la segunda
expresión, y la tercera expresión.
De esta manera la estructura de este loop asegura la repetición controlada y la
salida del loop

for (declaración inicialización; condición; ejecutada al final) {
    código
}
*/

let a

function setup() {
    createCanvas(400, 400)
    // frameRate(1)
    a = 0
}

function draw() {
    background(255)
    print('----------- INICIO DRAW -----------')
    let a_draw = 0                                  // variable de ejemplo

    // Dentro del draw el loop se ejecuta una sola vez ya que no hay
    // modificación de la condición fuera del loop.
    while ( a < 2 ) {                               // condición
        print('----------- DENTRO WHILE')
        print('frames:' + frameCount + ' a:' + a)   // código
        print( a<2)                                 // código
        a++                                         // modificación condición
    }
    print( a<2 )
    print('frames:' + frameCount + ' a:' + a + ' después del ciclo while')
    print('------------------------------------')

    // Por convención la variable del loop es i, si se anidan for loops,
    // estas son j, k, l...
    for( let i = 0; i < 3; i++ ) {
        print('----------- DENTRO FOR')
        print('i = ' + i)
    }
    print(' ')


    // Ejemplos visuales
    
    if(frameCount == 3) {noLoop()}
}

// falta modulo
