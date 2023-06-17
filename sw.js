const version = 'v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(version).then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/manifest.json',
        '/lightbox.js',
        '/sw.js',
        'icons/icon-192x192.png',
        'icons/icon-256x256.png',
        'icons/icon-384x384.png',
        'icons/icon-512x512.jpg',
        'icons/icon.png',
        '/server.js',
        'imagex/0edceb67-3f72-4b1c-a14a-11aa413e2b8e.webp',
        'imagex/03_07_2022_mostra_nft_let_s_get_digital_apertura.jpg',
        'imagex/ab67616d0000b273588edb015dc804f998e14cf5.jfif',
        'imagex/af0487b6-817a-4d80-9409-62bfe604e1c4.webp',
        'imagex/AFTERLIFE-TOMORROWLAND-2023-FINAL.jpg',
        'imagex/anyma.jpg',
        'imagex/anyma1.jpg',
        'imagex/argy2.jpg',
        'imagex/Argy3.jpg',
        'imagex/first.png',
        'imagex/image.png',
        'imagex/Innellea.jpg',
        'imagex/innellea2.jpg',
        'imagex/innellea2.jpg',
        'imagex/kasst.jpg',
        'imagex/kasst2.jpg',
        'imagex/mathame.jpg',
        'imagex/Mathame2.jpg',
        'imagex/mind-against.jpg',
        'imagex/mind2.jpg',
        'imagex/R.jpg',
        'imagex/R1.jpg',
        'imagex/R2.jpg',
        'imagex/R3.jpg',
        'imagex/tale of us2.jpg',
        'imagex/taleofus.jpeg',
       
        

        '/notfound.txt'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();

        caches.open(version).then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/notfound.txt');
      });
    }
  }));
});