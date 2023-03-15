const cacheName= 'ola-pwa';
var filesToCache = [
    './',
    './manifest.webmanifest',
    './index.html',
    './css/style.css',
    './js/main.js'
];

self.addEventListener('install', function(e){
    e.waitUntill(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(filesToCache);
        })
    );
    self.skipWaitting();
});

self.addEventListener('fetch', function(e){
    e.respondWith(
        caches.match(e.request).then(function(response){
            return response || fetch(e.request);
        })
    );
});