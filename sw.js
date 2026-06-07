```javascript
const CACHE_NAME = 'boosy-sweets-pwa-v3';
const assets = ['./', './index.html', 'https://res.cloudinary.com/dyx4w0dr1/image/upload/v1780839970/1780839705442_1_hwb7pq.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));
});


