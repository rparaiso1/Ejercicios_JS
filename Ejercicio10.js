const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  if (numberList.length === 0) return 0;

  const suma = numberList.reduce(
    (acumulador, elemento) => acumulador + elemento,
    0
  );
  const promedio = suma / numberList.length;

  return promedio;
}

const promedio = average(numbers);
console.log(`El promedio de los elementos del array es: ${promedio}`);
