// v2 – luôn kiểm tra bản mới với máy chủ mỗi lần mở trang
// Service worker tối giản: cho phép cài web lên màn hình chính, luôn lấy bản mới từ mạng
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.mode !== "navigate") return;
  e.respondWith(fetch(e.request, { cache:"no-cache" }).catch(() => new Response("<meta charset=utf-8><body style='font-family:sans-serif;padding:24px'><h3>Mất kết nối mạng</h3><p>Kiểm tra wifi/4G rồi mở lại.</p>", { headers: { "Content-Type": "text/html; charset=utf-8" } })));
});
