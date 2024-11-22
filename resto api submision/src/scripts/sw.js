import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import CONFIG from './globals/config';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST || []);

const catalogueApi = new Route(
    ({ url }) => url.href.startsWith(CONFIG.BASE_URL),
    new StaleWhileRevalidate({
        cacheName: 'catalogue-api',
    }),
);

registerRoute(catalogueApi);

self.addEventListener('install', () => {
    console.log('Service Worker: Installed');
    self.skipWaiting();
});