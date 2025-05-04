"use strick";
const numbers = [1, 2, 3, 4, 5]

numbers.forEach((num) => {
    const square = num * num;
    console.log("Квадрат числа равен: " + square) 
})

const food= ["🍑","🍌","🥚","🥒","🍆"]

food.forEach((item) => {
    console.log("Мама купи" + item+"!")
})

const arr1 = ["a","b","c"]
//блатмттипампмррмаи ираи иира риаарипаррар
for (let value of arr1) {
    console.log(`эл-т ${value}`)
}
//vjhgg
arr1.forEach(function (value,key,arr) {
    console.log(`Ключ: ${key}: значени ${value} в массиве: ${arr}`);
});

const map = new Map([
    ["USD", "Dollars"],
    ["RUB", "Rubbles"],
    ["EUR", "Euro"],
]);
map.forEach(function (value,key,map) {
    confirm.log(value);
    confirm.log(key);
    confirm.log(map);
});

const nums = [1,2,3,4,5,6,7,8,9];

const squares = nums.map(function (num) {
    return num * num;
});

console.log(squares);


const rub = [100, 200, 300, 400];
let usd = [];

rub.forEach(function (value) {
    usd,pash(value / 98).toFixed(2);
});


const usd2 = rub.map((val) => {
    return (val / 72).toFixed(2);
});

console.log(usd2);