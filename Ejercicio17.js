const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

console.log(alien)

for (const key in alien) {
    if (Object.hasOwnProperty.call(alien, key)) {
        const value = alien[key];
        console.log(`${key}: ${value}`)
        
    }
}

