// TODO: Mejorar la verificacion de los prompt si es aceptar on cancel.

//Declaración de variables
var nombreUsuario = "Dedox";
var saldoCuenta = 500;
var limiteExtraccion = 2500;
var pagarAgua = 350;
var pagarTelefono = 425;
var pagarLuz = 210;
var pagarInternet = 570;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var codigoInicio = 1234;

var codigoSeguridadStr = prompt("Ingrese su codigo de seguridad: ");
var codigoSeguridad = parseInt(codigoSeguridadStr);

if(codigoInicio === codigoSeguridad) {
    alert("Bienvenido " + nombreUsuario + " ya puedes comenzar a realizar operaciones.");
    //Ejecución de las funciones que actualizan los valores de las variables en el HTML
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();

    //Funciones que tenes que completar
    function cambiarLimiteDeExtraccion() {
        var cambiarLimiteStr = prompt("Nuevo limite: ");
        var cambiarLimite = parseInt(cambiarLimiteStr);
        limiteExtraccion = cambiarLimite;
        alert("Has cambiado el limite de extracion a: $" + limiteExtraccion);
        actualizarLimiteEnPantalla();
    }

    function extraerDinero() {
        var cantidadDineroExtraerStr = prompt("Ingresar monto a retirar: ");
        var cantidadDineroExtraer = parseInt(cantidadDineroExtraerStr);
        var saldoAnterior = saldoCuenta;
        if(checkValue(cantidadDineroExtraer) != false){
            if(haySaldoDisponible(cantidadDineroExtraer)) {
                if(noExcedeLimit(cantidadDineroExtraer)) {
                    if(validaCantidadBilletes(cantidadDineroExtraer)) {
                        restarDinero(cantidadDineroExtraer);
                        alert("Has retirado: $" + cantidadDineroExtraerStr + " \n Saldo anterior: $" + saldoAnterior + " \n Saldo actual: $" + saldoCuenta);
                        actualizarSaldoEnPantalla();
                    } else {
                        alert("Solo se pueden extraer billetes de 100.");
                    }
                } else {
                    alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extracción.")
                }
            } else {
                alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
            }
        }
    }

    function depositarDinero() {
        var cantidadDineroDepoStr = prompt("Ingresar monto a depositar: ");
        var cantidadDineroDepo = parseInt(cantidadDineroDepoStr);
        var saldoAnterior = saldoCuenta;
        if(checkValue(cantidadDineroDepo) != false){
            sumarDinero(cantidadDineroDepo);
            alert("Has depositado: $" + cantidadDineroDepoStr + " \n Saldo anterior: $" + saldoAnterior + " \n Saldo actual: $" + saldoCuenta);
            actualizarSaldoEnPantalla();
        }
    }

    function pagarServicio() {  
        
        var servicioAPagarStr = prompt("Ingrese el número que corresponde con el servicio que quiere pagar: \n 1 - Agua \n 2 - Luz \n 3 - Internet \n 4 - Teléfono");
        var saldoAnterior = saldoCuenta;
        
        if(checkValue(servicioAPagarStr) != false){
            switch (servicioAPagarStr) {
                case "1":
                    if(saldoCuenta >= pagarAgua) {
                        restarDinero(pagarAgua);
                        alert("Has pagado el servicio del Agua. \n Saldo anterior: $" + saldoAnterior + " \n Dinero descontado: $" + pagarAgua + " \n Saldo actual: $" + saldoCuenta);
                        actualizarSaldoEnPantalla();
                    } else {
                        alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
                    }
                    break;
                case "2":
                    if(saldoCuenta >= pagarTelefono) {
                        restarDinero(pagarTelefono);
                        alert("Has pagado el servicio del Telefono. \n Saldo anterior: $" + saldoAnterior + " \n Dinero descontado: $" + pagarTelefono + " \n Saldo actual: $" + saldoCuenta);
                        actualizarSaldoEnPantalla();
                    } else {
                        alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
                    }
                    break;
                case "3":
                    if(saldoCuenta >= pagarLuz) {
                        restarDinero(pagarLuz);
                        alert("Has pagado el servicio del Luz. \n Saldo anterior: $" + saldoAnterior + " \n Dinero descontado: $" + pagarLuz + " \n Saldo actual: $" + saldoCuenta);
                        actualizarSaldoEnPantalla();
                    } else {
                        alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
                    }
                    break;
                case "4":
                    if(saldoCuenta >= pagarInternet) {
                        restarDinero(pagarInternet);
                        alert("Has pagado el servicio del Internet. \n Saldo anterior: $" + saldoAnterior + " \n Dinero descontado: $" + pagarInternet + " \n Saldo actual: $" + saldoCuenta);
                        actualizarSaldoEnPantalla();
                    } else {
                        alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
                    }
                    break;
                default:
                    alert("El valor ingresado " + servicioAPagarStr + " no se encuentra en las opciones.");
                    break;
            }
        }
    }

    function transferirDinero() {
        var saldoAnterior = saldoCuenta;
        
        var transferirDineroStr = prompt("Ingrese el monto que desa transferir: ");
        var transferirDineroVal = parseInt(transferirDineroStr);

        if(checkValue(transferirDineroVal) != false){
            if(haySaldoDisponible(transferirDineroVal)) {
                var cuentaStr = prompt("Ingrese el numero de cuenta a transferir: ");
                var cuenta = parseInt(cuentaStr);
                switch (cuenta) {
                    case cuentaAmiga1:
                        restarDinero(transferirDineroVal);
                        alert("Se han transferido: $" + transferirDineroVal + " \nCuenta destino: " + cuentaAmiga1);
                        actualizarSaldoEnPantalla();
                        break;
                    case cuentaAmiga2:
                        restarDinero(transferirDineroVal);
                        alert("Se han transferido: $" + transferirDineroVal + " \nCuenta destino: " + cuentaAmiga2);
                        actualizarSaldoEnPantalla();
                        break;
                    default:
                        alert("La cuenta introducida no existe.");
                        break;
                }
            } else {
                alert("La cantidad de dinero ingresada excede el límite disponible.");
            }
        }
    }

    function iniciarSesion() {

    }

    
} else {
    saldoCuenta = 0;
    actualizarSaldoEnPantalla();
    alert("Codigo incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.")
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

function sumarDinero(dineroASumar){
    saldoCuenta += dineroASumar;
}

function restarDinero(dineroARestar) {
    saldoCuenta -= dineroARestar;
}

function haySaldoDisponible(param) {
    if(param <= saldoCuenta) {
        return true;
    } else {
        return false;
    }
}

function noExcedeLimit(param) {
    if(param <= limiteExtraccion) {
        return true;
    } else {
        return false;
    }
}

function validaCantidadBilletes(param) {
    if (param % 100 != 0) {
        return false;
    } else {
        return true;
    }
}

function checkValue(value) {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
  }