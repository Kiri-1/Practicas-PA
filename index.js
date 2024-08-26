//TP2-Ejercicio 1. Creación de un Objeto Básico:
const libro = {
    titulo: 'Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes',
    añoDePublicacion: 1605
}
console.log('titulo: ' + libro.titulo + ', autor: ' + libro.autor + ', año de publicacion: ' + libro.añoDePublicacion);

//TP2-Ejercicio 2.  Anidación de Objetos:
const estudiante = {
    nombre: 'Belen',
    edad: 15,
    direccion: {
        calle: 'calle falsa 123, ',
        ciudad: 'Springfield, ',
        pais: 'Canada'
    }
}
console.log('direccion completa: ' + estudiante.direccion.calle + estudiante.direccion.ciudad + estudiante.direccion.pais);

//TP2-Ejercicio 3. Métodos en Objetos:
const libroDescripcion = {
    titulo: 'Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes',
    añoDePublicacion: 1605,
    descripcion: function () {
        return 'titulo: ' + libroDescripcion.titulo + ', autor: ' + libroDescripcion.autor
    }
}
console.log(libroDescripcion.descripcion());

//TP2-Ejercicio 4. Iteración sobre Propiedades de un Objeto:
const producto = {
    nombre: 'Milanguche',
    precio: 5000,
    disponible: false,
}
for (let propiedad in producto) {
    console.log(propiedad + ': ' + producto[propiedad]);
}

//TP3-Ejercicio 5. Actualización de Propiedades:
const productoModifica = {
    nombre: 'Milanguche',
    precio: 5000,
    disponible: false,
}
productoModifica.precio = 2000;
for (let propiedad in productoModifica) {
    console.log(propiedad + ': ' + productoModifica[propiedad]);
}

//TP3-Ejercicio 6. Comprobación de Propiedades:
