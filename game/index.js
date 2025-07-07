import { Orco, Cookieneitor, Dragon } from "./mounstro.js";
import { Game } from "./game.js";

// Destructuring objects in JS
// More on export/import in JS
// Promises
// First class functions

// Optional chaining (?.)
// Operator precedence
// Short-circuit evaluation
// Nullish coalescing, logical OR (||) and logical AND (&&)
// Switch statement
// Getters and Setters
// Github Branches and PRs

/*
- Cambiar la clase Heroe para que solo reciba el nombre del heroe y por defecto
  le ponga 100 de vida y un numero aleatorio entre 5 y 20 de ataque. Para obtener
  este valor pueden usar la siguiente linea de codigo:
  Math.floor(Math.random() * 16) + 5;
- Implementar una clase Logger en el archivo de input.js la cual se va a encargar
  de toda la interaccion con el usuario (mostrar mensajes, hacer preguntas, etc).
  Ahorita ya puse 3 funciones genericas en ese archivo que van a ayudar a cumplir
  este punto. (Estas funciones deben pertenecer a la clase Logger)
- Añadir un atributo para la defensa de las criaturas. El heroe debe asignar un 
  valor aleatorio entre 10 y 20:
  Math.floor(Math.random() * 11) + 10;
  Y para los mounstros se debe asignar algun valor para cada tipo de mounstro 
- Añadir un atributo para guardar la posicion de las criaturas, éste puede ser 
  una lista de 2 valores (uno para la posicion en X y el otro para la posicion en Y),
  o si quieren puede ser un objeto que tenga de propiedades 'x' y 'y'.
- Añadir un metodo para mover a una criatura (este deberá actualizar el atributo
  anteriormente creado).
- En la clase Game se debe implementar las funciones para generar el mapa de juego,
  mostrar el mapa, mover a un jugador, interactuar con casilla y terminar la partida.
  Ademas de validaciones de movimientos, etc.
- La generacion del mapa debe ser aleatoria (La posicion del jugador, la posicion
  del cofre ganador y la posicion de los enemigos). Lo que no es aleatorio es el
  tamaño del mapa (width x height) y la cantidad de enemigos 
- La funcion que van a crear para mostrar el mapa debe de mostrar el mapa en una
  cuadricula y cada espacio de esta cuadricula debe tener:
  ? = En caso de que el espacio no haya sido visitado
  P# = El espacio en el que se encuentra algun jugador
  x = En caso de haber visitado esa casilla 
*/