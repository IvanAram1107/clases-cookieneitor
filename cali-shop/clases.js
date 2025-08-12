var Sizes;
(function (Sizes) {
    Sizes["SMALL"] = "S";
    Sizes["MEDIUM"] = "M";
    Sizes["LARGE"] = "L";
    Sizes["EXTRA_LARGE"] = "XL";
})(Sizes || (Sizes = {}));
var Clothing = /** @class */ (function () {
    function Clothing(name, size, price, color) {
        this.name = name;
        this.size = size;
        this.price = price;
        this.color = color;
    }
    Object.defineProperty(Clothing.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value.toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    return Clothing;
}());
var loquesea = new Clothing("Loquesea", Sizes.SMALL, 150, "BLUE");
console.log(loquesea.name);
console.log(loquesea.size);
console.log(loquesea.price);
console.log(loquesea.color);
