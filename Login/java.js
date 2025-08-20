function validarFormulario(event) {

    const usuarioEstático = "admin";  
    const contraseñaEstática = "123456"; 

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Validación si los campos están vacíos
    if (username === "" || password === "") {
        event.preventDefault();
        alert("Por favor, complete todos los campos.");
        return false;
    }
    
    // Validación de usuario y contraseña
    if (username === usuarioEstático && password === contraseñaEstática) {
        // Evitar el comportamiento predeterminado del formulario y redirigir
        event.preventDefault();  // Evita el envío del formulario
        window.location.href = "../ANIME/animes.html";  // Redirige a la página de anime
        return true;
    } else {
        event.preventDefault();  // Evita el envío del formulario
        alert("Usuario o contraseña incorrectos.");
        return false;
    }
}
