function getShippingMessage(country, price, deliveryFee) {
  let totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}
console.log(getShippingMessage('Australia', 120, 50)); // returns "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage('Germany', 80, 20)); // returns "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage('Sweden', 100, 20)); //  returns "Shipping to Sweden will cost 120 credits"
