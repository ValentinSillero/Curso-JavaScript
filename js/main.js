principal()




function principal(){
let productosOrg = [
    {id: 2, nombre:"zapatilla", categoria:"calzado", stock: 10, precio: 150, rutaImg: "zapatillas.jpg"},
    {id: 5, nombre:"buzo", categoria:"indumentaria", stock: 50, precio: 50, rutaImg: "buzo.jpg"},
    {id: 7, nombre:"gorra", categoria:"accesorio", stock: 30, precio: 30, rutaImg: "gorra.jpg"},
    {id: 9, nombre:"campera", categoria:"indumentaria", stock: 35, precio: 40, rutaImg: "campera.jpg"},
    {id: 12, nombre:"pantalon", categoria:"indumentaria", stock: 50, precio: 20, rutaImg: "pantalonn.jpg"}
,
]



let botonFinalizarCompra = document.getElementById("finalizarCompra")
botonFinalizarCompra.addEventListener("click", finalizarCompra)

let verOcultarCarrito = document.getElementById("verCarrito")
verOcultarCarrito.addEventListener("click", mostrarOcultar)

let inputBuscador = document.getElementById("buscador")
inputBuscador.addEventListener("input", () => filtrar(productosOrg,
    inputBuscador, "nombre"))

recuperarCarrito()
renderizarTarjetas(productosOrg)
}

function finalizarCompra() {
    localStorage.removeItem("carrito")
    renderizarCarrito ()
    lanzarAlerta("Compra finalizada", "Gracias por su compra","success")

}

function mostrarOcultar() {
document.getElementById("productos").classList.toggle("oculto")
document.getElementById("carrito").classList.toggle("oculto")
}

function filtrar (productos, input) {
    let productosFiltrados = productos.filter(producto => producto.nombre.includes(input.value)) 
    renderizarTarjetas(productosFiltrados)
}
function renderizarTarjetas(productos) {
    let contenedor = document.getElementById("productos")
    contenedor.innerHTML = ""
    productos.forEach(producto => {
        let tarjetaProducto = document.createElement("div")
        
        let mensaje = `Quedan ${producto.stock} disponibles`
        tarjetaProducto.classList.add("tarjetaProducto")
        tarjetaProducto.innerHTML= `
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <img src=./images/${producto.rutaImg} />
        <button id=${producto.id}>Agregar al carrito</button>
        <p>${mensaje}</p>
        `


        contenedor.appendChild(tarjetaProducto)
        let botonAgregarAlCarrito = document.getElementById(producto.id)
        botonAgregarAlCarrito.addEventListener("click", (e) => agregarAlCarrito(productos, e))
    } )
}
function agregarAlCarrito(productos, e) {
    let carrito = recuperarCarrito ()
    let productoBuscado = productos.find(producto => producto.id === Number
        (e.target.id))
        let productoEnCarrito = carrito.find(producto => producto.id === productoBuscado.id)
    
    if (productoEnCarrito) {
        productoEnCarrito.unidades++
        productoEnCarrito.subtotal = 
        productoEnCarrito.precioUnitario *
        productoEnCarrito.unidades
    } else {
        carrito.push({
            id: productoBuscado.id,
            nombre: productoBuscado.nombre,
            precioUnitario: productoBuscado.precio,
            subtotal: productoBuscado.precio,
            unidades: 1
        })
    }
    
    
    localStorage.setItem("carrito", JSON.stringify(carrito))

    renderizarCarrito()

    lanzarAlerta("Producto agregado", null, "success")
}


function renderizarCarrito() {
    let contenedor = document.getElementById("carrito")

    contenedor.innerHTML = ""
    let carrito = recuperarCarrito()
    
    carrito.forEach(producto => {
        let tarjetaProducto = document.createElement("div")
        tarjetaProducto.innerHTML = `
        <p>${producto.nombre}</p>
        <p>${producto.precioUnitario}</p>
        <p>${producto.unidades}</p>
        <p>${producto.subtotal}</p>
        `
        contenedor.appendChild(tarjetaProducto)
    })
}
function recuperarCarrito() {
    return localStorage.getItem("carrito") ? JSON.parse (localStorage.getItem("carrito")) : []
}

function lanzarAlerta(title, text, icon) {
    Swal.fire({
        title: title,
        text: text,
        icon,
        timer: 2000
    })

}

fetch('./data.json')
    .then(respuesta => respuesta.json())
    .then(productos => principal(productos))
    .catch(error => console.log(error))