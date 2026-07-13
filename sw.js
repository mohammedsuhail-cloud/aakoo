// =============================================
// AAKOOO EATZZ - Service Worker
// =============================================

const CACHE_NAME = "aakooo-eatzz-v1";
const OFFLINE_URL = "./index.html";

// Core assets to pre-cache on install
const PRECACHE_ASSETS = [
  "./index.html",
  "./index.css",
  "./app.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  // Menu images
  "./assets/thattu_vadai_set.png",
  "./assets/mutta_thattu_vadai.png",
  "./assets/mango_thattu_vadai.png",
  "./assets/norukkal_set.png",
  "./assets/mutta_norukkal.png",
  "./assets/chicken_norukkal.png",
  "./assets/pani_puri_set.png",
  "./assets/pani_puri_norukkal.png",
  "./assets/chicken_puri_norukkal.png",
  "./assets/mutta_masala.png",
  "./assets/mutta_burger.png",
  "./assets/spicy_lays.png",
  "./assets/kara-poori.png",
  // Hero images
  "./assets/crunch-burn-repeat.png",
  "./assets/eat-like-a-saiyan.png"
];

// =============================================
// INSTALL: Pre-cache core assets
// =============================================
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("[SW] Pre-caching core assets...");
        // Add one by one so a single failure doesn't abort the whole install
        return Promise.allSettled(
          PRECACHE_ASSETS.map((url) =>
            cache.add(url).catch((err) => {
              console.warn("[SW] Failed to cache:", url, err.message);
            })
          )
        );
      })
      .then(() => {
        console.log("[SW] Install complete.");
        return self.skipWaiting(); // Activate immediately
      })
  );
});

// =============================================
// ACTIVATE: Clean up old caches
// =============================================
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((oldCache) => {
            console.log("[SW] Deleting old cache:", oldCache);
            return caches.delete(oldCache);
          })
      );
    }).then(() => {
      console.log("[SW] Activate complete. Taking control of all clients.");
      return self.clients.claim();
    })
  );
});

// =============================================
// FETCH: Stale-While-Revalidate strategy
//   - Serve from cache first (fast)
//   - Then update the cache in the background
//   - For navigation requests, fallback to cached index.html
// =============================================
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Ignore non-GET requests and browser extensions
  if (request.method !== "GET" || !request.url.startsWith("http")) return;

  // Ignore external CDN requests (fonts, fontawesome) — let them use their own cache
  const url = new URL(request.url);
  const isExternal =
    url.hostname.includes("googleapis.com") ||
    url.hostname.includes("gstatic.com") ||
    url.hostname.includes("cdnjs.cloudflare.com");

  if (isExternal) {
    // Network-first for externals with fallback
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Stale-while-revalidate for local assets
  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cachedResponse = await cache.match(request);

      const networkFetch = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        })
        .catch(() => {
          // If network fails and we have no cache, return offline page
          if (request.mode === "navigate") {
            return cache.match(OFFLINE_URL);
          }
          return new Response("", { status: 408 });
        });

      // Return cached immediately if available; also kick off background update
      return cachedResponse || networkFetch;
    })
  );
});
