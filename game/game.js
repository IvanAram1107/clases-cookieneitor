import Logger from './input.js';
import { Heroe } from './heroe.js';

export class Game {
  constructor(...playerNames) {
    this.logger = new Logger();
    this.playersQty = playerNames.length;
    this.currentPlayerIdx = 0;
    this.heroes = playerNames.map(name => new Heroe(name.trim()));
  }

  get currentPlayer() {
    return this.heroes[this.currentPlayerIdx];
  }

  nextPlayer() {
    this.currentPlayerIdx = (this.currentPlayerIdx + 1) % this.playersQty;
  }

  async play() {
    // const actions = [
    //   "Move",
    //   "Show Map",
    //   "Exit"
    // ];
    // const directions = [
    //   "Up",
    //   "Down",
    //   "Left",
    //   "Right"
    // ]
    this.logger.writeMessage("<Mensaje de bienvenida>", { prependNewline: true, appendNewline: true });
    while(true){
      this.logger.writeMessage("<Mensaje de inicio de turno del jugador actual>", { appendNewline: true });
      // const actionIdx = await this.logger.selectOption(actions);
      // if(actionIdx === 0) {
      //   let movementAllowed = false;
      //   while(!movementAllowed) {
      //     const dirIdx = await this.logger.selectOption(directions);
      //     // Add movement validation and if not allowed show message to the user and try again,
      //     // If allowed then break cicle
      //   }
      //   // Reaching this point means the player moved so he has to interact with
      //   // whatever is in this spot
      // } else if(actionIdx === 1) {
      //   // Show map here
      // } else {
      //   break;
      // }
      this.logger.writeMessage("<Mensaje de final de turno del jugador actual>", { appendNewline: true });
      this.nextPlayer();
    }
    this.logger.writeMessage("<Mensaje de despedida>", { prependNewline: true });
  }
}
