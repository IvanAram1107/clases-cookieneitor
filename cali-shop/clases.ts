
enum Sizes {
  SMALL = "S",
  MEDIUM = "M",
  LARGE = "L",
  EXTRA_LARGE = "XL"
}

class Clothing {
  name: string;
  size: Sizes;
  price: number;
  _color: string;

  constructor(name: string, size: Sizes, price: number, color: string) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.color = color;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value.toLowerCase();
  }
}

// const loquesea = new Clothing("Loquesea", Sizes.SMALL, 150, "BLUE");
// console.log(loquesea.name);
// console.log(loquesea.size);
// console.log(loquesea.price);
// console.log(loquesea.color);

class Cap extends Clothing {

}