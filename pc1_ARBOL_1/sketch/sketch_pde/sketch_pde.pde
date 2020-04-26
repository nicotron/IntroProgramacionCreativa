/*
contenido clase 1
variables operadores condicionales
ARBOL DE DECISIÓN
*/

// variables globales: accesibles por todo el programa
// se declaran antes del ámbito (entre corchetes)

int a; // declaración
int b = 2; // declaración, inicialización de variable
boolean c; // declaración

void setup() {
  size(400,400); // creación de ventana
  a = 2; // inicialización de variable
  c = true; // inicialización de variable
  int d = 0; // variable local: su uso no puede salir de su ámbito {}
  
  // condicion: si es verdadero ejecuta secuencia de
  // declaraciones dentro del ámbito
  
  if (a > 1) { // uso de variable y operador aritmético
      print("Verdadero");
      print(a > 1);
  } else { // si no es verdadero, se ejecuta las siguientes líneas
      print("Falso");                                 
      print(a > 1);
  }

  // operadores lógicos
  if(c) {
      print("valor variable c");
      print(c);
  } else {
      print("valor variable c");
      print(!c);
  }

  // modificación de valor
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
