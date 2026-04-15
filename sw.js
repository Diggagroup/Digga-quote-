const CACHE_NAME = 'digga-quote-v1';
const ASSETS = ['./', './index.html', './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => Promise.allSettled(ASSETS.map(u => c.add(u).catch(()=>{})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(cached => {
    if (cached) return cached;
    return fetch(e.request).then(r => {
      if (r && r.status===200 && e.request.method==='GET') { const c=r.clone(); caches.open(CACHE_NAME).then(ca=>ca.put(e.request,c)); }
      return r;
    }).catch(() => cached || new Response('Offline',{status:503}));
  }));
});
