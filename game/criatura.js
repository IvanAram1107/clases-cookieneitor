/**
 * An object with the x and y coordinates of the position of a criature
 * @typedef {Object} Position
 * @property {number} x - Indicates the coordinate in the x axis
 * @property {number} y - Indicates the coordinate in the y axis
 */

/**
 * @classdesc Represents a criature of the game
 */
export class Criatura {
  /** @type {string} */
  name;
  /** @type {number} */
  life;
  /** @type {number} */
  attack;
  /** @type {number} */
  defense;
  /** @type {Position} */
  position = {
    x: 0,
    y: 0
  }
    
  /**
   * Creates a creature
   * @param {string} name - The name of the creature
   * @param {number} life - The life of the creature
   * @param {number} attack - The attack of the creature
   * @param {number} defense - The defense of the creature
   */
  constructor (name, life, attack, defense) {
    this.name = name;
    this.life = life;
    this.attack = attack;
    this.defense = defense;
  }

  /**
   * A shorthand for the x coordinate of the position
   * 
   * @type {number}
   */
  get x() {
    return this.position.x;
  }

  /**
   * A shorthand for the y coordinate of the position
   * 
   * @type {number}
   */
  get y() {
    return this.position.y;
  }

  set x(value) {
    if(value < 0){
      value = 0;
    }
    this.position.x = value;
  }

  set y(value) {
    if(value < 0){
      value = 0;
    }
    this.position.y = value;
  }

  /**
   * The criature's life state. true if alive, false if dead.
   * @type {boolean}
   */
  get isAlive () {
    return this.life > 0;
  }

  /**
   * Inflicts damage to this creature, taking in consideration the defense
   * @param {number} dano The damage being received
   */
  recibirAtaque(dano) {
    if(this.defense >= dano){
      return;
    }
    this.life -= dano - this.defense;
    if(this.life < 0){
      this.life = 0;
    }
  }

  /**
   * Move this creature
   * @param {Object} movement
   * @param {number} [movement.x=0] - The movement in x axis
   * @param {number} [movement.y=0] - The movement in y axis
   */
  move({x = 0, y = 0}) {
    this.x += x;
    this.y += y;
  }
}

