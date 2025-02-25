var A, v, ve, ye, H, ue, ge, be, ke, Y, G, J, $e, M = {}, we = [], Le = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, B = Array.isArray;
function w(_, e) {
  for (var t in e) _[t] = e[t];
  return _;
}
function Z(_) {
  _ && _.parentNode && _.parentNode.removeChild(_);
}
function K(_, e, t) {
  var n, u, r, i = {};
  for (r in e) r == "key" ? n = e[r] : r == "ref" ? u = e[r] : i[r] = e[r];
  if (arguments.length > 2 && (i.children = arguments.length > 3 ? A.call(arguments, 2) : t), typeof _ == "function" && _.defaultProps != null) for (r in _.defaultProps) i[r] === void 0 && (i[r] = _.defaultProps[r]);
  return N(_, i, n, u, null);
}
function N(_, e, t, n, u) {
  var r = { type: _, props: e, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: u ?? ++ve, __i: -1, __u: 0 };
  return u == null && v.vnode != null && v.vnode(r), r;
}
function We() {
  return { current: null };
}
function L(_) {
  return _.children;
}
function F(_, e) {
  this.props = _, this.context = e;
}
function S(_, e) {
  if (e == null) return _.__ ? S(_.__, _.__i + 1) : null;
  for (var t; e < _.__k.length; e++) if ((t = _.__k[e]) != null && t.__e != null) return t.__e;
  return typeof _.type == "function" ? S(_) : null;
}
function Ce(_) {
  var e, t;
  if ((_ = _.__) != null && _.__c != null) {
    for (_.__e = _.__c.base = null, e = 0; e < _.__k.length; e++) if ((t = _.__k[e]) != null && t.__e != null) {
      _.__e = _.__c.base = t.__e;
      break;
    }
    return Ce(_);
  }
}
function Q(_) {
  (!_.__d && (_.__d = !0) && H.push(_) && !q.__r++ || ue !== v.debounceRendering) && ((ue = v.debounceRendering) || ge)(q);
}
function q() {
  for (var _, e, t, n, u, r, i, c = 1; H.length; ) H.length > c && H.sort(be), _ = H.shift(), c = H.length, _.__d && (t = void 0, u = (n = (e = _).__v).__e, r = [], i = [], e.__P && ((t = w({}, n)).__v = n.__v + 1, v.vnode && v.vnode(t), ee(e.__P, t, n, e.__n, e.__P.namespaceURI, 32 & n.__u ? [u] : null, r, u ?? S(n), !!(32 & n.__u), i), t.__v = n.__v, t.__.__k[t.__i] = t, Se(r, t, i), t.__e != u && Ce(t)));
  q.__r = 0;
}
function xe(_, e, t, n, u, r, i, c, f, l, a) {
  var o, p, s, g, k, b, d = n && n.__k || we, m = e.length;
  for (f = Ie(t, e, d, f, m), o = 0; o < m; o++) (s = t.__k[o]) != null && (p = s.__i === -1 ? M : d[s.__i] || M, s.__i = o, b = ee(_, s, p, u, r, i, c, f, l, a), g = s.__e, s.ref && p.ref != s.ref && (p.ref && _e(p.ref, null, s), a.push(s.ref, s.__c || g, s)), k == null && g != null && (k = g), 4 & s.__u || p.__k === s.__k ? f = He(s, f, _) : typeof s.type == "function" && b !== void 0 ? f = b : g && (f = g.nextSibling), s.__u &= -7);
  return t.__e = k, f;
}
function Ie(_, e, t, n, u) {
  var r, i, c, f, l, a = t.length, o = a, p = 0;
  for (_.__k = new Array(u), r = 0; r < u; r++) (i = e[r]) != null && typeof i != "boolean" && typeof i != "function" ? (f = r + p, (i = _.__k[r] = typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? N(null, i, null, null, null) : B(i) ? N(L, { children: i }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? N(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i).__ = _, i.__b = _.__b + 1, c = null, (l = i.__i = Oe(i, t, f, o)) !== -1 && (o--, (c = t[l]) && (c.__u |= 2)), c == null || c.__v === null ? (l == -1 && p--, typeof i.type != "function" && (i.__u |= 4)) : l != f && (l == f - 1 ? p-- : l == f + 1 ? p++ : (l > f ? p-- : p++, i.__u |= 4))) : _.__k[r] = null;
  if (o) for (r = 0; r < a; r++) (c = t[r]) != null && !(2 & c.__u) && (c.__e == n && (n = S(c)), Ee(c, c));
  return n;
}
function He(_, e, t) {
  var n, u;
  if (typeof _.type == "function") {
    for (n = _.__k, u = 0; n && u < n.length; u++) n[u] && (n[u].__ = _, e = He(n[u], e, t));
    return e;
  }
  _.__e != e && (e && _.type && !t.contains(e) && (e = S(_)), t.insertBefore(_.__e, e || null), e = _.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function Pe(_, e) {
  return e = e || [], _ == null || typeof _ == "boolean" || (B(_) ? _.some(function(t) {
    Pe(t, e);
  }) : e.push(_)), e;
}
function Oe(_, e, t, n) {
  var u, r, i = _.key, c = _.type, f = e[t];
  if (f === null || f && i == f.key && c === f.type && !(2 & f.__u)) return t;
  if (n > (f != null && !(2 & f.__u) ? 1 : 0)) for (u = t - 1, r = t + 1; u >= 0 || r < e.length; ) {
    if (u >= 0) {
      if ((f = e[u]) && !(2 & f.__u) && i == f.key && c === f.type) return u;
      u--;
    }
    if (r < e.length) {
      if ((f = e[r]) && !(2 & f.__u) && i == f.key && c === f.type) return r;
      r++;
    }
  }
  return -1;
}
function ie(_, e, t) {
  e[0] == "-" ? _.setProperty(e, t ?? "") : _[e] = t == null ? "" : typeof t != "number" || Le.test(e) ? t : t + "px";
}
function R(_, e, t, n, u) {
  var r;
  e: if (e == "style") if (typeof t == "string") _.style.cssText = t;
  else {
    if (typeof n == "string" && (_.style.cssText = n = ""), n) for (e in n) t && e in t || ie(_.style, e, "");
    if (t) for (e in t) n && t[e] === n[e] || ie(_.style, e, t[e]);
  }
  else if (e[0] == "o" && e[1] == "n") r = e != (e = e.replace(ke, "$1")), e = e.toLowerCase() in _ || e == "onFocusOut" || e == "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), _.l || (_.l = {}), _.l[e + r] = t, t ? n ? t.u = n.u : (t.u = Y, _.addEventListener(e, r ? J : G, r)) : _.removeEventListener(e, r ? J : G, r);
  else {
    if (u == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in _) try {
      _[e] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && e[4] != "-" ? _.removeAttribute(e) : _.setAttribute(e, e == "popover" && t == 1 ? "" : t));
  }
}
function le(_) {
  return function(e) {
    if (this.l) {
      var t = this.l[e.type + _];
      if (e.t == null) e.t = Y++;
      else if (e.t < t.u) return;
      return t(v.event ? v.event(e) : e);
    }
  };
}
function ee(_, e, t, n, u, r, i, c, f, l) {
  var a, o, p, s, g, k, b, d, m, T, x, W, U, re, I, oe, O, V, $ = e.type;
  if (e.constructor !== void 0) return null;
  128 & t.__u && (f = !!(32 & t.__u), r = [c = e.__e = t.__e]), (a = v.__b) && a(e);
  e: if (typeof $ == "function") try {
    if (d = e.props, m = "prototype" in $ && $.prototype.render, T = (a = $.contextType) && n[a.__c], x = a ? T ? T.props.value : a.__ : n, t.__c ? b = (o = e.__c = t.__c).__ = o.__E : (m ? e.__c = o = new $(d, x) : (e.__c = o = new F(d, x), o.constructor = $, o.render = je), T && T.sub(o), o.props = d, o.state || (o.state = {}), o.context = x, o.__n = n, p = o.__d = !0, o.__h = [], o._sb = []), m && o.__s == null && (o.__s = o.state), m && $.getDerivedStateFromProps != null && (o.__s == o.state && (o.__s = w({}, o.__s)), w(o.__s, $.getDerivedStateFromProps(d, o.__s))), s = o.props, g = o.state, o.__v = e, p) m && $.getDerivedStateFromProps == null && o.componentWillMount != null && o.componentWillMount(), m && o.componentDidMount != null && o.__h.push(o.componentDidMount);
    else {
      if (m && $.getDerivedStateFromProps == null && d !== s && o.componentWillReceiveProps != null && o.componentWillReceiveProps(d, x), !o.__e && (o.shouldComponentUpdate != null && o.shouldComponentUpdate(d, o.__s, x) === !1 || e.__v == t.__v)) {
        for (e.__v != t.__v && (o.props = d, o.state = o.__s, o.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.some(function(D) {
          D && (D.__ = e);
        }), W = 0; W < o._sb.length; W++) o.__h.push(o._sb[W]);
        o._sb = [], o.__h.length && i.push(o);
        break e;
      }
      o.componentWillUpdate != null && o.componentWillUpdate(d, o.__s, x), m && o.componentDidUpdate != null && o.__h.push(function() {
        o.componentDidUpdate(s, g, k);
      });
    }
    if (o.context = x, o.props = d, o.__P = _, o.__e = !1, U = v.__r, re = 0, m) {
      for (o.state = o.__s, o.__d = !1, U && U(e), a = o.render(o.props, o.state, o.context), I = 0; I < o._sb.length; I++) o.__h.push(o._sb[I]);
      o._sb = [];
    } else do
      o.__d = !1, U && U(e), a = o.render(o.props, o.state, o.context), o.state = o.__s;
    while (o.__d && ++re < 25);
    o.state = o.__s, o.getChildContext != null && (n = w(w({}, n), o.getChildContext())), m && !p && o.getSnapshotBeforeUpdate != null && (k = o.getSnapshotBeforeUpdate(s, g)), O = (oe = a != null && a.type === L && a.key == null) ? a.props.children : a, oe && (a.props.children = null), c = xe(_, B(O) ? O : [O], e, t, n, u, r, i, c, f, l), o.base = e.__e, e.__u &= -161, o.__h.length && i.push(o), b && (o.__E = o.__ = null);
  } catch (D) {
    if (e.__v = null, f || r != null) if (D.then) {
      for (e.__u |= f ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
      r[r.indexOf(c)] = null, e.__e = c;
    } else for (V = r.length; V--; ) Z(r[V]);
    else e.__e = t.__e, e.__k = t.__k;
    v.__e(D, e, t);
  }
  else r == null && e.__v == t.__v ? (e.__k = t.__k, e.__e = t.__e) : c = e.__e = Re(t.__e, e, t, n, u, r, i, f, l);
  return (a = v.diffed) && a(e), 128 & e.__u ? void 0 : c;
}
function Se(_, e, t) {
  for (var n = 0; n < t.length; n++) _e(t[n], t[++n], t[++n]);
  v.__c && v.__c(e, _), _.some(function(u) {
    try {
      _ = u.__h, u.__h = [], _.some(function(r) {
        r.call(u);
      });
    } catch (r) {
      v.__e(r, u.__v);
    }
  });
}
function Re(_, e, t, n, u, r, i, c, f) {
  var l, a, o, p, s, g, k, b = t.props, d = e.props, m = e.type;
  if (m == "svg" ? u = "http://www.w3.org/2000/svg" : m == "math" ? u = "http://www.w3.org/1998/Math/MathML" : u || (u = "http://www.w3.org/1999/xhtml"), r != null) {
    for (l = 0; l < r.length; l++) if ((s = r[l]) && "setAttribute" in s == !!m && (m ? s.localName == m : s.nodeType == 3)) {
      _ = s, r[l] = null;
      break;
    }
  }
  if (_ == null) {
    if (m == null) return document.createTextNode(d);
    _ = document.createElementNS(u, m, d.is && d), c && (v.__m && v.__m(e, r), c = !1), r = null;
  }
  if (m === null) b === d || c && _.data === d || (_.data = d);
  else {
    if (r = r && A.call(_.childNodes), b = t.props || M, !c && r != null) for (b = {}, l = 0; l < _.attributes.length; l++) b[(s = _.attributes[l]).name] = s.value;
    for (l in b) if (s = b[l], l != "children") {
      if (l == "dangerouslySetInnerHTML") o = s;
      else if (!(l in d)) {
        if (l == "value" && "defaultValue" in d || l == "checked" && "defaultChecked" in d) continue;
        R(_, l, null, s, u);
      }
    }
    for (l in d) s = d[l], l == "children" ? p = s : l == "dangerouslySetInnerHTML" ? a = s : l == "value" ? g = s : l == "checked" ? k = s : c && typeof s != "function" || b[l] === s || R(_, l, s, b[l], u);
    if (a) c || o && (a.__html === o.__html || a.__html === _.innerHTML) || (_.innerHTML = a.__html), e.__k = [];
    else if (o && (_.innerHTML = ""), xe(e.type === "template" ? _.content : _, B(p) ? p : [p], e, t, n, m == "foreignObject" ? "http://www.w3.org/1999/xhtml" : u, r, i, r ? r[0] : t.__k && S(t, 0), c, f), r != null) for (l = r.length; l--; ) Z(r[l]);
    c || (l = "value", m == "progress" && g == null ? _.removeAttribute("value") : g !== void 0 && (g !== _[l] || m == "progress" && !g || m == "option" && g !== b[l]) && R(_, l, g, b[l], u), l = "checked", k !== void 0 && k !== _[l] && R(_, l, k, b[l], u));
  }
  return _;
}
function _e(_, e, t) {
  try {
    if (typeof _ == "function") {
      var n = typeof _.__u == "function";
      n && _.__u(), n && e == null || (_.__u = _(e));
    } else _.current = e;
  } catch (u) {
    v.__e(u, t);
  }
}
function Ee(_, e, t) {
  var n, u;
  if (v.unmount && v.unmount(_), (n = _.ref) && (n.current && n.current !== _.__e || _e(n, null, e)), (n = _.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (r) {
      v.__e(r, e);
    }
    n.base = n.__P = null;
  }
  if (n = _.__k) for (u = 0; u < n.length; u++) n[u] && Ee(n[u], e, t || typeof _.type != "function");
  t || Z(_.__e), _.__c = _.__ = _.__e = void 0;
}
function je(_, e, t) {
  return this.constructor(_, t);
}
function Te(_, e, t) {
  var n, u, r, i;
  e == document && (e = document.documentElement), v.__ && v.__(_, e), u = (n = typeof t == "function") ? null : t && t.__k || e.__k, r = [], i = [], ee(e, _ = (!n && t || e).__k = K(L, null, [_]), u || M, M, e.namespaceURI, !n && t ? [t] : u ? null : e.firstChild ? A.call(e.childNodes) : null, r, !n && t ? t : u ? u.__e : e.firstChild, n, i), Se(r, _, i);
}
function Ue(_, e) {
  Te(_, e, Ue);
}
function qe(_, e, t) {
  var n, u, r, i, c = w({}, _.props);
  for (r in _.type && _.type.defaultProps && (i = _.type.defaultProps), e) r == "key" ? n = e[r] : r == "ref" ? u = e[r] : c[r] = e[r] === void 0 && i !== void 0 ? i[r] : e[r];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? A.call(arguments, 2) : t), N(_.type, c, n || _.key, u || _.ref, null);
}
function Be(_) {
  function e(t) {
    var n, u;
    return this.getChildContext || (n = /* @__PURE__ */ new Set(), (u = {})[e.__c] = this, this.getChildContext = function() {
      return u;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(r) {
      this.props.value !== r.value && n.forEach(function(i) {
        i.__e = !0, Q(i);
      });
    }, this.sub = function(r) {
      n.add(r);
      var i = r.componentWillUnmount;
      r.componentWillUnmount = function() {
        n && n.delete(r), i && i.call(r);
      };
    }), t.children;
  }
  return e.__c = "__cC" + $e++, e.__ = _, e.Provider = e.__l = (e.Consumer = function(t, n) {
    return t.children(n);
  }).contextType = e, e;
}
A = we.slice, v = { __e: function(_, e, t, n) {
  for (var u, r, i; e = e.__; ) if ((u = e.__c) && !u.__) try {
    if ((r = u.constructor) && r.getDerivedStateFromError != null && (u.setState(r.getDerivedStateFromError(_)), i = u.__d), u.componentDidCatch != null && (u.componentDidCatch(_, n || {}), i = u.__d), i) return u.__E = u;
  } catch (c) {
    _ = c;
  }
  throw _;
} }, ve = 0, ye = function(_) {
  return _ != null && _.constructor == null;
}, F.prototype.setState = function(_, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = w({}, this.state), typeof _ == "function" && (_ = _(w({}, t), this.props)), _ && w(t, _), _ != null && this.__v && (e && this._sb.push(e), Q(this));
}, F.prototype.forceUpdate = function(_) {
  this.__v && (this.__e = !0, _ && this.__h.push(_), Q(this));
}, F.prototype.render = L, H = [], ge = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, be = function(_, e) {
  return _.__v.__b - e.__v.__b;
}, q.__r = 0, ke = /(PointerCapture)$|Capture$/i, Y = 0, G = le(!1), J = le(!0), $e = 0;
const __ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: F,
  Fragment: L,
  cloneElement: qe,
  createContext: Be,
  createElement: K,
  createRef: We,
  h: K,
  hydrate: Ue,
  get isValidElement() {
    return ye;
  },
  get options() {
    return v;
  },
  render: Te,
  toChildArray: Pe
}, Symbol.toStringTag, { value: "Module" }));
var C, h, z, ce, E = 0, De = [], y = v, fe = y.__b, se = y.__r, ae = y.diffed, pe = y.__c, he = y.unmount, de = y.__;
function P(_, e) {
  y.__h && y.__h(h, _, E || e), E = 0;
  var t = h.__H || (h.__H = { __: [], __h: [] });
  return _ >= t.__.length && t.__.push({}), t.__[_];
}
function Ne(_) {
  return E = 1, Fe(Ae, _);
}
function Fe(_, e, t) {
  var n = P(C++, 2);
  if (n.t = _, !n.__c && (n.__ = [t ? t(e) : Ae(void 0, e), function(c) {
    var f = n.__N ? n.__N[0] : n.__[0], l = n.t(f, c);
    f !== l && (n.__N = [l, n.__[1]], n.__c.setState({}));
  }], n.__c = h, !h.__f)) {
    var u = function(c, f, l) {
      if (!n.__c.__H) return !0;
      var a = n.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (a.every(function(p) {
        return !p.__N;
      })) return !r || r.call(this, c, f, l);
      var o = n.__c.props !== c;
      return a.forEach(function(p) {
        if (p.__N) {
          var s = p.__[0];
          p.__ = p.__N, p.__N = void 0, s !== p.__[0] && (o = !0);
        }
      }), r && r.call(this, c, f, l) || o;
    };
    h.__f = !0;
    var r = h.shouldComponentUpdate, i = h.componentWillUpdate;
    h.componentWillUpdate = function(c, f, l) {
      if (this.__e) {
        var a = r;
        r = void 0, u(c, f, l), r = a;
      }
      i && i.call(this, c, f, l);
    }, h.shouldComponentUpdate = u;
  }
  return n.__N || n.__;
}
function Ve(_, e) {
  var t = P(C++, 3);
  !y.__s && ne(t.__H, e) && (t.__ = _, t.u = e, h.__H.__h.push(t));
}
function Me(_, e) {
  var t = P(C++, 4);
  !y.__s && ne(t.__H, e) && (t.__ = _, t.u = e, h.__h.push(t));
}
function ze(_) {
  return E = 5, te(function() {
    return { current: _ };
  }, []);
}
function Ge(_, e, t) {
  E = 6, Me(function() {
    if (typeof _ == "function") {
      var n = _(e());
      return function() {
        _(null), n && typeof n == "function" && n();
      };
    }
    if (_) return _.current = e(), function() {
      return _.current = null;
    };
  }, t == null ? t : t.concat(_));
}
function te(_, e) {
  var t = P(C++, 7);
  return ne(t.__H, e) && (t.__ = _(), t.__H = e, t.__h = _), t.__;
}
function Je(_, e) {
  return E = 8, te(function() {
    return _;
  }, e);
}
function Ke(_) {
  var e = h.context[_.__c], t = P(C++, 9);
  return t.c = _, e ? (t.__ == null && (t.__ = !0, e.sub(h)), e.props.value) : _.__;
}
function Qe(_, e) {
  y.useDebugValue && y.useDebugValue(e ? e(_) : _);
}
function Xe(_) {
  var e = P(C++, 10), t = Ne();
  return e.__ = _, h.componentDidCatch || (h.componentDidCatch = function(n, u) {
    e.__ && e.__(n, u), t[1](n);
  }), [t[0], function() {
    t[1](void 0);
  }];
}
function Ye() {
  var _ = P(C++, 11);
  if (!_.__) {
    for (var e = h.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var t = e.__m || (e.__m = [0, 0]);
    _.__ = "P" + t[0] + "-" + t[1]++;
  }
  return _.__;
}
function Ze() {
  for (var _; _ = De.shift(); ) if (_.__P && _.__H) try {
    _.__H.__h.forEach(j), _.__H.__h.forEach(X), _.__H.__h = [];
  } catch (e) {
    _.__H.__h = [], y.__e(e, _.__v);
  }
}
y.__b = function(_) {
  h = null, fe && fe(_);
}, y.__ = function(_, e) {
  _ && e.__k && e.__k.__m && (_.__m = e.__k.__m), de && de(_, e);
}, y.__r = function(_) {
  se && se(_), C = 0;
  var e = (h = _.__c).__H;
  e && (z === h ? (e.__h = [], h.__h = [], e.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (e.__h.forEach(j), e.__h.forEach(X), e.__h = [], C = 0)), z = h;
}, y.diffed = function(_) {
  ae && ae(_);
  var e = _.__c;
  e && e.__H && (e.__H.__h.length && (De.push(e) !== 1 && ce === y.requestAnimationFrame || ((ce = y.requestAnimationFrame) || e_)(Ze)), e.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), z = h = null;
}, y.__c = function(_, e) {
  e.some(function(t) {
    try {
      t.__h.forEach(j), t.__h = t.__h.filter(function(n) {
        return !n.__ || X(n);
      });
    } catch (n) {
      e.some(function(u) {
        u.__h && (u.__h = []);
      }), e = [], y.__e(n, t.__v);
    }
  }), pe && pe(_, e);
}, y.unmount = function(_) {
  he && he(_);
  var e, t = _.__c;
  t && t.__H && (t.__H.__.forEach(function(n) {
    try {
      j(n);
    } catch (u) {
      e = u;
    }
  }), t.__H = void 0, e && y.__e(e, t.__v));
};
var me = typeof requestAnimationFrame == "function";
function e_(_) {
  var e, t = function() {
    clearTimeout(n), me && cancelAnimationFrame(e), setTimeout(_);
  }, n = setTimeout(t, 100);
  me && (e = requestAnimationFrame(t));
}
function j(_) {
  var e = h, t = _.__c;
  typeof t == "function" && (_.__c = void 0, t()), h = e;
}
function X(_) {
  var e = h;
  _.__c = _.__(), h = e;
}
function ne(_, e) {
  return !_ || _.length !== e.length || e.some(function(t, n) {
    return t !== _[n];
  });
}
function Ae(_, e) {
  return typeof e == "function" ? e(_) : e;
}
const t_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useCallback: Je,
  useContext: Ke,
  useDebugValue: Qe,
  useEffect: Ve,
  useErrorBoundary: Xe,
  useId: Ye,
  useImperativeHandle: Ge,
  useLayoutEffect: Me,
  useMemo: te,
  useReducer: Fe,
  useRef: ze,
  useState: Ne
}, Symbol.toStringTag, { value: "Module" }));
export {
  Te as D,
  K as _,
  Ne as d,
  t_ as h,
  __ as p,
  Ve as y
};
