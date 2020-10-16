const cacheName = "cache-v1";
const preCachedResources = [
  "/",
  "index.html",
  "assets/css/style.min.css",
  "assets/download/resume.pdf",
  "assets/img/gphouse.jpg",
  "assets/img/hacktoberfest.jpg",
  "assets/img/donateplasma.jpg",
  "assets/img/z.png",
  "assets/img/svg/bannersvg.svg",
  "assets/img/svg/blob.svg",
  "assets/img/svg/blob1.svg",
  "assets/js/jQuery.nav.js",
  "assets/js/app.js",
];

self.addEventListener("install", (event) => {
  console.log("Service worker install event!");
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(preCachedResources);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    cache.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
