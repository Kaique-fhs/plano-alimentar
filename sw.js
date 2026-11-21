// Endereço antigo: este service worker só se desliga e manda as janelas para o endereço novo.
// Não apaga caches nem dados: eles são do mesmo site e o app novo usa os mesmos dados.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) {
  e.waitUntil(self.registration.unregister().then(function () {
    return self.clients.matchAll({ type: "window" });
  }).then(function (janelas) {
    janelas.forEach(function (j) { j.navigate("/saude-familiar/"); });
  }));
});
