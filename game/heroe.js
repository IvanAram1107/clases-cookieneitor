import { Criatura } from "./criatura.js";

export class Heroe extends Criatura {
  constructor (name, life, attack){
    super(name, life, attack);
  }
}