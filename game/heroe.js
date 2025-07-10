import { Criatura } from "./criatura.js";
import { getRandomInt } from "./helper.js";

export class Heroe extends Criatura {
  constructor (name){
    const attack = getRandomInt(20, 40); // Value between 20 and 40
    const defense = getRandomInt(15, 20) // Value between 15 and 20
    super(name, 100, attack, defense);
  }
}
