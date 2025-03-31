// Realizar un programa que, dadas dos lineas en una dimension (dos rangos)
// 1(a, b), 2(c, d) comprobar que las lineas se solapan o no se solapan

//------a--------c------b------d---------

var a = 5;
var b = 20;
var c = 10;
var d = 25;

var Adentrode2 = a > c && a < d;
var Bdentrode2 = b > c && b < d;
var Cdentrode1 = c > a && c < b;
var Ddentrode1 = d > a && d < b;

var haySolape = Adentrode2 || Bdentrode2 || Cdentrode1 || Ddentrode1;

console.log(haySolape);