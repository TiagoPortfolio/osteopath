var CACHE_NAME = 'osteopath-v3';

// Register service worker
self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open('CACHE_NAME').then(function(cache) {
			cache.addAll([
				'/',
				'/index.html',
				'/assets/css/osteopath.min.css',
				// '/osteopath/js/lazysizes.min.js',
				// '/osteopath/fonts/OpenSans-Regular.ttf',
				// '/osteopath/imgs/grey_background.jpg',
				// '/osteopath/imgs/snaxbanner.png',
				// '/osteopath/imgs/games/ar.png',
				// '/osteopath/imgs/games/battlerite.png',
				// '/osteopath/imgs/games/divinity2.png',
				// '/osteopath/imgs/games/fortnite.png',
				// '/osteopath/imgs/games/gw2.jpg',
				// '/osteopath/imgs/games/hots.png',
				// '/osteopath/imgs/games/lol.png',
				// '/osteopath/imgs/games/overwatch.png',
				// '/osteopath/imgs/games/pubg.png',
				// '/osteopath/imgs/games/r6siege.png',
				// '/osteopath/imgs/games/rl.png',
				// '/osteopath/imgs/games/strife.jpg',
				// '/osteopath/imgs/games/tts.png',
				// '/osteopath/imgs/pros/agreement.svg',
				// '/osteopath/imgs/pros/community.svg',
				// '/osteopath/imgs/pros/games.svg',
				// '/osteopath/imgs/pros/night-events.svg',
				// '/osteopath/imgs/pros/plus-18.svg',
				// '/osteopath/imgs/pros/premium-badge.svg',
				// '/osteopath/imgs/ranks/champion.svg',
				// '/osteopath/imgs/ranks/core.svg',
				// '/osteopath/imgs/ranks/elite.svg',
				// '/osteopath/imgs/ranks/initiate.svg',
				// '/osteopath/imgs/ranks/officer.svg',
				// '/osteopath/imgs/ranks/recruit.svg',
				// '/osteopath/imgs/ranks/up-arrow.svg',
				// '/osteopath/imgs/social/discord-small.svg',
				// '/osteopath/imgs/social/discord.svg',
				// '/osteopath/imgs/social/facebook.png',
				// '/osteopath/imgs/social/twitter.svg',
				// '/osteopath/imgs/social/youtube.png'
			]);

			// CORS
			// let urlsToPrefetch = [
			// 	'https://platform.twitter.com/widgets.js',
			// 	'https://www.google-analytics.com/analytics.js'
			// ];
			// cache.addAll(urlsToPrefetch.map(function(urlToPrefetch) {
			//   return new Request(urlToPrefetch, { mode: 'no-cors' });
			// }));

			return;
		})
	);
});

// Update service worker
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Get assets from cache
self.addEventListener('fetch', function(event) {
	console.log(event.request.url);
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});

