import { Criatura } from './criatura.js';

class Mounstro extends Criatura {
  constructor (name, life, attack){
    super(name, life, attack);
  }
}

export class Orco extends Mounstro {
  constructor () {
    super ("Orco", 50, 20);
  }
}

export class Dragon extends Mounstro {
  constructor () {
    super ("Dragon", 100, 200);
  }
}

export class Cookieneitor extends Mounstro {
  constructor () {
    super ("Cookieneitor", Infinity, Infinity);
  }
}