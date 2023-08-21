let productos = [
    {id: 2, nombre:"zapatilla", categoria:"calzado", stock: 10, precio: 150},
    {id: 5, nombre:"buzo", categoria:"indumentaria", stock: 50, precio: 50},
    {id: 7, nombre:"gorra", categoria:"indumentaria", stock: 30, precio: 30},
    {id: 9, nombre:"campera", categoria:"indumentaria", stock: 35, precio: 40},
    {id: 12, nombre:"pantalon", categoria:"indumentaria", stock: 50, precio: 20}
,
]

let mensaje = "1 - Productos\n2 - Informacion de un producto\n3 - Categorias\n4 - Salida"

let opcion 
do {

    opcion = Number(prompt ("Bienvenidos a Train\n"+mensaje))
if (opcion ===1) {
alert(listar(productos))

} else if (opcion === 2){
    let id = Number(prompt("Ingrese id de producto\n" +  listar(productos)))
    infoDeProducto(id)
}else if (opcion === 3){
    let categoria = prompt("Ingrese categoria calzado o indumentaria").toLocaleLowerCase()
    let prodctosFiltrados = productos.filter(producto => producto.categoria === categoria)
    alert(listar(prodctosFiltrados))
}

} while (opcion !=0)

function listar(productos){
    let salida = productos.map(producto => `Nombre: ${producto.nombre} - ID: ${producto.id}`).join("\n")
    alert(salida)
}

function infoDeProducto(id) {
    let productoBuscado = productos.find(producto => producto.id === id)
    alert(`nombre: ${productoBuscado.nombre} - categoria: ${productoBuscado.categoria} - precio: ${productoBuscado.precio}`)
}
