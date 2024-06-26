// api.js

const API_URL = 'http://localhost:3000/productos';

// Obtener todos los productos
export async function obtenerProductos() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Error al obtener los productos');
        }
        const productos = await response.json();
        return productos;
    } catch (error) {
        console.error('Error al obtener productos:', error);
        throw error;
    }
}

// Crear un nuevo producto
export async function crearProducto(producto) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        });
        if (!response.ok) {
            throw new Error('Error al crear el producto');
        }
        const nuevoProducto = await response.json();
        return nuevoProducto;
    } catch (error) {
        console.error('Error al crear producto:', error);
        throw error;
    }
}

// Eliminar un producto por ID
export async function eliminarProducto(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Error al eliminar el producto');
        }
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        throw error;
    }
}
