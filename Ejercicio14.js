const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'sleep'
  ];
  function repeatCounter(list) {
    // Completar

    const countMap = {}
    list.forEach(word => {
      if (countMap[word]) {
        countMap[word]++;
      } else {
        countMap[word] = 1;
      }
    });
  
    return countMap;
  }
  
  console.log(repeatCounter(words));

  