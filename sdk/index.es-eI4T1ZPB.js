import { l as Cu, o as Uv, p as Kl, q as ii } from "./index-CgvYsUuI.js";
import { r as d8 } from "./events-BCEOhv4q.js";
import { r as Ou } from "./inherits_browser-BPb0V7-q.js";
var gi = d8();
const Vl = /* @__PURE__ */ Cu(gi);
var gp = function(r, e, t) {
  if (t || arguments.length === 2) for (var i = 0, s = e.length, a; i < s; i++)
    (a || !(i in e)) && (a || (a = Array.prototype.slice.call(e, 0, i)), a[i] = e[i]);
  return r.concat(a || Array.prototype.slice.call(e));
}, p8 = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(e, t, i) {
      this.name = e, this.version = t, this.os = i, this.type = "browser";
    }
    return r;
  }()
), g8 = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return r;
  }()
), v8 = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(e, t, i, s) {
      this.name = e, this.version = t, this.os = i, this.bot = s, this.type = "bot-device";
    }
    return r;
  }()
), b8 = (
  /** @class */
  /* @__PURE__ */ function() {
    function r() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return r;
  }()
), m8 = (
  /** @class */
  /* @__PURE__ */ function() {
    function r() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return r;
  }()
), y8 = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, w8 = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, vp = 3, _8 = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", y8]
], bp = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function A8(r) {
  return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new m8() : typeof navigator < "u" ? x8(navigator.userAgent) : M8();
}
function E8(r) {
  return r !== "" && _8.reduce(function(e, t) {
    var i = t[0], s = t[1];
    if (e)
      return e;
    var a = s.exec(r);
    return !!a && [i, a];
  }, !1);
}
function x8(r) {
  var e = E8(r);
  if (!e)
    return null;
  var t = e[0], i = e[1];
  if (t === "searchbot")
    return new b8();
  var s = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
  s ? s.length < vp && (s = gp(gp([], s, !0), I8(vp - s.length), !0)) : s = [];
  var a = s.join("."), f = S8(r), h = w8.exec(r);
  return h && h[1] ? new v8(t, a, f, h[1]) : new p8(t, a, f);
}
function S8(r) {
  for (var e = 0, t = bp.length; e < t; e++) {
    var i = bp[e], s = i[0], a = i[1], f = a.exec(r);
    if (f)
      return s;
  }
  return null;
}
function M8() {
  var r = typeof process < "u" && process.version;
  return r ? new g8(process.version.slice(1)) : null;
}
function I8(r) {
  for (var e = [], t = 0; t < r; t++)
    e.push("0");
  return e;
}
var eh = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var El = function(r, e) {
  return El = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var s in i) i.hasOwnProperty(s) && (t[s] = i[s]);
  }, El(r, e);
};
function D8(r, e) {
  El(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var xl = function() {
  return xl = Object.assign || function(e) {
    for (var t, i = 1, s = arguments.length; i < s; i++) {
      t = arguments[i];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, xl.apply(this, arguments);
};
function P8(r, e) {
  var t = {};
  for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && e.indexOf(i) < 0 && (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(r); s < i.length; s++)
      e.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[s]) && (t[i[s]] = r[i[s]]);
  return t;
}
function C8(r, e, t, i) {
  var s = arguments.length, a = s < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, f;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(r, e, t, i);
  else for (var h = r.length - 1; h >= 0; h--) (f = r[h]) && (a = (s < 3 ? f(a) : s > 3 ? f(e, t, a) : f(e, t)) || a);
  return s > 3 && a && Object.defineProperty(e, t, a), a;
}
function O8(r, e) {
  return function(t, i) {
    e(t, i, r);
  };
}
function R8(r, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(r, e);
}
function N8(r, e, t, i) {
  function s(a) {
    return a instanceof t ? a : new t(function(f) {
      f(a);
    });
  }
  return new (t || (t = Promise))(function(a, f) {
    function h(m) {
      try {
        u(i.next(m));
      } catch (A) {
        f(A);
      }
    }
    function p(m) {
      try {
        u(i.throw(m));
      } catch (A) {
        f(A);
      }
    }
    function u(m) {
      m.done ? a(m.value) : s(m.value).then(h, p);
    }
    u((i = i.apply(r, e || [])).next());
  });
}
function T8(r, e) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, i, s, a, f;
  return f = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
    return this;
  }), f;
  function h(u) {
    return function(m) {
      return p([u, m]);
    };
  }
  function p(u) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (i = 1, s && (a = u[0] & 2 ? s.return : u[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) && !(a = a.call(s, u[1])).done) return a;
      switch (s = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
        case 0:
        case 1:
          a = u;
          break;
        case 4:
          return t.label++, { value: u[1], done: !1 };
        case 5:
          t.label++, s = u[1], u = [0];
          continue;
        case 7:
          u = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            t = 0;
            continue;
          }
          if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
            t.label = u[1];
            break;
          }
          if (u[0] === 6 && t.label < a[1]) {
            t.label = a[1], a = u;
            break;
          }
          if (a && t.label < a[2]) {
            t.label = a[2], t.ops.push(u);
            break;
          }
          a[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      u = e.call(r, t);
    } catch (m) {
      u = [6, m], s = 0;
    } finally {
      i = a = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function q8(r, e, t, i) {
  i === void 0 && (i = t), r[i] = e[t];
}
function F8(r, e) {
  for (var t in r) t !== "default" && !e.hasOwnProperty(t) && (e[t] = r[t]);
}
function Sl(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], i = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function zv(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t) return r;
  var i = t.call(r), s, a = [], f;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = i.next()).done; ) a.push(s.value);
  } catch (h) {
    f = { error: h };
  } finally {
    try {
      s && !s.done && (t = i.return) && t.call(i);
    } finally {
      if (f) throw f.error;
    }
  }
  return a;
}
function B8() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(zv(arguments[e]));
  return r;
}
function L8() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++) r += arguments[e].length;
  for (var i = Array(r), s = 0, e = 0; e < t; e++)
    for (var a = arguments[e], f = 0, h = a.length; f < h; f++, s++)
      i[s] = a[f];
  return i;
}
function Eo(r) {
  return this instanceof Eo ? (this.v = r, this) : new Eo(r);
}
function U8(r, e, t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(r, e || []), s, a = [];
  return s = {}, f("next"), f("throw"), f("return"), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function f(M) {
    i[M] && (s[M] = function(I) {
      return new Promise(function(C, R) {
        a.push([M, I, C, R]) > 1 || h(M, I);
      });
    });
  }
  function h(M, I) {
    try {
      p(i[M](I));
    } catch (C) {
      A(a[0][3], C);
    }
  }
  function p(M) {
    M.value instanceof Eo ? Promise.resolve(M.value.v).then(u, m) : A(a[0][2], M);
  }
  function u(M) {
    h("next", M);
  }
  function m(M) {
    h("throw", M);
  }
  function A(M, I) {
    M(I), a.shift(), a.length && h(a[0][0], a[0][1]);
  }
}
function z8(r) {
  var e, t;
  return e = {}, i("next"), i("throw", function(s) {
    throw s;
  }), i("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function i(s, a) {
    e[s] = r[s] ? function(f) {
      return (t = !t) ? { value: Eo(r[s](f)), done: s === "return" } : a ? a(f) : f;
    } : a;
  }
}
function j8(r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = r[Symbol.asyncIterator], t;
  return e ? e.call(r) : (r = typeof Sl == "function" ? Sl(r) : r[Symbol.iterator](), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function i(a) {
    t[a] = r[a] && function(f) {
      return new Promise(function(h, p) {
        f = r[a](f), s(h, p, f.done, f.value);
      });
    };
  }
  function s(a, f, h, p) {
    Promise.resolve(p).then(function(u) {
      a({ value: u, done: h });
    }, f);
  }
}
function $8(r, e) {
  return Object.defineProperty ? Object.defineProperty(r, "raw", { value: e }) : r.raw = e, r;
}
function k8(r) {
  if (r && r.__esModule) return r;
  var e = {};
  if (r != null) for (var t in r) Object.hasOwnProperty.call(r, t) && (e[t] = r[t]);
  return e.default = r, e;
}
function H8(r) {
  return r && r.__esModule ? r : { default: r };
}
function K8(r, e) {
  if (!e.has(r))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(r);
}
function V8(r, e, t) {
  if (!e.has(r))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(r, t), t;
}
const G8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return xl;
  },
  __asyncDelegator: z8,
  __asyncGenerator: U8,
  __asyncValues: j8,
  __await: Eo,
  __awaiter: N8,
  __classPrivateFieldGet: K8,
  __classPrivateFieldSet: V8,
  __createBinding: q8,
  __decorate: C8,
  __exportStar: F8,
  __extends: D8,
  __generator: T8,
  __importDefault: H8,
  __importStar: k8,
  __makeTemplateObject: $8,
  __metadata: R8,
  __param: O8,
  __read: zv,
  __rest: P8,
  __spread: B8,
  __spreadArrays: L8,
  __values: Sl
}, Symbol.toStringTag, { value: "Module" })), Ru = /* @__PURE__ */ Uv(G8);
var th = {}, Ja = {}, mp;
function W8() {
  if (mp) return Ja;
  mp = 1, Object.defineProperty(Ja, "__esModule", { value: !0 }), Ja.delay = void 0;
  function r(e) {
    return new Promise((t) => {
      setTimeout(() => {
        t(!0);
      }, e);
    });
  }
  return Ja.delay = r, Ja;
}
var Ss = {}, rh = {}, Ms = {}, yp;
function J8() {
  return yp || (yp = 1, Object.defineProperty(Ms, "__esModule", { value: !0 }), Ms.ONE_THOUSAND = Ms.ONE_HUNDRED = void 0, Ms.ONE_HUNDRED = 100, Ms.ONE_THOUSAND = 1e3), Ms;
}
var ih = {}, wp;
function Y8() {
  return wp || (wp = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 }), r.ONE_YEAR = r.FOUR_WEEKS = r.THREE_WEEKS = r.TWO_WEEKS = r.ONE_WEEK = r.THIRTY_DAYS = r.SEVEN_DAYS = r.FIVE_DAYS = r.THREE_DAYS = r.ONE_DAY = r.TWENTY_FOUR_HOURS = r.TWELVE_HOURS = r.SIX_HOURS = r.THREE_HOURS = r.ONE_HOUR = r.SIXTY_MINUTES = r.THIRTY_MINUTES = r.TEN_MINUTES = r.FIVE_MINUTES = r.ONE_MINUTE = r.SIXTY_SECONDS = r.THIRTY_SECONDS = r.TEN_SECONDS = r.FIVE_SECONDS = r.ONE_SECOND = void 0, r.ONE_SECOND = 1, r.FIVE_SECONDS = 5, r.TEN_SECONDS = 10, r.THIRTY_SECONDS = 30, r.SIXTY_SECONDS = 60, r.ONE_MINUTE = r.SIXTY_SECONDS, r.FIVE_MINUTES = r.ONE_MINUTE * 5, r.TEN_MINUTES = r.ONE_MINUTE * 10, r.THIRTY_MINUTES = r.ONE_MINUTE * 30, r.SIXTY_MINUTES = r.ONE_MINUTE * 60, r.ONE_HOUR = r.SIXTY_MINUTES, r.THREE_HOURS = r.ONE_HOUR * 3, r.SIX_HOURS = r.ONE_HOUR * 6, r.TWELVE_HOURS = r.ONE_HOUR * 12, r.TWENTY_FOUR_HOURS = r.ONE_HOUR * 24, r.ONE_DAY = r.TWENTY_FOUR_HOURS, r.THREE_DAYS = r.ONE_DAY * 3, r.FIVE_DAYS = r.ONE_DAY * 5, r.SEVEN_DAYS = r.ONE_DAY * 7, r.THIRTY_DAYS = r.ONE_DAY * 30, r.ONE_WEEK = r.SEVEN_DAYS, r.TWO_WEEKS = r.ONE_WEEK * 2, r.THREE_WEEKS = r.ONE_WEEK * 3, r.FOUR_WEEKS = r.ONE_WEEK * 4, r.ONE_YEAR = r.ONE_DAY * 365;
  }(ih)), ih;
}
var _p;
function jv() {
  return _p || (_p = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 });
    const e = Ru;
    e.__exportStar(J8(), r), e.__exportStar(Y8(), r);
  }(rh)), rh;
}
var Ap;
function Q8() {
  if (Ap) return Ss;
  Ap = 1, Object.defineProperty(Ss, "__esModule", { value: !0 }), Ss.fromMiliseconds = Ss.toMiliseconds = void 0;
  const r = jv();
  function e(i) {
    return i * r.ONE_THOUSAND;
  }
  Ss.toMiliseconds = e;
  function t(i) {
    return Math.floor(i / r.ONE_THOUSAND);
  }
  return Ss.fromMiliseconds = t, Ss;
}
var Ep;
function X8() {
  return Ep || (Ep = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 });
    const e = Ru;
    e.__exportStar(W8(), r), e.__exportStar(Q8(), r);
  }(th)), th;
}
var ua = {}, xp;
function Z8() {
  if (xp) return ua;
  xp = 1, Object.defineProperty(ua, "__esModule", { value: !0 }), ua.Watch = void 0;
  class r {
    constructor() {
      this.timestamps = /* @__PURE__ */ new Map();
    }
    start(t) {
      if (this.timestamps.has(t))
        throw new Error(`Watch already started for label: ${t}`);
      this.timestamps.set(t, { started: Date.now() });
    }
    stop(t) {
      const i = this.get(t);
      if (typeof i.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${t}`);
      const s = Date.now() - i.started;
      this.timestamps.set(t, { started: i.started, elapsed: s });
    }
    get(t) {
      const i = this.timestamps.get(t);
      if (typeof i > "u")
        throw new Error(`No timestamp found for label: ${t}`);
      return i;
    }
    elapsed(t) {
      const i = this.get(t);
      return i.elapsed || Date.now() - i.started;
    }
  }
  return ua.Watch = r, ua.default = r, ua;
}
var nh = {}, Ya = {}, Sp;
function e4() {
  if (Sp) return Ya;
  Sp = 1, Object.defineProperty(Ya, "__esModule", { value: !0 }), Ya.IWatch = void 0;
  class r {
  }
  return Ya.IWatch = r, Ya;
}
var Mp;
function t4() {
  return Mp || (Mp = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 }), Ru.__exportStar(e4(), r);
  }(nh)), nh;
}
var Ip;
function r4() {
  return Ip || (Ip = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 });
    const e = Ru;
    e.__exportStar(X8(), r), e.__exportStar(Z8(), r), e.__exportStar(t4(), r), e.__exportStar(jv(), r);
  }(eh)), eh;
}
var Me = r4(), Kt = {}, Dp;
function $v() {
  if (Dp) return Kt;
  Dp = 1, Object.defineProperty(Kt, "__esModule", { value: !0 }), Kt.getLocalStorage = Kt.getLocalStorageOrThrow = Kt.getCrypto = Kt.getCryptoOrThrow = Kt.getLocation = Kt.getLocationOrThrow = Kt.getNavigator = Kt.getNavigatorOrThrow = Kt.getDocument = Kt.getDocumentOrThrow = Kt.getFromWindowOrThrow = Kt.getFromWindow = void 0;
  function r(M) {
    let I;
    return typeof window < "u" && typeof window[M] < "u" && (I = window[M]), I;
  }
  Kt.getFromWindow = r;
  function e(M) {
    const I = r(M);
    if (!I)
      throw new Error(`${M} is not defined in Window`);
    return I;
  }
  Kt.getFromWindowOrThrow = e;
  function t() {
    return e("document");
  }
  Kt.getDocumentOrThrow = t;
  function i() {
    return r("document");
  }
  Kt.getDocument = i;
  function s() {
    return e("navigator");
  }
  Kt.getNavigatorOrThrow = s;
  function a() {
    return r("navigator");
  }
  Kt.getNavigator = a;
  function f() {
    return e("location");
  }
  Kt.getLocationOrThrow = f;
  function h() {
    return r("location");
  }
  Kt.getLocation = h;
  function p() {
    return e("crypto");
  }
  Kt.getCryptoOrThrow = p;
  function u() {
    return r("crypto");
  }
  Kt.getCrypto = u;
  function m() {
    return e("localStorage");
  }
  Kt.getLocalStorageOrThrow = m;
  function A() {
    return r("localStorage");
  }
  return Kt.getLocalStorage = A, Kt;
}
var ya = $v(), Qa = {}, Pp;
function i4() {
  if (Pp) return Qa;
  Pp = 1, Object.defineProperty(Qa, "__esModule", { value: !0 }), Qa.getWindowMetadata = void 0;
  const r = $v();
  function e() {
    let t, i;
    try {
      t = r.getDocumentOrThrow(), i = r.getLocationOrThrow();
    } catch {
      return null;
    }
    function s() {
      const I = t.getElementsByTagName("link"), C = [];
      for (let R = 0; R < I.length; R++) {
        const L = I[R], K = L.getAttribute("rel");
        if (K && K.toLowerCase().indexOf("icon") > -1) {
          const F = L.getAttribute("href");
          if (F)
            if (F.toLowerCase().indexOf("https:") === -1 && F.toLowerCase().indexOf("http:") === -1 && F.indexOf("//") !== 0) {
              let V = i.protocol + "//" + i.host;
              if (F.indexOf("/") === 0)
                V += F;
              else {
                const B = i.pathname.split("/");
                B.pop();
                const z = B.join("/");
                V += z + "/" + F;
              }
              C.push(V);
            } else if (F.indexOf("//") === 0) {
              const V = i.protocol + F;
              C.push(V);
            } else
              C.push(F);
        }
      }
      return C;
    }
    function a(...I) {
      const C = t.getElementsByTagName("meta");
      for (let R = 0; R < C.length; R++) {
        const L = C[R], K = ["itemprop", "property", "name"].map((F) => L.getAttribute(F)).filter((F) => F ? I.includes(F) : !1);
        if (K.length && K) {
          const F = L.getAttribute("content");
          if (F)
            return F;
        }
      }
      return "";
    }
    function f() {
      let I = a("name", "og:site_name", "og:title", "twitter:title");
      return I || (I = t.title), I;
    }
    function h() {
      return a("description", "og:description", "twitter:description", "keywords");
    }
    const p = f(), u = h(), m = i.origin, A = s();
    return {
      description: u,
      url: m,
      icons: A,
      name: p
    };
  }
  return Qa.getWindowMetadata = e, Qa;
}
var n4 = i4(), sh = {}, ah, Cp;
function s4() {
  return Cp || (Cp = 1, ah = (r) => encodeURIComponent(r).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`)), ah;
}
var oh, Op;
function a4() {
  if (Op) return oh;
  Op = 1;
  var r = "%[a-f0-9]{2}", e = new RegExp("(" + r + ")|([^%]+?)", "gi"), t = new RegExp("(" + r + ")+", "gi");
  function i(f, h) {
    try {
      return [decodeURIComponent(f.join(""))];
    } catch {
    }
    if (f.length === 1)
      return f;
    h = h || 1;
    var p = f.slice(0, h), u = f.slice(h);
    return Array.prototype.concat.call([], i(p), i(u));
  }
  function s(f) {
    try {
      return decodeURIComponent(f);
    } catch {
      for (var h = f.match(e) || [], p = 1; p < h.length; p++)
        f = i(h, p).join(""), h = f.match(e) || [];
      return f;
    }
  }
  function a(f) {
    for (var h = {
      "%FE%FF": "��",
      "%FF%FE": "��"
    }, p = t.exec(f); p; ) {
      try {
        h[p[0]] = decodeURIComponent(p[0]);
      } catch {
        var u = s(p[0]);
        u !== p[0] && (h[p[0]] = u);
      }
      p = t.exec(f);
    }
    h["%C2"] = "�";
    for (var m = Object.keys(h), A = 0; A < m.length; A++) {
      var M = m[A];
      f = f.replace(new RegExp(M, "g"), h[M]);
    }
    return f;
  }
  return oh = function(f) {
    if (typeof f != "string")
      throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof f + "`");
    try {
      return f = f.replace(/\+/g, " "), decodeURIComponent(f);
    } catch {
      return a(f);
    }
  }, oh;
}
var ch, Rp;
function o4() {
  return Rp || (Rp = 1, ch = (r, e) => {
    if (!(typeof r == "string" && typeof e == "string"))
      throw new TypeError("Expected the arguments to be of type `string`");
    if (e === "")
      return [r];
    const t = r.indexOf(e);
    return t === -1 ? [r] : [
      r.slice(0, t),
      r.slice(t + e.length)
    ];
  }), ch;
}
var uh, Np;
function c4() {
  return Np || (Np = 1, uh = function(r, e) {
    for (var t = {}, i = Object.keys(r), s = Array.isArray(e), a = 0; a < i.length; a++) {
      var f = i[a], h = r[f];
      (s ? e.indexOf(f) !== -1 : e(f, h, r)) && (t[f] = h);
    }
    return t;
  }), uh;
}
var Tp;
function u4() {
  return Tp || (Tp = 1, function(r) {
    const e = s4(), t = a4(), i = o4(), s = c4(), a = (F) => F == null, f = Symbol("encodeFragmentIdentifier");
    function h(F) {
      switch (F.arrayFormat) {
        case "index":
          return (V) => (B, z) => {
            const q = B.length;
            return z === void 0 || F.skipNull && z === null || F.skipEmptyString && z === "" ? B : z === null ? [...B, [m(V, F), "[", q, "]"].join("")] : [
              ...B,
              [m(V, F), "[", m(q, F), "]=", m(z, F)].join("")
            ];
          };
        case "bracket":
          return (V) => (B, z) => z === void 0 || F.skipNull && z === null || F.skipEmptyString && z === "" ? B : z === null ? [...B, [m(V, F), "[]"].join("")] : [...B, [m(V, F), "[]=", m(z, F)].join("")];
        case "colon-list-separator":
          return (V) => (B, z) => z === void 0 || F.skipNull && z === null || F.skipEmptyString && z === "" ? B : z === null ? [...B, [m(V, F), ":list="].join("")] : [...B, [m(V, F), ":list=", m(z, F)].join("")];
        case "comma":
        case "separator":
        case "bracket-separator": {
          const V = F.arrayFormat === "bracket-separator" ? "[]=" : "=";
          return (B) => (z, q) => q === void 0 || F.skipNull && q === null || F.skipEmptyString && q === "" ? z : (q = q === null ? "" : q, z.length === 0 ? [[m(B, F), V, m(q, F)].join("")] : [[z, m(q, F)].join(F.arrayFormatSeparator)]);
        }
        default:
          return (V) => (B, z) => z === void 0 || F.skipNull && z === null || F.skipEmptyString && z === "" ? B : z === null ? [...B, m(V, F)] : [...B, [m(V, F), "=", m(z, F)].join("")];
      }
    }
    function p(F) {
      let V;
      switch (F.arrayFormat) {
        case "index":
          return (B, z, q) => {
            if (V = /\[(\d*)\]$/.exec(B), B = B.replace(/\[\d*\]$/, ""), !V) {
              q[B] = z;
              return;
            }
            q[B] === void 0 && (q[B] = {}), q[B][V[1]] = z;
          };
        case "bracket":
          return (B, z, q) => {
            if (V = /(\[\])$/.exec(B), B = B.replace(/\[\]$/, ""), !V) {
              q[B] = z;
              return;
            }
            if (q[B] === void 0) {
              q[B] = [z];
              return;
            }
            q[B] = [].concat(q[B], z);
          };
        case "colon-list-separator":
          return (B, z, q) => {
            if (V = /(:list)$/.exec(B), B = B.replace(/:list$/, ""), !V) {
              q[B] = z;
              return;
            }
            if (q[B] === void 0) {
              q[B] = [z];
              return;
            }
            q[B] = [].concat(q[B], z);
          };
        case "comma":
        case "separator":
          return (B, z, q) => {
            const E = typeof z == "string" && z.includes(F.arrayFormatSeparator), U = typeof z == "string" && !E && A(z, F).includes(F.arrayFormatSeparator);
            z = U ? A(z, F) : z;
            const ee = E || U ? z.split(F.arrayFormatSeparator).map((ae) => A(ae, F)) : z === null ? z : A(z, F);
            q[B] = ee;
          };
        case "bracket-separator":
          return (B, z, q) => {
            const E = /(\[\])$/.test(B);
            if (B = B.replace(/\[\]$/, ""), !E) {
              q[B] = z && A(z, F);
              return;
            }
            const U = z === null ? [] : z.split(F.arrayFormatSeparator).map((ee) => A(ee, F));
            if (q[B] === void 0) {
              q[B] = U;
              return;
            }
            q[B] = [].concat(q[B], U);
          };
        default:
          return (B, z, q) => {
            if (q[B] === void 0) {
              q[B] = z;
              return;
            }
            q[B] = [].concat(q[B], z);
          };
      }
    }
    function u(F) {
      if (typeof F != "string" || F.length !== 1)
        throw new TypeError("arrayFormatSeparator must be single character string");
    }
    function m(F, V) {
      return V.encode ? V.strict ? e(F) : encodeURIComponent(F) : F;
    }
    function A(F, V) {
      return V.decode ? t(F) : F;
    }
    function M(F) {
      return Array.isArray(F) ? F.sort() : typeof F == "object" ? M(Object.keys(F)).sort((V, B) => Number(V) - Number(B)).map((V) => F[V]) : F;
    }
    function I(F) {
      const V = F.indexOf("#");
      return V !== -1 && (F = F.slice(0, V)), F;
    }
    function C(F) {
      let V = "";
      const B = F.indexOf("#");
      return B !== -1 && (V = F.slice(B)), V;
    }
    function R(F) {
      F = I(F);
      const V = F.indexOf("?");
      return V === -1 ? "" : F.slice(V + 1);
    }
    function L(F, V) {
      return V.parseNumbers && !Number.isNaN(Number(F)) && typeof F == "string" && F.trim() !== "" ? F = Number(F) : V.parseBooleans && F !== null && (F.toLowerCase() === "true" || F.toLowerCase() === "false") && (F = F.toLowerCase() === "true"), F;
    }
    function K(F, V) {
      V = Object.assign({
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1
      }, V), u(V.arrayFormatSeparator);
      const B = p(V), z = /* @__PURE__ */ Object.create(null);
      if (typeof F != "string" || (F = F.trim().replace(/^[?#&]/, ""), !F))
        return z;
      for (const q of F.split("&")) {
        if (q === "")
          continue;
        let [E, U] = i(V.decode ? q.replace(/\+/g, " ") : q, "=");
        U = U === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(V.arrayFormat) ? U : A(U, V), B(A(E, V), U, z);
      }
      for (const q of Object.keys(z)) {
        const E = z[q];
        if (typeof E == "object" && E !== null)
          for (const U of Object.keys(E))
            E[U] = L(E[U], V);
        else
          z[q] = L(E, V);
      }
      return V.sort === !1 ? z : (V.sort === !0 ? Object.keys(z).sort() : Object.keys(z).sort(V.sort)).reduce((q, E) => {
        const U = z[E];
        return U && typeof U == "object" && !Array.isArray(U) ? q[E] = M(U) : q[E] = U, q;
      }, /* @__PURE__ */ Object.create(null));
    }
    r.extract = R, r.parse = K, r.stringify = (F, V) => {
      if (!F)
        return "";
      V = Object.assign({
        encode: !0,
        strict: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ","
      }, V), u(V.arrayFormatSeparator);
      const B = (U) => V.skipNull && a(F[U]) || V.skipEmptyString && F[U] === "", z = h(V), q = {};
      for (const U of Object.keys(F))
        B(U) || (q[U] = F[U]);
      const E = Object.keys(q);
      return V.sort !== !1 && E.sort(V.sort), E.map((U) => {
        const ee = F[U];
        return ee === void 0 ? "" : ee === null ? m(U, V) : Array.isArray(ee) ? ee.length === 0 && V.arrayFormat === "bracket-separator" ? m(U, V) + "[]" : ee.reduce(z(U), []).join("&") : m(U, V) + "=" + m(ee, V);
      }).filter((U) => U.length > 0).join("&");
    }, r.parseUrl = (F, V) => {
      V = Object.assign({
        decode: !0
      }, V);
      const [B, z] = i(F, "#");
      return Object.assign(
        {
          url: B.split("?")[0] || "",
          query: K(R(F), V)
        },
        V && V.parseFragmentIdentifier && z ? { fragmentIdentifier: A(z, V) } : {}
      );
    }, r.stringifyUrl = (F, V) => {
      V = Object.assign({
        encode: !0,
        strict: !0,
        [f]: !0
      }, V);
      const B = I(F.url).split("?")[0] || "", z = r.extract(F.url), q = r.parse(z, { sort: !1 }), E = Object.assign(q, F.query);
      let U = r.stringify(E, V);
      U && (U = `?${U}`);
      let ee = C(F.url);
      return F.fragmentIdentifier && (ee = `#${V[f] ? m(F.fragmentIdentifier, V) : F.fragmentIdentifier}`), `${B}${U}${ee}`;
    }, r.pick = (F, V, B) => {
      B = Object.assign({
        parseFragmentIdentifier: !0,
        [f]: !1
      }, B);
      const { url: z, query: q, fragmentIdentifier: E } = r.parseUrl(F, B);
      return r.stringifyUrl({
        url: z,
        query: s(q, V),
        fragmentIdentifier: E
      }, B);
    }, r.exclude = (F, V, B) => {
      const z = Array.isArray(V) ? (q) => !V.includes(q) : (q, E) => !V(q, E);
      return r.pick(F, z, B);
    };
  }(sh)), sh;
}
var bu = u4(), fh = {}, Xa = {}, At = {}, hh = {}, qp;
function f4() {
  return qp || (qp = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 });
    function e(h, p) {
      var u = h >>> 16 & 65535, m = h & 65535, A = p >>> 16 & 65535, M = p & 65535;
      return m * M + (u * M + m * A << 16 >>> 0) | 0;
    }
    r.mul = Math.imul || e;
    function t(h, p) {
      return h + p | 0;
    }
    r.add = t;
    function i(h, p) {
      return h - p | 0;
    }
    r.sub = i;
    function s(h, p) {
      return h << p | h >>> 32 - p;
    }
    r.rotl = s;
    function a(h, p) {
      return h << 32 - p | h >>> p;
    }
    r.rotr = a;
    function f(h) {
      return typeof h == "number" && isFinite(h) && Math.floor(h) === h;
    }
    r.isInteger = Number.isInteger || f, r.MAX_SAFE_INTEGER = 9007199254740991, r.isSafeInteger = function(h) {
      return r.isInteger(h) && h >= -r.MAX_SAFE_INTEGER && h <= r.MAX_SAFE_INTEGER;
    };
  }(hh)), hh;
}
var Fp;
function Po() {
  if (Fp) return At;
  Fp = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  var r = f4();
  function e(l, b) {
    return b === void 0 && (b = 0), (l[b + 0] << 8 | l[b + 1]) << 16 >> 16;
  }
  At.readInt16BE = e;
  function t(l, b) {
    return b === void 0 && (b = 0), (l[b + 0] << 8 | l[b + 1]) >>> 0;
  }
  At.readUint16BE = t;
  function i(l, b) {
    return b === void 0 && (b = 0), (l[b + 1] << 8 | l[b]) << 16 >> 16;
  }
  At.readInt16LE = i;
  function s(l, b) {
    return b === void 0 && (b = 0), (l[b + 1] << 8 | l[b]) >>> 0;
  }
  At.readUint16LE = s;
  function a(l, b, _) {
    return b === void 0 && (b = new Uint8Array(2)), _ === void 0 && (_ = 0), b[_ + 0] = l >>> 8, b[_ + 1] = l >>> 0, b;
  }
  At.writeUint16BE = a, At.writeInt16BE = a;
  function f(l, b, _) {
    return b === void 0 && (b = new Uint8Array(2)), _ === void 0 && (_ = 0), b[_ + 0] = l >>> 0, b[_ + 1] = l >>> 8, b;
  }
  At.writeUint16LE = f, At.writeInt16LE = f;
  function h(l, b) {
    return b === void 0 && (b = 0), l[b] << 24 | l[b + 1] << 16 | l[b + 2] << 8 | l[b + 3];
  }
  At.readInt32BE = h;
  function p(l, b) {
    return b === void 0 && (b = 0), (l[b] << 24 | l[b + 1] << 16 | l[b + 2] << 8 | l[b + 3]) >>> 0;
  }
  At.readUint32BE = p;
  function u(l, b) {
    return b === void 0 && (b = 0), l[b + 3] << 24 | l[b + 2] << 16 | l[b + 1] << 8 | l[b];
  }
  At.readInt32LE = u;
  function m(l, b) {
    return b === void 0 && (b = 0), (l[b + 3] << 24 | l[b + 2] << 16 | l[b + 1] << 8 | l[b]) >>> 0;
  }
  At.readUint32LE = m;
  function A(l, b, _) {
    return b === void 0 && (b = new Uint8Array(4)), _ === void 0 && (_ = 0), b[_ + 0] = l >>> 24, b[_ + 1] = l >>> 16, b[_ + 2] = l >>> 8, b[_ + 3] = l >>> 0, b;
  }
  At.writeUint32BE = A, At.writeInt32BE = A;
  function M(l, b, _) {
    return b === void 0 && (b = new Uint8Array(4)), _ === void 0 && (_ = 0), b[_ + 0] = l >>> 0, b[_ + 1] = l >>> 8, b[_ + 2] = l >>> 16, b[_ + 3] = l >>> 24, b;
  }
  At.writeUint32LE = M, At.writeInt32LE = M;
  function I(l, b) {
    b === void 0 && (b = 0);
    var _ = h(l, b), D = h(l, b + 4);
    return _ * 4294967296 + D - (D >> 31) * 4294967296;
  }
  At.readInt64BE = I;
  function C(l, b) {
    b === void 0 && (b = 0);
    var _ = p(l, b), D = p(l, b + 4);
    return _ * 4294967296 + D;
  }
  At.readUint64BE = C;
  function R(l, b) {
    b === void 0 && (b = 0);
    var _ = u(l, b), D = u(l, b + 4);
    return D * 4294967296 + _ - (_ >> 31) * 4294967296;
  }
  At.readInt64LE = R;
  function L(l, b) {
    b === void 0 && (b = 0);
    var _ = m(l, b), D = m(l, b + 4);
    return D * 4294967296 + _;
  }
  At.readUint64LE = L;
  function K(l, b, _) {
    return b === void 0 && (b = new Uint8Array(8)), _ === void 0 && (_ = 0), A(l / 4294967296 >>> 0, b, _), A(l >>> 0, b, _ + 4), b;
  }
  At.writeUint64BE = K, At.writeInt64BE = K;
  function F(l, b, _) {
    return b === void 0 && (b = new Uint8Array(8)), _ === void 0 && (_ = 0), M(l >>> 0, b, _), M(l / 4294967296 >>> 0, b, _ + 4), b;
  }
  At.writeUint64LE = F, At.writeInt64LE = F;
  function V(l, b, _) {
    if (_ === void 0 && (_ = 0), l % 8 !== 0)
      throw new Error("readUintBE supports only bitLengths divisible by 8");
    if (l / 8 > b.length - _)
      throw new Error("readUintBE: array is too short for the given bitLength");
    for (var D = 0, x = 1, g = l / 8 + _ - 1; g >= _; g--)
      D += b[g] * x, x *= 256;
    return D;
  }
  At.readUintBE = V;
  function B(l, b, _) {
    if (_ === void 0 && (_ = 0), l % 8 !== 0)
      throw new Error("readUintLE supports only bitLengths divisible by 8");
    if (l / 8 > b.length - _)
      throw new Error("readUintLE: array is too short for the given bitLength");
    for (var D = 0, x = 1, g = _; g < _ + l / 8; g++)
      D += b[g] * x, x *= 256;
    return D;
  }
  At.readUintLE = B;
  function z(l, b, _, D) {
    if (_ === void 0 && (_ = new Uint8Array(l / 8)), D === void 0 && (D = 0), l % 8 !== 0)
      throw new Error("writeUintBE supports only bitLengths divisible by 8");
    if (!r.isSafeInteger(b))
      throw new Error("writeUintBE value must be an integer");
    for (var x = 1, g = l / 8 + D - 1; g >= D; g--)
      _[g] = b / x & 255, x *= 256;
    return _;
  }
  At.writeUintBE = z;
  function q(l, b, _, D) {
    if (_ === void 0 && (_ = new Uint8Array(l / 8)), D === void 0 && (D = 0), l % 8 !== 0)
      throw new Error("writeUintLE supports only bitLengths divisible by 8");
    if (!r.isSafeInteger(b))
      throw new Error("writeUintLE value must be an integer");
    for (var x = 1, g = D; g < D + l / 8; g++)
      _[g] = b / x & 255, x *= 256;
    return _;
  }
  At.writeUintLE = q;
  function E(l, b) {
    b === void 0 && (b = 0);
    var _ = new DataView(l.buffer, l.byteOffset, l.byteLength);
    return _.getFloat32(b);
  }
  At.readFloat32BE = E;
  function U(l, b) {
    b === void 0 && (b = 0);
    var _ = new DataView(l.buffer, l.byteOffset, l.byteLength);
    return _.getFloat32(b, !0);
  }
  At.readFloat32LE = U;
  function ee(l, b) {
    b === void 0 && (b = 0);
    var _ = new DataView(l.buffer, l.byteOffset, l.byteLength);
    return _.getFloat64(b);
  }
  At.readFloat64BE = ee;
  function ae(l, b) {
    b === void 0 && (b = 0);
    var _ = new DataView(l.buffer, l.byteOffset, l.byteLength);
    return _.getFloat64(b, !0);
  }
  At.readFloat64LE = ae;
  function j(l, b, _) {
    b === void 0 && (b = new Uint8Array(4)), _ === void 0 && (_ = 0);
    var D = new DataView(b.buffer, b.byteOffset, b.byteLength);
    return D.setFloat32(_, l), b;
  }
  At.writeFloat32BE = j;
  function w(l, b, _) {
    b === void 0 && (b = new Uint8Array(4)), _ === void 0 && (_ = 0);
    var D = new DataView(b.buffer, b.byteOffset, b.byteLength);
    return D.setFloat32(_, l, !0), b;
  }
  At.writeFloat32LE = w;
  function c(l, b, _) {
    b === void 0 && (b = new Uint8Array(8)), _ === void 0 && (_ = 0);
    var D = new DataView(b.buffer, b.byteOffset, b.byteLength);
    return D.setFloat64(_, l), b;
  }
  At.writeFloat64BE = c;
  function d(l, b, _) {
    b === void 0 && (b = new Uint8Array(8)), _ === void 0 && (_ = 0);
    var D = new DataView(b.buffer, b.byteOffset, b.byteLength);
    return D.setFloat64(_, l, !0), b;
  }
  return At.writeFloat64LE = d, At;
}
var Hc = {}, Bp;
function Zi() {
  if (Bp) return Hc;
  Bp = 1, Object.defineProperty(Hc, "__esModule", { value: !0 });
  function r(e) {
    for (var t = 0; t < e.length; t++)
      e[t] = 0;
    return e;
  }
  return Hc.wipe = r, Hc;
}
var Lp;
function h4() {
  if (Lp) return Xa;
  Lp = 1, Object.defineProperty(Xa, "__esModule", { value: !0 });
  var r = Po(), e = Zi(), t = 20;
  function i(h, p, u) {
    for (var m = 1634760805, A = 857760878, M = 2036477234, I = 1797285236, C = u[3] << 24 | u[2] << 16 | u[1] << 8 | u[0], R = u[7] << 24 | u[6] << 16 | u[5] << 8 | u[4], L = u[11] << 24 | u[10] << 16 | u[9] << 8 | u[8], K = u[15] << 24 | u[14] << 16 | u[13] << 8 | u[12], F = u[19] << 24 | u[18] << 16 | u[17] << 8 | u[16], V = u[23] << 24 | u[22] << 16 | u[21] << 8 | u[20], B = u[27] << 24 | u[26] << 16 | u[25] << 8 | u[24], z = u[31] << 24 | u[30] << 16 | u[29] << 8 | u[28], q = p[3] << 24 | p[2] << 16 | p[1] << 8 | p[0], E = p[7] << 24 | p[6] << 16 | p[5] << 8 | p[4], U = p[11] << 24 | p[10] << 16 | p[9] << 8 | p[8], ee = p[15] << 24 | p[14] << 16 | p[13] << 8 | p[12], ae = m, j = A, w = M, c = I, d = C, l = R, b = L, _ = K, D = F, x = V, g = B, y = z, N = q, Q = E, Z = U, O = ee, te = 0; te < t; te += 2)
      ae = ae + d | 0, N ^= ae, N = N >>> 16 | N << 16, D = D + N | 0, d ^= D, d = d >>> 20 | d << 12, j = j + l | 0, Q ^= j, Q = Q >>> 16 | Q << 16, x = x + Q | 0, l ^= x, l = l >>> 20 | l << 12, w = w + b | 0, Z ^= w, Z = Z >>> 16 | Z << 16, g = g + Z | 0, b ^= g, b = b >>> 20 | b << 12, c = c + _ | 0, O ^= c, O = O >>> 16 | O << 16, y = y + O | 0, _ ^= y, _ = _ >>> 20 | _ << 12, w = w + b | 0, Z ^= w, Z = Z >>> 24 | Z << 8, g = g + Z | 0, b ^= g, b = b >>> 25 | b << 7, c = c + _ | 0, O ^= c, O = O >>> 24 | O << 8, y = y + O | 0, _ ^= y, _ = _ >>> 25 | _ << 7, j = j + l | 0, Q ^= j, Q = Q >>> 24 | Q << 8, x = x + Q | 0, l ^= x, l = l >>> 25 | l << 7, ae = ae + d | 0, N ^= ae, N = N >>> 24 | N << 8, D = D + N | 0, d ^= D, d = d >>> 25 | d << 7, ae = ae + l | 0, O ^= ae, O = O >>> 16 | O << 16, g = g + O | 0, l ^= g, l = l >>> 20 | l << 12, j = j + b | 0, N ^= j, N = N >>> 16 | N << 16, y = y + N | 0, b ^= y, b = b >>> 20 | b << 12, w = w + _ | 0, Q ^= w, Q = Q >>> 16 | Q << 16, D = D + Q | 0, _ ^= D, _ = _ >>> 20 | _ << 12, c = c + d | 0, Z ^= c, Z = Z >>> 16 | Z << 16, x = x + Z | 0, d ^= x, d = d >>> 20 | d << 12, w = w + _ | 0, Q ^= w, Q = Q >>> 24 | Q << 8, D = D + Q | 0, _ ^= D, _ = _ >>> 25 | _ << 7, c = c + d | 0, Z ^= c, Z = Z >>> 24 | Z << 8, x = x + Z | 0, d ^= x, d = d >>> 25 | d << 7, j = j + b | 0, N ^= j, N = N >>> 24 | N << 8, y = y + N | 0, b ^= y, b = b >>> 25 | b << 7, ae = ae + l | 0, O ^= ae, O = O >>> 24 | O << 8, g = g + O | 0, l ^= g, l = l >>> 25 | l << 7;
    r.writeUint32LE(ae + m | 0, h, 0), r.writeUint32LE(j + A | 0, h, 4), r.writeUint32LE(w + M | 0, h, 8), r.writeUint32LE(c + I | 0, h, 12), r.writeUint32LE(d + C | 0, h, 16), r.writeUint32LE(l + R | 0, h, 20), r.writeUint32LE(b + L | 0, h, 24), r.writeUint32LE(_ + K | 0, h, 28), r.writeUint32LE(D + F | 0, h, 32), r.writeUint32LE(x + V | 0, h, 36), r.writeUint32LE(g + B | 0, h, 40), r.writeUint32LE(y + z | 0, h, 44), r.writeUint32LE(N + q | 0, h, 48), r.writeUint32LE(Q + E | 0, h, 52), r.writeUint32LE(Z + U | 0, h, 56), r.writeUint32LE(O + ee | 0, h, 60);
  }
  function s(h, p, u, m, A) {
    if (A === void 0 && (A = 0), h.length !== 32)
      throw new Error("ChaCha: key size must be 32 bytes");
    if (m.length < u.length)
      throw new Error("ChaCha: destination is shorter than source");
    var M, I;
    if (A === 0) {
      if (p.length !== 8 && p.length !== 12)
        throw new Error("ChaCha nonce must be 8 or 12 bytes");
      M = new Uint8Array(16), I = M.length - p.length, M.set(p, I);
    } else {
      if (p.length !== 16)
        throw new Error("ChaCha nonce with counter must be 16 bytes");
      M = p, I = A;
    }
    for (var C = new Uint8Array(64), R = 0; R < u.length; R += 64) {
      i(C, M, h);
      for (var L = R; L < R + 64 && L < u.length; L++)
        m[L] = u[L] ^ C[L - R];
      f(M, 0, I);
    }
    return e.wipe(C), A === 0 && e.wipe(M), m;
  }
  Xa.streamXOR = s;
  function a(h, p, u, m) {
    return m === void 0 && (m = 0), e.wipe(u), s(h, p, u, u, m);
  }
  Xa.stream = a;
  function f(h, p, u) {
    for (var m = 1; u--; )
      m = m + (h[p] & 255) | 0, h[p] = m & 255, m >>>= 8, p++;
    if (m > 0)
      throw new Error("ChaCha: counter overflow");
  }
  return Xa;
}
var lh = {}, Is = {}, Up;
function Gl() {
  if (Up) return Is;
  Up = 1, Object.defineProperty(Is, "__esModule", { value: !0 });
  function r(s, a, f) {
    return ~(s - 1) & a | s - 1 & f;
  }
  Is.select = r;
  function e(s, a) {
    return (s | 0) - (a | 0) - 1 >>> 31 & 1;
  }
  Is.lessOrEqual = e;
  function t(s, a) {
    if (s.length !== a.length)
      return 0;
    for (var f = 0, h = 0; h < s.length; h++)
      f |= s[h] ^ a[h];
    return 1 & f - 1 >>> 8;
  }
  Is.compare = t;
  function i(s, a) {
    return s.length === 0 || a.length === 0 ? !1 : t(s, a) !== 0;
  }
  return Is.equal = i, Is;
}
var zp;
function l4() {
  return zp || (zp = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 });
    var e = Gl(), t = Zi();
    r.DIGEST_LENGTH = 16;
    var i = (
      /** @class */
      function() {
        function f(h) {
          this.digestLength = r.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
          var p = h[0] | h[1] << 8;
          this._r[0] = p & 8191;
          var u = h[2] | h[3] << 8;
          this._r[1] = (p >>> 13 | u << 3) & 8191;
          var m = h[4] | h[5] << 8;
          this._r[2] = (u >>> 10 | m << 6) & 7939;
          var A = h[6] | h[7] << 8;
          this._r[3] = (m >>> 7 | A << 9) & 8191;
          var M = h[8] | h[9] << 8;
          this._r[4] = (A >>> 4 | M << 12) & 255, this._r[5] = M >>> 1 & 8190;
          var I = h[10] | h[11] << 8;
          this._r[6] = (M >>> 14 | I << 2) & 8191;
          var C = h[12] | h[13] << 8;
          this._r[7] = (I >>> 11 | C << 5) & 8065;
          var R = h[14] | h[15] << 8;
          this._r[8] = (C >>> 8 | R << 8) & 8191, this._r[9] = R >>> 5 & 127, this._pad[0] = h[16] | h[17] << 8, this._pad[1] = h[18] | h[19] << 8, this._pad[2] = h[20] | h[21] << 8, this._pad[3] = h[22] | h[23] << 8, this._pad[4] = h[24] | h[25] << 8, this._pad[5] = h[26] | h[27] << 8, this._pad[6] = h[28] | h[29] << 8, this._pad[7] = h[30] | h[31] << 8;
        }
        return f.prototype._blocks = function(h, p, u) {
          for (var m = this._fin ? 0 : 2048, A = this._h[0], M = this._h[1], I = this._h[2], C = this._h[3], R = this._h[4], L = this._h[5], K = this._h[6], F = this._h[7], V = this._h[8], B = this._h[9], z = this._r[0], q = this._r[1], E = this._r[2], U = this._r[3], ee = this._r[4], ae = this._r[5], j = this._r[6], w = this._r[7], c = this._r[8], d = this._r[9]; u >= 16; ) {
            var l = h[p + 0] | h[p + 1] << 8;
            A += l & 8191;
            var b = h[p + 2] | h[p + 3] << 8;
            M += (l >>> 13 | b << 3) & 8191;
            var _ = h[p + 4] | h[p + 5] << 8;
            I += (b >>> 10 | _ << 6) & 8191;
            var D = h[p + 6] | h[p + 7] << 8;
            C += (_ >>> 7 | D << 9) & 8191;
            var x = h[p + 8] | h[p + 9] << 8;
            R += (D >>> 4 | x << 12) & 8191, L += x >>> 1 & 8191;
            var g = h[p + 10] | h[p + 11] << 8;
            K += (x >>> 14 | g << 2) & 8191;
            var y = h[p + 12] | h[p + 13] << 8;
            F += (g >>> 11 | y << 5) & 8191;
            var N = h[p + 14] | h[p + 15] << 8;
            V += (y >>> 8 | N << 8) & 8191, B += N >>> 5 | m;
            var Q = 0, Z = Q;
            Z += A * z, Z += M * (5 * d), Z += I * (5 * c), Z += C * (5 * w), Z += R * (5 * j), Q = Z >>> 13, Z &= 8191, Z += L * (5 * ae), Z += K * (5 * ee), Z += F * (5 * U), Z += V * (5 * E), Z += B * (5 * q), Q += Z >>> 13, Z &= 8191;
            var O = Q;
            O += A * q, O += M * z, O += I * (5 * d), O += C * (5 * c), O += R * (5 * w), Q = O >>> 13, O &= 8191, O += L * (5 * j), O += K * (5 * ae), O += F * (5 * ee), O += V * (5 * U), O += B * (5 * E), Q += O >>> 13, O &= 8191;
            var te = Q;
            te += A * E, te += M * q, te += I * z, te += C * (5 * d), te += R * (5 * c), Q = te >>> 13, te &= 8191, te += L * (5 * w), te += K * (5 * j), te += F * (5 * ae), te += V * (5 * ee), te += B * (5 * U), Q += te >>> 13, te &= 8191;
            var k = Q;
            k += A * U, k += M * E, k += I * q, k += C * z, k += R * (5 * d), Q = k >>> 13, k &= 8191, k += L * (5 * c), k += K * (5 * w), k += F * (5 * j), k += V * (5 * ae), k += B * (5 * ee), Q += k >>> 13, k &= 8191;
            var W = Q;
            W += A * ee, W += M * U, W += I * E, W += C * q, W += R * z, Q = W >>> 13, W &= 8191, W += L * (5 * d), W += K * (5 * c), W += F * (5 * w), W += V * (5 * j), W += B * (5 * ae), Q += W >>> 13, W &= 8191;
            var J = Q;
            J += A * ae, J += M * ee, J += I * U, J += C * E, J += R * q, Q = J >>> 13, J &= 8191, J += L * z, J += K * (5 * d), J += F * (5 * c), J += V * (5 * w), J += B * (5 * j), Q += J >>> 13, J &= 8191;
            var S = Q;
            S += A * j, S += M * ae, S += I * ee, S += C * U, S += R * E, Q = S >>> 13, S &= 8191, S += L * q, S += K * z, S += F * (5 * d), S += V * (5 * c), S += B * (5 * w), Q += S >>> 13, S &= 8191;
            var G = Q;
            G += A * w, G += M * j, G += I * ae, G += C * ee, G += R * U, Q = G >>> 13, G &= 8191, G += L * E, G += K * q, G += F * z, G += V * (5 * d), G += B * (5 * c), Q += G >>> 13, G &= 8191;
            var oe = Q;
            oe += A * c, oe += M * w, oe += I * j, oe += C * ae, oe += R * ee, Q = oe >>> 13, oe &= 8191, oe += L * U, oe += K * E, oe += F * q, oe += V * z, oe += B * (5 * d), Q += oe >>> 13, oe &= 8191;
            var ce = Q;
            ce += A * d, ce += M * c, ce += I * w, ce += C * j, ce += R * ae, Q = ce >>> 13, ce &= 8191, ce += L * ee, ce += K * U, ce += F * E, ce += V * q, ce += B * z, Q += ce >>> 13, ce &= 8191, Q = (Q << 2) + Q | 0, Q = Q + Z | 0, Z = Q & 8191, Q = Q >>> 13, O += Q, A = Z, M = O, I = te, C = k, R = W, L = J, K = S, F = G, V = oe, B = ce, p += 16, u -= 16;
          }
          this._h[0] = A, this._h[1] = M, this._h[2] = I, this._h[3] = C, this._h[4] = R, this._h[5] = L, this._h[6] = K, this._h[7] = F, this._h[8] = V, this._h[9] = B;
        }, f.prototype.finish = function(h, p) {
          p === void 0 && (p = 0);
          var u = new Uint16Array(10), m, A, M, I;
          if (this._leftover) {
            for (I = this._leftover, this._buffer[I++] = 1; I < 16; I++)
              this._buffer[I] = 0;
            this._fin = 1, this._blocks(this._buffer, 0, 16);
          }
          for (m = this._h[1] >>> 13, this._h[1] &= 8191, I = 2; I < 10; I++)
            this._h[I] += m, m = this._h[I] >>> 13, this._h[I] &= 8191;
          for (this._h[0] += m * 5, m = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += m, m = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += m, u[0] = this._h[0] + 5, m = u[0] >>> 13, u[0] &= 8191, I = 1; I < 10; I++)
            u[I] = this._h[I] + m, m = u[I] >>> 13, u[I] &= 8191;
          for (u[9] -= 8192, A = (m ^ 1) - 1, I = 0; I < 10; I++)
            u[I] &= A;
          for (A = ~A, I = 0; I < 10; I++)
            this._h[I] = this._h[I] & A | u[I];
          for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, M = this._h[0] + this._pad[0], this._h[0] = M & 65535, I = 1; I < 8; I++)
            M = (this._h[I] + this._pad[I] | 0) + (M >>> 16) | 0, this._h[I] = M & 65535;
          return h[p + 0] = this._h[0] >>> 0, h[p + 1] = this._h[0] >>> 8, h[p + 2] = this._h[1] >>> 0, h[p + 3] = this._h[1] >>> 8, h[p + 4] = this._h[2] >>> 0, h[p + 5] = this._h[2] >>> 8, h[p + 6] = this._h[3] >>> 0, h[p + 7] = this._h[3] >>> 8, h[p + 8] = this._h[4] >>> 0, h[p + 9] = this._h[4] >>> 8, h[p + 10] = this._h[5] >>> 0, h[p + 11] = this._h[5] >>> 8, h[p + 12] = this._h[6] >>> 0, h[p + 13] = this._h[6] >>> 8, h[p + 14] = this._h[7] >>> 0, h[p + 15] = this._h[7] >>> 8, this._finished = !0, this;
        }, f.prototype.update = function(h) {
          var p = 0, u = h.length, m;
          if (this._leftover) {
            m = 16 - this._leftover, m > u && (m = u);
            for (var A = 0; A < m; A++)
              this._buffer[this._leftover + A] = h[p + A];
            if (u -= m, p += m, this._leftover += m, this._leftover < 16)
              return this;
            this._blocks(this._buffer, 0, 16), this._leftover = 0;
          }
          if (u >= 16 && (m = u - u % 16, this._blocks(h, p, m), p += m, u -= m), u) {
            for (var A = 0; A < u; A++)
              this._buffer[this._leftover + A] = h[p + A];
            this._leftover += u;
          }
          return this;
        }, f.prototype.digest = function() {
          if (this._finished)
            throw new Error("Poly1305 was finished");
          var h = new Uint8Array(16);
          return this.finish(h), h;
        }, f.prototype.clean = function() {
          return t.wipe(this._buffer), t.wipe(this._r), t.wipe(this._h), t.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this;
        }, f;
      }()
    );
    r.Poly1305 = i;
    function s(f, h) {
      var p = new i(f);
      p.update(h);
      var u = p.digest();
      return p.clean(), u;
    }
    r.oneTimeAuth = s;
    function a(f, h) {
      return f.length !== r.DIGEST_LENGTH || h.length !== r.DIGEST_LENGTH ? !1 : e.equal(f, h);
    }
    r.equal = a;
  }(lh)), lh;
}
var jp;
function d4() {
  return jp || (jp = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 });
    var e = h4(), t = l4(), i = Zi(), s = Po(), a = Gl();
    r.KEY_LENGTH = 32, r.NONCE_LENGTH = 12, r.TAG_LENGTH = 16;
    var f = new Uint8Array(16), h = (
      /** @class */
      function() {
        function p(u) {
          if (this.nonceLength = r.NONCE_LENGTH, this.tagLength = r.TAG_LENGTH, u.length !== r.KEY_LENGTH)
            throw new Error("ChaCha20Poly1305 needs 32-byte key");
          this._key = new Uint8Array(u);
        }
        return p.prototype.seal = function(u, m, A, M) {
          if (u.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          var I = new Uint8Array(16);
          I.set(u, I.length - u.length);
          var C = new Uint8Array(32);
          e.stream(this._key, I, C, 4);
          var R = m.length + this.tagLength, L;
          if (M) {
            if (M.length !== R)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            L = M;
          } else
            L = new Uint8Array(R);
          return e.streamXOR(this._key, I, m, L, 4), this._authenticate(L.subarray(L.length - this.tagLength, L.length), C, L.subarray(0, L.length - this.tagLength), A), i.wipe(I), L;
        }, p.prototype.open = function(u, m, A, M) {
          if (u.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          if (m.length < this.tagLength)
            return null;
          var I = new Uint8Array(16);
          I.set(u, I.length - u.length);
          var C = new Uint8Array(32);
          e.stream(this._key, I, C, 4);
          var R = new Uint8Array(this.tagLength);
          if (this._authenticate(R, C, m.subarray(0, m.length - this.tagLength), A), !a.equal(R, m.subarray(m.length - this.tagLength, m.length)))
            return null;
          var L = m.length - this.tagLength, K;
          if (M) {
            if (M.length !== L)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            K = M;
          } else
            K = new Uint8Array(L);
          return e.streamXOR(this._key, I, m.subarray(0, m.length - this.tagLength), K, 4), i.wipe(I), K;
        }, p.prototype.clean = function() {
          return i.wipe(this._key), this;
        }, p.prototype._authenticate = function(u, m, A, M) {
          var I = new t.Poly1305(m);
          M && (I.update(M), M.length % 16 > 0 && I.update(f.subarray(M.length % 16))), I.update(A), A.length % 16 > 0 && I.update(f.subarray(A.length % 16));
          var C = new Uint8Array(8);
          M && s.writeUint64LE(M.length, C), I.update(C), s.writeUint64LE(A.length, C), I.update(C);
          for (var R = I.digest(), L = 0; L < R.length; L++)
            u[L] = R[L];
          I.clean(), i.wipe(R), i.wipe(C);
        }, p;
      }()
    );
    r.ChaCha20Poly1305 = h;
  }(fh)), fh;
}
var kv = d4(), Kc = {}, fa = {}, Vc = {}, $p;
function p4() {
  if ($p) return Vc;
  $p = 1, Object.defineProperty(Vc, "__esModule", { value: !0 });
  function r(e) {
    return typeof e.saveState < "u" && typeof e.restoreState < "u" && typeof e.cleanSavedState < "u";
  }
  return Vc.isSerializableHash = r, Vc;
}
var kp;
function g4() {
  if (kp) return fa;
  kp = 1, Object.defineProperty(fa, "__esModule", { value: !0 });
  var r = p4(), e = Gl(), t = Zi(), i = (
    /** @class */
    function() {
      function a(f, h) {
        this._finished = !1, this._inner = new f(), this._outer = new f(), this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
        var p = new Uint8Array(this.blockSize);
        h.length > this.blockSize ? this._inner.update(h).finish(p).clean() : p.set(h);
        for (var u = 0; u < p.length; u++)
          p[u] ^= 54;
        this._inner.update(p);
        for (var u = 0; u < p.length; u++)
          p[u] ^= 106;
        this._outer.update(p), r.isSerializableHash(this._inner) && r.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), t.wipe(p);
      }
      return a.prototype.reset = function() {
        if (!r.isSerializableHash(this._inner) || !r.isSerializableHash(this._outer))
          throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
        return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
      }, a.prototype.clean = function() {
        r.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), r.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
      }, a.prototype.update = function(f) {
        return this._inner.update(f), this;
      }, a.prototype.finish = function(f) {
        return this._finished ? (this._outer.finish(f), this) : (this._inner.finish(f), this._outer.update(f.subarray(0, this.digestLength)).finish(f), this._finished = !0, this);
      }, a.prototype.digest = function() {
        var f = new Uint8Array(this.digestLength);
        return this.finish(f), f;
      }, a.prototype.saveState = function() {
        if (!r.isSerializableHash(this._inner))
          throw new Error("hmac: can't saveState() because hash doesn't implement it");
        return this._inner.saveState();
      }, a.prototype.restoreState = function(f) {
        if (!r.isSerializableHash(this._inner) || !r.isSerializableHash(this._outer))
          throw new Error("hmac: can't restoreState() because hash doesn't implement it");
        return this._inner.restoreState(f), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
      }, a.prototype.cleanSavedState = function(f) {
        if (!r.isSerializableHash(this._inner))
          throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
        this._inner.cleanSavedState(f);
      }, a;
    }()
  );
  fa.HMAC = i;
  function s(a, f, h) {
    var p = new i(a, f);
    p.update(h);
    var u = p.digest();
    return p.clean(), u;
  }
  return fa.hmac = s, fa.equal = e.equal, fa;
}
var Hp;
function v4() {
  if (Hp) return Kc;
  Hp = 1, Object.defineProperty(Kc, "__esModule", { value: !0 });
  var r = g4(), e = Zi(), t = (
    /** @class */
    function() {
      function i(s, a, f, h) {
        f === void 0 && (f = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = s, this._info = h;
        var p = r.hmac(this._hash, f, a);
        this._hmac = new r.HMAC(s, p), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
      }
      return i.prototype._fillBuffer = function() {
        this._counter[0]++;
        var s = this._counter[0];
        if (s === 0)
          throw new Error("hkdf: cannot expand more");
        this._hmac.reset(), s > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0;
      }, i.prototype.expand = function(s) {
        for (var a = new Uint8Array(s), f = 0; f < a.length; f++)
          this._bufpos === this._buffer.length && this._fillBuffer(), a[f] = this._buffer[this._bufpos++];
        return a;
      }, i.prototype.clean = function() {
        this._hmac.clean(), e.wipe(this._buffer), e.wipe(this._counter), this._bufpos = 0;
      }, i;
    }()
  );
  return Kc.HKDF = t, Kc;
}
var b4 = v4(), dh = {}, Za = {}, eo = {}, Kp;
function m4() {
  if (Kp) return eo;
  Kp = 1, Object.defineProperty(eo, "__esModule", { value: !0 }), eo.BrowserRandomSource = void 0;
  const r = 65536;
  class e {
    constructor() {
      this.isAvailable = !1, this.isInstantiated = !1;
      const i = typeof self < "u" ? self.crypto || self.msCrypto : null;
      i && i.getRandomValues !== void 0 && (this._crypto = i, this.isAvailable = !0, this.isInstantiated = !0);
    }
    randomBytes(i) {
      if (!this.isAvailable || !this._crypto)
        throw new Error("Browser random byte generator is not available.");
      const s = new Uint8Array(i);
      for (let a = 0; a < s.length; a += r)
        this._crypto.getRandomValues(s.subarray(a, a + Math.min(s.length - a, r)));
      return s;
    }
  }
  return eo.BrowserRandomSource = e, eo;
}
function y4(r) {
  throw new Error('Could not dynamically require "' + r + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var to = {}, Vp;
function w4() {
  if (Vp) return to;
  Vp = 1, Object.defineProperty(to, "__esModule", { value: !0 }), to.NodeRandomSource = void 0;
  const r = Zi();
  class e {
    constructor() {
      if (this.isAvailable = !1, this.isInstantiated = !1, typeof y4 < "u") {
        const i = Kl;
        i && i.randomBytes && (this._crypto = i, this.isAvailable = !0, this.isInstantiated = !0);
      }
    }
    randomBytes(i) {
      if (!this.isAvailable || !this._crypto)
        throw new Error("Node.js random byte generator is not available.");
      let s = this._crypto.randomBytes(i);
      if (s.length !== i)
        throw new Error("NodeRandomSource: got fewer bytes than requested");
      const a = new Uint8Array(i);
      for (let f = 0; f < a.length; f++)
        a[f] = s[f];
      return (0, r.wipe)(s), a;
    }
  }
  return to.NodeRandomSource = e, to;
}
var Gp;
function _4() {
  if (Gp) return Za;
  Gp = 1, Object.defineProperty(Za, "__esModule", { value: !0 }), Za.SystemRandomSource = void 0;
  const r = m4(), e = w4();
  class t {
    constructor() {
      if (this.isAvailable = !1, this.name = "", this._source = new r.BrowserRandomSource(), this._source.isAvailable) {
        this.isAvailable = !0, this.name = "Browser";
        return;
      }
      if (this._source = new e.NodeRandomSource(), this._source.isAvailable) {
        this.isAvailable = !0, this.name = "Node";
        return;
      }
    }
    randomBytes(s) {
      if (!this.isAvailable)
        throw new Error("System random byte generator is not available.");
      return this._source.randomBytes(s);
    }
  }
  return Za.SystemRandomSource = t, Za;
}
var Wp;
function Wl() {
  return Wp || (Wp = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 }), r.randomStringForEntropy = r.randomString = r.randomUint32 = r.randomBytes = r.defaultRandomSource = void 0;
    const e = _4(), t = Po(), i = Zi();
    r.defaultRandomSource = new e.SystemRandomSource();
    function s(u, m = r.defaultRandomSource) {
      return m.randomBytes(u);
    }
    r.randomBytes = s;
    function a(u = r.defaultRandomSource) {
      const m = s(4, u), A = (0, t.readUint32LE)(m);
      return (0, i.wipe)(m), A;
    }
    r.randomUint32 = a;
    const f = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    function h(u, m = f, A = r.defaultRandomSource) {
      if (m.length < 2)
        throw new Error("randomString charset is too short");
      if (m.length > 256)
        throw new Error("randomString charset is too long");
      let M = "";
      const I = m.length, C = 256 - 256 % I;
      for (; u > 0; ) {
        const R = s(Math.ceil(u * 256 / C), A);
        for (let L = 0; L < R.length && u > 0; L++) {
          const K = R[L];
          K < C && (M += m.charAt(K % I), u--);
        }
        (0, i.wipe)(R);
      }
      return M;
    }
    r.randomString = h;
    function p(u, m = f, A = r.defaultRandomSource) {
      const M = Math.ceil(u / (Math.log(m.length) / Math.LN2));
      return h(M, m, A);
    }
    r.randomStringForEntropy = p;
  }(dh)), dh;
}
var Co = Wl(), ph = {}, Jp;
function A4() {
  return Jp || (Jp = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 });
    var e = Po(), t = Zi();
    r.DIGEST_LENGTH = 32, r.BLOCK_SIZE = 64;
    var i = (
      /** @class */
      function() {
        function h() {
          this.digestLength = r.DIGEST_LENGTH, this.blockSize = r.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
        }
        return h.prototype._initState = function() {
          this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225;
        }, h.prototype.reset = function() {
          return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
        }, h.prototype.clean = function() {
          t.wipe(this._buffer), t.wipe(this._temp), this.reset();
        }, h.prototype.update = function(p, u) {
          if (u === void 0 && (u = p.length), this._finished)
            throw new Error("SHA256: can't update because hash was finished.");
          var m = 0;
          if (this._bytesHashed += u, this._bufferLength > 0) {
            for (; this._bufferLength < this.blockSize && u > 0; )
              this._buffer[this._bufferLength++] = p[m++], u--;
            this._bufferLength === this.blockSize && (a(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
          }
          for (u >= this.blockSize && (m = a(this._temp, this._state, p, m, u), u %= this.blockSize); u > 0; )
            this._buffer[this._bufferLength++] = p[m++], u--;
          return this;
        }, h.prototype.finish = function(p) {
          if (!this._finished) {
            var u = this._bytesHashed, m = this._bufferLength, A = u / 536870912 | 0, M = u << 3, I = u % 64 < 56 ? 64 : 128;
            this._buffer[m] = 128;
            for (var C = m + 1; C < I - 8; C++)
              this._buffer[C] = 0;
            e.writeUint32BE(A, this._buffer, I - 8), e.writeUint32BE(M, this._buffer, I - 4), a(this._temp, this._state, this._buffer, 0, I), this._finished = !0;
          }
          for (var C = 0; C < this.digestLength / 4; C++)
            e.writeUint32BE(this._state[C], p, C * 4);
          return this;
        }, h.prototype.digest = function() {
          var p = new Uint8Array(this.digestLength);
          return this.finish(p), p;
        }, h.prototype.saveState = function() {
          if (this._finished)
            throw new Error("SHA256: cannot save finished state");
          return {
            state: new Int32Array(this._state),
            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
            bufferLength: this._bufferLength,
            bytesHashed: this._bytesHashed
          };
        }, h.prototype.restoreState = function(p) {
          return this._state.set(p.state), this._bufferLength = p.bufferLength, p.buffer && this._buffer.set(p.buffer), this._bytesHashed = p.bytesHashed, this._finished = !1, this;
        }, h.prototype.cleanSavedState = function(p) {
          t.wipe(p.state), p.buffer && t.wipe(p.buffer), p.bufferLength = 0, p.bytesHashed = 0;
        }, h;
      }()
    );
    r.SHA256 = i;
    var s = new Int32Array([
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ]);
    function a(h, p, u, m, A) {
      for (; A >= 64; ) {
        for (var M = p[0], I = p[1], C = p[2], R = p[3], L = p[4], K = p[5], F = p[6], V = p[7], B = 0; B < 16; B++) {
          var z = m + B * 4;
          h[B] = e.readUint32BE(u, z);
        }
        for (var B = 16; B < 64; B++) {
          var q = h[B - 2], E = (q >>> 17 | q << 15) ^ (q >>> 19 | q << 13) ^ q >>> 10;
          q = h[B - 15];
          var U = (q >>> 7 | q << 25) ^ (q >>> 18 | q << 14) ^ q >>> 3;
          h[B] = (E + h[B - 7] | 0) + (U + h[B - 16] | 0);
        }
        for (var B = 0; B < 64; B++) {
          var E = (((L >>> 6 | L << 26) ^ (L >>> 11 | L << 21) ^ (L >>> 25 | L << 7)) + (L & K ^ ~L & F) | 0) + (V + (s[B] + h[B] | 0) | 0) | 0, U = ((M >>> 2 | M << 30) ^ (M >>> 13 | M << 19) ^ (M >>> 22 | M << 10)) + (M & I ^ M & C ^ I & C) | 0;
          V = F, F = K, K = L, L = R + E | 0, R = C, C = I, I = M, M = E + U | 0;
        }
        p[0] += M, p[1] += I, p[2] += C, p[3] += R, p[4] += L, p[5] += K, p[6] += F, p[7] += V, m += 64, A -= 64;
      }
      return m;
    }
    function f(h) {
      var p = new i();
      p.update(h);
      var u = p.digest();
      return p.clean(), u;
    }
    r.hash = f;
  }(ph)), ph;
}
var Nu = A4(), gh = {}, Yp;
function E4() {
  return Yp || (Yp = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 }), r.sharedKey = r.generateKeyPair = r.generateKeyPairFromSeed = r.scalarMultBase = r.scalarMult = r.SHARED_KEY_LENGTH = r.SECRET_KEY_LENGTH = r.PUBLIC_KEY_LENGTH = void 0;
    const e = Wl(), t = Zi();
    r.PUBLIC_KEY_LENGTH = 32, r.SECRET_KEY_LENGTH = 32, r.SHARED_KEY_LENGTH = 32;
    function i(B) {
      const z = new Float64Array(16);
      if (B)
        for (let q = 0; q < B.length; q++)
          z[q] = B[q];
      return z;
    }
    const s = new Uint8Array(32);
    s[0] = 9;
    const a = i([56129, 1]);
    function f(B) {
      let z = 1;
      for (let q = 0; q < 16; q++) {
        let E = B[q] + z + 65535;
        z = Math.floor(E / 65536), B[q] = E - z * 65536;
      }
      B[0] += z - 1 + 37 * (z - 1);
    }
    function h(B, z, q) {
      const E = ~(q - 1);
      for (let U = 0; U < 16; U++) {
        const ee = E & (B[U] ^ z[U]);
        B[U] ^= ee, z[U] ^= ee;
      }
    }
    function p(B, z) {
      const q = i(), E = i();
      for (let U = 0; U < 16; U++)
        E[U] = z[U];
      f(E), f(E), f(E);
      for (let U = 0; U < 2; U++) {
        q[0] = E[0] - 65517;
        for (let ae = 1; ae < 15; ae++)
          q[ae] = E[ae] - 65535 - (q[ae - 1] >> 16 & 1), q[ae - 1] &= 65535;
        q[15] = E[15] - 32767 - (q[14] >> 16 & 1);
        const ee = q[15] >> 16 & 1;
        q[14] &= 65535, h(E, q, 1 - ee);
      }
      for (let U = 0; U < 16; U++)
        B[2 * U] = E[U] & 255, B[2 * U + 1] = E[U] >> 8;
    }
    function u(B, z) {
      for (let q = 0; q < 16; q++)
        B[q] = z[2 * q] + (z[2 * q + 1] << 8);
      B[15] &= 32767;
    }
    function m(B, z, q) {
      for (let E = 0; E < 16; E++)
        B[E] = z[E] + q[E];
    }
    function A(B, z, q) {
      for (let E = 0; E < 16; E++)
        B[E] = z[E] - q[E];
    }
    function M(B, z, q) {
      let E, U, ee = 0, ae = 0, j = 0, w = 0, c = 0, d = 0, l = 0, b = 0, _ = 0, D = 0, x = 0, g = 0, y = 0, N = 0, Q = 0, Z = 0, O = 0, te = 0, k = 0, W = 0, J = 0, S = 0, G = 0, oe = 0, ce = 0, fe = 0, be = 0, we = 0, Ie = 0, Je = 0, Ce = 0, Te = q[0], Se = q[1], me = q[2], Oe = q[3], Re = q[4], ve = q[5], Ne = q[6], Ee = q[7], ye = q[8], Le = q[9], De = q[10], _e = q[11], He = q[12], Ve = q[13], xe = q[14], Ke = q[15];
      E = z[0], ee += E * Te, ae += E * Se, j += E * me, w += E * Oe, c += E * Re, d += E * ve, l += E * Ne, b += E * Ee, _ += E * ye, D += E * Le, x += E * De, g += E * _e, y += E * He, N += E * Ve, Q += E * xe, Z += E * Ke, E = z[1], ae += E * Te, j += E * Se, w += E * me, c += E * Oe, d += E * Re, l += E * ve, b += E * Ne, _ += E * Ee, D += E * ye, x += E * Le, g += E * De, y += E * _e, N += E * He, Q += E * Ve, Z += E * xe, O += E * Ke, E = z[2], j += E * Te, w += E * Se, c += E * me, d += E * Oe, l += E * Re, b += E * ve, _ += E * Ne, D += E * Ee, x += E * ye, g += E * Le, y += E * De, N += E * _e, Q += E * He, Z += E * Ve, O += E * xe, te += E * Ke, E = z[3], w += E * Te, c += E * Se, d += E * me, l += E * Oe, b += E * Re, _ += E * ve, D += E * Ne, x += E * Ee, g += E * ye, y += E * Le, N += E * De, Q += E * _e, Z += E * He, O += E * Ve, te += E * xe, k += E * Ke, E = z[4], c += E * Te, d += E * Se, l += E * me, b += E * Oe, _ += E * Re, D += E * ve, x += E * Ne, g += E * Ee, y += E * ye, N += E * Le, Q += E * De, Z += E * _e, O += E * He, te += E * Ve, k += E * xe, W += E * Ke, E = z[5], d += E * Te, l += E * Se, b += E * me, _ += E * Oe, D += E * Re, x += E * ve, g += E * Ne, y += E * Ee, N += E * ye, Q += E * Le, Z += E * De, O += E * _e, te += E * He, k += E * Ve, W += E * xe, J += E * Ke, E = z[6], l += E * Te, b += E * Se, _ += E * me, D += E * Oe, x += E * Re, g += E * ve, y += E * Ne, N += E * Ee, Q += E * ye, Z += E * Le, O += E * De, te += E * _e, k += E * He, W += E * Ve, J += E * xe, S += E * Ke, E = z[7], b += E * Te, _ += E * Se, D += E * me, x += E * Oe, g += E * Re, y += E * ve, N += E * Ne, Q += E * Ee, Z += E * ye, O += E * Le, te += E * De, k += E * _e, W += E * He, J += E * Ve, S += E * xe, G += E * Ke, E = z[8], _ += E * Te, D += E * Se, x += E * me, g += E * Oe, y += E * Re, N += E * ve, Q += E * Ne, Z += E * Ee, O += E * ye, te += E * Le, k += E * De, W += E * _e, J += E * He, S += E * Ve, G += E * xe, oe += E * Ke, E = z[9], D += E * Te, x += E * Se, g += E * me, y += E * Oe, N += E * Re, Q += E * ve, Z += E * Ne, O += E * Ee, te += E * ye, k += E * Le, W += E * De, J += E * _e, S += E * He, G += E * Ve, oe += E * xe, ce += E * Ke, E = z[10], x += E * Te, g += E * Se, y += E * me, N += E * Oe, Q += E * Re, Z += E * ve, O += E * Ne, te += E * Ee, k += E * ye, W += E * Le, J += E * De, S += E * _e, G += E * He, oe += E * Ve, ce += E * xe, fe += E * Ke, E = z[11], g += E * Te, y += E * Se, N += E * me, Q += E * Oe, Z += E * Re, O += E * ve, te += E * Ne, k += E * Ee, W += E * ye, J += E * Le, S += E * De, G += E * _e, oe += E * He, ce += E * Ve, fe += E * xe, be += E * Ke, E = z[12], y += E * Te, N += E * Se, Q += E * me, Z += E * Oe, O += E * Re, te += E * ve, k += E * Ne, W += E * Ee, J += E * ye, S += E * Le, G += E * De, oe += E * _e, ce += E * He, fe += E * Ve, be += E * xe, we += E * Ke, E = z[13], N += E * Te, Q += E * Se, Z += E * me, O += E * Oe, te += E * Re, k += E * ve, W += E * Ne, J += E * Ee, S += E * ye, G += E * Le, oe += E * De, ce += E * _e, fe += E * He, be += E * Ve, we += E * xe, Ie += E * Ke, E = z[14], Q += E * Te, Z += E * Se, O += E * me, te += E * Oe, k += E * Re, W += E * ve, J += E * Ne, S += E * Ee, G += E * ye, oe += E * Le, ce += E * De, fe += E * _e, be += E * He, we += E * Ve, Ie += E * xe, Je += E * Ke, E = z[15], Z += E * Te, O += E * Se, te += E * me, k += E * Oe, W += E * Re, J += E * ve, S += E * Ne, G += E * Ee, oe += E * ye, ce += E * Le, fe += E * De, be += E * _e, we += E * He, Ie += E * Ve, Je += E * xe, Ce += E * Ke, ee += 38 * O, ae += 38 * te, j += 38 * k, w += 38 * W, c += 38 * J, d += 38 * S, l += 38 * G, b += 38 * oe, _ += 38 * ce, D += 38 * fe, x += 38 * be, g += 38 * we, y += 38 * Ie, N += 38 * Je, Q += 38 * Ce, U = 1, E = ee + U + 65535, U = Math.floor(E / 65536), ee = E - U * 65536, E = ae + U + 65535, U = Math.floor(E / 65536), ae = E - U * 65536, E = j + U + 65535, U = Math.floor(E / 65536), j = E - U * 65536, E = w + U + 65535, U = Math.floor(E / 65536), w = E - U * 65536, E = c + U + 65535, U = Math.floor(E / 65536), c = E - U * 65536, E = d + U + 65535, U = Math.floor(E / 65536), d = E - U * 65536, E = l + U + 65535, U = Math.floor(E / 65536), l = E - U * 65536, E = b + U + 65535, U = Math.floor(E / 65536), b = E - U * 65536, E = _ + U + 65535, U = Math.floor(E / 65536), _ = E - U * 65536, E = D + U + 65535, U = Math.floor(E / 65536), D = E - U * 65536, E = x + U + 65535, U = Math.floor(E / 65536), x = E - U * 65536, E = g + U + 65535, U = Math.floor(E / 65536), g = E - U * 65536, E = y + U + 65535, U = Math.floor(E / 65536), y = E - U * 65536, E = N + U + 65535, U = Math.floor(E / 65536), N = E - U * 65536, E = Q + U + 65535, U = Math.floor(E / 65536), Q = E - U * 65536, E = Z + U + 65535, U = Math.floor(E / 65536), Z = E - U * 65536, ee += U - 1 + 37 * (U - 1), U = 1, E = ee + U + 65535, U = Math.floor(E / 65536), ee = E - U * 65536, E = ae + U + 65535, U = Math.floor(E / 65536), ae = E - U * 65536, E = j + U + 65535, U = Math.floor(E / 65536), j = E - U * 65536, E = w + U + 65535, U = Math.floor(E / 65536), w = E - U * 65536, E = c + U + 65535, U = Math.floor(E / 65536), c = E - U * 65536, E = d + U + 65535, U = Math.floor(E / 65536), d = E - U * 65536, E = l + U + 65535, U = Math.floor(E / 65536), l = E - U * 65536, E = b + U + 65535, U = Math.floor(E / 65536), b = E - U * 65536, E = _ + U + 65535, U = Math.floor(E / 65536), _ = E - U * 65536, E = D + U + 65535, U = Math.floor(E / 65536), D = E - U * 65536, E = x + U + 65535, U = Math.floor(E / 65536), x = E - U * 65536, E = g + U + 65535, U = Math.floor(E / 65536), g = E - U * 65536, E = y + U + 65535, U = Math.floor(E / 65536), y = E - U * 65536, E = N + U + 65535, U = Math.floor(E / 65536), N = E - U * 65536, E = Q + U + 65535, U = Math.floor(E / 65536), Q = E - U * 65536, E = Z + U + 65535, U = Math.floor(E / 65536), Z = E - U * 65536, ee += U - 1 + 37 * (U - 1), B[0] = ee, B[1] = ae, B[2] = j, B[3] = w, B[4] = c, B[5] = d, B[6] = l, B[7] = b, B[8] = _, B[9] = D, B[10] = x, B[11] = g, B[12] = y, B[13] = N, B[14] = Q, B[15] = Z;
    }
    function I(B, z) {
      M(B, z, z);
    }
    function C(B, z) {
      const q = i();
      for (let E = 0; E < 16; E++)
        q[E] = z[E];
      for (let E = 253; E >= 0; E--)
        I(q, q), E !== 2 && E !== 4 && M(q, q, z);
      for (let E = 0; E < 16; E++)
        B[E] = q[E];
    }
    function R(B, z) {
      const q = new Uint8Array(32), E = new Float64Array(80), U = i(), ee = i(), ae = i(), j = i(), w = i(), c = i();
      for (let _ = 0; _ < 31; _++)
        q[_] = B[_];
      q[31] = B[31] & 127 | 64, q[0] &= 248, u(E, z);
      for (let _ = 0; _ < 16; _++)
        ee[_] = E[_];
      U[0] = j[0] = 1;
      for (let _ = 254; _ >= 0; --_) {
        const D = q[_ >>> 3] >>> (_ & 7) & 1;
        h(U, ee, D), h(ae, j, D), m(w, U, ae), A(U, U, ae), m(ae, ee, j), A(ee, ee, j), I(j, w), I(c, U), M(U, ae, U), M(ae, ee, w), m(w, U, ae), A(U, U, ae), I(ee, U), A(ae, j, c), M(U, ae, a), m(U, U, j), M(ae, ae, U), M(U, j, c), M(j, ee, E), I(ee, w), h(U, ee, D), h(ae, j, D);
      }
      for (let _ = 0; _ < 16; _++)
        E[_ + 16] = U[_], E[_ + 32] = ae[_], E[_ + 48] = ee[_], E[_ + 64] = j[_];
      const d = E.subarray(32), l = E.subarray(16);
      C(d, d), M(l, l, d);
      const b = new Uint8Array(32);
      return p(b, l), b;
    }
    r.scalarMult = R;
    function L(B) {
      return R(B, s);
    }
    r.scalarMultBase = L;
    function K(B) {
      if (B.length !== r.SECRET_KEY_LENGTH)
        throw new Error(`x25519: seed must be ${r.SECRET_KEY_LENGTH} bytes`);
      const z = new Uint8Array(B);
      return {
        publicKey: L(z),
        secretKey: z
      };
    }
    r.generateKeyPairFromSeed = K;
    function F(B) {
      const z = (0, e.randomBytes)(32, B), q = K(z);
      return (0, t.wipe)(z), q;
    }
    r.generateKeyPair = F;
    function V(B, z, q = !1) {
      if (B.length !== r.PUBLIC_KEY_LENGTH)
        throw new Error("X25519: incorrect secret key length");
      if (z.length !== r.PUBLIC_KEY_LENGTH)
        throw new Error("X25519: incorrect public key length");
      const E = R(B, z);
      if (q) {
        let U = 0;
        for (let ee = 0; ee < E.length; ee++)
          U |= E[ee];
        if (U === 0)
          throw new Error("X25519: invalid shared key");
      }
      return E;
    }
    r.sharedKey = V;
  }(gh)), gh;
}
var Hv = E4();
function Kv(r = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(r) : new Uint8Array(r);
}
function au(r, e) {
  e || (e = r.reduce((s, a) => s + a.length, 0));
  const t = Kv(e);
  let i = 0;
  for (const s of r)
    t.set(s, i), i += s.length;
  return t;
}
function x4(r, e) {
  if (r.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i = 0; i < t.length; i++)
    t[i] = 255;
  for (var s = 0; s < r.length; s++) {
    var a = r.charAt(s), f = a.charCodeAt(0);
    if (t[f] !== 255)
      throw new TypeError(a + " is ambiguous");
    t[f] = s;
  }
  var h = r.length, p = r.charAt(0), u = Math.log(h) / Math.log(256), m = Math.log(256) / Math.log(h);
  function A(C) {
    if (C instanceof Uint8Array || (ArrayBuffer.isView(C) ? C = new Uint8Array(C.buffer, C.byteOffset, C.byteLength) : Array.isArray(C) && (C = Uint8Array.from(C))), !(C instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (C.length === 0)
      return "";
    for (var R = 0, L = 0, K = 0, F = C.length; K !== F && C[K] === 0; )
      K++, R++;
    for (var V = (F - K) * m + 1 >>> 0, B = new Uint8Array(V); K !== F; ) {
      for (var z = C[K], q = 0, E = V - 1; (z !== 0 || q < L) && E !== -1; E--, q++)
        z += 256 * B[E] >>> 0, B[E] = z % h >>> 0, z = z / h >>> 0;
      if (z !== 0)
        throw new Error("Non-zero carry");
      L = q, K++;
    }
    for (var U = V - L; U !== V && B[U] === 0; )
      U++;
    for (var ee = p.repeat(R); U < V; ++U)
      ee += r.charAt(B[U]);
    return ee;
  }
  function M(C) {
    if (typeof C != "string")
      throw new TypeError("Expected String");
    if (C.length === 0)
      return new Uint8Array();
    var R = 0;
    if (C[R] !== " ") {
      for (var L = 0, K = 0; C[R] === p; )
        L++, R++;
      for (var F = (C.length - R) * u + 1 >>> 0, V = new Uint8Array(F); C[R]; ) {
        var B = t[C.charCodeAt(R)];
        if (B === 255)
          return;
        for (var z = 0, q = F - 1; (B !== 0 || z < K) && q !== -1; q--, z++)
          B += h * V[q] >>> 0, V[q] = B % 256 >>> 0, B = B / 256 >>> 0;
        if (B !== 0)
          throw new Error("Non-zero carry");
        K = z, R++;
      }
      if (C[R] !== " ") {
        for (var E = F - K; E !== F && V[E] === 0; )
          E++;
        for (var U = new Uint8Array(L + (F - E)), ee = L; E !== F; )
          U[ee++] = V[E++];
        return U;
      }
    }
  }
  function I(C) {
    var R = M(C);
    if (R)
      return R;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: A,
    decodeUnsafe: M,
    decode: I
  };
}
var S4 = x4, M4 = S4;
const I4 = (r) => {
  if (r instanceof Uint8Array && r.constructor.name === "Uint8Array")
    return r;
  if (r instanceof ArrayBuffer)
    return new Uint8Array(r);
  if (ArrayBuffer.isView(r))
    return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
  throw new Error("Unknown type, must be binary type");
}, D4 = (r) => new TextEncoder().encode(r), P4 = (r) => new TextDecoder().decode(r);
class C4 {
  constructor(e, t, i) {
    this.name = e, this.prefix = t, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class O4 {
  constructor(e, t, i) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Vv(this, e);
  }
}
class R4 {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Vv(this, e);
  }
  decode(e) {
    const t = e[0], i = this.decoders[t];
    if (i)
      return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Vv = (r, e) => new R4({
  ...r.decoders || { [r.prefix]: r },
  ...e.decoders || { [e.prefix]: e }
});
class N4 {
  constructor(e, t, i, s) {
    this.name = e, this.prefix = t, this.baseEncode = i, this.baseDecode = s, this.encoder = new C4(e, t, i), this.decoder = new O4(e, t, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Tu = ({ name: r, prefix: e, encode: t, decode: i }) => new N4(r, e, t, i), Oo = ({ prefix: r, name: e, alphabet: t }) => {
  const { encode: i, decode: s } = M4(t, e);
  return Tu({
    prefix: r,
    name: e,
    encode: i,
    decode: (a) => I4(s(a))
  });
}, T4 = (r, e, t, i) => {
  const s = {};
  for (let m = 0; m < e.length; ++m)
    s[e[m]] = m;
  let a = r.length;
  for (; r[a - 1] === "="; )
    --a;
  const f = new Uint8Array(a * t / 8 | 0);
  let h = 0, p = 0, u = 0;
  for (let m = 0; m < a; ++m) {
    const A = s[r[m]];
    if (A === void 0)
      throw new SyntaxError(`Non-${i} character`);
    p = p << t | A, h += t, h >= 8 && (h -= 8, f[u++] = 255 & p >> h);
  }
  if (h >= t || 255 & p << 8 - h)
    throw new SyntaxError("Unexpected end of data");
  return f;
}, q4 = (r, e, t) => {
  const i = e[e.length - 1] === "=", s = (1 << t) - 1;
  let a = "", f = 0, h = 0;
  for (let p = 0; p < r.length; ++p)
    for (h = h << 8 | r[p], f += 8; f > t; )
      f -= t, a += e[s & h >> f];
  if (f && (a += e[s & h << t - f]), i)
    for (; a.length * t & 7; )
      a += "=";
  return a;
}, Sr = ({ name: r, prefix: e, bitsPerChar: t, alphabet: i }) => Tu({
  prefix: e,
  name: r,
  encode(s) {
    return q4(s, i, t);
  },
  decode(s) {
    return T4(s, i, t, r);
  }
}), F4 = Tu({
  prefix: "\0",
  name: "identity",
  encode: (r) => P4(r),
  decode: (r) => D4(r)
}), B4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: F4
}, Symbol.toStringTag, { value: "Module" })), L4 = Sr({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), U4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: L4
}, Symbol.toStringTag, { value: "Module" })), z4 = Sr({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), j4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: z4
}, Symbol.toStringTag, { value: "Module" })), $4 = Oo({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), k4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: $4
}, Symbol.toStringTag, { value: "Module" })), H4 = Sr({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), K4 = Sr({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), V4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: H4,
  base16upper: K4
}, Symbol.toStringTag, { value: "Module" })), G4 = Sr({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), W4 = Sr({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), J4 = Sr({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), Y4 = Sr({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), Q4 = Sr({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), X4 = Sr({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), Z4 = Sr({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), e_ = Sr({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), t_ = Sr({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), r_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: G4,
  base32hex: Q4,
  base32hexpad: Z4,
  base32hexpadupper: e_,
  base32hexupper: X4,
  base32pad: J4,
  base32padupper: Y4,
  base32upper: W4,
  base32z: t_
}, Symbol.toStringTag, { value: "Module" })), i_ = Oo({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), n_ = Oo({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), s_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: i_,
  base36upper: n_
}, Symbol.toStringTag, { value: "Module" })), a_ = Oo({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), o_ = Oo({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), c_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: a_,
  base58flickr: o_
}, Symbol.toStringTag, { value: "Module" })), u_ = Sr({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), f_ = Sr({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), h_ = Sr({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), l_ = Sr({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), d_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: u_,
  base64pad: f_,
  base64url: h_,
  base64urlpad: l_
}, Symbol.toStringTag, { value: "Module" })), Gv = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), p_ = Gv.reduce((r, e, t) => (r[t] = e, r), []), g_ = Gv.reduce((r, e, t) => (r[e.codePointAt(0)] = t, r), []);
function v_(r) {
  return r.reduce((e, t) => (e += p_[t], e), "");
}
function b_(r) {
  const e = [];
  for (const t of r) {
    const i = g_[t.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const m_ = Tu({
  prefix: "🚀",
  name: "base256emoji",
  encode: v_,
  decode: b_
}), y_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: m_
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const Qp = {
  ...B4,
  ...U4,
  ...j4,
  ...k4,
  ...V4,
  ...r_,
  ...s_,
  ...c_,
  ...d_,
  ...y_
};
function Wv(r, e, t, i) {
  return {
    name: r,
    prefix: e,
    encoder: {
      name: r,
      prefix: e,
      encode: t
    },
    decoder: { decode: i }
  };
}
const Xp = Wv("utf8", "u", (r) => "u" + new TextDecoder("utf8").decode(r), (r) => new TextEncoder().encode(r.substring(1))), vh = Wv("ascii", "a", (r) => {
  let e = "a";
  for (let t = 0; t < r.length; t++)
    e += String.fromCharCode(r[t]);
  return e;
}, (r) => {
  r = r.substring(1);
  const e = Kv(r.length);
  for (let t = 0; t < r.length; t++)
    e[t] = r.charCodeAt(t);
  return e;
}), Jv = {
  utf8: Xp,
  "utf-8": Xp,
  hex: Qp.base16,
  latin1: vh,
  ascii: vh,
  binary: vh,
  ...Qp
};
function wr(r, e = "utf8") {
  const t = Jv[e];
  if (!t)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(r, "utf8") : t.decoder.decode(`${t.prefix}${r}`);
}
function _r(r, e = "utf8") {
  const t = Jv[e];
  if (!t)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(r.buffer, r.byteOffset, r.byteLength).toString("utf8") : t.encoder.encode(r).substring(1);
}
var bh = {};
const w_ = "elliptic", __ = "6.6.1", A_ = "EC cryptography", E_ = "lib/elliptic.js", x_ = ["lib"], S_ = { lint: "eslint lib test", "lint:fix": "npm run lint -- --fix", unit: "istanbul test _mocha --reporter=spec test/index.js", test: "npm run lint && npm run unit", version: "grunt dist && git add dist/" }, M_ = { type: "git", url: "git@github.com:indutny/elliptic" }, I_ = ["EC", "Elliptic", "curve", "Cryptography"], D_ = "Fedor Indutny <fedor@indutny.com>", P_ = "MIT", C_ = { url: "https://github.com/indutny/elliptic/issues" }, O_ = "https://github.com/indutny/elliptic", R_ = { brfs: "^2.0.2", coveralls: "^3.1.0", eslint: "^7.6.0", grunt: "^1.2.1", "grunt-browserify": "^5.3.0", "grunt-cli": "^1.3.2", "grunt-contrib-connect": "^3.0.0", "grunt-contrib-copy": "^1.0.0", "grunt-contrib-uglify": "^5.0.0", "grunt-mocha-istanbul": "^5.0.2", "grunt-saucelabs": "^9.0.1", istanbul: "^0.4.5", mocha: "^8.0.1" }, N_ = { "bn.js": "^4.11.9", brorand: "^1.1.0", "hash.js": "^1.0.0", "hmac-drbg": "^1.0.1", inherits: "^2.0.4", "minimalistic-assert": "^1.0.1", "minimalistic-crypto-utils": "^1.0.1" }, T_ = {
  name: w_,
  version: __,
  description: A_,
  main: E_,
  files: x_,
  scripts: S_,
  repository: M_,
  keywords: I_,
  author: D_,
  license: P_,
  bugs: C_,
  homepage: O_,
  devDependencies: R_,
  dependencies: N_
};
var mh = {}, ou = { exports: {} }, q_ = ou.exports, Zp;
function Vn() {
  return Zp || (Zp = 1, function(r) {
    (function(e, t) {
      function i(j, w) {
        if (!j) throw new Error(w || "Assertion failed");
      }
      function s(j, w) {
        j.super_ = w;
        var c = function() {
        };
        c.prototype = w.prototype, j.prototype = new c(), j.prototype.constructor = j;
      }
      function a(j, w, c) {
        if (a.isBN(j))
          return j;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, j !== null && ((w === "le" || w === "be") && (c = w, w = 10), this._init(j || 0, w || 10, c || "be"));
      }
      typeof e == "object" ? e.exports = a : t.BN = a, a.BN = a, a.wordSize = 26;
      var f;
      try {
        typeof window < "u" && typeof window.Buffer < "u" ? f = window.Buffer : f = Kl.Buffer;
      } catch {
      }
      a.isBN = function(w) {
        return w instanceof a ? !0 : w !== null && typeof w == "object" && w.constructor.wordSize === a.wordSize && Array.isArray(w.words);
      }, a.max = function(w, c) {
        return w.cmp(c) > 0 ? w : c;
      }, a.min = function(w, c) {
        return w.cmp(c) < 0 ? w : c;
      }, a.prototype._init = function(w, c, d) {
        if (typeof w == "number")
          return this._initNumber(w, c, d);
        if (typeof w == "object")
          return this._initArray(w, c, d);
        c === "hex" && (c = 16), i(c === (c | 0) && c >= 2 && c <= 36), w = w.toString().replace(/\s+/g, "");
        var l = 0;
        w[0] === "-" && (l++, this.negative = 1), l < w.length && (c === 16 ? this._parseHex(w, l, d) : (this._parseBase(w, c, l), d === "le" && this._initArray(this.toArray(), c, d)));
      }, a.prototype._initNumber = function(w, c, d) {
        w < 0 && (this.negative = 1, w = -w), w < 67108864 ? (this.words = [w & 67108863], this.length = 1) : w < 4503599627370496 ? (this.words = [
          w & 67108863,
          w / 67108864 & 67108863
        ], this.length = 2) : (i(w < 9007199254740992), this.words = [
          w & 67108863,
          w / 67108864 & 67108863,
          1
        ], this.length = 3), d === "le" && this._initArray(this.toArray(), c, d);
      }, a.prototype._initArray = function(w, c, d) {
        if (i(typeof w.length == "number"), w.length <= 0)
          return this.words = [0], this.length = 1, this;
        this.length = Math.ceil(w.length / 3), this.words = new Array(this.length);
        for (var l = 0; l < this.length; l++)
          this.words[l] = 0;
        var b, _, D = 0;
        if (d === "be")
          for (l = w.length - 1, b = 0; l >= 0; l -= 3)
            _ = w[l] | w[l - 1] << 8 | w[l - 2] << 16, this.words[b] |= _ << D & 67108863, this.words[b + 1] = _ >>> 26 - D & 67108863, D += 24, D >= 26 && (D -= 26, b++);
        else if (d === "le")
          for (l = 0, b = 0; l < w.length; l += 3)
            _ = w[l] | w[l + 1] << 8 | w[l + 2] << 16, this.words[b] |= _ << D & 67108863, this.words[b + 1] = _ >>> 26 - D & 67108863, D += 24, D >= 26 && (D -= 26, b++);
        return this.strip();
      };
      function h(j, w) {
        var c = j.charCodeAt(w);
        return c >= 65 && c <= 70 ? c - 55 : c >= 97 && c <= 102 ? c - 87 : c - 48 & 15;
      }
      function p(j, w, c) {
        var d = h(j, c);
        return c - 1 >= w && (d |= h(j, c - 1) << 4), d;
      }
      a.prototype._parseHex = function(w, c, d) {
        this.length = Math.ceil((w.length - c) / 6), this.words = new Array(this.length);
        for (var l = 0; l < this.length; l++)
          this.words[l] = 0;
        var b = 0, _ = 0, D;
        if (d === "be")
          for (l = w.length - 1; l >= c; l -= 2)
            D = p(w, c, l) << b, this.words[_] |= D & 67108863, b >= 18 ? (b -= 18, _ += 1, this.words[_] |= D >>> 26) : b += 8;
        else {
          var x = w.length - c;
          for (l = x % 2 === 0 ? c + 1 : c; l < w.length; l += 2)
            D = p(w, c, l) << b, this.words[_] |= D & 67108863, b >= 18 ? (b -= 18, _ += 1, this.words[_] |= D >>> 26) : b += 8;
        }
        this.strip();
      };
      function u(j, w, c, d) {
        for (var l = 0, b = Math.min(j.length, c), _ = w; _ < b; _++) {
          var D = j.charCodeAt(_) - 48;
          l *= d, D >= 49 ? l += D - 49 + 10 : D >= 17 ? l += D - 17 + 10 : l += D;
        }
        return l;
      }
      a.prototype._parseBase = function(w, c, d) {
        this.words = [0], this.length = 1;
        for (var l = 0, b = 1; b <= 67108863; b *= c)
          l++;
        l--, b = b / c | 0;
        for (var _ = w.length - d, D = _ % l, x = Math.min(_, _ - D) + d, g = 0, y = d; y < x; y += l)
          g = u(w, y, y + l, c), this.imuln(b), this.words[0] + g < 67108864 ? this.words[0] += g : this._iaddn(g);
        if (D !== 0) {
          var N = 1;
          for (g = u(w, y, w.length, c), y = 0; y < D; y++)
            N *= c;
          this.imuln(N), this.words[0] + g < 67108864 ? this.words[0] += g : this._iaddn(g);
        }
        this.strip();
      }, a.prototype.copy = function(w) {
        w.words = new Array(this.length);
        for (var c = 0; c < this.length; c++)
          w.words[c] = this.words[c];
        w.length = this.length, w.negative = this.negative, w.red = this.red;
      }, a.prototype.clone = function() {
        var w = new a(null);
        return this.copy(w), w;
      }, a.prototype._expand = function(w) {
        for (; this.length < w; )
          this.words[this.length++] = 0;
        return this;
      }, a.prototype.strip = function() {
        for (; this.length > 1 && this.words[this.length - 1] === 0; )
          this.length--;
        return this._normSign();
      }, a.prototype._normSign = function() {
        return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
      }, a.prototype.inspect = function() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      };
      var m = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000"
      ], A = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ], M = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        1e7,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64e6,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        243e5,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176
      ];
      a.prototype.toString = function(w, c) {
        w = w || 10, c = c | 0 || 1;
        var d;
        if (w === 16 || w === "hex") {
          d = "";
          for (var l = 0, b = 0, _ = 0; _ < this.length; _++) {
            var D = this.words[_], x = ((D << l | b) & 16777215).toString(16);
            b = D >>> 24 - l & 16777215, l += 2, l >= 26 && (l -= 26, _--), b !== 0 || _ !== this.length - 1 ? d = m[6 - x.length] + x + d : d = x + d;
          }
          for (b !== 0 && (d = b.toString(16) + d); d.length % c !== 0; )
            d = "0" + d;
          return this.negative !== 0 && (d = "-" + d), d;
        }
        if (w === (w | 0) && w >= 2 && w <= 36) {
          var g = A[w], y = M[w];
          d = "";
          var N = this.clone();
          for (N.negative = 0; !N.isZero(); ) {
            var Q = N.modn(y).toString(w);
            N = N.idivn(y), N.isZero() ? d = Q + d : d = m[g - Q.length] + Q + d;
          }
          for (this.isZero() && (d = "0" + d); d.length % c !== 0; )
            d = "0" + d;
          return this.negative !== 0 && (d = "-" + d), d;
        }
        i(!1, "Base should be between 2 and 36");
      }, a.prototype.toNumber = function() {
        var w = this.words[0];
        return this.length === 2 ? w += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? w += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -w : w;
      }, a.prototype.toJSON = function() {
        return this.toString(16);
      }, a.prototype.toBuffer = function(w, c) {
        return i(typeof f < "u"), this.toArrayLike(f, w, c);
      }, a.prototype.toArray = function(w, c) {
        return this.toArrayLike(Array, w, c);
      }, a.prototype.toArrayLike = function(w, c, d) {
        var l = this.byteLength(), b = d || Math.max(1, l);
        i(l <= b, "byte array longer than desired length"), i(b > 0, "Requested array length <= 0"), this.strip();
        var _ = c === "le", D = new w(b), x, g, y = this.clone();
        if (_) {
          for (g = 0; !y.isZero(); g++)
            x = y.andln(255), y.iushrn(8), D[g] = x;
          for (; g < b; g++)
            D[g] = 0;
        } else {
          for (g = 0; g < b - l; g++)
            D[g] = 0;
          for (g = 0; !y.isZero(); g++)
            x = y.andln(255), y.iushrn(8), D[b - g - 1] = x;
        }
        return D;
      }, Math.clz32 ? a.prototype._countBits = function(w) {
        return 32 - Math.clz32(w);
      } : a.prototype._countBits = function(w) {
        var c = w, d = 0;
        return c >= 4096 && (d += 13, c >>>= 13), c >= 64 && (d += 7, c >>>= 7), c >= 8 && (d += 4, c >>>= 4), c >= 2 && (d += 2, c >>>= 2), d + c;
      }, a.prototype._zeroBits = function(w) {
        if (w === 0) return 26;
        var c = w, d = 0;
        return c & 8191 || (d += 13, c >>>= 13), c & 127 || (d += 7, c >>>= 7), c & 15 || (d += 4, c >>>= 4), c & 3 || (d += 2, c >>>= 2), c & 1 || d++, d;
      }, a.prototype.bitLength = function() {
        var w = this.words[this.length - 1], c = this._countBits(w);
        return (this.length - 1) * 26 + c;
      };
      function I(j) {
        for (var w = new Array(j.bitLength()), c = 0; c < w.length; c++) {
          var d = c / 26 | 0, l = c % 26;
          w[c] = (j.words[d] & 1 << l) >>> l;
        }
        return w;
      }
      a.prototype.zeroBits = function() {
        if (this.isZero()) return 0;
        for (var w = 0, c = 0; c < this.length; c++) {
          var d = this._zeroBits(this.words[c]);
          if (w += d, d !== 26) break;
        }
        return w;
      }, a.prototype.byteLength = function() {
        return Math.ceil(this.bitLength() / 8);
      }, a.prototype.toTwos = function(w) {
        return this.negative !== 0 ? this.abs().inotn(w).iaddn(1) : this.clone();
      }, a.prototype.fromTwos = function(w) {
        return this.testn(w - 1) ? this.notn(w).iaddn(1).ineg() : this.clone();
      }, a.prototype.isNeg = function() {
        return this.negative !== 0;
      }, a.prototype.neg = function() {
        return this.clone().ineg();
      }, a.prototype.ineg = function() {
        return this.isZero() || (this.negative ^= 1), this;
      }, a.prototype.iuor = function(w) {
        for (; this.length < w.length; )
          this.words[this.length++] = 0;
        for (var c = 0; c < w.length; c++)
          this.words[c] = this.words[c] | w.words[c];
        return this.strip();
      }, a.prototype.ior = function(w) {
        return i((this.negative | w.negative) === 0), this.iuor(w);
      }, a.prototype.or = function(w) {
        return this.length > w.length ? this.clone().ior(w) : w.clone().ior(this);
      }, a.prototype.uor = function(w) {
        return this.length > w.length ? this.clone().iuor(w) : w.clone().iuor(this);
      }, a.prototype.iuand = function(w) {
        var c;
        this.length > w.length ? c = w : c = this;
        for (var d = 0; d < c.length; d++)
          this.words[d] = this.words[d] & w.words[d];
        return this.length = c.length, this.strip();
      }, a.prototype.iand = function(w) {
        return i((this.negative | w.negative) === 0), this.iuand(w);
      }, a.prototype.and = function(w) {
        return this.length > w.length ? this.clone().iand(w) : w.clone().iand(this);
      }, a.prototype.uand = function(w) {
        return this.length > w.length ? this.clone().iuand(w) : w.clone().iuand(this);
      }, a.prototype.iuxor = function(w) {
        var c, d;
        this.length > w.length ? (c = this, d = w) : (c = w, d = this);
        for (var l = 0; l < d.length; l++)
          this.words[l] = c.words[l] ^ d.words[l];
        if (this !== c)
          for (; l < c.length; l++)
            this.words[l] = c.words[l];
        return this.length = c.length, this.strip();
      }, a.prototype.ixor = function(w) {
        return i((this.negative | w.negative) === 0), this.iuxor(w);
      }, a.prototype.xor = function(w) {
        return this.length > w.length ? this.clone().ixor(w) : w.clone().ixor(this);
      }, a.prototype.uxor = function(w) {
        return this.length > w.length ? this.clone().iuxor(w) : w.clone().iuxor(this);
      }, a.prototype.inotn = function(w) {
        i(typeof w == "number" && w >= 0);
        var c = Math.ceil(w / 26) | 0, d = w % 26;
        this._expand(c), d > 0 && c--;
        for (var l = 0; l < c; l++)
          this.words[l] = ~this.words[l] & 67108863;
        return d > 0 && (this.words[l] = ~this.words[l] & 67108863 >> 26 - d), this.strip();
      }, a.prototype.notn = function(w) {
        return this.clone().inotn(w);
      }, a.prototype.setn = function(w, c) {
        i(typeof w == "number" && w >= 0);
        var d = w / 26 | 0, l = w % 26;
        return this._expand(d + 1), c ? this.words[d] = this.words[d] | 1 << l : this.words[d] = this.words[d] & ~(1 << l), this.strip();
      }, a.prototype.iadd = function(w) {
        var c;
        if (this.negative !== 0 && w.negative === 0)
          return this.negative = 0, c = this.isub(w), this.negative ^= 1, this._normSign();
        if (this.negative === 0 && w.negative !== 0)
          return w.negative = 0, c = this.isub(w), w.negative = 1, c._normSign();
        var d, l;
        this.length > w.length ? (d = this, l = w) : (d = w, l = this);
        for (var b = 0, _ = 0; _ < l.length; _++)
          c = (d.words[_] | 0) + (l.words[_] | 0) + b, this.words[_] = c & 67108863, b = c >>> 26;
        for (; b !== 0 && _ < d.length; _++)
          c = (d.words[_] | 0) + b, this.words[_] = c & 67108863, b = c >>> 26;
        if (this.length = d.length, b !== 0)
          this.words[this.length] = b, this.length++;
        else if (d !== this)
          for (; _ < d.length; _++)
            this.words[_] = d.words[_];
        return this;
      }, a.prototype.add = function(w) {
        var c;
        return w.negative !== 0 && this.negative === 0 ? (w.negative = 0, c = this.sub(w), w.negative ^= 1, c) : w.negative === 0 && this.negative !== 0 ? (this.negative = 0, c = w.sub(this), this.negative = 1, c) : this.length > w.length ? this.clone().iadd(w) : w.clone().iadd(this);
      }, a.prototype.isub = function(w) {
        if (w.negative !== 0) {
          w.negative = 0;
          var c = this.iadd(w);
          return w.negative = 1, c._normSign();
        } else if (this.negative !== 0)
          return this.negative = 0, this.iadd(w), this.negative = 1, this._normSign();
        var d = this.cmp(w);
        if (d === 0)
          return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        var l, b;
        d > 0 ? (l = this, b = w) : (l = w, b = this);
        for (var _ = 0, D = 0; D < b.length; D++)
          c = (l.words[D] | 0) - (b.words[D] | 0) + _, _ = c >> 26, this.words[D] = c & 67108863;
        for (; _ !== 0 && D < l.length; D++)
          c = (l.words[D] | 0) + _, _ = c >> 26, this.words[D] = c & 67108863;
        if (_ === 0 && D < l.length && l !== this)
          for (; D < l.length; D++)
            this.words[D] = l.words[D];
        return this.length = Math.max(this.length, D), l !== this && (this.negative = 1), this.strip();
      }, a.prototype.sub = function(w) {
        return this.clone().isub(w);
      };
      function C(j, w, c) {
        c.negative = w.negative ^ j.negative;
        var d = j.length + w.length | 0;
        c.length = d, d = d - 1 | 0;
        var l = j.words[0] | 0, b = w.words[0] | 0, _ = l * b, D = _ & 67108863, x = _ / 67108864 | 0;
        c.words[0] = D;
        for (var g = 1; g < d; g++) {
          for (var y = x >>> 26, N = x & 67108863, Q = Math.min(g, w.length - 1), Z = Math.max(0, g - j.length + 1); Z <= Q; Z++) {
            var O = g - Z | 0;
            l = j.words[O] | 0, b = w.words[Z] | 0, _ = l * b + N, y += _ / 67108864 | 0, N = _ & 67108863;
          }
          c.words[g] = N | 0, x = y | 0;
        }
        return x !== 0 ? c.words[g] = x | 0 : c.length--, c.strip();
      }
      var R = function(w, c, d) {
        var l = w.words, b = c.words, _ = d.words, D = 0, x, g, y, N = l[0] | 0, Q = N & 8191, Z = N >>> 13, O = l[1] | 0, te = O & 8191, k = O >>> 13, W = l[2] | 0, J = W & 8191, S = W >>> 13, G = l[3] | 0, oe = G & 8191, ce = G >>> 13, fe = l[4] | 0, be = fe & 8191, we = fe >>> 13, Ie = l[5] | 0, Je = Ie & 8191, Ce = Ie >>> 13, Te = l[6] | 0, Se = Te & 8191, me = Te >>> 13, Oe = l[7] | 0, Re = Oe & 8191, ve = Oe >>> 13, Ne = l[8] | 0, Ee = Ne & 8191, ye = Ne >>> 13, Le = l[9] | 0, De = Le & 8191, _e = Le >>> 13, He = b[0] | 0, Ve = He & 8191, xe = He >>> 13, Ke = b[1] | 0, ht = Ke & 8191, Ge = Ke >>> 13, wt = b[2] | 0, lt = wt & 8191, Ye = wt >>> 13, Et = b[3] | 0, Mt = Et & 8191, qe = Et >>> 13, Xe = b[4] | 0, tt = Xe & 8191, Fe = Xe >>> 13, et = b[5] | 0, Ze = et & 8191, ze = et >>> 13, ut = b[6] | 0, rt = ut & 8191, je = ut >>> 13, it = b[7] | 0, st = it & 8191, Be = it >>> 13, Qe = b[8] | 0, ft = Qe & 8191, $e = Qe >>> 13, Rt = b[9] | 0, Nt = Rt & 8191, at = Rt >>> 13;
        d.negative = w.negative ^ c.negative, d.length = 19, x = Math.imul(Q, Ve), g = Math.imul(Q, xe), g = g + Math.imul(Z, Ve) | 0, y = Math.imul(Z, xe);
        var bt = (D + x | 0) + ((g & 8191) << 13) | 0;
        D = (y + (g >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, x = Math.imul(te, Ve), g = Math.imul(te, xe), g = g + Math.imul(k, Ve) | 0, y = Math.imul(k, xe), x = x + Math.imul(Q, ht) | 0, g = g + Math.imul(Q, Ge) | 0, g = g + Math.imul(Z, ht) | 0, y = y + Math.imul(Z, Ge) | 0;
        var Ir = (D + x | 0) + ((g & 8191) << 13) | 0;
        D = (y + (g >>> 13) | 0) + (Ir >>> 26) | 0, Ir &= 67108863, x = Math.imul(J, Ve), g = Math.imul(J, xe), g = g + Math.imul(S, Ve) | 0, y = Math.imul(S, xe), x = x + Math.imul(te, ht) | 0, g = g + Math.imul(te, Ge) | 0, g = g + Math.imul(k, ht) | 0, y = y + Math.imul(k, Ge) | 0, x = x + Math.imul(Q, lt) | 0, g = g + Math.imul(Q, Ye) | 0, g = g + Math.imul(Z, lt) | 0, y = y + Math.imul(Z, Ye) | 0;
        var Dr = (D + x | 0) + ((g & 8191) << 13) | 0;
        D = (y + (g >>> 13) | 0) + (Dr >>> 26) | 0, Dr &= 67108863, x = Math.imul(oe, Ve), g = Math.imul(oe, xe), g = g + Math.imul(ce, Ve) | 0, y = Math.imul(ce, xe), x = x + Math.imul(J, ht) | 0, g = g + Math.imul(J, Ge) | 0, g = g + Math.imul(S, ht) | 0, y = y + Math.imul(S, Ge) | 0, x = x + Math.imul(te, lt) | 0, g = g + Math.imul(te, Ye) | 0, g = g + Math.imul(k, lt) | 0, y = y + Math.imul(k, Ye) | 0, x = x + Math.imul(Q, Mt) | 0, g = g + Math.imul(Q, qe) | 0, g = g + Math.imul(Z, Mt) | 0, y = y + Math.imul(Z, qe) | 0;
        var Pr = (D + x | 0) + ((g & 8191) << 13) | 0;
        D = (y + (g >>> 13) | 0) + (Pr >>> 26) | 0, Pr &= 67108863, x = Math.imul(be, Ve), g = Math.imul(be, xe), g = g + Math.imul(we, Ve) | 0, y = Math.imul(we, xe), x = x + Math.imul(oe, ht) | 0, g = g + Math.imul(oe, Ge) | 0, g = g + Math.imul(ce, ht) | 0, y = y + Math.imul(ce, Ge) | 0, x = x + Math.imul(J, lt) | 0, g = g + Math.imul(J, Ye) | 0, g = g + Math.imul(S, lt) | 0, y = y + Math.imul(S, Ye) | 0, x = x + Math.imul(te, Mt) | 0, g = g + Math.imul(te, qe) | 0, g = g + Math.imul(k, Mt) | 0, y = y + Math.imul(k, qe) | 0, x = x + Math.imul(Q, tt) | 0, g = g + Math.imul(Q, Fe) | 0, g = g + Math.imul(Z, tt) | 0, y = y + Math.imul(Z, Fe) | 0;
        var Cr = (D + x | 0) + ((g & 8191) << 13) | 0;
        D = (y + (g >>> 13) | 0) + (Cr >>> 26) | 0, Cr &= 67108863, x = Math.imul(Je, Ve), g = Math.imul(Je, xe), g = g + Math.imul(Ce, Ve) | 0, y = Math.imul(Ce, xe), x = x + Math.imul(be, ht) | 0, g = g + Math.imul(be, Ge) | 0, g = g + Math.imul(we, ht) | 0, y = y + Math.imul(we, Ge) | 0, x = x + Math.imul(oe, lt) | 0, g = g + Math.imul(oe, Ye) | 0, g = g + Math.imul(ce, lt) | 0, y = y + Math.imul(ce, Ye) | 0, x = x + Math.imul(J, Mt) | 0, g = g + Math.imul(J, qe) | 0, g = g + Math.imul(S, Mt) | 0, y = y + Math.imul(S, qe) | 0, x = x + Math.imul(te, tt) | 0, g = g + Math.imul(te, Fe) | 0, g = g + Math.imul(k, tt) | 0, y = y + Math.imul(k, Fe) | 0, x = x + Math.imul(Q, Ze) | 0, g = g + Math.imul(Q, ze) | 0, g = g + Math.imul(Z, Ze) | 0, y = y + Math.imul(Z, ze) | 0;
        var Or = (D + x | 0) + ((g & 8191) << 13) | 0;
        D = (y + (g >>> 13) | 0) + (Or >>> 26) | 0, Or &= 67108863, x = Math.imul(Se, Ve), g = Math.imul(Se, xe), g = g + Math.imul(me, Ve) | 0, y = Math.imul(me, xe), x = x + Math.imul(Je, ht) | 0, g = g + Math.imul(Je, Ge) | 0, g = g + Math.imul(Ce, ht) | 0, y = y + Math.imul(Ce, Ge) | 0, x = x + Math.imul(be, lt) | 0, g = g + Math.imul(be, Ye) | 0, g = g + Math.imul(we, lt) | 0, y = y + Math.imul(we, Ye) | 0, x = x + Math.imul(oe, Mt) | 0, g = g + Math.imul(oe, qe) | 0, g = g + Math.imul(ce, Mt) | 0, y = y + Math.imul(ce, qe) | 0, x = x + Math.imul(J, tt) | 0, g = g + Math.imul(J, Fe) | 0, g = g + Math.imul(S, tt) | 0, y = y + Math.imul(S, Fe) | 0, x = x + Math.imul(te, Ze) | 0, g = g + Math.imul(te, ze) | 0, g = g + Math.imul(k, Ze) | 0, y = y + Math.imul(k, ze) | 0, x = x + Math.imul(Q, rt) | 0, g = g + Math.imul(Q, je) | 0, g = g + Math.imul(Z, rt) | 0, y = y + Math.imul(Z, je) | 0;
        var Zt = (D + x | 0) + ((g & 8191) << 13) | 0;
        D = (y + (g >>> 13) | 0) + (Zt >>> 26) | 0, Zt &= 67108863, x = Math.imul(Re, Ve), g = Math.imul(Re, xe), g = g + Math.imul(ve, Ve) | 0, y = Math.imul(ve, xe), x = x + Math.imul(Se, ht) | 0, g = g + Math.imul(Se, Ge) | 0, g = g + Math.imul(me, ht) | 0, y = y + Math.imul(me, Ge) | 0, x = x + Math.imul(Je, lt) | 0, g = g + Math.imul(Je, Ye) | 0, g = g + Math.imul(Ce, lt) | 0, y = y + Math.imul(Ce, Ye) | 0, x = x + Math.imul(be, Mt) | 0, g = g + Math.imul(be, qe) | 0, g = g + Math.imul(we, Mt) | 0, y = y + Math.imul(we, qe) | 0, x = x + Math.imul(oe, tt) | 0, g = g + Math.imul(oe, Fe) | 0, g = g + Math.imul(ce, tt) | 0, y = y + Math.imul(ce, Fe) | 0, x = x + Math.imul(J, Ze) | 0, g = g + Math.imul(J, ze) | 0, g = g + Math.imul(S, Ze) | 0, y = y + Math.imul(S, ze) | 0, x = x + Math.imul(te, rt) | 0, g = g + Math.imul(te, je) | 0, g = g + Math.imul(k, rt) | 0, y = y + Math.imul(k, je) | 0, x = x + Math.imul(Q, st) | 0, g = g + Math.imul(Q, Be) | 0, g = g + Math.imul(Z, st) | 0, y = y + Math.imul(Z, Be) | 0;
        var Kr = (D + x | 0) + ((g & 8191) << 13) | 0;
        D = (y + (g >>> 13) | 0) + (Kr >>> 26) | 0, Kr &= 67108863, x = Math.imul(Ee, Ve), g = Math.imul(Ee, xe), g = g + Math.imul(ye, Ve) | 0, y = Math.imul(ye, xe), x = x + Math.imul(Re, ht) | 0, g = g + Math.imul(Re, Ge) | 0, g = g + Math.imul(ve, ht) | 0, y = y + Math.imul(ve, Ge) | 0, x = x + Math.imul(Se, lt) | 0, g = g + Math.imul(Se, Ye) | 0, g = g + Math.imul(me, lt) | 0, y = y + Math.imul(me, Ye) | 0, x = x + Math.imul(Je, Mt) | 0, g = g + Math.imul(Je, qe) | 0, g = g + Math.imul(Ce, Mt) | 0, y = y + Math.imul(Ce, qe) | 0, x = x + Math.imul(be, tt) | 0, g = g + Math.imul(be, Fe) | 0, g = g + Math.imul(we, tt) | 0, y = y + Math.imul(we, Fe) | 0, x = x + Math.imul(oe, Ze) | 0, g = g + Math.imul(oe, ze) | 0, g = g + Math.imul(ce, Ze) | 0, y = y + Math.imul(ce, ze) | 0, x = x + Math.imul(J, rt) | 0, g = g + Math.imul(J, je) | 0, g = g + Math.imul(S, rt) | 0, y = y + Math.imul(S, je) | 0, x = x + Math.imul(te, st) | 0, g = g + Math.imul(te, Be) | 0, g = g + Math.imul(k, st) | 0, y = y + Math.imul(k, Be) | 0, x = x + Math.imul(Q, ft) | 0, g = g + Math.imul(Q, $e) | 0, g = g + Math.imul(Z, ft) | 0, y = y + Math.imul(Z, $e) | 0;
        var Ti = (D + x | 0) + ((g & 8191) << 13) | 0;
        D = (y + (g >>> 13) | 0) + (Ti >>> 26) | 0, Ti &= 67108863, x = Math.imul(De, Ve), g = Math.imul(De, xe), g = g + Math.imul(_e, Ve) | 0, y = Math.imul(_e, xe), x = x + Math.imul(Ee, ht) | 0, g = g + Math.imul(Ee, Ge) | 0, g = g + Math.imul(ye, ht) | 0, y = y + Math.imul(ye, Ge) | 0, x = x + Math.imul(Re, lt) | 0, g = g + Math.imul(Re, Ye) | 0, g = g + Math.imul(ve, lt) | 0, y = y + Math.imul(ve, Ye) | 0, x = x + Math.imul(Se, Mt) | 0, g = g + Math.imul(Se, qe) | 0, g = g + Math.imul(me, Mt) | 0, y = y + Math.imul(me, qe) | 0, x = x + Math.imul(Je, tt) | 0, g = g + Math.imul(Je, Fe) | 0, g = g + Math.imul(Ce, tt) | 0, y = y + Math.imul(Ce, Fe) | 0, x = x + Math.imul(be, Ze) | 0, g = g + Math.imul(be, ze) | 0, g = g + Math.imul(we, Ze) | 0, y = y + Math.imul(we, ze) | 0, x = x + Math.imul(oe, rt) | 0, g = g + Math.imul(oe, je) | 0, g = g + Math.imul(ce, rt) | 0, y = y + Math.imul(ce, je) | 0, x = x + Math.imul(J, st) | 0, g = g + Math.imul(J, Be) | 0, g = g + Math.imul(S, st) | 0, y = y + Math.imul(S, Be) | 0, x = x + Math.imul(te, ft) | 0, g = g + Math.imul(te, $e) | 0, g = g + Math.imul(k, ft) | 0, y = y + Math.imul(k, $e) | 0, x = x + Math.imul(Q, Nt) | 0, g = g + Math.imul(Q, at) | 0, g = g + Math.imul(Z, Nt) | 0, y = y + Math.imul(Z, at) | 0;
        var Vr = (D + x | 0) + ((g & 8191) << 13) | 0;
        D = (y + (g >>> 13) | 0) + (Vr >>> 26) | 0, Vr &= 67108863, x = Math.imul(De, ht), g = Math.imul(De, Ge), g = g + Math.imul(_e, ht) | 0, y = Math.imul(_e, Ge), x = x + Math.imul(Ee, lt) | 0, g = g + Math.imul(Ee, Ye) | 0, g = g + Math.imul(ye, lt) | 0, y = y + Math.imul(ye, Ye) | 0, x = x + Math.imul(Re, Mt) | 0, g = g + Math.imul(Re, qe) | 0, g = g + Math.imul(ve, Mt) | 0, y = y + Math.imul(ve, qe) | 0, x = x + Math.imul(Se, tt) | 0, g = g + Math.imul(Se, Fe) | 0, g = g + Math.imul(me, tt) | 0, y = y + Math.imul(me, Fe) | 0, x = x + Math.imul(Je, Ze) | 0, g = g + Math.imul(Je, ze) | 0, g = g + Math.imul(Ce, Ze) | 0, y = y + Math.imul(Ce, ze) | 0, x = x + Math.imul(be, rt) | 0, g = g + Math.imul(be, je) | 0, g = g + Math.imul(we, rt) | 0, y = y + Math.imul(we, je) | 0, x = x + Math.imul(oe, st) | 0, g = g + Math.imul(oe, Be) | 0, g = g + Math.imul(ce, st) | 0, y = y + Math.imul(ce, Be) | 0, x = x + Math.imul(J, ft) | 0, g = g + Math.imul(J, $e) | 0, g = g + Math.imul(S, ft) | 0, y = y + Math.imul(S, $e) | 0, x = x + Math.imul(te, Nt) | 0, g = g + Math.imul(te, at) | 0, g = g + Math.imul(k, Nt) | 0, y = y + Math.imul(k, at) | 0;
        var qi = (D + x | 0) + ((g & 8191) << 13) | 0;
        D = (y + (g >>> 13) | 0) + (qi >>> 26) | 0, qi &= 67108863, x = Math.imul(De, lt), g = Math.imul(De, Ye), g = g + Math.imul(_e, lt) | 0, y = Math.imul(_e, Ye), x = x + Math.imul(Ee, Mt) | 0, g = g + Math.imul(Ee, qe) | 0, g = g + Math.imul(ye, Mt) | 0, y = y + Math.imul(ye, qe) | 0, x = x + Math.imul(Re, tt) | 0, g = g + Math.imul(Re, Fe) | 0, g = g + Math.imul(ve, tt) | 0, y = y + Math.imul(ve, Fe) | 0, x = x + Math.imul(Se, Ze) | 0, g = g + Math.imul(Se, ze) | 0, g = g + Math.imul(me, Ze) | 0, y = y + Math.imul(me, ze) | 0, x = x + Math.imul(Je, rt) | 0, g = g + Math.imul(Je, je) | 0, g = g + Math.imul(Ce, rt) | 0, y = y + Math.imul(Ce, je) | 0, x = x + Math.imul(be, st) | 0, g = g + Math.imul(be, Be) | 0, g = g + Math.imul(we, st) | 0, y = y + Math.imul(we, Be) | 0, x = x + Math.imul(oe, ft) | 0, g = g + Math.imul(oe, $e) | 0, g = g + Math.imul(ce, ft) | 0, y = y + Math.imul(ce, $e) | 0, x = x + Math.imul(J, Nt) | 0, g = g + Math.imul(J, at) | 0, g = g + Math.imul(S, Nt) | 0, y = y + Math.imul(S, at) | 0;
        var Fi = (D + x | 0) + ((g & 8191) << 13) | 0;
        D = (y + (g >>> 13) | 0) + (Fi >>> 26) | 0, Fi &= 67108863, x = Math.imul(De, Mt), g = Math.imul(De, qe), g = g + Math.imul(_e, Mt) | 0, y = Math.imul(_e, qe), x = x + Math.imul(Ee, tt) | 0, g = g + Math.imul(Ee, Fe) | 0, g = g + Math.imul(ye, tt) | 0, y = y + Math.imul(ye, Fe) | 0, x = x + Math.imul(Re, Ze) | 0, g = g + Math.imul(Re, ze) | 0, g = g + Math.imul(ve, Ze) | 0, y = y + Math.imul(ve, ze) | 0, x = x + Math.imul(Se, rt) | 0, g = g + Math.imul(Se, je) | 0, g = g + Math.imul(me, rt) | 0, y = y + Math.imul(me, je) | 0, x = x + Math.imul(Je, st) | 0, g = g + Math.imul(Je, Be) | 0, g = g + Math.imul(Ce, st) | 0, y = y + Math.imul(Ce, Be) | 0, x = x + Math.imul(be, ft) | 0, g = g + Math.imul(be, $e) | 0, g = g + Math.imul(we, ft) | 0, y = y + Math.imul(we, $e) | 0, x = x + Math.imul(oe, Nt) | 0, g = g + Math.imul(oe, at) | 0, g = g + Math.imul(ce, Nt) | 0, y = y + Math.imul(ce, at) | 0;
        var Gr = (D + x | 0) + ((g & 8191) << 13) | 0;
        D = (y + (g >>> 13) | 0) + (Gr >>> 26) | 0, Gr &= 67108863, x = Math.imul(De, tt), g = Math.imul(De, Fe), g = g + Math.imul(_e, tt) | 0, y = Math.imul(_e, Fe), x = x + Math.imul(Ee, Ze) | 0, g = g + Math.imul(Ee, ze) | 0, g = g + Math.imul(ye, Ze) | 0, y = y + Math.imul(ye, ze) | 0, x = x + Math.imul(Re, rt) | 0, g = g + Math.imul(Re, je) | 0, g = g + Math.imul(ve, rt) | 0, y = y + Math.imul(ve, je) | 0, x = x + Math.imul(Se, st) | 0, g = g + Math.imul(Se, Be) | 0, g = g + Math.imul(me, st) | 0, y = y + Math.imul(me, Be) | 0, x = x + Math.imul(Je, ft) | 0, g = g + Math.imul(Je, $e) | 0, g = g + Math.imul(Ce, ft) | 0, y = y + Math.imul(Ce, $e) | 0, x = x + Math.imul(be, Nt) | 0, g = g + Math.imul(be, at) | 0, g = g + Math.imul(we, Nt) | 0, y = y + Math.imul(we, at) | 0;
        var vi = (D + x | 0) + ((g & 8191) << 13) | 0;
        D = (y + (g >>> 13) | 0) + (vi >>> 26) | 0, vi &= 67108863, x = Math.imul(De, Ze), g = Math.imul(De, ze), g = g + Math.imul(_e, Ze) | 0, y = Math.imul(_e, ze), x = x + Math.imul(Ee, rt) | 0, g = g + Math.imul(Ee, je) | 0, g = g + Math.imul(ye, rt) | 0, y = y + Math.imul(ye, je) | 0, x = x + Math.imul(Re, st) | 0, g = g + Math.imul(Re, Be) | 0, g = g + Math.imul(ve, st) | 0, y = y + Math.imul(ve, Be) | 0, x = x + Math.imul(Se, ft) | 0, g = g + Math.imul(Se, $e) | 0, g = g + Math.imul(me, ft) | 0, y = y + Math.imul(me, $e) | 0, x = x + Math.imul(Je, Nt) | 0, g = g + Math.imul(Je, at) | 0, g = g + Math.imul(Ce, Nt) | 0, y = y + Math.imul(Ce, at) | 0;
        var bi = (D + x | 0) + ((g & 8191) << 13) | 0;
        D = (y + (g >>> 13) | 0) + (bi >>> 26) | 0, bi &= 67108863, x = Math.imul(De, rt), g = Math.imul(De, je), g = g + Math.imul(_e, rt) | 0, y = Math.imul(_e, je), x = x + Math.imul(Ee, st) | 0, g = g + Math.imul(Ee, Be) | 0, g = g + Math.imul(ye, st) | 0, y = y + Math.imul(ye, Be) | 0, x = x + Math.imul(Re, ft) | 0, g = g + Math.imul(Re, $e) | 0, g = g + Math.imul(ve, ft) | 0, y = y + Math.imul(ve, $e) | 0, x = x + Math.imul(Se, Nt) | 0, g = g + Math.imul(Se, at) | 0, g = g + Math.imul(me, Nt) | 0, y = y + Math.imul(me, at) | 0;
        var fr = (D + x | 0) + ((g & 8191) << 13) | 0;
        D = (y + (g >>> 13) | 0) + (fr >>> 26) | 0, fr &= 67108863, x = Math.imul(De, st), g = Math.imul(De, Be), g = g + Math.imul(_e, st) | 0, y = Math.imul(_e, Be), x = x + Math.imul(Ee, ft) | 0, g = g + Math.imul(Ee, $e) | 0, g = g + Math.imul(ye, ft) | 0, y = y + Math.imul(ye, $e) | 0, x = x + Math.imul(Re, Nt) | 0, g = g + Math.imul(Re, at) | 0, g = g + Math.imul(ve, Nt) | 0, y = y + Math.imul(ve, at) | 0;
        var Bi = (D + x | 0) + ((g & 8191) << 13) | 0;
        D = (y + (g >>> 13) | 0) + (Bi >>> 26) | 0, Bi &= 67108863, x = Math.imul(De, ft), g = Math.imul(De, $e), g = g + Math.imul(_e, ft) | 0, y = Math.imul(_e, $e), x = x + Math.imul(Ee, Nt) | 0, g = g + Math.imul(Ee, at) | 0, g = g + Math.imul(ye, Nt) | 0, y = y + Math.imul(ye, at) | 0;
        var Li = (D + x | 0) + ((g & 8191) << 13) | 0;
        D = (y + (g >>> 13) | 0) + (Li >>> 26) | 0, Li &= 67108863, x = Math.imul(De, Nt), g = Math.imul(De, at), g = g + Math.imul(_e, Nt) | 0, y = Math.imul(_e, at);
        var Ui = (D + x | 0) + ((g & 8191) << 13) | 0;
        return D = (y + (g >>> 13) | 0) + (Ui >>> 26) | 0, Ui &= 67108863, _[0] = bt, _[1] = Ir, _[2] = Dr, _[3] = Pr, _[4] = Cr, _[5] = Or, _[6] = Zt, _[7] = Kr, _[8] = Ti, _[9] = Vr, _[10] = qi, _[11] = Fi, _[12] = Gr, _[13] = vi, _[14] = bi, _[15] = fr, _[16] = Bi, _[17] = Li, _[18] = Ui, D !== 0 && (_[19] = D, d.length++), d;
      };
      Math.imul || (R = C);
      function L(j, w, c) {
        c.negative = w.negative ^ j.negative, c.length = j.length + w.length;
        for (var d = 0, l = 0, b = 0; b < c.length - 1; b++) {
          var _ = l;
          l = 0;
          for (var D = d & 67108863, x = Math.min(b, w.length - 1), g = Math.max(0, b - j.length + 1); g <= x; g++) {
            var y = b - g, N = j.words[y] | 0, Q = w.words[g] | 0, Z = N * Q, O = Z & 67108863;
            _ = _ + (Z / 67108864 | 0) | 0, O = O + D | 0, D = O & 67108863, _ = _ + (O >>> 26) | 0, l += _ >>> 26, _ &= 67108863;
          }
          c.words[b] = D, d = _, _ = l;
        }
        return d !== 0 ? c.words[b] = d : c.length--, c.strip();
      }
      function K(j, w, c) {
        var d = new F();
        return d.mulp(j, w, c);
      }
      a.prototype.mulTo = function(w, c) {
        var d, l = this.length + w.length;
        return this.length === 10 && w.length === 10 ? d = R(this, w, c) : l < 63 ? d = C(this, w, c) : l < 1024 ? d = L(this, w, c) : d = K(this, w, c), d;
      };
      function F(j, w) {
        this.x = j, this.y = w;
      }
      F.prototype.makeRBT = function(w) {
        for (var c = new Array(w), d = a.prototype._countBits(w) - 1, l = 0; l < w; l++)
          c[l] = this.revBin(l, d, w);
        return c;
      }, F.prototype.revBin = function(w, c, d) {
        if (w === 0 || w === d - 1) return w;
        for (var l = 0, b = 0; b < c; b++)
          l |= (w & 1) << c - b - 1, w >>= 1;
        return l;
      }, F.prototype.permute = function(w, c, d, l, b, _) {
        for (var D = 0; D < _; D++)
          l[D] = c[w[D]], b[D] = d[w[D]];
      }, F.prototype.transform = function(w, c, d, l, b, _) {
        this.permute(_, w, c, d, l, b);
        for (var D = 1; D < b; D <<= 1)
          for (var x = D << 1, g = Math.cos(2 * Math.PI / x), y = Math.sin(2 * Math.PI / x), N = 0; N < b; N += x)
            for (var Q = g, Z = y, O = 0; O < D; O++) {
              var te = d[N + O], k = l[N + O], W = d[N + O + D], J = l[N + O + D], S = Q * W - Z * J;
              J = Q * J + Z * W, W = S, d[N + O] = te + W, l[N + O] = k + J, d[N + O + D] = te - W, l[N + O + D] = k - J, O !== x && (S = g * Q - y * Z, Z = g * Z + y * Q, Q = S);
            }
      }, F.prototype.guessLen13b = function(w, c) {
        var d = Math.max(c, w) | 1, l = d & 1, b = 0;
        for (d = d / 2 | 0; d; d = d >>> 1)
          b++;
        return 1 << b + 1 + l;
      }, F.prototype.conjugate = function(w, c, d) {
        if (!(d <= 1))
          for (var l = 0; l < d / 2; l++) {
            var b = w[l];
            w[l] = w[d - l - 1], w[d - l - 1] = b, b = c[l], c[l] = -c[d - l - 1], c[d - l - 1] = -b;
          }
      }, F.prototype.normalize13b = function(w, c) {
        for (var d = 0, l = 0; l < c / 2; l++) {
          var b = Math.round(w[2 * l + 1] / c) * 8192 + Math.round(w[2 * l] / c) + d;
          w[l] = b & 67108863, b < 67108864 ? d = 0 : d = b / 67108864 | 0;
        }
        return w;
      }, F.prototype.convert13b = function(w, c, d, l) {
        for (var b = 0, _ = 0; _ < c; _++)
          b = b + (w[_] | 0), d[2 * _] = b & 8191, b = b >>> 13, d[2 * _ + 1] = b & 8191, b = b >>> 13;
        for (_ = 2 * c; _ < l; ++_)
          d[_] = 0;
        i(b === 0), i((b & -8192) === 0);
      }, F.prototype.stub = function(w) {
        for (var c = new Array(w), d = 0; d < w; d++)
          c[d] = 0;
        return c;
      }, F.prototype.mulp = function(w, c, d) {
        var l = 2 * this.guessLen13b(w.length, c.length), b = this.makeRBT(l), _ = this.stub(l), D = new Array(l), x = new Array(l), g = new Array(l), y = new Array(l), N = new Array(l), Q = new Array(l), Z = d.words;
        Z.length = l, this.convert13b(w.words, w.length, D, l), this.convert13b(c.words, c.length, y, l), this.transform(D, _, x, g, l, b), this.transform(y, _, N, Q, l, b);
        for (var O = 0; O < l; O++) {
          var te = x[O] * N[O] - g[O] * Q[O];
          g[O] = x[O] * Q[O] + g[O] * N[O], x[O] = te;
        }
        return this.conjugate(x, g, l), this.transform(x, g, Z, _, l, b), this.conjugate(Z, _, l), this.normalize13b(Z, l), d.negative = w.negative ^ c.negative, d.length = w.length + c.length, d.strip();
      }, a.prototype.mul = function(w) {
        var c = new a(null);
        return c.words = new Array(this.length + w.length), this.mulTo(w, c);
      }, a.prototype.mulf = function(w) {
        var c = new a(null);
        return c.words = new Array(this.length + w.length), K(this, w, c);
      }, a.prototype.imul = function(w) {
        return this.clone().mulTo(w, this);
      }, a.prototype.imuln = function(w) {
        i(typeof w == "number"), i(w < 67108864);
        for (var c = 0, d = 0; d < this.length; d++) {
          var l = (this.words[d] | 0) * w, b = (l & 67108863) + (c & 67108863);
          c >>= 26, c += l / 67108864 | 0, c += b >>> 26, this.words[d] = b & 67108863;
        }
        return c !== 0 && (this.words[d] = c, this.length++), this;
      }, a.prototype.muln = function(w) {
        return this.clone().imuln(w);
      }, a.prototype.sqr = function() {
        return this.mul(this);
      }, a.prototype.isqr = function() {
        return this.imul(this.clone());
      }, a.prototype.pow = function(w) {
        var c = I(w);
        if (c.length === 0) return new a(1);
        for (var d = this, l = 0; l < c.length && c[l] === 0; l++, d = d.sqr())
          ;
        if (++l < c.length)
          for (var b = d.sqr(); l < c.length; l++, b = b.sqr())
            c[l] !== 0 && (d = d.mul(b));
        return d;
      }, a.prototype.iushln = function(w) {
        i(typeof w == "number" && w >= 0);
        var c = w % 26, d = (w - c) / 26, l = 67108863 >>> 26 - c << 26 - c, b;
        if (c !== 0) {
          var _ = 0;
          for (b = 0; b < this.length; b++) {
            var D = this.words[b] & l, x = (this.words[b] | 0) - D << c;
            this.words[b] = x | _, _ = D >>> 26 - c;
          }
          _ && (this.words[b] = _, this.length++);
        }
        if (d !== 0) {
          for (b = this.length - 1; b >= 0; b--)
            this.words[b + d] = this.words[b];
          for (b = 0; b < d; b++)
            this.words[b] = 0;
          this.length += d;
        }
        return this.strip();
      }, a.prototype.ishln = function(w) {
        return i(this.negative === 0), this.iushln(w);
      }, a.prototype.iushrn = function(w, c, d) {
        i(typeof w == "number" && w >= 0);
        var l;
        c ? l = (c - c % 26) / 26 : l = 0;
        var b = w % 26, _ = Math.min((w - b) / 26, this.length), D = 67108863 ^ 67108863 >>> b << b, x = d;
        if (l -= _, l = Math.max(0, l), x) {
          for (var g = 0; g < _; g++)
            x.words[g] = this.words[g];
          x.length = _;
        }
        if (_ !== 0) if (this.length > _)
          for (this.length -= _, g = 0; g < this.length; g++)
            this.words[g] = this.words[g + _];
        else
          this.words[0] = 0, this.length = 1;
        var y = 0;
        for (g = this.length - 1; g >= 0 && (y !== 0 || g >= l); g--) {
          var N = this.words[g] | 0;
          this.words[g] = y << 26 - b | N >>> b, y = N & D;
        }
        return x && y !== 0 && (x.words[x.length++] = y), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
      }, a.prototype.ishrn = function(w, c, d) {
        return i(this.negative === 0), this.iushrn(w, c, d);
      }, a.prototype.shln = function(w) {
        return this.clone().ishln(w);
      }, a.prototype.ushln = function(w) {
        return this.clone().iushln(w);
      }, a.prototype.shrn = function(w) {
        return this.clone().ishrn(w);
      }, a.prototype.ushrn = function(w) {
        return this.clone().iushrn(w);
      }, a.prototype.testn = function(w) {
        i(typeof w == "number" && w >= 0);
        var c = w % 26, d = (w - c) / 26, l = 1 << c;
        if (this.length <= d) return !1;
        var b = this.words[d];
        return !!(b & l);
      }, a.prototype.imaskn = function(w) {
        i(typeof w == "number" && w >= 0);
        var c = w % 26, d = (w - c) / 26;
        if (i(this.negative === 0, "imaskn works only with positive numbers"), this.length <= d)
          return this;
        if (c !== 0 && d++, this.length = Math.min(d, this.length), c !== 0) {
          var l = 67108863 ^ 67108863 >>> c << c;
          this.words[this.length - 1] &= l;
        }
        return this.strip();
      }, a.prototype.maskn = function(w) {
        return this.clone().imaskn(w);
      }, a.prototype.iaddn = function(w) {
        return i(typeof w == "number"), i(w < 67108864), w < 0 ? this.isubn(-w) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < w ? (this.words[0] = w - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(w), this.negative = 1, this) : this._iaddn(w);
      }, a.prototype._iaddn = function(w) {
        this.words[0] += w;
        for (var c = 0; c < this.length && this.words[c] >= 67108864; c++)
          this.words[c] -= 67108864, c === this.length - 1 ? this.words[c + 1] = 1 : this.words[c + 1]++;
        return this.length = Math.max(this.length, c + 1), this;
      }, a.prototype.isubn = function(w) {
        if (i(typeof w == "number"), i(w < 67108864), w < 0) return this.iaddn(-w);
        if (this.negative !== 0)
          return this.negative = 0, this.iaddn(w), this.negative = 1, this;
        if (this.words[0] -= w, this.length === 1 && this.words[0] < 0)
          this.words[0] = -this.words[0], this.negative = 1;
        else
          for (var c = 0; c < this.length && this.words[c] < 0; c++)
            this.words[c] += 67108864, this.words[c + 1] -= 1;
        return this.strip();
      }, a.prototype.addn = function(w) {
        return this.clone().iaddn(w);
      }, a.prototype.subn = function(w) {
        return this.clone().isubn(w);
      }, a.prototype.iabs = function() {
        return this.negative = 0, this;
      }, a.prototype.abs = function() {
        return this.clone().iabs();
      }, a.prototype._ishlnsubmul = function(w, c, d) {
        var l = w.length + d, b;
        this._expand(l);
        var _, D = 0;
        for (b = 0; b < w.length; b++) {
          _ = (this.words[b + d] | 0) + D;
          var x = (w.words[b] | 0) * c;
          _ -= x & 67108863, D = (_ >> 26) - (x / 67108864 | 0), this.words[b + d] = _ & 67108863;
        }
        for (; b < this.length - d; b++)
          _ = (this.words[b + d] | 0) + D, D = _ >> 26, this.words[b + d] = _ & 67108863;
        if (D === 0) return this.strip();
        for (i(D === -1), D = 0, b = 0; b < this.length; b++)
          _ = -(this.words[b] | 0) + D, D = _ >> 26, this.words[b] = _ & 67108863;
        return this.negative = 1, this.strip();
      }, a.prototype._wordDiv = function(w, c) {
        var d = this.length - w.length, l = this.clone(), b = w, _ = b.words[b.length - 1] | 0, D = this._countBits(_);
        d = 26 - D, d !== 0 && (b = b.ushln(d), l.iushln(d), _ = b.words[b.length - 1] | 0);
        var x = l.length - b.length, g;
        if (c !== "mod") {
          g = new a(null), g.length = x + 1, g.words = new Array(g.length);
          for (var y = 0; y < g.length; y++)
            g.words[y] = 0;
        }
        var N = l.clone()._ishlnsubmul(b, 1, x);
        N.negative === 0 && (l = N, g && (g.words[x] = 1));
        for (var Q = x - 1; Q >= 0; Q--) {
          var Z = (l.words[b.length + Q] | 0) * 67108864 + (l.words[b.length + Q - 1] | 0);
          for (Z = Math.min(Z / _ | 0, 67108863), l._ishlnsubmul(b, Z, Q); l.negative !== 0; )
            Z--, l.negative = 0, l._ishlnsubmul(b, 1, Q), l.isZero() || (l.negative ^= 1);
          g && (g.words[Q] = Z);
        }
        return g && g.strip(), l.strip(), c !== "div" && d !== 0 && l.iushrn(d), {
          div: g || null,
          mod: l
        };
      }, a.prototype.divmod = function(w, c, d) {
        if (i(!w.isZero()), this.isZero())
          return {
            div: new a(0),
            mod: new a(0)
          };
        var l, b, _;
        return this.negative !== 0 && w.negative === 0 ? (_ = this.neg().divmod(w, c), c !== "mod" && (l = _.div.neg()), c !== "div" && (b = _.mod.neg(), d && b.negative !== 0 && b.iadd(w)), {
          div: l,
          mod: b
        }) : this.negative === 0 && w.negative !== 0 ? (_ = this.divmod(w.neg(), c), c !== "mod" && (l = _.div.neg()), {
          div: l,
          mod: _.mod
        }) : this.negative & w.negative ? (_ = this.neg().divmod(w.neg(), c), c !== "div" && (b = _.mod.neg(), d && b.negative !== 0 && b.isub(w)), {
          div: _.div,
          mod: b
        }) : w.length > this.length || this.cmp(w) < 0 ? {
          div: new a(0),
          mod: this
        } : w.length === 1 ? c === "div" ? {
          div: this.divn(w.words[0]),
          mod: null
        } : c === "mod" ? {
          div: null,
          mod: new a(this.modn(w.words[0]))
        } : {
          div: this.divn(w.words[0]),
          mod: new a(this.modn(w.words[0]))
        } : this._wordDiv(w, c);
      }, a.prototype.div = function(w) {
        return this.divmod(w, "div", !1).div;
      }, a.prototype.mod = function(w) {
        return this.divmod(w, "mod", !1).mod;
      }, a.prototype.umod = function(w) {
        return this.divmod(w, "mod", !0).mod;
      }, a.prototype.divRound = function(w) {
        var c = this.divmod(w);
        if (c.mod.isZero()) return c.div;
        var d = c.div.negative !== 0 ? c.mod.isub(w) : c.mod, l = w.ushrn(1), b = w.andln(1), _ = d.cmp(l);
        return _ < 0 || b === 1 && _ === 0 ? c.div : c.div.negative !== 0 ? c.div.isubn(1) : c.div.iaddn(1);
      }, a.prototype.modn = function(w) {
        i(w <= 67108863);
        for (var c = (1 << 26) % w, d = 0, l = this.length - 1; l >= 0; l--)
          d = (c * d + (this.words[l] | 0)) % w;
        return d;
      }, a.prototype.idivn = function(w) {
        i(w <= 67108863);
        for (var c = 0, d = this.length - 1; d >= 0; d--) {
          var l = (this.words[d] | 0) + c * 67108864;
          this.words[d] = l / w | 0, c = l % w;
        }
        return this.strip();
      }, a.prototype.divn = function(w) {
        return this.clone().idivn(w);
      }, a.prototype.egcd = function(w) {
        i(w.negative === 0), i(!w.isZero());
        var c = this, d = w.clone();
        c.negative !== 0 ? c = c.umod(w) : c = c.clone();
        for (var l = new a(1), b = new a(0), _ = new a(0), D = new a(1), x = 0; c.isEven() && d.isEven(); )
          c.iushrn(1), d.iushrn(1), ++x;
        for (var g = d.clone(), y = c.clone(); !c.isZero(); ) {
          for (var N = 0, Q = 1; !(c.words[0] & Q) && N < 26; ++N, Q <<= 1) ;
          if (N > 0)
            for (c.iushrn(N); N-- > 0; )
              (l.isOdd() || b.isOdd()) && (l.iadd(g), b.isub(y)), l.iushrn(1), b.iushrn(1);
          for (var Z = 0, O = 1; !(d.words[0] & O) && Z < 26; ++Z, O <<= 1) ;
          if (Z > 0)
            for (d.iushrn(Z); Z-- > 0; )
              (_.isOdd() || D.isOdd()) && (_.iadd(g), D.isub(y)), _.iushrn(1), D.iushrn(1);
          c.cmp(d) >= 0 ? (c.isub(d), l.isub(_), b.isub(D)) : (d.isub(c), _.isub(l), D.isub(b));
        }
        return {
          a: _,
          b: D,
          gcd: d.iushln(x)
        };
      }, a.prototype._invmp = function(w) {
        i(w.negative === 0), i(!w.isZero());
        var c = this, d = w.clone();
        c.negative !== 0 ? c = c.umod(w) : c = c.clone();
        for (var l = new a(1), b = new a(0), _ = d.clone(); c.cmpn(1) > 0 && d.cmpn(1) > 0; ) {
          for (var D = 0, x = 1; !(c.words[0] & x) && D < 26; ++D, x <<= 1) ;
          if (D > 0)
            for (c.iushrn(D); D-- > 0; )
              l.isOdd() && l.iadd(_), l.iushrn(1);
          for (var g = 0, y = 1; !(d.words[0] & y) && g < 26; ++g, y <<= 1) ;
          if (g > 0)
            for (d.iushrn(g); g-- > 0; )
              b.isOdd() && b.iadd(_), b.iushrn(1);
          c.cmp(d) >= 0 ? (c.isub(d), l.isub(b)) : (d.isub(c), b.isub(l));
        }
        var N;
        return c.cmpn(1) === 0 ? N = l : N = b, N.cmpn(0) < 0 && N.iadd(w), N;
      }, a.prototype.gcd = function(w) {
        if (this.isZero()) return w.abs();
        if (w.isZero()) return this.abs();
        var c = this.clone(), d = w.clone();
        c.negative = 0, d.negative = 0;
        for (var l = 0; c.isEven() && d.isEven(); l++)
          c.iushrn(1), d.iushrn(1);
        do {
          for (; c.isEven(); )
            c.iushrn(1);
          for (; d.isEven(); )
            d.iushrn(1);
          var b = c.cmp(d);
          if (b < 0) {
            var _ = c;
            c = d, d = _;
          } else if (b === 0 || d.cmpn(1) === 0)
            break;
          c.isub(d);
        } while (!0);
        return d.iushln(l);
      }, a.prototype.invm = function(w) {
        return this.egcd(w).a.umod(w);
      }, a.prototype.isEven = function() {
        return (this.words[0] & 1) === 0;
      }, a.prototype.isOdd = function() {
        return (this.words[0] & 1) === 1;
      }, a.prototype.andln = function(w) {
        return this.words[0] & w;
      }, a.prototype.bincn = function(w) {
        i(typeof w == "number");
        var c = w % 26, d = (w - c) / 26, l = 1 << c;
        if (this.length <= d)
          return this._expand(d + 1), this.words[d] |= l, this;
        for (var b = l, _ = d; b !== 0 && _ < this.length; _++) {
          var D = this.words[_] | 0;
          D += b, b = D >>> 26, D &= 67108863, this.words[_] = D;
        }
        return b !== 0 && (this.words[_] = b, this.length++), this;
      }, a.prototype.isZero = function() {
        return this.length === 1 && this.words[0] === 0;
      }, a.prototype.cmpn = function(w) {
        var c = w < 0;
        if (this.negative !== 0 && !c) return -1;
        if (this.negative === 0 && c) return 1;
        this.strip();
        var d;
        if (this.length > 1)
          d = 1;
        else {
          c && (w = -w), i(w <= 67108863, "Number is too big");
          var l = this.words[0] | 0;
          d = l === w ? 0 : l < w ? -1 : 1;
        }
        return this.negative !== 0 ? -d | 0 : d;
      }, a.prototype.cmp = function(w) {
        if (this.negative !== 0 && w.negative === 0) return -1;
        if (this.negative === 0 && w.negative !== 0) return 1;
        var c = this.ucmp(w);
        return this.negative !== 0 ? -c | 0 : c;
      }, a.prototype.ucmp = function(w) {
        if (this.length > w.length) return 1;
        if (this.length < w.length) return -1;
        for (var c = 0, d = this.length - 1; d >= 0; d--) {
          var l = this.words[d] | 0, b = w.words[d] | 0;
          if (l !== b) {
            l < b ? c = -1 : l > b && (c = 1);
            break;
          }
        }
        return c;
      }, a.prototype.gtn = function(w) {
        return this.cmpn(w) === 1;
      }, a.prototype.gt = function(w) {
        return this.cmp(w) === 1;
      }, a.prototype.gten = function(w) {
        return this.cmpn(w) >= 0;
      }, a.prototype.gte = function(w) {
        return this.cmp(w) >= 0;
      }, a.prototype.ltn = function(w) {
        return this.cmpn(w) === -1;
      }, a.prototype.lt = function(w) {
        return this.cmp(w) === -1;
      }, a.prototype.lten = function(w) {
        return this.cmpn(w) <= 0;
      }, a.prototype.lte = function(w) {
        return this.cmp(w) <= 0;
      }, a.prototype.eqn = function(w) {
        return this.cmpn(w) === 0;
      }, a.prototype.eq = function(w) {
        return this.cmp(w) === 0;
      }, a.red = function(w) {
        return new ee(w);
      }, a.prototype.toRed = function(w) {
        return i(!this.red, "Already a number in reduction context"), i(this.negative === 0, "red works only with positives"), w.convertTo(this)._forceRed(w);
      }, a.prototype.fromRed = function() {
        return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
      }, a.prototype._forceRed = function(w) {
        return this.red = w, this;
      }, a.prototype.forceRed = function(w) {
        return i(!this.red, "Already a number in reduction context"), this._forceRed(w);
      }, a.prototype.redAdd = function(w) {
        return i(this.red, "redAdd works only with red numbers"), this.red.add(this, w);
      }, a.prototype.redIAdd = function(w) {
        return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, w);
      }, a.prototype.redSub = function(w) {
        return i(this.red, "redSub works only with red numbers"), this.red.sub(this, w);
      }, a.prototype.redISub = function(w) {
        return i(this.red, "redISub works only with red numbers"), this.red.isub(this, w);
      }, a.prototype.redShl = function(w) {
        return i(this.red, "redShl works only with red numbers"), this.red.shl(this, w);
      }, a.prototype.redMul = function(w) {
        return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, w), this.red.mul(this, w);
      }, a.prototype.redIMul = function(w) {
        return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, w), this.red.imul(this, w);
      }, a.prototype.redSqr = function() {
        return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
      }, a.prototype.redISqr = function() {
        return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
      }, a.prototype.redSqrt = function() {
        return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
      }, a.prototype.redInvm = function() {
        return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
      }, a.prototype.redNeg = function() {
        return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
      }, a.prototype.redPow = function(w) {
        return i(this.red && !w.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, w);
      };
      var V = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      };
      function B(j, w) {
        this.name = j, this.p = new a(w, 16), this.n = this.p.bitLength(), this.k = new a(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
      }
      B.prototype._tmp = function() {
        var w = new a(null);
        return w.words = new Array(Math.ceil(this.n / 13)), w;
      }, B.prototype.ireduce = function(w) {
        var c = w, d;
        do
          this.split(c, this.tmp), c = this.imulK(c), c = c.iadd(this.tmp), d = c.bitLength();
        while (d > this.n);
        var l = d < this.n ? -1 : c.ucmp(this.p);
        return l === 0 ? (c.words[0] = 0, c.length = 1) : l > 0 ? c.isub(this.p) : c.strip !== void 0 ? c.strip() : c._strip(), c;
      }, B.prototype.split = function(w, c) {
        w.iushrn(this.n, 0, c);
      }, B.prototype.imulK = function(w) {
        return w.imul(this.k);
      };
      function z() {
        B.call(
          this,
          "k256",
          "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
        );
      }
      s(z, B), z.prototype.split = function(w, c) {
        for (var d = 4194303, l = Math.min(w.length, 9), b = 0; b < l; b++)
          c.words[b] = w.words[b];
        if (c.length = l, w.length <= 9) {
          w.words[0] = 0, w.length = 1;
          return;
        }
        var _ = w.words[9];
        for (c.words[c.length++] = _ & d, b = 10; b < w.length; b++) {
          var D = w.words[b] | 0;
          w.words[b - 10] = (D & d) << 4 | _ >>> 22, _ = D;
        }
        _ >>>= 22, w.words[b - 10] = _, _ === 0 && w.length > 10 ? w.length -= 10 : w.length -= 9;
      }, z.prototype.imulK = function(w) {
        w.words[w.length] = 0, w.words[w.length + 1] = 0, w.length += 2;
        for (var c = 0, d = 0; d < w.length; d++) {
          var l = w.words[d] | 0;
          c += l * 977, w.words[d] = c & 67108863, c = l * 64 + (c / 67108864 | 0);
        }
        return w.words[w.length - 1] === 0 && (w.length--, w.words[w.length - 1] === 0 && w.length--), w;
      };
      function q() {
        B.call(
          this,
          "p224",
          "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
        );
      }
      s(q, B);
      function E() {
        B.call(
          this,
          "p192",
          "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
        );
      }
      s(E, B);
      function U() {
        B.call(
          this,
          "25519",
          "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
        );
      }
      s(U, B), U.prototype.imulK = function(w) {
        for (var c = 0, d = 0; d < w.length; d++) {
          var l = (w.words[d] | 0) * 19 + c, b = l & 67108863;
          l >>>= 26, w.words[d] = b, c = l;
        }
        return c !== 0 && (w.words[w.length++] = c), w;
      }, a._prime = function(w) {
        if (V[w]) return V[w];
        var c;
        if (w === "k256")
          c = new z();
        else if (w === "p224")
          c = new q();
        else if (w === "p192")
          c = new E();
        else if (w === "p25519")
          c = new U();
        else
          throw new Error("Unknown prime " + w);
        return V[w] = c, c;
      };
      function ee(j) {
        if (typeof j == "string") {
          var w = a._prime(j);
          this.m = w.p, this.prime = w;
        } else
          i(j.gtn(1), "modulus must be greater than 1"), this.m = j, this.prime = null;
      }
      ee.prototype._verify1 = function(w) {
        i(w.negative === 0, "red works only with positives"), i(w.red, "red works only with red numbers");
      }, ee.prototype._verify2 = function(w, c) {
        i((w.negative | c.negative) === 0, "red works only with positives"), i(
          w.red && w.red === c.red,
          "red works only with red numbers"
        );
      }, ee.prototype.imod = function(w) {
        return this.prime ? this.prime.ireduce(w)._forceRed(this) : w.umod(this.m)._forceRed(this);
      }, ee.prototype.neg = function(w) {
        return w.isZero() ? w.clone() : this.m.sub(w)._forceRed(this);
      }, ee.prototype.add = function(w, c) {
        this._verify2(w, c);
        var d = w.add(c);
        return d.cmp(this.m) >= 0 && d.isub(this.m), d._forceRed(this);
      }, ee.prototype.iadd = function(w, c) {
        this._verify2(w, c);
        var d = w.iadd(c);
        return d.cmp(this.m) >= 0 && d.isub(this.m), d;
      }, ee.prototype.sub = function(w, c) {
        this._verify2(w, c);
        var d = w.sub(c);
        return d.cmpn(0) < 0 && d.iadd(this.m), d._forceRed(this);
      }, ee.prototype.isub = function(w, c) {
        this._verify2(w, c);
        var d = w.isub(c);
        return d.cmpn(0) < 0 && d.iadd(this.m), d;
      }, ee.prototype.shl = function(w, c) {
        return this._verify1(w), this.imod(w.ushln(c));
      }, ee.prototype.imul = function(w, c) {
        return this._verify2(w, c), this.imod(w.imul(c));
      }, ee.prototype.mul = function(w, c) {
        return this._verify2(w, c), this.imod(w.mul(c));
      }, ee.prototype.isqr = function(w) {
        return this.imul(w, w.clone());
      }, ee.prototype.sqr = function(w) {
        return this.mul(w, w);
      }, ee.prototype.sqrt = function(w) {
        if (w.isZero()) return w.clone();
        var c = this.m.andln(3);
        if (i(c % 2 === 1), c === 3) {
          var d = this.m.add(new a(1)).iushrn(2);
          return this.pow(w, d);
        }
        for (var l = this.m.subn(1), b = 0; !l.isZero() && l.andln(1) === 0; )
          b++, l.iushrn(1);
        i(!l.isZero());
        var _ = new a(1).toRed(this), D = _.redNeg(), x = this.m.subn(1).iushrn(1), g = this.m.bitLength();
        for (g = new a(2 * g * g).toRed(this); this.pow(g, x).cmp(D) !== 0; )
          g.redIAdd(D);
        for (var y = this.pow(g, l), N = this.pow(w, l.addn(1).iushrn(1)), Q = this.pow(w, l), Z = b; Q.cmp(_) !== 0; ) {
          for (var O = Q, te = 0; O.cmp(_) !== 0; te++)
            O = O.redSqr();
          i(te < Z);
          var k = this.pow(y, new a(1).iushln(Z - te - 1));
          N = N.redMul(k), y = k.redSqr(), Q = Q.redMul(y), Z = te;
        }
        return N;
      }, ee.prototype.invm = function(w) {
        var c = w._invmp(this.m);
        return c.negative !== 0 ? (c.negative = 0, this.imod(c).redNeg()) : this.imod(c);
      }, ee.prototype.pow = function(w, c) {
        if (c.isZero()) return new a(1).toRed(this);
        if (c.cmpn(1) === 0) return w.clone();
        var d = 4, l = new Array(1 << d);
        l[0] = new a(1).toRed(this), l[1] = w;
        for (var b = 2; b < l.length; b++)
          l[b] = this.mul(l[b - 1], w);
        var _ = l[0], D = 0, x = 0, g = c.bitLength() % 26;
        for (g === 0 && (g = 26), b = c.length - 1; b >= 0; b--) {
          for (var y = c.words[b], N = g - 1; N >= 0; N--) {
            var Q = y >> N & 1;
            if (_ !== l[0] && (_ = this.sqr(_)), Q === 0 && D === 0) {
              x = 0;
              continue;
            }
            D <<= 1, D |= Q, x++, !(x !== d && (b !== 0 || N !== 0)) && (_ = this.mul(_, l[D]), x = 0, D = 0);
          }
          g = 26;
        }
        return _;
      }, ee.prototype.convertTo = function(w) {
        var c = w.umod(this.m);
        return c === w ? c.clone() : c;
      }, ee.prototype.convertFrom = function(w) {
        var c = w.clone();
        return c.red = null, c;
      }, a.mont = function(w) {
        return new ae(w);
      };
      function ae(j) {
        ee.call(this, j), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new a(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
      }
      s(ae, ee), ae.prototype.convertTo = function(w) {
        return this.imod(w.ushln(this.shift));
      }, ae.prototype.convertFrom = function(w) {
        var c = this.imod(w.mul(this.rinv));
        return c.red = null, c;
      }, ae.prototype.imul = function(w, c) {
        if (w.isZero() || c.isZero())
          return w.words[0] = 0, w.length = 1, w;
        var d = w.imul(c), l = d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), b = d.isub(l).iushrn(this.shift), _ = b;
        return b.cmp(this.m) >= 0 ? _ = b.isub(this.m) : b.cmpn(0) < 0 && (_ = b.iadd(this.m)), _._forceRed(this);
      }, ae.prototype.mul = function(w, c) {
        if (w.isZero() || c.isZero()) return new a(0)._forceRed(this);
        var d = w.mul(c), l = d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), b = d.isub(l).iushrn(this.shift), _ = b;
        return b.cmp(this.m) >= 0 ? _ = b.isub(this.m) : b.cmpn(0) < 0 && (_ = b.iadd(this.m)), _._forceRed(this);
      }, ae.prototype.invm = function(w) {
        var c = this.imod(w._invmp(this.m).mul(this.r2));
        return c._forceRed(this);
      };
    })(r, q_);
  }(ou)), ou.exports;
}
var yh, e1;
function Us() {
  if (e1) return yh;
  e1 = 1, yh = r;
  function r(e, t) {
    if (!e)
      throw new Error(t || "Assertion failed");
  }
  return r.equal = function(t, i, s) {
    if (t != i)
      throw new Error(s || "Assertion failed: " + t + " != " + i);
  }, yh;
}
var wh = {}, t1;
function Yv() {
  return t1 || (t1 = 1, function(r) {
    var e = r;
    function t(a, f) {
      if (Array.isArray(a))
        return a.slice();
      if (!a)
        return [];
      var h = [];
      if (typeof a != "string") {
        for (var p = 0; p < a.length; p++)
          h[p] = a[p] | 0;
        return h;
      }
      if (f === "hex") {
        a = a.replace(/[^a-z0-9]+/ig, ""), a.length % 2 !== 0 && (a = "0" + a);
        for (var p = 0; p < a.length; p += 2)
          h.push(parseInt(a[p] + a[p + 1], 16));
      } else
        for (var p = 0; p < a.length; p++) {
          var u = a.charCodeAt(p), m = u >> 8, A = u & 255;
          m ? h.push(m, A) : h.push(A);
        }
      return h;
    }
    e.toArray = t;
    function i(a) {
      return a.length === 1 ? "0" + a : a;
    }
    e.zero2 = i;
    function s(a) {
      for (var f = "", h = 0; h < a.length; h++)
        f += i(a[h].toString(16));
      return f;
    }
    e.toHex = s, e.encode = function(f, h) {
      return h === "hex" ? s(f) : f;
    };
  }(wh)), wh;
}
var r1;
function Ni() {
  return r1 || (r1 = 1, function(r) {
    var e = r, t = Vn(), i = Us(), s = Yv();
    e.assert = i, e.toArray = s.toArray, e.zero2 = s.zero2, e.toHex = s.toHex, e.encode = s.encode;
    function a(m, A, M) {
      var I = new Array(Math.max(m.bitLength(), M) + 1), C;
      for (C = 0; C < I.length; C += 1)
        I[C] = 0;
      var R = 1 << A + 1, L = m.clone();
      for (C = 0; C < I.length; C++) {
        var K, F = L.andln(R - 1);
        L.isOdd() ? (F > (R >> 1) - 1 ? K = (R >> 1) - F : K = F, L.isubn(K)) : K = 0, I[C] = K, L.iushrn(1);
      }
      return I;
    }
    e.getNAF = a;
    function f(m, A) {
      var M = [
        [],
        []
      ];
      m = m.clone(), A = A.clone();
      for (var I = 0, C = 0, R; m.cmpn(-I) > 0 || A.cmpn(-C) > 0; ) {
        var L = m.andln(3) + I & 3, K = A.andln(3) + C & 3;
        L === 3 && (L = -1), K === 3 && (K = -1);
        var F;
        L & 1 ? (R = m.andln(7) + I & 7, (R === 3 || R === 5) && K === 2 ? F = -L : F = L) : F = 0, M[0].push(F);
        var V;
        K & 1 ? (R = A.andln(7) + C & 7, (R === 3 || R === 5) && L === 2 ? V = -K : V = K) : V = 0, M[1].push(V), 2 * I === F + 1 && (I = 1 - I), 2 * C === V + 1 && (C = 1 - C), m.iushrn(1), A.iushrn(1);
      }
      return M;
    }
    e.getJSF = f;
    function h(m, A, M) {
      var I = "_" + A;
      m.prototype[A] = function() {
        return this[I] !== void 0 ? this[I] : this[I] = M.call(this);
      };
    }
    e.cachedProperty = h;
    function p(m) {
      return typeof m == "string" ? e.toArray(m, "hex") : m;
    }
    e.parseBytes = p;
    function u(m) {
      return new t(m, "hex", "le");
    }
    e.intFromLE = u;
  }(mh)), mh;
}
var Gc = { exports: {} }, i1;
function Qv() {
  if (i1) return Gc.exports;
  i1 = 1;
  var r;
  Gc.exports = function(s) {
    return r || (r = new e(null)), r.generate(s);
  };
  function e(i) {
    this.rand = i;
  }
  if (Gc.exports.Rand = e, e.prototype.generate = function(s) {
    return this._rand(s);
  }, e.prototype._rand = function(s) {
    if (this.rand.getBytes)
      return this.rand.getBytes(s);
    for (var a = new Uint8Array(s), f = 0; f < a.length; f++)
      a[f] = this.rand.getByte();
    return a;
  }, typeof self == "object")
    self.crypto && self.crypto.getRandomValues ? e.prototype._rand = function(s) {
      var a = new Uint8Array(s);
      return self.crypto.getRandomValues(a), a;
    } : self.msCrypto && self.msCrypto.getRandomValues ? e.prototype._rand = function(s) {
      var a = new Uint8Array(s);
      return self.msCrypto.getRandomValues(a), a;
    } : typeof window == "object" && (e.prototype._rand = function() {
      throw new Error("Not implemented yet");
    });
  else
    try {
      var t = Kl;
      if (typeof t.randomBytes != "function")
        throw new Error("Not supported");
      e.prototype._rand = function(s) {
        return t.randomBytes(s);
      };
    } catch {
    }
  return Gc.exports;
}
var _h = {}, Ah, n1;
function qu() {
  if (n1) return Ah;
  n1 = 1;
  var r = Vn(), e = Ni(), t = e.getNAF, i = e.getJSF, s = e.assert;
  function a(h, p) {
    this.type = h, this.p = new r(p.p, 16), this.red = p.prime ? r.red(p.prime) : r.mont(this.p), this.zero = new r(0).toRed(this.red), this.one = new r(1).toRed(this.red), this.two = new r(2).toRed(this.red), this.n = p.n && new r(p.n, 16), this.g = p.g && this.pointFromJSON(p.g, p.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
    var u = this.n && this.p.div(this.n);
    !u || u.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
  }
  Ah = a, a.prototype.point = function() {
    throw new Error("Not implemented");
  }, a.prototype.validate = function() {
    throw new Error("Not implemented");
  }, a.prototype._fixedNafMul = function(p, u) {
    s(p.precomputed);
    var m = p._getDoubles(), A = t(u, 1, this._bitLength), M = (1 << m.step + 1) - (m.step % 2 === 0 ? 2 : 1);
    M /= 3;
    var I = [], C, R;
    for (C = 0; C < A.length; C += m.step) {
      R = 0;
      for (var L = C + m.step - 1; L >= C; L--)
        R = (R << 1) + A[L];
      I.push(R);
    }
    for (var K = this.jpoint(null, null, null), F = this.jpoint(null, null, null), V = M; V > 0; V--) {
      for (C = 0; C < I.length; C++)
        R = I[C], R === V ? F = F.mixedAdd(m.points[C]) : R === -V && (F = F.mixedAdd(m.points[C].neg()));
      K = K.add(F);
    }
    return K.toP();
  }, a.prototype._wnafMul = function(p, u) {
    var m = 4, A = p._getNAFPoints(m);
    m = A.wnd;
    for (var M = A.points, I = t(u, m, this._bitLength), C = this.jpoint(null, null, null), R = I.length - 1; R >= 0; R--) {
      for (var L = 0; R >= 0 && I[R] === 0; R--)
        L++;
      if (R >= 0 && L++, C = C.dblp(L), R < 0)
        break;
      var K = I[R];
      s(K !== 0), p.type === "affine" ? K > 0 ? C = C.mixedAdd(M[K - 1 >> 1]) : C = C.mixedAdd(M[-K - 1 >> 1].neg()) : K > 0 ? C = C.add(M[K - 1 >> 1]) : C = C.add(M[-K - 1 >> 1].neg());
    }
    return p.type === "affine" ? C.toP() : C;
  }, a.prototype._wnafMulAdd = function(p, u, m, A, M) {
    var I = this._wnafT1, C = this._wnafT2, R = this._wnafT3, L = 0, K, F, V;
    for (K = 0; K < A; K++) {
      V = u[K];
      var B = V._getNAFPoints(p);
      I[K] = B.wnd, C[K] = B.points;
    }
    for (K = A - 1; K >= 1; K -= 2) {
      var z = K - 1, q = K;
      if (I[z] !== 1 || I[q] !== 1) {
        R[z] = t(m[z], I[z], this._bitLength), R[q] = t(m[q], I[q], this._bitLength), L = Math.max(R[z].length, L), L = Math.max(R[q].length, L);
        continue;
      }
      var E = [
        u[z],
        /* 1 */
        null,
        /* 3 */
        null,
        /* 5 */
        u[q]
        /* 7 */
      ];
      u[z].y.cmp(u[q].y) === 0 ? (E[1] = u[z].add(u[q]), E[2] = u[z].toJ().mixedAdd(u[q].neg())) : u[z].y.cmp(u[q].y.redNeg()) === 0 ? (E[1] = u[z].toJ().mixedAdd(u[q]), E[2] = u[z].add(u[q].neg())) : (E[1] = u[z].toJ().mixedAdd(u[q]), E[2] = u[z].toJ().mixedAdd(u[q].neg()));
      var U = [
        -3,
        /* -1 -1 */
        -1,
        /* -1 0 */
        -5,
        /* -1 1 */
        -7,
        /* 0 -1 */
        0,
        /* 0 0 */
        7,
        /* 0 1 */
        5,
        /* 1 -1 */
        1,
        /* 1 0 */
        3
        /* 1 1 */
      ], ee = i(m[z], m[q]);
      for (L = Math.max(ee[0].length, L), R[z] = new Array(L), R[q] = new Array(L), F = 0; F < L; F++) {
        var ae = ee[0][F] | 0, j = ee[1][F] | 0;
        R[z][F] = U[(ae + 1) * 3 + (j + 1)], R[q][F] = 0, C[z] = E;
      }
    }
    var w = this.jpoint(null, null, null), c = this._wnafT4;
    for (K = L; K >= 0; K--) {
      for (var d = 0; K >= 0; ) {
        var l = !0;
        for (F = 0; F < A; F++)
          c[F] = R[F][K] | 0, c[F] !== 0 && (l = !1);
        if (!l)
          break;
        d++, K--;
      }
      if (K >= 0 && d++, w = w.dblp(d), K < 0)
        break;
      for (F = 0; F < A; F++) {
        var b = c[F];
        b !== 0 && (b > 0 ? V = C[F][b - 1 >> 1] : b < 0 && (V = C[F][-b - 1 >> 1].neg()), V.type === "affine" ? w = w.mixedAdd(V) : w = w.add(V));
      }
    }
    for (K = 0; K < A; K++)
      C[K] = null;
    return M ? w : w.toP();
  };
  function f(h, p) {
    this.curve = h, this.type = p, this.precomputed = null;
  }
  return a.BasePoint = f, f.prototype.eq = function() {
    throw new Error("Not implemented");
  }, f.prototype.validate = function() {
    return this.curve.validate(this);
  }, a.prototype.decodePoint = function(p, u) {
    p = e.toArray(p, u);
    var m = this.p.byteLength();
    if ((p[0] === 4 || p[0] === 6 || p[0] === 7) && p.length - 1 === 2 * m) {
      p[0] === 6 ? s(p[p.length - 1] % 2 === 0) : p[0] === 7 && s(p[p.length - 1] % 2 === 1);
      var A = this.point(
        p.slice(1, 1 + m),
        p.slice(1 + m, 1 + 2 * m)
      );
      return A;
    } else if ((p[0] === 2 || p[0] === 3) && p.length - 1 === m)
      return this.pointFromX(p.slice(1, 1 + m), p[0] === 3);
    throw new Error("Unknown point format");
  }, f.prototype.encodeCompressed = function(p) {
    return this.encode(p, !0);
  }, f.prototype._encode = function(p) {
    var u = this.curve.p.byteLength(), m = this.getX().toArray("be", u);
    return p ? [this.getY().isEven() ? 2 : 3].concat(m) : [4].concat(m, this.getY().toArray("be", u));
  }, f.prototype.encode = function(p, u) {
    return e.encode(this._encode(u), p);
  }, f.prototype.precompute = function(p) {
    if (this.precomputed)
      return this;
    var u = {
      doubles: null,
      naf: null,
      beta: null
    };
    return u.naf = this._getNAFPoints(8), u.doubles = this._getDoubles(4, p), u.beta = this._getBeta(), this.precomputed = u, this;
  }, f.prototype._hasDoubles = function(p) {
    if (!this.precomputed)
      return !1;
    var u = this.precomputed.doubles;
    return u ? u.points.length >= Math.ceil((p.bitLength() + 1) / u.step) : !1;
  }, f.prototype._getDoubles = function(p, u) {
    if (this.precomputed && this.precomputed.doubles)
      return this.precomputed.doubles;
    for (var m = [this], A = this, M = 0; M < u; M += p) {
      for (var I = 0; I < p; I++)
        A = A.dbl();
      m.push(A);
    }
    return {
      step: p,
      points: m
    };
  }, f.prototype._getNAFPoints = function(p) {
    if (this.precomputed && this.precomputed.naf)
      return this.precomputed.naf;
    for (var u = [this], m = (1 << p) - 1, A = m === 1 ? null : this.dbl(), M = 1; M < m; M++)
      u[M] = u[M - 1].add(A);
    return {
      wnd: p,
      points: u
    };
  }, f.prototype._getBeta = function() {
    return null;
  }, f.prototype.dblp = function(p) {
    for (var u = this, m = 0; m < p; m++)
      u = u.dbl();
    return u;
  }, Ah;
}
var Eh, s1;
function F_() {
  if (s1) return Eh;
  s1 = 1;
  var r = Ni(), e = Vn(), t = Ou(), i = qu(), s = r.assert;
  function a(p) {
    i.call(this, "short", p), this.a = new e(p.a, 16).toRed(this.red), this.b = new e(p.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(p), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
  }
  t(a, i), Eh = a, a.prototype._getEndomorphism = function(u) {
    if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
      var m, A;
      if (u.beta)
        m = new e(u.beta, 16).toRed(this.red);
      else {
        var M = this._getEndoRoots(this.p);
        m = M[0].cmp(M[1]) < 0 ? M[0] : M[1], m = m.toRed(this.red);
      }
      if (u.lambda)
        A = new e(u.lambda, 16);
      else {
        var I = this._getEndoRoots(this.n);
        this.g.mul(I[0]).x.cmp(this.g.x.redMul(m)) === 0 ? A = I[0] : (A = I[1], s(this.g.mul(A).x.cmp(this.g.x.redMul(m)) === 0));
      }
      var C;
      return u.basis ? C = u.basis.map(function(R) {
        return {
          a: new e(R.a, 16),
          b: new e(R.b, 16)
        };
      }) : C = this._getEndoBasis(A), {
        beta: m,
        lambda: A,
        basis: C
      };
    }
  }, a.prototype._getEndoRoots = function(u) {
    var m = u === this.p ? this.red : e.mont(u), A = new e(2).toRed(m).redInvm(), M = A.redNeg(), I = new e(3).toRed(m).redNeg().redSqrt().redMul(A), C = M.redAdd(I).fromRed(), R = M.redSub(I).fromRed();
    return [C, R];
  }, a.prototype._getEndoBasis = function(u) {
    for (var m = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), A = u, M = this.n.clone(), I = new e(1), C = new e(0), R = new e(0), L = new e(1), K, F, V, B, z, q, E, U = 0, ee, ae; A.cmpn(0) !== 0; ) {
      var j = M.div(A);
      ee = M.sub(j.mul(A)), ae = R.sub(j.mul(I));
      var w = L.sub(j.mul(C));
      if (!V && ee.cmp(m) < 0)
        K = E.neg(), F = I, V = ee.neg(), B = ae;
      else if (V && ++U === 2)
        break;
      E = ee, M = A, A = ee, R = I, I = ae, L = C, C = w;
    }
    z = ee.neg(), q = ae;
    var c = V.sqr().add(B.sqr()), d = z.sqr().add(q.sqr());
    return d.cmp(c) >= 0 && (z = K, q = F), V.negative && (V = V.neg(), B = B.neg()), z.negative && (z = z.neg(), q = q.neg()), [
      { a: V, b: B },
      { a: z, b: q }
    ];
  }, a.prototype._endoSplit = function(u) {
    var m = this.endo.basis, A = m[0], M = m[1], I = M.b.mul(u).divRound(this.n), C = A.b.neg().mul(u).divRound(this.n), R = I.mul(A.a), L = C.mul(M.a), K = I.mul(A.b), F = C.mul(M.b), V = u.sub(R).sub(L), B = K.add(F).neg();
    return { k1: V, k2: B };
  }, a.prototype.pointFromX = function(u, m) {
    u = new e(u, 16), u.red || (u = u.toRed(this.red));
    var A = u.redSqr().redMul(u).redIAdd(u.redMul(this.a)).redIAdd(this.b), M = A.redSqrt();
    if (M.redSqr().redSub(A).cmp(this.zero) !== 0)
      throw new Error("invalid point");
    var I = M.fromRed().isOdd();
    return (m && !I || !m && I) && (M = M.redNeg()), this.point(u, M);
  }, a.prototype.validate = function(u) {
    if (u.inf)
      return !0;
    var m = u.x, A = u.y, M = this.a.redMul(m), I = m.redSqr().redMul(m).redIAdd(M).redIAdd(this.b);
    return A.redSqr().redISub(I).cmpn(0) === 0;
  }, a.prototype._endoWnafMulAdd = function(u, m, A) {
    for (var M = this._endoWnafT1, I = this._endoWnafT2, C = 0; C < u.length; C++) {
      var R = this._endoSplit(m[C]), L = u[C], K = L._getBeta();
      R.k1.negative && (R.k1.ineg(), L = L.neg(!0)), R.k2.negative && (R.k2.ineg(), K = K.neg(!0)), M[C * 2] = L, M[C * 2 + 1] = K, I[C * 2] = R.k1, I[C * 2 + 1] = R.k2;
    }
    for (var F = this._wnafMulAdd(1, M, I, C * 2, A), V = 0; V < C * 2; V++)
      M[V] = null, I[V] = null;
    return F;
  };
  function f(p, u, m, A) {
    i.BasePoint.call(this, p, "affine"), u === null && m === null ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new e(u, 16), this.y = new e(m, 16), A && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
  }
  t(f, i.BasePoint), a.prototype.point = function(u, m, A) {
    return new f(this, u, m, A);
  }, a.prototype.pointFromJSON = function(u, m) {
    return f.fromJSON(this, u, m);
  }, f.prototype._getBeta = function() {
    if (this.curve.endo) {
      var u = this.precomputed;
      if (u && u.beta)
        return u.beta;
      var m = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
      if (u) {
        var A = this.curve, M = function(I) {
          return A.point(I.x.redMul(A.endo.beta), I.y);
        };
        u.beta = m, m.precomputed = {
          beta: null,
          naf: u.naf && {
            wnd: u.naf.wnd,
            points: u.naf.points.map(M)
          },
          doubles: u.doubles && {
            step: u.doubles.step,
            points: u.doubles.points.map(M)
          }
        };
      }
      return m;
    }
  }, f.prototype.toJSON = function() {
    return this.precomputed ? [this.x, this.y, this.precomputed && {
      doubles: this.precomputed.doubles && {
        step: this.precomputed.doubles.step,
        points: this.precomputed.doubles.points.slice(1)
      },
      naf: this.precomputed.naf && {
        wnd: this.precomputed.naf.wnd,
        points: this.precomputed.naf.points.slice(1)
      }
    }] : [this.x, this.y];
  }, f.fromJSON = function(u, m, A) {
    typeof m == "string" && (m = JSON.parse(m));
    var M = u.point(m[0], m[1], A);
    if (!m[2])
      return M;
    function I(R) {
      return u.point(R[0], R[1], A);
    }
    var C = m[2];
    return M.precomputed = {
      beta: null,
      doubles: C.doubles && {
        step: C.doubles.step,
        points: [M].concat(C.doubles.points.map(I))
      },
      naf: C.naf && {
        wnd: C.naf.wnd,
        points: [M].concat(C.naf.points.map(I))
      }
    }, M;
  }, f.prototype.inspect = function() {
    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
  }, f.prototype.isInfinity = function() {
    return this.inf;
  }, f.prototype.add = function(u) {
    if (this.inf)
      return u;
    if (u.inf)
      return this;
    if (this.eq(u))
      return this.dbl();
    if (this.neg().eq(u))
      return this.curve.point(null, null);
    if (this.x.cmp(u.x) === 0)
      return this.curve.point(null, null);
    var m = this.y.redSub(u.y);
    m.cmpn(0) !== 0 && (m = m.redMul(this.x.redSub(u.x).redInvm()));
    var A = m.redSqr().redISub(this.x).redISub(u.x), M = m.redMul(this.x.redSub(A)).redISub(this.y);
    return this.curve.point(A, M);
  }, f.prototype.dbl = function() {
    if (this.inf)
      return this;
    var u = this.y.redAdd(this.y);
    if (u.cmpn(0) === 0)
      return this.curve.point(null, null);
    var m = this.curve.a, A = this.x.redSqr(), M = u.redInvm(), I = A.redAdd(A).redIAdd(A).redIAdd(m).redMul(M), C = I.redSqr().redISub(this.x.redAdd(this.x)), R = I.redMul(this.x.redSub(C)).redISub(this.y);
    return this.curve.point(C, R);
  }, f.prototype.getX = function() {
    return this.x.fromRed();
  }, f.prototype.getY = function() {
    return this.y.fromRed();
  }, f.prototype.mul = function(u) {
    return u = new e(u, 16), this.isInfinity() ? this : this._hasDoubles(u) ? this.curve._fixedNafMul(this, u) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [u]) : this.curve._wnafMul(this, u);
  }, f.prototype.mulAdd = function(u, m, A) {
    var M = [this, m], I = [u, A];
    return this.curve.endo ? this.curve._endoWnafMulAdd(M, I) : this.curve._wnafMulAdd(1, M, I, 2);
  }, f.prototype.jmulAdd = function(u, m, A) {
    var M = [this, m], I = [u, A];
    return this.curve.endo ? this.curve._endoWnafMulAdd(M, I, !0) : this.curve._wnafMulAdd(1, M, I, 2, !0);
  }, f.prototype.eq = function(u) {
    return this === u || this.inf === u.inf && (this.inf || this.x.cmp(u.x) === 0 && this.y.cmp(u.y) === 0);
  }, f.prototype.neg = function(u) {
    if (this.inf)
      return this;
    var m = this.curve.point(this.x, this.y.redNeg());
    if (u && this.precomputed) {
      var A = this.precomputed, M = function(I) {
        return I.neg();
      };
      m.precomputed = {
        naf: A.naf && {
          wnd: A.naf.wnd,
          points: A.naf.points.map(M)
        },
        doubles: A.doubles && {
          step: A.doubles.step,
          points: A.doubles.points.map(M)
        }
      };
    }
    return m;
  }, f.prototype.toJ = function() {
    if (this.inf)
      return this.curve.jpoint(null, null, null);
    var u = this.curve.jpoint(this.x, this.y, this.curve.one);
    return u;
  };
  function h(p, u, m, A) {
    i.BasePoint.call(this, p, "jacobian"), u === null && m === null && A === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new e(0)) : (this.x = new e(u, 16), this.y = new e(m, 16), this.z = new e(A, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
  }
  return t(h, i.BasePoint), a.prototype.jpoint = function(u, m, A) {
    return new h(this, u, m, A);
  }, h.prototype.toP = function() {
    if (this.isInfinity())
      return this.curve.point(null, null);
    var u = this.z.redInvm(), m = u.redSqr(), A = this.x.redMul(m), M = this.y.redMul(m).redMul(u);
    return this.curve.point(A, M);
  }, h.prototype.neg = function() {
    return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
  }, h.prototype.add = function(u) {
    if (this.isInfinity())
      return u;
    if (u.isInfinity())
      return this;
    var m = u.z.redSqr(), A = this.z.redSqr(), M = this.x.redMul(m), I = u.x.redMul(A), C = this.y.redMul(m.redMul(u.z)), R = u.y.redMul(A.redMul(this.z)), L = M.redSub(I), K = C.redSub(R);
    if (L.cmpn(0) === 0)
      return K.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
    var F = L.redSqr(), V = F.redMul(L), B = M.redMul(F), z = K.redSqr().redIAdd(V).redISub(B).redISub(B), q = K.redMul(B.redISub(z)).redISub(C.redMul(V)), E = this.z.redMul(u.z).redMul(L);
    return this.curve.jpoint(z, q, E);
  }, h.prototype.mixedAdd = function(u) {
    if (this.isInfinity())
      return u.toJ();
    if (u.isInfinity())
      return this;
    var m = this.z.redSqr(), A = this.x, M = u.x.redMul(m), I = this.y, C = u.y.redMul(m).redMul(this.z), R = A.redSub(M), L = I.redSub(C);
    if (R.cmpn(0) === 0)
      return L.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
    var K = R.redSqr(), F = K.redMul(R), V = A.redMul(K), B = L.redSqr().redIAdd(F).redISub(V).redISub(V), z = L.redMul(V.redISub(B)).redISub(I.redMul(F)), q = this.z.redMul(R);
    return this.curve.jpoint(B, z, q);
  }, h.prototype.dblp = function(u) {
    if (u === 0)
      return this;
    if (this.isInfinity())
      return this;
    if (!u)
      return this.dbl();
    var m;
    if (this.curve.zeroA || this.curve.threeA) {
      var A = this;
      for (m = 0; m < u; m++)
        A = A.dbl();
      return A;
    }
    var M = this.curve.a, I = this.curve.tinv, C = this.x, R = this.y, L = this.z, K = L.redSqr().redSqr(), F = R.redAdd(R);
    for (m = 0; m < u; m++) {
      var V = C.redSqr(), B = F.redSqr(), z = B.redSqr(), q = V.redAdd(V).redIAdd(V).redIAdd(M.redMul(K)), E = C.redMul(B), U = q.redSqr().redISub(E.redAdd(E)), ee = E.redISub(U), ae = q.redMul(ee);
      ae = ae.redIAdd(ae).redISub(z);
      var j = F.redMul(L);
      m + 1 < u && (K = K.redMul(z)), C = U, L = j, F = ae;
    }
    return this.curve.jpoint(C, F.redMul(I), L);
  }, h.prototype.dbl = function() {
    return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
  }, h.prototype._zeroDbl = function() {
    var u, m, A;
    if (this.zOne) {
      var M = this.x.redSqr(), I = this.y.redSqr(), C = I.redSqr(), R = this.x.redAdd(I).redSqr().redISub(M).redISub(C);
      R = R.redIAdd(R);
      var L = M.redAdd(M).redIAdd(M), K = L.redSqr().redISub(R).redISub(R), F = C.redIAdd(C);
      F = F.redIAdd(F), F = F.redIAdd(F), u = K, m = L.redMul(R.redISub(K)).redISub(F), A = this.y.redAdd(this.y);
    } else {
      var V = this.x.redSqr(), B = this.y.redSqr(), z = B.redSqr(), q = this.x.redAdd(B).redSqr().redISub(V).redISub(z);
      q = q.redIAdd(q);
      var E = V.redAdd(V).redIAdd(V), U = E.redSqr(), ee = z.redIAdd(z);
      ee = ee.redIAdd(ee), ee = ee.redIAdd(ee), u = U.redISub(q).redISub(q), m = E.redMul(q.redISub(u)).redISub(ee), A = this.y.redMul(this.z), A = A.redIAdd(A);
    }
    return this.curve.jpoint(u, m, A);
  }, h.prototype._threeDbl = function() {
    var u, m, A;
    if (this.zOne) {
      var M = this.x.redSqr(), I = this.y.redSqr(), C = I.redSqr(), R = this.x.redAdd(I).redSqr().redISub(M).redISub(C);
      R = R.redIAdd(R);
      var L = M.redAdd(M).redIAdd(M).redIAdd(this.curve.a), K = L.redSqr().redISub(R).redISub(R);
      u = K;
      var F = C.redIAdd(C);
      F = F.redIAdd(F), F = F.redIAdd(F), m = L.redMul(R.redISub(K)).redISub(F), A = this.y.redAdd(this.y);
    } else {
      var V = this.z.redSqr(), B = this.y.redSqr(), z = this.x.redMul(B), q = this.x.redSub(V).redMul(this.x.redAdd(V));
      q = q.redAdd(q).redIAdd(q);
      var E = z.redIAdd(z);
      E = E.redIAdd(E);
      var U = E.redAdd(E);
      u = q.redSqr().redISub(U), A = this.y.redAdd(this.z).redSqr().redISub(B).redISub(V);
      var ee = B.redSqr();
      ee = ee.redIAdd(ee), ee = ee.redIAdd(ee), ee = ee.redIAdd(ee), m = q.redMul(E.redISub(u)).redISub(ee);
    }
    return this.curve.jpoint(u, m, A);
  }, h.prototype._dbl = function() {
    var u = this.curve.a, m = this.x, A = this.y, M = this.z, I = M.redSqr().redSqr(), C = m.redSqr(), R = A.redSqr(), L = C.redAdd(C).redIAdd(C).redIAdd(u.redMul(I)), K = m.redAdd(m);
    K = K.redIAdd(K);
    var F = K.redMul(R), V = L.redSqr().redISub(F.redAdd(F)), B = F.redISub(V), z = R.redSqr();
    z = z.redIAdd(z), z = z.redIAdd(z), z = z.redIAdd(z);
    var q = L.redMul(B).redISub(z), E = A.redAdd(A).redMul(M);
    return this.curve.jpoint(V, q, E);
  }, h.prototype.trpl = function() {
    if (!this.curve.zeroA)
      return this.dbl().add(this);
    var u = this.x.redSqr(), m = this.y.redSqr(), A = this.z.redSqr(), M = m.redSqr(), I = u.redAdd(u).redIAdd(u), C = I.redSqr(), R = this.x.redAdd(m).redSqr().redISub(u).redISub(M);
    R = R.redIAdd(R), R = R.redAdd(R).redIAdd(R), R = R.redISub(C);
    var L = R.redSqr(), K = M.redIAdd(M);
    K = K.redIAdd(K), K = K.redIAdd(K), K = K.redIAdd(K);
    var F = I.redIAdd(R).redSqr().redISub(C).redISub(L).redISub(K), V = m.redMul(F);
    V = V.redIAdd(V), V = V.redIAdd(V);
    var B = this.x.redMul(L).redISub(V);
    B = B.redIAdd(B), B = B.redIAdd(B);
    var z = this.y.redMul(F.redMul(K.redISub(F)).redISub(R.redMul(L)));
    z = z.redIAdd(z), z = z.redIAdd(z), z = z.redIAdd(z);
    var q = this.z.redAdd(R).redSqr().redISub(A).redISub(L);
    return this.curve.jpoint(B, z, q);
  }, h.prototype.mul = function(u, m) {
    return u = new e(u, m), this.curve._wnafMul(this, u);
  }, h.prototype.eq = function(u) {
    if (u.type === "affine")
      return this.eq(u.toJ());
    if (this === u)
      return !0;
    var m = this.z.redSqr(), A = u.z.redSqr();
    if (this.x.redMul(A).redISub(u.x.redMul(m)).cmpn(0) !== 0)
      return !1;
    var M = m.redMul(this.z), I = A.redMul(u.z);
    return this.y.redMul(I).redISub(u.y.redMul(M)).cmpn(0) === 0;
  }, h.prototype.eqXToP = function(u) {
    var m = this.z.redSqr(), A = u.toRed(this.curve.red).redMul(m);
    if (this.x.cmp(A) === 0)
      return !0;
    for (var M = u.clone(), I = this.curve.redN.redMul(m); ; ) {
      if (M.iadd(this.curve.n), M.cmp(this.curve.p) >= 0)
        return !1;
      if (A.redIAdd(I), this.x.cmp(A) === 0)
        return !0;
    }
  }, h.prototype.inspect = function() {
    return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
  }, h.prototype.isInfinity = function() {
    return this.z.cmpn(0) === 0;
  }, Eh;
}
var xh, a1;
function B_() {
  if (a1) return xh;
  a1 = 1;
  var r = Vn(), e = Ou(), t = qu(), i = Ni();
  function s(f) {
    t.call(this, "mont", f), this.a = new r(f.a, 16).toRed(this.red), this.b = new r(f.b, 16).toRed(this.red), this.i4 = new r(4).toRed(this.red).redInvm(), this.two = new r(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two));
  }
  e(s, t), xh = s, s.prototype.validate = function(h) {
    var p = h.normalize().x, u = p.redSqr(), m = u.redMul(p).redAdd(u.redMul(this.a)).redAdd(p), A = m.redSqrt();
    return A.redSqr().cmp(m) === 0;
  };
  function a(f, h, p) {
    t.BasePoint.call(this, f, "projective"), h === null && p === null ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new r(h, 16), this.z = new r(p, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)));
  }
  return e(a, t.BasePoint), s.prototype.decodePoint = function(h, p) {
    return this.point(i.toArray(h, p), 1);
  }, s.prototype.point = function(h, p) {
    return new a(this, h, p);
  }, s.prototype.pointFromJSON = function(h) {
    return a.fromJSON(this, h);
  }, a.prototype.precompute = function() {
  }, a.prototype._encode = function() {
    return this.getX().toArray("be", this.curve.p.byteLength());
  }, a.fromJSON = function(h, p) {
    return new a(h, p[0], p[1] || h.one);
  }, a.prototype.inspect = function() {
    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
  }, a.prototype.isInfinity = function() {
    return this.z.cmpn(0) === 0;
  }, a.prototype.dbl = function() {
    var h = this.x.redAdd(this.z), p = h.redSqr(), u = this.x.redSub(this.z), m = u.redSqr(), A = p.redSub(m), M = p.redMul(m), I = A.redMul(m.redAdd(this.curve.a24.redMul(A)));
    return this.curve.point(M, I);
  }, a.prototype.add = function() {
    throw new Error("Not supported on Montgomery curve");
  }, a.prototype.diffAdd = function(h, p) {
    var u = this.x.redAdd(this.z), m = this.x.redSub(this.z), A = h.x.redAdd(h.z), M = h.x.redSub(h.z), I = M.redMul(u), C = A.redMul(m), R = p.z.redMul(I.redAdd(C).redSqr()), L = p.x.redMul(I.redISub(C).redSqr());
    return this.curve.point(R, L);
  }, a.prototype.mul = function(h) {
    for (var p = h.clone(), u = this, m = this.curve.point(null, null), A = this, M = []; p.cmpn(0) !== 0; p.iushrn(1))
      M.push(p.andln(1));
    for (var I = M.length - 1; I >= 0; I--)
      M[I] === 0 ? (u = u.diffAdd(m, A), m = m.dbl()) : (m = u.diffAdd(m, A), u = u.dbl());
    return m;
  }, a.prototype.mulAdd = function() {
    throw new Error("Not supported on Montgomery curve");
  }, a.prototype.jumlAdd = function() {
    throw new Error("Not supported on Montgomery curve");
  }, a.prototype.eq = function(h) {
    return this.getX().cmp(h.getX()) === 0;
  }, a.prototype.normalize = function() {
    return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this;
  }, a.prototype.getX = function() {
    return this.normalize(), this.x.fromRed();
  }, xh;
}
var Sh, o1;
function L_() {
  if (o1) return Sh;
  o1 = 1;
  var r = Ni(), e = Vn(), t = Ou(), i = qu(), s = r.assert;
  function a(h) {
    this.twisted = (h.a | 0) !== 1, this.mOneA = this.twisted && (h.a | 0) === -1, this.extended = this.mOneA, i.call(this, "edwards", h), this.a = new e(h.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new e(h.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new e(h.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), s(!this.twisted || this.c.fromRed().cmpn(1) === 0), this.oneC = (h.c | 0) === 1;
  }
  t(a, i), Sh = a, a.prototype._mulA = function(p) {
    return this.mOneA ? p.redNeg() : this.a.redMul(p);
  }, a.prototype._mulC = function(p) {
    return this.oneC ? p : this.c.redMul(p);
  }, a.prototype.jpoint = function(p, u, m, A) {
    return this.point(p, u, m, A);
  }, a.prototype.pointFromX = function(p, u) {
    p = new e(p, 16), p.red || (p = p.toRed(this.red));
    var m = p.redSqr(), A = this.c2.redSub(this.a.redMul(m)), M = this.one.redSub(this.c2.redMul(this.d).redMul(m)), I = A.redMul(M.redInvm()), C = I.redSqrt();
    if (C.redSqr().redSub(I).cmp(this.zero) !== 0)
      throw new Error("invalid point");
    var R = C.fromRed().isOdd();
    return (u && !R || !u && R) && (C = C.redNeg()), this.point(p, C);
  }, a.prototype.pointFromY = function(p, u) {
    p = new e(p, 16), p.red || (p = p.toRed(this.red));
    var m = p.redSqr(), A = m.redSub(this.c2), M = m.redMul(this.d).redMul(this.c2).redSub(this.a), I = A.redMul(M.redInvm());
    if (I.cmp(this.zero) === 0) {
      if (u)
        throw new Error("invalid point");
      return this.point(this.zero, p);
    }
    var C = I.redSqrt();
    if (C.redSqr().redSub(I).cmp(this.zero) !== 0)
      throw new Error("invalid point");
    return C.fromRed().isOdd() !== u && (C = C.redNeg()), this.point(C, p);
  }, a.prototype.validate = function(p) {
    if (p.isInfinity())
      return !0;
    p.normalize();
    var u = p.x.redSqr(), m = p.y.redSqr(), A = u.redMul(this.a).redAdd(m), M = this.c2.redMul(this.one.redAdd(this.d.redMul(u).redMul(m)));
    return A.cmp(M) === 0;
  };
  function f(h, p, u, m, A) {
    i.BasePoint.call(this, h, "projective"), p === null && u === null && m === null ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new e(p, 16), this.y = new e(u, 16), this.z = m ? new e(m, 16) : this.curve.one, this.t = A && new e(A, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
  }
  return t(f, i.BasePoint), a.prototype.pointFromJSON = function(p) {
    return f.fromJSON(this, p);
  }, a.prototype.point = function(p, u, m, A) {
    return new f(this, p, u, m, A);
  }, f.fromJSON = function(p, u) {
    return new f(p, u[0], u[1], u[2]);
  }, f.prototype.inspect = function() {
    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
  }, f.prototype.isInfinity = function() {
    return this.x.cmpn(0) === 0 && (this.y.cmp(this.z) === 0 || this.zOne && this.y.cmp(this.curve.c) === 0);
  }, f.prototype._extDbl = function() {
    var p = this.x.redSqr(), u = this.y.redSqr(), m = this.z.redSqr();
    m = m.redIAdd(m);
    var A = this.curve._mulA(p), M = this.x.redAdd(this.y).redSqr().redISub(p).redISub(u), I = A.redAdd(u), C = I.redSub(m), R = A.redSub(u), L = M.redMul(C), K = I.redMul(R), F = M.redMul(R), V = C.redMul(I);
    return this.curve.point(L, K, V, F);
  }, f.prototype._projDbl = function() {
    var p = this.x.redAdd(this.y).redSqr(), u = this.x.redSqr(), m = this.y.redSqr(), A, M, I, C, R, L;
    if (this.curve.twisted) {
      C = this.curve._mulA(u);
      var K = C.redAdd(m);
      this.zOne ? (A = p.redSub(u).redSub(m).redMul(K.redSub(this.curve.two)), M = K.redMul(C.redSub(m)), I = K.redSqr().redSub(K).redSub(K)) : (R = this.z.redSqr(), L = K.redSub(R).redISub(R), A = p.redSub(u).redISub(m).redMul(L), M = K.redMul(C.redSub(m)), I = K.redMul(L));
    } else
      C = u.redAdd(m), R = this.curve._mulC(this.z).redSqr(), L = C.redSub(R).redSub(R), A = this.curve._mulC(p.redISub(C)).redMul(L), M = this.curve._mulC(C).redMul(u.redISub(m)), I = C.redMul(L);
    return this.curve.point(A, M, I);
  }, f.prototype.dbl = function() {
    return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl();
  }, f.prototype._extAdd = function(p) {
    var u = this.y.redSub(this.x).redMul(p.y.redSub(p.x)), m = this.y.redAdd(this.x).redMul(p.y.redAdd(p.x)), A = this.t.redMul(this.curve.dd).redMul(p.t), M = this.z.redMul(p.z.redAdd(p.z)), I = m.redSub(u), C = M.redSub(A), R = M.redAdd(A), L = m.redAdd(u), K = I.redMul(C), F = R.redMul(L), V = I.redMul(L), B = C.redMul(R);
    return this.curve.point(K, F, B, V);
  }, f.prototype._projAdd = function(p) {
    var u = this.z.redMul(p.z), m = u.redSqr(), A = this.x.redMul(p.x), M = this.y.redMul(p.y), I = this.curve.d.redMul(A).redMul(M), C = m.redSub(I), R = m.redAdd(I), L = this.x.redAdd(this.y).redMul(p.x.redAdd(p.y)).redISub(A).redISub(M), K = u.redMul(C).redMul(L), F, V;
    return this.curve.twisted ? (F = u.redMul(R).redMul(M.redSub(this.curve._mulA(A))), V = C.redMul(R)) : (F = u.redMul(R).redMul(M.redSub(A)), V = this.curve._mulC(C).redMul(R)), this.curve.point(K, F, V);
  }, f.prototype.add = function(p) {
    return this.isInfinity() ? p : p.isInfinity() ? this : this.curve.extended ? this._extAdd(p) : this._projAdd(p);
  }, f.prototype.mul = function(p) {
    return this._hasDoubles(p) ? this.curve._fixedNafMul(this, p) : this.curve._wnafMul(this, p);
  }, f.prototype.mulAdd = function(p, u, m) {
    return this.curve._wnafMulAdd(1, [this, u], [p, m], 2, !1);
  }, f.prototype.jmulAdd = function(p, u, m) {
    return this.curve._wnafMulAdd(1, [this, u], [p, m], 2, !0);
  }, f.prototype.normalize = function() {
    if (this.zOne)
      return this;
    var p = this.z.redInvm();
    return this.x = this.x.redMul(p), this.y = this.y.redMul(p), this.t && (this.t = this.t.redMul(p)), this.z = this.curve.one, this.zOne = !0, this;
  }, f.prototype.neg = function() {
    return this.curve.point(
      this.x.redNeg(),
      this.y,
      this.z,
      this.t && this.t.redNeg()
    );
  }, f.prototype.getX = function() {
    return this.normalize(), this.x.fromRed();
  }, f.prototype.getY = function() {
    return this.normalize(), this.y.fromRed();
  }, f.prototype.eq = function(p) {
    return this === p || this.getX().cmp(p.getX()) === 0 && this.getY().cmp(p.getY()) === 0;
  }, f.prototype.eqXToP = function(p) {
    var u = p.toRed(this.curve.red).redMul(this.z);
    if (this.x.cmp(u) === 0)
      return !0;
    for (var m = p.clone(), A = this.curve.redN.redMul(this.z); ; ) {
      if (m.iadd(this.curve.n), m.cmp(this.curve.p) >= 0)
        return !1;
      if (u.redIAdd(A), this.x.cmp(u) === 0)
        return !0;
    }
  }, f.prototype.toP = f.prototype.normalize, f.prototype.mixedAdd = f.prototype.add, Sh;
}
var c1;
function Xv() {
  return c1 || (c1 = 1, function(r) {
    var e = r;
    e.base = qu(), e.short = F_(), e.mont = B_(), e.edwards = L_();
  }(_h)), _h;
}
var Mh = {}, Ih = {}, zt = {}, u1;
function En() {
  if (u1) return zt;
  u1 = 1;
  var r = Us(), e = Ou();
  zt.inherits = e;
  function t(w, c) {
    return (w.charCodeAt(c) & 64512) !== 55296 || c < 0 || c + 1 >= w.length ? !1 : (w.charCodeAt(c + 1) & 64512) === 56320;
  }
  function i(w, c) {
    if (Array.isArray(w))
      return w.slice();
    if (!w)
      return [];
    var d = [];
    if (typeof w == "string")
      if (c) {
        if (c === "hex")
          for (w = w.replace(/[^a-z0-9]+/ig, ""), w.length % 2 !== 0 && (w = "0" + w), b = 0; b < w.length; b += 2)
            d.push(parseInt(w[b] + w[b + 1], 16));
      } else for (var l = 0, b = 0; b < w.length; b++) {
        var _ = w.charCodeAt(b);
        _ < 128 ? d[l++] = _ : _ < 2048 ? (d[l++] = _ >> 6 | 192, d[l++] = _ & 63 | 128) : t(w, b) ? (_ = 65536 + ((_ & 1023) << 10) + (w.charCodeAt(++b) & 1023), d[l++] = _ >> 18 | 240, d[l++] = _ >> 12 & 63 | 128, d[l++] = _ >> 6 & 63 | 128, d[l++] = _ & 63 | 128) : (d[l++] = _ >> 12 | 224, d[l++] = _ >> 6 & 63 | 128, d[l++] = _ & 63 | 128);
      }
    else
      for (b = 0; b < w.length; b++)
        d[b] = w[b] | 0;
    return d;
  }
  zt.toArray = i;
  function s(w) {
    for (var c = "", d = 0; d < w.length; d++)
      c += h(w[d].toString(16));
    return c;
  }
  zt.toHex = s;
  function a(w) {
    var c = w >>> 24 | w >>> 8 & 65280 | w << 8 & 16711680 | (w & 255) << 24;
    return c >>> 0;
  }
  zt.htonl = a;
  function f(w, c) {
    for (var d = "", l = 0; l < w.length; l++) {
      var b = w[l];
      c === "little" && (b = a(b)), d += p(b.toString(16));
    }
    return d;
  }
  zt.toHex32 = f;
  function h(w) {
    return w.length === 1 ? "0" + w : w;
  }
  zt.zero2 = h;
  function p(w) {
    return w.length === 7 ? "0" + w : w.length === 6 ? "00" + w : w.length === 5 ? "000" + w : w.length === 4 ? "0000" + w : w.length === 3 ? "00000" + w : w.length === 2 ? "000000" + w : w.length === 1 ? "0000000" + w : w;
  }
  zt.zero8 = p;
  function u(w, c, d, l) {
    var b = d - c;
    r(b % 4 === 0);
    for (var _ = new Array(b / 4), D = 0, x = c; D < _.length; D++, x += 4) {
      var g;
      l === "big" ? g = w[x] << 24 | w[x + 1] << 16 | w[x + 2] << 8 | w[x + 3] : g = w[x + 3] << 24 | w[x + 2] << 16 | w[x + 1] << 8 | w[x], _[D] = g >>> 0;
    }
    return _;
  }
  zt.join32 = u;
  function m(w, c) {
    for (var d = new Array(w.length * 4), l = 0, b = 0; l < w.length; l++, b += 4) {
      var _ = w[l];
      c === "big" ? (d[b] = _ >>> 24, d[b + 1] = _ >>> 16 & 255, d[b + 2] = _ >>> 8 & 255, d[b + 3] = _ & 255) : (d[b + 3] = _ >>> 24, d[b + 2] = _ >>> 16 & 255, d[b + 1] = _ >>> 8 & 255, d[b] = _ & 255);
    }
    return d;
  }
  zt.split32 = m;
  function A(w, c) {
    return w >>> c | w << 32 - c;
  }
  zt.rotr32 = A;
  function M(w, c) {
    return w << c | w >>> 32 - c;
  }
  zt.rotl32 = M;
  function I(w, c) {
    return w + c >>> 0;
  }
  zt.sum32 = I;
  function C(w, c, d) {
    return w + c + d >>> 0;
  }
  zt.sum32_3 = C;
  function R(w, c, d, l) {
    return w + c + d + l >>> 0;
  }
  zt.sum32_4 = R;
  function L(w, c, d, l, b) {
    return w + c + d + l + b >>> 0;
  }
  zt.sum32_5 = L;
  function K(w, c, d, l) {
    var b = w[c], _ = w[c + 1], D = l + _ >>> 0, x = (D < l ? 1 : 0) + d + b;
    w[c] = x >>> 0, w[c + 1] = D;
  }
  zt.sum64 = K;
  function F(w, c, d, l) {
    var b = c + l >>> 0, _ = (b < c ? 1 : 0) + w + d;
    return _ >>> 0;
  }
  zt.sum64_hi = F;
  function V(w, c, d, l) {
    var b = c + l;
    return b >>> 0;
  }
  zt.sum64_lo = V;
  function B(w, c, d, l, b, _, D, x) {
    var g = 0, y = c;
    y = y + l >>> 0, g += y < c ? 1 : 0, y = y + _ >>> 0, g += y < _ ? 1 : 0, y = y + x >>> 0, g += y < x ? 1 : 0;
    var N = w + d + b + D + g;
    return N >>> 0;
  }
  zt.sum64_4_hi = B;
  function z(w, c, d, l, b, _, D, x) {
    var g = c + l + _ + x;
    return g >>> 0;
  }
  zt.sum64_4_lo = z;
  function q(w, c, d, l, b, _, D, x, g, y) {
    var N = 0, Q = c;
    Q = Q + l >>> 0, N += Q < c ? 1 : 0, Q = Q + _ >>> 0, N += Q < _ ? 1 : 0, Q = Q + x >>> 0, N += Q < x ? 1 : 0, Q = Q + y >>> 0, N += Q < y ? 1 : 0;
    var Z = w + d + b + D + g + N;
    return Z >>> 0;
  }
  zt.sum64_5_hi = q;
  function E(w, c, d, l, b, _, D, x, g, y) {
    var N = c + l + _ + x + y;
    return N >>> 0;
  }
  zt.sum64_5_lo = E;
  function U(w, c, d) {
    var l = c << 32 - d | w >>> d;
    return l >>> 0;
  }
  zt.rotr64_hi = U;
  function ee(w, c, d) {
    var l = w << 32 - d | c >>> d;
    return l >>> 0;
  }
  zt.rotr64_lo = ee;
  function ae(w, c, d) {
    return w >>> d;
  }
  zt.shr64_hi = ae;
  function j(w, c, d) {
    var l = w << 32 - d | c >>> d;
    return l >>> 0;
  }
  return zt.shr64_lo = j, zt;
}
var Dh = {}, f1;
function Ro() {
  if (f1) return Dh;
  f1 = 1;
  var r = En(), e = Us();
  function t() {
    this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
  }
  return Dh.BlockHash = t, t.prototype.update = function(s, a) {
    if (s = r.toArray(s, a), this.pending ? this.pending = this.pending.concat(s) : this.pending = s, this.pendingTotal += s.length, this.pending.length >= this._delta8) {
      s = this.pending;
      var f = s.length % this._delta8;
      this.pending = s.slice(s.length - f, s.length), this.pending.length === 0 && (this.pending = null), s = r.join32(s, 0, s.length - f, this.endian);
      for (var h = 0; h < s.length; h += this._delta32)
        this._update(s, h, h + this._delta32);
    }
    return this;
  }, t.prototype.digest = function(s) {
    return this.update(this._pad()), e(this.pending === null), this._digest(s);
  }, t.prototype._pad = function() {
    var s = this.pendingTotal, a = this._delta8, f = a - (s + this.padLength) % a, h = new Array(f + this.padLength);
    h[0] = 128;
    for (var p = 1; p < f; p++)
      h[p] = 0;
    if (s <<= 3, this.endian === "big") {
      for (var u = 8; u < this.padLength; u++)
        h[p++] = 0;
      h[p++] = 0, h[p++] = 0, h[p++] = 0, h[p++] = 0, h[p++] = s >>> 24 & 255, h[p++] = s >>> 16 & 255, h[p++] = s >>> 8 & 255, h[p++] = s & 255;
    } else
      for (h[p++] = s & 255, h[p++] = s >>> 8 & 255, h[p++] = s >>> 16 & 255, h[p++] = s >>> 24 & 255, h[p++] = 0, h[p++] = 0, h[p++] = 0, h[p++] = 0, u = 8; u < this.padLength; u++)
        h[p++] = 0;
    return h;
  }, Dh;
}
var Ds = {}, cn = {}, h1;
function Zv() {
  if (h1) return cn;
  h1 = 1;
  var r = En(), e = r.rotr32;
  function t(m, A, M, I) {
    if (m === 0)
      return i(A, M, I);
    if (m === 1 || m === 3)
      return a(A, M, I);
    if (m === 2)
      return s(A, M, I);
  }
  cn.ft_1 = t;
  function i(m, A, M) {
    return m & A ^ ~m & M;
  }
  cn.ch32 = i;
  function s(m, A, M) {
    return m & A ^ m & M ^ A & M;
  }
  cn.maj32 = s;
  function a(m, A, M) {
    return m ^ A ^ M;
  }
  cn.p32 = a;
  function f(m) {
    return e(m, 2) ^ e(m, 13) ^ e(m, 22);
  }
  cn.s0_256 = f;
  function h(m) {
    return e(m, 6) ^ e(m, 11) ^ e(m, 25);
  }
  cn.s1_256 = h;
  function p(m) {
    return e(m, 7) ^ e(m, 18) ^ m >>> 3;
  }
  cn.g0_256 = p;
  function u(m) {
    return e(m, 17) ^ e(m, 19) ^ m >>> 10;
  }
  return cn.g1_256 = u, cn;
}
var Ph, l1;
function U_() {
  if (l1) return Ph;
  l1 = 1;
  var r = En(), e = Ro(), t = Zv(), i = r.rotl32, s = r.sum32, a = r.sum32_5, f = t.ft_1, h = e.BlockHash, p = [
    1518500249,
    1859775393,
    2400959708,
    3395469782
  ];
  function u() {
    if (!(this instanceof u))
      return new u();
    h.call(this), this.h = [
      1732584193,
      4023233417,
      2562383102,
      271733878,
      3285377520
    ], this.W = new Array(80);
  }
  return r.inherits(u, h), Ph = u, u.blockSize = 512, u.outSize = 160, u.hmacStrength = 80, u.padLength = 64, u.prototype._update = function(A, M) {
    for (var I = this.W, C = 0; C < 16; C++)
      I[C] = A[M + C];
    for (; C < I.length; C++)
      I[C] = i(I[C - 3] ^ I[C - 8] ^ I[C - 14] ^ I[C - 16], 1);
    var R = this.h[0], L = this.h[1], K = this.h[2], F = this.h[3], V = this.h[4];
    for (C = 0; C < I.length; C++) {
      var B = ~~(C / 20), z = a(i(R, 5), f(B, L, K, F), V, I[C], p[B]);
      V = F, F = K, K = i(L, 30), L = R, R = z;
    }
    this.h[0] = s(this.h[0], R), this.h[1] = s(this.h[1], L), this.h[2] = s(this.h[2], K), this.h[3] = s(this.h[3], F), this.h[4] = s(this.h[4], V);
  }, u.prototype._digest = function(A) {
    return A === "hex" ? r.toHex32(this.h, "big") : r.split32(this.h, "big");
  }, Ph;
}
var Ch, d1;
function eb() {
  if (d1) return Ch;
  d1 = 1;
  var r = En(), e = Ro(), t = Zv(), i = Us(), s = r.sum32, a = r.sum32_4, f = r.sum32_5, h = t.ch32, p = t.maj32, u = t.s0_256, m = t.s1_256, A = t.g0_256, M = t.g1_256, I = e.BlockHash, C = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ];
  function R() {
    if (!(this instanceof R))
      return new R();
    I.call(this), this.h = [
      1779033703,
      3144134277,
      1013904242,
      2773480762,
      1359893119,
      2600822924,
      528734635,
      1541459225
    ], this.k = C, this.W = new Array(64);
  }
  return r.inherits(R, I), Ch = R, R.blockSize = 512, R.outSize = 256, R.hmacStrength = 192, R.padLength = 64, R.prototype._update = function(K, F) {
    for (var V = this.W, B = 0; B < 16; B++)
      V[B] = K[F + B];
    for (; B < V.length; B++)
      V[B] = a(M(V[B - 2]), V[B - 7], A(V[B - 15]), V[B - 16]);
    var z = this.h[0], q = this.h[1], E = this.h[2], U = this.h[3], ee = this.h[4], ae = this.h[5], j = this.h[6], w = this.h[7];
    for (i(this.k.length === V.length), B = 0; B < V.length; B++) {
      var c = f(w, m(ee), h(ee, ae, j), this.k[B], V[B]), d = s(u(z), p(z, q, E));
      w = j, j = ae, ae = ee, ee = s(U, c), U = E, E = q, q = z, z = s(c, d);
    }
    this.h[0] = s(this.h[0], z), this.h[1] = s(this.h[1], q), this.h[2] = s(this.h[2], E), this.h[3] = s(this.h[3], U), this.h[4] = s(this.h[4], ee), this.h[5] = s(this.h[5], ae), this.h[6] = s(this.h[6], j), this.h[7] = s(this.h[7], w);
  }, R.prototype._digest = function(K) {
    return K === "hex" ? r.toHex32(this.h, "big") : r.split32(this.h, "big");
  }, Ch;
}
var Oh, p1;
function z_() {
  if (p1) return Oh;
  p1 = 1;
  var r = En(), e = eb();
  function t() {
    if (!(this instanceof t))
      return new t();
    e.call(this), this.h = [
      3238371032,
      914150663,
      812702999,
      4144912697,
      4290775857,
      1750603025,
      1694076839,
      3204075428
    ];
  }
  return r.inherits(t, e), Oh = t, t.blockSize = 512, t.outSize = 224, t.hmacStrength = 192, t.padLength = 64, t.prototype._digest = function(s) {
    return s === "hex" ? r.toHex32(this.h.slice(0, 7), "big") : r.split32(this.h.slice(0, 7), "big");
  }, Oh;
}
var Rh, g1;
function tb() {
  if (g1) return Rh;
  g1 = 1;
  var r = En(), e = Ro(), t = Us(), i = r.rotr64_hi, s = r.rotr64_lo, a = r.shr64_hi, f = r.shr64_lo, h = r.sum64, p = r.sum64_hi, u = r.sum64_lo, m = r.sum64_4_hi, A = r.sum64_4_lo, M = r.sum64_5_hi, I = r.sum64_5_lo, C = e.BlockHash, R = [
    1116352408,
    3609767458,
    1899447441,
    602891725,
    3049323471,
    3964484399,
    3921009573,
    2173295548,
    961987163,
    4081628472,
    1508970993,
    3053834265,
    2453635748,
    2937671579,
    2870763221,
    3664609560,
    3624381080,
    2734883394,
    310598401,
    1164996542,
    607225278,
    1323610764,
    1426881987,
    3590304994,
    1925078388,
    4068182383,
    2162078206,
    991336113,
    2614888103,
    633803317,
    3248222580,
    3479774868,
    3835390401,
    2666613458,
    4022224774,
    944711139,
    264347078,
    2341262773,
    604807628,
    2007800933,
    770255983,
    1495990901,
    1249150122,
    1856431235,
    1555081692,
    3175218132,
    1996064986,
    2198950837,
    2554220882,
    3999719339,
    2821834349,
    766784016,
    2952996808,
    2566594879,
    3210313671,
    3203337956,
    3336571891,
    1034457026,
    3584528711,
    2466948901,
    113926993,
    3758326383,
    338241895,
    168717936,
    666307205,
    1188179964,
    773529912,
    1546045734,
    1294757372,
    1522805485,
    1396182291,
    2643833823,
    1695183700,
    2343527390,
    1986661051,
    1014477480,
    2177026350,
    1206759142,
    2456956037,
    344077627,
    2730485921,
    1290863460,
    2820302411,
    3158454273,
    3259730800,
    3505952657,
    3345764771,
    106217008,
    3516065817,
    3606008344,
    3600352804,
    1432725776,
    4094571909,
    1467031594,
    275423344,
    851169720,
    430227734,
    3100823752,
    506948616,
    1363258195,
    659060556,
    3750685593,
    883997877,
    3785050280,
    958139571,
    3318307427,
    1322822218,
    3812723403,
    1537002063,
    2003034995,
    1747873779,
    3602036899,
    1955562222,
    1575990012,
    2024104815,
    1125592928,
    2227730452,
    2716904306,
    2361852424,
    442776044,
    2428436474,
    593698344,
    2756734187,
    3733110249,
    3204031479,
    2999351573,
    3329325298,
    3815920427,
    3391569614,
    3928383900,
    3515267271,
    566280711,
    3940187606,
    3454069534,
    4118630271,
    4000239992,
    116418474,
    1914138554,
    174292421,
    2731055270,
    289380356,
    3203993006,
    460393269,
    320620315,
    685471733,
    587496836,
    852142971,
    1086792851,
    1017036298,
    365543100,
    1126000580,
    2618297676,
    1288033470,
    3409855158,
    1501505948,
    4234509866,
    1607167915,
    987167468,
    1816402316,
    1246189591
  ];
  function L() {
    if (!(this instanceof L))
      return new L();
    C.call(this), this.h = [
      1779033703,
      4089235720,
      3144134277,
      2227873595,
      1013904242,
      4271175723,
      2773480762,
      1595750129,
      1359893119,
      2917565137,
      2600822924,
      725511199,
      528734635,
      4215389547,
      1541459225,
      327033209
    ], this.k = R, this.W = new Array(160);
  }
  r.inherits(L, C), Rh = L, L.blockSize = 1024, L.outSize = 512, L.hmacStrength = 192, L.padLength = 128, L.prototype._prepareBlock = function(d, l) {
    for (var b = this.W, _ = 0; _ < 32; _++)
      b[_] = d[l + _];
    for (; _ < b.length; _ += 2) {
      var D = j(b[_ - 4], b[_ - 3]), x = w(b[_ - 4], b[_ - 3]), g = b[_ - 14], y = b[_ - 13], N = ee(b[_ - 30], b[_ - 29]), Q = ae(b[_ - 30], b[_ - 29]), Z = b[_ - 32], O = b[_ - 31];
      b[_] = m(
        D,
        x,
        g,
        y,
        N,
        Q,
        Z,
        O
      ), b[_ + 1] = A(
        D,
        x,
        g,
        y,
        N,
        Q,
        Z,
        O
      );
    }
  }, L.prototype._update = function(d, l) {
    this._prepareBlock(d, l);
    var b = this.W, _ = this.h[0], D = this.h[1], x = this.h[2], g = this.h[3], y = this.h[4], N = this.h[5], Q = this.h[6], Z = this.h[7], O = this.h[8], te = this.h[9], k = this.h[10], W = this.h[11], J = this.h[12], S = this.h[13], G = this.h[14], oe = this.h[15];
    t(this.k.length === b.length);
    for (var ce = 0; ce < b.length; ce += 2) {
      var fe = G, be = oe, we = E(O, te), Ie = U(O, te), Je = K(O, te, k, W, J), Ce = F(O, te, k, W, J, S), Te = this.k[ce], Se = this.k[ce + 1], me = b[ce], Oe = b[ce + 1], Re = M(
        fe,
        be,
        we,
        Ie,
        Je,
        Ce,
        Te,
        Se,
        me,
        Oe
      ), ve = I(
        fe,
        be,
        we,
        Ie,
        Je,
        Ce,
        Te,
        Se,
        me,
        Oe
      );
      fe = z(_, D), be = q(_, D), we = V(_, D, x, g, y), Ie = B(_, D, x, g, y, N);
      var Ne = p(fe, be, we, Ie), Ee = u(fe, be, we, Ie);
      G = J, oe = S, J = k, S = W, k = O, W = te, O = p(Q, Z, Re, ve), te = u(Z, Z, Re, ve), Q = y, Z = N, y = x, N = g, x = _, g = D, _ = p(Re, ve, Ne, Ee), D = u(Re, ve, Ne, Ee);
    }
    h(this.h, 0, _, D), h(this.h, 2, x, g), h(this.h, 4, y, N), h(this.h, 6, Q, Z), h(this.h, 8, O, te), h(this.h, 10, k, W), h(this.h, 12, J, S), h(this.h, 14, G, oe);
  }, L.prototype._digest = function(d) {
    return d === "hex" ? r.toHex32(this.h, "big") : r.split32(this.h, "big");
  };
  function K(c, d, l, b, _) {
    var D = c & l ^ ~c & _;
    return D < 0 && (D += 4294967296), D;
  }
  function F(c, d, l, b, _, D) {
    var x = d & b ^ ~d & D;
    return x < 0 && (x += 4294967296), x;
  }
  function V(c, d, l, b, _) {
    var D = c & l ^ c & _ ^ l & _;
    return D < 0 && (D += 4294967296), D;
  }
  function B(c, d, l, b, _, D) {
    var x = d & b ^ d & D ^ b & D;
    return x < 0 && (x += 4294967296), x;
  }
  function z(c, d) {
    var l = i(c, d, 28), b = i(d, c, 2), _ = i(d, c, 7), D = l ^ b ^ _;
    return D < 0 && (D += 4294967296), D;
  }
  function q(c, d) {
    var l = s(c, d, 28), b = s(d, c, 2), _ = s(d, c, 7), D = l ^ b ^ _;
    return D < 0 && (D += 4294967296), D;
  }
  function E(c, d) {
    var l = i(c, d, 14), b = i(c, d, 18), _ = i(d, c, 9), D = l ^ b ^ _;
    return D < 0 && (D += 4294967296), D;
  }
  function U(c, d) {
    var l = s(c, d, 14), b = s(c, d, 18), _ = s(d, c, 9), D = l ^ b ^ _;
    return D < 0 && (D += 4294967296), D;
  }
  function ee(c, d) {
    var l = i(c, d, 1), b = i(c, d, 8), _ = a(c, d, 7), D = l ^ b ^ _;
    return D < 0 && (D += 4294967296), D;
  }
  function ae(c, d) {
    var l = s(c, d, 1), b = s(c, d, 8), _ = f(c, d, 7), D = l ^ b ^ _;
    return D < 0 && (D += 4294967296), D;
  }
  function j(c, d) {
    var l = i(c, d, 19), b = i(d, c, 29), _ = a(c, d, 6), D = l ^ b ^ _;
    return D < 0 && (D += 4294967296), D;
  }
  function w(c, d) {
    var l = s(c, d, 19), b = s(d, c, 29), _ = f(c, d, 6), D = l ^ b ^ _;
    return D < 0 && (D += 4294967296), D;
  }
  return Rh;
}
var Nh, v1;
function j_() {
  if (v1) return Nh;
  v1 = 1;
  var r = En(), e = tb();
  function t() {
    if (!(this instanceof t))
      return new t();
    e.call(this), this.h = [
      3418070365,
      3238371032,
      1654270250,
      914150663,
      2438529370,
      812702999,
      355462360,
      4144912697,
      1731405415,
      4290775857,
      2394180231,
      1750603025,
      3675008525,
      1694076839,
      1203062813,
      3204075428
    ];
  }
  return r.inherits(t, e), Nh = t, t.blockSize = 1024, t.outSize = 384, t.hmacStrength = 192, t.padLength = 128, t.prototype._digest = function(s) {
    return s === "hex" ? r.toHex32(this.h.slice(0, 12), "big") : r.split32(this.h.slice(0, 12), "big");
  }, Nh;
}
var b1;
function $_() {
  return b1 || (b1 = 1, Ds.sha1 = U_(), Ds.sha224 = z_(), Ds.sha256 = eb(), Ds.sha384 = j_(), Ds.sha512 = tb()), Ds;
}
var Th = {}, m1;
function k_() {
  if (m1) return Th;
  m1 = 1;
  var r = En(), e = Ro(), t = r.rotl32, i = r.sum32, s = r.sum32_3, a = r.sum32_4, f = e.BlockHash;
  function h() {
    if (!(this instanceof h))
      return new h();
    f.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
  }
  r.inherits(h, f), Th.ripemd160 = h, h.blockSize = 512, h.outSize = 160, h.hmacStrength = 192, h.padLength = 64, h.prototype._update = function(L, K) {
    for (var F = this.h[0], V = this.h[1], B = this.h[2], z = this.h[3], q = this.h[4], E = F, U = V, ee = B, ae = z, j = q, w = 0; w < 80; w++) {
      var c = i(
        t(
          a(F, p(w, V, B, z), L[A[w] + K], u(w)),
          I[w]
        ),
        q
      );
      F = q, q = z, z = t(B, 10), B = V, V = c, c = i(
        t(
          a(E, p(79 - w, U, ee, ae), L[M[w] + K], m(w)),
          C[w]
        ),
        j
      ), E = j, j = ae, ae = t(ee, 10), ee = U, U = c;
    }
    c = s(this.h[1], B, ae), this.h[1] = s(this.h[2], z, j), this.h[2] = s(this.h[3], q, E), this.h[3] = s(this.h[4], F, U), this.h[4] = s(this.h[0], V, ee), this.h[0] = c;
  }, h.prototype._digest = function(L) {
    return L === "hex" ? r.toHex32(this.h, "little") : r.split32(this.h, "little");
  };
  function p(R, L, K, F) {
    return R <= 15 ? L ^ K ^ F : R <= 31 ? L & K | ~L & F : R <= 47 ? (L | ~K) ^ F : R <= 63 ? L & F | K & ~F : L ^ (K | ~F);
  }
  function u(R) {
    return R <= 15 ? 0 : R <= 31 ? 1518500249 : R <= 47 ? 1859775393 : R <= 63 ? 2400959708 : 2840853838;
  }
  function m(R) {
    return R <= 15 ? 1352829926 : R <= 31 ? 1548603684 : R <= 47 ? 1836072691 : R <= 63 ? 2053994217 : 0;
  }
  var A = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    7,
    4,
    13,
    1,
    10,
    6,
    15,
    3,
    12,
    0,
    9,
    5,
    2,
    14,
    11,
    8,
    3,
    10,
    14,
    4,
    9,
    15,
    8,
    1,
    2,
    7,
    0,
    6,
    13,
    11,
    5,
    12,
    1,
    9,
    11,
    10,
    0,
    8,
    12,
    4,
    13,
    3,
    7,
    15,
    14,
    5,
    6,
    2,
    4,
    0,
    5,
    9,
    7,
    12,
    2,
    10,
    14,
    1,
    3,
    8,
    11,
    6,
    15,
    13
  ], M = [
    5,
    14,
    7,
    0,
    9,
    2,
    11,
    4,
    13,
    6,
    15,
    8,
    1,
    10,
    3,
    12,
    6,
    11,
    3,
    7,
    0,
    13,
    5,
    10,
    14,
    15,
    8,
    12,
    4,
    9,
    1,
    2,
    15,
    5,
    1,
    3,
    7,
    14,
    6,
    9,
    11,
    8,
    12,
    2,
    10,
    0,
    4,
    13,
    8,
    6,
    4,
    1,
    3,
    11,
    15,
    0,
    5,
    12,
    2,
    13,
    9,
    7,
    10,
    14,
    12,
    15,
    10,
    4,
    1,
    5,
    8,
    7,
    6,
    2,
    13,
    14,
    0,
    3,
    9,
    11
  ], I = [
    11,
    14,
    15,
    12,
    5,
    8,
    7,
    9,
    11,
    13,
    14,
    15,
    6,
    7,
    9,
    8,
    7,
    6,
    8,
    13,
    11,
    9,
    7,
    15,
    7,
    12,
    15,
    9,
    11,
    7,
    13,
    12,
    11,
    13,
    6,
    7,
    14,
    9,
    13,
    15,
    14,
    8,
    13,
    6,
    5,
    12,
    7,
    5,
    11,
    12,
    14,
    15,
    14,
    15,
    9,
    8,
    9,
    14,
    5,
    6,
    8,
    6,
    5,
    12,
    9,
    15,
    5,
    11,
    6,
    8,
    13,
    12,
    5,
    12,
    13,
    14,
    11,
    8,
    5,
    6
  ], C = [
    8,
    9,
    9,
    11,
    13,
    15,
    15,
    5,
    7,
    7,
    8,
    11,
    14,
    14,
    12,
    6,
    9,
    13,
    15,
    7,
    12,
    8,
    9,
    11,
    7,
    7,
    12,
    7,
    6,
    15,
    13,
    11,
    9,
    7,
    15,
    11,
    8,
    6,
    6,
    14,
    12,
    13,
    5,
    14,
    13,
    13,
    7,
    5,
    15,
    5,
    8,
    11,
    14,
    14,
    6,
    14,
    6,
    9,
    12,
    9,
    12,
    5,
    15,
    8,
    8,
    5,
    12,
    9,
    12,
    5,
    14,
    6,
    8,
    13,
    6,
    5,
    15,
    13,
    11,
    11
  ];
  return Th;
}
var qh, y1;
function H_() {
  if (y1) return qh;
  y1 = 1;
  var r = En(), e = Us();
  function t(i, s, a) {
    if (!(this instanceof t))
      return new t(i, s, a);
    this.Hash = i, this.blockSize = i.blockSize / 8, this.outSize = i.outSize / 8, this.inner = null, this.outer = null, this._init(r.toArray(s, a));
  }
  return qh = t, t.prototype._init = function(s) {
    s.length > this.blockSize && (s = new this.Hash().update(s).digest()), e(s.length <= this.blockSize);
    for (var a = s.length; a < this.blockSize; a++)
      s.push(0);
    for (a = 0; a < s.length; a++)
      s[a] ^= 54;
    for (this.inner = new this.Hash().update(s), a = 0; a < s.length; a++)
      s[a] ^= 106;
    this.outer = new this.Hash().update(s);
  }, t.prototype.update = function(s, a) {
    return this.inner.update(s, a), this;
  }, t.prototype.digest = function(s) {
    return this.outer.update(this.inner.digest()), this.outer.digest(s);
  }, qh;
}
var w1;
function Jl() {
  return w1 || (w1 = 1, function(r) {
    var e = r;
    e.utils = En(), e.common = Ro(), e.sha = $_(), e.ripemd = k_(), e.hmac = H_(), e.sha1 = e.sha.sha1, e.sha256 = e.sha.sha256, e.sha224 = e.sha.sha224, e.sha384 = e.sha.sha384, e.sha512 = e.sha.sha512, e.ripemd160 = e.ripemd.ripemd160;
  }(Ih)), Ih;
}
var Fh, _1;
function K_() {
  return _1 || (_1 = 1, Fh = {
    doubles: {
      step: 4,
      points: [
        [
          "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
          "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"
        ],
        [
          "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
          "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"
        ],
        [
          "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
          "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"
        ],
        [
          "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
          "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"
        ],
        [
          "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
          "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"
        ],
        [
          "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
          "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"
        ],
        [
          "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
          "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"
        ],
        [
          "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
          "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"
        ],
        [
          "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
          "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"
        ],
        [
          "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
          "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"
        ],
        [
          "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
          "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"
        ],
        [
          "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
          "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"
        ],
        [
          "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
          "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"
        ],
        [
          "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
          "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"
        ],
        [
          "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
          "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"
        ],
        [
          "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
          "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"
        ],
        [
          "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
          "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"
        ],
        [
          "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
          "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"
        ],
        [
          "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
          "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"
        ],
        [
          "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
          "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"
        ],
        [
          "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
          "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"
        ],
        [
          "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
          "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"
        ],
        [
          "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
          "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"
        ],
        [
          "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
          "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"
        ],
        [
          "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
          "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"
        ],
        [
          "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
          "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"
        ],
        [
          "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
          "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"
        ],
        [
          "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
          "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"
        ],
        [
          "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
          "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"
        ],
        [
          "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
          "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"
        ],
        [
          "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
          "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"
        ],
        [
          "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
          "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"
        ],
        [
          "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
          "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"
        ],
        [
          "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
          "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"
        ],
        [
          "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
          "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"
        ],
        [
          "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
          "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"
        ],
        [
          "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
          "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"
        ],
        [
          "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
          "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"
        ],
        [
          "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
          "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"
        ],
        [
          "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
          "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"
        ],
        [
          "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
          "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"
        ],
        [
          "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
          "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"
        ],
        [
          "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
          "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"
        ],
        [
          "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
          "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"
        ],
        [
          "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
          "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"
        ],
        [
          "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
          "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"
        ],
        [
          "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
          "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"
        ],
        [
          "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
          "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"
        ],
        [
          "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
          "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"
        ],
        [
          "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
          "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"
        ],
        [
          "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
          "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"
        ],
        [
          "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
          "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"
        ],
        [
          "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
          "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"
        ],
        [
          "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
          "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"
        ],
        [
          "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
          "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"
        ],
        [
          "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
          "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"
        ],
        [
          "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
          "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"
        ],
        [
          "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
          "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"
        ],
        [
          "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
          "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"
        ],
        [
          "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
          "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"
        ],
        [
          "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
          "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"
        ],
        [
          "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
          "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"
        ],
        [
          "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
          "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"
        ],
        [
          "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
          "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"
        ],
        [
          "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
          "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"
        ]
      ]
    },
    naf: {
      wnd: 7,
      points: [
        [
          "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
          "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"
        ],
        [
          "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
          "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"
        ],
        [
          "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
          "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"
        ],
        [
          "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
          "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"
        ],
        [
          "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
          "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"
        ],
        [
          "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
          "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"
        ],
        [
          "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
          "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"
        ],
        [
          "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
          "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"
        ],
        [
          "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
          "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"
        ],
        [
          "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
          "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"
        ],
        [
          "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
          "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"
        ],
        [
          "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
          "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"
        ],
        [
          "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
          "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"
        ],
        [
          "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
          "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"
        ],
        [
          "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
          "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"
        ],
        [
          "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
          "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"
        ],
        [
          "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
          "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"
        ],
        [
          "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
          "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"
        ],
        [
          "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
          "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"
        ],
        [
          "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
          "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"
        ],
        [
          "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
          "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"
        ],
        [
          "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
          "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"
        ],
        [
          "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
          "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"
        ],
        [
          "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
          "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"
        ],
        [
          "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
          "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"
        ],
        [
          "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
          "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"
        ],
        [
          "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
          "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"
        ],
        [
          "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
          "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"
        ],
        [
          "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
          "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"
        ],
        [
          "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
          "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"
        ],
        [
          "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
          "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"
        ],
        [
          "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
          "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"
        ],
        [
          "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
          "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"
        ],
        [
          "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
          "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"
        ],
        [
          "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
          "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"
        ],
        [
          "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
          "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"
        ],
        [
          "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
          "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"
        ],
        [
          "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
          "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"
        ],
        [
          "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
          "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"
        ],
        [
          "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
          "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"
        ],
        [
          "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
          "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"
        ],
        [
          "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
          "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"
        ],
        [
          "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
          "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"
        ],
        [
          "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
          "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"
        ],
        [
          "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
          "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"
        ],
        [
          "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
          "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"
        ],
        [
          "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
          "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"
        ],
        [
          "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
          "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"
        ],
        [
          "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
          "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"
        ],
        [
          "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
          "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"
        ],
        [
          "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
          "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"
        ],
        [
          "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
          "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"
        ],
        [
          "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
          "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"
        ],
        [
          "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
          "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"
        ],
        [
          "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
          "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"
        ],
        [
          "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
          "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"
        ],
        [
          "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
          "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"
        ],
        [
          "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
          "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"
        ],
        [
          "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
          "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"
        ],
        [
          "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
          "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"
        ],
        [
          "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
          "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"
        ],
        [
          "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
          "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"
        ],
        [
          "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
          "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"
        ],
        [
          "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
          "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"
        ],
        [
          "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
          "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"
        ],
        [
          "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
          "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"
        ],
        [
          "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
          "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"
        ],
        [
          "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
          "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"
        ],
        [
          "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
          "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"
        ],
        [
          "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
          "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"
        ],
        [
          "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
          "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"
        ],
        [
          "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
          "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"
        ],
        [
          "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
          "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"
        ],
        [
          "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
          "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"
        ],
        [
          "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
          "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"
        ],
        [
          "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
          "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"
        ],
        [
          "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
          "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"
        ],
        [
          "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
          "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"
        ],
        [
          "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
          "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"
        ],
        [
          "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
          "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"
        ],
        [
          "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
          "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"
        ],
        [
          "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
          "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"
        ],
        [
          "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
          "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"
        ],
        [
          "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
          "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"
        ],
        [
          "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
          "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"
        ],
        [
          "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
          "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"
        ],
        [
          "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
          "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"
        ],
        [
          "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
          "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"
        ],
        [
          "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
          "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"
        ],
        [
          "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
          "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"
        ],
        [
          "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
          "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"
        ],
        [
          "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
          "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"
        ],
        [
          "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
          "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"
        ],
        [
          "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
          "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"
        ],
        [
          "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
          "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"
        ],
        [
          "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
          "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"
        ],
        [
          "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
          "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"
        ],
        [
          "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
          "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"
        ],
        [
          "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
          "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"
        ],
        [
          "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
          "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"
        ],
        [
          "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
          "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"
        ],
        [
          "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
          "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"
        ],
        [
          "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
          "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"
        ],
        [
          "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
          "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"
        ],
        [
          "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
          "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"
        ],
        [
          "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
          "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"
        ],
        [
          "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
          "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"
        ],
        [
          "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
          "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"
        ],
        [
          "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
          "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"
        ],
        [
          "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
          "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"
        ],
        [
          "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
          "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"
        ],
        [
          "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
          "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"
        ],
        [
          "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
          "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"
        ],
        [
          "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
          "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"
        ],
        [
          "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
          "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"
        ],
        [
          "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
          "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"
        ],
        [
          "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
          "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"
        ],
        [
          "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
          "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"
        ],
        [
          "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
          "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"
        ],
        [
          "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
          "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"
        ],
        [
          "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
          "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"
        ],
        [
          "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
          "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"
        ],
        [
          "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
          "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"
        ],
        [
          "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
          "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"
        ],
        [
          "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
          "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"
        ],
        [
          "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
          "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"
        ],
        [
          "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
          "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"
        ]
      ]
    }
  }), Fh;
}
var A1;
function Yl() {
  return A1 || (A1 = 1, function(r) {
    var e = r, t = Jl(), i = Xv(), s = Ni(), a = s.assert;
    function f(u) {
      u.type === "short" ? this.curve = new i.short(u) : u.type === "edwards" ? this.curve = new i.edwards(u) : this.curve = new i.mont(u), this.g = this.curve.g, this.n = this.curve.n, this.hash = u.hash, a(this.g.validate(), "Invalid curve"), a(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
    }
    e.PresetCurve = f;
    function h(u, m) {
      Object.defineProperty(e, u, {
        configurable: !0,
        enumerable: !0,
        get: function() {
          var A = new f(m);
          return Object.defineProperty(e, u, {
            configurable: !0,
            enumerable: !0,
            value: A
          }), A;
        }
      });
    }
    h("p192", {
      type: "short",
      prime: "p192",
      p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
      a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
      b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
      n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
      hash: t.sha256,
      gRed: !1,
      g: [
        "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
        "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
      ]
    }), h("p224", {
      type: "short",
      prime: "p224",
      p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
      a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
      b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
      n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
      hash: t.sha256,
      gRed: !1,
      g: [
        "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
        "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
      ]
    }), h("p256", {
      type: "short",
      prime: null,
      p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
      a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
      b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
      n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
      hash: t.sha256,
      gRed: !1,
      g: [
        "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
        "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
      ]
    }), h("p384", {
      type: "short",
      prime: null,
      p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
      a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
      b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
      n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
      hash: t.sha384,
      gRed: !1,
      g: [
        "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
        "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
      ]
    }), h("p521", {
      type: "short",
      prime: null,
      p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
      a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
      b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
      n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
      hash: t.sha512,
      gRed: !1,
      g: [
        "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
        "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
      ]
    }), h("curve25519", {
      type: "mont",
      prime: "p25519",
      p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
      a: "76d06",
      b: "1",
      n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
      hash: t.sha256,
      gRed: !1,
      g: [
        "9"
      ]
    }), h("ed25519", {
      type: "edwards",
      prime: "p25519",
      p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
      a: "-1",
      c: "1",
      // -121665 * (121666^(-1)) (mod P)
      d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
      n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
      hash: t.sha256,
      gRed: !1,
      g: [
        "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
        // 4/5
        "6666666666666666666666666666666666666666666666666666666666666658"
      ]
    });
    var p;
    try {
      p = K_();
    } catch {
      p = void 0;
    }
    h("secp256k1", {
      type: "short",
      prime: "k256",
      p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
      a: "0",
      b: "7",
      n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
      h: "1",
      hash: t.sha256,
      // Precomputed endomorphism
      beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
      lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
      basis: [
        {
          a: "3086d221a7d46bcde86c90e49284eb15",
          b: "-e4437ed6010e88286f547fa90abfe4c3"
        },
        {
          a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
          b: "3086d221a7d46bcde86c90e49284eb15"
        }
      ],
      gRed: !1,
      g: [
        "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
        "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
        p
      ]
    });
  }(Mh)), Mh;
}
var Bh, E1;
function V_() {
  if (E1) return Bh;
  E1 = 1;
  var r = Jl(), e = Yv(), t = Us();
  function i(s) {
    if (!(this instanceof i))
      return new i(s);
    this.hash = s.hash, this.predResist = !!s.predResist, this.outLen = this.hash.outSize, this.minEntropy = s.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
    var a = e.toArray(s.entropy, s.entropyEnc || "hex"), f = e.toArray(s.nonce, s.nonceEnc || "hex"), h = e.toArray(s.pers, s.persEnc || "hex");
    t(
      a.length >= this.minEntropy / 8,
      "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
    ), this._init(a, f, h);
  }
  return Bh = i, i.prototype._init = function(a, f, h) {
    var p = a.concat(f).concat(h);
    this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
    for (var u = 0; u < this.V.length; u++)
      this.K[u] = 0, this.V[u] = 1;
    this._update(p), this._reseed = 1, this.reseedInterval = 281474976710656;
  }, i.prototype._hmac = function() {
    return new r.hmac(this.hash, this.K);
  }, i.prototype._update = function(a) {
    var f = this._hmac().update(this.V).update([0]);
    a && (f = f.update(a)), this.K = f.digest(), this.V = this._hmac().update(this.V).digest(), a && (this.K = this._hmac().update(this.V).update([1]).update(a).digest(), this.V = this._hmac().update(this.V).digest());
  }, i.prototype.reseed = function(a, f, h, p) {
    typeof f != "string" && (p = h, h = f, f = null), a = e.toArray(a, f), h = e.toArray(h, p), t(
      a.length >= this.minEntropy / 8,
      "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
    ), this._update(a.concat(h || [])), this._reseed = 1;
  }, i.prototype.generate = function(a, f, h, p) {
    if (this._reseed > this.reseedInterval)
      throw new Error("Reseed is required");
    typeof f != "string" && (p = h, h = f, f = null), h && (h = e.toArray(h, p || "hex"), this._update(h));
    for (var u = []; u.length < a; )
      this.V = this._hmac().update(this.V).digest(), u = u.concat(this.V);
    var m = u.slice(0, a);
    return this._update(h), this._reseed++, e.encode(m, f);
  }, Bh;
}
var Lh, x1;
function G_() {
  if (x1) return Lh;
  x1 = 1;
  var r = Vn(), e = Ni(), t = e.assert;
  function i(s, a) {
    this.ec = s, this.priv = null, this.pub = null, a.priv && this._importPrivate(a.priv, a.privEnc), a.pub && this._importPublic(a.pub, a.pubEnc);
  }
  return Lh = i, i.fromPublic = function(a, f, h) {
    return f instanceof i ? f : new i(a, {
      pub: f,
      pubEnc: h
    });
  }, i.fromPrivate = function(a, f, h) {
    return f instanceof i ? f : new i(a, {
      priv: f,
      privEnc: h
    });
  }, i.prototype.validate = function() {
    var a = this.getPublic();
    return a.isInfinity() ? { result: !1, reason: "Invalid public key" } : a.validate() ? a.mul(this.ec.curve.n).isInfinity() ? { result: !0, reason: null } : { result: !1, reason: "Public key * N != O" } : { result: !1, reason: "Public key is not a point" };
  }, i.prototype.getPublic = function(a, f) {
    return typeof a == "string" && (f = a, a = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), f ? this.pub.encode(f, a) : this.pub;
  }, i.prototype.getPrivate = function(a) {
    return a === "hex" ? this.priv.toString(16, 2) : this.priv;
  }, i.prototype._importPrivate = function(a, f) {
    this.priv = new r(a, f || 16), this.priv = this.priv.umod(this.ec.curve.n);
  }, i.prototype._importPublic = function(a, f) {
    if (a.x || a.y) {
      this.ec.curve.type === "mont" ? t(a.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && t(a.x && a.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(a.x, a.y);
      return;
    }
    this.pub = this.ec.curve.decodePoint(a, f);
  }, i.prototype.derive = function(a) {
    return a.validate() || t(a.validate(), "public point not validated"), a.mul(this.priv).getX();
  }, i.prototype.sign = function(a, f, h) {
    return this.ec.sign(a, this, f, h);
  }, i.prototype.verify = function(a, f, h) {
    return this.ec.verify(a, f, this, void 0, h);
  }, i.prototype.inspect = function() {
    return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
  }, Lh;
}
var Uh, S1;
function W_() {
  if (S1) return Uh;
  S1 = 1;
  var r = Vn(), e = Ni(), t = e.assert;
  function i(p, u) {
    if (p instanceof i)
      return p;
    this._importDER(p, u) || (t(p.r && p.s, "Signature without r or s"), this.r = new r(p.r, 16), this.s = new r(p.s, 16), p.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = p.recoveryParam);
  }
  Uh = i;
  function s() {
    this.place = 0;
  }
  function a(p, u) {
    var m = p[u.place++];
    if (!(m & 128))
      return m;
    var A = m & 15;
    if (A === 0 || A > 4 || p[u.place] === 0)
      return !1;
    for (var M = 0, I = 0, C = u.place; I < A; I++, C++)
      M <<= 8, M |= p[C], M >>>= 0;
    return M <= 127 ? !1 : (u.place = C, M);
  }
  function f(p) {
    for (var u = 0, m = p.length - 1; !p[u] && !(p[u + 1] & 128) && u < m; )
      u++;
    return u === 0 ? p : p.slice(u);
  }
  i.prototype._importDER = function(u, m) {
    u = e.toArray(u, m);
    var A = new s();
    if (u[A.place++] !== 48)
      return !1;
    var M = a(u, A);
    if (M === !1 || M + A.place !== u.length || u[A.place++] !== 2)
      return !1;
    var I = a(u, A);
    if (I === !1 || u[A.place] & 128)
      return !1;
    var C = u.slice(A.place, I + A.place);
    if (A.place += I, u[A.place++] !== 2)
      return !1;
    var R = a(u, A);
    if (R === !1 || u.length !== R + A.place || u[A.place] & 128)
      return !1;
    var L = u.slice(A.place, R + A.place);
    if (C[0] === 0)
      if (C[1] & 128)
        C = C.slice(1);
      else
        return !1;
    if (L[0] === 0)
      if (L[1] & 128)
        L = L.slice(1);
      else
        return !1;
    return this.r = new r(C), this.s = new r(L), this.recoveryParam = null, !0;
  };
  function h(p, u) {
    if (u < 128) {
      p.push(u);
      return;
    }
    var m = 1 + (Math.log(u) / Math.LN2 >>> 3);
    for (p.push(m | 128); --m; )
      p.push(u >>> (m << 3) & 255);
    p.push(u);
  }
  return i.prototype.toDER = function(u) {
    var m = this.r.toArray(), A = this.s.toArray();
    for (m[0] & 128 && (m = [0].concat(m)), A[0] & 128 && (A = [0].concat(A)), m = f(m), A = f(A); !A[0] && !(A[1] & 128); )
      A = A.slice(1);
    var M = [2];
    h(M, m.length), M = M.concat(m), M.push(2), h(M, A.length);
    var I = M.concat(A), C = [48];
    return h(C, I.length), C = C.concat(I), e.encode(C, u);
  }, Uh;
}
var zh, M1;
function J_() {
  if (M1) return zh;
  M1 = 1;
  var r = Vn(), e = V_(), t = Ni(), i = Yl(), s = Qv(), a = t.assert, f = G_(), h = W_();
  function p(u) {
    if (!(this instanceof p))
      return new p(u);
    typeof u == "string" && (a(
      Object.prototype.hasOwnProperty.call(i, u),
      "Unknown curve " + u
    ), u = i[u]), u instanceof i.PresetCurve && (u = { curve: u }), this.curve = u.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = u.curve.g, this.g.precompute(u.curve.n.bitLength() + 1), this.hash = u.hash || u.curve.hash;
  }
  return zh = p, p.prototype.keyPair = function(m) {
    return new f(this, m);
  }, p.prototype.keyFromPrivate = function(m, A) {
    return f.fromPrivate(this, m, A);
  }, p.prototype.keyFromPublic = function(m, A) {
    return f.fromPublic(this, m, A);
  }, p.prototype.genKeyPair = function(m) {
    m || (m = {});
    for (var A = new e({
      hash: this.hash,
      pers: m.pers,
      persEnc: m.persEnc || "utf8",
      entropy: m.entropy || s(this.hash.hmacStrength),
      entropyEnc: m.entropy && m.entropyEnc || "utf8",
      nonce: this.n.toArray()
    }), M = this.n.byteLength(), I = this.n.sub(new r(2)); ; ) {
      var C = new r(A.generate(M));
      if (!(C.cmp(I) > 0))
        return C.iaddn(1), this.keyFromPrivate(C);
    }
  }, p.prototype._truncateToN = function(m, A, M) {
    var I;
    if (r.isBN(m) || typeof m == "number")
      m = new r(m, 16), I = m.byteLength();
    else if (typeof m == "object")
      I = m.length, m = new r(m, 16);
    else {
      var C = m.toString();
      I = C.length + 1 >>> 1, m = new r(C, 16);
    }
    typeof M != "number" && (M = I * 8);
    var R = M - this.n.bitLength();
    return R > 0 && (m = m.ushrn(R)), !A && m.cmp(this.n) >= 0 ? m.sub(this.n) : m;
  }, p.prototype.sign = function(m, A, M, I) {
    if (typeof M == "object" && (I = M, M = null), I || (I = {}), typeof m != "string" && typeof m != "number" && !r.isBN(m)) {
      a(
        typeof m == "object" && m && typeof m.length == "number",
        "Expected message to be an array-like, a hex string, or a BN instance"
      ), a(m.length >>> 0 === m.length);
      for (var C = 0; C < m.length; C++) a((m[C] & 255) === m[C]);
    }
    A = this.keyFromPrivate(A, M), m = this._truncateToN(m, !1, I.msgBitLength), a(!m.isNeg(), "Can not sign a negative message");
    var R = this.n.byteLength(), L = A.getPrivate().toArray("be", R), K = m.toArray("be", R);
    a(new r(K).eq(m), "Can not sign message");
    for (var F = new e({
      hash: this.hash,
      entropy: L,
      nonce: K,
      pers: I.pers,
      persEnc: I.persEnc || "utf8"
    }), V = this.n.sub(new r(1)), B = 0; ; B++) {
      var z = I.k ? I.k(B) : new r(F.generate(this.n.byteLength()));
      if (z = this._truncateToN(z, !0), !(z.cmpn(1) <= 0 || z.cmp(V) >= 0)) {
        var q = this.g.mul(z);
        if (!q.isInfinity()) {
          var E = q.getX(), U = E.umod(this.n);
          if (U.cmpn(0) !== 0) {
            var ee = z.invm(this.n).mul(U.mul(A.getPrivate()).iadd(m));
            if (ee = ee.umod(this.n), ee.cmpn(0) !== 0) {
              var ae = (q.getY().isOdd() ? 1 : 0) | (E.cmp(U) !== 0 ? 2 : 0);
              return I.canonical && ee.cmp(this.nh) > 0 && (ee = this.n.sub(ee), ae ^= 1), new h({ r: U, s: ee, recoveryParam: ae });
            }
          }
        }
      }
    }
  }, p.prototype.verify = function(m, A, M, I, C) {
    C || (C = {}), m = this._truncateToN(m, !1, C.msgBitLength), M = this.keyFromPublic(M, I), A = new h(A, "hex");
    var R = A.r, L = A.s;
    if (R.cmpn(1) < 0 || R.cmp(this.n) >= 0 || L.cmpn(1) < 0 || L.cmp(this.n) >= 0)
      return !1;
    var K = L.invm(this.n), F = K.mul(m).umod(this.n), V = K.mul(R).umod(this.n), B;
    return this.curve._maxwellTrick ? (B = this.g.jmulAdd(F, M.getPublic(), V), B.isInfinity() ? !1 : B.eqXToP(R)) : (B = this.g.mulAdd(F, M.getPublic(), V), B.isInfinity() ? !1 : B.getX().umod(this.n).cmp(R) === 0);
  }, p.prototype.recoverPubKey = function(u, m, A, M) {
    a((3 & A) === A, "The recovery param is more than two bits"), m = new h(m, M);
    var I = this.n, C = new r(u), R = m.r, L = m.s, K = A & 1, F = A >> 1;
    if (R.cmp(this.curve.p.umod(this.curve.n)) >= 0 && F)
      throw new Error("Unable to find sencond key candinate");
    F ? R = this.curve.pointFromX(R.add(this.curve.n), K) : R = this.curve.pointFromX(R, K);
    var V = m.r.invm(I), B = I.sub(C).mul(V).umod(I), z = L.mul(V).umod(I);
    return this.g.mulAdd(B, R, z);
  }, p.prototype.getKeyRecoveryParam = function(u, m, A, M) {
    if (m = new h(m, M), m.recoveryParam !== null)
      return m.recoveryParam;
    for (var I = 0; I < 4; I++) {
      var C;
      try {
        C = this.recoverPubKey(u, m, I);
      } catch {
        continue;
      }
      if (C.eq(A))
        return I;
    }
    throw new Error("Unable to find valid recovery factor");
  }, zh;
}
var jh, I1;
function Y_() {
  if (I1) return jh;
  I1 = 1;
  var r = Ni(), e = r.assert, t = r.parseBytes, i = r.cachedProperty;
  function s(a, f) {
    this.eddsa = a, this._secret = t(f.secret), a.isPoint(f.pub) ? this._pub = f.pub : this._pubBytes = t(f.pub);
  }
  return s.fromPublic = function(f, h) {
    return h instanceof s ? h : new s(f, { pub: h });
  }, s.fromSecret = function(f, h) {
    return h instanceof s ? h : new s(f, { secret: h });
  }, s.prototype.secret = function() {
    return this._secret;
  }, i(s, "pubBytes", function() {
    return this.eddsa.encodePoint(this.pub());
  }), i(s, "pub", function() {
    return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv());
  }), i(s, "privBytes", function() {
    var f = this.eddsa, h = this.hash(), p = f.encodingLength - 1, u = h.slice(0, f.encodingLength);
    return u[0] &= 248, u[p] &= 127, u[p] |= 64, u;
  }), i(s, "priv", function() {
    return this.eddsa.decodeInt(this.privBytes());
  }), i(s, "hash", function() {
    return this.eddsa.hash().update(this.secret()).digest();
  }), i(s, "messagePrefix", function() {
    return this.hash().slice(this.eddsa.encodingLength);
  }), s.prototype.sign = function(f) {
    return e(this._secret, "KeyPair can only verify"), this.eddsa.sign(f, this);
  }, s.prototype.verify = function(f, h) {
    return this.eddsa.verify(f, h, this);
  }, s.prototype.getSecret = function(f) {
    return e(this._secret, "KeyPair is public only"), r.encode(this.secret(), f);
  }, s.prototype.getPublic = function(f) {
    return r.encode(this.pubBytes(), f);
  }, jh = s, jh;
}
var $h, D1;
function Q_() {
  if (D1) return $h;
  D1 = 1;
  var r = Vn(), e = Ni(), t = e.assert, i = e.cachedProperty, s = e.parseBytes;
  function a(f, h) {
    this.eddsa = f, typeof h != "object" && (h = s(h)), Array.isArray(h) && (t(h.length === f.encodingLength * 2, "Signature has invalid size"), h = {
      R: h.slice(0, f.encodingLength),
      S: h.slice(f.encodingLength)
    }), t(h.R && h.S, "Signature without R or S"), f.isPoint(h.R) && (this._R = h.R), h.S instanceof r && (this._S = h.S), this._Rencoded = Array.isArray(h.R) ? h.R : h.Rencoded, this._Sencoded = Array.isArray(h.S) ? h.S : h.Sencoded;
  }
  return i(a, "S", function() {
    return this.eddsa.decodeInt(this.Sencoded());
  }), i(a, "R", function() {
    return this.eddsa.decodePoint(this.Rencoded());
  }), i(a, "Rencoded", function() {
    return this.eddsa.encodePoint(this.R());
  }), i(a, "Sencoded", function() {
    return this.eddsa.encodeInt(this.S());
  }), a.prototype.toBytes = function() {
    return this.Rencoded().concat(this.Sencoded());
  }, a.prototype.toHex = function() {
    return e.encode(this.toBytes(), "hex").toUpperCase();
  }, $h = a, $h;
}
var kh, P1;
function X_() {
  if (P1) return kh;
  P1 = 1;
  var r = Jl(), e = Yl(), t = Ni(), i = t.assert, s = t.parseBytes, a = Y_(), f = Q_();
  function h(p) {
    if (i(p === "ed25519", "only tested with ed25519 so far"), !(this instanceof h))
      return new h(p);
    p = e[p].curve, this.curve = p, this.g = p.g, this.g.precompute(p.n.bitLength() + 1), this.pointClass = p.point().constructor, this.encodingLength = Math.ceil(p.n.bitLength() / 8), this.hash = r.sha512;
  }
  return kh = h, h.prototype.sign = function(u, m) {
    u = s(u);
    var A = this.keyFromSecret(m), M = this.hashInt(A.messagePrefix(), u), I = this.g.mul(M), C = this.encodePoint(I), R = this.hashInt(C, A.pubBytes(), u).mul(A.priv()), L = M.add(R).umod(this.curve.n);
    return this.makeSignature({ R: I, S: L, Rencoded: C });
  }, h.prototype.verify = function(u, m, A) {
    if (u = s(u), m = this.makeSignature(m), m.S().gte(m.eddsa.curve.n) || m.S().isNeg())
      return !1;
    var M = this.keyFromPublic(A), I = this.hashInt(m.Rencoded(), M.pubBytes(), u), C = this.g.mul(m.S()), R = m.R().add(M.pub().mul(I));
    return R.eq(C);
  }, h.prototype.hashInt = function() {
    for (var u = this.hash(), m = 0; m < arguments.length; m++)
      u.update(arguments[m]);
    return t.intFromLE(u.digest()).umod(this.curve.n);
  }, h.prototype.keyFromPublic = function(u) {
    return a.fromPublic(this, u);
  }, h.prototype.keyFromSecret = function(u) {
    return a.fromSecret(this, u);
  }, h.prototype.makeSignature = function(u) {
    return u instanceof f ? u : new f(this, u);
  }, h.prototype.encodePoint = function(u) {
    var m = u.getY().toArray("le", this.encodingLength);
    return m[this.encodingLength - 1] |= u.getX().isOdd() ? 128 : 0, m;
  }, h.prototype.decodePoint = function(u) {
    u = t.parseBytes(u);
    var m = u.length - 1, A = u.slice(0, m).concat(u[m] & -129), M = (u[m] & 128) !== 0, I = t.intFromLE(A);
    return this.curve.pointFromY(I, M);
  }, h.prototype.encodeInt = function(u) {
    return u.toArray("le", this.encodingLength);
  }, h.prototype.decodeInt = function(u) {
    return t.intFromLE(u);
  }, h.prototype.isPoint = function(u) {
    return u instanceof this.pointClass;
  }, kh;
}
var C1;
function Z_() {
  return C1 || (C1 = 1, function(r) {
    var e = r;
    e.version = T_.version, e.utils = Ni(), e.rand = Qv(), e.curve = Xv(), e.curves = Yl(), e.ec = J_(), e.eddsa = X_();
  }(bh)), bh;
}
var e7 = Z_(), Hh = {}, Kh = {}, O1;
function t7() {
  return O1 || (O1 = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 });
    var e = Po(), t = Zi();
    r.DIGEST_LENGTH = 64, r.BLOCK_SIZE = 128;
    var i = (
      /** @class */
      function() {
        function h() {
          this.digestLength = r.DIGEST_LENGTH, this.blockSize = r.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
        }
        return h.prototype._initState = function() {
          this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
        }, h.prototype.reset = function() {
          return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
        }, h.prototype.clean = function() {
          t.wipe(this._buffer), t.wipe(this._tempHi), t.wipe(this._tempLo), this.reset();
        }, h.prototype.update = function(p, u) {
          if (u === void 0 && (u = p.length), this._finished)
            throw new Error("SHA512: can't update because hash was finished.");
          var m = 0;
          if (this._bytesHashed += u, this._bufferLength > 0) {
            for (; this._bufferLength < r.BLOCK_SIZE && u > 0; )
              this._buffer[this._bufferLength++] = p[m++], u--;
            this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
          }
          for (u >= this.blockSize && (m = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, p, m, u), u %= this.blockSize); u > 0; )
            this._buffer[this._bufferLength++] = p[m++], u--;
          return this;
        }, h.prototype.finish = function(p) {
          if (!this._finished) {
            var u = this._bytesHashed, m = this._bufferLength, A = u / 536870912 | 0, M = u << 3, I = u % 128 < 112 ? 128 : 256;
            this._buffer[m] = 128;
            for (var C = m + 1; C < I - 8; C++)
              this._buffer[C] = 0;
            e.writeUint32BE(A, this._buffer, I - 8), e.writeUint32BE(M, this._buffer, I - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, I), this._finished = !0;
          }
          for (var C = 0; C < this.digestLength / 8; C++)
            e.writeUint32BE(this._stateHi[C], p, C * 8), e.writeUint32BE(this._stateLo[C], p, C * 8 + 4);
          return this;
        }, h.prototype.digest = function() {
          var p = new Uint8Array(this.digestLength);
          return this.finish(p), p;
        }, h.prototype.saveState = function() {
          if (this._finished)
            throw new Error("SHA256: cannot save finished state");
          return {
            stateHi: new Int32Array(this._stateHi),
            stateLo: new Int32Array(this._stateLo),
            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
            bufferLength: this._bufferLength,
            bytesHashed: this._bytesHashed
          };
        }, h.prototype.restoreState = function(p) {
          return this._stateHi.set(p.stateHi), this._stateLo.set(p.stateLo), this._bufferLength = p.bufferLength, p.buffer && this._buffer.set(p.buffer), this._bytesHashed = p.bytesHashed, this._finished = !1, this;
        }, h.prototype.cleanSavedState = function(p) {
          t.wipe(p.stateHi), t.wipe(p.stateLo), p.buffer && t.wipe(p.buffer), p.bufferLength = 0, p.bytesHashed = 0;
        }, h;
      }()
    );
    r.SHA512 = i;
    var s = new Int32Array([
      1116352408,
      3609767458,
      1899447441,
      602891725,
      3049323471,
      3964484399,
      3921009573,
      2173295548,
      961987163,
      4081628472,
      1508970993,
      3053834265,
      2453635748,
      2937671579,
      2870763221,
      3664609560,
      3624381080,
      2734883394,
      310598401,
      1164996542,
      607225278,
      1323610764,
      1426881987,
      3590304994,
      1925078388,
      4068182383,
      2162078206,
      991336113,
      2614888103,
      633803317,
      3248222580,
      3479774868,
      3835390401,
      2666613458,
      4022224774,
      944711139,
      264347078,
      2341262773,
      604807628,
      2007800933,
      770255983,
      1495990901,
      1249150122,
      1856431235,
      1555081692,
      3175218132,
      1996064986,
      2198950837,
      2554220882,
      3999719339,
      2821834349,
      766784016,
      2952996808,
      2566594879,
      3210313671,
      3203337956,
      3336571891,
      1034457026,
      3584528711,
      2466948901,
      113926993,
      3758326383,
      338241895,
      168717936,
      666307205,
      1188179964,
      773529912,
      1546045734,
      1294757372,
      1522805485,
      1396182291,
      2643833823,
      1695183700,
      2343527390,
      1986661051,
      1014477480,
      2177026350,
      1206759142,
      2456956037,
      344077627,
      2730485921,
      1290863460,
      2820302411,
      3158454273,
      3259730800,
      3505952657,
      3345764771,
      106217008,
      3516065817,
      3606008344,
      3600352804,
      1432725776,
      4094571909,
      1467031594,
      275423344,
      851169720,
      430227734,
      3100823752,
      506948616,
      1363258195,
      659060556,
      3750685593,
      883997877,
      3785050280,
      958139571,
      3318307427,
      1322822218,
      3812723403,
      1537002063,
      2003034995,
      1747873779,
      3602036899,
      1955562222,
      1575990012,
      2024104815,
      1125592928,
      2227730452,
      2716904306,
      2361852424,
      442776044,
      2428436474,
      593698344,
      2756734187,
      3733110249,
      3204031479,
      2999351573,
      3329325298,
      3815920427,
      3391569614,
      3928383900,
      3515267271,
      566280711,
      3940187606,
      3454069534,
      4118630271,
      4000239992,
      116418474,
      1914138554,
      174292421,
      2731055270,
      289380356,
      3203993006,
      460393269,
      320620315,
      685471733,
      587496836,
      852142971,
      1086792851,
      1017036298,
      365543100,
      1126000580,
      2618297676,
      1288033470,
      3409855158,
      1501505948,
      4234509866,
      1607167915,
      987167468,
      1816402316,
      1246189591
    ]);
    function a(h, p, u, m, A, M, I) {
      for (var C = u[0], R = u[1], L = u[2], K = u[3], F = u[4], V = u[5], B = u[6], z = u[7], q = m[0], E = m[1], U = m[2], ee = m[3], ae = m[4], j = m[5], w = m[6], c = m[7], d, l, b, _, D, x, g, y; I >= 128; ) {
        for (var N = 0; N < 16; N++) {
          var Q = 8 * N + M;
          h[N] = e.readUint32BE(A, Q), p[N] = e.readUint32BE(A, Q + 4);
        }
        for (var N = 0; N < 80; N++) {
          var Z = C, O = R, te = L, k = K, W = F, J = V, S = B, G = z, oe = q, ce = E, fe = U, be = ee, we = ae, Ie = j, Je = w, Ce = c;
          if (d = z, l = c, D = l & 65535, x = l >>> 16, g = d & 65535, y = d >>> 16, d = (F >>> 14 | ae << 18) ^ (F >>> 18 | ae << 14) ^ (ae >>> 9 | F << 23), l = (ae >>> 14 | F << 18) ^ (ae >>> 18 | F << 14) ^ (F >>> 9 | ae << 23), D += l & 65535, x += l >>> 16, g += d & 65535, y += d >>> 16, d = F & V ^ ~F & B, l = ae & j ^ ~ae & w, D += l & 65535, x += l >>> 16, g += d & 65535, y += d >>> 16, d = s[N * 2], l = s[N * 2 + 1], D += l & 65535, x += l >>> 16, g += d & 65535, y += d >>> 16, d = h[N % 16], l = p[N % 16], D += l & 65535, x += l >>> 16, g += d & 65535, y += d >>> 16, x += D >>> 16, g += x >>> 16, y += g >>> 16, b = g & 65535 | y << 16, _ = D & 65535 | x << 16, d = b, l = _, D = l & 65535, x = l >>> 16, g = d & 65535, y = d >>> 16, d = (C >>> 28 | q << 4) ^ (q >>> 2 | C << 30) ^ (q >>> 7 | C << 25), l = (q >>> 28 | C << 4) ^ (C >>> 2 | q << 30) ^ (C >>> 7 | q << 25), D += l & 65535, x += l >>> 16, g += d & 65535, y += d >>> 16, d = C & R ^ C & L ^ R & L, l = q & E ^ q & U ^ E & U, D += l & 65535, x += l >>> 16, g += d & 65535, y += d >>> 16, x += D >>> 16, g += x >>> 16, y += g >>> 16, G = g & 65535 | y << 16, Ce = D & 65535 | x << 16, d = k, l = be, D = l & 65535, x = l >>> 16, g = d & 65535, y = d >>> 16, d = b, l = _, D += l & 65535, x += l >>> 16, g += d & 65535, y += d >>> 16, x += D >>> 16, g += x >>> 16, y += g >>> 16, k = g & 65535 | y << 16, be = D & 65535 | x << 16, R = Z, L = O, K = te, F = k, V = W, B = J, z = S, C = G, E = oe, U = ce, ee = fe, ae = be, j = we, w = Ie, c = Je, q = Ce, N % 16 === 15)
            for (var Q = 0; Q < 16; Q++)
              d = h[Q], l = p[Q], D = l & 65535, x = l >>> 16, g = d & 65535, y = d >>> 16, d = h[(Q + 9) % 16], l = p[(Q + 9) % 16], D += l & 65535, x += l >>> 16, g += d & 65535, y += d >>> 16, b = h[(Q + 1) % 16], _ = p[(Q + 1) % 16], d = (b >>> 1 | _ << 31) ^ (b >>> 8 | _ << 24) ^ b >>> 7, l = (_ >>> 1 | b << 31) ^ (_ >>> 8 | b << 24) ^ (_ >>> 7 | b << 25), D += l & 65535, x += l >>> 16, g += d & 65535, y += d >>> 16, b = h[(Q + 14) % 16], _ = p[(Q + 14) % 16], d = (b >>> 19 | _ << 13) ^ (_ >>> 29 | b << 3) ^ b >>> 6, l = (_ >>> 19 | b << 13) ^ (b >>> 29 | _ << 3) ^ (_ >>> 6 | b << 26), D += l & 65535, x += l >>> 16, g += d & 65535, y += d >>> 16, x += D >>> 16, g += x >>> 16, y += g >>> 16, h[Q] = g & 65535 | y << 16, p[Q] = D & 65535 | x << 16;
        }
        d = C, l = q, D = l & 65535, x = l >>> 16, g = d & 65535, y = d >>> 16, d = u[0], l = m[0], D += l & 65535, x += l >>> 16, g += d & 65535, y += d >>> 16, x += D >>> 16, g += x >>> 16, y += g >>> 16, u[0] = C = g & 65535 | y << 16, m[0] = q = D & 65535 | x << 16, d = R, l = E, D = l & 65535, x = l >>> 16, g = d & 65535, y = d >>> 16, d = u[1], l = m[1], D += l & 65535, x += l >>> 16, g += d & 65535, y += d >>> 16, x += D >>> 16, g += x >>> 16, y += g >>> 16, u[1] = R = g & 65535 | y << 16, m[1] = E = D & 65535 | x << 16, d = L, l = U, D = l & 65535, x = l >>> 16, g = d & 65535, y = d >>> 16, d = u[2], l = m[2], D += l & 65535, x += l >>> 16, g += d & 65535, y += d >>> 16, x += D >>> 16, g += x >>> 16, y += g >>> 16, u[2] = L = g & 65535 | y << 16, m[2] = U = D & 65535 | x << 16, d = K, l = ee, D = l & 65535, x = l >>> 16, g = d & 65535, y = d >>> 16, d = u[3], l = m[3], D += l & 65535, x += l >>> 16, g += d & 65535, y += d >>> 16, x += D >>> 16, g += x >>> 16, y += g >>> 16, u[3] = K = g & 65535 | y << 16, m[3] = ee = D & 65535 | x << 16, d = F, l = ae, D = l & 65535, x = l >>> 16, g = d & 65535, y = d >>> 16, d = u[4], l = m[4], D += l & 65535, x += l >>> 16, g += d & 65535, y += d >>> 16, x += D >>> 16, g += x >>> 16, y += g >>> 16, u[4] = F = g & 65535 | y << 16, m[4] = ae = D & 65535 | x << 16, d = V, l = j, D = l & 65535, x = l >>> 16, g = d & 65535, y = d >>> 16, d = u[5], l = m[5], D += l & 65535, x += l >>> 16, g += d & 65535, y += d >>> 16, x += D >>> 16, g += x >>> 16, y += g >>> 16, u[5] = V = g & 65535 | y << 16, m[5] = j = D & 65535 | x << 16, d = B, l = w, D = l & 65535, x = l >>> 16, g = d & 65535, y = d >>> 16, d = u[6], l = m[6], D += l & 65535, x += l >>> 16, g += d & 65535, y += d >>> 16, x += D >>> 16, g += x >>> 16, y += g >>> 16, u[6] = B = g & 65535 | y << 16, m[6] = w = D & 65535 | x << 16, d = z, l = c, D = l & 65535, x = l >>> 16, g = d & 65535, y = d >>> 16, d = u[7], l = m[7], D += l & 65535, x += l >>> 16, g += d & 65535, y += d >>> 16, x += D >>> 16, g += x >>> 16, y += g >>> 16, u[7] = z = g & 65535 | y << 16, m[7] = c = D & 65535 | x << 16, M += 128, I -= 128;
      }
      return M;
    }
    function f(h) {
      var p = new i();
      p.update(h);
      var u = p.digest();
      return p.clean(), u;
    }
    r.hash = f;
  }(Kh)), Kh;
}
var R1;
function r7() {
  return R1 || (R1 = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 }), r.convertSecretKeyToX25519 = r.convertPublicKeyToX25519 = r.verify = r.sign = r.extractPublicKeyFromSecretKey = r.generateKeyPair = r.generateKeyPairFromSeed = r.SEED_LENGTH = r.SECRET_KEY_LENGTH = r.PUBLIC_KEY_LENGTH = r.SIGNATURE_LENGTH = void 0;
    const e = Wl(), t = t7(), i = Zi();
    r.SIGNATURE_LENGTH = 64, r.PUBLIC_KEY_LENGTH = 32, r.SECRET_KEY_LENGTH = 64, r.SEED_LENGTH = 32;
    function s(k) {
      const W = new Float64Array(16);
      if (k)
        for (let J = 0; J < k.length; J++)
          W[J] = k[J];
      return W;
    }
    const a = new Uint8Array(32);
    a[0] = 9;
    const f = s(), h = s([1]), p = s([
      30883,
      4953,
      19914,
      30187,
      55467,
      16705,
      2637,
      112,
      59544,
      30585,
      16505,
      36039,
      65139,
      11119,
      27886,
      20995
    ]), u = s([
      61785,
      9906,
      39828,
      60374,
      45398,
      33411,
      5274,
      224,
      53552,
      61171,
      33010,
      6542,
      64743,
      22239,
      55772,
      9222
    ]), m = s([
      54554,
      36645,
      11616,
      51542,
      42930,
      38181,
      51040,
      26924,
      56412,
      64982,
      57905,
      49316,
      21502,
      52590,
      14035,
      8553
    ]), A = s([
      26200,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214
    ]), M = s([
      41136,
      18958,
      6951,
      50414,
      58488,
      44335,
      6150,
      12099,
      55207,
      15867,
      153,
      11085,
      57099,
      20417,
      9344,
      11139
    ]);
    function I(k, W) {
      for (let J = 0; J < 16; J++)
        k[J] = W[J] | 0;
    }
    function C(k) {
      let W = 1;
      for (let J = 0; J < 16; J++) {
        let S = k[J] + W + 65535;
        W = Math.floor(S / 65536), k[J] = S - W * 65536;
      }
      k[0] += W - 1 + 37 * (W - 1);
    }
    function R(k, W, J) {
      const S = ~(J - 1);
      for (let G = 0; G < 16; G++) {
        const oe = S & (k[G] ^ W[G]);
        k[G] ^= oe, W[G] ^= oe;
      }
    }
    function L(k, W) {
      const J = s(), S = s();
      for (let G = 0; G < 16; G++)
        S[G] = W[G];
      C(S), C(S), C(S);
      for (let G = 0; G < 2; G++) {
        J[0] = S[0] - 65517;
        for (let ce = 1; ce < 15; ce++)
          J[ce] = S[ce] - 65535 - (J[ce - 1] >> 16 & 1), J[ce - 1] &= 65535;
        J[15] = S[15] - 32767 - (J[14] >> 16 & 1);
        const oe = J[15] >> 16 & 1;
        J[14] &= 65535, R(S, J, 1 - oe);
      }
      for (let G = 0; G < 16; G++)
        k[2 * G] = S[G] & 255, k[2 * G + 1] = S[G] >> 8;
    }
    function K(k, W) {
      let J = 0;
      for (let S = 0; S < 32; S++)
        J |= k[S] ^ W[S];
      return (1 & J - 1 >>> 8) - 1;
    }
    function F(k, W) {
      const J = new Uint8Array(32), S = new Uint8Array(32);
      return L(J, k), L(S, W), K(J, S);
    }
    function V(k) {
      const W = new Uint8Array(32);
      return L(W, k), W[0] & 1;
    }
    function B(k, W) {
      for (let J = 0; J < 16; J++)
        k[J] = W[2 * J] + (W[2 * J + 1] << 8);
      k[15] &= 32767;
    }
    function z(k, W, J) {
      for (let S = 0; S < 16; S++)
        k[S] = W[S] + J[S];
    }
    function q(k, W, J) {
      for (let S = 0; S < 16; S++)
        k[S] = W[S] - J[S];
    }
    function E(k, W, J) {
      let S, G, oe = 0, ce = 0, fe = 0, be = 0, we = 0, Ie = 0, Je = 0, Ce = 0, Te = 0, Se = 0, me = 0, Oe = 0, Re = 0, ve = 0, Ne = 0, Ee = 0, ye = 0, Le = 0, De = 0, _e = 0, He = 0, Ve = 0, xe = 0, Ke = 0, ht = 0, Ge = 0, wt = 0, lt = 0, Ye = 0, Et = 0, Mt = 0, qe = J[0], Xe = J[1], tt = J[2], Fe = J[3], et = J[4], Ze = J[5], ze = J[6], ut = J[7], rt = J[8], je = J[9], it = J[10], st = J[11], Be = J[12], Qe = J[13], ft = J[14], $e = J[15];
      S = W[0], oe += S * qe, ce += S * Xe, fe += S * tt, be += S * Fe, we += S * et, Ie += S * Ze, Je += S * ze, Ce += S * ut, Te += S * rt, Se += S * je, me += S * it, Oe += S * st, Re += S * Be, ve += S * Qe, Ne += S * ft, Ee += S * $e, S = W[1], ce += S * qe, fe += S * Xe, be += S * tt, we += S * Fe, Ie += S * et, Je += S * Ze, Ce += S * ze, Te += S * ut, Se += S * rt, me += S * je, Oe += S * it, Re += S * st, ve += S * Be, Ne += S * Qe, Ee += S * ft, ye += S * $e, S = W[2], fe += S * qe, be += S * Xe, we += S * tt, Ie += S * Fe, Je += S * et, Ce += S * Ze, Te += S * ze, Se += S * ut, me += S * rt, Oe += S * je, Re += S * it, ve += S * st, Ne += S * Be, Ee += S * Qe, ye += S * ft, Le += S * $e, S = W[3], be += S * qe, we += S * Xe, Ie += S * tt, Je += S * Fe, Ce += S * et, Te += S * Ze, Se += S * ze, me += S * ut, Oe += S * rt, Re += S * je, ve += S * it, Ne += S * st, Ee += S * Be, ye += S * Qe, Le += S * ft, De += S * $e, S = W[4], we += S * qe, Ie += S * Xe, Je += S * tt, Ce += S * Fe, Te += S * et, Se += S * Ze, me += S * ze, Oe += S * ut, Re += S * rt, ve += S * je, Ne += S * it, Ee += S * st, ye += S * Be, Le += S * Qe, De += S * ft, _e += S * $e, S = W[5], Ie += S * qe, Je += S * Xe, Ce += S * tt, Te += S * Fe, Se += S * et, me += S * Ze, Oe += S * ze, Re += S * ut, ve += S * rt, Ne += S * je, Ee += S * it, ye += S * st, Le += S * Be, De += S * Qe, _e += S * ft, He += S * $e, S = W[6], Je += S * qe, Ce += S * Xe, Te += S * tt, Se += S * Fe, me += S * et, Oe += S * Ze, Re += S * ze, ve += S * ut, Ne += S * rt, Ee += S * je, ye += S * it, Le += S * st, De += S * Be, _e += S * Qe, He += S * ft, Ve += S * $e, S = W[7], Ce += S * qe, Te += S * Xe, Se += S * tt, me += S * Fe, Oe += S * et, Re += S * Ze, ve += S * ze, Ne += S * ut, Ee += S * rt, ye += S * je, Le += S * it, De += S * st, _e += S * Be, He += S * Qe, Ve += S * ft, xe += S * $e, S = W[8], Te += S * qe, Se += S * Xe, me += S * tt, Oe += S * Fe, Re += S * et, ve += S * Ze, Ne += S * ze, Ee += S * ut, ye += S * rt, Le += S * je, De += S * it, _e += S * st, He += S * Be, Ve += S * Qe, xe += S * ft, Ke += S * $e, S = W[9], Se += S * qe, me += S * Xe, Oe += S * tt, Re += S * Fe, ve += S * et, Ne += S * Ze, Ee += S * ze, ye += S * ut, Le += S * rt, De += S * je, _e += S * it, He += S * st, Ve += S * Be, xe += S * Qe, Ke += S * ft, ht += S * $e, S = W[10], me += S * qe, Oe += S * Xe, Re += S * tt, ve += S * Fe, Ne += S * et, Ee += S * Ze, ye += S * ze, Le += S * ut, De += S * rt, _e += S * je, He += S * it, Ve += S * st, xe += S * Be, Ke += S * Qe, ht += S * ft, Ge += S * $e, S = W[11], Oe += S * qe, Re += S * Xe, ve += S * tt, Ne += S * Fe, Ee += S * et, ye += S * Ze, Le += S * ze, De += S * ut, _e += S * rt, He += S * je, Ve += S * it, xe += S * st, Ke += S * Be, ht += S * Qe, Ge += S * ft, wt += S * $e, S = W[12], Re += S * qe, ve += S * Xe, Ne += S * tt, Ee += S * Fe, ye += S * et, Le += S * Ze, De += S * ze, _e += S * ut, He += S * rt, Ve += S * je, xe += S * it, Ke += S * st, ht += S * Be, Ge += S * Qe, wt += S * ft, lt += S * $e, S = W[13], ve += S * qe, Ne += S * Xe, Ee += S * tt, ye += S * Fe, Le += S * et, De += S * Ze, _e += S * ze, He += S * ut, Ve += S * rt, xe += S * je, Ke += S * it, ht += S * st, Ge += S * Be, wt += S * Qe, lt += S * ft, Ye += S * $e, S = W[14], Ne += S * qe, Ee += S * Xe, ye += S * tt, Le += S * Fe, De += S * et, _e += S * Ze, He += S * ze, Ve += S * ut, xe += S * rt, Ke += S * je, ht += S * it, Ge += S * st, wt += S * Be, lt += S * Qe, Ye += S * ft, Et += S * $e, S = W[15], Ee += S * qe, ye += S * Xe, Le += S * tt, De += S * Fe, _e += S * et, He += S * Ze, Ve += S * ze, xe += S * ut, Ke += S * rt, ht += S * je, Ge += S * it, wt += S * st, lt += S * Be, Ye += S * Qe, Et += S * ft, Mt += S * $e, oe += 38 * ye, ce += 38 * Le, fe += 38 * De, be += 38 * _e, we += 38 * He, Ie += 38 * Ve, Je += 38 * xe, Ce += 38 * Ke, Te += 38 * ht, Se += 38 * Ge, me += 38 * wt, Oe += 38 * lt, Re += 38 * Ye, ve += 38 * Et, Ne += 38 * Mt, G = 1, S = oe + G + 65535, G = Math.floor(S / 65536), oe = S - G * 65536, S = ce + G + 65535, G = Math.floor(S / 65536), ce = S - G * 65536, S = fe + G + 65535, G = Math.floor(S / 65536), fe = S - G * 65536, S = be + G + 65535, G = Math.floor(S / 65536), be = S - G * 65536, S = we + G + 65535, G = Math.floor(S / 65536), we = S - G * 65536, S = Ie + G + 65535, G = Math.floor(S / 65536), Ie = S - G * 65536, S = Je + G + 65535, G = Math.floor(S / 65536), Je = S - G * 65536, S = Ce + G + 65535, G = Math.floor(S / 65536), Ce = S - G * 65536, S = Te + G + 65535, G = Math.floor(S / 65536), Te = S - G * 65536, S = Se + G + 65535, G = Math.floor(S / 65536), Se = S - G * 65536, S = me + G + 65535, G = Math.floor(S / 65536), me = S - G * 65536, S = Oe + G + 65535, G = Math.floor(S / 65536), Oe = S - G * 65536, S = Re + G + 65535, G = Math.floor(S / 65536), Re = S - G * 65536, S = ve + G + 65535, G = Math.floor(S / 65536), ve = S - G * 65536, S = Ne + G + 65535, G = Math.floor(S / 65536), Ne = S - G * 65536, S = Ee + G + 65535, G = Math.floor(S / 65536), Ee = S - G * 65536, oe += G - 1 + 37 * (G - 1), G = 1, S = oe + G + 65535, G = Math.floor(S / 65536), oe = S - G * 65536, S = ce + G + 65535, G = Math.floor(S / 65536), ce = S - G * 65536, S = fe + G + 65535, G = Math.floor(S / 65536), fe = S - G * 65536, S = be + G + 65535, G = Math.floor(S / 65536), be = S - G * 65536, S = we + G + 65535, G = Math.floor(S / 65536), we = S - G * 65536, S = Ie + G + 65535, G = Math.floor(S / 65536), Ie = S - G * 65536, S = Je + G + 65535, G = Math.floor(S / 65536), Je = S - G * 65536, S = Ce + G + 65535, G = Math.floor(S / 65536), Ce = S - G * 65536, S = Te + G + 65535, G = Math.floor(S / 65536), Te = S - G * 65536, S = Se + G + 65535, G = Math.floor(S / 65536), Se = S - G * 65536, S = me + G + 65535, G = Math.floor(S / 65536), me = S - G * 65536, S = Oe + G + 65535, G = Math.floor(S / 65536), Oe = S - G * 65536, S = Re + G + 65535, G = Math.floor(S / 65536), Re = S - G * 65536, S = ve + G + 65535, G = Math.floor(S / 65536), ve = S - G * 65536, S = Ne + G + 65535, G = Math.floor(S / 65536), Ne = S - G * 65536, S = Ee + G + 65535, G = Math.floor(S / 65536), Ee = S - G * 65536, oe += G - 1 + 37 * (G - 1), k[0] = oe, k[1] = ce, k[2] = fe, k[3] = be, k[4] = we, k[5] = Ie, k[6] = Je, k[7] = Ce, k[8] = Te, k[9] = Se, k[10] = me, k[11] = Oe, k[12] = Re, k[13] = ve, k[14] = Ne, k[15] = Ee;
    }
    function U(k, W) {
      E(k, W, W);
    }
    function ee(k, W) {
      const J = s();
      let S;
      for (S = 0; S < 16; S++)
        J[S] = W[S];
      for (S = 253; S >= 0; S--)
        U(J, J), S !== 2 && S !== 4 && E(J, J, W);
      for (S = 0; S < 16; S++)
        k[S] = J[S];
    }
    function ae(k, W) {
      const J = s();
      let S;
      for (S = 0; S < 16; S++)
        J[S] = W[S];
      for (S = 250; S >= 0; S--)
        U(J, J), S !== 1 && E(J, J, W);
      for (S = 0; S < 16; S++)
        k[S] = J[S];
    }
    function j(k, W) {
      const J = s(), S = s(), G = s(), oe = s(), ce = s(), fe = s(), be = s(), we = s(), Ie = s();
      q(J, k[1], k[0]), q(Ie, W[1], W[0]), E(J, J, Ie), z(S, k[0], k[1]), z(Ie, W[0], W[1]), E(S, S, Ie), E(G, k[3], W[3]), E(G, G, u), E(oe, k[2], W[2]), z(oe, oe, oe), q(ce, S, J), q(fe, oe, G), z(be, oe, G), z(we, S, J), E(k[0], ce, fe), E(k[1], we, be), E(k[2], be, fe), E(k[3], ce, we);
    }
    function w(k, W, J) {
      for (let S = 0; S < 4; S++)
        R(k[S], W[S], J);
    }
    function c(k, W) {
      const J = s(), S = s(), G = s();
      ee(G, W[2]), E(J, W[0], G), E(S, W[1], G), L(k, S), k[31] ^= V(J) << 7;
    }
    function d(k, W, J) {
      I(k[0], f), I(k[1], h), I(k[2], h), I(k[3], f);
      for (let S = 255; S >= 0; --S) {
        const G = J[S / 8 | 0] >> (S & 7) & 1;
        w(k, W, G), j(W, k), j(k, k), w(k, W, G);
      }
    }
    function l(k, W) {
      const J = [s(), s(), s(), s()];
      I(J[0], m), I(J[1], A), I(J[2], h), E(J[3], m, A), d(k, J, W);
    }
    function b(k) {
      if (k.length !== r.SEED_LENGTH)
        throw new Error(`ed25519: seed must be ${r.SEED_LENGTH} bytes`);
      const W = (0, t.hash)(k);
      W[0] &= 248, W[31] &= 127, W[31] |= 64;
      const J = new Uint8Array(32), S = [s(), s(), s(), s()];
      l(S, W), c(J, S);
      const G = new Uint8Array(64);
      return G.set(k), G.set(J, 32), {
        publicKey: J,
        secretKey: G
      };
    }
    r.generateKeyPairFromSeed = b;
    function _(k) {
      const W = (0, e.randomBytes)(32, k), J = b(W);
      return (0, i.wipe)(W), J;
    }
    r.generateKeyPair = _;
    function D(k) {
      if (k.length !== r.SECRET_KEY_LENGTH)
        throw new Error(`ed25519: secret key must be ${r.SECRET_KEY_LENGTH} bytes`);
      return new Uint8Array(k.subarray(32));
    }
    r.extractPublicKeyFromSecretKey = D;
    const x = new Float64Array([
      237,
      211,
      245,
      92,
      26,
      99,
      18,
      88,
      214,
      156,
      247,
      162,
      222,
      249,
      222,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      16
    ]);
    function g(k, W) {
      let J, S, G, oe;
      for (S = 63; S >= 32; --S) {
        for (J = 0, G = S - 32, oe = S - 12; G < oe; ++G)
          W[G] += J - 16 * W[S] * x[G - (S - 32)], J = Math.floor((W[G] + 128) / 256), W[G] -= J * 256;
        W[G] += J, W[S] = 0;
      }
      for (J = 0, G = 0; G < 32; G++)
        W[G] += J - (W[31] >> 4) * x[G], J = W[G] >> 8, W[G] &= 255;
      for (G = 0; G < 32; G++)
        W[G] -= J * x[G];
      for (S = 0; S < 32; S++)
        W[S + 1] += W[S] >> 8, k[S] = W[S] & 255;
    }
    function y(k) {
      const W = new Float64Array(64);
      for (let J = 0; J < 64; J++)
        W[J] = k[J];
      for (let J = 0; J < 64; J++)
        k[J] = 0;
      g(k, W);
    }
    function N(k, W) {
      const J = new Float64Array(64), S = [s(), s(), s(), s()], G = (0, t.hash)(k.subarray(0, 32));
      G[0] &= 248, G[31] &= 127, G[31] |= 64;
      const oe = new Uint8Array(64);
      oe.set(G.subarray(32), 32);
      const ce = new t.SHA512();
      ce.update(oe.subarray(32)), ce.update(W);
      const fe = ce.digest();
      ce.clean(), y(fe), l(S, fe), c(oe, S), ce.reset(), ce.update(oe.subarray(0, 32)), ce.update(k.subarray(32)), ce.update(W);
      const be = ce.digest();
      y(be);
      for (let we = 0; we < 32; we++)
        J[we] = fe[we];
      for (let we = 0; we < 32; we++)
        for (let Ie = 0; Ie < 32; Ie++)
          J[we + Ie] += be[we] * G[Ie];
      return g(oe.subarray(32), J), oe;
    }
    r.sign = N;
    function Q(k, W) {
      const J = s(), S = s(), G = s(), oe = s(), ce = s(), fe = s(), be = s();
      return I(k[2], h), B(k[1], W), U(G, k[1]), E(oe, G, p), q(G, G, k[2]), z(oe, k[2], oe), U(ce, oe), U(fe, ce), E(be, fe, ce), E(J, be, G), E(J, J, oe), ae(J, J), E(J, J, G), E(J, J, oe), E(J, J, oe), E(k[0], J, oe), U(S, k[0]), E(S, S, oe), F(S, G) && E(k[0], k[0], M), U(S, k[0]), E(S, S, oe), F(S, G) ? -1 : (V(k[0]) === W[31] >> 7 && q(k[0], f, k[0]), E(k[3], k[0], k[1]), 0);
    }
    function Z(k, W, J) {
      const S = new Uint8Array(32), G = [s(), s(), s(), s()], oe = [s(), s(), s(), s()];
      if (J.length !== r.SIGNATURE_LENGTH)
        throw new Error(`ed25519: signature must be ${r.SIGNATURE_LENGTH} bytes`);
      if (Q(oe, k))
        return !1;
      const ce = new t.SHA512();
      ce.update(J.subarray(0, 32)), ce.update(k), ce.update(W);
      const fe = ce.digest();
      return y(fe), d(G, oe, fe), l(oe, J.subarray(32)), j(G, oe), c(S, G), !K(J, S);
    }
    r.verify = Z;
    function O(k) {
      let W = [s(), s(), s(), s()];
      if (Q(W, k))
        throw new Error("Ed25519: invalid public key");
      let J = s(), S = s(), G = W[1];
      z(J, h, G), q(S, h, G), ee(S, S), E(J, J, S);
      let oe = new Uint8Array(32);
      return L(oe, J), oe;
    }
    r.convertPublicKeyToX25519 = O;
    function te(k) {
      const W = (0, t.hash)(k.subarray(0, 32));
      W[0] &= 248, W[31] &= 127, W[31] |= 64;
      const J = new Uint8Array(W.subarray(0, 32));
      return (0, i.wipe)(W), J;
    }
    r.convertSecretKeyToX25519 = te;
  }(Hh)), Hh;
}
var rb = r7();
const i7 = "EdDSA", n7 = "JWT", mu = ".", Fu = "base64url", ib = "utf8", nb = "utf8", s7 = ":", a7 = "did", o7 = "key", N1 = "base58btc", c7 = "z", u7 = "K36", f7 = 32, h7 = (r) => JSON.stringify(r, (e, t) => typeof t == "bigint" ? t.toString() + "n" : t), l7 = (r) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, t = r.replace(e, '$1"$2n"$3');
  return JSON.parse(t, (i, s) => typeof s == "string" && s.match(/^\d+n$/) ? BigInt(s.substring(0, s.length - 1)) : s);
};
function Fs(r) {
  if (typeof r != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof r}`);
  try {
    return l7(r);
  } catch {
    return r;
  }
}
function Kn(r) {
  return typeof r == "string" ? r : h7(r) || "";
}
function T1(r) {
  return Fs(_r(wr(r, Fu), ib));
}
function yu(r) {
  return _r(wr(Kn(r), ib), Fu);
}
function sb(r) {
  const e = wr(u7, N1), t = c7 + _r(au([e, r]), N1);
  return [a7, o7, t].join(s7);
}
function d7(r) {
  return _r(r, Fu);
}
function p7(r) {
  return wr(r, Fu);
}
function g7(r) {
  return wr([yu(r.header), yu(r.payload)].join(mu), nb);
}
function v7(r) {
  return [
    yu(r.header),
    yu(r.payload),
    d7(r.signature)
  ].join(mu);
}
function Ml(r) {
  const e = r.split(mu), t = T1(e[0]), i = T1(e[1]), s = p7(e[2]), a = wr(e.slice(0, 2).join(mu), nb);
  return { header: t, payload: i, signature: s, data: a };
}
function q1(r = Co.randomBytes(f7)) {
  return rb.generateKeyPairFromSeed(r);
}
async function b7(r, e, t, i, s = Me.fromMiliseconds(Date.now())) {
  const a = { alg: i7, typ: n7 }, f = sb(i.publicKey), h = s + t, p = { iss: f, sub: r, aud: e, iat: s, exp: h }, u = g7({ header: a, payload: p }), m = rb.sign(i.secretKey, u);
  return v7({ header: a, payload: p, signature: m });
}
const m7 = { waku: { publish: "waku_publish", batchPublish: "waku_batchPublish", subscribe: "waku_subscribe", batchSubscribe: "waku_batchSubscribe", subscription: "waku_subscription", unsubscribe: "waku_unsubscribe", batchUnsubscribe: "waku_batchUnsubscribe", batchFetchMessages: "waku_batchFetchMessages" }, irn: { publish: "irn_publish", batchPublish: "irn_batchPublish", subscribe: "irn_subscribe", batchSubscribe: "irn_batchSubscribe", subscription: "irn_subscription", unsubscribe: "irn_unsubscribe", batchUnsubscribe: "irn_batchUnsubscribe", batchFetchMessages: "irn_batchFetchMessages" }, iridium: { publish: "iridium_publish", batchPublish: "iridium_batchPublish", subscribe: "iridium_subscribe", batchSubscribe: "iridium_batchSubscribe", subscription: "iridium_subscription", unsubscribe: "iridium_unsubscribe", batchUnsubscribe: "iridium_batchUnsubscribe", batchFetchMessages: "iridium_batchFetchMessages" } }, y7 = ":";
function bo(r) {
  const [e, t] = r.split(y7);
  return { namespace: e, reference: t };
}
function F1(r, e = []) {
  const t = [];
  return Object.keys(r).forEach((i) => {
    if (e.length && !e.includes(i)) return;
    const s = r[i];
    t.push(...s.accounts);
  }), t;
}
function ab(r, e) {
  return r.includes(":") ? [r] : e.chains || [];
}
var w7 = Object.defineProperty, B1 = Object.getOwnPropertySymbols, _7 = Object.prototype.hasOwnProperty, A7 = Object.prototype.propertyIsEnumerable, L1 = (r, e, t) => e in r ? w7(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, U1 = (r, e) => {
  for (var t in e || (e = {})) _7.call(e, t) && L1(r, t, e[t]);
  if (B1) for (var t of B1(e)) A7.call(e, t) && L1(r, t, e[t]);
  return r;
};
const E7 = "ReactNative", li = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, x7 = "js";
function wu() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function Aa() {
  return !ya.getDocument() && !!ya.getNavigator() && navigator.product === E7;
}
function No() {
  return !wu() && !!ya.getNavigator() && !!ya.getDocument();
}
function To() {
  return Aa() ? li.reactNative : wu() ? li.node : No() ? li.browser : li.unknown;
}
function S7() {
  var r;
  try {
    return Aa() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (r = global.Application) == null ? void 0 : r.applicationId : void 0;
  } catch {
    return;
  }
}
function M7(r, e) {
  let t = bu.parse(r);
  return t = U1(U1({}, t), e), r = bu.stringify(t), r;
}
function ob() {
  return n4.getWindowMetadata() || { name: "", description: "", url: "", icons: [""] };
}
function I7() {
  if (To() === li.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: t, Version: i } = global.Platform;
    return [t, i].join("-");
  }
  const r = A8();
  if (r === null) return "unknown";
  const e = r.os ? r.os.replace(" ", "").toLowerCase() : "unknown";
  return r.type === "browser" ? [e, r.name, r.version].join("-") : [e, r.version].join("-");
}
function D7() {
  var r;
  const e = To();
  return e === li.browser ? [e, ((r = ya.getLocation()) == null ? void 0 : r.host) || "unknown"].join(":") : e;
}
function cb(r, e, t) {
  const i = I7(), s = D7();
  return [[r, e].join("-"), [x7, t].join("-"), i, s].join("/");
}
function P7({ protocol: r, version: e, relayUrl: t, sdkVersion: i, auth: s, projectId: a, useOnCloseEvent: f, bundleId: h }) {
  const p = t.split("?"), u = cb(r, e, i), m = { auth: s, ua: u, projectId: a, useOnCloseEvent: f || void 0, origin: h || void 0 }, A = M7(p[1] || "", m);
  return p[0] + "?" + A;
}
function Ns(r, e) {
  return r.filter((t) => e.includes(t)).length === r.length;
}
function ub(r) {
  return Object.fromEntries(r.entries());
}
function fb(r) {
  return new Map(Object.entries(r));
}
function Os(r = Me.FIVE_MINUTES, e) {
  const t = Me.toMiliseconds(r || Me.FIVE_MINUTES);
  let i, s, a;
  return { resolve: (f) => {
    a && i && (clearTimeout(a), i(f));
  }, reject: (f) => {
    a && s && (clearTimeout(a), s(f));
  }, done: () => new Promise((f, h) => {
    a = setTimeout(() => {
      h(new Error(e));
    }, t), i = f, s = h;
  }) };
}
function va(r, e, t) {
  return new Promise(async (i, s) => {
    const a = setTimeout(() => s(new Error(t)), e);
    try {
      const f = await r;
      i(f);
    } catch (f) {
      s(f);
    }
    clearTimeout(a);
  });
}
function hb(r, e) {
  if (typeof e == "string" && e.startsWith(`${r}:`)) return e;
  if (r.toLowerCase() === "topic") {
    if (typeof e != "string") throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (r.toLowerCase() === "id") {
    if (typeof e != "number") throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${r}`);
}
function C7(r) {
  return hb("topic", r);
}
function O7(r) {
  return hb("id", r);
}
function lb(r) {
  const [e, t] = r.split(":"), i = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof t == "string") i.topic = t;
  else if (e === "id" && Number.isInteger(Number(t))) i.id = Number(t);
  else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${t}`);
  return i;
}
function pr(r, e) {
  return Me.fromMiliseconds(Date.now() + Me.toMiliseconds(r));
}
function ns(r) {
  return Date.now() >= Me.toMiliseconds(r);
}
function St(r, e) {
  return `${r}${e ? `:${e}` : ""}`;
}
function cu(r = [], e = []) {
  return [.../* @__PURE__ */ new Set([...r, ...e])];
}
async function R7({ id: r, topic: e, wcDeepLink: t }) {
  var i;
  try {
    if (!t) return;
    const s = typeof t == "string" ? JSON.parse(t) : t, a = s == null ? void 0 : s.href;
    if (typeof a != "string") return;
    const f = N7(a, r, e), h = To();
    if (h === li.browser) {
      if (!((i = ya.getDocument()) != null && i.hasFocus())) {
        console.warn("Document does not have focus, skipping deeplink.");
        return;
      }
      f.startsWith("https://") || f.startsWith("http://") ? window.open(f, "_blank", "noreferrer noopener") : window.open(f, q7() ? "_blank" : "_self", "noreferrer noopener");
    } else h === li.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(f);
  } catch (s) {
    console.error(s);
  }
}
function N7(r, e, t) {
  const i = `requestId=${e}&sessionTopic=${t}`;
  r.endsWith("/") && (r = r.slice(0, -1));
  let s = `${r}`;
  if (r.startsWith("https://t.me")) {
    const a = r.includes("?") ? "&startapp=" : "?startapp=";
    s = `${s}${a}${F7(i, !0)}`;
  } else s = `${s}/wc?${i}`;
  return s;
}
async function T7(r, e) {
  let t = "";
  try {
    if (No() && (t = localStorage.getItem(e), t)) return t;
    t = await r.getItem(e);
  } catch (i) {
    console.error(i);
  }
  return t;
}
function z1(r, e) {
  if (!r.includes(e)) return null;
  const t = r.split(/([&,?,=])/), i = t.indexOf(e);
  return t[i + 2];
}
function j1() {
  return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (r) => {
    const e = Math.random() * 16 | 0;
    return (r === "x" ? e : e & 3 | 8).toString(16);
  });
}
function Ql() {
  return typeof process < "u" && process.env.IS_VITEST === "true";
}
function q7() {
  return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
}
function F7(r, e = !1) {
  const t = Buffer.from(r).toString("base64");
  return e ? t.replace(/[=]/g, "") : t;
}
function db(r) {
  return Buffer.from(r, "base64").toString("utf-8");
}
var pb = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function B7(r) {
  var e = r.default;
  if (typeof e == "function") {
    var t = function() {
      return e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(r).forEach(function(i) {
    var s = Object.getOwnPropertyDescriptor(r, i);
    Object.defineProperty(t, i, s.get ? s : { enumerable: !0, get: function() {
      return r[i];
    } });
  }), t;
}
var gb = { exports: {} };
/**
* [js-sha3]{@link https://github.com/emn178/js-sha3}
*
* @version 0.8.0
* @author Chen, Yi-Cyuan [emn178@gmail.com]
* @copyright Chen, Yi-Cyuan 2015-2018
* @license MIT
*/
(function(r) {
  (function() {
    var e = "input is invalid type", t = "finalize already called", i = typeof window == "object", s = i ? window : {};
    s.JS_SHA3_NO_WINDOW && (i = !1);
    var a = !i && typeof self == "object", f = !s.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    f ? s = pb : a && (s = self);
    var h = !s.JS_SHA3_NO_COMMON_JS && !0 && r.exports, p = !s.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", u = "0123456789abcdef".split(""), m = [31, 7936, 2031616, 520093696], A = [4, 1024, 262144, 67108864], M = [1, 256, 65536, 16777216], I = [6, 1536, 393216, 100663296], C = [0, 8, 16, 24], R = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], L = [224, 256, 384, 512], K = [128, 256], F = ["hex", "buffer", "arrayBuffer", "array", "digest"], V = { 128: 168, 256: 136 };
    (s.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(O) {
      return Object.prototype.toString.call(O) === "[object Array]";
    }), p && (s.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(O) {
      return typeof O == "object" && O.buffer && O.buffer.constructor === ArrayBuffer;
    });
    for (var B = function(O, te, k) {
      return function(W) {
        return new N(O, te, O).update(W)[k]();
      };
    }, z = function(O, te, k) {
      return function(W, J) {
        return new N(O, te, J).update(W)[k]();
      };
    }, q = function(O, te, k) {
      return function(W, J, S, G) {
        return d["cshake" + O].update(W, J, S, G)[k]();
      };
    }, E = function(O, te, k) {
      return function(W, J, S, G) {
        return d["kmac" + O].update(W, J, S, G)[k]();
      };
    }, U = function(O, te, k, W) {
      for (var J = 0; J < F.length; ++J) {
        var S = F[J];
        O[S] = te(k, W, S);
      }
      return O;
    }, ee = function(O, te) {
      var k = B(O, te, "hex");
      return k.create = function() {
        return new N(O, te, O);
      }, k.update = function(W) {
        return k.create().update(W);
      }, U(k, B, O, te);
    }, ae = function(O, te) {
      var k = z(O, te, "hex");
      return k.create = function(W) {
        return new N(O, te, W);
      }, k.update = function(W, J) {
        return k.create(J).update(W);
      }, U(k, z, O, te);
    }, j = function(O, te) {
      var k = V[O], W = q(O, te, "hex");
      return W.create = function(J, S, G) {
        return !S && !G ? d["shake" + O].create(J) : new N(O, te, J).bytepad([S, G], k);
      }, W.update = function(J, S, G, oe) {
        return W.create(S, G, oe).update(J);
      }, U(W, q, O, te);
    }, w = function(O, te) {
      var k = V[O], W = E(O, te, "hex");
      return W.create = function(J, S, G) {
        return new Q(O, te, S).bytepad(["KMAC", G], k).bytepad([J], k);
      }, W.update = function(J, S, G, oe) {
        return W.create(J, G, oe).update(S);
      }, U(W, E, O, te);
    }, c = [{ name: "keccak", padding: M, bits: L, createMethod: ee }, { name: "sha3", padding: I, bits: L, createMethod: ee }, { name: "shake", padding: m, bits: K, createMethod: ae }, { name: "cshake", padding: A, bits: K, createMethod: j }, { name: "kmac", padding: A, bits: K, createMethod: w }], d = {}, l = [], b = 0; b < c.length; ++b) for (var _ = c[b], D = _.bits, x = 0; x < D.length; ++x) {
      var g = _.name + "_" + D[x];
      if (l.push(g), d[g] = _.createMethod(D[x], _.padding), _.name !== "sha3") {
        var y = _.name + D[x];
        l.push(y), d[y] = d[g];
      }
    }
    function N(O, te, k) {
      this.blocks = [], this.s = [], this.padding = te, this.outputBits = k, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (O << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = k >> 5, this.extraBytes = (k & 31) >> 3;
      for (var W = 0; W < 50; ++W) this.s[W] = 0;
    }
    N.prototype.update = function(O) {
      if (this.finalized) throw new Error(t);
      var te, k = typeof O;
      if (k !== "string") {
        if (k === "object") {
          if (O === null) throw new Error(e);
          if (p && O.constructor === ArrayBuffer) O = new Uint8Array(O);
          else if (!Array.isArray(O) && (!p || !ArrayBuffer.isView(O))) throw new Error(e);
        } else throw new Error(e);
        te = !0;
      }
      for (var W = this.blocks, J = this.byteCount, S = O.length, G = this.blockCount, oe = 0, ce = this.s, fe, be; oe < S; ) {
        if (this.reset) for (this.reset = !1, W[0] = this.block, fe = 1; fe < G + 1; ++fe) W[fe] = 0;
        if (te) for (fe = this.start; oe < S && fe < J; ++oe) W[fe >> 2] |= O[oe] << C[fe++ & 3];
        else for (fe = this.start; oe < S && fe < J; ++oe) be = O.charCodeAt(oe), be < 128 ? W[fe >> 2] |= be << C[fe++ & 3] : be < 2048 ? (W[fe >> 2] |= (192 | be >> 6) << C[fe++ & 3], W[fe >> 2] |= (128 | be & 63) << C[fe++ & 3]) : be < 55296 || be >= 57344 ? (W[fe >> 2] |= (224 | be >> 12) << C[fe++ & 3], W[fe >> 2] |= (128 | be >> 6 & 63) << C[fe++ & 3], W[fe >> 2] |= (128 | be & 63) << C[fe++ & 3]) : (be = 65536 + ((be & 1023) << 10 | O.charCodeAt(++oe) & 1023), W[fe >> 2] |= (240 | be >> 18) << C[fe++ & 3], W[fe >> 2] |= (128 | be >> 12 & 63) << C[fe++ & 3], W[fe >> 2] |= (128 | be >> 6 & 63) << C[fe++ & 3], W[fe >> 2] |= (128 | be & 63) << C[fe++ & 3]);
        if (this.lastByteIndex = fe, fe >= J) {
          for (this.start = fe - J, this.block = W[G], fe = 0; fe < G; ++fe) ce[fe] ^= W[fe];
          Z(ce), this.reset = !0;
        } else this.start = fe;
      }
      return this;
    }, N.prototype.encode = function(O, te) {
      var k = O & 255, W = 1, J = [k];
      for (O = O >> 8, k = O & 255; k > 0; ) J.unshift(k), O = O >> 8, k = O & 255, ++W;
      return te ? J.push(W) : J.unshift(W), this.update(J), J.length;
    }, N.prototype.encodeString = function(O) {
      var te, k = typeof O;
      if (k !== "string") {
        if (k === "object") {
          if (O === null) throw new Error(e);
          if (p && O.constructor === ArrayBuffer) O = new Uint8Array(O);
          else if (!Array.isArray(O) && (!p || !ArrayBuffer.isView(O))) throw new Error(e);
        } else throw new Error(e);
        te = !0;
      }
      var W = 0, J = O.length;
      if (te) W = J;
      else for (var S = 0; S < O.length; ++S) {
        var G = O.charCodeAt(S);
        G < 128 ? W += 1 : G < 2048 ? W += 2 : G < 55296 || G >= 57344 ? W += 3 : (G = 65536 + ((G & 1023) << 10 | O.charCodeAt(++S) & 1023), W += 4);
      }
      return W += this.encode(W * 8), this.update(O), W;
    }, N.prototype.bytepad = function(O, te) {
      for (var k = this.encode(te), W = 0; W < O.length; ++W) k += this.encodeString(O[W]);
      var J = te - k % te, S = [];
      return S.length = J, this.update(S), this;
    }, N.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var O = this.blocks, te = this.lastByteIndex, k = this.blockCount, W = this.s;
        if (O[te >> 2] |= this.padding[te & 3], this.lastByteIndex === this.byteCount) for (O[0] = O[k], te = 1; te < k + 1; ++te) O[te] = 0;
        for (O[k - 1] |= 2147483648, te = 0; te < k; ++te) W[te] ^= O[te];
        Z(W);
      }
    }, N.prototype.toString = N.prototype.hex = function() {
      this.finalize();
      for (var O = this.blockCount, te = this.s, k = this.outputBlocks, W = this.extraBytes, J = 0, S = 0, G = "", oe; S < k; ) {
        for (J = 0; J < O && S < k; ++J, ++S) oe = te[J], G += u[oe >> 4 & 15] + u[oe & 15] + u[oe >> 12 & 15] + u[oe >> 8 & 15] + u[oe >> 20 & 15] + u[oe >> 16 & 15] + u[oe >> 28 & 15] + u[oe >> 24 & 15];
        S % O === 0 && (Z(te), J = 0);
      }
      return W && (oe = te[J], G += u[oe >> 4 & 15] + u[oe & 15], W > 1 && (G += u[oe >> 12 & 15] + u[oe >> 8 & 15]), W > 2 && (G += u[oe >> 20 & 15] + u[oe >> 16 & 15])), G;
    }, N.prototype.arrayBuffer = function() {
      this.finalize();
      var O = this.blockCount, te = this.s, k = this.outputBlocks, W = this.extraBytes, J = 0, S = 0, G = this.outputBits >> 3, oe;
      W ? oe = new ArrayBuffer(k + 1 << 2) : oe = new ArrayBuffer(G);
      for (var ce = new Uint32Array(oe); S < k; ) {
        for (J = 0; J < O && S < k; ++J, ++S) ce[S] = te[J];
        S % O === 0 && Z(te);
      }
      return W && (ce[J] = te[J], oe = oe.slice(0, G)), oe;
    }, N.prototype.buffer = N.prototype.arrayBuffer, N.prototype.digest = N.prototype.array = function() {
      this.finalize();
      for (var O = this.blockCount, te = this.s, k = this.outputBlocks, W = this.extraBytes, J = 0, S = 0, G = [], oe, ce; S < k; ) {
        for (J = 0; J < O && S < k; ++J, ++S) oe = S << 2, ce = te[J], G[oe] = ce & 255, G[oe + 1] = ce >> 8 & 255, G[oe + 2] = ce >> 16 & 255, G[oe + 3] = ce >> 24 & 255;
        S % O === 0 && Z(te);
      }
      return W && (oe = S << 2, ce = te[J], G[oe] = ce & 255, W > 1 && (G[oe + 1] = ce >> 8 & 255), W > 2 && (G[oe + 2] = ce >> 16 & 255)), G;
    };
    function Q(O, te, k) {
      N.call(this, O, te, k);
    }
    Q.prototype = new N(), Q.prototype.finalize = function() {
      return this.encode(this.outputBits, !0), N.prototype.finalize.call(this);
    };
    var Z = function(O) {
      var te, k, W, J, S, G, oe, ce, fe, be, we, Ie, Je, Ce, Te, Se, me, Oe, Re, ve, Ne, Ee, ye, Le, De, _e, He, Ve, xe, Ke, ht, Ge, wt, lt, Ye, Et, Mt, qe, Xe, tt, Fe, et, Ze, ze, ut, rt, je, it, st, Be, Qe, ft, $e, Rt, Nt, at, bt, Ir, Dr, Pr, Cr, Or, Zt;
      for (W = 0; W < 48; W += 2) J = O[0] ^ O[10] ^ O[20] ^ O[30] ^ O[40], S = O[1] ^ O[11] ^ O[21] ^ O[31] ^ O[41], G = O[2] ^ O[12] ^ O[22] ^ O[32] ^ O[42], oe = O[3] ^ O[13] ^ O[23] ^ O[33] ^ O[43], ce = O[4] ^ O[14] ^ O[24] ^ O[34] ^ O[44], fe = O[5] ^ O[15] ^ O[25] ^ O[35] ^ O[45], be = O[6] ^ O[16] ^ O[26] ^ O[36] ^ O[46], we = O[7] ^ O[17] ^ O[27] ^ O[37] ^ O[47], Ie = O[8] ^ O[18] ^ O[28] ^ O[38] ^ O[48], Je = O[9] ^ O[19] ^ O[29] ^ O[39] ^ O[49], te = Ie ^ (G << 1 | oe >>> 31), k = Je ^ (oe << 1 | G >>> 31), O[0] ^= te, O[1] ^= k, O[10] ^= te, O[11] ^= k, O[20] ^= te, O[21] ^= k, O[30] ^= te, O[31] ^= k, O[40] ^= te, O[41] ^= k, te = J ^ (ce << 1 | fe >>> 31), k = S ^ (fe << 1 | ce >>> 31), O[2] ^= te, O[3] ^= k, O[12] ^= te, O[13] ^= k, O[22] ^= te, O[23] ^= k, O[32] ^= te, O[33] ^= k, O[42] ^= te, O[43] ^= k, te = G ^ (be << 1 | we >>> 31), k = oe ^ (we << 1 | be >>> 31), O[4] ^= te, O[5] ^= k, O[14] ^= te, O[15] ^= k, O[24] ^= te, O[25] ^= k, O[34] ^= te, O[35] ^= k, O[44] ^= te, O[45] ^= k, te = ce ^ (Ie << 1 | Je >>> 31), k = fe ^ (Je << 1 | Ie >>> 31), O[6] ^= te, O[7] ^= k, O[16] ^= te, O[17] ^= k, O[26] ^= te, O[27] ^= k, O[36] ^= te, O[37] ^= k, O[46] ^= te, O[47] ^= k, te = be ^ (J << 1 | S >>> 31), k = we ^ (S << 1 | J >>> 31), O[8] ^= te, O[9] ^= k, O[18] ^= te, O[19] ^= k, O[28] ^= te, O[29] ^= k, O[38] ^= te, O[39] ^= k, O[48] ^= te, O[49] ^= k, Ce = O[0], Te = O[1], rt = O[11] << 4 | O[10] >>> 28, je = O[10] << 4 | O[11] >>> 28, Ve = O[20] << 3 | O[21] >>> 29, xe = O[21] << 3 | O[20] >>> 29, Pr = O[31] << 9 | O[30] >>> 23, Cr = O[30] << 9 | O[31] >>> 23, et = O[40] << 18 | O[41] >>> 14, Ze = O[41] << 18 | O[40] >>> 14, lt = O[2] << 1 | O[3] >>> 31, Ye = O[3] << 1 | O[2] >>> 31, Se = O[13] << 12 | O[12] >>> 20, me = O[12] << 12 | O[13] >>> 20, it = O[22] << 10 | O[23] >>> 22, st = O[23] << 10 | O[22] >>> 22, Ke = O[33] << 13 | O[32] >>> 19, ht = O[32] << 13 | O[33] >>> 19, Or = O[42] << 2 | O[43] >>> 30, Zt = O[43] << 2 | O[42] >>> 30, Rt = O[5] << 30 | O[4] >>> 2, Nt = O[4] << 30 | O[5] >>> 2, Et = O[14] << 6 | O[15] >>> 26, Mt = O[15] << 6 | O[14] >>> 26, Oe = O[25] << 11 | O[24] >>> 21, Re = O[24] << 11 | O[25] >>> 21, Be = O[34] << 15 | O[35] >>> 17, Qe = O[35] << 15 | O[34] >>> 17, Ge = O[45] << 29 | O[44] >>> 3, wt = O[44] << 29 | O[45] >>> 3, Le = O[6] << 28 | O[7] >>> 4, De = O[7] << 28 | O[6] >>> 4, at = O[17] << 23 | O[16] >>> 9, bt = O[16] << 23 | O[17] >>> 9, qe = O[26] << 25 | O[27] >>> 7, Xe = O[27] << 25 | O[26] >>> 7, ve = O[36] << 21 | O[37] >>> 11, Ne = O[37] << 21 | O[36] >>> 11, ft = O[47] << 24 | O[46] >>> 8, $e = O[46] << 24 | O[47] >>> 8, ze = O[8] << 27 | O[9] >>> 5, ut = O[9] << 27 | O[8] >>> 5, _e = O[18] << 20 | O[19] >>> 12, He = O[19] << 20 | O[18] >>> 12, Ir = O[29] << 7 | O[28] >>> 25, Dr = O[28] << 7 | O[29] >>> 25, tt = O[38] << 8 | O[39] >>> 24, Fe = O[39] << 8 | O[38] >>> 24, Ee = O[48] << 14 | O[49] >>> 18, ye = O[49] << 14 | O[48] >>> 18, O[0] = Ce ^ ~Se & Oe, O[1] = Te ^ ~me & Re, O[10] = Le ^ ~_e & Ve, O[11] = De ^ ~He & xe, O[20] = lt ^ ~Et & qe, O[21] = Ye ^ ~Mt & Xe, O[30] = ze ^ ~rt & it, O[31] = ut ^ ~je & st, O[40] = Rt ^ ~at & Ir, O[41] = Nt ^ ~bt & Dr, O[2] = Se ^ ~Oe & ve, O[3] = me ^ ~Re & Ne, O[12] = _e ^ ~Ve & Ke, O[13] = He ^ ~xe & ht, O[22] = Et ^ ~qe & tt, O[23] = Mt ^ ~Xe & Fe, O[32] = rt ^ ~it & Be, O[33] = je ^ ~st & Qe, O[42] = at ^ ~Ir & Pr, O[43] = bt ^ ~Dr & Cr, O[4] = Oe ^ ~ve & Ee, O[5] = Re ^ ~Ne & ye, O[14] = Ve ^ ~Ke & Ge, O[15] = xe ^ ~ht & wt, O[24] = qe ^ ~tt & et, O[25] = Xe ^ ~Fe & Ze, O[34] = it ^ ~Be & ft, O[35] = st ^ ~Qe & $e, O[44] = Ir ^ ~Pr & Or, O[45] = Dr ^ ~Cr & Zt, O[6] = ve ^ ~Ee & Ce, O[7] = Ne ^ ~ye & Te, O[16] = Ke ^ ~Ge & Le, O[17] = ht ^ ~wt & De, O[26] = tt ^ ~et & lt, O[27] = Fe ^ ~Ze & Ye, O[36] = Be ^ ~ft & ze, O[37] = Qe ^ ~$e & ut, O[46] = Pr ^ ~Or & Rt, O[47] = Cr ^ ~Zt & Nt, O[8] = Ee ^ ~Ce & Se, O[9] = ye ^ ~Te & me, O[18] = Ge ^ ~Le & _e, O[19] = wt ^ ~De & He, O[28] = et ^ ~lt & Et, O[29] = Ze ^ ~Ye & Mt, O[38] = ft ^ ~ze & rt, O[39] = $e ^ ~ut & je, O[48] = Or ^ ~Rt & at, O[49] = Zt ^ ~Nt & bt, O[0] ^= R[W], O[1] ^= R[W + 1];
    };
    if (h) r.exports = d;
    else for (b = 0; b < l.length; ++b) s[l[b]] = d[l[b]];
  })();
})(gb);
var L7 = gb.exports;
const U7 = "logger/5.7.0";
let $1 = !1, k1 = !1;
const uu = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let H1 = uu.default, Vh = null;
function z7() {
  try {
    const r = [];
    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
      try {
        if ("test".normalize(e) !== "test") throw new Error("bad normalize");
      } catch {
        r.push(e);
      }
    }), r.length) throw new Error("missing " + r.join(", "));
    if ("é".normalize("NFD") !== "é") throw new Error("broken implementation");
  } catch (r) {
    return r.message;
  }
  return null;
}
const K1 = z7();
var Il;
(function(r) {
  r.DEBUG = "DEBUG", r.INFO = "INFO", r.WARNING = "WARNING", r.ERROR = "ERROR", r.OFF = "OFF";
})(Il || (Il = {}));
var Ji;
(function(r) {
  r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", r.NETWORK_ERROR = "NETWORK_ERROR", r.SERVER_ERROR = "SERVER_ERROR", r.TIMEOUT = "TIMEOUT", r.BUFFER_OVERRUN = "BUFFER_OVERRUN", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.MISSING_NEW = "MISSING_NEW", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", r.ACTION_REJECTED = "ACTION_REJECTED";
})(Ji || (Ji = {}));
const V1 = "0123456789abcdef";
let xr = class dr {
  constructor(e) {
    Object.defineProperty(this, "version", { enumerable: !0, value: e, writable: !1 });
  }
  _log(e, t) {
    const i = e.toLowerCase();
    uu[i] == null && this.throwArgumentError("invalid log level name", "logLevel", e), !(H1 > uu[i]) && console.log.apply(console, t);
  }
  debug(...e) {
    this._log(dr.levels.DEBUG, e);
  }
  info(...e) {
    this._log(dr.levels.INFO, e);
  }
  warn(...e) {
    this._log(dr.levels.WARNING, e);
  }
  makeError(e, t, i) {
    if (k1) return this.makeError("censored error", t, {});
    t || (t = dr.errors.UNKNOWN_ERROR), i || (i = {});
    const s = [];
    Object.keys(i).forEach((p) => {
      const u = i[p];
      try {
        if (u instanceof Uint8Array) {
          let m = "";
          for (let A = 0; A < u.length; A++) m += V1[u[A] >> 4], m += V1[u[A] & 15];
          s.push(p + "=Uint8Array(0x" + m + ")");
        } else s.push(p + "=" + JSON.stringify(u));
      } catch {
        s.push(p + "=" + JSON.stringify(i[p].toString()));
      }
    }), s.push(`code=${t}`), s.push(`version=${this.version}`);
    const a = e;
    let f = "";
    switch (t) {
      case Ji.NUMERIC_FAULT: {
        f = "NUMERIC_FAULT";
        const p = e;
        switch (p) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            f += "-" + p;
            break;
          case "negative-power":
          case "negative-width":
            f += "-unsupported";
            break;
          case "unbound-bitwise-result":
            f += "-unbound-result";
            break;
        }
        break;
      }
      case Ji.CALL_EXCEPTION:
      case Ji.INSUFFICIENT_FUNDS:
      case Ji.MISSING_NEW:
      case Ji.NONCE_EXPIRED:
      case Ji.REPLACEMENT_UNDERPRICED:
      case Ji.TRANSACTION_REPLACED:
      case Ji.UNPREDICTABLE_GAS_LIMIT:
        f = t;
        break;
    }
    f && (e += " [ See: https://links.ethers.org/v5-errors-" + f + " ]"), s.length && (e += " (" + s.join(", ") + ")");
    const h = new Error(e);
    return h.reason = a, h.code = t, Object.keys(i).forEach(function(p) {
      h[p] = i[p];
    }), h;
  }
  throwError(e, t, i) {
    throw this.makeError(e, t, i);
  }
  throwArgumentError(e, t, i) {
    return this.throwError(e, dr.errors.INVALID_ARGUMENT, { argument: t, value: i });
  }
  assert(e, t, i, s) {
    e || this.throwError(t, i, s);
  }
  assertArgument(e, t, i, s) {
    e || this.throwArgumentError(t, i, s);
  }
  checkNormalize(e) {
    K1 && this.throwError("platform missing String.prototype.normalize", dr.errors.UNSUPPORTED_OPERATION, { operation: "String.prototype.normalize", form: K1 });
  }
  checkSafeUint53(e, t) {
    typeof e == "number" && (t == null && (t = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(t, dr.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "out-of-safe-range", value: e }), e % 1 && this.throwError(t, dr.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "non-integer", value: e }));
  }
  checkArgumentCount(e, t, i) {
    i ? i = ": " + i : i = "", e < t && this.throwError("missing argument" + i, dr.errors.MISSING_ARGUMENT, { count: e, expectedCount: t }), e > t && this.throwError("too many arguments" + i, dr.errors.UNEXPECTED_ARGUMENT, { count: e, expectedCount: t });
  }
  checkNew(e, t) {
    (e === Object || e == null) && this.throwError("missing new", dr.errors.MISSING_NEW, { name: t.name });
  }
  checkAbstract(e, t) {
    e === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", dr.errors.UNSUPPORTED_OPERATION, { name: e.name, operation: "new" }) : (e === Object || e == null) && this.throwError("missing new", dr.errors.MISSING_NEW, { name: t.name });
  }
  static globalLogger() {
    return Vh || (Vh = new dr(U7)), Vh;
  }
  static setCensorship(e, t) {
    if (!e && t && this.globalLogger().throwError("cannot permanently disable censorship", dr.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" }), $1) {
      if (!e) return;
      this.globalLogger().throwError("error censorship permanent", dr.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" });
    }
    k1 = !!e, $1 = !!t;
  }
  static setLogLevel(e) {
    const t = uu[e.toLowerCase()];
    if (t == null) {
      dr.globalLogger().warn("invalid log level - " + e);
      return;
    }
    H1 = t;
  }
  static from(e) {
    return new dr(e);
  }
};
xr.errors = Ji, xr.levels = Il;
const j7 = "bytes/5.7.0", ar = new xr(j7);
function vb(r) {
  return !!r.toHexString;
}
function ba(r) {
  return r.slice || (r.slice = function() {
    const e = Array.prototype.slice.call(arguments);
    return ba(new Uint8Array(Array.prototype.slice.apply(r, e)));
  }), r;
}
function $7(r) {
  return di(r) && !(r.length % 2) || Ea(r);
}
function G1(r) {
  return typeof r == "number" && r == r && r % 1 === 0;
}
function Ea(r) {
  if (r == null) return !1;
  if (r.constructor === Uint8Array) return !0;
  if (typeof r == "string" || !G1(r.length) || r.length < 0) return !1;
  for (let e = 0; e < r.length; e++) {
    const t = r[e];
    if (!G1(t) || t < 0 || t >= 256) return !1;
  }
  return !0;
}
function rr(r, e) {
  if (e || (e = {}), typeof r == "number") {
    ar.checkSafeUint53(r, "invalid arrayify value");
    const t = [];
    for (; r; ) t.unshift(r & 255), r = parseInt(String(r / 256));
    return t.length === 0 && t.push(0), ba(new Uint8Array(t));
  }
  if (e.allowMissingPrefix && typeof r == "string" && r.substring(0, 2) !== "0x" && (r = "0x" + r), vb(r) && (r = r.toHexString()), di(r)) {
    let t = r.substring(2);
    t.length % 2 && (e.hexPad === "left" ? t = "0" + t : e.hexPad === "right" ? t += "0" : ar.throwArgumentError("hex data is odd-length", "value", r));
    const i = [];
    for (let s = 0; s < t.length; s += 2) i.push(parseInt(t.substring(s, s + 2), 16));
    return ba(new Uint8Array(i));
  }
  return Ea(r) ? ba(new Uint8Array(r)) : ar.throwArgumentError("invalid arrayify value", "value", r);
}
function k7(r) {
  const e = r.map((s) => rr(s)), t = e.reduce((s, a) => s + a.length, 0), i = new Uint8Array(t);
  return e.reduce((s, a) => (i.set(a, s), s + a.length), 0), ba(i);
}
function H7(r, e) {
  r = rr(r), r.length > e && ar.throwArgumentError("value out of range", "value", arguments[0]);
  const t = new Uint8Array(e);
  return t.set(r, e - r.length), ba(t);
}
function di(r, e) {
  return !(typeof r != "string" || !r.match(/^0x[0-9A-Fa-f]*$/) || e && r.length !== 2 + 2 * e);
}
const Gh = "0123456789abcdef";
function ri(r, e) {
  if (e || (e = {}), typeof r == "number") {
    ar.checkSafeUint53(r, "invalid hexlify value");
    let t = "";
    for (; r; ) t = Gh[r & 15] + t, r = Math.floor(r / 16);
    return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00";
  }
  if (typeof r == "bigint") return r = r.toString(16), r.length % 2 ? "0x0" + r : "0x" + r;
  if (e.allowMissingPrefix && typeof r == "string" && r.substring(0, 2) !== "0x" && (r = "0x" + r), vb(r)) return r.toHexString();
  if (di(r)) return r.length % 2 && (e.hexPad === "left" ? r = "0x0" + r.substring(2) : e.hexPad === "right" ? r += "0" : ar.throwArgumentError("hex data is odd-length", "value", r)), r.toLowerCase();
  if (Ea(r)) {
    let t = "0x";
    for (let i = 0; i < r.length; i++) {
      let s = r[i];
      t += Gh[(s & 240) >> 4] + Gh[s & 15];
    }
    return t;
  }
  return ar.throwArgumentError("invalid hexlify value", "value", r);
}
function K7(r) {
  if (typeof r != "string") r = ri(r);
  else if (!di(r) || r.length % 2) return null;
  return (r.length - 2) / 2;
}
function W1(r, e, t) {
  return typeof r != "string" ? r = ri(r) : (!di(r) || r.length % 2) && ar.throwArgumentError("invalid hexData", "value", r), e = 2 + 2 * e, t != null ? "0x" + r.substring(e, 2 + 2 * t) : "0x" + r.substring(e);
}
function bn(r, e) {
  for (typeof r != "string" ? r = ri(r) : di(r) || ar.throwArgumentError("invalid hex string", "value", r), r.length > 2 * e + 2 && ar.throwArgumentError("value out of range", "value", arguments[1]); r.length < 2 * e + 2; ) r = "0x0" + r.substring(2);
  return r;
}
function bb(r) {
  const e = { r: "0x", s: "0x", _vs: "0x", recoveryParam: 0, v: 0, yParityAndS: "0x", compact: "0x" };
  if ($7(r)) {
    let t = rr(r);
    t.length === 64 ? (e.v = 27 + (t[32] >> 7), t[32] &= 127, e.r = ri(t.slice(0, 32)), e.s = ri(t.slice(32, 64))) : t.length === 65 ? (e.r = ri(t.slice(0, 32)), e.s = ri(t.slice(32, 64)), e.v = t[64]) : ar.throwArgumentError("invalid signature string", "signature", r), e.v < 27 && (e.v === 0 || e.v === 1 ? e.v += 27 : ar.throwArgumentError("signature invalid v byte", "signature", r)), e.recoveryParam = 1 - e.v % 2, e.recoveryParam && (t[32] |= 128), e._vs = ri(t.slice(32, 64));
  } else {
    if (e.r = r.r, e.s = r.s, e.v = r.v, e.recoveryParam = r.recoveryParam, e._vs = r._vs, e._vs != null) {
      const s = H7(rr(e._vs), 32);
      e._vs = ri(s);
      const a = s[0] >= 128 ? 1 : 0;
      e.recoveryParam == null ? e.recoveryParam = a : e.recoveryParam !== a && ar.throwArgumentError("signature recoveryParam mismatch _vs", "signature", r), s[0] &= 127;
      const f = ri(s);
      e.s == null ? e.s = f : e.s !== f && ar.throwArgumentError("signature v mismatch _vs", "signature", r);
    }
    if (e.recoveryParam == null) e.v == null ? ar.throwArgumentError("signature missing v and recoveryParam", "signature", r) : e.v === 0 || e.v === 1 ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2;
    else if (e.v == null) e.v = 27 + e.recoveryParam;
    else {
      const s = e.v === 0 || e.v === 1 ? e.v : 1 - e.v % 2;
      e.recoveryParam !== s && ar.throwArgumentError("signature recoveryParam mismatch v", "signature", r);
    }
    e.r == null || !di(e.r) ? ar.throwArgumentError("signature missing or invalid r", "signature", r) : e.r = bn(e.r, 32), e.s == null || !di(e.s) ? ar.throwArgumentError("signature missing or invalid s", "signature", r) : e.s = bn(e.s, 32);
    const t = rr(e.s);
    t[0] >= 128 && ar.throwArgumentError("signature s out of range", "signature", r), e.recoveryParam && (t[0] |= 128);
    const i = ri(t);
    e._vs && (di(e._vs) || ar.throwArgumentError("signature invalid _vs", "signature", r), e._vs = bn(e._vs, 32)), e._vs == null ? e._vs = i : e._vs !== i && ar.throwArgumentError("signature _vs mismatch v and s", "signature", r);
  }
  return e.yParityAndS = e._vs, e.compact = e.r + e.yParityAndS.substring(2), e;
}
function Xl(r) {
  return "0x" + L7.keccak_256(rr(r));
}
var mb = { exports: {} }, V7 = {}, G7 = Object.freeze({ __proto__: null, default: V7 }), W7 = B7(G7);
(function(r) {
  (function(e, t) {
    function i(c, d) {
      if (!c) throw new Error(d || "Assertion failed");
    }
    function s(c, d) {
      c.super_ = d;
      var l = function() {
      };
      l.prototype = d.prototype, c.prototype = new l(), c.prototype.constructor = c;
    }
    function a(c, d, l) {
      if (a.isBN(c)) return c;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, c !== null && ((d === "le" || d === "be") && (l = d, d = 10), this._init(c || 0, d || 10, l || "be"));
    }
    typeof e == "object" ? e.exports = a : t.BN = a, a.BN = a, a.wordSize = 26;
    var f;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? f = window.Buffer : f = W7.Buffer;
    } catch {
    }
    a.isBN = function(c) {
      return c instanceof a ? !0 : c !== null && typeof c == "object" && c.constructor.wordSize === a.wordSize && Array.isArray(c.words);
    }, a.max = function(c, d) {
      return c.cmp(d) > 0 ? c : d;
    }, a.min = function(c, d) {
      return c.cmp(d) < 0 ? c : d;
    }, a.prototype._init = function(c, d, l) {
      if (typeof c == "number") return this._initNumber(c, d, l);
      if (typeof c == "object") return this._initArray(c, d, l);
      d === "hex" && (d = 16), i(d === (d | 0) && d >= 2 && d <= 36), c = c.toString().replace(/\s+/g, "");
      var b = 0;
      c[0] === "-" && (b++, this.negative = 1), b < c.length && (d === 16 ? this._parseHex(c, b, l) : (this._parseBase(c, d, b), l === "le" && this._initArray(this.toArray(), d, l)));
    }, a.prototype._initNumber = function(c, d, l) {
      c < 0 && (this.negative = 1, c = -c), c < 67108864 ? (this.words = [c & 67108863], this.length = 1) : c < 4503599627370496 ? (this.words = [c & 67108863, c / 67108864 & 67108863], this.length = 2) : (i(c < 9007199254740992), this.words = [c & 67108863, c / 67108864 & 67108863, 1], this.length = 3), l === "le" && this._initArray(this.toArray(), d, l);
    }, a.prototype._initArray = function(c, d, l) {
      if (i(typeof c.length == "number"), c.length <= 0) return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(c.length / 3), this.words = new Array(this.length);
      for (var b = 0; b < this.length; b++) this.words[b] = 0;
      var _, D, x = 0;
      if (l === "be") for (b = c.length - 1, _ = 0; b >= 0; b -= 3) D = c[b] | c[b - 1] << 8 | c[b - 2] << 16, this.words[_] |= D << x & 67108863, this.words[_ + 1] = D >>> 26 - x & 67108863, x += 24, x >= 26 && (x -= 26, _++);
      else if (l === "le") for (b = 0, _ = 0; b < c.length; b += 3) D = c[b] | c[b + 1] << 8 | c[b + 2] << 16, this.words[_] |= D << x & 67108863, this.words[_ + 1] = D >>> 26 - x & 67108863, x += 24, x >= 26 && (x -= 26, _++);
      return this._strip();
    };
    function h(c, d) {
      var l = c.charCodeAt(d);
      if (l >= 48 && l <= 57) return l - 48;
      if (l >= 65 && l <= 70) return l - 55;
      if (l >= 97 && l <= 102) return l - 87;
      i(!1, "Invalid character in " + c);
    }
    function p(c, d, l) {
      var b = h(c, l);
      return l - 1 >= d && (b |= h(c, l - 1) << 4), b;
    }
    a.prototype._parseHex = function(c, d, l) {
      this.length = Math.ceil((c.length - d) / 6), this.words = new Array(this.length);
      for (var b = 0; b < this.length; b++) this.words[b] = 0;
      var _ = 0, D = 0, x;
      if (l === "be") for (b = c.length - 1; b >= d; b -= 2) x = p(c, d, b) << _, this.words[D] |= x & 67108863, _ >= 18 ? (_ -= 18, D += 1, this.words[D] |= x >>> 26) : _ += 8;
      else {
        var g = c.length - d;
        for (b = g % 2 === 0 ? d + 1 : d; b < c.length; b += 2) x = p(c, d, b) << _, this.words[D] |= x & 67108863, _ >= 18 ? (_ -= 18, D += 1, this.words[D] |= x >>> 26) : _ += 8;
      }
      this._strip();
    };
    function u(c, d, l, b) {
      for (var _ = 0, D = 0, x = Math.min(c.length, l), g = d; g < x; g++) {
        var y = c.charCodeAt(g) - 48;
        _ *= b, y >= 49 ? D = y - 49 + 10 : y >= 17 ? D = y - 17 + 10 : D = y, i(y >= 0 && D < b, "Invalid character"), _ += D;
      }
      return _;
    }
    a.prototype._parseBase = function(c, d, l) {
      this.words = [0], this.length = 1;
      for (var b = 0, _ = 1; _ <= 67108863; _ *= d) b++;
      b--, _ = _ / d | 0;
      for (var D = c.length - l, x = D % b, g = Math.min(D, D - x) + l, y = 0, N = l; N < g; N += b) y = u(c, N, N + b, d), this.imuln(_), this.words[0] + y < 67108864 ? this.words[0] += y : this._iaddn(y);
      if (x !== 0) {
        var Q = 1;
        for (y = u(c, N, c.length, d), N = 0; N < x; N++) Q *= d;
        this.imuln(Q), this.words[0] + y < 67108864 ? this.words[0] += y : this._iaddn(y);
      }
      this._strip();
    }, a.prototype.copy = function(c) {
      c.words = new Array(this.length);
      for (var d = 0; d < this.length; d++) c.words[d] = this.words[d];
      c.length = this.length, c.negative = this.negative, c.red = this.red;
    };
    function m(c, d) {
      c.words = d.words, c.length = d.length, c.negative = d.negative, c.red = d.red;
    }
    if (a.prototype._move = function(c) {
      m(c, this);
    }, a.prototype.clone = function() {
      var c = new a(null);
      return this.copy(c), c;
    }, a.prototype._expand = function(c) {
      for (; this.length < c; ) this.words[this.length++] = 0;
      return this;
    }, a.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; ) this.length--;
      return this._normSign();
    }, a.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
      a.prototype[Symbol.for("nodejs.util.inspect.custom")] = A;
    } catch {
      a.prototype.inspect = A;
    }
    else a.prototype.inspect = A;
    function A() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var M = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], I = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], C = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    a.prototype.toString = function(c, d) {
      c = c || 10, d = d | 0 || 1;
      var l;
      if (c === 16 || c === "hex") {
        l = "";
        for (var b = 0, _ = 0, D = 0; D < this.length; D++) {
          var x = this.words[D], g = ((x << b | _) & 16777215).toString(16);
          _ = x >>> 24 - b & 16777215, b += 2, b >= 26 && (b -= 26, D--), _ !== 0 || D !== this.length - 1 ? l = M[6 - g.length] + g + l : l = g + l;
        }
        for (_ !== 0 && (l = _.toString(16) + l); l.length % d !== 0; ) l = "0" + l;
        return this.negative !== 0 && (l = "-" + l), l;
      }
      if (c === (c | 0) && c >= 2 && c <= 36) {
        var y = I[c], N = C[c];
        l = "";
        var Q = this.clone();
        for (Q.negative = 0; !Q.isZero(); ) {
          var Z = Q.modrn(N).toString(c);
          Q = Q.idivn(N), Q.isZero() ? l = Z + l : l = M[y - Z.length] + Z + l;
        }
        for (this.isZero() && (l = "0" + l); l.length % d !== 0; ) l = "0" + l;
        return this.negative !== 0 && (l = "-" + l), l;
      }
      i(!1, "Base should be between 2 and 36");
    }, a.prototype.toNumber = function() {
      var c = this.words[0];
      return this.length === 2 ? c += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? c += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -c : c;
    }, a.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, f && (a.prototype.toBuffer = function(c, d) {
      return this.toArrayLike(f, c, d);
    }), a.prototype.toArray = function(c, d) {
      return this.toArrayLike(Array, c, d);
    };
    var R = function(c, d) {
      return c.allocUnsafe ? c.allocUnsafe(d) : new c(d);
    };
    a.prototype.toArrayLike = function(c, d, l) {
      this._strip();
      var b = this.byteLength(), _ = l || Math.max(1, b);
      i(b <= _, "byte array longer than desired length"), i(_ > 0, "Requested array length <= 0");
      var D = R(c, _), x = d === "le" ? "LE" : "BE";
      return this["_toArrayLike" + x](D, b), D;
    }, a.prototype._toArrayLikeLE = function(c, d) {
      for (var l = 0, b = 0, _ = 0, D = 0; _ < this.length; _++) {
        var x = this.words[_] << D | b;
        c[l++] = x & 255, l < c.length && (c[l++] = x >> 8 & 255), l < c.length && (c[l++] = x >> 16 & 255), D === 6 ? (l < c.length && (c[l++] = x >> 24 & 255), b = 0, D = 0) : (b = x >>> 24, D += 2);
      }
      if (l < c.length) for (c[l++] = b; l < c.length; ) c[l++] = 0;
    }, a.prototype._toArrayLikeBE = function(c, d) {
      for (var l = c.length - 1, b = 0, _ = 0, D = 0; _ < this.length; _++) {
        var x = this.words[_] << D | b;
        c[l--] = x & 255, l >= 0 && (c[l--] = x >> 8 & 255), l >= 0 && (c[l--] = x >> 16 & 255), D === 6 ? (l >= 0 && (c[l--] = x >> 24 & 255), b = 0, D = 0) : (b = x >>> 24, D += 2);
      }
      if (l >= 0) for (c[l--] = b; l >= 0; ) c[l--] = 0;
    }, Math.clz32 ? a.prototype._countBits = function(c) {
      return 32 - Math.clz32(c);
    } : a.prototype._countBits = function(c) {
      var d = c, l = 0;
      return d >= 4096 && (l += 13, d >>>= 13), d >= 64 && (l += 7, d >>>= 7), d >= 8 && (l += 4, d >>>= 4), d >= 2 && (l += 2, d >>>= 2), l + d;
    }, a.prototype._zeroBits = function(c) {
      if (c === 0) return 26;
      var d = c, l = 0;
      return d & 8191 || (l += 13, d >>>= 13), d & 127 || (l += 7, d >>>= 7), d & 15 || (l += 4, d >>>= 4), d & 3 || (l += 2, d >>>= 2), d & 1 || l++, l;
    }, a.prototype.bitLength = function() {
      var c = this.words[this.length - 1], d = this._countBits(c);
      return (this.length - 1) * 26 + d;
    };
    function L(c) {
      for (var d = new Array(c.bitLength()), l = 0; l < d.length; l++) {
        var b = l / 26 | 0, _ = l % 26;
        d[l] = c.words[b] >>> _ & 1;
      }
      return d;
    }
    a.prototype.zeroBits = function() {
      if (this.isZero()) return 0;
      for (var c = 0, d = 0; d < this.length; d++) {
        var l = this._zeroBits(this.words[d]);
        if (c += l, l !== 26) break;
      }
      return c;
    }, a.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, a.prototype.toTwos = function(c) {
      return this.negative !== 0 ? this.abs().inotn(c).iaddn(1) : this.clone();
    }, a.prototype.fromTwos = function(c) {
      return this.testn(c - 1) ? this.notn(c).iaddn(1).ineg() : this.clone();
    }, a.prototype.isNeg = function() {
      return this.negative !== 0;
    }, a.prototype.neg = function() {
      return this.clone().ineg();
    }, a.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, a.prototype.iuor = function(c) {
      for (; this.length < c.length; ) this.words[this.length++] = 0;
      for (var d = 0; d < c.length; d++) this.words[d] = this.words[d] | c.words[d];
      return this._strip();
    }, a.prototype.ior = function(c) {
      return i((this.negative | c.negative) === 0), this.iuor(c);
    }, a.prototype.or = function(c) {
      return this.length > c.length ? this.clone().ior(c) : c.clone().ior(this);
    }, a.prototype.uor = function(c) {
      return this.length > c.length ? this.clone().iuor(c) : c.clone().iuor(this);
    }, a.prototype.iuand = function(c) {
      var d;
      this.length > c.length ? d = c : d = this;
      for (var l = 0; l < d.length; l++) this.words[l] = this.words[l] & c.words[l];
      return this.length = d.length, this._strip();
    }, a.prototype.iand = function(c) {
      return i((this.negative | c.negative) === 0), this.iuand(c);
    }, a.prototype.and = function(c) {
      return this.length > c.length ? this.clone().iand(c) : c.clone().iand(this);
    }, a.prototype.uand = function(c) {
      return this.length > c.length ? this.clone().iuand(c) : c.clone().iuand(this);
    }, a.prototype.iuxor = function(c) {
      var d, l;
      this.length > c.length ? (d = this, l = c) : (d = c, l = this);
      for (var b = 0; b < l.length; b++) this.words[b] = d.words[b] ^ l.words[b];
      if (this !== d) for (; b < d.length; b++) this.words[b] = d.words[b];
      return this.length = d.length, this._strip();
    }, a.prototype.ixor = function(c) {
      return i((this.negative | c.negative) === 0), this.iuxor(c);
    }, a.prototype.xor = function(c) {
      return this.length > c.length ? this.clone().ixor(c) : c.clone().ixor(this);
    }, a.prototype.uxor = function(c) {
      return this.length > c.length ? this.clone().iuxor(c) : c.clone().iuxor(this);
    }, a.prototype.inotn = function(c) {
      i(typeof c == "number" && c >= 0);
      var d = Math.ceil(c / 26) | 0, l = c % 26;
      this._expand(d), l > 0 && d--;
      for (var b = 0; b < d; b++) this.words[b] = ~this.words[b] & 67108863;
      return l > 0 && (this.words[b] = ~this.words[b] & 67108863 >> 26 - l), this._strip();
    }, a.prototype.notn = function(c) {
      return this.clone().inotn(c);
    }, a.prototype.setn = function(c, d) {
      i(typeof c == "number" && c >= 0);
      var l = c / 26 | 0, b = c % 26;
      return this._expand(l + 1), d ? this.words[l] = this.words[l] | 1 << b : this.words[l] = this.words[l] & ~(1 << b), this._strip();
    }, a.prototype.iadd = function(c) {
      var d;
      if (this.negative !== 0 && c.negative === 0) return this.negative = 0, d = this.isub(c), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && c.negative !== 0) return c.negative = 0, d = this.isub(c), c.negative = 1, d._normSign();
      var l, b;
      this.length > c.length ? (l = this, b = c) : (l = c, b = this);
      for (var _ = 0, D = 0; D < b.length; D++) d = (l.words[D] | 0) + (b.words[D] | 0) + _, this.words[D] = d & 67108863, _ = d >>> 26;
      for (; _ !== 0 && D < l.length; D++) d = (l.words[D] | 0) + _, this.words[D] = d & 67108863, _ = d >>> 26;
      if (this.length = l.length, _ !== 0) this.words[this.length] = _, this.length++;
      else if (l !== this) for (; D < l.length; D++) this.words[D] = l.words[D];
      return this;
    }, a.prototype.add = function(c) {
      var d;
      return c.negative !== 0 && this.negative === 0 ? (c.negative = 0, d = this.sub(c), c.negative ^= 1, d) : c.negative === 0 && this.negative !== 0 ? (this.negative = 0, d = c.sub(this), this.negative = 1, d) : this.length > c.length ? this.clone().iadd(c) : c.clone().iadd(this);
    }, a.prototype.isub = function(c) {
      if (c.negative !== 0) {
        c.negative = 0;
        var d = this.iadd(c);
        return c.negative = 1, d._normSign();
      } else if (this.negative !== 0) return this.negative = 0, this.iadd(c), this.negative = 1, this._normSign();
      var l = this.cmp(c);
      if (l === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var b, _;
      l > 0 ? (b = this, _ = c) : (b = c, _ = this);
      for (var D = 0, x = 0; x < _.length; x++) d = (b.words[x] | 0) - (_.words[x] | 0) + D, D = d >> 26, this.words[x] = d & 67108863;
      for (; D !== 0 && x < b.length; x++) d = (b.words[x] | 0) + D, D = d >> 26, this.words[x] = d & 67108863;
      if (D === 0 && x < b.length && b !== this) for (; x < b.length; x++) this.words[x] = b.words[x];
      return this.length = Math.max(this.length, x), b !== this && (this.negative = 1), this._strip();
    }, a.prototype.sub = function(c) {
      return this.clone().isub(c);
    };
    function K(c, d, l) {
      l.negative = d.negative ^ c.negative;
      var b = c.length + d.length | 0;
      l.length = b, b = b - 1 | 0;
      var _ = c.words[0] | 0, D = d.words[0] | 0, x = _ * D, g = x & 67108863, y = x / 67108864 | 0;
      l.words[0] = g;
      for (var N = 1; N < b; N++) {
        for (var Q = y >>> 26, Z = y & 67108863, O = Math.min(N, d.length - 1), te = Math.max(0, N - c.length + 1); te <= O; te++) {
          var k = N - te | 0;
          _ = c.words[k] | 0, D = d.words[te] | 0, x = _ * D + Z, Q += x / 67108864 | 0, Z = x & 67108863;
        }
        l.words[N] = Z | 0, y = Q | 0;
      }
      return y !== 0 ? l.words[N] = y | 0 : l.length--, l._strip();
    }
    var F = function(c, d, l) {
      var b = c.words, _ = d.words, D = l.words, x = 0, g, y, N, Q = b[0] | 0, Z = Q & 8191, O = Q >>> 13, te = b[1] | 0, k = te & 8191, W = te >>> 13, J = b[2] | 0, S = J & 8191, G = J >>> 13, oe = b[3] | 0, ce = oe & 8191, fe = oe >>> 13, be = b[4] | 0, we = be & 8191, Ie = be >>> 13, Je = b[5] | 0, Ce = Je & 8191, Te = Je >>> 13, Se = b[6] | 0, me = Se & 8191, Oe = Se >>> 13, Re = b[7] | 0, ve = Re & 8191, Ne = Re >>> 13, Ee = b[8] | 0, ye = Ee & 8191, Le = Ee >>> 13, De = b[9] | 0, _e = De & 8191, He = De >>> 13, Ve = _[0] | 0, xe = Ve & 8191, Ke = Ve >>> 13, ht = _[1] | 0, Ge = ht & 8191, wt = ht >>> 13, lt = _[2] | 0, Ye = lt & 8191, Et = lt >>> 13, Mt = _[3] | 0, qe = Mt & 8191, Xe = Mt >>> 13, tt = _[4] | 0, Fe = tt & 8191, et = tt >>> 13, Ze = _[5] | 0, ze = Ze & 8191, ut = Ze >>> 13, rt = _[6] | 0, je = rt & 8191, it = rt >>> 13, st = _[7] | 0, Be = st & 8191, Qe = st >>> 13, ft = _[8] | 0, $e = ft & 8191, Rt = ft >>> 13, Nt = _[9] | 0, at = Nt & 8191, bt = Nt >>> 13;
      l.negative = c.negative ^ d.negative, l.length = 19, g = Math.imul(Z, xe), y = Math.imul(Z, Ke), y = y + Math.imul(O, xe) | 0, N = Math.imul(O, Ke);
      var Ir = (x + g | 0) + ((y & 8191) << 13) | 0;
      x = (N + (y >>> 13) | 0) + (Ir >>> 26) | 0, Ir &= 67108863, g = Math.imul(k, xe), y = Math.imul(k, Ke), y = y + Math.imul(W, xe) | 0, N = Math.imul(W, Ke), g = g + Math.imul(Z, Ge) | 0, y = y + Math.imul(Z, wt) | 0, y = y + Math.imul(O, Ge) | 0, N = N + Math.imul(O, wt) | 0;
      var Dr = (x + g | 0) + ((y & 8191) << 13) | 0;
      x = (N + (y >>> 13) | 0) + (Dr >>> 26) | 0, Dr &= 67108863, g = Math.imul(S, xe), y = Math.imul(S, Ke), y = y + Math.imul(G, xe) | 0, N = Math.imul(G, Ke), g = g + Math.imul(k, Ge) | 0, y = y + Math.imul(k, wt) | 0, y = y + Math.imul(W, Ge) | 0, N = N + Math.imul(W, wt) | 0, g = g + Math.imul(Z, Ye) | 0, y = y + Math.imul(Z, Et) | 0, y = y + Math.imul(O, Ye) | 0, N = N + Math.imul(O, Et) | 0;
      var Pr = (x + g | 0) + ((y & 8191) << 13) | 0;
      x = (N + (y >>> 13) | 0) + (Pr >>> 26) | 0, Pr &= 67108863, g = Math.imul(ce, xe), y = Math.imul(ce, Ke), y = y + Math.imul(fe, xe) | 0, N = Math.imul(fe, Ke), g = g + Math.imul(S, Ge) | 0, y = y + Math.imul(S, wt) | 0, y = y + Math.imul(G, Ge) | 0, N = N + Math.imul(G, wt) | 0, g = g + Math.imul(k, Ye) | 0, y = y + Math.imul(k, Et) | 0, y = y + Math.imul(W, Ye) | 0, N = N + Math.imul(W, Et) | 0, g = g + Math.imul(Z, qe) | 0, y = y + Math.imul(Z, Xe) | 0, y = y + Math.imul(O, qe) | 0, N = N + Math.imul(O, Xe) | 0;
      var Cr = (x + g | 0) + ((y & 8191) << 13) | 0;
      x = (N + (y >>> 13) | 0) + (Cr >>> 26) | 0, Cr &= 67108863, g = Math.imul(we, xe), y = Math.imul(we, Ke), y = y + Math.imul(Ie, xe) | 0, N = Math.imul(Ie, Ke), g = g + Math.imul(ce, Ge) | 0, y = y + Math.imul(ce, wt) | 0, y = y + Math.imul(fe, Ge) | 0, N = N + Math.imul(fe, wt) | 0, g = g + Math.imul(S, Ye) | 0, y = y + Math.imul(S, Et) | 0, y = y + Math.imul(G, Ye) | 0, N = N + Math.imul(G, Et) | 0, g = g + Math.imul(k, qe) | 0, y = y + Math.imul(k, Xe) | 0, y = y + Math.imul(W, qe) | 0, N = N + Math.imul(W, Xe) | 0, g = g + Math.imul(Z, Fe) | 0, y = y + Math.imul(Z, et) | 0, y = y + Math.imul(O, Fe) | 0, N = N + Math.imul(O, et) | 0;
      var Or = (x + g | 0) + ((y & 8191) << 13) | 0;
      x = (N + (y >>> 13) | 0) + (Or >>> 26) | 0, Or &= 67108863, g = Math.imul(Ce, xe), y = Math.imul(Ce, Ke), y = y + Math.imul(Te, xe) | 0, N = Math.imul(Te, Ke), g = g + Math.imul(we, Ge) | 0, y = y + Math.imul(we, wt) | 0, y = y + Math.imul(Ie, Ge) | 0, N = N + Math.imul(Ie, wt) | 0, g = g + Math.imul(ce, Ye) | 0, y = y + Math.imul(ce, Et) | 0, y = y + Math.imul(fe, Ye) | 0, N = N + Math.imul(fe, Et) | 0, g = g + Math.imul(S, qe) | 0, y = y + Math.imul(S, Xe) | 0, y = y + Math.imul(G, qe) | 0, N = N + Math.imul(G, Xe) | 0, g = g + Math.imul(k, Fe) | 0, y = y + Math.imul(k, et) | 0, y = y + Math.imul(W, Fe) | 0, N = N + Math.imul(W, et) | 0, g = g + Math.imul(Z, ze) | 0, y = y + Math.imul(Z, ut) | 0, y = y + Math.imul(O, ze) | 0, N = N + Math.imul(O, ut) | 0;
      var Zt = (x + g | 0) + ((y & 8191) << 13) | 0;
      x = (N + (y >>> 13) | 0) + (Zt >>> 26) | 0, Zt &= 67108863, g = Math.imul(me, xe), y = Math.imul(me, Ke), y = y + Math.imul(Oe, xe) | 0, N = Math.imul(Oe, Ke), g = g + Math.imul(Ce, Ge) | 0, y = y + Math.imul(Ce, wt) | 0, y = y + Math.imul(Te, Ge) | 0, N = N + Math.imul(Te, wt) | 0, g = g + Math.imul(we, Ye) | 0, y = y + Math.imul(we, Et) | 0, y = y + Math.imul(Ie, Ye) | 0, N = N + Math.imul(Ie, Et) | 0, g = g + Math.imul(ce, qe) | 0, y = y + Math.imul(ce, Xe) | 0, y = y + Math.imul(fe, qe) | 0, N = N + Math.imul(fe, Xe) | 0, g = g + Math.imul(S, Fe) | 0, y = y + Math.imul(S, et) | 0, y = y + Math.imul(G, Fe) | 0, N = N + Math.imul(G, et) | 0, g = g + Math.imul(k, ze) | 0, y = y + Math.imul(k, ut) | 0, y = y + Math.imul(W, ze) | 0, N = N + Math.imul(W, ut) | 0, g = g + Math.imul(Z, je) | 0, y = y + Math.imul(Z, it) | 0, y = y + Math.imul(O, je) | 0, N = N + Math.imul(O, it) | 0;
      var Kr = (x + g | 0) + ((y & 8191) << 13) | 0;
      x = (N + (y >>> 13) | 0) + (Kr >>> 26) | 0, Kr &= 67108863, g = Math.imul(ve, xe), y = Math.imul(ve, Ke), y = y + Math.imul(Ne, xe) | 0, N = Math.imul(Ne, Ke), g = g + Math.imul(me, Ge) | 0, y = y + Math.imul(me, wt) | 0, y = y + Math.imul(Oe, Ge) | 0, N = N + Math.imul(Oe, wt) | 0, g = g + Math.imul(Ce, Ye) | 0, y = y + Math.imul(Ce, Et) | 0, y = y + Math.imul(Te, Ye) | 0, N = N + Math.imul(Te, Et) | 0, g = g + Math.imul(we, qe) | 0, y = y + Math.imul(we, Xe) | 0, y = y + Math.imul(Ie, qe) | 0, N = N + Math.imul(Ie, Xe) | 0, g = g + Math.imul(ce, Fe) | 0, y = y + Math.imul(ce, et) | 0, y = y + Math.imul(fe, Fe) | 0, N = N + Math.imul(fe, et) | 0, g = g + Math.imul(S, ze) | 0, y = y + Math.imul(S, ut) | 0, y = y + Math.imul(G, ze) | 0, N = N + Math.imul(G, ut) | 0, g = g + Math.imul(k, je) | 0, y = y + Math.imul(k, it) | 0, y = y + Math.imul(W, je) | 0, N = N + Math.imul(W, it) | 0, g = g + Math.imul(Z, Be) | 0, y = y + Math.imul(Z, Qe) | 0, y = y + Math.imul(O, Be) | 0, N = N + Math.imul(O, Qe) | 0;
      var Ti = (x + g | 0) + ((y & 8191) << 13) | 0;
      x = (N + (y >>> 13) | 0) + (Ti >>> 26) | 0, Ti &= 67108863, g = Math.imul(ye, xe), y = Math.imul(ye, Ke), y = y + Math.imul(Le, xe) | 0, N = Math.imul(Le, Ke), g = g + Math.imul(ve, Ge) | 0, y = y + Math.imul(ve, wt) | 0, y = y + Math.imul(Ne, Ge) | 0, N = N + Math.imul(Ne, wt) | 0, g = g + Math.imul(me, Ye) | 0, y = y + Math.imul(me, Et) | 0, y = y + Math.imul(Oe, Ye) | 0, N = N + Math.imul(Oe, Et) | 0, g = g + Math.imul(Ce, qe) | 0, y = y + Math.imul(Ce, Xe) | 0, y = y + Math.imul(Te, qe) | 0, N = N + Math.imul(Te, Xe) | 0, g = g + Math.imul(we, Fe) | 0, y = y + Math.imul(we, et) | 0, y = y + Math.imul(Ie, Fe) | 0, N = N + Math.imul(Ie, et) | 0, g = g + Math.imul(ce, ze) | 0, y = y + Math.imul(ce, ut) | 0, y = y + Math.imul(fe, ze) | 0, N = N + Math.imul(fe, ut) | 0, g = g + Math.imul(S, je) | 0, y = y + Math.imul(S, it) | 0, y = y + Math.imul(G, je) | 0, N = N + Math.imul(G, it) | 0, g = g + Math.imul(k, Be) | 0, y = y + Math.imul(k, Qe) | 0, y = y + Math.imul(W, Be) | 0, N = N + Math.imul(W, Qe) | 0, g = g + Math.imul(Z, $e) | 0, y = y + Math.imul(Z, Rt) | 0, y = y + Math.imul(O, $e) | 0, N = N + Math.imul(O, Rt) | 0;
      var Vr = (x + g | 0) + ((y & 8191) << 13) | 0;
      x = (N + (y >>> 13) | 0) + (Vr >>> 26) | 0, Vr &= 67108863, g = Math.imul(_e, xe), y = Math.imul(_e, Ke), y = y + Math.imul(He, xe) | 0, N = Math.imul(He, Ke), g = g + Math.imul(ye, Ge) | 0, y = y + Math.imul(ye, wt) | 0, y = y + Math.imul(Le, Ge) | 0, N = N + Math.imul(Le, wt) | 0, g = g + Math.imul(ve, Ye) | 0, y = y + Math.imul(ve, Et) | 0, y = y + Math.imul(Ne, Ye) | 0, N = N + Math.imul(Ne, Et) | 0, g = g + Math.imul(me, qe) | 0, y = y + Math.imul(me, Xe) | 0, y = y + Math.imul(Oe, qe) | 0, N = N + Math.imul(Oe, Xe) | 0, g = g + Math.imul(Ce, Fe) | 0, y = y + Math.imul(Ce, et) | 0, y = y + Math.imul(Te, Fe) | 0, N = N + Math.imul(Te, et) | 0, g = g + Math.imul(we, ze) | 0, y = y + Math.imul(we, ut) | 0, y = y + Math.imul(Ie, ze) | 0, N = N + Math.imul(Ie, ut) | 0, g = g + Math.imul(ce, je) | 0, y = y + Math.imul(ce, it) | 0, y = y + Math.imul(fe, je) | 0, N = N + Math.imul(fe, it) | 0, g = g + Math.imul(S, Be) | 0, y = y + Math.imul(S, Qe) | 0, y = y + Math.imul(G, Be) | 0, N = N + Math.imul(G, Qe) | 0, g = g + Math.imul(k, $e) | 0, y = y + Math.imul(k, Rt) | 0, y = y + Math.imul(W, $e) | 0, N = N + Math.imul(W, Rt) | 0, g = g + Math.imul(Z, at) | 0, y = y + Math.imul(Z, bt) | 0, y = y + Math.imul(O, at) | 0, N = N + Math.imul(O, bt) | 0;
      var qi = (x + g | 0) + ((y & 8191) << 13) | 0;
      x = (N + (y >>> 13) | 0) + (qi >>> 26) | 0, qi &= 67108863, g = Math.imul(_e, Ge), y = Math.imul(_e, wt), y = y + Math.imul(He, Ge) | 0, N = Math.imul(He, wt), g = g + Math.imul(ye, Ye) | 0, y = y + Math.imul(ye, Et) | 0, y = y + Math.imul(Le, Ye) | 0, N = N + Math.imul(Le, Et) | 0, g = g + Math.imul(ve, qe) | 0, y = y + Math.imul(ve, Xe) | 0, y = y + Math.imul(Ne, qe) | 0, N = N + Math.imul(Ne, Xe) | 0, g = g + Math.imul(me, Fe) | 0, y = y + Math.imul(me, et) | 0, y = y + Math.imul(Oe, Fe) | 0, N = N + Math.imul(Oe, et) | 0, g = g + Math.imul(Ce, ze) | 0, y = y + Math.imul(Ce, ut) | 0, y = y + Math.imul(Te, ze) | 0, N = N + Math.imul(Te, ut) | 0, g = g + Math.imul(we, je) | 0, y = y + Math.imul(we, it) | 0, y = y + Math.imul(Ie, je) | 0, N = N + Math.imul(Ie, it) | 0, g = g + Math.imul(ce, Be) | 0, y = y + Math.imul(ce, Qe) | 0, y = y + Math.imul(fe, Be) | 0, N = N + Math.imul(fe, Qe) | 0, g = g + Math.imul(S, $e) | 0, y = y + Math.imul(S, Rt) | 0, y = y + Math.imul(G, $e) | 0, N = N + Math.imul(G, Rt) | 0, g = g + Math.imul(k, at) | 0, y = y + Math.imul(k, bt) | 0, y = y + Math.imul(W, at) | 0, N = N + Math.imul(W, bt) | 0;
      var Fi = (x + g | 0) + ((y & 8191) << 13) | 0;
      x = (N + (y >>> 13) | 0) + (Fi >>> 26) | 0, Fi &= 67108863, g = Math.imul(_e, Ye), y = Math.imul(_e, Et), y = y + Math.imul(He, Ye) | 0, N = Math.imul(He, Et), g = g + Math.imul(ye, qe) | 0, y = y + Math.imul(ye, Xe) | 0, y = y + Math.imul(Le, qe) | 0, N = N + Math.imul(Le, Xe) | 0, g = g + Math.imul(ve, Fe) | 0, y = y + Math.imul(ve, et) | 0, y = y + Math.imul(Ne, Fe) | 0, N = N + Math.imul(Ne, et) | 0, g = g + Math.imul(me, ze) | 0, y = y + Math.imul(me, ut) | 0, y = y + Math.imul(Oe, ze) | 0, N = N + Math.imul(Oe, ut) | 0, g = g + Math.imul(Ce, je) | 0, y = y + Math.imul(Ce, it) | 0, y = y + Math.imul(Te, je) | 0, N = N + Math.imul(Te, it) | 0, g = g + Math.imul(we, Be) | 0, y = y + Math.imul(we, Qe) | 0, y = y + Math.imul(Ie, Be) | 0, N = N + Math.imul(Ie, Qe) | 0, g = g + Math.imul(ce, $e) | 0, y = y + Math.imul(ce, Rt) | 0, y = y + Math.imul(fe, $e) | 0, N = N + Math.imul(fe, Rt) | 0, g = g + Math.imul(S, at) | 0, y = y + Math.imul(S, bt) | 0, y = y + Math.imul(G, at) | 0, N = N + Math.imul(G, bt) | 0;
      var Gr = (x + g | 0) + ((y & 8191) << 13) | 0;
      x = (N + (y >>> 13) | 0) + (Gr >>> 26) | 0, Gr &= 67108863, g = Math.imul(_e, qe), y = Math.imul(_e, Xe), y = y + Math.imul(He, qe) | 0, N = Math.imul(He, Xe), g = g + Math.imul(ye, Fe) | 0, y = y + Math.imul(ye, et) | 0, y = y + Math.imul(Le, Fe) | 0, N = N + Math.imul(Le, et) | 0, g = g + Math.imul(ve, ze) | 0, y = y + Math.imul(ve, ut) | 0, y = y + Math.imul(Ne, ze) | 0, N = N + Math.imul(Ne, ut) | 0, g = g + Math.imul(me, je) | 0, y = y + Math.imul(me, it) | 0, y = y + Math.imul(Oe, je) | 0, N = N + Math.imul(Oe, it) | 0, g = g + Math.imul(Ce, Be) | 0, y = y + Math.imul(Ce, Qe) | 0, y = y + Math.imul(Te, Be) | 0, N = N + Math.imul(Te, Qe) | 0, g = g + Math.imul(we, $e) | 0, y = y + Math.imul(we, Rt) | 0, y = y + Math.imul(Ie, $e) | 0, N = N + Math.imul(Ie, Rt) | 0, g = g + Math.imul(ce, at) | 0, y = y + Math.imul(ce, bt) | 0, y = y + Math.imul(fe, at) | 0, N = N + Math.imul(fe, bt) | 0;
      var vi = (x + g | 0) + ((y & 8191) << 13) | 0;
      x = (N + (y >>> 13) | 0) + (vi >>> 26) | 0, vi &= 67108863, g = Math.imul(_e, Fe), y = Math.imul(_e, et), y = y + Math.imul(He, Fe) | 0, N = Math.imul(He, et), g = g + Math.imul(ye, ze) | 0, y = y + Math.imul(ye, ut) | 0, y = y + Math.imul(Le, ze) | 0, N = N + Math.imul(Le, ut) | 0, g = g + Math.imul(ve, je) | 0, y = y + Math.imul(ve, it) | 0, y = y + Math.imul(Ne, je) | 0, N = N + Math.imul(Ne, it) | 0, g = g + Math.imul(me, Be) | 0, y = y + Math.imul(me, Qe) | 0, y = y + Math.imul(Oe, Be) | 0, N = N + Math.imul(Oe, Qe) | 0, g = g + Math.imul(Ce, $e) | 0, y = y + Math.imul(Ce, Rt) | 0, y = y + Math.imul(Te, $e) | 0, N = N + Math.imul(Te, Rt) | 0, g = g + Math.imul(we, at) | 0, y = y + Math.imul(we, bt) | 0, y = y + Math.imul(Ie, at) | 0, N = N + Math.imul(Ie, bt) | 0;
      var bi = (x + g | 0) + ((y & 8191) << 13) | 0;
      x = (N + (y >>> 13) | 0) + (bi >>> 26) | 0, bi &= 67108863, g = Math.imul(_e, ze), y = Math.imul(_e, ut), y = y + Math.imul(He, ze) | 0, N = Math.imul(He, ut), g = g + Math.imul(ye, je) | 0, y = y + Math.imul(ye, it) | 0, y = y + Math.imul(Le, je) | 0, N = N + Math.imul(Le, it) | 0, g = g + Math.imul(ve, Be) | 0, y = y + Math.imul(ve, Qe) | 0, y = y + Math.imul(Ne, Be) | 0, N = N + Math.imul(Ne, Qe) | 0, g = g + Math.imul(me, $e) | 0, y = y + Math.imul(me, Rt) | 0, y = y + Math.imul(Oe, $e) | 0, N = N + Math.imul(Oe, Rt) | 0, g = g + Math.imul(Ce, at) | 0, y = y + Math.imul(Ce, bt) | 0, y = y + Math.imul(Te, at) | 0, N = N + Math.imul(Te, bt) | 0;
      var fr = (x + g | 0) + ((y & 8191) << 13) | 0;
      x = (N + (y >>> 13) | 0) + (fr >>> 26) | 0, fr &= 67108863, g = Math.imul(_e, je), y = Math.imul(_e, it), y = y + Math.imul(He, je) | 0, N = Math.imul(He, it), g = g + Math.imul(ye, Be) | 0, y = y + Math.imul(ye, Qe) | 0, y = y + Math.imul(Le, Be) | 0, N = N + Math.imul(Le, Qe) | 0, g = g + Math.imul(ve, $e) | 0, y = y + Math.imul(ve, Rt) | 0, y = y + Math.imul(Ne, $e) | 0, N = N + Math.imul(Ne, Rt) | 0, g = g + Math.imul(me, at) | 0, y = y + Math.imul(me, bt) | 0, y = y + Math.imul(Oe, at) | 0, N = N + Math.imul(Oe, bt) | 0;
      var Bi = (x + g | 0) + ((y & 8191) << 13) | 0;
      x = (N + (y >>> 13) | 0) + (Bi >>> 26) | 0, Bi &= 67108863, g = Math.imul(_e, Be), y = Math.imul(_e, Qe), y = y + Math.imul(He, Be) | 0, N = Math.imul(He, Qe), g = g + Math.imul(ye, $e) | 0, y = y + Math.imul(ye, Rt) | 0, y = y + Math.imul(Le, $e) | 0, N = N + Math.imul(Le, Rt) | 0, g = g + Math.imul(ve, at) | 0, y = y + Math.imul(ve, bt) | 0, y = y + Math.imul(Ne, at) | 0, N = N + Math.imul(Ne, bt) | 0;
      var Li = (x + g | 0) + ((y & 8191) << 13) | 0;
      x = (N + (y >>> 13) | 0) + (Li >>> 26) | 0, Li &= 67108863, g = Math.imul(_e, $e), y = Math.imul(_e, Rt), y = y + Math.imul(He, $e) | 0, N = Math.imul(He, Rt), g = g + Math.imul(ye, at) | 0, y = y + Math.imul(ye, bt) | 0, y = y + Math.imul(Le, at) | 0, N = N + Math.imul(Le, bt) | 0;
      var Ui = (x + g | 0) + ((y & 8191) << 13) | 0;
      x = (N + (y >>> 13) | 0) + (Ui >>> 26) | 0, Ui &= 67108863, g = Math.imul(_e, at), y = Math.imul(_e, bt), y = y + Math.imul(He, at) | 0, N = Math.imul(He, bt);
      var hs = (x + g | 0) + ((y & 8191) << 13) | 0;
      return x = (N + (y >>> 13) | 0) + (hs >>> 26) | 0, hs &= 67108863, D[0] = Ir, D[1] = Dr, D[2] = Pr, D[3] = Cr, D[4] = Or, D[5] = Zt, D[6] = Kr, D[7] = Ti, D[8] = Vr, D[9] = qi, D[10] = Fi, D[11] = Gr, D[12] = vi, D[13] = bi, D[14] = fr, D[15] = Bi, D[16] = Li, D[17] = Ui, D[18] = hs, x !== 0 && (D[19] = x, l.length++), l;
    };
    Math.imul || (F = K);
    function V(c, d, l) {
      l.negative = d.negative ^ c.negative, l.length = c.length + d.length;
      for (var b = 0, _ = 0, D = 0; D < l.length - 1; D++) {
        var x = _;
        _ = 0;
        for (var g = b & 67108863, y = Math.min(D, d.length - 1), N = Math.max(0, D - c.length + 1); N <= y; N++) {
          var Q = D - N, Z = c.words[Q] | 0, O = d.words[N] | 0, te = Z * O, k = te & 67108863;
          x = x + (te / 67108864 | 0) | 0, k = k + g | 0, g = k & 67108863, x = x + (k >>> 26) | 0, _ += x >>> 26, x &= 67108863;
        }
        l.words[D] = g, b = x, x = _;
      }
      return b !== 0 ? l.words[D] = b : l.length--, l._strip();
    }
    function B(c, d, l) {
      return V(c, d, l);
    }
    a.prototype.mulTo = function(c, d) {
      var l, b = this.length + c.length;
      return this.length === 10 && c.length === 10 ? l = F(this, c, d) : b < 63 ? l = K(this, c, d) : b < 1024 ? l = V(this, c, d) : l = B(this, c, d), l;
    }, a.prototype.mul = function(c) {
      var d = new a(null);
      return d.words = new Array(this.length + c.length), this.mulTo(c, d);
    }, a.prototype.mulf = function(c) {
      var d = new a(null);
      return d.words = new Array(this.length + c.length), B(this, c, d);
    }, a.prototype.imul = function(c) {
      return this.clone().mulTo(c, this);
    }, a.prototype.imuln = function(c) {
      var d = c < 0;
      d && (c = -c), i(typeof c == "number"), i(c < 67108864);
      for (var l = 0, b = 0; b < this.length; b++) {
        var _ = (this.words[b] | 0) * c, D = (_ & 67108863) + (l & 67108863);
        l >>= 26, l += _ / 67108864 | 0, l += D >>> 26, this.words[b] = D & 67108863;
      }
      return l !== 0 && (this.words[b] = l, this.length++), d ? this.ineg() : this;
    }, a.prototype.muln = function(c) {
      return this.clone().imuln(c);
    }, a.prototype.sqr = function() {
      return this.mul(this);
    }, a.prototype.isqr = function() {
      return this.imul(this.clone());
    }, a.prototype.pow = function(c) {
      var d = L(c);
      if (d.length === 0) return new a(1);
      for (var l = this, b = 0; b < d.length && d[b] === 0; b++, l = l.sqr()) ;
      if (++b < d.length) for (var _ = l.sqr(); b < d.length; b++, _ = _.sqr()) d[b] !== 0 && (l = l.mul(_));
      return l;
    }, a.prototype.iushln = function(c) {
      i(typeof c == "number" && c >= 0);
      var d = c % 26, l = (c - d) / 26, b = 67108863 >>> 26 - d << 26 - d, _;
      if (d !== 0) {
        var D = 0;
        for (_ = 0; _ < this.length; _++) {
          var x = this.words[_] & b, g = (this.words[_] | 0) - x << d;
          this.words[_] = g | D, D = x >>> 26 - d;
        }
        D && (this.words[_] = D, this.length++);
      }
      if (l !== 0) {
        for (_ = this.length - 1; _ >= 0; _--) this.words[_ + l] = this.words[_];
        for (_ = 0; _ < l; _++) this.words[_] = 0;
        this.length += l;
      }
      return this._strip();
    }, a.prototype.ishln = function(c) {
      return i(this.negative === 0), this.iushln(c);
    }, a.prototype.iushrn = function(c, d, l) {
      i(typeof c == "number" && c >= 0);
      var b;
      d ? b = (d - d % 26) / 26 : b = 0;
      var _ = c % 26, D = Math.min((c - _) / 26, this.length), x = 67108863 ^ 67108863 >>> _ << _, g = l;
      if (b -= D, b = Math.max(0, b), g) {
        for (var y = 0; y < D; y++) g.words[y] = this.words[y];
        g.length = D;
      }
      if (D !== 0) if (this.length > D) for (this.length -= D, y = 0; y < this.length; y++) this.words[y] = this.words[y + D];
      else this.words[0] = 0, this.length = 1;
      var N = 0;
      for (y = this.length - 1; y >= 0 && (N !== 0 || y >= b); y--) {
        var Q = this.words[y] | 0;
        this.words[y] = N << 26 - _ | Q >>> _, N = Q & x;
      }
      return g && N !== 0 && (g.words[g.length++] = N), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, a.prototype.ishrn = function(c, d, l) {
      return i(this.negative === 0), this.iushrn(c, d, l);
    }, a.prototype.shln = function(c) {
      return this.clone().ishln(c);
    }, a.prototype.ushln = function(c) {
      return this.clone().iushln(c);
    }, a.prototype.shrn = function(c) {
      return this.clone().ishrn(c);
    }, a.prototype.ushrn = function(c) {
      return this.clone().iushrn(c);
    }, a.prototype.testn = function(c) {
      i(typeof c == "number" && c >= 0);
      var d = c % 26, l = (c - d) / 26, b = 1 << d;
      if (this.length <= l) return !1;
      var _ = this.words[l];
      return !!(_ & b);
    }, a.prototype.imaskn = function(c) {
      i(typeof c == "number" && c >= 0);
      var d = c % 26, l = (c - d) / 26;
      if (i(this.negative === 0, "imaskn works only with positive numbers"), this.length <= l) return this;
      if (d !== 0 && l++, this.length = Math.min(l, this.length), d !== 0) {
        var b = 67108863 ^ 67108863 >>> d << d;
        this.words[this.length - 1] &= b;
      }
      return this._strip();
    }, a.prototype.maskn = function(c) {
      return this.clone().imaskn(c);
    }, a.prototype.iaddn = function(c) {
      return i(typeof c == "number"), i(c < 67108864), c < 0 ? this.isubn(-c) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= c ? (this.words[0] = c - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(c), this.negative = 1, this) : this._iaddn(c);
    }, a.prototype._iaddn = function(c) {
      this.words[0] += c;
      for (var d = 0; d < this.length && this.words[d] >= 67108864; d++) this.words[d] -= 67108864, d === this.length - 1 ? this.words[d + 1] = 1 : this.words[d + 1]++;
      return this.length = Math.max(this.length, d + 1), this;
    }, a.prototype.isubn = function(c) {
      if (i(typeof c == "number"), i(c < 67108864), c < 0) return this.iaddn(-c);
      if (this.negative !== 0) return this.negative = 0, this.iaddn(c), this.negative = 1, this;
      if (this.words[0] -= c, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
      else for (var d = 0; d < this.length && this.words[d] < 0; d++) this.words[d] += 67108864, this.words[d + 1] -= 1;
      return this._strip();
    }, a.prototype.addn = function(c) {
      return this.clone().iaddn(c);
    }, a.prototype.subn = function(c) {
      return this.clone().isubn(c);
    }, a.prototype.iabs = function() {
      return this.negative = 0, this;
    }, a.prototype.abs = function() {
      return this.clone().iabs();
    }, a.prototype._ishlnsubmul = function(c, d, l) {
      var b = c.length + l, _;
      this._expand(b);
      var D, x = 0;
      for (_ = 0; _ < c.length; _++) {
        D = (this.words[_ + l] | 0) + x;
        var g = (c.words[_] | 0) * d;
        D -= g & 67108863, x = (D >> 26) - (g / 67108864 | 0), this.words[_ + l] = D & 67108863;
      }
      for (; _ < this.length - l; _++) D = (this.words[_ + l] | 0) + x, x = D >> 26, this.words[_ + l] = D & 67108863;
      if (x === 0) return this._strip();
      for (i(x === -1), x = 0, _ = 0; _ < this.length; _++) D = -(this.words[_] | 0) + x, x = D >> 26, this.words[_] = D & 67108863;
      return this.negative = 1, this._strip();
    }, a.prototype._wordDiv = function(c, d) {
      var l = this.length - c.length, b = this.clone(), _ = c, D = _.words[_.length - 1] | 0, x = this._countBits(D);
      l = 26 - x, l !== 0 && (_ = _.ushln(l), b.iushln(l), D = _.words[_.length - 1] | 0);
      var g = b.length - _.length, y;
      if (d !== "mod") {
        y = new a(null), y.length = g + 1, y.words = new Array(y.length);
        for (var N = 0; N < y.length; N++) y.words[N] = 0;
      }
      var Q = b.clone()._ishlnsubmul(_, 1, g);
      Q.negative === 0 && (b = Q, y && (y.words[g] = 1));
      for (var Z = g - 1; Z >= 0; Z--) {
        var O = (b.words[_.length + Z] | 0) * 67108864 + (b.words[_.length + Z - 1] | 0);
        for (O = Math.min(O / D | 0, 67108863), b._ishlnsubmul(_, O, Z); b.negative !== 0; ) O--, b.negative = 0, b._ishlnsubmul(_, 1, Z), b.isZero() || (b.negative ^= 1);
        y && (y.words[Z] = O);
      }
      return y && y._strip(), b._strip(), d !== "div" && l !== 0 && b.iushrn(l), { div: y || null, mod: b };
    }, a.prototype.divmod = function(c, d, l) {
      if (i(!c.isZero()), this.isZero()) return { div: new a(0), mod: new a(0) };
      var b, _, D;
      return this.negative !== 0 && c.negative === 0 ? (D = this.neg().divmod(c, d), d !== "mod" && (b = D.div.neg()), d !== "div" && (_ = D.mod.neg(), l && _.negative !== 0 && _.iadd(c)), { div: b, mod: _ }) : this.negative === 0 && c.negative !== 0 ? (D = this.divmod(c.neg(), d), d !== "mod" && (b = D.div.neg()), { div: b, mod: D.mod }) : this.negative & c.negative ? (D = this.neg().divmod(c.neg(), d), d !== "div" && (_ = D.mod.neg(), l && _.negative !== 0 && _.isub(c)), { div: D.div, mod: _ }) : c.length > this.length || this.cmp(c) < 0 ? { div: new a(0), mod: this } : c.length === 1 ? d === "div" ? { div: this.divn(c.words[0]), mod: null } : d === "mod" ? { div: null, mod: new a(this.modrn(c.words[0])) } : { div: this.divn(c.words[0]), mod: new a(this.modrn(c.words[0])) } : this._wordDiv(c, d);
    }, a.prototype.div = function(c) {
      return this.divmod(c, "div", !1).div;
    }, a.prototype.mod = function(c) {
      return this.divmod(c, "mod", !1).mod;
    }, a.prototype.umod = function(c) {
      return this.divmod(c, "mod", !0).mod;
    }, a.prototype.divRound = function(c) {
      var d = this.divmod(c);
      if (d.mod.isZero()) return d.div;
      var l = d.div.negative !== 0 ? d.mod.isub(c) : d.mod, b = c.ushrn(1), _ = c.andln(1), D = l.cmp(b);
      return D < 0 || _ === 1 && D === 0 ? d.div : d.div.negative !== 0 ? d.div.isubn(1) : d.div.iaddn(1);
    }, a.prototype.modrn = function(c) {
      var d = c < 0;
      d && (c = -c), i(c <= 67108863);
      for (var l = (1 << 26) % c, b = 0, _ = this.length - 1; _ >= 0; _--) b = (l * b + (this.words[_] | 0)) % c;
      return d ? -b : b;
    }, a.prototype.modn = function(c) {
      return this.modrn(c);
    }, a.prototype.idivn = function(c) {
      var d = c < 0;
      d && (c = -c), i(c <= 67108863);
      for (var l = 0, b = this.length - 1; b >= 0; b--) {
        var _ = (this.words[b] | 0) + l * 67108864;
        this.words[b] = _ / c | 0, l = _ % c;
      }
      return this._strip(), d ? this.ineg() : this;
    }, a.prototype.divn = function(c) {
      return this.clone().idivn(c);
    }, a.prototype.egcd = function(c) {
      i(c.negative === 0), i(!c.isZero());
      var d = this, l = c.clone();
      d.negative !== 0 ? d = d.umod(c) : d = d.clone();
      for (var b = new a(1), _ = new a(0), D = new a(0), x = new a(1), g = 0; d.isEven() && l.isEven(); ) d.iushrn(1), l.iushrn(1), ++g;
      for (var y = l.clone(), N = d.clone(); !d.isZero(); ) {
        for (var Q = 0, Z = 1; !(d.words[0] & Z) && Q < 26; ++Q, Z <<= 1) ;
        if (Q > 0) for (d.iushrn(Q); Q-- > 0; ) (b.isOdd() || _.isOdd()) && (b.iadd(y), _.isub(N)), b.iushrn(1), _.iushrn(1);
        for (var O = 0, te = 1; !(l.words[0] & te) && O < 26; ++O, te <<= 1) ;
        if (O > 0) for (l.iushrn(O); O-- > 0; ) (D.isOdd() || x.isOdd()) && (D.iadd(y), x.isub(N)), D.iushrn(1), x.iushrn(1);
        d.cmp(l) >= 0 ? (d.isub(l), b.isub(D), _.isub(x)) : (l.isub(d), D.isub(b), x.isub(_));
      }
      return { a: D, b: x, gcd: l.iushln(g) };
    }, a.prototype._invmp = function(c) {
      i(c.negative === 0), i(!c.isZero());
      var d = this, l = c.clone();
      d.negative !== 0 ? d = d.umod(c) : d = d.clone();
      for (var b = new a(1), _ = new a(0), D = l.clone(); d.cmpn(1) > 0 && l.cmpn(1) > 0; ) {
        for (var x = 0, g = 1; !(d.words[0] & g) && x < 26; ++x, g <<= 1) ;
        if (x > 0) for (d.iushrn(x); x-- > 0; ) b.isOdd() && b.iadd(D), b.iushrn(1);
        for (var y = 0, N = 1; !(l.words[0] & N) && y < 26; ++y, N <<= 1) ;
        if (y > 0) for (l.iushrn(y); y-- > 0; ) _.isOdd() && _.iadd(D), _.iushrn(1);
        d.cmp(l) >= 0 ? (d.isub(l), b.isub(_)) : (l.isub(d), _.isub(b));
      }
      var Q;
      return d.cmpn(1) === 0 ? Q = b : Q = _, Q.cmpn(0) < 0 && Q.iadd(c), Q;
    }, a.prototype.gcd = function(c) {
      if (this.isZero()) return c.abs();
      if (c.isZero()) return this.abs();
      var d = this.clone(), l = c.clone();
      d.negative = 0, l.negative = 0;
      for (var b = 0; d.isEven() && l.isEven(); b++) d.iushrn(1), l.iushrn(1);
      do {
        for (; d.isEven(); ) d.iushrn(1);
        for (; l.isEven(); ) l.iushrn(1);
        var _ = d.cmp(l);
        if (_ < 0) {
          var D = d;
          d = l, l = D;
        } else if (_ === 0 || l.cmpn(1) === 0) break;
        d.isub(l);
      } while (!0);
      return l.iushln(b);
    }, a.prototype.invm = function(c) {
      return this.egcd(c).a.umod(c);
    }, a.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, a.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, a.prototype.andln = function(c) {
      return this.words[0] & c;
    }, a.prototype.bincn = function(c) {
      i(typeof c == "number");
      var d = c % 26, l = (c - d) / 26, b = 1 << d;
      if (this.length <= l) return this._expand(l + 1), this.words[l] |= b, this;
      for (var _ = b, D = l; _ !== 0 && D < this.length; D++) {
        var x = this.words[D] | 0;
        x += _, _ = x >>> 26, x &= 67108863, this.words[D] = x;
      }
      return _ !== 0 && (this.words[D] = _, this.length++), this;
    }, a.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, a.prototype.cmpn = function(c) {
      var d = c < 0;
      if (this.negative !== 0 && !d) return -1;
      if (this.negative === 0 && d) return 1;
      this._strip();
      var l;
      if (this.length > 1) l = 1;
      else {
        d && (c = -c), i(c <= 67108863, "Number is too big");
        var b = this.words[0] | 0;
        l = b === c ? 0 : b < c ? -1 : 1;
      }
      return this.negative !== 0 ? -l | 0 : l;
    }, a.prototype.cmp = function(c) {
      if (this.negative !== 0 && c.negative === 0) return -1;
      if (this.negative === 0 && c.negative !== 0) return 1;
      var d = this.ucmp(c);
      return this.negative !== 0 ? -d | 0 : d;
    }, a.prototype.ucmp = function(c) {
      if (this.length > c.length) return 1;
      if (this.length < c.length) return -1;
      for (var d = 0, l = this.length - 1; l >= 0; l--) {
        var b = this.words[l] | 0, _ = c.words[l] | 0;
        if (b !== _) {
          b < _ ? d = -1 : b > _ && (d = 1);
          break;
        }
      }
      return d;
    }, a.prototype.gtn = function(c) {
      return this.cmpn(c) === 1;
    }, a.prototype.gt = function(c) {
      return this.cmp(c) === 1;
    }, a.prototype.gten = function(c) {
      return this.cmpn(c) >= 0;
    }, a.prototype.gte = function(c) {
      return this.cmp(c) >= 0;
    }, a.prototype.ltn = function(c) {
      return this.cmpn(c) === -1;
    }, a.prototype.lt = function(c) {
      return this.cmp(c) === -1;
    }, a.prototype.lten = function(c) {
      return this.cmpn(c) <= 0;
    }, a.prototype.lte = function(c) {
      return this.cmp(c) <= 0;
    }, a.prototype.eqn = function(c) {
      return this.cmpn(c) === 0;
    }, a.prototype.eq = function(c) {
      return this.cmp(c) === 0;
    }, a.red = function(c) {
      return new j(c);
    }, a.prototype.toRed = function(c) {
      return i(!this.red, "Already a number in reduction context"), i(this.negative === 0, "red works only with positives"), c.convertTo(this)._forceRed(c);
    }, a.prototype.fromRed = function() {
      return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, a.prototype._forceRed = function(c) {
      return this.red = c, this;
    }, a.prototype.forceRed = function(c) {
      return i(!this.red, "Already a number in reduction context"), this._forceRed(c);
    }, a.prototype.redAdd = function(c) {
      return i(this.red, "redAdd works only with red numbers"), this.red.add(this, c);
    }, a.prototype.redIAdd = function(c) {
      return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, c);
    }, a.prototype.redSub = function(c) {
      return i(this.red, "redSub works only with red numbers"), this.red.sub(this, c);
    }, a.prototype.redISub = function(c) {
      return i(this.red, "redISub works only with red numbers"), this.red.isub(this, c);
    }, a.prototype.redShl = function(c) {
      return i(this.red, "redShl works only with red numbers"), this.red.shl(this, c);
    }, a.prototype.redMul = function(c) {
      return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, c), this.red.mul(this, c);
    }, a.prototype.redIMul = function(c) {
      return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, c), this.red.imul(this, c);
    }, a.prototype.redSqr = function() {
      return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, a.prototype.redISqr = function() {
      return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, a.prototype.redSqrt = function() {
      return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, a.prototype.redInvm = function() {
      return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, a.prototype.redNeg = function() {
      return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, a.prototype.redPow = function(c) {
      return i(this.red && !c.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, c);
    };
    var z = { k256: null, p224: null, p192: null, p25519: null };
    function q(c, d) {
      this.name = c, this.p = new a(d, 16), this.n = this.p.bitLength(), this.k = new a(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    q.prototype._tmp = function() {
      var c = new a(null);
      return c.words = new Array(Math.ceil(this.n / 13)), c;
    }, q.prototype.ireduce = function(c) {
      var d = c, l;
      do
        this.split(d, this.tmp), d = this.imulK(d), d = d.iadd(this.tmp), l = d.bitLength();
      while (l > this.n);
      var b = l < this.n ? -1 : d.ucmp(this.p);
      return b === 0 ? (d.words[0] = 0, d.length = 1) : b > 0 ? d.isub(this.p) : d.strip !== void 0 ? d.strip() : d._strip(), d;
    }, q.prototype.split = function(c, d) {
      c.iushrn(this.n, 0, d);
    }, q.prototype.imulK = function(c) {
      return c.imul(this.k);
    };
    function E() {
      q.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }
    s(E, q), E.prototype.split = function(c, d) {
      for (var l = 4194303, b = Math.min(c.length, 9), _ = 0; _ < b; _++) d.words[_] = c.words[_];
      if (d.length = b, c.length <= 9) {
        c.words[0] = 0, c.length = 1;
        return;
      }
      var D = c.words[9];
      for (d.words[d.length++] = D & l, _ = 10; _ < c.length; _++) {
        var x = c.words[_] | 0;
        c.words[_ - 10] = (x & l) << 4 | D >>> 22, D = x;
      }
      D >>>= 22, c.words[_ - 10] = D, D === 0 && c.length > 10 ? c.length -= 10 : c.length -= 9;
    }, E.prototype.imulK = function(c) {
      c.words[c.length] = 0, c.words[c.length + 1] = 0, c.length += 2;
      for (var d = 0, l = 0; l < c.length; l++) {
        var b = c.words[l] | 0;
        d += b * 977, c.words[l] = d & 67108863, d = b * 64 + (d / 67108864 | 0);
      }
      return c.words[c.length - 1] === 0 && (c.length--, c.words[c.length - 1] === 0 && c.length--), c;
    };
    function U() {
      q.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }
    s(U, q);
    function ee() {
      q.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }
    s(ee, q);
    function ae() {
      q.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }
    s(ae, q), ae.prototype.imulK = function(c) {
      for (var d = 0, l = 0; l < c.length; l++) {
        var b = (c.words[l] | 0) * 19 + d, _ = b & 67108863;
        b >>>= 26, c.words[l] = _, d = b;
      }
      return d !== 0 && (c.words[c.length++] = d), c;
    }, a._prime = function(c) {
      if (z[c]) return z[c];
      var d;
      if (c === "k256") d = new E();
      else if (c === "p224") d = new U();
      else if (c === "p192") d = new ee();
      else if (c === "p25519") d = new ae();
      else throw new Error("Unknown prime " + c);
      return z[c] = d, d;
    };
    function j(c) {
      if (typeof c == "string") {
        var d = a._prime(c);
        this.m = d.p, this.prime = d;
      } else i(c.gtn(1), "modulus must be greater than 1"), this.m = c, this.prime = null;
    }
    j.prototype._verify1 = function(c) {
      i(c.negative === 0, "red works only with positives"), i(c.red, "red works only with red numbers");
    }, j.prototype._verify2 = function(c, d) {
      i((c.negative | d.negative) === 0, "red works only with positives"), i(c.red && c.red === d.red, "red works only with red numbers");
    }, j.prototype.imod = function(c) {
      return this.prime ? this.prime.ireduce(c)._forceRed(this) : (m(c, c.umod(this.m)._forceRed(this)), c);
    }, j.prototype.neg = function(c) {
      return c.isZero() ? c.clone() : this.m.sub(c)._forceRed(this);
    }, j.prototype.add = function(c, d) {
      this._verify2(c, d);
      var l = c.add(d);
      return l.cmp(this.m) >= 0 && l.isub(this.m), l._forceRed(this);
    }, j.prototype.iadd = function(c, d) {
      this._verify2(c, d);
      var l = c.iadd(d);
      return l.cmp(this.m) >= 0 && l.isub(this.m), l;
    }, j.prototype.sub = function(c, d) {
      this._verify2(c, d);
      var l = c.sub(d);
      return l.cmpn(0) < 0 && l.iadd(this.m), l._forceRed(this);
    }, j.prototype.isub = function(c, d) {
      this._verify2(c, d);
      var l = c.isub(d);
      return l.cmpn(0) < 0 && l.iadd(this.m), l;
    }, j.prototype.shl = function(c, d) {
      return this._verify1(c), this.imod(c.ushln(d));
    }, j.prototype.imul = function(c, d) {
      return this._verify2(c, d), this.imod(c.imul(d));
    }, j.prototype.mul = function(c, d) {
      return this._verify2(c, d), this.imod(c.mul(d));
    }, j.prototype.isqr = function(c) {
      return this.imul(c, c.clone());
    }, j.prototype.sqr = function(c) {
      return this.mul(c, c);
    }, j.prototype.sqrt = function(c) {
      if (c.isZero()) return c.clone();
      var d = this.m.andln(3);
      if (i(d % 2 === 1), d === 3) {
        var l = this.m.add(new a(1)).iushrn(2);
        return this.pow(c, l);
      }
      for (var b = this.m.subn(1), _ = 0; !b.isZero() && b.andln(1) === 0; ) _++, b.iushrn(1);
      i(!b.isZero());
      var D = new a(1).toRed(this), x = D.redNeg(), g = this.m.subn(1).iushrn(1), y = this.m.bitLength();
      for (y = new a(2 * y * y).toRed(this); this.pow(y, g).cmp(x) !== 0; ) y.redIAdd(x);
      for (var N = this.pow(y, b), Q = this.pow(c, b.addn(1).iushrn(1)), Z = this.pow(c, b), O = _; Z.cmp(D) !== 0; ) {
        for (var te = Z, k = 0; te.cmp(D) !== 0; k++) te = te.redSqr();
        i(k < O);
        var W = this.pow(N, new a(1).iushln(O - k - 1));
        Q = Q.redMul(W), N = W.redSqr(), Z = Z.redMul(N), O = k;
      }
      return Q;
    }, j.prototype.invm = function(c) {
      var d = c._invmp(this.m);
      return d.negative !== 0 ? (d.negative = 0, this.imod(d).redNeg()) : this.imod(d);
    }, j.prototype.pow = function(c, d) {
      if (d.isZero()) return new a(1).toRed(this);
      if (d.cmpn(1) === 0) return c.clone();
      var l = 4, b = new Array(1 << l);
      b[0] = new a(1).toRed(this), b[1] = c;
      for (var _ = 2; _ < b.length; _++) b[_] = this.mul(b[_ - 1], c);
      var D = b[0], x = 0, g = 0, y = d.bitLength() % 26;
      for (y === 0 && (y = 26), _ = d.length - 1; _ >= 0; _--) {
        for (var N = d.words[_], Q = y - 1; Q >= 0; Q--) {
          var Z = N >> Q & 1;
          if (D !== b[0] && (D = this.sqr(D)), Z === 0 && x === 0) {
            g = 0;
            continue;
          }
          x <<= 1, x |= Z, g++, !(g !== l && (_ !== 0 || Q !== 0)) && (D = this.mul(D, b[x]), g = 0, x = 0);
        }
        y = 26;
      }
      return D;
    }, j.prototype.convertTo = function(c) {
      var d = c.umod(this.m);
      return d === c ? d.clone() : d;
    }, j.prototype.convertFrom = function(c) {
      var d = c.clone();
      return d.red = null, d;
    }, a.mont = function(c) {
      return new w(c);
    };
    function w(c) {
      j.call(this, c), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new a(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    s(w, j), w.prototype.convertTo = function(c) {
      return this.imod(c.ushln(this.shift));
    }, w.prototype.convertFrom = function(c) {
      var d = this.imod(c.mul(this.rinv));
      return d.red = null, d;
    }, w.prototype.imul = function(c, d) {
      if (c.isZero() || d.isZero()) return c.words[0] = 0, c.length = 1, c;
      var l = c.imul(d), b = l.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), _ = l.isub(b).iushrn(this.shift), D = _;
      return _.cmp(this.m) >= 0 ? D = _.isub(this.m) : _.cmpn(0) < 0 && (D = _.iadd(this.m)), D._forceRed(this);
    }, w.prototype.mul = function(c, d) {
      if (c.isZero() || d.isZero()) return new a(0)._forceRed(this);
      var l = c.mul(d), b = l.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), _ = l.isub(b).iushrn(this.shift), D = _;
      return _.cmp(this.m) >= 0 ? D = _.isub(this.m) : _.cmpn(0) < 0 && (D = _.iadd(this.m)), D._forceRed(this);
    }, w.prototype.invm = function(c) {
      var d = this.imod(c._invmp(this.m).mul(this.r2));
      return d._forceRed(this);
    };
  })(r, pb);
})(mb);
var vt = mb.exports;
const yb = "bignumber/5.7.0";
var _u = vt.BN;
const zn = new xr(yb), Wh = {}, J7 = 9007199254740991;
function Y7(r) {
  return r != null && (Gt.isBigNumber(r) || typeof r == "number" && r % 1 === 0 || typeof r == "string" && !!r.match(/^-?[0-9]+$/) || di(r) || typeof r == "bigint" || Ea(r));
}
let J1 = !1;
class Gt {
  constructor(e, t) {
    e !== Wh && zn.throwError("cannot call constructor directly; use BigNumber.from", xr.errors.UNSUPPORTED_OPERATION, { operation: "new (BigNumber)" }), this._hex = t, this._isBigNumber = !0, Object.freeze(this);
  }
  fromTwos(e) {
    return Zr(Dt(this).fromTwos(e));
  }
  toTwos(e) {
    return Zr(Dt(this).toTwos(e));
  }
  abs() {
    return this._hex[0] === "-" ? Gt.from(this._hex.substring(1)) : this;
  }
  add(e) {
    return Zr(Dt(this).add(Dt(e)));
  }
  sub(e) {
    return Zr(Dt(this).sub(Dt(e)));
  }
  div(e) {
    return Gt.from(e).isZero() && Mi("division-by-zero", "div"), Zr(Dt(this).div(Dt(e)));
  }
  mul(e) {
    return Zr(Dt(this).mul(Dt(e)));
  }
  mod(e) {
    const t = Dt(e);
    return t.isNeg() && Mi("division-by-zero", "mod"), Zr(Dt(this).umod(t));
  }
  pow(e) {
    const t = Dt(e);
    return t.isNeg() && Mi("negative-power", "pow"), Zr(Dt(this).pow(t));
  }
  and(e) {
    const t = Dt(e);
    return (this.isNegative() || t.isNeg()) && Mi("unbound-bitwise-result", "and"), Zr(Dt(this).and(t));
  }
  or(e) {
    const t = Dt(e);
    return (this.isNegative() || t.isNeg()) && Mi("unbound-bitwise-result", "or"), Zr(Dt(this).or(t));
  }
  xor(e) {
    const t = Dt(e);
    return (this.isNegative() || t.isNeg()) && Mi("unbound-bitwise-result", "xor"), Zr(Dt(this).xor(t));
  }
  mask(e) {
    return (this.isNegative() || e < 0) && Mi("negative-width", "mask"), Zr(Dt(this).maskn(e));
  }
  shl(e) {
    return (this.isNegative() || e < 0) && Mi("negative-width", "shl"), Zr(Dt(this).shln(e));
  }
  shr(e) {
    return (this.isNegative() || e < 0) && Mi("negative-width", "shr"), Zr(Dt(this).shrn(e));
  }
  eq(e) {
    return Dt(this).eq(Dt(e));
  }
  lt(e) {
    return Dt(this).lt(Dt(e));
  }
  lte(e) {
    return Dt(this).lte(Dt(e));
  }
  gt(e) {
    return Dt(this).gt(Dt(e));
  }
  gte(e) {
    return Dt(this).gte(Dt(e));
  }
  isNegative() {
    return this._hex[0] === "-";
  }
  isZero() {
    return Dt(this).isZero();
  }
  toNumber() {
    try {
      return Dt(this).toNumber();
    } catch {
      Mi("overflow", "toNumber", this.toString());
    }
    return null;
  }
  toBigInt() {
    try {
      return BigInt(this.toString());
    } catch {
    }
    return zn.throwError("this platform does not support BigInt", xr.errors.UNSUPPORTED_OPERATION, { value: this.toString() });
  }
  toString() {
    return arguments.length > 0 && (arguments[0] === 10 ? J1 || (J1 = !0, zn.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? zn.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", xr.errors.UNEXPECTED_ARGUMENT, {}) : zn.throwError("BigNumber.toString does not accept parameters", xr.errors.UNEXPECTED_ARGUMENT, {})), Dt(this).toString(10);
  }
  toHexString() {
    return this._hex;
  }
  toJSON(e) {
    return { type: "BigNumber", hex: this.toHexString() };
  }
  static from(e) {
    if (e instanceof Gt) return e;
    if (typeof e == "string") return e.match(/^-?0x[0-9a-f]+$/i) ? new Gt(Wh, xo(e)) : e.match(/^-?[0-9]+$/) ? new Gt(Wh, xo(new _u(e))) : zn.throwArgumentError("invalid BigNumber string", "value", e);
    if (typeof e == "number") return e % 1 && Mi("underflow", "BigNumber.from", e), (e >= J7 || e <= -9007199254740991) && Mi("overflow", "BigNumber.from", e), Gt.from(String(e));
    const t = e;
    if (typeof t == "bigint") return Gt.from(t.toString());
    if (Ea(t)) return Gt.from(ri(t));
    if (t) if (t.toHexString) {
      const i = t.toHexString();
      if (typeof i == "string") return Gt.from(i);
    } else {
      let i = t._hex;
      if (i == null && t.type === "BigNumber" && (i = t.hex), typeof i == "string" && (di(i) || i[0] === "-" && di(i.substring(1)))) return Gt.from(i);
    }
    return zn.throwArgumentError("invalid BigNumber value", "value", e);
  }
  static isBigNumber(e) {
    return !!(e && e._isBigNumber);
  }
}
function xo(r) {
  if (typeof r != "string") return xo(r.toString(16));
  if (r[0] === "-") return r = r.substring(1), r[0] === "-" && zn.throwArgumentError("invalid hex", "value", r), r = xo(r), r === "0x00" ? r : "-" + r;
  if (r.substring(0, 2) !== "0x" && (r = "0x" + r), r === "0x") return "0x00";
  for (r.length % 2 && (r = "0x0" + r.substring(2)); r.length > 4 && r.substring(0, 4) === "0x00"; ) r = "0x" + r.substring(4);
  return r;
}
function Zr(r) {
  return Gt.from(xo(r));
}
function Dt(r) {
  const e = Gt.from(r).toHexString();
  return e[0] === "-" ? new _u("-" + e.substring(3), 16) : new _u(e.substring(2), 16);
}
function Mi(r, e, t) {
  const i = { fault: r, operation: e };
  return t != null && (i.value = t), zn.throwError(r, xr.errors.NUMERIC_FAULT, i);
}
function Q7(r) {
  return new _u(r, 36).toString(16);
}
const jr = new xr(yb), mo = {}, wb = Gt.from(0), _b = Gt.from(-1);
function Ab(r, e, t, i) {
  const s = { fault: e, operation: t };
  return i !== void 0 && (s.value = i), jr.throwError(r, xr.errors.NUMERIC_FAULT, s);
}
let yo = "0";
for (; yo.length < 256; ) yo += yo;
function Zl(r) {
  if (typeof r != "number") try {
    r = Gt.from(r).toNumber();
  } catch {
  }
  return typeof r == "number" && r >= 0 && r <= 256 && !(r % 1) ? "1" + yo.substring(0, r) : jr.throwArgumentError("invalid decimal size", "decimals", r);
}
function Jh(r, e) {
  e == null && (e = 0);
  const t = Zl(e);
  r = Gt.from(r);
  const i = r.lt(wb);
  i && (r = r.mul(_b));
  let s = r.mod(t).toString();
  for (; s.length < t.length - 1; ) s = "0" + s;
  s = s.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  const a = r.div(t).toString();
  return t.length === 1 ? r = a : r = a + "." + s, i && (r = "-" + r), r;
}
function Fn(r, e) {
  e == null && (e = 0);
  const t = Zl(e);
  (typeof r != "string" || !r.match(/^-?[0-9.]+$/)) && jr.throwArgumentError("invalid decimal value", "value", r);
  const i = r.substring(0, 1) === "-";
  i && (r = r.substring(1)), r === "." && jr.throwArgumentError("missing value", "value", r);
  const s = r.split(".");
  s.length > 2 && jr.throwArgumentError("too many decimal points", "value", r);
  let a = s[0], f = s[1];
  for (a || (a = "0"), f || (f = "0"); f[f.length - 1] === "0"; ) f = f.substring(0, f.length - 1);
  for (f.length > t.length - 1 && Ab("fractional component exceeds decimals", "underflow", "parseFixed"), f === "" && (f = "0"); f.length < t.length - 1; ) f += "0";
  const h = Gt.from(a), p = Gt.from(f);
  let u = h.mul(t).add(p);
  return i && (u = u.mul(_b)), u;
}
let Yh = class Dl {
  constructor(e, t, i, s) {
    e !== mo && jr.throwError("cannot use FixedFormat constructor; use FixedFormat.from", xr.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.signed = t, this.width = i, this.decimals = s, this.name = (t ? "" : "u") + "fixed" + String(i) + "x" + String(s), this._multiplier = Zl(s), Object.freeze(this);
  }
  static from(e) {
    if (e instanceof Dl) return e;
    typeof e == "number" && (e = `fixed128x${e}`);
    let t = !0, i = 128, s = 18;
    if (typeof e == "string") {
      if (e !== "fixed") if (e === "ufixed") t = !1;
      else {
        const a = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
        a || jr.throwArgumentError("invalid fixed format", "format", e), t = a[1] !== "u", i = parseInt(a[2]), s = parseInt(a[3]);
      }
    } else if (e) {
      const a = (f, h, p) => e[f] == null ? p : (typeof e[f] !== h && jr.throwArgumentError("invalid fixed format (" + f + " not " + h + ")", "format." + f, e[f]), e[f]);
      t = a("signed", "boolean", t), i = a("width", "number", i), s = a("decimals", "number", s);
    }
    return i % 8 && jr.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", i), s > 80 && jr.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", s), new Dl(mo, t, i, s);
  }
}, Eb = class Ur {
  constructor(e, t, i, s) {
    e !== mo && jr.throwError("cannot use FixedNumber constructor; use FixedNumber.from", xr.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.format = s, this._hex = t, this._value = i, this._isFixedNumber = !0, Object.freeze(this);
  }
  _checkFormat(e) {
    this.format.name !== e.format.name && jr.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", e);
  }
  addUnsafe(e) {
    this._checkFormat(e);
    const t = Fn(this._value, this.format.decimals), i = Fn(e._value, e.format.decimals);
    return Ur.fromValue(t.add(i), this.format.decimals, this.format);
  }
  subUnsafe(e) {
    this._checkFormat(e);
    const t = Fn(this._value, this.format.decimals), i = Fn(e._value, e.format.decimals);
    return Ur.fromValue(t.sub(i), this.format.decimals, this.format);
  }
  mulUnsafe(e) {
    this._checkFormat(e);
    const t = Fn(this._value, this.format.decimals), i = Fn(e._value, e.format.decimals);
    return Ur.fromValue(t.mul(i).div(this.format._multiplier), this.format.decimals, this.format);
  }
  divUnsafe(e) {
    this._checkFormat(e);
    const t = Fn(this._value, this.format.decimals), i = Fn(e._value, e.format.decimals);
    return Ur.fromValue(t.mul(this.format._multiplier).div(i), this.format.decimals, this.format);
  }
  floor() {
    const e = this.toString().split(".");
    e.length === 1 && e.push("0");
    let t = Ur.from(e[0], this.format);
    const i = !e[1].match(/^(0*)$/);
    return this.isNegative() && i && (t = t.subUnsafe(Y1.toFormat(t.format))), t;
  }
  ceiling() {
    const e = this.toString().split(".");
    e.length === 1 && e.push("0");
    let t = Ur.from(e[0], this.format);
    const i = !e[1].match(/^(0*)$/);
    return !this.isNegative() && i && (t = t.addUnsafe(Y1.toFormat(t.format))), t;
  }
  round(e) {
    e == null && (e = 0);
    const t = this.toString().split(".");
    if (t.length === 1 && t.push("0"), (e < 0 || e > 80 || e % 1) && jr.throwArgumentError("invalid decimal count", "decimals", e), t[1].length <= e) return this;
    const i = Ur.from("1" + yo.substring(0, e), this.format), s = X7.toFormat(this.format);
    return this.mulUnsafe(i).addUnsafe(s).floor().divUnsafe(i);
  }
  isZero() {
    return this._value === "0.0" || this._value === "0";
  }
  isNegative() {
    return this._value[0] === "-";
  }
  toString() {
    return this._value;
  }
  toHexString(e) {
    if (e == null) return this._hex;
    e % 8 && jr.throwArgumentError("invalid byte width", "width", e);
    const t = Gt.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();
    return bn(t, e / 8);
  }
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  toFormat(e) {
    return Ur.fromString(this._value, e);
  }
  static fromValue(e, t, i) {
    return i == null && t != null && !Y7(t) && (i = t, t = null), t == null && (t = 0), i == null && (i = "fixed"), Ur.fromString(Jh(e, t), Yh.from(i));
  }
  static fromString(e, t) {
    t == null && (t = "fixed");
    const i = Yh.from(t), s = Fn(e, i.decimals);
    !i.signed && s.lt(wb) && Ab("unsigned value cannot be negative", "overflow", "value", e);
    let a = null;
    i.signed ? a = s.toTwos(i.width).toHexString() : (a = s.toHexString(), a = bn(a, i.width / 8));
    const f = Jh(s, i.decimals);
    return new Ur(mo, a, f, i);
  }
  static fromBytes(e, t) {
    t == null && (t = "fixed");
    const i = Yh.from(t);
    if (rr(e).length > i.width / 8) throw new Error("overflow");
    let s = Gt.from(e);
    i.signed && (s = s.fromTwos(i.width));
    const a = s.toTwos((i.signed ? 0 : 1) + i.width).toHexString(), f = Jh(s, i.decimals);
    return new Ur(mo, a, f, i);
  }
  static from(e, t) {
    if (typeof e == "string") return Ur.fromString(e, t);
    if (Ea(e)) return Ur.fromBytes(e, t);
    try {
      return Ur.fromValue(e, 0, t);
    } catch (i) {
      if (i.code !== xr.errors.INVALID_ARGUMENT) throw i;
    }
    return jr.throwArgumentError("invalid FixedNumber value", "value", e);
  }
  static isFixedNumber(e) {
    return !!(e && e._isFixedNumber);
  }
};
const Y1 = Eb.from(1), X7 = Eb.from("0.5"), Z7 = "strings/5.7.0", e9 = new xr(Z7);
var Au;
(function(r) {
  r.current = "", r.NFC = "NFC", r.NFD = "NFD", r.NFKC = "NFKC", r.NFKD = "NFKD";
})(Au || (Au = {}));
var Q1;
(function(r) {
  r.UNEXPECTED_CONTINUE = "unexpected continuation byte", r.BAD_PREFIX = "bad codepoint prefix", r.OVERRUN = "string overrun", r.MISSING_CONTINUE = "missing continuation byte", r.OUT_OF_RANGE = "out of UTF-8 range", r.UTF16_SURROGATE = "UTF-16 surrogate", r.OVERLONG = "overlong representation";
})(Q1 || (Q1 = {}));
function Qh(r, e = Au.current) {
  e != Au.current && (e9.checkNormalize(), r = r.normalize(e));
  let t = [];
  for (let i = 0; i < r.length; i++) {
    const s = r.charCodeAt(i);
    if (s < 128) t.push(s);
    else if (s < 2048) t.push(s >> 6 | 192), t.push(s & 63 | 128);
    else if ((s & 64512) == 55296) {
      i++;
      const a = r.charCodeAt(i);
      if (i >= r.length || (a & 64512) !== 56320) throw new Error("invalid utf-8 string");
      const f = 65536 + ((s & 1023) << 10) + (a & 1023);
      t.push(f >> 18 | 240), t.push(f >> 12 & 63 | 128), t.push(f >> 6 & 63 | 128), t.push(f & 63 | 128);
    } else t.push(s >> 12 | 224), t.push(s >> 6 & 63 | 128), t.push(s & 63 | 128);
  }
  return rr(t);
}
function t9(r) {
  if (r.length % 4 !== 0) throw new Error("bad data");
  let e = [];
  for (let t = 0; t < r.length; t += 4) e.push(parseInt(r.substring(t, t + 4), 16));
  return e;
}
function Xh(r, e) {
  e || (e = function(s) {
    return [parseInt(s, 16)];
  });
  let t = 0, i = {};
  return r.split(",").forEach((s) => {
    let a = s.split(":");
    t += parseInt(a[0], 16), i[t] = e(a[1]);
  }), i;
}
function X1(r) {
  let e = 0;
  return r.split(",").map((t) => {
    let i = t.split("-");
    i.length === 1 ? i[1] = "0" : i[1] === "" && (i[1] = "1");
    let s = e + parseInt(i[0], 16);
    return e = parseInt(i[1], 16), { l: s, h: e };
  });
}
X1("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((r) => parseInt(r, 16)), Xh("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), Xh("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), Xh("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", t9), X1("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
function r9(r) {
  r = atob(r);
  const e = [];
  for (let t = 0; t < r.length; t++) e.push(r.charCodeAt(t));
  return rr(e);
}
function xb(r, e) {
  e == null && (e = 1);
  const t = [], i = t.forEach, s = function(a, f) {
    i.call(a, function(h) {
      f > 0 && Array.isArray(h) ? s(h, f - 1) : t.push(h);
    });
  };
  return s(r, e), t;
}
function i9(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const i = r[t];
    e[i[0]] = i[1];
  }
  return e;
}
function n9(r) {
  let e = 0;
  function t() {
    return r[e++] << 8 | r[e++];
  }
  let i = t(), s = 1, a = [0, 1];
  for (let z = 1; z < i; z++) a.push(s += t());
  let f = t(), h = e;
  e += f;
  let p = 0, u = 0;
  function m() {
    return p == 0 && (u = u << 8 | r[e++], p = 8), u >> --p & 1;
  }
  const A = 31, M = Math.pow(2, A), I = M >>> 1, C = I >> 1, R = M - 1;
  let L = 0;
  for (let z = 0; z < A; z++) L = L << 1 | m();
  let K = [], F = 0, V = M;
  for (; ; ) {
    let z = Math.floor(((L - F + 1) * s - 1) / V), q = 0, E = i;
    for (; E - q > 1; ) {
      let ae = q + E >>> 1;
      z < a[ae] ? E = ae : q = ae;
    }
    if (q == 0) break;
    K.push(q);
    let U = F + Math.floor(V * a[q] / s), ee = F + Math.floor(V * a[q + 1] / s) - 1;
    for (; !((U ^ ee) & I); ) L = L << 1 & R | m(), U = U << 1 & R, ee = ee << 1 & R | 1;
    for (; U & ~ee & C; ) L = L & I | L << 1 & R >>> 1 | m(), U = U << 1 ^ I, ee = (ee ^ I) << 1 | I | 1;
    F = U, V = 1 + ee - U;
  }
  let B = i - 4;
  return K.map((z) => {
    switch (z - B) {
      case 3:
        return B + 65792 + (r[h++] << 16 | r[h++] << 8 | r[h++]);
      case 2:
        return B + 256 + (r[h++] << 8 | r[h++]);
      case 1:
        return B + r[h++];
      default:
        return z - 1;
    }
  });
}
function s9(r) {
  let e = 0;
  return () => r[e++];
}
function a9(r) {
  return s9(n9(r));
}
function o9(r) {
  return r & 1 ? ~r >> 1 : r >> 1;
}
function c9(r, e) {
  let t = Array(r);
  for (let i = 0; i < r; i++) t[i] = 1 + e();
  return t;
}
function Z1(r, e) {
  let t = Array(r);
  for (let i = 0, s = -1; i < r; i++) t[i] = s += 1 + e();
  return t;
}
function u9(r, e) {
  let t = Array(r);
  for (let i = 0, s = 0; i < r; i++) t[i] = s += o9(e());
  return t;
}
function Eu(r, e) {
  let t = Z1(r(), r), i = r(), s = Z1(i, r), a = c9(i, r);
  for (let f = 0; f < i; f++) for (let h = 0; h < a[f]; h++) t.push(s[f] + h);
  return e ? t.map((f) => e[f]) : t;
}
function f9(r) {
  let e = [];
  for (; ; ) {
    let t = r();
    if (t == 0) break;
    e.push(l9(t, r));
  }
  for (; ; ) {
    let t = r() - 1;
    if (t < 0) break;
    e.push(d9(t, r));
  }
  return i9(xb(e));
}
function h9(r) {
  let e = [];
  for (; ; ) {
    let t = r();
    if (t == 0) break;
    e.push(t);
  }
  return e;
}
function Sb(r, e, t) {
  let i = Array(r).fill(void 0).map(() => []);
  for (let s = 0; s < e; s++) u9(r, t).forEach((a, f) => i[f].push(a));
  return i;
}
function l9(r, e) {
  let t = 1 + e(), i = e(), s = h9(e), a = Sb(s.length, 1 + r, e);
  return xb(a.map((f, h) => {
    const p = f[0], u = f.slice(1);
    return Array(s[h]).fill(void 0).map((m, A) => {
      let M = A * i;
      return [p + A * t, u.map((I) => I + M)];
    });
  }));
}
function d9(r, e) {
  let t = 1 + e();
  return Sb(t, 1 + r, e).map((i) => [i[0], i.slice(1)]);
}
function p9(r) {
  let e = Eu(r).sort((i, s) => i - s);
  return t();
  function t() {
    let i = [];
    for (; ; ) {
      let u = Eu(r, e);
      if (u.length == 0) break;
      i.push({ set: new Set(u), node: t() });
    }
    i.sort((u, m) => m.set.size - u.set.size);
    let s = r(), a = s % 3;
    s = s / 3 | 0;
    let f = !!(s & 1);
    s >>= 1;
    let h = s == 1, p = s == 2;
    return { branches: i, valid: a, fe0f: f, save: h, check: p };
  }
}
function g9() {
  return a9(r9("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="));
}
const Wc = g9();
new Set(Eu(Wc)), new Set(Eu(Wc)), f9(Wc), p9(Wc);
const v9 = new Uint8Array(32);
v9.fill(0);
const b9 = `Ethereum Signed Message:
`;
function Mb(r) {
  return typeof r == "string" && (r = Qh(r)), Xl(k7([Qh(b9), Qh(String(r.length)), r]));
}
const m9 = "address/5.7.0", lo = new xr(m9);
function eg(r) {
  di(r, 20) || lo.throwArgumentError("invalid address", "address", r), r = r.toLowerCase();
  const e = r.substring(2).split(""), t = new Uint8Array(40);
  for (let s = 0; s < 40; s++) t[s] = e[s].charCodeAt(0);
  const i = rr(Xl(t));
  for (let s = 0; s < 40; s += 2) i[s >> 1] >> 4 >= 8 && (e[s] = e[s].toUpperCase()), (i[s >> 1] & 15) >= 8 && (e[s + 1] = e[s + 1].toUpperCase());
  return "0x" + e.join("");
}
const y9 = 9007199254740991;
function w9(r) {
  return Math.log10 ? Math.log10(r) : Math.log(r) / Math.LN10;
}
const ed = {};
for (let r = 0; r < 10; r++) ed[String(r)] = String(r);
for (let r = 0; r < 26; r++) ed[String.fromCharCode(65 + r)] = String(10 + r);
const tg = Math.floor(w9(y9));
function _9(r) {
  r = r.toUpperCase(), r = r.substring(4) + r.substring(0, 2) + "00";
  let e = r.split("").map((i) => ed[i]).join("");
  for (; e.length >= tg; ) {
    let i = e.substring(0, tg);
    e = parseInt(i, 10) % 97 + e.substring(i.length);
  }
  let t = String(98 - parseInt(e, 10) % 97);
  for (; t.length < 2; ) t = "0" + t;
  return t;
}
function A9(r) {
  let e = null;
  if (typeof r != "string" && lo.throwArgumentError("invalid address", "address", r), r.match(/^(0x)?[0-9a-fA-F]{40}$/)) r.substring(0, 2) !== "0x" && (r = "0x" + r), e = eg(r), r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== r && lo.throwArgumentError("bad address checksum", "address", r);
  else if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (r.substring(2, 4) !== _9(r) && lo.throwArgumentError("bad icap checksum", "address", r), e = Q7(r.substring(4)); e.length < 40; ) e = "0" + e;
    e = eg("0x" + e);
  } else lo.throwArgumentError("invalid address", "address", r);
  return e;
}
function ro(r, e, t) {
  Object.defineProperty(r, e, { enumerable: !0, value: t, writable: !1 });
}
const E9 = new Uint8Array(32);
E9.fill(0), Gt.from(-1);
const x9 = Gt.from(0), S9 = Gt.from(1);
Gt.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), bn(S9.toHexString(), 32), bn(x9.toHexString(), 32);
var hn = {}, Pt = {}, qo = Ib;
function Ib(r, e) {
  if (!r) throw new Error(e || "Assertion failed");
}
Ib.equal = function(r, e, t) {
  if (r != e) throw new Error(t || "Assertion failed: " + r + " != " + e);
};
var Pl = { exports: {} };
typeof Object.create == "function" ? Pl.exports = function(r, e) {
  e && (r.super_ = e, r.prototype = Object.create(e.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }));
} : Pl.exports = function(r, e) {
  if (e) {
    r.super_ = e;
    var t = function() {
    };
    t.prototype = e.prototype, r.prototype = new t(), r.prototype.constructor = r;
  }
};
var M9 = qo, I9 = Pl.exports;
Pt.inherits = I9;
function D9(r, e) {
  return (r.charCodeAt(e) & 64512) !== 55296 || e < 0 || e + 1 >= r.length ? !1 : (r.charCodeAt(e + 1) & 64512) === 56320;
}
function P9(r, e) {
  if (Array.isArray(r)) return r.slice();
  if (!r) return [];
  var t = [];
  if (typeof r == "string") if (e) {
    if (e === "hex") for (r = r.replace(/[^a-z0-9]+/ig, ""), r.length % 2 !== 0 && (r = "0" + r), s = 0; s < r.length; s += 2) t.push(parseInt(r[s] + r[s + 1], 16));
  } else for (var i = 0, s = 0; s < r.length; s++) {
    var a = r.charCodeAt(s);
    a < 128 ? t[i++] = a : a < 2048 ? (t[i++] = a >> 6 | 192, t[i++] = a & 63 | 128) : D9(r, s) ? (a = 65536 + ((a & 1023) << 10) + (r.charCodeAt(++s) & 1023), t[i++] = a >> 18 | 240, t[i++] = a >> 12 & 63 | 128, t[i++] = a >> 6 & 63 | 128, t[i++] = a & 63 | 128) : (t[i++] = a >> 12 | 224, t[i++] = a >> 6 & 63 | 128, t[i++] = a & 63 | 128);
  }
  else for (s = 0; s < r.length; s++) t[s] = r[s] | 0;
  return t;
}
Pt.toArray = P9;
function C9(r) {
  for (var e = "", t = 0; t < r.length; t++) e += Pb(r[t].toString(16));
  return e;
}
Pt.toHex = C9;
function Db(r) {
  var e = r >>> 24 | r >>> 8 & 65280 | r << 8 & 16711680 | (r & 255) << 24;
  return e >>> 0;
}
Pt.htonl = Db;
function O9(r, e) {
  for (var t = "", i = 0; i < r.length; i++) {
    var s = r[i];
    e === "little" && (s = Db(s)), t += Cb(s.toString(16));
  }
  return t;
}
Pt.toHex32 = O9;
function Pb(r) {
  return r.length === 1 ? "0" + r : r;
}
Pt.zero2 = Pb;
function Cb(r) {
  return r.length === 7 ? "0" + r : r.length === 6 ? "00" + r : r.length === 5 ? "000" + r : r.length === 4 ? "0000" + r : r.length === 3 ? "00000" + r : r.length === 2 ? "000000" + r : r.length === 1 ? "0000000" + r : r;
}
Pt.zero8 = Cb;
function R9(r, e, t, i) {
  var s = t - e;
  M9(s % 4 === 0);
  for (var a = new Array(s / 4), f = 0, h = e; f < a.length; f++, h += 4) {
    var p;
    i === "big" ? p = r[h] << 24 | r[h + 1] << 16 | r[h + 2] << 8 | r[h + 3] : p = r[h + 3] << 24 | r[h + 2] << 16 | r[h + 1] << 8 | r[h], a[f] = p >>> 0;
  }
  return a;
}
Pt.join32 = R9;
function N9(r, e) {
  for (var t = new Array(r.length * 4), i = 0, s = 0; i < r.length; i++, s += 4) {
    var a = r[i];
    e === "big" ? (t[s] = a >>> 24, t[s + 1] = a >>> 16 & 255, t[s + 2] = a >>> 8 & 255, t[s + 3] = a & 255) : (t[s + 3] = a >>> 24, t[s + 2] = a >>> 16 & 255, t[s + 1] = a >>> 8 & 255, t[s] = a & 255);
  }
  return t;
}
Pt.split32 = N9;
function T9(r, e) {
  return r >>> e | r << 32 - e;
}
Pt.rotr32 = T9;
function q9(r, e) {
  return r << e | r >>> 32 - e;
}
Pt.rotl32 = q9;
function F9(r, e) {
  return r + e >>> 0;
}
Pt.sum32 = F9;
function B9(r, e, t) {
  return r + e + t >>> 0;
}
Pt.sum32_3 = B9;
function L9(r, e, t, i) {
  return r + e + t + i >>> 0;
}
Pt.sum32_4 = L9;
function U9(r, e, t, i, s) {
  return r + e + t + i + s >>> 0;
}
Pt.sum32_5 = U9;
function z9(r, e, t, i) {
  var s = r[e], a = r[e + 1], f = i + a >>> 0, h = (f < i ? 1 : 0) + t + s;
  r[e] = h >>> 0, r[e + 1] = f;
}
Pt.sum64 = z9;
function j9(r, e, t, i) {
  var s = e + i >>> 0, a = (s < e ? 1 : 0) + r + t;
  return a >>> 0;
}
Pt.sum64_hi = j9;
function $9(r, e, t, i) {
  var s = e + i;
  return s >>> 0;
}
Pt.sum64_lo = $9;
function k9(r, e, t, i, s, a, f, h) {
  var p = 0, u = e;
  u = u + i >>> 0, p += u < e ? 1 : 0, u = u + a >>> 0, p += u < a ? 1 : 0, u = u + h >>> 0, p += u < h ? 1 : 0;
  var m = r + t + s + f + p;
  return m >>> 0;
}
Pt.sum64_4_hi = k9;
function H9(r, e, t, i, s, a, f, h) {
  var p = e + i + a + h;
  return p >>> 0;
}
Pt.sum64_4_lo = H9;
function K9(r, e, t, i, s, a, f, h, p, u) {
  var m = 0, A = e;
  A = A + i >>> 0, m += A < e ? 1 : 0, A = A + a >>> 0, m += A < a ? 1 : 0, A = A + h >>> 0, m += A < h ? 1 : 0, A = A + u >>> 0, m += A < u ? 1 : 0;
  var M = r + t + s + f + p + m;
  return M >>> 0;
}
Pt.sum64_5_hi = K9;
function V9(r, e, t, i, s, a, f, h, p, u) {
  var m = e + i + a + h + u;
  return m >>> 0;
}
Pt.sum64_5_lo = V9;
function G9(r, e, t) {
  var i = e << 32 - t | r >>> t;
  return i >>> 0;
}
Pt.rotr64_hi = G9;
function W9(r, e, t) {
  var i = r << 32 - t | e >>> t;
  return i >>> 0;
}
Pt.rotr64_lo = W9;
function J9(r, e, t) {
  return r >>> t;
}
Pt.shr64_hi = J9;
function Y9(r, e, t) {
  var i = r << 32 - t | e >>> t;
  return i >>> 0;
}
Pt.shr64_lo = Y9;
var xa = {}, rg = Pt, Q9 = qo;
function Jc() {
  this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
xa.BlockHash = Jc, Jc.prototype.update = function(r, e) {
  if (r = rg.toArray(r, e), this.pending ? this.pending = this.pending.concat(r) : this.pending = r, this.pendingTotal += r.length, this.pending.length >= this._delta8) {
    r = this.pending;
    var t = r.length % this._delta8;
    this.pending = r.slice(r.length - t, r.length), this.pending.length === 0 && (this.pending = null), r = rg.join32(r, 0, r.length - t, this.endian);
    for (var i = 0; i < r.length; i += this._delta32) this._update(r, i, i + this._delta32);
  }
  return this;
}, Jc.prototype.digest = function(r) {
  return this.update(this._pad()), Q9(this.pending === null), this._digest(r);
}, Jc.prototype._pad = function() {
  var r = this.pendingTotal, e = this._delta8, t = e - (r + this.padLength) % e, i = new Array(t + this.padLength);
  i[0] = 128;
  for (var s = 1; s < t; s++) i[s] = 0;
  if (r <<= 3, this.endian === "big") {
    for (var a = 8; a < this.padLength; a++) i[s++] = 0;
    i[s++] = 0, i[s++] = 0, i[s++] = 0, i[s++] = 0, i[s++] = r >>> 24 & 255, i[s++] = r >>> 16 & 255, i[s++] = r >>> 8 & 255, i[s++] = r & 255;
  } else for (i[s++] = r & 255, i[s++] = r >>> 8 & 255, i[s++] = r >>> 16 & 255, i[s++] = r >>> 24 & 255, i[s++] = 0, i[s++] = 0, i[s++] = 0, i[s++] = 0, a = 8; a < this.padLength; a++) i[s++] = 0;
  return i;
};
var la = {}, xn = {}, X9 = Pt, mn = X9.rotr32;
function Z9(r, e, t, i) {
  if (r === 0) return Ob(e, t, i);
  if (r === 1 || r === 3) return Nb(e, t, i);
  if (r === 2) return Rb(e, t, i);
}
xn.ft_1 = Z9;
function Ob(r, e, t) {
  return r & e ^ ~r & t;
}
xn.ch32 = Ob;
function Rb(r, e, t) {
  return r & e ^ r & t ^ e & t;
}
xn.maj32 = Rb;
function Nb(r, e, t) {
  return r ^ e ^ t;
}
xn.p32 = Nb;
function eA(r) {
  return mn(r, 2) ^ mn(r, 13) ^ mn(r, 22);
}
xn.s0_256 = eA;
function tA(r) {
  return mn(r, 6) ^ mn(r, 11) ^ mn(r, 25);
}
xn.s1_256 = tA;
function rA(r) {
  return mn(r, 7) ^ mn(r, 18) ^ r >>> 3;
}
xn.g0_256 = rA;
function iA(r) {
  return mn(r, 17) ^ mn(r, 19) ^ r >>> 10;
}
xn.g1_256 = iA;
var wa = Pt, nA = xa, sA = xn, Zh = wa.rotl32, io = wa.sum32, aA = wa.sum32_5, oA = sA.ft_1, Tb = nA.BlockHash, cA = [1518500249, 1859775393, 2400959708, 3395469782];
function gn() {
  if (!(this instanceof gn)) return new gn();
  Tb.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80);
}
wa.inherits(gn, Tb);
var uA = gn;
gn.blockSize = 512, gn.outSize = 160, gn.hmacStrength = 80, gn.padLength = 64, gn.prototype._update = function(r, e) {
  for (var t = this.W, i = 0; i < 16; i++) t[i] = r[e + i];
  for (; i < t.length; i++) t[i] = Zh(t[i - 3] ^ t[i - 8] ^ t[i - 14] ^ t[i - 16], 1);
  var s = this.h[0], a = this.h[1], f = this.h[2], h = this.h[3], p = this.h[4];
  for (i = 0; i < t.length; i++) {
    var u = ~~(i / 20), m = aA(Zh(s, 5), oA(u, a, f, h), p, t[i], cA[u]);
    p = h, h = f, f = Zh(a, 30), a = s, s = m;
  }
  this.h[0] = io(this.h[0], s), this.h[1] = io(this.h[1], a), this.h[2] = io(this.h[2], f), this.h[3] = io(this.h[3], h), this.h[4] = io(this.h[4], p);
}, gn.prototype._digest = function(r) {
  return r === "hex" ? wa.toHex32(this.h, "big") : wa.split32(this.h, "big");
};
var _a = Pt, fA = xa, Sa = xn, hA = qo, Ki = _a.sum32, lA = _a.sum32_4, dA = _a.sum32_5, pA = Sa.ch32, gA = Sa.maj32, vA = Sa.s0_256, bA = Sa.s1_256, mA = Sa.g0_256, yA = Sa.g1_256, qb = fA.BlockHash, wA = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
function vn() {
  if (!(this instanceof vn)) return new vn();
  qb.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = wA, this.W = new Array(64);
}
_a.inherits(vn, qb);
var Fb = vn;
vn.blockSize = 512, vn.outSize = 256, vn.hmacStrength = 192, vn.padLength = 64, vn.prototype._update = function(r, e) {
  for (var t = this.W, i = 0; i < 16; i++) t[i] = r[e + i];
  for (; i < t.length; i++) t[i] = lA(yA(t[i - 2]), t[i - 7], mA(t[i - 15]), t[i - 16]);
  var s = this.h[0], a = this.h[1], f = this.h[2], h = this.h[3], p = this.h[4], u = this.h[5], m = this.h[6], A = this.h[7];
  for (hA(this.k.length === t.length), i = 0; i < t.length; i++) {
    var M = dA(A, bA(p), pA(p, u, m), this.k[i], t[i]), I = Ki(vA(s), gA(s, a, f));
    A = m, m = u, u = p, p = Ki(h, M), h = f, f = a, a = s, s = Ki(M, I);
  }
  this.h[0] = Ki(this.h[0], s), this.h[1] = Ki(this.h[1], a), this.h[2] = Ki(this.h[2], f), this.h[3] = Ki(this.h[3], h), this.h[4] = Ki(this.h[4], p), this.h[5] = Ki(this.h[5], u), this.h[6] = Ki(this.h[6], m), this.h[7] = Ki(this.h[7], A);
}, vn.prototype._digest = function(r) {
  return r === "hex" ? _a.toHex32(this.h, "big") : _a.split32(this.h, "big");
};
var Cl = Pt, Bb = Fb;
function $n() {
  if (!(this instanceof $n)) return new $n();
  Bb.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
}
Cl.inherits($n, Bb);
var _A = $n;
$n.blockSize = 512, $n.outSize = 224, $n.hmacStrength = 192, $n.padLength = 64, $n.prototype._digest = function(r) {
  return r === "hex" ? Cl.toHex32(this.h.slice(0, 7), "big") : Cl.split32(this.h.slice(0, 7), "big");
};
var ni = Pt, AA = xa, EA = qo, yn = ni.rotr64_hi, wn = ni.rotr64_lo, Lb = ni.shr64_hi, Ub = ni.shr64_lo, is = ni.sum64, el = ni.sum64_hi, tl = ni.sum64_lo, xA = ni.sum64_4_hi, SA = ni.sum64_4_lo, MA = ni.sum64_5_hi, IA = ni.sum64_5_lo, zb = AA.BlockHash, DA = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
function Yi() {
  if (!(this instanceof Yi)) return new Yi();
  zb.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = DA, this.W = new Array(160);
}
ni.inherits(Yi, zb);
var jb = Yi;
Yi.blockSize = 1024, Yi.outSize = 512, Yi.hmacStrength = 192, Yi.padLength = 128, Yi.prototype._prepareBlock = function(r, e) {
  for (var t = this.W, i = 0; i < 32; i++) t[i] = r[e + i];
  for (; i < t.length; i += 2) {
    var s = UA(t[i - 4], t[i - 3]), a = zA(t[i - 4], t[i - 3]), f = t[i - 14], h = t[i - 13], p = BA(t[i - 30], t[i - 29]), u = LA(t[i - 30], t[i - 29]), m = t[i - 32], A = t[i - 31];
    t[i] = xA(s, a, f, h, p, u, m, A), t[i + 1] = SA(s, a, f, h, p, u, m, A);
  }
}, Yi.prototype._update = function(r, e) {
  this._prepareBlock(r, e);
  var t = this.W, i = this.h[0], s = this.h[1], a = this.h[2], f = this.h[3], h = this.h[4], p = this.h[5], u = this.h[6], m = this.h[7], A = this.h[8], M = this.h[9], I = this.h[10], C = this.h[11], R = this.h[12], L = this.h[13], K = this.h[14], F = this.h[15];
  EA(this.k.length === t.length);
  for (var V = 0; V < t.length; V += 2) {
    var B = K, z = F, q = qA(A, M), E = FA(A, M), U = PA(A, M, I, C, R), ee = CA(A, M, I, C, R, L), ae = this.k[V], j = this.k[V + 1], w = t[V], c = t[V + 1], d = MA(B, z, q, E, U, ee, ae, j, w, c), l = IA(B, z, q, E, U, ee, ae, j, w, c);
    B = NA(i, s), z = TA(i, s), q = OA(i, s, a, f, h), E = RA(i, s, a, f, h, p);
    var b = el(B, z, q, E), _ = tl(B, z, q, E);
    K = R, F = L, R = I, L = C, I = A, C = M, A = el(u, m, d, l), M = tl(m, m, d, l), u = h, m = p, h = a, p = f, a = i, f = s, i = el(d, l, b, _), s = tl(d, l, b, _);
  }
  is(this.h, 0, i, s), is(this.h, 2, a, f), is(this.h, 4, h, p), is(this.h, 6, u, m), is(this.h, 8, A, M), is(this.h, 10, I, C), is(this.h, 12, R, L), is(this.h, 14, K, F);
}, Yi.prototype._digest = function(r) {
  return r === "hex" ? ni.toHex32(this.h, "big") : ni.split32(this.h, "big");
};
function PA(r, e, t, i, s) {
  var a = r & t ^ ~r & s;
  return a < 0 && (a += 4294967296), a;
}
function CA(r, e, t, i, s, a) {
  var f = e & i ^ ~e & a;
  return f < 0 && (f += 4294967296), f;
}
function OA(r, e, t, i, s) {
  var a = r & t ^ r & s ^ t & s;
  return a < 0 && (a += 4294967296), a;
}
function RA(r, e, t, i, s, a) {
  var f = e & i ^ e & a ^ i & a;
  return f < 0 && (f += 4294967296), f;
}
function NA(r, e) {
  var t = yn(r, e, 28), i = yn(e, r, 2), s = yn(e, r, 7), a = t ^ i ^ s;
  return a < 0 && (a += 4294967296), a;
}
function TA(r, e) {
  var t = wn(r, e, 28), i = wn(e, r, 2), s = wn(e, r, 7), a = t ^ i ^ s;
  return a < 0 && (a += 4294967296), a;
}
function qA(r, e) {
  var t = yn(r, e, 14), i = yn(r, e, 18), s = yn(e, r, 9), a = t ^ i ^ s;
  return a < 0 && (a += 4294967296), a;
}
function FA(r, e) {
  var t = wn(r, e, 14), i = wn(r, e, 18), s = wn(e, r, 9), a = t ^ i ^ s;
  return a < 0 && (a += 4294967296), a;
}
function BA(r, e) {
  var t = yn(r, e, 1), i = yn(r, e, 8), s = Lb(r, e, 7), a = t ^ i ^ s;
  return a < 0 && (a += 4294967296), a;
}
function LA(r, e) {
  var t = wn(r, e, 1), i = wn(r, e, 8), s = Ub(r, e, 7), a = t ^ i ^ s;
  return a < 0 && (a += 4294967296), a;
}
function UA(r, e) {
  var t = yn(r, e, 19), i = yn(e, r, 29), s = Lb(r, e, 6), a = t ^ i ^ s;
  return a < 0 && (a += 4294967296), a;
}
function zA(r, e) {
  var t = wn(r, e, 19), i = wn(e, r, 29), s = Ub(r, e, 6), a = t ^ i ^ s;
  return a < 0 && (a += 4294967296), a;
}
var Ol = Pt, $b = jb;
function kn() {
  if (!(this instanceof kn)) return new kn();
  $b.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428];
}
Ol.inherits(kn, $b);
var jA = kn;
kn.blockSize = 1024, kn.outSize = 384, kn.hmacStrength = 192, kn.padLength = 128, kn.prototype._digest = function(r) {
  return r === "hex" ? Ol.toHex32(this.h.slice(0, 12), "big") : Ol.split32(this.h.slice(0, 12), "big");
}, la.sha1 = uA, la.sha224 = _A, la.sha256 = Fb, la.sha384 = jA, la.sha512 = jb;
var kb = {}, qs = Pt, $A = xa, Yc = qs.rotl32, ig = qs.sum32, no = qs.sum32_3, ng = qs.sum32_4, Hb = $A.BlockHash;
function ln() {
  if (!(this instanceof ln)) return new ln();
  Hb.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
}
qs.inherits(ln, Hb), kb.ripemd160 = ln, ln.blockSize = 512, ln.outSize = 160, ln.hmacStrength = 192, ln.padLength = 64, ln.prototype._update = function(r, e) {
  for (var t = this.h[0], i = this.h[1], s = this.h[2], a = this.h[3], f = this.h[4], h = t, p = i, u = s, m = a, A = f, M = 0; M < 80; M++) {
    var I = ig(Yc(ng(t, sg(M, i, s, a), r[KA[M] + e], kA(M)), GA[M]), f);
    t = f, f = a, a = Yc(s, 10), s = i, i = I, I = ig(Yc(ng(h, sg(79 - M, p, u, m), r[VA[M] + e], HA(M)), WA[M]), A), h = A, A = m, m = Yc(u, 10), u = p, p = I;
  }
  I = no(this.h[1], s, m), this.h[1] = no(this.h[2], a, A), this.h[2] = no(this.h[3], f, h), this.h[3] = no(this.h[4], t, p), this.h[4] = no(this.h[0], i, u), this.h[0] = I;
}, ln.prototype._digest = function(r) {
  return r === "hex" ? qs.toHex32(this.h, "little") : qs.split32(this.h, "little");
};
function sg(r, e, t, i) {
  return r <= 15 ? e ^ t ^ i : r <= 31 ? e & t | ~e & i : r <= 47 ? (e | ~t) ^ i : r <= 63 ? e & i | t & ~i : e ^ (t | ~i);
}
function kA(r) {
  return r <= 15 ? 0 : r <= 31 ? 1518500249 : r <= 47 ? 1859775393 : r <= 63 ? 2400959708 : 2840853838;
}
function HA(r) {
  return r <= 15 ? 1352829926 : r <= 31 ? 1548603684 : r <= 47 ? 1836072691 : r <= 63 ? 2053994217 : 0;
}
var KA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13], VA = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11], GA = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6], WA = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11], JA = Pt, YA = qo;
function ma(r, e, t) {
  if (!(this instanceof ma)) return new ma(r, e, t);
  this.Hash = r, this.blockSize = r.blockSize / 8, this.outSize = r.outSize / 8, this.inner = null, this.outer = null, this._init(JA.toArray(e, t));
}
var QA = ma;
ma.prototype._init = function(r) {
  r.length > this.blockSize && (r = new this.Hash().update(r).digest()), YA(r.length <= this.blockSize);
  for (var e = r.length; e < this.blockSize; e++) r.push(0);
  for (e = 0; e < r.length; e++) r[e] ^= 54;
  for (this.inner = new this.Hash().update(r), e = 0; e < r.length; e++) r[e] ^= 106;
  this.outer = new this.Hash().update(r);
}, ma.prototype.update = function(r, e) {
  return this.inner.update(r, e), this;
}, ma.prototype.digest = function(r) {
  return this.outer.update(this.inner.digest()), this.outer.digest(r);
}, function(r) {
  var e = r;
  e.utils = Pt, e.common = xa, e.sha = la, e.ripemd = kb, e.hmac = QA, e.sha1 = e.sha.sha1, e.sha256 = e.sha.sha256, e.sha224 = e.sha.sha224, e.sha384 = e.sha.sha384, e.sha512 = e.sha.sha512, e.ripemd160 = e.ripemd.ripemd160;
}(hn);
function Ma(r, e, t) {
  return t = { path: e, exports: {}, require: function(i, s) {
    return XA(i, s ?? t.path);
  } }, r(t, t.exports), t.exports;
}
function XA() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var td = Kb;
function Kb(r, e) {
  if (!r) throw new Error(e || "Assertion failed");
}
Kb.equal = function(r, e, t) {
  if (r != e) throw new Error(t || "Assertion failed: " + r + " != " + e);
};
var Qi = Ma(function(r, e) {
  var t = e;
  function i(f, h) {
    if (Array.isArray(f)) return f.slice();
    if (!f) return [];
    var p = [];
    if (typeof f != "string") {
      for (var u = 0; u < f.length; u++) p[u] = f[u] | 0;
      return p;
    }
    if (h === "hex") {
      f = f.replace(/[^a-z0-9]+/ig, ""), f.length % 2 !== 0 && (f = "0" + f);
      for (var u = 0; u < f.length; u += 2) p.push(parseInt(f[u] + f[u + 1], 16));
    } else for (var u = 0; u < f.length; u++) {
      var m = f.charCodeAt(u), A = m >> 8, M = m & 255;
      A ? p.push(A, M) : p.push(M);
    }
    return p;
  }
  t.toArray = i;
  function s(f) {
    return f.length === 1 ? "0" + f : f;
  }
  t.zero2 = s;
  function a(f) {
    for (var h = "", p = 0; p < f.length; p++) h += s(f[p].toString(16));
    return h;
  }
  t.toHex = a, t.encode = function(f, h) {
    return h === "hex" ? a(f) : f;
  };
}), pi = Ma(function(r, e) {
  var t = e;
  t.assert = td, t.toArray = Qi.toArray, t.zero2 = Qi.zero2, t.toHex = Qi.toHex, t.encode = Qi.encode;
  function i(p, u, m) {
    var A = new Array(Math.max(p.bitLength(), m) + 1);
    A.fill(0);
    for (var M = 1 << u + 1, I = p.clone(), C = 0; C < A.length; C++) {
      var R, L = I.andln(M - 1);
      I.isOdd() ? (L > (M >> 1) - 1 ? R = (M >> 1) - L : R = L, I.isubn(R)) : R = 0, A[C] = R, I.iushrn(1);
    }
    return A;
  }
  t.getNAF = i;
  function s(p, u) {
    var m = [[], []];
    p = p.clone(), u = u.clone();
    for (var A = 0, M = 0, I; p.cmpn(-A) > 0 || u.cmpn(-M) > 0; ) {
      var C = p.andln(3) + A & 3, R = u.andln(3) + M & 3;
      C === 3 && (C = -1), R === 3 && (R = -1);
      var L;
      C & 1 ? (I = p.andln(7) + A & 7, (I === 3 || I === 5) && R === 2 ? L = -C : L = C) : L = 0, m[0].push(L);
      var K;
      R & 1 ? (I = u.andln(7) + M & 7, (I === 3 || I === 5) && C === 2 ? K = -R : K = R) : K = 0, m[1].push(K), 2 * A === L + 1 && (A = 1 - A), 2 * M === K + 1 && (M = 1 - M), p.iushrn(1), u.iushrn(1);
    }
    return m;
  }
  t.getJSF = s;
  function a(p, u, m) {
    var A = "_" + u;
    p.prototype[u] = function() {
      return this[A] !== void 0 ? this[A] : this[A] = m.call(this);
    };
  }
  t.cachedProperty = a;
  function f(p) {
    return typeof p == "string" ? t.toArray(p, "hex") : p;
  }
  t.parseBytes = f;
  function h(p) {
    return new vt(p, "hex", "le");
  }
  t.intFromLE = h;
}), Qc = pi.getNAF, ZA = pi.getJSF, xu = pi.assert;
function os(r, e) {
  this.type = r, this.p = new vt(e.p, 16), this.red = e.prime ? vt.red(e.prime) : vt.mont(this.p), this.zero = new vt(0).toRed(this.red), this.one = new vt(1).toRed(this.red), this.two = new vt(2).toRed(this.red), this.n = e.n && new vt(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
  var t = this.n && this.p.div(this.n);
  !t || t.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
}
var zs = os;
os.prototype.point = function() {
  throw new Error("Not implemented");
}, os.prototype.validate = function() {
  throw new Error("Not implemented");
}, os.prototype._fixedNafMul = function(r, e) {
  xu(r.precomputed);
  var t = r._getDoubles(), i = Qc(e, 1, this._bitLength), s = (1 << t.step + 1) - (t.step % 2 === 0 ? 2 : 1);
  s /= 3;
  var a = [], f, h;
  for (f = 0; f < i.length; f += t.step) {
    h = 0;
    for (var p = f + t.step - 1; p >= f; p--) h = (h << 1) + i[p];
    a.push(h);
  }
  for (var u = this.jpoint(null, null, null), m = this.jpoint(null, null, null), A = s; A > 0; A--) {
    for (f = 0; f < a.length; f++) h = a[f], h === A ? m = m.mixedAdd(t.points[f]) : h === -A && (m = m.mixedAdd(t.points[f].neg()));
    u = u.add(m);
  }
  return u.toP();
}, os.prototype._wnafMul = function(r, e) {
  var t = 4, i = r._getNAFPoints(t);
  t = i.wnd;
  for (var s = i.points, a = Qc(e, t, this._bitLength), f = this.jpoint(null, null, null), h = a.length - 1; h >= 0; h--) {
    for (var p = 0; h >= 0 && a[h] === 0; h--) p++;
    if (h >= 0 && p++, f = f.dblp(p), h < 0) break;
    var u = a[h];
    xu(u !== 0), r.type === "affine" ? u > 0 ? f = f.mixedAdd(s[u - 1 >> 1]) : f = f.mixedAdd(s[-u - 1 >> 1].neg()) : u > 0 ? f = f.add(s[u - 1 >> 1]) : f = f.add(s[-u - 1 >> 1].neg());
  }
  return r.type === "affine" ? f.toP() : f;
}, os.prototype._wnafMulAdd = function(r, e, t, i, s) {
  var a = this._wnafT1, f = this._wnafT2, h = this._wnafT3, p = 0, u, m, A;
  for (u = 0; u < i; u++) {
    A = e[u];
    var M = A._getNAFPoints(r);
    a[u] = M.wnd, f[u] = M.points;
  }
  for (u = i - 1; u >= 1; u -= 2) {
    var I = u - 1, C = u;
    if (a[I] !== 1 || a[C] !== 1) {
      h[I] = Qc(t[I], a[I], this._bitLength), h[C] = Qc(t[C], a[C], this._bitLength), p = Math.max(h[I].length, p), p = Math.max(h[C].length, p);
      continue;
    }
    var R = [e[I], null, null, e[C]];
    e[I].y.cmp(e[C].y) === 0 ? (R[1] = e[I].add(e[C]), R[2] = e[I].toJ().mixedAdd(e[C].neg())) : e[I].y.cmp(e[C].y.redNeg()) === 0 ? (R[1] = e[I].toJ().mixedAdd(e[C]), R[2] = e[I].add(e[C].neg())) : (R[1] = e[I].toJ().mixedAdd(e[C]), R[2] = e[I].toJ().mixedAdd(e[C].neg()));
    var L = [-3, -1, -5, -7, 0, 7, 5, 1, 3], K = ZA(t[I], t[C]);
    for (p = Math.max(K[0].length, p), h[I] = new Array(p), h[C] = new Array(p), m = 0; m < p; m++) {
      var F = K[0][m] | 0, V = K[1][m] | 0;
      h[I][m] = L[(F + 1) * 3 + (V + 1)], h[C][m] = 0, f[I] = R;
    }
  }
  var B = this.jpoint(null, null, null), z = this._wnafT4;
  for (u = p; u >= 0; u--) {
    for (var q = 0; u >= 0; ) {
      var E = !0;
      for (m = 0; m < i; m++) z[m] = h[m][u] | 0, z[m] !== 0 && (E = !1);
      if (!E) break;
      q++, u--;
    }
    if (u >= 0 && q++, B = B.dblp(q), u < 0) break;
    for (m = 0; m < i; m++) {
      var U = z[m];
      U !== 0 && (U > 0 ? A = f[m][U - 1 >> 1] : U < 0 && (A = f[m][-U - 1 >> 1].neg()), A.type === "affine" ? B = B.mixedAdd(A) : B = B.add(A));
    }
  }
  for (u = 0; u < i; u++) f[u] = null;
  return s ? B : B.toP();
};
function Ii(r, e) {
  this.curve = r, this.type = e, this.precomputed = null;
}
os.BasePoint = Ii, Ii.prototype.eq = function() {
  throw new Error("Not implemented");
}, Ii.prototype.validate = function() {
  return this.curve.validate(this);
}, os.prototype.decodePoint = function(r, e) {
  r = pi.toArray(r, e);
  var t = this.p.byteLength();
  if ((r[0] === 4 || r[0] === 6 || r[0] === 7) && r.length - 1 === 2 * t) {
    r[0] === 6 ? xu(r[r.length - 1] % 2 === 0) : r[0] === 7 && xu(r[r.length - 1] % 2 === 1);
    var i = this.point(r.slice(1, 1 + t), r.slice(1 + t, 1 + 2 * t));
    return i;
  } else if ((r[0] === 2 || r[0] === 3) && r.length - 1 === t) return this.pointFromX(r.slice(1, 1 + t), r[0] === 3);
  throw new Error("Unknown point format");
}, Ii.prototype.encodeCompressed = function(r) {
  return this.encode(r, !0);
}, Ii.prototype._encode = function(r) {
  var e = this.curve.p.byteLength(), t = this.getX().toArray("be", e);
  return r ? [this.getY().isEven() ? 2 : 3].concat(t) : [4].concat(t, this.getY().toArray("be", e));
}, Ii.prototype.encode = function(r, e) {
  return pi.encode(this._encode(e), r);
}, Ii.prototype.precompute = function(r) {
  if (this.precomputed) return this;
  var e = { doubles: null, naf: null, beta: null };
  return e.naf = this._getNAFPoints(8), e.doubles = this._getDoubles(4, r), e.beta = this._getBeta(), this.precomputed = e, this;
}, Ii.prototype._hasDoubles = function(r) {
  if (!this.precomputed) return !1;
  var e = this.precomputed.doubles;
  return e ? e.points.length >= Math.ceil((r.bitLength() + 1) / e.step) : !1;
}, Ii.prototype._getDoubles = function(r, e) {
  if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
  for (var t = [this], i = this, s = 0; s < e; s += r) {
    for (var a = 0; a < r; a++) i = i.dbl();
    t.push(i);
  }
  return { step: r, points: t };
}, Ii.prototype._getNAFPoints = function(r) {
  if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
  for (var e = [this], t = (1 << r) - 1, i = t === 1 ? null : this.dbl(), s = 1; s < t; s++) e[s] = e[s - 1].add(i);
  return { wnd: r, points: e };
}, Ii.prototype._getBeta = function() {
  return null;
}, Ii.prototype.dblp = function(r) {
  for (var e = this, t = 0; t < r; t++) e = e.dbl();
  return e;
};
var rd = Ma(function(r) {
  typeof Object.create == "function" ? r.exports = function(e, t) {
    t && (e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }));
  } : r.exports = function(e, t) {
    if (t) {
      e.super_ = t;
      var i = function() {
      };
      i.prototype = t.prototype, e.prototype = new i(), e.prototype.constructor = e;
    }
  };
}), eE = pi.assert;
function Ri(r) {
  zs.call(this, "short", r), this.a = new vt(r.a, 16).toRed(this.red), this.b = new vt(r.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(r), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
}
rd(Ri, zs);
var tE = Ri;
Ri.prototype._getEndomorphism = function(r) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var e, t;
    if (r.beta) e = new vt(r.beta, 16).toRed(this.red);
    else {
      var i = this._getEndoRoots(this.p);
      e = i[0].cmp(i[1]) < 0 ? i[0] : i[1], e = e.toRed(this.red);
    }
    if (r.lambda) t = new vt(r.lambda, 16);
    else {
      var s = this._getEndoRoots(this.n);
      this.g.mul(s[0]).x.cmp(this.g.x.redMul(e)) === 0 ? t = s[0] : (t = s[1], eE(this.g.mul(t).x.cmp(this.g.x.redMul(e)) === 0));
    }
    var a;
    return r.basis ? a = r.basis.map(function(f) {
      return { a: new vt(f.a, 16), b: new vt(f.b, 16) };
    }) : a = this._getEndoBasis(t), { beta: e, lambda: t, basis: a };
  }
}, Ri.prototype._getEndoRoots = function(r) {
  var e = r === this.p ? this.red : vt.mont(r), t = new vt(2).toRed(e).redInvm(), i = t.redNeg(), s = new vt(3).toRed(e).redNeg().redSqrt().redMul(t), a = i.redAdd(s).fromRed(), f = i.redSub(s).fromRed();
  return [a, f];
}, Ri.prototype._getEndoBasis = function(r) {
  for (var e = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), t = r, i = this.n.clone(), s = new vt(1), a = new vt(0), f = new vt(0), h = new vt(1), p, u, m, A, M, I, C, R = 0, L, K; t.cmpn(0) !== 0; ) {
    var F = i.div(t);
    L = i.sub(F.mul(t)), K = f.sub(F.mul(s));
    var V = h.sub(F.mul(a));
    if (!m && L.cmp(e) < 0) p = C.neg(), u = s, m = L.neg(), A = K;
    else if (m && ++R === 2) break;
    C = L, i = t, t = L, f = s, s = K, h = a, a = V;
  }
  M = L.neg(), I = K;
  var B = m.sqr().add(A.sqr()), z = M.sqr().add(I.sqr());
  return z.cmp(B) >= 0 && (M = p, I = u), m.negative && (m = m.neg(), A = A.neg()), M.negative && (M = M.neg(), I = I.neg()), [{ a: m, b: A }, { a: M, b: I }];
}, Ri.prototype._endoSplit = function(r) {
  var e = this.endo.basis, t = e[0], i = e[1], s = i.b.mul(r).divRound(this.n), a = t.b.neg().mul(r).divRound(this.n), f = s.mul(t.a), h = a.mul(i.a), p = s.mul(t.b), u = a.mul(i.b), m = r.sub(f).sub(h), A = p.add(u).neg();
  return { k1: m, k2: A };
}, Ri.prototype.pointFromX = function(r, e) {
  r = new vt(r, 16), r.red || (r = r.toRed(this.red));
  var t = r.redSqr().redMul(r).redIAdd(r.redMul(this.a)).redIAdd(this.b), i = t.redSqrt();
  if (i.redSqr().redSub(t).cmp(this.zero) !== 0) throw new Error("invalid point");
  var s = i.fromRed().isOdd();
  return (e && !s || !e && s) && (i = i.redNeg()), this.point(r, i);
}, Ri.prototype.validate = function(r) {
  if (r.inf) return !0;
  var e = r.x, t = r.y, i = this.a.redMul(e), s = e.redSqr().redMul(e).redIAdd(i).redIAdd(this.b);
  return t.redSqr().redISub(s).cmpn(0) === 0;
}, Ri.prototype._endoWnafMulAdd = function(r, e, t) {
  for (var i = this._endoWnafT1, s = this._endoWnafT2, a = 0; a < r.length; a++) {
    var f = this._endoSplit(e[a]), h = r[a], p = h._getBeta();
    f.k1.negative && (f.k1.ineg(), h = h.neg(!0)), f.k2.negative && (f.k2.ineg(), p = p.neg(!0)), i[a * 2] = h, i[a * 2 + 1] = p, s[a * 2] = f.k1, s[a * 2 + 1] = f.k2;
  }
  for (var u = this._wnafMulAdd(1, i, s, a * 2, t), m = 0; m < a * 2; m++) i[m] = null, s[m] = null;
  return u;
};
function br(r, e, t, i) {
  zs.BasePoint.call(this, r, "affine"), e === null && t === null ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new vt(e, 16), this.y = new vt(t, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
}
rd(br, zs.BasePoint), Ri.prototype.point = function(r, e, t) {
  return new br(this, r, e, t);
}, Ri.prototype.pointFromJSON = function(r, e) {
  return br.fromJSON(this, r, e);
}, br.prototype._getBeta = function() {
  if (this.curve.endo) {
    var r = this.precomputed;
    if (r && r.beta) return r.beta;
    var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (r) {
      var t = this.curve, i = function(s) {
        return t.point(s.x.redMul(t.endo.beta), s.y);
      };
      r.beta = e, e.precomputed = { beta: null, naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(i) }, doubles: r.doubles && { step: r.doubles.step, points: r.doubles.points.map(i) } };
    }
    return e;
  }
}, br.prototype.toJSON = function() {
  return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y];
}, br.fromJSON = function(r, e, t) {
  typeof e == "string" && (e = JSON.parse(e));
  var i = r.point(e[0], e[1], t);
  if (!e[2]) return i;
  function s(f) {
    return r.point(f[0], f[1], t);
  }
  var a = e[2];
  return i.precomputed = { beta: null, doubles: a.doubles && { step: a.doubles.step, points: [i].concat(a.doubles.points.map(s)) }, naf: a.naf && { wnd: a.naf.wnd, points: [i].concat(a.naf.points.map(s)) } }, i;
}, br.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
}, br.prototype.isInfinity = function() {
  return this.inf;
}, br.prototype.add = function(r) {
  if (this.inf) return r;
  if (r.inf) return this;
  if (this.eq(r)) return this.dbl();
  if (this.neg().eq(r)) return this.curve.point(null, null);
  if (this.x.cmp(r.x) === 0) return this.curve.point(null, null);
  var e = this.y.redSub(r.y);
  e.cmpn(0) !== 0 && (e = e.redMul(this.x.redSub(r.x).redInvm()));
  var t = e.redSqr().redISub(this.x).redISub(r.x), i = e.redMul(this.x.redSub(t)).redISub(this.y);
  return this.curve.point(t, i);
}, br.prototype.dbl = function() {
  if (this.inf) return this;
  var r = this.y.redAdd(this.y);
  if (r.cmpn(0) === 0) return this.curve.point(null, null);
  var e = this.curve.a, t = this.x.redSqr(), i = r.redInvm(), s = t.redAdd(t).redIAdd(t).redIAdd(e).redMul(i), a = s.redSqr().redISub(this.x.redAdd(this.x)), f = s.redMul(this.x.redSub(a)).redISub(this.y);
  return this.curve.point(a, f);
}, br.prototype.getX = function() {
  return this.x.fromRed();
}, br.prototype.getY = function() {
  return this.y.fromRed();
}, br.prototype.mul = function(r) {
  return r = new vt(r, 16), this.isInfinity() ? this : this._hasDoubles(r) ? this.curve._fixedNafMul(this, r) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [r]) : this.curve._wnafMul(this, r);
}, br.prototype.mulAdd = function(r, e, t) {
  var i = [this, e], s = [r, t];
  return this.curve.endo ? this.curve._endoWnafMulAdd(i, s) : this.curve._wnafMulAdd(1, i, s, 2);
}, br.prototype.jmulAdd = function(r, e, t) {
  var i = [this, e], s = [r, t];
  return this.curve.endo ? this.curve._endoWnafMulAdd(i, s, !0) : this.curve._wnafMulAdd(1, i, s, 2, !0);
}, br.prototype.eq = function(r) {
  return this === r || this.inf === r.inf && (this.inf || this.x.cmp(r.x) === 0 && this.y.cmp(r.y) === 0);
}, br.prototype.neg = function(r) {
  if (this.inf) return this;
  var e = this.curve.point(this.x, this.y.redNeg());
  if (r && this.precomputed) {
    var t = this.precomputed, i = function(s) {
      return s.neg();
    };
    e.precomputed = { naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(i) }, doubles: t.doubles && { step: t.doubles.step, points: t.doubles.points.map(i) } };
  }
  return e;
}, br.prototype.toJ = function() {
  if (this.inf) return this.curve.jpoint(null, null, null);
  var r = this.curve.jpoint(this.x, this.y, this.curve.one);
  return r;
};
function Er(r, e, t, i) {
  zs.BasePoint.call(this, r, "jacobian"), e === null && t === null && i === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new vt(0)) : (this.x = new vt(e, 16), this.y = new vt(t, 16), this.z = new vt(i, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
rd(Er, zs.BasePoint), Ri.prototype.jpoint = function(r, e, t) {
  return new Er(this, r, e, t);
}, Er.prototype.toP = function() {
  if (this.isInfinity()) return this.curve.point(null, null);
  var r = this.z.redInvm(), e = r.redSqr(), t = this.x.redMul(e), i = this.y.redMul(e).redMul(r);
  return this.curve.point(t, i);
}, Er.prototype.neg = function() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
}, Er.prototype.add = function(r) {
  if (this.isInfinity()) return r;
  if (r.isInfinity()) return this;
  var e = r.z.redSqr(), t = this.z.redSqr(), i = this.x.redMul(e), s = r.x.redMul(t), a = this.y.redMul(e.redMul(r.z)), f = r.y.redMul(t.redMul(this.z)), h = i.redSub(s), p = a.redSub(f);
  if (h.cmpn(0) === 0) return p.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var u = h.redSqr(), m = u.redMul(h), A = i.redMul(u), M = p.redSqr().redIAdd(m).redISub(A).redISub(A), I = p.redMul(A.redISub(M)).redISub(a.redMul(m)), C = this.z.redMul(r.z).redMul(h);
  return this.curve.jpoint(M, I, C);
}, Er.prototype.mixedAdd = function(r) {
  if (this.isInfinity()) return r.toJ();
  if (r.isInfinity()) return this;
  var e = this.z.redSqr(), t = this.x, i = r.x.redMul(e), s = this.y, a = r.y.redMul(e).redMul(this.z), f = t.redSub(i), h = s.redSub(a);
  if (f.cmpn(0) === 0) return h.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var p = f.redSqr(), u = p.redMul(f), m = t.redMul(p), A = h.redSqr().redIAdd(u).redISub(m).redISub(m), M = h.redMul(m.redISub(A)).redISub(s.redMul(u)), I = this.z.redMul(f);
  return this.curve.jpoint(A, M, I);
}, Er.prototype.dblp = function(r) {
  if (r === 0) return this;
  if (this.isInfinity()) return this;
  if (!r) return this.dbl();
  var e;
  if (this.curve.zeroA || this.curve.threeA) {
    var t = this;
    for (e = 0; e < r; e++) t = t.dbl();
    return t;
  }
  var i = this.curve.a, s = this.curve.tinv, a = this.x, f = this.y, h = this.z, p = h.redSqr().redSqr(), u = f.redAdd(f);
  for (e = 0; e < r; e++) {
    var m = a.redSqr(), A = u.redSqr(), M = A.redSqr(), I = m.redAdd(m).redIAdd(m).redIAdd(i.redMul(p)), C = a.redMul(A), R = I.redSqr().redISub(C.redAdd(C)), L = C.redISub(R), K = I.redMul(L);
    K = K.redIAdd(K).redISub(M);
    var F = u.redMul(h);
    e + 1 < r && (p = p.redMul(M)), a = R, h = F, u = K;
  }
  return this.curve.jpoint(a, u.redMul(s), h);
}, Er.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
}, Er.prototype._zeroDbl = function() {
  var r, e, t;
  if (this.zOne) {
    var i = this.x.redSqr(), s = this.y.redSqr(), a = s.redSqr(), f = this.x.redAdd(s).redSqr().redISub(i).redISub(a);
    f = f.redIAdd(f);
    var h = i.redAdd(i).redIAdd(i), p = h.redSqr().redISub(f).redISub(f), u = a.redIAdd(a);
    u = u.redIAdd(u), u = u.redIAdd(u), r = p, e = h.redMul(f.redISub(p)).redISub(u), t = this.y.redAdd(this.y);
  } else {
    var m = this.x.redSqr(), A = this.y.redSqr(), M = A.redSqr(), I = this.x.redAdd(A).redSqr().redISub(m).redISub(M);
    I = I.redIAdd(I);
    var C = m.redAdd(m).redIAdd(m), R = C.redSqr(), L = M.redIAdd(M);
    L = L.redIAdd(L), L = L.redIAdd(L), r = R.redISub(I).redISub(I), e = C.redMul(I.redISub(r)).redISub(L), t = this.y.redMul(this.z), t = t.redIAdd(t);
  }
  return this.curve.jpoint(r, e, t);
}, Er.prototype._threeDbl = function() {
  var r, e, t;
  if (this.zOne) {
    var i = this.x.redSqr(), s = this.y.redSqr(), a = s.redSqr(), f = this.x.redAdd(s).redSqr().redISub(i).redISub(a);
    f = f.redIAdd(f);
    var h = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a), p = h.redSqr().redISub(f).redISub(f);
    r = p;
    var u = a.redIAdd(a);
    u = u.redIAdd(u), u = u.redIAdd(u), e = h.redMul(f.redISub(p)).redISub(u), t = this.y.redAdd(this.y);
  } else {
    var m = this.z.redSqr(), A = this.y.redSqr(), M = this.x.redMul(A), I = this.x.redSub(m).redMul(this.x.redAdd(m));
    I = I.redAdd(I).redIAdd(I);
    var C = M.redIAdd(M);
    C = C.redIAdd(C);
    var R = C.redAdd(C);
    r = I.redSqr().redISub(R), t = this.y.redAdd(this.z).redSqr().redISub(A).redISub(m);
    var L = A.redSqr();
    L = L.redIAdd(L), L = L.redIAdd(L), L = L.redIAdd(L), e = I.redMul(C.redISub(r)).redISub(L);
  }
  return this.curve.jpoint(r, e, t);
}, Er.prototype._dbl = function() {
  var r = this.curve.a, e = this.x, t = this.y, i = this.z, s = i.redSqr().redSqr(), a = e.redSqr(), f = t.redSqr(), h = a.redAdd(a).redIAdd(a).redIAdd(r.redMul(s)), p = e.redAdd(e);
  p = p.redIAdd(p);
  var u = p.redMul(f), m = h.redSqr().redISub(u.redAdd(u)), A = u.redISub(m), M = f.redSqr();
  M = M.redIAdd(M), M = M.redIAdd(M), M = M.redIAdd(M);
  var I = h.redMul(A).redISub(M), C = t.redAdd(t).redMul(i);
  return this.curve.jpoint(m, I, C);
}, Er.prototype.trpl = function() {
  if (!this.curve.zeroA) return this.dbl().add(this);
  var r = this.x.redSqr(), e = this.y.redSqr(), t = this.z.redSqr(), i = e.redSqr(), s = r.redAdd(r).redIAdd(r), a = s.redSqr(), f = this.x.redAdd(e).redSqr().redISub(r).redISub(i);
  f = f.redIAdd(f), f = f.redAdd(f).redIAdd(f), f = f.redISub(a);
  var h = f.redSqr(), p = i.redIAdd(i);
  p = p.redIAdd(p), p = p.redIAdd(p), p = p.redIAdd(p);
  var u = s.redIAdd(f).redSqr().redISub(a).redISub(h).redISub(p), m = e.redMul(u);
  m = m.redIAdd(m), m = m.redIAdd(m);
  var A = this.x.redMul(h).redISub(m);
  A = A.redIAdd(A), A = A.redIAdd(A);
  var M = this.y.redMul(u.redMul(p.redISub(u)).redISub(f.redMul(h)));
  M = M.redIAdd(M), M = M.redIAdd(M), M = M.redIAdd(M);
  var I = this.z.redAdd(f).redSqr().redISub(t).redISub(h);
  return this.curve.jpoint(A, M, I);
}, Er.prototype.mul = function(r, e) {
  return r = new vt(r, e), this.curve._wnafMul(this, r);
}, Er.prototype.eq = function(r) {
  if (r.type === "affine") return this.eq(r.toJ());
  if (this === r) return !0;
  var e = this.z.redSqr(), t = r.z.redSqr();
  if (this.x.redMul(t).redISub(r.x.redMul(e)).cmpn(0) !== 0) return !1;
  var i = e.redMul(this.z), s = t.redMul(r.z);
  return this.y.redMul(s).redISub(r.y.redMul(i)).cmpn(0) === 0;
}, Er.prototype.eqXToP = function(r) {
  var e = this.z.redSqr(), t = r.toRed(this.curve.red).redMul(e);
  if (this.x.cmp(t) === 0) return !0;
  for (var i = r.clone(), s = this.curve.redN.redMul(e); ; ) {
    if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0) return !1;
    if (t.redIAdd(s), this.x.cmp(t) === 0) return !0;
  }
}, Er.prototype.inspect = function() {
  return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
}, Er.prototype.isInfinity = function() {
  return this.z.cmpn(0) === 0;
};
var fu = Ma(function(r, e) {
  var t = e;
  t.base = zs, t.short = tE, t.mont = null, t.edwards = null;
}), hu = Ma(function(r, e) {
  var t = e, i = pi.assert;
  function s(h) {
    h.type === "short" ? this.curve = new fu.short(h) : h.type === "edwards" ? this.curve = new fu.edwards(h) : this.curve = new fu.mont(h), this.g = this.curve.g, this.n = this.curve.n, this.hash = h.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  t.PresetCurve = s;
  function a(h, p) {
    Object.defineProperty(t, h, { configurable: !0, enumerable: !0, get: function() {
      var u = new s(p);
      return Object.defineProperty(t, h, { configurable: !0, enumerable: !0, value: u }), u;
    } });
  }
  a("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: hn.sha256, gRed: !1, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] }), a("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: hn.sha256, gRed: !1, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] }), a("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: hn.sha256, gRed: !1, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] }), a("p384", { type: "short", prime: null, p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff", a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc", b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef", n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973", hash: hn.sha384, gRed: !1, g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"] }), a("p521", { type: "short", prime: null, p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff", a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc", b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00", n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409", hash: hn.sha512, gRed: !1, g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"] }), a("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "1", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: hn.sha256, gRed: !1, g: ["9"] }), a("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: hn.sha256, gRed: !1, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] });
  var f;
  try {
    f = null.crash();
  } catch {
    f = void 0;
  }
  a("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: hn.sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: !1, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", f] });
});
function cs(r) {
  if (!(this instanceof cs)) return new cs(r);
  this.hash = r.hash, this.predResist = !!r.predResist, this.outLen = this.hash.outSize, this.minEntropy = r.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
  var e = Qi.toArray(r.entropy, r.entropyEnc || "hex"), t = Qi.toArray(r.nonce, r.nonceEnc || "hex"), i = Qi.toArray(r.pers, r.persEnc || "hex");
  td(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, t, i);
}
var ag = cs;
cs.prototype._init = function(r, e, t) {
  var i = r.concat(e).concat(t);
  this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
  for (var s = 0; s < this.V.length; s++) this.K[s] = 0, this.V[s] = 1;
  this._update(i), this._reseed = 1, this.reseedInterval = 281474976710656;
}, cs.prototype._hmac = function() {
  return new hn.hmac(this.hash, this.K);
}, cs.prototype._update = function(r) {
  var e = this._hmac().update(this.V).update([0]);
  r && (e = e.update(r)), this.K = e.digest(), this.V = this._hmac().update(this.V).digest(), r && (this.K = this._hmac().update(this.V).update([1]).update(r).digest(), this.V = this._hmac().update(this.V).digest());
}, cs.prototype.reseed = function(r, e, t, i) {
  typeof e != "string" && (i = t, t = e, e = null), r = Qi.toArray(r, e), t = Qi.toArray(t, i), td(r.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(r.concat(t || [])), this._reseed = 1;
}, cs.prototype.generate = function(r, e, t, i) {
  if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
  typeof e != "string" && (i = t, t = e, e = null), t && (t = Qi.toArray(t, i || "hex"), this._update(t));
  for (var s = []; s.length < r; ) this.V = this._hmac().update(this.V).digest(), s = s.concat(this.V);
  var a = s.slice(0, r);
  return this._update(t), this._reseed++, Qi.encode(a, e);
};
var rl = pi.assert;
function Tr(r, e) {
  this.ec = r, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc);
}
var il = Tr;
Tr.fromPublic = function(r, e, t) {
  return e instanceof Tr ? e : new Tr(r, { pub: e, pubEnc: t });
}, Tr.fromPrivate = function(r, e, t) {
  return e instanceof Tr ? e : new Tr(r, { priv: e, privEnc: t });
}, Tr.prototype.validate = function() {
  var r = this.getPublic();
  return r.isInfinity() ? { result: !1, reason: "Invalid public key" } : r.validate() ? r.mul(this.ec.curve.n).isInfinity() ? { result: !0, reason: null } : { result: !1, reason: "Public key * N != O" } : { result: !1, reason: "Public key is not a point" };
}, Tr.prototype.getPublic = function(r, e) {
  return typeof r == "string" && (e = r, r = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), e ? this.pub.encode(e, r) : this.pub;
}, Tr.prototype.getPrivate = function(r) {
  return r === "hex" ? this.priv.toString(16, 2) : this.priv;
}, Tr.prototype._importPrivate = function(r, e) {
  this.priv = new vt(r, e || 16), this.priv = this.priv.umod(this.ec.curve.n);
}, Tr.prototype._importPublic = function(r, e) {
  if (r.x || r.y) {
    this.ec.curve.type === "mont" ? rl(r.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && rl(r.x && r.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(r.x, r.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(r, e);
}, Tr.prototype.derive = function(r) {
  return r.validate() || rl(r.validate(), "public point not validated"), r.mul(this.priv).getX();
}, Tr.prototype.sign = function(r, e, t) {
  return this.ec.sign(r, this, e, t);
}, Tr.prototype.verify = function(r, e) {
  return this.ec.verify(r, e, this);
}, Tr.prototype.inspect = function() {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var rE = pi.assert;
function Bu(r, e) {
  if (r instanceof Bu) return r;
  this._importDER(r, e) || (rE(r.r && r.s, "Signature without r or s"), this.r = new vt(r.r, 16), this.s = new vt(r.s, 16), r.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = r.recoveryParam);
}
var Xc = Bu;
function iE() {
  this.place = 0;
}
function nl(r, e) {
  var t = r[e.place++];
  if (!(t & 128)) return t;
  var i = t & 15;
  if (i === 0 || i > 4) return !1;
  for (var s = 0, a = 0, f = e.place; a < i; a++, f++) s <<= 8, s |= r[f], s >>>= 0;
  return s <= 127 ? !1 : (e.place = f, s);
}
function og(r) {
  for (var e = 0, t = r.length - 1; !r[e] && !(r[e + 1] & 128) && e < t; ) e++;
  return e === 0 ? r : r.slice(e);
}
Bu.prototype._importDER = function(r, e) {
  r = pi.toArray(r, e);
  var t = new iE();
  if (r[t.place++] !== 48) return !1;
  var i = nl(r, t);
  if (i === !1 || i + t.place !== r.length || r[t.place++] !== 2) return !1;
  var s = nl(r, t);
  if (s === !1) return !1;
  var a = r.slice(t.place, s + t.place);
  if (t.place += s, r[t.place++] !== 2) return !1;
  var f = nl(r, t);
  if (f === !1 || r.length !== f + t.place) return !1;
  var h = r.slice(t.place, f + t.place);
  if (a[0] === 0) if (a[1] & 128) a = a.slice(1);
  else return !1;
  if (h[0] === 0) if (h[1] & 128) h = h.slice(1);
  else return !1;
  return this.r = new vt(a), this.s = new vt(h), this.recoveryParam = null, !0;
};
function sl(r, e) {
  if (e < 128) {
    r.push(e);
    return;
  }
  var t = 1 + (Math.log(e) / Math.LN2 >>> 3);
  for (r.push(t | 128); --t; ) r.push(e >>> (t << 3) & 255);
  r.push(e);
}
Bu.prototype.toDER = function(r) {
  var e = this.r.toArray(), t = this.s.toArray();
  for (e[0] & 128 && (e = [0].concat(e)), t[0] & 128 && (t = [0].concat(t)), e = og(e), t = og(t); !t[0] && !(t[1] & 128); ) t = t.slice(1);
  var i = [2];
  sl(i, e.length), i = i.concat(e), i.push(2), sl(i, t.length);
  var s = i.concat(t), a = [48];
  return sl(a, s.length), a = a.concat(s), pi.encode(a, r);
};
var nE = function() {
  throw new Error("unsupported");
}, Vb = pi.assert;
function Ci(r) {
  if (!(this instanceof Ci)) return new Ci(r);
  typeof r == "string" && (Vb(Object.prototype.hasOwnProperty.call(hu, r), "Unknown curve " + r), r = hu[r]), r instanceof hu.PresetCurve && (r = { curve: r }), this.curve = r.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = r.curve.g, this.g.precompute(r.curve.n.bitLength() + 1), this.hash = r.hash || r.curve.hash;
}
var sE = Ci;
Ci.prototype.keyPair = function(r) {
  return new il(this, r);
}, Ci.prototype.keyFromPrivate = function(r, e) {
  return il.fromPrivate(this, r, e);
}, Ci.prototype.keyFromPublic = function(r, e) {
  return il.fromPublic(this, r, e);
}, Ci.prototype.genKeyPair = function(r) {
  r || (r = {});
  for (var e = new ag({ hash: this.hash, pers: r.pers, persEnc: r.persEnc || "utf8", entropy: r.entropy || nE(this.hash.hmacStrength), entropyEnc: r.entropy && r.entropyEnc || "utf8", nonce: this.n.toArray() }), t = this.n.byteLength(), i = this.n.sub(new vt(2)); ; ) {
    var s = new vt(e.generate(t));
    if (!(s.cmp(i) > 0)) return s.iaddn(1), this.keyFromPrivate(s);
  }
}, Ci.prototype._truncateToN = function(r, e) {
  var t = r.byteLength() * 8 - this.n.bitLength();
  return t > 0 && (r = r.ushrn(t)), !e && r.cmp(this.n) >= 0 ? r.sub(this.n) : r;
}, Ci.prototype.sign = function(r, e, t, i) {
  typeof t == "object" && (i = t, t = null), i || (i = {}), e = this.keyFromPrivate(e, t), r = this._truncateToN(new vt(r, 16));
  for (var s = this.n.byteLength(), a = e.getPrivate().toArray("be", s), f = r.toArray("be", s), h = new ag({ hash: this.hash, entropy: a, nonce: f, pers: i.pers, persEnc: i.persEnc || "utf8" }), p = this.n.sub(new vt(1)), u = 0; ; u++) {
    var m = i.k ? i.k(u) : new vt(h.generate(this.n.byteLength()));
    if (m = this._truncateToN(m, !0), !(m.cmpn(1) <= 0 || m.cmp(p) >= 0)) {
      var A = this.g.mul(m);
      if (!A.isInfinity()) {
        var M = A.getX(), I = M.umod(this.n);
        if (I.cmpn(0) !== 0) {
          var C = m.invm(this.n).mul(I.mul(e.getPrivate()).iadd(r));
          if (C = C.umod(this.n), C.cmpn(0) !== 0) {
            var R = (A.getY().isOdd() ? 1 : 0) | (M.cmp(I) !== 0 ? 2 : 0);
            return i.canonical && C.cmp(this.nh) > 0 && (C = this.n.sub(C), R ^= 1), new Xc({ r: I, s: C, recoveryParam: R });
          }
        }
      }
    }
  }
}, Ci.prototype.verify = function(r, e, t, i) {
  r = this._truncateToN(new vt(r, 16)), t = this.keyFromPublic(t, i), e = new Xc(e, "hex");
  var s = e.r, a = e.s;
  if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0 || a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1;
  var f = a.invm(this.n), h = f.mul(r).umod(this.n), p = f.mul(s).umod(this.n), u;
  return this.curve._maxwellTrick ? (u = this.g.jmulAdd(h, t.getPublic(), p), u.isInfinity() ? !1 : u.eqXToP(s)) : (u = this.g.mulAdd(h, t.getPublic(), p), u.isInfinity() ? !1 : u.getX().umod(this.n).cmp(s) === 0);
}, Ci.prototype.recoverPubKey = function(r, e, t, i) {
  Vb((3 & t) === t, "The recovery param is more than two bits"), e = new Xc(e, i);
  var s = this.n, a = new vt(r), f = e.r, h = e.s, p = t & 1, u = t >> 1;
  if (f.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u) throw new Error("Unable to find sencond key candinate");
  u ? f = this.curve.pointFromX(f.add(this.curve.n), p) : f = this.curve.pointFromX(f, p);
  var m = e.r.invm(s), A = s.sub(a).mul(m).umod(s), M = h.mul(m).umod(s);
  return this.g.mulAdd(A, f, M);
}, Ci.prototype.getKeyRecoveryParam = function(r, e, t, i) {
  if (e = new Xc(e, i), e.recoveryParam !== null) return e.recoveryParam;
  for (var s = 0; s < 4; s++) {
    var a;
    try {
      a = this.recoverPubKey(r, e, s);
    } catch {
      continue;
    }
    if (a.eq(t)) return s;
  }
  throw new Error("Unable to find valid recovery factor");
};
var aE = Ma(function(r, e) {
  var t = e;
  t.version = "6.5.4", t.utils = pi, t.rand = function() {
    throw new Error("unsupported");
  }, t.curve = fu, t.curves = hu, t.ec = sE, t.eddsa = null;
}), oE = aE.ec;
const cE = "signing-key/5.7.0", Rl = new xr(cE);
let al = null;
function ss() {
  return al || (al = new oE("secp256k1")), al;
}
class uE {
  constructor(e) {
    ro(this, "curve", "secp256k1"), ro(this, "privateKey", ri(e)), K7(this.privateKey) !== 32 && Rl.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
    const t = ss().keyFromPrivate(rr(this.privateKey));
    ro(this, "publicKey", "0x" + t.getPublic(!1, "hex")), ro(this, "compressedPublicKey", "0x" + t.getPublic(!0, "hex")), ro(this, "_isSigningKey", !0);
  }
  _addPoint(e) {
    const t = ss().keyFromPublic(rr(this.publicKey)), i = ss().keyFromPublic(rr(e));
    return "0x" + t.pub.add(i.pub).encodeCompressed("hex");
  }
  signDigest(e) {
    const t = ss().keyFromPrivate(rr(this.privateKey)), i = rr(e);
    i.length !== 32 && Rl.throwArgumentError("bad digest length", "digest", e);
    const s = t.sign(i, { canonical: !0 });
    return bb({ recoveryParam: s.recoveryParam, r: bn("0x" + s.r.toString(16), 32), s: bn("0x" + s.s.toString(16), 32) });
  }
  computeSharedSecret(e) {
    const t = ss().keyFromPrivate(rr(this.privateKey)), i = ss().keyFromPublic(rr(Gb(e)));
    return bn("0x" + t.derive(i.getPublic()).toString(16), 32);
  }
  static isSigningKey(e) {
    return !!(e && e._isSigningKey);
  }
}
function fE(r, e) {
  const t = bb(e), i = { r: rr(t.r), s: rr(t.s) };
  return "0x" + ss().recoverPubKey(rr(r), i, t.recoveryParam).encode("hex", !1);
}
function Gb(r, e) {
  const t = rr(r);
  return t.length === 32 ? new uE(t).publicKey : t.length === 33 ? "0x" + ss().keyFromPublic(t).getPublic(!1, "hex") : t.length === 65 ? ri(t) : Rl.throwArgumentError("invalid public or private key", "key", "[REDACTED]");
}
var cg;
(function(r) {
  r[r.legacy = 0] = "legacy", r[r.eip2930 = 1] = "eip2930", r[r.eip1559 = 2] = "eip1559";
})(cg || (cg = {}));
function hE(r) {
  const e = Gb(r);
  return A9(W1(Xl(W1(e, 1)), 12));
}
function lE(r, e) {
  return hE(fE(rr(r), e));
}
const dE = "https://rpc.walletconnect.org/v1";
async function pE(r, e, t, i, s, a) {
  switch (t.t) {
    case "eip191":
      return gE(r, e, t.s);
    case "eip1271":
      return await vE(r, e, t.s, i, s, a);
    default:
      throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${t.t}`);
  }
}
function gE(r, e, t) {
  return lE(Mb(e), t).toLowerCase() === r.toLowerCase();
}
async function vE(r, e, t, i, s, a) {
  try {
    const f = "0x1626ba7e", h = "0000000000000000000000000000000000000000000000000000000000000040", p = "0000000000000000000000000000000000000000000000000000000000000041", u = t.substring(2), m = Mb(e).substring(2), A = f + m + h + p + u, M = await fetch(`${a || dE}/?chainId=${i}&projectId=${s}`, { method: "POST", body: JSON.stringify({ id: bE(), jsonrpc: "2.0", method: "eth_call", params: [{ to: r, data: A }, "latest"] }) }), { result: I } = await M.json();
    return I ? I.slice(0, f.length).toLowerCase() === f.toLowerCase() : !1;
  } catch (f) {
    return console.error("isValidEip1271Signature: ", f), !1;
  }
}
function bE() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
var mE = Object.defineProperty, yE = Object.defineProperties, wE = Object.getOwnPropertyDescriptors, ug = Object.getOwnPropertySymbols, _E = Object.prototype.hasOwnProperty, AE = Object.prototype.propertyIsEnumerable, fg = (r, e, t) => e in r ? mE(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, EE = (r, e) => {
  for (var t in e || (e = {})) _E.call(e, t) && fg(r, t, e[t]);
  if (ug) for (var t of ug(e)) AE.call(e, t) && fg(r, t, e[t]);
  return r;
}, xE = (r, e) => yE(r, wE(e));
const SE = "did:pkh:", id = (r) => r == null ? void 0 : r.split(":"), Wb = (r) => {
  const e = r && id(r);
  if (e) return r.includes(SE) ? e[3] : e[1];
}, hg = (r) => {
  const e = r && id(r);
  if (e) return e[2] + ":" + e[3];
}, Su = (r) => {
  const e = r && id(r);
  if (e) return e.pop();
};
async function lg(r) {
  const { cacao: e, projectId: t } = r, { s: i, p: s } = e, a = Jb(s, s.iss), f = Su(s.iss);
  return await pE(f, a, i, Wb(s.iss), t);
}
const Jb = (r, e) => {
  const t = `${r.domain} wants you to sign in with your Ethereum account:`, i = Su(e);
  if (!r.aud && !r.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
  let s = r.statement || void 0;
  const a = `URI: ${r.aud || r.uri}`, f = `Version: ${r.version}`, h = `Chain ID: ${Wb(e)}`, p = `Nonce: ${r.nonce}`, u = `Issued At: ${r.iat}`, m = r.exp ? `Expiration Time: ${r.exp}` : void 0, A = r.nbf ? `Not Before: ${r.nbf}` : void 0, M = r.requestId ? `Request ID: ${r.requestId}` : void 0, I = r.resources ? `Resources:${r.resources.map((R) => `
- ${R}`).join("")}` : void 0, C = lu(r.resources);
  if (C) {
    const R = So(C);
    s = TE(s, R);
  }
  return [t, i, "", s, "", a, f, h, p, u, m, A, M, I].filter((R) => R != null).join(`
`);
};
function ME(r) {
  return Buffer.from(JSON.stringify(r)).toString("base64");
}
function IE(r) {
  return JSON.parse(Buffer.from(r, "base64").toString("utf-8"));
}
function Bs(r) {
  if (!r) throw new Error("No recap provided, value is undefined");
  if (!r.att) throw new Error("No `att` property found");
  const e = Object.keys(r.att);
  if (!(e != null && e.length)) throw new Error("No resources found in `att` property");
  e.forEach((t) => {
    const i = r.att[t];
    if (Array.isArray(i)) throw new Error(`Resource must be an object: ${t}`);
    if (typeof i != "object") throw new Error(`Resource must be an object: ${t}`);
    if (!Object.keys(i).length) throw new Error(`Resource object is empty: ${t}`);
    Object.keys(i).forEach((s) => {
      const a = i[s];
      if (!Array.isArray(a)) throw new Error(`Ability limits ${s} must be an array of objects, found: ${a}`);
      if (!a.length) throw new Error(`Value of ${s} is empty array, must be an array with objects`);
      a.forEach((f) => {
        if (typeof f != "object") throw new Error(`Ability limits (${s}) must be an array of objects, found: ${f}`);
      });
    });
  });
}
function DE(r, e, t, i = {}) {
  return t == null || t.sort((s, a) => s.localeCompare(a)), { att: { [r]: PE(e, t, i) } };
}
function PE(r, e, t = {}) {
  e = e == null ? void 0 : e.sort((s, a) => s.localeCompare(a));
  const i = e.map((s) => ({ [`${r}/${s}`]: [t] }));
  return Object.assign({}, ...i);
}
function Yb(r) {
  return Bs(r), `urn:recap:${ME(r).replace(/=/g, "")}`;
}
function So(r) {
  const e = IE(r.replace("urn:recap:", ""));
  return Bs(e), e;
}
function CE(r, e, t) {
  const i = DE(r, e, t);
  return Yb(i);
}
function OE(r) {
  return r && r.includes("urn:recap:");
}
function RE(r, e) {
  const t = So(r), i = So(e), s = NE(t, i);
  return Yb(s);
}
function NE(r, e) {
  Bs(r), Bs(e);
  const t = Object.keys(r.att).concat(Object.keys(e.att)).sort((s, a) => s.localeCompare(a)), i = { att: {} };
  return t.forEach((s) => {
    var a, f;
    Object.keys(((a = r.att) == null ? void 0 : a[s]) || {}).concat(Object.keys(((f = e.att) == null ? void 0 : f[s]) || {})).sort((h, p) => h.localeCompare(p)).forEach((h) => {
      var p, u;
      i.att[s] = xE(EE({}, i.att[s]), { [h]: ((p = r.att[s]) == null ? void 0 : p[h]) || ((u = e.att[s]) == null ? void 0 : u[h]) });
    });
  }), i;
}
function TE(r = "", e) {
  Bs(e);
  const t = "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (r.includes(t)) return r;
  const i = [];
  let s = 0;
  Object.keys(e.att).forEach((h) => {
    const p = Object.keys(e.att[h]).map((A) => ({ ability: A.split("/")[0], action: A.split("/")[1] }));
    p.sort((A, M) => A.action.localeCompare(M.action));
    const u = {};
    p.forEach((A) => {
      u[A.ability] || (u[A.ability] = []), u[A.ability].push(A.action);
    });
    const m = Object.keys(u).map((A) => (s++, `(${s}) '${A}': '${u[A].join("', '")}' for '${h}'.`));
    i.push(m.join(", ").replace(".,", "."));
  });
  const a = i.join(" "), f = `${t}${a}`;
  return `${r ? r + " " : ""}${f}`;
}
function dg(r) {
  var e;
  const t = So(r);
  Bs(t);
  const i = (e = t.att) == null ? void 0 : e.eip155;
  return i ? Object.keys(i).map((s) => s.split("/")[1]) : [];
}
function pg(r) {
  const e = So(r);
  Bs(e);
  const t = [];
  return Object.values(e.att).forEach((i) => {
    Object.values(i).forEach((s) => {
      var a;
      (a = s == null ? void 0 : s[0]) != null && a.chains && t.push(s[0].chains);
    });
  }), [...new Set(t.flat())];
}
function lu(r) {
  if (!r) return;
  const e = r == null ? void 0 : r[r.length - 1];
  return OE(e) ? e : void 0;
}
const Qb = "base10", kr = "base16", us = "base64pad", so = "base64url", Fo = "utf8", Xb = 0, Hn = 1, Bo = 2, qE = 0, gg = 1, wo = 12, nd = 32;
function FE() {
  const r = Hv.generateKeyPair();
  return { privateKey: _r(r.secretKey, kr), publicKey: _r(r.publicKey, kr) };
}
function Nl() {
  const r = Co.randomBytes(nd);
  return _r(r, kr);
}
function BE(r, e) {
  const t = Hv.sharedKey(wr(r, kr), wr(e, kr), !0), i = new b4.HKDF(Nu.SHA256, t).expand(nd);
  return _r(i, kr);
}
function du(r) {
  const e = Nu.hash(wr(r, kr));
  return _r(e, kr);
}
function jn(r) {
  const e = Nu.hash(wr(r, Fo));
  return _r(e, kr);
}
function Zb(r) {
  return wr(`${r}`, Qb);
}
function Ls(r) {
  return Number(_r(r, Qb));
}
function LE(r) {
  const e = Zb(typeof r.type < "u" ? r.type : Xb);
  if (Ls(e) === Hn && typeof r.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
  const t = typeof r.senderPublicKey < "u" ? wr(r.senderPublicKey, kr) : void 0, i = typeof r.iv < "u" ? wr(r.iv, kr) : Co.randomBytes(wo), s = new kv.ChaCha20Poly1305(wr(r.symKey, kr)).seal(i, wr(r.message, Fo));
  return e2({ type: e, sealed: s, iv: i, senderPublicKey: t, encoding: r.encoding });
}
function UE(r, e) {
  const t = Zb(Bo), i = Co.randomBytes(wo), s = wr(r, Fo);
  return e2({ type: t, sealed: s, iv: i, encoding: e });
}
function zE(r) {
  const e = new kv.ChaCha20Poly1305(wr(r.symKey, kr)), { sealed: t, iv: i } = Mo({ encoded: r.encoded, encoding: r == null ? void 0 : r.encoding }), s = e.open(i, t);
  if (s === null) throw new Error("Failed to decrypt");
  return _r(s, Fo);
}
function jE(r, e) {
  const { sealed: t } = Mo({ encoded: r, encoding: e });
  return _r(t, Fo);
}
function e2(r) {
  const { encoding: e = us } = r;
  if (Ls(r.type) === Bo) return _r(au([r.type, r.sealed]), e);
  if (Ls(r.type) === Hn) {
    if (typeof r.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    return _r(au([r.type, r.senderPublicKey, r.iv, r.sealed]), e);
  }
  return _r(au([r.type, r.iv, r.sealed]), e);
}
function Mo(r) {
  const { encoded: e, encoding: t = us } = r, i = wr(e, t), s = i.slice(qE, gg), a = gg;
  if (Ls(s) === Hn) {
    const u = a + nd, m = u + wo, A = i.slice(a, u), M = i.slice(u, m), I = i.slice(m);
    return { type: s, sealed: I, iv: M, senderPublicKey: A };
  }
  if (Ls(s) === Bo) {
    const u = i.slice(a), m = Co.randomBytes(wo);
    return { type: s, sealed: u, iv: m };
  }
  const f = a + wo, h = i.slice(a, f), p = i.slice(f);
  return { type: s, sealed: p, iv: h };
}
function $E(r, e) {
  const t = Mo({ encoded: r, encoding: e == null ? void 0 : e.encoding });
  return t2({ type: Ls(t.type), senderPublicKey: typeof t.senderPublicKey < "u" ? _r(t.senderPublicKey, kr) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function t2(r) {
  const e = (r == null ? void 0 : r.type) || Xb;
  if (e === Hn) {
    if (typeof (r == null ? void 0 : r.senderPublicKey) > "u") throw new Error("missing sender public key");
    if (typeof (r == null ? void 0 : r.receiverPublicKey) > "u") throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: r == null ? void 0 : r.senderPublicKey, receiverPublicKey: r == null ? void 0 : r.receiverPublicKey };
}
function vg(r) {
  return r.type === Hn && typeof r.senderPublicKey == "string" && typeof r.receiverPublicKey == "string";
}
function bg(r) {
  return r.type === Bo;
}
function kE(r) {
  return new e7.ec("p256").keyFromPublic({ x: Buffer.from(r.x, "base64").toString("hex"), y: Buffer.from(r.y, "base64").toString("hex") }, "hex");
}
function HE(r) {
  let e = r.replace(/-/g, "+").replace(/_/g, "/");
  const t = e.length % 4;
  return t > 0 && (e += "=".repeat(4 - t)), e;
}
function KE(r) {
  return Buffer.from(HE(r), "base64");
}
function VE(r, e) {
  const [t, i, s] = r.split("."), a = KE(s);
  if (a.length !== 64) throw new Error("Invalid signature length");
  const f = a.slice(0, 32).toString("hex"), h = a.slice(32, 64).toString("hex"), p = `${t}.${i}`, u = new Nu.SHA256().update(Buffer.from(p)).digest(), m = kE(e), A = Buffer.from(u).toString("hex");
  if (!m.verify(A, { r: f, s: h })) throw new Error("Invalid signature");
  return Ml(r).payload;
}
const GE = "irn";
function Tl(r) {
  return (r == null ? void 0 : r.relay) || { protocol: GE };
}
function po(r) {
  const e = m7[r];
  if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${r}`);
  return e;
}
var WE = Object.defineProperty, JE = Object.defineProperties, YE = Object.getOwnPropertyDescriptors, mg = Object.getOwnPropertySymbols, QE = Object.prototype.hasOwnProperty, XE = Object.prototype.propertyIsEnumerable, yg = (r, e, t) => e in r ? WE(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, wg = (r, e) => {
  for (var t in e || (e = {})) QE.call(e, t) && yg(r, t, e[t]);
  if (mg) for (var t of mg(e)) XE.call(e, t) && yg(r, t, e[t]);
  return r;
}, ZE = (r, e) => JE(r, YE(e));
function ex(r, e = "-") {
  const t = {}, i = "relay" + e;
  return Object.keys(r).forEach((s) => {
    if (s.startsWith(i)) {
      const a = s.replace(i, ""), f = r[s];
      t[a] = f;
    }
  }), t;
}
function _g(r) {
  if (!r.includes("wc:")) {
    const p = db(r);
    p != null && p.includes("wc:") && (r = p);
  }
  r = r.includes("wc://") ? r.replace("wc://", "") : r, r = r.includes("wc:") ? r.replace("wc:", "") : r;
  const e = r.indexOf(":"), t = r.indexOf("?") !== -1 ? r.indexOf("?") : void 0, i = r.substring(0, e), s = r.substring(e + 1, t).split("@"), a = typeof t < "u" ? r.substring(t) : "", f = bu.parse(a), h = typeof f.methods == "string" ? f.methods.split(",") : void 0;
  return { protocol: i, topic: tx(s[0]), version: parseInt(s[1], 10), symKey: f.symKey, relay: ex(f), methods: h, expiryTimestamp: f.expiryTimestamp ? parseInt(f.expiryTimestamp, 10) : void 0 };
}
function tx(r) {
  return r.startsWith("//") ? r.substring(2) : r;
}
function rx(r, e = "-") {
  const t = "relay", i = {};
  return Object.keys(r).forEach((s) => {
    const a = t + e + s;
    r[s] && (i[a] = r[s]);
  }), i;
}
function Ag(r) {
  return `${r.protocol}:${r.topic}@${r.version}?` + bu.stringify(wg(ZE(wg({ symKey: r.symKey }, rx(r.relay)), { expiryTimestamp: r.expiryTimestamp }), r.methods ? { methods: r.methods.join(",") } : {}));
}
function Zc(r, e, t) {
  return `${r}?wc_ev=${t}&topic=${e}`;
}
function Ia(r) {
  const e = [];
  return r.forEach((t) => {
    const [i, s] = t.split(":");
    e.push(`${i}:${s}`);
  }), e;
}
function ix(r) {
  const e = [];
  return Object.values(r).forEach((t) => {
    e.push(...Ia(t.accounts));
  }), e;
}
function nx(r, e) {
  const t = [];
  return Object.values(r).forEach((i) => {
    Ia(i.accounts).includes(e) && t.push(...i.methods);
  }), t;
}
function sx(r, e) {
  const t = [];
  return Object.values(r).forEach((i) => {
    Ia(i.accounts).includes(e) && t.push(...i.events);
  }), t;
}
function sd(r) {
  return r.includes(":");
}
function go(r) {
  return sd(r) ? r.split(":")[0] : r;
}
function ax(r) {
  const e = {};
  return r == null || r.forEach((t) => {
    const [i, s] = t.split(":");
    e[i] || (e[i] = { accounts: [], chains: [], events: [] }), e[i].accounts.push(t), e[i].chains.push(`${i}:${s}`);
  }), e;
}
function Eg(r, e) {
  e = e.map((i) => i.replace("did:pkh:", ""));
  const t = ax(e);
  for (const [i, s] of Object.entries(t)) s.methods ? s.methods = cu(s.methods, r) : s.methods = r, s.events = ["chainChanged", "accountsChanged"];
  return t;
}
const ox = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, cx = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function Ae(r, e) {
  const { message: t, code: i } = cx[r];
  return { message: e ? `${t} ${e}` : t, code: i };
}
function Lt(r, e) {
  const { message: t, code: i } = ox[r];
  return { message: e ? `${t} ${e}` : t, code: i };
}
function _n(r, e) {
  return !!Array.isArray(r);
}
function Io(r) {
  return Object.getPrototypeOf(r) === Object.prototype && Object.keys(r).length;
}
function $r(r) {
  return typeof r > "u";
}
function or(r, e) {
  return e && $r(r) ? !0 : typeof r == "string" && !!r.trim().length;
}
function ad(r, e) {
  return e && $r(r) ? !0 : typeof r == "number" && !isNaN(r);
}
function ux(r, e) {
  const { requiredNamespaces: t } = e, i = Object.keys(r.namespaces), s = Object.keys(t);
  let a = !0;
  return Ns(s, i) ? (i.forEach((f) => {
    const { accounts: h, methods: p, events: u } = r.namespaces[f], m = Ia(h), A = t[f];
    (!Ns(ab(f, A), m) || !Ns(A.methods, p) || !Ns(A.events, u)) && (a = !1);
  }), a) : !1;
}
function Mu(r) {
  return or(r, !1) && r.includes(":") ? r.split(":").length === 2 : !1;
}
function fx(r) {
  if (or(r, !1) && r.includes(":")) {
    const e = r.split(":");
    if (e.length === 3) {
      const t = e[0] + ":" + e[1];
      return !!e[2] && Mu(t);
    }
  }
  return !1;
}
function hx(r) {
  function e(t) {
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  }
  try {
    if (or(r, !1)) {
      if (e(r)) return !0;
      const t = db(r);
      return e(t);
    }
  } catch {
  }
  return !1;
}
function lx(r) {
  var e;
  return (e = r == null ? void 0 : r.proposer) == null ? void 0 : e.publicKey;
}
function dx(r) {
  return r == null ? void 0 : r.topic;
}
function px(r, e) {
  let t = null;
  return or(r == null ? void 0 : r.publicKey, !1) || (t = Ae("MISSING_OR_INVALID", `${e} controller public key should be a string`)), t;
}
function xg(r) {
  let e = !0;
  return _n(r) ? r.length && (e = r.every((t) => or(t, !1))) : e = !1, e;
}
function gx(r, e, t) {
  let i = null;
  return _n(e) && e.length ? e.forEach((s) => {
    i || Mu(s) || (i = Lt("UNSUPPORTED_CHAINS", `${t}, chain ${s} should be a string and conform to "namespace:chainId" format`));
  }) : Mu(r) || (i = Lt("UNSUPPORTED_CHAINS", `${t}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i;
}
function vx(r, e, t) {
  let i = null;
  return Object.entries(r).forEach(([s, a]) => {
    if (i) return;
    const f = gx(s, ab(s, a), `${e} ${t}`);
    f && (i = f);
  }), i;
}
function bx(r, e) {
  let t = null;
  return _n(r) ? r.forEach((i) => {
    t || fx(i) || (t = Lt("UNSUPPORTED_ACCOUNTS", `${e}, account ${i} should be a string and conform to "namespace:chainId:address" format`));
  }) : t = Lt("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), t;
}
function mx(r, e) {
  let t = null;
  return Object.values(r).forEach((i) => {
    if (t) return;
    const s = bx(i == null ? void 0 : i.accounts, `${e} namespace`);
    s && (t = s);
  }), t;
}
function yx(r, e) {
  let t = null;
  return xg(r == null ? void 0 : r.methods) ? xg(r == null ? void 0 : r.events) || (t = Lt("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : t = Lt("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), t;
}
function r2(r, e) {
  let t = null;
  return Object.values(r).forEach((i) => {
    if (t) return;
    const s = yx(i, `${e}, namespace`);
    s && (t = s);
  }), t;
}
function wx(r, e, t) {
  let i = null;
  if (r && Io(r)) {
    const s = r2(r, e);
    s && (i = s);
    const a = vx(r, e, t);
    a && (i = a);
  } else i = Ae("MISSING_OR_INVALID", `${e}, ${t} should be an object with data`);
  return i;
}
function ol(r, e) {
  let t = null;
  if (r && Io(r)) {
    const i = r2(r, e);
    i && (t = i);
    const s = mx(r, e);
    s && (t = s);
  } else t = Ae("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return t;
}
function i2(r) {
  return or(r.protocol, !0);
}
function _x(r, e) {
  let t = !1;
  return r ? r && _n(r) && r.length && r.forEach((i) => {
    t = i2(i);
  }) : t = !0, t;
}
function Ax(r) {
  return typeof r == "number";
}
function ti(r) {
  return typeof r < "u" && typeof r !== null;
}
function Ex(r) {
  return !(!r || typeof r != "object" || !r.code || !ad(r.code, !1) || !r.message || !or(r.message, !1));
}
function xx(r) {
  return !($r(r) || !or(r.method, !1));
}
function Sx(r) {
  return !($r(r) || $r(r.result) && $r(r.error) || !ad(r.id, !1) || !or(r.jsonrpc, !1));
}
function Mx(r) {
  return !($r(r) || !or(r.name, !1));
}
function Sg(r, e) {
  return !(!Mu(e) || !ix(r).includes(e));
}
function Ix(r, e, t) {
  return or(t, !1) ? nx(r, e).includes(t) : !1;
}
function Dx(r, e, t) {
  return or(t, !1) ? sx(r, e).includes(t) : !1;
}
function Mg(r, e, t) {
  let i = null;
  const s = Px(r), a = Cx(e), f = Object.keys(s), h = Object.keys(a), p = Ig(Object.keys(r)), u = Ig(Object.keys(e)), m = p.filter((A) => !u.includes(A));
  return m.length && (i = Ae("NON_CONFORMING_NAMESPACES", `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${m.toString()}
      Received: ${Object.keys(e).toString()}`)), Ns(f, h) || (i = Ae("NON_CONFORMING_NAMESPACES", `${t} namespaces chains don't satisfy required namespaces.
      Required: ${f.toString()}
      Approved: ${h.toString()}`)), Object.keys(e).forEach((A) => {
    if (!A.includes(":") || i) return;
    const M = Ia(e[A].accounts);
    M.includes(A) || (i = Ae("NON_CONFORMING_NAMESPACES", `${t} namespaces accounts don't satisfy namespace accounts for ${A}
        Required: ${A}
        Approved: ${M.toString()}`));
  }), f.forEach((A) => {
    i || (Ns(s[A].methods, a[A].methods) ? Ns(s[A].events, a[A].events) || (i = Ae("NON_CONFORMING_NAMESPACES", `${t} namespaces events don't satisfy namespace events for ${A}`)) : i = Ae("NON_CONFORMING_NAMESPACES", `${t} namespaces methods don't satisfy namespace methods for ${A}`));
  }), i;
}
function Px(r) {
  const e = {};
  return Object.keys(r).forEach((t) => {
    var i;
    t.includes(":") ? e[t] = r[t] : (i = r[t].chains) == null || i.forEach((s) => {
      e[s] = { methods: r[t].methods, events: r[t].events };
    });
  }), e;
}
function Ig(r) {
  return [...new Set(r.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function Cx(r) {
  const e = {};
  return Object.keys(r).forEach((t) => {
    if (t.includes(":")) e[t] = r[t];
    else {
      const i = Ia(r[t].accounts);
      i == null || i.forEach((s) => {
        e[s] = { accounts: r[t].accounts.filter((a) => a.includes(`${s}:`)), methods: r[t].methods, events: r[t].events };
      });
    }
  }), e;
}
function Ox(r, e) {
  return ad(r, !1) && r <= e.max && r >= e.min;
}
function Dg() {
  const r = To();
  return new Promise((e) => {
    switch (r) {
      case li.browser:
        e(Rx());
        break;
      case li.reactNative:
        e(Nx());
        break;
      case li.node:
        e(Tx());
        break;
      default:
        e(!0);
    }
  });
}
function Rx() {
  return No() && (navigator == null ? void 0 : navigator.onLine);
}
async function Nx() {
  if (Aa() && typeof global < "u" && global != null && global.NetInfo) {
    const r = await (global == null ? void 0 : global.NetInfo.fetch());
    return r == null ? void 0 : r.isConnected;
  }
  return !0;
}
function Tx() {
  return !0;
}
function qx(r) {
  switch (To()) {
    case li.browser:
      Fx(r);
      break;
    case li.reactNative:
      Bx(r);
      break;
  }
}
function Fx(r) {
  !Aa() && No() && (window.addEventListener("online", () => r(!0)), window.addEventListener("offline", () => r(!1)));
}
function Bx(r) {
  Aa() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => r(e == null ? void 0 : e.isConnected)));
}
const cl = {};
class ao {
  static get(e) {
    return cl[e];
  }
  static set(e, t) {
    cl[e] = t;
  }
  static delete(e) {
    delete cl[e];
  }
}
class js {
}
let Lx = class extends js {
  constructor(e) {
    super();
  }
};
const Pg = Me.FIVE_SECONDS, Da = { pulse: "heartbeat_pulse" };
let Ux = class n2 extends Lx {
  constructor(e) {
    super(e), this.events = new gi.EventEmitter(), this.interval = Pg, this.interval = (e == null ? void 0 : e.interval) || Pg;
  }
  static async init(e) {
    const t = new n2(e);
    return await t.init(), t;
  }
  async init() {
    await this.initialize();
  }
  stop() {
    clearInterval(this.intervalRef);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async initialize() {
    this.intervalRef = setInterval(() => this.pulse(), Me.toMiliseconds(this.interval));
  }
  pulse() {
    this.events.emit(Da.pulse);
  }
};
const zx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, jx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, $x = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function kx(r, e) {
  if (r === "__proto__" || r === "constructor" && e && typeof e == "object" && "prototype" in e) {
    Hx(r);
    return;
  }
  return e;
}
function Hx(r) {
  console.warn(`[destr] Dropping "${r}" key to prevent prototype pollution.`);
}
function eu(r, e = {}) {
  if (typeof r != "string")
    return r;
  const t = r.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    r[0] === '"' && r.endsWith('"') && !r.includes("\\")
  )
    return t.slice(1, -1);
  if (t.length <= 9) {
    const i = t.toLowerCase();
    if (i === "true")
      return !0;
    if (i === "false")
      return !1;
    if (i === "undefined")
      return;
    if (i === "null")
      return null;
    if (i === "nan")
      return Number.NaN;
    if (i === "infinity")
      return Number.POSITIVE_INFINITY;
    if (i === "-infinity")
      return Number.NEGATIVE_INFINITY;
  }
  if (!$x.test(r)) {
    if (e.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return r;
  }
  try {
    if (zx.test(r) || jx.test(r)) {
      if (e.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(r, kx);
    }
    return JSON.parse(r);
  } catch (i) {
    if (e.strict)
      throw i;
    return r;
  }
}
function Kx(r) {
  return !r || typeof r.then != "function" ? Promise.resolve(r) : r;
}
function yr(r, ...e) {
  try {
    return Kx(r(...e));
  } catch (t) {
    return Promise.reject(t);
  }
}
function Vx(r) {
  const e = typeof r;
  return r === null || e !== "object" && e !== "function";
}
function Gx(r) {
  const e = Object.getPrototypeOf(r);
  return !e || e.isPrototypeOf(Object);
}
function pu(r) {
  if (Vx(r))
    return String(r);
  if (Gx(r) || Array.isArray(r))
    return JSON.stringify(r);
  if (typeof r.toJSON == "function")
    return pu(r.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
const ql = "base64:";
function Wx(r) {
  return typeof r == "string" ? r : ql + Qx(r);
}
function Jx(r) {
  return typeof r != "string" || !r.startsWith(ql) ? r : Yx(r.slice(ql.length));
}
function Yx(r) {
  return globalThis.Buffer ? Buffer.from(r, "base64") : Uint8Array.from(
    globalThis.atob(r),
    (e) => e.codePointAt(0)
  );
}
function Qx(r) {
  return globalThis.Buffer ? Buffer.from(r).toString("base64") : globalThis.btoa(String.fromCodePoint(...r));
}
function ei(r) {
  var e;
  return r && ((e = r.split("?")[0]) == null ? void 0 : e.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "")) || "";
}
function Xx(...r) {
  return ei(r.join(":"));
}
function tu(r) {
  return r = ei(r), r ? r + ":" : "";
}
const Zx = "memory", eS = () => {
  const r = /* @__PURE__ */ new Map();
  return {
    name: Zx,
    getInstance: () => r,
    hasItem(e) {
      return r.has(e);
    },
    getItem(e) {
      return r.get(e) ?? null;
    },
    getItemRaw(e) {
      return r.get(e) ?? null;
    },
    setItem(e, t) {
      r.set(e, t);
    },
    setItemRaw(e, t) {
      r.set(e, t);
    },
    removeItem(e) {
      r.delete(e);
    },
    getKeys() {
      return [...r.keys()];
    },
    clear() {
      r.clear();
    },
    dispose() {
      r.clear();
    }
  };
};
function tS(r = {}) {
  const e = {
    mounts: { "": r.driver || eS() },
    mountpoints: [""],
    watching: !1,
    watchListeners: [],
    unwatch: {}
  }, t = (u) => {
    for (const m of e.mountpoints)
      if (u.startsWith(m))
        return {
          base: m,
          relativeKey: u.slice(m.length),
          driver: e.mounts[m]
        };
    return {
      base: "",
      relativeKey: u,
      driver: e.mounts[""]
    };
  }, i = (u, m) => e.mountpoints.filter(
    (A) => A.startsWith(u) || m && u.startsWith(A)
  ).map((A) => ({
    relativeBase: u.length > A.length ? u.slice(A.length) : void 0,
    mountpoint: A,
    driver: e.mounts[A]
  })), s = (u, m) => {
    if (e.watching) {
      m = ei(m);
      for (const A of e.watchListeners)
        A(u, m);
    }
  }, a = async () => {
    if (!e.watching) {
      e.watching = !0;
      for (const u in e.mounts)
        e.unwatch[u] = await Cg(
          e.mounts[u],
          s,
          u
        );
    }
  }, f = async () => {
    if (e.watching) {
      for (const u in e.unwatch)
        await e.unwatch[u]();
      e.unwatch = {}, e.watching = !1;
    }
  }, h = (u, m, A) => {
    const M = /* @__PURE__ */ new Map(), I = (C) => {
      let R = M.get(C.base);
      return R || (R = {
        driver: C.driver,
        base: C.base,
        items: []
      }, M.set(C.base, R)), R;
    };
    for (const C of u) {
      const R = typeof C == "string", L = ei(R ? C : C.key), K = R ? void 0 : C.value, F = R || !C.options ? m : { ...m, ...C.options }, V = t(L);
      I(V).items.push({
        key: L,
        value: K,
        relativeKey: V.relativeKey,
        options: F
      });
    }
    return Promise.all([...M.values()].map((C) => A(C))).then(
      (C) => C.flat()
    );
  }, p = {
    // Item
    hasItem(u, m = {}) {
      u = ei(u);
      const { relativeKey: A, driver: M } = t(u);
      return yr(M.hasItem, A, m);
    },
    getItem(u, m = {}) {
      u = ei(u);
      const { relativeKey: A, driver: M } = t(u);
      return yr(M.getItem, A, m).then(
        (I) => eu(I)
      );
    },
    getItems(u, m = {}) {
      return h(u, m, (A) => A.driver.getItems ? yr(
        A.driver.getItems,
        A.items.map((M) => ({
          key: M.relativeKey,
          options: M.options
        })),
        m
      ).then(
        (M) => M.map((I) => ({
          key: Xx(A.base, I.key),
          value: eu(I.value)
        }))
      ) : Promise.all(
        A.items.map((M) => yr(
          A.driver.getItem,
          M.relativeKey,
          M.options
        ).then((I) => ({
          key: M.key,
          value: eu(I)
        })))
      ));
    },
    getItemRaw(u, m = {}) {
      u = ei(u);
      const { relativeKey: A, driver: M } = t(u);
      return M.getItemRaw ? yr(M.getItemRaw, A, m) : yr(M.getItem, A, m).then(
        (I) => Jx(I)
      );
    },
    async setItem(u, m, A = {}) {
      if (m === void 0)
        return p.removeItem(u);
      u = ei(u);
      const { relativeKey: M, driver: I } = t(u);
      I.setItem && (await yr(I.setItem, M, pu(m), A), I.watch || s("update", u));
    },
    async setItems(u, m) {
      await h(u, m, async (A) => {
        if (A.driver.setItems)
          return yr(
            A.driver.setItems,
            A.items.map((M) => ({
              key: M.relativeKey,
              value: pu(M.value),
              options: M.options
            })),
            m
          );
        A.driver.setItem && await Promise.all(
          A.items.map((M) => yr(
            A.driver.setItem,
            M.relativeKey,
            pu(M.value),
            M.options
          ))
        );
      });
    },
    async setItemRaw(u, m, A = {}) {
      if (m === void 0)
        return p.removeItem(u, A);
      u = ei(u);
      const { relativeKey: M, driver: I } = t(u);
      if (I.setItemRaw)
        await yr(I.setItemRaw, M, m, A);
      else if (I.setItem)
        await yr(I.setItem, M, Wx(m), A);
      else
        return;
      I.watch || s("update", u);
    },
    async removeItem(u, m = {}) {
      typeof m == "boolean" && (m = { removeMeta: m }), u = ei(u);
      const { relativeKey: A, driver: M } = t(u);
      M.removeItem && (await yr(M.removeItem, A, m), (m.removeMeta || m.removeMata) && await yr(M.removeItem, A + "$", m), M.watch || s("remove", u));
    },
    // Meta
    async getMeta(u, m = {}) {
      typeof m == "boolean" && (m = { nativeOnly: m }), u = ei(u);
      const { relativeKey: A, driver: M } = t(u), I = /* @__PURE__ */ Object.create(null);
      if (M.getMeta && Object.assign(I, await yr(M.getMeta, A, m)), !m.nativeOnly) {
        const C = await yr(
          M.getItem,
          A + "$",
          m
        ).then((R) => eu(R));
        C && typeof C == "object" && (typeof C.atime == "string" && (C.atime = new Date(C.atime)), typeof C.mtime == "string" && (C.mtime = new Date(C.mtime)), Object.assign(I, C));
      }
      return I;
    },
    setMeta(u, m, A = {}) {
      return this.setItem(u + "$", m, A);
    },
    removeMeta(u, m = {}) {
      return this.removeItem(u + "$", m);
    },
    // Keys
    async getKeys(u, m = {}) {
      u = tu(u);
      const A = i(u, !0);
      let M = [];
      const I = [];
      for (const C of A) {
        const R = await yr(
          C.driver.getKeys,
          C.relativeBase,
          m
        );
        for (const L of R) {
          const K = C.mountpoint + ei(L);
          M.some((F) => K.startsWith(F)) || I.push(K);
        }
        M = [
          C.mountpoint,
          ...M.filter((L) => !L.startsWith(C.mountpoint))
        ];
      }
      return u ? I.filter(
        (C) => C.startsWith(u) && C[C.length - 1] !== "$"
      ) : I.filter((C) => C[C.length - 1] !== "$");
    },
    // Utils
    async clear(u, m = {}) {
      u = tu(u), await Promise.all(
        i(u, !1).map(async (A) => {
          if (A.driver.clear)
            return yr(A.driver.clear, A.relativeBase, m);
          if (A.driver.removeItem) {
            const M = await A.driver.getKeys(A.relativeBase || "", m);
            return Promise.all(
              M.map((I) => A.driver.removeItem(I, m))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(e.mounts).map((u) => Og(u))
      );
    },
    async watch(u) {
      return await a(), e.watchListeners.push(u), async () => {
        e.watchListeners = e.watchListeners.filter(
          (m) => m !== u
        ), e.watchListeners.length === 0 && await f();
      };
    },
    async unwatch() {
      e.watchListeners = [], await f();
    },
    // Mount
    mount(u, m) {
      if (u = tu(u), u && e.mounts[u])
        throw new Error(`already mounted at ${u}`);
      return u && (e.mountpoints.push(u), e.mountpoints.sort((A, M) => M.length - A.length)), e.mounts[u] = m, e.watching && Promise.resolve(Cg(m, s, u)).then((A) => {
        e.unwatch[u] = A;
      }).catch(console.error), p;
    },
    async unmount(u, m = !0) {
      var A, M;
      u = tu(u), !(!u || !e.mounts[u]) && (e.watching && u in e.unwatch && ((M = (A = e.unwatch)[u]) == null || M.call(A), delete e.unwatch[u]), m && await Og(e.mounts[u]), e.mountpoints = e.mountpoints.filter((I) => I !== u), delete e.mounts[u]);
    },
    getMount(u = "") {
      u = ei(u) + ":";
      const m = t(u);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(u = "", m = {}) {
      return u = ei(u), i(u, m.parents).map((M) => ({
        driver: M.driver,
        base: M.mountpoint
      }));
    },
    // Aliases
    keys: (u, m = {}) => p.getKeys(u, m),
    get: (u, m = {}) => p.getItem(u, m),
    set: (u, m, A = {}) => p.setItem(u, m, A),
    has: (u, m = {}) => p.hasItem(u, m),
    del: (u, m = {}) => p.removeItem(u, m),
    remove: (u, m = {}) => p.removeItem(u, m)
  };
  return p;
}
function Cg(r, e, t) {
  return r.watch ? r.watch((i, s) => e(i, t + s)) : () => {
  };
}
async function Og(r) {
  typeof r.dispose == "function" && await yr(r.dispose);
}
function $s(r) {
  return new Promise((e, t) => {
    r.oncomplete = r.onsuccess = () => e(r.result), r.onabort = r.onerror = () => t(r.error);
  });
}
function s2(r, e) {
  const t = indexedDB.open(r);
  t.onupgradeneeded = () => t.result.createObjectStore(e);
  const i = $s(t);
  return (s, a) => i.then((f) => a(f.transaction(e, s).objectStore(e)));
}
let ul;
function Lo() {
  return ul || (ul = s2("keyval-store", "keyval")), ul;
}
function Rg(r, e = Lo()) {
  return e("readonly", (t) => $s(t.get(r)));
}
function rS(r, e, t = Lo()) {
  return t("readwrite", (i) => (i.put(e, r), $s(i.transaction)));
}
function iS(r, e = Lo()) {
  return e("readwrite", (t) => (t.delete(r), $s(t.transaction)));
}
function nS(r = Lo()) {
  return r("readwrite", (e) => (e.clear(), $s(e.transaction)));
}
function sS(r, e) {
  return r.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, $s(r.transaction);
}
function aS(r = Lo()) {
  return r("readonly", (e) => {
    if (e.getAllKeys)
      return $s(e.getAllKeys());
    const t = [];
    return sS(e, (i) => t.push(i.key)).then(() => t);
  });
}
const oS = "idb-keyval";
var cS = (r = {}) => {
  const e = r.base && r.base.length > 0 ? `${r.base}:` : "", t = (s) => e + s;
  let i;
  return r.dbName && r.storeName && (i = s2(r.dbName, r.storeName)), { name: oS, options: r, async hasItem(s) {
    return !(typeof await Rg(t(s), i) > "u");
  }, async getItem(s) {
    return await Rg(t(s), i) ?? null;
  }, setItem(s, a) {
    return rS(t(s), a, i);
  }, removeItem(s) {
    return iS(t(s), i);
  }, getKeys() {
    return aS(i);
  }, clear() {
    return nS(i);
  } };
};
const uS = "WALLET_CONNECT_V2_INDEXED_DB", fS = "keyvaluestorage";
let hS = class {
  constructor() {
    this.indexedDb = tS({ driver: cS({ dbName: uS, storeName: fS }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((e) => [e.key, e.value]);
  }
  async getItem(e) {
    const t = await this.indexedDb.getItem(e);
    if (t !== null) return t;
  }
  async setItem(e, t) {
    await this.indexedDb.setItem(e, Kn(t));
  }
  async removeItem(e) {
    await this.indexedDb.removeItem(e);
  }
};
var fl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, gu = { exports: {} };
(function() {
  let r;
  function e() {
  }
  r = e, r.prototype.getItem = function(t) {
    return this.hasOwnProperty(t) ? String(this[t]) : null;
  }, r.prototype.setItem = function(t, i) {
    this[t] = String(i);
  }, r.prototype.removeItem = function(t) {
    delete this[t];
  }, r.prototype.clear = function() {
    const t = this;
    Object.keys(t).forEach(function(i) {
      t[i] = void 0, delete t[i];
    });
  }, r.prototype.key = function(t) {
    return t = t || 0, Object.keys(this)[t];
  }, r.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof fl < "u" && fl.localStorage ? gu.exports = fl.localStorage : typeof window < "u" && window.localStorage ? gu.exports = window.localStorage : gu.exports = new e();
})();
function lS(r) {
  var e;
  return [r[0], Fs((e = r[1]) != null ? e : "")];
}
class dS {
  constructor() {
    this.localStorage = gu.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(lS);
  }
  async getItem(e) {
    const t = this.localStorage.getItem(e);
    if (t !== null) return Fs(t);
  }
  async setItem(e, t) {
    this.localStorage.setItem(e, Kn(t));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
}
const pS = "wc_storage_version", Ng = 1, gS = async (r, e, t) => {
  const i = pS, s = await e.getItem(i);
  if (s && s >= Ng) {
    t(e);
    return;
  }
  const a = await r.getKeys();
  if (!a.length) {
    t(e);
    return;
  }
  const f = [];
  for (; a.length; ) {
    const h = a.shift();
    if (!h) continue;
    const p = h.toLowerCase();
    if (p.includes("wc@") || p.includes("walletconnect") || p.includes("wc_") || p.includes("wallet_connect")) {
      const u = await r.getItem(h);
      await e.setItem(h, u), f.push(h);
    }
  }
  await e.setItem(i, Ng), t(e), vS(r, f);
}, vS = async (r, e) => {
  e.length && e.forEach(async (t) => {
    await r.removeItem(t);
  });
};
let bS = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (t) => {
      this.storage = t, this.initialized = !0;
    };
    const e = new dS();
    this.storage = e;
    try {
      const t = new hS();
      gS(e, t, this.setInitialized);
    } catch {
      this.initialized = !0;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(e) {
    return await this.initialize(), this.storage.getItem(e);
  }
  async setItem(e, t) {
    return await this.initialize(), this.storage.setItem(e, t);
  }
  async removeItem(e) {
    return await this.initialize(), this.storage.removeItem(e);
  }
  async initialize() {
    this.initialized || await new Promise((e) => {
      const t = setInterval(() => {
        this.initialized && (clearInterval(t), e());
      }, 20);
    });
  }
};
var hl, Tg;
function mS() {
  if (Tg) return hl;
  Tg = 1;
  function r(t) {
    try {
      return JSON.stringify(t);
    } catch {
      return '"[Circular]"';
    }
  }
  hl = e;
  function e(t, i, s) {
    var a = s && s.stringify || r, f = 1;
    if (typeof t == "object" && t !== null) {
      var h = i.length + f;
      if (h === 1) return t;
      var p = new Array(h);
      p[0] = a(t);
      for (var u = 1; u < h; u++)
        p[u] = a(i[u]);
      return p.join(" ");
    }
    if (typeof t != "string")
      return t;
    var m = i.length;
    if (m === 0) return t;
    for (var A = "", M = 1 - f, I = -1, C = t && t.length || 0, R = 0; R < C; ) {
      if (t.charCodeAt(R) === 37 && R + 1 < C) {
        switch (I = I > -1 ? I : 0, t.charCodeAt(R + 1)) {
          case 100:
          // 'd'
          case 102:
            if (M >= m || i[M] == null) break;
            I < R && (A += t.slice(I, R)), A += Number(i[M]), I = R + 2, R++;
            break;
          case 105:
            if (M >= m || i[M] == null) break;
            I < R && (A += t.slice(I, R)), A += Math.floor(Number(i[M])), I = R + 2, R++;
            break;
          case 79:
          // 'O'
          case 111:
          // 'o'
          case 106:
            if (M >= m || i[M] === void 0) break;
            I < R && (A += t.slice(I, R));
            var L = typeof i[M];
            if (L === "string") {
              A += "'" + i[M] + "'", I = R + 2, R++;
              break;
            }
            if (L === "function") {
              A += i[M].name || "<anonymous>", I = R + 2, R++;
              break;
            }
            A += a(i[M]), I = R + 2, R++;
            break;
          case 115:
            if (M >= m)
              break;
            I < R && (A += t.slice(I, R)), A += String(i[M]), I = R + 2, R++;
            break;
          case 37:
            I < R && (A += t.slice(I, R)), A += "%", I = R + 2, R++, M--;
            break;
        }
        ++M;
      }
      ++R;
    }
    return I === -1 ? t : (I < C && (A += t.slice(I)), A);
  }
  return hl;
}
var ll, qg;
function yS() {
  if (qg) return ll;
  qg = 1;
  const r = mS();
  ll = s;
  const e = z().console || {}, t = {
    mapHttpRequest: C,
    mapHttpResponse: C,
    wrapRequestSerializer: R,
    wrapResponseSerializer: R,
    wrapErrorSerializer: R,
    req: C,
    res: C,
    err: M
  };
  function i(q, E) {
    return Array.isArray(q) ? q.filter(function(ee) {
      return ee !== "!stdSerializers.err";
    }) : q === !0 ? Object.keys(E) : !1;
  }
  function s(q) {
    q = q || {}, q.browser = q.browser || {};
    const E = q.browser.transmit;
    if (E && typeof E.send != "function")
      throw Error("pino: transmit option must have a send function");
    const U = q.browser.write || e;
    q.browser.write && (q.browser.asObject = !0);
    const ee = q.serializers || {}, ae = i(q.browser.serialize, ee);
    let j = q.browser.serialize;
    Array.isArray(q.browser.serialize) && q.browser.serialize.indexOf("!stdSerializers.err") > -1 && (j = !1);
    const w = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof U == "function" && (U.error = U.fatal = U.warn = U.info = U.debug = U.trace = U), q.enabled === !1 && (q.level = "silent");
    const c = q.level || "info", d = Object.create(U);
    d.log || (d.log = L), Object.defineProperty(d, "levelVal", {
      get: b
    }), Object.defineProperty(d, "level", {
      get: _,
      set: D
    });
    const l = {
      transmit: E,
      serialize: ae,
      asObject: q.browser.asObject,
      levels: w,
      timestamp: I(q)
    };
    d.levels = s.levels, d.level = c, d.setMaxListeners = d.getMaxListeners = d.emit = d.addListener = d.on = d.prependListener = d.once = d.prependOnceListener = d.removeListener = d.removeAllListeners = d.listeners = d.listenerCount = d.eventNames = d.write = d.flush = L, d.serializers = ee, d._serialize = ae, d._stdErrSerialize = j, d.child = x, E && (d._logEvent = A());
    function b() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function _() {
      return this._level;
    }
    function D(g) {
      if (g !== "silent" && !this.levels.values[g])
        throw Error("unknown level " + g);
      this._level = g, a(l, d, "error", "log"), a(l, d, "fatal", "error"), a(l, d, "warn", "error"), a(l, d, "info", "log"), a(l, d, "debug", "log"), a(l, d, "trace", "log");
    }
    function x(g, y) {
      if (!g)
        throw new Error("missing bindings for child Pino");
      y = y || {}, ae && g.serializers && (y.serializers = g.serializers);
      const N = y.serializers;
      if (ae && N) {
        var Q = Object.assign({}, ee, N), Z = q.browser.serialize === !0 ? Object.keys(Q) : ae;
        delete g.serializers, p([g], Z, Q, this._stdErrSerialize);
      }
      function O(te) {
        this._childLevel = (te._childLevel | 0) + 1, this.error = u(te, g, "error"), this.fatal = u(te, g, "fatal"), this.warn = u(te, g, "warn"), this.info = u(te, g, "info"), this.debug = u(te, g, "debug"), this.trace = u(te, g, "trace"), Q && (this.serializers = Q, this._serialize = Z), E && (this._logEvent = A(
          [].concat(te._logEvent.bindings, g)
        ));
      }
      return O.prototype = this, new O(this);
    }
    return d;
  }
  s.levels = {
    values: {
      fatal: 60,
      error: 50,
      warn: 40,
      info: 30,
      debug: 20,
      trace: 10
    },
    labels: {
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal"
    }
  }, s.stdSerializers = t, s.stdTimeFunctions = Object.assign({}, { nullTime: K, epochTime: F, unixTime: V, isoTime: B });
  function a(q, E, U, ee) {
    const ae = Object.getPrototypeOf(E);
    E[U] = E.levelVal > E.levels.values[U] ? L : ae[U] ? ae[U] : e[U] || e[ee] || L, f(q, E, U);
  }
  function f(q, E, U) {
    !q.transmit && E[U] === L || (E[U] = /* @__PURE__ */ function(ee) {
      return function() {
        const j = q.timestamp(), w = new Array(arguments.length), c = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var d = 0; d < w.length; d++) w[d] = arguments[d];
        if (q.serialize && !q.asObject && p(w, this._serialize, this.serializers, this._stdErrSerialize), q.asObject ? ee.call(c, h(this, U, w, j)) : ee.apply(c, w), q.transmit) {
          const l = q.transmit.level || E.level, b = s.levels.values[l], _ = s.levels.values[U];
          if (_ < b) return;
          m(this, {
            ts: j,
            methodLevel: U,
            methodValue: _,
            transmitLevel: l,
            transmitValue: s.levels.values[q.transmit.level || E.level],
            send: q.transmit.send,
            val: E.levelVal
          }, w);
        }
      };
    }(E[U]));
  }
  function h(q, E, U, ee) {
    q._serialize && p(U, q._serialize, q.serializers, q._stdErrSerialize);
    const ae = U.slice();
    let j = ae[0];
    const w = {};
    ee && (w.time = ee), w.level = s.levels.values[E];
    let c = (q._childLevel | 0) + 1;
    if (c < 1 && (c = 1), j !== null && typeof j == "object") {
      for (; c-- && typeof ae[0] == "object"; )
        Object.assign(w, ae.shift());
      j = ae.length ? r(ae.shift(), ae) : void 0;
    } else typeof j == "string" && (j = r(ae.shift(), ae));
    return j !== void 0 && (w.msg = j), w;
  }
  function p(q, E, U, ee) {
    for (const ae in q)
      if (ee && q[ae] instanceof Error)
        q[ae] = s.stdSerializers.err(q[ae]);
      else if (typeof q[ae] == "object" && !Array.isArray(q[ae]))
        for (const j in q[ae])
          E && E.indexOf(j) > -1 && j in U && (q[ae][j] = U[j](q[ae][j]));
  }
  function u(q, E, U) {
    return function() {
      const ee = new Array(1 + arguments.length);
      ee[0] = E;
      for (var ae = 1; ae < ee.length; ae++)
        ee[ae] = arguments[ae - 1];
      return q[U].apply(this, ee);
    };
  }
  function m(q, E, U) {
    const ee = E.send, ae = E.ts, j = E.methodLevel, w = E.methodValue, c = E.val, d = q._logEvent.bindings;
    p(
      U,
      q._serialize || Object.keys(q.serializers),
      q.serializers,
      q._stdErrSerialize === void 0 ? !0 : q._stdErrSerialize
    ), q._logEvent.ts = ae, q._logEvent.messages = U.filter(function(l) {
      return d.indexOf(l) === -1;
    }), q._logEvent.level.label = j, q._logEvent.level.value = w, ee(j, q._logEvent, c), q._logEvent = A(d);
  }
  function A(q) {
    return {
      ts: 0,
      messages: [],
      bindings: q || [],
      level: { label: "", value: 0 }
    };
  }
  function M(q) {
    const E = {
      type: q.constructor.name,
      msg: q.message,
      stack: q.stack
    };
    for (const U in q)
      E[U] === void 0 && (E[U] = q[U]);
    return E;
  }
  function I(q) {
    return typeof q.timestamp == "function" ? q.timestamp : q.timestamp === !1 ? K : F;
  }
  function C() {
    return {};
  }
  function R(q) {
    return q;
  }
  function L() {
  }
  function K() {
    return !1;
  }
  function F() {
    return Date.now();
  }
  function V() {
    return Math.round(Date.now() / 1e3);
  }
  function B() {
    return new Date(Date.now()).toISOString();
  }
  function z() {
    function q(E) {
      return typeof E < "u" && E;
    }
    try {
      return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
        get: function() {
          return delete Object.prototype.globalThis, this.globalThis = this;
        },
        configurable: !0
      }), globalThis;
    } catch {
      return q(self) || q(window) || q(this) || {};
    }
  }
  return ll;
}
var da = yS();
const Uo = /* @__PURE__ */ Cu(da), wS = { level: "info" }, zo = "custom_context", od = 1e3 * 1024;
let _S = class {
  constructor(e) {
    this.nodeValue = e, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
  }
  get value() {
    return this.nodeValue;
  }
  get size() {
    return this.sizeInBytes;
  }
}, Fg = class {
  constructor(e) {
    this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e, this.sizeInBytes = 0;
  }
  append(e) {
    const t = new _S(e);
    if (t.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);
    for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
    this.head ? (this.tail && (this.tail.next = t), this.tail = t) : (this.head = t, this.tail = t), this.lengthInNodes++, this.sizeInBytes += t.size;
  }
  shift() {
    if (!this.head) return;
    const e = this.head;
    this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e.size;
  }
  toArray() {
    const e = [];
    let t = this.head;
    for (; t !== null; ) e.push(t.value), t = t.next;
    return e;
  }
  get length() {
    return this.lengthInNodes;
  }
  get size() {
    return this.sizeInBytes;
  }
  toOrderedArray() {
    return Array.from(this);
  }
  [Symbol.iterator]() {
    let e = this.head;
    return { next: () => {
      if (!e) return { done: !0, value: null };
      const t = e.value;
      return e = e.next, { done: !1, value: t };
    } };
  }
}, a2 = class {
  constructor(e, t = od) {
    this.level = e ?? "error", this.levelValue = da.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new Fg(this.MAX_LOG_SIZE_IN_BYTES);
  }
  forwardToConsole(e, t) {
    t === da.levels.values.error ? console.error(e) : t === da.levels.values.warn ? console.warn(e) : t === da.levels.values.debug ? console.debug(e) : t === da.levels.values.trace ? console.trace(e) : console.log(e);
  }
  appendToLogs(e) {
    this.logs.append(Kn({ timestamp: (/* @__PURE__ */ new Date()).toISOString(), log: e }));
    const t = typeof e == "string" ? JSON.parse(e).level : e.level;
    t >= this.levelValue && this.forwardToConsole(e, t);
  }
  getLogs() {
    return this.logs;
  }
  clearLogs() {
    this.logs = new Fg(this.MAX_LOG_SIZE_IN_BYTES);
  }
  getLogArray() {
    return Array.from(this.logs);
  }
  logsToBlob(e) {
    const t = this.getLogArray();
    return t.push(Kn({ extraMetadata: e })), new Blob(t, { type: "application/json" });
  }
}, AS = class {
  constructor(e, t = od) {
    this.baseChunkLogger = new a2(e, t);
  }
  write(e) {
    this.baseChunkLogger.appendToLogs(e);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e) {
    return this.baseChunkLogger.logsToBlob(e);
  }
  downloadLogsBlobInBrowser(e) {
    const t = URL.createObjectURL(this.logsToBlob(e)), i = document.createElement("a");
    i.href = t, i.download = `walletconnect-logs-${(/* @__PURE__ */ new Date()).toISOString()}.txt`, document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(t);
  }
};
class ES {
  constructor(e, t = od) {
    this.baseChunkLogger = new a2(e, t);
  }
  write(e) {
    this.baseChunkLogger.appendToLogs(e);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e) {
    return this.baseChunkLogger.logsToBlob(e);
  }
}
var xS = Object.defineProperty, SS = Object.defineProperties, MS = Object.getOwnPropertyDescriptors, Bg = Object.getOwnPropertySymbols, IS = Object.prototype.hasOwnProperty, DS = Object.prototype.propertyIsEnumerable, Lg = (r, e, t) => e in r ? xS(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Iu = (r, e) => {
  for (var t in e || (e = {})) IS.call(e, t) && Lg(r, t, e[t]);
  if (Bg) for (var t of Bg(e)) DS.call(e, t) && Lg(r, t, e[t]);
  return r;
}, Du = (r, e) => SS(r, MS(e));
function Lu(r) {
  return Du(Iu({}, r), { level: (r == null ? void 0 : r.level) || wS.level });
}
function PS(r, e = zo) {
  return r[e] || "";
}
function CS(r, e, t = zo) {
  return r[t] = e, r;
}
function si(r, e = zo) {
  let t = "";
  return typeof r.bindings > "u" ? t = PS(r, e) : t = r.bindings().context || "", t;
}
function OS(r, e, t = zo) {
  const i = si(r, t);
  return i.trim() ? `${i}/${e}` : e;
}
function Hr(r, e, t = zo) {
  const i = OS(r, e, t), s = r.child({ context: i });
  return CS(s, i, t);
}
function RS(r) {
  var e, t;
  const i = new AS((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
  return { logger: Uo(Du(Iu({}, r.opts), { level: "trace", browser: Du(Iu({}, (t = r.opts) == null ? void 0 : t.browser), { write: (s) => i.write(s) }) })), chunkLoggerController: i };
}
function NS(r) {
  var e;
  const t = new ES((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
  return { logger: Uo(Du(Iu({}, r.opts), { level: "trace" }), t), chunkLoggerController: t };
}
function TS(r) {
  return typeof r.loggerOverride < "u" && typeof r.loggerOverride != "string" ? { logger: r.loggerOverride, chunkLoggerController: null } : typeof window < "u" ? RS(r) : NS(r);
}
let qS = class extends js {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, FS = class extends js {
  constructor(e, t) {
    super(), this.core = e, this.logger = t, this.records = /* @__PURE__ */ new Map();
  }
}, BS = class {
  constructor(e, t) {
    this.logger = e, this.core = t;
  }
}, LS = class extends js {
  constructor(e, t) {
    super(), this.relayer = e, this.logger = t;
  }
}, US = class extends js {
  constructor(e) {
    super();
  }
}, zS = class {
  constructor(e, t, i, s) {
    this.core = e, this.logger = t, this.name = i;
  }
}, jS = class extends js {
  constructor(e, t) {
    super(), this.relayer = e, this.logger = t;
  }
}, $S = class extends js {
  constructor(e, t) {
    super(), this.core = e, this.logger = t;
  }
}, kS = class {
  constructor(e, t, i) {
    this.core = e, this.logger = t, this.store = i;
  }
}, HS = class {
  constructor(e, t) {
    this.projectId = e, this.logger = t;
  }
}, KS = class {
  constructor(e, t, i) {
    this.core = e, this.logger = t, this.telemetryEnabled = i;
  }
}, VS = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, GS = class {
  constructor(e) {
    this.client = e;
  }
};
const WS = "PARSE_ERROR", JS = "INVALID_REQUEST", YS = "METHOD_NOT_FOUND", QS = "INVALID_PARAMS", o2 = "INTERNAL_ERROR", cd = "SERVER_ERROR", XS = [-32700, -32600, -32601, -32602, -32603], _o = {
  [WS]: { code: -32700, message: "Parse error" },
  [JS]: { code: -32600, message: "Invalid Request" },
  [YS]: { code: -32601, message: "Method not found" },
  [QS]: { code: -32602, message: "Invalid params" },
  [o2]: { code: -32603, message: "Internal error" },
  [cd]: { code: -32e3, message: "Server error" }
}, c2 = cd;
function ZS(r) {
  return XS.includes(r);
}
function Ug(r) {
  return Object.keys(_o).includes(r) ? _o[r] : _o[c2];
}
function eM(r) {
  const e = Object.values(_o).find((t) => t.code === r);
  return e || _o[c2];
}
function u2(r, e, t) {
  return r.message.includes("getaddrinfo ENOTFOUND") || r.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${t} RPC url at ${e}`) : r;
}
var dl = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Fl = function(r, e) {
  return Fl = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var s in i) i.hasOwnProperty(s) && (t[s] = i[s]);
  }, Fl(r, e);
};
function tM(r, e) {
  Fl(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Bl = function() {
  return Bl = Object.assign || function(e) {
    for (var t, i = 1, s = arguments.length; i < s; i++) {
      t = arguments[i];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Bl.apply(this, arguments);
};
function rM(r, e) {
  var t = {};
  for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && e.indexOf(i) < 0 && (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(r); s < i.length; s++)
      e.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[s]) && (t[i[s]] = r[i[s]]);
  return t;
}
function iM(r, e, t, i) {
  var s = arguments.length, a = s < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, f;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(r, e, t, i);
  else for (var h = r.length - 1; h >= 0; h--) (f = r[h]) && (a = (s < 3 ? f(a) : s > 3 ? f(e, t, a) : f(e, t)) || a);
  return s > 3 && a && Object.defineProperty(e, t, a), a;
}
function nM(r, e) {
  return function(t, i) {
    e(t, i, r);
  };
}
function sM(r, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(r, e);
}
function aM(r, e, t, i) {
  function s(a) {
    return a instanceof t ? a : new t(function(f) {
      f(a);
    });
  }
  return new (t || (t = Promise))(function(a, f) {
    function h(m) {
      try {
        u(i.next(m));
      } catch (A) {
        f(A);
      }
    }
    function p(m) {
      try {
        u(i.throw(m));
      } catch (A) {
        f(A);
      }
    }
    function u(m) {
      m.done ? a(m.value) : s(m.value).then(h, p);
    }
    u((i = i.apply(r, e || [])).next());
  });
}
function oM(r, e) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, i, s, a, f;
  return f = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
    return this;
  }), f;
  function h(u) {
    return function(m) {
      return p([u, m]);
    };
  }
  function p(u) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (i = 1, s && (a = u[0] & 2 ? s.return : u[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) && !(a = a.call(s, u[1])).done) return a;
      switch (s = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
        case 0:
        case 1:
          a = u;
          break;
        case 4:
          return t.label++, { value: u[1], done: !1 };
        case 5:
          t.label++, s = u[1], u = [0];
          continue;
        case 7:
          u = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            t = 0;
            continue;
          }
          if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
            t.label = u[1];
            break;
          }
          if (u[0] === 6 && t.label < a[1]) {
            t.label = a[1], a = u;
            break;
          }
          if (a && t.label < a[2]) {
            t.label = a[2], t.ops.push(u);
            break;
          }
          a[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      u = e.call(r, t);
    } catch (m) {
      u = [6, m], s = 0;
    } finally {
      i = a = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function cM(r, e, t, i) {
  i === void 0 && (i = t), r[i] = e[t];
}
function uM(r, e) {
  for (var t in r) t !== "default" && !e.hasOwnProperty(t) && (e[t] = r[t]);
}
function Ll(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], i = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function f2(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t) return r;
  var i = t.call(r), s, a = [], f;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = i.next()).done; ) a.push(s.value);
  } catch (h) {
    f = { error: h };
  } finally {
    try {
      s && !s.done && (t = i.return) && t.call(i);
    } finally {
      if (f) throw f.error;
    }
  }
  return a;
}
function fM() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(f2(arguments[e]));
  return r;
}
function hM() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++) r += arguments[e].length;
  for (var i = Array(r), s = 0, e = 0; e < t; e++)
    for (var a = arguments[e], f = 0, h = a.length; f < h; f++, s++)
      i[s] = a[f];
  return i;
}
function Do(r) {
  return this instanceof Do ? (this.v = r, this) : new Do(r);
}
function lM(r, e, t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(r, e || []), s, a = [];
  return s = {}, f("next"), f("throw"), f("return"), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function f(M) {
    i[M] && (s[M] = function(I) {
      return new Promise(function(C, R) {
        a.push([M, I, C, R]) > 1 || h(M, I);
      });
    });
  }
  function h(M, I) {
    try {
      p(i[M](I));
    } catch (C) {
      A(a[0][3], C);
    }
  }
  function p(M) {
    M.value instanceof Do ? Promise.resolve(M.value.v).then(u, m) : A(a[0][2], M);
  }
  function u(M) {
    h("next", M);
  }
  function m(M) {
    h("throw", M);
  }
  function A(M, I) {
    M(I), a.shift(), a.length && h(a[0][0], a[0][1]);
  }
}
function dM(r) {
  var e, t;
  return e = {}, i("next"), i("throw", function(s) {
    throw s;
  }), i("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function i(s, a) {
    e[s] = r[s] ? function(f) {
      return (t = !t) ? { value: Do(r[s](f)), done: s === "return" } : a ? a(f) : f;
    } : a;
  }
}
function pM(r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = r[Symbol.asyncIterator], t;
  return e ? e.call(r) : (r = typeof Ll == "function" ? Ll(r) : r[Symbol.iterator](), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function i(a) {
    t[a] = r[a] && function(f) {
      return new Promise(function(h, p) {
        f = r[a](f), s(h, p, f.done, f.value);
      });
    };
  }
  function s(a, f, h, p) {
    Promise.resolve(p).then(function(u) {
      a({ value: u, done: h });
    }, f);
  }
}
function gM(r, e) {
  return Object.defineProperty ? Object.defineProperty(r, "raw", { value: e }) : r.raw = e, r;
}
function vM(r) {
  if (r && r.__esModule) return r;
  var e = {};
  if (r != null) for (var t in r) Object.hasOwnProperty.call(r, t) && (e[t] = r[t]);
  return e.default = r, e;
}
function bM(r) {
  return r && r.__esModule ? r : { default: r };
}
function mM(r, e) {
  if (!e.has(r))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(r);
}
function yM(r, e, t) {
  if (!e.has(r))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(r, t), t;
}
const wM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Bl;
  },
  __asyncDelegator: dM,
  __asyncGenerator: lM,
  __asyncValues: pM,
  __await: Do,
  __awaiter: aM,
  __classPrivateFieldGet: mM,
  __classPrivateFieldSet: yM,
  __createBinding: cM,
  __decorate: iM,
  __exportStar: uM,
  __extends: tM,
  __generator: oM,
  __importDefault: bM,
  __importStar: vM,
  __makeTemplateObject: gM,
  __metadata: sM,
  __param: nM,
  __read: f2,
  __rest: rM,
  __spread: fM,
  __spreadArrays: hM,
  __values: Ll
}, Symbol.toStringTag, { value: "Module" })), _M = /* @__PURE__ */ Uv(wM);
var Bn = {}, zg;
function AM() {
  if (zg) return Bn;
  zg = 1, Object.defineProperty(Bn, "__esModule", { value: !0 }), Bn.isBrowserCryptoAvailable = Bn.getSubtleCrypto = Bn.getBrowerCrypto = void 0;
  function r() {
    return (ii === null || ii === void 0 ? void 0 : ii.crypto) || (ii === null || ii === void 0 ? void 0 : ii.msCrypto) || {};
  }
  Bn.getBrowerCrypto = r;
  function e() {
    const i = r();
    return i.subtle || i.webkitSubtle;
  }
  Bn.getSubtleCrypto = e;
  function t() {
    return !!r() && !!e();
  }
  return Bn.isBrowserCryptoAvailable = t, Bn;
}
var Ln = {}, jg;
function EM() {
  if (jg) return Ln;
  jg = 1, Object.defineProperty(Ln, "__esModule", { value: !0 }), Ln.isBrowser = Ln.isNode = Ln.isReactNative = void 0;
  function r() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  Ln.isReactNative = r;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  Ln.isNode = e;
  function t() {
    return !r() && !e();
  }
  return Ln.isBrowser = t, Ln;
}
var $g;
function xM() {
  return $g || ($g = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 });
    const e = _M;
    e.__exportStar(AM(), r), e.__exportStar(EM(), r);
  }(dl)), dl;
}
var SM = xM();
function as(r = 3) {
  const e = Date.now() * Math.pow(10, r), t = Math.floor(Math.random() * Math.pow(10, r));
  return e + t;
}
function Ts(r = 6) {
  return BigInt(as(r));
}
function fs(r, e, t) {
  return {
    id: t || as(),
    jsonrpc: "2.0",
    method: r,
    params: e
  };
}
function Uu(r, e) {
  return {
    id: r,
    jsonrpc: "2.0",
    result: e
  };
}
function zu(r, e, t) {
  return {
    id: r,
    jsonrpc: "2.0",
    error: MM(e)
  };
}
function MM(r, e) {
  return typeof r > "u" ? Ug(o2) : (typeof r == "string" && (r = Object.assign(Object.assign({}, Ug(cd)), { message: r })), ZS(r.code) && (r = eM(r.code)), r);
}
class IM {
}
class DM extends IM {
  constructor() {
    super();
  }
}
class PM extends DM {
  constructor(e) {
    super();
  }
}
const CM = "^https?:", OM = "^wss?:";
function RM(r) {
  const e = r.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function h2(r, e) {
  const t = RM(r);
  return typeof t > "u" ? !1 : new RegExp(e).test(t);
}
function kg(r) {
  return h2(r, CM);
}
function Hg(r) {
  return h2(r, OM);
}
function NM(r) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(r);
}
function l2(r) {
  return typeof r == "object" && "id" in r && "jsonrpc" in r && r.jsonrpc === "2.0";
}
function ud(r) {
  return l2(r) && "method" in r;
}
function ju(r) {
  return l2(r) && (dn(r) || Oi(r));
}
function dn(r) {
  return "result" in r;
}
function Oi(r) {
  return "error" in r;
}
let en = class extends PM {
  constructor(e) {
    super(e), this.events = new gi.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
  }
  async connect(e = this.connection) {
    await this.open(e);
  }
  async disconnect() {
    await this.close();
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async request(e, t) {
    return this.requestStrict(fs(e.method, e.params || [], e.id || Ts().toString()), t);
  }
  async requestStrict(e, t) {
    return new Promise(async (i, s) => {
      if (!this.connection.connected) try {
        await this.open();
      } catch (a) {
        s(a);
      }
      this.events.on(`${e.id}`, (a) => {
        Oi(a) ? s(a.error) : i(a.result);
      });
      try {
        await this.connection.send(e, t);
      } catch (a) {
        s(a);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e), ju(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", { type: e.method, data: e.params });
  }
  onClose(e) {
    e && e.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason ? `(${e.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(e = this.connection) {
    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), typeof e == "string" && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (e) => this.onPayload(e)), this.connection.on("close", (e) => this.onClose(e)), this.connection.on("error", (e) => this.events.emit("error", e)), this.connection.on("register_error", (e) => this.onClose()), this.hasRegisteredEventListeners = !0);
  }
};
const TM = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), qM = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Kg = (r) => r.split("?")[0], Vg = 10, FM = TM();
let BM = class {
  constructor(e) {
    if (this.url = e, this.events = new gi.EventEmitter(), this.registering = !1, !Hg(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    this.url = e;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    return new Promise((e, t) => {
      if (typeof this.socket > "u") {
        t(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (i) => {
        this.onClose(i), e();
      }, this.socket.close();
    });
  }
  async send(e) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(Kn(e));
    } catch (t) {
      this.onError(e.id, t);
    }
  }
  register(e = this.url) {
    if (!Hg(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((i, s) => {
        this.events.once("register_error", (a) => {
          this.resetMaxListeners(), s(a);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u") return s(new Error("WebSocket connection is missing or invalid"));
          i(this.socket);
        });
      });
    }
    return this.url = e, this.registering = !0, new Promise((t, i) => {
      const s = new URLSearchParams(e).get("origin"), a = SM.isReactNative() ? { headers: { origin: s } } : { rejectUnauthorized: !NM(e) }, f = new FM(e, [], a);
      qM() ? f.onerror = (h) => {
        const p = h;
        i(this.emitError(p.error));
      } : f.on("error", (h) => {
        i(this.emitError(h));
      }), f.onopen = () => {
        this.onOpen(f), t(f);
      };
    });
  }
  onOpen(e) {
    e.onmessage = (t) => this.onPayload(t), e.onclose = (t) => this.onClose(t), this.socket = e, this.registering = !1, this.events.emit("open");
  }
  onClose(e) {
    this.socket = void 0, this.registering = !1, this.events.emit("close", e);
  }
  onPayload(e) {
    if (typeof e.data > "u") return;
    const t = typeof e.data == "string" ? Fs(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const i = this.parseError(t), s = i.message || i.toString(), a = zu(e, s);
    this.events.emit("payload", a);
  }
  parseError(e, t = this.url) {
    return u2(e, Kg(t), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Vg && this.events.setMaxListeners(Vg);
  }
  emitError(e) {
    const t = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${Kg(this.url)}`));
    return this.events.emit("register_error", t), t;
  }
};
var vo = { exports: {} };
vo.exports;
var Gg;
function LM() {
  return Gg || (Gg = 1, function(r, e) {
    var t = 200, i = "__lodash_hash_undefined__", s = 1, a = 2, f = 9007199254740991, h = "[object Arguments]", p = "[object Array]", u = "[object AsyncFunction]", m = "[object Boolean]", A = "[object Date]", M = "[object Error]", I = "[object Function]", C = "[object GeneratorFunction]", R = "[object Map]", L = "[object Number]", K = "[object Null]", F = "[object Object]", V = "[object Promise]", B = "[object Proxy]", z = "[object RegExp]", q = "[object Set]", E = "[object String]", U = "[object Symbol]", ee = "[object Undefined]", ae = "[object WeakMap]", j = "[object ArrayBuffer]", w = "[object DataView]", c = "[object Float32Array]", d = "[object Float64Array]", l = "[object Int8Array]", b = "[object Int16Array]", _ = "[object Int32Array]", D = "[object Uint8Array]", x = "[object Uint8ClampedArray]", g = "[object Uint16Array]", y = "[object Uint32Array]", N = /[\\^$.*+?()[\]{}|]/g, Q = /^\[object .+?Constructor\]$/, Z = /^(?:0|[1-9]\d*)$/, O = {};
    O[c] = O[d] = O[l] = O[b] = O[_] = O[D] = O[x] = O[g] = O[y] = !0, O[h] = O[p] = O[j] = O[m] = O[w] = O[A] = O[M] = O[I] = O[R] = O[L] = O[F] = O[z] = O[q] = O[E] = O[ae] = !1;
    var te = typeof ii == "object" && ii && ii.Object === Object && ii, k = typeof self == "object" && self && self.Object === Object && self, W = te || k || Function("return this")(), J = e && !e.nodeType && e, S = J && !0 && r && !r.nodeType && r, G = S && S.exports === J, oe = G && te.process, ce = function() {
      try {
        return oe && oe.binding && oe.binding("util");
      } catch {
      }
    }(), fe = ce && ce.isTypedArray;
    function be(Y, ie) {
      for (var pe = -1, Ue = Y == null ? 0 : Y.length, $t = 0, pt = []; ++pe < Ue; ) {
        var Wt = Y[pe];
        ie(Wt, pe, Y) && (pt[$t++] = Wt);
      }
      return pt;
    }
    function we(Y, ie) {
      for (var pe = -1, Ue = ie.length, $t = Y.length; ++pe < Ue; )
        Y[$t + pe] = ie[pe];
      return Y;
    }
    function Ie(Y, ie) {
      for (var pe = -1, Ue = Y == null ? 0 : Y.length; ++pe < Ue; )
        if (ie(Y[pe], pe, Y))
          return !0;
      return !1;
    }
    function Je(Y, ie) {
      for (var pe = -1, Ue = Array(Y); ++pe < Y; )
        Ue[pe] = ie(pe);
      return Ue;
    }
    function Ce(Y) {
      return function(ie) {
        return Y(ie);
      };
    }
    function Te(Y, ie) {
      return Y.has(ie);
    }
    function Se(Y, ie) {
      return Y == null ? void 0 : Y[ie];
    }
    function me(Y) {
      var ie = -1, pe = Array(Y.size);
      return Y.forEach(function(Ue, $t) {
        pe[++ie] = [$t, Ue];
      }), pe;
    }
    function Oe(Y, ie) {
      return function(pe) {
        return Y(ie(pe));
      };
    }
    function Re(Y) {
      var ie = -1, pe = Array(Y.size);
      return Y.forEach(function(Ue) {
        pe[++ie] = Ue;
      }), pe;
    }
    var ve = Array.prototype, Ne = Function.prototype, Ee = Object.prototype, ye = W["__core-js_shared__"], Le = Ne.toString, De = Ee.hasOwnProperty, _e = function() {
      var Y = /[^.]+$/.exec(ye && ye.keys && ye.keys.IE_PROTO || "");
      return Y ? "Symbol(src)_1." + Y : "";
    }(), He = Ee.toString, Ve = RegExp(
      "^" + Le.call(De).replace(N, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), xe = G ? W.Buffer : void 0, Ke = W.Symbol, ht = W.Uint8Array, Ge = Ee.propertyIsEnumerable, wt = ve.splice, lt = Ke ? Ke.toStringTag : void 0, Ye = Object.getOwnPropertySymbols, Et = xe ? xe.isBuffer : void 0, Mt = Oe(Object.keys, Object), qe = ai(W, "DataView"), Xe = ai(W, "Map"), tt = ai(W, "Promise"), Fe = ai(W, "Set"), et = ai(W, "WeakMap"), Ze = ai(Object, "create"), ze = Mn(qe), ut = Mn(Xe), rt = Mn(tt), je = Mn(Fe), it = Mn(et), st = Ke ? Ke.prototype : void 0, Be = st ? st.valueOf : void 0;
    function Qe(Y) {
      var ie = -1, pe = Y == null ? 0 : Y.length;
      for (this.clear(); ++ie < pe; ) {
        var Ue = Y[ie];
        this.set(Ue[0], Ue[1]);
      }
    }
    function ft() {
      this.__data__ = Ze ? Ze(null) : {}, this.size = 0;
    }
    function $e(Y) {
      var ie = this.has(Y) && delete this.__data__[Y];
      return this.size -= ie ? 1 : 0, ie;
    }
    function Rt(Y) {
      var ie = this.__data__;
      if (Ze) {
        var pe = ie[Y];
        return pe === i ? void 0 : pe;
      }
      return De.call(ie, Y) ? ie[Y] : void 0;
    }
    function Nt(Y) {
      var ie = this.__data__;
      return Ze ? ie[Y] !== void 0 : De.call(ie, Y);
    }
    function at(Y, ie) {
      var pe = this.__data__;
      return this.size += this.has(Y) ? 0 : 1, pe[Y] = Ze && ie === void 0 ? i : ie, this;
    }
    Qe.prototype.clear = ft, Qe.prototype.delete = $e, Qe.prototype.get = Rt, Qe.prototype.has = Nt, Qe.prototype.set = at;
    function bt(Y) {
      var ie = -1, pe = Y == null ? 0 : Y.length;
      for (this.clear(); ++ie < pe; ) {
        var Ue = Y[ie];
        this.set(Ue[0], Ue[1]);
      }
    }
    function Ir() {
      this.__data__ = [], this.size = 0;
    }
    function Dr(Y) {
      var ie = this.__data__, pe = ls(ie, Y);
      if (pe < 0)
        return !1;
      var Ue = ie.length - 1;
      return pe == Ue ? ie.pop() : wt.call(ie, pe, 1), --this.size, !0;
    }
    function Pr(Y) {
      var ie = this.__data__, pe = ls(ie, Y);
      return pe < 0 ? void 0 : ie[pe][1];
    }
    function Cr(Y) {
      return ls(this.__data__, Y) > -1;
    }
    function Or(Y, ie) {
      var pe = this.__data__, Ue = ls(pe, Y);
      return Ue < 0 ? (++this.size, pe.push([Y, ie])) : pe[Ue][1] = ie, this;
    }
    bt.prototype.clear = Ir, bt.prototype.delete = Dr, bt.prototype.get = Pr, bt.prototype.has = Cr, bt.prototype.set = Or;
    function Zt(Y) {
      var ie = -1, pe = Y == null ? 0 : Y.length;
      for (this.clear(); ++ie < pe; ) {
        var Ue = Y[ie];
        this.set(Ue[0], Ue[1]);
      }
    }
    function Kr() {
      this.size = 0, this.__data__ = {
        hash: new Qe(),
        map: new (Xe || bt)(),
        string: new Qe()
      };
    }
    function Ti(Y) {
      var ie = Gn(this, Y).delete(Y);
      return this.size -= ie ? 1 : 0, ie;
    }
    function Vr(Y) {
      return Gn(this, Y).get(Y);
    }
    function qi(Y) {
      return Gn(this, Y).has(Y);
    }
    function Fi(Y, ie) {
      var pe = Gn(this, Y), Ue = pe.size;
      return pe.set(Y, ie), this.size += pe.size == Ue ? 0 : 1, this;
    }
    Zt.prototype.clear = Kr, Zt.prototype.delete = Ti, Zt.prototype.get = Vr, Zt.prototype.has = qi, Zt.prototype.set = Fi;
    function Gr(Y) {
      var ie = -1, pe = Y == null ? 0 : Y.length;
      for (this.__data__ = new Zt(); ++ie < pe; )
        this.add(Y[ie]);
    }
    function vi(Y) {
      return this.__data__.set(Y, i), this;
    }
    function bi(Y) {
      return this.__data__.has(Y);
    }
    Gr.prototype.add = Gr.prototype.push = vi, Gr.prototype.has = bi;
    function fr(Y) {
      var ie = this.__data__ = new bt(Y);
      this.size = ie.size;
    }
    function Bi() {
      this.__data__ = new bt(), this.size = 0;
    }
    function Li(Y) {
      var ie = this.__data__, pe = ie.delete(Y);
      return this.size = ie.size, pe;
    }
    function Ui(Y) {
      return this.__data__.get(Y);
    }
    function hs(Y) {
      return this.__data__.has(Y);
    }
    function $o(Y, ie) {
      var pe = this.__data__;
      if (pe instanceof bt) {
        var Ue = pe.__data__;
        if (!Xe || Ue.length < t - 1)
          return Ue.push([Y, ie]), this.size = ++pe.size, this;
        pe = this.__data__ = new Zt(Ue);
      }
      return pe.set(Y, ie), this.size = pe.size, this;
    }
    fr.prototype.clear = Bi, fr.prototype.delete = Li, fr.prototype.get = Ui, fr.prototype.has = hs, fr.prototype.set = $o;
    function ko(Y, ie) {
      var pe = Ws(Y), Ue = !pe && tc(Y), $t = !pe && !Ue && Ra(Y), pt = !pe && !Ue && !$t && nc(Y), Wt = pe || Ue || $t || pt, cr = Wt ? Je(Y.length, String) : [], Ct = cr.length;
      for (var kt in Y)
        De.call(Y, kt) && !(Wt && // Safari 9 has enumerable `arguments.length` in strict mode.
        (kt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        $t && (kt == "offset" || kt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        pt && (kt == "buffer" || kt == "byteLength" || kt == "byteOffset") || // Skip index properties.
        Yo(kt, Ct))) && cr.push(kt);
      return cr;
    }
    function ls(Y, ie) {
      for (var pe = Y.length; pe--; )
        if (ec(Y[pe][0], ie))
          return pe;
      return -1;
    }
    function Ca(Y, ie, pe) {
      var Ue = ie(Y);
      return Ws(Y) ? Ue : we(Ue, pe(Y));
    }
    function ds(Y) {
      return Y == null ? Y === void 0 ? ee : K : lt && lt in Object(Y) ? Wo(Y) : Vu(Y);
    }
    function Oa(Y) {
      return gs(Y) && ds(Y) == h;
    }
    function ps(Y, ie, pe, Ue, $t) {
      return Y === ie ? !0 : Y == null || ie == null || !gs(Y) && !gs(ie) ? Y !== Y && ie !== ie : Ho(Y, ie, pe, Ue, ps, $t);
    }
    function Ho(Y, ie, pe, Ue, $t, pt) {
      var Wt = Ws(Y), cr = Ws(ie), Ct = Wt ? p : rn(Y), kt = cr ? p : rn(ie);
      Ct = Ct == h ? F : Ct, kt = kt == h ? F : kt;
      var ir = Ct == F, Wr = kt == F, ur = Ct == kt;
      if (ur && Ra(Y)) {
        if (!Ra(ie))
          return !1;
        Wt = !0, ir = !1;
      }
      if (ur && !ir)
        return pt || (pt = new fr()), Wt || nc(Y) ? Vs(Y, ie, pe, Ue, $t, pt) : Ku(Y, ie, Ct, pe, Ue, $t, pt);
      if (!(pe & s)) {
        var Jt = ir && De.call(Y, "__wrapped__"), qr = Wr && De.call(ie, "__wrapped__");
        if (Jt || qr) {
          var zi = Jt ? Y.value() : Y, mi = qr ? ie.value() : ie;
          return pt || (pt = new fr()), $t(zi, mi, pe, Ue, pt);
        }
      }
      return ur ? (pt || (pt = new fr()), Go(Y, ie, pe, Ue, $t, pt)) : !1;
    }
    function Hu(Y) {
      if (!ic(Y) || Xo(Y))
        return !1;
      var ie = Js(Y) ? Ve : Q;
      return ie.test(Mn(Y));
    }
    function Ko(Y) {
      return gs(Y) && rc(Y.length) && !!O[ds(Y)];
    }
    function Vo(Y) {
      if (!Zo(Y))
        return Mt(Y);
      var ie = [];
      for (var pe in Object(Y))
        De.call(Y, pe) && pe != "constructor" && ie.push(pe);
      return ie;
    }
    function Vs(Y, ie, pe, Ue, $t, pt) {
      var Wt = pe & s, cr = Y.length, Ct = ie.length;
      if (cr != Ct && !(Wt && Ct > cr))
        return !1;
      var kt = pt.get(Y);
      if (kt && pt.get(ie))
        return kt == ie;
      var ir = -1, Wr = !0, ur = pe & a ? new Gr() : void 0;
      for (pt.set(Y, ie), pt.set(ie, Y); ++ir < cr; ) {
        var Jt = Y[ir], qr = ie[ir];
        if (Ue)
          var zi = Wt ? Ue(qr, Jt, ir, ie, Y, pt) : Ue(Jt, qr, ir, Y, ie, pt);
        if (zi !== void 0) {
          if (zi)
            continue;
          Wr = !1;
          break;
        }
        if (ur) {
          if (!Ie(ie, function(mi, nn) {
            if (!Te(ur, nn) && (Jt === mi || $t(Jt, mi, pe, Ue, pt)))
              return ur.push(nn);
          })) {
            Wr = !1;
            break;
          }
        } else if (!(Jt === qr || $t(Jt, qr, pe, Ue, pt))) {
          Wr = !1;
          break;
        }
      }
      return pt.delete(Y), pt.delete(ie), Wr;
    }
    function Ku(Y, ie, pe, Ue, $t, pt, Wt) {
      switch (pe) {
        case w:
          if (Y.byteLength != ie.byteLength || Y.byteOffset != ie.byteOffset)
            return !1;
          Y = Y.buffer, ie = ie.buffer;
        case j:
          return !(Y.byteLength != ie.byteLength || !pt(new ht(Y), new ht(ie)));
        case m:
        case A:
        case L:
          return ec(+Y, +ie);
        case M:
          return Y.name == ie.name && Y.message == ie.message;
        case z:
        case E:
          return Y == ie + "";
        case R:
          var cr = me;
        case q:
          var Ct = Ue & s;
          if (cr || (cr = Re), Y.size != ie.size && !Ct)
            return !1;
          var kt = Wt.get(Y);
          if (kt)
            return kt == ie;
          Ue |= a, Wt.set(Y, ie);
          var ir = Vs(cr(Y), cr(ie), Ue, $t, pt, Wt);
          return Wt.delete(Y), ir;
        case U:
          if (Be)
            return Be.call(Y) == Be.call(ie);
      }
      return !1;
    }
    function Go(Y, ie, pe, Ue, $t, pt) {
      var Wt = pe & s, cr = Gs(Y), Ct = cr.length, kt = Gs(ie), ir = kt.length;
      if (Ct != ir && !Wt)
        return !1;
      for (var Wr = Ct; Wr--; ) {
        var ur = cr[Wr];
        if (!(Wt ? ur in ie : De.call(ie, ur)))
          return !1;
      }
      var Jt = pt.get(Y);
      if (Jt && pt.get(ie))
        return Jt == ie;
      var qr = !0;
      pt.set(Y, ie), pt.set(ie, Y);
      for (var zi = Wt; ++Wr < Ct; ) {
        ur = cr[Wr];
        var mi = Y[ur], nn = ie[ur];
        if (Ue)
          var Na = Wt ? Ue(nn, mi, ur, ie, Y, pt) : Ue(mi, nn, ur, Y, ie, pt);
        if (!(Na === void 0 ? mi === nn || $t(mi, nn, pe, Ue, pt) : Na)) {
          qr = !1;
          break;
        }
        zi || (zi = ur == "constructor");
      }
      if (qr && !zi) {
        var vs = Y.constructor, gr = ie.constructor;
        vs != gr && "constructor" in Y && "constructor" in ie && !(typeof vs == "function" && vs instanceof vs && typeof gr == "function" && gr instanceof gr) && (qr = !1);
      }
      return pt.delete(Y), pt.delete(ie), qr;
    }
    function Gs(Y) {
      return Ca(Y, Ju, Jo);
    }
    function Gn(Y, ie) {
      var pe = Y.__data__;
      return Qo(ie) ? pe[typeof ie == "string" ? "string" : "hash"] : pe.map;
    }
    function ai(Y, ie) {
      var pe = Se(Y, ie);
      return Hu(pe) ? pe : void 0;
    }
    function Wo(Y) {
      var ie = De.call(Y, lt), pe = Y[lt];
      try {
        Y[lt] = void 0;
        var Ue = !0;
      } catch {
      }
      var $t = He.call(Y);
      return Ue && (ie ? Y[lt] = pe : delete Y[lt]), $t;
    }
    var Jo = Ye ? function(Y) {
      return Y == null ? [] : (Y = Object(Y), be(Ye(Y), function(ie) {
        return Ge.call(Y, ie);
      }));
    } : jt, rn = ds;
    (qe && rn(new qe(new ArrayBuffer(1))) != w || Xe && rn(new Xe()) != R || tt && rn(tt.resolve()) != V || Fe && rn(new Fe()) != q || et && rn(new et()) != ae) && (rn = function(Y) {
      var ie = ds(Y), pe = ie == F ? Y.constructor : void 0, Ue = pe ? Mn(pe) : "";
      if (Ue)
        switch (Ue) {
          case ze:
            return w;
          case ut:
            return R;
          case rt:
            return V;
          case je:
            return q;
          case it:
            return ae;
        }
      return ie;
    });
    function Yo(Y, ie) {
      return ie = ie ?? f, !!ie && (typeof Y == "number" || Z.test(Y)) && Y > -1 && Y % 1 == 0 && Y < ie;
    }
    function Qo(Y) {
      var ie = typeof Y;
      return ie == "string" || ie == "number" || ie == "symbol" || ie == "boolean" ? Y !== "__proto__" : Y === null;
    }
    function Xo(Y) {
      return !!_e && _e in Y;
    }
    function Zo(Y) {
      var ie = Y && Y.constructor, pe = typeof ie == "function" && ie.prototype || Ee;
      return Y === pe;
    }
    function Vu(Y) {
      return He.call(Y);
    }
    function Mn(Y) {
      if (Y != null) {
        try {
          return Le.call(Y);
        } catch {
        }
        try {
          return Y + "";
        } catch {
        }
      }
      return "";
    }
    function ec(Y, ie) {
      return Y === ie || Y !== Y && ie !== ie;
    }
    var tc = Oa(/* @__PURE__ */ function() {
      return arguments;
    }()) ? Oa : function(Y) {
      return gs(Y) && De.call(Y, "callee") && !Ge.call(Y, "callee");
    }, Ws = Array.isArray;
    function Gu(Y) {
      return Y != null && rc(Y.length) && !Js(Y);
    }
    var Ra = Et || Ut;
    function Wu(Y, ie) {
      return ps(Y, ie);
    }
    function Js(Y) {
      if (!ic(Y))
        return !1;
      var ie = ds(Y);
      return ie == I || ie == C || ie == u || ie == B;
    }
    function rc(Y) {
      return typeof Y == "number" && Y > -1 && Y % 1 == 0 && Y <= f;
    }
    function ic(Y) {
      var ie = typeof Y;
      return Y != null && (ie == "object" || ie == "function");
    }
    function gs(Y) {
      return Y != null && typeof Y == "object";
    }
    var nc = fe ? Ce(fe) : Ko;
    function Ju(Y) {
      return Gu(Y) ? ko(Y) : Vo(Y);
    }
    function jt() {
      return [];
    }
    function Ut() {
      return !1;
    }
    r.exports = Wu;
  }(vo, vo.exports)), vo.exports;
}
var UM = LM();
const zM = /* @__PURE__ */ Cu(UM), d2 = "wc", p2 = 2, fd = "core", An = `${d2}@2:${fd}:`, jM = { name: fd, logger: "error" }, $M = { database: ":memory:" }, kM = "crypto", Wg = "client_ed25519_seed", HM = Me.ONE_DAY, KM = "keychain", VM = "0.3", GM = "messages", WM = "0.3", JM = Me.SIX_HOURS, YM = "publisher", g2 = "irn", QM = "error", v2 = "wss://relay.walletconnect.org", XM = "relayer", zr = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, ZM = "_subscription", Di = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, eI = 0.1, Ul = "2.17.0", Vt = { link_mode: "link_mode", relay: "relay" }, tI = "0.3", rI = "WALLETCONNECT_CLIENT_ID", Jg = "WALLETCONNECT_LINK_MODE_APPS", pn = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, iI = "subscription", nI = "0.3", sI = Me.FIVE_SECONDS * 1e3, aI = "pairing", oI = "0.3", oo = { wc_pairingDelete: { req: { ttl: Me.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: Me.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: Me.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: Me.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: Me.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: Me.ONE_DAY, prompt: !1, tag: 0 } } }, Rs = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, Vi = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, cI = "history", uI = "0.3", fI = "expirer", Pi = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, hI = "0.3", lI = "verify-api", dI = "https://verify.walletconnect.com", b2 = "https://verify.walletconnect.org", Ao = b2, pI = `${Ao}/v3`, gI = [dI, b2], vI = "echo", bI = "https://echo.walletconnect.com", fn = { pairing_started: "pairing_started", pairing_uri_validation_success: "pairing_uri_validation_success", pairing_uri_not_expired: "pairing_uri_not_expired", store_new_pairing: "store_new_pairing", subscribing_pairing_topic: "subscribing_pairing_topic", subscribe_pairing_topic_success: "subscribe_pairing_topic_success", existing_pairing: "existing_pairing", pairing_not_expired: "pairing_not_expired", emit_inactive_pairing: "emit_inactive_pairing", emit_session_proposal: "emit_session_proposal", subscribing_to_pairing_topic: "subscribing_to_pairing_topic" }, Un = { no_wss_connection: "no_wss_connection", no_internet_connection: "no_internet_connection", malformed_pairing_uri: "malformed_pairing_uri", active_pairing_already_exists: "active_pairing_already_exists", subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure", pairing_expired: "pairing_expired", proposal_expired: "proposal_expired", proposal_listener_not_found: "proposal_listener_not_found" }, Gi = { session_approve_started: "session_approve_started", proposal_not_expired: "proposal_not_expired", session_namespaces_validation_success: "session_namespaces_validation_success", create_session_topic: "create_session_topic", subscribing_session_topic: "subscribing_session_topic", subscribe_session_topic_success: "subscribe_session_topic_success", publishing_session_approve: "publishing_session_approve", session_approve_publish_success: "session_approve_publish_success", store_session: "store_session", publishing_session_settle: "publishing_session_settle", session_settle_publish_success: "session_settle_publish_success" }, Ps = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", proposal_expired: "proposal_expired", subscribe_session_topic_failure: "subscribe_session_topic_failure", session_approve_publish_failure: "session_approve_publish_failure", session_settle_publish_failure: "session_settle_publish_failure", session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure", proposal_not_found: "proposal_not_found" }, Cs = { authenticated_session_approve_started: "authenticated_session_approve_started", authenticated_session_not_expired: "authenticated_session_not_expired", chains_caip2_compliant: "chains_caip2_compliant", chains_evm_compliant: "chains_evm_compliant", create_authenticated_session_topic: "create_authenticated_session_topic", cacaos_verified: "cacaos_verified", store_authenticated_session: "store_authenticated_session", subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic", subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success", publishing_authenticated_session_approve: "publishing_authenticated_session_approve", authenticated_session_approve_publish_success: "authenticated_session_approve_publish_success" }, co = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", missing_session_authenticate_request: "missing_session_authenticate_request", session_authenticate_request_expired: "session_authenticate_request_expired", chains_caip2_compliant_failure: "chains_caip2_compliant_failure", chains_evm_compliant_failure: "chains_evm_compliant_failure", invalid_cacao: "invalid_cacao", subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure", authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure", authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found" }, mI = 0.1, yI = "event-client", wI = 86400, _I = "https://pulse.walletconnect.org/batch";
function AI(r, e) {
  if (r.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i = 0; i < t.length; i++) t[i] = 255;
  for (var s = 0; s < r.length; s++) {
    var a = r.charAt(s), f = a.charCodeAt(0);
    if (t[f] !== 255) throw new TypeError(a + " is ambiguous");
    t[f] = s;
  }
  var h = r.length, p = r.charAt(0), u = Math.log(h) / Math.log(256), m = Math.log(256) / Math.log(h);
  function A(C) {
    if (C instanceof Uint8Array || (ArrayBuffer.isView(C) ? C = new Uint8Array(C.buffer, C.byteOffset, C.byteLength) : Array.isArray(C) && (C = Uint8Array.from(C))), !(C instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (C.length === 0) return "";
    for (var R = 0, L = 0, K = 0, F = C.length; K !== F && C[K] === 0; ) K++, R++;
    for (var V = (F - K) * m + 1 >>> 0, B = new Uint8Array(V); K !== F; ) {
      for (var z = C[K], q = 0, E = V - 1; (z !== 0 || q < L) && E !== -1; E--, q++) z += 256 * B[E] >>> 0, B[E] = z % h >>> 0, z = z / h >>> 0;
      if (z !== 0) throw new Error("Non-zero carry");
      L = q, K++;
    }
    for (var U = V - L; U !== V && B[U] === 0; ) U++;
    for (var ee = p.repeat(R); U < V; ++U) ee += r.charAt(B[U]);
    return ee;
  }
  function M(C) {
    if (typeof C != "string") throw new TypeError("Expected String");
    if (C.length === 0) return new Uint8Array();
    var R = 0;
    if (C[R] !== " ") {
      for (var L = 0, K = 0; C[R] === p; ) L++, R++;
      for (var F = (C.length - R) * u + 1 >>> 0, V = new Uint8Array(F); C[R]; ) {
        var B = t[C.charCodeAt(R)];
        if (B === 255) return;
        for (var z = 0, q = F - 1; (B !== 0 || z < K) && q !== -1; q--, z++) B += h * V[q] >>> 0, V[q] = B % 256 >>> 0, B = B / 256 >>> 0;
        if (B !== 0) throw new Error("Non-zero carry");
        K = z, R++;
      }
      if (C[R] !== " ") {
        for (var E = F - K; E !== F && V[E] === 0; ) E++;
        for (var U = new Uint8Array(L + (F - E)), ee = L; E !== F; ) U[ee++] = V[E++];
        return U;
      }
    }
  }
  function I(C) {
    var R = M(C);
    if (R) return R;
    throw new Error(`Non-${e} character`);
  }
  return { encode: A, decodeUnsafe: M, decode: I };
}
var EI = AI, xI = EI;
const m2 = (r) => {
  if (r instanceof Uint8Array && r.constructor.name === "Uint8Array") return r;
  if (r instanceof ArrayBuffer) return new Uint8Array(r);
  if (ArrayBuffer.isView(r)) return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
  throw new Error("Unknown type, must be binary type");
}, SI = (r) => new TextEncoder().encode(r), MI = (r) => new TextDecoder().decode(r);
class II {
  constructor(e, t, i) {
    this.name = e, this.prefix = t, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class DI {
  constructor(e, t, i) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return y2(this, e);
  }
}
class PI {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return y2(this, e);
  }
  decode(e) {
    const t = e[0], i = this.decoders[t];
    if (i) return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const y2 = (r, e) => new PI({ ...r.decoders || { [r.prefix]: r }, ...e.decoders || { [e.prefix]: e } });
class CI {
  constructor(e, t, i, s) {
    this.name = e, this.prefix = t, this.baseEncode = i, this.baseDecode = s, this.encoder = new II(e, t, i), this.decoder = new DI(e, t, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const $u = ({ name: r, prefix: e, encode: t, decode: i }) => new CI(r, e, t, i), jo = ({ prefix: r, name: e, alphabet: t }) => {
  const { encode: i, decode: s } = xI(t, e);
  return $u({ prefix: r, name: e, encode: i, decode: (a) => m2(s(a)) });
}, OI = (r, e, t, i) => {
  const s = {};
  for (let m = 0; m < e.length; ++m) s[e[m]] = m;
  let a = r.length;
  for (; r[a - 1] === "="; ) --a;
  const f = new Uint8Array(a * t / 8 | 0);
  let h = 0, p = 0, u = 0;
  for (let m = 0; m < a; ++m) {
    const A = s[r[m]];
    if (A === void 0) throw new SyntaxError(`Non-${i} character`);
    p = p << t | A, h += t, h >= 8 && (h -= 8, f[u++] = 255 & p >> h);
  }
  if (h >= t || 255 & p << 8 - h) throw new SyntaxError("Unexpected end of data");
  return f;
}, RI = (r, e, t) => {
  const i = e[e.length - 1] === "=", s = (1 << t) - 1;
  let a = "", f = 0, h = 0;
  for (let p = 0; p < r.length; ++p) for (h = h << 8 | r[p], f += 8; f > t; ) f -= t, a += e[s & h >> f];
  if (f && (a += e[s & h << t - f]), i) for (; a.length * t & 7; ) a += "=";
  return a;
}, Mr = ({ name: r, prefix: e, bitsPerChar: t, alphabet: i }) => $u({ prefix: e, name: r, encode(s) {
  return RI(s, i, t);
}, decode(s) {
  return OI(s, i, t, r);
} }), NI = $u({ prefix: "\0", name: "identity", encode: (r) => MI(r), decode: (r) => SI(r) });
var TI = Object.freeze({ __proto__: null, identity: NI });
const qI = Mr({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var FI = Object.freeze({ __proto__: null, base2: qI });
const BI = Mr({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var LI = Object.freeze({ __proto__: null, base8: BI });
const UI = jo({ prefix: "9", name: "base10", alphabet: "0123456789" });
var zI = Object.freeze({ __proto__: null, base10: UI });
const jI = Mr({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), $I = Mr({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var kI = Object.freeze({ __proto__: null, base16: jI, base16upper: $I });
const HI = Mr({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), KI = Mr({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), VI = Mr({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), GI = Mr({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), WI = Mr({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), JI = Mr({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), YI = Mr({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), QI = Mr({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), XI = Mr({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var ZI = Object.freeze({ __proto__: null, base32: HI, base32upper: KI, base32pad: VI, base32padupper: GI, base32hex: WI, base32hexupper: JI, base32hexpad: YI, base32hexpadupper: QI, base32z: XI });
const eD = jo({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), tD = jo({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var rD = Object.freeze({ __proto__: null, base36: eD, base36upper: tD });
const iD = jo({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), nD = jo({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var sD = Object.freeze({ __proto__: null, base58btc: iD, base58flickr: nD });
const aD = Mr({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), oD = Mr({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), cD = Mr({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), uD = Mr({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var fD = Object.freeze({ __proto__: null, base64: aD, base64pad: oD, base64url: cD, base64urlpad: uD });
const w2 = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), hD = w2.reduce((r, e, t) => (r[t] = e, r), []), lD = w2.reduce((r, e, t) => (r[e.codePointAt(0)] = t, r), []);
function dD(r) {
  return r.reduce((e, t) => (e += hD[t], e), "");
}
function pD(r) {
  const e = [];
  for (const t of r) {
    const i = lD[t.codePointAt(0)];
    if (i === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const gD = $u({ prefix: "🚀", name: "base256emoji", encode: dD, decode: pD });
var vD = Object.freeze({ __proto__: null, base256emoji: gD }), bD = _2, Yg = 128, mD = -128, yD = Math.pow(2, 31);
function _2(r, e, t) {
  e = e || [], t = t || 0;
  for (var i = t; r >= yD; ) e[t++] = r & 255 | Yg, r /= 128;
  for (; r & mD; ) e[t++] = r & 255 | Yg, r >>>= 7;
  return e[t] = r | 0, _2.bytes = t - i + 1, e;
}
var wD = zl, _D = 128, Qg = 127;
function zl(r, i) {
  var t = 0, i = i || 0, s = 0, a = i, f, h = r.length;
  do {
    if (a >= h) throw zl.bytes = 0, new RangeError("Could not decode varint");
    f = r[a++], t += s < 28 ? (f & Qg) << s : (f & Qg) * Math.pow(2, s), s += 7;
  } while (f >= _D);
  return zl.bytes = a - i, t;
}
var AD = Math.pow(2, 7), ED = Math.pow(2, 14), xD = Math.pow(2, 21), SD = Math.pow(2, 28), MD = Math.pow(2, 35), ID = Math.pow(2, 42), DD = Math.pow(2, 49), PD = Math.pow(2, 56), CD = Math.pow(2, 63), OD = function(r) {
  return r < AD ? 1 : r < ED ? 2 : r < xD ? 3 : r < SD ? 4 : r < MD ? 5 : r < ID ? 6 : r < DD ? 7 : r < PD ? 8 : r < CD ? 9 : 10;
}, RD = { encode: bD, decode: wD, encodingLength: OD }, A2 = RD;
const Xg = (r, e, t = 0) => (A2.encode(r, e, t), e), Zg = (r) => A2.encodingLength(r), jl = (r, e) => {
  const t = e.byteLength, i = Zg(r), s = i + Zg(t), a = new Uint8Array(s + t);
  return Xg(r, a, 0), Xg(t, a, i), a.set(e, s), new ND(r, t, e, a);
};
class ND {
  constructor(e, t, i, s) {
    this.code = e, this.size = t, this.digest = i, this.bytes = s;
  }
}
const E2 = ({ name: r, code: e, encode: t }) => new TD(r, e, t);
class TD {
  constructor(e, t, i) {
    this.name = e, this.code = t, this.encode = i;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array ? jl(this.code, t) : t.then((i) => jl(this.code, i));
    } else throw Error("Unknown type, must be binary type");
  }
}
const x2 = (r) => async (e) => new Uint8Array(await crypto.subtle.digest(r, e)), qD = E2({ name: "sha2-256", code: 18, encode: x2("SHA-256") }), FD = E2({ name: "sha2-512", code: 19, encode: x2("SHA-512") });
var BD = Object.freeze({ __proto__: null, sha256: qD, sha512: FD });
const S2 = 0, LD = "identity", M2 = m2, UD = (r) => jl(S2, M2(r)), zD = { code: S2, name: LD, encode: M2, digest: UD };
var jD = Object.freeze({ __proto__: null, identity: zD });
new TextEncoder(), new TextDecoder();
const ev = { ...TI, ...FI, ...LI, ...zI, ...kI, ...ZI, ...rD, ...sD, ...fD, ...vD };
({ ...BD, ...jD });
function $D(r = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(r) : new Uint8Array(r);
}
function I2(r, e, t, i) {
  return { name: r, prefix: e, encoder: { name: r, prefix: e, encode: t }, decoder: { decode: i } };
}
const tv = I2("utf8", "u", (r) => "u" + new TextDecoder("utf8").decode(r), (r) => new TextEncoder().encode(r.substring(1))), pl = I2("ascii", "a", (r) => {
  let e = "a";
  for (let t = 0; t < r.length; t++) e += String.fromCharCode(r[t]);
  return e;
}, (r) => {
  r = r.substring(1);
  const e = $D(r.length);
  for (let t = 0; t < r.length; t++) e[t] = r.charCodeAt(t);
  return e;
}), kD = { utf8: tv, "utf-8": tv, hex: ev.base16, latin1: pl, ascii: pl, binary: pl, ...ev };
function HD(r, e = "utf8") {
  const t = kD[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(r, "utf8") : t.decoder.decode(`${t.prefix}${r}`);
}
class KD {
  constructor(e, t) {
    this.core = e, this.logger = t, this.keychain = /* @__PURE__ */ new Map(), this.name = KM, this.version = VM, this.initialized = !1, this.storagePrefix = An, this.init = async () => {
      if (!this.initialized) {
        const i = await this.getKeyChain();
        typeof i < "u" && (this.keychain = i), this.initialized = !0;
      }
    }, this.has = (i) => (this.isInitialized(), this.keychain.has(i)), this.set = async (i, s) => {
      this.isInitialized(), this.keychain.set(i, s), await this.persist();
    }, this.get = (i) => {
      this.isInitialized();
      const s = this.keychain.get(i);
      if (typeof s > "u") {
        const { message: a } = Ae("NO_MATCHING_KEY", `${this.name}: ${i}`);
        throw new Error(a);
      }
      return s;
    }, this.del = async (i) => {
      this.isInitialized(), this.keychain.delete(i), await this.persist();
    }, this.core = e, this.logger = Hr(t, this.name);
  }
  get context() {
    return si(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, ub(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? fb(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class VD {
  constructor(e, t, i) {
    this.core = e, this.logger = t, this.name = kM, this.randomSessionIdentifier = Nl(), this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (s) => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), a = q1(s);
      return sb(a.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s = FE();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }, this.signJWT = async (s) => {
      this.isInitialized();
      const a = await this.getClientSeed(), f = q1(a), h = this.randomSessionIdentifier;
      return await b7(h, s, HM, f);
    }, this.generateSharedKey = (s, a, f) => {
      this.isInitialized();
      const h = this.getPrivateKey(s), p = BE(h, a);
      return this.setSymKey(p, f);
    }, this.setSymKey = async (s, a) => {
      this.isInitialized();
      const f = a || du(s);
      return await this.keychain.set(f, s), f;
    }, this.deleteKeyPair = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.deleteSymKey = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.encode = async (s, a, f) => {
      this.isInitialized();
      const h = t2(f), p = Kn(a);
      if (bg(h)) return UE(p, f == null ? void 0 : f.encoding);
      if (vg(h)) {
        const M = h.senderPublicKey, I = h.receiverPublicKey;
        s = await this.generateSharedKey(M, I);
      }
      const u = this.getSymKey(s), { type: m, senderPublicKey: A } = h;
      return LE({ type: m, symKey: u, message: p, senderPublicKey: A, encoding: f == null ? void 0 : f.encoding });
    }, this.decode = async (s, a, f) => {
      this.isInitialized();
      const h = $E(a, f);
      if (bg(h)) {
        const p = jE(a, f == null ? void 0 : f.encoding);
        return Fs(p);
      }
      if (vg(h)) {
        const p = h.receiverPublicKey, u = h.senderPublicKey;
        s = await this.generateSharedKey(p, u);
      }
      try {
        const p = this.getSymKey(s), u = zE({ symKey: p, encoded: a, encoding: f == null ? void 0 : f.encoding });
        return Fs(u);
      } catch (p) {
        this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(p);
      }
    }, this.getPayloadType = (s, a = us) => {
      const f = Mo({ encoded: s, encoding: a });
      return Ls(f.type);
    }, this.getPayloadSenderPublicKey = (s, a = us) => {
      const f = Mo({ encoded: s, encoding: a });
      return f.senderPublicKey ? _r(f.senderPublicKey, kr) : void 0;
    }, this.core = e, this.logger = Hr(t, this.name), this.keychain = i || new KD(this.core, this.logger);
  }
  get context() {
    return si(this.logger);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(Wg);
    } catch {
      e = Nl(), await this.keychain.set(Wg, e);
    }
    return HD(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class GD extends BS {
  constructor(e, t) {
    super(e, t), this.logger = e, this.core = t, this.messages = /* @__PURE__ */ new Map(), this.name = GM, this.version = WM, this.initialized = !1, this.storagePrefix = An, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i = await this.getRelayerMessages();
          typeof i < "u" && (this.messages = i), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i);
        } finally {
          this.initialized = !0;
        }
      }
    }, this.set = async (i, s) => {
      this.isInitialized();
      const a = jn(s);
      let f = this.messages.get(i);
      return typeof f > "u" && (f = {}), typeof f[a] < "u" || (f[a] = s, this.messages.set(i, f), await this.persist()), a;
    }, this.get = (i) => {
      this.isInitialized();
      let s = this.messages.get(i);
      return typeof s > "u" && (s = {}), s;
    }, this.has = (i, s) => {
      this.isInitialized();
      const a = this.get(i), f = jn(s);
      return typeof a[f] < "u";
    }, this.del = async (i) => {
      this.isInitialized(), this.messages.delete(i), await this.persist();
    }, this.logger = Hr(e, this.name), this.core = t;
  }
  get context() {
    return si(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, ub(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? fb(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class WD extends LS {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.events = new gi.EventEmitter(), this.name = YM, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = Me.toMiliseconds(Me.ONE_MINUTE), this.failedPublishTimeout = Me.toMiliseconds(Me.ONE_SECOND), this.needsTransportRestart = !1, this.publish = async (i, s, a) => {
      var f;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: s, opts: a } });
      const h = (a == null ? void 0 : a.ttl) || JM, p = Tl(a), u = (a == null ? void 0 : a.prompt) || !1, m = (a == null ? void 0 : a.tag) || 0, A = (a == null ? void 0 : a.id) || Ts().toString(), M = { topic: i, message: s, opts: { ttl: h, relay: p, prompt: u, tag: m, id: A, attestation: a == null ? void 0 : a.attestation } }, I = `Failed to publish payload, please try again. id:${A} tag:${m}`, C = Date.now();
      let R, L = 1;
      try {
        for (; R === void 0; ) {
          if (Date.now() - C > this.publishTimeout) throw new Error(I);
          this.logger.trace({ id: A, attempts: L }, `publisher.publish - attempt ${L}`), R = await await va(this.rpcPublish(i, s, h, p, u, m, A, a == null ? void 0 : a.attestation).catch((K) => this.logger.warn(K)), this.publishTimeout, I), L++, R || await new Promise((K) => setTimeout(K, this.failedPublishTimeout));
        }
        this.relayer.events.emit(zr.publish, M), this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { id: A, topic: i, message: s, opts: a } });
      } catch (K) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(K), (f = a == null ? void 0 : a.internal) != null && f.throwOnFailedPublish) throw K;
        this.queue.set(A, M);
      }
    }, this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.relayer = e, this.logger = Hr(t, this.name), this.registerEventListeners();
  }
  get context() {
    return si(this.logger);
  }
  rpcPublish(e, t, i, s, a, f, h, p) {
    var u, m, A, M;
    const I = { method: po(s.protocol).publish, params: { topic: e, message: t, ttl: i, prompt: a, tag: f, attestation: p }, id: h };
    return $r((u = I.params) == null ? void 0 : u.prompt) && ((m = I.params) == null || delete m.prompt), $r((A = I.params) == null ? void 0 : A.tag) && ((M = I.params) == null || delete M.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: I }), this.relayer.request(I);
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: t, message: i, opts: s } = e;
      await this.publish(t, i, s);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Da.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(zr.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(zr.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class JD {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e, t) => {
      const i = this.get(e);
      this.exists(e, t) || this.map.set(e, [...i, t]);
    }, this.get = (e) => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
      if (typeof t > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e)) return;
      const i = this.get(e);
      if (!this.exists(e, t)) return;
      const s = i.filter((a) => a !== t);
      if (!s.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, s);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var YD = Object.defineProperty, QD = Object.defineProperties, XD = Object.getOwnPropertyDescriptors, rv = Object.getOwnPropertySymbols, ZD = Object.prototype.hasOwnProperty, eP = Object.prototype.propertyIsEnumerable, iv = (r, e, t) => e in r ? YD(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, uo = (r, e) => {
  for (var t in e || (e = {})) ZD.call(e, t) && iv(r, t, e[t]);
  if (rv) for (var t of rv(e)) eP.call(e, t) && iv(r, t, e[t]);
  return r;
}, gl = (r, e) => QD(r, XD(e));
class tP extends jS {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new JD(), this.events = new gi.EventEmitter(), this.name = iI, this.version = nI, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = An, this.subscribeTimeout = Me.toMiliseconds(Me.ONE_MINUTE), this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.pendingBatchMessages = [], this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId(), await this.restore()), this.initialized = !0;
    }, this.subscribe = async (i, s) => {
      this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: s } });
      try {
        const a = Tl(s), f = { topic: i, relay: a, transportType: s == null ? void 0 : s.transportType };
        this.pending.set(i, f);
        const h = await this.rpcSubscribe(i, a, s == null ? void 0 : s.transportType);
        return typeof h == "string" && (this.onSubscribe(h, f), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: s } })), h;
      } catch (a) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(a), a;
      }
    }, this.unsubscribe = async (i, s) => {
      await this.restartToComplete(), this.isInitialized(), typeof (s == null ? void 0 : s.id) < "u" ? await this.unsubscribeById(i, s.id, s) : await this.unsubscribeByTopic(i, s);
    }, this.isSubscribed = async (i) => {
      if (this.topics.includes(i)) return !0;
      const s = `${this.pendingSubscriptionWatchLabel}_${i}`;
      return await new Promise((a, f) => {
        const h = new Me.Watch();
        h.start(s);
        const p = setInterval(() => {
          !this.pending.has(i) && this.topics.includes(i) && (clearInterval(p), h.stop(s), a(!0)), h.elapsed(s) >= sI && (clearInterval(p), h.stop(s), f(new Error("Subscription resolution timeout")));
        }, this.pollingInterval);
      }).catch(() => !1);
    }, this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.start = async () => {
      await this.onConnect();
    }, this.stop = async () => {
      await this.onDisconnect();
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = e, this.logger = Hr(t, this.name), this.clientId = "";
  }
  get context() {
    return si(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, t) {
    let i = !1;
    try {
      i = this.getSubscription(e).topic === t;
    } catch {
    }
    return i;
  }
  onEnable() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, t) {
    const i = this.topicMap.get(e);
    await Promise.all(i.map(async (s) => await this.unsubscribeById(e, s, t)));
  }
  async unsubscribeById(e, t, i) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i } });
    try {
      const s = Tl(i);
      await this.rpcUnsubscribe(e, t, s);
      const a = Lt("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, a), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i } });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, t, i = Vt.relay) {
    i === Vt.relay && await this.restartToComplete();
    const s = { method: po(t.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      const a = jn(e + this.clientId);
      return i === Vt.link_mode ? (setTimeout(() => {
        (this.relayer.connected || this.relayer.connecting) && this.relayer.request(s).catch((f) => this.logger.warn(f));
      }, Me.toMiliseconds(Me.ONE_SECOND)), a) : await await va(this.relayer.request(s).catch((f) => this.logger.warn(f)), this.subscribeTimeout) ? a : null;
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(zr.connection_stalled);
    }
    return null;
  }
  async rpcBatchSubscribe(e) {
    if (!e.length) return;
    const t = e[0].relay, i = { method: po(t.protocol).batchSubscribe, params: { topics: e.map((s) => s.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return await await va(this.relayer.request(i).catch((s) => this.logger.warn(s)), this.subscribeTimeout);
    } catch {
      this.relayer.events.emit(zr.connection_stalled);
    }
  }
  async rpcBatchFetchMessages(e) {
    if (!e.length) return;
    const t = e[0].relay, i = { method: po(t.protocol).batchFetchMessages, params: { topics: e.map((a) => a.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    let s;
    try {
      s = await await va(this.relayer.request(i).catch((a) => this.logger.warn(a)), this.subscribeTimeout);
    } catch {
      this.relayer.events.emit(zr.connection_stalled);
    }
    return s;
  }
  rpcUnsubscribe(e, t, i) {
    const s = { method: po(i.protocol).unsubscribe, params: { topic: e, id: t } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.request(s);
  }
  onSubscribe(e, t) {
    this.setSubscription(e, gl(uo({}, t), { id: e })), this.pending.delete(t.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((t) => {
      this.setSubscription(t.id, uo({}, t)), this.pending.delete(t.topic);
    });
  }
  async onUnsubscribe(e, t, i) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, i), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: t }), this.addSubscription(e, t);
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, uo({}, t)), this.topicMap.set(t.topic, e), this.events.emit(pn.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t = this.subscriptions.get(e);
    if (!t) {
      const { message: i } = Ae("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: t });
    const i = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit(pn.deleted, gl(uo({}, i), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(pn.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let t = 0; t < e; t++) {
        const i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchFetchMessages(i), await this.batchSubscribe(i);
      }
    }
    this.events.emit(pn.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length) return;
      if (this.subscriptions.size) {
        const { message: t } = Ae("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length) return;
    const t = await this.rpcBatchSubscribe(e);
    _n(t) && this.onBatchSubscribe(t.map((i, s) => gl(uo({}, e[s]), { id: i })));
  }
  async batchFetchMessages(e) {
    if (!e.length) return;
    this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
    const t = await this.rpcBatchFetchMessages(e);
    t && t.messages && (this.pendingBatchMessages = this.pendingBatchMessages.concat(t.messages));
  }
  async onConnect() {
    await this.restart(), this.onEnable();
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || !this.relayer.connected) return;
    const e = [];
    this.pending.forEach((t) => {
      e.push(t);
    }), await this.batchSubscribe(e), this.pendingBatchMessages.length && (await this.relayer.handleBatchMessageEvents(this.pendingBatchMessages), this.pendingBatchMessages = []);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Da.pulse, async () => {
      await this.checkPending();
    }), this.events.on(pn.created, async (e) => {
      const t = pn.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    }), this.events.on(pn.deleted, async (e) => {
      const t = pn.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    !this.relayer.connected && !this.relayer.connecting && await this.relayer.transportOpen(), this.restartInProgress && await new Promise((e) => {
      const t = setInterval(() => {
        this.restartInProgress || (clearInterval(t), e());
      }, this.pollingInterval);
    });
  }
}
var rP = Object.defineProperty, nv = Object.getOwnPropertySymbols, iP = Object.prototype.hasOwnProperty, nP = Object.prototype.propertyIsEnumerable, sv = (r, e, t) => e in r ? rP(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, sP = (r, e) => {
  for (var t in e) iP.call(e, t) && sv(r, t, e[t]);
  if (nv) for (var t of nv(e)) nP.call(e, t) && sv(r, t, e[t]);
  return r;
};
class aP extends US {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new gi.EventEmitter(), this.name = XM, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "stalled", "interrupted"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = /* @__PURE__ */ new Map(), this.heartBeatTimeout = Me.toMiliseconds(Me.THIRTY_SECONDS + Me.ONE_SECOND), this.request = async (t) => {
      var i, s;
      this.logger.debug("Publishing Request Payload");
      const a = t.id || Ts().toString();
      await this.toEstablishConnection();
      try {
        const f = this.provider.request(t);
        this.requestsInFlight.set(a, { promise: f, request: t }), this.logger.trace({ id: a, method: t.method, topic: (i = t.params) == null ? void 0 : i.topic }, "relayer.request - attempt to publish...");
        const h = await new Promise(async (p, u) => {
          const m = () => {
            u(new Error(`relayer.request - publish interrupted, id: ${a}`));
          };
          this.provider.on(Di.disconnect, m);
          const A = await f;
          this.provider.off(Di.disconnect, m), p(A);
        });
        return this.logger.trace({ id: a, method: t.method, topic: (s = t.params) == null ? void 0 : s.topic }, "relayer.request - published"), h;
      } catch (f) {
        throw this.logger.debug(`Failed to Publish Request: ${a}`), f;
      } finally {
        this.requestsInFlight.delete(a);
      }
    }, this.resetPingTimeout = () => {
      if (wu()) try {
        clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
          var t, i, s;
          (s = (i = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : i.socket) == null || s.terminate();
        }, this.heartBeatTimeout);
      } catch (t) {
        this.logger.warn(t);
      }
    }, this.onPayloadHandler = (t) => {
      this.onProviderPayload(t), this.resetPingTimeout();
    }, this.onConnectHandler = () => {
      this.logger.trace("relayer connected"), this.startPingTimeout(), this.events.emit(zr.connect);
    }, this.onDisconnectHandler = () => {
      this.logger.trace("relayer disconnected"), this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (t) => {
      this.logger.error(t), this.events.emit(zr.error, t), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(Di.payload, this.onPayloadHandler), this.provider.on(Di.connect, this.onConnectHandler), this.provider.on(Di.disconnect, this.onDisconnectHandler), this.provider.on(Di.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Hr(e.logger, this.name) : Uo(Lu({ level: e.logger || QM })), this.messages = new GD(this.logger, e.core), this.subscriber = new tP(this, this.logger), this.publisher = new WD(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || v2, this.projectId = e.projectId, this.bundleId = S7(), this.provider = {};
  }
  async init() {
    if (this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), this.initialized = !0, this.subscriber.cached.length > 0) try {
      await this.transportOpen();
    } catch (e) {
      this.logger.warn(e);
    }
  }
  get context() {
    return si(this.logger);
  }
  get connected() {
    var e, t, i;
    return ((i = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : i.readyState) === 1;
  }
  get connecting() {
    var e, t, i;
    return ((i = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : i.readyState) === 0;
  }
  async publish(e, t, i) {
    this.isInitialized(), await this.publisher.publish(e, t, i), await this.recordMessageEvent({ topic: e, message: t, publishedAt: Date.now(), transportType: Vt.relay });
  }
  async subscribe(e, t) {
    var i;
    this.isInitialized(), (t == null ? void 0 : t.transportType) === "relay" && await this.toEstablishConnection();
    let s = ((i = this.subscriber.topicMap.get(e)) == null ? void 0 : i[0]) || "", a;
    const f = (h) => {
      h.topic === e && (this.subscriber.off(pn.created, f), a());
    };
    return await Promise.all([new Promise((h) => {
      a = h, this.subscriber.on(pn.created, f);
    }), new Promise(async (h) => {
      s = await this.subscriber.subscribe(e, t) || s, h();
    })]), s;
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportDisconnect() {
    if (!this.hasExperiencedNetworkDisruption && this.connected && this.requestsInFlight.size > 0) try {
      await Promise.all(Array.from(this.requestsInFlight.values()).map((e) => e.promise));
    } catch (e) {
      this.logger.warn(e);
    }
    this.hasExperiencedNetworkDisruption || this.connected ? await va(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
  }
  async transportClose() {
    this.transportExplicitlyClosed = !0, await this.transportDisconnect();
  }
  async transportOpen(e) {
    await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect()), await this.createProvider(), this.connectionAttemptInProgress = !0, this.transportExplicitlyClosed = !1;
    try {
      await new Promise(async (t, i) => {
        const s = () => {
          this.provider.off(Di.disconnect, s), i(new Error("Connection interrupted while trying to subscribe"));
        };
        this.provider.on(Di.disconnect, s), await va(this.provider.connect(), Me.toMiliseconds(Me.ONE_MINUTE), `Socket stalled when trying to connect to ${this.relayUrl}`).catch((a) => {
          i(a);
        }).finally(() => {
          clearTimeout(this.reconnectTimeout), this.reconnectTimeout = void 0;
        }), this.subscriber.start().catch((a) => {
          this.logger.error(a), this.onDisconnectHandler();
        }), this.hasExperiencedNetworkDisruption = !1, t();
      });
    } catch (t) {
      this.logger.error(t);
      const i = t;
      if (this.hasExperiencedNetworkDisruption = !0, !this.isConnectionStalled(i.message)) throw t;
    } finally {
      this.connectionAttemptInProgress = !1;
    }
  }
  async restartTransport(e) {
    this.connectionAttemptInProgress || (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await Dg()) throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  async handleBatchMessageEvents(e) {
    if ((e == null ? void 0 : e.length) === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const t = e.sort((i, s) => i.publishedAt - s.publishedAt);
    this.logger.trace(`Batch of ${t.length} message events sorted`);
    for (const i of t) try {
      await this.onMessageEvent(i);
    } catch (s) {
      this.logger.warn(s);
    }
    this.logger.trace(`Batch of ${t.length} message events processed`);
  }
  async onLinkMessageEvent(e, t) {
    const { topic: i } = e;
    if (!t.sessionExists) {
      const s = pr(Me.FIVE_MINUTES), a = { topic: i, expiry: s, relay: { protocol: "irn" }, active: !1 };
      await this.core.pairing.pairings.set(i, a);
    }
    this.events.emit(zr.message, e), await this.recordMessageEvent(e);
  }
  startPingTimeout() {
    var e, t, i, s, a;
    if (wu()) try {
      (t = (e = this.provider) == null ? void 0 : e.connection) != null && t.socket && ((a = (s = (i = this.provider) == null ? void 0 : i.connection) == null ? void 0 : s.socket) == null || a.once("ping", () => {
        this.resetPingTimeout();
      })), this.resetPingTimeout();
    } catch (f) {
      this.logger.warn(f);
    }
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((t) => e.includes(t));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new en(new BM(P7({ sdkVersion: Ul, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0, bundleId: this.bundleId }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: t, message: i } = e;
    await this.messages.set(t, i);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t, message: i } = e;
    if (!i || i.length === 0) return this.logger.debug(`Ignoring invalid/empty message: ${i}`), !0;
    if (!await this.subscriber.isSubscribed(t)) return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0;
    const s = this.messages.has(t, i);
    return s && this.logger.debug(`Ignoring duplicate message: ${i}`), s;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), ud(e)) {
      if (!e.method.endsWith(ZM)) return;
      const t = e.params, { topic: i, message: s, publishedAt: a, attestation: f } = t.data, h = { topic: i, message: s, publishedAt: a, transportType: Vt.relay, attestation: f };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(sP({ type: "event", event: t.id }, h)), this.events.emit(t.id, h), await this.acknowledgePayload(e), await this.onMessageEvent(h);
    } else ju(e) && this.events.emit(zr.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(zr.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const t = Uu(e.id, !0);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(Di.payload, this.onPayloadHandler), this.provider.off(Di.connect, this.onConnectHandler), this.provider.off(Di.disconnect, this.onDisconnectHandler), this.provider.off(Di.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let e = await Dg();
    qx(async (t) => {
      e !== t && (e = t, t ? await this.restartTransport().catch((i) => this.logger.error(i)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportDisconnect(), this.transportExplicitlyClosed = !1));
    });
  }
  async onProviderDisconnect() {
    await this.subscriber.stop(), this.requestsInFlight.clear(), clearTimeout(this.pingTimeout), this.events.emit(zr.disconnect), this.connectionAttemptInProgress = !1, !this.transportExplicitlyClosed && (this.reconnectTimeout || (this.reconnectTimeout = setTimeout(async () => {
      await this.transportOpen().catch((e) => this.logger.error(e));
    }, Me.toMiliseconds(eI))));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    await this.confirmOnlineStateOrThrow(), !this.connected && (this.connectionAttemptInProgress && await new Promise((e) => {
      const t = setInterval(() => {
        this.connected && (clearInterval(t), e());
      }, this.connectionStatusPollingInterval);
    }), await this.transportOpen());
  }
}
var oP = Object.defineProperty, av = Object.getOwnPropertySymbols, cP = Object.prototype.hasOwnProperty, uP = Object.prototype.propertyIsEnumerable, ov = (r, e, t) => e in r ? oP(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, cv = (r, e) => {
  for (var t in e || (e = {})) cP.call(e, t) && ov(r, t, e[t]);
  if (av) for (var t of av(e)) uP.call(e, t) && ov(r, t, e[t]);
  return r;
};
class ks extends zS {
  constructor(e, t, i, s = An, a = void 0) {
    super(e, t, i, s), this.core = e, this.logger = t, this.name = i, this.map = /* @__PURE__ */ new Map(), this.version = tI, this.cached = [], this.initialized = !1, this.storagePrefix = An, this.recentlyDeleted = [], this.recentlyDeletedLimit = 200, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((f) => {
        this.getKey && f !== null && !$r(f) ? this.map.set(this.getKey(f), f) : lx(f) ? this.map.set(f.id, f) : dx(f) && this.map.set(f.topic, f);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (f, h) => {
      this.isInitialized(), this.map.has(f) ? await this.update(f, h) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: f, value: h }), this.map.set(f, h), await this.persist());
    }, this.get = (f) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: f }), this.getData(f)), this.getAll = (f) => (this.isInitialized(), f ? this.values.filter((h) => Object.keys(f).every((p) => zM(h[p], f[p]))) : this.values), this.update = async (f, h) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: f, update: h });
      const p = cv(cv({}, this.getData(f)), h);
      this.map.set(f, p), await this.persist();
    }, this.delete = async (f, h) => {
      this.isInitialized(), this.map.has(f) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: f, reason: h }), this.map.delete(f), this.addToRecentlyDeleted(f), await this.persist());
    }, this.logger = Hr(t, this.name), this.storagePrefix = s, this.getKey = a;
  }
  get context() {
    return si(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  addToRecentlyDeleted(e) {
    this.recentlyDeleted.push(e), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      if (this.recentlyDeleted.includes(e)) {
        const { message: s } = Ae("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
        throw this.logger.error(s), new Error(s);
      }
      const { message: i } = Ae("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i), new Error(i);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length) return;
      if (this.map.size) {
        const { message: t } = Ae("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class fP {
  constructor(e, t) {
    this.core = e, this.logger = t, this.name = aI, this.version = oI, this.events = new Vl(), this.initialized = !1, this.storagePrefix = An, this.ignoredPayloadTypes = [Hn], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i])];
    }, this.create = async (i) => {
      this.isInitialized();
      const s = Nl(), a = await this.core.crypto.setSymKey(s), f = pr(Me.FIVE_MINUTES), h = { protocol: g2 }, p = { topic: a, expiry: f, relay: h, active: !1, methods: i == null ? void 0 : i.methods }, u = Ag({ protocol: this.core.protocol, version: this.core.version, topic: a, symKey: s, relay: h, expiryTimestamp: f, methods: i == null ? void 0 : i.methods });
      return this.events.emit(Rs.create, p), this.core.expirer.set(a, f), await this.pairings.set(a, p), await this.core.relayer.subscribe(a, { transportType: i == null ? void 0 : i.transportType }), { topic: a, uri: u };
    }, this.pair = async (i) => {
      this.isInitialized();
      const s = this.core.eventClient.createEvent({ properties: { topic: i == null ? void 0 : i.uri, trace: [fn.pairing_started] } });
      this.isValidPair(i, s);
      const { topic: a, symKey: f, relay: h, expiryTimestamp: p, methods: u } = _g(i.uri);
      s.props.properties.topic = a, s.addTrace(fn.pairing_uri_validation_success), s.addTrace(fn.pairing_uri_not_expired);
      let m;
      if (this.pairings.keys.includes(a)) {
        if (m = this.pairings.get(a), s.addTrace(fn.existing_pairing), m.active) throw s.setError(Un.active_pairing_already_exists), new Error(`Pairing already exists: ${a}. Please try again with a new connection URI.`);
        s.addTrace(fn.pairing_not_expired);
      }
      const A = p || pr(Me.FIVE_MINUTES), M = { topic: a, relay: h, expiry: A, active: !1, methods: u };
      this.core.expirer.set(a, A), await this.pairings.set(a, M), s.addTrace(fn.store_new_pairing), i.activatePairing && await this.activate({ topic: a }), this.events.emit(Rs.create, M), s.addTrace(fn.emit_inactive_pairing), this.core.crypto.keychain.has(a) || await this.core.crypto.setSymKey(f, a), s.addTrace(fn.subscribing_pairing_topic);
      try {
        await this.core.relayer.confirmOnlineStateOrThrow();
      } catch {
        s.setError(Un.no_internet_connection);
      }
      try {
        await this.core.relayer.subscribe(a, { relay: h });
      } catch (I) {
        throw s.setError(Un.subscribe_pairing_topic_failure), I;
      }
      return s.addTrace(fn.subscribe_pairing_topic_success), M;
    }, this.activate = async ({ topic: i }) => {
      this.isInitialized();
      const s = pr(Me.THIRTY_DAYS);
      this.core.expirer.set(i, s), await this.pairings.update(i, { active: !0, expiry: s });
    }, this.ping = async (i) => {
      this.isInitialized(), await this.isValidPing(i);
      const { topic: s } = i;
      if (this.pairings.keys.includes(s)) {
        const a = await this.sendRequest(s, "wc_pairingPing", {}), { done: f, resolve: h, reject: p } = Os();
        this.events.once(St("pairing_ping", a), ({ error: u }) => {
          u ? p(u) : h();
        }), await f();
      }
    }, this.updateExpiry = async ({ topic: i, expiry: s }) => {
      this.isInitialized(), await this.pairings.update(i, { expiry: s });
    }, this.updateMetadata = async ({ topic: i, metadata: s }) => {
      this.isInitialized(), await this.pairings.update(i, { peerMetadata: s });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (i) => {
      this.isInitialized(), await this.isValidDisconnect(i);
      const { topic: s } = i;
      this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", Lt("USER_DISCONNECTED")), await this.deletePairing(s));
    }, this.formatUriFromPairing = (i) => {
      this.isInitialized();
      const { topic: s, relay: a, expiry: f, methods: h } = i, p = this.core.crypto.keychain.get(s);
      return Ag({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: p, relay: a, expiryTimestamp: f, methods: h });
    }, this.sendRequest = async (i, s, a) => {
      const f = fs(s, a), h = await this.core.crypto.encode(i, f), p = oo[s].req;
      return this.core.history.set(i, f), this.core.relayer.publish(i, h, p), f.id;
    }, this.sendResult = async (i, s, a) => {
      const f = Uu(i, a), h = await this.core.crypto.encode(s, f), p = await this.core.history.get(s, i), u = oo[p.request.method].res;
      await this.core.relayer.publish(s, h, u), await this.core.history.resolve(f);
    }, this.sendError = async (i, s, a) => {
      const f = zu(i, a), h = await this.core.crypto.encode(s, f), p = await this.core.history.get(s, i), u = oo[p.request.method] ? oo[p.request.method].res : oo.unregistered_method.res;
      await this.core.relayer.publish(s, h, u), await this.core.history.resolve(f);
    }, this.deletePairing = async (i, s) => {
      await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, Lt("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), s ? Promise.resolve() : this.core.expirer.del(i)]);
    }, this.cleanup = async () => {
      const i = this.pairings.getAll().filter((s) => ns(s.expiry));
      await Promise.all(i.map((s) => this.deletePairing(s.topic)));
    }, this.onRelayEventRequest = (i) => {
      const { topic: s, payload: a } = i;
      switch (a.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(s, a);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(s, a);
        default:
          return this.onUnknownRpcMethodRequest(s, a);
      }
    }, this.onRelayEventResponse = async (i) => {
      const { topic: s, payload: a } = i, f = (await this.core.history.get(s, a.id)).request.method;
      switch (f) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s, a);
        default:
          return this.onUnknownRpcMethodResponse(f);
      }
    }, this.onPairingPingRequest = async (i, s) => {
      const { id: a } = s;
      try {
        this.isValidPing({ topic: i }), await this.sendResult(a, i, !0), this.events.emit(Rs.ping, { id: a, topic: i });
      } catch (f) {
        await this.sendError(a, i, f), this.logger.error(f);
      }
    }, this.onPairingPingResponse = (i, s) => {
      const { id: a } = s;
      setTimeout(() => {
        dn(s) ? this.events.emit(St("pairing_ping", a), {}) : Oi(s) && this.events.emit(St("pairing_ping", a), { error: s.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (i, s) => {
      const { id: a } = s;
      try {
        this.isValidDisconnect({ topic: i }), await this.deletePairing(i), this.events.emit(Rs.delete, { id: a, topic: i });
      } catch (f) {
        await this.sendError(a, i, f), this.logger.error(f);
      }
    }, this.onUnknownRpcMethodRequest = async (i, s) => {
      const { id: a, method: f } = s;
      try {
        if (this.registeredMethods.includes(f)) return;
        const h = Lt("WC_METHOD_UNSUPPORTED", f);
        await this.sendError(a, i, h), this.logger.error(h);
      } catch (h) {
        await this.sendError(a, i, h), this.logger.error(h);
      }
    }, this.onUnknownRpcMethodResponse = (i) => {
      this.registeredMethods.includes(i) || this.logger.error(Lt("WC_METHOD_UNSUPPORTED", i));
    }, this.isValidPair = (i, s) => {
      var a;
      if (!ti(i)) {
        const { message: h } = Ae("MISSING_OR_INVALID", `pair() params: ${i}`);
        throw s.setError(Un.malformed_pairing_uri), new Error(h);
      }
      if (!hx(i.uri)) {
        const { message: h } = Ae("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
        throw s.setError(Un.malformed_pairing_uri), new Error(h);
      }
      const f = _g(i == null ? void 0 : i.uri);
      if (!((a = f == null ? void 0 : f.relay) != null && a.protocol)) {
        const { message: h } = Ae("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw s.setError(Un.malformed_pairing_uri), new Error(h);
      }
      if (!(f != null && f.symKey)) {
        const { message: h } = Ae("MISSING_OR_INVALID", "pair() uri#symKey");
        throw s.setError(Un.malformed_pairing_uri), new Error(h);
      }
      if (f != null && f.expiryTimestamp && Me.toMiliseconds(f == null ? void 0 : f.expiryTimestamp) < Date.now()) {
        s.setError(Un.pairing_expired);
        const { message: h } = Ae("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(h);
      }
    }, this.isValidPing = async (i) => {
      if (!ti(i)) {
        const { message: a } = Ae("MISSING_OR_INVALID", `ping() params: ${i}`);
        throw new Error(a);
      }
      const { topic: s } = i;
      await this.isValidPairingTopic(s);
    }, this.isValidDisconnect = async (i) => {
      if (!ti(i)) {
        const { message: a } = Ae("MISSING_OR_INVALID", `disconnect() params: ${i}`);
        throw new Error(a);
      }
      const { topic: s } = i;
      await this.isValidPairingTopic(s);
    }, this.isValidPairingTopic = async (i) => {
      if (!or(i, !1)) {
        const { message: s } = Ae("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
        throw new Error(s);
      }
      if (!this.pairings.keys.includes(i)) {
        const { message: s } = Ae("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
        throw new Error(s);
      }
      if (ns(this.pairings.get(i).expiry)) {
        await this.deletePairing(i);
        const { message: s } = Ae("EXPIRED", `pairing topic: ${i}`);
        throw new Error(s);
      }
    }, this.core = e, this.logger = Hr(t, this.name), this.pairings = new ks(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return si(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(zr.message, async (e) => {
      const { topic: t, message: i, transportType: s } = e;
      if (!this.pairings.keys.includes(t) || s === Vt.link_mode || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i))) return;
      const a = await this.core.crypto.decode(t, i);
      try {
        ud(a) ? (this.core.history.set(t, a), this.onRelayEventRequest({ topic: t, payload: a })) : ju(a) && (await this.core.history.resolve(a), await this.onRelayEventResponse({ topic: t, payload: a }), this.core.history.delete(t, a.id));
      } catch (f) {
        this.logger.error(f);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Pi.expired, async (e) => {
      const { topic: t } = lb(e.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit(Rs.expire, { topic: t }));
    });
  }
}
class hP extends FS {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.records = /* @__PURE__ */ new Map(), this.events = new gi.EventEmitter(), this.name = cI, this.version = uI, this.cached = [], this.initialized = !1, this.storagePrefix = An, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (i, s, a) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i, request: s, chainId: a }), this.records.has(s.id)) return;
      const f = { id: s.id, topic: i, request: { method: s.method, params: s.params || null }, chainId: a, expiry: pr(Me.THIRTY_DAYS) };
      this.records.set(f.id, f), this.persist(), this.events.emit(Vi.created, f);
    }, this.resolve = async (i) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i }), !this.records.has(i.id)) return;
      const s = await this.getRecord(i.id);
      typeof s.response > "u" && (s.response = Oi(i) ? { error: i.error } : { result: i.result }, this.records.set(s.id, s), this.persist(), this.events.emit(Vi.updated, s));
    }, this.get = async (i, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i, id: s }), await this.getRecord(s)), this.delete = (i, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s }), this.values.forEach((a) => {
        if (a.topic === i) {
          if (typeof s < "u" && a.id !== s) return;
          this.records.delete(a.id), this.events.emit(Vi.deleted, a);
        }
      }), this.persist();
    }, this.exists = async (i, s) => (this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === i : !1), this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.logger = Hr(t, this.name);
  }
  get context() {
    return si(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return this.values.forEach((t) => {
      if (typeof t.response < "u") return;
      const i = { topic: t.topic, request: fs(t.request.method, t.request.params, t.id), chainId: t.chainId };
      return e.push(i);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const { message: i } = Ae("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(Vi.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length) return;
      if (this.records.size) {
        const { message: t } = Ae("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(Vi.created, (e) => {
      const t = Vi.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e });
    }), this.events.on(Vi.updated, (e) => {
      const t = Vi.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e });
    }), this.events.on(Vi.deleted, (e) => {
      const t = Vi.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e });
    }), this.core.heartbeat.on(Da.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.isInitialized();
      let e = !1;
      this.records.forEach((t) => {
        Me.toMiliseconds(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.records.delete(t.id), this.events.emit(Vi.deleted, t, !1), e = !0);
      }), e && this.persist();
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class lP extends $S {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.expirations = /* @__PURE__ */ new Map(), this.events = new gi.EventEmitter(), this.name = fI, this.version = hI, this.cached = [], this.initialized = !1, this.storagePrefix = An, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = (i) => {
      try {
        const s = this.formatTarget(i);
        return typeof this.getExpiration(s) < "u";
      } catch {
        return !1;
      }
    }, this.set = (i, s) => {
      this.isInitialized();
      const a = this.formatTarget(i), f = { target: a, expiry: s };
      this.expirations.set(a, f), this.checkExpiry(a, f), this.events.emit(Pi.created, { target: a, expiration: f });
    }, this.get = (i) => {
      this.isInitialized();
      const s = this.formatTarget(i);
      return this.getExpiration(s);
    }, this.del = (i) => {
      if (this.isInitialized(), this.has(i)) {
        const s = this.formatTarget(i), a = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(Pi.deleted, { target: s, expiration: a });
      }
    }, this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.logger = Hr(t, this.name);
  }
  get context() {
    return si(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string") return C7(e);
    if (typeof e == "number") return O7(e);
    const { message: t } = Ae("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Pi.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length) return;
      if (this.expirations.size) {
        const { message: t } = Ae("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const { message: i } = Ae("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.warn(i), new Error(i);
    }
    return t;
  }
  checkExpiry(e, t) {
    const { expiry: i } = t;
    Me.toMiliseconds(i) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e), this.events.emit(Pi.expired, { target: e, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Da.pulse, () => this.checkExpirations()), this.events.on(Pi.created, (e) => {
      const t = Pi.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(Pi.expired, (e) => {
      const t = Pi.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(Pi.deleted, (e) => {
      const t = Pi.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var Yt = {};
Object.defineProperty(Yt, "__esModule", { value: !0 }), Yt.getLocalStorage = Yt.getLocalStorageOrThrow = Yt.getCrypto = Yt.getCryptoOrThrow = Yt.getLocation = Yt.getLocationOrThrow = Yt.getNavigator = Yt.getNavigatorOrThrow = D2 = Yt.getDocument = Yt.getDocumentOrThrow = Yt.getFromWindowOrThrow = Yt.getFromWindow = void 0;
function Hs(r) {
  let e;
  return typeof window < "u" && typeof window[r] < "u" && (e = window[r]), e;
}
Yt.getFromWindow = Hs;
function Pa(r) {
  const e = Hs(r);
  if (!e) throw new Error(`${r} is not defined in Window`);
  return e;
}
Yt.getFromWindowOrThrow = Pa;
function dP() {
  return Pa("document");
}
Yt.getDocumentOrThrow = dP;
function pP() {
  return Hs("document");
}
var D2 = Yt.getDocument = pP;
function gP() {
  return Pa("navigator");
}
Yt.getNavigatorOrThrow = gP;
function vP() {
  return Hs("navigator");
}
Yt.getNavigator = vP;
function bP() {
  return Pa("location");
}
Yt.getLocationOrThrow = bP;
function mP() {
  return Hs("location");
}
Yt.getLocation = mP;
function yP() {
  return Pa("crypto");
}
Yt.getCryptoOrThrow = yP;
function wP() {
  return Hs("crypto");
}
Yt.getCrypto = wP;
function _P() {
  return Pa("localStorage");
}
Yt.getLocalStorageOrThrow = _P;
function AP() {
  return Hs("localStorage");
}
Yt.getLocalStorage = AP;
class EP extends kS {
  constructor(e, t, i) {
    super(e, t, i), this.core = e, this.logger = t, this.store = i, this.name = lI, this.verifyUrlV3 = pI, this.storagePrefix = An, this.version = p2, this.init = async () => {
      var s;
      this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && Me.toMiliseconds((s = this.publicKey) == null ? void 0 : s.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
    }, this.register = async (s) => {
      if (!No() || this.isDevEnv) return;
      const a = window.location.origin, { id: f, decryptedId: h } = s, p = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${a}&id=${f}&decryptedId=${h}`;
      try {
        const u = D2(), m = this.startAbortTimer(Me.ONE_SECOND * 5), A = await new Promise((M, I) => {
          const C = () => {
            window.removeEventListener("message", L), u.body.removeChild(R), I("attestation aborted");
          };
          this.abortController.signal.addEventListener("abort", C);
          const R = u.createElement("iframe");
          R.src = p, R.style.display = "none", R.addEventListener("error", C, { signal: this.abortController.signal });
          const L = (K) => {
            if (K.data && typeof K.data == "string") try {
              const F = JSON.parse(K.data);
              if (F.type === "verify_attestation") {
                if (Ml(F.attestation).payload.id !== f) return;
                clearInterval(m), u.body.removeChild(R), this.abortController.signal.removeEventListener("abort", C), window.removeEventListener("message", L), M(F.attestation === null ? "" : F.attestation);
              }
            } catch (F) {
              this.logger.warn(F);
            }
          };
          u.body.appendChild(R), window.addEventListener("message", L, { signal: this.abortController.signal });
        });
        return this.logger.debug("jwt attestation", A), A;
      } catch (u) {
        this.logger.warn(u);
      }
      return "";
    }, this.resolve = async (s) => {
      if (this.isDevEnv) return "";
      const { attestationId: a, hash: f, encryptedId: h } = s;
      if (a === "") {
        this.logger.debug("resolve: attestationId is empty, skipping");
        return;
      }
      if (a) {
        if (Ml(a).payload.id !== h) return;
        const u = await this.isValidJwtAttestation(a);
        if (u) {
          if (!u.isVerified) {
            this.logger.warn("resolve: jwt attestation: origin url not verified");
            return;
          }
          return u;
        }
      }
      if (!f) return;
      const p = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
      return this.fetchAttestation(f, p);
    }, this.fetchAttestation = async (s, a) => {
      this.logger.debug(`resolving attestation: ${s} from url: ${a}`);
      const f = this.startAbortTimer(Me.ONE_SECOND * 5), h = await fetch(`${a}/attestation/${s}?v2Supported=true`, { signal: this.abortController.signal });
      return clearTimeout(f), h.status === 200 ? await h.json() : void 0;
    }, this.getVerifyUrl = (s) => {
      let a = s || Ao;
      return gI.includes(a) || (this.logger.info(`verify url: ${a}, not included in trusted list, assigning default: ${Ao}`), a = Ao), a;
    }, this.fetchPublicKey = async () => {
      try {
        this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
        const s = this.startAbortTimer(Me.FIVE_SECONDS), a = await fetch(`${this.verifyUrlV3}/public-key`, { signal: this.abortController.signal });
        return clearTimeout(s), await a.json();
      } catch (s) {
        this.logger.warn(s);
      }
    }, this.persistPublicKey = async (s) => {
      this.logger.debug("persisting public key to local storage", s), await this.store.setItem(this.storeKey, s), this.publicKey = s;
    }, this.removePublicKey = async () => {
      this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
    }, this.isValidJwtAttestation = async (s) => {
      const a = await this.getPublicKey();
      try {
        if (a) return this.validateAttestation(s, a);
      } catch (h) {
        this.logger.error(h), this.logger.warn("error validating attestation");
      }
      const f = await this.fetchAndPersistPublicKey();
      try {
        if (f) return this.validateAttestation(s, f);
      } catch (h) {
        this.logger.error(h), this.logger.warn("error validating attestation");
      }
    }, this.getPublicKey = async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey(), this.fetchAndPersistPublicKey = async () => {
      if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
      this.fetchPromise = new Promise(async (a) => {
        const f = await this.fetchPublicKey();
        f && (await this.persistPublicKey(f), a(f));
      });
      const s = await this.fetchPromise;
      return this.fetchPromise = void 0, s;
    }, this.validateAttestation = (s, a) => {
      const f = VE(s, a.publicKey), h = { hasExpired: Me.toMiliseconds(f.exp) < Date.now(), payload: f };
      if (h.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
      return { origin: h.payload.origin, isScam: h.payload.isScam, isVerified: h.payload.isVerified };
    }, this.logger = Hr(t, this.name), this.abortController = new AbortController(), this.isDevEnv = Ql(), this.init();
  }
  get storeKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
  }
  get context() {
    return si(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), Me.toMiliseconds(e));
  }
}
class xP extends HS {
  constructor(e, t) {
    super(e, t), this.projectId = e, this.logger = t, this.context = vI, this.registerDeviceToken = async (i) => {
      const { clientId: s, token: a, notificationType: f, enableEncrypted: h = !1 } = i, p = `${bI}/${this.projectId}/clients`;
      await fetch(p, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s, type: f, token: a, always_raw: h }) });
    }, this.logger = Hr(t, this.context);
  }
}
var SP = Object.defineProperty, uv = Object.getOwnPropertySymbols, MP = Object.prototype.hasOwnProperty, IP = Object.prototype.propertyIsEnumerable, fv = (r, e, t) => e in r ? SP(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, fo = (r, e) => {
  for (var t in e || (e = {})) MP.call(e, t) && fv(r, t, e[t]);
  if (uv) for (var t of uv(e)) IP.call(e, t) && fv(r, t, e[t]);
  return r;
};
class DP extends KS {
  constructor(e, t, i = !0) {
    super(e, t, i), this.core = e, this.logger = t, this.context = yI, this.storagePrefix = An, this.storageVersion = mI, this.events = /* @__PURE__ */ new Map(), this.shouldPersist = !1, this.init = async () => {
      if (!Ql()) try {
        const s = { eventId: j1(), timestamp: Date.now(), domain: this.getAppDomain(), props: { event: "INIT", type: "", properties: { client_id: await this.core.crypto.getClientId(), user_agent: cb(this.core.relayer.protocol, this.core.relayer.version, Ul) } } };
        await this.sendEvent([s]);
      } catch (s) {
        this.logger.warn(s);
      }
    }, this.createEvent = (s) => {
      const { event: a = "ERROR", type: f = "", properties: { topic: h, trace: p } } = s, u = j1(), m = this.core.projectId || "", A = Date.now(), M = fo({ eventId: u, timestamp: A, props: { event: a, type: f, properties: { topic: h, trace: p } }, bundleId: m, domain: this.getAppDomain() }, this.setMethods(u));
      return this.telemetryEnabled && (this.events.set(u, M), this.shouldPersist = !0), M;
    }, this.getEvent = (s) => {
      const { eventId: a, topic: f } = s;
      if (a) return this.events.get(a);
      const h = Array.from(this.events.values()).find((p) => p.props.properties.topic === f);
      if (h) return fo(fo({}, h), this.setMethods(h.eventId));
    }, this.deleteEvent = (s) => {
      const { eventId: a } = s;
      this.events.delete(a), this.shouldPersist = !0;
    }, this.setEventListeners = () => {
      this.core.heartbeat.on(Da.pulse, async () => {
        this.shouldPersist && await this.persist(), this.events.forEach((s) => {
          Me.fromMiliseconds(Date.now()) - Me.fromMiliseconds(s.timestamp) > wI && (this.events.delete(s.eventId), this.shouldPersist = !0);
        });
      });
    }, this.setMethods = (s) => ({ addTrace: (a) => this.addTrace(s, a), setError: (a) => this.setError(s, a) }), this.addTrace = (s, a) => {
      const f = this.events.get(s);
      f && (f.props.properties.trace.push(a), this.events.set(s, f), this.shouldPersist = !0);
    }, this.setError = (s, a) => {
      const f = this.events.get(s);
      f && (f.props.type = a, f.timestamp = Date.now(), this.events.set(s, f), this.shouldPersist = !0);
    }, this.persist = async () => {
      await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = !1;
    }, this.restore = async () => {
      try {
        const s = await this.core.storage.getItem(this.storageKey) || [];
        if (!s.length) return;
        s.forEach((a) => {
          this.events.set(a.eventId, fo(fo({}, a), this.setMethods(a.eventId)));
        });
      } catch (s) {
        this.logger.warn(s);
      }
    }, this.submit = async () => {
      if (!this.telemetryEnabled || this.events.size === 0) return;
      const s = [];
      for (const [a, f] of this.events) f.props.type && s.push(f);
      if (s.length !== 0) try {
        if ((await this.sendEvent(s)).ok) for (const a of s) this.events.delete(a.eventId), this.shouldPersist = !0;
      } catch (a) {
        this.logger.warn(a);
      }
    }, this.sendEvent = async (s) => {
      const a = this.getAppDomain() ? "" : "&sp=desktop";
      return await fetch(`${_I}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${Ul}${a}`, { method: "POST", body: JSON.stringify(s) });
    }, this.getAppDomain = () => ob().url, this.logger = Hr(t, this.context), this.telemetryEnabled = i, i ? this.restore().then(async () => {
      await this.submit(), this.setEventListeners();
    }) : this.persist();
  }
  get storageKey() {
    return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
  }
}
var PP = Object.defineProperty, hv = Object.getOwnPropertySymbols, CP = Object.prototype.hasOwnProperty, OP = Object.prototype.propertyIsEnumerable, lv = (r, e, t) => e in r ? PP(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, dv = (r, e) => {
  for (var t in e || (e = {})) CP.call(e, t) && lv(r, t, e[t]);
  if (hv) for (var t of hv(e)) OP.call(e, t) && lv(r, t, e[t]);
  return r;
};
class hd extends qS {
  constructor(e) {
    var t;
    super(e), this.protocol = d2, this.version = p2, this.name = fd, this.events = new gi.EventEmitter(), this.initialized = !1, this.on = (f, h) => this.events.on(f, h), this.once = (f, h) => this.events.once(f, h), this.off = (f, h) => this.events.off(f, h), this.removeListener = (f, h) => this.events.removeListener(f, h), this.dispatchEnvelope = ({ topic: f, message: h, sessionExists: p }) => {
      if (!f || !h) return;
      const u = { topic: f, message: h, publishedAt: Date.now(), transportType: Vt.link_mode };
      this.relayer.onLinkMessageEvent(u, { sessionExists: p });
    }, this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || v2, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const i = Lu({ level: typeof (e == null ? void 0 : e.logger) == "string" && e.logger ? e.logger : jM.logger }), { logger: s, chunkLoggerController: a } = TS({ opts: i, maxSizeInBytes: e == null ? void 0 : e.maxLogBlobSizeInBytes, loggerOverride: e == null ? void 0 : e.logger });
    this.logChunkController = a, (t = this.logChunkController) != null && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
      var f, h;
      (f = this.logChunkController) != null && f.downloadLogsBlobInBrowser && ((h = this.logChunkController) == null || h.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
    }), this.logger = Hr(s, this.name), this.heartbeat = new Ux(), this.crypto = new VD(this, this.logger, e == null ? void 0 : e.keychain), this.history = new hP(this, this.logger), this.expirer = new lP(this, this.logger), this.storage = e != null && e.storage ? e.storage : new bS(dv(dv({}, $M), e == null ? void 0 : e.storageOptions)), this.relayer = new aP({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new fP(this, this.logger), this.verify = new EP(this, this.logger, this.storage), this.echoClient = new xP(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new DP(this, this.logger, e == null ? void 0 : e.telemetryEnabled);
  }
  static async init(e) {
    const t = new hd(e);
    await t.initialize();
    const i = await t.crypto.getClientId();
    return await t.storage.setItem(rI, i), t;
  }
  get context() {
    return si(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async getLogsBlob() {
    var e;
    return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async addLinkModeSupportedApp(e) {
    this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e), await this.storage.setItem(Jg, this.linkModeSupportedApps));
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.eventClient.init(), this.linkModeSupportedApps = await this.storage.getItem(Jg) || [], this.initialized = !0, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
}
const RP = hd, P2 = "wc", C2 = 2, O2 = "client", ld = `${P2}@${C2}:${O2}:`, vl = { name: O2, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.org" }, pv = "WALLETCONNECT_DEEPLINK_CHOICE", NP = "proposal", R2 = "Proposal expired", TP = "session", ha = Me.SEVEN_DAYS, qP = "engine", mr = { wc_sessionPropose: { req: { ttl: Me.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: Me.FIVE_MINUTES, prompt: !1, tag: 1101 }, reject: { ttl: Me.FIVE_MINUTES, prompt: !1, tag: 1120 }, autoReject: { ttl: Me.FIVE_MINUTES, prompt: !1, tag: 1121 } }, wc_sessionSettle: { req: { ttl: Me.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: Me.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: Me.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: Me.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: Me.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: Me.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: Me.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: Me.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: Me.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: Me.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: Me.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: Me.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: Me.ONE_DAY, prompt: !1, tag: 1114 }, res: { ttl: Me.ONE_DAY, prompt: !1, tag: 1115 } }, wc_sessionAuthenticate: { req: { ttl: Me.ONE_HOUR, prompt: !0, tag: 1116 }, res: { ttl: Me.ONE_HOUR, prompt: !1, tag: 1117 }, reject: { ttl: Me.FIVE_MINUTES, prompt: !1, tag: 1118 }, autoReject: { ttl: Me.FIVE_MINUTES, prompt: !1, tag: 1119 } } }, bl = { min: Me.FIVE_MINUTES, max: Me.SEVEN_DAYS }, un = { idle: "IDLE", active: "ACTIVE" }, FP = "request", BP = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"], LP = "wc", UP = "auth", zP = "authKeys", jP = "pairingTopics", $P = "requests", ku = `${LP}@${1.5}:${UP}:`, vu = `${ku}:PUB_KEY`;
var kP = Object.defineProperty, HP = Object.defineProperties, KP = Object.getOwnPropertyDescriptors, gv = Object.getOwnPropertySymbols, VP = Object.prototype.hasOwnProperty, GP = Object.prototype.propertyIsEnumerable, vv = (r, e, t) => e in r ? kP(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, tr = (r, e) => {
  for (var t in e || (e = {})) VP.call(e, t) && vv(r, t, e[t]);
  if (gv) for (var t of gv(e)) GP.call(e, t) && vv(r, t, e[t]);
  return r;
}, Wi = (r, e) => HP(r, KP(e));
class WP extends GS {
  constructor(e) {
    super(e), this.name = qP, this.events = new Vl(), this.initialized = !1, this.requestQueue = { state: un.idle, queue: [] }, this.sessionRequestQueue = { state: un.idle, queue: [] }, this.requestQueueDelay = Me.ONE_SECOND, this.expectedPairingMethodMap = /* @__PURE__ */ new Map(), this.recentlyDeletedMap = /* @__PURE__ */ new Map(), this.recentlyDeletedLimit = 200, this.relayMessageCache = [], this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({ methods: Object.keys(mr) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, Me.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (t) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      const i = Wi(tr({}, t), { requiredNamespaces: t.requiredNamespaces || {}, optionalNamespaces: t.optionalNamespaces || {} });
      await this.isValidConnect(i);
      const { pairingTopic: s, requiredNamespaces: a, optionalNamespaces: f, sessionProperties: h, relays: p } = i;
      let u = s, m, A = !1;
      try {
        u && (A = this.client.core.pairing.pairings.get(u).active);
      } catch (B) {
        throw this.client.logger.error(`connect() -> pairing.get(${u}) failed`), B;
      }
      if (!u || !A) {
        const { topic: B, uri: z } = await this.client.core.pairing.create();
        u = B, m = z;
      }
      if (!u) {
        const { message: B } = Ae("NO_MATCHING_KEY", `connect() pairing topic: ${u}`);
        throw new Error(B);
      }
      const M = await this.client.core.crypto.generateKeyPair(), I = mr.wc_sessionPropose.req.ttl || Me.FIVE_MINUTES, C = pr(I), R = tr({ requiredNamespaces: a, optionalNamespaces: f, relays: p ?? [{ protocol: g2 }], proposer: { publicKey: M, metadata: this.client.metadata }, expiryTimestamp: C, pairingTopic: u }, h && { sessionProperties: h }), { reject: L, resolve: K, done: F } = Os(I, R2);
      this.events.once(St("session_connect"), async ({ error: B, session: z }) => {
        if (B) L(B);
        else if (z) {
          z.self.publicKey = M;
          const q = Wi(tr({}, z), { pairingTopic: R.pairingTopic, requiredNamespaces: R.requiredNamespaces, optionalNamespaces: R.optionalNamespaces, transportType: Vt.relay });
          await this.client.session.set(z.topic, q), await this.setExpiry(z.topic, z.expiry), u && await this.client.core.pairing.updateMetadata({ topic: u, metadata: z.peer.metadata }), this.cleanupDuplicatePairings(q), K(q);
        }
      });
      const V = await this.sendRequest({ topic: u, method: "wc_sessionPropose", params: R, throwOnFailedPublish: !0 });
      return await this.setProposal(V, tr({ id: V }, R)), { uri: m, approval: F };
    }, this.pair = async (t) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        return await this.client.core.pairing.pair(t);
      } catch (i) {
        throw this.client.logger.error("pair() failed"), i;
      }
    }, this.approve = async (t) => {
      var i, s, a;
      const f = this.client.core.eventClient.createEvent({ properties: { topic: (i = t == null ? void 0 : t.id) == null ? void 0 : i.toString(), trace: [Gi.session_approve_started] } });
      try {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
      } catch (U) {
        throw f.setError(Ps.no_internet_connection), U;
      }
      try {
        await this.isValidProposalId(t == null ? void 0 : t.id);
      } catch (U) {
        throw this.client.logger.error(`approve() -> proposal.get(${t == null ? void 0 : t.id}) failed`), f.setError(Ps.proposal_not_found), U;
      }
      try {
        await this.isValidApprove(t);
      } catch (U) {
        throw this.client.logger.error("approve() -> isValidApprove() failed"), f.setError(Ps.session_approve_namespace_validation_failure), U;
      }
      const { id: h, relayProtocol: p, namespaces: u, sessionProperties: m, sessionConfig: A } = t, M = this.client.proposal.get(h);
      this.client.core.eventClient.deleteEvent({ eventId: f.eventId });
      const { pairingTopic: I, proposer: C, requiredNamespaces: R, optionalNamespaces: L } = M;
      let K = (s = this.client.core.eventClient) == null ? void 0 : s.getEvent({ topic: I });
      K || (K = (a = this.client.core.eventClient) == null ? void 0 : a.createEvent({ type: Gi.session_approve_started, properties: { topic: I, trace: [Gi.session_approve_started, Gi.session_namespaces_validation_success] } }));
      const F = await this.client.core.crypto.generateKeyPair(), V = C.publicKey, B = await this.client.core.crypto.generateSharedKey(F, V), z = tr(tr({ relay: { protocol: p ?? "irn" }, namespaces: u, controller: { publicKey: F, metadata: this.client.metadata }, expiry: pr(ha) }, m && { sessionProperties: m }), A && { sessionConfig: A }), q = Vt.relay;
      K.addTrace(Gi.subscribing_session_topic);
      try {
        await this.client.core.relayer.subscribe(B, { transportType: q });
      } catch (U) {
        throw K.setError(Ps.subscribe_session_topic_failure), U;
      }
      K.addTrace(Gi.subscribe_session_topic_success);
      const E = Wi(tr({}, z), { topic: B, requiredNamespaces: R, optionalNamespaces: L, pairingTopic: I, acknowledged: !1, self: z.controller, peer: { publicKey: C.publicKey, metadata: C.metadata }, controller: F, transportType: Vt.relay });
      await this.client.session.set(B, E), K.addTrace(Gi.store_session);
      try {
        K.addTrace(Gi.publishing_session_settle), await this.sendRequest({ topic: B, method: "wc_sessionSettle", params: z, throwOnFailedPublish: !0 }).catch((U) => {
          throw K == null || K.setError(Ps.session_settle_publish_failure), U;
        }), K.addTrace(Gi.session_settle_publish_success), K.addTrace(Gi.publishing_session_approve), await this.sendResult({ id: h, topic: I, result: { relay: { protocol: p ?? "irn" }, responderPublicKey: F }, throwOnFailedPublish: !0 }).catch((U) => {
          throw K == null || K.setError(Ps.session_approve_publish_failure), U;
        }), K.addTrace(Gi.session_approve_publish_success);
      } catch (U) {
        throw this.client.logger.error(U), this.client.session.delete(B, Lt("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(B), U;
      }
      return this.client.core.eventClient.deleteEvent({ eventId: K.eventId }), await this.client.core.pairing.updateMetadata({ topic: I, metadata: C.metadata }), await this.client.proposal.delete(h, Lt("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: I }), await this.setExpiry(B, pr(ha)), { topic: B, acknowledged: () => Promise.resolve(this.client.session.get(B)) };
    }, this.reject = async (t) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidReject(t);
      } catch (f) {
        throw this.client.logger.error("reject() -> isValidReject() failed"), f;
      }
      const { id: i, reason: s } = t;
      let a;
      try {
        a = this.client.proposal.get(i).pairingTopic;
      } catch (f) {
        throw this.client.logger.error(`reject() -> proposal.get(${i}) failed`), f;
      }
      a && (await this.sendError({ id: i, topic: a, error: s, rpcOpts: mr.wc_sessionPropose.reject }), await this.client.proposal.delete(i, Lt("USER_DISCONNECTED")));
    }, this.update = async (t) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidUpdate(t);
      } catch (A) {
        throw this.client.logger.error("update() -> isValidUpdate() failed"), A;
      }
      const { topic: i, namespaces: s } = t, { done: a, resolve: f, reject: h } = Os(), p = as(), u = Ts().toString(), m = this.client.session.get(i).namespaces;
      return this.events.once(St("session_update", p), ({ error: A }) => {
        A ? h(A) : f();
      }), await this.client.session.update(i, { namespaces: s }), await this.sendRequest({ topic: i, method: "wc_sessionUpdate", params: { namespaces: s }, throwOnFailedPublish: !0, clientRpcId: p, relayRpcId: u }).catch((A) => {
        this.client.logger.error(A), this.client.session.update(i, { namespaces: m }), h(A);
      }), { acknowledged: a };
    }, this.extend = async (t) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidExtend(t);
      } catch (p) {
        throw this.client.logger.error("extend() -> isValidExtend() failed"), p;
      }
      const { topic: i } = t, s = as(), { done: a, resolve: f, reject: h } = Os();
      return this.events.once(St("session_extend", s), ({ error: p }) => {
        p ? h(p) : f();
      }), await this.setExpiry(i, pr(ha)), this.sendRequest({ topic: i, method: "wc_sessionExtend", params: {}, clientRpcId: s, throwOnFailedPublish: !0 }).catch((p) => {
        h(p);
      }), { acknowledged: a };
    }, this.request = async (t) => {
      this.isInitialized();
      try {
        await this.isValidRequest(t);
      } catch (C) {
        throw this.client.logger.error("request() -> isValidRequest() failed"), C;
      }
      const { chainId: i, request: s, topic: a, expiry: f = mr.wc_sessionRequest.req.ttl } = t, h = this.client.session.get(a);
      (h == null ? void 0 : h.transportType) === Vt.relay && await this.confirmOnlineStateOrThrow();
      const p = as(), u = Ts().toString(), { done: m, resolve: A, reject: M } = Os(f, "Request expired. Please try again.");
      this.events.once(St("session_request", p), ({ error: C, result: R }) => {
        C ? M(C) : A(R);
      });
      const I = this.getAppLinkIfEnabled(h.peer.metadata, h.transportType);
      return I ? (await this.sendRequest({ clientRpcId: p, relayRpcId: u, topic: a, method: "wc_sessionRequest", params: { request: Wi(tr({}, s), { expiryTimestamp: pr(f) }), chainId: i }, expiry: f, throwOnFailedPublish: !0, appLink: I }).catch((C) => M(C)), this.client.events.emit("session_request_sent", { topic: a, request: s, chainId: i, id: p }), await m()) : await Promise.all([new Promise(async (C) => {
        await this.sendRequest({ clientRpcId: p, relayRpcId: u, topic: a, method: "wc_sessionRequest", params: { request: Wi(tr({}, s), { expiryTimestamp: pr(f) }), chainId: i }, expiry: f, throwOnFailedPublish: !0 }).catch((R) => M(R)), this.client.events.emit("session_request_sent", { topic: a, request: s, chainId: i, id: p }), C();
      }), new Promise(async (C) => {
        var R;
        if (!((R = h.sessionConfig) != null && R.disableDeepLink)) {
          const L = await T7(this.client.core.storage, pv);
          await R7({ id: p, topic: a, wcDeepLink: L });
        }
        C();
      }), m()]).then((C) => C[2]);
    }, this.respond = async (t) => {
      this.isInitialized(), await this.isValidRespond(t);
      const { topic: i, response: s } = t, { id: a } = s, f = this.client.session.get(i);
      f.transportType === Vt.relay && await this.confirmOnlineStateOrThrow();
      const h = this.getAppLinkIfEnabled(f.peer.metadata, f.transportType);
      dn(s) ? await this.sendResult({ id: a, topic: i, result: s.result, throwOnFailedPublish: !0, appLink: h }) : Oi(s) && await this.sendError({ id: a, topic: i, error: s.error, appLink: h }), this.cleanupAfterResponse(t);
    }, this.ping = async (t) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidPing(t);
      } catch (s) {
        throw this.client.logger.error("ping() -> isValidPing() failed"), s;
      }
      const { topic: i } = t;
      if (this.client.session.keys.includes(i)) {
        const s = as(), a = Ts().toString(), { done: f, resolve: h, reject: p } = Os();
        this.events.once(St("session_ping", s), ({ error: u }) => {
          u ? p(u) : h();
        }), await Promise.all([this.sendRequest({ topic: i, method: "wc_sessionPing", params: {}, throwOnFailedPublish: !0, clientRpcId: s, relayRpcId: a }), f()]);
      } else this.client.core.pairing.pairings.keys.includes(i) && await this.client.core.pairing.ping({ topic: i });
    }, this.emit = async (t) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(t);
      const { topic: i, event: s, chainId: a } = t, f = Ts().toString();
      await this.sendRequest({ topic: i, method: "wc_sessionEvent", params: { event: s, chainId: a }, throwOnFailedPublish: !0, relayRpcId: f });
    }, this.disconnect = async (t) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(t);
      const { topic: i } = t;
      if (this.client.session.keys.includes(i)) await this.sendRequest({ topic: i, method: "wc_sessionDelete", params: Lt("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession({ topic: i, emitEvent: !1 });
      else if (this.client.core.pairing.pairings.keys.includes(i)) await this.client.core.pairing.disconnect({ topic: i });
      else {
        const { message: s } = Ae("MISMATCHED_TOPIC", `Session or pairing topic not found: ${i}`);
        throw new Error(s);
      }
    }, this.find = (t) => (this.isInitialized(), this.client.session.getAll().filter((i) => ux(i, t))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.authenticate = async (t, i) => {
      var s;
      this.isInitialized(), this.isValidAuthenticate(t);
      const a = i && this.client.core.linkModeSupportedApps.includes(i) && ((s = this.client.metadata.redirect) == null ? void 0 : s.linkMode), f = a ? Vt.link_mode : Vt.relay;
      f === Vt.relay && await this.confirmOnlineStateOrThrow();
      const { chains: h, statement: p = "", uri: u, domain: m, nonce: A, type: M, exp: I, nbf: C, methods: R = [], expiry: L } = t, K = [...t.resources || []], { topic: F, uri: V } = await this.client.core.pairing.create({ methods: ["wc_sessionAuthenticate"], transportType: f });
      this.client.logger.info({ message: "Generated new pairing", pairing: { topic: F, uri: V } });
      const B = await this.client.core.crypto.generateKeyPair(), z = du(B);
      if (await Promise.all([this.client.auth.authKeys.set(vu, { responseTopic: z, publicKey: B }), this.client.auth.pairingTopics.set(z, { topic: z, pairingTopic: F })]), await this.client.core.relayer.subscribe(z, { transportType: f }), this.client.logger.info(`sending request to new pairing topic: ${F}`), R.length > 0) {
        const { namespace: D } = bo(h[0]);
        let x = CE(D, "request", R);
        lu(K) && (x = RE(x, K.pop())), K.push(x);
      }
      const q = L && L > mr.wc_sessionAuthenticate.req.ttl ? L : mr.wc_sessionAuthenticate.req.ttl, E = { authPayload: { type: M ?? "caip122", chains: h, statement: p, aud: u, domain: m, version: "1", nonce: A, iat: (/* @__PURE__ */ new Date()).toISOString(), exp: I, nbf: C, resources: K }, requester: { publicKey: B, metadata: this.client.metadata }, expiryTimestamp: pr(q) }, U = { eip155: { chains: h, methods: [.../* @__PURE__ */ new Set(["personal_sign", ...R])], events: ["chainChanged", "accountsChanged"] } }, ee = { requiredNamespaces: {}, optionalNamespaces: U, relays: [{ protocol: "irn" }], pairingTopic: F, proposer: { publicKey: B, metadata: this.client.metadata }, expiryTimestamp: pr(mr.wc_sessionPropose.req.ttl) }, { done: ae, resolve: j, reject: w } = Os(q, "Request expired"), c = async ({ error: D, session: x }) => {
        if (this.events.off(St("session_request", l), d), D) w(D);
        else if (x) {
          x.self.publicKey = B, await this.client.session.set(x.topic, x), await this.setExpiry(x.topic, x.expiry), F && await this.client.core.pairing.updateMetadata({ topic: F, metadata: x.peer.metadata });
          const g = this.client.session.get(x.topic);
          await this.deleteProposal(b), j({ session: g });
        }
      }, d = async (D) => {
        var x, g, y;
        if (await this.deletePendingAuthRequest(l, { message: "fulfilled", code: 0 }), D.error) {
          const W = Lt("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
          return D.error.code === W.code ? void 0 : (this.events.off(St("session_connect"), c), w(D.error.message));
        }
        await this.deleteProposal(b), this.events.off(St("session_connect"), c);
        const { cacaos: N, responder: Q } = D.result, Z = [], O = [];
        for (const W of N) {
          await lg({ cacao: W, projectId: this.client.core.projectId }) || (this.client.logger.error(W, "Signature verification failed"), w(Lt("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
          const { p: J } = W, S = lu(J.resources), G = [hg(J.iss)], oe = Su(J.iss);
          if (S) {
            const ce = dg(S), fe = pg(S);
            Z.push(...ce), G.push(...fe);
          }
          for (const ce of G) O.push(`${ce}:${oe}`);
        }
        const te = await this.client.core.crypto.generateSharedKey(B, Q.publicKey);
        let k;
        Z.length > 0 && (k = { topic: te, acknowledged: !0, self: { publicKey: B, metadata: this.client.metadata }, peer: Q, controller: Q.publicKey, expiry: pr(ha), requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: F, namespaces: Eg([...new Set(Z)], [...new Set(O)]), transportType: f }, await this.client.core.relayer.subscribe(te, { transportType: f }), await this.client.session.set(te, k), F && await this.client.core.pairing.updateMetadata({ topic: F, metadata: Q.metadata }), k = this.client.session.get(te)), (x = this.client.metadata.redirect) != null && x.linkMode && (g = Q.metadata.redirect) != null && g.linkMode && (y = Q.metadata.redirect) != null && y.universal && i && (this.client.core.addLinkModeSupportedApp(Q.metadata.redirect.universal), this.client.session.update(te, { transportType: Vt.link_mode })), j({ auths: N, session: k });
      }, l = as(), b = as();
      this.events.once(St("session_connect"), c), this.events.once(St("session_request", l), d);
      let _;
      try {
        if (a) {
          const D = fs("wc_sessionAuthenticate", E, l);
          this.client.core.history.set(F, D);
          const x = await this.client.core.crypto.encode("", D, { type: Bo, encoding: so });
          _ = Zc(i, F, x);
        } else await Promise.all([this.sendRequest({ topic: F, method: "wc_sessionAuthenticate", params: E, expiry: t.expiry, throwOnFailedPublish: !0, clientRpcId: l }), this.sendRequest({ topic: F, method: "wc_sessionPropose", params: ee, expiry: mr.wc_sessionPropose.req.ttl, throwOnFailedPublish: !0, clientRpcId: b })]);
      } catch (D) {
        throw this.events.off(St("session_connect"), c), this.events.off(St("session_request", l), d), D;
      }
      return await this.setProposal(b, tr({ id: b }, ee)), await this.setAuthRequest(l, { request: Wi(tr({}, E), { verifyContext: {} }), pairingTopic: F, transportType: f }), { uri: _ ?? V, response: ae };
    }, this.approveSessionAuthenticate = async (t) => {
      const { id: i, auths: s } = t, a = this.client.core.eventClient.createEvent({ properties: { topic: i.toString(), trace: [Cs.authenticated_session_approve_started] } });
      try {
        this.isInitialized();
      } catch (L) {
        throw a.setError(co.no_internet_connection), L;
      }
      const f = this.getPendingAuthRequest(i);
      if (!f) throw a.setError(co.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${i}`);
      const h = f.transportType || Vt.relay;
      h === Vt.relay && await this.confirmOnlineStateOrThrow();
      const p = f.requester.publicKey, u = await this.client.core.crypto.generateKeyPair(), m = du(p), A = { type: Hn, receiverPublicKey: p, senderPublicKey: u }, M = [], I = [];
      for (const L of s) {
        if (!await lg({ cacao: L, projectId: this.client.core.projectId })) {
          a.setError(co.invalid_cacao);
          const z = Lt("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
          throw await this.sendError({ id: i, topic: m, error: z, encodeOpts: A }), new Error(z.message);
        }
        a.addTrace(Cs.cacaos_verified);
        const { p: K } = L, F = lu(K.resources), V = [hg(K.iss)], B = Su(K.iss);
        if (F) {
          const z = dg(F), q = pg(F);
          M.push(...z), V.push(...q);
        }
        for (const z of V) I.push(`${z}:${B}`);
      }
      const C = await this.client.core.crypto.generateSharedKey(u, p);
      a.addTrace(Cs.create_authenticated_session_topic);
      let R;
      if ((M == null ? void 0 : M.length) > 0) {
        R = { topic: C, acknowledged: !0, self: { publicKey: u, metadata: this.client.metadata }, peer: { publicKey: p, metadata: f.requester.metadata }, controller: p, expiry: pr(ha), authentication: s, requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: f.pairingTopic, namespaces: Eg([...new Set(M)], [...new Set(I)]), transportType: h }, a.addTrace(Cs.subscribing_authenticated_session_topic);
        try {
          await this.client.core.relayer.subscribe(C, { transportType: h });
        } catch (L) {
          throw a.setError(co.subscribe_authenticated_session_topic_failure), L;
        }
        a.addTrace(Cs.subscribe_authenticated_session_topic_success), await this.client.session.set(C, R), a.addTrace(Cs.store_authenticated_session), await this.client.core.pairing.updateMetadata({ topic: f.pairingTopic, metadata: f.requester.metadata });
      }
      a.addTrace(Cs.publishing_authenticated_session_approve);
      try {
        await this.sendResult({ topic: m, id: i, result: { cacaos: s, responder: { publicKey: u, metadata: this.client.metadata } }, encodeOpts: A, throwOnFailedPublish: !0, appLink: this.getAppLinkIfEnabled(f.requester.metadata, h) });
      } catch (L) {
        throw a.setError(co.authenticated_session_approve_publish_failure), L;
      }
      return await this.client.auth.requests.delete(i, { message: "fulfilled", code: 0 }), await this.client.core.pairing.activate({ topic: f.pairingTopic }), this.client.core.eventClient.deleteEvent({ eventId: a.eventId }), { session: R };
    }, this.rejectSessionAuthenticate = async (t) => {
      this.isInitialized();
      const { id: i, reason: s } = t, a = this.getPendingAuthRequest(i);
      if (!a) throw new Error(`Could not find pending auth request with id ${i}`);
      a.transportType === Vt.relay && await this.confirmOnlineStateOrThrow();
      const f = a.requester.publicKey, h = await this.client.core.crypto.generateKeyPair(), p = du(f), u = { type: Hn, receiverPublicKey: f, senderPublicKey: h };
      await this.sendError({ id: i, topic: p, error: s, encodeOpts: u, rpcOpts: mr.wc_sessionAuthenticate.reject, appLink: this.getAppLinkIfEnabled(a.requester.metadata, a.transportType) }), await this.client.auth.requests.delete(i, { message: "rejected", code: 0 }), await this.client.proposal.delete(i, Lt("USER_DISCONNECTED"));
    }, this.formatAuthMessage = (t) => {
      this.isInitialized();
      const { request: i, iss: s } = t;
      return Jb(i, s);
    }, this.processRelayMessageCache = () => {
      setTimeout(async () => {
        if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0; ) try {
          const t = this.relayMessageCache.shift();
          t && await this.onRelayMessage(t);
        } catch (t) {
          this.client.logger.error(t);
        }
      }, 50);
    }, this.cleanupDuplicatePairings = async (t) => {
      if (t.pairingTopic) try {
        const i = this.client.core.pairing.pairings.get(t.pairingTopic), s = this.client.core.pairing.pairings.getAll().filter((a) => {
          var f, h;
          return ((f = a.peerMetadata) == null ? void 0 : f.url) && ((h = a.peerMetadata) == null ? void 0 : h.url) === t.peer.metadata.url && a.topic && a.topic !== i.topic;
        });
        if (s.length === 0) return;
        this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`), await Promise.all(s.map((a) => this.client.core.pairing.disconnect({ topic: a.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.deleteSession = async (t) => {
      var i;
      const { topic: s, expirerHasDeleted: a = !1, emitEvent: f = !0, id: h = 0 } = t, { self: p } = this.client.session.get(s);
      await this.client.core.relayer.unsubscribe(s), await this.client.session.delete(s, Lt("USER_DISCONNECTED")), this.addToRecentlyDeleted(s, "session"), this.client.core.crypto.keychain.has(p.publicKey) && await this.client.core.crypto.deleteKeyPair(p.publicKey), this.client.core.crypto.keychain.has(s) && await this.client.core.crypto.deleteSymKey(s), a || this.client.core.expirer.del(s), this.client.core.storage.removeItem(pv).catch((u) => this.client.logger.warn(u)), this.getPendingSessionRequests().forEach((u) => {
        u.topic === s && this.deletePendingSessionRequest(u.id, Lt("USER_DISCONNECTED"));
      }), s === ((i = this.sessionRequestQueue.queue[0]) == null ? void 0 : i.topic) && (this.sessionRequestQueue.state = un.idle), f && this.client.events.emit("session_delete", { id: h, topic: s });
    }, this.deleteProposal = async (t, i) => {
      if (i) try {
        const s = this.client.proposal.get(t), a = this.client.core.eventClient.getEvent({ topic: s.pairingTopic });
        a == null || a.setError(Ps.proposal_expired);
      } catch {
      }
      await Promise.all([this.client.proposal.delete(t, Lt("USER_DISCONNECTED")), i ? Promise.resolve() : this.client.core.expirer.del(t)]), this.addToRecentlyDeleted(t, "proposal");
    }, this.deletePendingSessionRequest = async (t, i, s = !1) => {
      await Promise.all([this.client.pendingRequest.delete(t, i), s ? Promise.resolve() : this.client.core.expirer.del(t)]), this.addToRecentlyDeleted(t, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((a) => a.id !== t), s && (this.sessionRequestQueue.state = un.idle, this.client.events.emit("session_request_expire", { id: t }));
    }, this.deletePendingAuthRequest = async (t, i, s = !1) => {
      await Promise.all([this.client.auth.requests.delete(t, i), s ? Promise.resolve() : this.client.core.expirer.del(t)]);
    }, this.setExpiry = async (t, i) => {
      this.client.session.keys.includes(t) && (this.client.core.expirer.set(t, i), await this.client.session.update(t, { expiry: i }));
    }, this.setProposal = async (t, i) => {
      this.client.core.expirer.set(t, pr(mr.wc_sessionPropose.req.ttl)), await this.client.proposal.set(t, i);
    }, this.setAuthRequest = async (t, i) => {
      const { request: s, pairingTopic: a, transportType: f = Vt.relay } = i;
      this.client.core.expirer.set(t, s.expiryTimestamp), await this.client.auth.requests.set(t, { authPayload: s.authPayload, requester: s.requester, expiryTimestamp: s.expiryTimestamp, id: t, pairingTopic: a, verifyContext: s.verifyContext, transportType: f });
    }, this.setPendingSessionRequest = async (t) => {
      const { id: i, topic: s, params: a, verifyContext: f } = t, h = a.request.expiryTimestamp || pr(mr.wc_sessionRequest.req.ttl);
      this.client.core.expirer.set(i, h), await this.client.pendingRequest.set(i, { id: i, topic: s, params: a, verifyContext: f });
    }, this.sendRequest = async (t) => {
      const { topic: i, method: s, params: a, expiry: f, relayRpcId: h, clientRpcId: p, throwOnFailedPublish: u, appLink: m } = t, A = fs(s, a, p);
      let M;
      const I = !!m;
      try {
        const L = I ? so : us;
        M = await this.client.core.crypto.encode(i, A, { encoding: L });
      } catch (L) {
        throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${i} failed`), L;
      }
      let C;
      if (BP.includes(s)) {
        const L = jn(JSON.stringify(A)), K = jn(M);
        C = await this.client.core.verify.register({ id: K, decryptedId: L });
      }
      const R = mr[s].req;
      if (R.attestation = C, f && (R.ttl = f), h && (R.id = h), this.client.core.history.set(i, A), I) {
        const L = Zc(m, i, M);
        await global.Linking.openURL(L, this.client.name);
      } else {
        const L = mr[s].req;
        f && (L.ttl = f), h && (L.id = h), u ? (L.internal = Wi(tr({}, L.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, M, L)) : this.client.core.relayer.publish(i, M, L).catch((K) => this.client.logger.error(K));
      }
      return A.id;
    }, this.sendResult = async (t) => {
      const { id: i, topic: s, result: a, throwOnFailedPublish: f, encodeOpts: h, appLink: p } = t, u = Uu(i, a);
      let m;
      const A = p && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const I = A ? so : us;
        m = await this.client.core.crypto.encode(s, u, Wi(tr({}, h || {}), { encoding: I }));
      } catch (I) {
        throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s} failed`), I;
      }
      let M;
      try {
        M = await this.client.core.history.get(s, i);
      } catch (I) {
        throw this.client.logger.error(`sendResult() -> history.get(${s}, ${i}) failed`), I;
      }
      if (A) {
        const I = Zc(p, s, m);
        await global.Linking.openURL(I, this.client.name);
      } else {
        const I = mr[M.request.method].res;
        f ? (I.internal = Wi(tr({}, I.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, m, I)) : this.client.core.relayer.publish(s, m, I).catch((C) => this.client.logger.error(C));
      }
      await this.client.core.history.resolve(u);
    }, this.sendError = async (t) => {
      const { id: i, topic: s, error: a, encodeOpts: f, rpcOpts: h, appLink: p } = t, u = zu(i, a);
      let m;
      const A = p && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const I = A ? so : us;
        m = await this.client.core.crypto.encode(s, u, Wi(tr({}, f || {}), { encoding: I }));
      } catch (I) {
        throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s} failed`), I;
      }
      let M;
      try {
        M = await this.client.core.history.get(s, i);
      } catch (I) {
        throw this.client.logger.error(`sendError() -> history.get(${s}, ${i}) failed`), I;
      }
      if (A) {
        const I = Zc(p, s, m);
        await global.Linking.openURL(I, this.client.name);
      } else {
        const I = h || mr[M.request.method].res;
        this.client.core.relayer.publish(s, m, I);
      }
      await this.client.core.history.resolve(u);
    }, this.cleanup = async () => {
      const t = [], i = [];
      this.client.session.getAll().forEach((s) => {
        let a = !1;
        ns(s.expiry) && (a = !0), this.client.core.crypto.keychain.has(s.topic) || (a = !0), a && t.push(s.topic);
      }), this.client.proposal.getAll().forEach((s) => {
        ns(s.expiryTimestamp) && i.push(s.id);
      }), await Promise.all([...t.map((s) => this.deleteSession({ topic: s })), ...i.map((s) => this.deleteProposal(s))]);
    }, this.onRelayEventRequest = async (t) => {
      this.requestQueue.queue.push(t), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === un.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = un.active;
        const t = this.requestQueue.queue.shift();
        if (t) try {
          await this.processRequest(t);
        } catch (i) {
          this.client.logger.warn(i);
        }
      }
      this.requestQueue.state = un.idle;
    }, this.processRequest = async (t) => {
      const { topic: i, payload: s, attestation: a, transportType: f, encryptedId: h } = t, p = s.method;
      if (!this.shouldIgnorePairingRequest({ topic: i, requestMethod: p })) switch (p) {
        case "wc_sessionPropose":
          return await this.onSessionProposeRequest({ topic: i, payload: s, attestation: a, encryptedId: h });
        case "wc_sessionSettle":
          return await this.onSessionSettleRequest(i, s);
        case "wc_sessionUpdate":
          return await this.onSessionUpdateRequest(i, s);
        case "wc_sessionExtend":
          return await this.onSessionExtendRequest(i, s);
        case "wc_sessionPing":
          return await this.onSessionPingRequest(i, s);
        case "wc_sessionDelete":
          return await this.onSessionDeleteRequest(i, s);
        case "wc_sessionRequest":
          return await this.onSessionRequest({ topic: i, payload: s, attestation: a, encryptedId: h, transportType: f });
        case "wc_sessionEvent":
          return await this.onSessionEventRequest(i, s);
        case "wc_sessionAuthenticate":
          return await this.onSessionAuthenticateRequest({ topic: i, payload: s, attestation: a, encryptedId: h, transportType: f });
        default:
          return this.client.logger.info(`Unsupported request method ${p}`);
      }
    }, this.onRelayEventResponse = async (t) => {
      const { topic: i, payload: s, transportType: a } = t, f = (await this.client.core.history.get(i, s.id)).request.method;
      switch (f) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(i, s, a);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(i, s);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(i, s);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(i, s);
        case "wc_sessionPing":
          return this.onSessionPingResponse(i, s);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(i, s);
        case "wc_sessionAuthenticate":
          return this.onSessionAuthenticateResponse(i, s);
        default:
          return this.client.logger.info(`Unsupported response method ${f}`);
      }
    }, this.onRelayEventUnknownPayload = (t) => {
      const { topic: i } = t, { message: s } = Ae("MISSING_OR_INVALID", `Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(s);
    }, this.shouldIgnorePairingRequest = (t) => {
      const { topic: i, requestMethod: s } = t, a = this.expectedPairingMethodMap.get(i);
      return !a || a.includes(s) ? !1 : !!(a.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
    }, this.onSessionProposeRequest = async (t) => {
      const { topic: i, payload: s, attestation: a, encryptedId: f } = t, { params: h, id: p } = s;
      try {
        const u = this.client.core.eventClient.getEvent({ topic: i });
        this.isValidConnect(tr({}, s.params));
        const m = h.expiryTimestamp || pr(mr.wc_sessionPropose.req.ttl), A = tr({ id: p, pairingTopic: i, expiryTimestamp: m }, h);
        await this.setProposal(p, A);
        const M = await this.getVerifyContext({ attestationId: a, hash: jn(JSON.stringify(s)), encryptedId: f, metadata: A.proposer.metadata });
        this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), u == null || u.setError(Un.proposal_listener_not_found)), u == null || u.addTrace(fn.emit_session_proposal), this.client.events.emit("session_proposal", { id: p, params: A, verifyContext: M });
      } catch (u) {
        await this.sendError({ id: p, topic: i, error: u, rpcOpts: mr.wc_sessionPropose.autoReject }), this.client.logger.error(u);
      }
    }, this.onSessionProposeResponse = async (t, i, s) => {
      const { id: a } = i;
      if (dn(i)) {
        const { result: f } = i;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: f });
        const h = this.client.proposal.get(a);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: h });
        const p = h.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: p });
        const u = f.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: u });
        const m = await this.client.core.crypto.generateSharedKey(p, u);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: m });
        const A = await this.client.core.relayer.subscribe(m, { transportType: s });
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: A }), await this.client.core.pairing.activate({ topic: t });
      } else if (Oi(i)) {
        await this.client.proposal.delete(a, Lt("USER_DISCONNECTED"));
        const f = St("session_connect");
        if (this.events.listenerCount(f) === 0) throw new Error(`emitting ${f} without any listeners, 954`);
        this.events.emit(St("session_connect"), { error: i.error });
      }
    }, this.onSessionSettleRequest = async (t, i) => {
      const { id: s, params: a } = i;
      try {
        this.isValidSessionSettleRequest(a);
        const { relay: f, controller: h, expiry: p, namespaces: u, sessionProperties: m, sessionConfig: A } = i.params, M = Wi(tr(tr({ topic: t, relay: f, expiry: p, namespaces: u, acknowledged: !0, pairingTopic: "", requiredNamespaces: {}, optionalNamespaces: {}, controller: h.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: h.publicKey, metadata: h.metadata } }, m && { sessionProperties: m }), A && { sessionConfig: A }), { transportType: Vt.relay }), I = St("session_connect");
        if (this.events.listenerCount(I) === 0) throw new Error(`emitting ${I} without any listeners 997`);
        this.events.emit(St("session_connect"), { session: M }), await this.sendResult({ id: i.id, topic: t, result: !0, throwOnFailedPublish: !0 });
      } catch (f) {
        await this.sendError({ id: s, topic: t, error: f }), this.client.logger.error(f);
      }
    }, this.onSessionSettleResponse = async (t, i) => {
      const { id: s } = i;
      dn(i) ? (await this.client.session.update(t, { acknowledged: !0 }), this.events.emit(St("session_approve", s), {})) : Oi(i) && (await this.client.session.delete(t, Lt("USER_DISCONNECTED")), this.events.emit(St("session_approve", s), { error: i.error }));
    }, this.onSessionUpdateRequest = async (t, i) => {
      const { params: s, id: a } = i;
      try {
        const f = `${t}_session_update`, h = ao.get(f);
        if (h && this.isRequestOutOfSync(h, a)) {
          this.client.logger.info(`Discarding out of sync request - ${a}`), this.sendError({ id: a, topic: t, error: Lt("INVALID_UPDATE_REQUEST") });
          return;
        }
        this.isValidUpdate(tr({ topic: t }, s));
        try {
          ao.set(f, a), await this.client.session.update(t, { namespaces: s.namespaces }), await this.sendResult({ id: a, topic: t, result: !0, throwOnFailedPublish: !0 });
        } catch (p) {
          throw ao.delete(f), p;
        }
        this.client.events.emit("session_update", { id: a, topic: t, params: s });
      } catch (f) {
        await this.sendError({ id: a, topic: t, error: f }), this.client.logger.error(f);
      }
    }, this.isRequestOutOfSync = (t, i) => parseInt(i.toString().slice(0, -3)) <= parseInt(t.toString().slice(0, -3)), this.onSessionUpdateResponse = (t, i) => {
      const { id: s } = i, a = St("session_update", s);
      if (this.events.listenerCount(a) === 0) throw new Error(`emitting ${a} without any listeners`);
      dn(i) ? this.events.emit(St("session_update", s), {}) : Oi(i) && this.events.emit(St("session_update", s), { error: i.error });
    }, this.onSessionExtendRequest = async (t, i) => {
      const { id: s } = i;
      try {
        this.isValidExtend({ topic: t }), await this.setExpiry(t, pr(ha)), await this.sendResult({ id: s, topic: t, result: !0, throwOnFailedPublish: !0 }), this.client.events.emit("session_extend", { id: s, topic: t });
      } catch (a) {
        await this.sendError({ id: s, topic: t, error: a }), this.client.logger.error(a);
      }
    }, this.onSessionExtendResponse = (t, i) => {
      const { id: s } = i, a = St("session_extend", s);
      if (this.events.listenerCount(a) === 0) throw new Error(`emitting ${a} without any listeners`);
      dn(i) ? this.events.emit(St("session_extend", s), {}) : Oi(i) && this.events.emit(St("session_extend", s), { error: i.error });
    }, this.onSessionPingRequest = async (t, i) => {
      const { id: s } = i;
      try {
        this.isValidPing({ topic: t }), await this.sendResult({ id: s, topic: t, result: !0, throwOnFailedPublish: !0 }), this.client.events.emit("session_ping", { id: s, topic: t });
      } catch (a) {
        await this.sendError({ id: s, topic: t, error: a }), this.client.logger.error(a);
      }
    }, this.onSessionPingResponse = (t, i) => {
      const { id: s } = i, a = St("session_ping", s);
      if (this.events.listenerCount(a) === 0) throw new Error(`emitting ${a} without any listeners`);
      setTimeout(() => {
        dn(i) ? this.events.emit(St("session_ping", s), {}) : Oi(i) && this.events.emit(St("session_ping", s), { error: i.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (t, i) => {
      const { id: s } = i;
      try {
        this.isValidDisconnect({ topic: t, reason: i.params }), Promise.all([new Promise((a) => {
          this.client.core.relayer.once(zr.publish, async () => {
            a(await this.deleteSession({ topic: t, id: s }));
          });
        }), this.sendResult({ id: s, topic: t, result: !0, throwOnFailedPublish: !0 }), this.cleanupPendingSentRequestsForTopic({ topic: t, error: Lt("USER_DISCONNECTED") })]).catch((a) => this.client.logger.error(a));
      } catch (a) {
        this.client.logger.error(a);
      }
    }, this.onSessionRequest = async (t) => {
      var i, s, a;
      const { topic: f, payload: h, attestation: p, encryptedId: u, transportType: m } = t, { id: A, params: M } = h;
      try {
        await this.isValidRequest(tr({ topic: f }, M));
        const I = this.client.session.get(f), C = await this.getVerifyContext({ attestationId: p, hash: jn(JSON.stringify(fs("wc_sessionRequest", M, A))), encryptedId: u, metadata: I.peer.metadata, transportType: m }), R = { id: A, topic: f, params: M, verifyContext: C };
        await this.setPendingSessionRequest(R), m === Vt.link_mode && (i = I.peer.metadata.redirect) != null && i.universal && this.client.core.addLinkModeSupportedApp((s = I.peer.metadata.redirect) == null ? void 0 : s.universal), (a = this.client.signConfig) != null && a.disableRequestQueue ? this.emitSessionRequest(R) : (this.addSessionRequestToSessionRequestQueue(R), this.processSessionRequestQueue());
      } catch (I) {
        await this.sendError({ id: A, topic: f, error: I }), this.client.logger.error(I);
      }
    }, this.onSessionRequestResponse = (t, i) => {
      const { id: s } = i, a = St("session_request", s);
      if (this.events.listenerCount(a) === 0) throw new Error(`emitting ${a} without any listeners`);
      dn(i) ? this.events.emit(St("session_request", s), { result: i.result }) : Oi(i) && this.events.emit(St("session_request", s), { error: i.error });
    }, this.onSessionEventRequest = async (t, i) => {
      const { id: s, params: a } = i;
      try {
        const f = `${t}_session_event_${a.event.name}`, h = ao.get(f);
        if (h && this.isRequestOutOfSync(h, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidEmit(tr({ topic: t }, a)), this.client.events.emit("session_event", { id: s, topic: t, params: a }), ao.set(f, s);
      } catch (f) {
        await this.sendError({ id: s, topic: t, error: f }), this.client.logger.error(f);
      }
    }, this.onSessionAuthenticateResponse = (t, i) => {
      const { id: s } = i;
      this.client.logger.trace({ type: "method", method: "onSessionAuthenticateResponse", topic: t, payload: i }), dn(i) ? this.events.emit(St("session_request", s), { result: i.result }) : Oi(i) && this.events.emit(St("session_request", s), { error: i.error });
    }, this.onSessionAuthenticateRequest = async (t) => {
      var i;
      const { topic: s, payload: a, attestation: f, encryptedId: h, transportType: p } = t;
      try {
        const { requester: u, authPayload: m, expiryTimestamp: A } = a.params, M = await this.getVerifyContext({ attestationId: f, hash: jn(JSON.stringify(a)), encryptedId: h, metadata: u.metadata, transportType: p }), I = { requester: u, pairingTopic: s, id: a.id, authPayload: m, verifyContext: M, expiryTimestamp: A };
        await this.setAuthRequest(a.id, { request: I, pairingTopic: s, transportType: p }), p === Vt.link_mode && (i = u.metadata.redirect) != null && i.universal && this.client.core.addLinkModeSupportedApp(u.metadata.redirect.universal), this.client.events.emit("session_authenticate", { topic: s, params: a.params, id: a.id, verifyContext: M });
      } catch (u) {
        this.client.logger.error(u);
        const m = a.params.requester.publicKey, A = await this.client.core.crypto.generateKeyPair(), M = this.getAppLinkIfEnabled(a.params.requester.metadata, p), I = { type: Hn, receiverPublicKey: m, senderPublicKey: A };
        await this.sendError({ id: a.id, topic: s, error: u, encodeOpts: I, rpcOpts: mr.wc_sessionAuthenticate.autoReject, appLink: M });
      }
    }, this.addSessionRequestToSessionRequestQueue = (t) => {
      this.sessionRequestQueue.queue.push(t);
    }, this.cleanupAfterResponse = (t) => {
      this.deletePendingSessionRequest(t.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = un.idle, this.processSessionRequestQueue();
      }, Me.toMiliseconds(this.requestQueueDelay));
    }, this.cleanupPendingSentRequestsForTopic = ({ topic: t, error: i }) => {
      const s = this.client.core.history.pending;
      s.length > 0 && s.filter((a) => a.topic === t && a.request.method === "wc_sessionRequest").forEach((a) => {
        const f = a.request.id, h = St("session_request", f);
        if (this.events.listenerCount(h) === 0) throw new Error(`emitting ${h} without any listeners`);
        this.events.emit(St("session_request", a.request.id), { error: i });
      });
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === un.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const t = this.sessionRequestQueue.queue[0];
      if (!t) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = un.active, this.emitSessionRequest(t);
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.emitSessionRequest = (t) => {
      this.client.events.emit("session_request", t);
    }, this.onPairingCreated = (t) => {
      if (t.methods && this.expectedPairingMethodMap.set(t.topic, t.methods), t.active) return;
      const i = this.client.proposal.getAll().find((s) => s.pairingTopic === t.topic);
      i && this.onSessionProposeRequest({ topic: t.topic, payload: fs("wc_sessionPropose", { requiredNamespaces: i.requiredNamespaces, optionalNamespaces: i.optionalNamespaces, relays: i.relays, proposer: i.proposer, sessionProperties: i.sessionProperties }, i.id) });
    }, this.isValidConnect = async (t) => {
      if (!ti(t)) {
        const { message: p } = Ae("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
        throw new Error(p);
      }
      const { pairingTopic: i, requiredNamespaces: s, optionalNamespaces: a, sessionProperties: f, relays: h } = t;
      if ($r(i) || await this.isValidPairingTopic(i), !_x(h)) {
        const { message: p } = Ae("MISSING_OR_INVALID", `connect() relays: ${h}`);
        throw new Error(p);
      }
      !$r(s) && Io(s) !== 0 && this.validateNamespaces(s, "requiredNamespaces"), !$r(a) && Io(a) !== 0 && this.validateNamespaces(a, "optionalNamespaces"), $r(f) || this.validateSessionProps(f, "sessionProperties");
    }, this.validateNamespaces = (t, i) => {
      const s = wx(t, "connect()", i);
      if (s) throw new Error(s.message);
    }, this.isValidApprove = async (t) => {
      if (!ti(t)) throw new Error(Ae("MISSING_OR_INVALID", `approve() params: ${t}`).message);
      const { id: i, namespaces: s, relayProtocol: a, sessionProperties: f } = t;
      this.checkRecentlyDeleted(i), await this.isValidProposalId(i);
      const h = this.client.proposal.get(i), p = ol(s, "approve()");
      if (p) throw new Error(p.message);
      const u = Mg(h.requiredNamespaces, s, "approve()");
      if (u) throw new Error(u.message);
      if (!or(a, !0)) {
        const { message: m } = Ae("MISSING_OR_INVALID", `approve() relayProtocol: ${a}`);
        throw new Error(m);
      }
      $r(f) || this.validateSessionProps(f, "sessionProperties");
    }, this.isValidReject = async (t) => {
      if (!ti(t)) {
        const { message: a } = Ae("MISSING_OR_INVALID", `reject() params: ${t}`);
        throw new Error(a);
      }
      const { id: i, reason: s } = t;
      if (this.checkRecentlyDeleted(i), await this.isValidProposalId(i), !Ex(s)) {
        const { message: a } = Ae("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
        throw new Error(a);
      }
    }, this.isValidSessionSettleRequest = (t) => {
      if (!ti(t)) {
        const { message: u } = Ae("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
        throw new Error(u);
      }
      const { relay: i, controller: s, namespaces: a, expiry: f } = t;
      if (!i2(i)) {
        const { message: u } = Ae("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(u);
      }
      const h = px(s, "onSessionSettleRequest()");
      if (h) throw new Error(h.message);
      const p = ol(a, "onSessionSettleRequest()");
      if (p) throw new Error(p.message);
      if (ns(f)) {
        const { message: u } = Ae("EXPIRED", "onSessionSettleRequest()");
        throw new Error(u);
      }
    }, this.isValidUpdate = async (t) => {
      if (!ti(t)) {
        const { message: p } = Ae("MISSING_OR_INVALID", `update() params: ${t}`);
        throw new Error(p);
      }
      const { topic: i, namespaces: s } = t;
      this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i);
      const a = this.client.session.get(i), f = ol(s, "update()");
      if (f) throw new Error(f.message);
      const h = Mg(a.requiredNamespaces, s, "update()");
      if (h) throw new Error(h.message);
    }, this.isValidExtend = async (t) => {
      if (!ti(t)) {
        const { message: s } = Ae("MISSING_OR_INVALID", `extend() params: ${t}`);
        throw new Error(s);
      }
      const { topic: i } = t;
      this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i);
    }, this.isValidRequest = async (t) => {
      if (!ti(t)) {
        const { message: p } = Ae("MISSING_OR_INVALID", `request() params: ${t}`);
        throw new Error(p);
      }
      const { topic: i, request: s, chainId: a, expiry: f } = t;
      this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i);
      const { namespaces: h } = this.client.session.get(i);
      if (!Sg(h, a)) {
        const { message: p } = Ae("MISSING_OR_INVALID", `request() chainId: ${a}`);
        throw new Error(p);
      }
      if (!xx(s)) {
        const { message: p } = Ae("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
        throw new Error(p);
      }
      if (!Ix(h, a, s.method)) {
        const { message: p } = Ae("MISSING_OR_INVALID", `request() method: ${s.method}`);
        throw new Error(p);
      }
      if (f && !Ox(f, bl)) {
        const { message: p } = Ae("MISSING_OR_INVALID", `request() expiry: ${f}. Expiry must be a number (in seconds) between ${bl.min} and ${bl.max}`);
        throw new Error(p);
      }
    }, this.isValidRespond = async (t) => {
      var i;
      if (!ti(t)) {
        const { message: f } = Ae("MISSING_OR_INVALID", `respond() params: ${t}`);
        throw new Error(f);
      }
      const { topic: s, response: a } = t;
      try {
        await this.isValidSessionTopic(s);
      } catch (f) {
        throw (i = t == null ? void 0 : t.response) != null && i.id && this.cleanupAfterResponse(t), f;
      }
      if (!Sx(a)) {
        const { message: f } = Ae("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(a)}`);
        throw new Error(f);
      }
    }, this.isValidPing = async (t) => {
      if (!ti(t)) {
        const { message: s } = Ae("MISSING_OR_INVALID", `ping() params: ${t}`);
        throw new Error(s);
      }
      const { topic: i } = t;
      await this.isValidSessionOrPairingTopic(i);
    }, this.isValidEmit = async (t) => {
      if (!ti(t)) {
        const { message: h } = Ae("MISSING_OR_INVALID", `emit() params: ${t}`);
        throw new Error(h);
      }
      const { topic: i, event: s, chainId: a } = t;
      await this.isValidSessionTopic(i);
      const { namespaces: f } = this.client.session.get(i);
      if (!Sg(f, a)) {
        const { message: h } = Ae("MISSING_OR_INVALID", `emit() chainId: ${a}`);
        throw new Error(h);
      }
      if (!Mx(s)) {
        const { message: h } = Ae("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(h);
      }
      if (!Dx(f, a, s.name)) {
        const { message: h } = Ae("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(h);
      }
    }, this.isValidDisconnect = async (t) => {
      if (!ti(t)) {
        const { message: s } = Ae("MISSING_OR_INVALID", `disconnect() params: ${t}`);
        throw new Error(s);
      }
      const { topic: i } = t;
      await this.isValidSessionOrPairingTopic(i);
    }, this.isValidAuthenticate = (t) => {
      const { chains: i, uri: s, domain: a, nonce: f } = t;
      if (!Array.isArray(i) || i.length === 0) throw new Error("chains is required and must be a non-empty array");
      if (!or(s, !1)) throw new Error("uri is required parameter");
      if (!or(a, !1)) throw new Error("domain is required parameter");
      if (!or(f, !1)) throw new Error("nonce is required parameter");
      if ([...new Set(i.map((p) => bo(p).namespace))].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
      const { namespace: h } = bo(i[0]);
      if (h !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
    }, this.getVerifyContext = async (t) => {
      const { attestationId: i, hash: s, encryptedId: a, metadata: f, transportType: h } = t, p = { verified: { verifyUrl: f.verifyUrl || Ao, validation: "UNKNOWN", origin: f.url || "" } };
      try {
        if (h === Vt.link_mode) {
          const m = this.getAppLinkIfEnabled(f, h);
          return p.verified.validation = m && new URL(m).origin === new URL(f.url).origin ? "VALID" : "INVALID", p;
        }
        const u = await this.client.core.verify.resolve({ attestationId: i, hash: s, encryptedId: a, verifyUrl: f.verifyUrl });
        u && (p.verified.origin = u.origin, p.verified.isScam = u.isScam, p.verified.validation = u.origin === new URL(f.url).origin ? "VALID" : "INVALID");
      } catch (u) {
        this.client.logger.warn(u);
      }
      return this.client.logger.debug(`Verify context: ${JSON.stringify(p)}`), p;
    }, this.validateSessionProps = (t, i) => {
      Object.values(t).forEach((s) => {
        if (!or(s, !1)) {
          const { message: a } = Ae("MISSING_OR_INVALID", `${i} must be in Record<string, string> format. Received: ${JSON.stringify(s)}`);
          throw new Error(a);
        }
      });
    }, this.getPendingAuthRequest = (t) => {
      const i = this.client.auth.requests.get(t);
      return typeof i == "object" ? i : void 0;
    }, this.addToRecentlyDeleted = (t, i) => {
      if (this.recentlyDeletedMap.set(t, i), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
        let s = 0;
        const a = this.recentlyDeletedLimit / 2;
        for (const f of this.recentlyDeletedMap.keys()) {
          if (s++ >= a) break;
          this.recentlyDeletedMap.delete(f);
        }
      }
    }, this.checkRecentlyDeleted = (t) => {
      const i = this.recentlyDeletedMap.get(t);
      if (i) {
        const { message: s } = Ae("MISSING_OR_INVALID", `Record was recently deleted - ${i}: ${t}`);
        throw new Error(s);
      }
    }, this.isLinkModeEnabled = (t, i) => {
      var s, a, f, h, p, u, m, A, M;
      return !t || i !== Vt.link_mode ? !1 : ((a = (s = this.client.metadata) == null ? void 0 : s.redirect) == null ? void 0 : a.linkMode) === !0 && ((h = (f = this.client.metadata) == null ? void 0 : f.redirect) == null ? void 0 : h.universal) !== void 0 && ((u = (p = this.client.metadata) == null ? void 0 : p.redirect) == null ? void 0 : u.universal) !== "" && ((m = t == null ? void 0 : t.redirect) == null ? void 0 : m.universal) !== void 0 && ((A = t == null ? void 0 : t.redirect) == null ? void 0 : A.universal) !== "" && ((M = t == null ? void 0 : t.redirect) == null ? void 0 : M.linkMode) === !0 && this.client.core.linkModeSupportedApps.includes(t.redirect.universal) && typeof (global == null ? void 0 : global.Linking) < "u";
    }, this.getAppLinkIfEnabled = (t, i) => {
      var s;
      return this.isLinkModeEnabled(t, i) ? (s = t == null ? void 0 : t.redirect) == null ? void 0 : s.universal : void 0;
    }, this.handleLinkModeMessage = ({ url: t }) => {
      if (!t || !t.includes("wc_ev") || !t.includes("topic")) return;
      const i = z1(t, "topic") || "", s = decodeURIComponent(z1(t, "wc_ev") || ""), a = this.client.session.keys.includes(i);
      a && this.client.session.update(i, { transportType: Vt.link_mode }), this.client.core.dispatchEnvelope({ topic: i, message: s, sessionExists: a });
    }, this.registerLinkModeListeners = async () => {
      var t;
      if (Ql() || Aa() && (t = this.client.metadata.redirect) != null && t.linkMode) {
        const i = global == null ? void 0 : global.Linking;
        if (typeof i < "u") {
          i.addEventListener("url", this.handleLinkModeMessage, this.client.name);
          const s = await i.getInitialURL();
          s && setTimeout(() => {
            this.handleLinkModeMessage({ url: s });
          }, 50);
        }
      }
    };
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async confirmOnlineStateOrThrow() {
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(zr.message, (e) => {
      !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(e) : this.onRelayMessage(e);
    });
  }
  async onRelayMessage(e) {
    const { topic: t, message: i, attestation: s, transportType: a } = e, { publicKey: f } = this.client.auth.authKeys.keys.includes(vu) ? this.client.auth.authKeys.get(vu) : { responseTopic: void 0, publicKey: void 0 }, h = await this.client.core.crypto.decode(t, i, { receiverPublicKey: f, encoding: a === Vt.link_mode ? so : us });
    try {
      ud(h) ? (this.client.core.history.set(t, h), this.onRelayEventRequest({ topic: t, payload: h, attestation: s, transportType: a, encryptedId: jn(i) })) : ju(h) ? (await this.client.core.history.resolve(h), await this.onRelayEventResponse({ topic: t, payload: h, transportType: a }), this.client.core.history.delete(t, h.id)) : this.onRelayEventUnknownPayload({ topic: t, payload: h, transportType: a });
    } catch (p) {
      this.client.logger.error(p);
    }
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Pi.expired, async (e) => {
      const { topic: t, id: i } = lb(e.target);
      if (i && this.client.pendingRequest.keys.includes(i)) return await this.deletePendingSessionRequest(i, Ae("EXPIRED"), !0);
      if (i && this.client.auth.requests.keys.includes(i)) return await this.deletePendingAuthRequest(i, Ae("EXPIRED"), !0);
      t ? this.client.session.keys.includes(t) && (await this.deleteSession({ topic: t, expirerHasDeleted: !0 }), this.client.events.emit("session_expire", { topic: t })) : i && (await this.deleteProposal(i, !0), this.client.events.emit("proposal_expire", { id: i }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Rs.create, (e) => this.onPairingCreated(e)), this.client.core.pairing.events.on(Rs.delete, (e) => {
      this.addToRecentlyDeleted(e.topic, "pairing");
    });
  }
  isValidPairingTopic(e) {
    if (!or(e, !1)) {
      const { message: t } = Ae("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(t);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: t } = Ae("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(t);
    }
    if (ns(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: t } = Ae("EXPIRED", `pairing topic: ${e}`);
      throw new Error(t);
    }
  }
  async isValidSessionTopic(e) {
    if (!or(e, !1)) {
      const { message: t } = Ae("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(t);
    }
    if (this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e)) {
      const { message: t } = Ae("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(t);
    }
    if (ns(this.client.session.get(e).expiry)) {
      await this.deleteSession({ topic: e });
      const { message: t } = Ae("EXPIRED", `session topic: ${e}`);
      throw new Error(t);
    }
    if (!this.client.core.crypto.keychain.has(e)) {
      const { message: t } = Ae("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
      throw await this.deleteSession({ topic: e }), new Error(t);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
    else if (or(e, !1)) {
      const { message: t } = Ae("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(t);
    } else {
      const { message: t } = Ae("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(t);
    }
  }
  async isValidProposalId(e) {
    if (!Ax(e)) {
      const { message: t } = Ae("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(t);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: t } = Ae("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(t);
    }
    if (ns(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: t } = Ae("EXPIRED", `proposal id: ${e}`);
      throw new Error(t);
    }
  }
}
class JP extends ks {
  constructor(e, t) {
    super(e, t, NP, ld), this.core = e, this.logger = t;
  }
}
class YP extends ks {
  constructor(e, t) {
    super(e, t, TP, ld), this.core = e, this.logger = t;
  }
}
class QP extends ks {
  constructor(e, t) {
    super(e, t, FP, ld, (i) => i.id), this.core = e, this.logger = t;
  }
}
class XP extends ks {
  constructor(e, t) {
    super(e, t, zP, ku, () => vu), this.core = e, this.logger = t;
  }
}
class ZP extends ks {
  constructor(e, t) {
    super(e, t, jP, ku), this.core = e, this.logger = t;
  }
}
class eC extends ks {
  constructor(e, t) {
    super(e, t, $P, ku, (i) => i.id), this.core = e, this.logger = t;
  }
}
class tC {
  constructor(e, t) {
    this.core = e, this.logger = t, this.authKeys = new XP(this.core, this.logger), this.pairingTopics = new ZP(this.core, this.logger), this.requests = new eC(this.core, this.logger);
  }
  async init() {
    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
  }
}
class dd extends VS {
  constructor(e) {
    super(e), this.protocol = P2, this.version = C2, this.name = vl.name, this.events = new gi.EventEmitter(), this.on = (i, s) => this.events.on(i, s), this.once = (i, s) => this.events.once(i, s), this.off = (i, s) => this.events.off(i, s), this.removeListener = (i, s) => this.events.removeListener(i, s), this.removeAllListeners = (i) => this.events.removeAllListeners(i), this.connect = async (i) => {
      try {
        return await this.engine.connect(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.pair = async (i) => {
      try {
        return await this.engine.pair(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.approve = async (i) => {
      try {
        return await this.engine.approve(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.reject = async (i) => {
      try {
        return await this.engine.reject(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.update = async (i) => {
      try {
        return await this.engine.update(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.extend = async (i) => {
      try {
        return await this.engine.extend(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.request = async (i) => {
      try {
        return await this.engine.request(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.respond = async (i) => {
      try {
        return await this.engine.respond(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.ping = async (i) => {
      try {
        return await this.engine.ping(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.emit = async (i) => {
      try {
        return await this.engine.emit(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.disconnect = async (i) => {
      try {
        return await this.engine.disconnect(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.find = (i) => {
      try {
        return this.engine.find(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.authenticate = async (i, s) => {
      try {
        return await this.engine.authenticate(i, s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.formatAuthMessage = (i) => {
      try {
        return this.engine.formatAuthMessage(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.approveSessionAuthenticate = async (i) => {
      try {
        return await this.engine.approveSessionAuthenticate(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.rejectSessionAuthenticate = async (i) => {
      try {
        return await this.engine.rejectSessionAuthenticate(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.name = (e == null ? void 0 : e.name) || vl.name, this.metadata = (e == null ? void 0 : e.metadata) || ob(), this.signConfig = e == null ? void 0 : e.signConfig;
    const t = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Uo(Lu({ level: (e == null ? void 0 : e.logger) || vl.logger }));
    this.core = (e == null ? void 0 : e.core) || new RP(e), this.logger = Hr(t, this.name), this.session = new YP(this.core, this.logger), this.proposal = new JP(this.core, this.logger), this.pendingRequest = new QP(this.core, this.logger), this.engine = new WP(this), this.auth = new tC(this.core, this.logger);
  }
  static async init(e) {
    const t = new dd(e);
    return await t.initialize(), t;
  }
  get context() {
    return si(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success"), this.engine.processRelayMessageCache();
    } catch (e) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e;
    }
  }
}
var ru = { exports: {} }, bv;
function rC() {
  return bv || (bv = 1, function(r, e) {
    var t = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof ii < "u" && ii, i = function() {
      function a() {
        this.fetch = !1, this.DOMException = t.DOMException;
      }
      return a.prototype = t, new a();
    }();
    (function(a) {
      (function(f) {
        var h = typeof a < "u" && a || typeof self < "u" && self || // eslint-disable-next-line no-undef
        typeof ii < "u" && ii || {}, p = {
          searchParams: "URLSearchParams" in h,
          iterable: "Symbol" in h && "iterator" in Symbol,
          blob: "FileReader" in h && "Blob" in h && function() {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          }(),
          formData: "FormData" in h,
          arrayBuffer: "ArrayBuffer" in h
        };
        function u(l) {
          return l && DataView.prototype.isPrototypeOf(l);
        }
        if (p.arrayBuffer)
          var m = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ], A = ArrayBuffer.isView || function(l) {
            return l && m.indexOf(Object.prototype.toString.call(l)) > -1;
          };
        function M(l) {
          if (typeof l != "string" && (l = String(l)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(l) || l === "")
            throw new TypeError('Invalid character in header field name: "' + l + '"');
          return l.toLowerCase();
        }
        function I(l) {
          return typeof l != "string" && (l = String(l)), l;
        }
        function C(l) {
          var b = {
            next: function() {
              var _ = l.shift();
              return { done: _ === void 0, value: _ };
            }
          };
          return p.iterable && (b[Symbol.iterator] = function() {
            return b;
          }), b;
        }
        function R(l) {
          this.map = {}, l instanceof R ? l.forEach(function(b, _) {
            this.append(_, b);
          }, this) : Array.isArray(l) ? l.forEach(function(b) {
            if (b.length != 2)
              throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + b.length);
            this.append(b[0], b[1]);
          }, this) : l && Object.getOwnPropertyNames(l).forEach(function(b) {
            this.append(b, l[b]);
          }, this);
        }
        R.prototype.append = function(l, b) {
          l = M(l), b = I(b);
          var _ = this.map[l];
          this.map[l] = _ ? _ + ", " + b : b;
        }, R.prototype.delete = function(l) {
          delete this.map[M(l)];
        }, R.prototype.get = function(l) {
          return l = M(l), this.has(l) ? this.map[l] : null;
        }, R.prototype.has = function(l) {
          return this.map.hasOwnProperty(M(l));
        }, R.prototype.set = function(l, b) {
          this.map[M(l)] = I(b);
        }, R.prototype.forEach = function(l, b) {
          for (var _ in this.map)
            this.map.hasOwnProperty(_) && l.call(b, this.map[_], _, this);
        }, R.prototype.keys = function() {
          var l = [];
          return this.forEach(function(b, _) {
            l.push(_);
          }), C(l);
        }, R.prototype.values = function() {
          var l = [];
          return this.forEach(function(b) {
            l.push(b);
          }), C(l);
        }, R.prototype.entries = function() {
          var l = [];
          return this.forEach(function(b, _) {
            l.push([_, b]);
          }), C(l);
        }, p.iterable && (R.prototype[Symbol.iterator] = R.prototype.entries);
        function L(l) {
          if (!l._noBody) {
            if (l.bodyUsed)
              return Promise.reject(new TypeError("Already read"));
            l.bodyUsed = !0;
          }
        }
        function K(l) {
          return new Promise(function(b, _) {
            l.onload = function() {
              b(l.result);
            }, l.onerror = function() {
              _(l.error);
            };
          });
        }
        function F(l) {
          var b = new FileReader(), _ = K(b);
          return b.readAsArrayBuffer(l), _;
        }
        function V(l) {
          var b = new FileReader(), _ = K(b), D = /charset=([A-Za-z0-9_-]+)/.exec(l.type), x = D ? D[1] : "utf-8";
          return b.readAsText(l, x), _;
        }
        function B(l) {
          for (var b = new Uint8Array(l), _ = new Array(b.length), D = 0; D < b.length; D++)
            _[D] = String.fromCharCode(b[D]);
          return _.join("");
        }
        function z(l) {
          if (l.slice)
            return l.slice(0);
          var b = new Uint8Array(l.byteLength);
          return b.set(new Uint8Array(l)), b.buffer;
        }
        function q() {
          return this.bodyUsed = !1, this._initBody = function(l) {
            this.bodyUsed = this.bodyUsed, this._bodyInit = l, l ? typeof l == "string" ? this._bodyText = l : p.blob && Blob.prototype.isPrototypeOf(l) ? this._bodyBlob = l : p.formData && FormData.prototype.isPrototypeOf(l) ? this._bodyFormData = l : p.searchParams && URLSearchParams.prototype.isPrototypeOf(l) ? this._bodyText = l.toString() : p.arrayBuffer && p.blob && u(l) ? (this._bodyArrayBuffer = z(l.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : p.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(l) || A(l)) ? this._bodyArrayBuffer = z(l) : this._bodyText = l = Object.prototype.toString.call(l) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof l == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : p.searchParams && URLSearchParams.prototype.isPrototypeOf(l) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, p.blob && (this.blob = function() {
            var l = L(this);
            if (l)
              return l;
            if (this._bodyBlob)
              return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]));
          }), this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
              var l = L(this);
              return l || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
                this._bodyArrayBuffer.buffer.slice(
                  this._bodyArrayBuffer.byteOffset,
                  this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                )
              ) : Promise.resolve(this._bodyArrayBuffer));
            } else {
              if (p.blob)
                return this.blob().then(F);
              throw new Error("could not read as ArrayBuffer");
            }
          }, this.text = function() {
            var l = L(this);
            if (l)
              return l;
            if (this._bodyBlob)
              return V(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(B(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, p.formData && (this.formData = function() {
            return this.text().then(ae);
          }), this.json = function() {
            return this.text().then(JSON.parse);
          }, this;
        }
        var E = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
        function U(l) {
          var b = l.toUpperCase();
          return E.indexOf(b) > -1 ? b : l;
        }
        function ee(l, b) {
          if (!(this instanceof ee))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          b = b || {};
          var _ = b.body;
          if (l instanceof ee) {
            if (l.bodyUsed)
              throw new TypeError("Already read");
            this.url = l.url, this.credentials = l.credentials, b.headers || (this.headers = new R(l.headers)), this.method = l.method, this.mode = l.mode, this.signal = l.signal, !_ && l._bodyInit != null && (_ = l._bodyInit, l.bodyUsed = !0);
          } else
            this.url = String(l);
          if (this.credentials = b.credentials || this.credentials || "same-origin", (b.headers || !this.headers) && (this.headers = new R(b.headers)), this.method = U(b.method || this.method || "GET"), this.mode = b.mode || this.mode || null, this.signal = b.signal || this.signal || function() {
            if ("AbortController" in h) {
              var g = new AbortController();
              return g.signal;
            }
          }(), this.referrer = null, (this.method === "GET" || this.method === "HEAD") && _)
            throw new TypeError("Body not allowed for GET or HEAD requests");
          if (this._initBody(_), (this.method === "GET" || this.method === "HEAD") && (b.cache === "no-store" || b.cache === "no-cache")) {
            var D = /([?&])_=[^&]*/;
            if (D.test(this.url))
              this.url = this.url.replace(D, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
            else {
              var x = /\?/;
              this.url += (x.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
            }
          }
        }
        ee.prototype.clone = function() {
          return new ee(this, { body: this._bodyInit });
        };
        function ae(l) {
          var b = new FormData();
          return l.trim().split("&").forEach(function(_) {
            if (_) {
              var D = _.split("="), x = D.shift().replace(/\+/g, " "), g = D.join("=").replace(/\+/g, " ");
              b.append(decodeURIComponent(x), decodeURIComponent(g));
            }
          }), b;
        }
        function j(l) {
          var b = new R(), _ = l.replace(/\r?\n[\t ]+/g, " ");
          return _.split("\r").map(function(D) {
            return D.indexOf(`
`) === 0 ? D.substr(1, D.length) : D;
          }).forEach(function(D) {
            var x = D.split(":"), g = x.shift().trim();
            if (g) {
              var y = x.join(":").trim();
              try {
                b.append(g, y);
              } catch (N) {
                console.warn("Response " + N.message);
              }
            }
          }), b;
        }
        q.call(ee.prototype);
        function w(l, b) {
          if (!(this instanceof w))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          if (b || (b = {}), this.type = "default", this.status = b.status === void 0 ? 200 : b.status, this.status < 200 || this.status > 599)
            throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
          this.ok = this.status >= 200 && this.status < 300, this.statusText = b.statusText === void 0 ? "" : "" + b.statusText, this.headers = new R(b.headers), this.url = b.url || "", this._initBody(l);
        }
        q.call(w.prototype), w.prototype.clone = function() {
          return new w(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new R(this.headers),
            url: this.url
          });
        }, w.error = function() {
          var l = new w(null, { status: 200, statusText: "" });
          return l.ok = !1, l.status = 0, l.type = "error", l;
        };
        var c = [301, 302, 303, 307, 308];
        w.redirect = function(l, b) {
          if (c.indexOf(b) === -1)
            throw new RangeError("Invalid status code");
          return new w(null, { status: b, headers: { location: l } });
        }, f.DOMException = h.DOMException;
        try {
          new f.DOMException();
        } catch {
          f.DOMException = function(b, _) {
            this.message = b, this.name = _;
            var D = Error(b);
            this.stack = D.stack;
          }, f.DOMException.prototype = Object.create(Error.prototype), f.DOMException.prototype.constructor = f.DOMException;
        }
        function d(l, b) {
          return new Promise(function(_, D) {
            var x = new ee(l, b);
            if (x.signal && x.signal.aborted)
              return D(new f.DOMException("Aborted", "AbortError"));
            var g = new XMLHttpRequest();
            function y() {
              g.abort();
            }
            g.onload = function() {
              var Z = {
                statusText: g.statusText,
                headers: j(g.getAllResponseHeaders() || "")
              };
              x.url.indexOf("file://") === 0 && (g.status < 200 || g.status > 599) ? Z.status = 200 : Z.status = g.status, Z.url = "responseURL" in g ? g.responseURL : Z.headers.get("X-Request-URL");
              var O = "response" in g ? g.response : g.responseText;
              setTimeout(function() {
                _(new w(O, Z));
              }, 0);
            }, g.onerror = function() {
              setTimeout(function() {
                D(new TypeError("Network request failed"));
              }, 0);
            }, g.ontimeout = function() {
              setTimeout(function() {
                D(new TypeError("Network request timed out"));
              }, 0);
            }, g.onabort = function() {
              setTimeout(function() {
                D(new f.DOMException("Aborted", "AbortError"));
              }, 0);
            };
            function N(Z) {
              try {
                return Z === "" && h.location.href ? h.location.href : Z;
              } catch {
                return Z;
              }
            }
            if (g.open(x.method, N(x.url), !0), x.credentials === "include" ? g.withCredentials = !0 : x.credentials === "omit" && (g.withCredentials = !1), "responseType" in g && (p.blob ? g.responseType = "blob" : p.arrayBuffer && (g.responseType = "arraybuffer")), b && typeof b.headers == "object" && !(b.headers instanceof R || h.Headers && b.headers instanceof h.Headers)) {
              var Q = [];
              Object.getOwnPropertyNames(b.headers).forEach(function(Z) {
                Q.push(M(Z)), g.setRequestHeader(Z, I(b.headers[Z]));
              }), x.headers.forEach(function(Z, O) {
                Q.indexOf(O) === -1 && g.setRequestHeader(O, Z);
              });
            } else
              x.headers.forEach(function(Z, O) {
                g.setRequestHeader(O, Z);
              });
            x.signal && (x.signal.addEventListener("abort", y), g.onreadystatechange = function() {
              g.readyState === 4 && x.signal.removeEventListener("abort", y);
            }), g.send(typeof x._bodyInit > "u" ? null : x._bodyInit);
          });
        }
        return d.polyfill = !0, h.fetch || (h.fetch = d, h.Headers = R, h.Request = ee, h.Response = w), f.Headers = R, f.Request = ee, f.Response = w, f.fetch = d, Object.defineProperty(f, "__esModule", { value: !0 }), f;
      })({});
    })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
    var s = t.fetch ? t : i;
    e = s.fetch, e.default = s.fetch, e.fetch = s.fetch, e.Headers = s.Headers, e.Request = s.Request, e.Response = s.Response, r.exports = e;
  }(ru, ru.exports)), ru.exports;
}
var iC = rC();
const mv = /* @__PURE__ */ Cu(iC);
var nC = Object.defineProperty, sC = Object.defineProperties, aC = Object.getOwnPropertyDescriptors, yv = Object.getOwnPropertySymbols, oC = Object.prototype.hasOwnProperty, cC = Object.prototype.propertyIsEnumerable, wv = (r, e, t) => e in r ? nC(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, _v = (r, e) => {
  for (var t in e) oC.call(e, t) && wv(r, t, e[t]);
  if (yv) for (var t of yv(e)) cC.call(e, t) && wv(r, t, e[t]);
  return r;
}, Av = (r, e) => sC(r, aC(e));
const uC = { Accept: "application/json", "Content-Type": "application/json" }, fC = "POST", Ev = { headers: uC, method: fC }, xv = 10;
class Sn {
  constructor(e, t = !1) {
    if (this.url = e, this.disableProviderPing = t, this.events = new gi.EventEmitter(), this.isAvailable = !1, this.registering = !1, !kg(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
    this.url = e, this.disableProviderPing = t;
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    if (!this.isAvailable) throw new Error("Connection already closed");
    this.onClose();
  }
  async send(e) {
    this.isAvailable || await this.register();
    try {
      const t = Kn(e), i = await (await mv(this.url, Av(_v({}, Ev), { body: t }))).json();
      this.onPayload({ data: i });
    } catch (t) {
      this.onError(e.id, t);
    }
  }
  async register(e = this.url) {
    if (!kg(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((i, s) => {
        this.events.once("register_error", (a) => {
          this.resetMaxListeners(), s(a);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.isAvailable > "u") return s(new Error("HTTP connection is missing or invalid"));
          i();
        });
      });
    }
    this.url = e, this.registering = !0;
    try {
      if (!this.disableProviderPing) {
        const t = Kn({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await mv(e, Av(_v({}, Ev), { body: t }));
      }
      this.onOpen();
    } catch (t) {
      const i = this.parseError(t);
      throw this.events.emit("register_error", i), this.onClose(), i;
    }
  }
  onOpen() {
    this.isAvailable = !0, this.registering = !1, this.events.emit("open");
  }
  onClose() {
    this.isAvailable = !1, this.registering = !1, this.events.emit("close");
  }
  onPayload(e) {
    if (typeof e.data > "u") return;
    const t = typeof e.data == "string" ? Fs(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const i = this.parseError(t), s = i.message || i.toString(), a = zu(e, s);
    this.events.emit("payload", a);
  }
  parseError(e, t = this.url) {
    return u2(e, t, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > xv && this.events.setMaxListeners(xv);
  }
}
const Sv = "error", hC = "wss://relay.walletconnect.org", lC = "wc", dC = "universal_provider", Mv = `${lC}@2:${dC}:`, N2 = "https://rpc.walletconnect.org/v1/", pa = "generic", pC = `${N2}bundler`, tn = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var ho = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $l = { exports: {} };
/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
(function(r, e) {
  (function() {
    var t, i = "4.17.21", s = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", f = "Expected a function", h = "Invalid `variable` option passed into `_.template`", p = "__lodash_hash_undefined__", u = 500, m = "__lodash_placeholder__", A = 1, M = 2, I = 4, C = 1, R = 2, L = 1, K = 2, F = 4, V = 8, B = 16, z = 32, q = 64, E = 128, U = 256, ee = 512, ae = 30, j = "...", w = 800, c = 16, d = 1, l = 2, b = 3, _ = 1 / 0, D = 9007199254740991, x = 17976931348623157e292, g = NaN, y = 4294967295, N = y - 1, Q = y >>> 1, Z = [["ary", E], ["bind", L], ["bindKey", K], ["curry", V], ["curryRight", B], ["flip", ee], ["partial", z], ["partialRight", q], ["rearg", U]], O = "[object Arguments]", te = "[object Array]", k = "[object AsyncFunction]", W = "[object Boolean]", J = "[object Date]", S = "[object DOMException]", G = "[object Error]", oe = "[object Function]", ce = "[object GeneratorFunction]", fe = "[object Map]", be = "[object Number]", we = "[object Null]", Ie = "[object Object]", Je = "[object Promise]", Ce = "[object Proxy]", Te = "[object RegExp]", Se = "[object Set]", me = "[object String]", Oe = "[object Symbol]", Re = "[object Undefined]", ve = "[object WeakMap]", Ne = "[object WeakSet]", Ee = "[object ArrayBuffer]", ye = "[object DataView]", Le = "[object Float32Array]", De = "[object Float64Array]", _e = "[object Int8Array]", He = "[object Int16Array]", Ve = "[object Int32Array]", xe = "[object Uint8Array]", Ke = "[object Uint8ClampedArray]", ht = "[object Uint16Array]", Ge = "[object Uint32Array]", wt = /\b__p \+= '';/g, lt = /\b(__p \+=) '' \+/g, Ye = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Et = /&(?:amp|lt|gt|quot|#39);/g, Mt = /[&<>"']/g, qe = RegExp(Et.source), Xe = RegExp(Mt.source), tt = /<%-([\s\S]+?)%>/g, Fe = /<%([\s\S]+?)%>/g, et = /<%=([\s\S]+?)%>/g, Ze = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ze = /^\w*$/, ut = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, rt = /[\\^$.*+?()[\]{}|]/g, je = RegExp(rt.source), it = /^\s+/, st = /\s/, Be = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Qe = /\{\n\/\* \[wrapped with (.+)\] \*/, ft = /,? & /, $e = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Rt = /[()=,{}\[\]\/\s]/, Nt = /\\(\\)?/g, at = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, bt = /\w*$/, Ir = /^[-+]0x[0-9a-f]+$/i, Dr = /^0b[01]+$/i, Pr = /^\[object .+?Constructor\]$/, Cr = /^0o[0-7]+$/i, Or = /^(?:0|[1-9]\d*)$/, Zt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Kr = /($^)/, Ti = /['\n\r\u2028\u2029\\]/g, Vr = "\\ud800-\\udfff", qi = "\\u0300-\\u036f", Fi = "\\ufe20-\\ufe2f", Gr = "\\u20d0-\\u20ff", vi = qi + Fi + Gr, bi = "\\u2700-\\u27bf", fr = "a-z\\xdf-\\xf6\\xf8-\\xff", Bi = "\\xac\\xb1\\xd7\\xf7", Li = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Ui = "\\u2000-\\u206f", hs = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", $o = "A-Z\\xc0-\\xd6\\xd8-\\xde", ko = "\\ufe0e\\ufe0f", ls = Bi + Li + Ui + hs, Ca = "['’]", ds = "[" + Vr + "]", Oa = "[" + ls + "]", ps = "[" + vi + "]", Ho = "\\d+", Hu = "[" + bi + "]", Ko = "[" + fr + "]", Vo = "[^" + Vr + ls + Ho + bi + fr + $o + "]", Vs = "\\ud83c[\\udffb-\\udfff]", Ku = "(?:" + ps + "|" + Vs + ")", Go = "[^" + Vr + "]", Gs = "(?:\\ud83c[\\udde6-\\uddff]){2}", Gn = "[\\ud800-\\udbff][\\udc00-\\udfff]", ai = "[" + $o + "]", Wo = "\\u200d", Jo = "(?:" + Ko + "|" + Vo + ")", rn = "(?:" + ai + "|" + Vo + ")", Yo = "(?:" + Ca + "(?:d|ll|m|re|s|t|ve))?", Qo = "(?:" + Ca + "(?:D|LL|M|RE|S|T|VE))?", Xo = Ku + "?", Zo = "[" + ko + "]?", Vu = "(?:" + Wo + "(?:" + [Go, Gs, Gn].join("|") + ")" + Zo + Xo + ")*", Mn = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ec = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", tc = Zo + Xo + Vu, Ws = "(?:" + [Hu, Gs, Gn].join("|") + ")" + tc, Gu = "(?:" + [Go + ps + "?", ps, Gs, Gn, ds].join("|") + ")", Ra = RegExp(Ca, "g"), Wu = RegExp(ps, "g"), Js = RegExp(Vs + "(?=" + Vs + ")|" + Gu + tc, "g"), rc = RegExp([ai + "?" + Ko + "+" + Yo + "(?=" + [Oa, ai, "$"].join("|") + ")", rn + "+" + Qo + "(?=" + [Oa, ai + Jo, "$"].join("|") + ")", ai + "?" + Jo + "+" + Yo, ai + "+" + Qo, ec, Mn, Ho, Ws].join("|"), "g"), ic = RegExp("[" + Wo + Vr + vi + ko + "]"), gs = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, nc = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Ju = -1, jt = {};
    jt[Le] = jt[De] = jt[_e] = jt[He] = jt[Ve] = jt[xe] = jt[Ke] = jt[ht] = jt[Ge] = !0, jt[O] = jt[te] = jt[Ee] = jt[W] = jt[ye] = jt[J] = jt[G] = jt[oe] = jt[fe] = jt[be] = jt[Ie] = jt[Te] = jt[Se] = jt[me] = jt[ve] = !1;
    var Ut = {};
    Ut[O] = Ut[te] = Ut[Ee] = Ut[ye] = Ut[W] = Ut[J] = Ut[Le] = Ut[De] = Ut[_e] = Ut[He] = Ut[Ve] = Ut[fe] = Ut[be] = Ut[Ie] = Ut[Te] = Ut[Se] = Ut[me] = Ut[Oe] = Ut[xe] = Ut[Ke] = Ut[ht] = Ut[Ge] = !0, Ut[G] = Ut[oe] = Ut[ve] = !1;
    var Y = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }, ie = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, pe = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, Ue = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, $t = parseFloat, pt = parseInt, Wt = typeof ho == "object" && ho && ho.Object === Object && ho, cr = typeof self == "object" && self && self.Object === Object && self, Ct = Wt || cr || Function("return this")(), kt = e && !e.nodeType && e, ir = kt && !0 && r && !r.nodeType && r, Wr = ir && ir.exports === kt, ur = Wr && Wt.process, Jt = function() {
      try {
        var ne = ir && ir.require && ir.require("util").types;
        return ne || ur && ur.binding && ur.binding("util");
      } catch {
      }
    }(), qr = Jt && Jt.isArrayBuffer, zi = Jt && Jt.isDate, mi = Jt && Jt.isMap, nn = Jt && Jt.isRegExp, Na = Jt && Jt.isSet, vs = Jt && Jt.isTypedArray;
    function gr(ne, he, ue) {
      switch (ue.length) {
        case 0:
          return ne.call(he);
        case 1:
          return ne.call(he, ue[0]);
        case 2:
          return ne.call(he, ue[0], ue[1]);
        case 3:
          return ne.call(he, ue[0], ue[1], ue[2]);
      }
      return ne.apply(he, ue);
    }
    function F2(ne, he, ue, ke) {
      for (var dt = -1, Tt = ne == null ? 0 : ne.length; ++dt < Tt; ) {
        var hr = ne[dt];
        he(ke, hr, ue(hr), ne);
      }
      return ke;
    }
    function yi(ne, he) {
      for (var ue = -1, ke = ne == null ? 0 : ne.length; ++ue < ke && he(ne[ue], ue, ne) !== !1; ) ;
      return ne;
    }
    function B2(ne, he) {
      for (var ue = ne == null ? 0 : ne.length; ue-- && he(ne[ue], ue, ne) !== !1; ) ;
      return ne;
    }
    function vd(ne, he) {
      for (var ue = -1, ke = ne == null ? 0 : ne.length; ++ue < ke; ) if (!he(ne[ue], ue, ne)) return !1;
      return !0;
    }
    function Wn(ne, he) {
      for (var ue = -1, ke = ne == null ? 0 : ne.length, dt = 0, Tt = []; ++ue < ke; ) {
        var hr = ne[ue];
        he(hr, ue, ne) && (Tt[dt++] = hr);
      }
      return Tt;
    }
    function sc(ne, he) {
      var ue = ne == null ? 0 : ne.length;
      return !!ue && Ys(ne, he, 0) > -1;
    }
    function Yu(ne, he, ue) {
      for (var ke = -1, dt = ne == null ? 0 : ne.length; ++ke < dt; ) if (ue(he, ne[ke])) return !0;
      return !1;
    }
    function Qt(ne, he) {
      for (var ue = -1, ke = ne == null ? 0 : ne.length, dt = Array(ke); ++ue < ke; ) dt[ue] = he(ne[ue], ue, ne);
      return dt;
    }
    function Jn(ne, he) {
      for (var ue = -1, ke = he.length, dt = ne.length; ++ue < ke; ) ne[dt + ue] = he[ue];
      return ne;
    }
    function Qu(ne, he, ue, ke) {
      var dt = -1, Tt = ne == null ? 0 : ne.length;
      for (ke && Tt && (ue = ne[++dt]); ++dt < Tt; ) ue = he(ue, ne[dt], dt, ne);
      return ue;
    }
    function L2(ne, he, ue, ke) {
      var dt = ne == null ? 0 : ne.length;
      for (ke && dt && (ue = ne[--dt]); dt--; ) ue = he(ue, ne[dt], dt, ne);
      return ue;
    }
    function Xu(ne, he) {
      for (var ue = -1, ke = ne == null ? 0 : ne.length; ++ue < ke; ) if (he(ne[ue], ue, ne)) return !0;
      return !1;
    }
    var U2 = Zu("length");
    function z2(ne) {
      return ne.split("");
    }
    function j2(ne) {
      return ne.match($e) || [];
    }
    function bd(ne, he, ue) {
      var ke;
      return ue(ne, function(dt, Tt, hr) {
        if (he(dt, Tt, hr)) return ke = Tt, !1;
      }), ke;
    }
    function ac(ne, he, ue, ke) {
      for (var dt = ne.length, Tt = ue + (ke ? 1 : -1); ke ? Tt-- : ++Tt < dt; ) if (he(ne[Tt], Tt, ne)) return Tt;
      return -1;
    }
    function Ys(ne, he, ue) {
      return he === he ? Z2(ne, he, ue) : ac(ne, md, ue);
    }
    function $2(ne, he, ue, ke) {
      for (var dt = ue - 1, Tt = ne.length; ++dt < Tt; ) if (ke(ne[dt], he)) return dt;
      return -1;
    }
    function md(ne) {
      return ne !== ne;
    }
    function yd(ne, he) {
      var ue = ne == null ? 0 : ne.length;
      return ue ? tf(ne, he) / ue : g;
    }
    function Zu(ne) {
      return function(he) {
        return he == null ? t : he[ne];
      };
    }
    function ef(ne) {
      return function(he) {
        return ne == null ? t : ne[he];
      };
    }
    function wd(ne, he, ue, ke, dt) {
      return dt(ne, function(Tt, hr, Ht) {
        ue = ke ? (ke = !1, Tt) : he(ue, Tt, hr, Ht);
      }), ue;
    }
    function k2(ne, he) {
      var ue = ne.length;
      for (ne.sort(he); ue--; ) ne[ue] = ne[ue].value;
      return ne;
    }
    function tf(ne, he) {
      for (var ue, ke = -1, dt = ne.length; ++ke < dt; ) {
        var Tt = he(ne[ke]);
        Tt !== t && (ue = ue === t ? Tt : ue + Tt);
      }
      return ue;
    }
    function rf(ne, he) {
      for (var ue = -1, ke = Array(ne); ++ue < ne; ) ke[ue] = he(ue);
      return ke;
    }
    function H2(ne, he) {
      return Qt(he, function(ue) {
        return [ue, ne[ue]];
      });
    }
    function _d(ne) {
      return ne && ne.slice(0, Sd(ne) + 1).replace(it, "");
    }
    function oi(ne) {
      return function(he) {
        return ne(he);
      };
    }
    function nf(ne, he) {
      return Qt(he, function(ue) {
        return ne[ue];
      });
    }
    function Ta(ne, he) {
      return ne.has(he);
    }
    function Ad(ne, he) {
      for (var ue = -1, ke = ne.length; ++ue < ke && Ys(he, ne[ue], 0) > -1; ) ;
      return ue;
    }
    function Ed(ne, he) {
      for (var ue = ne.length; ue-- && Ys(he, ne[ue], 0) > -1; ) ;
      return ue;
    }
    function K2(ne, he) {
      for (var ue = ne.length, ke = 0; ue--; ) ne[ue] === he && ++ke;
      return ke;
    }
    var V2 = ef(Y), G2 = ef(ie);
    function W2(ne) {
      return "\\" + Ue[ne];
    }
    function J2(ne, he) {
      return ne == null ? t : ne[he];
    }
    function Qs(ne) {
      return ic.test(ne);
    }
    function Y2(ne) {
      return gs.test(ne);
    }
    function Q2(ne) {
      for (var he, ue = []; !(he = ne.next()).done; ) ue.push(he.value);
      return ue;
    }
    function sf(ne) {
      var he = -1, ue = Array(ne.size);
      return ne.forEach(function(ke, dt) {
        ue[++he] = [dt, ke];
      }), ue;
    }
    function xd(ne, he) {
      return function(ue) {
        return ne(he(ue));
      };
    }
    function Yn(ne, he) {
      for (var ue = -1, ke = ne.length, dt = 0, Tt = []; ++ue < ke; ) {
        var hr = ne[ue];
        (hr === he || hr === m) && (ne[ue] = m, Tt[dt++] = ue);
      }
      return Tt;
    }
    function oc(ne) {
      var he = -1, ue = Array(ne.size);
      return ne.forEach(function(ke) {
        ue[++he] = ke;
      }), ue;
    }
    function X2(ne) {
      var he = -1, ue = Array(ne.size);
      return ne.forEach(function(ke) {
        ue[++he] = [ke, ke];
      }), ue;
    }
    function Z2(ne, he, ue) {
      for (var ke = ue - 1, dt = ne.length; ++ke < dt; ) if (ne[ke] === he) return ke;
      return -1;
    }
    function em(ne, he, ue) {
      for (var ke = ue + 1; ke--; ) if (ne[ke] === he) return ke;
      return ke;
    }
    function Xs(ne) {
      return Qs(ne) ? rm(ne) : U2(ne);
    }
    function ji(ne) {
      return Qs(ne) ? im(ne) : z2(ne);
    }
    function Sd(ne) {
      for (var he = ne.length; he-- && st.test(ne.charAt(he)); ) ;
      return he;
    }
    var tm = ef(pe);
    function rm(ne) {
      for (var he = Js.lastIndex = 0; Js.test(ne); ) ++he;
      return he;
    }
    function im(ne) {
      return ne.match(Js) || [];
    }
    function nm(ne) {
      return ne.match(rc) || [];
    }
    var sm = function ne(he) {
      he = he == null ? Ct : Zs.defaults(Ct.Object(), he, Zs.pick(Ct, nc));
      var ue = he.Array, ke = he.Date, dt = he.Error, Tt = he.Function, hr = he.Math, Ht = he.Object, af = he.RegExp, am = he.String, wi = he.TypeError, cc = ue.prototype, om = Tt.prototype, ea = Ht.prototype, uc = he["__core-js_shared__"], fc = om.toString, Bt = ea.hasOwnProperty, cm = 0, Md = function() {
        var n = /[^.]+$/.exec(uc && uc.keys && uc.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), hc = ea.toString, um = fc.call(Ht), fm = Ct._, hm = af("^" + fc.call(Bt).replace(rt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), lc = Wr ? he.Buffer : t, Qn = he.Symbol, dc = he.Uint8Array, Id = lc ? lc.allocUnsafe : t, pc = xd(Ht.getPrototypeOf, Ht), Dd = Ht.create, Pd = ea.propertyIsEnumerable, gc = cc.splice, Cd = Qn ? Qn.isConcatSpreadable : t, qa = Qn ? Qn.iterator : t, bs = Qn ? Qn.toStringTag : t, vc = function() {
        try {
          var n = As(Ht, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), lm = he.clearTimeout !== Ct.clearTimeout && he.clearTimeout, dm = ke && ke.now !== Ct.Date.now && ke.now, pm = he.setTimeout !== Ct.setTimeout && he.setTimeout, bc = hr.ceil, mc = hr.floor, of = Ht.getOwnPropertySymbols, gm = lc ? lc.isBuffer : t, Od = he.isFinite, vm = cc.join, bm = xd(Ht.keys, Ht), lr = hr.max, Rr = hr.min, mm = ke.now, ym = he.parseInt, Rd = hr.random, wm = cc.reverse, cf = As(he, "DataView"), Fa = As(he, "Map"), uf = As(he, "Promise"), ta = As(he, "Set"), Ba = As(he, "WeakMap"), La = As(Ht, "create"), yc = Ba && new Ba(), ra = {}, _m = Es(cf), Am = Es(Fa), Em = Es(uf), xm = Es(ta), Sm = Es(Ba), wc = Qn ? Qn.prototype : t, Ua = wc ? wc.valueOf : t, Nd = wc ? wc.toString : t;
      function $(n) {
        if (er(n) && !gt(n) && !(n instanceof It)) {
          if (n instanceof _i) return n;
          if (Bt.call(n, "__wrapped__")) return T0(n);
        }
        return new _i(n);
      }
      var ia = /* @__PURE__ */ function() {
        function n() {
        }
        return function(o) {
          if (!Xt(o)) return {};
          if (Dd) return Dd(o);
          n.prototype = o;
          var v = new n();
          return n.prototype = t, v;
        };
      }();
      function _c() {
      }
      function _i(n, o) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = t;
      }
      $.templateSettings = { escape: tt, evaluate: Fe, interpolate: et, variable: "", imports: { _: $ } }, $.prototype = _c.prototype, $.prototype.constructor = $, _i.prototype = ia(_c.prototype), _i.prototype.constructor = _i;
      function It(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = y, this.__views__ = [];
      }
      function Mm() {
        var n = new It(this.__wrapped__);
        return n.__actions__ = Jr(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Jr(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Jr(this.__views__), n;
      }
      function Im() {
        if (this.__filtered__) {
          var n = new It(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function Dm() {
        var n = this.__wrapped__.value(), o = this.__dir__, v = gt(n), P = o < 0, T = v ? n.length : 0, H = z3(0, T, this.__views__), X = H.start, re = H.end, se = re - X, le = P ? re : X - 1, de = this.__iteratees__, ge = de.length, Pe = 0, We = Rr(se, this.__takeCount__);
        if (!v || !P && T == se && We == se) return i0(n, this.__actions__);
        var ot = [];
        e: for (; se-- && Pe < We; ) {
          le += o;
          for (var yt = -1, ct = n[le]; ++yt < ge; ) {
            var xt = de[yt], Ot = xt.iteratee, fi = xt.type, Lr = Ot(ct);
            if (fi == l) ct = Lr;
            else if (!Lr) {
              if (fi == d) continue e;
              break e;
            }
          }
          ot[Pe++] = ct;
        }
        return ot;
      }
      It.prototype = ia(_c.prototype), It.prototype.constructor = It;
      function ms(n) {
        var o = -1, v = n == null ? 0 : n.length;
        for (this.clear(); ++o < v; ) {
          var P = n[o];
          this.set(P[0], P[1]);
        }
      }
      function Pm() {
        this.__data__ = La ? La(null) : {}, this.size = 0;
      }
      function Cm(n) {
        var o = this.has(n) && delete this.__data__[n];
        return this.size -= o ? 1 : 0, o;
      }
      function Om(n) {
        var o = this.__data__;
        if (La) {
          var v = o[n];
          return v === p ? t : v;
        }
        return Bt.call(o, n) ? o[n] : t;
      }
      function Rm(n) {
        var o = this.__data__;
        return La ? o[n] !== t : Bt.call(o, n);
      }
      function Nm(n, o) {
        var v = this.__data__;
        return this.size += this.has(n) ? 0 : 1, v[n] = La && o === t ? p : o, this;
      }
      ms.prototype.clear = Pm, ms.prototype.delete = Cm, ms.prototype.get = Om, ms.prototype.has = Rm, ms.prototype.set = Nm;
      function In(n) {
        var o = -1, v = n == null ? 0 : n.length;
        for (this.clear(); ++o < v; ) {
          var P = n[o];
          this.set(P[0], P[1]);
        }
      }
      function Tm() {
        this.__data__ = [], this.size = 0;
      }
      function qm(n) {
        var o = this.__data__, v = Ac(o, n);
        if (v < 0) return !1;
        var P = o.length - 1;
        return v == P ? o.pop() : gc.call(o, v, 1), --this.size, !0;
      }
      function Fm(n) {
        var o = this.__data__, v = Ac(o, n);
        return v < 0 ? t : o[v][1];
      }
      function Bm(n) {
        return Ac(this.__data__, n) > -1;
      }
      function Lm(n, o) {
        var v = this.__data__, P = Ac(v, n);
        return P < 0 ? (++this.size, v.push([n, o])) : v[P][1] = o, this;
      }
      In.prototype.clear = Tm, In.prototype.delete = qm, In.prototype.get = Fm, In.prototype.has = Bm, In.prototype.set = Lm;
      function Dn(n) {
        var o = -1, v = n == null ? 0 : n.length;
        for (this.clear(); ++o < v; ) {
          var P = n[o];
          this.set(P[0], P[1]);
        }
      }
      function Um() {
        this.size = 0, this.__data__ = { hash: new ms(), map: new (Fa || In)(), string: new ms() };
      }
      function zm(n) {
        var o = Tc(this, n).delete(n);
        return this.size -= o ? 1 : 0, o;
      }
      function jm(n) {
        return Tc(this, n).get(n);
      }
      function $m(n) {
        return Tc(this, n).has(n);
      }
      function km(n, o) {
        var v = Tc(this, n), P = v.size;
        return v.set(n, o), this.size += v.size == P ? 0 : 1, this;
      }
      Dn.prototype.clear = Um, Dn.prototype.delete = zm, Dn.prototype.get = jm, Dn.prototype.has = $m, Dn.prototype.set = km;
      function ys(n) {
        var o = -1, v = n == null ? 0 : n.length;
        for (this.__data__ = new Dn(); ++o < v; ) this.add(n[o]);
      }
      function Hm(n) {
        return this.__data__.set(n, p), this;
      }
      function Km(n) {
        return this.__data__.has(n);
      }
      ys.prototype.add = ys.prototype.push = Hm, ys.prototype.has = Km;
      function $i(n) {
        var o = this.__data__ = new In(n);
        this.size = o.size;
      }
      function Vm() {
        this.__data__ = new In(), this.size = 0;
      }
      function Gm(n) {
        var o = this.__data__, v = o.delete(n);
        return this.size = o.size, v;
      }
      function Wm(n) {
        return this.__data__.get(n);
      }
      function Jm(n) {
        return this.__data__.has(n);
      }
      function Ym(n, o) {
        var v = this.__data__;
        if (v instanceof In) {
          var P = v.__data__;
          if (!Fa || P.length < s - 1) return P.push([n, o]), this.size = ++v.size, this;
          v = this.__data__ = new Dn(P);
        }
        return v.set(n, o), this.size = v.size, this;
      }
      $i.prototype.clear = Vm, $i.prototype.delete = Gm, $i.prototype.get = Wm, $i.prototype.has = Jm, $i.prototype.set = Ym;
      function Td(n, o) {
        var v = gt(n), P = !v && xs(n), T = !v && !P && rs(n), H = !v && !P && !T && oa(n), X = v || P || T || H, re = X ? rf(n.length, am) : [], se = re.length;
        for (var le in n) (o || Bt.call(n, le)) && !(X && (le == "length" || T && (le == "offset" || le == "parent") || H && (le == "buffer" || le == "byteLength" || le == "byteOffset") || Rn(le, se))) && re.push(le);
        return re;
      }
      function qd(n) {
        var o = n.length;
        return o ? n[wf(0, o - 1)] : t;
      }
      function Qm(n, o) {
        return qc(Jr(n), ws(o, 0, n.length));
      }
      function Xm(n) {
        return qc(Jr(n));
      }
      function ff(n, o, v) {
        (v !== t && !ki(n[o], v) || v === t && !(o in n)) && Pn(n, o, v);
      }
      function za(n, o, v) {
        var P = n[o];
        (!(Bt.call(n, o) && ki(P, v)) || v === t && !(o in n)) && Pn(n, o, v);
      }
      function Ac(n, o) {
        for (var v = n.length; v--; ) if (ki(n[v][0], o)) return v;
        return -1;
      }
      function Zm(n, o, v, P) {
        return Xn(n, function(T, H, X) {
          o(P, T, v(T), X);
        }), P;
      }
      function Fd(n, o) {
        return n && an(o, vr(o), n);
      }
      function e3(n, o) {
        return n && an(o, Qr(o), n);
      }
      function Pn(n, o, v) {
        o == "__proto__" && vc ? vc(n, o, { configurable: !0, enumerable: !0, value: v, writable: !0 }) : n[o] = v;
      }
      function hf(n, o) {
        for (var v = -1, P = o.length, T = ue(P), H = n == null; ++v < P; ) T[v] = H ? t : Kf(n, o[v]);
        return T;
      }
      function ws(n, o, v) {
        return n === n && (v !== t && (n = n <= v ? n : v), o !== t && (n = n >= o ? n : o)), n;
      }
      function Ai(n, o, v, P, T, H) {
        var X, re = o & A, se = o & M, le = o & I;
        if (v && (X = T ? v(n, P, T, H) : v(n)), X !== t) return X;
        if (!Xt(n)) return n;
        var de = gt(n);
        if (de) {
          if (X = $3(n), !re) return Jr(n, X);
        } else {
          var ge = Nr(n), Pe = ge == oe || ge == ce;
          if (rs(n)) return a0(n, re);
          if (ge == Ie || ge == O || Pe && !T) {
            if (X = se || Pe ? {} : S0(n), !re) return se ? O3(n, e3(X, n)) : C3(n, Fd(X, n));
          } else {
            if (!Ut[ge]) return T ? n : {};
            X = k3(n, ge, re);
          }
        }
        H || (H = new $i());
        var We = H.get(n);
        if (We) return We;
        H.set(n, X), ep(n) ? n.forEach(function(ct) {
          X.add(Ai(ct, o, v, ct, n, H));
        }) : X0(n) && n.forEach(function(ct, xt) {
          X.set(xt, Ai(ct, o, v, xt, n, H));
        });
        var ot = le ? se ? Of : Cf : se ? Qr : vr, yt = de ? t : ot(n);
        return yi(yt || n, function(ct, xt) {
          yt && (xt = ct, ct = n[xt]), za(X, xt, Ai(ct, o, v, xt, n, H));
        }), X;
      }
      function t3(n) {
        var o = vr(n);
        return function(v) {
          return Bd(v, n, o);
        };
      }
      function Bd(n, o, v) {
        var P = v.length;
        if (n == null) return !P;
        for (n = Ht(n); P--; ) {
          var T = v[P], H = o[T], X = n[T];
          if (X === t && !(T in n) || !H(X)) return !1;
        }
        return !0;
      }
      function Ld(n, o, v) {
        if (typeof n != "function") throw new wi(f);
        return Ga(function() {
          n.apply(t, v);
        }, o);
      }
      function ja(n, o, v, P) {
        var T = -1, H = sc, X = !0, re = n.length, se = [], le = o.length;
        if (!re) return se;
        v && (o = Qt(o, oi(v))), P ? (H = Yu, X = !1) : o.length >= s && (H = Ta, X = !1, o = new ys(o));
        e: for (; ++T < re; ) {
          var de = n[T], ge = v == null ? de : v(de);
          if (de = P || de !== 0 ? de : 0, X && ge === ge) {
            for (var Pe = le; Pe--; ) if (o[Pe] === ge) continue e;
            se.push(de);
          } else H(o, ge, P) || se.push(de);
        }
        return se;
      }
      var Xn = h0(sn), Ud = h0(df, !0);
      function r3(n, o) {
        var v = !0;
        return Xn(n, function(P, T, H) {
          return v = !!o(P, T, H), v;
        }), v;
      }
      function Ec(n, o, v) {
        for (var P = -1, T = n.length; ++P < T; ) {
          var H = n[P], X = o(H);
          if (X != null && (re === t ? X === X && !ui(X) : v(X, re))) var re = X, se = H;
        }
        return se;
      }
      function i3(n, o, v, P) {
        var T = n.length;
        for (v = mt(v), v < 0 && (v = -v > T ? 0 : T + v), P = P === t || P > T ? T : mt(P), P < 0 && (P += T), P = v > P ? 0 : rp(P); v < P; ) n[v++] = o;
        return n;
      }
      function zd(n, o) {
        var v = [];
        return Xn(n, function(P, T, H) {
          o(P, T, H) && v.push(P);
        }), v;
      }
      function Ar(n, o, v, P, T) {
        var H = -1, X = n.length;
        for (v || (v = K3), T || (T = []); ++H < X; ) {
          var re = n[H];
          o > 0 && v(re) ? o > 1 ? Ar(re, o - 1, v, P, T) : Jn(T, re) : P || (T[T.length] = re);
        }
        return T;
      }
      var lf = l0(), jd = l0(!0);
      function sn(n, o) {
        return n && lf(n, o, vr);
      }
      function df(n, o) {
        return n && jd(n, o, vr);
      }
      function xc(n, o) {
        return Wn(o, function(v) {
          return Nn(n[v]);
        });
      }
      function _s(n, o) {
        o = es(o, n);
        for (var v = 0, P = o.length; n != null && v < P; ) n = n[on(o[v++])];
        return v && v == P ? n : t;
      }
      function $d(n, o, v) {
        var P = o(n);
        return gt(n) ? P : Jn(P, v(n));
      }
      function Fr(n) {
        return n == null ? n === t ? Re : we : bs && bs in Ht(n) ? U3(n) : X3(n);
      }
      function pf(n, o) {
        return n > o;
      }
      function n3(n, o) {
        return n != null && Bt.call(n, o);
      }
      function s3(n, o) {
        return n != null && o in Ht(n);
      }
      function a3(n, o, v) {
        return n >= Rr(o, v) && n < lr(o, v);
      }
      function gf(n, o, v) {
        for (var P = v ? Yu : sc, T = n[0].length, H = n.length, X = H, re = ue(H), se = 1 / 0, le = []; X--; ) {
          var de = n[X];
          X && o && (de = Qt(de, oi(o))), se = Rr(de.length, se), re[X] = !v && (o || T >= 120 && de.length >= 120) ? new ys(X && de) : t;
        }
        de = n[0];
        var ge = -1, Pe = re[0];
        e: for (; ++ge < T && le.length < se; ) {
          var We = de[ge], ot = o ? o(We) : We;
          if (We = v || We !== 0 ? We : 0, !(Pe ? Ta(Pe, ot) : P(le, ot, v))) {
            for (X = H; --X; ) {
              var yt = re[X];
              if (!(yt ? Ta(yt, ot) : P(n[X], ot, v))) continue e;
            }
            Pe && Pe.push(ot), le.push(We);
          }
        }
        return le;
      }
      function o3(n, o, v, P) {
        return sn(n, function(T, H, X) {
          o(P, v(T), H, X);
        }), P;
      }
      function $a(n, o, v) {
        o = es(o, n), n = P0(n, o);
        var P = n == null ? n : n[on(xi(o))];
        return P == null ? t : gr(P, n, v);
      }
      function kd(n) {
        return er(n) && Fr(n) == O;
      }
      function c3(n) {
        return er(n) && Fr(n) == Ee;
      }
      function u3(n) {
        return er(n) && Fr(n) == J;
      }
      function ka(n, o, v, P, T) {
        return n === o ? !0 : n == null || o == null || !er(n) && !er(o) ? n !== n && o !== o : f3(n, o, v, P, ka, T);
      }
      function f3(n, o, v, P, T, H) {
        var X = gt(n), re = gt(o), se = X ? te : Nr(n), le = re ? te : Nr(o);
        se = se == O ? Ie : se, le = le == O ? Ie : le;
        var de = se == Ie, ge = le == Ie, Pe = se == le;
        if (Pe && rs(n)) {
          if (!rs(o)) return !1;
          X = !0, de = !1;
        }
        if (Pe && !de) return H || (H = new $i()), X || oa(n) ? A0(n, o, v, P, T, H) : B3(n, o, se, v, P, T, H);
        if (!(v & C)) {
          var We = de && Bt.call(n, "__wrapped__"), ot = ge && Bt.call(o, "__wrapped__");
          if (We || ot) {
            var yt = We ? n.value() : n, ct = ot ? o.value() : o;
            return H || (H = new $i()), T(yt, ct, v, P, H);
          }
        }
        return Pe ? (H || (H = new $i()), L3(n, o, v, P, T, H)) : !1;
      }
      function h3(n) {
        return er(n) && Nr(n) == fe;
      }
      function vf(n, o, v, P) {
        var T = v.length, H = T, X = !P;
        if (n == null) return !H;
        for (n = Ht(n); T--; ) {
          var re = v[T];
          if (X && re[2] ? re[1] !== n[re[0]] : !(re[0] in n)) return !1;
        }
        for (; ++T < H; ) {
          re = v[T];
          var se = re[0], le = n[se], de = re[1];
          if (X && re[2]) {
            if (le === t && !(se in n)) return !1;
          } else {
            var ge = new $i();
            if (P) var Pe = P(le, de, se, n, o, ge);
            if (!(Pe === t ? ka(de, le, C | R, P, ge) : Pe)) return !1;
          }
        }
        return !0;
      }
      function Hd(n) {
        if (!Xt(n) || G3(n)) return !1;
        var o = Nn(n) ? hm : Pr;
        return o.test(Es(n));
      }
      function l3(n) {
        return er(n) && Fr(n) == Te;
      }
      function d3(n) {
        return er(n) && Nr(n) == Se;
      }
      function p3(n) {
        return er(n) && jc(n.length) && !!jt[Fr(n)];
      }
      function Kd(n) {
        return typeof n == "function" ? n : n == null ? Xr : typeof n == "object" ? gt(n) ? Wd(n[0], n[1]) : Gd(n) : dp(n);
      }
      function bf(n) {
        if (!Va(n)) return bm(n);
        var o = [];
        for (var v in Ht(n)) Bt.call(n, v) && v != "constructor" && o.push(v);
        return o;
      }
      function g3(n) {
        if (!Xt(n)) return Q3(n);
        var o = Va(n), v = [];
        for (var P in n) P == "constructor" && (o || !Bt.call(n, P)) || v.push(P);
        return v;
      }
      function mf(n, o) {
        return n < o;
      }
      function Vd(n, o) {
        var v = -1, P = Yr(n) ? ue(n.length) : [];
        return Xn(n, function(T, H, X) {
          P[++v] = o(T, H, X);
        }), P;
      }
      function Gd(n) {
        var o = Nf(n);
        return o.length == 1 && o[0][2] ? I0(o[0][0], o[0][1]) : function(v) {
          return v === n || vf(v, n, o);
        };
      }
      function Wd(n, o) {
        return qf(n) && M0(o) ? I0(on(n), o) : function(v) {
          var P = Kf(v, n);
          return P === t && P === o ? Vf(v, n) : ka(o, P, C | R);
        };
      }
      function Sc(n, o, v, P, T) {
        n !== o && lf(o, function(H, X) {
          if (T || (T = new $i()), Xt(H)) v3(n, o, X, v, Sc, P, T);
          else {
            var re = P ? P(Bf(n, X), H, X + "", n, o, T) : t;
            re === t && (re = H), ff(n, X, re);
          }
        }, Qr);
      }
      function v3(n, o, v, P, T, H, X) {
        var re = Bf(n, v), se = Bf(o, v), le = X.get(se);
        if (le) {
          ff(n, v, le);
          return;
        }
        var de = H ? H(re, se, v + "", n, o, X) : t, ge = de === t;
        if (ge) {
          var Pe = gt(se), We = !Pe && rs(se), ot = !Pe && !We && oa(se);
          de = se, Pe || We || ot ? gt(re) ? de = re : nr(re) ? de = Jr(re) : We ? (ge = !1, de = a0(se, !0)) : ot ? (ge = !1, de = o0(se, !0)) : de = [] : Wa(se) || xs(se) ? (de = re, xs(re) ? de = ip(re) : (!Xt(re) || Nn(re)) && (de = S0(se))) : ge = !1;
        }
        ge && (X.set(se, de), T(de, se, P, H, X), X.delete(se)), ff(n, v, de);
      }
      function Jd(n, o) {
        var v = n.length;
        if (v) return o += o < 0 ? v : 0, Rn(o, v) ? n[o] : t;
      }
      function Yd(n, o, v) {
        o.length ? o = Qt(o, function(H) {
          return gt(H) ? function(X) {
            return _s(X, H.length === 1 ? H[0] : H);
          } : H;
        }) : o = [Xr];
        var P = -1;
        o = Qt(o, oi(nt()));
        var T = Vd(n, function(H, X, re) {
          var se = Qt(o, function(le) {
            return le(H);
          });
          return { criteria: se, index: ++P, value: H };
        });
        return k2(T, function(H, X) {
          return P3(H, X, v);
        });
      }
      function b3(n, o) {
        return Qd(n, o, function(v, P) {
          return Vf(n, P);
        });
      }
      function Qd(n, o, v) {
        for (var P = -1, T = o.length, H = {}; ++P < T; ) {
          var X = o[P], re = _s(n, X);
          v(re, X) && Ha(H, es(X, n), re);
        }
        return H;
      }
      function m3(n) {
        return function(o) {
          return _s(o, n);
        };
      }
      function yf(n, o, v, P) {
        var T = P ? $2 : Ys, H = -1, X = o.length, re = n;
        for (n === o && (o = Jr(o)), v && (re = Qt(n, oi(v))); ++H < X; ) for (var se = 0, le = o[H], de = v ? v(le) : le; (se = T(re, de, se, P)) > -1; ) re !== n && gc.call(re, se, 1), gc.call(n, se, 1);
        return n;
      }
      function Xd(n, o) {
        for (var v = n ? o.length : 0, P = v - 1; v--; ) {
          var T = o[v];
          if (v == P || T !== H) {
            var H = T;
            Rn(T) ? gc.call(n, T, 1) : Ef(n, T);
          }
        }
        return n;
      }
      function wf(n, o) {
        return n + mc(Rd() * (o - n + 1));
      }
      function y3(n, o, v, P) {
        for (var T = -1, H = lr(bc((o - n) / (v || 1)), 0), X = ue(H); H--; ) X[P ? H : ++T] = n, n += v;
        return X;
      }
      function _f(n, o) {
        var v = "";
        if (!n || o < 1 || o > D) return v;
        do
          o % 2 && (v += n), o = mc(o / 2), o && (n += n);
        while (o);
        return v;
      }
      function _t(n, o) {
        return Lf(D0(n, o, Xr), n + "");
      }
      function w3(n) {
        return qd(ca(n));
      }
      function _3(n, o) {
        var v = ca(n);
        return qc(v, ws(o, 0, v.length));
      }
      function Ha(n, o, v, P) {
        if (!Xt(n)) return n;
        o = es(o, n);
        for (var T = -1, H = o.length, X = H - 1, re = n; re != null && ++T < H; ) {
          var se = on(o[T]), le = v;
          if (se === "__proto__" || se === "constructor" || se === "prototype") return n;
          if (T != X) {
            var de = re[se];
            le = P ? P(de, se, re) : t, le === t && (le = Xt(de) ? de : Rn(o[T + 1]) ? [] : {});
          }
          za(re, se, le), re = re[se];
        }
        return n;
      }
      var Zd = yc ? function(n, o) {
        return yc.set(n, o), n;
      } : Xr, A3 = vc ? function(n, o) {
        return vc(n, "toString", { configurable: !0, enumerable: !1, value: Wf(o), writable: !0 });
      } : Xr;
      function E3(n) {
        return qc(ca(n));
      }
      function Ei(n, o, v) {
        var P = -1, T = n.length;
        o < 0 && (o = -o > T ? 0 : T + o), v = v > T ? T : v, v < 0 && (v += T), T = o > v ? 0 : v - o >>> 0, o >>>= 0;
        for (var H = ue(T); ++P < T; ) H[P] = n[P + o];
        return H;
      }
      function x3(n, o) {
        var v;
        return Xn(n, function(P, T, H) {
          return v = o(P, T, H), !v;
        }), !!v;
      }
      function Mc(n, o, v) {
        var P = 0, T = n == null ? P : n.length;
        if (typeof o == "number" && o === o && T <= Q) {
          for (; P < T; ) {
            var H = P + T >>> 1, X = n[H];
            X !== null && !ui(X) && (v ? X <= o : X < o) ? P = H + 1 : T = H;
          }
          return T;
        }
        return Af(n, o, Xr, v);
      }
      function Af(n, o, v, P) {
        var T = 0, H = n == null ? 0 : n.length;
        if (H === 0) return 0;
        o = v(o);
        for (var X = o !== o, re = o === null, se = ui(o), le = o === t; T < H; ) {
          var de = mc((T + H) / 2), ge = v(n[de]), Pe = ge !== t, We = ge === null, ot = ge === ge, yt = ui(ge);
          if (X) var ct = P || ot;
          else le ? ct = ot && (P || Pe) : re ? ct = ot && Pe && (P || !We) : se ? ct = ot && Pe && !We && (P || !yt) : We || yt ? ct = !1 : ct = P ? ge <= o : ge < o;
          ct ? T = de + 1 : H = de;
        }
        return Rr(H, N);
      }
      function e0(n, o) {
        for (var v = -1, P = n.length, T = 0, H = []; ++v < P; ) {
          var X = n[v], re = o ? o(X) : X;
          if (!v || !ki(re, se)) {
            var se = re;
            H[T++] = X === 0 ? 0 : X;
          }
        }
        return H;
      }
      function t0(n) {
        return typeof n == "number" ? n : ui(n) ? g : +n;
      }
      function ci(n) {
        if (typeof n == "string") return n;
        if (gt(n)) return Qt(n, ci) + "";
        if (ui(n)) return Nd ? Nd.call(n) : "";
        var o = n + "";
        return o == "0" && 1 / n == -1 / 0 ? "-0" : o;
      }
      function Zn(n, o, v) {
        var P = -1, T = sc, H = n.length, X = !0, re = [], se = re;
        if (v) X = !1, T = Yu;
        else if (H >= s) {
          var le = o ? null : q3(n);
          if (le) return oc(le);
          X = !1, T = Ta, se = new ys();
        } else se = o ? [] : re;
        e: for (; ++P < H; ) {
          var de = n[P], ge = o ? o(de) : de;
          if (de = v || de !== 0 ? de : 0, X && ge === ge) {
            for (var Pe = se.length; Pe--; ) if (se[Pe] === ge) continue e;
            o && se.push(ge), re.push(de);
          } else T(se, ge, v) || (se !== re && se.push(ge), re.push(de));
        }
        return re;
      }
      function Ef(n, o) {
        return o = es(o, n), n = P0(n, o), n == null || delete n[on(xi(o))];
      }
      function r0(n, o, v, P) {
        return Ha(n, o, v(_s(n, o)), P);
      }
      function Ic(n, o, v, P) {
        for (var T = n.length, H = P ? T : -1; (P ? H-- : ++H < T) && o(n[H], H, n); ) ;
        return v ? Ei(n, P ? 0 : H, P ? H + 1 : T) : Ei(n, P ? H + 1 : 0, P ? T : H);
      }
      function i0(n, o) {
        var v = n;
        return v instanceof It && (v = v.value()), Qu(o, function(P, T) {
          return T.func.apply(T.thisArg, Jn([P], T.args));
        }, v);
      }
      function xf(n, o, v) {
        var P = n.length;
        if (P < 2) return P ? Zn(n[0]) : [];
        for (var T = -1, H = ue(P); ++T < P; ) for (var X = n[T], re = -1; ++re < P; ) re != T && (H[T] = ja(H[T] || X, n[re], o, v));
        return Zn(Ar(H, 1), o, v);
      }
      function n0(n, o, v) {
        for (var P = -1, T = n.length, H = o.length, X = {}; ++P < T; ) {
          var re = P < H ? o[P] : t;
          v(X, n[P], re);
        }
        return X;
      }
      function Sf(n) {
        return nr(n) ? n : [];
      }
      function Mf(n) {
        return typeof n == "function" ? n : Xr;
      }
      function es(n, o) {
        return gt(n) ? n : qf(n, o) ? [n] : N0(qt(n));
      }
      var S3 = _t;
      function ts(n, o, v) {
        var P = n.length;
        return v = v === t ? P : v, !o && v >= P ? n : Ei(n, o, v);
      }
      var s0 = lm || function(n) {
        return Ct.clearTimeout(n);
      };
      function a0(n, o) {
        if (o) return n.slice();
        var v = n.length, P = Id ? Id(v) : new n.constructor(v);
        return n.copy(P), P;
      }
      function If(n) {
        var o = new n.constructor(n.byteLength);
        return new dc(o).set(new dc(n)), o;
      }
      function M3(n, o) {
        var v = o ? If(n.buffer) : n.buffer;
        return new n.constructor(v, n.byteOffset, n.byteLength);
      }
      function I3(n) {
        var o = new n.constructor(n.source, bt.exec(n));
        return o.lastIndex = n.lastIndex, o;
      }
      function D3(n) {
        return Ua ? Ht(Ua.call(n)) : {};
      }
      function o0(n, o) {
        var v = o ? If(n.buffer) : n.buffer;
        return new n.constructor(v, n.byteOffset, n.length);
      }
      function c0(n, o) {
        if (n !== o) {
          var v = n !== t, P = n === null, T = n === n, H = ui(n), X = o !== t, re = o === null, se = o === o, le = ui(o);
          if (!re && !le && !H && n > o || H && X && se && !re && !le || P && X && se || !v && se || !T) return 1;
          if (!P && !H && !le && n < o || le && v && T && !P && !H || re && v && T || !X && T || !se) return -1;
        }
        return 0;
      }
      function P3(n, o, v) {
        for (var P = -1, T = n.criteria, H = o.criteria, X = T.length, re = v.length; ++P < X; ) {
          var se = c0(T[P], H[P]);
          if (se) {
            if (P >= re) return se;
            var le = v[P];
            return se * (le == "desc" ? -1 : 1);
          }
        }
        return n.index - o.index;
      }
      function u0(n, o, v, P) {
        for (var T = -1, H = n.length, X = v.length, re = -1, se = o.length, le = lr(H - X, 0), de = ue(se + le), ge = !P; ++re < se; ) de[re] = o[re];
        for (; ++T < X; ) (ge || T < H) && (de[v[T]] = n[T]);
        for (; le--; ) de[re++] = n[T++];
        return de;
      }
      function f0(n, o, v, P) {
        for (var T = -1, H = n.length, X = -1, re = v.length, se = -1, le = o.length, de = lr(H - re, 0), ge = ue(de + le), Pe = !P; ++T < de; ) ge[T] = n[T];
        for (var We = T; ++se < le; ) ge[We + se] = o[se];
        for (; ++X < re; ) (Pe || T < H) && (ge[We + v[X]] = n[T++]);
        return ge;
      }
      function Jr(n, o) {
        var v = -1, P = n.length;
        for (o || (o = ue(P)); ++v < P; ) o[v] = n[v];
        return o;
      }
      function an(n, o, v, P) {
        var T = !v;
        v || (v = {});
        for (var H = -1, X = o.length; ++H < X; ) {
          var re = o[H], se = P ? P(v[re], n[re], re, v, n) : t;
          se === t && (se = n[re]), T ? Pn(v, re, se) : za(v, re, se);
        }
        return v;
      }
      function C3(n, o) {
        return an(n, Tf(n), o);
      }
      function O3(n, o) {
        return an(n, E0(n), o);
      }
      function Dc(n, o) {
        return function(v, P) {
          var T = gt(v) ? F2 : Zm, H = o ? o() : {};
          return T(v, n, nt(P, 2), H);
        };
      }
      function na(n) {
        return _t(function(o, v) {
          var P = -1, T = v.length, H = T > 1 ? v[T - 1] : t, X = T > 2 ? v[2] : t;
          for (H = n.length > 3 && typeof H == "function" ? (T--, H) : t, X && Br(v[0], v[1], X) && (H = T < 3 ? t : H, T = 1), o = Ht(o); ++P < T; ) {
            var re = v[P];
            re && n(o, re, P, H);
          }
          return o;
        });
      }
      function h0(n, o) {
        return function(v, P) {
          if (v == null) return v;
          if (!Yr(v)) return n(v, P);
          for (var T = v.length, H = o ? T : -1, X = Ht(v); (o ? H-- : ++H < T) && P(X[H], H, X) !== !1; ) ;
          return v;
        };
      }
      function l0(n) {
        return function(o, v, P) {
          for (var T = -1, H = Ht(o), X = P(o), re = X.length; re--; ) {
            var se = X[n ? re : ++T];
            if (v(H[se], se, H) === !1) break;
          }
          return o;
        };
      }
      function R3(n, o, v) {
        var P = o & L, T = Ka(n);
        function H() {
          var X = this && this !== Ct && this instanceof H ? T : n;
          return X.apply(P ? v : this, arguments);
        }
        return H;
      }
      function d0(n) {
        return function(o) {
          o = qt(o);
          var v = Qs(o) ? ji(o) : t, P = v ? v[0] : o.charAt(0), T = v ? ts(v, 1).join("") : o.slice(1);
          return P[n]() + T;
        };
      }
      function sa(n) {
        return function(o) {
          return Qu(hp(fp(o).replace(Ra, "")), n, "");
        };
      }
      function Ka(n) {
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return new n();
            case 1:
              return new n(o[0]);
            case 2:
              return new n(o[0], o[1]);
            case 3:
              return new n(o[0], o[1], o[2]);
            case 4:
              return new n(o[0], o[1], o[2], o[3]);
            case 5:
              return new n(o[0], o[1], o[2], o[3], o[4]);
            case 6:
              return new n(o[0], o[1], o[2], o[3], o[4], o[5]);
            case 7:
              return new n(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
          }
          var v = ia(n.prototype), P = n.apply(v, o);
          return Xt(P) ? P : v;
        };
      }
      function N3(n, o, v) {
        var P = Ka(n);
        function T() {
          for (var H = arguments.length, X = ue(H), re = H, se = aa(T); re--; ) X[re] = arguments[re];
          var le = H < 3 && X[0] !== se && X[H - 1] !== se ? [] : Yn(X, se);
          if (H -= le.length, H < v) return m0(n, o, Pc, T.placeholder, t, X, le, t, t, v - H);
          var de = this && this !== Ct && this instanceof T ? P : n;
          return gr(de, this, X);
        }
        return T;
      }
      function p0(n) {
        return function(o, v, P) {
          var T = Ht(o);
          if (!Yr(o)) {
            var H = nt(v, 3);
            o = vr(o), v = function(re) {
              return H(T[re], re, T);
            };
          }
          var X = n(o, v, P);
          return X > -1 ? T[H ? o[X] : X] : t;
        };
      }
      function g0(n) {
        return On(function(o) {
          var v = o.length, P = v, T = _i.prototype.thru;
          for (n && o.reverse(); P--; ) {
            var H = o[P];
            if (typeof H != "function") throw new wi(f);
            if (T && !X && Nc(H) == "wrapper") var X = new _i([], !0);
          }
          for (P = X ? P : v; ++P < v; ) {
            H = o[P];
            var re = Nc(H), se = re == "wrapper" ? Rf(H) : t;
            se && Ff(se[0]) && se[1] == (E | V | z | U) && !se[4].length && se[9] == 1 ? X = X[Nc(se[0])].apply(X, se[3]) : X = H.length == 1 && Ff(H) ? X[re]() : X.thru(H);
          }
          return function() {
            var le = arguments, de = le[0];
            if (X && le.length == 1 && gt(de)) return X.plant(de).value();
            for (var ge = 0, Pe = v ? o[ge].apply(this, le) : de; ++ge < v; ) Pe = o[ge].call(this, Pe);
            return Pe;
          };
        });
      }
      function Pc(n, o, v, P, T, H, X, re, se, le) {
        var de = o & E, ge = o & L, Pe = o & K, We = o & (V | B), ot = o & ee, yt = Pe ? t : Ka(n);
        function ct() {
          for (var xt = arguments.length, Ot = ue(xt), fi = xt; fi--; ) Ot[fi] = arguments[fi];
          if (We) var Lr = aa(ct), hi = K2(Ot, Lr);
          if (P && (Ot = u0(Ot, P, T, We)), H && (Ot = f0(Ot, H, X, We)), xt -= hi, We && xt < le) {
            var sr = Yn(Ot, Lr);
            return m0(n, o, Pc, ct.placeholder, v, Ot, sr, re, se, le - xt);
          }
          var Hi = ge ? v : this, qn = Pe ? Hi[n] : n;
          return xt = Ot.length, re ? Ot = Z3(Ot, re) : ot && xt > 1 && Ot.reverse(), de && se < xt && (Ot.length = se), this && this !== Ct && this instanceof ct && (qn = yt || Ka(qn)), qn.apply(Hi, Ot);
        }
        return ct;
      }
      function v0(n, o) {
        return function(v, P) {
          return o3(v, n, o(P), {});
        };
      }
      function Cc(n, o) {
        return function(v, P) {
          var T;
          if (v === t && P === t) return o;
          if (v !== t && (T = v), P !== t) {
            if (T === t) return P;
            typeof v == "string" || typeof P == "string" ? (v = ci(v), P = ci(P)) : (v = t0(v), P = t0(P)), T = n(v, P);
          }
          return T;
        };
      }
      function Df(n) {
        return On(function(o) {
          return o = Qt(o, oi(nt())), _t(function(v) {
            var P = this;
            return n(o, function(T) {
              return gr(T, P, v);
            });
          });
        });
      }
      function Oc(n, o) {
        o = o === t ? " " : ci(o);
        var v = o.length;
        if (v < 2) return v ? _f(o, n) : o;
        var P = _f(o, bc(n / Xs(o)));
        return Qs(o) ? ts(ji(P), 0, n).join("") : P.slice(0, n);
      }
      function T3(n, o, v, P) {
        var T = o & L, H = Ka(n);
        function X() {
          for (var re = -1, se = arguments.length, le = -1, de = P.length, ge = ue(de + se), Pe = this && this !== Ct && this instanceof X ? H : n; ++le < de; ) ge[le] = P[le];
          for (; se--; ) ge[le++] = arguments[++re];
          return gr(Pe, T ? v : this, ge);
        }
        return X;
      }
      function b0(n) {
        return function(o, v, P) {
          return P && typeof P != "number" && Br(o, v, P) && (v = P = t), o = Tn(o), v === t ? (v = o, o = 0) : v = Tn(v), P = P === t ? o < v ? 1 : -1 : Tn(P), y3(o, v, P, n);
        };
      }
      function Rc(n) {
        return function(o, v) {
          return typeof o == "string" && typeof v == "string" || (o = Si(o), v = Si(v)), n(o, v);
        };
      }
      function m0(n, o, v, P, T, H, X, re, se, le) {
        var de = o & V, ge = de ? X : t, Pe = de ? t : X, We = de ? H : t, ot = de ? t : H;
        o |= de ? z : q, o &= ~(de ? q : z), o & F || (o &= -4);
        var yt = [n, o, T, We, ge, ot, Pe, re, se, le], ct = v.apply(t, yt);
        return Ff(n) && C0(ct, yt), ct.placeholder = P, O0(ct, n, o);
      }
      function Pf(n) {
        var o = hr[n];
        return function(v, P) {
          if (v = Si(v), P = P == null ? 0 : Rr(mt(P), 292), P && Od(v)) {
            var T = (qt(v) + "e").split("e"), H = o(T[0] + "e" + (+T[1] + P));
            return T = (qt(H) + "e").split("e"), +(T[0] + "e" + (+T[1] - P));
          }
          return o(v);
        };
      }
      var q3 = ta && 1 / oc(new ta([, -0]))[1] == _ ? function(n) {
        return new ta(n);
      } : Qf;
      function y0(n) {
        return function(o) {
          var v = Nr(o);
          return v == fe ? sf(o) : v == Se ? X2(o) : H2(o, n(o));
        };
      }
      function Cn(n, o, v, P, T, H, X, re) {
        var se = o & K;
        if (!se && typeof n != "function") throw new wi(f);
        var le = P ? P.length : 0;
        if (le || (o &= -97, P = T = t), X = X === t ? X : lr(mt(X), 0), re = re === t ? re : mt(re), le -= T ? T.length : 0, o & q) {
          var de = P, ge = T;
          P = T = t;
        }
        var Pe = se ? t : Rf(n), We = [n, o, v, P, T, de, ge, H, X, re];
        if (Pe && Y3(We, Pe), n = We[0], o = We[1], v = We[2], P = We[3], T = We[4], re = We[9] = We[9] === t ? se ? 0 : n.length : lr(We[9] - le, 0), !re && o & (V | B) && (o &= -25), !o || o == L) var ot = R3(n, o, v);
        else o == V || o == B ? ot = N3(n, o, re) : (o == z || o == (L | z)) && !T.length ? ot = T3(n, o, v, P) : ot = Pc.apply(t, We);
        var yt = Pe ? Zd : C0;
        return O0(yt(ot, We), n, o);
      }
      function w0(n, o, v, P) {
        return n === t || ki(n, ea[v]) && !Bt.call(P, v) ? o : n;
      }
      function _0(n, o, v, P, T, H) {
        return Xt(n) && Xt(o) && (H.set(o, n), Sc(n, o, t, _0, H), H.delete(o)), n;
      }
      function F3(n) {
        return Wa(n) ? t : n;
      }
      function A0(n, o, v, P, T, H) {
        var X = v & C, re = n.length, se = o.length;
        if (re != se && !(X && se > re)) return !1;
        var le = H.get(n), de = H.get(o);
        if (le && de) return le == o && de == n;
        var ge = -1, Pe = !0, We = v & R ? new ys() : t;
        for (H.set(n, o), H.set(o, n); ++ge < re; ) {
          var ot = n[ge], yt = o[ge];
          if (P) var ct = X ? P(yt, ot, ge, o, n, H) : P(ot, yt, ge, n, o, H);
          if (ct !== t) {
            if (ct) continue;
            Pe = !1;
            break;
          }
          if (We) {
            if (!Xu(o, function(xt, Ot) {
              if (!Ta(We, Ot) && (ot === xt || T(ot, xt, v, P, H))) return We.push(Ot);
            })) {
              Pe = !1;
              break;
            }
          } else if (!(ot === yt || T(ot, yt, v, P, H))) {
            Pe = !1;
            break;
          }
        }
        return H.delete(n), H.delete(o), Pe;
      }
      function B3(n, o, v, P, T, H, X) {
        switch (v) {
          case ye:
            if (n.byteLength != o.byteLength || n.byteOffset != o.byteOffset) return !1;
            n = n.buffer, o = o.buffer;
          case Ee:
            return !(n.byteLength != o.byteLength || !H(new dc(n), new dc(o)));
          case W:
          case J:
          case be:
            return ki(+n, +o);
          case G:
            return n.name == o.name && n.message == o.message;
          case Te:
          case me:
            return n == o + "";
          case fe:
            var re = sf;
          case Se:
            var se = P & C;
            if (re || (re = oc), n.size != o.size && !se) return !1;
            var le = X.get(n);
            if (le) return le == o;
            P |= R, X.set(n, o);
            var de = A0(re(n), re(o), P, T, H, X);
            return X.delete(n), de;
          case Oe:
            if (Ua) return Ua.call(n) == Ua.call(o);
        }
        return !1;
      }
      function L3(n, o, v, P, T, H) {
        var X = v & C, re = Cf(n), se = re.length, le = Cf(o), de = le.length;
        if (se != de && !X) return !1;
        for (var ge = se; ge--; ) {
          var Pe = re[ge];
          if (!(X ? Pe in o : Bt.call(o, Pe))) return !1;
        }
        var We = H.get(n), ot = H.get(o);
        if (We && ot) return We == o && ot == n;
        var yt = !0;
        H.set(n, o), H.set(o, n);
        for (var ct = X; ++ge < se; ) {
          Pe = re[ge];
          var xt = n[Pe], Ot = o[Pe];
          if (P) var fi = X ? P(Ot, xt, Pe, o, n, H) : P(xt, Ot, Pe, n, o, H);
          if (!(fi === t ? xt === Ot || T(xt, Ot, v, P, H) : fi)) {
            yt = !1;
            break;
          }
          ct || (ct = Pe == "constructor");
        }
        if (yt && !ct) {
          var Lr = n.constructor, hi = o.constructor;
          Lr != hi && "constructor" in n && "constructor" in o && !(typeof Lr == "function" && Lr instanceof Lr && typeof hi == "function" && hi instanceof hi) && (yt = !1);
        }
        return H.delete(n), H.delete(o), yt;
      }
      function On(n) {
        return Lf(D0(n, t, B0), n + "");
      }
      function Cf(n) {
        return $d(n, vr, Tf);
      }
      function Of(n) {
        return $d(n, Qr, E0);
      }
      var Rf = yc ? function(n) {
        return yc.get(n);
      } : Qf;
      function Nc(n) {
        for (var o = n.name + "", v = ra[o], P = Bt.call(ra, o) ? v.length : 0; P--; ) {
          var T = v[P], H = T.func;
          if (H == null || H == n) return T.name;
        }
        return o;
      }
      function aa(n) {
        var o = Bt.call($, "placeholder") ? $ : n;
        return o.placeholder;
      }
      function nt() {
        var n = $.iteratee || Jf;
        return n = n === Jf ? Kd : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function Tc(n, o) {
        var v = n.__data__;
        return V3(o) ? v[typeof o == "string" ? "string" : "hash"] : v.map;
      }
      function Nf(n) {
        for (var o = vr(n), v = o.length; v--; ) {
          var P = o[v], T = n[P];
          o[v] = [P, T, M0(T)];
        }
        return o;
      }
      function As(n, o) {
        var v = J2(n, o);
        return Hd(v) ? v : t;
      }
      function U3(n) {
        var o = Bt.call(n, bs), v = n[bs];
        try {
          n[bs] = t;
          var P = !0;
        } catch {
        }
        var T = hc.call(n);
        return P && (o ? n[bs] = v : delete n[bs]), T;
      }
      var Tf = of ? function(n) {
        return n == null ? [] : (n = Ht(n), Wn(of(n), function(o) {
          return Pd.call(n, o);
        }));
      } : Xf, E0 = of ? function(n) {
        for (var o = []; n; ) Jn(o, Tf(n)), n = pc(n);
        return o;
      } : Xf, Nr = Fr;
      (cf && Nr(new cf(new ArrayBuffer(1))) != ye || Fa && Nr(new Fa()) != fe || uf && Nr(uf.resolve()) != Je || ta && Nr(new ta()) != Se || Ba && Nr(new Ba()) != ve) && (Nr = function(n) {
        var o = Fr(n), v = o == Ie ? n.constructor : t, P = v ? Es(v) : "";
        if (P) switch (P) {
          case _m:
            return ye;
          case Am:
            return fe;
          case Em:
            return Je;
          case xm:
            return Se;
          case Sm:
            return ve;
        }
        return o;
      });
      function z3(n, o, v) {
        for (var P = -1, T = v.length; ++P < T; ) {
          var H = v[P], X = H.size;
          switch (H.type) {
            case "drop":
              n += X;
              break;
            case "dropRight":
              o -= X;
              break;
            case "take":
              o = Rr(o, n + X);
              break;
            case "takeRight":
              n = lr(n, o - X);
              break;
          }
        }
        return { start: n, end: o };
      }
      function j3(n) {
        var o = n.match(Qe);
        return o ? o[1].split(ft) : [];
      }
      function x0(n, o, v) {
        o = es(o, n);
        for (var P = -1, T = o.length, H = !1; ++P < T; ) {
          var X = on(o[P]);
          if (!(H = n != null && v(n, X))) break;
          n = n[X];
        }
        return H || ++P != T ? H : (T = n == null ? 0 : n.length, !!T && jc(T) && Rn(X, T) && (gt(n) || xs(n)));
      }
      function $3(n) {
        var o = n.length, v = new n.constructor(o);
        return o && typeof n[0] == "string" && Bt.call(n, "index") && (v.index = n.index, v.input = n.input), v;
      }
      function S0(n) {
        return typeof n.constructor == "function" && !Va(n) ? ia(pc(n)) : {};
      }
      function k3(n, o, v) {
        var P = n.constructor;
        switch (o) {
          case Ee:
            return If(n);
          case W:
          case J:
            return new P(+n);
          case ye:
            return M3(n, v);
          case Le:
          case De:
          case _e:
          case He:
          case Ve:
          case xe:
          case Ke:
          case ht:
          case Ge:
            return o0(n, v);
          case fe:
            return new P();
          case be:
          case me:
            return new P(n);
          case Te:
            return I3(n);
          case Se:
            return new P();
          case Oe:
            return D3(n);
        }
      }
      function H3(n, o) {
        var v = o.length;
        if (!v) return n;
        var P = v - 1;
        return o[P] = (v > 1 ? "& " : "") + o[P], o = o.join(v > 2 ? ", " : " "), n.replace(Be, `{
/* [wrapped with ` + o + `] */
`);
      }
      function K3(n) {
        return gt(n) || xs(n) || !!(Cd && n && n[Cd]);
      }
      function Rn(n, o) {
        var v = typeof n;
        return o = o ?? D, !!o && (v == "number" || v != "symbol" && Or.test(n)) && n > -1 && n % 1 == 0 && n < o;
      }
      function Br(n, o, v) {
        if (!Xt(v)) return !1;
        var P = typeof o;
        return (P == "number" ? Yr(v) && Rn(o, v.length) : P == "string" && o in v) ? ki(v[o], n) : !1;
      }
      function qf(n, o) {
        if (gt(n)) return !1;
        var v = typeof n;
        return v == "number" || v == "symbol" || v == "boolean" || n == null || ui(n) ? !0 : ze.test(n) || !Ze.test(n) || o != null && n in Ht(o);
      }
      function V3(n) {
        var o = typeof n;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? n !== "__proto__" : n === null;
      }
      function Ff(n) {
        var o = Nc(n), v = $[o];
        if (typeof v != "function" || !(o in It.prototype)) return !1;
        if (n === v) return !0;
        var P = Rf(v);
        return !!P && n === P[0];
      }
      function G3(n) {
        return !!Md && Md in n;
      }
      var W3 = uc ? Nn : Zf;
      function Va(n) {
        var o = n && n.constructor, v = typeof o == "function" && o.prototype || ea;
        return n === v;
      }
      function M0(n) {
        return n === n && !Xt(n);
      }
      function I0(n, o) {
        return function(v) {
          return v == null ? !1 : v[n] === o && (o !== t || n in Ht(v));
        };
      }
      function J3(n) {
        var o = Uc(n, function(P) {
          return v.size === u && v.clear(), P;
        }), v = o.cache;
        return o;
      }
      function Y3(n, o) {
        var v = n[1], P = o[1], T = v | P, H = T < (L | K | E), X = P == E && v == V || P == E && v == U && n[7].length <= o[8] || P == (E | U) && o[7].length <= o[8] && v == V;
        if (!(H || X)) return n;
        P & L && (n[2] = o[2], T |= v & L ? 0 : F);
        var re = o[3];
        if (re) {
          var se = n[3];
          n[3] = se ? u0(se, re, o[4]) : re, n[4] = se ? Yn(n[3], m) : o[4];
        }
        return re = o[5], re && (se = n[5], n[5] = se ? f0(se, re, o[6]) : re, n[6] = se ? Yn(n[5], m) : o[6]), re = o[7], re && (n[7] = re), P & E && (n[8] = n[8] == null ? o[8] : Rr(n[8], o[8])), n[9] == null && (n[9] = o[9]), n[0] = o[0], n[1] = T, n;
      }
      function Q3(n) {
        var o = [];
        if (n != null) for (var v in Ht(n)) o.push(v);
        return o;
      }
      function X3(n) {
        return hc.call(n);
      }
      function D0(n, o, v) {
        return o = lr(o === t ? n.length - 1 : o, 0), function() {
          for (var P = arguments, T = -1, H = lr(P.length - o, 0), X = ue(H); ++T < H; ) X[T] = P[o + T];
          T = -1;
          for (var re = ue(o + 1); ++T < o; ) re[T] = P[T];
          return re[o] = v(X), gr(n, this, re);
        };
      }
      function P0(n, o) {
        return o.length < 2 ? n : _s(n, Ei(o, 0, -1));
      }
      function Z3(n, o) {
        for (var v = n.length, P = Rr(o.length, v), T = Jr(n); P--; ) {
          var H = o[P];
          n[P] = Rn(H, v) ? T[H] : t;
        }
        return n;
      }
      function Bf(n, o) {
        if (!(o === "constructor" && typeof n[o] == "function") && o != "__proto__") return n[o];
      }
      var C0 = R0(Zd), Ga = pm || function(n, o) {
        return Ct.setTimeout(n, o);
      }, Lf = R0(A3);
      function O0(n, o, v) {
        var P = o + "";
        return Lf(n, H3(P, ey(j3(P), v)));
      }
      function R0(n) {
        var o = 0, v = 0;
        return function() {
          var P = mm(), T = c - (P - v);
          if (v = P, T > 0) {
            if (++o >= w) return arguments[0];
          } else o = 0;
          return n.apply(t, arguments);
        };
      }
      function qc(n, o) {
        var v = -1, P = n.length, T = P - 1;
        for (o = o === t ? P : o; ++v < o; ) {
          var H = wf(v, T), X = n[H];
          n[H] = n[v], n[v] = X;
        }
        return n.length = o, n;
      }
      var N0 = J3(function(n) {
        var o = [];
        return n.charCodeAt(0) === 46 && o.push(""), n.replace(ut, function(v, P, T, H) {
          o.push(T ? H.replace(Nt, "$1") : P || v);
        }), o;
      });
      function on(n) {
        if (typeof n == "string" || ui(n)) return n;
        var o = n + "";
        return o == "0" && 1 / n == -1 / 0 ? "-0" : o;
      }
      function Es(n) {
        if (n != null) {
          try {
            return fc.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function ey(n, o) {
        return yi(Z, function(v) {
          var P = "_." + v[0];
          o & v[1] && !sc(n, P) && n.push(P);
        }), n.sort();
      }
      function T0(n) {
        if (n instanceof It) return n.clone();
        var o = new _i(n.__wrapped__, n.__chain__);
        return o.__actions__ = Jr(n.__actions__), o.__index__ = n.__index__, o.__values__ = n.__values__, o;
      }
      function ty(n, o, v) {
        (v ? Br(n, o, v) : o === t) ? o = 1 : o = lr(mt(o), 0);
        var P = n == null ? 0 : n.length;
        if (!P || o < 1) return [];
        for (var T = 0, H = 0, X = ue(bc(P / o)); T < P; ) X[H++] = Ei(n, T, T += o);
        return X;
      }
      function ry(n) {
        for (var o = -1, v = n == null ? 0 : n.length, P = 0, T = []; ++o < v; ) {
          var H = n[o];
          H && (T[P++] = H);
        }
        return T;
      }
      function iy() {
        var n = arguments.length;
        if (!n) return [];
        for (var o = ue(n - 1), v = arguments[0], P = n; P--; ) o[P - 1] = arguments[P];
        return Jn(gt(v) ? Jr(v) : [v], Ar(o, 1));
      }
      var ny = _t(function(n, o) {
        return nr(n) ? ja(n, Ar(o, 1, nr, !0)) : [];
      }), sy = _t(function(n, o) {
        var v = xi(o);
        return nr(v) && (v = t), nr(n) ? ja(n, Ar(o, 1, nr, !0), nt(v, 2)) : [];
      }), ay = _t(function(n, o) {
        var v = xi(o);
        return nr(v) && (v = t), nr(n) ? ja(n, Ar(o, 1, nr, !0), t, v) : [];
      });
      function oy(n, o, v) {
        var P = n == null ? 0 : n.length;
        return P ? (o = v || o === t ? 1 : mt(o), Ei(n, o < 0 ? 0 : o, P)) : [];
      }
      function cy(n, o, v) {
        var P = n == null ? 0 : n.length;
        return P ? (o = v || o === t ? 1 : mt(o), o = P - o, Ei(n, 0, o < 0 ? 0 : o)) : [];
      }
      function uy(n, o) {
        return n && n.length ? Ic(n, nt(o, 3), !0, !0) : [];
      }
      function fy(n, o) {
        return n && n.length ? Ic(n, nt(o, 3), !0) : [];
      }
      function hy(n, o, v, P) {
        var T = n == null ? 0 : n.length;
        return T ? (v && typeof v != "number" && Br(n, o, v) && (v = 0, P = T), i3(n, o, v, P)) : [];
      }
      function q0(n, o, v) {
        var P = n == null ? 0 : n.length;
        if (!P) return -1;
        var T = v == null ? 0 : mt(v);
        return T < 0 && (T = lr(P + T, 0)), ac(n, nt(o, 3), T);
      }
      function F0(n, o, v) {
        var P = n == null ? 0 : n.length;
        if (!P) return -1;
        var T = P - 1;
        return v !== t && (T = mt(v), T = v < 0 ? lr(P + T, 0) : Rr(T, P - 1)), ac(n, nt(o, 3), T, !0);
      }
      function B0(n) {
        var o = n == null ? 0 : n.length;
        return o ? Ar(n, 1) : [];
      }
      function ly(n) {
        var o = n == null ? 0 : n.length;
        return o ? Ar(n, _) : [];
      }
      function dy(n, o) {
        var v = n == null ? 0 : n.length;
        return v ? (o = o === t ? 1 : mt(o), Ar(n, o)) : [];
      }
      function py(n) {
        for (var o = -1, v = n == null ? 0 : n.length, P = {}; ++o < v; ) {
          var T = n[o];
          P[T[0]] = T[1];
        }
        return P;
      }
      function L0(n) {
        return n && n.length ? n[0] : t;
      }
      function gy(n, o, v) {
        var P = n == null ? 0 : n.length;
        if (!P) return -1;
        var T = v == null ? 0 : mt(v);
        return T < 0 && (T = lr(P + T, 0)), Ys(n, o, T);
      }
      function vy(n) {
        var o = n == null ? 0 : n.length;
        return o ? Ei(n, 0, -1) : [];
      }
      var by = _t(function(n) {
        var o = Qt(n, Sf);
        return o.length && o[0] === n[0] ? gf(o) : [];
      }), my = _t(function(n) {
        var o = xi(n), v = Qt(n, Sf);
        return o === xi(v) ? o = t : v.pop(), v.length && v[0] === n[0] ? gf(v, nt(o, 2)) : [];
      }), yy = _t(function(n) {
        var o = xi(n), v = Qt(n, Sf);
        return o = typeof o == "function" ? o : t, o && v.pop(), v.length && v[0] === n[0] ? gf(v, t, o) : [];
      });
      function wy(n, o) {
        return n == null ? "" : vm.call(n, o);
      }
      function xi(n) {
        var o = n == null ? 0 : n.length;
        return o ? n[o - 1] : t;
      }
      function _y(n, o, v) {
        var P = n == null ? 0 : n.length;
        if (!P) return -1;
        var T = P;
        return v !== t && (T = mt(v), T = T < 0 ? lr(P + T, 0) : Rr(T, P - 1)), o === o ? em(n, o, T) : ac(n, md, T, !0);
      }
      function Ay(n, o) {
        return n && n.length ? Jd(n, mt(o)) : t;
      }
      var Ey = _t(U0);
      function U0(n, o) {
        return n && n.length && o && o.length ? yf(n, o) : n;
      }
      function xy(n, o, v) {
        return n && n.length && o && o.length ? yf(n, o, nt(v, 2)) : n;
      }
      function Sy(n, o, v) {
        return n && n.length && o && o.length ? yf(n, o, t, v) : n;
      }
      var My = On(function(n, o) {
        var v = n == null ? 0 : n.length, P = hf(n, o);
        return Xd(n, Qt(o, function(T) {
          return Rn(T, v) ? +T : T;
        }).sort(c0)), P;
      });
      function Iy(n, o) {
        var v = [];
        if (!(n && n.length)) return v;
        var P = -1, T = [], H = n.length;
        for (o = nt(o, 3); ++P < H; ) {
          var X = n[P];
          o(X, P, n) && (v.push(X), T.push(P));
        }
        return Xd(n, T), v;
      }
      function Uf(n) {
        return n == null ? n : wm.call(n);
      }
      function Dy(n, o, v) {
        var P = n == null ? 0 : n.length;
        return P ? (v && typeof v != "number" && Br(n, o, v) ? (o = 0, v = P) : (o = o == null ? 0 : mt(o), v = v === t ? P : mt(v)), Ei(n, o, v)) : [];
      }
      function Py(n, o) {
        return Mc(n, o);
      }
      function Cy(n, o, v) {
        return Af(n, o, nt(v, 2));
      }
      function Oy(n, o) {
        var v = n == null ? 0 : n.length;
        if (v) {
          var P = Mc(n, o);
          if (P < v && ki(n[P], o)) return P;
        }
        return -1;
      }
      function Ry(n, o) {
        return Mc(n, o, !0);
      }
      function Ny(n, o, v) {
        return Af(n, o, nt(v, 2), !0);
      }
      function Ty(n, o) {
        var v = n == null ? 0 : n.length;
        if (v) {
          var P = Mc(n, o, !0) - 1;
          if (ki(n[P], o)) return P;
        }
        return -1;
      }
      function qy(n) {
        return n && n.length ? e0(n) : [];
      }
      function Fy(n, o) {
        return n && n.length ? e0(n, nt(o, 2)) : [];
      }
      function By(n) {
        var o = n == null ? 0 : n.length;
        return o ? Ei(n, 1, o) : [];
      }
      function Ly(n, o, v) {
        return n && n.length ? (o = v || o === t ? 1 : mt(o), Ei(n, 0, o < 0 ? 0 : o)) : [];
      }
      function Uy(n, o, v) {
        var P = n == null ? 0 : n.length;
        return P ? (o = v || o === t ? 1 : mt(o), o = P - o, Ei(n, o < 0 ? 0 : o, P)) : [];
      }
      function zy(n, o) {
        return n && n.length ? Ic(n, nt(o, 3), !1, !0) : [];
      }
      function jy(n, o) {
        return n && n.length ? Ic(n, nt(o, 3)) : [];
      }
      var $y = _t(function(n) {
        return Zn(Ar(n, 1, nr, !0));
      }), ky = _t(function(n) {
        var o = xi(n);
        return nr(o) && (o = t), Zn(Ar(n, 1, nr, !0), nt(o, 2));
      }), Hy = _t(function(n) {
        var o = xi(n);
        return o = typeof o == "function" ? o : t, Zn(Ar(n, 1, nr, !0), t, o);
      });
      function Ky(n) {
        return n && n.length ? Zn(n) : [];
      }
      function Vy(n, o) {
        return n && n.length ? Zn(n, nt(o, 2)) : [];
      }
      function Gy(n, o) {
        return o = typeof o == "function" ? o : t, n && n.length ? Zn(n, t, o) : [];
      }
      function zf(n) {
        if (!(n && n.length)) return [];
        var o = 0;
        return n = Wn(n, function(v) {
          if (nr(v)) return o = lr(v.length, o), !0;
        }), rf(o, function(v) {
          return Qt(n, Zu(v));
        });
      }
      function z0(n, o) {
        if (!(n && n.length)) return [];
        var v = zf(n);
        return o == null ? v : Qt(v, function(P) {
          return gr(o, t, P);
        });
      }
      var Wy = _t(function(n, o) {
        return nr(n) ? ja(n, o) : [];
      }), Jy = _t(function(n) {
        return xf(Wn(n, nr));
      }), Yy = _t(function(n) {
        var o = xi(n);
        return nr(o) && (o = t), xf(Wn(n, nr), nt(o, 2));
      }), Qy = _t(function(n) {
        var o = xi(n);
        return o = typeof o == "function" ? o : t, xf(Wn(n, nr), t, o);
      }), Xy = _t(zf);
      function Zy(n, o) {
        return n0(n || [], o || [], za);
      }
      function e6(n, o) {
        return n0(n || [], o || [], Ha);
      }
      var t6 = _t(function(n) {
        var o = n.length, v = o > 1 ? n[o - 1] : t;
        return v = typeof v == "function" ? (n.pop(), v) : t, z0(n, v);
      });
      function j0(n) {
        var o = $(n);
        return o.__chain__ = !0, o;
      }
      function r6(n, o) {
        return o(n), n;
      }
      function Fc(n, o) {
        return o(n);
      }
      var i6 = On(function(n) {
        var o = n.length, v = o ? n[0] : 0, P = this.__wrapped__, T = function(H) {
          return hf(H, n);
        };
        return o > 1 || this.__actions__.length || !(P instanceof It) || !Rn(v) ? this.thru(T) : (P = P.slice(v, +v + (o ? 1 : 0)), P.__actions__.push({ func: Fc, args: [T], thisArg: t }), new _i(P, this.__chain__).thru(function(H) {
          return o && !H.length && H.push(t), H;
        }));
      });
      function n6() {
        return j0(this);
      }
      function s6() {
        return new _i(this.value(), this.__chain__);
      }
      function a6() {
        this.__values__ === t && (this.__values__ = tp(this.value()));
        var n = this.__index__ >= this.__values__.length, o = n ? t : this.__values__[this.__index__++];
        return { done: n, value: o };
      }
      function o6() {
        return this;
      }
      function c6(n) {
        for (var o, v = this; v instanceof _c; ) {
          var P = T0(v);
          P.__index__ = 0, P.__values__ = t, o ? T.__wrapped__ = P : o = P;
          var T = P;
          v = v.__wrapped__;
        }
        return T.__wrapped__ = n, o;
      }
      function u6() {
        var n = this.__wrapped__;
        if (n instanceof It) {
          var o = n;
          return this.__actions__.length && (o = new It(this)), o = o.reverse(), o.__actions__.push({ func: Fc, args: [Uf], thisArg: t }), new _i(o, this.__chain__);
        }
        return this.thru(Uf);
      }
      function f6() {
        return i0(this.__wrapped__, this.__actions__);
      }
      var h6 = Dc(function(n, o, v) {
        Bt.call(n, v) ? ++n[v] : Pn(n, v, 1);
      });
      function l6(n, o, v) {
        var P = gt(n) ? vd : r3;
        return v && Br(n, o, v) && (o = t), P(n, nt(o, 3));
      }
      function d6(n, o) {
        var v = gt(n) ? Wn : zd;
        return v(n, nt(o, 3));
      }
      var p6 = p0(q0), g6 = p0(F0);
      function v6(n, o) {
        return Ar(Bc(n, o), 1);
      }
      function b6(n, o) {
        return Ar(Bc(n, o), _);
      }
      function m6(n, o, v) {
        return v = v === t ? 1 : mt(v), Ar(Bc(n, o), v);
      }
      function $0(n, o) {
        var v = gt(n) ? yi : Xn;
        return v(n, nt(o, 3));
      }
      function k0(n, o) {
        var v = gt(n) ? B2 : Ud;
        return v(n, nt(o, 3));
      }
      var y6 = Dc(function(n, o, v) {
        Bt.call(n, v) ? n[v].push(o) : Pn(n, v, [o]);
      });
      function w6(n, o, v, P) {
        n = Yr(n) ? n : ca(n), v = v && !P ? mt(v) : 0;
        var T = n.length;
        return v < 0 && (v = lr(T + v, 0)), $c(n) ? v <= T && n.indexOf(o, v) > -1 : !!T && Ys(n, o, v) > -1;
      }
      var _6 = _t(function(n, o, v) {
        var P = -1, T = typeof o == "function", H = Yr(n) ? ue(n.length) : [];
        return Xn(n, function(X) {
          H[++P] = T ? gr(o, X, v) : $a(X, o, v);
        }), H;
      }), A6 = Dc(function(n, o, v) {
        Pn(n, v, o);
      });
      function Bc(n, o) {
        var v = gt(n) ? Qt : Vd;
        return v(n, nt(o, 3));
      }
      function E6(n, o, v, P) {
        return n == null ? [] : (gt(o) || (o = o == null ? [] : [o]), v = P ? t : v, gt(v) || (v = v == null ? [] : [v]), Yd(n, o, v));
      }
      var x6 = Dc(function(n, o, v) {
        n[v ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      });
      function S6(n, o, v) {
        var P = gt(n) ? Qu : wd, T = arguments.length < 3;
        return P(n, nt(o, 4), v, T, Xn);
      }
      function M6(n, o, v) {
        var P = gt(n) ? L2 : wd, T = arguments.length < 3;
        return P(n, nt(o, 4), v, T, Ud);
      }
      function I6(n, o) {
        var v = gt(n) ? Wn : zd;
        return v(n, zc(nt(o, 3)));
      }
      function D6(n) {
        var o = gt(n) ? qd : w3;
        return o(n);
      }
      function P6(n, o, v) {
        (v ? Br(n, o, v) : o === t) ? o = 1 : o = mt(o);
        var P = gt(n) ? Qm : _3;
        return P(n, o);
      }
      function C6(n) {
        var o = gt(n) ? Xm : E3;
        return o(n);
      }
      function O6(n) {
        if (n == null) return 0;
        if (Yr(n)) return $c(n) ? Xs(n) : n.length;
        var o = Nr(n);
        return o == fe || o == Se ? n.size : bf(n).length;
      }
      function R6(n, o, v) {
        var P = gt(n) ? Xu : x3;
        return v && Br(n, o, v) && (o = t), P(n, nt(o, 3));
      }
      var N6 = _t(function(n, o) {
        if (n == null) return [];
        var v = o.length;
        return v > 1 && Br(n, o[0], o[1]) ? o = [] : v > 2 && Br(o[0], o[1], o[2]) && (o = [o[0]]), Yd(n, Ar(o, 1), []);
      }), Lc = dm || function() {
        return Ct.Date.now();
      };
      function T6(n, o) {
        if (typeof o != "function") throw new wi(f);
        return n = mt(n), function() {
          if (--n < 1) return o.apply(this, arguments);
        };
      }
      function H0(n, o, v) {
        return o = v ? t : o, o = n && o == null ? n.length : o, Cn(n, E, t, t, t, t, o);
      }
      function K0(n, o) {
        var v;
        if (typeof o != "function") throw new wi(f);
        return n = mt(n), function() {
          return --n > 0 && (v = o.apply(this, arguments)), n <= 1 && (o = t), v;
        };
      }
      var jf = _t(function(n, o, v) {
        var P = L;
        if (v.length) {
          var T = Yn(v, aa(jf));
          P |= z;
        }
        return Cn(n, P, o, v, T);
      }), V0 = _t(function(n, o, v) {
        var P = L | K;
        if (v.length) {
          var T = Yn(v, aa(V0));
          P |= z;
        }
        return Cn(o, P, n, v, T);
      });
      function G0(n, o, v) {
        o = v ? t : o;
        var P = Cn(n, V, t, t, t, t, t, o);
        return P.placeholder = G0.placeholder, P;
      }
      function W0(n, o, v) {
        o = v ? t : o;
        var P = Cn(n, B, t, t, t, t, t, o);
        return P.placeholder = W0.placeholder, P;
      }
      function J0(n, o, v) {
        var P, T, H, X, re, se, le = 0, de = !1, ge = !1, Pe = !0;
        if (typeof n != "function") throw new wi(f);
        o = Si(o) || 0, Xt(v) && (de = !!v.leading, ge = "maxWait" in v, H = ge ? lr(Si(v.maxWait) || 0, o) : H, Pe = "trailing" in v ? !!v.trailing : Pe);
        function We(sr) {
          var Hi = P, qn = T;
          return P = T = t, le = sr, X = n.apply(qn, Hi), X;
        }
        function ot(sr) {
          return le = sr, re = Ga(xt, o), de ? We(sr) : X;
        }
        function yt(sr) {
          var Hi = sr - se, qn = sr - le, pp = o - Hi;
          return ge ? Rr(pp, H - qn) : pp;
        }
        function ct(sr) {
          var Hi = sr - se, qn = sr - le;
          return se === t || Hi >= o || Hi < 0 || ge && qn >= H;
        }
        function xt() {
          var sr = Lc();
          if (ct(sr)) return Ot(sr);
          re = Ga(xt, yt(sr));
        }
        function Ot(sr) {
          return re = t, Pe && P ? We(sr) : (P = T = t, X);
        }
        function fi() {
          re !== t && s0(re), le = 0, P = se = T = re = t;
        }
        function Lr() {
          return re === t ? X : Ot(Lc());
        }
        function hi() {
          var sr = Lc(), Hi = ct(sr);
          if (P = arguments, T = this, se = sr, Hi) {
            if (re === t) return ot(se);
            if (ge) return s0(re), re = Ga(xt, o), We(se);
          }
          return re === t && (re = Ga(xt, o)), X;
        }
        return hi.cancel = fi, hi.flush = Lr, hi;
      }
      var q6 = _t(function(n, o) {
        return Ld(n, 1, o);
      }), F6 = _t(function(n, o, v) {
        return Ld(n, Si(o) || 0, v);
      });
      function B6(n) {
        return Cn(n, ee);
      }
      function Uc(n, o) {
        if (typeof n != "function" || o != null && typeof o != "function") throw new wi(f);
        var v = function() {
          var P = arguments, T = o ? o.apply(this, P) : P[0], H = v.cache;
          if (H.has(T)) return H.get(T);
          var X = n.apply(this, P);
          return v.cache = H.set(T, X) || H, X;
        };
        return v.cache = new (Uc.Cache || Dn)(), v;
      }
      Uc.Cache = Dn;
      function zc(n) {
        if (typeof n != "function") throw new wi(f);
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return !n.call(this);
            case 1:
              return !n.call(this, o[0]);
            case 2:
              return !n.call(this, o[0], o[1]);
            case 3:
              return !n.call(this, o[0], o[1], o[2]);
          }
          return !n.apply(this, o);
        };
      }
      function L6(n) {
        return K0(2, n);
      }
      var U6 = S3(function(n, o) {
        o = o.length == 1 && gt(o[0]) ? Qt(o[0], oi(nt())) : Qt(Ar(o, 1), oi(nt()));
        var v = o.length;
        return _t(function(P) {
          for (var T = -1, H = Rr(P.length, v); ++T < H; ) P[T] = o[T].call(this, P[T]);
          return gr(n, this, P);
        });
      }), $f = _t(function(n, o) {
        var v = Yn(o, aa($f));
        return Cn(n, z, t, o, v);
      }), Y0 = _t(function(n, o) {
        var v = Yn(o, aa(Y0));
        return Cn(n, q, t, o, v);
      }), z6 = On(function(n, o) {
        return Cn(n, U, t, t, t, o);
      });
      function j6(n, o) {
        if (typeof n != "function") throw new wi(f);
        return o = o === t ? o : mt(o), _t(n, o);
      }
      function $6(n, o) {
        if (typeof n != "function") throw new wi(f);
        return o = o == null ? 0 : lr(mt(o), 0), _t(function(v) {
          var P = v[o], T = ts(v, 0, o);
          return P && Jn(T, P), gr(n, this, T);
        });
      }
      function k6(n, o, v) {
        var P = !0, T = !0;
        if (typeof n != "function") throw new wi(f);
        return Xt(v) && (P = "leading" in v ? !!v.leading : P, T = "trailing" in v ? !!v.trailing : T), J0(n, o, { leading: P, maxWait: o, trailing: T });
      }
      function H6(n) {
        return H0(n, 1);
      }
      function K6(n, o) {
        return $f(Mf(o), n);
      }
      function V6() {
        if (!arguments.length) return [];
        var n = arguments[0];
        return gt(n) ? n : [n];
      }
      function G6(n) {
        return Ai(n, I);
      }
      function W6(n, o) {
        return o = typeof o == "function" ? o : t, Ai(n, I, o);
      }
      function J6(n) {
        return Ai(n, A | I);
      }
      function Y6(n, o) {
        return o = typeof o == "function" ? o : t, Ai(n, A | I, o);
      }
      function Q6(n, o) {
        return o == null || Bd(n, o, vr(o));
      }
      function ki(n, o) {
        return n === o || n !== n && o !== o;
      }
      var X6 = Rc(pf), Z6 = Rc(function(n, o) {
        return n >= o;
      }), xs = kd(/* @__PURE__ */ function() {
        return arguments;
      }()) ? kd : function(n) {
        return er(n) && Bt.call(n, "callee") && !Pd.call(n, "callee");
      }, gt = ue.isArray, ew = qr ? oi(qr) : c3;
      function Yr(n) {
        return n != null && jc(n.length) && !Nn(n);
      }
      function nr(n) {
        return er(n) && Yr(n);
      }
      function tw(n) {
        return n === !0 || n === !1 || er(n) && Fr(n) == W;
      }
      var rs = gm || Zf, rw = zi ? oi(zi) : u3;
      function iw(n) {
        return er(n) && n.nodeType === 1 && !Wa(n);
      }
      function nw(n) {
        if (n == null) return !0;
        if (Yr(n) && (gt(n) || typeof n == "string" || typeof n.splice == "function" || rs(n) || oa(n) || xs(n))) return !n.length;
        var o = Nr(n);
        if (o == fe || o == Se) return !n.size;
        if (Va(n)) return !bf(n).length;
        for (var v in n) if (Bt.call(n, v)) return !1;
        return !0;
      }
      function sw(n, o) {
        return ka(n, o);
      }
      function aw(n, o, v) {
        v = typeof v == "function" ? v : t;
        var P = v ? v(n, o) : t;
        return P === t ? ka(n, o, t, v) : !!P;
      }
      function kf(n) {
        if (!er(n)) return !1;
        var o = Fr(n);
        return o == G || o == S || typeof n.message == "string" && typeof n.name == "string" && !Wa(n);
      }
      function ow(n) {
        return typeof n == "number" && Od(n);
      }
      function Nn(n) {
        if (!Xt(n)) return !1;
        var o = Fr(n);
        return o == oe || o == ce || o == k || o == Ce;
      }
      function Q0(n) {
        return typeof n == "number" && n == mt(n);
      }
      function jc(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= D;
      }
      function Xt(n) {
        var o = typeof n;
        return n != null && (o == "object" || o == "function");
      }
      function er(n) {
        return n != null && typeof n == "object";
      }
      var X0 = mi ? oi(mi) : h3;
      function cw(n, o) {
        return n === o || vf(n, o, Nf(o));
      }
      function uw(n, o, v) {
        return v = typeof v == "function" ? v : t, vf(n, o, Nf(o), v);
      }
      function fw(n) {
        return Z0(n) && n != +n;
      }
      function hw(n) {
        if (W3(n)) throw new dt(a);
        return Hd(n);
      }
      function lw(n) {
        return n === null;
      }
      function dw(n) {
        return n == null;
      }
      function Z0(n) {
        return typeof n == "number" || er(n) && Fr(n) == be;
      }
      function Wa(n) {
        if (!er(n) || Fr(n) != Ie) return !1;
        var o = pc(n);
        if (o === null) return !0;
        var v = Bt.call(o, "constructor") && o.constructor;
        return typeof v == "function" && v instanceof v && fc.call(v) == um;
      }
      var Hf = nn ? oi(nn) : l3;
      function pw(n) {
        return Q0(n) && n >= -9007199254740991 && n <= D;
      }
      var ep = Na ? oi(Na) : d3;
      function $c(n) {
        return typeof n == "string" || !gt(n) && er(n) && Fr(n) == me;
      }
      function ui(n) {
        return typeof n == "symbol" || er(n) && Fr(n) == Oe;
      }
      var oa = vs ? oi(vs) : p3;
      function gw(n) {
        return n === t;
      }
      function vw(n) {
        return er(n) && Nr(n) == ve;
      }
      function bw(n) {
        return er(n) && Fr(n) == Ne;
      }
      var mw = Rc(mf), yw = Rc(function(n, o) {
        return n <= o;
      });
      function tp(n) {
        if (!n) return [];
        if (Yr(n)) return $c(n) ? ji(n) : Jr(n);
        if (qa && n[qa]) return Q2(n[qa]());
        var o = Nr(n), v = o == fe ? sf : o == Se ? oc : ca;
        return v(n);
      }
      function Tn(n) {
        if (!n) return n === 0 ? n : 0;
        if (n = Si(n), n === _ || n === -1 / 0) {
          var o = n < 0 ? -1 : 1;
          return o * x;
        }
        return n === n ? n : 0;
      }
      function mt(n) {
        var o = Tn(n), v = o % 1;
        return o === o ? v ? o - v : o : 0;
      }
      function rp(n) {
        return n ? ws(mt(n), 0, y) : 0;
      }
      function Si(n) {
        if (typeof n == "number") return n;
        if (ui(n)) return g;
        if (Xt(n)) {
          var o = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = Xt(o) ? o + "" : o;
        }
        if (typeof n != "string") return n === 0 ? n : +n;
        n = _d(n);
        var v = Dr.test(n);
        return v || Cr.test(n) ? pt(n.slice(2), v ? 2 : 8) : Ir.test(n) ? g : +n;
      }
      function ip(n) {
        return an(n, Qr(n));
      }
      function ww(n) {
        return n ? ws(mt(n), -9007199254740991, D) : n === 0 ? n : 0;
      }
      function qt(n) {
        return n == null ? "" : ci(n);
      }
      var _w = na(function(n, o) {
        if (Va(o) || Yr(o)) {
          an(o, vr(o), n);
          return;
        }
        for (var v in o) Bt.call(o, v) && za(n, v, o[v]);
      }), np = na(function(n, o) {
        an(o, Qr(o), n);
      }), kc = na(function(n, o, v, P) {
        an(o, Qr(o), n, P);
      }), Aw = na(function(n, o, v, P) {
        an(o, vr(o), n, P);
      }), Ew = On(hf);
      function xw(n, o) {
        var v = ia(n);
        return o == null ? v : Fd(v, o);
      }
      var Sw = _t(function(n, o) {
        n = Ht(n);
        var v = -1, P = o.length, T = P > 2 ? o[2] : t;
        for (T && Br(o[0], o[1], T) && (P = 1); ++v < P; ) for (var H = o[v], X = Qr(H), re = -1, se = X.length; ++re < se; ) {
          var le = X[re], de = n[le];
          (de === t || ki(de, ea[le]) && !Bt.call(n, le)) && (n[le] = H[le]);
        }
        return n;
      }), Mw = _t(function(n) {
        return n.push(t, _0), gr(sp, t, n);
      });
      function Iw(n, o) {
        return bd(n, nt(o, 3), sn);
      }
      function Dw(n, o) {
        return bd(n, nt(o, 3), df);
      }
      function Pw(n, o) {
        return n == null ? n : lf(n, nt(o, 3), Qr);
      }
      function Cw(n, o) {
        return n == null ? n : jd(n, nt(o, 3), Qr);
      }
      function Ow(n, o) {
        return n && sn(n, nt(o, 3));
      }
      function Rw(n, o) {
        return n && df(n, nt(o, 3));
      }
      function Nw(n) {
        return n == null ? [] : xc(n, vr(n));
      }
      function Tw(n) {
        return n == null ? [] : xc(n, Qr(n));
      }
      function Kf(n, o, v) {
        var P = n == null ? t : _s(n, o);
        return P === t ? v : P;
      }
      function qw(n, o) {
        return n != null && x0(n, o, n3);
      }
      function Vf(n, o) {
        return n != null && x0(n, o, s3);
      }
      var Fw = v0(function(n, o, v) {
        o != null && typeof o.toString != "function" && (o = hc.call(o)), n[o] = v;
      }, Wf(Xr)), Bw = v0(function(n, o, v) {
        o != null && typeof o.toString != "function" && (o = hc.call(o)), Bt.call(n, o) ? n[o].push(v) : n[o] = [v];
      }, nt), Lw = _t($a);
      function vr(n) {
        return Yr(n) ? Td(n) : bf(n);
      }
      function Qr(n) {
        return Yr(n) ? Td(n, !0) : g3(n);
      }
      function Uw(n, o) {
        var v = {};
        return o = nt(o, 3), sn(n, function(P, T, H) {
          Pn(v, o(P, T, H), P);
        }), v;
      }
      function zw(n, o) {
        var v = {};
        return o = nt(o, 3), sn(n, function(P, T, H) {
          Pn(v, T, o(P, T, H));
        }), v;
      }
      var jw = na(function(n, o, v) {
        Sc(n, o, v);
      }), sp = na(function(n, o, v, P) {
        Sc(n, o, v, P);
      }), $w = On(function(n, o) {
        var v = {};
        if (n == null) return v;
        var P = !1;
        o = Qt(o, function(H) {
          return H = es(H, n), P || (P = H.length > 1), H;
        }), an(n, Of(n), v), P && (v = Ai(v, A | M | I, F3));
        for (var T = o.length; T--; ) Ef(v, o[T]);
        return v;
      });
      function kw(n, o) {
        return ap(n, zc(nt(o)));
      }
      var Hw = On(function(n, o) {
        return n == null ? {} : b3(n, o);
      });
      function ap(n, o) {
        if (n == null) return {};
        var v = Qt(Of(n), function(P) {
          return [P];
        });
        return o = nt(o), Qd(n, v, function(P, T) {
          return o(P, T[0]);
        });
      }
      function Kw(n, o, v) {
        o = es(o, n);
        var P = -1, T = o.length;
        for (T || (T = 1, n = t); ++P < T; ) {
          var H = n == null ? t : n[on(o[P])];
          H === t && (P = T, H = v), n = Nn(H) ? H.call(n) : H;
        }
        return n;
      }
      function Vw(n, o, v) {
        return n == null ? n : Ha(n, o, v);
      }
      function Gw(n, o, v, P) {
        return P = typeof P == "function" ? P : t, n == null ? n : Ha(n, o, v, P);
      }
      var op = y0(vr), cp = y0(Qr);
      function Ww(n, o, v) {
        var P = gt(n), T = P || rs(n) || oa(n);
        if (o = nt(o, 4), v == null) {
          var H = n && n.constructor;
          T ? v = P ? new H() : [] : Xt(n) ? v = Nn(H) ? ia(pc(n)) : {} : v = {};
        }
        return (T ? yi : sn)(n, function(X, re, se) {
          return o(v, X, re, se);
        }), v;
      }
      function Jw(n, o) {
        return n == null ? !0 : Ef(n, o);
      }
      function Yw(n, o, v) {
        return n == null ? n : r0(n, o, Mf(v));
      }
      function Qw(n, o, v, P) {
        return P = typeof P == "function" ? P : t, n == null ? n : r0(n, o, Mf(v), P);
      }
      function ca(n) {
        return n == null ? [] : nf(n, vr(n));
      }
      function Xw(n) {
        return n == null ? [] : nf(n, Qr(n));
      }
      function Zw(n, o, v) {
        return v === t && (v = o, o = t), v !== t && (v = Si(v), v = v === v ? v : 0), o !== t && (o = Si(o), o = o === o ? o : 0), ws(Si(n), o, v);
      }
      function e5(n, o, v) {
        return o = Tn(o), v === t ? (v = o, o = 0) : v = Tn(v), n = Si(n), a3(n, o, v);
      }
      function t5(n, o, v) {
        if (v && typeof v != "boolean" && Br(n, o, v) && (o = v = t), v === t && (typeof o == "boolean" ? (v = o, o = t) : typeof n == "boolean" && (v = n, n = t)), n === t && o === t ? (n = 0, o = 1) : (n = Tn(n), o === t ? (o = n, n = 0) : o = Tn(o)), n > o) {
          var P = n;
          n = o, o = P;
        }
        if (v || n % 1 || o % 1) {
          var T = Rd();
          return Rr(n + T * (o - n + $t("1e-" + ((T + "").length - 1))), o);
        }
        return wf(n, o);
      }
      var r5 = sa(function(n, o, v) {
        return o = o.toLowerCase(), n + (v ? up(o) : o);
      });
      function up(n) {
        return Gf(qt(n).toLowerCase());
      }
      function fp(n) {
        return n = qt(n), n && n.replace(Zt, V2).replace(Wu, "");
      }
      function i5(n, o, v) {
        n = qt(n), o = ci(o);
        var P = n.length;
        v = v === t ? P : ws(mt(v), 0, P);
        var T = v;
        return v -= o.length, v >= 0 && n.slice(v, T) == o;
      }
      function n5(n) {
        return n = qt(n), n && Xe.test(n) ? n.replace(Mt, G2) : n;
      }
      function s5(n) {
        return n = qt(n), n && je.test(n) ? n.replace(rt, "\\$&") : n;
      }
      var a5 = sa(function(n, o, v) {
        return n + (v ? "-" : "") + o.toLowerCase();
      }), o5 = sa(function(n, o, v) {
        return n + (v ? " " : "") + o.toLowerCase();
      }), c5 = d0("toLowerCase");
      function u5(n, o, v) {
        n = qt(n), o = mt(o);
        var P = o ? Xs(n) : 0;
        if (!o || P >= o) return n;
        var T = (o - P) / 2;
        return Oc(mc(T), v) + n + Oc(bc(T), v);
      }
      function f5(n, o, v) {
        n = qt(n), o = mt(o);
        var P = o ? Xs(n) : 0;
        return o && P < o ? n + Oc(o - P, v) : n;
      }
      function h5(n, o, v) {
        n = qt(n), o = mt(o);
        var P = o ? Xs(n) : 0;
        return o && P < o ? Oc(o - P, v) + n : n;
      }
      function l5(n, o, v) {
        return v || o == null ? o = 0 : o && (o = +o), ym(qt(n).replace(it, ""), o || 0);
      }
      function d5(n, o, v) {
        return (v ? Br(n, o, v) : o === t) ? o = 1 : o = mt(o), _f(qt(n), o);
      }
      function p5() {
        var n = arguments, o = qt(n[0]);
        return n.length < 3 ? o : o.replace(n[1], n[2]);
      }
      var g5 = sa(function(n, o, v) {
        return n + (v ? "_" : "") + o.toLowerCase();
      });
      function v5(n, o, v) {
        return v && typeof v != "number" && Br(n, o, v) && (o = v = t), v = v === t ? y : v >>> 0, v ? (n = qt(n), n && (typeof o == "string" || o != null && !Hf(o)) && (o = ci(o), !o && Qs(n)) ? ts(ji(n), 0, v) : n.split(o, v)) : [];
      }
      var b5 = sa(function(n, o, v) {
        return n + (v ? " " : "") + Gf(o);
      });
      function m5(n, o, v) {
        return n = qt(n), v = v == null ? 0 : ws(mt(v), 0, n.length), o = ci(o), n.slice(v, v + o.length) == o;
      }
      function y5(n, o, v) {
        var P = $.templateSettings;
        v && Br(n, o, v) && (o = t), n = qt(n), o = kc({}, o, P, w0);
        var T = kc({}, o.imports, P.imports, w0), H = vr(T), X = nf(T, H), re, se, le = 0, de = o.interpolate || Kr, ge = "__p += '", Pe = af((o.escape || Kr).source + "|" + de.source + "|" + (de === et ? at : Kr).source + "|" + (o.evaluate || Kr).source + "|$", "g"), We = "//# sourceURL=" + (Bt.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ju + "]") + `
`;
        n.replace(Pe, function(ct, xt, Ot, fi, Lr, hi) {
          return Ot || (Ot = fi), ge += n.slice(le, hi).replace(Ti, W2), xt && (re = !0, ge += `' +
__e(` + xt + `) +
'`), Lr && (se = !0, ge += `';
` + Lr + `;
__p += '`), Ot && (ge += `' +
((__t = (` + Ot + `)) == null ? '' : __t) +
'`), le = hi + ct.length, ct;
        }), ge += `';
`;
        var ot = Bt.call(o, "variable") && o.variable;
        if (!ot) ge = `with (obj) {
` + ge + `
}
`;
        else if (Rt.test(ot)) throw new dt(h);
        ge = (se ? ge.replace(wt, "") : ge).replace(lt, "$1").replace(Ye, "$1;"), ge = "function(" + (ot || "obj") + `) {
` + (ot ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (re ? ", __e = _.escape" : "") + (se ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ge + `return __p
}`;
        var yt = lp(function() {
          return Tt(H, We + "return " + ge).apply(t, X);
        });
        if (yt.source = ge, kf(yt)) throw yt;
        return yt;
      }
      function w5(n) {
        return qt(n).toLowerCase();
      }
      function _5(n) {
        return qt(n).toUpperCase();
      }
      function A5(n, o, v) {
        if (n = qt(n), n && (v || o === t)) return _d(n);
        if (!n || !(o = ci(o))) return n;
        var P = ji(n), T = ji(o), H = Ad(P, T), X = Ed(P, T) + 1;
        return ts(P, H, X).join("");
      }
      function E5(n, o, v) {
        if (n = qt(n), n && (v || o === t)) return n.slice(0, Sd(n) + 1);
        if (!n || !(o = ci(o))) return n;
        var P = ji(n), T = Ed(P, ji(o)) + 1;
        return ts(P, 0, T).join("");
      }
      function x5(n, o, v) {
        if (n = qt(n), n && (v || o === t)) return n.replace(it, "");
        if (!n || !(o = ci(o))) return n;
        var P = ji(n), T = Ad(P, ji(o));
        return ts(P, T).join("");
      }
      function S5(n, o) {
        var v = ae, P = j;
        if (Xt(o)) {
          var T = "separator" in o ? o.separator : T;
          v = "length" in o ? mt(o.length) : v, P = "omission" in o ? ci(o.omission) : P;
        }
        n = qt(n);
        var H = n.length;
        if (Qs(n)) {
          var X = ji(n);
          H = X.length;
        }
        if (v >= H) return n;
        var re = v - Xs(P);
        if (re < 1) return P;
        var se = X ? ts(X, 0, re).join("") : n.slice(0, re);
        if (T === t) return se + P;
        if (X && (re += se.length - re), Hf(T)) {
          if (n.slice(re).search(T)) {
            var le, de = se;
            for (T.global || (T = af(T.source, qt(bt.exec(T)) + "g")), T.lastIndex = 0; le = T.exec(de); ) var ge = le.index;
            se = se.slice(0, ge === t ? re : ge);
          }
        } else if (n.indexOf(ci(T), re) != re) {
          var Pe = se.lastIndexOf(T);
          Pe > -1 && (se = se.slice(0, Pe));
        }
        return se + P;
      }
      function M5(n) {
        return n = qt(n), n && qe.test(n) ? n.replace(Et, tm) : n;
      }
      var I5 = sa(function(n, o, v) {
        return n + (v ? " " : "") + o.toUpperCase();
      }), Gf = d0("toUpperCase");
      function hp(n, o, v) {
        return n = qt(n), o = v ? t : o, o === t ? Y2(n) ? nm(n) : j2(n) : n.match(o) || [];
      }
      var lp = _t(function(n, o) {
        try {
          return gr(n, t, o);
        } catch (v) {
          return kf(v) ? v : new dt(v);
        }
      }), D5 = On(function(n, o) {
        return yi(o, function(v) {
          v = on(v), Pn(n, v, jf(n[v], n));
        }), n;
      });
      function P5(n) {
        var o = n == null ? 0 : n.length, v = nt();
        return n = o ? Qt(n, function(P) {
          if (typeof P[1] != "function") throw new wi(f);
          return [v(P[0]), P[1]];
        }) : [], _t(function(P) {
          for (var T = -1; ++T < o; ) {
            var H = n[T];
            if (gr(H[0], this, P)) return gr(H[1], this, P);
          }
        });
      }
      function C5(n) {
        return t3(Ai(n, A));
      }
      function Wf(n) {
        return function() {
          return n;
        };
      }
      function O5(n, o) {
        return n == null || n !== n ? o : n;
      }
      var R5 = g0(), N5 = g0(!0);
      function Xr(n) {
        return n;
      }
      function Jf(n) {
        return Kd(typeof n == "function" ? n : Ai(n, A));
      }
      function T5(n) {
        return Gd(Ai(n, A));
      }
      function q5(n, o) {
        return Wd(n, Ai(o, A));
      }
      var F5 = _t(function(n, o) {
        return function(v) {
          return $a(v, n, o);
        };
      }), B5 = _t(function(n, o) {
        return function(v) {
          return $a(n, v, o);
        };
      });
      function Yf(n, o, v) {
        var P = vr(o), T = xc(o, P);
        v == null && !(Xt(o) && (T.length || !P.length)) && (v = o, o = n, n = this, T = xc(o, vr(o)));
        var H = !(Xt(v) && "chain" in v) || !!v.chain, X = Nn(n);
        return yi(T, function(re) {
          var se = o[re];
          n[re] = se, X && (n.prototype[re] = function() {
            var le = this.__chain__;
            if (H || le) {
              var de = n(this.__wrapped__), ge = de.__actions__ = Jr(this.__actions__);
              return ge.push({ func: se, args: arguments, thisArg: n }), de.__chain__ = le, de;
            }
            return se.apply(n, Jn([this.value()], arguments));
          });
        }), n;
      }
      function L5() {
        return Ct._ === this && (Ct._ = fm), this;
      }
      function Qf() {
      }
      function U5(n) {
        return n = mt(n), _t(function(o) {
          return Jd(o, n);
        });
      }
      var z5 = Df(Qt), j5 = Df(vd), $5 = Df(Xu);
      function dp(n) {
        return qf(n) ? Zu(on(n)) : m3(n);
      }
      function k5(n) {
        return function(o) {
          return n == null ? t : _s(n, o);
        };
      }
      var H5 = b0(), K5 = b0(!0);
      function Xf() {
        return [];
      }
      function Zf() {
        return !1;
      }
      function V5() {
        return {};
      }
      function G5() {
        return "";
      }
      function W5() {
        return !0;
      }
      function J5(n, o) {
        if (n = mt(n), n < 1 || n > D) return [];
        var v = y, P = Rr(n, y);
        o = nt(o), n -= y;
        for (var T = rf(P, o); ++v < n; ) o(v);
        return T;
      }
      function Y5(n) {
        return gt(n) ? Qt(n, on) : ui(n) ? [n] : Jr(N0(qt(n)));
      }
      function Q5(n) {
        var o = ++cm;
        return qt(n) + o;
      }
      var X5 = Cc(function(n, o) {
        return n + o;
      }, 0), Z5 = Pf("ceil"), e8 = Cc(function(n, o) {
        return n / o;
      }, 1), t8 = Pf("floor");
      function r8(n) {
        return n && n.length ? Ec(n, Xr, pf) : t;
      }
      function i8(n, o) {
        return n && n.length ? Ec(n, nt(o, 2), pf) : t;
      }
      function n8(n) {
        return yd(n, Xr);
      }
      function s8(n, o) {
        return yd(n, nt(o, 2));
      }
      function a8(n) {
        return n && n.length ? Ec(n, Xr, mf) : t;
      }
      function o8(n, o) {
        return n && n.length ? Ec(n, nt(o, 2), mf) : t;
      }
      var c8 = Cc(function(n, o) {
        return n * o;
      }, 1), u8 = Pf("round"), f8 = Cc(function(n, o) {
        return n - o;
      }, 0);
      function h8(n) {
        return n && n.length ? tf(n, Xr) : 0;
      }
      function l8(n, o) {
        return n && n.length ? tf(n, nt(o, 2)) : 0;
      }
      return $.after = T6, $.ary = H0, $.assign = _w, $.assignIn = np, $.assignInWith = kc, $.assignWith = Aw, $.at = Ew, $.before = K0, $.bind = jf, $.bindAll = D5, $.bindKey = V0, $.castArray = V6, $.chain = j0, $.chunk = ty, $.compact = ry, $.concat = iy, $.cond = P5, $.conforms = C5, $.constant = Wf, $.countBy = h6, $.create = xw, $.curry = G0, $.curryRight = W0, $.debounce = J0, $.defaults = Sw, $.defaultsDeep = Mw, $.defer = q6, $.delay = F6, $.difference = ny, $.differenceBy = sy, $.differenceWith = ay, $.drop = oy, $.dropRight = cy, $.dropRightWhile = uy, $.dropWhile = fy, $.fill = hy, $.filter = d6, $.flatMap = v6, $.flatMapDeep = b6, $.flatMapDepth = m6, $.flatten = B0, $.flattenDeep = ly, $.flattenDepth = dy, $.flip = B6, $.flow = R5, $.flowRight = N5, $.fromPairs = py, $.functions = Nw, $.functionsIn = Tw, $.groupBy = y6, $.initial = vy, $.intersection = by, $.intersectionBy = my, $.intersectionWith = yy, $.invert = Fw, $.invertBy = Bw, $.invokeMap = _6, $.iteratee = Jf, $.keyBy = A6, $.keys = vr, $.keysIn = Qr, $.map = Bc, $.mapKeys = Uw, $.mapValues = zw, $.matches = T5, $.matchesProperty = q5, $.memoize = Uc, $.merge = jw, $.mergeWith = sp, $.method = F5, $.methodOf = B5, $.mixin = Yf, $.negate = zc, $.nthArg = U5, $.omit = $w, $.omitBy = kw, $.once = L6, $.orderBy = E6, $.over = z5, $.overArgs = U6, $.overEvery = j5, $.overSome = $5, $.partial = $f, $.partialRight = Y0, $.partition = x6, $.pick = Hw, $.pickBy = ap, $.property = dp, $.propertyOf = k5, $.pull = Ey, $.pullAll = U0, $.pullAllBy = xy, $.pullAllWith = Sy, $.pullAt = My, $.range = H5, $.rangeRight = K5, $.rearg = z6, $.reject = I6, $.remove = Iy, $.rest = j6, $.reverse = Uf, $.sampleSize = P6, $.set = Vw, $.setWith = Gw, $.shuffle = C6, $.slice = Dy, $.sortBy = N6, $.sortedUniq = qy, $.sortedUniqBy = Fy, $.split = v5, $.spread = $6, $.tail = By, $.take = Ly, $.takeRight = Uy, $.takeRightWhile = zy, $.takeWhile = jy, $.tap = r6, $.throttle = k6, $.thru = Fc, $.toArray = tp, $.toPairs = op, $.toPairsIn = cp, $.toPath = Y5, $.toPlainObject = ip, $.transform = Ww, $.unary = H6, $.union = $y, $.unionBy = ky, $.unionWith = Hy, $.uniq = Ky, $.uniqBy = Vy, $.uniqWith = Gy, $.unset = Jw, $.unzip = zf, $.unzipWith = z0, $.update = Yw, $.updateWith = Qw, $.values = ca, $.valuesIn = Xw, $.without = Wy, $.words = hp, $.wrap = K6, $.xor = Jy, $.xorBy = Yy, $.xorWith = Qy, $.zip = Xy, $.zipObject = Zy, $.zipObjectDeep = e6, $.zipWith = t6, $.entries = op, $.entriesIn = cp, $.extend = np, $.extendWith = kc, Yf($, $), $.add = X5, $.attempt = lp, $.camelCase = r5, $.capitalize = up, $.ceil = Z5, $.clamp = Zw, $.clone = G6, $.cloneDeep = J6, $.cloneDeepWith = Y6, $.cloneWith = W6, $.conformsTo = Q6, $.deburr = fp, $.defaultTo = O5, $.divide = e8, $.endsWith = i5, $.eq = ki, $.escape = n5, $.escapeRegExp = s5, $.every = l6, $.find = p6, $.findIndex = q0, $.findKey = Iw, $.findLast = g6, $.findLastIndex = F0, $.findLastKey = Dw, $.floor = t8, $.forEach = $0, $.forEachRight = k0, $.forIn = Pw, $.forInRight = Cw, $.forOwn = Ow, $.forOwnRight = Rw, $.get = Kf, $.gt = X6, $.gte = Z6, $.has = qw, $.hasIn = Vf, $.head = L0, $.identity = Xr, $.includes = w6, $.indexOf = gy, $.inRange = e5, $.invoke = Lw, $.isArguments = xs, $.isArray = gt, $.isArrayBuffer = ew, $.isArrayLike = Yr, $.isArrayLikeObject = nr, $.isBoolean = tw, $.isBuffer = rs, $.isDate = rw, $.isElement = iw, $.isEmpty = nw, $.isEqual = sw, $.isEqualWith = aw, $.isError = kf, $.isFinite = ow, $.isFunction = Nn, $.isInteger = Q0, $.isLength = jc, $.isMap = X0, $.isMatch = cw, $.isMatchWith = uw, $.isNaN = fw, $.isNative = hw, $.isNil = dw, $.isNull = lw, $.isNumber = Z0, $.isObject = Xt, $.isObjectLike = er, $.isPlainObject = Wa, $.isRegExp = Hf, $.isSafeInteger = pw, $.isSet = ep, $.isString = $c, $.isSymbol = ui, $.isTypedArray = oa, $.isUndefined = gw, $.isWeakMap = vw, $.isWeakSet = bw, $.join = wy, $.kebabCase = a5, $.last = xi, $.lastIndexOf = _y, $.lowerCase = o5, $.lowerFirst = c5, $.lt = mw, $.lte = yw, $.max = r8, $.maxBy = i8, $.mean = n8, $.meanBy = s8, $.min = a8, $.minBy = o8, $.stubArray = Xf, $.stubFalse = Zf, $.stubObject = V5, $.stubString = G5, $.stubTrue = W5, $.multiply = c8, $.nth = Ay, $.noConflict = L5, $.noop = Qf, $.now = Lc, $.pad = u5, $.padEnd = f5, $.padStart = h5, $.parseInt = l5, $.random = t5, $.reduce = S6, $.reduceRight = M6, $.repeat = d5, $.replace = p5, $.result = Kw, $.round = u8, $.runInContext = ne, $.sample = D6, $.size = O6, $.snakeCase = g5, $.some = R6, $.sortedIndex = Py, $.sortedIndexBy = Cy, $.sortedIndexOf = Oy, $.sortedLastIndex = Ry, $.sortedLastIndexBy = Ny, $.sortedLastIndexOf = Ty, $.startCase = b5, $.startsWith = m5, $.subtract = f8, $.sum = h8, $.sumBy = l8, $.template = y5, $.times = J5, $.toFinite = Tn, $.toInteger = mt, $.toLength = rp, $.toLower = w5, $.toNumber = Si, $.toSafeInteger = ww, $.toString = qt, $.toUpper = _5, $.trim = A5, $.trimEnd = E5, $.trimStart = x5, $.truncate = S5, $.unescape = M5, $.uniqueId = Q5, $.upperCase = I5, $.upperFirst = Gf, $.each = $0, $.eachRight = k0, $.first = L0, Yf($, function() {
        var n = {};
        return sn($, function(o, v) {
          Bt.call($.prototype, v) || (n[v] = o);
        }), n;
      }(), { chain: !1 }), $.VERSION = i, yi(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        $[n].placeholder = $;
      }), yi(["drop", "take"], function(n, o) {
        It.prototype[n] = function(v) {
          v = v === t ? 1 : lr(mt(v), 0);
          var P = this.__filtered__ && !o ? new It(this) : this.clone();
          return P.__filtered__ ? P.__takeCount__ = Rr(v, P.__takeCount__) : P.__views__.push({ size: Rr(v, y), type: n + (P.__dir__ < 0 ? "Right" : "") }), P;
        }, It.prototype[n + "Right"] = function(v) {
          return this.reverse()[n](v).reverse();
        };
      }), yi(["filter", "map", "takeWhile"], function(n, o) {
        var v = o + 1, P = v == d || v == b;
        It.prototype[n] = function(T) {
          var H = this.clone();
          return H.__iteratees__.push({ iteratee: nt(T, 3), type: v }), H.__filtered__ = H.__filtered__ || P, H;
        };
      }), yi(["head", "last"], function(n, o) {
        var v = "take" + (o ? "Right" : "");
        It.prototype[n] = function() {
          return this[v](1).value()[0];
        };
      }), yi(["initial", "tail"], function(n, o) {
        var v = "drop" + (o ? "" : "Right");
        It.prototype[n] = function() {
          return this.__filtered__ ? new It(this) : this[v](1);
        };
      }), It.prototype.compact = function() {
        return this.filter(Xr);
      }, It.prototype.find = function(n) {
        return this.filter(n).head();
      }, It.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, It.prototype.invokeMap = _t(function(n, o) {
        return typeof n == "function" ? new It(this) : this.map(function(v) {
          return $a(v, n, o);
        });
      }), It.prototype.reject = function(n) {
        return this.filter(zc(nt(n)));
      }, It.prototype.slice = function(n, o) {
        n = mt(n);
        var v = this;
        return v.__filtered__ && (n > 0 || o < 0) ? new It(v) : (n < 0 ? v = v.takeRight(-n) : n && (v = v.drop(n)), o !== t && (o = mt(o), v = o < 0 ? v.dropRight(-o) : v.take(o - n)), v);
      }, It.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, It.prototype.toArray = function() {
        return this.take(y);
      }, sn(It.prototype, function(n, o) {
        var v = /^(?:filter|find|map|reject)|While$/.test(o), P = /^(?:head|last)$/.test(o), T = $[P ? "take" + (o == "last" ? "Right" : "") : o], H = P || /^find/.test(o);
        T && ($.prototype[o] = function() {
          var X = this.__wrapped__, re = P ? [1] : arguments, se = X instanceof It, le = re[0], de = se || gt(X), ge = function(xt) {
            var Ot = T.apply($, Jn([xt], re));
            return P && Pe ? Ot[0] : Ot;
          };
          de && v && typeof le == "function" && le.length != 1 && (se = de = !1);
          var Pe = this.__chain__, We = !!this.__actions__.length, ot = H && !Pe, yt = se && !We;
          if (!H && de) {
            X = yt ? X : new It(this);
            var ct = n.apply(X, re);
            return ct.__actions__.push({ func: Fc, args: [ge], thisArg: t }), new _i(ct, Pe);
          }
          return ot && yt ? n.apply(this, re) : (ct = this.thru(ge), ot ? P ? ct.value()[0] : ct.value() : ct);
        });
      }), yi(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var o = cc[n], v = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", P = /^(?:pop|shift)$/.test(n);
        $.prototype[n] = function() {
          var T = arguments;
          if (P && !this.__chain__) {
            var H = this.value();
            return o.apply(gt(H) ? H : [], T);
          }
          return this[v](function(X) {
            return o.apply(gt(X) ? X : [], T);
          });
        };
      }), sn(It.prototype, function(n, o) {
        var v = $[o];
        if (v) {
          var P = v.name + "";
          Bt.call(ra, P) || (ra[P] = []), ra[P].push({ name: o, func: v });
        }
      }), ra[Pc(t, K).name] = [{ name: "wrapper", func: t }], It.prototype.clone = Mm, It.prototype.reverse = Im, It.prototype.value = Dm, $.prototype.at = i6, $.prototype.chain = n6, $.prototype.commit = s6, $.prototype.next = a6, $.prototype.plant = c6, $.prototype.reverse = u6, $.prototype.toJSON = $.prototype.valueOf = $.prototype.value = f6, $.prototype.first = $.prototype.head, qa && ($.prototype[qa] = o6), $;
    }, Zs = sm();
    ir ? ((ir.exports = Zs)._ = Zs, kt._ = Zs) : Ct._ = Zs;
  }).call(ho);
})($l, $l.exports);
var gC = Object.defineProperty, vC = Object.defineProperties, bC = Object.getOwnPropertyDescriptors, Iv = Object.getOwnPropertySymbols, mC = Object.prototype.hasOwnProperty, yC = Object.prototype.propertyIsEnumerable, Dv = (r, e, t) => e in r ? gC(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, iu = (r, e) => {
  for (var t in e || (e = {})) mC.call(e, t) && Dv(r, t, e[t]);
  if (Iv) for (var t of Iv(e)) yC.call(e, t) && Dv(r, t, e[t]);
  return r;
}, wC = (r, e) => vC(r, bC(e));
function Xi(r, e, t) {
  var i;
  const s = bo(r);
  return ((i = e.rpcMap) == null ? void 0 : i[s.reference]) || `${N2}?chainId=${s.namespace}:${s.reference}&projectId=${t}`;
}
function Ks(r) {
  return r.includes(":") ? r.split(":")[1] : r;
}
function T2(r) {
  return r.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
}
function _C(r, e) {
  const t = Object.keys(e.namespaces).filter((s) => s.includes(r));
  if (!t.length) return [];
  const i = [];
  return t.forEach((s) => {
    const a = e.namespaces[s].accounts;
    i.push(...a);
  }), i;
}
function ml(r = {}, e = {}) {
  const t = Pv(r), i = Pv(e);
  return $l.exports.merge(t, i);
}
function Pv(r) {
  var e, t, i, s;
  const a = {};
  if (!Io(r)) return a;
  for (const [f, h] of Object.entries(r)) {
    const p = sd(f) ? [f] : h.chains, u = h.methods || [], m = h.events || [], A = h.rpcMap || {}, M = go(f);
    a[M] = wC(iu(iu({}, a[M]), h), { chains: cu(p, (e = a[M]) == null ? void 0 : e.chains), methods: cu(u, (t = a[M]) == null ? void 0 : t.methods), events: cu(m, (i = a[M]) == null ? void 0 : i.events), rpcMap: iu(iu({}, A), (s = a[M]) == null ? void 0 : s.rpcMap) });
  }
  return a;
}
function AC(r) {
  return r.includes(":") ? r.split(":")[2] : r;
}
function Cv(r) {
  const e = {};
  for (const [t, i] of Object.entries(r)) {
    const s = i.methods || [], a = i.events || [], f = i.accounts || [], h = sd(t) ? [t] : i.chains ? i.chains : T2(i.accounts);
    e[t] = { chains: h, methods: s, events: a, accounts: f };
  }
  return e;
}
function yl(r) {
  return typeof r == "number" ? r : r.includes("0x") ? parseInt(r, 16) : (r = r.includes(":") ? r.split(":")[1] : r, isNaN(Number(r)) ? r : Number(r));
}
const q2 = {}, Ft = (r) => q2[r], wl = (r, e) => {
  q2[r] = e;
};
class EC {
  constructor(e) {
    this.name = "polkadot", this.namespace = e.namespace, this.events = Ft("events"), this.client = Ft("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(tn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var i;
      const s = Ks(t);
      e[s] = this.createHttpProvider(s, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || Xi(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new en(new Sn(i, Ft("disableProviderPing")));
  }
}
var xC = Object.defineProperty, SC = Object.defineProperties, MC = Object.getOwnPropertyDescriptors, Ov = Object.getOwnPropertySymbols, IC = Object.prototype.hasOwnProperty, DC = Object.prototype.propertyIsEnumerable, Rv = (r, e, t) => e in r ? xC(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Nv = (r, e) => {
  for (var t in e || (e = {})) IC.call(e, t) && Rv(r, t, e[t]);
  if (Ov) for (var t of Ov(e)) DC.call(e, t) && Rv(r, t, e[t]);
  return r;
}, Tv = (r, e) => SC(r, MC(e));
class PC {
  constructor(e) {
    this.name = "eip155", this.namespace = e.namespace, this.events = Ft("events"), this.client = Ft("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(e) {
    switch (e.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(e);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
      case "wallet_getCapabilities":
        return await this.getCapabilities(e);
      case "wallet_getCallsStatus":
        return await this.getCallStatus(e);
    }
    return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(parseInt(e), t), this.chainId = parseInt(e), this.events.emit(tn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  createHttpProvider(e, t) {
    const i = t || Xi(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new en(new Sn(i, Ft("disableProviderPing")));
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var i;
      const s = parseInt(Ks(t));
      e[s] = this.createHttpProvider(s, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
    }), e;
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const e = this.chainId, t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  async handleSwitchChain(e) {
    var t, i;
    let s = e.request.params ? (t = e.request.params[0]) == null ? void 0 : t.chainId : "0x0";
    s = s.startsWith("0x") ? s : `0x${s}`;
    const a = parseInt(s, 16);
    if (this.isChainApproved(a)) this.setDefaultChain(`${a}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({ topic: e.topic, request: { method: e.request.method, params: [{ chainId: s }] }, chainId: (i = this.namespace.chains) == null ? void 0 : i[0] }), this.setDefaultChain(`${a}`);
    else throw new Error(`Failed to switch to chain 'eip155:${a}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(e) {
    return this.namespace.chains.includes(`${this.name}:${e}`);
  }
  async getCapabilities(e) {
    var t, i, s;
    const a = (i = (t = e.request) == null ? void 0 : t.params) == null ? void 0 : i[0];
    if (!a) throw new Error("Missing address parameter in `wallet_getCapabilities` request");
    const f = this.client.session.get(e.topic), h = ((s = f == null ? void 0 : f.sessionProperties) == null ? void 0 : s.capabilities) || {};
    if (h != null && h[a]) return h == null ? void 0 : h[a];
    const p = await this.client.request(e);
    try {
      await this.client.session.update(e.topic, { sessionProperties: Tv(Nv({}, f.sessionProperties || {}), { capabilities: Tv(Nv({}, h || {}), { [a]: p }) }) });
    } catch (u) {
      console.warn("Failed to update session with capabilities", u);
    }
    return p;
  }
  async getCallStatus(e) {
    var t, i;
    const s = this.client.session.get(e.topic), a = (t = s.sessionProperties) == null ? void 0 : t.bundler_name;
    if (a) {
      const h = this.getBundlerUrl(e.chainId, a);
      try {
        return await this.getUserOperationReceipt(h, e);
      } catch (p) {
        console.warn("Failed to fetch call status from bundler", p, h);
      }
    }
    const f = (i = s.sessionProperties) == null ? void 0 : i.bundler_url;
    if (f) try {
      return await this.getUserOperationReceipt(f, e);
    } catch (h) {
      console.warn("Failed to fetch call status from custom bundler", h, f);
    }
    if (this.namespace.methods.includes(e.request.method)) return await this.client.request(e);
    throw new Error("Fetching call status not approved by the wallet.");
  }
  async getUserOperationReceipt(e, t) {
    var i;
    const s = new URL(e), a = await fetch(s, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(fs("eth_getUserOperationReceipt", [(i = t.request.params) == null ? void 0 : i[0]])) });
    if (!a.ok) throw new Error(`Failed to fetch user operation receipt - ${a.status}`);
    return await a.json();
  }
  getBundlerUrl(e, t) {
    return `${pC}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${t}`;
  }
}
class CC {
  constructor(e) {
    this.name = "solana", this.namespace = e.namespace, this.events = Ft("events"), this.client = Ft("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(tn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var i;
      const s = Ks(t);
      e[s] = this.createHttpProvider(s, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || Xi(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new en(new Sn(i, Ft("disableProviderPing")));
  }
}
class OC {
  constructor(e) {
    this.name = "cosmos", this.namespace = e.namespace, this.events = Ft("events"), this.client = Ft("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(tn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var i;
      const s = Ks(t);
      e[s] = this.createHttpProvider(s, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || Xi(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new en(new Sn(i, Ft("disableProviderPing")));
  }
}
class RC {
  constructor(e) {
    this.name = "algorand", this.namespace = e.namespace, this.events = Ft("events"), this.client = Ft("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    if (!this.httpProviders[e]) {
      const i = t || Xi(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, i);
    }
    this.chainId = e, this.events.emit(tn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var i;
      e[t] = this.createHttpProvider(t, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || Xi(e, this.namespace, this.client.core.projectId);
    return typeof i > "u" ? void 0 : new en(new Sn(i, Ft("disableProviderPing")));
  }
}
class NC {
  constructor(e) {
    this.name = "cip34", this.namespace = e.namespace, this.events = Ft("events"), this.client = Ft("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(tn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      const i = this.getCardanoRPCUrl(t), s = Ks(t);
      e[s] = this.createHttpProvider(s, i);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  getCardanoRPCUrl(e) {
    const t = this.namespace.rpcMap;
    if (t) return t[e];
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || this.getCardanoRPCUrl(e);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new en(new Sn(i, Ft("disableProviderPing")));
  }
}
class TC {
  constructor(e) {
    this.name = "elrond", this.namespace = e.namespace, this.events = Ft("events"), this.client = Ft("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(tn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var i;
      const s = Ks(t);
      e[s] = this.createHttpProvider(s, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || Xi(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new en(new Sn(i, Ft("disableProviderPing")));
  }
}
class qC {
  constructor(e) {
    this.name = "multiversx", this.namespace = e.namespace, this.events = Ft("events"), this.client = Ft("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(tn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var i;
      const s = Ks(t);
      e[s] = this.createHttpProvider(s, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || Xi(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new en(new Sn(i, Ft("disableProviderPing")));
  }
}
class FC {
  constructor(e) {
    this.name = "near", this.namespace = e.namespace, this.events = Ft("events"), this.client = Ft("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    if (this.chainId = e, !this.httpProviders[e]) {
      const i = t || Xi(`${this.name}:${e}`, this.namespace);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, i);
    }
    this.events.emit(tn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var i;
      e[t] = this.createHttpProvider(t, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || Xi(e, this.namespace);
    return typeof i > "u" ? void 0 : new en(new Sn(i, Ft("disableProviderPing")));
  }
}
class BC {
  constructor(e) {
    this.name = pa, this.namespace = e.namespace, this.events = Ft("events"), this.client = Ft("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace.chains = [...new Set((this.namespace.chains || []).concat(e.chains || []))], this.namespace.accounts = [...new Set((this.namespace.accounts || []).concat(e.accounts || []))], this.namespace.methods = [...new Set((this.namespace.methods || []).concat(e.methods || []))], this.namespace.events = [...new Set((this.namespace.events || []).concat(e.events || []))], this.httpProviders = this.createHttpProviders();
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider(e.chainId).request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(tn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    var e, t;
    const i = {};
    return (t = (e = this.namespace) == null ? void 0 : e.accounts) == null || t.forEach((s) => {
      const a = bo(s);
      i[`${a.namespace}:${a.reference}`] = this.createHttpProvider(s);
    }), i;
  }
  getHttpProvider(e) {
    const t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || Xi(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new en(new Sn(i, Ft("disableProviderPing")));
  }
}
var LC = Object.defineProperty, UC = Object.defineProperties, zC = Object.getOwnPropertyDescriptors, qv = Object.getOwnPropertySymbols, jC = Object.prototype.hasOwnProperty, $C = Object.prototype.propertyIsEnumerable, Fv = (r, e, t) => e in r ? LC(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, nu = (r, e) => {
  for (var t in e || (e = {})) jC.call(e, t) && Fv(r, t, e[t]);
  if (qv) for (var t of qv(e)) $C.call(e, t) && Fv(r, t, e[t]);
  return r;
}, _l = (r, e) => UC(r, zC(e));
class pd {
  constructor(e) {
    this.events = new Vl(), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = e, this.logger = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Uo(Lu({ level: (e == null ? void 0 : e.logger) || Sv })), this.disableProviderPing = (e == null ? void 0 : e.disableProviderPing) || !1;
  }
  static async init(e) {
    const t = new pd(e);
    return await t.initialize(), t;
  }
  async request(e, t, i) {
    const [s, a] = this.validateChain(t);
    if (!this.session) throw new Error("Please call connect() before request()");
    return await this.getProvider(s).request({ request: nu({}, e), chainId: `${s}:${a}`, topic: this.session.topic, expiry: i });
  }
  sendAsync(e, t, i, s) {
    const a = (/* @__PURE__ */ new Date()).getTime();
    this.request(e, i, s).then((f) => t(null, Uu(a, f))).catch((f) => t(f, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var e;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (e = this.session) == null ? void 0 : e.topic, reason: Lt("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(e) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic);
  }
  async authenticate(e, t) {
    if (!this.client) throw new Error("Sign Client not initialized");
    this.setNamespaces(e), await this.cleanupPendingPairings();
    const { uri: i, response: s } = await this.client.authenticate(e, t);
    i && (this.uri = i, this.events.emit("display_uri", i));
    const a = await s();
    if (this.session = a.session, this.session) {
      const f = Cv(this.session.namespaces);
      this.namespaces = ml(this.namespaces, f), this.persist("namespaces", this.namespaces), this.onConnect();
    }
    return a;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(e) {
    this.shouldAbortPairingAttempt = !1;
    let t = 0;
    do {
      if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
      if (t >= this.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
      const { uri: i, approval: s } = await this.client.connect({ pairingTopic: e, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties });
      i && (this.uri = i, this.events.emit("display_uri", i)), await s().then((a) => {
        this.session = a;
        const f = Cv(a.namespaces);
        this.namespaces = ml(this.namespaces, f), this.persist("namespaces", this.namespaces);
      }).catch((a) => {
        if (a.message !== R2) throw a;
        t++;
      });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(e, t) {
    try {
      if (!this.session) return;
      const [i, s] = this.validateChain(e), a = this.getProvider(i);
      a.name === pa ? a.setDefaultChain(`${i}:${s}`, t) : a.setDefaultChain(s, t);
    } catch (i) {
      if (!/Please call connect/.test(i.message)) throw i;
    }
  }
  async cleanupPendingPairings(e = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const t = this.client.pairing.getAll();
    if (_n(t)) {
      for (const i of t) e.deletePairings ? this.client.core.expirer.set(i.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(i.topic);
      this.logger.info(`Inactive pairings cleared: ${t.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = !0;
  }
  async checkStorage() {
    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
      const e = this.client.session.keys.length - 1;
      this.session = this.client.session.get(this.client.session.keys[e]), this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    this.client = this.providerOpts.client || await dd.init({ core: this.providerOpts.core, logger: this.providerOpts.logger || Sv, relayUrl: this.providerOpts.relayUrl || hC, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name, customStoragePrefix: this.providerOpts.customStoragePrefix, telemetryEnabled: this.providerOpts.telemetryEnabled }), this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
    const e = [...new Set(Object.keys(this.session.namespaces).map((t) => go(t)))];
    wl("client", this.client), wl("events", this.events), wl("disableProviderPing", this.disableProviderPing), e.forEach((t) => {
      if (!this.session) return;
      const i = _C(t, this.session), s = T2(i), a = ml(this.namespaces, this.optionalNamespaces), f = _l(nu({}, a[t]), { accounts: i, chains: s });
      switch (t) {
        case "eip155":
          this.rpcProviders[t] = new PC({ namespace: f });
          break;
        case "algorand":
          this.rpcProviders[t] = new RC({ namespace: f });
          break;
        case "solana":
          this.rpcProviders[t] = new CC({ namespace: f });
          break;
        case "cosmos":
          this.rpcProviders[t] = new OC({ namespace: f });
          break;
        case "polkadot":
          this.rpcProviders[t] = new EC({ namespace: f });
          break;
        case "cip34":
          this.rpcProviders[t] = new NC({ namespace: f });
          break;
        case "elrond":
          this.rpcProviders[t] = new TC({ namespace: f });
          break;
        case "multiversx":
          this.rpcProviders[t] = new qC({ namespace: f });
          break;
        case "near":
          this.rpcProviders[t] = new FC({ namespace: f });
          break;
        default:
          this.rpcProviders[pa] ? this.rpcProviders[pa].updateNamespace(f) : this.rpcProviders[pa] = new BC({ namespace: f });
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (e) => {
      this.events.emit("session_ping", e);
    }), this.client.on("session_event", (e) => {
      const { params: t } = e, { event: i } = t;
      if (i.name === "accountsChanged") {
        const s = i.data;
        s && _n(s) && this.events.emit("accountsChanged", s.map(AC));
      } else if (i.name === "chainChanged") {
        const s = t.chainId, a = t.event.data, f = go(s), h = yl(s) !== yl(a) ? `${f}:${yl(a)}` : s;
        this.onChainChanged(h);
      } else this.events.emit(i.name, i.data);
      this.events.emit("session_event", e);
    }), this.client.on("session_update", ({ topic: e, params: t }) => {
      var i;
      const { namespaces: s } = t, a = (i = this.client) == null ? void 0 : i.session.get(e);
      this.session = _l(nu({}, a), { namespaces: s }), this.onSessionUpdate(), this.events.emit("session_update", { topic: e, params: t });
    }), this.client.on("session_delete", async (e) => {
      await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", _l(nu({}, Lt("USER_DISCONNECTED")), { data: e.topic }));
    }), this.on(tn.DEFAULT_CHAIN_CHANGED, (e) => {
      this.onChainChanged(e, !0);
    });
  }
  getProvider(e) {
    return this.rpcProviders[e] || this.rpcProviders[pa];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((e) => {
      var t;
      this.getProvider(e).updateNamespace((t = this.session) == null ? void 0 : t.namespaces[e]);
    });
  }
  setNamespaces(e) {
    const { namespaces: t, optionalNamespaces: i, sessionProperties: s } = e;
    t && Object.keys(t).length && (this.namespaces = t), i && Object.keys(i).length && (this.optionalNamespaces = i), this.sessionProperties = s, this.persist("namespaces", t), this.persist("optionalNamespaces", i);
  }
  validateChain(e) {
    const [t, i] = (e == null ? void 0 : e.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, i];
    if (t && !Object.keys(this.namespaces || {}).map((f) => go(f)).includes(t)) throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
    if (t && i) return [t, i];
    const s = go(Object.keys(this.namespaces)[0]), a = this.rpcProviders[s].getDefaultChain();
    return [s, a];
  }
  async requestAccounts() {
    const [e] = this.validateChain();
    return await this.getProvider(e).requestAccounts();
  }
  onChainChanged(e, t = !1) {
    if (!this.namespaces) return;
    const [i, s] = this.validateChain(e);
    s && (t || this.getProvider(i).setDefaultChain(s), this.namespaces[i] ? this.namespaces[i].defaultChain = s : this.namespaces[`${i}:${s}`] ? this.namespaces[`${i}:${s}`].defaultChain = s : this.namespaces[`${i}:${s}`] = { defaultChain: s }, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", s));
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({ deletePairings: !0 });
  }
  persist(e, t) {
    this.client.core.storage.setItem(`${Mv}/${e}`, t);
  }
  async getFromStore(e) {
    return await this.client.core.storage.getItem(`${Mv}/${e}`);
  }
}
const kC = pd, HC = "wc", KC = "ethereum_provider", VC = `${HC}@2:${KC}:`, GC = "https://rpc.walletconnect.org/v1/", kl = ["eth_sendTransaction", "personal_sign"], WC = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_sendCalls", "wallet_getCapabilities", "wallet_getCallsStatus", "wallet_showCallsStatus"], Hl = ["chainChanged", "accountsChanged"], JC = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var YC = Object.defineProperty, QC = Object.defineProperties, XC = Object.getOwnPropertyDescriptors, Bv = Object.getOwnPropertySymbols, ZC = Object.prototype.hasOwnProperty, eO = Object.prototype.propertyIsEnumerable, Lv = (r, e, t) => e in r ? YC(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, ga = (r, e) => {
  for (var t in e || (e = {})) ZC.call(e, t) && Lv(r, t, e[t]);
  if (Bv) for (var t of Bv(e)) eO.call(e, t) && Lv(r, t, e[t]);
  return r;
}, Al = (r, e) => QC(r, XC(e));
function Pu(r) {
  return Number(r[0].split(":")[1]);
}
function su(r) {
  return `0x${r.toString(16)}`;
}
function tO(r) {
  const { chains: e, optionalChains: t, methods: i, optionalMethods: s, events: a, optionalEvents: f, rpcMap: h } = r;
  if (!_n(e)) throw new Error("Invalid chains");
  const p = { chains: e, methods: i || kl, events: a || Hl, rpcMap: ga({}, e.length ? { [Pu(e)]: h[Pu(e)] } : {}) }, u = a == null ? void 0 : a.filter((I) => !Hl.includes(I)), m = i == null ? void 0 : i.filter((I) => !kl.includes(I));
  if (!t && !f && !s && !(u != null && u.length) && !(m != null && m.length)) return { required: e.length ? p : void 0 };
  const A = (u == null ? void 0 : u.length) && (m == null ? void 0 : m.length) || !t, M = { chains: [...new Set(A ? p.chains.concat(t || []) : t)], methods: [...new Set(p.methods.concat(s != null && s.length ? s : WC))], events: [...new Set(p.events.concat(f != null && f.length ? f : JC))], rpcMap: h };
  return { required: e.length ? p : void 0, optional: t.length ? M : void 0 };
}
class gd {
  constructor() {
    this.events = new gi.EventEmitter(), this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = VC, this.on = (e, t) => (this.events.on(e, t), this), this.once = (e, t) => (this.events.once(e, t), this), this.removeListener = (e, t) => (this.events.removeListener(e, t), this), this.off = (e, t) => (this.events.off(e, t), this), this.parseAccount = (e) => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {};
  }
  static async init(e) {
    const t = new gd();
    return await t.initialize(e), t;
  }
  async request(e, t) {
    return await this.signer.request(e, this.formatChainId(this.chainId), t);
  }
  sendAsync(e, t, i) {
    this.signer.sendAsync(e, t, this.formatChainId(this.chainId), i);
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(e) {
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(e);
    const { required: t, optional: i } = tO(this.rpc);
    try {
      const s = await new Promise(async (f, h) => {
        var p;
        this.rpc.showQrModal && ((p = this.modal) == null || p.subscribeModal((u) => {
          !u.open && !this.signer.session && (this.signer.abortPairingAttempt(), h(new Error("Connection request reset. Please try again.")));
        })), await this.signer.connect(Al(ga({ namespaces: ga({}, t && { [this.namespace]: t }) }, i && { optionalNamespaces: { [this.namespace]: i } }), { pairingTopic: e == null ? void 0 : e.pairingTopic })).then((u) => {
          f(u);
        }).catch((u) => {
          h(new Error(u.message));
        });
      });
      if (!s) return;
      const a = F1(s.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : a), this.setAccounts(a), this.events.emit("connect", { chainId: su(this.chainId) });
    } catch (s) {
      throw this.signer.logger.error(s), s;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async authenticate(e, t) {
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts({ chains: e == null ? void 0 : e.chains });
    try {
      const i = await new Promise(async (a, f) => {
        var h;
        this.rpc.showQrModal && ((h = this.modal) == null || h.subscribeModal((p) => {
          !p.open && !this.signer.session && (this.signer.abortPairingAttempt(), f(new Error("Connection request reset. Please try again.")));
        })), await this.signer.authenticate(Al(ga({}, e), { chains: this.rpc.chains }), t).then((p) => {
          a(p);
        }).catch((p) => {
          f(new Error(p.message));
        });
      }), s = i.session;
      if (s) {
        const a = F1(s.namespaces, [this.namespace]);
        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : a), this.setAccounts(a), this.events.emit("connect", { chainId: su(this.chainId) });
      }
      return i;
    } catch (i) {
      throw this.signer.logger.error(i), i;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (e) => {
      const { params: t } = e, { event: i } = t;
      i.name === "accountsChanged" ? (this.accounts = this.parseAccounts(i.data), this.events.emit("accountsChanged", this.accounts)) : i.name === "chainChanged" ? this.setChainId(this.formatChainId(i.data)) : this.events.emit(i.name, i.data), this.events.emit("session_event", e);
    }), this.signer.on("chainChanged", (e) => {
      const t = parseInt(e);
      this.chainId = t, this.events.emit("chainChanged", su(this.chainId)), this.persist();
    }), this.signer.on("session_update", (e) => {
      this.events.emit("session_update", e);
    }), this.signer.on("session_delete", (e) => {
      this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", Al(ga({}, Lt("USER_DISCONNECTED")), { data: e.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (e) => {
      var t, i;
      this.rpc.showQrModal && ((t = this.modal) == null || t.closeModal(), (i = this.modal) == null || i.openModal({ uri: e })), this.events.emit("display_uri", e);
    });
  }
  switchEthereumChain(e) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: e.toString(16) }] });
  }
  isCompatibleChainId(e) {
    return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(e) {
    return `${this.namespace}:${e}`;
  }
  parseChainId(e) {
    return Number(e.split(":")[1]);
  }
  setChainIds(e) {
    const t = e.filter((i) => this.isCompatibleChainId(i)).map((i) => this.parseChainId(i));
    t.length && (this.chainId = t[0], this.events.emit("chainChanged", su(this.chainId)), this.persist());
  }
  setChainId(e) {
    if (this.isCompatibleChainId(e)) {
      const t = this.parseChainId(e);
      this.chainId = t, this.switchEthereumChain(t);
    }
  }
  parseAccountId(e) {
    const [t, i, s] = e.split(":");
    return { chainId: `${t}:${i}`, address: s };
  }
  setAccounts(e) {
    this.accounts = e.filter((t) => this.parseChainId(this.parseAccountId(t).chainId) === this.chainId).map((t) => this.parseAccountId(t).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(e) {
    var t, i;
    const s = (t = e == null ? void 0 : e.chains) != null ? t : [], a = (i = e == null ? void 0 : e.optionalChains) != null ? i : [], f = s.concat(a);
    if (!f.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
    const h = s.length ? (e == null ? void 0 : e.methods) || kl : [], p = s.length ? (e == null ? void 0 : e.events) || Hl : [], u = (e == null ? void 0 : e.optionalMethods) || [], m = (e == null ? void 0 : e.optionalEvents) || [], A = (e == null ? void 0 : e.rpcMap) || this.buildRpcMap(f, e.projectId), M = (e == null ? void 0 : e.qrModalOptions) || void 0;
    return { chains: s == null ? void 0 : s.map((I) => this.formatChainId(I)), optionalChains: a.map((I) => this.formatChainId(I)), methods: h, events: p, optionalMethods: u, optionalEvents: m, rpcMap: A, showQrModal: !!(e != null && e.showQrModal), qrModalOptions: M, projectId: e.projectId, metadata: e.metadata };
  }
  buildRpcMap(e, t) {
    const i = {};
    return e.forEach((s) => {
      i[s] = this.getRpcUrl(s, t);
    }), i;
  }
  async initialize(e) {
    if (this.rpc = this.getRpcConfig(e), this.chainId = this.rpc.chains.length ? Pu(this.rpc.chains) : Pu(this.rpc.optionalChains), this.signer = await kC.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: e.disableProviderPing, relayUrl: e.relayUrl, storageOptions: e.storageOptions, customStoragePrefix: e.customStoragePrefix, telemetryEnabled: e.telemetryEnabled }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let t;
      try {
        const { WalletConnectModal: i } = await import("./index-sNaE2b7l.js").then((s) => s.i);
        t = i;
      } catch {
        throw new Error("To use QR modal, please install @walletconnect/modal package");
      }
      if (t) try {
        this.modal = new t(ga({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions));
      } catch (i) {
        throw this.signer.logger.error(i), new Error("Could not generate WalletConnectModal Instance");
      }
    }
  }
  loadConnectOpts(e) {
    if (!e) return;
    const { chains: t, optionalChains: i, rpcMap: s } = e;
    t && _n(t) && (this.rpc.chains = t.map((a) => this.formatChainId(a)), t.forEach((a) => {
      this.rpc.rpcMap[a] = (s == null ? void 0 : s[a]) || this.getRpcUrl(a);
    })), i && _n(i) && (this.rpc.optionalChains = [], this.rpc.optionalChains = i == null ? void 0 : i.map((a) => this.formatChainId(a)), i.forEach((a) => {
      this.rpc.rpcMap[a] = (s == null ? void 0 : s[a]) || this.getRpcUrl(a);
    }));
  }
  getRpcUrl(e, t) {
    var i;
    return ((i = this.rpc.rpcMap) == null ? void 0 : i[e]) || `${GC}?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (this.session) try {
      const e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
      this.setChainIds(e ? [this.formatChainId(e)] : t == null ? void 0 : t.accounts), this.setAccounts(t == null ? void 0 : t.accounts);
    } catch (e) {
      this.signer.logger.error("Failed to load persisted session, clearing state..."), this.signer.logger.error(e), await this.disconnect().catch((t) => this.signer.logger.warn(t));
    }
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(e) {
    return typeof e == "string" || e instanceof String ? [this.parseAccount(e)] : e.map((t) => this.parseAccount(t));
  }
}
const IO = gd;
export {
  IO as EthereumProvider,
  JC as OPTIONAL_EVENTS,
  WC as OPTIONAL_METHODS,
  Hl as REQUIRED_EVENTS,
  kl as REQUIRED_METHODS,
  gd as default
};
