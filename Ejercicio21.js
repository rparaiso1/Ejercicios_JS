
const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];
  

  let menoresDeEdad = "Usuarios menores de edad:\n";
  let mayoresDeEdad = "Usuarios mayores de edad:\n";
  
  for (let i = 0; i < users.length; i++) {
    if (users[i].years < 18) {
      menoresDeEdad += users[i].name + "\n";
    } else {
      mayoresDeEdad += users[i].name + "\n";
    }
  }
  
  console.log(menoresDeEdad);
  console.log(mayoresDeEdad);
  