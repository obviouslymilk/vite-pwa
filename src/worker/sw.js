import { precacheAndRoute } from "workbox-precaching";

self.addEventListener('install', () => {
    console.log('SW: Installed.');
})

precacheAndRoute(self.__WB_MANIFEST)