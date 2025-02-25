const fe = Symbol(), Z = Object.getPrototypeOf, J = /* @__PURE__ */ new WeakMap(), pe = (e) => e && (J.has(e) ? J.get(e) : Z(e) === Object.prototype || Z(e) === Array.prototype), me = (e) => pe(e) && e[fe] || null, ee = (e, t = !0) => {
  J.set(e, t);
}, q = (e) => typeof e == "object" && e !== null, _ = /* @__PURE__ */ new WeakMap(), V = /* @__PURE__ */ new WeakSet(), he = (e = Object.is, t = (r, g) => new Proxy(r, g), s = (r) => q(r) && !V.has(r) && (Array.isArray(r) || !(Symbol.iterator in r)) && !(r instanceof WeakMap) && !(r instanceof WeakSet) && !(r instanceof Error) && !(r instanceof Number) && !(r instanceof Date) && !(r instanceof String) && !(r instanceof RegExp) && !(r instanceof ArrayBuffer), n = (r) => {
  switch (r.status) {
    case "fulfilled":
      return r.value;
    case "rejected":
      throw r.reason;
    default:
      throw r;
  }
}, l = /* @__PURE__ */ new WeakMap(), c = (r, g, O = n) => {
  const w = l.get(r);
  if ((w == null ? void 0 : w[0]) === g)
    return w[1];
  const b = Array.isArray(r) ? [] : Object.create(Object.getPrototypeOf(r));
  return ee(b, !0), l.set(r, [g, b]), Reflect.ownKeys(r).forEach((D) => {
    if (Object.getOwnPropertyDescriptor(b, D))
      return;
    const C = Reflect.get(r, D), A = {
      value: C,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (V.has(C))
      ee(C, !1);
    else if (C instanceof Promise)
      delete A.value, A.get = () => O(C);
    else if (_.has(C)) {
      const [y, z] = _.get(
        C
      );
      A.value = c(
        y,
        z(),
        O
      );
    }
    Object.defineProperty(b, D, A);
  }), Object.preventExtensions(b);
}, d = /* @__PURE__ */ new WeakMap(), f = [1, 1], L = (r) => {
  if (!q(r))
    throw new Error("object required");
  const g = d.get(r);
  if (g)
    return g;
  let O = f[0];
  const w = /* @__PURE__ */ new Set(), b = (i, a = ++f[0]) => {
    O !== a && (O = a, w.forEach((o) => o(i, a)));
  };
  let D = f[1];
  const C = (i = ++f[1]) => (D !== i && !w.size && (D = i, y.forEach(([a]) => {
    const o = a[1](i);
    o > O && (O = o);
  })), O), A = (i) => (a, o) => {
    const h = [...a];
    h[1] = [i, ...h[1]], b(h, o);
  }, y = /* @__PURE__ */ new Map(), z = (i, a) => {
    if (y.has(i))
      throw new Error("prop listener already exists");
    if (w.size) {
      const o = a[3](A(i));
      y.set(i, [a, o]);
    } else
      y.set(i, [a]);
  }, X = (i) => {
    var a;
    const o = y.get(i);
    o && (y.delete(i), (a = o[1]) == null || a.call(o));
  }, de = (i) => (w.add(i), w.size === 1 && y.forEach(([o, h], U) => {
    if (h)
      throw new Error("remove already exists");
    const k = o[3](A(U));
    y.set(U, [o, k]);
  }), () => {
    w.delete(i), w.size === 0 && y.forEach(([o, h], U) => {
      h && (h(), y.set(U, [o]));
    });
  }), H = Array.isArray(r) ? [] : Object.create(Object.getPrototypeOf(r)), R = t(H, {
    deleteProperty(i, a) {
      const o = Reflect.get(i, a);
      X(a);
      const h = Reflect.deleteProperty(i, a);
      return h && b(["delete", [a], o]), h;
    },
    set(i, a, o, h) {
      const U = Reflect.has(i, a), k = Reflect.get(i, a, h);
      if (U && (e(k, o) || d.has(o) && e(k, d.get(o))))
        return !0;
      X(a), q(o) && (o = me(o) || o);
      let x = o;
      if (o instanceof Promise)
        o.then((v) => {
          o.status = "fulfilled", o.value = v, b(["resolve", [a], v]);
        }).catch((v) => {
          o.status = "rejected", o.reason = v, b(["reject", [a], v]);
        });
      else {
        !_.has(o) && s(o) && (x = L(o));
        const v = !V.has(x) && _.get(x);
        v && z(a, v);
      }
      return Reflect.set(i, a, x, h), b(["set", [a], o, k]), !0;
    }
  });
  d.set(r, R);
  const ue = [
    H,
    C,
    c,
    de
  ];
  return _.set(R, ue), Reflect.ownKeys(r).forEach((i) => {
    const a = Object.getOwnPropertyDescriptor(
      r,
      i
    );
    "value" in a && (R[i] = r[i], delete a.value, delete a.writable), Object.defineProperty(H, i, a);
  }), R;
}) => [
  // public functions
  L,
  // shared state
  _,
  V,
  // internal things
  e,
  t,
  s,
  n,
  l,
  c,
  d,
  f
], [ge] = he();
function P(e = {}) {
  return ge(e);
}
function j(e, t, s) {
  const n = _.get(e);
  n || console.warn("Please use proxy object");
  let l;
  const c = [], d = n[3];
  let f = !1;
  const r = d((g) => {
    c.push(g), l || (l = Promise.resolve().then(() => {
      l = void 0, f && t(c.splice(0));
    }));
  });
  return f = !0, () => {
    f = !1, r();
  };
}
function ye(e, t) {
  const s = _.get(e);
  s || console.warn("Please use proxy object");
  const [n, l, c] = s;
  return c(n, l(), t);
}
const u = P({
  history: ["ConnectWallet"],
  view: "ConnectWallet",
  data: void 0
}), ce = {
  state: u,
  subscribe(e) {
    return j(u, () => e(u));
  },
  push(e, t) {
    e !== u.view && (u.view = e, t && (u.data = t), u.history.push(e));
  },
  reset(e) {
    u.view = e, u.history = [e];
  },
  replace(e) {
    u.history.length > 1 && (u.history[u.history.length - 1] = e, u.view = e);
  },
  goBack() {
    if (u.history.length > 1) {
      u.history.pop();
      const [e] = u.history.slice(-1);
      u.view = e;
    }
  },
  setData(e) {
    u.data = e;
  }
}, m = {
  WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
  WCM_VERSION: "WCM_VERSION",
  RECOMMENDED_WALLET_AMOUNT: 9,
  isMobile() {
    return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
  },
  isAndroid() {
    return m.isMobile() && navigator.userAgent.toLowerCase().includes("android");
  },
  isIos() {
    const e = navigator.userAgent.toLowerCase();
    return m.isMobile() && (e.includes("iphone") || e.includes("ipad"));
  },
  isHttpUrl(e) {
    return e.startsWith("http://") || e.startsWith("https://");
  },
  isArray(e) {
    return Array.isArray(e) && e.length > 0;
  },
  isTelegram() {
    return typeof window < "u" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (!!window.TelegramWebviewProxy || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    !!window.Telegram || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    !!window.TelegramWebviewProxyProto);
  },
  formatNativeUrl(e, t, s) {
    if (m.isHttpUrl(e))
      return this.formatUniversalUrl(e, t, s);
    let n = e;
    n.includes("://") || (n = e.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, s);
    const l = encodeURIComponent(t);
    return `${n}wc?uri=${l}`;
  },
  formatUniversalUrl(e, t, s) {
    if (!m.isHttpUrl(e))
      return this.formatNativeUrl(e, t, s);
    let n = e;
    if (n.startsWith("https://t.me")) {
      const c = Buffer.from(t).toString("base64").replace(/[=]/g, "");
      n.endsWith("/") && (n = n.slice(0, -1)), this.setWalletConnectDeepLink(n, s);
      const d = new URL(n);
      return d.searchParams.set("startapp", c), d.toString();
    }
    n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, s);
    const l = encodeURIComponent(t);
    return `${n}wc?uri=${l}`;
  },
  async wait(e) {
    return new Promise((t) => {
      setTimeout(t, e);
    });
  },
  openHref(e, t) {
    const s = this.isTelegram() ? "_blank" : t;
    window.open(e, s, "noreferrer noopener");
  },
  setWalletConnectDeepLink(e, t) {
    try {
      localStorage.setItem(m.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: t }));
    } catch {
      console.info("Unable to set WalletConnect deep link");
    }
  },
  setWalletConnectAndroidDeepLink(e) {
    try {
      const [t] = e.split("?");
      localStorage.setItem(
        m.WALLETCONNECT_DEEPLINK_CHOICE,
        JSON.stringify({ href: t, name: "Android" })
      );
    } catch {
      console.info("Unable to set WalletConnect android deep link");
    }
  },
  removeWalletConnectDeepLink() {
    try {
      localStorage.removeItem(m.WALLETCONNECT_DEEPLINK_CHOICE);
    } catch {
      console.info("Unable to remove WalletConnect deep link");
    }
  },
  setModalVersionInStorage() {
    try {
      typeof localStorage < "u" && localStorage.setItem(m.WCM_VERSION, "2.7.0");
    } catch {
      console.info("Unable to set Web3Modal version in storage");
    }
  },
  getWalletRouterData() {
    var e;
    const t = (e = ce.state.data) == null ? void 0 : e.Wallet;
    if (!t)
      throw new Error('Missing "Wallet" view data');
    return t;
  }
}, we = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), p = P({
  enabled: we,
  userSessionId: "",
  events: [],
  connectedWalletId: void 0
}), be = {
  state: p,
  subscribe(e) {
    return j(p.events, () => e(ye(p.events[p.events.length - 1])));
  },
  initialize() {
    p.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (p.userSessionId = crypto.randomUUID());
  },
  setConnectedWalletId(e) {
    p.connectedWalletId = e;
  },
  click(e) {
    if (p.enabled) {
      const t = {
        type: "CLICK",
        name: e.name,
        userSessionId: p.userSessionId,
        timestamp: Date.now(),
        data: e
      };
      p.events.push(t);
    }
  },
  track(e) {
    if (p.enabled) {
      const t = {
        type: "TRACK",
        name: e.name,
        userSessionId: p.userSessionId,
        timestamp: Date.now(),
        data: e
      };
      p.events.push(t);
    }
  },
  view(e) {
    if (p.enabled) {
      const t = {
        type: "VIEW",
        name: e.name,
        userSessionId: p.userSessionId,
        timestamp: Date.now(),
        data: e
      };
      p.events.push(t);
    }
  }
}, W = P({
  chains: void 0,
  walletConnectUri: void 0,
  isAuth: !1,
  isCustomDesktop: !1,
  isCustomMobile: !1,
  isDataLoaded: !1,
  isUiLoaded: !1
}), I = {
  state: W,
  subscribe(e) {
    return j(W, () => e(W));
  },
  setChains(e) {
    W.chains = e;
  },
  setWalletConnectUri(e) {
    W.walletConnectUri = e;
  },
  setIsCustomDesktop(e) {
    W.isCustomDesktop = e;
  },
  setIsCustomMobile(e) {
    W.isCustomMobile = e;
  },
  setIsDataLoaded(e) {
    W.isDataLoaded = e;
  },
  setIsUiLoaded(e) {
    W.isUiLoaded = e;
  },
  setIsAuth(e) {
    W.isAuth = e;
  }
}, B = P({
  projectId: "",
  mobileWallets: void 0,
  desktopWallets: void 0,
  walletImages: void 0,
  chains: void 0,
  enableAuthMode: !1,
  enableExplorer: !0,
  explorerExcludedWalletIds: void 0,
  explorerRecommendedWalletIds: void 0,
  termsOfServiceUrl: void 0,
  privacyPolicyUrl: void 0
}), T = {
  state: B,
  subscribe(e) {
    return j(B, () => e(B));
  },
  setConfig(e) {
    var t, s;
    be.initialize(), I.setChains(e.chains), I.setIsAuth(!!e.enableAuthMode), I.setIsCustomMobile(!!((t = e.mobileWallets) != null && t.length)), I.setIsCustomDesktop(!!((s = e.desktopWallets) != null && s.length)), m.setModalVersionInStorage(), Object.assign(B, e);
  }
};
var Ie = Object.defineProperty, te = Object.getOwnPropertySymbols, Oe = Object.prototype.hasOwnProperty, We = Object.prototype.propertyIsEnumerable, se = (e, t, s) => t in e ? Ie(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, Ee = (e, t) => {
  for (var s in t || (t = {}))
    Oe.call(t, s) && se(e, s, t[s]);
  if (te)
    for (var s of te(t))
      We.call(t, s) && se(e, s, t[s]);
  return e;
};
const Y = "https://explorer-api.walletconnect.com", G = "wcm", Q = "js-2.7.0";
async function K(e, t) {
  const s = Ee({ sdkType: G, sdkVersion: Q }, t), n = new URL(e, Y);
  return n.searchParams.append("projectId", T.state.projectId), Object.entries(s).forEach(([c, d]) => {
    d && n.searchParams.append(c, String(d));
  }), (await fetch(n)).json();
}
const M = {
  async getDesktopListings(e) {
    return K("/w3m/v1/getDesktopListings", e);
  },
  async getMobileListings(e) {
    return K("/w3m/v1/getMobileListings", e);
  },
  async getInjectedListings(e) {
    return K("/w3m/v1/getInjectedListings", e);
  },
  async getAllListings(e) {
    return K("/w3m/v1/getAllListings", e);
  },
  getWalletImageUrl(e) {
    return `${Y}/w3m/v1/getWalletImage/${e}?projectId=${T.state.projectId}&sdkType=${G}&sdkVersion=${Q}`;
  },
  getAssetImageUrl(e) {
    return `${Y}/w3m/v1/getAssetImage/${e}?projectId=${T.state.projectId}&sdkType=${G}&sdkVersion=${Q}`;
  }
};
var Ce = Object.defineProperty, ne = Object.getOwnPropertySymbols, Le = Object.prototype.hasOwnProperty, ve = Object.prototype.propertyIsEnumerable, re = (e, t, s) => t in e ? Ce(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, _e = (e, t) => {
  for (var s in t || (t = {}))
    Le.call(t, s) && re(e, s, t[s]);
  if (ne)
    for (var s of ne(t))
      ve.call(t, s) && re(e, s, t[s]);
  return e;
};
const oe = m.isMobile(), E = P({
  wallets: { listings: [], total: 0, page: 1 },
  search: { listings: [], total: 0, page: 1 },
  recomendedWallets: []
}), $e = {
  state: E,
  async getRecomendedWallets() {
    const { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } = T.state;
    if (e === "NONE" || t === "ALL" && !e)
      return E.recomendedWallets;
    if (m.isArray(e)) {
      const n = { recommendedIds: e.join(",") }, { listings: l } = await M.getAllListings(n), c = Object.values(l);
      c.sort((d, f) => {
        const L = e.indexOf(d.id), r = e.indexOf(f.id);
        return L - r;
      }), E.recomendedWallets = c;
    } else {
      const { chains: s, isAuth: n } = I.state, l = s == null ? void 0 : s.join(","), c = m.isArray(t), d = {
        page: 1,
        sdks: n ? "auth_v1" : void 0,
        entries: m.RECOMMENDED_WALLET_AMOUNT,
        chains: l,
        version: 2,
        excludedIds: c ? t.join(",") : void 0
      }, { listings: f } = oe ? await M.getMobileListings(d) : await M.getDesktopListings(d);
      E.recomendedWallets = Object.values(f);
    }
    return E.recomendedWallets;
  },
  async getWallets(e) {
    const t = _e({}, e), { explorerRecommendedWalletIds: s, explorerExcludedWalletIds: n } = T.state, { recomendedWallets: l } = E;
    if (n === "ALL")
      return E.wallets;
    l.length ? t.excludedIds = l.map((O) => O.id).join(",") : m.isArray(s) && (t.excludedIds = s.join(",")), m.isArray(n) && (t.excludedIds = [t.excludedIds, n].filter(Boolean).join(",")), I.state.isAuth && (t.sdks = "auth_v1");
    const { page: c, search: d } = e, { listings: f, total: L } = oe ? await M.getMobileListings(t) : await M.getDesktopListings(t), r = Object.values(f), g = d ? "search" : "wallets";
    return E[g] = {
      listings: [...E[g].listings, ...r],
      total: L,
      page: c ?? 1
    }, { listings: r, total: L };
  },
  getWalletImageUrl(e) {
    return M.getWalletImageUrl(e);
  },
  getAssetImageUrl(e) {
    return M.getAssetImageUrl(e);
  },
  resetSearch() {
    E.search = { listings: [], total: 0, page: 1 };
  }
}, $ = P({
  open: !1
}), F = {
  state: $,
  subscribe(e) {
    return j($, () => e($));
  },
  async open(e) {
    return new Promise((t) => {
      const { isUiLoaded: s, isDataLoaded: n } = I.state;
      if (m.removeWalletConnectDeepLink(), I.setWalletConnectUri(e == null ? void 0 : e.uri), I.setChains(e == null ? void 0 : e.chains), ce.reset("ConnectWallet"), s && n)
        $.open = !0, t();
      else {
        const l = setInterval(() => {
          const c = I.state;
          c.isUiLoaded && c.isDataLoaded && (clearInterval(l), $.open = !0, t());
        }, 200);
      }
    });
  },
  close() {
    $.open = !1;
  }
};
var Pe = Object.defineProperty, ae = Object.getOwnPropertySymbols, Ae = Object.prototype.hasOwnProperty, Me = Object.prototype.propertyIsEnumerable, ie = (e, t, s) => t in e ? Pe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, Se = (e, t) => {
  for (var s in t || (t = {}))
    Ae.call(t, s) && ie(e, s, t[s]);
  if (ae)
    for (var s of ae(t))
      Me.call(t, s) && ie(e, s, t[s]);
  return e;
};
function je() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const N = P({
  themeMode: je() ? "dark" : "light"
}), le = {
  state: N,
  subscribe(e) {
    return j(N, () => e(N));
  },
  setThemeConfig(e) {
    const { themeMode: t, themeVariables: s } = e;
    t && (N.themeMode = t), s && (N.themeVariables = Se({}, s));
  }
}, S = P({
  open: !1,
  message: "",
  variant: "success"
}), Te = {
  state: S,
  subscribe(e) {
    return j(S, () => e(S));
  },
  openToast(e, t) {
    S.open = !0, S.message = e, S.variant = t;
  },
  closeToast() {
    S.open = !1;
  }
};
class De {
  constructor(t) {
    this.openModal = F.open, this.closeModal = F.close, this.subscribeModal = F.subscribe, this.setTheme = le.setThemeConfig, le.setThemeConfig(t), T.setConfig(t), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-CD7Ae9zT.js");
      const t = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", t), I.setIsUiLoaded(!0);
    }
  }
}
const ke = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WalletConnectModal: De
}, Symbol.toStringTag, { value: "Module" }));
export {
  m as C,
  be as E,
  F as M,
  I as O,
  ce as R,
  le as T,
  Te as a,
  $e as b,
  T as c,
  ke as i
};
