var urlsToCache = [
  '/',
  './index.html',
  './assets/css/styles.css',
  'assets/css/font-awesome.min.css'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('udacity-baroda').then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});
