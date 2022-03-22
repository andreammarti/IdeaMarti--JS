const bookTitles = [
    { nombre: 'Dracula' },
    { nombre: 'Twilight' },
    { nombre: 'The Vampire' },
];

function cargaLibros(bookTitleList){
    const list = document.getElementById('bookList');
    
    for (let i = 0; i < bookTitleList.length; i++) {
        const book = bookTitleList[i];

        const listElement = document.createElement('li');
        listElement.innerText = book.nombre;

        list.appendChild(listElement);
    }
}

function leerBusqueda() {
    const campoBusqueda = document.getElementById('filter');
    return campoBusqueda.value;
}

function calcularPrecio(precioBase, porcentajeDescuento) {
    const rebaja = precioBase * porcentajeDescuento / 100;
    return precioBase - rebaja;
}

function comportamientoBoton() {
    const precioBase = 100;
    const descuento = 10;
    
    const valorBuscado = leerBusqueda();

    const listaNombres = bookTitles.map(libro => libro.nombre);
    
    if (listaNombres.includes(valorBuscado)){
        const precioFinal = calcularPrecio(precioBase, descuento);

        alert(`${valorBuscado} sale $${precioBase} pero hoy hay descuento del 10%, por lo tanto cuesta $${precioFinal}.`);
    } else {
        alert(`${valorBuscado} no está en stock.`);
    }
}


cargaLibros(bookTitles);

const elementoBoton = document.getElementById('search');
elementoBoton.onclick = comportamientoBoton;

