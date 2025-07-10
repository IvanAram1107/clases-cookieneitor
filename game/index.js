import { Orco, Cookieneitor, Dragon } from "./mounstro.js";
import { Game } from "./game.js";

/*
Info:
El juego que estamos haciendo puede ser jugado de 1 a 4 jugadores. y el objetivo
es encontrar el cofre antes que los demas jugadores y se juega por turnos. En cada
turno de cada jugador se lanza 1 dado y el jugador se mueve el numero que caiga
el dado. El tablero en el cual se desarrolla el juego es una cuadricula que puede
ser pequeño (5x5), mediano (7x8) o grande (10x10). Los jugadores inician el juego
en alguna casilla aleatoria, al igual que los enemigos, el cofre, las trampas y 
los objetos. Los enemigos pueden ser Orcos, Dragones o Cookieneitors, las trampas
bajan una pequeña cantidad de vida al jugador y los objetos pueden ser pociones
de vida, pociones de ataque, pociones de defensa o pociones full (suben ataque
y defensa). El numero de enemigos, objetos y trampas varia dependiendo del tamaño
del tablero:

+---------------+-------+---------+--------+
|               | Chico | Mediano | Grande |
+---------------+-------+---------+--------+
| Orcos         | 5     | 15      | 35     |
| Dragones      | 3     | 9       | 16     |
| Cookieneitors | 1     | 2       | 3      |
| P. de vida    | 3     | 8       | 12     |
| P. de ataque  | 1     | 3       | 5      |
| P. de defensa | 1     | 3       | 5      |
| P. full       | 1     | 2       | 3      |
| Trampas       | 1     | 3       | 5      |
| Cofres        | 1     | 2       | 3      |
+---------------+-------+---------+--------+

Si el jugador cae en una casilla de un enemigo empieza un combate automatico el
el cual tambien es por turnos empezando por el jugador. En cada turno del combate
el jugador y el enemigo se intentaran atacar y basado en la siguiente tabla de
probabilidades es que se determinará si el ataque fue exitoso, critico, o falló.

+---------------+----------------+---------+-------+
|               | Ataque exitoso | Critico | Fallo |
+---------------+----------------+---------+-------+
| Jugador       | 95%            | 5%      | 0%    |
| Orco          | 85%            | 0%      | 15%   |
| Dragon        | 70%            | 2%      | 28%   |
| Cookieneitor  | 55%            | 4%      | 41%   |
+---------------+----------------+---------+-------+

El jugador no puede moverse a la casilla de otro jugador y los enemigos no se mueven,
solo los jugadores.
Si un jugador muere renace despues de 3 turnos en alguna casilla aleatoria que ya
haya sido descubierta, y el mounstro se queda en el tablero en la casilla en la
que estaba y con la vida que le dejó el jugador antes de morir.
En el momento en que un jugador encuentra 1 cofre se acaba del juego, y ese jugador
sería el ganador mientras que los demas jugadores habrian perdido la partida (esto
solo lo pongo para indicar que no existe segundo, tercero, o cuarto lugar, solo
1 ganador y los demas perdedores).
*/
/*
Tareas:
- Crear una clase para los objetos
- Crear una clase para los jugadores
- Crear una clase para las trampas (Talvez no sea necesario pero por cualquier cosa lo pongo aqui)
- Agregar un metodo en la clase Game para generar el mapa y poblarlo
- Agregar un metodo en la clase Game para mostrar el mapa
- Agregar un metodo en la clase Game para jugar 1 turno del juego
- Agregar un metodo en la clase de los jugadores para "tirar un dado" y mover a
  su Heroe
- Agregar un metodo en la clase Heroe para interactuar con las pociones.
- La clase Game debera tener los metodos necesarios para hacer las validaciones.
  Por ejemplo si el jugador esta en la casilla (1, 1) y tira un 1, el jugador
  puede moverse a 4 diferentes lugares (0, 1), (2, 1), (1, 0) y (1, 2), entonces
  si el jugador ingresa unas coordenadas diferentes pues no debería ser aceptado
  y se debería preguntar al usuario que intente otra vez.
- La clase Game debera tener los metodos necesarios para llevar a cabo una batalla
  entre 1 jugador y 1 enemigo, el cual debera tomar en cuenta la tabla de porcentajes
  descrita en la seccion anterior
*/
/*
Notas:
- Si necesitan crear mas attributos o metodos no hay problema, no se limiten a los
  que se piden en las tareas
- En el archivo helper.js agregué un par de funciones que nos van a ayudar a obtener
  valores aleatorios
*/