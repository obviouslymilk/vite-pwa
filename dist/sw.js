if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const d=e=>n(e,o),l={module:{uri:o},exports:c,require:d};i[o]=Promise.all(s.map((e=>l[e]||d(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CcMwXNzS.css",revision:null},{url:"assets/index-r75L4Dx0.js",revision:null},{url:"favicon.ico",revision:"c9ff47872d6d13b6f86f8867186c0dee"},{url:"favicon.svg",revision:"16212b53934ba9ae205c6a9960b47ef8"},{url:"img/icons/apple-touch-icon.png",revision:"4142962ef836b37a1e83df9b9cf70d6d"},{url:"img/icons/pwa-192x192.png",revision:"26f44d20ca7964e23ff9278d617e28ff"},{url:"img/icons/pwa-512x512.png",revision:"571ac88e07e184b0d92ee0dee47272a4"},{url:"img/icons/pwa-maskable-192x192.png",revision:"548efc895ba051c5502715d31438ba4e"},{url:"img/icons/pwa-maskable-512x512.png",revision:"d5ab67f9da3d3aa6aa391b39854582b6"},{url:"index.html",revision:"99dee7dc0046e2307573676443fb5021"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));