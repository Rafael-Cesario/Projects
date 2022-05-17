const cacheName = "RecipesCache1";
const data = "offPage.html";

self.addEventListener("install", (e: any) => {
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      cache.add(data);
    })()
  );
});

self.addEventListener("fetch", (e: any) => {
  e.respondWith(
    (async () => {
      try {
        return await fetch(e.request);
      } catch (error) {
        return caches.match(data);
      }
    })()
  );
});
