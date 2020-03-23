/*
contenido clase 2
variables operadores condicionales
ARBOL DE DESICION
*/

// varialbes globales: accesibles por todo el programa
let a, c // declaracion
let b = 2 // declaracion, inicializacion de variable

function setup() {
    createCanvas(400, 400)
    a = 2 // inicializacion varaible numerica
    c = true // inicializacion variable booleana

    // variable local: su uso no puede salir de su ambito {}
    let d = 0

    // condicion:         si es verdadero ejecuta secuencia de
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
    frameRate(1)
}

function draw() {
    background(220)
    // el codigo anterior dentro del loop draw a 1 frame por segundo
    // además de agregar dibujo
    print(frameCount+'---------------------')

    // ARBOL DE DECISION
    if (a > 1) { // uso de variable y operador aritmetico
        print('A:')
        print('Verdadero')
        print(a > 1)

        // dibujos: CIRCULO
        push()
        translate(width*.5, height*.5)
        circle(0,0,width*.5)
        pop()

    } else { // si no es verdadero, se ejecuta las
        print('A:')
        print('Falso') // siguientes lineas
        print(a > 1)

        // dibujos: CUADRADO
        push()
        translate(width*.5, height*.5)
        rectMode(CENTER)
        square(0,0,width*.5)
        pop()
    }

    // ARBOL DE DECISION
    // operadores logicos
    if(c) {
        print('C:')
        print(c)

        // dibujos: CIRCULO chico
        push()
        translate(width*.75, height*.5)
        circle(0,0,width*.25)
        pop()
    } else {
        print('C:')
        print(c)

        // dibujos: CUADRADO chico
        push()
        translate(width*.25, height*.5)
        rectMode(CENTER)
        square(0,0,width*.25)
        pop()
    }

    // modificaciones de valores para cambiar desiciones en los arboles
    a *= -1
    c = !c
}
