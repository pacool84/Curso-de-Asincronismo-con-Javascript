//Los generadores son funciones de las que se puede salir y volver a entrar.
//Su contexto (asociación de variables) será conservado entre las reentradas.
//La sintaxis es utilizando un asterisco function*
//El método next() retorna un objeto con una propiedad value que contiene el valor bajo el operador yield y una propiedad done que indica, con un booleano,
//si la función generadora ha hecho yield al último valor.

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["Sebastian", "Brenda", "Naginie", "Paco"]);
console.log(it.next());

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value); //Retorna "undefined" debido a que ya no existen mas elementos en el array
