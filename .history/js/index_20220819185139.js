let  laptopPrice=15.678;
let tabletPrice = 123.965;
let phonePrice = 90.2345;
let totalPrice = laptopPrice + tabletPrice + phonePrice;
// вивести буленове значення...
let cashClients = 500;
let change = cashClients - totalPrice;
let middlePrice = totalPrice/3;
let discount = totalPrice - (totalPrice *Math.random()) / 100;
let INCOME = (totalPrice / 2) - discount;  
let parity = totalPrice => totalPrice % 2 === 0;


console.log("Максимальна ціна товару:" + " " + Math.max(laptopPrice,tabletPrice,phonePrice));
console.log("Мінімальна ціна товару:" + " " + Math.min(laptopPrice,tabletPrice,phonePrice));
console.log("Загальна ціна товару:" + " " + totalPrice);
console.log("Загальна ціна товару з округлення меншим:" + " " + Math.floor(totalPrice));
console.log("Загальна ціна товару з округлення більшим:" + " " + Math.round(totalPrice));
console.log(parity);
console.log("Сума решти до оплати:" + " " + change);
console.log("Середнє значення цін, округлене до другого знаку після коми:" + " " + middlePrice.toFixed(2));
console.log("Ціна зі знижкою:" + " " + discount);
console.log("Ціна округлена  зі знижкою :" + " " + discount.toFixed(2));
console.log("Чистий прибуток:" + " " + INCOME);