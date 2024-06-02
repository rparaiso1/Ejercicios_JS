const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M",
];
function findLongestWord(stringList) {

  if (stringList.length === 0) return "";
  let palabraMasLarga = stringList[0]

  for (let i = 1; i < stringList.length; i++) {
    if (stringList[i].length > palabraMasLarga.length) {
      palabraMasLarga = stringList[i]
    }
  }

  return palabraMasLarga;
}

const longestWord = findLongestWord(avengers);
console.log(`La palabra más larga es: ${longestWord}`);
