class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || '2주';
  }
  get priceText() {
    return `$ ${this.price}`;
  }
  get expirationMessage() {
    return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
  }
  set halfPrice(price) {
    this.price = price / 2;
  }
}

const coupon = new Coupon(5);
console.log(coupon.priceText);
console.log(coupon.expirationMessage);
coupon.halfPrice = 20;
console.log(coupon.price);
console.log(coupon.halfPrice);

class Coupon2 {
  constructor(price, expiration) {
    this._price = price;
    this.expiration = expiration || '2주';
  }
  get priceText() {
    return `$ ${this._price}`;
  }
  get price() {
    return this._price;
  }
  set price(price) {
    const newPrice = price.toString().replace(/[^\d]/g, '');
    this._price = parseInt(newPrice, 10);
  }
  get expirationMessage() {
    return `이 쿠폰은 ${this.expiration} 후에 만료 됩니다.`;
  }
}
const coupon = new Coupon2(5);
console.log(coupon.price);
