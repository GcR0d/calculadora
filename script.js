function agregar (valor) {
    document.getElementById('pantalla').value += valor

}

function borrar () {
    document.getElementById('pantalla').value = ''
}

function calcular () {
    const datosEnPantalla = document.getElementById('pantalla').value
    const resultado = eval(datosEnPantalla)
    document.getElementById('pantalla').value = resultado
}