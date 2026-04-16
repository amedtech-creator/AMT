const CACHE_NAME = 'amt-v5';
const ASSETS = ['/', '/index.html', '/orders-admin-amt.html'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));