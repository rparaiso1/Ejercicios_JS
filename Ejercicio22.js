
/*Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.
Recuerda no usar frutas duplicadas.
Finalmente, imprime el array resultante.*/
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];


let veganFoods = "Alimentos veganos:\n";
let nonVeganFoods = "Alimentos no veganos:\n";

for (let i = 0; i < foodSchedule.length; i++) {
  if (foodSchedule[i].isVegan) {
    veganFoods += foodSchedule[i].name + "\n";
  } else {
    nonVeganFoods += foodSchedule[i].name + "\n";
  }
}

console.log(veganFoods);
console.log(nonVeganFoods);


