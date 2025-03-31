/*
En éste ejercicio se debe escribir una función que reciba dos parámetros.
Por un lado, debe recibir un primer parámetro que debe ser un vector de números. 
El segundo parámetro ha de ser un número.

La función debe multiplicar todos y cada uno de los números del array por el valor del segundo parámetro, 
haciendo que el array resultante sea un array como el original pero por cada número multiplicado.
*/

function multiplicar(num_list, multiplicador) {
    var resultado;
    var new_array = [];
    for (var number in num_list) {
        resultado = num_list[number] * multiplicador
        new_array.push(resultado)
    }

    return new_array
}

var num_list = [1, 2 ,3 ,4 ,5, 6]
var multiplicador = 2;

var new_array = multiplicar(num_list, multiplicador)

console.log(new_array)


