/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */

//Nota staticCacheName fyrir cache versioning - breyta nafninu þegar cache-inu er breytt.
const staticCacheName = "site-static-v2";
const dynamicCacheName = "site-dynamic-v1";
const assets = [
  "/",
  "index.html",
  "statics",
  "statics/icons",
  "../pages/Error404.vue"
];

// Cache size limit function
// const limitCacheSize = (name, size) => {
//     caches.open(name).then(cache => {
//         cache.keys().then(keys {
//             if(keys.length > size){
//                 cache.delete(keys[0]).then(limitCacheSize(name, size))
//             }
//         })
//     })
// };

// Service worker installed
self.addEventListener("install", evt => {
  //   console.log("PWA: service worker has been installed");
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});

// Active event
self.addEventListener("activate", evt => {
  //   console.log("PWA: service worker has been activated");
  // eyðir út gamla cache-inu svo það nýja sé bara geymt.
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== staticCacheName && key !== dynamicCacheName)
          .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener("fetch", evt => {
  //   console.log("PWA: fetch event ", evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return (
        cacheRes ||
        fetch(evt.request).then(fetchRes => {
          return caches.open(dynamicCacheName).then(cache => {
            cache.put(evt.request.url, fetchRes.clone());
            //   limitCacheSize(dynamicChaceName, 50)
            return fetchRes;
          });
        })
      );
    })
    //   .catch(() => {
    //     if (evt.request.url.indexOf(".vue") > -1) {
    //       return caches.match("../pages/Error404.vue");
    //     }
    //   })
  );
});

// workbox.core.setCacheNameDetails({ prefix: "site-static-v4" }); // check the prefix of your app cache and set this accordingly

// workbox.core.skipWaiting();

// workbox.core.clientsClaim();

// self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
