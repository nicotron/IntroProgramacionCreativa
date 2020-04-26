/*
contenido clase 1
variables operadores condicionales
ARBOL DE DECISION
*/

// variables globales: accesibles por todo el programa
// se declaran antes del ambito (entre corchetes)

int a; // declaracion
int b = 2; // declaracion, inicializacion de variable
boolean c; // declaracion

void setup() {
  size(400,400); // creacion de ventana
  a = 2; // inicializacion de variable
  c = true; // inicializacion de variable
  int d = 0; // variable local: su uso no puede salir de su ambito {}
  
  // condicion: si es verdadero ejecuta secuencia de
  // declaraciones dentro del ambito
  
  if (a > 1) { // uso de variable y operador aritmetico
      print("Verdadero");
      print(a > 1);
  } else { // si no es verdadero, se ejecuta las siguientes lineas
      print("Falso");                                 
      print(a > 1);
  }

  // operadores logicos
  if(c) {
      print("valor variable c");
      print(c);
  } else {
      print("valor variable c");
      print(!c);
  }

  // modificacion de valor
  c = false;
  if(c) {
      print("valor variable c");
      print(c);
  } else {
      print("valor variable c");
      print(c);
  }
}

void draw() {
background(220);
}
