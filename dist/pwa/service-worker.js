importScripts(
  "/starbucks/precache-manifest.bcc91a96d208cdd89400c3ec6d3b3c6d.js",
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */

// Service worker installed
self.addEventListener("install", evt => {
  console.log("service worker has been installed");
});

// Active event
self.addEventListener("activate", evt => {
  console.log("service worker has been activated");
});

// fetch event
self.addEventListener("fetch", evt => {
  console.log("fetch event ", evt);
});
