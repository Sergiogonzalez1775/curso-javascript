//Utilizando bucles for, se tiene que dibujar un árbol de navidad en pantalla utilizando asteriscos y espacio.
/*
    *
   ***
  *****
 *******
*********
*/

var pisos = 5;
var elemento = '*';
var espacios;


for (var i = 0; i <= pisos; ++i) {
    espacios = ' '.repeat(pisos - i)
    console.log(espacios + elemento);
    elemento = elemento + '**';
    

}