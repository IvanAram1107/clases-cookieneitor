export class Criatura {
  name;
  life;
  attack;
  defense;
  position = {
    x: 0,
    y: 0
  }
    
  constructor (name, life, attack, defense) {
    this.name = name;
    this.life = life;
    this.attack = attack;
    this.defense = defense;
  }

  get x() {
    return this.position.x;
  }

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

  get isAlive () {
    return this.life > 0;
  }

  recibirAtaque(dano) {
    if(this.defense >= dano){
      return;
    }
    this.life -= dano - this.defense;
    if(this.life < 0){
      this.life = 0;
    }
  }

  move({x = 0, y = 0}) {
    this.x += x;
    this.y += y;
  }
}
