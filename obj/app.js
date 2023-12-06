const main = document.getElementById("main");
const tabla = document.getElementById("tabla");

productos.forEach(producto => {
    const elemento = document.createRange().createContextualFragment(/*html*/`
    <article>
            <div class="img">
                <img src="${producto.imagen}" alt="">
            </div>
            <h2>${producto.nombre}</h2>
            <span>$${producto.precio}</span>
    </article>
    `);
    main.append(elemento);
});


