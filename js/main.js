let usuario = "valen"
let contraseña = "1234"
let usuarioIngresado = prompt("Ingrese su usuario")
if(usuario === usuarioIngresado) {
    let contraIngresada = prompt("Ingrese su contaseña")

    if (usuario === usuarioIngresado && contraseña === contraIngresada) {
        console.log(`Bienvenido ${usuarioIngresado}`)


        let proteina = +(7000)
        let creatina = +(10000)
        let barrasdeproteina = +(3000)
        let aminoacios = +(2000)
        let preentreno = +(5000)

        let costopackgym =(proteina+creatina+aminoacios)
        let costopackpre =(preentreno+barrasdeproteina)
        let productos = prompt(`Que producto deseas comprar \n
                    -1 Pack gym
                    -2 Pack pre`)

        let precioProductoElegido = +("")
        let precioUnidad = +("")

        switch (productos) {
            case "1":
                precioProductoElegido = costopackgym
                precioUnidad = (+(costopackgym * 2)).toFixed(2)
                console.log(`El precio por unidad es ${precioUnidad}`)
                break
            case "2":
                precioProductoElegido = costopackpre
                precioUnidad = (+(costopackgym * 2)).toFixed(2)
                console.log(`El precio por unidad es ${precioUnidad}`)
                break
            default:
                console.log(`Ingrese una opcion correcta`)
                break
        }

        let  cantidad = +(prompt (`Que cantidad queres?`))


        function costodeventa(x){
            if (cantidad < 10) {
                costofinal = x * cantidad * 2.8
            } else {
                costofinal = x * cantidad * 2
            }

            return costofinal
        }
        let costodeventas = (costodeventa(precioProductoElegido)).toFixed(2)

        console.log(`El costo total es ${costodeventas}`)


    }else {
        console.log(`La contraseña ${contraIngresada} es incorrecta`)
    }






} else {
    console.log(`Usuario no registrado`)
}

    