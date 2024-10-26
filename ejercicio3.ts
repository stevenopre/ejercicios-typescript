// Definir la estructura de un producto
type Product = {
    name: string;
    quantity: number;
    price: number;
  };
  
  // Array para almacenar los productos
  let products: Product[] = [];
  
  // Función para agregar un producto
  function addProduct(name: string, quantity: number, price: number): void {
    const newProduct: Product = { name, quantity, price };
    products.push(newProduct);
    console.log(`Producto '${name}' agregado al inventario.`);
  }
  
  // Función para buscar un producto por nombre
  function searchProductByName(name: string): Product | undefined {
    const product = products.find((p) => p.name.toLowerCase() === name.toLowerCase());
    if (product) {
      console.log(`Producto encontrado: ${product.name}, Cantidad: ${product.quantity}, Precio: ${product.price}`);
    } else {
      console.log(`No se encontró ningún producto con el nombre '${name}'.`);
    }
    return product;
  }
  
  // Función para calcular el valor total del inventario
  function calculateTotalInventoryValue(): number {
    if (products.length === 0) {
      console.log("El inventario está vacío.");
      return 0;
    }
  
    const totalValue = products.reduce((sum, product) => sum + product.quantity * product.price, 0);
    console.log(`El valor total del inventario es: ${totalValue.toFixed(2)}`);
    return totalValue;
  }