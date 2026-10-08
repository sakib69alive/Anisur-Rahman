(function () {
  "use strict";

  var P = window.PROFILE;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------ icons */
  var STROKE = {
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    sms: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    userplus: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6"/><path d="M23 11h-6"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98"/><path d="m15.41 6.51-6.82 3.98"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    car: '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
    building: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v3M14 20h3M20 20h1"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>'
  };
  var IMO = '<path d="M12 2C6.5 2 2 5.9 2 10.8c0 2.7 1.4 5.1 3.6 6.7L4.7 22l4.6-2.4c.9.2 1.8.3 2.7.3 5.5 0 10-3.9 10-8.8S17.5 2 12 2z"/><text x="12" y="13.1" text-anchor="middle" font-size="6.4" font-weight="800" font-family="Arial, sans-serif" fill="#0b1430">imo</text>';

  function icon(name) {
    if (name === "imo") return '<svg class="ic fill" viewBox="0 0 24 24" aria-hidden="true">' + IMO + "</svg>";
    if (window.BRAND_PATHS && BRAND_PATHS[name]) return '<svg class="ic fill" viewBox="0 0 24 24" aria-hidden="true"><path d="' + BRAND_PATHS[name] + '"/></svg>';
    return '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">' + (STROKE[name] || STROKE.globe) + "</svg>";
  }
  document.querySelectorAll("svg[data-icon]").forEach(function (el) {
    el.innerHTML = STROKE[el.getAttribute("data-icon")] || "";
    el.setAttribute("aria-hidden", "true");
  });

  /* ---------------------------------------------------------------- helpers */
  var toastTimer;
  function toast(msg) {
    var t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2400);
  }

  function pageUrl() {
    if (location.protocol === "file:") return P.siteUrl;
    return location.origin + location.pathname.replace(/index\.html$/, "");
  }

  function waLink(text) {
    return "https://wa.me/" + P.whatsapp + (text ? "?text=" + encodeURIComponent(text) : "");
  }

  function linkById(id) {
    return P.links.filter(function (l) { return l.id === id && l.href; })[0];
  }

  /* ----------------------------------------------------------------- render */
  function renderHero() {
    $("#roles").innerHTML = P.roles.map(function (r) { return "<span>" + esc(r) + "</span>"; }).join("");
    $("#tagline").textContent = P.tagline;

    var call = linkById("call"), wa = linkById("whatsapp");
    var html = "";
    if (call) html += '<a class="btn call" href="' + esc(call.href) + '">' + icon("phone") + "Call</a>";
    if (wa) html += '<a class="btn green" href="' + esc(wa.href) + '" target="_blank" rel="noopener">' + icon("whatsapp") + "WhatsApp</a>";
    html += '<button class="btn gold" type="button" data-save>' + icon("userplus") + "Save contact</button>";
    $("#quick").innerHTML = html;
  }

  function renderLinks() {
    var wrap = $("#links");
    var items = P.links.filter(function (l) { return l.href; });
    wrap.innerHTML = items.map(function (l, i) {
      var ext = /^https?:/.test(l.href);
      return '<a class="link reveal" style="--c:' + esc(l.color) + ";--d:" + i * 70 + 'ms" href="' + esc(l.href) + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + ">" +
        '<span class="link-ic">' + icon(l.icon) + "</span>" +
        '<span class="link-t"><b>' + esc(l.label) + "</b><small>" + esc(l.display || "Tap to open") + "</small></span>" +
        '<span class="link-go">' + icon("arrow") + "</span></a>";
    }).join("");
  }

  function renderBusiness() {
    $("#biz").innerHTML = P.businesses.map(function (b, i) {
      var list = b.items.map(function (t) { return "<li>" + icon("check") + "<span>" + esc(t) + "</span></li>"; }).join("");
      var listings = "";
      if (b.listings && b.listings.length) {
        listings = '<div class="listings">' + b.listings.map(function (x) {
          var msg = "Hello " + P.name + ", I am interested in: " + x.title + (x.price ? " (" + x.price + ")" : "");
          return '<a class="listing" href="' + esc(waLink(msg)) + '" target="_blank" rel="noopener">' +
            '<div class="listing-img">' + (x.image ? '<img loading="lazy" src="' + esc(x.image) + '" alt="' + esc(x.title) + '"/>' : icon("image")) +
            (x.tag ? '<span class="tag">' + esc(x.tag) + "</span>" : "") + "</div>" +
            '<div class="listing-body"><h4>' + esc(x.title) + "</h4>" + (x.price ? '<div class="listing-price">' + esc(x.price) + "</div>" : "") +
            (x.meta && x.meta.length ? '<div class="listing-meta">' + x.meta.map(function (m) { return "<span>" + esc(m) + "</span>"; }).join("") + "</div>" : "") +
            "</div></a>";
        }).join("") + "</div>";
      }
      return '<article class="biz-card reveal" style="--d:' + i * 100 + 'ms">' +
        '<span class="biz-no">0' + (i + 1) + '</span><div class="biz-top"><div class="biz-ic">' + icon(b.icon) + "</div><div><h3>" + esc(b.title) + "</h3><p>" + esc(b.subtitle) + "</p></div></div>" +
        '<ul class="biz-list">' + list + "</ul>" + listings +
        '<a class="btn green" href="' + esc(waLink(b.message)) + '" target="_blank" rel="noopener">' + icon("whatsapp") + esc(b.cta) + "</a></article>";
    }).join("");
  }

  function renderAbout() {
    $("#about-text").textContent = P.about;
    $("#why").innerHTML = P.why.map(function (w, i) {
      return '<div class="why-item reveal" style="--d:' + i * 90 + 'ms">' + icon(w.icon) + "<div><b>" + esc(w.title) + "</b><span>" + esc(w.text) + "</span></div></div>";
    }).join("");
  }

  /* ------------------------------------------------------------------ vCard */
  var FACE = { sx: 235, sy: 40, s: 570 }; // square crop around the face in assets/anisur.jpg

  function loadPhoto() {
    return new Promise(function (res) {
      var img = new Image();
      img.onload = function () { res(img); };
      img.onerror = function () { res(null); };
      img.src = "assets/anisur.jpg";
    });
  }

  function photoBase64() {
    return loadPhoto().then(function (img) {
      if (!img) return "";
      try {
        var c = document.createElement("canvas");
        c.width = c.height = 320;
        c.getContext("2d").drawImage(img, FACE.sx, FACE.sy, FACE.s, FACE.s, 0, 0, 320, 320);
        return c.toDataURL("image/jpeg", 0.85).split(",")[1];
      } catch (e) { return ""; }
    });
  }

  function fold(line) {
    var out = [], i = 0;
    while (line.length - i > 74) { out.push(line.substr(i, i === 0 ? 75 : 74)); i += i === 0 ? 75 : 74; }
    out.push(line.substr(i));
    return out.join("\r\n ");
  }

  function buildVcf(photo) {
    var parts = P.name.split(" ");
    var last = parts.length > 1 ? parts[parts.length - 1] : "";
    var given = parts.length > 1 ? parts.slice(0, -1).join(" ") : P.name;
    var L = ["BEGIN:VCARD", "VERSION:3.0",
      "N:" + last + ";" + given + ";;;",
      "FN:" + P.name,
      "TITLE:" + P.roles.join(" | "),
      "TEL;TYPE=CELL,VOICE,pref:" + P.phone,
      "URL:" + pageUrl()];
    var mail = linkById("email");
    if (mail) L.push("EMAIL;TYPE=INTERNET:" + mail.href.replace(/^mailto:/, ""));
    P.links.forEach(function (l) {
      if (!l.href || /^(tel:|sms:|mailto:)/.test(l.href) || l.id === "location") return;
      L.push("item" + L.length + ".URL:" + l.href.split("?")[0]);
      L.push("item" + (L.length - 1) + ".X-ABLabel:" + l.label);
    });
    L.push("NOTE:" + P.tagline);
    if (photo) L.push("PHOTO;ENCODING=b;TYPE=JPEG:" + photo);
    L.push("END:VCARD");
    return L.map(fold).join("\r\n") + "\r\n";
  }

  function saveContact() {
    photoBase64().then(function (photo) {
      var blob = new Blob([buildVcf(photo)], { type: "text/vcard;charset=utf-8" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = P.name.replace(/\s+/g, "-") + ".vcf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      toast("Contact file ready — open it to save");
    });
  }

  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-save]")) saveContact();
  });

  /* --------------------------------------------------------------------- QR */
  var STYLE = { shape: "round", a: "#12301f", b: "#2f6a4c", eye: "#12301f", eyeIn: "#12301f" };
  var qrCanvas = $("#qr");
  var photoImg = null;

  function rr(ctx, x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function drawQR() {
    var st = STYLE;
    var url = pageUrl();
    $("#qr-url").textContent = url;
    var qr = qrcode(0, "H");
    qr.addData(url);
    qr.make();
    var n = qr.getModuleCount();

    var ctx = qrCanvas.getContext("2d");
    var W = qrCanvas.width, H = qrCanvas.height;
    ctx.clearRect(0, 0, W, H);

    // card
    ctx.beginPath(); rr(ctx, 0, 0, W, H, 56); ctx.fillStyle = "#ffffff"; ctx.fill();
    var gg = ctx.createLinearGradient(0, 0, W, H);
    gg.addColorStop(0, "#f7e3a6"); gg.addColorStop(0.5, "#c9a02f"); gg.addColorStop(1, "#8a6410");
    ctx.beginPath(); rr(ctx, 22, 22, W - 44, H - 44, 40); ctx.strokeStyle = gg; ctx.lineWidth = 5; ctx.stroke();

    ctx.textAlign = "center";
    ctx.fillStyle = "#9a7420";
    ctx.font = '700 26px "Plus Jakarta Sans", system-ui, sans-serif';
    if ("letterSpacing" in ctx) ctx.letterSpacing = "8px";
    ctx.fillText("DIGITAL CARD", W / 2 + 4, 84);
    if ("letterSpacing" in ctx) ctx.letterSpacing = "0px";

    // modules
    var size = 760, qx = (W - size) / 2, qy = 150, m = size / n;
    var grad = ctx.createLinearGradient(qx, qy, qx + size, qy + size);
    grad.addColorStop(0, st.a); grad.addColorStop(1, st.b);
    var inFinder = function (r, c) { return (r < 7 && c < 7) || (r < 7 && c >= n - 7) || (r >= n - 7 && c < 7); };

    ctx.beginPath();
    for (var r = 0; r < n; r++) {
      for (var c = 0; c < n; c++) {
        if (!qr.isDark(r, c) || inFinder(r, c)) continue;
        var x = qx + c * m, y = qy + r * m;
        if (st.shape === "dot") { ctx.moveTo(x + m / 2 + m * 0.49, y + m / 2); ctx.arc(x + m / 2, y + m / 2, m * 0.49, 0, Math.PI * 2); }
        else if (st.shape === "round") rr(ctx, x + m * 0.01, y + m * 0.01, m * 0.98, m * 0.98, m * 0.3);
        else ctx.rect(x, y, m, m);
      }
    }
    ctx.fillStyle = grad; ctx.fill();

    // finder eyes
    [[0, 0], [0, n - 7], [n - 7, 0]].forEach(function (p) {
      var ex = qx + p[1] * m, ey = qy + p[0] * m;
      var round = st.shape !== "square";
      ctx.beginPath(); rr(ctx, ex, ey, 7 * m, 7 * m, round ? 2.1 * m : 0);
      rr(ctx, ex + m, ey + m, 5 * m, 5 * m, round ? 1.3 * m : 0);
      ctx.fillStyle = st.eye; ctx.fill("evenodd");
      ctx.beginPath(); rr(ctx, ex + 2 * m, ey + 2 * m, 3 * m, 3 * m, round ? 0.95 * m : 0);
      ctx.fillStyle = st.eyeIn; ctx.fill();
    });

    // centre photo (max ~19% of width; level-H error correction absorbs it)
    var cx = W / 2, cy = qy + size / 2, hs = 74;
    ctx.beginPath(); rr(ctx, cx - hs - 14, cy - hs - 14, (hs + 14) * 2, (hs + 14) * 2, 6); ctx.fillStyle = "#ffffff"; ctx.fill();
    ctx.save();
    ctx.beginPath(); rr(ctx, cx - hs, cy - hs, hs * 2, hs * 2, 3); ctx.clip();
    if (photoImg) ctx.drawImage(photoImg, FACE.sx, FACE.sy, FACE.s, FACE.s, cx - hs, cy - hs, hs * 2, hs * 2);
    else { ctx.fillStyle = st.a; ctx.fillRect(cx - hs, cy - hs, hs * 2, hs * 2); ctx.fillStyle = "#f7e3a6"; ctx.font = "700 56px Georgia, serif"; ctx.textBaseline = "middle"; ctx.fillText("AR", cx, cy + 3); ctx.textBaseline = "alphabetic"; }
    ctx.restore();
    ctx.beginPath(); rr(ctx, cx - hs - 5, cy - hs - 5, (hs + 5) * 2, (hs + 5) * 2, 5); ctx.strokeStyle = gg; ctx.lineWidth = 7; ctx.stroke();

    // caption
    ctx.fillStyle = "#111613";
    ctx.font = '600 52px "Playfair Display", Georgia, serif';
    ctx.fillText(P.name, W / 2, 1010);
    ctx.fillStyle = "#6b7280";
    ctx.font = '600 28px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillText("Scan to open profile & save contact", W / 2, 1062);
    ctx.fillStyle = "#9a7420";
    ctx.font = '500 22px "Plus Jakarta Sans", system-ui, sans-serif';
    var short = url.replace(/^https?:\/\//, "");
    ctx.fillText(short.length > 52 ? short.slice(0, 50) + "…" : short, W / 2, 1112);
  }

  function copyText(t) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(t);
    return new Promise(function (res, rej) {
      var ta = document.createElement("textarea");
      ta.value = t; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy") ? res() : rej(); } catch (e) { rej(e); }
      ta.remove();
    });
  }

  $("#copy-link").addEventListener("click", function () {
    copyText(pageUrl()).then(function () { toast("Link copied"); }, function () { toast("Could not copy — long-press the link"); });
  });

  $("#share-btn").addEventListener("click", function () {
    var data = { title: P.name, text: P.name + " — " + P.roles.join(" · "), url: pageUrl() };
    if (navigator.share) navigator.share(data).catch(function () {});
    else copyText(data.url).then(function () { toast("Link copied"); }, function () {});
  });

  $("#qr-download").addEventListener("click", function () {
    try {
      qrCanvas.toBlob(function (blob) {
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = P.name.replace(/\s+/g, "-") + "-QR.png";
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
        toast("QR saved");
      }, "image/png");
    } catch (e) { toast("Open the live website to download the QR"); }
  });

  /* ------------------------------------------------------- scroll behaviours */
  function setupReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* QR modal: the code is drawn only when it is opened */
  function setupModal() {
    var modal = $("#qr-modal"), openBtn = $("#qr-open"), closeBtn = $("#qr-close"), last;
    function open() {
      last = document.activeElement;
      drawQR();
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      requestAnimationFrame(function () { modal.classList.add("show"); closeBtn.focus(); });
    }
    function close() {
      modal.classList.remove("show");
      document.body.style.overflow = "";
      setTimeout(function () { modal.hidden = true; }, 350);
      if (last && last.focus) last.focus();
    }
    openBtn.addEventListener("click", open);
    closeBtn.addEventListener("click", close);
    modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !modal.hidden) close(); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { if (!modal.hidden) drawQR(); });
  }

  /* ------------------------------------------------------------------- init */
  renderHero();
  renderLinks();
  renderBusiness();
  renderAbout();
  $("#year").textContent = new Date().getFullYear();
  setupReveal();
  setupModal();
  // Deter casual saving of the portrait (right-click / long-press menu, drag)
  ["contextmenu", "dragstart"].forEach(function (ev) {
    $(".hero-photo").addEventListener(ev, function (e) { e.preventDefault(); });
  });
  loadPhoto().then(function (img) { photoImg = img; if (!$("#qr-modal").hidden) drawQR(); });
})();
