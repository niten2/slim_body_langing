"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/slim_body_langing/index.html","c53ecc524de46a1e58d121b1de28393b"],["/slim_body_langing/static/css/main.653e0146.css","ca6c54d54e87cb15340b8623fcdc8bc6"],["/slim_body_langing/static/js/main.4e7af357.js","db08abd27498b022289d4808490ad24d"],["/slim_body_langing/static/media/1.90443d24.jpg","90443d248f7efe1b9d2f907e434aac98"],["/slim_body_langing/static/media/2.2a634a60.jpg","2a634a6070563cca776f33a12107e133"],["/slim_body_langing/static/media/3.761b2f8d.jpg","761b2f8d093cfc09830e9c641c842c66"],["/slim_body_langing/static/media/4.456d04dc.jpg","456d04dc2cbd80a6725094f3986019df"],["/slim_body_langing/static/media/5.ab89f987.jpg","ab89f987f0c8102e315fcc751246ab02"],["/slim_body_langing/static/media/6.f1b223fd.jpg","f1b223fdfba87bc0f19aa8b0e55d62ed"],["/slim_body_langing/static/media/fontawesome-webfont.1dc35d25.ttf","1dc35d25e61d819a9c357074014867ab"],["/slim_body_langing/static/media/fontawesome-webfont.25a32416.eot","25a32416abee198dd821b0b17a198a8f"],["/slim_body_langing/static/media/fontawesome-webfont.c8ddf1e5.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/slim_body_langing/static/media/fontawesome-webfont.d7c63908.svg","d7c639084f684d66a1bc66855d193ed8"],["/slim_body_langing/static/media/fontawesome-webfont.e6cf7c6e.woff2","e6cf7c6ec7c2d6f670ae9d762604cb0b"],["/slim_body_langing/static/media/kavitaciya.b47e1841.jpg","b47e1841a866ca27087cb9f3ad251f24"],["/slim_body_langing/static/media/massaj.1c4d1657.jpg","1c4d16579bd6a4cec9b904c96811172e"],["/slim_body_langing/static/media/mio.9c6ddf95.jpg","9c6ddf95ad450d2c0d063e4dde314e04"],["/slim_body_langing/static/media/overlay.6cbe7ef4.png","6cbe7ef445c3a60bfcd12fce0252d339"],["/slim_body_langing/static/media/pattern-size1.a4cdaeb4.svg","a4cdaeb4e8d918e895d6b6ae71d960f8"],["/slim_body_langing/static/media/pattern-size2.f9a1dc1f.svg","f9a1dc1fb043d3ed63a1fae221fc3324"],["/slim_body_langing/static/media/pattern-size3.0a08dc00.svg","0a08dc0072df709a6060e05f76929803"],["/slim_body_langing/static/media/press.3f9936bb.jpg","3f9936bb34efe1ea86d29b0d1f33d909"],["/slim_body_langing/static/media/rf-lifting.437298b1.jpg","437298b1847e6f01dca70d8c2de35a89"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var i=new URL(e);return n&&i.pathname.match(n)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),i=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),i]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/slim_body_langing/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});