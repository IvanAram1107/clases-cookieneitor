/*
Vamos a simular que estamos programando un videojuego.
Debemos crear clases para representar personajes en un juego.
por ende:
1. Vamos a crear la clase abstracta de una criatura o character o como quieran
  llamarlo. Dicha clase debe recibir el nombre, la vida y el ataque del personaje
2. Agregar un metodo estaVivo() que regrese verdadero o falso dependiendo de si
  la criatura esta viva o no
3. Agregar un metodo recibirAtaque() que reciba un numero (el daño recibido) y
  disminuya la vida de la criatura respectivamente
4. Crear las clases Heroe y Mounstro que extiendan la clase anteriormente creada
5. Crear 3 clases que hereden de Mounstro (por ejemplo Orco) que sobrecarguen el
  constructor de tal manera que no reciba ningun parametro y automaticamente ponga
  el nombre del mounstro, su vida y su ataque.
  
*/

class Criatura {
  name;
  life;
  attack;
    
  constructor (name, life, attack) {
    this.name = name;
    this.life = life;
    this.attack = attack;
  }

  estaVivo () {
    // if(this.life === 0) {
    //   return false;
    // } else {
    //   return true;
    // }
    // return this.life === 0 ? false : true;
    return this.life > 0;
  }

  recibirAtaque(dano) {
    // this.life -= dano;
    this.life = this.life - dano;
    if(this.life < 0){
      this.life = 0;
    }
  }
}

class Mounstro extends Criatura {
  constructor (name, life, attack){
    super(name, life, attack);
  }
}

class Heroe extends Criatura {
  constructor (name, life, attack){
    super(name, life, attack);
  }
}

class Orco extends Mounstro {
  constructor () {
    super ("Orco", 50, 20);
  }
}

class Dragon extends Mounstro {
  constructor () {
    super ("Dragon", 100, 200);
  }
}

class Cookieneitor extends Mounstro {
  constructor () {
    super ("Cookieneitor", Infinity, Infinity);
  }
}
