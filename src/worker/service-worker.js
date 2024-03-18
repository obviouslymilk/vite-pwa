import { precacheAndRoute } from "workbox-precaching";

self.addEventListener("install", e => {
    console.log("Service Worker: Installed")
})

precacheAndRoute(self.__WB_MANIFEST)