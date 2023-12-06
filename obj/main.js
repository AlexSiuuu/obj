const tabla = document.getElementById("tabla");
const btnA = document.getElementById("btn-a");
const nombre = document.getElementById("nombre");
const img = document.getElementById("img");
const precio = document.getElementById("precio");
const txt = document.getElementById("txt");
const amarillo = document.getElementsByClassName("amarillo");
const rojo = document.getElementsByClassName("rojo");
const datos = document.getElementsByClassName("datos");

console.log(productos);
function modificar(dato) {
    console.log(dato);
}

function eliminar(id) {
    productos.splice(productos[id],1);
    console.log(datos);

}

productos.forEach(producto => {
    const datos = document.createRange().createContextualFragment(/*html*/`
    <article class="datos">
            <h5>${producto.id}</h5>
            <h5>${producto.nombre}</h5>
            <div class="img-tabla">
                <img src="${producto.imagen}" alt="">
            </div>
            <h5>${producto.precio}</h5>
            <div class="acciones">
                <input id="${"numEditar"+producto.id}" onclick="modificar(${producto.id})" class="btn-a amarillo" type="button" value="Modificar">
                <input id="${"numEliminar"+producto.id}" onclick="eliminar(${producto.id})" class="btn-a rojo" type="button" value="Eliminar">
            </div>
    </article>
    `);
    tabla.append(datos);
});

function agregar() {
    const nombreNuevo = nombre.value;
    const imgNuevo = img.value;
    const precioNuevo = precio.value;
    const nuevoProducto = {
        id: productos.length,
        nombre: nombreNuevo,
        imagen: imgNuevo,
        precio: precioNuevo
    }
    productos.push(nuevoProducto);
    const nuevoDato = document.createRange().createContextualFragment(/*html*/`
    <article class="datos">
            <h5>${productos[productos.length -1].id}</h5>
            <h5>${productos[productos.length -1].nombre}</h5>
            <div class="img-tabla">
                <img src="${productos[productos.length -1].imagen}" alt="">
            </div>
            <h5>${productos[productos.length -1].precio}</h5>
            <div class="acciones">
                <input id="${productos[productos.length -1].id}" onclick="modificar(${productos[productos.length -1].id})" class="btn-a amarillo" type="button" value="Modificar">
                <input id="${productos[productos.length -1].id}" onclick="modificar(${productos[productos.length -1].id})" class="btn-a rojo" type="button" value="Eliminar">
            </div>
    </article>
    `);
    tabla.append(nuevoDato);
    txt.innerHTML = "Producto agregado correctamente...";
    nombre.value = "";
    img.value = "";
    precio.value = "";
}
