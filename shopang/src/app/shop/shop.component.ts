import { Component } from '@angular/core';

// Define la interfaz para los productos
interface Producto {
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  // Lista de productos disponibles
  productos: Producto[] = [
    { nombre: 'Producto 1', precio: 10, cantidad: 10 },
    { nombre: 'Producto 2', precio: 15, cantidad: 10 },
    // Agrega más productos aquí
  ];

  // Carrito de compras
  carrito: Producto[] = [];
  total: number = 0;

  // Función para agregar un producto al carrito
  agregarAlCarrito(producto: Producto) {
    const itemIndex = this.carrito.findIndex(item => item.nombre === producto.nombre);
    if (itemIndex !== -1) {
      const item = this.carrito[itemIndex];
      if (item.cantidad > 1) {
        item.cantidad--;
      } else {
        this.carrito.splice(itemIndex, 1);
      }
      this.total -= item.precio;
      producto.cantidad++;
    }
  }

  // Función para eliminar un producto del carrito
  eliminarDelCarrito(producto: Producto) {
    if (producto.cantidad > 0) {
      producto.cantidad--;
      this.total += producto.precio;
      this.carrito.push({ nombre: producto.nombre, precio: producto.precio, cantidad: 1 });
    }
  }
}
