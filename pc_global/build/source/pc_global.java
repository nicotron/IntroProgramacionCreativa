import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class pc_global extends PApplet {

/*
   Todo el contenido del curso Introducción a la programación creativa
   De este código se extraen los ejemplos de cada clase.

   clase 1 variable numero texto / consola / operadores math* / condicionales
   clase 2 basic shapes b/n / coordenadas / translate / rotate
   clase 3 color / array[] /
   clase 4 loops / module
   clase 5 funciones / llamados /
   clase 6 7 interacción / teclado / (*) / camara / sonido
   clase 8 9 movimiento /
   clase 10 expo
 */

public void setup() {
        
}

public void draw() {
        background(253);
}
  public void settings() {  size(600, 700); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "pc_global" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
