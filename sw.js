self.addEventListener("install", e =>
{

console.log("Install App");

e.waitUntil(
    caches.open("static").then(cache =>{

        return cache.addAll(["./", "./src/master.css", "./images/logo192.png"]);


    })
)


});

self.addEventListener("fetch", e =>

{
    console.log('Intercepting fetch request for: ${e.request.url}');


})