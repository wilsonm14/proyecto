const formulario = document.getElementById("formulario")
formulario.addEventListener('submit', function(){
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const email = document.getElementById("e-mail").value
    const celular = document.getElementById("celular").value
    const cedula = document.getElementById("cedula").value
    const ciudad = document.getElementById("ciudad").value
    console.log(nombre)
    console.log(apellido)
    console.log(email)
    console.log(celular)
    console.log(cedula)
    console.log(ciudad)
    alert("sus datos se guardaron exitosamente")
})