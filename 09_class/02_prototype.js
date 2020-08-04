function Coupon(price, expiration) {
  this.price = price;
  this.expiration = expiration || '2주';
}

const coupon = new Coupon(5, '2개월');
console.log(coupon.price);

Coupon.prototype.getExpirationMessage = function() {
  return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
};

console.log(coupon.getExpirationMessage());