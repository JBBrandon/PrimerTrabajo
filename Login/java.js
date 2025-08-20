// Función de validación del formulario
function validarFormulario(event) {
    // Variables estáticas para usuario y contraseña predefinidos
    const usuarioEstático = "admin";  // Usuario predefinido
    const contraseñaEstática = "123456";  // Contraseña predefinida

    // Obtener los valores de los campos del formulario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Validar si los campos están vacíos
    if (username === "" || password === "") {
        // Prevenir el envío del formulario
        event.preventDefault();
        
        // Mostrar un mensaje de error si los campos están vacíos
        alert("Por favor, complete todos los campos.");
        return false;
    }
    
    // Validar si las credenciales coinciden con las variables estáticas
    if (username === usuarioEstático && password === contraseñaEstática) {
        // Si las credenciales son correctas, permitir el envío del formulario
        alert("¡Bienvenido!");
        return true;
    } else {
        // Si las credenciales no coinciden, mostrar un mensaje de error
        event.preventDefault();
        alert("Usuario o contraseña incorrectos.");
        return false;
    }
}

