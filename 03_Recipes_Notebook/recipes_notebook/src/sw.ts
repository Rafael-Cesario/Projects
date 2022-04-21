const staticCache = "cache_v1";
const staticCacheItems = ["/", "/index.js", "/index.html"];

const limitCacheSize = async (name: string, size: number) => {
	const cache = await caches.open(name);
	const keys = await cache.keys();

	if (keys.length > size) {
		await cache.delete(keys[0]);
		limitCacheSize(name, size);
	}
};

self.addEventListener("install", (event: any) => {
	const preCache = async () => {
		const cache = await caches.open(staticCache);
		return cache.addAll(staticCacheItems);
	};
	event.waitUntil(preCache());
});

self.addEventListener("fetch", (event: any) => {
	// Stale while revalidate
	const response = async () => {
		const matchs = await caches.match(event.request.url);
		const netWork = await fetch(event.request);

		const cache = await caches.open(staticCache);
		cache.put(event.request, netWork.clone());
		limitCacheSize(staticCache, 3);

		return matchs || netWork;
	};

	event.respondWith(response());
});

self.addEventListener("activate", (event: any) => {});
