class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || '2주';
  }
  getPriceText() {
    return `$ ${this.price}`;
  }
  getExpirationMessage() {
    return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
  }
  isRewardsEligible(user) {
    return user.rewardsEligible && user.active;
  }
  getRewards(user) {
    if (this.isRewardsEligible(user)) {
      this.price = this.price * 0.9;
    }
  }
}
const coupon = new Coupon(5);

console.log(coupon.price);
console.log(coupon['expiration']);
console.log(coupon.getPriceText());
console.log(coupon.getExpirationMessage());

class FlashCoupon extends Coupon {
  constructor(price, expiration) {
    super(price);
    this.expiration = expiration || '2시간';
  }
  getExpirationMessage() {
    return `이 쿠폰은 깜짝 쿠폰이며 ${this.expiration} 후에 만료 됩니다.`;
  }
  isRewardsEligible(user) {
    return super.isRewardsEligible(user) && this.price > 20;
  }
  getRewards(user) {
    if (this.isRewardsEligible(user)) {
      this.price = this.price * 0.8;
    }
  }
}

const flash = new FlashCoupon(10);
console.log(flash.price);
console.log(flash.getPriceText());
console.log(flash.getExpirationMessage());