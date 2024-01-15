class ProductoAlimenticio {
    codigo: number;
    nombre: string;
    precio: number;

    constructor(codigo: number, nombre: string, precio: number) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimeDatos(): void {
        console.log(`Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`);
    }
}

const producto1 = new ProductoAlimenticio(1, 'Manzanas', 2.5);
const producto2 = new ProductoAlimenticio(2, 'Leche', 1.8);
const producto3 = new ProductoAlimenticio(3, 'Pan', 0.9);

const arrayProductos: ProductoAlimenticio[] = [producto1, producto2, producto3];

for (const producto of arrayProductos) {
    producto.imprimeDatos();
}
