//Exercice 1
var x = 5;
let y = 10;
const z = 15;

x = 20; // OK
y = 25; // OK
// z = 30; Provoque une erreur 

console.log(x, y, z);

//Exercice 2
function testScope() { 
  var a = "var visible partout"; 
  let b = "let visible ici seulement"; 
  console.log(a); 
  console.log(b); 
} 
testScope();

//Exerice 3
function sayHello(personName) {
  return `Bonjour ${personName}`;
}
const sayHelloArrow = (personName) => `Bonjour ${personName}`;
console.log(sayHello("Hiba"));       
console.log(sayHelloArrow("Hiba")); 

//Exercice 4
const person = { 
  name: "Sara", 
  sayHello: function () { 
    console.log("Bonjour " + this.name); 
  }, 
  sayHelloArrow: function () {  //remplacée par une fonction classique
    console.log("Bonjour " + this.name); 
  }, 
}; 

person.sayHello();       // Bonjour Sara
person.sayHelloArrow();  // Bonjour Sara


//Import / Export de modules (ES6) 
// index.js 
import message, { PI, carre } from "./mathUtils.js"; 
message(); //  Module mathUtils chargé ! 
console.log("PI =", PI); 
console.log("Carré de 5 =", carre(5)); 



//Exercice 5
const fruits = ["pomme", "banane", "orange"]; 
fruits.push("kiwi"); 
fruits.pop(); 
console.log(fruits); 

//Exercice 6
const nums = [1, 2, 3, 4, 5]; 
// Multiplie chaque nombre par 2
console.log(nums.map(n => n * 2)); 
// Garde seulement les nombres pairs 
console.log(nums.filter(n => n % 2 === 0)); 
// Calcule la somme totale 
console.log(nums.reduce((sum, n) => sum + n, 0)); 


//Exercice 7
console.log(nums.find(n => n > 3)); // 4 → trouve le premier > 3
console.log(nums.some(n => n < 0)); // false → au moins un élément < 0 ?
console.log(nums.every(n => n > 0)); // true → tous les éléments > 0 ?

//Exercice 8
const user = { id: 1, name: "Ali", city: "Rabat" };

// Déstructuration simple
const { name, city } = user;
console.log(`${name} habite à ${city}`); 
// Ali habite à Rabat

// Renommage + rest operator
const { name: fullName, ...rest } = user;
console.log(fullName); // Ali
console.log(rest); // { id: 1, city: 'Rabat' }

//Exercice 9
const p = new Promise((resolve) => { 
 setTimeout(() => resolve("Opération terminée !"), 2000); 
}); 

p.then(result => console.log(result)); 
// Après 2s : Opération terminée !

//Exercice 10 – async/await 
async function getUsers() { 
  try { 
    const res = await fetch("https://jsonplaceholder.typicode.com/users"); 
    const data = await res.json(); 
    console.log(data); 
  } catch (e) { 
    console.error("Erreur :", e.message); 
  } 
}
getUsers();

//Exercice 11 – Template literals 
const userName = "Nadia"; 
const hour = new Date().getHours(); 
console.log(`Bonjour ${userName}, il est ${hour}h`);

 //Exercice 12 – Spread / Rest
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log("Tableau après spread :", arr2);
// Résultat : [1, 2, 3, 4]
function sum(...numbers) {
  // 'numbers' est un tableau contenant tous les arguments
  return numbers.reduce((a, b) => a + b, 0);
}
console.log("Somme avec rest :", sum(1, 2, 3, 4));

//Exercice 13 – Optional chaining et Nullish coalescing 

const settings = { theme: null };
console.log(settings.theme ?? "light"); 
const user2 = { profile: { email: "x@y.com" } };
console.log(user2.profile?.email); 
console.log(user2.address?.city); 



//Gestion des produits 
const produits = [
  { nom: "Lait", prix: 10, expireLe: "2025-12-01" },
  { nom: "Yaourt", prix: 5, expireLe: "2024-01-01" },
  { nom: "Jus", prix: 8, expireLe: "2026-02-15" },
];
const aujourdHui = new Date();
const valides = produits.filter(p => new Date(p.expireLe) > aujourdHui);
const total = valides.reduce((s, p) => s + p.prix, 0);
console.log("Produits valides :", valides);
console.log("Total :", total, "DH");
