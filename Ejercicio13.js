const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  console.log(names)
  function nameFinder(nameList, name) {
    // Completar
    const index = nameList.indexOf(name);
    if (index !== -1) {
      return { found: true, position: index };
    } else {
      return { found: false};
    }

    }

    console.log(nameFinder(names, 'Steve'));
    console.log(nameFinder(names, 'Ruben'));