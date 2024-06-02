const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {
  const uniqueSet = new Set(list);
  
  return Array.from(uniqueSet);
}const uniqueArray = removeDuplicates(duplicates);
console.log(uniqueArray);
