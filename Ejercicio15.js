const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta'];

function filtrarCamisetas(productos) {
  return productos.filter(producto => producto.toLowerCase().includes('camiseta'));
}

const camisetas = filtrarCamisetas(products);

console.log('Productos que contienen "camiseta":');
camisetas.forEach(producto => console.log(producto));
