function validarFormulario() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;

    if(nombre.length<2){
        alert("Nombre demasiado pequeño");
        return;
    }

    if(apellido.length<2){
        alert("Nombre demasiado pequeño");
        return;
    }

    if( !email.includes('@') || !email.includes('.') ){
        alert("El email no es correcto, revísalo");
        return;
    }

    const expresion_regular=/^[0-9]*$/;
    let solo_numeros=expresion_regular.test(telefono);

    if(!expresion_regular || !telefono.length>=9){
        alert("El teléfono no es correcto, revísalo");
        return;
    }
    
    alert("Formulario enviado con éxito!");
    // Aquí puedes agregar código para enviar los datos del formulario, como AJAX.
}
