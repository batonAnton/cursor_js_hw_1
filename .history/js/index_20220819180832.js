let  laptopPrice=15.678;
let tabletPrice = 123.965;
let phonePrice = 90.2345;
let totalPrice = laptopPrice + tabletPrice + phonePrice;
// вивести буленове значення...
let cashClients = 500;
let change = cashClients - totalPrice;
let middlePrice = totalPrice/3;
let discount = (totalPrice * Math.random()) / 100;

console.log(Math.max(laptopPrice,tabletPrice,phonePrice));
console.log(Math.min(laptopPrice,tabletPrice,phonePrice));
console.log(totalPrice);
console.log(Math.floor(totalPrice));
console.log(Math.round(totalPrice));
console.log(change);
console.log((middlePrice.toFixed(2)));
console.log(discount);
console.log(discount.toFixed(2));