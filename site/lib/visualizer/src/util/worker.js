var blobCache={};define(["components/superagent/superagent"],function(a){return function(b){return new Promise(function(c,d){return blobCache[b]?c(new Worker(blobCache[b])):void a.get(b).end(function(a,e){if(a)return d(a);if(200!==e.status)return d(new Error("Failed to download worker at "+b));var f=new Blob([e.text],{type:"application/javascript"}),g=URL.createObjectURL(f);blobCache[b]=g,c(new Worker(g))})})}});