const CACHE_NAME = 'app-creditos-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/main_menu.html',
    '/register.html',
    '/css/styles.css',
    '/js/app.js',
    '/assets/images/Logo.png',
    '/assets/images/usuario.png',
    '/assets/images/Contraseña.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            return response || fetch(event.request);
        })
    );
});
