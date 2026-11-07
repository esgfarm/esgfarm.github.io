// Sơ đồ ShrimpVet ESG Farm – dùng chung cho trang khách (so-do/) và trang nhập liệu (nhap-lieu/).
// Toạ độ vẽ theo sơ đồ mặt bằng của trang trại (sơ đồ minh hoạ, không theo tỷ lệ). viewBox 0 0 980 1430.

// k: loại công trình  ·  x,y,w,h: khung  ·  a: diện tích m²
const R = (id, k, x, y, w, h, a) => ({ id, k, x, y, w, h, a });
export const FARM = [
  R("AL", "al", 208, 297, 185, 127, 9300),
  R("XL", "xl", 417, 295, 153, 69, 2700),
  R("LT1", "lt", 427, 378, 133, 67, 2200),
  R("LT2", "lt", 402, 456, 190, 66, 3600),
  R("LT3", "lt", 391, 537, 214, 72, 3700),
  R("SS1", "ss", 218, 629, 273, 54, 3900),
  R("SS2", "ss", 499, 629, 302, 54, 5850),
  // Ao dèo 400 m² (khu F bên trái, khu E bên phải đường nội bộ)
  R("F9", "deo", 309, 691, 72, 35, 400), R("F8", "deo", 389, 691, 68, 35, 400),
  R("F7", "deo", 309, 737, 72, 35, 400), R("F6", "deo", 389, 737, 68, 35, 400),
  R("F5", "deo", 309, 783, 72, 35, 400), R("F4", "deo", 389, 783, 68, 35, 400),
  R("F3", "deo", 225, 829, 75, 35, 400), R("F2", "deo", 309, 829, 72, 35, 400), R("F1", "deo", 389, 829, 68, 35, 400),
  R("E9", "deo", 527, 691, 77, 35, 400), R("E8", "deo", 611, 691, 73, 35, 400),
  R("E7", "deo", 527, 737, 77, 35, 400), R("E6", "deo", 611, 737, 73, 35, 400),
  R("E5", "deo", 527, 783, 77, 35, 400), R("E4", "deo", 611, 783, 73, 35, 400),
  R("E3", "deo", 527, 829, 77, 35, 400), R("E2", "deo", 611, 829, 73, 35, 400), R("E1", "deo", 691, 829, 71, 35, 400),
  // Ao nuôi C, D
  R("D6", "ao", 223, 874, 116, 54, 1520), R("D5", "ao", 349, 874, 109, 54, 1600),
  R("D4", "ao", 223, 937, 116, 54, 1600), R("D3", "ao", 349, 937, 109, 54, 1600),
  R("D2", "ao", 223, 1000, 116, 54, 1600), R("D1", "ao", 349, 1000, 109, 54, 1600),
  R("C6", "ao", 524, 874, 112, 54, 1600), R("C5", "ao", 646, 874, 113, 54, 1600),
  R("C4", "ao", 524, 937, 112, 54, 1600), R("C3", "ao", 646, 937, 113, 54, 1600),
  R("C2", "ao", 524, 1000, 112, 54, 1600), R("C1", "ao", 646, 1000, 113, 54, 1600),
  // Ao nuôi A, B
  R("B6", "ao", 163, 1065, 146, 64, 2025), R("B5", "ao", 315, 1065, 146, 64, 2025),
  R("B4", "ao", 163, 1134, 146, 63, 2025), R("B3", "ao", 315, 1134, 146, 63, 2025),
  R("B2", "ao", 163, 1203, 146, 64, 2025), R("B1", "ao", 315, 1203, 146, 64, 2025),
  R("A6", "ao", 524, 1065, 138, 64, 2025), R("A5", "ao", 667, 1065, 139, 64, 2025),
  R("A4", "ao", 524, 1134, 138, 63, 2025), R("A3", "ao", 667, 1134, 139, 63, 2025),
  R("A2", "ao", 524, 1203, 138, 64, 2025), R("A1", "ao", 667, 1203, 139, 64, 2025),
  // Ao chứa thải
  R("AT6", "at", 112, 1280, 139, 60, 4300), R("AT5", "at", 257, 1280, 125, 60, 3800), R("AT4", "at", 387, 1280, 87, 60, 1300),
  R("AT3", "at", 520, 1280, 113, 60, 1800), R("AT2", "at", 647, 1280, 111, 60, 1500), R("AT1", "at", 765, 1280, 87, 60, 1270)
];
// Công trình khác
const BUILD = [
  { t:["Văn phòng"], x:294, y:1348, w:72, h:28 }, { t:["Khu nhà ở"], x:410, y:1343, w:66, h:30 },
  { t:["Kho thức ăn", "vật tư"], x:518, y:1343, w:91, h:40 }, { t:["Khu nuôi", "vi sinh"], x:768, y:1338, w:79, h:45 }
];
const WELLS = [["G1", 748, 1347], ["G2", 387, 1361], ["G3", 712, 800], ["G4", 282, 710], ["G5", 607, 492], ["G6", 128, 372]];
const SOIL = [["Đ1", 785, 965], ["Đ2", 613, 525], ["Đ3", 185, 965], ["Đ4", 643, 1369]];
const TOWERS = [[136, 400], [611, 457], [476, 1267]];
export const KIND = {
  ao:  { n:"Ao nuôi",       fill:"#cfe8f7", stroke:"#5aa9d6" },
  deo: { n:"Ao dèo 400 m²", fill:"#dff0fa", stroke:"#7fbfe2" },
  ss:  { n:"Ao sẵn sàng",   fill:"#7cb342", stroke:"#5a8f2a", ink:"#fff" },
  xl:  { n:"Ao xử lý",      fill:"#aab4e4", stroke:"#7f8bc9" },
  al:  { n:"Ao lắng thô",   fill:"#4a70c4", stroke:"#2f53a3", ink:"#fff" },
  lt:  { n:"Ao lắng tinh",  fill:"#6a3aa8", stroke:"#4f2785", ink:"#fff" },
  at:  { n:"Ao chứa thải",  fill:"#efe2c4", stroke:"#c9b07a" }
};
const fmtA = a => new Intl.NumberFormat("vi-VN").format(a) + " m²";
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));

/**
 * opt.pond(id) -> { fill?, stroke?, sub?, href?, data?, title? } cho từng ao nuôi (A–D) – tuỳ trang
 * opt.title: tiêu đề trên sơ đồ
 */
export function renderFarmMap(opt = {}){
  const P = opt.pond || (() => ({}));
  const shape = r => {
    const K = KIND[r.k], o = r.k === "ao" ? (P(r.id) || {}) : {};
    const fill = o.fill || K.fill, stroke = o.stroke || K.stroke, ink = o.ink || K.ink || "#14223a";
    const small = r.k === "deo";
    const cx = r.x + r.w / 2, cy = r.y + r.h / 2;
    const lines = small ? [r.id, fmtA(r.a)] : [r.id, fmtA(r.a)].concat(o.sub ? [o.sub] : []);
    const fs = small ? 10 : r.k === "ao" ? 15 : 16, gap = small ? 11 : fs + 2;
    const y0 = cy - (lines.length - 1) * gap / 2 + fs * 0.35;
    const txt = lines.map((t, i) => `<text x="${cx}" y="${y0 + i * gap}" text-anchor="middle" style="fill:${ink};font-size:${i === 0 ? fs : fs - (small ? 2 : 3)}px;font-weight:${i === 0 ? 700 : 500}">${esc(t)}</text>`).join("");
    const body = `<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" rx="${small ? 5 : 8}" fill="${fill}" stroke="${stroke}" stroke-width="${o.strong ? 3 : 1.5}"></rect>${txt}`;
    const tip = `<title>${esc(o.title || `${r.id} · ${K.n} · ${fmtA(r.a)}`)}</title>`;
    if (o.href) return `<a href="${esc(o.href)}" class="fm-pond">${tip}${body}</a>`;
    if (o.data) return `<g class="fm-pond" ${o.data} role="button" tabindex="0">${tip}${body}</g>`;
    return `<g>${tip}${body}</g>`;
  };
  // Đường nước cấp (xanh) xuống từ ao sẵn sàng; nước thải (cam) ra 2 kênh thải hai bên
  const rows = {}; FARM.filter(r => r.k === "ao" || r.k === "deo").forEach(r => { const y = r.y + r.h / 2, o = rows[y] ||= { l:1e9, r:0 }; o.l = Math.min(o.l, r.x); o.r = Math.max(o.r, r.x + r.w); });
  const water = `
    <g stroke="#3d6fd1" stroke-width="1.6" fill="none">
      <path d="M393 360 H417"/><path d="M494 364 V378"/><path d="M494 445 V456"/><path d="M497 522 V537"/>
      <path d="M437 609 V629"/><path d="M553 609 V629"/>
      <path d="M386 683 V1267"/><path d="M553 683 V864"/><path d="M667 870 V1267"/><path d="M314 1056 V1267"/>
    </g>
    <g stroke="#e07a3a" stroke-width="1.4" fill="none" opacity=".85">
      ${Object.entries(rows).map(([y, o]) => `<path d="M150 ${y} H${o.l}"/><path d="M${o.r} ${y} H834"/>`).join("")}
    </g>`;
  const mk = (x, y, c) => `<polygon points="${x},${y} ${x - 6},${y - 4} ${x - 6},${y + 4}" fill="${c}"/>`;
  return `<svg class="farm-map" viewBox="0 180 980 1250" role="img" aria-label="Sơ đồ mặt bằng ShrimpVet ESG Farm">
    <style>
      .farm-map text{font-family:"Be Vietnam Pro",system-ui,sans-serif}
      .farm-map .fm-pond{cursor:pointer}
      .farm-map .fm-pond:hover rect,.farm-map .fm-pond:focus rect{stroke:#14223a;stroke-width:3}
    </style>
    <rect y="180" width="980" height="1250" fill="#f7fafc"/>
    <text x="24" y="216" style="font-size:18px;font-weight:700;fill:#14223a">${esc(opt.title || "ShrimpVet ESG Farm")}</text>
    <text x="24" y="242" style="font-size:15px;fill:#5b6a80">Xã Gành Hào, tỉnh Cà Mau · Tổng diện tích 19,8164 ha</text>
    <text x="24" y="264" style="font-size:12.5px;fill:#5b6a80">Sơ đồ minh hoạ, không theo tỷ lệ</text>
    <g transform="translate(910 228)"><circle r="34" fill="#fff" stroke="#dbe3ee"/><path d="M-14 14 L14 -14" stroke="#5b6a80" stroke-width="4" stroke-linecap="round"/><polygon points="20,-20 4,-16 16,-4" fill="#5b6a80"/><text x="-44" y="5" text-anchor="end" style="font-size:14px;font-weight:700;fill:#14223a">Hướng Bắc</text></g>
    <!-- kênh -->
    <rect x="20" y="297" width="72" height="1133" fill="#a9c6ea"/>
    <text x="56" y="830" text-anchor="middle" style="font-size:17px;font-weight:700;fill:#1d3f74">KÊNH</text>
    <text x="56" y="852" text-anchor="middle" style="font-size:17px;font-weight:700;fill:#1d3f74">RẠCH</text>
    <text x="56" y="874" text-anchor="middle" style="font-size:17px;font-weight:700;fill:#1d3f74">CÓC</text>
    <rect x="92" y="1388" width="796" height="42" fill="#a9c6ea"/>
    <text x="578" y="1416" text-anchor="middle" style="font-size:17px;font-weight:700;fill:#1d3f74">KÊNH CHỆT</text>
    <!-- cống cấp + kênh dẫn nước -->
    <path d="M57 318 H112 V310 L130 327 L112 344 V336 H57 Z" fill="#3d6fd1"/>
    <rect x="130" y="321" width="78" height="12" fill="#1d3f74" stroke="#14223a"/>
    <polygon points="182,285 218,285 200,316" fill="#e53935"/>
    <!-- kênh thải -->
    <rect x="121" y="690" width="29" height="589" fill="#e07a3a" stroke="#14223a" stroke-width="2"/>
    <rect x="834" y="690" width="28" height="589" fill="#e07a3a" stroke="#14223a" stroke-width="2"/>
    <rect x="490" y="1312" width="18" height="63" fill="#e07a3a" stroke="#14223a"/>
    <polygon points="483,1375 515,1375 499,1398" fill="#e07a3a"/>
    <!-- đường nội bộ -->
    <rect x="484" y="684" width="13" height="574" fill="#cfd5dc"/>
    <text transform="translate(494 960) rotate(90)" text-anchor="middle" style="font-size:12px;font-weight:600;fill:#5b6a80;letter-spacing:2px">ĐƯỜNG ĐI NỘI BỘ</text>
    ${water}
    ${FARM.map(shape).join("")}
    ${BUILD.map(b => { const ln = b.t;
      return `<rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" fill="#fff" stroke="#7cb342" stroke-width="1.5"/>` + ln.map((t, i) => `<text x="${b.x + b.w / 2}" y="${b.y + b.h / 2 + 4 + (i - (ln.length - 1) / 2) * 12}" text-anchor="middle" style="font-size:10.5px;font-weight:600;fill:#14223a">${esc(t)}</text>`).join(""); }).join("")}
    ${WELLS.map(([t, x, y]) => `<g><title>Giếng khoan ${t}</title><rect x="${x - 12}" y="${y - 14}" width="24" height="28" rx="6" fill="#1f5fbf"/><text x="${x}" y="${y + 4}" text-anchor="middle" style="font-size:10px;font-weight:700;fill:#fff">${t}</text></g>`).join("")}
    ${SOIL.map(([t, x, y]) => `<g><title>Vị trí mẫu đất ${t}</title><rect x="${x - 15}" y="${y - 11}" width="30" height="22" rx="3" fill="#f2c230" stroke="#b58a00"/><text x="${x}" y="${y + 4}" text-anchor="middle" style="font-size:10px;font-weight:700;fill:#14223a">${t}</text></g>`).join("")}
    ${TOWERS.map(([x, y]) => `<g><title>Chòi canh</title><rect x="${x - 15}" y="${y - 10}" width="30" height="20" rx="3" fill="#c9b48a" stroke="#8a7650"/><path d="M${x - 9} ${y + 3} q4 -9 9 -2 t9 -3" stroke="#6b5a3a" fill="none"/></g>`).join("")}
  </svg>`;
}

// Chú thích – trả về HTML để đặt cạnh sơ đồ
export function legendHTML(extra = ""){
  const box = (f, s) => `<i style="display:inline-block;width:18px;height:12px;border-radius:3px;background:${f};border:1.5px solid ${s};vertical-align:-1px;margin-right:6px"></i>`;
  return `<div class="fm-legend">${Object.values(KIND).map(k => `<span>${box(k.fill, k.stroke)}${k.n}</span>`).join("")}
    <span>${box("#a9c6ea", "#a9c6ea")}Kênh</span><span>${box("#e07a3a", "#14223a")}Kênh chứa thải</span>
    <span><i style="display:inline-block;width:18px;height:2px;background:#3d6fd1;vertical-align:3px;margin-right:6px"></i>Dòng nước cấp</span>
    <span><i style="display:inline-block;width:18px;height:2px;background:#e07a3a;vertical-align:3px;margin-right:6px"></i>Dòng nước thải</span>
    <span>${box("#1f5fbf", "#1f5fbf")}Giếng khoan (G)</span><span>${box("#f2c230", "#b58a00")}Vị trí mẫu đất (Đ)</span>
    <span>${box("#c9b48a", "#8a7650")}Chòi canh</span><span><i style="display:inline-block;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:11px solid #e53935;margin-right:6px;vertical-align:-1px"></i>Điểm thấp nhất</span>
    ${extra}</div>`;
}
