export class Criatura {
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
