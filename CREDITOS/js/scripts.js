document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const inappropriateWords = ["puta", "perra", "pendeja", "idiota", "estupida", "wey"];

    if (inappropriateWords.some(word => username.toLowerCase().includes(word) || password.toLowerCase().includes(word))) {
        alert("Se detectaron palabras inapropiadas. Por favor, ingrese credenciales válidas.");
        return;
    }

    if (username === "Raquel" && password === "123456") {
        alert("¡Inicio de sesión exitoso!");
        // Aquí redirigiríamos al menú principal
    } else {
        alert("Información inválida, por favor inténtalo de nuevo.");
    }
});

document.getElementById('registerLink').addEventListener('click', function() {
    // Lógica para redirigir a la página de registro
    alert("Redirigiendo a la página de registro...");
});
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
        console.log('Service Worker registrado con éxito:', registration);
    })
    .catch(error => {
        console.error('Error al registrar el Service Worker:', error);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    // Botón de iniciar sesión
    document.getElementById('loginButton').addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (!username || !password) {
            alert("Por favor, ingrese sus credenciales.");
            return;
        }

        // Lógica para validar el inicio de sesión (ejemplo simple)
        if (username === "Raquel" && password === "123456") {
            alert("¡Inicio de sesión exitoso!");
            // Aquí se redirigiría al menú principal (cuando lo tengas).
        } else {
            alert("Información inválida, por favor inténtalo de nuevo.");
        }
    });

    // Enlace para registrarse
    document.getElementById('registerLink').addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace se comporte de manera predeterminada
        window.location.href = "register.html"; // Redirige a la pantalla de registro
    });
});
