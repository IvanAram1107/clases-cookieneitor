import { Criatura } from './criatura.js';

class Mounstro extends Criatura {
  constructor (name, life, attack, defense){
    super(name, life, attack, defense);
  }
}

export class Orco extends Mounstro {
  constructor () {
    super ("Orco", 30, 20, 5);
  }
}

export class Dragon extends Mounstro {
  constructor () {
    super ("Dragon", 50, 30, 10);
  }
}

export class Cookieneitor extends Mounstro {
  constructor () {
    super ("Cookieneitor", 100, 40, 15);
  }
}