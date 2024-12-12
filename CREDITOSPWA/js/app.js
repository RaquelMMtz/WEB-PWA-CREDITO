if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../service-worker.js')
    .then(registration => {
        console.log('Service Worker registrado con éxito:', registration);
    })
    .catch(error => {
        console.log('Error en el registro del Service Worker:', error);
    });
}
