const CACHE_NAME = "cache-pwa-v1"; 
const CACHE_ITENS = [
"/",
"/index.html", 
"/manifest.json", 
"/script.js", 
"/style.css", 
"/sw.js",
];
//open:função assíncrona
self.addEventListener("install", (event) =>  {
    caches.open(CACHE_NAME).then((cache) => { //abre as aplicações no navegador then: vai retornar o cache que conseguiu abrir 
      cache.addAll(CACHE_ITENS); //addAll recebe uma lista, enquanto add recebe somente um arquivo
    });
}); 
//fetch faz requisições no servidor 
self.addEventListener("fetch", (event) => { //faz a requisição do cache, verificando se há algo dentro dele 
  console.log("Fetching:", event.request);  
  event.respondWith( 
      caches.match(event.request).then((response) => { //verifica se o arquivo está inserido no cache, e então, "responde"
        return response || fetch(event.request); //resposta ou realiza a requisição de novo
      })
    );
});