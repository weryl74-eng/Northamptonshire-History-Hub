/* =========================================================
   NHN CHRISTMAS SNOW AND MESSAGE (homepage only)
   ---------------------------------------------------------
   SETTINGS: these are the only lines you need to change.

   SWITCH:
     "auto" = shows itself between the two dates below, every year
     "on"   = always shows
     "off"  = never shows
   ========================================================= */

var CHRISTMAS_SWITCH = "auto";

var CHRISTMAS_START = "01-12";   // day-month it appears (1 December)
var CHRISTMAS_END   = "06-01";   // day-month it disappears after (6 January, Twelfth Night)

var CHRISTMAS_MESSAGE = "Season’s Greetings\nfrom the Northants History Network";

/* ---- Nothing below here needs changing ---- */

(function () {
  var hero = document.querySelector(".hero");
  if (!hero) return;

  function inSeason() {
    var now = new Date();
    var md = (now.getMonth() + 1) * 100 + now.getDate();
    var s = CHRISTMAS_START.split("-"), e = CHRISTMAS_END.split("-");
    var start = (+s[1]) * 100 + (+s[0]), end = (+e[1]) * 100 + (+e[0]);
    return start <= end ? (md >= start && md <= end) : (md >= start || md <= end);
  }

  var preview = /[?&]christmas=on/.test(location.search);
  var show = preview || CHRISTMAS_SWITCH === "on" || (CHRISTMAS_SWITCH === "auto" && inSeason());
  if (!show) return;

  var css = document.createElement("style");
  css.textContent =
    "@font-face{font-family:'NHN Great Vibes';src:url('great-vibes.woff2') format('woff2');font-display:swap}" +
    ".nhn-snow{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:4}" +
    ".nhn-xmas-message{position:absolute;z-index:6;left:50%;top:16px;transform:translateX(-50%);" +
    "width:max-content;max-width:46vw;white-space:pre-line;margin:0;text-align:center;" +
    "font:400 35px/1.02 'NHN Great Vibes','Brush Script MT',cursive;color:#7a1f1f;-webkit-text-stroke:.7px #7a1f1f;" +
    "text-shadow:0 0 6px #fffaf0,0 0 12px #fffaf0,0 1px 2px #fff}" +
    "@media(max-width:1100px){.nhn-xmas-message{font-size:31px}}" +
    "@media(max-width:800px){.nhn-xmas-message{position:relative;left:auto;top:auto;transform:none;width:auto;" +
    "max-width:none;margin:12px 12px 14px;font-size:26px;line-height:1.08}}";
  document.head.appendChild(css);

  if (CHRISTMAS_MESSAGE) {
    var msg = document.createElement("p");
    msg.className = "nhn-xmas-message";
    msg.textContent = CHRISTMAS_MESSAGE;
    // Large screens: inside the picture, under the tagline. Phones: just below the picture.
    var place = function () {
      if (window.innerWidth > 800) { if (msg.parentNode !== hero) hero.appendChild(msg); }
      else if (msg.previousElementSibling !== hero) hero.insertAdjacentElement("afterend", msg);
    };
    place();
    window.addEventListener("resize", place);
  }

  // Respect visitors who have asked their device to reduce motion
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var canvas = document.createElement("canvas");
  canvas.className = "nhn-snow";
  canvas.setAttribute("aria-hidden", "true");
  hero.appendChild(canvas);
  var ctx = canvas.getContext("2d");
  var flakes = [], w, h, ratio = window.devicePixelRatio || 1;

  function size() {
    w = hero.clientWidth; h = hero.clientHeight;
    canvas.width = w * ratio; canvas.height = h * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    var count = Math.round(w / 9);
    flakes = [];
    for (var i = 0; i < count; i++) flakes.push(newFlake(true));
  }
  function newFlake(anywhere) {
    return {
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : -10,
      r: 1.5 + Math.random() * 3,
      speed: 0.35 + Math.random() * 0.9,
      drift: Math.random() * Math.PI * 2,
      alpha: 0.55 + Math.random() * 0.4
    };
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < flakes.length; i++) {
      var f = flakes[i];
      f.y += f.speed;
      f.drift += 0.01;
      f.x += Math.sin(f.drift) * 0.4;
      if (f.y > h + 5) flakes[i] = newFlake(false);
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255," + f.alpha + ")";
      ctx.shadowColor = "rgba(90,110,135,.55)";
      ctx.shadowBlur = 3;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  size();
  window.addEventListener("resize", size);
  draw();
})();
