"use strict";var precacheConfig=[["/pizza/index.html","14f6f21670a3a0c8bc09ffe66ac46339"],["/pizza/static/js/main.0d4e2d65.js","31fe92ea5e2230702b7e588656b81501"],["/pizza/static/media/anchovy.150d37f7.png","150d37f775bff95cfd4175d6d4daef9a"],["/pizza/static/media/bacon.f010eb61.png","f010eb610842bccaefb1300588928e67"],["/pizza/static/media/basil.259fcae8.png","259fcae8335839aff068a92d59d55a15"],["/pizza/static/media/basilAndFetaR.31b85ebd.png","31b85ebdf0d845705152830b53e8c1ab"],["/pizza/static/media/chili.7a0756fe.png","7a0756fe4f9f831c0ef860507c8daafa"],["/pizza/static/media/chiliR.deff253e.png","deff253efbb3696a070e70c092bed975"],["/pizza/static/media/doubleMeetR.be4ebb75.png","be4ebb753b42ebce1c4e4396d36d5a0a"],["/pizza/static/media/freshR.115b3e70.png","115b3e70f6e42b1065565d8149db5203"],["/pizza/static/media/karbonaraR.f88448ed.png","f88448edabc8f13ad6ddee8c6243709c"],["/pizza/static/media/mozzarella.a7e609dd.png","a7e609dd58e860a8ebed50cd2cc72ff2"],["/pizza/static/media/mushroom.2875d496.png","2875d4960d4096b8be0e89669bb59f59"],["/pizza/static/media/olive.f7f301af.png","f7f301aff94ed1fe7b6d960ffde2a2d9"],["/pizza/static/media/onion.61df8fcf.png","61df8fcf427642ef317d22e8bd13da98"],["/pizza/static/media/ovoshnayaR.b51c445b.png","b51c445bc3414b50f729137078843177"],["/pizza/static/media/pepper.16d2cf8d.png","16d2cf8d4b5af985ff6946734dada21e"],["/pizza/static/media/pepperoni.acd7ae3e.png","acd7ae3e46cbfbe9a3b42ecc144a751d"],["/pizza/static/media/pepperoniR.8d9f5982.png","8d9f59821c485b8704fe2606f644a57f"],["/pizza/static/media/tomato.a2d5162a.png","a2d5162a87011e8817c554b658057347"],["/pizza/static/media/veganR.22459114.png","2245911499455915385d6563d2ae9c62"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/pizza/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});