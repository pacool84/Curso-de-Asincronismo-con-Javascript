/* 
Los callbacks en javascript se define como un funcion que se pasa a otra funcion como un argumento, para que luego
se invoque dentro de la funcion externa para completar algun tipo de rutina
*/

//Ejercicio 1
function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, sumNumbers) {
  return sumNumbers(num1, num2);
}

console.log(calc(2, 4, sum));

//Ejercicio 2

setTimeout(function () {
  console.log("Hola Javascript con Asincronismo");
}, 2000);

//Ejercicio 3

function greetings(name) {
  console.log(`Hola ${name}`);
}

setTimeout(greetings, 2000, "Sebas");

/* 
De manera mas coloquial los callbacks es Funcion que recive otra funcion para ser ejecutada segun sea el caso
 */
