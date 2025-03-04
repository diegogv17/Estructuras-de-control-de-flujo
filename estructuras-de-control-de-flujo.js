let OpcionSeleccionar

    do {
        OpcionSeleccionar = prompt (`
        Bievenido a "TUTTO"
        escoja una opción:
        0. Salir
        1. Registro de venta
        2. Conversión de divisas 
        3. Calculo de interes `)

        switch(OpcionSeleccionar){

            case`0`:
            alert ("Cerrando programa...")
            break

            case `1`: 
            const Precio = Number(prompt("ingrese el precio de producto"))
            const CantidadDeProductoVendido = Number (prompt("Ingrese la cantidad de producto vendido"))
            let TotaldeVenta = Precio * CantidadDeProductoVendido
            alert(`El total vendido fue de ${TotaldeVenta} Q`)
            break

            case `2`:
                let OpcionDeDivisas
                  do{  OpcionDeDivisas = prompt(`Elija la divisa a convertir
                    0. Salir
                    1. Dolares a Quetzales
                    2. Euros a Quetzales `)
                    switch(OpcionDeDivisas) {
                       
                        case`0`:
                        alert("volviendo al menú principal...")
                        break

                        case `1`: 
                        let CantidadEnDolares = Number(prompt("ingrese la cantidad en dolares que quiera convertir"))
                        const cantidadEnQuetzales = 7.50
                        let CantidadConvertida = CantidadEnDolares * cantidadEnQuetzales
                        alert(`Sus $ ${CantidadEnDolares} convertidos en quetzales es de Q ${CantidadConvertida}`)
                        break

                        case `2`: 
                        let CantidadEnEuros = Number(prompt("ingrese la cantidad en Euros que quiera convertir"))
                        const EurosAQuetzales = 8.07
                        let CantidadConvertidaAQUetzales = CantidadEnEuros * EurosAQuetzales
                        alert(`Sus € ${CantidadEnEuros} convertidos en quetzales es de Q ${CantidadConvertidaAQUetzales}`)
                        break
                        default: 
                        alert("Opción incorrecta")
                        break
                    }       
                }       while (OpcionDeDivisas !== "0");
                break

                case `3`:
                const STAND = 300
                const CantidadDeStand = Number(prompt("Ingrese la cantidad de stands que solicito"))
                const DiasdeAtraso = Number(prompt("Ingrese la cantida de dias que se atraso"))
                const MoraCapitablizable = 0.02
                const CostoTotaldeStands = STAND * CantidadDeStand
                const Subtotal = CostoTotaldeStands * MoraCapitablizable
                const Total = CostoTotaldeStands + Subtotal
                if (DiasdeAtraso >= 2) {
                    alert(`el total a pagar con interes es de ${Total}`)
                } else {
                    alert(`El total a pagar es de ${CostoTotaldeStands}`)
                }
                break

                default:
                alert("opción incorrecta")
                break
                }
            } while(OpcionSeleccionar !==`0` )
