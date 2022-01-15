const CACHE_ELEMENTS = [
  "./",
  "./css/estilos.css",
  "./img/fondo.png",
  "./img/favicon.ico",
  "./js/App.js",
  "./js/src/View.js",
  "./js/src/MovementManager.js",
  "./js/src/utils/CurrencyFormat.js",
  "./js/src/utils/HTMLCreator.js",
  "./js/src/models/Expense.js",
  "./js/src/models/Income.js",
  "./js/src/models/Movement.js",
  "./register.js",
  "./sw.js",
  "./manifest.json",
  "./android/android-launchericon-144-144.png",
  "./android/android-launchericon-192-192.png",
  "./android/android-launchericon-48-48.png",
  "./android/android-launchericon-512-512.png",
  "./android/android-launchericon-72-72.png",
  "./android/android-launchericon-96-96.png",
  "./windows11/LargeTile.scale-100.png",
  "./windows11/LargeTile.scale-125.png",
  "./windows11/LargeTile.scale-150.png",
  "./windows11/LargeTile.scale-200.png",
  "./windows11/LargeTile.scale-400.png",
  "./windows11/SmallTile.scale-100.png",
  "./windows11/SmallTile.scale-125.png",
  "./windows11/SmallTile.scale-150.png",
  "./windows11/SmallTile.scale-200.png",
  "./windows11/SmallTile.scale-400.png",
  "./windows11/SplashScreen.scale-100.png",
  "./windows11/SplashScreen.scale-125.png",
  "./windows11/SplashScreen.scale-150.png",
  "./windows11/SplashScreen.scale-200.png",
  "./windows11/SplashScreen.scale-400.png",
  "./windows11/Square150x150Logo.scale-100.png",
  "./windows11/Square150x150Logo.scale-125.png",
  "./windows11/Square150x150Logo.scale-150.png",
  "./windows11/Square150x150Logo.scale-200.png",
  "./windows11/Square150x150Logo.scale-400.png",
  "./windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
  "./windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
  "./windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
  "./windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
  "./windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
  "./windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
  "./windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
  "./windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
  "./windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
  "./windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
  "./windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
  "./windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
  "./windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
  "./windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
  "./windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
  "./windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
  "./windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
  "./windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
  "./windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
  "./windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
  "./windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
  "./windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
  "./windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
  "./windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
  "./windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
  "./windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
  "./windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
  "./windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
  "./windows11/Square44x44Logo.scale-100.png",
  "./windows11/Square44x44Logo.scale-125.png",
  "./windows11/Square44x44Logo.scale-150.png",
  "./windows11/Square44x44Logo.scale-200.png",
  "./windows11/Square44x44Logo.scale-400.png",
  "./windows11/Square44x44Logo.targetsize-16.png",
  "./windows11/Square44x44Logo.targetsize-20.png",
  "./windows11/Square44x44Logo.targetsize-24.png",
  "./windows11/Square44x44Logo.targetsize-256.png",
  "./windows11/Square44x44Logo.targetsize-30.png",
  "./windows11/Square44x44Logo.targetsize-32.png",
  "./windows11/Square44x44Logo.targetsize-36.png",
  "./windows11/Square44x44Logo.targetsize-40.png",
  "./windows11/Square44x44Logo.targetsize-44.png",
  "./windows11/Square44x44Logo.targetsize-48.png",
  "./windows11/Square44x44Logo.targetsize-60.png",
  "./windows11/Square44x44Logo.targetsize-64.png",
  "./windows11/Square44x44Logo.targetsize-72.png",
  "./windows11/Square44x44Logo.targetsize-80.png",
  "./windows11/Square44x44Logo.targetsize-96.png",
  "./windows11/StoreLogo.scale-100.png",
  "./windows11/StoreLogo.scale-125.png",
  "./windows11/StoreLogo.scale-150.png",
  "./windows11/StoreLogo.scale-200.png",
  "./windows11/StoreLogo.scale-400.png",
  "./windows11/Wide310x150Logo.scale-100.png",
  "./windows11/Wide310x150Logo.scale-125.png",
  "./windows11/Wide310x150Logo.scale-150.png",
  "./windows11/Wide310x150Logo.scale-200.png",
  "./windows11/Wide310x150Logo.scale-400.png",
  "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js",
];

const CACHE_NAME = "V1_APP";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache
        .addAll(CACHE_ELEMENTS)
        .then(() => {
          self.skipWaiting();
        })
        .catch(console.error);
    })
  );
});

self.addEventListener("activate", (e) => {
  const cacheWhiteList = [CACHE_NAME];

  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((name) => {
            return cacheWhiteList.indexOf(name) === -1 && caches.delete(name);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
