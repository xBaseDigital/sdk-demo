import { j as se, A as ye, m as be } from "./index-D8KsAMkG.js";
const c = (a) => typeof a == "string", U = () => {
  let a, e;
  const t = new Promise((s, n) => {
    a = s, e = n;
  });
  return t.resolve = a, t.reject = e, t;
}, ne = (a) => a == null ? "" : "" + a, Se = (a, e, t) => {
  a.forEach((s) => {
    e[s] && (t[s] = e[s]);
  });
}, Oe = /###/g, ie = (a) => a && a.indexOf("###") > -1 ? a.replace(Oe, ".") : a, re = (a) => !a || c(a), M = (a, e, t) => {
  const s = c(e) ? e.split(".") : e;
  let n = 0;
  for (; n < s.length - 1; ) {
    if (re(a)) return {};
    const i = ie(s[n]);
    !a[i] && t && (a[i] = new t()), Object.prototype.hasOwnProperty.call(a, i) ? a = a[i] : a = {}, ++n;
  }
  return re(a) ? {} : {
    obj: a,
    k: ie(s[n])
  };
}, ae = (a, e, t) => {
  const {
    obj: s,
    k: n
  } = M(a, e, Object);
  if (s !== void 0 || e.length === 1) {
    s[n] = t;
    return;
  }
  let i = e[e.length - 1], r = e.slice(0, e.length - 1), l = M(a, r, Object);
  for (; l.obj === void 0 && r.length; )
    i = `${r[r.length - 1]}.${i}`, r = r.slice(0, r.length - 1), l = M(a, r, Object), l != null && l.obj && typeof l.obj[`${l.k}.${i}`] < "u" && (l.obj = void 0);
  l.obj[`${l.k}.${i}`] = t;
}, Le = (a, e, t, s) => {
  const {
    obj: n,
    k: i
  } = M(a, e, Object);
  n[i] = n[i] || [], n[i].push(t);
}, J = (a, e) => {
  const {
    obj: t,
    k: s
  } = M(a, e);
  if (t && Object.prototype.hasOwnProperty.call(t, s))
    return t[s];
}, ve = (a, e, t) => {
  const s = J(a, t);
  return s !== void 0 ? s : J(e, t);
}, me = (a, e, t) => {
  for (const s in e)
    s !== "__proto__" && s !== "constructor" && (s in a ? c(a[s]) || a[s] instanceof String || c(e[s]) || e[s] instanceof String ? t && (a[s] = e[s]) : me(a[s], e[s], t) : a[s] = e[s]);
  return a;
}, A = (a) => a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var we = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Re = (a) => c(a) ? a.replace(/[&<>"'\/]/g, (e) => we[e]) : a;
class Ce {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const s = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, s), this.regExpQueue.push(e), s;
  }
}
const $e = [" ", ",", "?", "!", ";"], Pe = new Ce(20), Ne = (a, e, t) => {
  e = e || "", t = t || "";
  const s = $e.filter((r) => e.indexOf(r) < 0 && t.indexOf(r) < 0);
  if (s.length === 0) return !0;
  const n = Pe.getRegExp(`(${s.map((r) => r === "?" ? "\\?" : r).join("|")})`);
  let i = !n.test(a);
  if (!i) {
    const r = a.indexOf(t);
    r > 0 && !n.test(a.substring(0, r)) && (i = !0);
  }
  return i;
}, X = function(a, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!a) return;
  if (a[e])
    return Object.prototype.hasOwnProperty.call(a, e) ? a[e] : void 0;
  const s = e.split(t);
  let n = a;
  for (let i = 0; i < s.length; ) {
    if (!n || typeof n != "object")
      return;
    let r, l = "";
    for (let o = i; o < s.length; ++o)
      if (o !== i && (l += t), l += s[o], r = n[l], r !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof r) > -1 && o < s.length - 1)
          continue;
        i += o - i + 1;
        break;
      }
    n = r;
  }
  return n;
}, W = (a) => a == null ? void 0 : a.replace("_", "-"), je = {
  type: "logger",
  log(a) {
    this.output("log", a);
  },
  warn(a) {
    this.output("warn", a);
  },
  error(a) {
    this.output("error", a);
  },
  output(a, e) {
    var t, s;
    (s = (t = console == null ? void 0 : console[a]) == null ? void 0 : t.apply) == null || s.call(t, console, e);
  }
};
class Y {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || je, this.options = t, this.debug = t.debug;
  }
  log() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, s, n) {
    return n && !this.debug ? null : (c(e[0]) && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new Y(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Y(this.logger, e);
  }
}
var N = new Y();
class G {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((s) => {
      this.observers[s] || (this.observers[s] = /* @__PURE__ */ new Map());
      const n = this.observers[s].get(t) || 0;
      this.observers[s].set(t, n + 1);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e) {
    for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
      s[n - 1] = arguments[n];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((r) => {
      let [l, o] = r;
      for (let u = 0; u < o; u++)
        l(...s);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((r) => {
      let [l, o] = r;
      for (let u = 0; u < o; u++)
        l.apply(l, [e, ...s]);
    });
  }
}
class oe extends G {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, s) {
    var u, h;
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, r = n.ignoreJSONStructure !== void 0 ? n.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let l;
    e.indexOf(".") > -1 ? l = e.split(".") : (l = [e, t], s && (Array.isArray(s) ? l.push(...s) : c(s) && i ? l.push(...s.split(i)) : l.push(s)));
    const o = J(this.data, l);
    return !o && !t && !s && e.indexOf(".") > -1 && (e = l[0], t = l[1], s = l.slice(2).join(".")), o || !r || !c(s) ? o : X((h = (u = this.data) == null ? void 0 : u[e]) == null ? void 0 : h[t], s, i);
  }
  addResource(e, t, s, n) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const r = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let l = [e, t];
    s && (l = l.concat(r ? s.split(r) : s)), e.indexOf(".") > -1 && (l = e.split("."), n = t, t = l[1]), this.addNamespaces(t), ae(this.data, l, n), i.silent || this.emit("added", e, t, s, n);
  }
  addResources(e, t, s) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const i in s)
      (c(s[i]) || Array.isArray(s[i])) && this.addResource(e, t, i, s[i], {
        silent: !0
      });
    n.silent || this.emit("added", e, t, s);
  }
  addResourceBundle(e, t, s, n, i) {
    let r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, l = [e, t];
    e.indexOf(".") > -1 && (l = e.split("."), n = s, s = t, t = l[1]), this.addNamespaces(t);
    let o = J(this.data, l) || {};
    r.skipCopy || (s = JSON.parse(JSON.stringify(s))), n ? me(o, s, i) : o = {
      ...o,
      ...s
    }, ae(this.data, l, o), r.silent || this.emit("added", e, t, s);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find((n) => t[n] && Object.keys(t[n]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var xe = {
  processors: {},
  addPostProcessor(a) {
    this.processors[a.name] = a;
  },
  handle(a, e, t, s, n) {
    return a.forEach((i) => {
      var r;
      e = ((r = this.processors[i]) == null ? void 0 : r.process(e, t, s, n)) ?? e;
    }), e;
  }
};
const le = {}, ue = (a) => !c(a) && typeof a != "boolean" && typeof a != "number";
class Q extends G {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Se(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = N.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (e == null)
      return !1;
    const s = this.resolve(e, t);
    return (s == null ? void 0 : s.res) !== void 0;
  }
  extractFromKey(e, t) {
    let s = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ":");
    const n = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let i = t.ns || this.options.defaultNS || [];
    const r = s && e.indexOf(s) > -1, l = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !Ne(e, s, n);
    if (r && !l) {
      const o = e.match(this.interpolator.nestingRegexp);
      if (o && o.length > 0)
        return {
          key: e,
          namespaces: c(i) ? [i] : i
        };
      const u = e.split(s);
      (s !== n || s === n && this.options.ns.indexOf(u[0]) > -1) && (i = u.shift()), e = u.join(n);
    }
    return {
      key: e,
      namespaces: c(i) ? [i] : i
    };
  }
  translate(e, t, s) {
    if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof t == "object" && (t = {
      ...t
    }), t || (t = {}), e == null) return "";
    Array.isArray(e) || (e = [String(e)]);
    const n = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails, i = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, {
      key: r,
      namespaces: l
    } = this.extractFromKey(e[e.length - 1], t), o = l[l.length - 1], u = t.lng || this.language, h = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((u == null ? void 0 : u.toLowerCase()) === "cimode") {
      if (h) {
        const v = t.nsSeparator || this.options.nsSeparator;
        return n ? {
          res: `${o}${v}${r}`,
          usedKey: r,
          exactUsedKey: r,
          usedLng: u,
          usedNS: o,
          usedParams: this.getUsedParamsDetails(t)
        } : `${o}${v}${r}`;
      }
      return n ? {
        res: r,
        usedKey: r,
        exactUsedKey: r,
        usedLng: u,
        usedNS: o,
        usedParams: this.getUsedParamsDetails(t)
      } : r;
    }
    const d = this.resolve(e, t);
    let f = d == null ? void 0 : d.res;
    const m = (d == null ? void 0 : d.usedKey) || r, g = (d == null ? void 0 : d.exactUsedKey) || r, p = ["[object Number]", "[object Function]", "[object RegExp]"], x = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, S = !this.i18nFormat || this.i18nFormat.handleAsObject, O = t.count !== void 0 && !c(t.count), $ = Q.hasDefaultValue(t), R = O ? this.pluralResolver.getSuffix(u, t.count, t) : "", V = t.ordinal && O ? this.pluralResolver.getSuffix(u, t.count, {
      ordinal: !1
    }) : "", I = O && !t.ordinal && t.count === 0, y = I && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${R}`] || t[`defaultValue${V}`] || t.defaultValue;
    let L = f;
    S && !f && $ && (L = y);
    const F = ue(L), E = Object.prototype.toString.apply(L);
    if (S && L && F && p.indexOf(E) < 0 && !(c(x) && Array.isArray(L))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const v = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, L, {
          ...t,
          ns: l
        }) : `key '${r} (${this.language})' returned an object instead of string.`;
        return n ? (d.res = v, d.usedParams = this.getUsedParamsDetails(t), d) : v;
      }
      if (i) {
        const v = Array.isArray(L), C = v ? [] : {}, q = v ? g : m;
        for (const P in L)
          if (Object.prototype.hasOwnProperty.call(L, P)) {
            const j = `${q}${i}${P}`;
            $ && !f ? C[P] = this.translate(j, {
              ...t,
              defaultValue: ue(y) ? y[P] : void 0,
              joinArrays: !1,
              ns: l
            }) : C[P] = this.translate(j, {
              ...t,
              joinArrays: !1,
              ns: l
            }), C[P] === j && (C[P] = L[P]);
          }
        f = C;
      }
    } else if (S && c(x) && Array.isArray(f))
      f = f.join(x), f && (f = this.extendTranslation(f, e, t, s));
    else {
      let v = !1, C = !1;
      !this.isValidLookup(f) && $ && (v = !0, f = y), this.isValidLookup(f) || (C = !0, f = r);
      const P = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && C ? void 0 : f, j = $ && y !== f && this.options.updateMissing;
      if (C || v || j) {
        if (this.logger.log(j ? "updateKey" : "missingKey", u, o, r, j ? y : f), i) {
          const w = this.resolve(r, {
            ...t,
            keySeparator: !1
          });
          w && w.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let T = [];
        const z = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && z && z[0])
          for (let w = 0; w < z.length; w++)
            T.push(z[w]);
        else this.options.saveMissingTo === "all" ? T = this.languageUtils.toResolveHierarchy(t.lng || this.language) : T.push(t.lng || this.language);
        const _ = (w, k, K) => {
          var te;
          const ee = $ && K !== f ? K : P;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(w, o, k, ee, j, t) : (te = this.backendConnector) != null && te.saveMissing && this.backendConnector.saveMissing(w, o, k, ee, j, t), this.emit("missingKey", w, o, k, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && O ? T.forEach((w) => {
          const k = this.pluralResolver.getSuffixes(w, t);
          I && t[`defaultValue${this.options.pluralSeparator}zero`] && k.indexOf(`${this.options.pluralSeparator}zero`) < 0 && k.push(`${this.options.pluralSeparator}zero`), k.forEach((K) => {
            _([w], r + K, t[`defaultValue${K}`] || y);
          });
        }) : _(T, r, y));
      }
      f = this.extendTranslation(f, e, t, d, s), C && f === r && this.options.appendNamespaceToMissingKey && (f = `${o}:${r}`), (C || v) && this.options.parseMissingKeyHandler && (f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${o}:${r}` : r, v ? f : void 0));
    }
    return n ? (d.res = f, d.usedParams = this.getUsedParamsDetails(t), d) : f;
  }
  extendTranslation(e, t, s, n, i) {
    var u, h;
    var r = this;
    if ((u = this.i18nFormat) != null && u.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...s
      }, s.lng || this.language || n.usedLng, n.usedNS, n.usedKey, {
        resolved: n
      });
    else if (!s.skipInterpolation) {
      s.interpolation && this.interpolator.init({
        ...s,
        interpolation: {
          ...this.options.interpolation,
          ...s.interpolation
        }
      });
      const d = c(e) && (((h = s == null ? void 0 : s.interpolation) == null ? void 0 : h.skipOnVariables) !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let f;
      if (d) {
        const g = e.match(this.interpolator.nestingRegexp);
        f = g && g.length;
      }
      let m = s.replace && !c(s.replace) ? s.replace : s;
      if (this.options.interpolation.defaultVariables && (m = {
        ...this.options.interpolation.defaultVariables,
        ...m
      }), e = this.interpolator.interpolate(e, m, s.lng || this.language || n.usedLng, s), d) {
        const g = e.match(this.interpolator.nestingRegexp), p = g && g.length;
        f < p && (s.nest = !1);
      }
      !s.lng && n && n.res && (s.lng = this.language || n.usedLng), s.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var g = arguments.length, p = new Array(g), x = 0; x < g; x++)
          p[x] = arguments[x];
        return (i == null ? void 0 : i[0]) === p[0] && !s.context ? (r.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${t[0]}`), null) : r.translate(...p, t);
      }, s)), s.interpolation && this.interpolator.reset();
    }
    const l = s.postProcess || this.options.postProcess, o = c(l) ? [l] : l;
    return e != null && (o != null && o.length) && s.applyPostProcessor !== !1 && (e = xe.handle(o, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...n,
        usedParams: this.getUsedParamsDetails(s)
      },
      ...s
    } : s, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s, n, i, r, l;
    return c(e) && (e = [e]), e.forEach((o) => {
      if (this.isValidLookup(s)) return;
      const u = this.extractFromKey(o, t), h = u.key;
      n = h;
      let d = u.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const f = t.count !== void 0 && !c(t.count), m = f && !t.ordinal && t.count === 0, g = t.context !== void 0 && (c(t.context) || typeof t.context == "number") && t.context !== "", p = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      d.forEach((x) => {
        var S, O;
        this.isValidLookup(s) || (l = x, !le[`${p[0]}-${x}`] && ((S = this.utils) != null && S.hasLoadedNamespace) && !((O = this.utils) != null && O.hasLoadedNamespace(l)) && (le[`${p[0]}-${x}`] = !0, this.logger.warn(`key "${n}" for languages "${p.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), p.forEach(($) => {
          var I;
          if (this.isValidLookup(s)) return;
          r = $;
          const R = [h];
          if ((I = this.i18nFormat) != null && I.addLookupKeys)
            this.i18nFormat.addLookupKeys(R, h, $, x, t);
          else {
            let y;
            f && (y = this.pluralResolver.getSuffix($, t.count, t));
            const L = `${this.options.pluralSeparator}zero`, F = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (R.push(h + y), t.ordinal && y.indexOf(F) === 0 && R.push(h + y.replace(F, this.options.pluralSeparator)), m && R.push(h + L)), g) {
              const E = `${h}${this.options.contextSeparator}${t.context}`;
              R.push(E), f && (R.push(E + y), t.ordinal && y.indexOf(F) === 0 && R.push(E + y.replace(F, this.options.pluralSeparator)), m && R.push(E + L));
            }
          }
          let V;
          for (; V = R.pop(); )
            this.isValidLookup(s) || (i = V, s = this.getResource($, x, V, t));
        }));
      });
    }), {
      res: s,
      usedKey: n,
      exactUsedKey: i,
      usedLng: r,
      usedNS: l
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, s) {
    var i;
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (i = this.i18nFormat) != null && i.getResource ? this.i18nFormat.getResource(e, t, s, n) : this.resourceStore.getResource(e, t, s, n);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], s = e.replace && !c(e.replace);
    let n = s ? e.replace : e;
    if (s && typeof e.count < "u" && (n.count = e.count), this.options.interpolation.defaultVariables && (n = {
      ...this.options.interpolation.defaultVariables,
      ...n
    }), !s) {
      n = {
        ...n
      };
      for (const i of t)
        delete n[i];
    }
    return n;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const s in e)
      if (Object.prototype.hasOwnProperty.call(e, s) && t === s.substring(0, t.length) && e[s] !== void 0)
        return !0;
    return !1;
  }
}
class fe {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = N.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = W(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = W(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (c(e) && e.indexOf("-") > -1) {
      let t;
      try {
        t = Intl.getCanonicalLocales(e)[0];
      } catch {
      }
      return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return e.forEach((s) => {
      if (t) return;
      const n = this.formatLanguageCode(s);
      (!this.options.supportedLngs || this.isSupportedCode(n)) && (t = n);
    }), !t && this.options.supportedLngs && e.forEach((s) => {
      if (t) return;
      const n = this.getLanguagePartFromCode(s);
      if (this.isSupportedCode(n)) return t = n;
      t = this.options.supportedLngs.find((i) => {
        if (i === n) return i;
        if (!(i.indexOf("-") < 0 && n.indexOf("-") < 0) && (i.indexOf("-") > 0 && n.indexOf("-") < 0 && i.substring(0, i.indexOf("-")) === n || i.indexOf(n) === 0 && n.length > 1))
          return i;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), c(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let s = e[t];
    return s || (s = e[this.getScriptPartFromCode(t)]), s || (s = e[this.formatLanguageCode(t)]), s || (s = e[this.getLanguagePartFromCode(t)]), s || (s = e.default), s || [];
  }
  toResolveHierarchy(e, t) {
    const s = this.getFallbackCodes(t || this.options.fallbackLng || [], e), n = [], i = (r) => {
      r && (this.isSupportedCode(r) ? n.push(r) : this.logger.warn(`rejecting language code not found in supportedLngs: ${r}`));
    };
    return c(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e))) : c(e) && i(this.formatLanguageCode(e)), s.forEach((r) => {
      n.indexOf(r) < 0 && i(this.formatLanguageCode(r));
    }), n;
  }
}
const he = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, de = {
  select: (a) => a === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class ke {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = N.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = W(e === "dev" ? "en" : e), n = t.ordinal ? "ordinal" : "cardinal", i = JSON.stringify({
      cleanedCode: s,
      type: n
    });
    if (i in this.pluralRulesCache)
      return this.pluralRulesCache[i];
    let r;
    try {
      r = new Intl.PluralRules(s, {
        type: n
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), de;
      if (!e.match(/-|_/)) return de;
      const o = this.languageUtils.getLanguagePartFromCode(e);
      r = this.getRule(o, t);
    }
    return this.pluralRulesCache[i] = r, r;
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = this.getRule(e, t);
    return s || (s = this.getRule("dev", t)), (s == null ? void 0 : s.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, s).map((n) => `${t}${n}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = this.getRule(e, t);
    return s || (s = this.getRule("dev", t)), s ? s.resolvedOptions().pluralCategories.sort((n, i) => he[n] - he[i]).map((n) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${n}`) : [];
  }
  getSuffix(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const n = this.getRule(e, s);
    return n ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${n.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, s));
  }
}
const ge = function(a, e, t) {
  let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = ve(a, e, t);
  return !i && n && c(t) && (i = X(a, t, s), i === void 0 && (i = X(e, t, s))), i;
}, Z = (a) => a.replace(/\$/g, "$$$$");
class Fe {
  constructor() {
    var t;
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = N.create("interpolator"), this.options = e, this.format = ((t = e == null ? void 0 : e.interpolation) == null ? void 0 : t.format) || ((s) => s), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: s,
      useRawValueToEscape: n,
      prefix: i,
      prefixEscaped: r,
      suffix: l,
      suffixEscaped: o,
      formatSeparator: u,
      unescapeSuffix: h,
      unescapePrefix: d,
      nestingPrefix: f,
      nestingPrefixEscaped: m,
      nestingSuffix: g,
      nestingSuffixEscaped: p,
      nestingOptionsSeparator: x,
      maxReplaces: S,
      alwaysFormat: O
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Re, this.escapeValue = s !== void 0 ? s : !0, this.useRawValueToEscape = n !== void 0 ? n : !1, this.prefix = i ? A(i) : r || "{{", this.suffix = l ? A(l) : o || "}}", this.formatSeparator = u || ",", this.unescapePrefix = h ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : h || "", this.nestingPrefix = f ? A(f) : m || A("$t("), this.nestingSuffix = g ? A(g) : p || A(")"), this.nestingOptionsSeparator = x || ",", this.maxReplaces = S || 1e3, this.alwaysFormat = O !== void 0 ? O : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, s) => (t == null ? void 0 : t.source) === s ? (t.lastIndex = 0, t) : new RegExp(s, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, s, n) {
    var m;
    let i, r, l;
    const o = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (g) => {
      if (g.indexOf(this.formatSeparator) < 0) {
        const O = ge(t, o, g, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(O, void 0, s, {
          ...n,
          ...t,
          interpolationkey: g
        }) : O;
      }
      const p = g.split(this.formatSeparator), x = p.shift().trim(), S = p.join(this.formatSeparator).trim();
      return this.format(ge(t, o, x, this.options.keySeparator, this.options.ignoreJSONStructure), S, s, {
        ...n,
        ...t,
        interpolationkey: x
      });
    };
    this.resetRegExp();
    const h = (n == null ? void 0 : n.missingInterpolationHandler) || this.options.missingInterpolationHandler, d = ((m = n == null ? void 0 : n.interpolation) == null ? void 0 : m.skipOnVariables) !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (g) => Z(g)
    }, {
      regex: this.regexp,
      safeValue: (g) => this.escapeValue ? Z(this.escape(g)) : Z(g)
    }].forEach((g) => {
      for (l = 0; i = g.regex.exec(e); ) {
        const p = i[1].trim();
        if (r = u(p), r === void 0)
          if (typeof h == "function") {
            const S = h(e, i, n);
            r = c(S) ? S : "";
          } else if (n && Object.prototype.hasOwnProperty.call(n, p))
            r = "";
          else if (d) {
            r = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${p} for interpolating ${e}`), r = "";
        else !c(r) && !this.useRawValueToEscape && (r = ne(r));
        const x = g.safeValue(r);
        if (e = e.replace(i[0], x), d ? (g.regex.lastIndex += r.length, g.regex.lastIndex -= i[0].length) : g.regex.lastIndex = 0, l++, l >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, i, r;
    const l = (o, u) => {
      const h = this.nestingOptionsSeparator;
      if (o.indexOf(h) < 0) return o;
      const d = o.split(new RegExp(`${h}[ ]*{`));
      let f = `{${d[1]}`;
      o = d[0], f = this.interpolate(f, r);
      const m = f.match(/'/g), g = f.match(/"/g);
      (((m == null ? void 0 : m.length) ?? 0) % 2 === 0 && !g || g.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        r = JSON.parse(f), u && (r = {
          ...u,
          ...r
        });
      } catch (p) {
        return this.logger.warn(`failed parsing options string in nesting for key ${o}`, p), `${o}${h}${f}`;
      }
      return r.defaultValue && r.defaultValue.indexOf(this.prefix) > -1 && delete r.defaultValue, o;
    };
    for (; n = this.nestingRegexp.exec(e); ) {
      let o = [];
      r = {
        ...s
      }, r = r.replace && !c(r.replace) ? r.replace : r, r.applyPostProcessor = !1, delete r.defaultValue;
      let u = !1;
      if (n[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(n[1])) {
        const h = n[1].split(this.formatSeparator).map((d) => d.trim());
        n[1] = h.shift(), o = h, u = !0;
      }
      if (i = t(l.call(this, n[1].trim(), r), r), i && n[0] === e && !c(i)) return i;
      c(i) || (i = ne(i)), i || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`), i = ""), u && (i = o.reduce((h, d) => this.format(h, d, s.lng, {
        ...s,
        interpolationkey: n[1].trim()
      }), i.trim())), e = e.replace(n[0], i), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const Ee = (a) => {
  let e = a.toLowerCase().trim();
  const t = {};
  if (a.indexOf("(") > -1) {
    const s = a.split("(");
    e = s[0].toLowerCase().trim();
    const n = s[1].substring(0, s[1].length - 1);
    e === "currency" && n.indexOf(":") < 0 ? t.currency || (t.currency = n.trim()) : e === "relativetime" && n.indexOf(":") < 0 ? t.range || (t.range = n.trim()) : n.split(";").forEach((r) => {
      if (r) {
        const [l, ...o] = r.split(":"), u = o.join(":").trim().replace(/^'+|'+$/g, ""), h = l.trim();
        t[h] || (t[h] = u), u === "false" && (t[h] = !1), u === "true" && (t[h] = !0), isNaN(u) || (t[h] = parseInt(u, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, D = (a) => {
  const e = {};
  return (t, s, n) => {
    let i = n;
    n && n.interpolationkey && n.formatParams && n.formatParams[n.interpolationkey] && n[n.interpolationkey] && (i = {
      ...i,
      [n.interpolationkey]: void 0
    });
    const r = s + JSON.stringify(i);
    let l = e[r];
    return l || (l = a(W(s), n), e[r] = l), l(t);
  };
};
class Ae {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = N.create("formatter"), this.options = e, this.formats = {
      number: D((t, s) => {
        const n = new Intl.NumberFormat(t, {
          ...s
        });
        return (i) => n.format(i);
      }),
      currency: D((t, s) => {
        const n = new Intl.NumberFormat(t, {
          ...s,
          style: "currency"
        });
        return (i) => n.format(i);
      }),
      datetime: D((t, s) => {
        const n = new Intl.DateTimeFormat(t, {
          ...s
        });
        return (i) => n.format(i);
      }),
      relativetime: D((t, s) => {
        const n = new Intl.RelativeTimeFormat(t, {
          ...s
        });
        return (i) => n.format(i, s.range || "day");
      }),
      list: D((t, s) => {
        const n = new Intl.ListFormat(t, {
          ...s
        });
        return (i) => n.format(i);
      })
    }, this.init(e);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = t.interpolation.formatSeparator || ",";
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = D(t);
  }
  format(e, t, s) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = t.split(this.formatSeparator);
    if (i.length > 1 && i[0].indexOf("(") > 1 && i[0].indexOf(")") < 0 && i.find((l) => l.indexOf(")") > -1)) {
      const l = i.findIndex((o) => o.indexOf(")") > -1);
      i[0] = [i[0], ...i.splice(1, l)].join(this.formatSeparator);
    }
    return i.reduce((l, o) => {
      var d;
      const {
        formatName: u,
        formatOptions: h
      } = Ee(o);
      if (this.formats[u]) {
        let f = l;
        try {
          const m = ((d = n == null ? void 0 : n.formatParams) == null ? void 0 : d[n.interpolationkey]) || {}, g = m.locale || m.lng || n.locale || n.lng || s;
          f = this.formats[u](l, g, {
            ...h,
            ...n,
            ...m
          });
        } catch (m) {
          this.logger.warn(m);
        }
        return f;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return l;
    }, e);
  }
}
const De = (a, e) => {
  a.pending[e] !== void 0 && (delete a.pending[e], a.pendingCount--);
};
class Ve extends G {
  constructor(e, t, s) {
    var i, r;
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = s, this.languageUtils = s.languageUtils, this.options = n, this.logger = N.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = n.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = n.maxRetries >= 0 ? n.maxRetries : 5, this.retryTimeout = n.retryTimeout >= 1 ? n.retryTimeout : 350, this.state = {}, this.queue = [], (r = (i = this.backend) == null ? void 0 : i.init) == null || r.call(i, s, n.backend, n);
  }
  queueLoad(e, t, s, n) {
    const i = {}, r = {}, l = {}, o = {};
    return e.forEach((u) => {
      let h = !0;
      t.forEach((d) => {
        const f = `${u}|${d}`;
        !s.reload && this.store.hasResourceBundle(u, d) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? r[f] === void 0 && (r[f] = !0) : (this.state[f] = 1, h = !1, r[f] === void 0 && (r[f] = !0), i[f] === void 0 && (i[f] = !0), o[d] === void 0 && (o[d] = !0)));
      }), h || (l[u] = !0);
    }), (Object.keys(i).length || Object.keys(r).length) && this.queue.push({
      pending: r,
      pendingCount: Object.keys(r).length,
      loaded: {},
      errors: [],
      callback: n
    }), {
      toLoad: Object.keys(i),
      pending: Object.keys(r),
      toLoadLanguages: Object.keys(l),
      toLoadNamespaces: Object.keys(o)
    };
  }
  loaded(e, t, s) {
    const n = e.split("|"), i = n[0], r = n[1];
    t && this.emit("failedLoading", i, r, t), !t && s && this.store.addResourceBundle(i, r, s, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && s && (this.state[e] = 0);
    const l = {};
    this.queue.forEach((o) => {
      Le(o.loaded, [i], r), De(o, e), t && o.errors.push(t), o.pendingCount === 0 && !o.done && (Object.keys(o.loaded).forEach((u) => {
        l[u] || (l[u] = {});
        const h = o.loaded[u];
        h.length && h.forEach((d) => {
          l[u][d] === void 0 && (l[u][d] = !0);
        });
      }), o.done = !0, o.errors.length ? o.callback(o.errors) : o.callback());
    }), this.emit("loaded", l), this.queue = this.queue.filter((o) => !o.done);
  }
  read(e, t, s) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, r = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return r(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: s,
        tried: n,
        wait: i,
        callback: r
      });
      return;
    }
    this.readingCalls++;
    const l = (u, h) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const d = this.waitingReads.shift();
        this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
      }
      if (u && h && n < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, s, n + 1, i * 2, r);
        }, i);
        return;
      }
      r(u, h);
    }, o = this.backend[s].bind(this.backend);
    if (o.length === 2) {
      try {
        const u = o(e, t);
        u && typeof u.then == "function" ? u.then((h) => l(null, h)).catch(l) : l(null, u);
      } catch (u) {
        l(u);
      }
      return;
    }
    return o(e, t, l);
  }
  prepareLoading(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), n && n();
    c(e) && (e = this.languageUtils.toResolveHierarchy(e)), c(t) && (t = [t]);
    const i = this.queueLoad(e, t, s, n);
    if (!i.toLoad.length)
      return i.pending.length || n(), null;
    i.toLoad.forEach((r) => {
      this.loadOne(r);
    });
  }
  load(e, t, s) {
    this.prepareLoading(e, t, {}, s);
  }
  reload(e, t, s) {
    this.prepareLoading(e, t, {
      reload: !0
    }, s);
  }
  loadOne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const s = e.split("|"), n = s[0], i = s[1];
    this.read(n, i, "read", void 0, void 0, (r, l) => {
      r && this.logger.warn(`${t}loading namespace ${i} for language ${n} failed`, r), !r && l && this.logger.log(`${t}loaded namespace ${i} for language ${n}`, l), this.loaded(e, r, l);
    });
  }
  saveMissing(e, t, s, n, i) {
    var o, u, h, d, f;
    let r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, l = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if ((u = (o = this.services) == null ? void 0 : o.utils) != null && u.hasLoadedNamespace && !((d = (h = this.services) == null ? void 0 : h.utils) != null && d.hasLoadedNamespace(t))) {
      this.logger.warn(`did not save key "${s}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(s == null || s === "")) {
      if ((f = this.backend) != null && f.create) {
        const m = {
          ...r,
          isUpdate: i
        }, g = this.backend.create.bind(this.backend);
        if (g.length < 6)
          try {
            let p;
            g.length === 5 ? p = g(e, t, s, n, m) : p = g(e, t, s, n), p && typeof p.then == "function" ? p.then((x) => l(null, x)).catch(l) : l(null, p);
          } catch (p) {
            l(p);
          }
        else
          g(e, t, s, n, l, m);
      }
      !e || !e[0] || this.store.addResource(e[0], t, s, n);
    }
  }
}
const ce = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (a) => {
    let e = {};
    if (typeof a[1] == "object" && (e = a[1]), c(a[1]) && (e.defaultValue = a[1]), c(a[2]) && (e.tDescription = a[2]), typeof a[2] == "object" || typeof a[3] == "object") {
      const t = a[3] || a[2];
      Object.keys(t).forEach((s) => {
        e[s] = t[s];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (a) => a,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  }
}), pe = (a) => {
  var e, t;
  return c(a.ns) && (a.ns = [a.ns]), c(a.fallbackLng) && (a.fallbackLng = [a.fallbackLng]), c(a.fallbackNS) && (a.fallbackNS = [a.fallbackNS]), ((t = (e = a.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : t.call(e, "cimode")) < 0 && (a.supportedLngs = a.supportedLngs.concat(["cimode"])), typeof a.initImmediate == "boolean" && (a.initAsync = a.initImmediate), a;
}, B = () => {
}, Ie = (a) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach((t) => {
    typeof a[t] == "function" && (a[t] = a[t].bind(a));
  });
};
class H extends G {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = pe(e), this.services = {}, this.logger = N, this.modules = {
      external: []
    }, Ie(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof t == "function" && (s = t, t = {}), t.defaultNS == null && t.ns && (c(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const n = ce();
    this.options = {
      ...n,
      ...this.options,
      ...pe(t)
    }, this.options.interpolation = {
      ...n.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const i = (h) => h ? typeof h == "function" ? new h() : h : null;
    if (!this.options.isClone) {
      this.modules.logger ? N.init(i(this.modules.logger), this.options) : N.init(null, this.options);
      let h;
      this.modules.formatter ? h = this.modules.formatter : h = Ae;
      const d = new fe(this.options);
      this.store = new oe(this.options.resources, this.options);
      const f = this.services;
      f.logger = N, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new ke(d, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), h && (!this.options.interpolation.format || this.options.interpolation.format === n.interpolation.format) && (f.formatter = i(h), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new Fe(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new Ve(i(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(m) {
        for (var g = arguments.length, p = new Array(g > 1 ? g - 1 : 0), x = 1; x < g; x++)
          p[x - 1] = arguments[x];
        e.emit(m, ...p);
      }), this.modules.languageDetector && (f.languageDetector = i(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = i(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new Q(this.services, this.options), this.translator.on("*", function(m) {
        for (var g = arguments.length, p = new Array(g > 1 ? g - 1 : 0), x = 1; x < g; x++)
          p[x - 1] = arguments[x];
        e.emit(m, ...p);
      }), this.modules.external.forEach((m) => {
        m.init && m.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, s || (s = B), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const h = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      h.length > 0 && h[0] !== "dev" && (this.options.lng = h[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((h) => {
      this[h] = function() {
        return e.store[h](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((h) => {
      this[h] = function() {
        return e.store[h](...arguments), e;
      };
    });
    const o = U(), u = () => {
      const h = (d, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), o.resolve(f), s(d, f);
      };
      if (this.languages && !this.isInitialized) return h(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, h);
    };
    return this.options.resources || !this.options.initAsync ? u() : setTimeout(u, 0), o;
  }
  loadResources(e) {
    var i, r;
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : B;
    const n = c(e) ? e : this.language;
    if (typeof e == "function" && (s = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((n == null ? void 0 : n.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return s();
      const l = [], o = (u) => {
        if (!u || u === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(u).forEach((d) => {
          d !== "cimode" && l.indexOf(d) < 0 && l.push(d);
        });
      };
      n ? o(n) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((h) => o(h)), (r = (i = this.options.preload) == null ? void 0 : i.forEach) == null || r.call(i, (u) => o(u)), this.services.backendConnector.load(l, this.options.ns, (u) => {
        !u && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(u);
      });
    } else
      s(null);
  }
  reloadResources(e, t, s) {
    const n = U();
    return typeof e == "function" && (s = e, e = void 0), typeof t == "function" && (s = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), s || (s = B), this.services.backendConnector.reload(e, t, (i) => {
      n.resolve(), s(i);
    }), n;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && xe.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
      for (let t = 0; t < this.languages.length; t++) {
        const s = this.languages[t];
        if (!(["cimode", "dev"].indexOf(s) > -1) && this.store.hasLanguageSomeTranslations(s)) {
          this.resolvedLanguage = s;
          break;
        }
      }
  }
  changeLanguage(e, t) {
    var s = this;
    this.isLanguageChangingTo = e;
    const n = U();
    this.emit("languageChanging", e);
    const i = (o) => {
      this.language = o, this.languages = this.services.languageUtils.toResolveHierarchy(o), this.resolvedLanguage = void 0, this.setResolvedLanguage(o);
    }, r = (o, u) => {
      u ? (i(u), this.translator.changeLanguage(u), this.isLanguageChangingTo = void 0, this.emit("languageChanged", u), this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0, n.resolve(function() {
        return s.t(...arguments);
      }), t && t(o, function() {
        return s.t(...arguments);
      });
    }, l = (o) => {
      var h, d;
      !e && !o && this.services.languageDetector && (o = []);
      const u = c(o) ? o : this.services.languageUtils.getBestMatchFromCodes(o);
      u && (this.language || i(u), this.translator.language || this.translator.changeLanguage(u), (d = (h = this.services.languageDetector) == null ? void 0 : h.cacheUserLanguage) == null || d.call(h, u)), this.loadResources(u, (f) => {
        r(f, u);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? l(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(l) : this.services.languageDetector.detect(l) : l(e), n;
  }
  getFixedT(e, t, s) {
    var n = this;
    const i = function(r, l) {
      let o;
      if (typeof l != "object") {
        for (var u = arguments.length, h = new Array(u > 2 ? u - 2 : 0), d = 2; d < u; d++)
          h[d - 2] = arguments[d];
        o = n.options.overloadTranslationOptionHandler([r, l].concat(h));
      } else
        o = {
          ...l
        };
      o.lng = o.lng || i.lng, o.lngs = o.lngs || i.lngs, o.ns = o.ns || i.ns, o.keyPrefix !== "" && (o.keyPrefix = o.keyPrefix || s || i.keyPrefix);
      const f = n.options.keySeparator || ".";
      let m;
      return o.keyPrefix && Array.isArray(r) ? m = r.map((g) => `${o.keyPrefix}${f}${g}`) : m = o.keyPrefix ? `${o.keyPrefix}${f}${r}` : r, n.t(m, o);
    };
    return c(e) ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = s, i;
  }
  t() {
    var n;
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return (n = this.translator) == null ? void 0 : n.translate(...t);
  }
  exists() {
    var n;
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return (n = this.translator) == null ? void 0 : n.exists(...t);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const s = t.lng || this.resolvedLanguage || this.languages[0], n = this.options ? this.options.fallbackLng : !1, i = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === "cimode") return !0;
    const r = (l, o) => {
      const u = this.services.backendConnector.state[`${l}|${o}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (t.precheck) {
      const l = t.precheck(this, r);
      if (l !== void 0) return l;
    }
    return !!(this.hasResourceBundle(s, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || r(s, e) && (!n || r(i, e)));
  }
  loadNamespaces(e, t) {
    const s = U();
    return this.options.ns ? (c(e) && (e = [e]), e.forEach((n) => {
      this.options.ns.indexOf(n) < 0 && this.options.ns.push(n);
    }), this.loadResources((n) => {
      s.resolve(), t && t(n);
    }), s) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const s = U();
    c(e) && (e = [e]);
    const n = this.options.preload || [], i = e.filter((r) => n.indexOf(r) < 0 && this.services.languageUtils.isSupportedCode(r));
    return i.length ? (this.options.preload = n.concat(i), this.loadResources((r) => {
      s.resolve(), t && t(r);
    }), s) : (t && t(), Promise.resolve());
  }
  dir(e) {
    var n, i;
    if (e || (e = this.resolvedLanguage || (((n = this.languages) == null ? void 0 : n.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], s = ((i = this.services) == null ? void 0 : i.languageUtils) || new fe(ce());
    return t.indexOf(s.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new H(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : B;
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const n = {
      ...this.options,
      ...e,
      isClone: !0
    }, i = new H(n);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (i.logger = i.logger.clone(e)), ["store", "services", "language"].forEach((l) => {
      i[l] = this[l];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, s) {
      const l = Object.keys(this.store.data).reduce((o, u) => (o[u] = {
        ...this.store.data[u]
      }, Object.keys(o[u]).reduce((h, d) => (h[d] = {
        ...o[u][d]
      }, h), {})), {});
      i.store = new oe(l, n), i.services.resourceStore = i.store;
    }
    return i.translator = new Q(i.services, n), i.translator.on("*", function(l) {
      for (var o = arguments.length, u = new Array(o > 1 ? o - 1 : 0), h = 1; h < o; h++)
        u[h - 1] = arguments[h];
      i.emit(l, ...u);
    }), i.init(n, t), i.translator.options = n, i.translator.backendConnector.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, i;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const b = H.createInstance();
b.createInstance = H.createInstance;
b.createInstance;
b.dir;
b.init;
b.loadResources;
b.reloadResources;
b.use;
b.changeLanguage;
b.getFixedT;
const Te = b.t;
b.exists;
b.setDefaultNamespace;
b.hasLoadedNamespace;
b.loadNamespaces;
b.loadLanguages;
const Ue = () => /* @__PURE__ */ se.jsx(ye, { children: /* @__PURE__ */ se.jsx(
  be.div,
  {
    initial: {
      scale: 0
    },
    animate: {
      scale: 1
    },
    transition: { delay: 0.2 },
    style: { height: "2em" },
    children: Te("not-found.title")
  }
) });
export {
  Ue as default
};
