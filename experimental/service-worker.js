(()=>{"use strict";var e="precache-v1",s=["/","/style.css","/bundle.js","/manifest.webmanifest","/index.html","/about.html","/style_terms.css","/images/add-gray.svg","/images/add.svg","/images/back-arrow.svg","/images/biomes-icon.svg","/images/blank-file.svg","/images/close_down.svg","/images/close_left.svg","/images/close_right.svg","/images/close_up.svg","/images/edit-pen.svg","/images/expand-arrows.svg","/images/export-file.svg","/images/eye.svg","/images/factor-icon.svg","/images/grid.svg","/images/grid-view.svg","/images/header-black.svg","/images/header.svg","/images/isolines.svg","/images/jaggedness-icon.svg","/images/list-view.svg","/images/mode_A.png","/images/mode_B.png","/images/moon.svg","/images/mountain.svg","/images/offset-icon.svg","/images/open-file-folder.svg","/images/save.svg","/images/save-as.svg","/images/settings-gear.svg","/images/sun.svg","/images/trash-bin.svg","/icons/icon.svg","/icons/icon_192.png","/icons/icon_512.png","/icons/icon.png","/minecraft_overworld.snowcapped.json","/empty.snowcapped.json"];self.addEventListener("install",(function(n){var i=Date.now();n.waitUntil(caches.open(e).then((function(e){var n=s.map((function(s){var n=new URL(s,location.href);return n.search+=(n.search?"&":"?")+"cache-bust="+i,fetch(n.toString()).then((function(n){if(n.status>=400)throw new Error("request for "+s+" failed with status "+n.statusText);return e.put(s,n)})).catch((function(e){console.error("Not caching "+s+" due to "+e)}))}));return Promise.all(n).then((function(){console.log("Pre-fetching complete.")}))})).catch((function(e){console.error("Pre-fetching failed:",e)})))})),self.addEventListener("activate",(function(s){var n=[e];s.waitUntil(caches.keys().then((function(e){return e.filter((function(e){return!n.includes(e)}))})).then((function(e){return Promise.all(e.map((function(e){return caches.delete(e)})))})).then((function(){return self.clients.claim()})))})),self.addEventListener("fetch",(function(e){e.request.url.startsWith(self.location.origin)&&e.respondWith(caches.match(e.request).then((function(s){return s||fetch(e.request)})))}))})();
//# sourceMappingURL=service-worker.js.map