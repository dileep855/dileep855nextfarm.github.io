'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f1d568d6b70c6e1039d9017634059d56",
"assets/AssetManifest.bin.json": "8de707da99a9cfc8e7bf9f1d677f0119",
"assets/AssetManifest.json": "4d194eaa280d38dcea808e511286f17f",
"assets/assets/fonts/BrandonText-Bold.ttf": "b8ad4ac31696de39e55785b8334aaf64",
"assets/assets/fonts/BrandonText-Medium.otf": "d5e252ed23dde9520a0cb00bfbf01a6e",
"assets/assets/fonts/BrandonText-Regular.otf": "cc4e72bde1aa38ceeb75e0c140ffa99c",
"assets/assets/images/approved.png": "95dbad8321726964c71a3c986953ac4c",
"assets/assets/images/aqualogo.png": "c94830f838e209a8c2651103980f2182",
"assets/assets/images/AxisBank.jpg": "fde10cd1586c27fb47c2e3ded8a48856",
"assets/assets/images/AxisBank1.png": "f43cb3f977e70aa67001792ef2df1b93",
"assets/assets/images/backgroud.jpg": "ba8a10919b57f3d620d75e1f392e7ed7",
"assets/assets/images/box.png": "1110ccc86fbf7df8b6312c0cfc774962",
"assets/assets/images/caspian_logo.jpg": "22b03957fcfc59d7486739b5318a29c9",
"assets/assets/images/checkout.png": "eeabfea859de0bf1813e6dd3d1153b3d",
"assets/assets/images/document.png": "3445ea5902f5189dc2a074d1f2fb0f36",
"assets/assets/images/feeding_icon.png": "550e592ed52518286275408726fd0131",
"assets/assets/images/icon_email.png": "67b76e50f40f13e4d9b65435eed3803d",
"assets/assets/images/icon_healthcare.png": "7e6b4c2013c91e4d65127cfeab5c365f",
"assets/assets/images/icon_home.png": "e6a37a2fbb7efd35bfb693a563c9ad64",
"assets/assets/images/icon_other.png": "ea9a1212de4bafea62c762dad283437f",
"assets/assets/images/icon_phone.png": "90acdfcdd82542382054151d365b349c",
"assets/assets/images/icon_rupee.png": "1a9c0c0928a76f9bb624536f48d2c5f1",
"assets/assets/images/icon_seed.png": "2e770a87b100b60a99ba67bde51fe14e",
"assets/assets/images/ic_launcher.png": "67fee09b98cb215acbbb75d27e509dbd",
"assets/assets/images/inTransit.png": "2656efdfd7475904c57c0937a8fa993a",
"assets/assets/images/johndoe.jpg": "b916297b20dd82e8bf3fbc3fa98d8596",
"assets/assets/images/odooIcon.png": "5058c2be99c5be7dc29ef7cbf652c8c9",
"assets/assets/images/openOrder.png": "8c3fe4029b5b4320e49892d90578d3b8",
"assets/assets/images/package-delivered.png": "04a2cb68f93d90f435e53e8b0d3c28b7",
"assets/assets/images/paper.png": "a6782ba5b1b0b7c3323fd642f95d08f5",
"assets/assets/images/prayaan_logo.png": "910ef03d57bf175798ecec907460d8fd",
"assets/assets/images/purchase_approval.png": "f8c13a6bb11b23070794832fbb169bc9",
"assets/assets/images/rejected.png": "cb4d6142bf76cee40f51f8c4d8d32e58",
"assets/assets/images/rupee_approval.png": "7fd5421374295194c786cececcab148e",
"assets/assets/images/sbi.png": "48f64806a4da42070c4d4cca025e9bc9",
"assets/FontManifest.json": "206ea80442af2ce6170c3c32ed3e9121",
"assets/fonts/MaterialIcons-Regular.otf": "311941dd42a106bdfc109ab8c2459e05",
"assets/NOTICES": "786ceddcc80a6a866a37002a2914e695",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/aqualogo.png": "c94830f838e209a8c2651103980f2182",
"icons/caspian_logo.jpg": "22b03957fcfc59d7486739b5318a29c9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/ic_launcher.png": "67fee09b98cb215acbbb75d27e509dbd",
"index.html": "0743f5d0bf01b4e83656c81a955d9c55",
"/": "0743f5d0bf01b4e83656c81a955d9c55",
"main.dart.js": "34f5435527b2502e8a96fd7905579aa2",
"manifest.json": "a040796cbc00a9bcb9c0fbdf161db528",
"version.json": "7b83f2d88e21b43c4605d14d22362584"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
