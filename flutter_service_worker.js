'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4649183af12276279ea283dbc09051ca",
".git/config": "eb34056a1601aa50ebe2dfc2f53cbd13",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7456d7ef47eafdd0312b95292fa927e4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eaa55a3778dc90090a5e64297faa8241",
".git/logs/refs/heads/master": "eaa55a3778dc90090a5e64297faa8241",
".git/logs/refs/remotes/origin-new/master": "f3ac0842dafbb531956bf7176d62806f",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/10/e4da0184ca8dcd8e5443ffd0575d91143878f3": "74869d3edc7b612bceca40954ca78bcf",
".git/objects/18/a16630f132578d442161c6cc0a11fd50fd8a16": "0ab10d2041dd5ba25bf300b1c3996f62",
".git/objects/1c/955220db26d94e1b59b63ffd4c82a55a3246a8": "3b0409539f715676aafb499dcb969ab6",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/28/736b7114ff7e4fcd6cac7317cf64ef57e12fd1": "126d006046747e140c5f9af5850a1426",
".git/objects/29/34e926e9ee4fd8670ab345d664c11f0824722b": "9b71999554d0c15103abef89f051d3b2",
".git/objects/2e/dec8e823e0a938df56ca43d38002b45bf57a5a": "cfbf3621b961b806cf7eca4f987a9c4f",
".git/objects/31/a0589e564d760b40ab1d2c804de496ddb4fc47": "9846bcddc711c591ad575b0a2f91293e",
".git/objects/35/473aeabe2d6b843a96aa7b5d9a4ce192988db2": "e170debc165f371d328399f06de4b8f8",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/50b693d9cf39d916a0204e5d8e5a7c631b4ba2": "cdcbeffb1f760c13a4c2917c389b2310",
".git/objects/61/8450b492091e2c55c576693a3d49b272d58374": "242bd2c454d196fe52af3b75be0388ae",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/68/af496dda2728a338497b51aea0b9cc1b49bfdb": "7af3cdc8240d541428df9951e9111a77",
".git/objects/68/b6afd52caaf8ec7503142d038b050721c3d646": "e6d8d5aae7f8c3631368f538c2515ff3",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/805425a545e7d3c45a77d4b7a253c885a816ab": "0081bc3b976ebf8d395f29361042387e",
".git/objects/75/6e08cdfb7113ec483611eb93bc150bde765b8b": "b14417bcb1d104afe1d825298d60b0e0",
".git/objects/77/946621a92403e5196884579f615772255b9696": "8d4a6e652228b38b084d819b628793e6",
".git/objects/7a/883168b078f7584f5e24848b780392e100da18": "400be162a6ec35416541d0ca4494286c",
".git/objects/7e/33d3554031c76dd0ea57a9c5567db9c702af39": "430d449deff3666e324e579c2737ec90",
".git/objects/7f/f9c7916cb0caa4f10264cb654bfe20e4fc341c": "55476aa052029832218a649c50fdacdb",
".git/objects/80/42b7db92ec155fdbb6d22b688a977e7ea04f58": "5002446a5f7a250c78ed73fed662b742",
".git/objects/86/7ac0bff2a143c87dcd293c98e3774668ac996e": "e5f90092bb3ffd98e6b9eeeb4f3ad13c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/3d86564b875ee73c2fe05d2d442fda17bcdba8": "3d0e148cd202c7087dedef5133ab92ed",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/0d82e5babb0c05579f2fa4a6ccabe8a470c6a7": "620ed10432a0ea24c9715c95604228c6",
".git/objects/92/7cbf0a5a7de77b9467c6ae328faba28d2f082e": "6857b84e0941be13ee98cad4cf937109",
".git/objects/94/8f2975a8fe98f2ae92dfb309099686c476276a": "974884e6db8ec40864796049c274b56d",
".git/objects/96/de9bcb9d5fa93ec5f2cd4a8ab12120aa7c3cea": "c7a0d5d9a680ca5123fc438e80ee2239",
".git/objects/9a/a746a6540912cae26776a05251b969e53d0223": "4c17b7474489b102835125bad1e34ef1",
".git/objects/9c/93e8d45f4bd807d93206fd16b2f83d544ce38a": "f5d830708cb01f66e2f990d2864fd8fe",
".git/objects/a3/1855c98bedab201cf242cf3b8f973179ca970a": "624f736d8d7ac4a8a125e4db4e7e0a44",
".git/objects/ad/d4607d0cfeafcf6c663ae0483975cbfdf2808d": "f9f15a6600ea8574ed281b2c9937873d",
".git/objects/af/911829246f0d0abc229bf4050ad12d4c6ab683": "03fd92dfed4952cc383fcb363c3b142f",
".git/objects/b1/1dc9e7de157633552bfb15c173f6cc3345fd1b": "9a1afa7e1078450c217a48731664ce40",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/683f79cba460d84cc4f1c26adb6f3a9910432f": "693a104fd2609a4040171da6b4ea0d50",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/d8a643350f158151ec3812b54dbd8cf8cefb4b": "b6a816f7bda76bd2c96f4c896f094576",
".git/objects/c8/36079957d839dc634efe62efd36206e3b61c44": "832f56bd58901a0b15ed31693e212d27",
".git/objects/d1/d23485ff3e436d8c7cb53d8c513798a0e196e8": "07da55f4c36f2a6a7d40e3b2a29bc1ce",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/25e3c3a2a627251cf76c70fd325206e5e3e242": "14270fbbec4de59ae0f390c8194b0728",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/035d4e48a8f19919d1bda1c77e5f1abacd7dff": "c67a228d49993d73e7c02fef71a912d3",
".git/objects/f4/fc7aa44ec8749609920185af551e645ceabc74": "f1a9607b8952d975a8d794d16ac9f647",
".git/objects/f9/ab7b88929622a44c00f850cdfe978fffff6228": "12fe2f6981b5123eb509cea8c6a11231",
".git/objects/fa/35505bd01caec15879924005bdd5fc7cac75e3": "e0d1c08cfc054b9c7adf61f5d17e4383",
".git/refs/heads/master": "65a220d8872ce9ce41abcaa93f7cb7ac",
".git/refs/remotes/origin-new/master": "65a220d8872ce9ce41abcaa93f7cb7ac",
"assets/AssetManifest.bin": "70e0e3952302c21b964a4a4cd78972cc",
"assets/AssetManifest.json": "65a2cb9e3e2d00bb4d0f794ed99c56c2",
"assets/assets/font/HelveticaNeue%2520Bold.ttf": "7f281199258d96e249a7fce4101006b9",
"assets/assets/font/HelveticaNeue%2520Thin.ttf": "78c28465643a20597ce65eee037a7675",
"assets/assets/font/SFProDisplay-Black.ttf": "295be9fb41e124fbc4dd1392cccaaf6d",
"assets/assets/font/SFProDisplay-Bold.ttf": "368636f1b6e330a4806185cdf6bb44bc",
"assets/assets/font/SFProDisplay-Light.ttf": "eebf2894b069d9cb93a29dab12aa31f5",
"assets/assets/font/SFProDisplay-Regular.ttf": "6987bcc482500f459516dc0342836ee5",
"assets/assets/icon/backgrounds.png": "54f41d649d6c39c6815e9f815d9c265d",
"assets/assets/icon/design.png": "2f751ec4cc0c1d52eb89ed1138ee65f1",
"assets/assets/icon/filter.png": "49a65619004aa48bf581b086e3f7f74e",
"assets/assets/icon/fonts.png": "110fe35002cf63d4db93eab2d0e21c47",
"assets/assets/icon/logout.png": "5975255690b3aa11629a3629c2801a36",
"assets/assets/icon/main_logo.png": "80b676a87a142114c5608a458943f9e4",
"assets/assets/icon/stickers.png": "82fefbdad6f91dd98f133f536675640c",
"assets/assets/icon/upload.png": "e800a0af1dc7c600ae286ae1a5ee1c26",
"assets/assets/icon/users.png": "3cb38a4d4f3928e38736101f7250fe81",
"assets/assets/lot/no-connection.json": "5e63f1271475d4f71efacd0745fb4644",
"assets/assets/lot/success.json": "0c70723b6496731fd462a65732b9fcc1",
"assets/FontManifest.json": "0b79ddda1682a34931938bcb3eaf4a42",
"assets/fonts/MaterialIcons-Regular.otf": "0dc28020f962ba2f581269e9df47a700",
"assets/NOTICES": "5f71c0cb6813526412898f4d9e957037",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "8270a543085ea4b4e02d0873e45a3a41",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9ce92c4c662405682bd037c10ad62ad5",
"/": "9ce92c4c662405682bd037c10ad62ad5",
"main.dart.js": "9385531e1cf66e81f08b377dd48fe06a",
"manifest.json": "de57c12f74307971aa68e97bceb46c14",
"version.json": "bb3b98f1cc1390c247dbb450b0b1e329"};
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
