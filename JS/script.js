//Задание 1
let string1 = "ddd@bbb@ccc";

console.log(string1.replace("@", "@", "!", "!"));

//Задание 2
let string2 = "js";

console.log(string2.toUpperCase());

//Задание 3
let string3 = "JS";
let stringtoLoverCase = string3.toLowerCase();
console.log(stringtoLoverCase);

//Задание 4
let string4 = "I am a hero";
console.log(string4.length);

//Задание 5
let CardNumber = prompt("write here", "14 symbols");
Number1 = CardNumber.slice(10, 14);
document.write("The number of your card:**********" + Number1);
