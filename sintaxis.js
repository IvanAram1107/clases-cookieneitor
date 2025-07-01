/* Sintaxis en JS

La sintaxis es la manera en la cual vamos a ordenar las palabras en un archivo
de javascript para que sea válido.

- En este archivo cualquier texto que se encuentre entre los signos de mayor-que
y menor-que esta expresando un placeholder, y dicho texto es lo que se
escribiria en un caso real.
- De igual manera cualquier texto que se escriba entre corchetes cuadrados
indica que algo es opcional, a menos que se indiquexplicitamente lo contrario.
- Dentro de los corechetes cuadrados una coma seguida de 3 puntos se usa para
indicar que lo que esta antes de la coma se puede repetir n veces.

--------------------------------------------------------------------------------
- Declaracion de variable:

let <identifier> [= <value>];

----------------------------------------
- Ejemplos:

let variable1;
let variable2 = 1;

--------------------------------------------------------------------------------
- Declaracion de constante:

const <identifier> = <value>;

----------------------------------------
- Ejemplo:

const constante1 = "Hola";

--------------------------------------------------------------------------------
- Uso del if

if (<condition>) {
  [<statement>; ,...]
}
[else if(<condition>) {
  [<statement>; ,...]
} ,...]
[else {
  [<statement>; ,...]
}]

----------------------------------------
- Ejemplos:

const num = 3;
if(num < 0) {
  console.log("El numero es menor a 0");
} else if(num === 0) {
  console.log("El numero es 0");
} else if(num > 0) {
  console.log("El numero es mayor a 0");
} else {
  console.log("Probablemente num no sea un numero!")
}

--------------------------------------------------------------------------------
- Uso del for:

for([<initialization>]; [<condition>]; [<increment>]) {
  [<statement>; ,...]
}

----------------------------------------
- Ejemplos:

for(let i = 0; i < 10; i++) {
  console.log("Iteracion", i);
}

for(let j = 0;;) {
  if(j === 10) {
    break;
  }
  console.log("Iteracion", j);
  j += 1;
}

--------------------------------------------------------------------------------
- Uso del for-of:

for(const <identifier> of <iterable>) {
  [<statement>; ,...]
}

----------------------------------------
- Ejemplos:

const nombres = ["Ivan", "Aram", "Jorge", "Cesar"];

for(const nombre of nombres) {
  console.log("Hola", nombre);
}

--------------------------------------------------------------------------------
- Uso del for-in:

for(const <identifier> in <object>) {
  [<statement>; ,...]
}

----------------------------------------
- Ejemplos:

const precioFrutas = {
  manzana: 10,
  pera: 5,
  platano: 8
}

for(const key in precioFrutas) {
  console.log("La", key, "cuesta", precioFrutas[key], "pesos");
}

--------------------------------------------------------------------------------
- Declaracion y ejecucion de funciones:

function <identifier>([<parameter> [= <value>] ,...]) {
  [<statement>; ,...]
}

<identifier>([<argument> ,...]);

----------------------------------------
- Ejemplos:

function sumar(num1, num2) {
  console.log("Sumando", num1, "y", num2);
  return num1 + num2;
}

sumar(1, 2);

--------------------------------------------------------------------------------
- Clases

class <identifier> [extends <class>] {
  [constructor([<parameter> [= <value>] ,...]) {
    [<statement>; ,...]
  }]
}

----------------------------------------
- Ejemplo:

class Persona {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

--------------------------------------------------------------------------------
- Operador new

new <class>([<argument>, ...]);

----------------------------------------
- Ejemplo:

new Person("Ivan Gonzalez", 29);

--------------------------------------------------------------------------------
- Operador ternario

<condicion> ? <statement_if_true> : <statement_if_false> ;

----------------------------------------
- Ejemplo:



--------------------------------------------------------------------------------
DEFINICIONES:

<identifier>:     El nombre que recibe una variable, constante, funcion o parametro
<value>:          Cualquier valor real que javascript puede identificar, como numeros, strings, booleanos, nulos, etc.
<condition>:      Cualquier expresion que se pueda evaluar como true o false, las cuales suelen ser formadas con operadores logicos y/o con operadores de comparacion.
                  En un for se usa para determinar cuando se termina el for
<statement>:      cualquier expresion de javascript (como una declaracion, una llamada a una funcion, o cualquier cosa)
<initialization>: Expresion que se ejecuta al inicio de un ciclo for, normalmente usada para declarar una variable
<increment>:      Expresion que se ejecuta al final de cada iteracion de un ciclo for, normalmente usada para incrementar la variable declarada en el ciclo for
<iterable>:       Cualquier valor, variable o constante que tenga indices y que se pueda recorrer indice por indice 
<object>:         Tipo de dato en JS usado para guardar informacion en pares llave-valor
<parameter>:      Variable que se declara en la definición de la función para recibir valores que se le pasan al llamarla
<argument>:       Valor que recibe un parametro de una funcion a la hora de llamarla
                  Cuando se usa el operador new hace referencia a las valores que reciben los parametros del constructor de la clase
<class>:          El nombre de una clase

--------------------------------------------------------------------------------
*/