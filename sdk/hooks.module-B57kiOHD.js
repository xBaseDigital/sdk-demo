var A, v, ve, ye, H, ue, ge, G, be, Z, J, K, ke, M = {}, $e = [], Ae = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, q = Array.isArray;
function w(_, e) {
  for (var t in e) _[t] = e[t];
  return _;
}
function ee(_) {
  _ && _.parentNode && _.parentNode.removeChild(_);
}
function Q(_, e, t) {
  var n, u, r, i = {};
  for (r in e) r == "key" ? n = e[r] : r == "ref" ? u = e[r] : i[r] = e[r];
  if (arguments.length > 2 && (i.children = arguments.length > 3 ? A.call(arguments, 2) : t), typeof _ == "function" && _.defaultProps != null) for (r in _.defaultProps) i[r] === void 0 && (i[r] = _.defaultProps[r]);
  return N(_, i, n, u, null);
}
function N(_, e, t, n, u) {
  var r = { type: _, props: e, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: u ?? ++ve, __i: -1, __u: 0 };
  return u == null && v.vnode != null && v.vnode(r), r;
}
function Le() {
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
function we(_) {
  var e, t;
  if ((_ = _.__) != null && _.__c != null) {
    for (_.__e = _.__c.base = null, e = 0; e < _.__k.length; e++) if ((t = _.__k[e]) != null && t.__e != null) {
      _.__e = _.__c.base = t.__e;
      break;
    }
    return we(_);
  }
}
function X(_) {
  (!_.__d && (_.__d = !0) && H.push(_) && !j.__r++ || ue !== v.debounceRendering) && ((ue = v.debounceRendering) || ge)(j);
}
function j() {
  var _, e, t, n, u, r, i, l;
  for (H.sort(G); _ = H.shift(); ) _.__d && (e = H.length, n = void 0, r = (u = (t = _).__v).__e, i = [], l = [], t.__P && ((n = w({}, u)).__v = u.__v + 1, v.vnode && v.vnode(n), _e(t.__P, n, u, t.__n, t.__P.namespaceURI, 32 & u.__u ? [r] : null, i, r ?? S(u), !!(32 & u.__u), l), n.__v = u.__v, n.__.__k[n.__i] = n, Pe(i, n, l), n.__e != r && we(n)), H.length > e && H.sort(G));
  j.__r = 0;
}
function Ce(_, e, t, n, u, r, i, l, f, c, p) {
  var o, a, s, g, k, b, d = n && n.__k || $e, m = e.length;
  for (f = We(t, e, d, f, m), o = 0; o < m; o++) (s = t.__k[o]) != null && (a = s.__i === -1 ? M : d[s.__i] || M, s.__i = o, b = _e(_, s, a, u, r, i, l, f, c, p), g = s.__e, s.ref && a.ref != s.ref && (a.ref && te(a.ref, null, s), p.push(s.ref, s.__c || g, s)), k == null && g != null && (k = g), 4 & s.__u || a.__k === s.__k ? f = xe(s, f, _) : typeof s.type == "function" && b !== void 0 ? f = b : g && (f = g.nextSibling), s.__u &= -7);
  return t.__e = k, f;
}
function We(_, e, t, n, u) {
  var r, i, l, f, c, p = t.length, o = p, a = 0;
  for (_.__k = new Array(u), r = 0; r < u; r++) (i = e[r]) != null && typeof i != "boolean" && typeof i != "function" ? (f = r + a, (i = _.__k[r] = typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? N(null, i, null, null, null) : q(i) ? N(L, { children: i }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? N(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i).__ = _, i.__b = _.__b + 1, l = null, (c = i.__i = Ie(i, t, f, o)) !== -1 && (o--, (l = t[c]) && (l.__u |= 2)), l == null || l.__v === null ? (c == -1 && a--, typeof i.type != "function" && (i.__u |= 4)) : c != f && (c == f - 1 ? a-- : c == f + 1 ? a++ : (c > f ? a-- : a++, i.__u |= 4))) : _.__k[r] = null;
  if (o) for (r = 0; r < p; r++) (l = t[r]) != null && !(2 & l.__u) && (l.__e == n && (n = S(l)), Se(l, l));
  return n;
}
function xe(_, e, t) {
  var n, u;
  if (typeof _.type == "function") {
    for (n = _.__k, u = 0; n && u < n.length; u++) n[u] && (n[u].__ = _, e = xe(n[u], e, t));
    return e;
  }
  _.__e != e && (e && _.type && !t.contains(e) && (e = S(_)), t.insertBefore(_.__e, e || null), e = _.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function He(_, e) {
  return e = e || [], _ == null || typeof _ == "boolean" || (q(_) ? _.some(function(t) {
    He(t, e);
  }) : e.push(_)), e;
}
function Ie(_, e, t, n) {
  var u, r, i = _.key, l = _.type, f = e[t];
  if (f === null || f && i == f.key && l === f.type && !(2 & f.__u)) return t;
  if (n > (f != null && !(2 & f.__u) ? 1 : 0)) for (u = t - 1, r = t + 1; u >= 0 || r < e.length; ) {
    if (u >= 0) {
      if ((f = e[u]) && !(2 & f.__u) && i == f.key && l === f.type) return u;
      u--;
    }
    if (r < e.length) {
      if ((f = e[r]) && !(2 & f.__u) && i == f.key && l === f.type) return r;
      r++;
    }
  }
  return -1;
}
function ie(_, e, t) {
  e[0] == "-" ? _.setProperty(e, t ?? "") : _[e] = t == null ? "" : typeof t != "number" || Ae.test(e) ? t : t + "px";
}
function R(_, e, t, n, u) {
  var r;
  e: if (e == "style") if (typeof t == "string") _.style.cssText = t;
  else {
    if (typeof n == "string" && (_.style.cssText = n = ""), n) for (e in n) t && e in t || ie(_.style, e, "");
    if (t) for (e in t) n && t[e] === n[e] || ie(_.style, e, t[e]);
  }
  else if (e[0] == "o" && e[1] == "n") r = e != (e = e.replace(be, "$1")), e = e.toLowerCase() in _ || e == "onFocusOut" || e == "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), _.l || (_.l = {}), _.l[e + r] = t, t ? n ? t.u = n.u : (t.u = Z, _.addEventListener(e, r ? K : J, r)) : _.removeEventListener(e, r ? K : J, r);
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
      if (e.t == null) e.t = Z++;
      else if (e.t < t.u) return;
      return t(v.event ? v.event(e) : e);
    }
  };
}
function _e(_, e, t, n, u, r, i, l, f, c) {
  var p, o, a, s, g, k, b, d, m, T, x, W, U, oe, I, B, V, $ = e.type;
  if (e.constructor !== void 0) return null;
  128 & t.__u && (f = !!(32 & t.__u), r = [l = e.__e = t.__e]), (p = v.__b) && p(e);
  e: if (typeof $ == "function") try {
    if (d = e.props, m = "prototype" in $ && $.prototype.render, T = (p = $.contextType) && n[p.__c], x = p ? T ? T.props.value : p.__ : n, t.__c ? b = (o = e.__c = t.__c).__ = o.__E : (m ? e.__c = o = new $(d, x) : (e.__c = o = new F(d, x), o.constructor = $, o.render = Oe), T && T.sub(o), o.props = d, o.state || (o.state = {}), o.context = x, o.__n = n, a = o.__d = !0, o.__h = [], o._sb = []), m && o.__s == null && (o.__s = o.state), m && $.getDerivedStateFromProps != null && (o.__s == o.state && (o.__s = w({}, o.__s)), w(o.__s, $.getDerivedStateFromProps(d, o.__s))), s = o.props, g = o.state, o.__v = e, a) m && $.getDerivedStateFromProps == null && o.componentWillMount != null && o.componentWillMount(), m && o.componentDidMount != null && o.__h.push(o.componentDidMount);
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
    if (o.context = x, o.props = d, o.__P = _, o.__e = !1, U = v.__r, oe = 0, m) {
      for (o.state = o.__s, o.__d = !1, U && U(e), p = o.render(o.props, o.state, o.context), I = 0; I < o._sb.length; I++) o.__h.push(o._sb[I]);
      o._sb = [];
    } else do
      o.__d = !1, U && U(e), p = o.render(o.props, o.state, o.context), o.state = o.__s;
    while (o.__d && ++oe < 25);
    o.state = o.__s, o.getChildContext != null && (n = w(w({}, n), o.getChildContext())), m && !a && o.getSnapshotBeforeUpdate != null && (k = o.getSnapshotBeforeUpdate(s, g)), l = Ce(_, q(B = p != null && p.type === L && p.key == null ? p.props.children : p) ? B : [B], e, t, n, u, r, i, l, f, c), o.base = e.__e, e.__u &= -161, o.__h.length && i.push(o), b && (o.__E = o.__ = null);
  } catch (D) {
    if (e.__v = null, f || r != null) if (D.then) {
      for (e.__u |= f ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
      r[r.indexOf(l)] = null, e.__e = l;
    } else for (V = r.length; V--; ) ee(r[V]);
    else e.__e = t.__e, e.__k = t.__k;
    v.__e(D, e, t);
  }
  else r == null && e.__v == t.__v ? (e.__k = t.__k, e.__e = t.__e) : l = e.__e = Re(t.__e, e, t, n, u, r, i, f, c);
  return (p = v.diffed) && p(e), 128 & e.__u ? void 0 : l;
}
function Pe(_, e, t) {
  for (var n = 0; n < t.length; n++) te(t[n], t[++n], t[++n]);
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
function Re(_, e, t, n, u, r, i, l, f) {
  var c, p, o, a, s, g, k, b = t.props, d = e.props, m = e.type;
  if (m == "svg" ? u = "http://www.w3.org/2000/svg" : m == "math" ? u = "http://www.w3.org/1998/Math/MathML" : u || (u = "http://www.w3.org/1999/xhtml"), r != null) {
    for (c = 0; c < r.length; c++) if ((s = r[c]) && "setAttribute" in s == !!m && (m ? s.localName == m : s.nodeType == 3)) {
      _ = s, r[c] = null;
      break;
    }
  }
  if (_ == null) {
    if (m == null) return document.createTextNode(d);
    _ = document.createElementNS(u, m, d.is && d), l && (v.__m && v.__m(e, r), l = !1), r = null;
  }
  if (m === null) b === d || l && _.data === d || (_.data = d);
  else {
    if (r = r && A.call(_.childNodes), b = t.props || M, !l && r != null) for (b = {}, c = 0; c < _.attributes.length; c++) b[(s = _.attributes[c]).name] = s.value;
    for (c in b) if (s = b[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") o = s;
      else if (!(c in d)) {
        if (c == "value" && "defaultValue" in d || c == "checked" && "defaultChecked" in d) continue;
        R(_, c, null, s, u);
      }
    }
    for (c in d) s = d[c], c == "children" ? a = s : c == "dangerouslySetInnerHTML" ? p = s : c == "value" ? g = s : c == "checked" ? k = s : l && typeof s != "function" || b[c] === s || R(_, c, s, b[c], u);
    if (p) l || o && (p.__html === o.__html || p.__html === _.innerHTML) || (_.innerHTML = p.__html), e.__k = [];
    else if (o && (_.innerHTML = ""), Ce(_, q(a) ? a : [a], e, t, n, m == "foreignObject" ? "http://www.w3.org/1999/xhtml" : u, r, i, r ? r[0] : t.__k && S(t, 0), l, f), r != null) for (c = r.length; c--; ) ee(r[c]);
    l || (c = "value", m == "progress" && g == null ? _.removeAttribute("value") : g !== void 0 && (g !== _[c] || m == "progress" && !g || m == "option" && g !== b[c]) && R(_, c, g, b[c], u), c = "checked", k !== void 0 && k !== _[c] && R(_, c, k, b[c], u));
  }
  return _;
}
function te(_, e, t) {
  try {
    if (typeof _ == "function") {
      var n = typeof _.__u == "function";
      n && _.__u(), n && e == null || (_.__u = _(e));
    } else _.current = e;
  } catch (u) {
    v.__e(u, t);
  }
}
function Se(_, e, t) {
  var n, u;
  if (v.unmount && v.unmount(_), (n = _.ref) && (n.current && n.current !== _.__e || te(n, null, e)), (n = _.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (r) {
      v.__e(r, e);
    }
    n.base = n.__P = null;
  }
  if (n = _.__k) for (u = 0; u < n.length; u++) n[u] && Se(n[u], e, t || typeof _.type != "function");
  t || ee(_.__e), _.__c = _.__ = _.__e = void 0;
}
function Oe(_, e, t) {
  return this.constructor(_, t);
}
function Ee(_, e, t) {
  var n, u, r, i;
  e == document && (e = document.documentElement), v.__ && v.__(_, e), u = (n = typeof t == "function") ? null : t && t.__k || e.__k, r = [], i = [], _e(e, _ = (!n && t || e).__k = Q(L, null, [_]), u || M, M, e.namespaceURI, !n && t ? [t] : u ? null : e.firstChild ? A.call(e.childNodes) : null, r, !n && t ? t : u ? u.__e : e.firstChild, n, i), Pe(r, _, i);
}
function Te(_, e) {
  Ee(_, e, Te);
}
function je(_, e, t) {
  var n, u, r, i, l = w({}, _.props);
  for (r in _.type && _.type.defaultProps && (i = _.type.defaultProps), e) r == "key" ? n = e[r] : r == "ref" ? u = e[r] : l[r] = e[r] === void 0 && i !== void 0 ? i[r] : e[r];
  return arguments.length > 2 && (l.children = arguments.length > 3 ? A.call(arguments, 2) : t), N(_.type, l, n || _.key, u || _.ref, null);
}
function qe(_, e) {
  var t = { __c: e = "__cC" + ke++, __: _, Consumer: function(n, u) {
    return n.children(u);
  }, Provider: function(n) {
    var u, r;
    return this.getChildContext || (u = /* @__PURE__ */ new Set(), (r = {})[e] = this, this.getChildContext = function() {
      return r;
    }, this.componentWillUnmount = function() {
      u = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value !== i.value && u.forEach(function(l) {
        l.__e = !0, X(l);
      });
    }, this.sub = function(i) {
      u.add(i);
      var l = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        u && u.delete(i), l && l.call(i);
      };
    }), n.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
A = $e.slice, v = { __e: function(_, e, t, n) {
  for (var u, r, i; e = e.__; ) if ((u = e.__c) && !u.__) try {
    if ((r = u.constructor) && r.getDerivedStateFromError != null && (u.setState(r.getDerivedStateFromError(_)), i = u.__d), u.componentDidCatch != null && (u.componentDidCatch(_, n || {}), i = u.__d), i) return u.__E = u;
  } catch (l) {
    _ = l;
  }
  throw _;
} }, ve = 0, ye = function(_) {
  return _ != null && _.constructor == null;
}, F.prototype.setState = function(_, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = w({}, this.state), typeof _ == "function" && (_ = _(w({}, t), this.props)), _ && w(t, _), _ != null && this.__v && (e && this._sb.push(e), X(this));
}, F.prototype.forceUpdate = function(_) {
  this.__v && (this.__e = !0, _ && this.__h.push(_), X(this));
}, F.prototype.render = L, H = [], ge = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, G = function(_, e) {
  return _.__v.__b - e.__v.__b;
}, j.__r = 0, be = /(PointerCapture)$|Capture$/i, Z = 0, J = le(!1), K = le(!0), ke = 0;
const e_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: F,
  Fragment: L,
  cloneElement: je,
  createContext: qe,
  createElement: Q,
  createRef: Le,
  h: Q,
  hydrate: Te,
  get isValidElement() {
    return ye;
  },
  get options() {
    return v;
  },
  render: Ee,
  toChildArray: He
}, Symbol.toStringTag, { value: "Module" }));
var C, h, z, ce, E = 0, Ue = [], y = v, fe = y.__b, se = y.__r, ae = y.diffed, pe = y.__c, he = y.unmount, de = y.__;
function P(_, e) {
  y.__h && y.__h(h, _, E || e), E = 0;
  var t = h.__H || (h.__H = { __: [], __h: [] });
  return _ >= t.__.length && t.__.push({}), t.__[_];
}
function De(_) {
  return E = 1, Ne(Me, _);
}
function Ne(_, e, t) {
  var n = P(C++, 2);
  if (n.t = _, !n.__c && (n.__ = [t ? t(e) : Me(void 0, e), function(l) {
    var f = n.__N ? n.__N[0] : n.__[0], c = n.t(f, l);
    f !== c && (n.__N = [c, n.__[1]], n.__c.setState({}));
  }], n.__c = h, !h.u)) {
    var u = function(l, f, c) {
      if (!n.__c.__H) return !0;
      var p = n.__c.__H.__.filter(function(a) {
        return !!a.__c;
      });
      if (p.every(function(a) {
        return !a.__N;
      })) return !r || r.call(this, l, f, c);
      var o = n.__c.props !== l;
      return p.forEach(function(a) {
        if (a.__N) {
          var s = a.__[0];
          a.__ = a.__N, a.__N = void 0, s !== a.__[0] && (o = !0);
        }
      }), r && r.call(this, l, f, c) || o;
    };
    h.u = !0;
    var r = h.shouldComponentUpdate, i = h.componentWillUpdate;
    h.componentWillUpdate = function(l, f, c) {
      if (this.__e) {
        var p = r;
        r = void 0, u(l, f, c), r = p;
      }
      i && i.call(this, l, f, c);
    }, h.shouldComponentUpdate = u;
  }
  return n.__N || n.__;
}
function Be(_, e) {
  var t = P(C++, 3);
  !y.__s && re(t.__H, e) && (t.__ = _, t.i = e, h.__H.__h.push(t));
}
function Fe(_, e) {
  var t = P(C++, 4);
  !y.__s && re(t.__H, e) && (t.__ = _, t.i = e, h.__h.push(t));
}
function Ve(_) {
  return E = 5, ne(function() {
    return { current: _ };
  }, []);
}
function ze(_, e, t) {
  E = 6, Fe(function() {
    return typeof _ == "function" ? (_(e()), function() {
      return _(null);
    }) : _ ? (_.current = e(), function() {
      return _.current = null;
    }) : void 0;
  }, t == null ? t : t.concat(_));
}
function ne(_, e) {
  var t = P(C++, 7);
  return re(t.__H, e) && (t.__ = _(), t.__H = e, t.__h = _), t.__;
}
function Ge(_, e) {
  return E = 8, ne(function() {
    return _;
  }, e);
}
function Je(_) {
  var e = h.context[_.__c], t = P(C++, 9);
  return t.c = _, e ? (t.__ == null && (t.__ = !0, e.sub(h)), e.props.value) : _.__;
}
function Ke(_, e) {
  y.useDebugValue && y.useDebugValue(e ? e(_) : _);
}
function Qe(_) {
  var e = P(C++, 10), t = De();
  return e.__ = _, h.componentDidCatch || (h.componentDidCatch = function(n, u) {
    e.__ && e.__(n, u), t[1](n);
  }), [t[0], function() {
    t[1](void 0);
  }];
}
function Xe() {
  var _ = P(C++, 11);
  if (!_.__) {
    for (var e = h.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var t = e.__m || (e.__m = [0, 0]);
    _.__ = "P" + t[0] + "-" + t[1]++;
  }
  return _.__;
}
function Ye() {
  for (var _; _ = Ue.shift(); ) if (_.__P && _.__H) try {
    _.__H.__h.forEach(O), _.__H.__h.forEach(Y), _.__H.__h = [];
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
    t.__N && (t.__ = t.__N), t.i = t.__N = void 0;
  })) : (e.__h.forEach(O), e.__h.forEach(Y), e.__h = [], C = 0)), z = h;
}, y.diffed = function(_) {
  ae && ae(_);
  var e = _.__c;
  e && e.__H && (e.__H.__h.length && (Ue.push(e) !== 1 && ce === y.requestAnimationFrame || ((ce = y.requestAnimationFrame) || Ze)(Ye)), e.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void 0;
  })), z = h = null;
}, y.__c = function(_, e) {
  e.some(function(t) {
    try {
      t.__h.forEach(O), t.__h = t.__h.filter(function(n) {
        return !n.__ || Y(n);
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
      O(n);
    } catch (u) {
      e = u;
    }
  }), t.__H = void 0, e && y.__e(e, t.__v));
};
var me = typeof requestAnimationFrame == "function";
function Ze(_) {
  var e, t = function() {
    clearTimeout(n), me && cancelAnimationFrame(e), setTimeout(_);
  }, n = setTimeout(t, 100);
  me && (e = requestAnimationFrame(t));
}
function O(_) {
  var e = h, t = _.__c;
  typeof t == "function" && (_.__c = void 0, t()), h = e;
}
function Y(_) {
  var e = h;
  _.__c = _.__(), h = e;
}
function re(_, e) {
  return !_ || _.length !== e.length || e.some(function(t, n) {
    return t !== _[n];
  });
}
function Me(_, e) {
  return typeof e == "function" ? e(_) : e;
}
const __ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useCallback: Ge,
  useContext: Je,
  useDebugValue: Ke,
  useEffect: Be,
  useErrorBoundary: Qe,
  useId: Xe,
  useImperativeHandle: ze,
  useLayoutEffect: Fe,
  useMemo: ne,
  useReducer: Ne,
  useRef: Ve,
  useState: De
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ee as D,
  __ as a,
  Q as g,
  De as h,
  e_ as p,
  Be as y
};
