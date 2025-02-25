import { h as s } from "./index-Dt0rM_67.js";
const a = {}, p = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: a
}, Symbol.toStringTag, { value: "Module" })), f = /* @__PURE__ */ s(p);
var r = { exports: {} }, n;
function c() {
  return n || (n = 1, typeof Object.create == "function" ? r.exports = function(e, t) {
    t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : r.exports = function(e, t) {
    if (t) {
      e.super_ = t;
      var o = function() {
      };
      o.prototype = t.prototype, e.prototype = new o(), e.prototype.constructor = e;
    }
  }), r.exports;
}
export {
  c as a,
  f as r
};
