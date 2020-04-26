/*
contenido clase 1
variables operadores condicionales
ARBOL DE DECISION
*/

// variabLes globales: accesibles por todo el programa
// se declaran antes del ambito (corchete)

let a, c // declaracion
let b = 2 // declaracion, inicialización de variable

function setup() {
    createCanvas(400, 400) // creacion de ventana
    a = 2  // inicializacion varaible numerica
    c = true // inicializacion variable booleana

    // variable local: su uso no puede salir de su ambito {}
    let d = 0

    // condicion: si es verdadero ejecuta secuencia de
    // declaraciones dentro del ambito

    if (a > 1) { // uso de variable y operador aritmetico
        print('Verdadero')
        print(a > 1)
    } else { // si no es verdadero, se ejecuta las
        print('Falso') // siguientes lineas
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
