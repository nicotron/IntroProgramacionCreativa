/*
contenido clase 4
clase 3 color / array[]

varialbes globales: accesibles por todo el programa
[] corchetes que definen que una variable es una lista de elementos
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

    // modificaciones de valores para cambiar desiciones en los arboles
    a *= -1
}
