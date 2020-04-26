/*
contenido clase 1
variables operadores condicionales
ARBOL DE DECISIÓN
*/

// variabLes globales: accesibles por todo el programa
// se declaran antes del ámbito (corchete)

let a, c // declaración
let b = 2 // declaración, inicialización de variable

function setup() {
    createCanvas(400, 400) // creación de ventana
    a = 2  // inicialización variable numérica
    c = true // inicialización variable booleana

    // variable local: su uso no puede salir de su ámbito {}
    let d = 0

    // condición: si es verdadero ejecuta secuencia de
    // declaraciones dentro del ámbito

    if (a > 1) { // uso de variable y operador aritmético
        print('Verdadero')
        print(a > 1)
    } else { // si no es verdadero, se ejecuta las
        print('Falso') // siguientes líneas
        print(a > 1)
    }

    // operadores lógicos
    if(c) {
        print("valor variable c")
        print(c)
    } else {
        print("valor variable c")
        print(!c)
    }

    // modificación de valor
    c = false
    if(c) {
        print("valor variable c")
        print(c)
    } else {
        print("valor variable c")
        print(c)
    }
}

function draw() {
    background(220)
}
