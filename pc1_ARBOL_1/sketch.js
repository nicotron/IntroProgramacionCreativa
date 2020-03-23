/*
contenido clase 1
variables operadores condicionales
ARBOL DE DESICION
*/

// varialbes globales: accesibles por todo el programa
let a, c // declaracion
let b = 2 // declaracion, inicialización de variable

function setup() {
    createCanvas(400, 400)
    a = 2                                   // inicialización varaible numérica
    c = true                                // inicialización variable booleana

    // variable local: su uso no puede salir de su ambito {}
    let d = 0

    // condicion:         si es verdadero ejecuta secuencia de
    // declaraciones dentro del ambito
    if (a > 1) { // uso de variable y operador aritmetico
        print('Verdadero')
        print(a > 1)
    } else { // si no es verdadero, se ejecuta las
        print('Falso')                                  // siguientes líneas
        print(a > 1)
    }

    // operadores logicos
    if(c) {
        print("valor variable c")
        print(c)
    } else {
        print("valor variable c")
        print(!c)
    }

    // modificacion de valor
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
