import { M as Pe, j as D, u as Le, P as $e, k as Ne, l as Ee, L as je, m as ke } from "./index-DK26g4Jf.js";
import * as se from "react";
import { useId as we, useRef as Y, useContext as ve, useInsertionEffect as Fe, useCallback as Ae, useMemo as ee, Children as De, isValidElement as Ie, useState as oe } from "react";
class Te extends se.Component {
  getSnapshotBeforeUpdate(e) {
    const t = this.props.childRef.current;
    if (t && e.isPresent && !this.props.isPresent) {
      const s = t.offsetParent, n = s instanceof HTMLElement && s.offsetWidth || 0, i = this.props.sizeRef.current;
      i.height = t.offsetHeight || 0, i.width = t.offsetWidth || 0, i.top = t.offsetTop, i.left = t.offsetLeft, i.right = n - i.width - i.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function Ve({ children: a, isPresent: e, anchorX: t }) {
  const s = we(), n = Y(null), i = Y({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: r } = ve(Pe);
  return Fe(() => {
    const { width: l, height: o, top: u, left: f, right: d } = i.current;
    if (e || !n.current || !l || !o)
      return;
    const h = t === "left" ? `left: ${f}` : `right: ${d}`;
    n.current.dataset.motionPopId = s;
    const g = document.createElement("style");
    return r && (g.nonce = r), document.head.appendChild(g), g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${o}px !important;
            ${h}px !important;
            top: ${u}px !important;
          }
        `), () => {
      document.head.removeChild(g);
    };
  }, [e]), D.jsx(Te, { isPresent: e, childRef: n, sizeRef: i, children: se.cloneElement(a, { ref: n }) });
}
const Ke = ({ children: a, initial: e, isPresent: t, onExitComplete: s, custom: n, presenceAffectsLayout: i, mode: r, anchorX: l }) => {
  const o = Le(Me), u = we(), f = Ae((h) => {
    o.set(h, !0);
    for (const g of o.values())
      if (!g)
        return;
    s && s();
  }, [o, s]), d = ee(
    () => ({
      id: u,
      initial: e,
      isPresent: t,
      custom: n,
      onExitComplete: f,
      register: (h) => (o.set(h, !1), () => o.delete(h))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    i ? [Math.random(), f] : [t, f]
  );
  return ee(() => {
    o.forEach((h, g) => o.set(g, !1));
  }, [t]), se.useEffect(() => {
    !t && !o.size && s && s();
  }, [t]), r === "popLayout" && (a = D.jsx(Ve, { isPresent: t, anchorX: l, children: a })), D.jsx($e.Provider, { value: d, children: a });
};
function Me() {
  return /* @__PURE__ */ new Map();
}
const J = (a) => a.key || "";
function le(a) {
  const e = [];
  return De.forEach(a, (t) => {
    Ie(t) && e.push(t);
  }), e;
}
const Ue = ({ children: a, custom: e, initial: t = !0, onExitComplete: s, presenceAffectsLayout: n = !0, mode: i = "sync", propagate: r = !1, anchorX: l = "left" }) => {
  const [o, u] = Ne(r), f = ee(() => le(a), [a]), d = r && !o ? [] : f.map(J), h = Y(!0), g = Y(f), c = Le(() => /* @__PURE__ */ new Map()), [m, x] = oe(f), [b, L] = oe(f);
  Ee(() => {
    h.current = !1, g.current = f;
    for (let w = 0; w < b.length; w++) {
      const S = J(b[w]);
      d.includes(S) ? c.delete(S) : c.get(S) !== !0 && c.set(S, !1);
    }
  }, [b, d.length, d.join("-")]);
  const R = [];
  if (f !== m) {
    let w = [...f];
    for (let S = 0; S < b.length; S++) {
      const y = b[S], O = J(y);
      d.includes(O) || (w.splice(S, 0, y), R.push(y));
    }
    i === "wait" && R.length && (w = R), L(le(w)), x(f);
    return;
  }
  process.env.NODE_ENV !== "production" && i === "wait" && b.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: v } = ve(je);
  return D.jsx(D.Fragment, { children: b.map((w) => {
    const S = J(w), y = r && !o ? !1 : f === b || d.includes(S), O = () => {
      if (c.has(S))
        c.set(S, !0);
      else
        return;
      let k = !0;
      c.forEach((A) => {
        A || (k = !1);
      }), k && (v == null || v(), L(g.current), r && (u == null || u()), s && s());
    };
    return D.jsx(Ke, { isPresent: y, initial: !h.current || t ? void 0 : !1, custom: y ? void 0 : e, presenceAffectsLayout: n, mode: i, onExitComplete: y ? void 0 : O, anchorX: l, children: w }, S);
  }) });
}, p = (a) => typeof a == "string", U = () => {
  let a, e;
  const t = new Promise((s, n) => {
    a = s, e = n;
  });
  return t.resolve = a, t.reject = e, t;
}, ue = (a) => a == null ? "" : "" + a, He = (a, e, t) => {
  a.forEach((s) => {
    e[s] && (t[s] = e[s]);
  });
}, ze = /###/g, fe = (a) => a && a.indexOf("###") > -1 ? a.replace(ze, ".") : a, he = (a) => !a || p(a), H = (a, e, t) => {
  const s = p(e) ? e.split(".") : e;
  let n = 0;
  for (; n < s.length - 1; ) {
    if (he(a)) return {};
    const i = fe(s[n]);
    !a[i] && t && (a[i] = new t()), Object.prototype.hasOwnProperty.call(a, i) ? a = a[i] : a = {}, ++n;
  }
  return he(a) ? {} : {
    obj: a,
    k: fe(s[n])
  };
}, de = (a, e, t) => {
  const {
    obj: s,
    k: n
  } = H(a, e, Object);
  if (s !== void 0 || e.length === 1) {
    s[n] = t;
    return;
  }
  let i = e[e.length - 1], r = e.slice(0, e.length - 1), l = H(a, r, Object);
  for (; l.obj === void 0 && r.length; )
    i = `${r[r.length - 1]}.${i}`, r = r.slice(0, r.length - 1), l = H(a, r, Object), l != null && l.obj && typeof l.obj[`${l.k}.${i}`] < "u" && (l.obj = void 0);
  l.obj[`${l.k}.${i}`] = t;
}, Be = (a, e, t, s) => {
  const {
    obj: n,
    k: i
  } = H(a, e, Object);
  n[i] = n[i] || [], n[i].push(t);
}, G = (a, e) => {
  const {
    obj: t,
    k: s
  } = H(a, e);
  if (t && Object.prototype.hasOwnProperty.call(t, s))
    return t[s];
}, Je = (a, e, t) => {
  const s = G(a, t);
  return s !== void 0 ? s : G(e, t);
}, Ce = (a, e, t) => {
  for (const s in e)
    s !== "__proto__" && s !== "constructor" && (s in a ? p(a[s]) || a[s] instanceof String || p(e[s]) || e[s] instanceof String ? t && (a[s] = e[s]) : Ce(a[s], e[s], t) : a[s] = e[s]);
  return a;
}, T = (a) => a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var We = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Ye = (a) => p(a) ? a.replace(/[&<>"'\/]/g, (e) => We[e]) : a;
class Ge {
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
const Qe = [" ", ",", "?", "!", ";"], Xe = new Ge(20), Ze = (a, e, t) => {
  e = e || "", t = t || "";
  const s = Qe.filter((r) => e.indexOf(r) < 0 && t.indexOf(r) < 0);
  if (s.length === 0) return !0;
  const n = Xe.getRegExp(`(${s.map((r) => r === "?" ? "\\?" : r).join("|")})`);
  let i = !n.test(a);
  if (!i) {
    const r = a.indexOf(t);
    r > 0 && !n.test(a.substring(0, r)) && (i = !0);
  }
  return i;
}, te = function(a, e) {
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
}, Q = (a) => a == null ? void 0 : a.replace("_", "-"), qe = {
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
class X {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || qe, this.options = t, this.debug = t.debug;
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
    return n && !this.debug ? null : (p(e[0]) && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new X(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new X(this.logger, e);
  }
}
var j = new X();
class q {
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
class ce extends q {
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
    var u, f;
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, r = n.ignoreJSONStructure !== void 0 ? n.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let l;
    e.indexOf(".") > -1 ? l = e.split(".") : (l = [e, t], s && (Array.isArray(s) ? l.push(...s) : p(s) && i ? l.push(...s.split(i)) : l.push(s)));
    const o = G(this.data, l);
    return !o && !t && !s && e.indexOf(".") > -1 && (e = l[0], t = l[1], s = l.slice(2).join(".")), o || !r || !p(s) ? o : te((f = (u = this.data) == null ? void 0 : u[e]) == null ? void 0 : f[t], s, i);
  }
  addResource(e, t, s, n) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const r = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let l = [e, t];
    s && (l = l.concat(r ? s.split(r) : s)), e.indexOf(".") > -1 && (l = e.split("."), n = t, t = l[1]), this.addNamespaces(t), de(this.data, l, n), i.silent || this.emit("added", e, t, s, n);
  }
  addResources(e, t, s) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const i in s)
      (p(s[i]) || Array.isArray(s[i])) && this.addResource(e, t, i, s[i], {
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
    let o = G(this.data, l) || {};
    r.skipCopy || (s = JSON.parse(JSON.stringify(s))), n ? Ce(o, s, i) : o = {
      ...o,
      ...s
    }, de(this.data, l, o), r.silent || this.emit("added", e, t, s);
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
var Re = {
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
const ge = {}, pe = (a) => !p(a) && typeof a != "boolean" && typeof a != "number";
class Z extends q {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), He(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = j.create("translator");
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
    const r = s && e.indexOf(s) > -1, l = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !Ze(e, s, n);
    if (r && !l) {
      const o = e.match(this.interpolator.nestingRegexp);
      if (o && o.length > 0)
        return {
          key: e,
          namespaces: p(i) ? [i] : i
        };
      const u = e.split(s);
      (s !== n || s === n && this.options.ns.indexOf(u[0]) > -1) && (i = u.shift()), e = u.join(n);
    }
    return {
      key: e,
      namespaces: p(i) ? [i] : i
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
    } = this.extractFromKey(e[e.length - 1], t), o = l[l.length - 1], u = t.lng || this.language, f = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((u == null ? void 0 : u.toLowerCase()) === "cimode") {
      if (f) {
        const P = t.nsSeparator || this.options.nsSeparator;
        return n ? {
          res: `${o}${P}${r}`,
          usedKey: r,
          exactUsedKey: r,
          usedLng: u,
          usedNS: o,
          usedParams: this.getUsedParamsDetails(t)
        } : `${o}${P}${r}`;
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
    let h = d == null ? void 0 : d.res;
    const g = (d == null ? void 0 : d.usedKey) || r, c = (d == null ? void 0 : d.exactUsedKey) || r, m = ["[object Number]", "[object Function]", "[object RegExp]"], x = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, b = !this.i18nFormat || this.i18nFormat.handleAsObject, L = t.count !== void 0 && !p(t.count), R = Z.hasDefaultValue(t), v = L ? this.pluralResolver.getSuffix(u, t.count, t) : "", w = t.ordinal && L ? this.pluralResolver.getSuffix(u, t.count, {
      ordinal: !1
    }) : "", S = L && !t.ordinal && t.count === 0, y = S && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${v}`] || t[`defaultValue${w}`] || t.defaultValue;
    let O = h;
    b && !h && R && (O = y);
    const k = pe(O), A = Object.prototype.toString.apply(O);
    if (b && O && k && m.indexOf(A) < 0 && !(p(x) && Array.isArray(O))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const P = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(g, O, {
          ...t,
          ns: l
        }) : `key '${r} (${this.language})' returned an object instead of string.`;
        return n ? (d.res = P, d.usedParams = this.getUsedParamsDetails(t), d) : P;
      }
      if (i) {
        const P = Array.isArray(O), N = P ? [] : {}, ne = P ? c : g;
        for (const E in O)
          if (Object.prototype.hasOwnProperty.call(O, E)) {
            const F = `${ne}${i}${E}`;
            R && !h ? N[E] = this.translate(F, {
              ...t,
              defaultValue: pe(y) ? y[E] : void 0,
              joinArrays: !1,
              ns: l
            }) : N[E] = this.translate(F, {
              ...t,
              joinArrays: !1,
              ns: l
            }), N[E] === F && (N[E] = O[E]);
          }
        h = N;
      }
    } else if (b && p(x) && Array.isArray(h))
      h = h.join(x), h && (h = this.extendTranslation(h, e, t, s));
    else {
      let P = !1, N = !1;
      !this.isValidLookup(h) && R && (P = !0, h = y), this.isValidLookup(h) || (N = !0, h = r);
      const E = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && N ? void 0 : h, F = R && y !== h && this.options.updateMissing;
      if (N || P || F) {
        if (this.logger.log(F ? "updateKey" : "missingKey", u, o, r, F ? y : h), i) {
          const $ = this.resolve(r, {
            ...t,
            keySeparator: !1
          });
          $ && $.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let K = [];
        const B = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && B && B[0])
          for (let $ = 0; $ < B.length; $++)
            K.push(B[$]);
        else this.options.saveMissingTo === "all" ? K = this.languageUtils.toResolveHierarchy(t.lng || this.language) : K.push(t.lng || this.language);
        const ie = ($, I, M) => {
          var ae;
          const re = R && M !== h ? M : E;
          this.options.missingKeyHandler ? this.options.missingKeyHandler($, o, I, re, F, t) : (ae = this.backendConnector) != null && ae.saveMissing && this.backendConnector.saveMissing($, o, I, re, F, t), this.emit("missingKey", $, o, I, h);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && L ? K.forEach(($) => {
          const I = this.pluralResolver.getSuffixes($, t);
          S && t[`defaultValue${this.options.pluralSeparator}zero`] && I.indexOf(`${this.options.pluralSeparator}zero`) < 0 && I.push(`${this.options.pluralSeparator}zero`), I.forEach((M) => {
            ie([$], r + M, t[`defaultValue${M}`] || y);
          });
        }) : ie(K, r, y));
      }
      h = this.extendTranslation(h, e, t, d, s), N && h === r && this.options.appendNamespaceToMissingKey && (h = `${o}:${r}`), (N || P) && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${o}:${r}` : r, P ? h : void 0));
    }
    return n ? (d.res = h, d.usedParams = this.getUsedParamsDetails(t), d) : h;
  }
  extendTranslation(e, t, s, n, i) {
    var u, f;
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
      const d = p(e) && (((f = s == null ? void 0 : s.interpolation) == null ? void 0 : f.skipOnVariables) !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let h;
      if (d) {
        const c = e.match(this.interpolator.nestingRegexp);
        h = c && c.length;
      }
      let g = s.replace && !p(s.replace) ? s.replace : s;
      if (this.options.interpolation.defaultVariables && (g = {
        ...this.options.interpolation.defaultVariables,
        ...g
      }), e = this.interpolator.interpolate(e, g, s.lng || this.language || n.usedLng, s), d) {
        const c = e.match(this.interpolator.nestingRegexp), m = c && c.length;
        h < m && (s.nest = !1);
      }
      !s.lng && n && n.res && (s.lng = this.language || n.usedLng), s.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var c = arguments.length, m = new Array(c), x = 0; x < c; x++)
          m[x] = arguments[x];
        return (i == null ? void 0 : i[0]) === m[0] && !s.context ? (r.logger.warn(`It seems you are nesting recursively key: ${m[0]} in key: ${t[0]}`), null) : r.translate(...m, t);
      }, s)), s.interpolation && this.interpolator.reset();
    }
    const l = s.postProcess || this.options.postProcess, o = p(l) ? [l] : l;
    return e != null && (o != null && o.length) && s.applyPostProcessor !== !1 && (e = Re.handle(o, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...n,
        usedParams: this.getUsedParamsDetails(s)
      },
      ...s
    } : s, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s, n, i, r, l;
    return p(e) && (e = [e]), e.forEach((o) => {
      if (this.isValidLookup(s)) return;
      const u = this.extractFromKey(o, t), f = u.key;
      n = f;
      let d = u.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const h = t.count !== void 0 && !p(t.count), g = h && !t.ordinal && t.count === 0, c = t.context !== void 0 && (p(t.context) || typeof t.context == "number") && t.context !== "", m = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      d.forEach((x) => {
        var b, L;
        this.isValidLookup(s) || (l = x, !ge[`${m[0]}-${x}`] && ((b = this.utils) != null && b.hasLoadedNamespace) && !((L = this.utils) != null && L.hasLoadedNamespace(l)) && (ge[`${m[0]}-${x}`] = !0, this.logger.warn(`key "${n}" for languages "${m.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((R) => {
          var S;
          if (this.isValidLookup(s)) return;
          r = R;
          const v = [f];
          if ((S = this.i18nFormat) != null && S.addLookupKeys)
            this.i18nFormat.addLookupKeys(v, f, R, x, t);
          else {
            let y;
            h && (y = this.pluralResolver.getSuffix(R, t.count, t));
            const O = `${this.options.pluralSeparator}zero`, k = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (h && (v.push(f + y), t.ordinal && y.indexOf(k) === 0 && v.push(f + y.replace(k, this.options.pluralSeparator)), g && v.push(f + O)), c) {
              const A = `${f}${this.options.contextSeparator}${t.context}`;
              v.push(A), h && (v.push(A + y), t.ordinal && y.indexOf(k) === 0 && v.push(A + y.replace(k, this.options.pluralSeparator)), g && v.push(A + O));
            }
          }
          let w;
          for (; w = v.pop(); )
            this.isValidLookup(s) || (i = w, s = this.getResource(R, x, w, t));
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
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], s = e.replace && !p(e.replace);
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
class me {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = j.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = Q(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = Q(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (p(e) && e.indexOf("-") > -1) {
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
    if (typeof e == "function" && (e = e(t)), p(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let s = e[t];
    return s || (s = e[this.getScriptPartFromCode(t)]), s || (s = e[this.formatLanguageCode(t)]), s || (s = e[this.getLanguagePartFromCode(t)]), s || (s = e.default), s || [];
  }
  toResolveHierarchy(e, t) {
    const s = this.getFallbackCodes(t || this.options.fallbackLng || [], e), n = [], i = (r) => {
      r && (this.isSupportedCode(r) ? n.push(r) : this.logger.warn(`rejecting language code not found in supportedLngs: ${r}`));
    };
    return p(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e))) : p(e) && i(this.formatLanguageCode(e)), s.forEach((r) => {
      n.indexOf(r) < 0 && i(this.formatLanguageCode(r));
    }), n;
  }
}
const xe = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, ye = {
  select: (a) => a === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class _e {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = j.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = Q(e === "dev" ? "en" : e), n = t.ordinal ? "ordinal" : "cardinal", i = JSON.stringify({
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
        return this.logger.error("No Intl support, please use an Intl polyfill!"), ye;
      if (!e.match(/-|_/)) return ye;
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
    return s || (s = this.getRule("dev", t)), s ? s.resolvedOptions().pluralCategories.sort((n, i) => xe[n] - xe[i]).map((n) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${n}`) : [];
  }
  getSuffix(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const n = this.getRule(e, s);
    return n ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${n.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, s));
  }
}
const be = function(a, e, t) {
  let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = Je(a, e, t);
  return !i && n && p(t) && (i = te(a, t, s), i === void 0 && (i = te(e, t, s))), i;
}, _ = (a) => a.replace(/\$/g, "$$$$");
class et {
  constructor() {
    var t;
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = j.create("interpolator"), this.options = e, this.format = ((t = e == null ? void 0 : e.interpolation) == null ? void 0 : t.format) || ((s) => s), this.init(e);
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
      unescapeSuffix: f,
      unescapePrefix: d,
      nestingPrefix: h,
      nestingPrefixEscaped: g,
      nestingSuffix: c,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: x,
      maxReplaces: b,
      alwaysFormat: L
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Ye, this.escapeValue = s !== void 0 ? s : !0, this.useRawValueToEscape = n !== void 0 ? n : !1, this.prefix = i ? T(i) : r || "{{", this.suffix = l ? T(l) : o || "}}", this.formatSeparator = u || ",", this.unescapePrefix = f ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : f || "", this.nestingPrefix = h ? T(h) : g || T("$t("), this.nestingSuffix = c ? T(c) : m || T(")"), this.nestingOptionsSeparator = x || ",", this.maxReplaces = b || 1e3, this.alwaysFormat = L !== void 0 ? L : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, s) => (t == null ? void 0 : t.source) === s ? (t.lastIndex = 0, t) : new RegExp(s, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, s, n) {
    var g;
    let i, r, l;
    const o = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (c) => {
      if (c.indexOf(this.formatSeparator) < 0) {
        const L = be(t, o, c, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(L, void 0, s, {
          ...n,
          ...t,
          interpolationkey: c
        }) : L;
      }
      const m = c.split(this.formatSeparator), x = m.shift().trim(), b = m.join(this.formatSeparator).trim();
      return this.format(be(t, o, x, this.options.keySeparator, this.options.ignoreJSONStructure), b, s, {
        ...n,
        ...t,
        interpolationkey: x
      });
    };
    this.resetRegExp();
    const f = (n == null ? void 0 : n.missingInterpolationHandler) || this.options.missingInterpolationHandler, d = ((g = n == null ? void 0 : n.interpolation) == null ? void 0 : g.skipOnVariables) !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (c) => _(c)
    }, {
      regex: this.regexp,
      safeValue: (c) => this.escapeValue ? _(this.escape(c)) : _(c)
    }].forEach((c) => {
      for (l = 0; i = c.regex.exec(e); ) {
        const m = i[1].trim();
        if (r = u(m), r === void 0)
          if (typeof f == "function") {
            const b = f(e, i, n);
            r = p(b) ? b : "";
          } else if (n && Object.prototype.hasOwnProperty.call(n, m))
            r = "";
          else if (d) {
            r = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${m} for interpolating ${e}`), r = "";
        else !p(r) && !this.useRawValueToEscape && (r = ue(r));
        const x = c.safeValue(r);
        if (e = e.replace(i[0], x), d ? (c.regex.lastIndex += r.length, c.regex.lastIndex -= i[0].length) : c.regex.lastIndex = 0, l++, l >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, i, r;
    const l = (o, u) => {
      const f = this.nestingOptionsSeparator;
      if (o.indexOf(f) < 0) return o;
      const d = o.split(new RegExp(`${f}[ ]*{`));
      let h = `{${d[1]}`;
      o = d[0], h = this.interpolate(h, r);
      const g = h.match(/'/g), c = h.match(/"/g);
      (((g == null ? void 0 : g.length) ?? 0) % 2 === 0 && !c || c.length % 2 !== 0) && (h = h.replace(/'/g, '"'));
      try {
        r = JSON.parse(h), u && (r = {
          ...u,
          ...r
        });
      } catch (m) {
        return this.logger.warn(`failed parsing options string in nesting for key ${o}`, m), `${o}${f}${h}`;
      }
      return r.defaultValue && r.defaultValue.indexOf(this.prefix) > -1 && delete r.defaultValue, o;
    };
    for (; n = this.nestingRegexp.exec(e); ) {
      let o = [];
      r = {
        ...s
      }, r = r.replace && !p(r.replace) ? r.replace : r, r.applyPostProcessor = !1, delete r.defaultValue;
      let u = !1;
      if (n[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(n[1])) {
        const f = n[1].split(this.formatSeparator).map((d) => d.trim());
        n[1] = f.shift(), o = f, u = !0;
      }
      if (i = t(l.call(this, n[1].trim(), r), r), i && n[0] === e && !p(i)) return i;
      p(i) || (i = ue(i)), i || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`), i = ""), u && (i = o.reduce((f, d) => this.format(f, d, s.lng, {
        ...s,
        interpolationkey: n[1].trim()
      }), i.trim())), e = e.replace(n[0], i), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const tt = (a) => {
  let e = a.toLowerCase().trim();
  const t = {};
  if (a.indexOf("(") > -1) {
    const s = a.split("(");
    e = s[0].toLowerCase().trim();
    const n = s[1].substring(0, s[1].length - 1);
    e === "currency" && n.indexOf(":") < 0 ? t.currency || (t.currency = n.trim()) : e === "relativetime" && n.indexOf(":") < 0 ? t.range || (t.range = n.trim()) : n.split(";").forEach((r) => {
      if (r) {
        const [l, ...o] = r.split(":"), u = o.join(":").trim().replace(/^'+|'+$/g, ""), f = l.trim();
        t[f] || (t[f] = u), u === "false" && (t[f] = !1), u === "true" && (t[f] = !0), isNaN(u) || (t[f] = parseInt(u, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, V = (a) => {
  const e = {};
  return (t, s, n) => {
    let i = n;
    n && n.interpolationkey && n.formatParams && n.formatParams[n.interpolationkey] && n[n.interpolationkey] && (i = {
      ...i,
      [n.interpolationkey]: void 0
    });
    const r = s + JSON.stringify(i);
    let l = e[r];
    return l || (l = a(Q(s), n), e[r] = l), l(t);
  };
};
class st {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = j.create("formatter"), this.options = e, this.formats = {
      number: V((t, s) => {
        const n = new Intl.NumberFormat(t, {
          ...s
        });
        return (i) => n.format(i);
      }),
      currency: V((t, s) => {
        const n = new Intl.NumberFormat(t, {
          ...s,
          style: "currency"
        });
        return (i) => n.format(i);
      }),
      datetime: V((t, s) => {
        const n = new Intl.DateTimeFormat(t, {
          ...s
        });
        return (i) => n.format(i);
      }),
      relativetime: V((t, s) => {
        const n = new Intl.RelativeTimeFormat(t, {
          ...s
        });
        return (i) => n.format(i, s.range || "day");
      }),
      list: V((t, s) => {
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
    this.formats[e.toLowerCase().trim()] = V(t);
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
        formatOptions: f
      } = tt(o);
      if (this.formats[u]) {
        let h = l;
        try {
          const g = ((d = n == null ? void 0 : n.formatParams) == null ? void 0 : d[n.interpolationkey]) || {}, c = g.locale || g.lng || n.locale || n.lng || s;
          h = this.formats[u](l, c, {
            ...f,
            ...n,
            ...g
          });
        } catch (g) {
          this.logger.warn(g);
        }
        return h;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return l;
    }, e);
  }
}
const nt = (a, e) => {
  a.pending[e] !== void 0 && (delete a.pending[e], a.pendingCount--);
};
class it extends q {
  constructor(e, t, s) {
    var i, r;
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = s, this.languageUtils = s.languageUtils, this.options = n, this.logger = j.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = n.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = n.maxRetries >= 0 ? n.maxRetries : 5, this.retryTimeout = n.retryTimeout >= 1 ? n.retryTimeout : 350, this.state = {}, this.queue = [], (r = (i = this.backend) == null ? void 0 : i.init) == null || r.call(i, s, n.backend, n);
  }
  queueLoad(e, t, s, n) {
    const i = {}, r = {}, l = {}, o = {};
    return e.forEach((u) => {
      let f = !0;
      t.forEach((d) => {
        const h = `${u}|${d}`;
        !s.reload && this.store.hasResourceBundle(u, d) ? this.state[h] = 2 : this.state[h] < 0 || (this.state[h] === 1 ? r[h] === void 0 && (r[h] = !0) : (this.state[h] = 1, f = !1, r[h] === void 0 && (r[h] = !0), i[h] === void 0 && (i[h] = !0), o[d] === void 0 && (o[d] = !0)));
      }), f || (l[u] = !0);
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
      Be(o.loaded, [i], r), nt(o, e), t && o.errors.push(t), o.pendingCount === 0 && !o.done && (Object.keys(o.loaded).forEach((u) => {
        l[u] || (l[u] = {});
        const f = o.loaded[u];
        f.length && f.forEach((d) => {
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
    const l = (u, f) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const d = this.waitingReads.shift();
        this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
      }
      if (u && f && n < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, s, n + 1, i * 2, r);
        }, i);
        return;
      }
      r(u, f);
    }, o = this.backend[s].bind(this.backend);
    if (o.length === 2) {
      try {
        const u = o(e, t);
        u && typeof u.then == "function" ? u.then((f) => l(null, f)).catch(l) : l(null, u);
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
    p(e) && (e = this.languageUtils.toResolveHierarchy(e)), p(t) && (t = [t]);
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
    var o, u, f, d, h;
    let r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, l = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if ((u = (o = this.services) == null ? void 0 : o.utils) != null && u.hasLoadedNamespace && !((d = (f = this.services) == null ? void 0 : f.utils) != null && d.hasLoadedNamespace(t))) {
      this.logger.warn(`did not save key "${s}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(s == null || s === "")) {
      if ((h = this.backend) != null && h.create) {
        const g = {
          ...r,
          isUpdate: i
        }, c = this.backend.create.bind(this.backend);
        if (c.length < 6)
          try {
            let m;
            c.length === 5 ? m = c(e, t, s, n, g) : m = c(e, t, s, n), m && typeof m.then == "function" ? m.then((x) => l(null, x)).catch(l) : l(null, m);
          } catch (m) {
            l(m);
          }
        else
          c(e, t, s, n, l, g);
      }
      !e || !e[0] || this.store.addResource(e[0], t, s, n);
    }
  }
}
const Se = () => ({
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
    if (typeof a[1] == "object" && (e = a[1]), p(a[1]) && (e.defaultValue = a[1]), p(a[2]) && (e.tDescription = a[2]), typeof a[2] == "object" || typeof a[3] == "object") {
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
}), Oe = (a) => {
  var e, t;
  return p(a.ns) && (a.ns = [a.ns]), p(a.fallbackLng) && (a.fallbackLng = [a.fallbackLng]), p(a.fallbackNS) && (a.fallbackNS = [a.fallbackNS]), ((t = (e = a.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : t.call(e, "cimode")) < 0 && (a.supportedLngs = a.supportedLngs.concat(["cimode"])), typeof a.initImmediate == "boolean" && (a.initAsync = a.initImmediate), a;
}, W = () => {
}, rt = (a) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach((t) => {
    typeof a[t] == "function" && (a[t] = a[t].bind(a));
  });
};
class z extends q {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Oe(e), this.services = {}, this.logger = j, this.modules = {
      external: []
    }, rt(this), t && !this.isInitialized && !e.isClone) {
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
    this.isInitializing = !0, typeof t == "function" && (s = t, t = {}), t.defaultNS == null && t.ns && (p(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const n = Se();
    this.options = {
      ...n,
      ...this.options,
      ...Oe(t)
    }, this.options.interpolation = {
      ...n.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const i = (f) => f ? typeof f == "function" ? new f() : f : null;
    if (!this.options.isClone) {
      this.modules.logger ? j.init(i(this.modules.logger), this.options) : j.init(null, this.options);
      let f;
      this.modules.formatter ? f = this.modules.formatter : f = st;
      const d = new me(this.options);
      this.store = new ce(this.options.resources, this.options);
      const h = this.services;
      h.logger = j, h.resourceStore = this.store, h.languageUtils = d, h.pluralResolver = new _e(d, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), f && (!this.options.interpolation.format || this.options.interpolation.format === n.interpolation.format) && (h.formatter = i(f), h.formatter.init(h, this.options), this.options.interpolation.format = h.formatter.format.bind(h.formatter)), h.interpolator = new et(this.options), h.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, h.backendConnector = new it(i(this.modules.backend), h.resourceStore, h, this.options), h.backendConnector.on("*", function(g) {
        for (var c = arguments.length, m = new Array(c > 1 ? c - 1 : 0), x = 1; x < c; x++)
          m[x - 1] = arguments[x];
        e.emit(g, ...m);
      }), this.modules.languageDetector && (h.languageDetector = i(this.modules.languageDetector), h.languageDetector.init && h.languageDetector.init(h, this.options.detection, this.options)), this.modules.i18nFormat && (h.i18nFormat = i(this.modules.i18nFormat), h.i18nFormat.init && h.i18nFormat.init(this)), this.translator = new Z(this.services, this.options), this.translator.on("*", function(g) {
        for (var c = arguments.length, m = new Array(c > 1 ? c - 1 : 0), x = 1; x < c; x++)
          m[x - 1] = arguments[x];
        e.emit(g, ...m);
      }), this.modules.external.forEach((g) => {
        g.init && g.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, s || (s = W), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const f = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      f.length > 0 && f[0] !== "dev" && (this.options.lng = f[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((f) => {
      this[f] = function() {
        return e.store[f](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((f) => {
      this[f] = function() {
        return e.store[f](...arguments), e;
      };
    });
    const o = U(), u = () => {
      const f = (d, h) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), o.resolve(h), s(d, h);
      };
      if (this.languages && !this.isInitialized) return f(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, f);
    };
    return this.options.resources || !this.options.initAsync ? u() : setTimeout(u, 0), o;
  }
  loadResources(e) {
    var i, r;
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    const n = p(e) ? e : this.language;
    if (typeof e == "function" && (s = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((n == null ? void 0 : n.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return s();
      const l = [], o = (u) => {
        if (!u || u === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(u).forEach((d) => {
          d !== "cimode" && l.indexOf(d) < 0 && l.push(d);
        });
      };
      n ? o(n) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((f) => o(f)), (r = (i = this.options.preload) == null ? void 0 : i.forEach) == null || r.call(i, (u) => o(u)), this.services.backendConnector.load(l, this.options.ns, (u) => {
        !u && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(u);
      });
    } else
      s(null);
  }
  reloadResources(e, t, s) {
    const n = U();
    return typeof e == "function" && (s = e, e = void 0), typeof t == "function" && (s = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), s || (s = W), this.services.backendConnector.reload(e, t, (i) => {
      n.resolve(), s(i);
    }), n;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Re.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
      var f, d;
      !e && !o && this.services.languageDetector && (o = []);
      const u = p(o) ? o : this.services.languageUtils.getBestMatchFromCodes(o);
      u && (this.language || i(u), this.translator.language || this.translator.changeLanguage(u), (d = (f = this.services.languageDetector) == null ? void 0 : f.cacheUserLanguage) == null || d.call(f, u)), this.loadResources(u, (h) => {
        r(h, u);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? l(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(l) : this.services.languageDetector.detect(l) : l(e), n;
  }
  getFixedT(e, t, s) {
    var n = this;
    const i = function(r, l) {
      let o;
      if (typeof l != "object") {
        for (var u = arguments.length, f = new Array(u > 2 ? u - 2 : 0), d = 2; d < u; d++)
          f[d - 2] = arguments[d];
        o = n.options.overloadTranslationOptionHandler([r, l].concat(f));
      } else
        o = {
          ...l
        };
      o.lng = o.lng || i.lng, o.lngs = o.lngs || i.lngs, o.ns = o.ns || i.ns, o.keyPrefix !== "" && (o.keyPrefix = o.keyPrefix || s || i.keyPrefix);
      const h = n.options.keySeparator || ".";
      let g;
      return o.keyPrefix && Array.isArray(r) ? g = r.map((c) => `${o.keyPrefix}${h}${c}`) : g = o.keyPrefix ? `${o.keyPrefix}${h}${r}` : r, n.t(g, o);
    };
    return p(e) ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = s, i;
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
    return this.options.ns ? (p(e) && (e = [e]), e.forEach((n) => {
      this.options.ns.indexOf(n) < 0 && this.options.ns.push(n);
    }), this.loadResources((n) => {
      s.resolve(), t && t(n);
    }), s) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const s = U();
    p(e) && (e = [e]);
    const n = this.options.preload || [], i = e.filter((r) => n.indexOf(r) < 0 && this.services.languageUtils.isSupportedCode(r));
    return i.length ? (this.options.preload = n.concat(i), this.loadResources((r) => {
      s.resolve(), t && t(r);
    }), s) : (t && t(), Promise.resolve());
  }
  dir(e) {
    var n, i;
    if (e || (e = this.resolvedLanguage || (((n = this.languages) == null ? void 0 : n.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], s = ((i = this.services) == null ? void 0 : i.languageUtils) || new me(Se());
    return t.indexOf(s.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new z(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const n = {
      ...this.options,
      ...e,
      isClone: !0
    }, i = new z(n);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (i.logger = i.logger.clone(e)), ["store", "services", "language"].forEach((l) => {
      i[l] = this[l];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, s) {
      const l = Object.keys(this.store.data).reduce((o, u) => (o[u] = {
        ...this.store.data[u]
      }, Object.keys(o[u]).reduce((f, d) => (f[d] = {
        ...o[u][d]
      }, f), {})), {});
      i.store = new ce(l, n), i.services.resourceStore = i.store;
    }
    return i.translator = new Z(i.services, n), i.translator.on("*", function(l) {
      for (var o = arguments.length, u = new Array(o > 1 ? o - 1 : 0), f = 1; f < o; f++)
        u[f - 1] = arguments[f];
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
const C = z.createInstance();
C.createInstance = z.createInstance;
C.createInstance;
C.dir;
C.init;
C.loadResources;
C.reloadResources;
C.use;
C.changeLanguage;
C.getFixedT;
const at = C.t;
C.exists;
C.setDefaultNamespace;
C.hasLoadedNamespace;
C.loadNamespaces;
C.loadLanguages;
const ut = () => /* @__PURE__ */ D.jsx(Ue, { children: /* @__PURE__ */ D.jsx(
  ke.div,
  {
    initial: {
      scale: 0
    },
    animate: {
      scale: 1
    },
    transition: { delay: 0.2 },
    style: { height: "2em" },
    children: at("not-found.title")
  }
) });
export {
  ut as default
};
