import { h as xp, o as Fp } from "./index-Dx4oPLvI.js";
import { r as kp } from "./index-V36QlIgH.js";
import { r as Hp, a as Th, b as Or } from "./sha3-CijZRJ4X.js";
import { r as $p } from "./events-BCEOhv4q.js";
function Np(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const a = Object.getOwnPropertyDescriptor(r, o);
          a && Object.defineProperty(e, o, a.get ? a : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function zp() {
  if (typeof WebSocket < "u")
    return WebSocket;
  if (typeof global.WebSocket < "u")
    return global.WebSocket;
  if (typeof window.WebSocket < "u")
    return window.WebSocket;
  if (typeof self.WebSocket < "u")
    return self.WebSocket;
  throw new Error("`WebSocket` is not supported in this environment");
}
const Dp = zp(), Lp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WebSocket: Dp
}, Symbol.toStringTag, { value: "Module" }));
var cc = {}, Nr = {}, br = {}, zr = {}, Dr = {}, Lr = {}, Ur = {}, xd;
function Ah() {
  if (xd) return Ur;
  xd = 1, Object.defineProperty(Ur, "__esModule", { value: !0 }), Ur.getSDKVersion = void 0;
  const e = () => "9.1.0";
  return Ur.getSDKVersion = e, Ur;
}
var Gr = {}, Fd;
function Up() {
  if (Fd) return Gr;
  Fd = 1, Object.defineProperty(Gr, "__esModule", { value: !0 }), Gr.generateRequestId = void 0;
  const e = (r) => r.toString(16).padStart(2, "0"), t = (r) => {
    const o = new Uint8Array(r / 2);
    return window.crypto.getRandomValues(o), Array.from(o, e).join("");
  }, n = () => typeof window < "u" ? t(10) : (/* @__PURE__ */ new Date()).getTime().toString(36);
  return Gr.generateRequestId = n, Gr;
}
var kd;
function Sh() {
  if (kd) return Lr;
  kd = 1, Object.defineProperty(Lr, "__esModule", { value: !0 }), Lr.MessageFormatter = void 0;
  const e = Ah(), t = Up();
  class n {
  }
  return Lr.MessageFormatter = n, n.makeRequest = (r, o) => ({
    id: (0, t.generateRequestId)(),
    method: r,
    params: o,
    env: {
      sdkVersion: (0, e.getSDKVersion)()
    }
  }), n.makeResponse = (r, o, a) => ({
    id: r,
    success: !0,
    version: a,
    data: o
  }), n.makeErrorResponse = (r, o, a) => ({
    id: r,
    success: !1,
    error: o,
    version: a
  }), Lr;
}
var Zt = {}, Hd;
function ur() {
  if (Hd) return Zt;
  Hd = 1, Object.defineProperty(Zt, "__esModule", { value: !0 }), Zt.RestrictedMethods = Zt.Methods = void 0;
  var e;
  (function(n) {
    n.sendTransactions = "sendTransactions", n.rpcCall = "rpcCall", n.getChainInfo = "getChainInfo", n.getSafeInfo = "getSafeInfo", n.getTxBySafeTxHash = "getTxBySafeTxHash", n.getSafeBalances = "getSafeBalances", n.signMessage = "signMessage", n.signTypedMessage = "signTypedMessage", n.getEnvironmentInfo = "getEnvironmentInfo", n.getOffChainSignature = "getOffChainSignature", n.requestAddressBook = "requestAddressBook", n.wallet_getPermissions = "wallet_getPermissions", n.wallet_requestPermissions = "wallet_requestPermissions";
  })(e || (Zt.Methods = e = {}));
  var t;
  return function(n) {
    n.requestAddressBook = "requestAddressBook";
  }(t || (Zt.RestrictedMethods = t = {})), Zt;
}
var $d;
function Gp() {
  return $d || ($d = 1, function(e) {
    var t = Dr.__createBinding || (Object.create ? function(a, i, s, u) {
      u === void 0 && (u = s);
      var d = Object.getOwnPropertyDescriptor(i, s);
      (!d || ("get" in d ? !i.__esModule : d.writable || d.configurable)) && (d = { enumerable: !0, get: function() {
        return i[s];
      } }), Object.defineProperty(a, u, d);
    } : function(a, i, s, u) {
      u === void 0 && (u = s), a[u] = i[s];
    }), n = Dr.__exportStar || function(a, i) {
      for (var s in a) s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && t(i, a, s);
    };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const r = Sh();
    class o {
      constructor(i = null, s = !1) {
        this.allowedOrigins = null, this.callbacks = /* @__PURE__ */ new Map(), this.debugMode = !1, this.isServer = typeof window > "u", this.isValidMessage = ({ origin: u, data: d, source: f }) => {
          const c = !d, m = !this.isServer && f === window.parent, y = typeof d.version < "u" && parseInt(d.version.split(".")[0]), g = typeof y == "number" && y >= 1;
          let b = !0;
          return Array.isArray(this.allowedOrigins) && (b = this.allowedOrigins.find((h) => h.test(u)) !== void 0), !c && m && g && b;
        }, this.logIncomingMessage = (u) => {
          console.info(`Safe Apps SDK v1: A message was received from origin ${u.origin}. `, u.data);
        }, this.onParentMessage = (u) => {
          this.isValidMessage(u) && (this.debugMode && this.logIncomingMessage(u), this.handleIncomingMessage(u.data));
        }, this.handleIncomingMessage = (u) => {
          const { id: d } = u, f = this.callbacks.get(d);
          f && (f(u), this.callbacks.delete(d));
        }, this.send = (u, d) => {
          const f = r.MessageFormatter.makeRequest(u, d);
          if (this.isServer)
            throw new Error("Window doesn't exist");
          return window.parent.postMessage(f, "*"), new Promise((c, m) => {
            this.callbacks.set(f.id, (y) => {
              if (!y.success) {
                m(new Error(y.error));
                return;
              }
              c(y);
            });
          });
        }, this.allowedOrigins = i, this.debugMode = s, this.isServer || window.addEventListener("message", this.onParentMessage);
      }
    }
    e.default = o, n(ur(), e);
  }(Dr)), Dr;
}
var Vr = {}, Wr = {}, Kr = {}, Nd;
function Vp() {
  if (Nd) return Kr;
  Nd = 1, Object.defineProperty(Kr, "__esModule", { value: !0 }), Kr.isObjectEIP712TypedData = void 0;
  const e = (t) => typeof t == "object" && t != null && "domain" in t && "types" in t && "message" in t;
  return Kr.isObjectEIP712TypedData = e, Kr;
}
var dc = {}, zd;
function Wp() {
  return zd || (zd = 1, Object.defineProperty(dc, "__esModule", { value: !0 })), dc;
}
var fc = {}, Dd;
function Kp() {
  return Dd || (Dd = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.TransferDirection = e.TransactionStatus = e.TokenType = e.Operation = void 0;
    var t = kp();
    Object.defineProperty(e, "Operation", { enumerable: !0, get: function() {
      return t.Operation;
    } }), Object.defineProperty(e, "TokenType", { enumerable: !0, get: function() {
      return t.TokenType;
    } }), Object.defineProperty(e, "TransactionStatus", { enumerable: !0, get: function() {
      return t.TransactionStatus;
    } }), Object.defineProperty(e, "TransferDirection", { enumerable: !0, get: function() {
      return t.TransferDirection;
    } });
  }(fc)), fc;
}
var lc = {}, Ld;
function Zp() {
  return Ld || (Ld = 1, Object.defineProperty(lc, "__esModule", { value: !0 }), ur()), lc;
}
var Ud;
function xc() {
  return Ud || (Ud = 1, function(e) {
    var t = Wr.__createBinding || (Object.create ? function(r, o, a, i) {
      i === void 0 && (i = a);
      var s = Object.getOwnPropertyDescriptor(o, a);
      (!s || ("get" in s ? !o.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
        return o[a];
      } }), Object.defineProperty(r, i, s);
    } : function(r, o, a, i) {
      i === void 0 && (i = a), r[i] = o[a];
    }), n = Wr.__exportStar || function(r, o) {
      for (var a in r) a !== "default" && !Object.prototype.hasOwnProperty.call(o, a) && t(o, r, a);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), n(Vp(), e), n(Wp(), e), n(Kp(), e), n(Zp(), e);
  }(Wr)), Wr;
}
var Gd;
function Jp() {
  if (Gd) return Vr;
  Gd = 1, Object.defineProperty(Vr, "__esModule", { value: !0 }), Vr.TXs = void 0;
  const e = ur(), t = xc();
  class n {
    constructor(o) {
      this.communicator = o;
    }
    async getBySafeTxHash(o) {
      if (!o)
        throw new Error("Invalid safeTxHash");
      return (await this.communicator.send(e.Methods.getTxBySafeTxHash, { safeTxHash: o })).data;
    }
    async signMessage(o) {
      const a = {
        message: o
      };
      return (await this.communicator.send(e.Methods.signMessage, a)).data;
    }
    async signTypedMessage(o) {
      if (!(0, t.isObjectEIP712TypedData)(o))
        throw new Error("Invalid typed data");
      return (await this.communicator.send(e.Methods.signTypedMessage, { typedData: o })).data;
    }
    async send({ txs: o, params: a }) {
      if (!o || !o.length)
        throw new Error("No transactions were passed");
      const i = {
        txs: o,
        params: a
      };
      return (await this.communicator.send(e.Methods.sendTransactions, i)).data;
    }
  }
  return Vr.TXs = n, Vr;
}
var Zr = {}, Jr = {}, Vd;
function Fc() {
  return Vd || (Vd = 1, Object.defineProperty(Jr, "__esModule", { value: !0 }), Jr.RPC_CALLS = void 0, Jr.RPC_CALLS = {
    eth_call: "eth_call",
    eth_gasPrice: "eth_gasPrice",
    eth_getLogs: "eth_getLogs",
    eth_getBalance: "eth_getBalance",
    eth_getCode: "eth_getCode",
    eth_getBlockByHash: "eth_getBlockByHash",
    eth_getBlockByNumber: "eth_getBlockByNumber",
    eth_getStorageAt: "eth_getStorageAt",
    eth_getTransactionByHash: "eth_getTransactionByHash",
    eth_getTransactionReceipt: "eth_getTransactionReceipt",
    eth_getTransactionCount: "eth_getTransactionCount",
    eth_estimateGas: "eth_estimateGas",
    safe_setSettings: "safe_setSettings"
  }), Jr;
}
var Wd;
function Yp() {
  if (Wd) return Zr;
  Wd = 1, Object.defineProperty(Zr, "__esModule", { value: !0 }), Zr.Eth = void 0;
  const e = Fc(), t = ur(), n = {
    defaultBlockParam: (o = "latest") => o,
    returnFullTxObjectParam: (o = !1) => o,
    blockNumberToHex: (o) => Number.isInteger(o) ? `0x${o.toString(16)}` : o
  };
  class r {
    constructor(a) {
      this.communicator = a, this.call = this.buildRequest({
        call: e.RPC_CALLS.eth_call,
        formatters: [null, n.defaultBlockParam]
      }), this.getBalance = this.buildRequest({
        call: e.RPC_CALLS.eth_getBalance,
        formatters: [null, n.defaultBlockParam]
      }), this.getCode = this.buildRequest({
        call: e.RPC_CALLS.eth_getCode,
        formatters: [null, n.defaultBlockParam]
      }), this.getStorageAt = this.buildRequest({
        call: e.RPC_CALLS.eth_getStorageAt,
        formatters: [null, n.blockNumberToHex, n.defaultBlockParam]
      }), this.getPastLogs = this.buildRequest({
        call: e.RPC_CALLS.eth_getLogs
      }), this.getBlockByHash = this.buildRequest({
        call: e.RPC_CALLS.eth_getBlockByHash,
        formatters: [null, n.returnFullTxObjectParam]
      }), this.getBlockByNumber = this.buildRequest({
        call: e.RPC_CALLS.eth_getBlockByNumber,
        formatters: [n.blockNumberToHex, n.returnFullTxObjectParam]
      }), this.getTransactionByHash = this.buildRequest({
        call: e.RPC_CALLS.eth_getTransactionByHash
      }), this.getTransactionReceipt = this.buildRequest({
        call: e.RPC_CALLS.eth_getTransactionReceipt
      }), this.getTransactionCount = this.buildRequest({
        call: e.RPC_CALLS.eth_getTransactionCount,
        formatters: [null, n.defaultBlockParam]
      }), this.getGasPrice = this.buildRequest({
        call: e.RPC_CALLS.eth_gasPrice
      }), this.getEstimateGas = (i) => this.buildRequest({
        call: e.RPC_CALLS.eth_estimateGas
      })([i]), this.setSafeSettings = this.buildRequest({
        call: e.RPC_CALLS.safe_setSettings
      });
    }
    buildRequest(a) {
      const { call: i, formatters: s } = a;
      return async (u) => {
        s && Array.isArray(u) && s.forEach((c, m) => {
          c && (u[m] = c(u[m]));
        });
        const d = {
          call: i,
          params: u || []
        };
        return (await this.communicator.send(t.Methods.rpcCall, d)).data;
      };
    }
  }
  return Zr.Eth = r, Zr;
}
var Jt = {}, mc = {}, bc = {}, Yr = {}, Xr = {}, Kd;
function Xp() {
  return Kd || (Kd = 1, Object.defineProperty(Xr, "__esModule", { value: !0 }), Xr.version = void 0, Xr.version = "1.0.8"), Xr;
}
var Zd;
function Br() {
  if (Zd) return Yr;
  Zd = 1, Object.defineProperty(Yr, "__esModule", { value: !0 }), Yr.BaseError = void 0;
  const e = Xp();
  class t extends Error {
    constructor(r, o = {}) {
      var u;
      const a = o.cause instanceof t ? o.cause.details : (u = o.cause) != null && u.message ? o.cause.message : o.details, i = o.cause instanceof t && o.cause.docsPath || o.docsPath, s = [
        r || "An error occurred.",
        "",
        ...o.metaMessages ? [...o.metaMessages, ""] : [],
        ...i ? [`Docs: https://abitype.dev${i}`] : [],
        ...a ? [`Details: ${a}`] : [],
        `Version: abitype@${e.version}`
      ].join(`
`);
      super(s), Object.defineProperty(this, "details", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "docsPath", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "metaMessages", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "shortMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AbiTypeError"
      }), o.cause && (this.cause = o.cause), this.details = a, this.docsPath = i, this.metaMessages = o.metaMessages, this.shortMessage = r;
    }
  }
  return Yr.BaseError = t, Yr;
}
var mo = {}, Jd;
function Qp() {
  if (Jd) return mo;
  Jd = 1, Object.defineProperty(mo, "__esModule", { value: !0 }), mo.narrow = e;
  function e(t) {
    return t;
  }
  return mo;
}
var bo = {}, go = {}, yo = {}, ho = {}, tt = {}, Yd;
function bu() {
  if (Yd) return tt;
  Yd = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.isTupleRegex = tt.integerRegex = tt.bytesRegex = void 0, tt.execTyped = e;
  function e(t, n) {
    const r = t.exec(n);
    return r == null ? void 0 : r.groups;
  }
  return tt.bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, tt.integerRegex = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/, tt.isTupleRegex = /^\(.+?\).*?$/, tt;
}
var Xd;
function Ih() {
  if (Xd) return ho;
  Xd = 1, Object.defineProperty(ho, "__esModule", { value: !0 }), ho.formatAbiParameter = n;
  const e = bu(), t = /^tuple(?<array>(\[(\d*)\])*)$/;
  function n(r) {
    let o = r.type;
    if (t.test(r.type) && "components" in r) {
      o = "(";
      const a = r.components.length;
      for (let s = 0; s < a; s++) {
        const u = r.components[s];
        o += n(u), s < a - 1 && (o += ", ");
      }
      const i = (0, e.execTyped)(t, r.type);
      return o += `)${(i == null ? void 0 : i.array) ?? ""}`, n({
        ...r,
        type: o
      });
    }
    return "indexed" in r && r.indexed && (o = `${o} indexed`), r.name ? `${o} ${r.name}` : o;
  }
  return ho;
}
var Qd;
function Rh() {
  if (Qd) return yo;
  Qd = 1, Object.defineProperty(yo, "__esModule", { value: !0 }), yo.formatAbiParameters = t;
  const e = Ih();
  function t(n) {
    let r = "";
    const o = n.length;
    for (let a = 0; a < o; a++) {
      const i = n[a];
      r += (0, e.formatAbiParameter)(i), a !== o - 1 && (r += ", ");
    }
    return r;
  }
  return yo;
}
var ef;
function Oh() {
  if (ef) return go;
  ef = 1, Object.defineProperty(go, "__esModule", { value: !0 }), go.formatAbiItem = t;
  const e = Rh();
  function t(n) {
    var r;
    return n.type === "function" ? `function ${n.name}(${(0, e.formatAbiParameters)(n.inputs)})${n.stateMutability && n.stateMutability !== "nonpayable" ? ` ${n.stateMutability}` : ""}${(r = n.outputs) != null && r.length ? ` returns (${(0, e.formatAbiParameters)(n.outputs)})` : ""}` : n.type === "event" ? `event ${n.name}(${(0, e.formatAbiParameters)(n.inputs)})` : n.type === "error" ? `error ${n.name}(${(0, e.formatAbiParameters)(n.inputs)})` : n.type === "constructor" ? `constructor(${(0, e.formatAbiParameters)(n.inputs)})${n.stateMutability === "payable" ? " payable" : ""}` : n.type === "fallback" ? `fallback() external${n.stateMutability === "payable" ? " payable" : ""}` : "receive() external payable";
  }
  return go;
}
var tf;
function e1() {
  if (tf) return bo;
  tf = 1, Object.defineProperty(bo, "__esModule", { value: !0 }), bo.formatAbi = t;
  const e = Oh();
  function t(n) {
    const r = [], o = n.length;
    for (let a = 0; a < o; a++) {
      const i = n[a], s = (0, e.formatAbiItem)(i);
      r.push(s);
    }
    return r;
  }
  return bo;
}
var po = {}, _e = {}, rf;
function Cr() {
  if (rf) return _e;
  rf = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.functionModifiers = _e.eventModifiers = _e.modifiers = void 0, _e.isErrorSignature = n, _e.execErrorSignature = r, _e.isEventSignature = a, _e.execEventSignature = i, _e.isFunctionSignature = u, _e.execFunctionSignature = d, _e.isStructSignature = c, _e.execStructSignature = m, _e.isConstructorSignature = g, _e.execConstructorSignature = b, _e.isFallbackSignature = _, _e.execFallbackSignature = P, _e.isReceiveSignature = v;
  const e = bu(), t = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
  function n(E) {
    return t.test(E);
  }
  function r(E) {
    return (0, e.execTyped)(t, E);
  }
  const o = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
  function a(E) {
    return o.test(E);
  }
  function i(E) {
    return (0, e.execTyped)(o, E);
  }
  const s = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
  function u(E) {
    return s.test(E);
  }
  function d(E) {
    return (0, e.execTyped)(s, E);
  }
  const f = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
  function c(E) {
    return f.test(E);
  }
  function m(E) {
    return (0, e.execTyped)(f, E);
  }
  const y = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
  function g(E) {
    return y.test(E);
  }
  function b(E) {
    return (0, e.execTyped)(y, E);
  }
  const h = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
  function _(E) {
    return h.test(E);
  }
  function P(E) {
    return (0, e.execTyped)(h, E);
  }
  const j = /^receive\(\) external payable$/;
  function v(E) {
    return j.test(E);
  }
  return _e.modifiers = /* @__PURE__ */ new Set([
    "memory",
    "indexed",
    "storage",
    "calldata"
  ]), _e.eventModifiers = /* @__PURE__ */ new Set(["indexed"]), _e.functionModifiers = /* @__PURE__ */ new Set([
    "calldata",
    "memory",
    "storage"
  ]), _e;
}
var _o = {}, ot = {}, nf;
function gu() {
  if (nf) return ot;
  nf = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.UnknownSolidityTypeError = ot.UnknownTypeError = ot.InvalidAbiItemError = void 0;
  const e = Br();
  class t extends e.BaseError {
    constructor({ signature: a }) {
      super("Failed to parse ABI item.", {
        details: `parseAbiItem(${JSON.stringify(a, null, 2)})`,
        docsPath: "/api/human#parseabiitem-1"
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidAbiItemError"
      });
    }
  }
  ot.InvalidAbiItemError = t;
  class n extends e.BaseError {
    constructor({ type: a }) {
      super("Unknown type.", {
        metaMessages: [
          `Type "${a}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "UnknownTypeError"
      });
    }
  }
  ot.UnknownTypeError = n;
  class r extends e.BaseError {
    constructor({ type: a }) {
      super("Unknown type.", {
        metaMessages: [`Type "${a}" is not a valid ABI type.`]
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "UnknownSolidityTypeError"
      });
    }
  }
  return ot.UnknownSolidityTypeError = r, ot;
}
var Te = {}, of;
function $n() {
  if (of) return Te;
  of = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.InvalidAbiTypeParameterError = Te.InvalidFunctionModifierError = Te.InvalidModifierError = Te.SolidityProtectedKeywordError = Te.InvalidParameterError = Te.InvalidAbiParametersError = Te.InvalidAbiParameterError = void 0;
  const e = Br();
  class t extends e.BaseError {
    constructor({ param: d }) {
      super("Failed to parse ABI parameter.", {
        details: `parseAbiParameter(${JSON.stringify(d, null, 2)})`,
        docsPath: "/api/human#parseabiparameter-1"
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidAbiParameterError"
      });
    }
  }
  Te.InvalidAbiParameterError = t;
  class n extends e.BaseError {
    constructor({ params: d }) {
      super("Failed to parse ABI parameters.", {
        details: `parseAbiParameters(${JSON.stringify(d, null, 2)})`,
        docsPath: "/api/human#parseabiparameters-1"
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidAbiParametersError"
      });
    }
  }
  Te.InvalidAbiParametersError = n;
  class r extends e.BaseError {
    constructor({ param: d }) {
      super("Invalid ABI parameter.", {
        details: d
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidParameterError"
      });
    }
  }
  Te.InvalidParameterError = r;
  class o extends e.BaseError {
    constructor({ param: d, name: f }) {
      super("Invalid ABI parameter.", {
        details: d,
        metaMessages: [
          `"${f}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "SolidityProtectedKeywordError"
      });
    }
  }
  Te.SolidityProtectedKeywordError = o;
  class a extends e.BaseError {
    constructor({ param: d, type: f, modifier: c }) {
      super("Invalid ABI parameter.", {
        details: d,
        metaMessages: [
          `Modifier "${c}" not allowed${f ? ` in "${f}" type` : ""}.`
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidModifierError"
      });
    }
  }
  Te.InvalidModifierError = a;
  class i extends e.BaseError {
    constructor({ param: d, type: f, modifier: c }) {
      super("Invalid ABI parameter.", {
        details: d,
        metaMessages: [
          `Modifier "${c}" not allowed${f ? ` in "${f}" type` : ""}.`,
          `Data location can only be specified for array, struct, or mapping types, but "${c}" was given.`
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidFunctionModifierError"
      });
    }
  }
  Te.InvalidFunctionModifierError = i;
  class s extends e.BaseError {
    constructor({ abiParameter: d }) {
      super("Invalid ABI parameter.", {
        details: JSON.stringify(d, null, 2),
        metaMessages: ["ABI parameter type is invalid."]
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidAbiTypeParameterError"
      });
    }
  }
  return Te.InvalidAbiTypeParameterError = s, Te;
}
var it = {}, af;
function kc() {
  if (af) return it;
  af = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.InvalidStructSignatureError = it.UnknownSignatureError = it.InvalidSignatureError = void 0;
  const e = Br();
  class t extends e.BaseError {
    constructor({ signature: a, type: i }) {
      super(`Invalid ${i} signature.`, {
        details: a
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidSignatureError"
      });
    }
  }
  it.InvalidSignatureError = t;
  class n extends e.BaseError {
    constructor({ signature: a }) {
      super("Unknown signature.", {
        details: a
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "UnknownSignatureError"
      });
    }
  }
  it.UnknownSignatureError = n;
  class r extends e.BaseError {
    constructor({ signature: a }) {
      super("Invalid struct signature.", {
        details: a,
        metaMessages: ["No properties exist."]
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidStructSignatureError"
      });
    }
  }
  return it.InvalidStructSignatureError = r, it;
}
var Qr = {}, sf;
function Bh() {
  if (sf) return Qr;
  sf = 1, Object.defineProperty(Qr, "__esModule", { value: !0 }), Qr.CircularReferenceError = void 0;
  const e = Br();
  class t extends e.BaseError {
    constructor({ type: r }) {
      super("Circular reference detected.", {
        metaMessages: [`Struct "${r}" is a circular reference.`]
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "CircularReferenceError"
      });
    }
  }
  return Qr.CircularReferenceError = t, Qr;
}
var qe = {}, en = {}, uf;
function Ch() {
  if (uf) return en;
  uf = 1, Object.defineProperty(en, "__esModule", { value: !0 }), en.InvalidParenthesisError = void 0;
  const e = Br();
  class t extends e.BaseError {
    constructor({ current: r, depth: o }) {
      super("Unbalanced parentheses.", {
        metaMessages: [
          `"${r.trim()}" has too many ${o > 0 ? "opening" : "closing"} parentheses.`
        ],
        details: `Depth "${o}"`
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidParenthesisError"
      });
    }
  }
  return en.InvalidParenthesisError = t, en;
}
var gr = {}, cf;
function t1() {
  if (cf) return gr;
  cf = 1, Object.defineProperty(gr, "__esModule", { value: !0 }), gr.parameterCache = void 0, gr.getParameterCacheKey = e;
  function e(t, n, r) {
    let o = "";
    if (r)
      for (const a of Object.entries(r)) {
        if (!a)
          continue;
        let i = "";
        for (const s of a[1])
          i += `[${s.type}${s.name ? `:${s.name}` : ""}]`;
        o += `(${a[0]}{${i}})`;
      }
    return n ? `${n}:${t}${o}` : t;
  }
  return gr.parameterCache = /* @__PURE__ */ new Map([
    ["address", { type: "address" }],
    ["bool", { type: "bool" }],
    ["bytes", { type: "bytes" }],
    ["bytes32", { type: "bytes32" }],
    ["int", { type: "int256" }],
    ["int256", { type: "int256" }],
    ["string", { type: "string" }],
    ["uint", { type: "uint256" }],
    ["uint8", { type: "uint8" }],
    ["uint16", { type: "uint16" }],
    ["uint24", { type: "uint24" }],
    ["uint32", { type: "uint32" }],
    ["uint64", { type: "uint64" }],
    ["uint96", { type: "uint96" }],
    ["uint112", { type: "uint112" }],
    ["uint160", { type: "uint160" }],
    ["uint192", { type: "uint192" }],
    ["uint256", { type: "uint256" }],
    ["address owner", { type: "address", name: "owner" }],
    ["address to", { type: "address", name: "to" }],
    ["bool approved", { type: "bool", name: "approved" }],
    ["bytes _data", { type: "bytes", name: "_data" }],
    ["bytes data", { type: "bytes", name: "data" }],
    ["bytes signature", { type: "bytes", name: "signature" }],
    ["bytes32 hash", { type: "bytes32", name: "hash" }],
    ["bytes32 r", { type: "bytes32", name: "r" }],
    ["bytes32 root", { type: "bytes32", name: "root" }],
    ["bytes32 s", { type: "bytes32", name: "s" }],
    ["string name", { type: "string", name: "name" }],
    ["string symbol", { type: "string", name: "symbol" }],
    ["string tokenURI", { type: "string", name: "tokenURI" }],
    ["uint tokenId", { type: "uint256", name: "tokenId" }],
    ["uint8 v", { type: "uint8", name: "v" }],
    ["uint256 balance", { type: "uint256", name: "balance" }],
    ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
    ["uint256 value", { type: "uint256", name: "value" }],
    [
      "event:address indexed from",
      { type: "address", name: "from", indexed: !0 }
    ],
    ["event:address indexed to", { type: "address", name: "to", indexed: !0 }],
    [
      "event:uint indexed tokenId",
      { type: "uint256", name: "tokenId", indexed: !0 }
    ],
    [
      "event:uint256 indexed tokenId",
      { type: "uint256", name: "tokenId", indexed: !0 }
    ]
  ]), gr;
}
var df;
function Rr() {
  if (df) return qe;
  df = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.parseSignature = s, qe.parseFunctionSignature = u, qe.parseEventSignature = d, qe.parseErrorSignature = f, qe.parseConstructorSignature = c, qe.parseFallbackSignature = m, qe.parseAbiParameter = h, qe.splitParameters = _, qe.isSolidityType = P, qe.isSolidityKeyword = v, qe.isValidDataLocation = E;
  const e = bu(), t = gu(), n = $n(), r = kc(), o = Ch(), a = t1(), i = Cr();
  function s(l, p = {}) {
    if ((0, i.isFunctionSignature)(l))
      return u(l, p);
    if ((0, i.isEventSignature)(l))
      return d(l, p);
    if ((0, i.isErrorSignature)(l))
      return f(l, p);
    if ((0, i.isConstructorSignature)(l))
      return c(l, p);
    if ((0, i.isFallbackSignature)(l))
      return m(l);
    if ((0, i.isReceiveSignature)(l))
      return {
        type: "receive",
        stateMutability: "payable"
      };
    throw new r.UnknownSignatureError({ signature: l });
  }
  function u(l, p = {}) {
    const T = (0, i.execFunctionSignature)(l);
    if (!T)
      throw new r.InvalidSignatureError({ signature: l, type: "function" });
    const w = _(T.parameters), I = [], C = w.length;
    for (let M = 0; M < C; M++)
      I.push(h(w[M], {
        modifiers: i.functionModifiers,
        structs: p,
        type: "function"
      }));
    const B = [];
    if (T.returns) {
      const M = _(T.returns), A = M.length;
      for (let x = 0; x < A; x++)
        B.push(h(M[x], {
          modifiers: i.functionModifiers,
          structs: p,
          type: "function"
        }));
    }
    return {
      name: T.name,
      type: "function",
      stateMutability: T.stateMutability ?? "nonpayable",
      inputs: I,
      outputs: B
    };
  }
  function d(l, p = {}) {
    const T = (0, i.execEventSignature)(l);
    if (!T)
      throw new r.InvalidSignatureError({ signature: l, type: "event" });
    const w = _(T.parameters), I = [], C = w.length;
    for (let B = 0; B < C; B++)
      I.push(h(w[B], {
        modifiers: i.eventModifiers,
        structs: p,
        type: "event"
      }));
    return { name: T.name, type: "event", inputs: I };
  }
  function f(l, p = {}) {
    const T = (0, i.execErrorSignature)(l);
    if (!T)
      throw new r.InvalidSignatureError({ signature: l, type: "error" });
    const w = _(T.parameters), I = [], C = w.length;
    for (let B = 0; B < C; B++)
      I.push(h(w[B], { structs: p, type: "error" }));
    return { name: T.name, type: "error", inputs: I };
  }
  function c(l, p = {}) {
    const T = (0, i.execConstructorSignature)(l);
    if (!T)
      throw new r.InvalidSignatureError({ signature: l, type: "constructor" });
    const w = _(T.parameters), I = [], C = w.length;
    for (let B = 0; B < C; B++)
      I.push(h(w[B], { structs: p, type: "constructor" }));
    return {
      type: "constructor",
      stateMutability: T.stateMutability ?? "nonpayable",
      inputs: I
    };
  }
  function m(l) {
    const p = (0, i.execFallbackSignature)(l);
    if (!p)
      throw new r.InvalidSignatureError({ signature: l, type: "fallback" });
    return {
      type: "fallback",
      stateMutability: p.stateMutability ?? "nonpayable"
    };
  }
  const y = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/, g = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/, b = /^u?int$/;
  function h(l, p) {
    var F, $;
    const T = (0, a.getParameterCacheKey)(l, p == null ? void 0 : p.type, p == null ? void 0 : p.structs);
    if (a.parameterCache.has(T))
      return a.parameterCache.get(T);
    const w = e.isTupleRegex.test(l), I = (0, e.execTyped)(w ? g : y, l);
    if (!I)
      throw new n.InvalidParameterError({ param: l });
    if (I.name && v(I.name))
      throw new n.SolidityProtectedKeywordError({ param: l, name: I.name });
    const C = I.name ? { name: I.name } : {}, B = I.modifier === "indexed" ? { indexed: !0 } : {}, M = (p == null ? void 0 : p.structs) ?? {};
    let A, x = {};
    if (w) {
      A = "tuple";
      const q = _(I.type), S = [], R = q.length;
      for (let O = 0; O < R; O++)
        S.push(h(q[O], { structs: M }));
      x = { components: S };
    } else if (I.type in M)
      A = "tuple", x = { components: M[I.type] };
    else if (b.test(I.type))
      A = `${I.type}256`;
    else if (A = I.type, (p == null ? void 0 : p.type) !== "struct" && !P(A))
      throw new t.UnknownSolidityTypeError({ type: A });
    if (I.modifier) {
      if (!(($ = (F = p == null ? void 0 : p.modifiers) == null ? void 0 : F.has) != null && $.call(F, I.modifier)))
        throw new n.InvalidModifierError({
          param: l,
          type: p == null ? void 0 : p.type,
          modifier: I.modifier
        });
      if (i.functionModifiers.has(I.modifier) && !E(A, !!I.array))
        throw new n.InvalidFunctionModifierError({
          param: l,
          type: p == null ? void 0 : p.type,
          modifier: I.modifier
        });
    }
    const H = {
      type: `${A}${I.array ?? ""}`,
      ...C,
      ...B,
      ...x
    };
    return a.parameterCache.set(T, H), H;
  }
  function _(l, p = [], T = "", w = 0) {
    const I = l.trim().length;
    for (let C = 0; C < I; C++) {
      const B = l[C], M = l.slice(C + 1);
      switch (B) {
        case ",":
          return w === 0 ? _(M, [...p, T.trim()]) : _(M, p, `${T}${B}`, w);
        case "(":
          return _(M, p, `${T}${B}`, w + 1);
        case ")":
          return _(M, p, `${T}${B}`, w - 1);
        default:
          return _(M, p, `${T}${B}`, w);
      }
    }
    if (T === "")
      return p;
    if (w !== 0)
      throw new o.InvalidParenthesisError({ current: T, depth: w });
    return p.push(T.trim()), p;
  }
  function P(l) {
    return l === "address" || l === "bool" || l === "function" || l === "string" || e.bytesRegex.test(l) || e.integerRegex.test(l);
  }
  const j = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
  function v(l) {
    return l === "address" || l === "bool" || l === "function" || l === "string" || l === "tuple" || e.bytesRegex.test(l) || e.integerRegex.test(l) || j.test(l);
  }
  function E(l, p) {
    return p || l === "bytes" || l === "string" || l === "tuple";
  }
  return qe;
}
var ff;
function yu() {
  if (ff) return _o;
  ff = 1, Object.defineProperty(_o, "__esModule", { value: !0 }), _o.parseStructs = s;
  const e = bu(), t = gu(), n = $n(), r = kc(), o = Bh(), a = Cr(), i = Rr();
  function s(f) {
    const c = {}, m = f.length;
    for (let h = 0; h < m; h++) {
      const _ = f[h];
      if (!(0, a.isStructSignature)(_))
        continue;
      const P = (0, a.execStructSignature)(_);
      if (!P)
        throw new r.InvalidSignatureError({ signature: _, type: "struct" });
      const j = P.properties.split(";"), v = [], E = j.length;
      for (let l = 0; l < E; l++) {
        const T = j[l].trim();
        if (!T)
          continue;
        const w = (0, i.parseAbiParameter)(T, {
          type: "struct"
        });
        v.push(w);
      }
      if (!v.length)
        throw new r.InvalidStructSignatureError({ signature: _ });
      c[P.name] = v;
    }
    const y = {}, g = Object.entries(c), b = g.length;
    for (let h = 0; h < b; h++) {
      const [_, P] = g[h];
      y[_] = d(P, c);
    }
    return y;
  }
  const u = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
  function d(f, c, m = /* @__PURE__ */ new Set()) {
    const y = [], g = f.length;
    for (let b = 0; b < g; b++) {
      const h = f[b];
      if (e.isTupleRegex.test(h.type))
        y.push(h);
      else {
        const P = (0, e.execTyped)(u, h.type);
        if (!(P != null && P.type))
          throw new n.InvalidAbiTypeParameterError({ abiParameter: h });
        const { array: j, type: v } = P;
        if (v in c) {
          if (m.has(v))
            throw new o.CircularReferenceError({ type: v });
          y.push({
            ...h,
            type: `tuple${j ?? ""}`,
            components: d(c[v] ?? [], c, /* @__PURE__ */ new Set([...m, v]))
          });
        } else if ((0, i.isSolidityType)(v))
          y.push(h);
        else
          throw new t.UnknownTypeError({ type: v });
      }
    }
    return y;
  }
  return _o;
}
var lf;
function r1() {
  if (lf) return po;
  lf = 1, Object.defineProperty(po, "__esModule", { value: !0 }), po.parseAbi = r;
  const e = Cr(), t = yu(), n = Rr();
  function r(o) {
    const a = (0, t.parseStructs)(o), i = [], s = o.length;
    for (let u = 0; u < s; u++) {
      const d = o[u];
      (0, e.isStructSignature)(d) || i.push((0, n.parseSignature)(d, a));
    }
    return i;
  }
  return po;
}
var vo = {}, mf;
function n1() {
  if (mf) return vo;
  mf = 1, Object.defineProperty(vo, "__esModule", { value: !0 }), vo.parseAbiItem = o;
  const e = gu(), t = Cr(), n = yu(), r = Rr();
  function o(a) {
    let i;
    if (typeof a == "string")
      i = (0, r.parseSignature)(a);
    else {
      const s = (0, n.parseStructs)(a), u = a.length;
      for (let d = 0; d < u; d++) {
        const f = a[d];
        if (!(0, t.isStructSignature)(f)) {
          i = (0, r.parseSignature)(f, s);
          break;
        }
      }
    }
    if (!i)
      throw new e.InvalidAbiItemError({ signature: a });
    return i;
  }
  return vo;
}
var Eo = {}, bf;
function o1() {
  if (bf) return Eo;
  bf = 1, Object.defineProperty(Eo, "__esModule", { value: !0 }), Eo.parseAbiParameter = o;
  const e = $n(), t = Cr(), n = yu(), r = Rr();
  function o(a) {
    let i;
    if (typeof a == "string")
      i = (0, r.parseAbiParameter)(a, {
        modifiers: t.modifiers
      });
    else {
      const s = (0, n.parseStructs)(a), u = a.length;
      for (let d = 0; d < u; d++) {
        const f = a[d];
        if (!(0, t.isStructSignature)(f)) {
          i = (0, r.parseAbiParameter)(f, { modifiers: t.modifiers, structs: s });
          break;
        }
      }
    }
    if (!i)
      throw new e.InvalidAbiParameterError({ param: a });
    return i;
  }
  return Eo;
}
var jo = {}, gf;
function i1() {
  if (gf) return jo;
  gf = 1, Object.defineProperty(jo, "__esModule", { value: !0 }), jo.parseAbiParameters = a;
  const e = $n(), t = Cr(), n = yu(), r = Rr(), o = Rr();
  function a(i) {
    const s = [];
    if (typeof i == "string") {
      const u = (0, r.splitParameters)(i), d = u.length;
      for (let f = 0; f < d; f++)
        s.push((0, o.parseAbiParameter)(u[f], { modifiers: t.modifiers }));
    } else {
      const u = (0, n.parseStructs)(i), d = i.length;
      for (let f = 0; f < d; f++) {
        const c = i[f];
        if ((0, t.isStructSignature)(c))
          continue;
        const m = (0, r.splitParameters)(c), y = m.length;
        for (let g = 0; g < y; g++)
          s.push((0, o.parseAbiParameter)(m[g], { modifiers: t.modifiers, structs: u }));
      }
    }
    if (s.length === 0)
      throw new e.InvalidAbiParametersError({ params: i });
    return s;
  }
  return jo;
}
var yf;
function hu() {
  return yf || (yf = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CircularReferenceError = e.InvalidParenthesisError = e.UnknownSignatureError = e.InvalidSignatureError = e.InvalidStructSignatureError = e.InvalidAbiParameterError = e.InvalidAbiParametersError = e.InvalidParameterError = e.SolidityProtectedKeywordError = e.InvalidModifierError = e.InvalidFunctionModifierError = e.InvalidAbiTypeParameterError = e.UnknownSolidityTypeError = e.InvalidAbiItemError = e.UnknownTypeError = e.parseAbiParameters = e.parseAbiParameter = e.parseAbiItem = e.parseAbi = e.formatAbiParameters = e.formatAbiParameter = e.formatAbiItem = e.formatAbi = e.narrow = e.BaseError = void 0;
    var t = Br();
    Object.defineProperty(e, "BaseError", { enumerable: !0, get: function() {
      return t.BaseError;
    } });
    var n = Qp();
    Object.defineProperty(e, "narrow", { enumerable: !0, get: function() {
      return n.narrow;
    } });
    var r = e1();
    Object.defineProperty(e, "formatAbi", { enumerable: !0, get: function() {
      return r.formatAbi;
    } });
    var o = Oh();
    Object.defineProperty(e, "formatAbiItem", { enumerable: !0, get: function() {
      return o.formatAbiItem;
    } });
    var a = Ih();
    Object.defineProperty(e, "formatAbiParameter", { enumerable: !0, get: function() {
      return a.formatAbiParameter;
    } });
    var i = Rh();
    Object.defineProperty(e, "formatAbiParameters", { enumerable: !0, get: function() {
      return i.formatAbiParameters;
    } });
    var s = r1();
    Object.defineProperty(e, "parseAbi", { enumerable: !0, get: function() {
      return s.parseAbi;
    } });
    var u = n1();
    Object.defineProperty(e, "parseAbiItem", { enumerable: !0, get: function() {
      return u.parseAbiItem;
    } });
    var d = o1();
    Object.defineProperty(e, "parseAbiParameter", { enumerable: !0, get: function() {
      return d.parseAbiParameter;
    } });
    var f = i1();
    Object.defineProperty(e, "parseAbiParameters", { enumerable: !0, get: function() {
      return f.parseAbiParameters;
    } });
    var c = gu();
    Object.defineProperty(e, "UnknownTypeError", { enumerable: !0, get: function() {
      return c.UnknownTypeError;
    } }), Object.defineProperty(e, "InvalidAbiItemError", { enumerable: !0, get: function() {
      return c.InvalidAbiItemError;
    } }), Object.defineProperty(e, "UnknownSolidityTypeError", { enumerable: !0, get: function() {
      return c.UnknownSolidityTypeError;
    } });
    var m = $n();
    Object.defineProperty(e, "InvalidAbiTypeParameterError", { enumerable: !0, get: function() {
      return m.InvalidAbiTypeParameterError;
    } }), Object.defineProperty(e, "InvalidFunctionModifierError", { enumerable: !0, get: function() {
      return m.InvalidFunctionModifierError;
    } }), Object.defineProperty(e, "InvalidModifierError", { enumerable: !0, get: function() {
      return m.InvalidModifierError;
    } }), Object.defineProperty(e, "SolidityProtectedKeywordError", { enumerable: !0, get: function() {
      return m.SolidityProtectedKeywordError;
    } }), Object.defineProperty(e, "InvalidParameterError", { enumerable: !0, get: function() {
      return m.InvalidParameterError;
    } }), Object.defineProperty(e, "InvalidAbiParametersError", { enumerable: !0, get: function() {
      return m.InvalidAbiParametersError;
    } }), Object.defineProperty(e, "InvalidAbiParameterError", { enumerable: !0, get: function() {
      return m.InvalidAbiParameterError;
    } });
    var y = kc();
    Object.defineProperty(e, "InvalidStructSignatureError", { enumerable: !0, get: function() {
      return y.InvalidStructSignatureError;
    } }), Object.defineProperty(e, "InvalidSignatureError", { enumerable: !0, get: function() {
      return y.InvalidSignatureError;
    } }), Object.defineProperty(e, "UnknownSignatureError", { enumerable: !0, get: function() {
      return y.UnknownSignatureError;
    } });
    var g = Ch();
    Object.defineProperty(e, "InvalidParenthesisError", { enumerable: !0, get: function() {
      return g.InvalidParenthesisError;
    } });
    var b = Bh();
    Object.defineProperty(e, "CircularReferenceError", { enumerable: !0, get: function() {
      return b.CircularReferenceError;
    } });
  }(bc)), bc;
}
var yr = {}, Po = {}, hf;
function le() {
  if (hf) return Po;
  hf = 1, Object.defineProperty(Po, "__esModule", { value: !0 }), Po.getAction = e;
  function e(t, n, r) {
    const o = t[n.name];
    if (typeof o == "function")
      return o;
    const a = t[r];
    return typeof a == "function" ? a : (i) => n(t, i);
  }
  return Po;
}
var wo = {}, To = {}, Q = {}, tn = {}, pf;
function _t() {
  if (pf) return tn;
  pf = 1, Object.defineProperty(tn, "__esModule", { value: !0 }), tn.formatAbiItem = t, tn.formatAbiParams = n;
  const e = pe();
  function t(o, { includeName: a = !1 } = {}) {
    if (o.type !== "function" && o.type !== "event" && o.type !== "error")
      throw new e.InvalidDefinitionTypeError(o.type);
    return `${o.name}(${n(o.inputs, { includeName: a })})`;
  }
  function n(o, { includeName: a = !1 } = {}) {
    return o ? o.map((i) => r(i, { includeName: a })).join(a ? ", " : ",") : "";
  }
  function r(o, { includeName: a }) {
    return o.type.startsWith("tuple") ? `(${n(o.components, { includeName: a })})${o.type.slice(5)}` : o.type + (a && o.name ? ` ${o.name}` : "");
  }
  return tn;
}
var Ao = {}, So = {}, _f;
function Oe() {
  if (_f) return So;
  _f = 1, Object.defineProperty(So, "__esModule", { value: !0 }), So.isHex = e;
  function e(t, { strict: n = !0 } = {}) {
    return !t || typeof t != "string" ? !1 : n ? /^0x[0-9a-fA-F]*$/.test(t) : t.startsWith("0x");
  }
  return So;
}
var vf;
function Ne() {
  if (vf) return Ao;
  vf = 1, Object.defineProperty(Ao, "__esModule", { value: !0 }), Ao.size = t;
  const e = Oe();
  function t(n) {
    return (0, e.isHex)(n, { strict: !1 }) ? Math.ceil((n.length - 2) / 2) : n.length;
  }
  return Ao;
}
var hr = {}, rn = {}, Ef;
function a1() {
  return Ef || (Ef = 1, Object.defineProperty(rn, "__esModule", { value: !0 }), rn.version = void 0, rn.version = "2.22.17"), rn;
}
var jf;
function ie() {
  if (jf) return hr;
  jf = 1, Object.defineProperty(hr, "__esModule", { value: !0 }), hr.BaseError = void 0, hr.setErrorConfig = n;
  const e = a1();
  let t = {
    getDocsUrl: ({ docsBaseUrl: a, docsPath: i = "", docsSlug: s }) => i ? `${a ?? "https://viem.sh"}${i}${s ? `#${s}` : ""}` : void 0,
    version: `viem@${e.version}`
  };
  function n(a) {
    t = a;
  }
  class r extends Error {
    constructor(i, s = {}) {
      var m;
      const u = (() => {
        var y;
        return s.cause instanceof r ? s.cause.details : (y = s.cause) != null && y.message ? s.cause.message : s.details;
      })(), d = s.cause instanceof r && s.cause.docsPath || s.docsPath, f = (m = t.getDocsUrl) == null ? void 0 : m.call(t, { ...s, docsPath: d }), c = [
        i || "An error occurred.",
        "",
        ...s.metaMessages ? [...s.metaMessages, ""] : [],
        ...f ? [`Docs: ${f}`] : [],
        ...u ? [`Details: ${u}`] : [],
        ...t.version ? [`Version: ${t.version}`] : []
      ].join(`
`);
      super(c, s.cause ? { cause: s.cause } : void 0), Object.defineProperty(this, "details", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "docsPath", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "metaMessages", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "shortMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "version", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "BaseError"
      }), this.details = u, this.docsPath = d, this.metaMessages = s.metaMessages, this.name = s.name ?? this.name, this.shortMessage = i, this.version = e.version;
    }
    walk(i) {
      return o(this, i);
    }
  }
  hr.BaseError = r;
  function o(a, i) {
    return i != null && i(a) ? a : a && typeof a == "object" && "cause" in a && a.cause !== void 0 ? o(a.cause, i) : i ? null : a;
  }
  return hr;
}
var Pf;
function pe() {
  if (Pf) return Q;
  Pf = 1, Object.defineProperty(Q, "__esModule", { value: !0 }), Q.UnsupportedPackedAbiType = Q.InvalidDefinitionTypeError = Q.InvalidArrayError = Q.InvalidAbiDecodingTypeError = Q.InvalidAbiEncodingTypeError = Q.DecodeLogTopicsMismatch = Q.DecodeLogDataMismatch = Q.BytesSizeMismatchError = Q.AbiItemAmbiguityError = Q.AbiFunctionSignatureNotFoundError = Q.AbiFunctionOutputsNotFoundError = Q.AbiFunctionNotFoundError = Q.AbiEventNotFoundError = Q.AbiEventSignatureNotFoundError = Q.AbiEventSignatureEmptyTopicsError = Q.AbiErrorSignatureNotFoundError = Q.AbiErrorNotFoundError = Q.AbiErrorInputsNotFoundError = Q.AbiEncodingLengthMismatchError = Q.AbiEncodingBytesSizeMismatchError = Q.AbiEncodingArrayLengthMismatchError = Q.AbiDecodingZeroDataError = Q.AbiDecodingDataSizeTooSmallError = Q.AbiDecodingDataSizeInvalidError = Q.AbiConstructorParamsNotFoundError = Q.AbiConstructorNotFoundError = void 0;
  const e = _t(), t = Ne(), n = ie();
  class r extends n.BaseError {
    constructor({ docsPath: A }) {
      super([
        "A constructor was not found on the ABI.",
        "Make sure you are using the correct ABI and that the constructor exists on it."
      ].join(`
`), {
        docsPath: A,
        name: "AbiConstructorNotFoundError"
      });
    }
  }
  Q.AbiConstructorNotFoundError = r;
  class o extends n.BaseError {
    constructor({ docsPath: A }) {
      super([
        "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.",
        "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."
      ].join(`
`), {
        docsPath: A,
        name: "AbiConstructorParamsNotFoundError"
      });
    }
  }
  Q.AbiConstructorParamsNotFoundError = o;
  class a extends n.BaseError {
    constructor({ data: A, size: x }) {
      super([
        `Data size of ${x} bytes is invalid.`,
        "Size must be in increments of 32 bytes (size % 32 === 0)."
      ].join(`
`), {
        metaMessages: [`Data: ${A} (${x} bytes)`],
        name: "AbiDecodingDataSizeInvalidError"
      });
    }
  }
  Q.AbiDecodingDataSizeInvalidError = a;
  class i extends n.BaseError {
    constructor({ data: A, params: x, size: H }) {
      super([`Data size of ${H} bytes is too small for given parameters.`].join(`
`), {
        metaMessages: [
          `Params: (${(0, e.formatAbiParams)(x, { includeName: !0 })})`,
          `Data:   ${A} (${H} bytes)`
        ],
        name: "AbiDecodingDataSizeTooSmallError"
      }), Object.defineProperty(this, "data", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "params", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "size", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.data = A, this.params = x, this.size = H;
    }
  }
  Q.AbiDecodingDataSizeTooSmallError = i;
  class s extends n.BaseError {
    constructor() {
      super('Cannot decode zero data ("0x") with ABI parameters.', {
        name: "AbiDecodingZeroDataError"
      });
    }
  }
  Q.AbiDecodingZeroDataError = s;
  class u extends n.BaseError {
    constructor({ expectedLength: A, givenLength: x, type: H }) {
      super([
        `ABI encoding array length mismatch for type ${H}.`,
        `Expected length: ${A}`,
        `Given length: ${x}`
      ].join(`
`), { name: "AbiEncodingArrayLengthMismatchError" });
    }
  }
  Q.AbiEncodingArrayLengthMismatchError = u;
  class d extends n.BaseError {
    constructor({ expectedSize: A, value: x }) {
      super(`Size of bytes "${x}" (bytes${(0, t.size)(x)}) does not match expected size (bytes${A}).`, { name: "AbiEncodingBytesSizeMismatchError" });
    }
  }
  Q.AbiEncodingBytesSizeMismatchError = d;
  class f extends n.BaseError {
    constructor({ expectedLength: A, givenLength: x }) {
      super([
        "ABI encoding params/values length mismatch.",
        `Expected length (params): ${A}`,
        `Given length (values): ${x}`
      ].join(`
`), { name: "AbiEncodingLengthMismatchError" });
    }
  }
  Q.AbiEncodingLengthMismatchError = f;
  class c extends n.BaseError {
    constructor(A, { docsPath: x }) {
      super([
        `Arguments (\`args\`) were provided to "${A}", but "${A}" on the ABI does not contain any parameters (\`inputs\`).`,
        "Cannot encode error result without knowing what the parameter types are.",
        "Make sure you are using the correct ABI and that the inputs exist on it."
      ].join(`
`), {
        docsPath: x,
        name: "AbiErrorInputsNotFoundError"
      });
    }
  }
  Q.AbiErrorInputsNotFoundError = c;
  class m extends n.BaseError {
    constructor(A, { docsPath: x } = {}) {
      super([
        `Error ${A ? `"${A}" ` : ""}not found on ABI.`,
        "Make sure you are using the correct ABI and that the error exists on it."
      ].join(`
`), {
        docsPath: x,
        name: "AbiErrorNotFoundError"
      });
    }
  }
  Q.AbiErrorNotFoundError = m;
  class y extends n.BaseError {
    constructor(A, { docsPath: x }) {
      super([
        `Encoded error signature "${A}" not found on ABI.`,
        "Make sure you are using the correct ABI and that the error exists on it.",
        `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${A}.`
      ].join(`
`), {
        docsPath: x,
        name: "AbiErrorSignatureNotFoundError"
      }), Object.defineProperty(this, "signature", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.signature = A;
    }
  }
  Q.AbiErrorSignatureNotFoundError = y;
  class g extends n.BaseError {
    constructor({ docsPath: A }) {
      super("Cannot extract event signature from empty topics.", {
        docsPath: A,
        name: "AbiEventSignatureEmptyTopicsError"
      });
    }
  }
  Q.AbiEventSignatureEmptyTopicsError = g;
  class b extends n.BaseError {
    constructor(A, { docsPath: x }) {
      super([
        `Encoded event signature "${A}" not found on ABI.`,
        "Make sure you are using the correct ABI and that the event exists on it.",
        `You can look up the signature here: https://openchain.xyz/signatures?query=${A}.`
      ].join(`
`), {
        docsPath: x,
        name: "AbiEventSignatureNotFoundError"
      });
    }
  }
  Q.AbiEventSignatureNotFoundError = b;
  class h extends n.BaseError {
    constructor(A, { docsPath: x } = {}) {
      super([
        `Event ${A ? `"${A}" ` : ""}not found on ABI.`,
        "Make sure you are using the correct ABI and that the event exists on it."
      ].join(`
`), {
        docsPath: x,
        name: "AbiEventNotFoundError"
      });
    }
  }
  Q.AbiEventNotFoundError = h;
  class _ extends n.BaseError {
    constructor(A, { docsPath: x } = {}) {
      super([
        `Function ${A ? `"${A}" ` : ""}not found on ABI.`,
        "Make sure you are using the correct ABI and that the function exists on it."
      ].join(`
`), {
        docsPath: x,
        name: "AbiFunctionNotFoundError"
      });
    }
  }
  Q.AbiFunctionNotFoundError = _;
  class P extends n.BaseError {
    constructor(A, { docsPath: x }) {
      super([
        `Function "${A}" does not contain any \`outputs\` on ABI.`,
        "Cannot decode function result without knowing what the parameter types are.",
        "Make sure you are using the correct ABI and that the function exists on it."
      ].join(`
`), {
        docsPath: x,
        name: "AbiFunctionOutputsNotFoundError"
      });
    }
  }
  Q.AbiFunctionOutputsNotFoundError = P;
  class j extends n.BaseError {
    constructor(A, { docsPath: x }) {
      super([
        `Encoded function signature "${A}" not found on ABI.`,
        "Make sure you are using the correct ABI and that the function exists on it.",
        `You can look up the signature here: https://openchain.xyz/signatures?query=${A}.`
      ].join(`
`), {
        docsPath: x,
        name: "AbiFunctionSignatureNotFoundError"
      });
    }
  }
  Q.AbiFunctionSignatureNotFoundError = j;
  class v extends n.BaseError {
    constructor(A, x) {
      super("Found ambiguous types in overloaded ABI items.", {
        metaMessages: [
          `\`${A.type}\` in \`${(0, e.formatAbiItem)(A.abiItem)}\`, and`,
          `\`${x.type}\` in \`${(0, e.formatAbiItem)(x.abiItem)}\``,
          "",
          "These types encode differently and cannot be distinguished at runtime.",
          "Remove one of the ambiguous items in the ABI."
        ],
        name: "AbiItemAmbiguityError"
      });
    }
  }
  Q.AbiItemAmbiguityError = v;
  class E extends n.BaseError {
    constructor({ expectedSize: A, givenSize: x }) {
      super(`Expected bytes${A}, got bytes${x}.`, {
        name: "BytesSizeMismatchError"
      });
    }
  }
  Q.BytesSizeMismatchError = E;
  class l extends n.BaseError {
    constructor({ abiItem: A, data: x, params: H, size: F }) {
      super([
        `Data size of ${F} bytes is too small for non-indexed event parameters.`
      ].join(`
`), {
        metaMessages: [
          `Params: (${(0, e.formatAbiParams)(H, { includeName: !0 })})`,
          `Data:   ${x} (${F} bytes)`
        ],
        name: "DecodeLogDataMismatch"
      }), Object.defineProperty(this, "abiItem", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "data", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "params", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "size", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.abiItem = A, this.data = x, this.params = H, this.size = F;
    }
  }
  Q.DecodeLogDataMismatch = l;
  class p extends n.BaseError {
    constructor({ abiItem: A, param: x }) {
      super([
        `Expected a topic for indexed event parameter${x.name ? ` "${x.name}"` : ""} on event "${(0, e.formatAbiItem)(A, { includeName: !0 })}".`
      ].join(`
`), { name: "DecodeLogTopicsMismatch" }), Object.defineProperty(this, "abiItem", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.abiItem = A;
    }
  }
  Q.DecodeLogTopicsMismatch = p;
  class T extends n.BaseError {
    constructor(A, { docsPath: x }) {
      super([
        `Type "${A}" is not a valid encoding type.`,
        "Please provide a valid ABI type."
      ].join(`
`), { docsPath: x, name: "InvalidAbiEncodingType" });
    }
  }
  Q.InvalidAbiEncodingTypeError = T;
  class w extends n.BaseError {
    constructor(A, { docsPath: x }) {
      super([
        `Type "${A}" is not a valid decoding type.`,
        "Please provide a valid ABI type."
      ].join(`
`), { docsPath: x, name: "InvalidAbiDecodingType" });
    }
  }
  Q.InvalidAbiDecodingTypeError = w;
  class I extends n.BaseError {
    constructor(A) {
      super([`Value "${A}" is not a valid array.`].join(`
`), {
        name: "InvalidArrayError"
      });
    }
  }
  Q.InvalidArrayError = I;
  class C extends n.BaseError {
    constructor(A) {
      super([
        `"${A}" is not a valid definition type.`,
        'Valid types: "function", "event", "error"'
      ].join(`
`), { name: "InvalidDefinitionTypeError" });
    }
  }
  Q.InvalidDefinitionTypeError = C;
  class B extends n.BaseError {
    constructor(A) {
      super(`Type "${A}" is not supported for packed encoding.`, {
        name: "UnsupportedPackedAbiType"
      });
    }
  }
  return Q.UnsupportedPackedAbiType = B, Q;
}
var nn = {}, wf;
function qh() {
  if (wf) return nn;
  wf = 1, Object.defineProperty(nn, "__esModule", { value: !0 }), nn.FilterTypeNotSupportedError = void 0;
  const e = ie();
  class t extends e.BaseError {
    constructor(r) {
      super(`Filter type "${r}" is not supported.`, {
        name: "FilterTypeNotSupportedError"
      });
    }
  }
  return nn.FilterTypeNotSupportedError = t, nn;
}
var Rt = {}, pr = {}, at = {}, Tf;
function pu() {
  if (Tf) return at;
  Tf = 1, Object.defineProperty(at, "__esModule", { value: !0 }), at.InvalidBytesLengthError = at.SizeExceedsPaddingSizeError = at.SliceOffsetOutOfBoundsError = void 0;
  const e = ie();
  class t extends e.BaseError {
    constructor({ offset: a, position: i, size: s }) {
      super(`Slice ${i === "start" ? "starting" : "ending"} at offset "${a}" is out-of-bounds (size: ${s}).`, { name: "SliceOffsetOutOfBoundsError" });
    }
  }
  at.SliceOffsetOutOfBoundsError = t;
  class n extends e.BaseError {
    constructor({ size: a, targetSize: i, type: s }) {
      super(`${s.charAt(0).toUpperCase()}${s.slice(1).toLowerCase()} size (${a}) exceeds padding size (${i}).`, { name: "SizeExceedsPaddingSizeError" });
    }
  }
  at.SizeExceedsPaddingSizeError = n;
  class r extends e.BaseError {
    constructor({ size: a, targetSize: i, type: s }) {
      super(`${s.charAt(0).toUpperCase()}${s.slice(1).toLowerCase()} is expected to be ${i} ${s} long, but is ${a} ${s} long.`, { name: "InvalidBytesLengthError" });
    }
  }
  return at.InvalidBytesLengthError = r, at;
}
var Af;
function kt() {
  if (Af) return pr;
  Af = 1, Object.defineProperty(pr, "__esModule", { value: !0 }), pr.pad = t, pr.padHex = n, pr.padBytes = r;
  const e = pu();
  function t(o, { dir: a, size: i = 32 } = {}) {
    return typeof o == "string" ? n(o, { dir: a, size: i }) : r(o, { dir: a, size: i });
  }
  function n(o, { dir: a, size: i = 32 } = {}) {
    if (i === null)
      return o;
    const s = o.replace("0x", "");
    if (s.length > i * 2)
      throw new e.SizeExceedsPaddingSizeError({
        size: Math.ceil(s.length / 2),
        targetSize: i,
        type: "hex"
      });
    return `0x${s[a === "right" ? "padEnd" : "padStart"](i * 2, "0")}`;
  }
  function r(o, { dir: a, size: i = 32 } = {}) {
    if (i === null)
      return o;
    if (o.length > i)
      throw new e.SizeExceedsPaddingSizeError({
        size: o.length,
        targetSize: i,
        type: "bytes"
      });
    const s = new Uint8Array(i);
    for (let u = 0; u < i; u++) {
      const d = a === "right";
      s[d ? u : i - u - 1] = o[d ? u : o.length - u - 1];
    }
    return s;
  }
  return pr;
}
var st = {}, ke = {}, Sf;
function qr() {
  if (Sf) return ke;
  Sf = 1, Object.defineProperty(ke, "__esModule", { value: !0 }), ke.SizeOverflowError = ke.InvalidHexValueError = ke.InvalidHexBooleanError = ke.InvalidBytesBooleanError = ke.IntegerOutOfRangeError = void 0;
  const e = ie();
  class t extends e.BaseError {
    constructor({ max: s, min: u, signed: d, size: f, value: c }) {
      super(`Number "${c}" is not in safe ${f ? `${f * 8}-bit ${d ? "signed" : "unsigned"} ` : ""}integer range ${s ? `(${u} to ${s})` : `(above ${u})`}`, { name: "IntegerOutOfRangeError" });
    }
  }
  ke.IntegerOutOfRangeError = t;
  class n extends e.BaseError {
    constructor(s) {
      super(`Bytes value "${s}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`, {
        name: "InvalidBytesBooleanError"
      });
    }
  }
  ke.InvalidBytesBooleanError = n;
  class r extends e.BaseError {
    constructor(s) {
      super(`Hex value "${s}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`, { name: "InvalidHexBooleanError" });
    }
  }
  ke.InvalidHexBooleanError = r;
  class o extends e.BaseError {
    constructor(s) {
      super(`Hex value "${s}" is an odd length (${s.length}). It must be an even length.`, { name: "InvalidHexValueError" });
    }
  }
  ke.InvalidHexValueError = o;
  class a extends e.BaseError {
    constructor({ givenSize: s, maxSize: u }) {
      super(`Size cannot exceed ${u} bytes. Given size: ${s} bytes.`, { name: "SizeOverflowError" });
    }
  }
  return ke.SizeOverflowError = a, ke;
}
var Io = {}, If;
function Ht() {
  if (If) return Io;
  If = 1, Object.defineProperty(Io, "__esModule", { value: !0 }), Io.trim = e;
  function e(t, { dir: n = "left" } = {}) {
    let r = typeof t == "string" ? t.replace("0x", "") : t, o = 0;
    for (let a = 0; a < r.length - 1 && r[n === "left" ? a : r.length - a - 1].toString() === "0"; a++)
      o++;
    return r = n === "left" ? r.slice(o) : r.slice(0, r.length - o), typeof t == "string" ? (r.length === 1 && n === "right" && (r = `${r}0`), `0x${r.length % 2 === 1 ? `0${r}` : r}`) : r;
  }
  return Io;
}
var Rf;
function Pe() {
  if (Rf) return st;
  Rf = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.assertSize = o, st.fromHex = a, st.hexToBigInt = i, st.hexToBool = s, st.hexToNumber = u, st.hexToString = d;
  const e = qr(), t = Ne(), n = Ht(), r = be();
  function o(f, { size: c }) {
    if ((0, t.size)(f) > c)
      throw new e.SizeOverflowError({
        givenSize: (0, t.size)(f),
        maxSize: c
      });
  }
  function a(f, c) {
    const m = typeof c == "string" ? { to: c } : c, y = m.to;
    return y === "number" ? u(f, m) : y === "bigint" ? i(f, m) : y === "string" ? d(f, m) : y === "boolean" ? s(f, m) : (0, r.hexToBytes)(f, m);
  }
  function i(f, c = {}) {
    const { signed: m } = c;
    c.size && o(f, { size: c.size });
    const y = BigInt(f);
    if (!m)
      return y;
    const g = (f.length - 2) / 2, b = (1n << BigInt(g) * 8n - 1n) - 1n;
    return y <= b ? y : y - BigInt(`0x${"f".padStart(g * 2, "f")}`) - 1n;
  }
  function s(f, c = {}) {
    let m = f;
    if (c.size && (o(m, { size: c.size }), m = (0, n.trim)(m)), (0, n.trim)(m) === "0x00")
      return !1;
    if ((0, n.trim)(m) === "0x01")
      return !0;
    throw new e.InvalidHexBooleanError(m);
  }
  function u(f, c = {}) {
    return Number(i(f, c));
  }
  function d(f, c = {}) {
    let m = (0, r.hexToBytes)(f);
    return c.size && (o(m, { size: c.size }), m = (0, n.trim)(m, { dir: "right" })), new TextDecoder().decode(m);
  }
  return st;
}
var Ot = {}, Of;
function Y() {
  if (Of) return Ot;
  Of = 1, Object.defineProperty(Ot, "__esModule", { value: !0 }), Ot.toHex = o, Ot.boolToHex = a, Ot.bytesToHex = i, Ot.numberToHex = s, Ot.stringToHex = d;
  const e = qr(), t = kt(), n = Pe(), r = Array.from({ length: 256 }, (f, c) => c.toString(16).padStart(2, "0"));
  function o(f, c = {}) {
    return typeof f == "number" || typeof f == "bigint" ? s(f, c) : typeof f == "string" ? d(f, c) : typeof f == "boolean" ? a(f, c) : i(f, c);
  }
  function a(f, c = {}) {
    const m = `0x${Number(f)}`;
    return typeof c.size == "number" ? ((0, n.assertSize)(m, { size: c.size }), (0, t.pad)(m, { size: c.size })) : m;
  }
  function i(f, c = {}) {
    let m = "";
    for (let g = 0; g < f.length; g++)
      m += r[f[g]];
    const y = `0x${m}`;
    return typeof c.size == "number" ? ((0, n.assertSize)(y, { size: c.size }), (0, t.pad)(y, { dir: "right", size: c.size })) : y;
  }
  function s(f, c = {}) {
    const { signed: m, size: y } = c, g = BigInt(f);
    let b;
    y ? m ? b = (1n << BigInt(y) * 8n - 1n) - 1n : b = 2n ** (BigInt(y) * 8n) - 1n : typeof f == "number" && (b = BigInt(Number.MAX_SAFE_INTEGER));
    const h = typeof b == "bigint" && m ? -b - 1n : 0;
    if (b && g > b || g < h) {
      const P = typeof f == "bigint" ? "n" : "";
      throw new e.IntegerOutOfRangeError({
        max: b ? `${b}${P}` : void 0,
        min: `${h}${P}`,
        signed: m,
        size: y,
        value: `${f}${P}`
      });
    }
    const _ = `0x${(m && g < 0 ? (1n << BigInt(y * 8)) + BigInt(g) : g).toString(16)}`;
    return y ? (0, t.pad)(_, { size: y }) : _;
  }
  const u = new TextEncoder();
  function d(f, c = {}) {
    const m = u.encode(f);
    return i(m, c);
  }
  return Ot;
}
var Bf;
function be() {
  if (Bf) return Rt;
  Bf = 1, Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.toBytes = i, Rt.boolToBytes = s, Rt.hexToBytes = f, Rt.numberToBytes = c, Rt.stringToBytes = m;
  const e = ie(), t = Oe(), n = kt(), r = Pe(), o = Y(), a = new TextEncoder();
  function i(y, g = {}) {
    return typeof y == "number" || typeof y == "bigint" ? c(y, g) : typeof y == "boolean" ? s(y, g) : (0, t.isHex)(y) ? f(y, g) : m(y, g);
  }
  function s(y, g = {}) {
    const b = new Uint8Array(1);
    return b[0] = Number(y), typeof g.size == "number" ? ((0, r.assertSize)(b, { size: g.size }), (0, n.pad)(b, { size: g.size })) : b;
  }
  const u = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
  };
  function d(y) {
    if (y >= u.zero && y <= u.nine)
      return y - u.zero;
    if (y >= u.A && y <= u.F)
      return y - (u.A - 10);
    if (y >= u.a && y <= u.f)
      return y - (u.a - 10);
  }
  function f(y, g = {}) {
    let b = y;
    g.size && ((0, r.assertSize)(b, { size: g.size }), b = (0, n.pad)(b, { dir: "right", size: g.size }));
    let h = b.slice(2);
    h.length % 2 && (h = `0${h}`);
    const _ = h.length / 2, P = new Uint8Array(_);
    for (let j = 0, v = 0; j < _; j++) {
      const E = d(h.charCodeAt(v++)), l = d(h.charCodeAt(v++));
      if (E === void 0 || l === void 0)
        throw new e.BaseError(`Invalid byte sequence ("${h[v - 2]}${h[v - 1]}" in "${h}").`);
      P[j] = E * 16 + l;
    }
    return P;
  }
  function c(y, g) {
    const b = (0, o.numberToHex)(y, g);
    return f(b);
  }
  function m(y, g = {}) {
    const b = a.encode(y);
    return typeof g.size == "number" ? ((0, r.assertSize)(b, { size: g.size }), (0, n.pad)(b, { dir: "right", size: g.size })) : b;
  }
  return Rt;
}
var Ro = {}, Cf;
function Me() {
  if (Cf) return Ro;
  Cf = 1, Object.defineProperty(Ro, "__esModule", { value: !0 }), Ro.keccak256 = o;
  const e = /* @__PURE__ */ Hp(), t = Oe(), n = be(), r = Y();
  function o(a, i) {
    const s = i || "hex", u = (0, e.keccak_256)((0, t.isHex)(a, { strict: !1 }) ? (0, n.toBytes)(a) : a);
    return s === "bytes" ? u : (0, r.toHex)(u);
  }
  return Ro;
}
var on = {}, Oo = {}, Bo = {}, qf;
function s1() {
  if (qf) return Bo;
  qf = 1, Object.defineProperty(Bo, "__esModule", { value: !0 }), Bo.hashSignature = r;
  const e = be(), t = Me(), n = (o) => (0, t.keccak256)((0, e.toBytes)(o));
  function r(o) {
    return n(o);
  }
  return Bo;
}
var an = {}, Co = {}, Mf;
function u1() {
  if (Mf) return Co;
  Mf = 1, Object.defineProperty(Co, "__esModule", { value: !0 }), Co.normalizeSignature = t;
  const e = ie();
  function t(n) {
    let r = !0, o = "", a = 0, i = "", s = !1;
    for (let u = 0; u < n.length; u++) {
      const d = n[u];
      if (["(", ")", ","].includes(d) && (r = !0), d === "(" && a++, d === ")" && a--, !!r) {
        if (a === 0) {
          if (d === " " && ["event", "function", ""].includes(i))
            i = "";
          else if (i += d, d === ")") {
            s = !0;
            break;
          }
          continue;
        }
        if (d === " ") {
          n[u - 1] !== "," && o !== "," && o !== ",(" && (o = "", r = !1);
          continue;
        }
        i += d, o += d;
      }
    }
    if (!s)
      throw new e.BaseError("Unable to normalize signature.");
    return i;
  }
  return Co;
}
var xf;
function Hc() {
  if (xf) return an;
  xf = 1, Object.defineProperty(an, "__esModule", { value: !0 }), an.toSignature = void 0;
  const e = /* @__PURE__ */ hu(), t = u1(), n = (r) => {
    const o = typeof r == "string" ? r : (0, e.formatAbiItem)(r);
    return (0, t.normalizeSignature)(o);
  };
  return an.toSignature = n, an;
}
var Ff;
function _u() {
  if (Ff) return Oo;
  Ff = 1, Object.defineProperty(Oo, "__esModule", { value: !0 }), Oo.toSignatureHash = n;
  const e = s1(), t = Hc();
  function n(r) {
    return (0, e.hashSignature)((0, t.toSignature)(r));
  }
  return Oo;
}
var kf;
function Mr() {
  if (kf) return on;
  kf = 1, Object.defineProperty(on, "__esModule", { value: !0 }), on.toEventSelector = void 0;
  const e = _u();
  return on.toEventSelector = e.toSignatureHash, on;
}
var sn = {}, un = {}, Hf;
function Ze() {
  if (Hf) return un;
  Hf = 1, Object.defineProperty(un, "__esModule", { value: !0 }), un.InvalidAddressError = void 0;
  const e = ie();
  class t extends e.BaseError {
    constructor({ address: r }) {
      super(`Address "${r}" is invalid.`, {
        metaMessages: [
          "- Address must be a hex value of 20 bytes (40 hex characters).",
          "- Address must match its checksum counterpart."
        ],
        name: "InvalidAddressError"
      });
    }
  }
  return un.InvalidAddressError = t, un;
}
var gc = {}, cn = {}, $f;
function Nn() {
  if ($f) return cn;
  $f = 1, Object.defineProperty(cn, "__esModule", { value: !0 }), cn.LruMap = void 0;
  class e extends Map {
    constructor(n) {
      super(), Object.defineProperty(this, "maxSize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.maxSize = n;
    }
    get(n) {
      const r = super.get(n);
      return super.has(n) && r !== void 0 && (this.delete(n), super.set(n, r)), r;
    }
    set(n, r) {
      if (super.set(n, r), this.maxSize && this.size > this.maxSize) {
        const o = this.keys().next().value;
        o && this.delete(o);
      }
      return this;
    }
  }
  return cn.LruMap = e, cn;
}
var dn = {}, Nf;
function Ue() {
  if (Nf) return dn;
  Nf = 1, Object.defineProperty(dn, "__esModule", { value: !0 }), dn.checksumAddress = i, dn.getAddress = s;
  const e = Ze(), t = be(), n = Me(), r = Nn(), o = ze(), a = new r.LruMap(8192);
  function i(u, d) {
    if (a.has(`${u}.${d}`))
      return a.get(`${u}.${d}`);
    const f = d ? `${d}${u.toLowerCase()}` : u.substring(2).toLowerCase(), c = (0, n.keccak256)((0, t.stringToBytes)(f), "bytes"), m = (d ? f.substring(`${d}0x`.length) : f).split("");
    for (let g = 0; g < 40; g += 2)
      c[g >> 1] >> 4 >= 8 && m[g] && (m[g] = m[g].toUpperCase()), (c[g >> 1] & 15) >= 8 && m[g + 1] && (m[g + 1] = m[g + 1].toUpperCase());
    const y = `0x${m.join("")}`;
    return a.set(`${u}.${d}`, y), y;
  }
  function s(u, d) {
    if (!(0, o.isAddress)(u, { strict: !1 }))
      throw new e.InvalidAddressError({ address: u });
    return i(u, d);
  }
  return dn;
}
var zf;
function ze() {
  return zf || (zf = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isAddressCache = void 0, e.isAddress = o;
    const t = Nn(), n = Ue(), r = /^0x[a-fA-F0-9]{40}$/;
    e.isAddressCache = new t.LruMap(8192);
    function o(a, i) {
      const { strict: s = !0 } = i ?? {}, u = `${a}.${s}`;
      if (e.isAddressCache.has(u))
        return e.isAddressCache.get(u);
      const d = r.test(a) ? a.toLowerCase() === a ? !0 : s ? (0, n.checksumAddress)(a) === a : !0 : !1;
      return e.isAddressCache.set(u, d), d;
    }
  }(gc)), gc;
}
var _r = {}, Df;
function Be() {
  if (Df) return _r;
  Df = 1, Object.defineProperty(_r, "__esModule", { value: !0 }), _r.concat = e, _r.concatBytes = t, _r.concatHex = n;
  function e(r) {
    return typeof r[0] == "string" ? n(r) : t(r);
  }
  function t(r) {
    let o = 0;
    for (const s of r)
      o += s.length;
    const a = new Uint8Array(o);
    let i = 0;
    for (const s of r)
      a.set(s, i), i += s.length;
    return a;
  }
  function n(r) {
    return `0x${r.reduce((o, a) => o + a.replace("0x", ""), "")}`;
  }
  return _r;
}
var vr = {}, Lf;
function Je() {
  if (Lf) return vr;
  Lf = 1, Object.defineProperty(vr, "__esModule", { value: !0 }), vr.slice = r, vr.sliceBytes = i, vr.sliceHex = s;
  const e = pu(), t = Oe(), n = Ne();
  function r(u, d, f, { strict: c } = {}) {
    return (0, t.isHex)(u, { strict: !1 }) ? s(u, d, f, {
      strict: c
    }) : i(u, d, f, {
      strict: c
    });
  }
  function o(u, d) {
    if (typeof d == "number" && d > 0 && d > (0, n.size)(u) - 1)
      throw new e.SliceOffsetOutOfBoundsError({
        offset: d,
        position: "start",
        size: (0, n.size)(u)
      });
  }
  function a(u, d, f) {
    if (typeof d == "number" && typeof f == "number" && (0, n.size)(u) !== f - d)
      throw new e.SliceOffsetOutOfBoundsError({
        offset: f,
        position: "end",
        size: (0, n.size)(u)
      });
  }
  function i(u, d, f, { strict: c } = {}) {
    o(u, d);
    const m = u.slice(d, f);
    return c && a(m, d, f), m;
  }
  function s(u, d, f, { strict: c } = {}) {
    o(u, d);
    const m = `0x${u.replace("0x", "").slice((d ?? 0) * 2, (f ?? u.length) * 2)}`;
    return c && a(m, d, f), m;
  }
  return vr;
}
var ut = {}, Uf;
function vu() {
  return Uf || (Uf = 1, Object.defineProperty(ut, "__esModule", { value: !0 }), ut.integerRegex = ut.bytesRegex = ut.arrayRegex = void 0, ut.arrayRegex = /^(.*)\[([0-9]*)\]$/, ut.bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, ut.integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/), ut;
}
var Gf;
function Ye() {
  if (Gf) return sn;
  Gf = 1, Object.defineProperty(sn, "__esModule", { value: !0 }), sn.encodeAbiParameters = c, sn.getArrayComponents = l;
  const e = pe(), t = Ze(), n = ie(), r = qr(), o = ze(), a = Be(), i = kt(), s = Ne(), u = Je(), d = Y(), f = vu();
  function c(p, T) {
    if (p.length !== T.length)
      throw new e.AbiEncodingLengthMismatchError({
        expectedLength: p.length,
        givenLength: T.length
      });
    const w = m({
      params: p,
      values: T
    }), I = g(w);
    return I.length === 0 ? "0x" : I;
  }
  function m({ params: p, values: T }) {
    const w = [];
    for (let I = 0; I < p.length; I++)
      w.push(y({ param: p[I], value: T[I] }));
    return w;
  }
  function y({ param: p, value: T }) {
    const w = l(p.type);
    if (w) {
      const [I, C] = w;
      return h(T, { length: I, param: { ...p, type: C } });
    }
    if (p.type === "tuple")
      return E(T, {
        param: p
      });
    if (p.type === "address")
      return b(T);
    if (p.type === "bool")
      return P(T);
    if (p.type.startsWith("uint") || p.type.startsWith("int")) {
      const I = p.type.startsWith("int"), [, , C = "256"] = f.integerRegex.exec(p.type) ?? [];
      return j(T, {
        signed: I,
        size: Number(C)
      });
    }
    if (p.type.startsWith("bytes"))
      return _(T, { param: p });
    if (p.type === "string")
      return v(T);
    throw new e.InvalidAbiEncodingTypeError(p.type, {
      docsPath: "/docs/contract/encodeAbiParameters"
    });
  }
  function g(p) {
    let T = 0;
    for (let B = 0; B < p.length; B++) {
      const { dynamic: M, encoded: A } = p[B];
      M ? T += 32 : T += (0, s.size)(A);
    }
    const w = [], I = [];
    let C = 0;
    for (let B = 0; B < p.length; B++) {
      const { dynamic: M, encoded: A } = p[B];
      M ? (w.push((0, d.numberToHex)(T + C, { size: 32 })), I.push(A), C += (0, s.size)(A)) : w.push(A);
    }
    return (0, a.concat)([...w, ...I]);
  }
  function b(p) {
    if (!(0, o.isAddress)(p))
      throw new t.InvalidAddressError({ address: p });
    return { dynamic: !1, encoded: (0, i.padHex)(p.toLowerCase()) };
  }
  function h(p, { length: T, param: w }) {
    const I = T === null;
    if (!Array.isArray(p))
      throw new e.InvalidArrayError(p);
    if (!I && p.length !== T)
      throw new e.AbiEncodingArrayLengthMismatchError({
        expectedLength: T,
        givenLength: p.length,
        type: `${w.type}[${T}]`
      });
    let C = !1;
    const B = [];
    for (let M = 0; M < p.length; M++) {
      const A = y({ param: w, value: p[M] });
      A.dynamic && (C = !0), B.push(A);
    }
    if (I || C) {
      const M = g(B);
      if (I) {
        const A = (0, d.numberToHex)(B.length, { size: 32 });
        return {
          dynamic: !0,
          encoded: B.length > 0 ? (0, a.concat)([A, M]) : A
        };
      }
      if (C)
        return { dynamic: !0, encoded: M };
    }
    return {
      dynamic: !1,
      encoded: (0, a.concat)(B.map(({ encoded: M }) => M))
    };
  }
  function _(p, { param: T }) {
    const [, w] = T.type.split("bytes"), I = (0, s.size)(p);
    if (!w) {
      let C = p;
      return I % 32 !== 0 && (C = (0, i.padHex)(C, {
        dir: "right",
        size: Math.ceil((p.length - 2) / 2 / 32) * 32
      })), {
        dynamic: !0,
        encoded: (0, a.concat)([(0, i.padHex)((0, d.numberToHex)(I, { size: 32 })), C])
      };
    }
    if (I !== Number.parseInt(w))
      throw new e.AbiEncodingBytesSizeMismatchError({
        expectedSize: Number.parseInt(w),
        value: p
      });
    return { dynamic: !1, encoded: (0, i.padHex)(p, { dir: "right" }) };
  }
  function P(p) {
    if (typeof p != "boolean")
      throw new n.BaseError(`Invalid boolean value: "${p}" (type: ${typeof p}). Expected: \`true\` or \`false\`.`);
    return { dynamic: !1, encoded: (0, i.padHex)((0, d.boolToHex)(p)) };
  }
  function j(p, { signed: T, size: w = 256 }) {
    if (typeof w == "number") {
      const I = 2n ** (BigInt(w) - (T ? 1n : 0n)) - 1n, C = T ? -I - 1n : 0n;
      if (p > I || p < C)
        throw new r.IntegerOutOfRangeError({
          max: I.toString(),
          min: C.toString(),
          signed: T,
          size: w / 8,
          value: p.toString()
        });
    }
    return {
      dynamic: !1,
      encoded: (0, d.numberToHex)(p, {
        size: 32,
        signed: T
      })
    };
  }
  function v(p) {
    const T = (0, d.stringToHex)(p), w = Math.ceil((0, s.size)(T) / 32), I = [];
    for (let C = 0; C < w; C++)
      I.push((0, i.padHex)((0, u.slice)(T, C * 32, (C + 1) * 32), {
        dir: "right"
      }));
    return {
      dynamic: !0,
      encoded: (0, a.concat)([
        (0, i.padHex)((0, d.numberToHex)((0, s.size)(T), { size: 32 })),
        ...I
      ])
    };
  }
  function E(p, { param: T }) {
    let w = !1;
    const I = [];
    for (let C = 0; C < T.components.length; C++) {
      const B = T.components[C], M = Array.isArray(p) ? C : B.name, A = y({
        param: B,
        value: p[M]
      });
      I.push(A), A.dynamic && (w = !0);
    }
    return {
      dynamic: w,
      encoded: w ? g(I) : (0, a.concat)(I.map(({ encoded: C }) => C))
    };
  }
  function l(p) {
    const T = p.match(/^(.*)\[(\d+)?\]$/);
    return T ? [T[2] ? Number(T[2]) : null, T[1]] : void 0;
  }
  return sn;
}
var Er = {}, fn = {}, Vf;
function cr() {
  if (Vf) return fn;
  Vf = 1, Object.defineProperty(fn, "__esModule", { value: !0 }), fn.toFunctionSelector = void 0;
  const e = Je(), t = _u(), n = (r) => (0, e.slice)((0, t.toSignatureHash)(r), 0, 4);
  return fn.toFunctionSelector = n, fn;
}
var Wf;
function vt() {
  if (Wf) return Er;
  Wf = 1, Object.defineProperty(Er, "__esModule", { value: !0 }), Er.getAbiItem = a, Er.isArgOfType = i, Er.getAmbiguousTypes = s;
  const e = pe(), t = Oe(), n = ze(), r = Mr(), o = cr();
  function a(u) {
    const { abi: d, args: f = [], name: c } = u, m = (0, t.isHex)(c, { strict: !1 }), y = d.filter((b) => m ? b.type === "function" ? (0, o.toFunctionSelector)(b) === c : b.type === "event" ? (0, r.toEventSelector)(b) === c : !1 : "name" in b && b.name === c);
    if (y.length === 0)
      return;
    if (y.length === 1)
      return y[0];
    let g;
    for (const b of y) {
      if (!("inputs" in b))
        continue;
      if (!f || f.length === 0) {
        if (!b.inputs || b.inputs.length === 0)
          return b;
        continue;
      }
      if (!b.inputs || b.inputs.length === 0 || b.inputs.length !== f.length)
        continue;
      if (f.every((_, P) => {
        const j = "inputs" in b && b.inputs[P];
        return j ? i(_, j) : !1;
      })) {
        if (g && "inputs" in g && g.inputs) {
          const _ = s(b.inputs, g.inputs, f);
          if (_)
            throw new e.AbiItemAmbiguityError({
              abiItem: b,
              type: _[0]
            }, {
              abiItem: g,
              type: _[1]
            });
        }
        g = b;
      }
    }
    return g || y[0];
  }
  function i(u, d) {
    const f = typeof u, c = d.type;
    switch (c) {
      case "address":
        return (0, n.isAddress)(u, { strict: !1 });
      case "bool":
        return f === "boolean";
      case "function":
        return f === "string";
      case "string":
        return f === "string";
      default:
        return c === "tuple" && "components" in d ? Object.values(d.components).every((m, y) => i(Object.values(u)[y], m)) : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(c) ? f === "number" || f === "bigint" : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(c) ? f === "string" || u instanceof Uint8Array : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(c) ? Array.isArray(u) && u.every((m) => i(m, {
          ...d,
          type: c.replace(/(\[[0-9]{0,}\])$/, "")
        })) : !1;
    }
  }
  function s(u, d, f) {
    for (const c in u) {
      const m = u[c], y = d[c];
      if (m.type === "tuple" && y.type === "tuple" && "components" in m && "components" in y)
        return s(m.components, y.components, f[c]);
      const g = [m.type, y.type];
      if (g.includes("address") && g.includes("bytes20") ? !0 : g.includes("address") && g.includes("string") ? (0, n.isAddress)(f[c], { strict: !1 }) : g.includes("address") && g.includes("bytes") ? (0, n.isAddress)(f[c], { strict: !1 }) : !1)
        return g;
    }
  }
  return Er;
}
var Kf;
function dr() {
  if (Kf) return To;
  Kf = 1, Object.defineProperty(To, "__esModule", { value: !0 }), To.encodeEventTopics = d;
  const e = pe(), t = qh(), n = be(), r = Me(), o = Mr(), a = Ye(), i = _t(), s = vt(), u = "/docs/contract/encodeEventTopics";
  function d(c) {
    var j;
    const { abi: m, eventName: y, args: g } = c;
    let b = m[0];
    if (y) {
      const v = (0, s.getAbiItem)({ abi: m, name: y });
      if (!v)
        throw new e.AbiEventNotFoundError(y, { docsPath: u });
      b = v;
    }
    if (b.type !== "event")
      throw new e.AbiEventNotFoundError(void 0, { docsPath: u });
    const h = (0, i.formatAbiItem)(b), _ = (0, o.toEventSelector)(h);
    let P = [];
    if (g && "inputs" in b) {
      const v = (j = b.inputs) == null ? void 0 : j.filter((l) => "indexed" in l && l.indexed), E = Array.isArray(g) ? g : Object.values(g).length > 0 ? (v == null ? void 0 : v.map((l) => g[l.name])) ?? [] : [];
      E.length > 0 && (P = (v == null ? void 0 : v.map((l, p) => Array.isArray(E[p]) ? E[p].map((T, w) => f({ param: l, value: E[p][w] })) : typeof E[p] < "u" && E[p] !== null ? f({ param: l, value: E[p] }) : null)) ?? []);
    }
    return [_, ...P];
  }
  function f({ param: c, value: m }) {
    if (c.type === "string" || c.type === "bytes")
      return (0, r.keccak256)((0, n.toBytes)(m));
    if (c.type === "tuple" || c.type.match(/^(.*)\[(\d+)?\]$/))
      throw new t.FilterTypeNotSupportedError(c.type);
    return (0, a.encodeAbiParameters)([c], [m]);
  }
  return To;
}
var qo = {}, Zf;
function Eu() {
  if (Zf) return qo;
  Zf = 1, Object.defineProperty(qo, "__esModule", { value: !0 }), qo.createFilterRequestScope = e;
  function e(t, { method: n }) {
    var o, a;
    const r = {};
    return t.transport.type === "fallback" && ((a = (o = t.transport).onResponse) == null || a.call(o, ({ method: i, response: s, status: u, transport: d }) => {
      u === "success" && n === i && (r[s] = d.request);
    })), (i) => r[i] || t.request;
  }
  return qo;
}
var Jf;
function $c() {
  if (Jf) return wo;
  Jf = 1, Object.defineProperty(wo, "__esModule", { value: !0 }), wo.createContractEventFilter = r;
  const e = dr(), t = Y(), n = Eu();
  async function r(o, a) {
    const { address: i, abi: s, args: u, eventName: d, fromBlock: f, strict: c, toBlock: m } = a, y = (0, n.createFilterRequestScope)(o, {
      method: "eth_newFilter"
    }), g = d ? (0, e.encodeEventTopics)({
      abi: s,
      args: u,
      eventName: d
    }) : void 0, b = await o.request({
      method: "eth_newFilter",
      params: [
        {
          address: i,
          fromBlock: typeof f == "bigint" ? (0, t.numberToHex)(f) : f,
          toBlock: typeof m == "bigint" ? (0, t.numberToHex)(m) : m,
          topics: g
        }
      ]
    });
    return {
      abi: s,
      args: u,
      eventName: d,
      id: b,
      request: y(b),
      strict: !!c,
      type: "event"
    };
  }
  return wo;
}
var Mo = {}, xo = {}, Yf;
function Se() {
  if (Yf) return xo;
  Yf = 1, Object.defineProperty(xo, "__esModule", { value: !0 }), xo.parseAccount = e;
  function e(t) {
    return typeof t == "string" ? { address: t, type: "json-rpc" } : t;
  }
  return xo;
}
var Fo = {}, ko = {}, Xf;
function Mh() {
  if (Xf) return ko;
  Xf = 1, Object.defineProperty(ko, "__esModule", { value: !0 }), ko.prepareEncodeFunctionData = a;
  const e = pe(), t = cr(), n = _t(), r = vt(), o = "/docs/contract/encodeFunctionData";
  function a(i) {
    const { abi: s, args: u, functionName: d } = i;
    let f = s[0];
    if (d) {
      const c = (0, r.getAbiItem)({
        abi: s,
        args: u,
        name: d
      });
      if (!c)
        throw new e.AbiFunctionNotFoundError(d, { docsPath: o });
      f = c;
    }
    if (f.type !== "function")
      throw new e.AbiFunctionNotFoundError(void 0, { docsPath: o });
    return {
      abi: [f],
      functionName: (0, t.toFunctionSelector)((0, n.formatAbiItem)(f))
    };
  }
  return ko;
}
var Qf;
function Xe() {
  if (Qf) return Fo;
  Qf = 1, Object.defineProperty(Fo, "__esModule", { value: !0 }), Fo.encodeFunctionData = r;
  const e = Be(), t = Ye(), n = Mh();
  function r(o) {
    const { args: a } = o, { abi: i, functionName: s } = (() => {
      var c;
      return o.abi.length === 1 && ((c = o.functionName) != null && c.startsWith("0x")) ? o : (0, n.prepareEncodeFunctionData)(o);
    })(), u = i[0], d = s, f = "inputs" in u && u.inputs ? (0, t.encodeAbiParameters)(u.inputs, a ?? []) : void 0;
    return (0, e.concatHex)([d, f ?? "0x"]);
  }
  return Fo;
}
var Ho = {}, Re = {}, ct = {}, el;
function Nc() {
  return el || (el = 1, Object.defineProperty(ct, "__esModule", { value: !0 }), ct.solidityPanic = ct.solidityError = ct.panicReasons = void 0, ct.panicReasons = {
    1: "An `assert` condition failed.",
    17: "Arithmetic operation resulted in underflow or overflow.",
    18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
    33: "Attempted to convert to an invalid type.",
    34: "Attempted to access a storage byte array that is incorrectly encoded.",
    49: "Performed `.pop()` on an empty array",
    50: "Array index is out of bounds.",
    65: "Allocated too much memory or created an array which is too large.",
    81: "Attempted to call a zero-initialized variable of internal function type."
  }, ct.solidityError = {
    inputs: [
      {
        name: "message",
        type: "string"
      }
    ],
    name: "Error",
    type: "error"
  }, ct.solidityPanic = {
    inputs: [
      {
        name: "reason",
        type: "uint256"
      }
    ],
    name: "Panic",
    type: "error"
  }), ct;
}
var $o = {}, No = {}, zo = {}, dt = {}, tl;
function xh() {
  if (tl) return dt;
  tl = 1, Object.defineProperty(dt, "__esModule", { value: !0 }), dt.RecursiveReadLimitExceededError = dt.PositionOutOfBoundsError = dt.NegativeOffsetError = void 0;
  const e = ie();
  class t extends e.BaseError {
    constructor({ offset: a }) {
      super(`Offset \`${a}\` cannot be negative.`, {
        name: "NegativeOffsetError"
      });
    }
  }
  dt.NegativeOffsetError = t;
  class n extends e.BaseError {
    constructor({ length: a, position: i }) {
      super(`Position \`${i}\` is out of bounds (\`0 < position < ${a}\`).`, { name: "PositionOutOfBoundsError" });
    }
  }
  dt.PositionOutOfBoundsError = n;
  class r extends e.BaseError {
    constructor({ count: a, limit: i }) {
      super(`Recursive read limit of \`${i}\` exceeded (recursive read count: \`${a}\`).`, { name: "RecursiveReadLimitExceededError" });
    }
  }
  return dt.RecursiveReadLimitExceededError = r, dt;
}
var rl;
function zn() {
  if (rl) return zo;
  rl = 1, Object.defineProperty(zo, "__esModule", { value: !0 }), zo.createCursor = n;
  const e = xh(), t = {
    bytes: new Uint8Array(),
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: /* @__PURE__ */ new Map(),
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit() {
      if (this.recursiveReadCount >= this.recursiveReadLimit)
        throw new e.RecursiveReadLimitExceededError({
          count: this.recursiveReadCount + 1,
          limit: this.recursiveReadLimit
        });
    },
    assertPosition(r) {
      if (r < 0 || r > this.bytes.length - 1)
        throw new e.PositionOutOfBoundsError({
          length: this.bytes.length,
          position: r
        });
    },
    decrementPosition(r) {
      if (r < 0)
        throw new e.NegativeOffsetError({ offset: r });
      const o = this.position - r;
      this.assertPosition(o), this.position = o;
    },
    getReadCount(r) {
      return this.positionReadCount.get(r || this.position) || 0;
    },
    incrementPosition(r) {
      if (r < 0)
        throw new e.NegativeOffsetError({ offset: r });
      const o = this.position + r;
      this.assertPosition(o), this.position = o;
    },
    inspectByte(r) {
      const o = r ?? this.position;
      return this.assertPosition(o), this.bytes[o];
    },
    inspectBytes(r, o) {
      const a = o ?? this.position;
      return this.assertPosition(a + r - 1), this.bytes.subarray(a, a + r);
    },
    inspectUint8(r) {
      const o = r ?? this.position;
      return this.assertPosition(o), this.bytes[o];
    },
    inspectUint16(r) {
      const o = r ?? this.position;
      return this.assertPosition(o + 1), this.dataView.getUint16(o);
    },
    inspectUint24(r) {
      const o = r ?? this.position;
      return this.assertPosition(o + 2), (this.dataView.getUint16(o) << 8) + this.dataView.getUint8(o + 2);
    },
    inspectUint32(r) {
      const o = r ?? this.position;
      return this.assertPosition(o + 3), this.dataView.getUint32(o);
    },
    pushByte(r) {
      this.assertPosition(this.position), this.bytes[this.position] = r, this.position++;
    },
    pushBytes(r) {
      this.assertPosition(this.position + r.length - 1), this.bytes.set(r, this.position), this.position += r.length;
    },
    pushUint8(r) {
      this.assertPosition(this.position), this.bytes[this.position] = r, this.position++;
    },
    pushUint16(r) {
      this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, r), this.position += 2;
    },
    pushUint24(r) {
      this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, r >> 8), this.dataView.setUint8(this.position + 2, r & 255), this.position += 3;
    },
    pushUint32(r) {
      this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, r), this.position += 4;
    },
    readByte() {
      this.assertReadLimit(), this._touch();
      const r = this.inspectByte();
      return this.position++, r;
    },
    readBytes(r, o) {
      this.assertReadLimit(), this._touch();
      const a = this.inspectBytes(r);
      return this.position += o ?? r, a;
    },
    readUint8() {
      this.assertReadLimit(), this._touch();
      const r = this.inspectUint8();
      return this.position += 1, r;
    },
    readUint16() {
      this.assertReadLimit(), this._touch();
      const r = this.inspectUint16();
      return this.position += 2, r;
    },
    readUint24() {
      this.assertReadLimit(), this._touch();
      const r = this.inspectUint24();
      return this.position += 3, r;
    },
    readUint32() {
      this.assertReadLimit(), this._touch();
      const r = this.inspectUint32();
      return this.position += 4, r;
    },
    get remaining() {
      return this.bytes.length - this.position;
    },
    setPosition(r) {
      const o = this.position;
      return this.assertPosition(r), this.position = r, () => this.position = o;
    },
    _touch() {
      if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
        return;
      const r = this.getReadCount();
      this.positionReadCount.set(this.position, r + 1), r > 0 && this.recursiveReadCount++;
    }
  };
  function n(r, { recursiveReadLimit: o = 8192 } = {}) {
    const a = Object.create(t);
    return a.bytes = r, a.dataView = new DataView(r.buffer, r.byteOffset, r.byteLength), a.positionReadCount = /* @__PURE__ */ new Map(), a.recursiveReadLimit = o, a;
  }
  return zo;
}
var Bt = {}, nl;
function zc() {
  if (nl) return Bt;
  nl = 1, Object.defineProperty(Bt, "__esModule", { value: !0 }), Bt.fromBytes = o, Bt.bytesToBigInt = a, Bt.bytesToBool = i, Bt.bytesToNumber = s, Bt.bytesToString = u;
  const e = qr(), t = Ht(), n = Pe(), r = Y();
  function o(d, f) {
    const c = typeof f == "string" ? { to: f } : f, m = c.to;
    return m === "number" ? s(d, c) : m === "bigint" ? a(d, c) : m === "boolean" ? i(d, c) : m === "string" ? u(d, c) : (0, r.bytesToHex)(d, c);
  }
  function a(d, f = {}) {
    typeof f.size < "u" && (0, n.assertSize)(d, { size: f.size });
    const c = (0, r.bytesToHex)(d, f);
    return (0, n.hexToBigInt)(c, f);
  }
  function i(d, f = {}) {
    let c = d;
    if (typeof f.size < "u" && ((0, n.assertSize)(c, { size: f.size }), c = (0, t.trim)(c)), c.length > 1 || c[0] > 1)
      throw new e.InvalidBytesBooleanError(c);
    return !!c[0];
  }
  function s(d, f = {}) {
    typeof f.size < "u" && (0, n.assertSize)(d, { size: f.size });
    const c = (0, r.bytesToHex)(d, f);
    return (0, n.hexToNumber)(c, f);
  }
  function u(d, f = {}) {
    let c = d;
    return typeof f.size < "u" && ((0, n.assertSize)(c, { size: f.size }), c = (0, t.trim)(c, { dir: "right" })), new TextDecoder().decode(c);
  }
  return Bt;
}
var ol;
function $t() {
  if (ol) return No;
  ol = 1, Object.defineProperty(No, "__esModule", { value: !0 }), No.decodeAbiParameters = f;
  const e = pe(), t = Ue(), n = zn(), r = Ne(), o = Je(), a = Ht(), i = zc(), s = be(), u = Y(), d = Ye();
  function f(l, p) {
    const T = typeof p == "string" ? (0, s.hexToBytes)(p) : p, w = (0, n.createCursor)(T);
    if ((0, r.size)(T) === 0 && l.length > 0)
      throw new e.AbiDecodingZeroDataError();
    if ((0, r.size)(p) && (0, r.size)(p) < 32)
      throw new e.AbiDecodingDataSizeTooSmallError({
        data: typeof p == "string" ? p : (0, u.bytesToHex)(p),
        params: l,
        size: (0, r.size)(p)
      });
    let I = 0;
    const C = [];
    for (let B = 0; B < l.length; ++B) {
      const M = l[B];
      w.setPosition(I);
      const [A, x] = c(w, M, {
        staticPosition: 0
      });
      I += x, C.push(A);
    }
    return C;
  }
  function c(l, p, { staticPosition: T }) {
    const w = (0, d.getArrayComponents)(p.type);
    if (w) {
      const [I, C] = w;
      return b(l, { ...p, type: C }, { length: I, staticPosition: T });
    }
    if (p.type === "tuple")
      return j(l, p, { staticPosition: T });
    if (p.type === "address")
      return g(l);
    if (p.type === "bool")
      return h(l);
    if (p.type.startsWith("bytes"))
      return _(l, p, { staticPosition: T });
    if (p.type.startsWith("uint") || p.type.startsWith("int"))
      return P(l, p);
    if (p.type === "string")
      return v(l, { staticPosition: T });
    throw new e.InvalidAbiDecodingTypeError(p.type, {
      docsPath: "/docs/contract/decodeAbiParameters"
    });
  }
  const m = 32, y = 32;
  function g(l) {
    const p = l.readBytes(32);
    return [(0, t.checksumAddress)((0, u.bytesToHex)((0, o.sliceBytes)(p, -20))), 32];
  }
  function b(l, p, { length: T, staticPosition: w }) {
    if (!T) {
      const B = (0, i.bytesToNumber)(l.readBytes(y)), M = w + B, A = M + m;
      l.setPosition(M);
      const x = (0, i.bytesToNumber)(l.readBytes(m)), H = E(p);
      let F = 0;
      const $ = [];
      for (let q = 0; q < x; ++q) {
        l.setPosition(A + (H ? q * 32 : F));
        const [S, R] = c(l, p, {
          staticPosition: A
        });
        F += R, $.push(S);
      }
      return l.setPosition(w + 32), [$, 32];
    }
    if (E(p)) {
      const B = (0, i.bytesToNumber)(l.readBytes(y)), M = w + B, A = [];
      for (let x = 0; x < T; ++x) {
        l.setPosition(M + x * 32);
        const [H] = c(l, p, {
          staticPosition: M
        });
        A.push(H);
      }
      return l.setPosition(w + 32), [A, 32];
    }
    let I = 0;
    const C = [];
    for (let B = 0; B < T; ++B) {
      const [M, A] = c(l, p, {
        staticPosition: w + I
      });
      I += A, C.push(M);
    }
    return [C, I];
  }
  function h(l) {
    return [(0, i.bytesToBool)(l.readBytes(32), { size: 32 }), 32];
  }
  function _(l, p, { staticPosition: T }) {
    const [w, I] = p.type.split("bytes");
    if (!I) {
      const B = (0, i.bytesToNumber)(l.readBytes(32));
      l.setPosition(T + B);
      const M = (0, i.bytesToNumber)(l.readBytes(32));
      if (M === 0)
        return l.setPosition(T + 32), ["0x", 32];
      const A = l.readBytes(M);
      return l.setPosition(T + 32), [(0, u.bytesToHex)(A), 32];
    }
    return [(0, u.bytesToHex)(l.readBytes(Number.parseInt(I), 32)), 32];
  }
  function P(l, p) {
    const T = p.type.startsWith("int"), w = Number.parseInt(p.type.split("int")[1] || "256"), I = l.readBytes(32);
    return [
      w > 48 ? (0, i.bytesToBigInt)(I, { signed: T }) : (0, i.bytesToNumber)(I, { signed: T }),
      32
    ];
  }
  function j(l, p, { staticPosition: T }) {
    const w = p.components.length === 0 || p.components.some(({ name: B }) => !B), I = w ? [] : {};
    let C = 0;
    if (E(p)) {
      const B = (0, i.bytesToNumber)(l.readBytes(y)), M = T + B;
      for (let A = 0; A < p.components.length; ++A) {
        const x = p.components[A];
        l.setPosition(M + C);
        const [H, F] = c(l, x, {
          staticPosition: M
        });
        C += F, I[w ? A : x == null ? void 0 : x.name] = H;
      }
      return l.setPosition(T + 32), [I, 32];
    }
    for (let B = 0; B < p.components.length; ++B) {
      const M = p.components[B], [A, x] = c(l, M, {
        staticPosition: T
      });
      I[w ? B : M == null ? void 0 : M.name] = A, C += x;
    }
    return [I, C];
  }
  function v(l, { staticPosition: p }) {
    const T = (0, i.bytesToNumber)(l.readBytes(32)), w = p + T;
    l.setPosition(w);
    const I = (0, i.bytesToNumber)(l.readBytes(32));
    if (I === 0)
      return l.setPosition(p + 32), ["", 32];
    const C = l.readBytes(I, 32), B = (0, i.bytesToString)((0, a.trim)(C));
    return l.setPosition(p + 32), [B, 32];
  }
  function E(l) {
    var w;
    const { type: p } = l;
    if (p === "string" || p === "bytes" || p.endsWith("[]"))
      return !0;
    if (p === "tuple")
      return (w = l.components) == null ? void 0 : w.some(E);
    const T = (0, d.getArrayComponents)(l.type);
    return !!(T && E({ ...l, type: T[1] }));
  }
  return No;
}
var il;
function ju() {
  if (il) return $o;
  il = 1, Object.defineProperty($o, "__esModule", { value: !0 }), $o.decodeErrorResult = i;
  const e = Nc(), t = pe(), n = Je(), r = cr(), o = $t(), a = _t();
  function i(s) {
    const { abi: u, data: d } = s, f = (0, n.slice)(d, 0, 4);
    if (f === "0x")
      throw new t.AbiDecodingZeroDataError();
    const m = [...u || [], e.solidityError, e.solidityPanic].find((y) => y.type === "error" && f === (0, r.toFunctionSelector)((0, a.formatAbiItem)(y)));
    if (!m)
      throw new t.AbiErrorSignatureNotFoundError(f, {
        docsPath: "/docs/contract/decodeErrorResult"
      });
    return {
      abiItem: m,
      args: "inputs" in m && m.inputs && m.inputs.length > 0 ? (0, o.decodeAbiParameters)(m.inputs, (0, n.slice)(d, 4)) : void 0,
      errorName: m.name
    };
  }
  return $o;
}
var Do = {}, ln = {}, al;
function Ie() {
  if (al) return ln;
  al = 1, Object.defineProperty(ln, "__esModule", { value: !0 }), ln.stringify = void 0;
  const e = (t, n, r) => JSON.stringify(t, (o, a) => {
    const i = typeof a == "bigint" ? a.toString() : a;
    return typeof n == "function" ? n(o, i) : i;
  }, r);
  return ln.stringify = e, ln;
}
var sl;
function Fh() {
  if (sl) return Do;
  sl = 1, Object.defineProperty(Do, "__esModule", { value: !0 }), Do.formatAbiItemWithArgs = t;
  const e = Ie();
  function t({ abiItem: n, args: r, includeFunctionName: o = !0, includeName: a = !1 }) {
    if ("name" in n && "inputs" in n && n.inputs)
      return `${o ? n.name : ""}(${n.inputs.map((i, s) => `${a && i.name ? `${i.name}: ` : ""}${typeof r[s] == "object" ? (0, e.stringify)(r[s]) : r[s]}`).join(", ")})`;
  }
  return Do;
}
var Lo = {}, ft = {}, ul;
function Dn() {
  return ul || (ul = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.weiUnits = ft.gweiUnits = ft.etherUnits = void 0, ft.etherUnits = {
    gwei: 9,
    wei: 18
  }, ft.gweiUnits = {
    ether: -9,
    wei: 9
  }, ft.weiUnits = {
    ether: -18,
    gwei: -9
  }), ft;
}
var Uo = {}, cl;
function Pu() {
  if (cl) return Uo;
  cl = 1, Object.defineProperty(Uo, "__esModule", { value: !0 }), Uo.formatUnits = e;
  function e(t, n) {
    let r = t.toString();
    const o = r.startsWith("-");
    o && (r = r.slice(1)), r = r.padStart(n, "0");
    let [a, i] = [
      r.slice(0, r.length - n),
      r.slice(r.length - n)
    ];
    return i = i.replace(/(0+)$/, ""), `${o ? "-" : ""}${a || "0"}${i ? `.${i}` : ""}`;
  }
  return Uo;
}
var dl;
function Ln() {
  if (dl) return Lo;
  dl = 1, Object.defineProperty(Lo, "__esModule", { value: !0 }), Lo.formatEther = n;
  const e = Dn(), t = Pu();
  function n(r, o = "wei") {
    return (0, t.formatUnits)(r, e.etherUnits[o]);
  }
  return Lo;
}
var Go = {}, fl;
function fr() {
  if (fl) return Go;
  fl = 1, Object.defineProperty(Go, "__esModule", { value: !0 }), Go.formatGwei = n;
  const e = Dn(), t = Pu();
  function n(r, o = "wei") {
    return (0, t.formatUnits)(r, e.gweiUnits[o]);
  }
  return Go;
}
var lt = {}, ll;
function Dc() {
  if (ll) return lt;
  ll = 1, Object.defineProperty(lt, "__esModule", { value: !0 }), lt.StateAssignmentConflictError = lt.AccountStateConflictError = void 0, lt.prettyStateMapping = r, lt.prettyStateOverride = o;
  const e = ie();
  class t extends e.BaseError {
    constructor({ address: i }) {
      super(`State for account "${i}" is set multiple times.`, {
        name: "AccountStateConflictError"
      });
    }
  }
  lt.AccountStateConflictError = t;
  class n extends e.BaseError {
    constructor() {
      super("state and stateDiff are set on the same account.", {
        name: "StateAssignmentConflictError"
      });
    }
  }
  lt.StateAssignmentConflictError = n;
  function r(a) {
    return a.reduce((i, { slot: s, value: u }) => `${i}        ${s}: ${u}
`, "");
  }
  function o(a) {
    return a.reduce((i, { address: s, ...u }) => {
      let d = `${i}    ${s}:
`;
      return u.nonce && (d += `      nonce: ${u.nonce}
`), u.balance && (d += `      balance: ${u.balance}
`), u.code && (d += `      code: ${u.code}
`), u.state && (d += `      state:
`, d += r(u.state)), u.stateDiff && (d += `      stateDiff:
`, d += r(u.stateDiff)), d;
    }, `  State Override:
`).slice(0, -1);
  }
  return lt;
}
var he = {}, ml;
function De() {
  if (ml) return he;
  ml = 1, Object.defineProperty(he, "__esModule", { value: !0 }), he.WaitForTransactionReceiptTimeoutError = he.TransactionReceiptNotFoundError = he.TransactionNotFoundError = he.TransactionExecutionError = he.InvalidStorageKeySizeError = he.InvalidSerializedTransactionError = he.InvalidSerializedTransactionTypeError = he.InvalidSerializableTransactionError = he.InvalidLegacyVError = he.FeeConflictError = void 0, he.prettyPrint = r;
  const e = Ln(), t = fr(), n = ie();
  function r(g) {
    const b = Object.entries(g).map(([_, P]) => P === void 0 || P === !1 ? null : [_, P]).filter(Boolean), h = b.reduce((_, [P]) => Math.max(_, P.length), 0);
    return b.map(([_, P]) => `  ${`${_}:`.padEnd(h + 1)}  ${P}`).join(`
`);
  }
  class o extends n.BaseError {
    constructor() {
      super([
        "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.",
        "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."
      ].join(`
`), { name: "FeeConflictError" });
    }
  }
  he.FeeConflictError = o;
  class a extends n.BaseError {
    constructor({ v: b }) {
      super(`Invalid \`v\` value "${b}". Expected 27 or 28.`, {
        name: "InvalidLegacyVError"
      });
    }
  }
  he.InvalidLegacyVError = a;
  class i extends n.BaseError {
    constructor({ transaction: b }) {
      super("Cannot infer a transaction type from provided transaction.", {
        metaMessages: [
          "Provided Transaction:",
          "{",
          r(b),
          "}",
          "",
          "To infer the type, either provide:",
          "- a `type` to the Transaction, or",
          "- an EIP-1559 Transaction with `maxFeePerGas`, or",
          "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
          "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
          "- an EIP-7702 Transaction with `authorizationList`, or",
          "- a Legacy Transaction with `gasPrice`"
        ],
        name: "InvalidSerializableTransactionError"
      });
    }
  }
  he.InvalidSerializableTransactionError = i;
  class s extends n.BaseError {
    constructor({ serializedType: b }) {
      super(`Serialized transaction type "${b}" is invalid.`, {
        name: "InvalidSerializedTransactionType"
      }), Object.defineProperty(this, "serializedType", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.serializedType = b;
    }
  }
  he.InvalidSerializedTransactionTypeError = s;
  class u extends n.BaseError {
    constructor({ attributes: b, serializedTransaction: h, type: _ }) {
      const P = Object.entries(b).map(([j, v]) => typeof v > "u" ? j : void 0).filter(Boolean);
      super(`Invalid serialized transaction of type "${_}" was provided.`, {
        metaMessages: [
          `Serialized Transaction: "${h}"`,
          P.length > 0 ? `Missing Attributes: ${P.join(", ")}` : ""
        ].filter(Boolean),
        name: "InvalidSerializedTransactionError"
      }), Object.defineProperty(this, "serializedTransaction", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "type", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.serializedTransaction = h, this.type = _;
    }
  }
  he.InvalidSerializedTransactionError = u;
  class d extends n.BaseError {
    constructor({ storageKey: b }) {
      super(`Size for storage key "${b}" is invalid. Expected 32 bytes. Got ${Math.floor((b.length - 2) / 2)} bytes.`, { name: "InvalidStorageKeySizeError" });
    }
  }
  he.InvalidStorageKeySizeError = d;
  class f extends n.BaseError {
    constructor(b, { account: h, docsPath: _, chain: P, data: j, gas: v, gasPrice: E, maxFeePerGas: l, maxPriorityFeePerGas: p, nonce: T, to: w, value: I }) {
      var B;
      const C = r({
        chain: P && `${P == null ? void 0 : P.name} (id: ${P == null ? void 0 : P.id})`,
        from: h == null ? void 0 : h.address,
        to: w,
        value: typeof I < "u" && `${(0, e.formatEther)(I)} ${((B = P == null ? void 0 : P.nativeCurrency) == null ? void 0 : B.symbol) || "ETH"}`,
        data: j,
        gas: v,
        gasPrice: typeof E < "u" && `${(0, t.formatGwei)(E)} gwei`,
        maxFeePerGas: typeof l < "u" && `${(0, t.formatGwei)(l)} gwei`,
        maxPriorityFeePerGas: typeof p < "u" && `${(0, t.formatGwei)(p)} gwei`,
        nonce: T
      });
      super(b.shortMessage, {
        cause: b,
        docsPath: _,
        metaMessages: [
          ...b.metaMessages ? [...b.metaMessages, " "] : [],
          "Request Arguments:",
          C
        ].filter(Boolean),
        name: "TransactionExecutionError"
      }), Object.defineProperty(this, "cause", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.cause = b;
    }
  }
  he.TransactionExecutionError = f;
  class c extends n.BaseError {
    constructor({ blockHash: b, blockNumber: h, blockTag: _, hash: P, index: j }) {
      let v = "Transaction";
      _ && j !== void 0 && (v = `Transaction at block time "${_}" at index "${j}"`), b && j !== void 0 && (v = `Transaction at block hash "${b}" at index "${j}"`), h && j !== void 0 && (v = `Transaction at block number "${h}" at index "${j}"`), P && (v = `Transaction with hash "${P}"`), super(`${v} could not be found.`, {
        name: "TransactionNotFoundError"
      });
    }
  }
  he.TransactionNotFoundError = c;
  class m extends n.BaseError {
    constructor({ hash: b }) {
      super(`Transaction receipt with hash "${b}" could not be found. The Transaction may not be processed on a block yet.`, {
        name: "TransactionReceiptNotFoundError"
      });
    }
  }
  he.TransactionReceiptNotFoundError = m;
  class y extends n.BaseError {
    constructor({ hash: b }) {
      super(`Timed out while waiting for transaction with hash "${b}" to be confirmed.`, { name: "WaitForTransactionReceiptTimeoutError" });
    }
  }
  return he.WaitForTransactionReceiptTimeoutError = y, he;
}
var Yt = {}, bl;
function Lc() {
  if (bl) return Yt;
  bl = 1, Object.defineProperty(Yt, "__esModule", { value: !0 }), Yt.getUrl = Yt.getContractAddress = void 0;
  const e = (n) => n;
  Yt.getContractAddress = e;
  const t = (n) => n;
  return Yt.getUrl = t, Yt;
}
var gl;
function Nt() {
  if (gl) return Re;
  gl = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.RawContractError = Re.CounterfactualDeploymentFailedError = Re.ContractFunctionZeroDataError = Re.ContractFunctionRevertedError = Re.ContractFunctionExecutionError = Re.CallExecutionError = void 0;
  const e = Se(), t = Nc(), n = ju(), r = _t(), o = Fh(), a = vt(), i = Ln(), s = fr(), u = pe(), d = ie(), f = Dc(), c = De(), m = Lc();
  class y extends d.BaseError {
    constructor(v, { account: E, docsPath: l, chain: p, data: T, gas: w, gasPrice: I, maxFeePerGas: C, maxPriorityFeePerGas: B, nonce: M, to: A, value: x, stateOverride: H }) {
      var q;
      const F = E ? (0, e.parseAccount)(E) : void 0;
      let $ = (0, c.prettyPrint)({
        from: F == null ? void 0 : F.address,
        to: A,
        value: typeof x < "u" && `${(0, i.formatEther)(x)} ${((q = p == null ? void 0 : p.nativeCurrency) == null ? void 0 : q.symbol) || "ETH"}`,
        data: T,
        gas: w,
        gasPrice: typeof I < "u" && `${(0, s.formatGwei)(I)} gwei`,
        maxFeePerGas: typeof C < "u" && `${(0, s.formatGwei)(C)} gwei`,
        maxPriorityFeePerGas: typeof B < "u" && `${(0, s.formatGwei)(B)} gwei`,
        nonce: M
      });
      H && ($ += `
${(0, f.prettyStateOverride)(H)}`), super(v.shortMessage, {
        cause: v,
        docsPath: l,
        metaMessages: [
          ...v.metaMessages ? [...v.metaMessages, " "] : [],
          "Raw Call Arguments:",
          $
        ].filter(Boolean),
        name: "CallExecutionError"
      }), Object.defineProperty(this, "cause", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.cause = v;
    }
  }
  Re.CallExecutionError = y;
  class g extends d.BaseError {
    constructor(v, { abi: E, args: l, contractAddress: p, docsPath: T, functionName: w, sender: I }) {
      const C = (0, a.getAbiItem)({ abi: E, args: l, name: w }), B = C ? (0, o.formatAbiItemWithArgs)({
        abiItem: C,
        args: l,
        includeFunctionName: !1,
        includeName: !1
      }) : void 0, M = C ? (0, r.formatAbiItem)(C, { includeName: !0 }) : void 0, A = (0, c.prettyPrint)({
        address: p && (0, m.getContractAddress)(p),
        function: M,
        args: B && B !== "()" && `${[...Array((w == null ? void 0 : w.length) ?? 0).keys()].map(() => " ").join("")}${B}`,
        sender: I
      });
      super(v.shortMessage || `An unknown error occurred while executing the contract function "${w}".`, {
        cause: v,
        docsPath: T,
        metaMessages: [
          ...v.metaMessages ? [...v.metaMessages, " "] : [],
          A && "Contract Call:",
          A
        ].filter(Boolean),
        name: "ContractFunctionExecutionError"
      }), Object.defineProperty(this, "abi", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "args", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "cause", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "contractAddress", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "formattedArgs", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "functionName", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "sender", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.abi = E, this.args = l, this.cause = v, this.contractAddress = p, this.functionName = w, this.sender = I;
    }
  }
  Re.ContractFunctionExecutionError = g;
  class b extends d.BaseError {
    constructor({ abi: v, data: E, functionName: l, message: p }) {
      let T, w, I, C;
      if (E && E !== "0x")
        try {
          w = (0, n.decodeErrorResult)({ abi: v, data: E });
          const { abiItem: M, errorName: A, args: x } = w;
          if (A === "Error")
            C = x[0];
          else if (A === "Panic") {
            const [H] = x;
            C = t.panicReasons[H];
          } else {
            const H = M ? (0, r.formatAbiItem)(M, { includeName: !0 }) : void 0, F = M && x ? (0, o.formatAbiItemWithArgs)({
              abiItem: M,
              args: x,
              includeFunctionName: !1,
              includeName: !1
            }) : void 0;
            I = [
              H ? `Error: ${H}` : "",
              F && F !== "()" ? `       ${[...Array((A == null ? void 0 : A.length) ?? 0).keys()].map(() => " ").join("")}${F}` : ""
            ];
          }
        } catch (M) {
          T = M;
        }
      else p && (C = p);
      let B;
      T instanceof u.AbiErrorSignatureNotFoundError && (B = T.signature, I = [
        `Unable to decode signature "${B}" as it was not found on the provided ABI.`,
        "Make sure you are using the correct ABI and that the error exists on it.",
        `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${B}.`
      ]), super(C && C !== "execution reverted" || B ? [
        `The contract function "${l}" reverted with the following ${B ? "signature" : "reason"}:`,
        C || B
      ].join(`
`) : `The contract function "${l}" reverted.`, {
        cause: T,
        metaMessages: I,
        name: "ContractFunctionRevertedError"
      }), Object.defineProperty(this, "data", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "raw", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "reason", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "signature", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.data = w, this.raw = E, this.reason = C, this.signature = B;
    }
  }
  Re.ContractFunctionRevertedError = b;
  class h extends d.BaseError {
    constructor({ functionName: v }) {
      super(`The contract function "${v}" returned no data ("0x").`, {
        metaMessages: [
          "This could be due to any of the following:",
          `  - The contract does not have the function "${v}",`,
          "  - The parameters passed to the contract function may be invalid, or",
          "  - The address is not a contract."
        ],
        name: "ContractFunctionZeroDataError"
      });
    }
  }
  Re.ContractFunctionZeroDataError = h;
  class _ extends d.BaseError {
    constructor({ factory: v }) {
      super(`Deployment for counterfactual contract call failed${v ? ` for factory "${v}".` : ""}`, {
        metaMessages: [
          "Please ensure:",
          "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
          "- The `factoryData` is a valid encoded function call for contract deployment function on the factory."
        ],
        name: "CounterfactualDeploymentFailedError"
      });
    }
  }
  Re.CounterfactualDeploymentFailedError = _;
  class P extends d.BaseError {
    constructor({ data: v, message: E }) {
      super(E || "", { name: "RawContractError" }), Object.defineProperty(this, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3
      }), Object.defineProperty(this, "data", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.data = v;
    }
  }
  return Re.RawContractError = P, Re;
}
var He = {}, yl;
function Qe() {
  if (yl) return He;
  yl = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.TimeoutError = He.SocketClosedError = He.RpcRequestError = He.WebSocketRequestError = He.HttpRequestError = void 0;
  const e = Ie(), t = ie(), n = Lc();
  class r extends t.BaseError {
    constructor({ body: d, cause: f, details: c, headers: m, status: y, url: g }) {
      super("HTTP request failed.", {
        cause: f,
        details: c,
        metaMessages: [
          y && `Status: ${y}`,
          `URL: ${(0, n.getUrl)(g)}`,
          d && `Request body: ${(0, e.stringify)(d)}`
        ].filter(Boolean),
        name: "HttpRequestError"
      }), Object.defineProperty(this, "body", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "headers", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "status", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "url", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.body = d, this.headers = m, this.status = y, this.url = g;
    }
  }
  He.HttpRequestError = r;
  class o extends t.BaseError {
    constructor({ body: d, cause: f, details: c, url: m }) {
      super("WebSocket request failed.", {
        cause: f,
        details: c,
        metaMessages: [
          `URL: ${(0, n.getUrl)(m)}`,
          d && `Request body: ${(0, e.stringify)(d)}`
        ].filter(Boolean),
        name: "WebSocketRequestError"
      });
    }
  }
  He.WebSocketRequestError = o;
  class a extends t.BaseError {
    constructor({ body: d, error: f, url: c }) {
      super("RPC Request failed.", {
        cause: f,
        details: f.message,
        metaMessages: [`URL: ${(0, n.getUrl)(c)}`, `Request body: ${(0, e.stringify)(d)}`],
        name: "RpcRequestError"
      }), Object.defineProperty(this, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "data", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.code = f.code, this.data = f.data;
    }
  }
  He.RpcRequestError = a;
  class i extends t.BaseError {
    constructor({ url: d } = {}) {
      super("The socket has been closed.", {
        metaMessages: [d && `URL: ${(0, n.getUrl)(d)}`].filter(Boolean),
        name: "SocketClosedError"
      });
    }
  }
  He.SocketClosedError = i;
  class s extends t.BaseError {
    constructor({ body: d, url: f }) {
      super("The request took too long to respond.", {
        details: "The request timed out.",
        metaMessages: [`URL: ${(0, n.getUrl)(f)}`, `Request body: ${(0, e.stringify)(d)}`],
        name: "TimeoutError"
      });
    }
  }
  return He.TimeoutError = s, He;
}
var re = {}, hl;
function lr() {
  if (hl) return re;
  hl = 1, Object.defineProperty(re, "__esModule", { value: !0 }), re.UnknownRpcError = re.SwitchChainError = re.ChainDisconnectedError = re.ProviderDisconnectedError = re.UnsupportedProviderMethodError = re.UnauthorizedProviderError = re.UserRejectedRequestError = re.JsonRpcVersionUnsupportedError = re.LimitExceededRpcError = re.MethodNotSupportedRpcError = re.TransactionRejectedRpcError = re.ResourceUnavailableRpcError = re.ResourceNotFoundRpcError = re.InvalidInputRpcError = re.InternalRpcError = re.InvalidParamsRpcError = re.MethodNotFoundRpcError = re.InvalidRequestRpcError = re.ParseRpcError = re.ProviderRpcError = re.RpcError = void 0;
  const e = ie(), t = Qe(), n = -1;
  class r extends e.BaseError {
    constructor(w, { code: I, docsPath: C, metaMessages: B, name: M, shortMessage: A }) {
      super(A, {
        cause: w,
        docsPath: C,
        metaMessages: B || (w == null ? void 0 : w.metaMessages),
        name: M || "RpcError"
      }), Object.defineProperty(this, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.name = M || w.name, this.code = w instanceof t.RpcRequestError ? w.code : I ?? n;
    }
  }
  re.RpcError = r;
  class o extends r {
    constructor(w, I) {
      super(w, I), Object.defineProperty(this, "data", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.data = I.data;
    }
  }
  re.ProviderRpcError = o;
  class a extends r {
    constructor(w) {
      super(w, {
        code: a.code,
        name: "ParseRpcError",
        shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
      });
    }
  }
  re.ParseRpcError = a, Object.defineProperty(a, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32700
  });
  class i extends r {
    constructor(w) {
      super(w, {
        code: i.code,
        name: "InvalidRequestRpcError",
        shortMessage: "JSON is not a valid request object."
      });
    }
  }
  re.InvalidRequestRpcError = i, Object.defineProperty(i, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32600
  });
  class s extends r {
    constructor(w, { method: I } = {}) {
      super(w, {
        code: s.code,
        name: "MethodNotFoundRpcError",
        shortMessage: `The method${I ? ` "${I}"` : ""} does not exist / is not available.`
      });
    }
  }
  re.MethodNotFoundRpcError = s, Object.defineProperty(s, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32601
  });
  class u extends r {
    constructor(w) {
      super(w, {
        code: u.code,
        name: "InvalidParamsRpcError",
        shortMessage: [
          "Invalid parameters were provided to the RPC method.",
          "Double check you have provided the correct parameters."
        ].join(`
`)
      });
    }
  }
  re.InvalidParamsRpcError = u, Object.defineProperty(u, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32602
  });
  class d extends r {
    constructor(w) {
      super(w, {
        code: d.code,
        name: "InternalRpcError",
        shortMessage: "An internal error was received."
      });
    }
  }
  re.InternalRpcError = d, Object.defineProperty(d, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32603
  });
  class f extends r {
    constructor(w) {
      super(w, {
        code: f.code,
        name: "InvalidInputRpcError",
        shortMessage: [
          "Missing or invalid parameters.",
          "Double check you have provided the correct parameters."
        ].join(`
`)
      });
    }
  }
  re.InvalidInputRpcError = f, Object.defineProperty(f, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32e3
  });
  class c extends r {
    constructor(w) {
      super(w, {
        code: c.code,
        name: "ResourceNotFoundRpcError",
        shortMessage: "Requested resource not found."
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ResourceNotFoundRpcError"
      });
    }
  }
  re.ResourceNotFoundRpcError = c, Object.defineProperty(c, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32001
  });
  class m extends r {
    constructor(w) {
      super(w, {
        code: m.code,
        name: "ResourceUnavailableRpcError",
        shortMessage: "Requested resource not available."
      });
    }
  }
  re.ResourceUnavailableRpcError = m, Object.defineProperty(m, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32002
  });
  class y extends r {
    constructor(w) {
      super(w, {
        code: y.code,
        name: "TransactionRejectedRpcError",
        shortMessage: "Transaction creation failed."
      });
    }
  }
  re.TransactionRejectedRpcError = y, Object.defineProperty(y, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32003
  });
  class g extends r {
    constructor(w, { method: I } = {}) {
      super(w, {
        code: g.code,
        name: "MethodNotSupportedRpcError",
        shortMessage: `Method${I ? ` "${I}"` : ""} is not supported.`
      });
    }
  }
  re.MethodNotSupportedRpcError = g, Object.defineProperty(g, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32004
  });
  class b extends r {
    constructor(w) {
      super(w, {
        code: b.code,
        name: "LimitExceededRpcError",
        shortMessage: "Request exceeds defined limit."
      });
    }
  }
  re.LimitExceededRpcError = b, Object.defineProperty(b, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32005
  });
  class h extends r {
    constructor(w) {
      super(w, {
        code: h.code,
        name: "JsonRpcVersionUnsupportedError",
        shortMessage: "Version of JSON-RPC protocol is not supported."
      });
    }
  }
  re.JsonRpcVersionUnsupportedError = h, Object.defineProperty(h, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32006
  });
  class _ extends o {
    constructor(w) {
      super(w, {
        code: _.code,
        name: "UserRejectedRequestError",
        shortMessage: "User rejected the request."
      });
    }
  }
  re.UserRejectedRequestError = _, Object.defineProperty(_, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4001
  });
  class P extends o {
    constructor(w) {
      super(w, {
        code: P.code,
        name: "UnauthorizedProviderError",
        shortMessage: "The requested method and/or account has not been authorized by the user."
      });
    }
  }
  re.UnauthorizedProviderError = P, Object.defineProperty(P, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4100
  });
  class j extends o {
    constructor(w, { method: I } = {}) {
      super(w, {
        code: j.code,
        name: "UnsupportedProviderMethodError",
        shortMessage: `The Provider does not support the requested method${I ? ` " ${I}"` : ""}.`
      });
    }
  }
  re.UnsupportedProviderMethodError = j, Object.defineProperty(j, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4200
  });
  class v extends o {
    constructor(w) {
      super(w, {
        code: v.code,
        name: "ProviderDisconnectedError",
        shortMessage: "The Provider is disconnected from all chains."
      });
    }
  }
  re.ProviderDisconnectedError = v, Object.defineProperty(v, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4900
  });
  class E extends o {
    constructor(w) {
      super(w, {
        code: E.code,
        name: "ChainDisconnectedError",
        shortMessage: "The Provider is not connected to the requested chain."
      });
    }
  }
  re.ChainDisconnectedError = E, Object.defineProperty(E, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4901
  });
  class l extends o {
    constructor(w) {
      super(w, {
        code: l.code,
        name: "SwitchChainError",
        shortMessage: "An error occurred when attempting to switch chain."
      });
    }
  }
  re.SwitchChainError = l, Object.defineProperty(l, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4902
  });
  class p extends r {
    constructor(w) {
      super(w, {
        name: "UnknownRpcError",
        shortMessage: "An unknown RPC error occurred."
      });
    }
  }
  return re.UnknownRpcError = p, re;
}
var pl;
function zt() {
  if (pl) return Ho;
  pl = 1, Object.defineProperty(Ho, "__esModule", { value: !0 }), Ho.getContractError = i;
  const e = pe(), t = ie(), n = Nt(), r = Qe(), o = lr(), a = 3;
  function i(s, { abi: u, address: d, args: f, docsPath: c, functionName: m, sender: y }) {
    const g = s instanceof n.RawContractError ? s : s instanceof t.BaseError ? s.walk((E) => "data" in E) || s.walk() : {}, { code: b, data: h, details: _, message: P, shortMessage: j } = g, v = s instanceof e.AbiDecodingZeroDataError ? new n.ContractFunctionZeroDataError({ functionName: m }) : [a, o.InternalRpcError.code].includes(b) && (h || _ || P || j) ? new n.ContractFunctionRevertedError({
      abi: u,
      data: typeof h == "object" ? h.data : h,
      functionName: m,
      message: g instanceof r.RpcRequestError ? _ : j ?? P
    }) : s;
    return new n.ContractFunctionExecutionError(v, {
      abi: u,
      args: f,
      contractAddress: d,
      docsPath: c,
      functionName: m,
      sender: y
    });
  }
  return Ho;
}
var Vo = {}, Wo = {}, Ko = {}, Zo = {}, _l;
function kh() {
  if (_l) return Zo;
  _l = 1, Object.defineProperty(Zo, "__esModule", { value: !0 }), Zo.publicKeyToAddress = n;
  const e = Ue(), t = Me();
  function n(r) {
    const o = (0, t.keccak256)(`0x${r.substring(4)}`).substring(26);
    return (0, e.checksumAddress)(`0x${o}`);
  }
  return Zo;
}
var Jo = {}, yc = {}, mt = {}, Ct = {}, vl;
function Hh() {
  if (vl) return Ct;
  vl = 1, Object.defineProperty(Ct, "__esModule", { value: !0 }), Ct.HashMD = void 0, Ct.setBigUint64 = n, Ct.Chi = r, Ct.Maj = o;
  const e = /* @__PURE__ */ Th(), t = /* @__PURE__ */ Or();
  function n(i, s, u, d) {
    if (typeof i.setBigUint64 == "function")
      return i.setBigUint64(s, u, d);
    const f = BigInt(32), c = BigInt(4294967295), m = Number(u >> f & c), y = Number(u & c), g = d ? 4 : 0, b = d ? 0 : 4;
    i.setUint32(s + g, m, d), i.setUint32(s + b, y, d);
  }
  function r(i, s, u) {
    return i & s ^ ~i & u;
  }
  function o(i, s, u) {
    return i & s ^ i & u ^ s & u;
  }
  class a extends t.Hash {
    constructor(s, u, d, f) {
      super(), this.blockLen = s, this.outputLen = u, this.padOffset = d, this.isLE = f, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(s), this.view = (0, t.createView)(this.buffer);
    }
    update(s) {
      (0, e.aexists)(this);
      const { view: u, buffer: d, blockLen: f } = this;
      s = (0, t.toBytes)(s);
      const c = s.length;
      for (let m = 0; m < c; ) {
        const y = Math.min(f - this.pos, c - m);
        if (y === f) {
          const g = (0, t.createView)(s);
          for (; f <= c - m; m += f)
            this.process(g, m);
          continue;
        }
        d.set(s.subarray(m, m + y), this.pos), this.pos += y, m += y, this.pos === f && (this.process(u, 0), this.pos = 0);
      }
      return this.length += s.length, this.roundClean(), this;
    }
    digestInto(s) {
      (0, e.aexists)(this), (0, e.aoutput)(s, this), this.finished = !0;
      const { buffer: u, view: d, blockLen: f, isLE: c } = this;
      let { pos: m } = this;
      u[m++] = 128, this.buffer.subarray(m).fill(0), this.padOffset > f - m && (this.process(d, 0), m = 0);
      for (let _ = m; _ < f; _++)
        u[_] = 0;
      n(d, f - 8, BigInt(this.length * 8), c), this.process(d, 0);
      const y = (0, t.createView)(s), g = this.outputLen;
      if (g % 4)
        throw new Error("_sha2: outputLen should be aligned to 32bit");
      const b = g / 4, h = this.get();
      if (b > h.length)
        throw new Error("_sha2: outputLen bigger than state");
      for (let _ = 0; _ < b; _++)
        y.setUint32(4 * _, h[_], c);
    }
    digest() {
      const { buffer: s, outputLen: u } = this;
      this.digestInto(s);
      const d = s.slice(0, u);
      return this.destroy(), d;
    }
    _cloneInto(s) {
      s || (s = new this.constructor()), s.set(...this.get());
      const { blockLen: u, buffer: d, length: f, finished: c, destroyed: m, pos: y } = this;
      return s.length = f, s.pos = y, s.finished = c, s.destroyed = m, f % u && s.buffer.set(d), s;
    }
  }
  return Ct.HashMD = a, Ct;
}
var El;
function $h() {
  if (El) return mt;
  El = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.sha224 = mt.sha256 = mt.SHA256 = void 0;
  const e = /* @__PURE__ */ Hh(), t = /* @__PURE__ */ Or(), n = /* @__PURE__ */ new Uint32Array([
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
  ]), r = /* @__PURE__ */ new Uint32Array([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]), o = /* @__PURE__ */ new Uint32Array(64);
  class a extends e.HashMD {
    constructor() {
      super(64, 32, 8, !1), this.A = r[0] | 0, this.B = r[1] | 0, this.C = r[2] | 0, this.D = r[3] | 0, this.E = r[4] | 0, this.F = r[5] | 0, this.G = r[6] | 0, this.H = r[7] | 0;
    }
    get() {
      const { A: u, B: d, C: f, D: c, E: m, F: y, G: g, H: b } = this;
      return [u, d, f, c, m, y, g, b];
    }
    // prettier-ignore
    set(u, d, f, c, m, y, g, b) {
      this.A = u | 0, this.B = d | 0, this.C = f | 0, this.D = c | 0, this.E = m | 0, this.F = y | 0, this.G = g | 0, this.H = b | 0;
    }
    process(u, d) {
      for (let P = 0; P < 16; P++, d += 4)
        o[P] = u.getUint32(d, !1);
      for (let P = 16; P < 64; P++) {
        const j = o[P - 15], v = o[P - 2], E = (0, t.rotr)(j, 7) ^ (0, t.rotr)(j, 18) ^ j >>> 3, l = (0, t.rotr)(v, 17) ^ (0, t.rotr)(v, 19) ^ v >>> 10;
        o[P] = l + o[P - 7] + E + o[P - 16] | 0;
      }
      let { A: f, B: c, C: m, D: y, E: g, F: b, G: h, H: _ } = this;
      for (let P = 0; P < 64; P++) {
        const j = (0, t.rotr)(g, 6) ^ (0, t.rotr)(g, 11) ^ (0, t.rotr)(g, 25), v = _ + j + (0, e.Chi)(g, b, h) + n[P] + o[P] | 0, l = ((0, t.rotr)(f, 2) ^ (0, t.rotr)(f, 13) ^ (0, t.rotr)(f, 22)) + (0, e.Maj)(f, c, m) | 0;
        _ = h, h = b, b = g, g = y + v | 0, y = m, m = c, c = f, f = v + l | 0;
      }
      f = f + this.A | 0, c = c + this.B | 0, m = m + this.C | 0, y = y + this.D | 0, g = g + this.E | 0, b = b + this.F | 0, h = h + this.G | 0, _ = _ + this.H | 0, this.set(f, c, m, y, g, b, h, _);
    }
    roundClean() {
      o.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
  }
  mt.SHA256 = a;
  class i extends a {
    constructor() {
      super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28;
    }
  }
  return mt.sha256 = (0, t.wrapConstructor)(() => new a()), mt.sha224 = (0, t.wrapConstructor)(() => new i()), mt;
}
var mn = {}, hc = {}, jl;
function c1() {
  return jl || (jl = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.hmac = e.HMAC = void 0;
    const t = /* @__PURE__ */ Th(), n = /* @__PURE__ */ Or();
    class r extends n.Hash {
      constructor(i, s) {
        super(), this.finished = !1, this.destroyed = !1, (0, t.ahash)(i);
        const u = (0, n.toBytes)(s);
        if (this.iHash = i.create(), typeof this.iHash.update != "function")
          throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
        const d = this.blockLen, f = new Uint8Array(d);
        f.set(u.length > d ? i.create().update(u).digest() : u);
        for (let c = 0; c < f.length; c++)
          f[c] ^= 54;
        this.iHash.update(f), this.oHash = i.create();
        for (let c = 0; c < f.length; c++)
          f[c] ^= 106;
        this.oHash.update(f), f.fill(0);
      }
      update(i) {
        return (0, t.aexists)(this), this.iHash.update(i), this;
      }
      digestInto(i) {
        (0, t.aexists)(this), (0, t.abytes)(i, this.outputLen), this.finished = !0, this.iHash.digestInto(i), this.oHash.update(i), this.oHash.digestInto(i), this.destroy();
      }
      digest() {
        const i = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(i), i;
      }
      _cloneInto(i) {
        i || (i = Object.create(Object.getPrototypeOf(this), {}));
        const { oHash: s, iHash: u, finished: d, destroyed: f, blockLen: c, outputLen: m } = this;
        return i = i, i.finished = d, i.destroyed = f, i.blockLen = c, i.outputLen = m, i.oHash = s._cloneInto(i.oHash), i.iHash = u._cloneInto(i.iHash), i;
      }
      destroy() {
        this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
      }
    }
    e.HMAC = r;
    const o = (a, i, s) => new r(a, i).update(s).digest();
    e.hmac = o, e.hmac.create = (a, i) => new r(a, i);
  }(hc)), hc;
}
var pc = {}, Xt = {}, ge = {}, ue = {}, Pl;
function Ft() {
  if (Pl) return ue;
  Pl = 1;
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(ue, "__esModule", { value: !0 }), ue.notImplemented = ue.bitMask = void 0, ue.isBytes = r, ue.abytes = o, ue.abool = a, ue.bytesToHex = s, ue.numberToHexUnpadded = u, ue.hexToNumber = d, ue.hexToBytes = m, ue.bytesToNumberBE = y, ue.bytesToNumberLE = g, ue.numberToBytesBE = b, ue.numberToBytesLE = h, ue.numberToVarBytesBE = _, ue.ensureBytes = P, ue.concatBytes = j, ue.equalBytes = v, ue.utf8ToBytes = E, ue.inRange = p, ue.aInRange = T, ue.bitLen = w, ue.bitGet = I, ue.bitSet = C, ue.createHmacDrbg = x, ue.validateObject = F, ue.memoized = q;
  const e = /* @__PURE__ */ BigInt(0), t = /* @__PURE__ */ BigInt(1), n = /* @__PURE__ */ BigInt(2);
  function r(S) {
    return S instanceof Uint8Array || ArrayBuffer.isView(S) && S.constructor.name === "Uint8Array";
  }
  function o(S) {
    if (!r(S))
      throw new Error("Uint8Array expected");
  }
  function a(S, R) {
    if (typeof R != "boolean")
      throw new Error(S + " boolean expected, got " + R);
  }
  const i = /* @__PURE__ */ Array.from({ length: 256 }, (S, R) => R.toString(16).padStart(2, "0"));
  function s(S) {
    o(S);
    let R = "";
    for (let O = 0; O < S.length; O++)
      R += i[S[O]];
    return R;
  }
  function u(S) {
    const R = S.toString(16);
    return R.length & 1 ? "0" + R : R;
  }
  function d(S) {
    if (typeof S != "string")
      throw new Error("hex string expected, got " + typeof S);
    return S === "" ? e : BigInt("0x" + S);
  }
  const f = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
  function c(S) {
    if (S >= f._0 && S <= f._9)
      return S - f._0;
    if (S >= f.A && S <= f.F)
      return S - (f.A - 10);
    if (S >= f.a && S <= f.f)
      return S - (f.a - 10);
  }
  function m(S) {
    if (typeof S != "string")
      throw new Error("hex string expected, got " + typeof S);
    const R = S.length, O = R / 2;
    if (R % 2)
      throw new Error("hex string expected, got unpadded hex of length " + R);
    const k = new Uint8Array(O);
    for (let z = 0, L = 0; z < O; z++, L += 2) {
      const U = c(S.charCodeAt(L)), G = c(S.charCodeAt(L + 1));
      if (U === void 0 || G === void 0) {
        const V = S[L] + S[L + 1];
        throw new Error('hex string expected, got non-hex character "' + V + '" at index ' + L);
      }
      k[z] = U * 16 + G;
    }
    return k;
  }
  function y(S) {
    return d(s(S));
  }
  function g(S) {
    return o(S), d(s(Uint8Array.from(S).reverse()));
  }
  function b(S, R) {
    return m(S.toString(16).padStart(R * 2, "0"));
  }
  function h(S, R) {
    return b(S, R).reverse();
  }
  function _(S) {
    return m(u(S));
  }
  function P(S, R, O) {
    let k;
    if (typeof R == "string")
      try {
        k = m(R);
      } catch (L) {
        throw new Error(S + " must be hex string or Uint8Array, cause: " + L);
      }
    else if (r(R))
      k = Uint8Array.from(R);
    else
      throw new Error(S + " must be hex string or Uint8Array");
    const z = k.length;
    if (typeof O == "number" && z !== O)
      throw new Error(S + " of length " + O + " expected, got " + z);
    return k;
  }
  function j(...S) {
    let R = 0;
    for (let k = 0; k < S.length; k++) {
      const z = S[k];
      o(z), R += z.length;
    }
    const O = new Uint8Array(R);
    for (let k = 0, z = 0; k < S.length; k++) {
      const L = S[k];
      O.set(L, z), z += L.length;
    }
    return O;
  }
  function v(S, R) {
    if (S.length !== R.length)
      return !1;
    let O = 0;
    for (let k = 0; k < S.length; k++)
      O |= S[k] ^ R[k];
    return O === 0;
  }
  function E(S) {
    if (typeof S != "string")
      throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(S));
  }
  const l = (S) => typeof S == "bigint" && e <= S;
  function p(S, R, O) {
    return l(S) && l(R) && l(O) && R <= S && S < O;
  }
  function T(S, R, O, k) {
    if (!p(R, O, k))
      throw new Error("expected valid " + S + ": " + O + " <= n < " + k + ", got " + R);
  }
  function w(S) {
    let R;
    for (R = 0; S > e; S >>= t, R += 1)
      ;
    return R;
  }
  function I(S, R) {
    return S >> BigInt(R) & t;
  }
  function C(S, R, O) {
    return S | (O ? t : e) << BigInt(R);
  }
  const B = (S) => (n << BigInt(S - 1)) - t;
  ue.bitMask = B;
  const M = (S) => new Uint8Array(S), A = (S) => Uint8Array.from(S);
  function x(S, R, O) {
    if (typeof S != "number" || S < 2)
      throw new Error("hashLen must be a number");
    if (typeof R != "number" || R < 2)
      throw new Error("qByteLen must be a number");
    if (typeof O != "function")
      throw new Error("hmacFn must be a function");
    let k = M(S), z = M(S), L = 0;
    const U = () => {
      k.fill(1), z.fill(0), L = 0;
    }, G = (...X) => O(z, k, ...X), V = (X = M()) => {
      z = G(A([0]), X), k = G(), X.length !== 0 && (z = G(A([1]), X), k = G());
    }, K = () => {
      if (L++ >= 1e3)
        throw new Error("drbg: tried 1000 values");
      let X = 0;
      const te = [];
      for (; X < R; ) {
        k = G();
        const se = k.slice();
        te.push(se), X += k.length;
      }
      return j(...te);
    };
    return (X, te) => {
      U(), V(X);
      let se;
      for (; !(se = te(K())); )
        V();
      return U(), se;
    };
  }
  const H = {
    bigint: (S) => typeof S == "bigint",
    function: (S) => typeof S == "function",
    boolean: (S) => typeof S == "boolean",
    string: (S) => typeof S == "string",
    stringOrUint8Array: (S) => typeof S == "string" || r(S),
    isSafeInteger: (S) => Number.isSafeInteger(S),
    array: (S) => Array.isArray(S),
    field: (S, R) => R.Fp.isValid(S),
    hash: (S) => typeof S == "function" && Number.isSafeInteger(S.outputLen)
  };
  function F(S, R, O = {}) {
    const k = (z, L, U) => {
      const G = H[L];
      if (typeof G != "function")
        throw new Error("invalid validator function");
      const V = S[z];
      if (!(U && V === void 0) && !G(V, S))
        throw new Error("param " + String(z) + " is invalid. Expected " + L + ", got " + V);
    };
    for (const [z, L] of Object.entries(R))
      k(z, L, !1);
    for (const [z, L] of Object.entries(O))
      k(z, L, !0);
    return S;
  }
  const $ = () => {
    throw new Error("not implemented");
  };
  ue.notImplemented = $;
  function q(S) {
    const R = /* @__PURE__ */ new WeakMap();
    return (O, ...k) => {
      const z = R.get(O);
      if (z !== void 0)
        return z;
      const L = S(O, ...k);
      return R.set(O, L), L;
    };
  }
  return ue;
}
var wl;
function wu() {
  if (wl) return ge;
  wl = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.isNegativeLE = void 0, ge.mod = u, ge.pow = d, ge.pow2 = f, ge.invert = c, ge.tonelliShanks = m, ge.FpSqrt = y, ge.validateField = h, ge.FpPow = _, ge.FpInvertBatch = P, ge.FpDiv = j, ge.FpLegendre = v, ge.FpIsSquare = E, ge.nLength = l, ge.Field = p, ge.FpSqrtOdd = T, ge.FpSqrtEven = w, ge.hashToPrivateScalar = I, ge.getFieldBytesLength = C, ge.getMinHashLength = B, ge.mapHashToField = M;
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  const e = /* @__PURE__ */ Ft(), t = BigInt(0), n = BigInt(1), r = /* @__PURE__ */ BigInt(2), o = /* @__PURE__ */ BigInt(3), a = /* @__PURE__ */ BigInt(4), i = /* @__PURE__ */ BigInt(5), s = /* @__PURE__ */ BigInt(8);
  function u(A, x) {
    const H = A % x;
    return H >= t ? H : x + H;
  }
  function d(A, x, H) {
    if (x < t)
      throw new Error("invalid exponent, negatives unsupported");
    if (H <= t)
      throw new Error("invalid modulus");
    if (H === n)
      return t;
    let F = n;
    for (; x > t; )
      x & n && (F = F * A % H), A = A * A % H, x >>= n;
    return F;
  }
  function f(A, x, H) {
    let F = A;
    for (; x-- > t; )
      F *= F, F %= H;
    return F;
  }
  function c(A, x) {
    if (A === t)
      throw new Error("invert: expected non-zero number");
    if (x <= t)
      throw new Error("invert: expected positive modulus, got " + x);
    let H = u(A, x), F = x, $ = t, q = n;
    for (; H !== t; ) {
      const R = F / H, O = F % H, k = $ - q * R;
      F = H, H = O, $ = q, q = k;
    }
    if (F !== n)
      throw new Error("invert: does not exist");
    return u($, x);
  }
  function m(A) {
    const x = (A - n) / r;
    let H, F, $;
    for (H = A - n, F = 0; H % r === t; H /= r, F++)
      ;
    for ($ = r; $ < A && d($, x, A) !== A - n; $++)
      if ($ > 1e3)
        throw new Error("Cannot find square root: likely non-prime P");
    if (F === 1) {
      const S = (A + n) / a;
      return function(O, k) {
        const z = O.pow(k, S);
        if (!O.eql(O.sqr(z), k))
          throw new Error("Cannot find square root");
        return z;
      };
    }
    const q = (H + n) / r;
    return function(R, O) {
      if (R.pow(O, x) === R.neg(R.ONE))
        throw new Error("Cannot find square root");
      let k = F, z = R.pow(R.mul(R.ONE, $), H), L = R.pow(O, q), U = R.pow(O, H);
      for (; !R.eql(U, R.ONE); ) {
        if (R.eql(U, R.ZERO))
          return R.ZERO;
        let G = 1;
        for (let K = R.sqr(U); G < k && !R.eql(K, R.ONE); G++)
          K = R.sqr(K);
        const V = R.pow(z, n << BigInt(k - G - 1));
        z = R.sqr(V), L = R.mul(L, V), U = R.mul(U, z), k = G;
      }
      return L;
    };
  }
  function y(A) {
    if (A % a === o) {
      const x = (A + n) / a;
      return function(F, $) {
        const q = F.pow($, x);
        if (!F.eql(F.sqr(q), $))
          throw new Error("Cannot find square root");
        return q;
      };
    }
    if (A % s === i) {
      const x = (A - i) / s;
      return function(F, $) {
        const q = F.mul($, r), S = F.pow(q, x), R = F.mul($, S), O = F.mul(F.mul(R, r), S), k = F.mul(R, F.sub(O, F.ONE));
        if (!F.eql(F.sqr(k), $))
          throw new Error("Cannot find square root");
        return k;
      };
    }
    return m(A);
  }
  const g = (A, x) => (u(A, x) & n) === n;
  ge.isNegativeLE = g;
  const b = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
  ];
  function h(A) {
    const x = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "isSafeInteger",
      BITS: "isSafeInteger"
    }, H = b.reduce((F, $) => (F[$] = "function", F), x);
    return (0, e.validateObject)(A, H);
  }
  function _(A, x, H) {
    if (H < t)
      throw new Error("invalid exponent, negatives unsupported");
    if (H === t)
      return A.ONE;
    if (H === n)
      return x;
    let F = A.ONE, $ = x;
    for (; H > t; )
      H & n && (F = A.mul(F, $)), $ = A.sqr($), H >>= n;
    return F;
  }
  function P(A, x) {
    const H = new Array(x.length), F = x.reduce((q, S, R) => A.is0(S) ? q : (H[R] = q, A.mul(q, S)), A.ONE), $ = A.inv(F);
    return x.reduceRight((q, S, R) => A.is0(S) ? q : (H[R] = A.mul(q, H[R]), A.mul(q, S)), $), H;
  }
  function j(A, x, H) {
    return A.mul(x, typeof H == "bigint" ? c(H, A.ORDER) : A.inv(H));
  }
  function v(A) {
    const x = (A - n) / r;
    return (H, F) => H.pow(F, x);
  }
  function E(A) {
    const x = v(A.ORDER);
    return (H) => {
      const F = x(A, H);
      return A.eql(F, A.ZERO) || A.eql(F, A.ONE);
    };
  }
  function l(A, x) {
    const H = x !== void 0 ? x : A.toString(2).length, F = Math.ceil(H / 8);
    return { nBitLength: H, nByteLength: F };
  }
  function p(A, x, H = !1, F = {}) {
    if (A <= t)
      throw new Error("invalid field: expected ORDER > 0, got " + A);
    const { nBitLength: $, nByteLength: q } = l(A, x);
    if (q > 2048)
      throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let S;
    const R = Object.freeze({
      ORDER: A,
      isLE: H,
      BITS: $,
      BYTES: q,
      MASK: (0, e.bitMask)($),
      ZERO: t,
      ONE: n,
      create: (O) => u(O, A),
      isValid: (O) => {
        if (typeof O != "bigint")
          throw new Error("invalid field element: expected bigint, got " + typeof O);
        return t <= O && O < A;
      },
      is0: (O) => O === t,
      isOdd: (O) => (O & n) === n,
      neg: (O) => u(-O, A),
      eql: (O, k) => O === k,
      sqr: (O) => u(O * O, A),
      add: (O, k) => u(O + k, A),
      sub: (O, k) => u(O - k, A),
      mul: (O, k) => u(O * k, A),
      pow: (O, k) => _(R, O, k),
      div: (O, k) => u(O * c(k, A), A),
      // Same as above, but doesn't normalize
      sqrN: (O) => O * O,
      addN: (O, k) => O + k,
      subN: (O, k) => O - k,
      mulN: (O, k) => O * k,
      inv: (O) => c(O, A),
      sqrt: F.sqrt || ((O) => (S || (S = y(A)), S(R, O))),
      invertBatch: (O) => P(R, O),
      // TODO: do we really need constant cmov?
      // We don't have const-time bigints anyway, so probably will be not very useful
      cmov: (O, k, z) => z ? k : O,
      toBytes: (O) => H ? (0, e.numberToBytesLE)(O, q) : (0, e.numberToBytesBE)(O, q),
      fromBytes: (O) => {
        if (O.length !== q)
          throw new Error("Field.fromBytes: expected " + q + " bytes, got " + O.length);
        return H ? (0, e.bytesToNumberLE)(O) : (0, e.bytesToNumberBE)(O);
      }
    });
    return Object.freeze(R);
  }
  function T(A, x) {
    if (!A.isOdd)
      throw new Error("Field doesn't have isOdd");
    const H = A.sqrt(x);
    return A.isOdd(H) ? H : A.neg(H);
  }
  function w(A, x) {
    if (!A.isOdd)
      throw new Error("Field doesn't have isOdd");
    const H = A.sqrt(x);
    return A.isOdd(H) ? A.neg(H) : H;
  }
  function I(A, x, H = !1) {
    A = (0, e.ensureBytes)("privateHash", A);
    const F = A.length, $ = l(x).nByteLength + 8;
    if ($ < 24 || F < $ || F > 1024)
      throw new Error("hashToPrivateScalar: expected " + $ + "-1024 bytes of input, got " + F);
    const q = H ? (0, e.bytesToNumberLE)(A) : (0, e.bytesToNumberBE)(A);
    return u(q, x - n) + n;
  }
  function C(A) {
    if (typeof A != "bigint")
      throw new Error("field order must be bigint");
    const x = A.toString(2).length;
    return Math.ceil(x / 8);
  }
  function B(A) {
    const x = C(A);
    return x + Math.ceil(x / 2);
  }
  function M(A, x, H = !1) {
    const F = A.length, $ = C(x), q = B(x);
    if (F < 16 || F < q || F > 1024)
      throw new Error("expected " + q + "-1024 bytes of input, got " + F);
    const S = H ? (0, e.bytesToNumberLE)(A) : (0, e.bytesToNumberBE)(A), R = u(S, x - n) + n;
    return H ? (0, e.numberToBytesLE)(R, $) : (0, e.numberToBytesBE)(R, $);
  }
  return ge;
}
var Tl;
function d1() {
  if (Tl) return Xt;
  Tl = 1, Object.defineProperty(Xt, "__esModule", { value: !0 }), Xt.wNAF = m, Xt.pippenger = y, Xt.precomputeMSMUnsafe = g, Xt.validateBasic = b;
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  const e = /* @__PURE__ */ wu(), t = /* @__PURE__ */ Ft(), n = BigInt(0), r = BigInt(1);
  function o(h, _) {
    const P = _.negate();
    return h ? P : _;
  }
  function a(h, _) {
    if (!Number.isSafeInteger(h) || h <= 0 || h > _)
      throw new Error("invalid window size, expected [1.." + _ + "], got W=" + h);
  }
  function i(h, _) {
    a(h, _);
    const P = Math.ceil(_ / h) + 1, j = 2 ** (h - 1);
    return { windows: P, windowSize: j };
  }
  function s(h, _) {
    if (!Array.isArray(h))
      throw new Error("array expected");
    h.forEach((P, j) => {
      if (!(P instanceof _))
        throw new Error("invalid point at index " + j);
    });
  }
  function u(h, _) {
    if (!Array.isArray(h))
      throw new Error("array of scalars expected");
    h.forEach((P, j) => {
      if (!_.isValid(P))
        throw new Error("invalid scalar at index " + j);
    });
  }
  const d = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap();
  function c(h) {
    return f.get(h) || 1;
  }
  function m(h, _) {
    return {
      constTimeNegate: o,
      hasPrecomputes(P) {
        return c(P) !== 1;
      },
      // non-const time multiplication ladder
      unsafeLadder(P, j, v = h.ZERO) {
        let E = P;
        for (; j > n; )
          j & r && (v = v.add(E)), E = E.double(), j >>= r;
        return v;
      },
      /**
       * Creates a wNAF precomputation window. Used for caching.
       * Default window size is set by `utils.precompute()` and is equal to 8.
       * Number of precomputed points depends on the curve size:
       * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
       * - 𝑊 is the window size
       * - 𝑛 is the bitlength of the curve order.
       * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
       * @param elm Point instance
       * @param W window size
       * @returns precomputed point tables flattened to a single array
       */
      precomputeWindow(P, j) {
        const { windows: v, windowSize: E } = i(j, _), l = [];
        let p = P, T = p;
        for (let w = 0; w < v; w++) {
          T = p, l.push(T);
          for (let I = 1; I < E; I++)
            T = T.add(p), l.push(T);
          p = T.double();
        }
        return l;
      },
      /**
       * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
       * @param W window size
       * @param precomputes precomputed tables
       * @param n scalar (we don't check here, but should be less than curve order)
       * @returns real and fake (for const-time) points
       */
      wNAF(P, j, v) {
        const { windows: E, windowSize: l } = i(P, _);
        let p = h.ZERO, T = h.BASE;
        const w = BigInt(2 ** P - 1), I = 2 ** P, C = BigInt(P);
        for (let B = 0; B < E; B++) {
          const M = B * l;
          let A = Number(v & w);
          v >>= C, A > l && (A -= I, v += r);
          const x = M, H = M + Math.abs(A) - 1, F = B % 2 !== 0, $ = A < 0;
          A === 0 ? T = T.add(o(F, j[x])) : p = p.add(o($, j[H]));
        }
        return { p, f: T };
      },
      /**
       * Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
       * @param W window size
       * @param precomputes precomputed tables
       * @param n scalar (we don't check here, but should be less than curve order)
       * @param acc accumulator point to add result of multiplication
       * @returns point
       */
      wNAFUnsafe(P, j, v, E = h.ZERO) {
        const { windows: l, windowSize: p } = i(P, _), T = BigInt(2 ** P - 1), w = 2 ** P, I = BigInt(P);
        for (let C = 0; C < l; C++) {
          const B = C * p;
          if (v === n)
            break;
          let M = Number(v & T);
          if (v >>= I, M > p && (M -= w, v += r), M === 0)
            continue;
          let A = j[B + Math.abs(M) - 1];
          M < 0 && (A = A.negate()), E = E.add(A);
        }
        return E;
      },
      getPrecomputes(P, j, v) {
        let E = d.get(j);
        return E || (E = this.precomputeWindow(j, P), P !== 1 && d.set(j, v(E))), E;
      },
      wNAFCached(P, j, v) {
        const E = c(P);
        return this.wNAF(E, this.getPrecomputes(E, P, v), j);
      },
      wNAFCachedUnsafe(P, j, v, E) {
        const l = c(P);
        return l === 1 ? this.unsafeLadder(P, j, E) : this.wNAFUnsafe(l, this.getPrecomputes(l, P, v), j, E);
      },
      // We calculate precomputes for elliptic curve point multiplication
      // using windowed method. This specifies window size and
      // stores precomputed values. Usually only base point would be precomputed.
      setWindowSize(P, j) {
        a(j, _), f.set(P, j), d.delete(P);
      }
    };
  }
  function y(h, _, P, j) {
    if (s(P, h), u(j, _), P.length !== j.length)
      throw new Error("arrays of points and scalars must have equal length");
    const v = h.ZERO, E = (0, t.bitLen)(BigInt(P.length)), l = E > 12 ? E - 3 : E > 4 ? E - 2 : E ? 2 : 1, p = (1 << l) - 1, T = new Array(p + 1).fill(v), w = Math.floor((_.BITS - 1) / l) * l;
    let I = v;
    for (let C = w; C >= 0; C -= l) {
      T.fill(v);
      for (let M = 0; M < j.length; M++) {
        const A = j[M], x = Number(A >> BigInt(C) & BigInt(p));
        T[x] = T[x].add(P[M]);
      }
      let B = v;
      for (let M = T.length - 1, A = v; M > 0; M--)
        A = A.add(T[M]), B = B.add(A);
      if (I = I.add(B), C !== 0)
        for (let M = 0; M < l; M++)
          I = I.double();
    }
    return I;
  }
  function g(h, _, P, j) {
    a(j, _.BITS), s(P, h);
    const v = h.ZERO, E = 2 ** j - 1, l = Math.ceil(_.BITS / j), p = BigInt((1 << j) - 1), T = P.map((w) => {
      const I = [];
      for (let C = 0, B = w; C < E; C++)
        I.push(B), B = B.add(w);
      return I;
    });
    return (w) => {
      if (u(w, _), w.length > P.length)
        throw new Error("array of scalars must be smaller than array of points");
      let I = v;
      for (let C = 0; C < l; C++) {
        if (I !== v)
          for (let M = 0; M < j; M++)
            I = I.double();
        const B = BigInt(l * j - (C + 1) * j);
        for (let M = 0; M < w.length; M++) {
          const A = w[M], x = Number(A >> B & p);
          x && (I = I.add(T[M][x - 1]));
        }
      }
      return I;
    };
  }
  function b(h) {
    return (0, e.validateField)(h.Fp), (0, t.validateObject)(h, {
      n: "bigint",
      h: "bigint",
      Gx: "field",
      Gy: "field"
    }, {
      nBitLength: "isSafeInteger",
      nByteLength: "isSafeInteger"
    }), Object.freeze({
      ...(0, e.nLength)(h.n, h.nBitLength),
      ...h,
      p: h.Fp.ORDER
    });
  }
  return Xt;
}
var Al;
function Nh() {
  return Al || (Al = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DER = e.DERErr = void 0, e.weierstrassPoints = b, e.weierstrass = _, e.SWUFpSqrtRatio = P, e.mapToCurveSimpleSWU = j;
    /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    const t = /* @__PURE__ */ d1(), n = /* @__PURE__ */ wu(), r = /* @__PURE__ */ Ft(), o = /* @__PURE__ */ Ft();
    function a(v) {
      v.lowS !== void 0 && (0, o.abool)("lowS", v.lowS), v.prehash !== void 0 && (0, o.abool)("prehash", v.prehash);
    }
    function i(v) {
      const E = (0, t.validateBasic)(v);
      r.validateObject(E, {
        a: "field",
        b: "field"
      }, {
        allowedPrivateKeyLengths: "array",
        wrapPrivateKey: "boolean",
        isTorsionFree: "function",
        clearCofactor: "function",
        allowInfinityPoint: "boolean",
        fromBytes: "function",
        toBytes: "function"
      });
      const { endo: l, Fp: p, a: T } = E;
      if (l) {
        if (!p.eql(T, p.ZERO))
          throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");
        if (typeof l != "object" || typeof l.beta != "bigint" || typeof l.splitScalar != "function")
          throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function");
      }
      return Object.freeze({ ...E });
    }
    const { bytesToNumberBE: s, hexToBytes: u } = r;
    class d extends Error {
      constructor(E = "") {
        super(E);
      }
    }
    e.DERErr = d, e.DER = {
      // asn.1 DER encoding utils
      Err: d,
      // Basic building block is TLV (Tag-Length-Value)
      _tlv: {
        encode: (v, E) => {
          const { Err: l } = e.DER;
          if (v < 0 || v > 256)
            throw new l("tlv.encode: wrong tag");
          if (E.length & 1)
            throw new l("tlv.encode: unpadded data");
          const p = E.length / 2, T = r.numberToHexUnpadded(p);
          if (T.length / 2 & 128)
            throw new l("tlv.encode: long form length too big");
          const w = p > 127 ? r.numberToHexUnpadded(T.length / 2 | 128) : "";
          return r.numberToHexUnpadded(v) + w + T + E;
        },
        // v - value, l - left bytes (unparsed)
        decode(v, E) {
          const { Err: l } = e.DER;
          let p = 0;
          if (v < 0 || v > 256)
            throw new l("tlv.encode: wrong tag");
          if (E.length < 2 || E[p++] !== v)
            throw new l("tlv.decode: wrong tlv");
          const T = E[p++], w = !!(T & 128);
          let I = 0;
          if (!w)
            I = T;
          else {
            const B = T & 127;
            if (!B)
              throw new l("tlv.decode(long): indefinite length not supported");
            if (B > 4)
              throw new l("tlv.decode(long): byte length is too big");
            const M = E.subarray(p, p + B);
            if (M.length !== B)
              throw new l("tlv.decode: length bytes not complete");
            if (M[0] === 0)
              throw new l("tlv.decode(long): zero leftmost byte");
            for (const A of M)
              I = I << 8 | A;
            if (p += B, I < 128)
              throw new l("tlv.decode(long): not minimal encoding");
          }
          const C = E.subarray(p, p + I);
          if (C.length !== I)
            throw new l("tlv.decode: wrong value length");
          return { v: C, l: E.subarray(p + I) };
        }
      },
      // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
      // since we always use positive integers here. It must always be empty:
      // - add zero byte if exists
      // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
      _int: {
        encode(v) {
          const { Err: E } = e.DER;
          if (v < f)
            throw new E("integer: negative integers are not allowed");
          let l = r.numberToHexUnpadded(v);
          if (Number.parseInt(l[0], 16) & 8 && (l = "00" + l), l.length & 1)
            throw new E("unexpected DER parsing assertion: unpadded hex");
          return l;
        },
        decode(v) {
          const { Err: E } = e.DER;
          if (v[0] & 128)
            throw new E("invalid signature integer: negative");
          if (v[0] === 0 && !(v[1] & 128))
            throw new E("invalid signature integer: unnecessary leading zero");
          return s(v);
        }
      },
      toSig(v) {
        const { Err: E, _int: l, _tlv: p } = e.DER, T = typeof v == "string" ? u(v) : v;
        r.abytes(T);
        const { v: w, l: I } = p.decode(48, T);
        if (I.length)
          throw new E("invalid signature: left bytes after parsing");
        const { v: C, l: B } = p.decode(2, w), { v: M, l: A } = p.decode(2, B);
        if (A.length)
          throw new E("invalid signature: left bytes after parsing");
        return { r: l.decode(C), s: l.decode(M) };
      },
      hexFromSig(v) {
        const { _tlv: E, _int: l } = e.DER, p = E.encode(2, l.encode(v.r)), T = E.encode(2, l.encode(v.s)), w = p + T;
        return E.encode(48, w);
      }
    };
    const f = BigInt(0), c = BigInt(1), m = BigInt(2), y = BigInt(3), g = BigInt(4);
    function b(v) {
      const E = i(v), { Fp: l } = E, p = (0, n.Field)(E.n, E.nBitLength), T = E.toBytes || ((q, S, R) => {
        const O = S.toAffine();
        return r.concatBytes(Uint8Array.from([4]), l.toBytes(O.x), l.toBytes(O.y));
      }), w = E.fromBytes || ((q) => {
        const S = q.subarray(1), R = l.fromBytes(S.subarray(0, l.BYTES)), O = l.fromBytes(S.subarray(l.BYTES, 2 * l.BYTES));
        return { x: R, y: O };
      });
      function I(q) {
        const { a: S, b: R } = E, O = l.sqr(q), k = l.mul(O, q);
        return l.add(l.add(k, l.mul(q, S)), R);
      }
      if (!l.eql(l.sqr(E.Gy), I(E.Gx)))
        throw new Error("bad generator point: equation left != right");
      function C(q) {
        return r.inRange(q, c, E.n);
      }
      function B(q) {
        const { allowedPrivateKeyLengths: S, nByteLength: R, wrapPrivateKey: O, n: k } = E;
        if (S && typeof q != "bigint") {
          if (r.isBytes(q) && (q = r.bytesToHex(q)), typeof q != "string" || !S.includes(q.length))
            throw new Error("invalid private key");
          q = q.padStart(R * 2, "0");
        }
        let z;
        try {
          z = typeof q == "bigint" ? q : r.bytesToNumberBE((0, o.ensureBytes)("private key", q, R));
        } catch {
          throw new Error("invalid private key, expected hex or " + R + " bytes, got " + typeof q);
        }
        return O && (z = (0, n.mod)(z, k)), r.aInRange("private key", z, c, k), z;
      }
      function M(q) {
        if (!(q instanceof H))
          throw new Error("ProjectivePoint expected");
      }
      const A = (0, o.memoized)((q, S) => {
        const { px: R, py: O, pz: k } = q;
        if (l.eql(k, l.ONE))
          return { x: R, y: O };
        const z = q.is0();
        S == null && (S = z ? l.ONE : l.inv(k));
        const L = l.mul(R, S), U = l.mul(O, S), G = l.mul(k, S);
        if (z)
          return { x: l.ZERO, y: l.ZERO };
        if (!l.eql(G, l.ONE))
          throw new Error("invZ was invalid");
        return { x: L, y: U };
      }), x = (0, o.memoized)((q) => {
        if (q.is0()) {
          if (E.allowInfinityPoint && !l.is0(q.py))
            return;
          throw new Error("bad point: ZERO");
        }
        const { x: S, y: R } = q.toAffine();
        if (!l.isValid(S) || !l.isValid(R))
          throw new Error("bad point: x or y not FE");
        const O = l.sqr(R), k = I(S);
        if (!l.eql(O, k))
          throw new Error("bad point: equation left != right");
        if (!q.isTorsionFree())
          throw new Error("bad point: not in prime-order subgroup");
        return !0;
      });
      class H {
        constructor(S, R, O) {
          if (this.px = S, this.py = R, this.pz = O, S == null || !l.isValid(S))
            throw new Error("x required");
          if (R == null || !l.isValid(R))
            throw new Error("y required");
          if (O == null || !l.isValid(O))
            throw new Error("z required");
          Object.freeze(this);
        }
        // Does not validate if the point is on-curve.
        // Use fromHex instead, or call assertValidity() later.
        static fromAffine(S) {
          const { x: R, y: O } = S || {};
          if (!S || !l.isValid(R) || !l.isValid(O))
            throw new Error("invalid affine point");
          if (S instanceof H)
            throw new Error("projective point not allowed");
          const k = (z) => l.eql(z, l.ZERO);
          return k(R) && k(O) ? H.ZERO : new H(R, O, l.ONE);
        }
        get x() {
          return this.toAffine().x;
        }
        get y() {
          return this.toAffine().y;
        }
        /**
         * Takes a bunch of Projective Points but executes only one
         * inversion on all of them. Inversion is very slow operation,
         * so this improves performance massively.
         * Optimization: converts a list of projective points to a list of identical points with Z=1.
         */
        static normalizeZ(S) {
          const R = l.invertBatch(S.map((O) => O.pz));
          return S.map((O, k) => O.toAffine(R[k])).map(H.fromAffine);
        }
        /**
         * Converts hash string or Uint8Array to Point.
         * @param hex short/long ECDSA hex
         */
        static fromHex(S) {
          const R = H.fromAffine(w((0, o.ensureBytes)("pointHex", S)));
          return R.assertValidity(), R;
        }
        // Multiplies generator point by privateKey.
        static fromPrivateKey(S) {
          return H.BASE.multiply(B(S));
        }
        // Multiscalar Multiplication
        static msm(S, R) {
          return (0, t.pippenger)(H, p, S, R);
        }
        // "Private method", don't use it directly
        _setWindowSize(S) {
          $.setWindowSize(this, S);
        }
        // A point on curve is valid if it conforms to equation.
        assertValidity() {
          x(this);
        }
        hasEvenY() {
          const { y: S } = this.toAffine();
          if (l.isOdd)
            return !l.isOdd(S);
          throw new Error("Field doesn't support isOdd");
        }
        /**
         * Compare one point to another.
         */
        equals(S) {
          M(S);
          const { px: R, py: O, pz: k } = this, { px: z, py: L, pz: U } = S, G = l.eql(l.mul(R, U), l.mul(z, k)), V = l.eql(l.mul(O, U), l.mul(L, k));
          return G && V;
        }
        /**
         * Flips point to one corresponding to (x, -y) in Affine coordinates.
         */
        negate() {
          return new H(this.px, l.neg(this.py), this.pz);
        }
        // Renes-Costello-Batina exception-free doubling formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 3
        // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
        double() {
          const { a: S, b: R } = E, O = l.mul(R, y), { px: k, py: z, pz: L } = this;
          let U = l.ZERO, G = l.ZERO, V = l.ZERO, K = l.mul(k, k), ee = l.mul(z, z), X = l.mul(L, L), te = l.mul(k, z);
          return te = l.add(te, te), V = l.mul(k, L), V = l.add(V, V), U = l.mul(S, V), G = l.mul(O, X), G = l.add(U, G), U = l.sub(ee, G), G = l.add(ee, G), G = l.mul(U, G), U = l.mul(te, U), V = l.mul(O, V), X = l.mul(S, X), te = l.sub(K, X), te = l.mul(S, te), te = l.add(te, V), V = l.add(K, K), K = l.add(V, K), K = l.add(K, X), K = l.mul(K, te), G = l.add(G, K), X = l.mul(z, L), X = l.add(X, X), K = l.mul(X, te), U = l.sub(U, K), V = l.mul(X, ee), V = l.add(V, V), V = l.add(V, V), new H(U, G, V);
        }
        // Renes-Costello-Batina exception-free addition formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 1
        // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
        add(S) {
          M(S);
          const { px: R, py: O, pz: k } = this, { px: z, py: L, pz: U } = S;
          let G = l.ZERO, V = l.ZERO, K = l.ZERO;
          const ee = E.a, X = l.mul(E.b, y);
          let te = l.mul(R, z), se = l.mul(O, L), Z = l.mul(k, U), J = l.add(R, O), W = l.add(z, L);
          J = l.mul(J, W), W = l.add(te, se), J = l.sub(J, W), W = l.add(R, k);
          let D = l.add(z, U);
          return W = l.mul(W, D), D = l.add(te, Z), W = l.sub(W, D), D = l.add(O, k), G = l.add(L, U), D = l.mul(D, G), G = l.add(se, Z), D = l.sub(D, G), K = l.mul(ee, W), G = l.mul(X, Z), K = l.add(G, K), G = l.sub(se, K), K = l.add(se, K), V = l.mul(G, K), se = l.add(te, te), se = l.add(se, te), Z = l.mul(ee, Z), W = l.mul(X, W), se = l.add(se, Z), Z = l.sub(te, Z), Z = l.mul(ee, Z), W = l.add(W, Z), te = l.mul(se, W), V = l.add(V, te), te = l.mul(D, W), G = l.mul(J, G), G = l.sub(G, te), te = l.mul(J, se), K = l.mul(D, K), K = l.add(K, te), new H(G, V, K);
        }
        subtract(S) {
          return this.add(S.negate());
        }
        is0() {
          return this.equals(H.ZERO);
        }
        wNAF(S) {
          return $.wNAFCached(this, S, H.normalizeZ);
        }
        /**
         * Non-constant-time multiplication. Uses double-and-add algorithm.
         * It's faster, but should only be used when you don't care about
         * an exposed private key e.g. sig verification, which works over *public* keys.
         */
        multiplyUnsafe(S) {
          const { endo: R, n: O } = E;
          r.aInRange("scalar", S, f, O);
          const k = H.ZERO;
          if (S === f)
            return k;
          if (this.is0() || S === c)
            return this;
          if (!R || $.hasPrecomputes(this))
            return $.wNAFCachedUnsafe(this, S, H.normalizeZ);
          let { k1neg: z, k1: L, k2neg: U, k2: G } = R.splitScalar(S), V = k, K = k, ee = this;
          for (; L > f || G > f; )
            L & c && (V = V.add(ee)), G & c && (K = K.add(ee)), ee = ee.double(), L >>= c, G >>= c;
          return z && (V = V.negate()), U && (K = K.negate()), K = new H(l.mul(K.px, R.beta), K.py, K.pz), V.add(K);
        }
        /**
         * Constant time multiplication.
         * Uses wNAF method. Windowed method may be 10% faster,
         * but takes 2x longer to generate and consumes 2x memory.
         * Uses precomputes when available.
         * Uses endomorphism for Koblitz curves.
         * @param scalar by which the point would be multiplied
         * @returns New point
         */
        multiply(S) {
          const { endo: R, n: O } = E;
          r.aInRange("scalar", S, c, O);
          let k, z;
          if (R) {
            const { k1neg: L, k1: U, k2neg: G, k2: V } = R.splitScalar(S);
            let { p: K, f: ee } = this.wNAF(U), { p: X, f: te } = this.wNAF(V);
            K = $.constTimeNegate(L, K), X = $.constTimeNegate(G, X), X = new H(l.mul(X.px, R.beta), X.py, X.pz), k = K.add(X), z = ee.add(te);
          } else {
            const { p: L, f: U } = this.wNAF(S);
            k = L, z = U;
          }
          return H.normalizeZ([k, z])[0];
        }
        /**
         * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
         * Not using Strauss-Shamir trick: precomputation tables are faster.
         * The trick could be useful if both P and Q are not G (not in our case).
         * @returns non-zero affine point
         */
        multiplyAndAddUnsafe(S, R, O) {
          const k = H.BASE, z = (U, G) => G === f || G === c || !U.equals(k) ? U.multiplyUnsafe(G) : U.multiply(G), L = z(this, R).add(z(S, O));
          return L.is0() ? void 0 : L;
        }
        // Converts Projective point to affine (x, y) coordinates.
        // Can accept precomputed Z^-1 - for example, from invertBatch.
        // (x, y, z) ∋ (x=x/z, y=y/z)
        toAffine(S) {
          return A(this, S);
        }
        isTorsionFree() {
          const { h: S, isTorsionFree: R } = E;
          if (S === c)
            return !0;
          if (R)
            return R(H, this);
          throw new Error("isTorsionFree() has not been declared for the elliptic curve");
        }
        clearCofactor() {
          const { h: S, clearCofactor: R } = E;
          return S === c ? this : R ? R(H, this) : this.multiplyUnsafe(E.h);
        }
        toRawBytes(S = !0) {
          return (0, o.abool)("isCompressed", S), this.assertValidity(), T(H, this, S);
        }
        toHex(S = !0) {
          return (0, o.abool)("isCompressed", S), r.bytesToHex(this.toRawBytes(S));
        }
      }
      H.BASE = new H(E.Gx, E.Gy, l.ONE), H.ZERO = new H(l.ZERO, l.ONE, l.ZERO);
      const F = E.nBitLength, $ = (0, t.wNAF)(H, E.endo ? Math.ceil(F / 2) : F);
      return {
        CURVE: E,
        ProjectivePoint: H,
        normPrivateKeyToScalar: B,
        weierstrassEquation: I,
        isWithinCurveOrder: C
      };
    }
    function h(v) {
      const E = (0, t.validateBasic)(v);
      return r.validateObject(E, {
        hash: "hash",
        hmac: "function",
        randomBytes: "function"
      }, {
        bits2int: "function",
        bits2int_modN: "function",
        lowS: "boolean"
      }), Object.freeze({ lowS: !0, ...E });
    }
    function _(v) {
      const E = h(v), { Fp: l, n: p } = E, T = l.BYTES + 1, w = 2 * l.BYTES + 1;
      function I(Z) {
        return (0, n.mod)(Z, p);
      }
      function C(Z) {
        return (0, n.invert)(Z, p);
      }
      const { ProjectivePoint: B, normPrivateKeyToScalar: M, weierstrassEquation: A, isWithinCurveOrder: x } = b({
        ...E,
        toBytes(Z, J, W) {
          const D = J.toAffine(), ne = l.toBytes(D.x), de = r.concatBytes;
          return (0, o.abool)("isCompressed", W), W ? de(Uint8Array.from([J.hasEvenY() ? 2 : 3]), ne) : de(Uint8Array.from([4]), ne, l.toBytes(D.y));
        },
        fromBytes(Z) {
          const J = Z.length, W = Z[0], D = Z.subarray(1);
          if (J === T && (W === 2 || W === 3)) {
            const ne = r.bytesToNumberBE(D);
            if (!r.inRange(ne, c, l.ORDER))
              throw new Error("Point is not on curve");
            const de = A(ne);
            let me;
            try {
              me = l.sqrt(de);
            } catch (ve) {
              const je = ve instanceof Error ? ": " + ve.message : "";
              throw new Error("Point is not on curve" + je);
            }
            const ce = (me & c) === c;
            return (W & 1) === 1 !== ce && (me = l.neg(me)), { x: ne, y: me };
          } else if (J === w && W === 4) {
            const ne = l.fromBytes(D.subarray(0, l.BYTES)), de = l.fromBytes(D.subarray(l.BYTES, 2 * l.BYTES));
            return { x: ne, y: de };
          } else {
            const ne = T, de = w;
            throw new Error("invalid Point, expected length of " + ne + ", or uncompressed " + de + ", got " + J);
          }
        }
      }), H = (Z) => r.bytesToHex(r.numberToBytesBE(Z, E.nByteLength));
      function F(Z) {
        const J = p >> c;
        return Z > J;
      }
      function $(Z) {
        return F(Z) ? I(-Z) : Z;
      }
      const q = (Z, J, W) => r.bytesToNumberBE(Z.slice(J, W));
      class S {
        constructor(J, W, D) {
          this.r = J, this.s = W, this.recovery = D, this.assertValidity();
        }
        // pair (bytes of r, bytes of s)
        static fromCompact(J) {
          const W = E.nByteLength;
          return J = (0, o.ensureBytes)("compactSignature", J, W * 2), new S(q(J, 0, W), q(J, W, 2 * W));
        }
        // DER encoded ECDSA signature
        // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
        static fromDER(J) {
          const { r: W, s: D } = e.DER.toSig((0, o.ensureBytes)("DER", J));
          return new S(W, D);
        }
        assertValidity() {
          r.aInRange("r", this.r, c, p), r.aInRange("s", this.s, c, p);
        }
        addRecoveryBit(J) {
          return new S(this.r, this.s, J);
        }
        recoverPublicKey(J) {
          const { r: W, s: D, recovery: ne } = this, de = U((0, o.ensureBytes)("msgHash", J));
          if (ne == null || ![0, 1, 2, 3].includes(ne))
            throw new Error("recovery id invalid");
          const me = ne === 2 || ne === 3 ? W + E.n : W;
          if (me >= l.ORDER)
            throw new Error("recovery id 2 or 3 invalid");
          const ce = ne & 1 ? "03" : "02", Ee = B.fromHex(ce + H(me)), ve = C(me), je = I(-de * ve), we = I(D * ve), Ae = B.BASE.multiplyAndAddUnsafe(Ee, je, we);
          if (!Ae)
            throw new Error("point at infinify");
          return Ae.assertValidity(), Ae;
        }
        // Signatures should be low-s, to prevent malleability.
        hasHighS() {
          return F(this.s);
        }
        normalizeS() {
          return this.hasHighS() ? new S(this.r, I(-this.s), this.recovery) : this;
        }
        // DER-encoded
        toDERRawBytes() {
          return r.hexToBytes(this.toDERHex());
        }
        toDERHex() {
          return e.DER.hexFromSig({ r: this.r, s: this.s });
        }
        // padded bytes of r, then padded bytes of s
        toCompactRawBytes() {
          return r.hexToBytes(this.toCompactHex());
        }
        toCompactHex() {
          return H(this.r) + H(this.s);
        }
      }
      const R = {
        isValidPrivateKey(Z) {
          try {
            return M(Z), !0;
          } catch {
            return !1;
          }
        },
        normPrivateKeyToScalar: M,
        /**
         * Produces cryptographically secure private key from random of size
         * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
         */
        randomPrivateKey: () => {
          const Z = (0, n.getMinHashLength)(E.n);
          return (0, n.mapHashToField)(E.randomBytes(Z), E.n);
        },
        /**
         * Creates precompute table for an arbitrary EC point. Makes point "cached".
         * Allows to massively speed-up `point.multiply(scalar)`.
         * @returns cached point
         * @example
         * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
         * fast.multiply(privKey); // much faster ECDH now
         */
        precompute(Z = 8, J = B.BASE) {
          return J._setWindowSize(Z), J.multiply(BigInt(3)), J;
        }
      };
      function O(Z, J = !0) {
        return B.fromPrivateKey(Z).toRawBytes(J);
      }
      function k(Z) {
        const J = r.isBytes(Z), W = typeof Z == "string", D = (J || W) && Z.length;
        return J ? D === T || D === w : W ? D === 2 * T || D === 2 * w : Z instanceof B;
      }
      function z(Z, J, W = !0) {
        if (k(Z))
          throw new Error("first arg must be private key");
        if (!k(J))
          throw new Error("second arg must be public key");
        return B.fromHex(J).multiply(M(Z)).toRawBytes(W);
      }
      const L = E.bits2int || function(Z) {
        if (Z.length > 8192)
          throw new Error("input is too large");
        const J = r.bytesToNumberBE(Z), W = Z.length * 8 - E.nBitLength;
        return W > 0 ? J >> BigInt(W) : J;
      }, U = E.bits2int_modN || function(Z) {
        return I(L(Z));
      }, G = r.bitMask(E.nBitLength);
      function V(Z) {
        return r.aInRange("num < 2^" + E.nBitLength, Z, f, G), r.numberToBytesBE(Z, E.nByteLength);
      }
      function K(Z, J, W = ee) {
        if (["recovered", "canonical"].some((Le) => Le in W))
          throw new Error("sign() legacy options not supported");
        const { hash: D, randomBytes: ne } = E;
        let { lowS: de, prehash: me, extraEntropy: ce } = W;
        de == null && (de = !0), Z = (0, o.ensureBytes)("msgHash", Z), a(W), me && (Z = (0, o.ensureBytes)("prehashed msgHash", D(Z)));
        const Ee = U(Z), ve = M(J), je = [V(ve), V(Ee)];
        if (ce != null && ce !== !1) {
          const Le = ce === !0 ? ne(l.BYTES) : ce;
          je.push((0, o.ensureBytes)("extraEntropy", Le));
        }
        const we = r.concatBytes(...je), Ae = Ee;
        function Ce(Le) {
          const xe = L(Le);
          if (!x(xe))
            return;
          const It = C(xe), rt = B.BASE.multiply(xe).toAffine(), Fe = I(rt.x);
          if (Fe === f)
            return;
          const nt = I(It * I(Ae + Fe * ve));
          if (nt === f)
            return;
          let et = (rt.x === Fe ? 0 : 2) | Number(rt.y & c), Ge = nt;
          return de && F(nt) && (Ge = $(nt), et ^= 1), new S(Fe, Ge, et);
        }
        return { seed: we, k2sig: Ce };
      }
      const ee = { lowS: E.lowS, prehash: !1 }, X = { lowS: E.lowS, prehash: !1 };
      function te(Z, J, W = ee) {
        const { seed: D, k2sig: ne } = K(Z, J, W), de = E;
        return r.createHmacDrbg(de.hash.outputLen, de.nByteLength, de.hmac)(D, ne);
      }
      B.BASE._setWindowSize(8);
      function se(Z, J, W, D = X) {
        var et;
        const ne = Z;
        J = (0, o.ensureBytes)("msgHash", J), W = (0, o.ensureBytes)("publicKey", W);
        const { lowS: de, prehash: me, format: ce } = D;
        if (a(D), "strict" in D)
          throw new Error("options.strict was renamed to lowS");
        if (ce !== void 0 && ce !== "compact" && ce !== "der")
          throw new Error("format must be compact or der");
        const Ee = typeof ne == "string" || r.isBytes(ne), ve = !Ee && !ce && typeof ne == "object" && ne !== null && typeof ne.r == "bigint" && typeof ne.s == "bigint";
        if (!Ee && !ve)
          throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
        let je, we;
        try {
          if (ve && (je = new S(ne.r, ne.s)), Ee) {
            try {
              ce !== "compact" && (je = S.fromDER(ne));
            } catch (Ge) {
              if (!(Ge instanceof e.DER.Err))
                throw Ge;
            }
            !je && ce !== "der" && (je = S.fromCompact(ne));
          }
          we = B.fromHex(W);
        } catch {
          return !1;
        }
        if (!je || de && je.hasHighS())
          return !1;
        me && (J = E.hash(J));
        const { r: Ae, s: Ce } = je, Le = U(J), xe = C(Ce), It = I(Le * xe), rt = I(Ae * xe), Fe = (et = B.BASE.multiplyAndAddUnsafe(we, It, rt)) == null ? void 0 : et.toAffine();
        return Fe ? I(Fe.x) === Ae : !1;
      }
      return {
        CURVE: E,
        getPublicKey: O,
        getSharedSecret: z,
        sign: te,
        verify: se,
        ProjectivePoint: B,
        Signature: S,
        utils: R
      };
    }
    function P(v, E) {
      const l = v.ORDER;
      let p = f;
      for (let $ = l - c; $ % m === f; $ /= m)
        p += c;
      const T = p, w = m << T - c - c, I = w * m, C = (l - c) / I, B = (C - c) / m, M = I - c, A = w, x = v.pow(E, C), H = v.pow(E, (C + c) / m);
      let F = ($, q) => {
        let S = x, R = v.pow(q, M), O = v.sqr(R);
        O = v.mul(O, q);
        let k = v.mul($, O);
        k = v.pow(k, B), k = v.mul(k, R), R = v.mul(k, q), O = v.mul(k, $);
        let z = v.mul(O, R);
        k = v.pow(z, A);
        let L = v.eql(k, v.ONE);
        R = v.mul(O, H), k = v.mul(z, S), O = v.cmov(R, O, L), z = v.cmov(k, z, L);
        for (let U = T; U > c; U--) {
          let G = U - m;
          G = m << G - c;
          let V = v.pow(z, G);
          const K = v.eql(V, v.ONE);
          R = v.mul(O, S), S = v.mul(S, S), V = v.mul(z, S), O = v.cmov(R, O, K), z = v.cmov(V, z, K);
        }
        return { isValid: L, value: O };
      };
      if (v.ORDER % g === y) {
        const $ = (v.ORDER - y) / g, q = v.sqrt(v.neg(E));
        F = (S, R) => {
          let O = v.sqr(R);
          const k = v.mul(S, R);
          O = v.mul(O, k);
          let z = v.pow(O, $);
          z = v.mul(z, k);
          const L = v.mul(z, q), U = v.mul(v.sqr(z), R), G = v.eql(U, S);
          let V = v.cmov(L, z, G);
          return { isValid: G, value: V };
        };
      }
      return F;
    }
    function j(v, E) {
      if ((0, n.validateField)(v), !v.isValid(E.A) || !v.isValid(E.B) || !v.isValid(E.Z))
        throw new Error("mapToCurveSimpleSWU: invalid opts");
      const l = P(v, E.Z);
      if (!v.isOdd)
        throw new Error("Fp.isOdd is not implemented!");
      return (p) => {
        let T, w, I, C, B, M, A, x;
        T = v.sqr(p), T = v.mul(T, E.Z), w = v.sqr(T), w = v.add(w, T), I = v.add(w, v.ONE), I = v.mul(I, E.B), C = v.cmov(E.Z, v.neg(w), !v.eql(w, v.ZERO)), C = v.mul(C, E.A), w = v.sqr(I), M = v.sqr(C), B = v.mul(M, E.A), w = v.add(w, B), w = v.mul(w, I), M = v.mul(M, C), B = v.mul(M, E.B), w = v.add(w, B), A = v.mul(T, I);
        const { isValid: H, value: F } = l(w, M);
        x = v.mul(T, p), x = v.mul(x, F), A = v.cmov(A, I, H), x = v.cmov(x, F, H);
        const $ = v.isOdd(p) === v.isOdd(x);
        return x = v.cmov(v.neg(x), x, $), A = v.div(A, C), { x: A, y: x };
      };
    }
  }(pc)), pc;
}
var Sl;
function f1() {
  if (Sl) return mn;
  Sl = 1, Object.defineProperty(mn, "__esModule", { value: !0 }), mn.getHash = r, mn.createCurve = o;
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  const e = /* @__PURE__ */ c1(), t = /* @__PURE__ */ Or(), n = /* @__PURE__ */ Nh();
  function r(a) {
    return {
      hash: a,
      hmac: (i, ...s) => (0, e.hmac)(a, i, (0, t.concatBytes)(...s)),
      randomBytes: t.randomBytes
    };
  }
  function o(a, i) {
    const s = (u) => (0, n.weierstrass)({ ...a, ...r(u) });
    return { ...s(i), create: s };
  }
  return mn;
}
var qt = {}, Il;
function l1() {
  if (Il) return qt;
  Il = 1, Object.defineProperty(qt, "__esModule", { value: !0 }), qt.expand_message_xmd = i, qt.expand_message_xof = s, qt.hash_to_field = u, qt.isogenyMap = d, qt.createHasher = f;
  const e = /* @__PURE__ */ wu(), t = /* @__PURE__ */ Ft(), n = t.bytesToNumberBE;
  function r(c, m) {
    if (a(c), a(m), c < 0 || c >= 1 << 8 * m)
      throw new Error("invalid I2OSP input: " + c);
    const y = Array.from({ length: m }).fill(0);
    for (let g = m - 1; g >= 0; g--)
      y[g] = c & 255, c >>>= 8;
    return new Uint8Array(y);
  }
  function o(c, m) {
    const y = new Uint8Array(c.length);
    for (let g = 0; g < c.length; g++)
      y[g] = c[g] ^ m[g];
    return y;
  }
  function a(c) {
    if (!Number.isSafeInteger(c))
      throw new Error("number expected");
  }
  function i(c, m, y, g) {
    (0, t.abytes)(c), (0, t.abytes)(m), a(y), m.length > 255 && (m = g((0, t.concatBytes)((0, t.utf8ToBytes)("H2C-OVERSIZE-DST-"), m)));
    const { outputLen: b, blockLen: h } = g, _ = Math.ceil(y / b);
    if (y > 65535 || _ > 255)
      throw new Error("expand_message_xmd: invalid lenInBytes");
    const P = (0, t.concatBytes)(m, r(m.length, 1)), j = r(0, h), v = r(y, 2), E = new Array(_), l = g((0, t.concatBytes)(j, c, v, r(0, 1), P));
    E[0] = g((0, t.concatBytes)(l, r(1, 1), P));
    for (let T = 1; T <= _; T++) {
      const w = [o(l, E[T - 1]), r(T + 1, 1), P];
      E[T] = g((0, t.concatBytes)(...w));
    }
    return (0, t.concatBytes)(...E).slice(0, y);
  }
  function s(c, m, y, g, b) {
    if ((0, t.abytes)(c), (0, t.abytes)(m), a(y), m.length > 255) {
      const h = Math.ceil(2 * g / 8);
      m = b.create({ dkLen: h }).update((0, t.utf8ToBytes)("H2C-OVERSIZE-DST-")).update(m).digest();
    }
    if (y > 65535 || m.length > 255)
      throw new Error("expand_message_xof: invalid lenInBytes");
    return b.create({ dkLen: y }).update(c).update(r(y, 2)).update(m).update(r(m.length, 1)).digest();
  }
  function u(c, m, y) {
    (0, t.validateObject)(y, {
      DST: "stringOrUint8Array",
      p: "bigint",
      m: "isSafeInteger",
      k: "isSafeInteger",
      hash: "hash"
    });
    const { p: g, k: b, m: h, hash: _, expand: P, DST: j } = y;
    (0, t.abytes)(c), a(m);
    const v = typeof j == "string" ? (0, t.utf8ToBytes)(j) : j, E = g.toString(2).length, l = Math.ceil((E + b) / 8), p = m * h * l;
    let T;
    if (P === "xmd")
      T = i(c, v, p, _);
    else if (P === "xof")
      T = s(c, v, p, b, _);
    else if (P === "_internal_pass")
      T = c;
    else
      throw new Error('expand must be "xmd" or "xof"');
    const w = new Array(m);
    for (let I = 0; I < m; I++) {
      const C = new Array(h);
      for (let B = 0; B < h; B++) {
        const M = l * (B + I * h), A = T.subarray(M, M + l);
        C[B] = (0, e.mod)(n(A), g);
      }
      w[I] = C;
    }
    return w;
  }
  function d(c, m) {
    const y = m.map((g) => Array.from(g).reverse());
    return (g, b) => {
      const [h, _, P, j] = y.map((v) => v.reduce((E, l) => c.add(c.mul(E, g), l)));
      return g = c.div(h, _), b = c.mul(b, c.div(P, j)), { x: g, y: b };
    };
  }
  function f(c, m, y) {
    if (typeof m != "function")
      throw new Error("mapToCurve() must be defined");
    return {
      // Encodes byte string to elliptic curve.
      // hash_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
      hashToCurve(g, b) {
        const h = u(g, 2, { ...y, DST: y.DST, ...b }), _ = c.fromAffine(m(h[0])), P = c.fromAffine(m(h[1])), j = _.add(P).clearCofactor();
        return j.assertValidity(), j;
      },
      // Encodes byte string to elliptic curve.
      // encode_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
      encodeToCurve(g, b) {
        const h = u(g, 1, { ...y, DST: y.encodeDST, ...b }), _ = c.fromAffine(m(h[0])).clearCofactor();
        return _.assertValidity(), _;
      },
      // Same as encodeToCurve, but without hash
      mapToCurve(g) {
        if (!Array.isArray(g))
          throw new Error("mapToCurve: expected array of bigints");
        for (const h of g)
          if (typeof h != "bigint")
            throw new Error("mapToCurve: expected array of bigints");
        const b = c.fromAffine(m(g)).clearCofactor();
        return b.assertValidity(), b;
      }
    };
  }
  return qt;
}
var Rl;
function Un() {
  return Rl || (Rl = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.encodeToCurve = e.hashToCurve = e.schnorr = e.secp256k1 = void 0;
    /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    const t = /* @__PURE__ */ $h(), n = /* @__PURE__ */ Or(), r = /* @__PURE__ */ f1(), o = /* @__PURE__ */ l1(), a = /* @__PURE__ */ wu(), i = /* @__PURE__ */ Ft(), s = /* @__PURE__ */ Nh(), u = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), d = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), f = BigInt(1), c = BigInt(2), m = ($, q) => ($ + q / c) / q;
    function y($) {
      const q = u, S = BigInt(3), R = BigInt(6), O = BigInt(11), k = BigInt(22), z = BigInt(23), L = BigInt(44), U = BigInt(88), G = $ * $ * $ % q, V = G * G * $ % q, K = (0, a.pow2)(V, S, q) * V % q, ee = (0, a.pow2)(K, S, q) * V % q, X = (0, a.pow2)(ee, c, q) * G % q, te = (0, a.pow2)(X, O, q) * X % q, se = (0, a.pow2)(te, k, q) * te % q, Z = (0, a.pow2)(se, L, q) * se % q, J = (0, a.pow2)(Z, U, q) * Z % q, W = (0, a.pow2)(J, L, q) * se % q, D = (0, a.pow2)(W, S, q) * V % q, ne = (0, a.pow2)(D, z, q) * te % q, de = (0, a.pow2)(ne, R, q) * G % q, me = (0, a.pow2)(de, c, q);
      if (!g.eql(g.sqr(me), $))
        throw new Error("Cannot find square root");
      return me;
    }
    const g = (0, a.Field)(u, void 0, void 0, { sqrt: y });
    e.secp256k1 = (0, r.createCurve)({
      a: BigInt(0),
      // equation params: a, b
      b: BigInt(7),
      Fp: g,
      // Field's prime: 2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n
      n: d,
      // Curve order, total count of valid points in the field
      // Base point (x, y) aka generator point
      Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
      Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
      h: BigInt(1),
      // Cofactor
      lowS: !0,
      // Allow only low-S signatures by default in sign() and verify()
      endo: {
        // Endomorphism, see above
        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
        splitScalar: ($) => {
          const q = d, S = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), R = -f * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), O = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), k = S, z = BigInt("0x100000000000000000000000000000000"), L = m(k * $, q), U = m(-R * $, q);
          let G = (0, a.mod)($ - L * S - U * O, q), V = (0, a.mod)(-L * R - U * k, q);
          const K = G > z, ee = V > z;
          if (K && (G = q - G), ee && (V = q - V), G > z || V > z)
            throw new Error("splitScalar: Endomorphism failed, k=" + $);
          return { k1neg: K, k1: G, k2neg: ee, k2: V };
        }
      }
    }, t.sha256);
    const b = BigInt(0), h = {};
    function _($, ...q) {
      let S = h[$];
      if (S === void 0) {
        const R = (0, t.sha256)(Uint8Array.from($, (O) => O.charCodeAt(0)));
        S = (0, i.concatBytes)(R, R), h[$] = S;
      }
      return (0, t.sha256)((0, i.concatBytes)(S, ...q));
    }
    const P = ($) => $.toRawBytes(!0).slice(1), j = ($) => (0, i.numberToBytesBE)($, 32), v = ($) => (0, a.mod)($, u), E = ($) => (0, a.mod)($, d), l = e.secp256k1.ProjectivePoint, p = ($, q, S) => l.BASE.multiplyAndAddUnsafe($, q, S);
    function T($) {
      let q = e.secp256k1.utils.normPrivateKeyToScalar($), S = l.fromPrivateKey(q);
      return { scalar: S.hasEvenY() ? q : E(-q), bytes: P(S) };
    }
    function w($) {
      (0, i.aInRange)("x", $, f, u);
      const q = v($ * $), S = v(q * $ + BigInt(7));
      let R = y(S);
      R % c !== b && (R = v(-R));
      const O = new l($, R, f);
      return O.assertValidity(), O;
    }
    const I = i.bytesToNumberBE;
    function C(...$) {
      return E(I(_("BIP0340/challenge", ...$)));
    }
    function B($) {
      return T($).bytes;
    }
    function M($, q, S = (0, n.randomBytes)(32)) {
      const R = (0, i.ensureBytes)("message", $), { bytes: O, scalar: k } = T(q), z = (0, i.ensureBytes)("auxRand", S, 32), L = j(k ^ I(_("BIP0340/aux", z))), U = _("BIP0340/nonce", L, O, R), G = E(I(U));
      if (G === b)
        throw new Error("sign failed: k is zero");
      const { bytes: V, scalar: K } = T(G), ee = C(V, O, R), X = new Uint8Array(64);
      if (X.set(V, 0), X.set(j(E(K + ee * k)), 32), !A(X, R, O))
        throw new Error("sign: Invalid signature produced");
      return X;
    }
    function A($, q, S) {
      const R = (0, i.ensureBytes)("signature", $, 64), O = (0, i.ensureBytes)("message", q), k = (0, i.ensureBytes)("publicKey", S, 32);
      try {
        const z = w(I(k)), L = I(R.subarray(0, 32));
        if (!(0, i.inRange)(L, f, u))
          return !1;
        const U = I(R.subarray(32, 64));
        if (!(0, i.inRange)(U, f, d))
          return !1;
        const G = C(j(L), P(z), O), V = p(z, U, E(-G));
        return !(!V || !V.hasEvenY() || V.toAffine().x !== L);
      } catch {
        return !1;
      }
    }
    e.schnorr = {
      getPublicKey: B,
      sign: M,
      verify: A,
      utils: {
        randomPrivateKey: e.secp256k1.utils.randomPrivateKey,
        lift_x: w,
        pointToBytes: P,
        numberToBytesBE: i.numberToBytesBE,
        bytesToNumberBE: i.bytesToNumberBE,
        taggedHash: _,
        mod: a.mod
      }
    };
    const x = (0, o.isogenyMap)(g, [
      // xNum
      [
        "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
        "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
        "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
        "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"
      ],
      // xDen
      [
        "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
        "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
        "0x0000000000000000000000000000000000000000000000000000000000000001"
        // LAST 1
      ],
      // yNum
      [
        "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
        "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
        "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
        "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"
      ],
      // yDen
      [
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
        "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
        "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
        "0x0000000000000000000000000000000000000000000000000000000000000001"
        // LAST 1
      ]
    ].map(($) => $.map((q) => BigInt(q)))), H = (0, s.mapToCurveSimpleSWU)(g, {
      A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
      B: BigInt("1771"),
      Z: g.create(BigInt("-11"))
    }), F = (0, o.createHasher)(e.secp256k1.ProjectivePoint, ($) => {
      const { x: q, y: S } = H(g.create($[0]));
      return x(q, S);
    }, {
      DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
      encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
      p: g.ORDER,
      m: 1,
      k: 128,
      expand: "xmd",
      hash: t.sha256
    });
    e.hashToCurve = F.hashToCurve, e.encodeToCurve = F.encodeToCurve;
  }(yc)), yc;
}
var Ol;
function Uc() {
  if (Ol) return Jo;
  Ol = 1, Object.defineProperty(Jo, "__esModule", { value: !0 }), Jo.recoverPublicKey = r;
  const e = Oe(), t = Pe(), n = Y();
  async function r({ hash: a, signature: i }) {
    const s = (0, e.isHex)(a) ? a : (0, n.toHex)(a), { secp256k1: u } = await Promise.resolve().then(() => /* @__PURE__ */ Un());
    return `0x${(() => {
      if (typeof i == "object" && "r" in i && "s" in i) {
        const { r: g, s: b, v: h, yParity: _ } = i, P = Number(_ ?? h), j = o(P);
        return new u.Signature((0, t.hexToBigInt)(g), (0, t.hexToBigInt)(b)).addRecoveryBit(j);
      }
      const c = (0, e.isHex)(i) ? i : (0, n.toHex)(i), m = (0, t.hexToNumber)(`0x${c.slice(130)}`), y = o(m);
      return u.Signature.fromCompact(c.substring(2, 130)).addRecoveryBit(y);
    })().recoverPublicKey(s.substring(2)).toHex(!1)}`;
  }
  function o(a) {
    if (a === 0 || a === 1)
      return a;
    if (a === 27)
      return 0;
    if (a === 28)
      return 1;
    throw new Error("Invalid yParityOrV value");
  }
  return Jo;
}
var Bl;
function Dt() {
  if (Bl) return Ko;
  Bl = 1, Object.defineProperty(Ko, "__esModule", { value: !0 }), Ko.recoverAddress = n;
  const e = kh(), t = Uc();
  async function n({ hash: r, signature: o }) {
    return (0, e.publicKeyToAddress)(await (0, t.recoverPublicKey)({ hash: r, signature: o }));
  }
  return Ko;
}
var Yo = {}, jr = {}, Cl;
function Gn() {
  if (Cl) return jr;
  Cl = 1, Object.defineProperty(jr, "__esModule", { value: !0 }), jr.toRlp = o, jr.bytesToRlp = a, jr.hexToRlp = i;
  const e = ie(), t = zn(), n = be(), r = Y();
  function o(c, m = "hex") {
    const y = s(c), g = (0, t.createCursor)(new Uint8Array(y.length));
    return y.encode(g), m === "hex" ? (0, r.bytesToHex)(g.bytes) : g.bytes;
  }
  function a(c, m = "bytes") {
    return o(c, m);
  }
  function i(c, m = "hex") {
    return o(c, m);
  }
  function s(c) {
    return Array.isArray(c) ? u(c.map((m) => s(m))) : d(c);
  }
  function u(c) {
    const m = c.reduce((b, h) => b + h.length, 0), y = f(m);
    return {
      length: m <= 55 ? 1 + m : 1 + y + m,
      encode(b) {
        m <= 55 ? b.pushByte(192 + m) : (b.pushByte(247 + y), y === 1 ? b.pushUint8(m) : y === 2 ? b.pushUint16(m) : y === 3 ? b.pushUint24(m) : b.pushUint32(m));
        for (const { encode: h } of c)
          h(b);
      }
    };
  }
  function d(c) {
    const m = typeof c == "string" ? (0, n.hexToBytes)(c) : c, y = f(m.length);
    return {
      length: m.length === 1 && m[0] < 128 ? 1 : m.length <= 55 ? 1 + m.length : 1 + y + m.length,
      encode(b) {
        m.length === 1 && m[0] < 128 ? b.pushBytes(m) : m.length <= 55 ? (b.pushByte(128 + m.length), b.pushBytes(m)) : (b.pushByte(183 + y), y === 1 ? b.pushUint8(m.length) : y === 2 ? b.pushUint16(m.length) : y === 3 ? b.pushUint24(m.length) : b.pushUint32(m.length), b.pushBytes(m));
      }
    };
  }
  function f(c) {
    if (c < 2 ** 8)
      return 1;
    if (c < 2 ** 16)
      return 2;
    if (c < 2 ** 24)
      return 3;
    if (c < 2 ** 32)
      return 4;
    throw new e.BaseError("Length is too large.");
  }
  return jr;
}
var ql;
function m1() {
  if (ql) return Yo;
  ql = 1, Object.defineProperty(Yo, "__esModule", { value: !0 }), Yo.hashAuthorization = a;
  const e = Be(), t = be(), n = Y(), r = Gn(), o = Me();
  function a(i) {
    const { chainId: s, contractAddress: u, nonce: d, to: f } = i, c = (0, o.keccak256)((0, e.concatHex)([
      "0x05",
      (0, r.toRlp)([
        s ? (0, n.numberToHex)(s) : "0x",
        u,
        d ? (0, n.numberToHex)(d) : "0x"
      ])
    ]));
    return f === "bytes" ? (0, t.hexToBytes)(c) : c;
  }
  return Yo;
}
var Ml;
function zh() {
  if (Ml) return Wo;
  Ml = 1, Object.defineProperty(Wo, "__esModule", { value: !0 }), Wo.recoverAuthorizationAddress = n;
  const e = Dt(), t = m1();
  async function n(r) {
    const { authorization: o, signature: a } = r;
    return (0, e.recoverAddress)({
      hash: (0, t.hashAuthorization)(o),
      signature: a ?? o
    });
  }
  return Wo;
}
var Xo = {}, bn = {}, xl;
function Dh() {
  if (xl) return bn;
  xl = 1, Object.defineProperty(bn, "__esModule", { value: !0 }), bn.EstimateGasExecutionError = void 0;
  const e = Ln(), t = fr(), n = ie(), r = De();
  class o extends n.BaseError {
    constructor(i, { account: s, docsPath: u, chain: d, data: f, gas: c, gasPrice: m, maxFeePerGas: y, maxPriorityFeePerGas: g, nonce: b, to: h, value: _ }) {
      var j;
      const P = (0, r.prettyPrint)({
        from: s == null ? void 0 : s.address,
        to: h,
        value: typeof _ < "u" && `${(0, e.formatEther)(_)} ${((j = d == null ? void 0 : d.nativeCurrency) == null ? void 0 : j.symbol) || "ETH"}`,
        data: f,
        gas: c,
        gasPrice: typeof m < "u" && `${(0, t.formatGwei)(m)} gwei`,
        maxFeePerGas: typeof y < "u" && `${(0, t.formatGwei)(y)} gwei`,
        maxPriorityFeePerGas: typeof g < "u" && `${(0, t.formatGwei)(g)} gwei`,
        nonce: b
      });
      super(i.shortMessage, {
        cause: i,
        docsPath: u,
        metaMessages: [
          ...i.metaMessages ? [...i.metaMessages, " "] : [],
          "Estimate Gas Arguments:",
          P
        ].filter(Boolean),
        name: "EstimateGasExecutionError"
      }), Object.defineProperty(this, "cause", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.cause = i;
    }
  }
  return bn.EstimateGasExecutionError = o, bn;
}
var fe = {}, Fl;
function Et() {
  if (Fl) return fe;
  Fl = 1, Object.defineProperty(fe, "__esModule", { value: !0 }), fe.UnknownNodeError = fe.TipAboveFeeCapError = fe.TransactionTypeNotSupportedError = fe.IntrinsicGasTooLowError = fe.IntrinsicGasTooHighError = fe.InsufficientFundsError = fe.NonceMaxValueError = fe.NonceTooLowError = fe.NonceTooHighError = fe.FeeCapTooLowError = fe.FeeCapTooHighError = fe.ExecutionRevertedError = void 0;
  const e = fr(), t = ie();
  class n extends t.BaseError {
    constructor({ cause: b, message: h } = {}) {
      var P;
      const _ = (P = h == null ? void 0 : h.replace("execution reverted: ", "")) == null ? void 0 : P.replace("execution reverted", "");
      super(`Execution reverted ${_ ? `with reason: ${_}` : "for an unknown reason"}.`, {
        cause: b,
        name: "ExecutionRevertedError"
      });
    }
  }
  fe.ExecutionRevertedError = n, Object.defineProperty(n, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 3
  }), Object.defineProperty(n, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /execution reverted/
  });
  class r extends t.BaseError {
    constructor({ cause: b, maxFeePerGas: h } = {}) {
      super(`The fee cap (\`maxFeePerGas\`${h ? ` = ${(0, e.formatGwei)(h)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
        cause: b,
        name: "FeeCapTooHighError"
      });
    }
  }
  fe.FeeCapTooHighError = r, Object.defineProperty(r, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
  });
  class o extends t.BaseError {
    constructor({ cause: b, maxFeePerGas: h } = {}) {
      super(`The fee cap (\`maxFeePerGas\`${h ? ` = ${(0, e.formatGwei)(h)}` : ""} gwei) cannot be lower than the block base fee.`, {
        cause: b,
        name: "FeeCapTooLowError"
      });
    }
  }
  fe.FeeCapTooLowError = o, Object.defineProperty(o, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
  });
  class a extends t.BaseError {
    constructor({ cause: b, nonce: h } = {}) {
      super(`Nonce provided for the transaction ${h ? `(${h}) ` : ""}is higher than the next one expected.`, { cause: b, name: "NonceTooHighError" });
    }
  }
  fe.NonceTooHighError = a, Object.defineProperty(a, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce too high/
  });
  class i extends t.BaseError {
    constructor({ cause: b, nonce: h } = {}) {
      super([
        `Nonce provided for the transaction ${h ? `(${h}) ` : ""}is lower than the current nonce of the account.`,
        "Try increasing the nonce or find the latest nonce with `getTransactionCount`."
      ].join(`
`), { cause: b, name: "NonceTooLowError" });
    }
  }
  fe.NonceTooLowError = i, Object.defineProperty(i, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce too low|transaction already imported|already known/
  });
  class s extends t.BaseError {
    constructor({ cause: b, nonce: h } = {}) {
      super(`Nonce provided for the transaction ${h ? `(${h}) ` : ""}exceeds the maximum allowed nonce.`, { cause: b, name: "NonceMaxValueError" });
    }
  }
  fe.NonceMaxValueError = s, Object.defineProperty(s, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce has max value/
  });
  class u extends t.BaseError {
    constructor({ cause: b } = {}) {
      super([
        "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."
      ].join(`
`), {
        cause: b,
        metaMessages: [
          "This error could arise when the account does not have enough funds to:",
          " - pay for the total gas fee,",
          " - pay for the value to send.",
          " ",
          "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
          " - `gas` is the amount of gas needed for transaction to execute,",
          " - `gas fee` is the gas fee,",
          " - `value` is the amount of ether to send to the recipient."
        ],
        name: "InsufficientFundsError"
      });
    }
  }
  fe.InsufficientFundsError = u, Object.defineProperty(u, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /insufficient funds|exceeds transaction sender account balance/
  });
  class d extends t.BaseError {
    constructor({ cause: b, gas: h } = {}) {
      super(`The amount of gas ${h ? `(${h}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
        cause: b,
        name: "IntrinsicGasTooHighError"
      });
    }
  }
  fe.IntrinsicGasTooHighError = d, Object.defineProperty(d, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /intrinsic gas too high|gas limit reached/
  });
  class f extends t.BaseError {
    constructor({ cause: b, gas: h } = {}) {
      super(`The amount of gas ${h ? `(${h}) ` : ""}provided for the transaction is too low.`, {
        cause: b,
        name: "IntrinsicGasTooLowError"
      });
    }
  }
  fe.IntrinsicGasTooLowError = f, Object.defineProperty(f, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /intrinsic gas too low/
  });
  class c extends t.BaseError {
    constructor({ cause: b }) {
      super("The transaction type is not supported for this chain.", {
        cause: b,
        name: "TransactionTypeNotSupportedError"
      });
    }
  }
  fe.TransactionTypeNotSupportedError = c, Object.defineProperty(c, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /transaction type not valid/
  });
  class m extends t.BaseError {
    constructor({ cause: b, maxPriorityFeePerGas: h, maxFeePerGas: _ } = {}) {
      super([
        `The provided tip (\`maxPriorityFeePerGas\`${h ? ` = ${(0, e.formatGwei)(h)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${_ ? ` = ${(0, e.formatGwei)(_)} gwei` : ""}).`
      ].join(`
`), {
        cause: b,
        name: "TipAboveFeeCapError"
      });
    }
  }
  fe.TipAboveFeeCapError = m, Object.defineProperty(m, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
  });
  class y extends t.BaseError {
    constructor({ cause: b }) {
      super(`An error occurred while executing: ${b == null ? void 0 : b.shortMessage}`, {
        cause: b,
        name: "UnknownNodeError"
      });
    }
  }
  return fe.UnknownNodeError = y, fe;
}
var gn = {}, kl;
function Vn() {
  if (kl) return gn;
  kl = 1, Object.defineProperty(gn, "__esModule", { value: !0 }), gn.containsNodeError = o, gn.getNodeError = a;
  const e = ie(), t = Et(), n = Qe(), r = lr();
  function o(i) {
    return i instanceof r.TransactionRejectedRpcError || i instanceof r.InvalidInputRpcError || i instanceof n.RpcRequestError && i.code === t.ExecutionRevertedError.code;
  }
  function a(i, s) {
    const u = (i.details || "").toLowerCase(), d = i instanceof e.BaseError ? i.walk((f) => (f == null ? void 0 : f.code) === t.ExecutionRevertedError.code) : i;
    return d instanceof e.BaseError ? new t.ExecutionRevertedError({
      cause: i,
      message: d.details
    }) : t.ExecutionRevertedError.nodeMessage.test(u) ? new t.ExecutionRevertedError({
      cause: i,
      message: i.details
    }) : t.FeeCapTooHighError.nodeMessage.test(u) ? new t.FeeCapTooHighError({
      cause: i,
      maxFeePerGas: s == null ? void 0 : s.maxFeePerGas
    }) : t.FeeCapTooLowError.nodeMessage.test(u) ? new t.FeeCapTooLowError({
      cause: i,
      maxFeePerGas: s == null ? void 0 : s.maxFeePerGas
    }) : t.NonceTooHighError.nodeMessage.test(u) ? new t.NonceTooHighError({ cause: i, nonce: s == null ? void 0 : s.nonce }) : t.NonceTooLowError.nodeMessage.test(u) ? new t.NonceTooLowError({ cause: i, nonce: s == null ? void 0 : s.nonce }) : t.NonceMaxValueError.nodeMessage.test(u) ? new t.NonceMaxValueError({ cause: i, nonce: s == null ? void 0 : s.nonce }) : t.InsufficientFundsError.nodeMessage.test(u) ? new t.InsufficientFundsError({ cause: i }) : t.IntrinsicGasTooHighError.nodeMessage.test(u) ? new t.IntrinsicGasTooHighError({ cause: i, gas: s == null ? void 0 : s.gas }) : t.IntrinsicGasTooLowError.nodeMessage.test(u) ? new t.IntrinsicGasTooLowError({ cause: i, gas: s == null ? void 0 : s.gas }) : t.TransactionTypeNotSupportedError.nodeMessage.test(u) ? new t.TransactionTypeNotSupportedError({ cause: i }) : t.TipAboveFeeCapError.nodeMessage.test(u) ? new t.TipAboveFeeCapError({
      cause: i,
      maxFeePerGas: s == null ? void 0 : s.maxFeePerGas,
      maxPriorityFeePerGas: s == null ? void 0 : s.maxPriorityFeePerGas
    }) : new t.UnknownNodeError({
      cause: i
    });
  }
  return gn;
}
var Hl;
function Lh() {
  if (Hl) return Xo;
  Hl = 1, Object.defineProperty(Xo, "__esModule", { value: !0 }), Xo.getEstimateGasError = r;
  const e = Dh(), t = Et(), n = Vn();
  function r(o, { docsPath: a, ...i }) {
    const s = (() => {
      const u = (0, n.getNodeError)(o, i);
      return u instanceof t.UnknownNodeError ? o : u;
    })();
    return new e.EstimateGasExecutionError(s, {
      docsPath: a,
      ...i
    });
  }
  return Xo;
}
var Qo = {}, $l;
function xr() {
  if ($l) return Qo;
  $l = 1, Object.defineProperty(Qo, "__esModule", { value: !0 }), Qo.extract = e;
  function e(t, { format: n }) {
    if (!n)
      return {};
    const r = {};
    function o(i) {
      const s = Object.keys(i);
      for (const u of s)
        u in t && (r[u] = t[u]), i[u] && typeof i[u] == "object" && !Array.isArray(i[u]) && o(i[u]);
    }
    const a = n(t || {});
    return o(a), r;
  }
  return Qo;
}
var _c = {}, ei = {}, Nl;
function Wn() {
  if (Nl) return ei;
  Nl = 1, Object.defineProperty(ei, "__esModule", { value: !0 }), ei.defineFormatter = e;
  function e(t, n) {
    return ({ exclude: r, format: o }) => ({
      exclude: r,
      format: (a) => {
        const i = n(a);
        if (r)
          for (const s of r)
            delete i[s];
        return {
          ...i,
          ...o(a)
        };
      },
      type: t
    });
  }
  return ei;
}
var zl;
function jt() {
  return zl || (zl = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.defineTransactionRequest = e.rpcTransactionType = void 0, e.formatTransactionRequest = r;
    const t = Y(), n = Wn();
    e.rpcTransactionType = {
      legacy: "0x0",
      eip2930: "0x1",
      eip1559: "0x2",
      eip4844: "0x3",
      eip7702: "0x4"
    };
    function r(a) {
      const i = {};
      return typeof a.authorizationList < "u" && (i.authorizationList = o(a.authorizationList)), typeof a.accessList < "u" && (i.accessList = a.accessList), typeof a.blobVersionedHashes < "u" && (i.blobVersionedHashes = a.blobVersionedHashes), typeof a.blobs < "u" && (typeof a.blobs[0] != "string" ? i.blobs = a.blobs.map((s) => (0, t.bytesToHex)(s)) : i.blobs = a.blobs), typeof a.data < "u" && (i.data = a.data), typeof a.from < "u" && (i.from = a.from), typeof a.gas < "u" && (i.gas = (0, t.numberToHex)(a.gas)), typeof a.gasPrice < "u" && (i.gasPrice = (0, t.numberToHex)(a.gasPrice)), typeof a.maxFeePerBlobGas < "u" && (i.maxFeePerBlobGas = (0, t.numberToHex)(a.maxFeePerBlobGas)), typeof a.maxFeePerGas < "u" && (i.maxFeePerGas = (0, t.numberToHex)(a.maxFeePerGas)), typeof a.maxPriorityFeePerGas < "u" && (i.maxPriorityFeePerGas = (0, t.numberToHex)(a.maxPriorityFeePerGas)), typeof a.nonce < "u" && (i.nonce = (0, t.numberToHex)(a.nonce)), typeof a.to < "u" && (i.to = a.to), typeof a.type < "u" && (i.type = e.rpcTransactionType[a.type]), typeof a.value < "u" && (i.value = (0, t.numberToHex)(a.value)), i;
    }
    e.defineTransactionRequest = (0, n.defineFormatter)("transactionRequest", r);
    function o(a) {
      return a.map((i) => ({
        address: i.contractAddress,
        r: i.r,
        s: i.s,
        chainId: (0, t.numberToHex)(i.chainId),
        nonce: (0, t.numberToHex)(i.nonce),
        ...typeof i.yParity < "u" ? { yParity: (0, t.numberToHex)(i.yParity) } : {},
        ...typeof i.v < "u" && typeof i.yParity > "u" ? { v: (0, t.numberToHex)(i.v) } : {}
      }));
    }
  }(_c)), _c;
}
var Pr = {}, Dl;
function Gc() {
  if (Dl) return Pr;
  Dl = 1, Object.defineProperty(Pr, "__esModule", { value: !0 }), Pr.serializeStateMapping = a, Pr.serializeAccountStateOverride = i, Pr.serializeStateOverride = s;
  const e = Ze(), t = pu(), n = Dc(), r = ze(), o = Y();
  function a(u) {
    if (!(!u || u.length === 0))
      return u.reduce((d, { slot: f, value: c }) => {
        if (f.length !== 66)
          throw new t.InvalidBytesLengthError({
            size: f.length,
            targetSize: 66,
            type: "hex"
          });
        if (c.length !== 66)
          throw new t.InvalidBytesLengthError({
            size: c.length,
            targetSize: 66,
            type: "hex"
          });
        return d[f] = c, d;
      }, {});
  }
  function i(u) {
    const { balance: d, nonce: f, state: c, stateDiff: m, code: y } = u, g = {};
    if (y !== void 0 && (g.code = y), d !== void 0 && (g.balance = (0, o.numberToHex)(d)), f !== void 0 && (g.nonce = (0, o.numberToHex)(f)), c !== void 0 && (g.state = a(c)), m !== void 0) {
      if (g.state)
        throw new n.StateAssignmentConflictError();
      g.stateDiff = a(m);
    }
    return g;
  }
  function s(u) {
    if (!u)
      return;
    const d = {};
    for (const { address: f, ...c } of u) {
      if (!(0, r.isAddress)(f, { strict: !1 }))
        throw new e.InvalidAddressError({ address: f });
      if (d[f])
        throw new n.AccountStateConflictError({ address: f });
      d[f] = i(c);
    }
    return d;
  }
  return Pr;
}
var ti = {}, N = {}, Ll;
function Vc() {
  return Ll || (Ll = 1, Object.defineProperty(N, "__esModule", { value: !0 }), N.minInt144 = N.minInt136 = N.minInt128 = N.minInt120 = N.minInt112 = N.minInt104 = N.minInt96 = N.minInt88 = N.minInt80 = N.minInt72 = N.minInt64 = N.minInt56 = N.minInt48 = N.minInt40 = N.minInt32 = N.minInt24 = N.minInt16 = N.minInt8 = N.maxInt256 = N.maxInt248 = N.maxInt240 = N.maxInt232 = N.maxInt224 = N.maxInt216 = N.maxInt208 = N.maxInt200 = N.maxInt192 = N.maxInt184 = N.maxInt176 = N.maxInt168 = N.maxInt160 = N.maxInt152 = N.maxInt144 = N.maxInt136 = N.maxInt128 = N.maxInt120 = N.maxInt112 = N.maxInt104 = N.maxInt96 = N.maxInt88 = N.maxInt80 = N.maxInt72 = N.maxInt64 = N.maxInt56 = N.maxInt48 = N.maxInt40 = N.maxInt32 = N.maxInt24 = N.maxInt16 = N.maxInt8 = void 0, N.maxUint256 = N.maxUint248 = N.maxUint240 = N.maxUint232 = N.maxUint224 = N.maxUint216 = N.maxUint208 = N.maxUint200 = N.maxUint192 = N.maxUint184 = N.maxUint176 = N.maxUint168 = N.maxUint160 = N.maxUint152 = N.maxUint144 = N.maxUint136 = N.maxUint128 = N.maxUint120 = N.maxUint112 = N.maxUint104 = N.maxUint96 = N.maxUint88 = N.maxUint80 = N.maxUint72 = N.maxUint64 = N.maxUint56 = N.maxUint48 = N.maxUint40 = N.maxUint32 = N.maxUint24 = N.maxUint16 = N.maxUint8 = N.minInt256 = N.minInt248 = N.minInt240 = N.minInt232 = N.minInt224 = N.minInt216 = N.minInt208 = N.minInt200 = N.minInt192 = N.minInt184 = N.minInt176 = N.minInt168 = N.minInt160 = N.minInt152 = void 0, N.maxInt8 = 2n ** (8n - 1n) - 1n, N.maxInt16 = 2n ** (16n - 1n) - 1n, N.maxInt24 = 2n ** (24n - 1n) - 1n, N.maxInt32 = 2n ** (32n - 1n) - 1n, N.maxInt40 = 2n ** (40n - 1n) - 1n, N.maxInt48 = 2n ** (48n - 1n) - 1n, N.maxInt56 = 2n ** (56n - 1n) - 1n, N.maxInt64 = 2n ** (64n - 1n) - 1n, N.maxInt72 = 2n ** (72n - 1n) - 1n, N.maxInt80 = 2n ** (80n - 1n) - 1n, N.maxInt88 = 2n ** (88n - 1n) - 1n, N.maxInt96 = 2n ** (96n - 1n) - 1n, N.maxInt104 = 2n ** (104n - 1n) - 1n, N.maxInt112 = 2n ** (112n - 1n) - 1n, N.maxInt120 = 2n ** (120n - 1n) - 1n, N.maxInt128 = 2n ** (128n - 1n) - 1n, N.maxInt136 = 2n ** (136n - 1n) - 1n, N.maxInt144 = 2n ** (144n - 1n) - 1n, N.maxInt152 = 2n ** (152n - 1n) - 1n, N.maxInt160 = 2n ** (160n - 1n) - 1n, N.maxInt168 = 2n ** (168n - 1n) - 1n, N.maxInt176 = 2n ** (176n - 1n) - 1n, N.maxInt184 = 2n ** (184n - 1n) - 1n, N.maxInt192 = 2n ** (192n - 1n) - 1n, N.maxInt200 = 2n ** (200n - 1n) - 1n, N.maxInt208 = 2n ** (208n - 1n) - 1n, N.maxInt216 = 2n ** (216n - 1n) - 1n, N.maxInt224 = 2n ** (224n - 1n) - 1n, N.maxInt232 = 2n ** (232n - 1n) - 1n, N.maxInt240 = 2n ** (240n - 1n) - 1n, N.maxInt248 = 2n ** (248n - 1n) - 1n, N.maxInt256 = 2n ** (256n - 1n) - 1n, N.minInt8 = -(2n ** (8n - 1n)), N.minInt16 = -(2n ** (16n - 1n)), N.minInt24 = -(2n ** (24n - 1n)), N.minInt32 = -(2n ** (32n - 1n)), N.minInt40 = -(2n ** (40n - 1n)), N.minInt48 = -(2n ** (48n - 1n)), N.minInt56 = -(2n ** (56n - 1n)), N.minInt64 = -(2n ** (64n - 1n)), N.minInt72 = -(2n ** (72n - 1n)), N.minInt80 = -(2n ** (80n - 1n)), N.minInt88 = -(2n ** (88n - 1n)), N.minInt96 = -(2n ** (96n - 1n)), N.minInt104 = -(2n ** (104n - 1n)), N.minInt112 = -(2n ** (112n - 1n)), N.minInt120 = -(2n ** (120n - 1n)), N.minInt128 = -(2n ** (128n - 1n)), N.minInt136 = -(2n ** (136n - 1n)), N.minInt144 = -(2n ** (144n - 1n)), N.minInt152 = -(2n ** (152n - 1n)), N.minInt160 = -(2n ** (160n - 1n)), N.minInt168 = -(2n ** (168n - 1n)), N.minInt176 = -(2n ** (176n - 1n)), N.minInt184 = -(2n ** (184n - 1n)), N.minInt192 = -(2n ** (192n - 1n)), N.minInt200 = -(2n ** (200n - 1n)), N.minInt208 = -(2n ** (208n - 1n)), N.minInt216 = -(2n ** (216n - 1n)), N.minInt224 = -(2n ** (224n - 1n)), N.minInt232 = -(2n ** (232n - 1n)), N.minInt240 = -(2n ** (240n - 1n)), N.minInt248 = -(2n ** (248n - 1n)), N.minInt256 = -(2n ** (256n - 1n)), N.maxUint8 = 2n ** 8n - 1n, N.maxUint16 = 2n ** 16n - 1n, N.maxUint24 = 2n ** 24n - 1n, N.maxUint32 = 2n ** 32n - 1n, N.maxUint40 = 2n ** 40n - 1n, N.maxUint48 = 2n ** 48n - 1n, N.maxUint56 = 2n ** 56n - 1n, N.maxUint64 = 2n ** 64n - 1n, N.maxUint72 = 2n ** 72n - 1n, N.maxUint80 = 2n ** 80n - 1n, N.maxUint88 = 2n ** 88n - 1n, N.maxUint96 = 2n ** 96n - 1n, N.maxUint104 = 2n ** 104n - 1n, N.maxUint112 = 2n ** 112n - 1n, N.maxUint120 = 2n ** 120n - 1n, N.maxUint128 = 2n ** 128n - 1n, N.maxUint136 = 2n ** 136n - 1n, N.maxUint144 = 2n ** 144n - 1n, N.maxUint152 = 2n ** 152n - 1n, N.maxUint160 = 2n ** 160n - 1n, N.maxUint168 = 2n ** 168n - 1n, N.maxUint176 = 2n ** 176n - 1n, N.maxUint184 = 2n ** 184n - 1n, N.maxUint192 = 2n ** 192n - 1n, N.maxUint200 = 2n ** 200n - 1n, N.maxUint208 = 2n ** 208n - 1n, N.maxUint216 = 2n ** 216n - 1n, N.maxUint224 = 2n ** 224n - 1n, N.maxUint232 = 2n ** 232n - 1n, N.maxUint240 = 2n ** 240n - 1n, N.maxUint248 = 2n ** 248n - 1n, N.maxUint256 = 2n ** 256n - 1n), N;
}
var Ul;
function Pt() {
  if (Ul) return ti;
  Ul = 1, Object.defineProperty(ti, "__esModule", { value: !0 }), ti.assertRequest = i;
  const e = Se(), t = Vc(), n = Ze(), r = Et(), o = De(), a = ze();
  function i(s) {
    const { account: u, gasPrice: d, maxFeePerGas: f, maxPriorityFeePerGas: c, to: m } = s, y = u ? (0, e.parseAccount)(u) : void 0;
    if (y && !(0, a.isAddress)(y.address))
      throw new n.InvalidAddressError({ address: y.address });
    if (m && !(0, a.isAddress)(m))
      throw new n.InvalidAddressError({ address: m });
    if (typeof d < "u" && (typeof f < "u" || typeof c < "u"))
      throw new o.FeeConflictError();
    if (f && f > t.maxUint256)
      throw new r.FeeCapTooHighError({ maxFeePerGas: f });
    if (c && f && c > f)
      throw new r.TipAboveFeeCapError({ maxFeePerGas: f, maxPriorityFeePerGas: c });
  }
  return ti;
}
var vc = {}, yn = {}, bt = {}, Gl;
function Tu() {
  if (Gl) return bt;
  Gl = 1, Object.defineProperty(bt, "__esModule", { value: !0 }), bt.MaxFeePerGasTooLowError = bt.Eip1559FeesNotSupportedError = bt.BaseFeeScalarError = void 0;
  const e = fr(), t = ie();
  class n extends t.BaseError {
    constructor() {
      super("`baseFeeMultiplier` must be greater than 1.", {
        name: "BaseFeeScalarError"
      });
    }
  }
  bt.BaseFeeScalarError = n;
  class r extends t.BaseError {
    constructor() {
      super("Chain does not support EIP-1559 fees.", {
        name: "Eip1559FeesNotSupportedError"
      });
    }
  }
  bt.Eip1559FeesNotSupportedError = r;
  class o extends t.BaseError {
    constructor({ maxPriorityFeePerGas: i }) {
      super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0, e.formatGwei)(i)} gwei).`, { name: "MaxFeePerGasTooLowError" });
    }
  }
  return bt.MaxFeePerGasTooLowError = o, bt;
}
var hn = {}, ri = {}, pn = {}, Vl;
function Wc() {
  if (Vl) return pn;
  Vl = 1, Object.defineProperty(pn, "__esModule", { value: !0 }), pn.BlockNotFoundError = void 0;
  const e = ie();
  class t extends e.BaseError {
    constructor({ blockHash: r, blockNumber: o }) {
      let a = "Block";
      r && (a = `Block at hash "${r}"`), o && (a = `Block at number "${o}"`), super(`${a} could not be found.`, { name: "BlockNotFoundError" });
    }
  }
  return pn.BlockNotFoundError = t, pn;
}
var wr = {}, Ec = {}, Wl;
function Kn() {
  return Wl || (Wl = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.defineTransaction = e.transactionType = void 0, e.formatTransaction = r;
    const t = Pe(), n = Wn();
    e.transactionType = {
      "0x0": "legacy",
      "0x1": "eip2930",
      "0x2": "eip1559",
      "0x3": "eip4844",
      "0x4": "eip7702"
    };
    function r(a) {
      const i = {
        ...a,
        blockHash: a.blockHash ? a.blockHash : null,
        blockNumber: a.blockNumber ? BigInt(a.blockNumber) : null,
        chainId: a.chainId ? (0, t.hexToNumber)(a.chainId) : void 0,
        gas: a.gas ? BigInt(a.gas) : void 0,
        gasPrice: a.gasPrice ? BigInt(a.gasPrice) : void 0,
        maxFeePerBlobGas: a.maxFeePerBlobGas ? BigInt(a.maxFeePerBlobGas) : void 0,
        maxFeePerGas: a.maxFeePerGas ? BigInt(a.maxFeePerGas) : void 0,
        maxPriorityFeePerGas: a.maxPriorityFeePerGas ? BigInt(a.maxPriorityFeePerGas) : void 0,
        nonce: a.nonce ? (0, t.hexToNumber)(a.nonce) : void 0,
        to: a.to ? a.to : null,
        transactionIndex: a.transactionIndex ? Number(a.transactionIndex) : null,
        type: a.type ? e.transactionType[a.type] : void 0,
        typeHex: a.type ? a.type : void 0,
        value: a.value ? BigInt(a.value) : void 0,
        v: a.v ? BigInt(a.v) : void 0
      };
      return a.authorizationList && (i.authorizationList = o(a.authorizationList)), i.yParity = (() => {
        if (a.yParity)
          return Number(a.yParity);
        if (typeof i.v == "bigint") {
          if (i.v === 0n || i.v === 27n)
            return 0;
          if (i.v === 1n || i.v === 28n)
            return 1;
          if (i.v >= 35n)
            return i.v % 2n === 0n ? 1 : 0;
        }
      })(), i.type === "legacy" && (delete i.accessList, delete i.maxFeePerBlobGas, delete i.maxFeePerGas, delete i.maxPriorityFeePerGas, delete i.yParity), i.type === "eip2930" && (delete i.maxFeePerBlobGas, delete i.maxFeePerGas, delete i.maxPriorityFeePerGas), i.type === "eip1559" && delete i.maxFeePerBlobGas, i;
    }
    e.defineTransaction = (0, n.defineFormatter)("transaction", r);
    function o(a) {
      return a.map((i) => ({
        contractAddress: i.address,
        chainId: Number(i.chainId),
        nonce: Number(i.nonce),
        r: i.r,
        s: i.s,
        yParity: Number(i.yParity)
      }));
    }
  }(Ec)), Ec;
}
var Kl;
function Au() {
  if (Kl) return wr;
  Kl = 1, Object.defineProperty(wr, "__esModule", { value: !0 }), wr.defineBlock = void 0, wr.formatBlock = n;
  const e = Wn(), t = Kn();
  function n(r) {
    const o = (r.transactions ?? []).map((a) => typeof a == "string" ? a : (0, t.formatTransaction)(a));
    return {
      ...r,
      baseFeePerGas: r.baseFeePerGas ? BigInt(r.baseFeePerGas) : null,
      blobGasUsed: r.blobGasUsed ? BigInt(r.blobGasUsed) : void 0,
      difficulty: r.difficulty ? BigInt(r.difficulty) : void 0,
      excessBlobGas: r.excessBlobGas ? BigInt(r.excessBlobGas) : void 0,
      gasLimit: r.gasLimit ? BigInt(r.gasLimit) : void 0,
      gasUsed: r.gasUsed ? BigInt(r.gasUsed) : void 0,
      hash: r.hash ? r.hash : null,
      logsBloom: r.logsBloom ? r.logsBloom : null,
      nonce: r.nonce ? r.nonce : null,
      number: r.number ? BigInt(r.number) : null,
      size: r.size ? BigInt(r.size) : void 0,
      timestamp: r.timestamp ? BigInt(r.timestamp) : void 0,
      transactions: o,
      totalDifficulty: r.totalDifficulty ? BigInt(r.totalDifficulty) : null
    };
  }
  return wr.defineBlock = (0, e.defineFormatter)("block", n), wr;
}
var Zl;
function Fr() {
  if (Zl) return ri;
  Zl = 1, Object.defineProperty(ri, "__esModule", { value: !0 }), ri.getBlock = r;
  const e = Wc(), t = Y(), n = Au();
  async function r(o, { blockHash: a, blockNumber: i, blockTag: s, includeTransactions: u } = {}) {
    var g, b, h;
    const d = s ?? "latest", f = u ?? !1, c = i !== void 0 ? (0, t.numberToHex)(i) : void 0;
    let m = null;
    if (a ? m = await o.request({
      method: "eth_getBlockByHash",
      params: [a, f]
    }, { dedupe: !0 }) : m = await o.request({
      method: "eth_getBlockByNumber",
      params: [c || d, f]
    }, { dedupe: !!c }), !m)
      throw new e.BlockNotFoundError({ blockHash: a, blockNumber: i });
    return (((h = (b = (g = o.chain) == null ? void 0 : g.formatters) == null ? void 0 : b.block) == null ? void 0 : h.format) || n.formatBlock)(m);
  }
  return ri;
}
var ni = {}, Jl;
function Kc() {
  if (Jl) return ni;
  Jl = 1, Object.defineProperty(ni, "__esModule", { value: !0 }), ni.getGasPrice = e;
  async function e(t) {
    const n = await t.request({
      method: "eth_gasPrice"
    });
    return BigInt(n);
  }
  return ni;
}
var Yl;
function Uh() {
  if (Yl) return hn;
  Yl = 1, Object.defineProperty(hn, "__esModule", { value: !0 }), hn.estimateMaxPriorityFeePerGas = a, hn.internal_estimateMaxPriorityFeePerGas = i;
  const e = Tu(), t = Pe(), n = le(), r = Fr(), o = Kc();
  async function a(s, u) {
    return i(s, u);
  }
  async function i(s, u) {
    var m, y;
    const { block: d, chain: f = s.chain, request: c } = u || {};
    try {
      const g = ((m = f == null ? void 0 : f.fees) == null ? void 0 : m.maxPriorityFeePerGas) ?? ((y = f == null ? void 0 : f.fees) == null ? void 0 : y.defaultPriorityFee);
      if (typeof g == "function") {
        const h = d || await (0, n.getAction)(s, r.getBlock, "getBlock")({}), _ = await g({
          block: h,
          client: s,
          request: c
        });
        if (_ === null)
          throw new Error();
        return _;
      }
      if (typeof g < "u")
        return g;
      const b = await s.request({
        method: "eth_maxPriorityFeePerGas"
      });
      return (0, t.hexToBigInt)(b);
    } catch {
      const [g, b] = await Promise.all([
        d ? Promise.resolve(d) : (0, n.getAction)(s, r.getBlock, "getBlock")({}),
        (0, n.getAction)(s, o.getGasPrice, "getGasPrice")({})
      ]);
      if (typeof g.baseFeePerGas != "bigint")
        throw new e.Eip1559FeesNotSupportedError();
      const h = b - g.baseFeePerGas;
      return h < 0n ? 0n : h;
    }
  }
  return hn;
}
var Xl;
function Gh() {
  if (Xl) return yn;
  Xl = 1, Object.defineProperty(yn, "__esModule", { value: !0 }), yn.estimateFeesPerGas = a, yn.internal_estimateFeesPerGas = i;
  const e = Tu(), t = le(), n = Uh(), r = Fr(), o = Kc();
  async function a(s, u) {
    return i(s, u);
  }
  async function i(s, u) {
    var j, v;
    const { block: d, chain: f = s.chain, request: c, type: m = "eip1559" } = u || {}, y = await (async () => {
      var E, l;
      return typeof ((E = f == null ? void 0 : f.fees) == null ? void 0 : E.baseFeeMultiplier) == "function" ? f.fees.baseFeeMultiplier({
        block: d,
        client: s,
        request: c
      }) : ((l = f == null ? void 0 : f.fees) == null ? void 0 : l.baseFeeMultiplier) ?? 1.2;
    })();
    if (y < 1)
      throw new e.BaseFeeScalarError();
    const b = 10 ** (((j = y.toString().split(".")[1]) == null ? void 0 : j.length) ?? 0), h = (E) => E * BigInt(Math.ceil(y * b)) / BigInt(b), _ = d || await (0, t.getAction)(s, r.getBlock, "getBlock")({});
    if (typeof ((v = f == null ? void 0 : f.fees) == null ? void 0 : v.estimateFeesPerGas) == "function") {
      const E = await f.fees.estimateFeesPerGas({
        block: d,
        client: s,
        multiply: h,
        request: c,
        type: m
      });
      if (E !== null)
        return E;
    }
    if (m === "eip1559") {
      if (typeof _.baseFeePerGas != "bigint")
        throw new e.Eip1559FeesNotSupportedError();
      const E = typeof (c == null ? void 0 : c.maxPriorityFeePerGas) == "bigint" ? c.maxPriorityFeePerGas : await (0, n.internal_estimateMaxPriorityFeePerGas)(s, {
        block: _,
        chain: f,
        request: c
      }), l = h(_.baseFeePerGas);
      return {
        maxFeePerGas: (c == null ? void 0 : c.maxFeePerGas) ?? l + E,
        maxPriorityFeePerGas: E
      };
    }
    return {
      gasPrice: (c == null ? void 0 : c.gasPrice) ?? h(await (0, t.getAction)(s, o.getGasPrice, "getGasPrice")({}))
    };
  }
  return yn;
}
var oi = {}, Ql;
function Zc() {
  if (Ql) return oi;
  Ql = 1, Object.defineProperty(oi, "__esModule", { value: !0 }), oi.getTransactionCount = n;
  const e = Pe(), t = Y();
  async function n(r, { address: o, blockTag: a = "latest", blockNumber: i }) {
    const s = await r.request({
      method: "eth_getTransactionCount",
      params: [o, i ? (0, t.numberToHex)(i) : a]
    }, { dedupe: !!i });
    return (0, e.hexToNumber)(s);
  }
  return oi;
}
var ii = {}, em;
function Su() {
  if (em) return ii;
  em = 1, Object.defineProperty(ii, "__esModule", { value: !0 }), ii.blobsToCommitments = n;
  const e = be(), t = Y();
  function n(r) {
    const { kzg: o } = r, a = r.to ?? (typeof r.blobs[0] == "string" ? "hex" : "bytes"), i = typeof r.blobs[0] == "string" ? r.blobs.map((u) => (0, e.hexToBytes)(u)) : r.blobs, s = [];
    for (const u of i)
      s.push(Uint8Array.from(o.blobToKzgCommitment(u)));
    return a === "bytes" ? s : s.map((u) => (0, t.bytesToHex)(u));
  }
  return ii;
}
var ai = {}, tm;
function Iu() {
  if (tm) return ai;
  tm = 1, Object.defineProperty(ai, "__esModule", { value: !0 }), ai.blobsToProofs = n;
  const e = be(), t = Y();
  function n(r) {
    const { kzg: o } = r, a = r.to ?? (typeof r.blobs[0] == "string" ? "hex" : "bytes"), i = typeof r.blobs[0] == "string" ? r.blobs.map((d) => (0, e.hexToBytes)(d)) : r.blobs, s = typeof r.commitments[0] == "string" ? r.commitments.map((d) => (0, e.hexToBytes)(d)) : r.commitments, u = [];
    for (let d = 0; d < i.length; d++) {
      const f = i[d], c = s[d];
      u.push(Uint8Array.from(o.computeBlobKzgProof(f, c)));
    }
    return a === "bytes" ? u : u.map((d) => (0, t.bytesToHex)(d));
  }
  return ai;
}
var si = {}, ui = {}, ci = {}, rm;
function Jc() {
  if (rm) return ci;
  rm = 1, Object.defineProperty(ci, "__esModule", { value: !0 }), ci.sha256 = o;
  const e = /* @__PURE__ */ $h(), t = Oe(), n = be(), r = Y();
  function o(a, i) {
    const s = i || "hex", u = (0, e.sha256)((0, t.isHex)(a, { strict: !1 }) ? (0, n.toBytes)(a) : a);
    return s === "bytes" ? u : (0, r.toHex)(u);
  }
  return ci;
}
var nm;
function Yc() {
  if (nm) return ui;
  nm = 1, Object.defineProperty(ui, "__esModule", { value: !0 }), ui.commitmentToVersionedHash = n;
  const e = Y(), t = Jc();
  function n(r) {
    const { commitment: o, version: a = 1 } = r, i = r.to ?? (typeof o == "string" ? "hex" : "bytes"), s = (0, t.sha256)(o, "bytes");
    return s.set([a], 0), i === "bytes" ? s : (0, e.bytesToHex)(s);
  }
  return ui;
}
var om;
function Xc() {
  if (om) return si;
  om = 1, Object.defineProperty(si, "__esModule", { value: !0 }), si.commitmentsToVersionedHashes = t;
  const e = Yc();
  function t(n) {
    const { commitments: r, version: o } = n, a = n.to ?? (typeof r[0] == "string" ? "hex" : "bytes"), i = [];
    for (const s of r)
      i.push((0, e.commitmentToVersionedHash)({
        commitment: s,
        to: a,
        version: o
      }));
    return i;
  }
  return si;
}
var di = {}, fi = {}, jc = {}, im;
function b1() {
  return im || (im = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.maxBytesPerTransaction = e.bytesPerBlob = e.fieldElementsPerBlob = e.bytesPerFieldElement = void 0;
    const t = 6;
    e.bytesPerFieldElement = 32, e.fieldElementsPerBlob = 4096, e.bytesPerBlob = e.bytesPerFieldElement * e.fieldElementsPerBlob, e.maxBytesPerTransaction = e.bytesPerBlob * t - 1 - 1 * e.fieldElementsPerBlob * t;
  }(jc)), jc;
}
var Ve = {}, _n = {}, am;
function Vh() {
  return am || (am = 1, Object.defineProperty(_n, "__esModule", { value: !0 }), _n.versionedHashVersionKzg = void 0, _n.versionedHashVersionKzg = 1), _n;
}
var sm;
function Wh() {
  if (sm) return Ve;
  sm = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.InvalidVersionedHashVersionError = Ve.InvalidVersionedHashSizeError = Ve.EmptyBlobError = Ve.BlobSizeTooLargeError = void 0;
  const e = Vh(), t = ie();
  class n extends t.BaseError {
    constructor({ maxSize: s, size: u }) {
      super("Blob size is too large.", {
        metaMessages: [`Max: ${s} bytes`, `Given: ${u} bytes`],
        name: "BlobSizeTooLargeError"
      });
    }
  }
  Ve.BlobSizeTooLargeError = n;
  class r extends t.BaseError {
    constructor() {
      super("Blob data must not be empty.", { name: "EmptyBlobError" });
    }
  }
  Ve.EmptyBlobError = r;
  class o extends t.BaseError {
    constructor({ hash: s, size: u }) {
      super(`Versioned hash "${s}" size is invalid.`, {
        metaMessages: ["Expected: 32", `Received: ${u}`],
        name: "InvalidVersionedHashSizeError"
      });
    }
  }
  Ve.InvalidVersionedHashSizeError = o;
  class a extends t.BaseError {
    constructor({ hash: s, version: u }) {
      super(`Versioned hash "${s}" version is invalid.`, {
        metaMessages: [
          `Expected: ${e.versionedHashVersionKzg}`,
          `Received: ${u}`
        ],
        name: "InvalidVersionedHashVersionError"
      });
    }
  }
  return Ve.InvalidVersionedHashVersionError = a, Ve;
}
var um;
function Kh() {
  if (um) return fi;
  um = 1, Object.defineProperty(fi, "__esModule", { value: !0 }), fi.toBlobs = i;
  const e = b1(), t = Wh(), n = zn(), r = Ne(), o = be(), a = Y();
  function i(s) {
    const u = s.to ?? (typeof s.data == "string" ? "hex" : "bytes"), d = typeof s.data == "string" ? (0, o.hexToBytes)(s.data) : s.data, f = (0, r.size)(d);
    if (!f)
      throw new t.EmptyBlobError();
    if (f > e.maxBytesPerTransaction)
      throw new t.BlobSizeTooLargeError({
        maxSize: e.maxBytesPerTransaction,
        size: f
      });
    const c = [];
    let m = !0, y = 0;
    for (; m; ) {
      const g = (0, n.createCursor)(new Uint8Array(e.bytesPerBlob));
      let b = 0;
      for (; b < e.fieldElementsPerBlob; ) {
        const h = d.slice(y, y + (e.bytesPerFieldElement - 1));
        if (g.pushByte(0), g.pushBytes(h), h.length < 31) {
          g.pushByte(128), m = !1;
          break;
        }
        b++, y += 31;
      }
      c.push(g);
    }
    return u === "bytes" ? c.map((g) => g.bytes) : c.map((g) => (0, a.bytesToHex)(g.bytes));
  }
  return fi;
}
var cm;
function Ru() {
  if (cm) return di;
  cm = 1, Object.defineProperty(di, "__esModule", { value: !0 }), di.toBlobSidecars = r;
  const e = Su(), t = Iu(), n = Kh();
  function r(o) {
    const { data: a, kzg: i, to: s } = o, u = o.blobs ?? (0, n.toBlobs)({ data: a, to: s }), d = o.commitments ?? (0, e.blobsToCommitments)({ blobs: u, kzg: i, to: s }), f = o.proofs ?? (0, t.blobsToProofs)({ blobs: u, commitments: d, kzg: i, to: s }), c = [];
    for (let m = 0; m < u.length; m++)
      c.push({
        blob: u[m],
        commitment: d[m],
        proof: f[m]
      });
    return c;
  }
  return di;
}
var li = {}, dm;
function Ou() {
  if (dm) return li;
  dm = 1, Object.defineProperty(li, "__esModule", { value: !0 }), li.getTransactionType = t;
  const e = De();
  function t(n) {
    if (n.type)
      return n.type;
    if (typeof n.authorizationList < "u")
      return "eip7702";
    if (typeof n.blobs < "u" || typeof n.blobVersionedHashes < "u" || typeof n.maxFeePerBlobGas < "u" || typeof n.sidecars < "u")
      return "eip4844";
    if (typeof n.maxFeePerGas < "u" || typeof n.maxPriorityFeePerGas < "u")
      return "eip1559";
    if (typeof n.gasPrice < "u")
      return typeof n.accessList < "u" ? "eip2930" : "legacy";
    throw new e.InvalidSerializableTransactionError({ transaction: n });
  }
  return li;
}
var mi = {}, fm;
function Zn() {
  if (fm) return mi;
  fm = 1, Object.defineProperty(mi, "__esModule", { value: !0 }), mi.getChainId = t;
  const e = Pe();
  async function t(n) {
    const r = await n.request({
      method: "eth_chainId"
    }, { dedupe: !0 });
    return (0, e.hexToNumber)(r);
  }
  return mi;
}
var lm;
function Bu() {
  return lm || (lm = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.eip1559NetworkCache = e.defaultParameters = void 0, e.prepareTransactionRequest = b;
    const t = Se(), n = Gh(), r = Qc(), o = Fr(), a = Zc(), i = Tu(), s = Su(), u = Iu(), d = Xc(), f = Ru(), c = le(), m = Pt(), y = Ou(), g = Zn();
    e.defaultParameters = [
      "blobVersionedHashes",
      "chainId",
      "fees",
      "gas",
      "nonce",
      "type"
    ], e.eip1559NetworkCache = /* @__PURE__ */ new Map();
    async function b(h, _) {
      const { account: P = h.account, blobs: j, chain: v, gas: E, kzg: l, nonce: p, nonceManager: T, parameters: w = e.defaultParameters, type: I } = _, C = P && (0, t.parseAccount)(P), B = { ..._, ...C ? { from: C == null ? void 0 : C.address } : {} };
      let M;
      async function A() {
        return M || (M = await (0, c.getAction)(h, o.getBlock, "getBlock")({ blockTag: "latest" }), M);
      }
      let x;
      async function H() {
        return x || (v ? v.id : typeof _.chainId < "u" ? _.chainId : (x = await (0, c.getAction)(h, g.getChainId, "getChainId")({}), x));
      }
      if ((w.includes("blobVersionedHashes") || w.includes("sidecars")) && j && l) {
        const F = (0, s.blobsToCommitments)({ blobs: j, kzg: l });
        if (w.includes("blobVersionedHashes")) {
          const $ = (0, d.commitmentsToVersionedHashes)({
            commitments: F,
            to: "hex"
          });
          B.blobVersionedHashes = $;
        }
        if (w.includes("sidecars")) {
          const $ = (0, u.blobsToProofs)({ blobs: j, commitments: F, kzg: l }), q = (0, f.toBlobSidecars)({
            blobs: j,
            commitments: F,
            proofs: $,
            to: "hex"
          });
          B.sidecars = q;
        }
      }
      if (w.includes("chainId") && (B.chainId = await H()), (w.includes("fees") || w.includes("type")) && typeof I > "u")
        try {
          B.type = (0, y.getTransactionType)(B);
        } catch {
          let F = e.eip1559NetworkCache.get(h.uid);
          if (typeof F > "u") {
            const $ = await A();
            F = typeof ($ == null ? void 0 : $.baseFeePerGas) == "bigint", e.eip1559NetworkCache.set(h.uid, F);
          }
          B.type = F ? "eip1559" : "legacy";
        }
      if (w.includes("fees"))
        if (B.type !== "legacy" && B.type !== "eip2930") {
          if (typeof B.maxFeePerGas > "u" || typeof B.maxPriorityFeePerGas > "u") {
            const F = await A(), { maxFeePerGas: $, maxPriorityFeePerGas: q } = await (0, n.internal_estimateFeesPerGas)(h, {
              block: F,
              chain: v,
              request: B
            });
            if (typeof _.maxPriorityFeePerGas > "u" && _.maxFeePerGas && _.maxFeePerGas < q)
              throw new i.MaxFeePerGasTooLowError({
                maxPriorityFeePerGas: q
              });
            B.maxPriorityFeePerGas = q, B.maxFeePerGas = $;
          }
        } else {
          if (typeof _.maxFeePerGas < "u" || typeof _.maxPriorityFeePerGas < "u")
            throw new i.Eip1559FeesNotSupportedError();
          if (typeof _.gasPrice > "u") {
            const F = await A(), { gasPrice: $ } = await (0, n.internal_estimateFeesPerGas)(h, {
              block: F,
              chain: v,
              request: B,
              type: "legacy"
            });
            B.gasPrice = $;
          }
        }
      if (w.includes("gas") && typeof E > "u" && (B.gas = await (0, c.getAction)(h, r.estimateGas, "estimateGas")({
        ...B,
        account: C && { address: C.address, type: "json-rpc" }
      })), w.includes("nonce") && typeof p > "u" && C)
        if (T) {
          const F = await H();
          B.nonce = await T.consume({
            address: C.address,
            chainId: F,
            client: h
          });
        } else
          B.nonce = await (0, c.getAction)(h, a.getTransactionCount, "getTransactionCount")({
            address: C.address,
            blockTag: "pending"
          });
      return (0, m.assertRequest)(B), delete B.parameters, B;
    }
  }(vc)), vc;
}
var bi = {}, mm;
function Zh() {
  if (mm) return bi;
  mm = 1, Object.defineProperty(bi, "__esModule", { value: !0 }), bi.getBalance = t;
  const e = Y();
  async function t(n, { address: r, blockNumber: o, blockTag: a = "latest" }) {
    const i = o ? (0, e.numberToHex)(o) : void 0, s = await n.request({
      method: "eth_getBalance",
      params: [r, i || a]
    });
    return BigInt(s);
  }
  return bi;
}
var bm;
function Qc() {
  if (bm) return Vo;
  bm = 1, Object.defineProperty(Vo, "__esModule", { value: !0 }), Vo.estimateGas = c;
  const e = Se(), t = ie(), n = zh(), r = Y(), o = Lh(), a = xr(), i = jt(), s = Gc(), u = Pt(), d = Bu(), f = Zh();
  async function c(m, y) {
    var h, _, P;
    const { account: g = m.account } = y, b = g ? (0, e.parseAccount)(g) : void 0;
    try {
      let U = function(V) {
        const { block: K, request: ee, rpcStateOverride: X } = V;
        return m.request({
          method: "eth_estimateGas",
          params: X ? [ee, K ?? "latest", X] : K ? [ee, K] : [ee]
        });
      };
      const { accessList: j, authorizationList: v, blobs: E, blobVersionedHashes: l, blockNumber: p, blockTag: T, data: w, gas: I, gasPrice: C, maxFeePerBlobGas: B, maxFeePerGas: M, maxPriorityFeePerGas: A, nonce: x, value: H, stateOverride: F, ...$ } = await (0, d.prepareTransactionRequest)(m, {
        ...y,
        parameters: (b == null ? void 0 : b.type) === "local" ? void 0 : ["blobVersionedHashes"]
      }), S = (p ? (0, r.numberToHex)(p) : void 0) || T, R = (0, s.serializeStateOverride)(F), O = await (async () => {
        if ($.to)
          return $.to;
        if (v && v.length > 0)
          return await (0, n.recoverAuthorizationAddress)({
            authorization: v[0]
          }).catch(() => {
            throw new t.BaseError("`to` is required. Could not infer from `authorizationList`");
          });
      })();
      (0, u.assertRequest)(y);
      const k = (P = (_ = (h = m.chain) == null ? void 0 : h.formatters) == null ? void 0 : _.transactionRequest) == null ? void 0 : P.format, L = (k || i.formatTransactionRequest)({
        ...(0, a.extract)($, { format: k }),
        from: b == null ? void 0 : b.address,
        accessList: j,
        authorizationList: v,
        blobs: E,
        blobVersionedHashes: l,
        data: w,
        gas: I,
        gasPrice: C,
        maxFeePerBlobGas: B,
        maxFeePerGas: M,
        maxPriorityFeePerGas: A,
        nonce: x,
        to: O,
        value: H
      });
      let G = BigInt(await U({ block: S, request: L, rpcStateOverride: R }));
      if (v) {
        const V = await (0, f.getBalance)(m, { address: L.from }), K = await Promise.all(v.map(async (ee) => {
          const { contractAddress: X } = ee, te = await U({
            block: S,
            request: {
              authorizationList: void 0,
              data: w,
              from: b == null ? void 0 : b.address,
              to: X,
              value: (0, r.numberToHex)(V)
            },
            rpcStateOverride: R
          }).catch(() => 100000n);
          return 2n * BigInt(te);
        }));
        G += K.reduce((ee, X) => ee + X, 0n);
      }
      return G;
    } catch (j) {
      throw (0, o.getEstimateGasError)(j, {
        ...y,
        account: b,
        chain: m.chain
      });
    }
  }
  return Vo;
}
var gm;
function Jh() {
  if (gm) return Mo;
  gm = 1, Object.defineProperty(Mo, "__esModule", { value: !0 }), Mo.estimateContractGas = a;
  const e = Se(), t = Xe(), n = zt(), r = le(), o = Qc();
  async function a(i, s) {
    const { abi: u, address: d, args: f, functionName: c, dataSuffix: m, ...y } = s, g = (0, t.encodeFunctionData)({
      abi: u,
      args: f,
      functionName: c
    });
    try {
      return await (0, r.getAction)(i, o.estimateGas, "estimateGas")({
        data: `${g}${m ? m.replace("0x", "") : ""}`,
        to: d,
        ...y
      });
    } catch (b) {
      const h = y.account ? (0, e.parseAccount)(y.account) : void 0;
      throw (0, n.getContractError)(b, {
        abi: u,
        address: d,
        args: f,
        docsPath: "/docs/contract/estimateContractGas",
        functionName: c,
        sender: h == null ? void 0 : h.address
      });
    }
  }
  return Mo;
}
var gi = {}, yi = {}, hi = {}, pi = {}, ym;
function wt() {
  if (ym) return pi;
  ym = 1, Object.defineProperty(pi, "__esModule", { value: !0 }), pi.isAddressEqual = n;
  const e = Ze(), t = ze();
  function n(r, o) {
    if (!(0, t.isAddress)(r, { strict: !1 }))
      throw new e.InvalidAddressError({ address: r });
    if (!(0, t.isAddress)(o, { strict: !1 }))
      throw new e.InvalidAddressError({ address: o });
    return r.toLowerCase() === o.toLowerCase();
  }
  return pi;
}
var _i = {}, hm;
function Jn() {
  if (hm) return _i;
  hm = 1, Object.defineProperty(_i, "__esModule", { value: !0 }), _i.decodeEventLog = s;
  const e = pe(), t = Ne(), n = Mr(), r = xh(), o = $t(), a = _t(), i = "/docs/contract/decodeEventLog";
  function s(d) {
    const { abi: f, data: c, strict: m, topics: y } = d, g = m ?? !0, [b, ...h] = y;
    if (!b)
      throw new e.AbiEventSignatureEmptyTopicsError({ docsPath: i });
    const _ = f.length === 1 ? f[0] : f.find((T) => T.type === "event" && b === (0, n.toEventSelector)((0, a.formatAbiItem)(T)));
    if (!(_ && "name" in _) || _.type !== "event")
      throw new e.AbiEventSignatureNotFoundError(b, { docsPath: i });
    const { name: P, inputs: j } = _, v = j == null ? void 0 : j.some((T) => !("name" in T && T.name));
    let E = v ? [] : {};
    const l = j.filter((T) => "indexed" in T && T.indexed);
    for (let T = 0; T < l.length; T++) {
      const w = l[T], I = h[T];
      if (!I)
        throw new e.DecodeLogTopicsMismatch({
          abiItem: _,
          param: w
        });
      E[v ? T : w.name || T] = u({ param: w, value: I });
    }
    const p = j.filter((T) => !("indexed" in T && T.indexed));
    if (p.length > 0) {
      if (c && c !== "0x")
        try {
          const T = (0, o.decodeAbiParameters)(p, c);
          if (T)
            if (v)
              E = [...E, ...T];
            else
              for (let w = 0; w < p.length; w++)
                E[p[w].name] = T[w];
        } catch (T) {
          if (g)
            throw T instanceof e.AbiDecodingDataSizeTooSmallError || T instanceof r.PositionOutOfBoundsError ? new e.DecodeLogDataMismatch({
              abiItem: _,
              data: c,
              params: p,
              size: (0, t.size)(c)
            }) : T;
        }
      else if (g)
        throw new e.DecodeLogDataMismatch({
          abiItem: _,
          data: "0x",
          params: p,
          size: 0
        });
    }
    return {
      eventName: P,
      args: Object.values(E).length > 0 ? E : void 0
    };
  }
  function u({ param: d, value: f }) {
    return d.type === "string" || d.type === "bytes" || d.type === "tuple" || d.type.match(/^(.*)\[(\d+)?\]$/) ? f : ((0, o.decodeAbiParameters)([d], f) || [])[0];
  }
  return _i;
}
var pm;
function Yn() {
  if (pm) return hi;
  pm = 1, Object.defineProperty(hi, "__esModule", { value: !0 }), hi.parseEventLogs = i;
  const e = pe(), t = wt(), n = be(), r = Me(), o = Mr(), a = Jn();
  function i(u) {
    const { abi: d, args: f, logs: c, strict: m = !0 } = u, y = (() => {
      if (u.eventName)
        return Array.isArray(u.eventName) ? u.eventName : [u.eventName];
    })();
    return c.map((g) => {
      var b;
      try {
        const h = d.find((P) => P.type === "event" && g.topics[0] === (0, o.toEventSelector)(P));
        if (!h)
          return null;
        const _ = (0, a.decodeEventLog)({
          ...g,
          abi: [h],
          strict: m
        });
        return y && !y.includes(_.eventName) || !s({
          args: _.args,
          inputs: h.inputs,
          matchArgs: f
        }) ? null : { ..._, ...g };
      } catch (h) {
        let _, P;
        if (h instanceof e.AbiEventSignatureNotFoundError)
          return null;
        if (h instanceof e.DecodeLogDataMismatch || h instanceof e.DecodeLogTopicsMismatch) {
          if (m)
            return null;
          _ = h.abiItem.name, P = (b = h.abiItem.inputs) == null ? void 0 : b.some((j) => !("name" in j && j.name));
        }
        return { ...g, args: P ? [] : {}, eventName: _ };
      }
    }).filter(Boolean);
  }
  function s(u) {
    const { args: d, inputs: f, matchArgs: c } = u;
    if (!c)
      return !0;
    if (!d)
      return !1;
    function m(y, g, b) {
      try {
        return y.type === "address" ? (0, t.isAddressEqual)(g, b) : y.type === "string" || y.type === "bytes" ? (0, r.keccak256)((0, n.toBytes)(g)) === b : g === b;
      } catch {
        return !1;
      }
    }
    return Array.isArray(d) && Array.isArray(c) ? c.every((y, g) => {
      if (y == null)
        return !0;
      const b = f[g];
      return b ? (Array.isArray(y) ? y : [y]).some((_) => m(b, _, d[g])) : !1;
    }) : typeof d == "object" && !Array.isArray(d) && typeof c == "object" && !Array.isArray(c) ? Object.entries(c).every(([y, g]) => {
      if (g == null)
        return !0;
      const b = f.find((_) => _.name === y);
      return b ? (Array.isArray(g) ? g : [g]).some((_) => m(b, _, d[y])) : !1;
    }) : !1;
  }
  return hi;
}
var vi = {}, _m;
function Tt() {
  if (_m) return vi;
  _m = 1, Object.defineProperty(vi, "__esModule", { value: !0 }), vi.formatLog = e;
  function e(t, { args: n, eventName: r } = {}) {
    return {
      ...t,
      blockHash: t.blockHash ? t.blockHash : null,
      blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
      logIndex: t.logIndex ? Number(t.logIndex) : null,
      transactionHash: t.transactionHash ? t.transactionHash : null,
      transactionIndex: t.transactionIndex ? Number(t.transactionIndex) : null,
      ...r ? { args: n, eventName: r } : {}
    };
  }
  return vi;
}
var vm;
function ed() {
  if (vm) return yi;
  vm = 1, Object.defineProperty(yi, "__esModule", { value: !0 }), yi.getLogs = o;
  const e = dr(), t = Yn(), n = Y(), r = Tt();
  async function o(a, { address: i, blockHash: s, fromBlock: u, toBlock: d, event: f, events: c, args: m, strict: y } = {}) {
    const g = y ?? !1, b = c ?? (f ? [f] : void 0);
    let h = [];
    b && (h = [b.flatMap((v) => (0, e.encodeEventTopics)({
      abi: [v],
      eventName: v.name,
      args: c ? void 0 : m
    }))], f && (h = h[0]));
    let _;
    s ? _ = await a.request({
      method: "eth_getLogs",
      params: [{ address: i, topics: h, blockHash: s }]
    }) : _ = await a.request({
      method: "eth_getLogs",
      params: [
        {
          address: i,
          topics: h,
          fromBlock: typeof u == "bigint" ? (0, n.numberToHex)(u) : u,
          toBlock: typeof d == "bigint" ? (0, n.numberToHex)(d) : d
        }
      ]
    });
    const P = _.map((j) => (0, r.formatLog)(j));
    return b ? (0, t.parseEventLogs)({
      abi: b,
      args: m,
      logs: P,
      strict: g
    }) : P;
  }
  return yi;
}
var Em;
function td() {
  if (Em) return gi;
  Em = 1, Object.defineProperty(gi, "__esModule", { value: !0 }), gi.getContractEvents = r;
  const e = vt(), t = le(), n = ed();
  async function r(o, a) {
    const { abi: i, address: s, args: u, blockHash: d, eventName: f, fromBlock: c, toBlock: m, strict: y } = a, g = f ? (0, e.getAbiItem)({ abi: i, name: f }) : void 0, b = g ? void 0 : i.filter((h) => h.type === "event");
    return (0, t.getAction)(o, n.getLogs, "getLogs")({
      address: s,
      args: u,
      blockHash: d,
      event: g,
      events: b,
      fromBlock: c,
      toBlock: m,
      strict: y
    });
  }
  return gi;
}
var Ei = {}, ji = {}, jm;
function At() {
  if (jm) return ji;
  jm = 1, Object.defineProperty(ji, "__esModule", { value: !0 }), ji.decodeFunctionResult = o;
  const e = pe(), t = $t(), n = vt(), r = "/docs/contract/decodeFunctionResult";
  function o(a) {
    const { abi: i, args: s, functionName: u, data: d } = a;
    let f = i[0];
    if (u) {
      const m = (0, n.getAbiItem)({ abi: i, args: s, name: u });
      if (!m)
        throw new e.AbiFunctionNotFoundError(u, { docsPath: r });
      f = m;
    }
    if (f.type !== "function")
      throw new e.AbiFunctionNotFoundError(void 0, { docsPath: r });
    if (!f.outputs)
      throw new e.AbiFunctionOutputsNotFoundError(f.name, { docsPath: r });
    const c = (0, t.decodeAbiParameters)(f.outputs, d);
    if (c && c.length > 1)
      return c;
    if (c && c.length === 1)
      return c[0];
  }
  return ji;
}
var vn = {}, ye = {}, Pm;
function mr() {
  if (Pm) return ye;
  Pm = 1, Object.defineProperty(ye, "__esModule", { value: !0 }), ye.erc4626Abi = ye.erc721Abi = ye.erc20Abi_bytes32 = ye.erc20Abi = ye.universalSignatureValidatorAbi = ye.smartAccountAbi = ye.addressResolverAbi = ye.textResolverAbi = ye.universalResolverReverseAbi = ye.universalResolverResolveAbi = ye.multicall3Abi = void 0, ye.multicall3Abi = [
    {
      inputs: [
        {
          components: [
            {
              name: "target",
              type: "address"
            },
            {
              name: "allowFailure",
              type: "bool"
            },
            {
              name: "callData",
              type: "bytes"
            }
          ],
          name: "calls",
          type: "tuple[]"
        }
      ],
      name: "aggregate3",
      outputs: [
        {
          components: [
            {
              name: "success",
              type: "bool"
            },
            {
              name: "returnData",
              type: "bytes"
            }
          ],
          name: "returnData",
          type: "tuple[]"
        }
      ],
      stateMutability: "view",
      type: "function"
    }
  ];
  const e = [
    {
      inputs: [],
      name: "ResolverNotFound",
      type: "error"
    },
    {
      inputs: [],
      name: "ResolverWildcardNotSupported",
      type: "error"
    },
    {
      inputs: [],
      name: "ResolverNotContract",
      type: "error"
    },
    {
      inputs: [
        {
          name: "returnData",
          type: "bytes"
        }
      ],
      name: "ResolverError",
      type: "error"
    },
    {
      inputs: [
        {
          components: [
            {
              name: "status",
              type: "uint16"
            },
            {
              name: "message",
              type: "string"
            }
          ],
          name: "errors",
          type: "tuple[]"
        }
      ],
      name: "HttpError",
      type: "error"
    }
  ];
  return ye.universalResolverResolveAbi = [
    ...e,
    {
      name: "resolve",
      type: "function",
      stateMutability: "view",
      inputs: [
        { name: "name", type: "bytes" },
        { name: "data", type: "bytes" }
      ],
      outputs: [
        { name: "", type: "bytes" },
        { name: "address", type: "address" }
      ]
    },
    {
      name: "resolve",
      type: "function",
      stateMutability: "view",
      inputs: [
        { name: "name", type: "bytes" },
        { name: "data", type: "bytes" },
        { name: "gateways", type: "string[]" }
      ],
      outputs: [
        { name: "", type: "bytes" },
        { name: "address", type: "address" }
      ]
    }
  ], ye.universalResolverReverseAbi = [
    ...e,
    {
      name: "reverse",
      type: "function",
      stateMutability: "view",
      inputs: [{ type: "bytes", name: "reverseName" }],
      outputs: [
        { type: "string", name: "resolvedName" },
        { type: "address", name: "resolvedAddress" },
        { type: "address", name: "reverseResolver" },
        { type: "address", name: "resolver" }
      ]
    },
    {
      name: "reverse",
      type: "function",
      stateMutability: "view",
      inputs: [
        { type: "bytes", name: "reverseName" },
        { type: "string[]", name: "gateways" }
      ],
      outputs: [
        { type: "string", name: "resolvedName" },
        { type: "address", name: "resolvedAddress" },
        { type: "address", name: "reverseResolver" },
        { type: "address", name: "resolver" }
      ]
    }
  ], ye.textResolverAbi = [
    {
      name: "text",
      type: "function",
      stateMutability: "view",
      inputs: [
        { name: "name", type: "bytes32" },
        { name: "key", type: "string" }
      ],
      outputs: [{ name: "", type: "string" }]
    }
  ], ye.addressResolverAbi = [
    {
      name: "addr",
      type: "function",
      stateMutability: "view",
      inputs: [{ name: "name", type: "bytes32" }],
      outputs: [{ name: "", type: "address" }]
    },
    {
      name: "addr",
      type: "function",
      stateMutability: "view",
      inputs: [
        { name: "name", type: "bytes32" },
        { name: "coinType", type: "uint256" }
      ],
      outputs: [{ name: "", type: "bytes" }]
    }
  ], ye.smartAccountAbi = [
    {
      name: "isValidSignature",
      type: "function",
      stateMutability: "view",
      inputs: [
        { name: "hash", type: "bytes32" },
        { name: "signature", type: "bytes" }
      ],
      outputs: [{ name: "", type: "bytes4" }]
    }
  ], ye.universalSignatureValidatorAbi = [
    {
      inputs: [
        {
          name: "_signer",
          type: "address"
        },
        {
          name: "_hash",
          type: "bytes32"
        },
        {
          name: "_signature",
          type: "bytes"
        }
      ],
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      inputs: [
        {
          name: "_signer",
          type: "address"
        },
        {
          name: "_hash",
          type: "bytes32"
        },
        {
          name: "_signature",
          type: "bytes"
        }
      ],
      outputs: [
        {
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "function",
      name: "isValidSig"
    }
  ], ye.erc20Abi = [
    {
      type: "event",
      name: "Approval",
      inputs: [
        {
          indexed: !0,
          name: "owner",
          type: "address"
        },
        {
          indexed: !0,
          name: "spender",
          type: "address"
        },
        {
          indexed: !1,
          name: "value",
          type: "uint256"
        }
      ]
    },
    {
      type: "event",
      name: "Transfer",
      inputs: [
        {
          indexed: !0,
          name: "from",
          type: "address"
        },
        {
          indexed: !0,
          name: "to",
          type: "address"
        },
        {
          indexed: !1,
          name: "value",
          type: "uint256"
        }
      ]
    },
    {
      type: "function",
      name: "allowance",
      stateMutability: "view",
      inputs: [
        {
          name: "owner",
          type: "address"
        },
        {
          name: "spender",
          type: "address"
        }
      ],
      outputs: [
        {
          type: "uint256"
        }
      ]
    },
    {
      type: "function",
      name: "approve",
      stateMutability: "nonpayable",
      inputs: [
        {
          name: "spender",
          type: "address"
        },
        {
          name: "amount",
          type: "uint256"
        }
      ],
      outputs: [
        {
          type: "bool"
        }
      ]
    },
    {
      type: "function",
      name: "balanceOf",
      stateMutability: "view",
      inputs: [
        {
          name: "account",
          type: "address"
        }
      ],
      outputs: [
        {
          type: "uint256"
        }
      ]
    },
    {
      type: "function",
      name: "decimals",
      stateMutability: "view",
      inputs: [],
      outputs: [
        {
          type: "uint8"
        }
      ]
    },
    {
      type: "function",
      name: "name",
      stateMutability: "view",
      inputs: [],
      outputs: [
        {
          type: "string"
        }
      ]
    },
    {
      type: "function",
      name: "symbol",
      stateMutability: "view",
      inputs: [],
      outputs: [
        {
          type: "string"
        }
      ]
    },
    {
      type: "function",
      name: "totalSupply",
      stateMutability: "view",
      inputs: [],
      outputs: [
        {
          type: "uint256"
        }
      ]
    },
    {
      type: "function",
      name: "transfer",
      stateMutability: "nonpayable",
      inputs: [
        {
          name: "recipient",
          type: "address"
        },
        {
          name: "amount",
          type: "uint256"
        }
      ],
      outputs: [
        {
          type: "bool"
        }
      ]
    },
    {
      type: "function",
      name: "transferFrom",
      stateMutability: "nonpayable",
      inputs: [
        {
          name: "sender",
          type: "address"
        },
        {
          name: "recipient",
          type: "address"
        },
        {
          name: "amount",
          type: "uint256"
        }
      ],
      outputs: [
        {
          type: "bool"
        }
      ]
    }
  ], ye.erc20Abi_bytes32 = [
    {
      type: "event",
      name: "Approval",
      inputs: [
        {
          indexed: !0,
          name: "owner",
          type: "address"
        },
        {
          indexed: !0,
          name: "spender",
          type: "address"
        },
        {
          indexed: !1,
          name: "value",
          type: "uint256"
        }
      ]
    },
    {
      type: "event",
      name: "Transfer",
      inputs: [
        {
          indexed: !0,
          name: "from",
          type: "address"
        },
        {
          indexed: !0,
          name: "to",
          type: "address"
        },
        {
          indexed: !1,
          name: "value",
          type: "uint256"
        }
      ]
    },
    {
      type: "function",
      name: "allowance",
      stateMutability: "view",
      inputs: [
        {
          name: "owner",
          type: "address"
        },
        {
          name: "spender",
          type: "address"
        }
      ],
      outputs: [
        {
          type: "uint256"
        }
      ]
    },
    {
      type: "function",
      name: "approve",
      stateMutability: "nonpayable",
      inputs: [
        {
          name: "spender",
          type: "address"
        },
        {
          name: "amount",
          type: "uint256"
        }
      ],
      outputs: [
        {
          type: "bool"
        }
      ]
    },
    {
      type: "function",
      name: "balanceOf",
      stateMutability: "view",
      inputs: [
        {
          name: "account",
          type: "address"
        }
      ],
      outputs: [
        {
          type: "uint256"
        }
      ]
    },
    {
      type: "function",
      name: "decimals",
      stateMutability: "view",
      inputs: [],
      outputs: [
        {
          type: "uint8"
        }
      ]
    },
    {
      type: "function",
      name: "name",
      stateMutability: "view",
      inputs: [],
      outputs: [
        {
          type: "bytes32"
        }
      ]
    },
    {
      type: "function",
      name: "symbol",
      stateMutability: "view",
      inputs: [],
      outputs: [
        {
          type: "bytes32"
        }
      ]
    },
    {
      type: "function",
      name: "totalSupply",
      stateMutability: "view",
      inputs: [],
      outputs: [
        {
          type: "uint256"
        }
      ]
    },
    {
      type: "function",
      name: "transfer",
      stateMutability: "nonpayable",
      inputs: [
        {
          name: "recipient",
          type: "address"
        },
        {
          name: "amount",
          type: "uint256"
        }
      ],
      outputs: [
        {
          type: "bool"
        }
      ]
    },
    {
      type: "function",
      name: "transferFrom",
      stateMutability: "nonpayable",
      inputs: [
        {
          name: "sender",
          type: "address"
        },
        {
          name: "recipient",
          type: "address"
        },
        {
          name: "amount",
          type: "uint256"
        }
      ],
      outputs: [
        {
          type: "bool"
        }
      ]
    }
  ], ye.erc721Abi = [
    {
      type: "event",
      name: "Approval",
      inputs: [
        {
          indexed: !0,
          name: "owner",
          type: "address"
        },
        {
          indexed: !0,
          name: "spender",
          type: "address"
        },
        {
          indexed: !0,
          name: "tokenId",
          type: "uint256"
        }
      ]
    },
    {
      type: "event",
      name: "ApprovalForAll",
      inputs: [
        {
          indexed: !0,
          name: "owner",
          type: "address"
        },
        {
          indexed: !0,
          name: "operator",
          type: "address"
        },
        {
          indexed: !1,
          name: "approved",
          type: "bool"
        }
      ]
    },
    {
      type: "event",
      name: "Transfer",
      inputs: [
        {
          indexed: !0,
          name: "from",
          type: "address"
        },
        {
          indexed: !0,
          name: "to",
          type: "address"
        },
        {
          indexed: !0,
          name: "tokenId",
          type: "uint256"
        }
      ]
    },
    {
      type: "function",
      name: "approve",
      stateMutability: "payable",
      inputs: [
        {
          name: "spender",
          type: "address"
        },
        {
          name: "tokenId",
          type: "uint256"
        }
      ],
      outputs: []
    },
    {
      type: "function",
      name: "balanceOf",
      stateMutability: "view",
      inputs: [
        {
          name: "account",
          type: "address"
        }
      ],
      outputs: [
        {
          type: "uint256"
        }
      ]
    },
    {
      type: "function",
      name: "getApproved",
      stateMutability: "view",
      inputs: [
        {
          name: "tokenId",
          type: "uint256"
        }
      ],
      outputs: [
        {
          type: "address"
        }
      ]
    },
    {
      type: "function",
      name: "isApprovedForAll",
      stateMutability: "view",
      inputs: [
        {
          name: "owner",
          type: "address"
        },
        {
          name: "operator",
          type: "address"
        }
      ],
      outputs: [
        {
          type: "bool"
        }
      ]
    },
    {
      type: "function",
      name: "name",
      stateMutability: "view",
      inputs: [],
      outputs: [
        {
          type: "string"
        }
      ]
    },
    {
      type: "function",
      name: "ownerOf",
      stateMutability: "view",
      inputs: [
        {
          name: "tokenId",
          type: "uint256"
        }
      ],
      outputs: [
        {
          name: "owner",
          type: "address"
        }
      ]
    },
    {
      type: "function",
      name: "safeTransferFrom",
      stateMutability: "payable",
      inputs: [
        {
          name: "from",
          type: "address"
        },
        {
          name: "to",
          type: "address"
        },
        {
          name: "tokenId",
          type: "uint256"
        }
      ],
      outputs: []
    },
    {
      type: "function",
      name: "safeTransferFrom",
      stateMutability: "nonpayable",
      inputs: [
        {
          name: "from",
          type: "address"
        },
        {
          name: "to",
          type: "address"
        },
        {
          name: "id",
          type: "uint256"
        },
        {
          name: "data",
          type: "bytes"
        }
      ],
      outputs: []
    },
    {
      type: "function",
      name: "setApprovalForAll",
      stateMutability: "nonpayable",
      inputs: [
        {
          name: "operator",
          type: "address"
        },
        {
          name: "approved",
          type: "bool"
        }
      ],
      outputs: []
    },
    {
      type: "function",
      name: "symbol",
      stateMutability: "view",
      inputs: [],
      outputs: [
        {
          type: "string"
        }
      ]
    },
    {
      type: "function",
      name: "tokenByIndex",
      stateMutability: "view",
      inputs: [
        {
          name: "index",
          type: "uint256"
        }
      ],
      outputs: [
        {
          type: "uint256"
        }
      ]
    },
    {
      type: "function",
      name: "tokenByIndex",
      stateMutability: "view",
      inputs: [
        {
          name: "owner",
          type: "address"
        },
        {
          name: "index",
          type: "uint256"
        }
      ],
      outputs: [
        {
          name: "tokenId",
          type: "uint256"
        }
      ]
    },
    {
      type: "function",
      name: "tokenURI",
      stateMutability: "view",
      inputs: [
        {
          name: "tokenId",
          type: "uint256"
        }
      ],
      outputs: [
        {
          type: "string"
        }
      ]
    },
    {
      type: "function",
      name: "totalSupply",
      stateMutability: "view",
      inputs: [],
      outputs: [
        {
          type: "uint256"
        }
      ]
    },
    {
      type: "function",
      name: "transferFrom",
      stateMutability: "payable",
      inputs: [
        {
          name: "sender",
          type: "address"
        },
        {
          name: "recipient",
          type: "address"
        },
        {
          name: "tokeId",
          type: "uint256"
        }
      ],
      outputs: []
    }
  ], ye.erc4626Abi = [
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          name: "owner",
          type: "address"
        },
        {
          indexed: !0,
          name: "spender",
          type: "address"
        },
        {
          indexed: !1,
          name: "value",
          type: "uint256"
        }
      ],
      name: "Approval",
      type: "event"
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          name: "sender",
          type: "address"
        },
        {
          indexed: !0,
          name: "receiver",
          type: "address"
        },
        {
          indexed: !1,
          name: "assets",
          type: "uint256"
        },
        {
          indexed: !1,
          name: "shares",
          type: "uint256"
        }
      ],
      name: "Deposit",
      type: "event"
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          name: "from",
          type: "address"
        },
        {
          indexed: !0,
          name: "to",
          type: "address"
        },
        {
          indexed: !1,
          name: "value",
          type: "uint256"
        }
      ],
      name: "Transfer",
      type: "event"
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          name: "sender",
          type: "address"
        },
        {
          indexed: !0,
          name: "receiver",
          type: "address"
        },
        {
          indexed: !0,
          name: "owner",
          type: "address"
        },
        {
          indexed: !1,
          name: "assets",
          type: "uint256"
        },
        {
          indexed: !1,
          name: "shares",
          type: "uint256"
        }
      ],
      name: "Withdraw",
      type: "event"
    },
    {
      inputs: [
        {
          name: "owner",
          type: "address"
        },
        {
          name: "spender",
          type: "address"
        }
      ],
      name: "allowance",
      outputs: [
        {
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          name: "spender",
          type: "address"
        },
        {
          name: "amount",
          type: "uint256"
        }
      ],
      name: "approve",
      outputs: [
        {
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "asset",
      outputs: [
        {
          name: "assetTokenAddress",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          name: "account",
          type: "address"
        }
      ],
      name: "balanceOf",
      outputs: [
        {
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          name: "shares",
          type: "uint256"
        }
      ],
      name: "convertToAssets",
      outputs: [
        {
          name: "assets",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          name: "assets",
          type: "uint256"
        }
      ],
      name: "convertToShares",
      outputs: [
        {
          name: "shares",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          name: "assets",
          type: "uint256"
        },
        {
          name: "receiver",
          type: "address"
        }
      ],
      name: "deposit",
      outputs: [
        {
          name: "shares",
          type: "uint256"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          name: "caller",
          type: "address"
        }
      ],
      name: "maxDeposit",
      outputs: [
        {
          name: "maxAssets",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          name: "caller",
          type: "address"
        }
      ],
      name: "maxMint",
      outputs: [
        {
          name: "maxShares",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          name: "owner",
          type: "address"
        }
      ],
      name: "maxRedeem",
      outputs: [
        {
          name: "maxShares",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          name: "owner",
          type: "address"
        }
      ],
      name: "maxWithdraw",
      outputs: [
        {
          name: "maxAssets",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          name: "shares",
          type: "uint256"
        },
        {
          name: "receiver",
          type: "address"
        }
      ],
      name: "mint",
      outputs: [
        {
          name: "assets",
          type: "uint256"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          name: "assets",
          type: "uint256"
        }
      ],
      name: "previewDeposit",
      outputs: [
        {
          name: "shares",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          name: "shares",
          type: "uint256"
        }
      ],
      name: "previewMint",
      outputs: [
        {
          name: "assets",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          name: "shares",
          type: "uint256"
        }
      ],
      name: "previewRedeem",
      outputs: [
        {
          name: "assets",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          name: "assets",
          type: "uint256"
        }
      ],
      name: "previewWithdraw",
      outputs: [
        {
          name: "shares",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          name: "shares",
          type: "uint256"
        },
        {
          name: "receiver",
          type: "address"
        },
        {
          name: "owner",
          type: "address"
        }
      ],
      name: "redeem",
      outputs: [
        {
          name: "assets",
          type: "uint256"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "totalAssets",
      outputs: [
        {
          name: "totalManagedAssets",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          name: "to",
          type: "address"
        },
        {
          name: "amount",
          type: "uint256"
        }
      ],
      name: "transfer",
      outputs: [
        {
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          name: "from",
          type: "address"
        },
        {
          name: "to",
          type: "address"
        },
        {
          name: "amount",
          type: "uint256"
        }
      ],
      name: "transferFrom",
      outputs: [
        {
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          name: "assets",
          type: "uint256"
        },
        {
          name: "receiver",
          type: "address"
        },
        {
          name: "owner",
          type: "address"
        }
      ],
      name: "withdraw",
      outputs: [
        {
          name: "shares",
          type: "uint256"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    }
  ], ye;
}
var En = {}, wm;
function g1() {
  return wm || (wm = 1, Object.defineProperty(En, "__esModule", { value: !0 }), En.aggregate3Signature = void 0, En.aggregate3Signature = "0x82ad56cb"), En;
}
var gt = {}, Tm;
function rd() {
  return Tm || (Tm = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.universalSignatureValidatorByteCode = gt.deploylessCallViaFactoryBytecode = gt.deploylessCallViaBytecodeBytecode = void 0, gt.deploylessCallViaBytecodeBytecode = "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe", gt.deploylessCallViaFactoryBytecode = "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe", gt.universalSignatureValidatorByteCode = "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572"), gt;
}
var $e = {}, Am;
function Xn() {
  if (Am) return $e;
  Am = 1, Object.defineProperty($e, "__esModule", { value: !0 }), $e.InvalidChainIdError = $e.ClientChainNotConfiguredError = $e.ChainNotFoundError = $e.ChainMismatchError = $e.ChainDoesNotSupportContract = void 0;
  const e = ie();
  class t extends e.BaseError {
    constructor({ blockNumber: s, chain: u, contract: d }) {
      super(`Chain "${u.name}" does not support contract "${d.name}".`, {
        metaMessages: [
          "This could be due to any of the following:",
          ...s && d.blockCreated && d.blockCreated > s ? [
            `- The contract "${d.name}" was not deployed until block ${d.blockCreated} (current block ${s}).`
          ] : [
            `- The chain does not have the contract "${d.name}" configured.`
          ]
        ],
        name: "ChainDoesNotSupportContract"
      });
    }
  }
  $e.ChainDoesNotSupportContract = t;
  class n extends e.BaseError {
    constructor({ chain: s, currentChainId: u }) {
      super(`The current chain of the wallet (id: ${u}) does not match the target chain for the transaction (id: ${s.id} – ${s.name}).`, {
        metaMessages: [
          `Current Chain ID:  ${u}`,
          `Expected Chain ID: ${s.id} – ${s.name}`
        ],
        name: "ChainMismatchError"
      });
    }
  }
  $e.ChainMismatchError = n;
  class r extends e.BaseError {
    constructor() {
      super([
        "No chain was provided to the request.",
        "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."
      ].join(`
`), {
        name: "ChainNotFoundError"
      });
    }
  }
  $e.ChainNotFoundError = r;
  class o extends e.BaseError {
    constructor() {
      super("No chain was provided to the Client.", {
        name: "ClientChainNotConfiguredError"
      });
    }
  }
  $e.ClientChainNotConfiguredError = o;
  class a extends e.BaseError {
    constructor({ chainId: s }) {
      super(typeof s == "number" ? `Chain ID "${s}" is invalid.` : "Chain ID is invalid.", { name: "InvalidChainIdError" });
    }
  }
  return $e.InvalidChainIdError = a, $e;
}
var Pi = {}, Sm;
function Qn() {
  if (Sm) return Pi;
  Sm = 1, Object.defineProperty(Pi, "__esModule", { value: !0 }), Pi.encodeDeployData = o;
  const e = pe(), t = Be(), n = Ye(), r = "/docs/contract/encodeDeployData";
  function o(a) {
    const { abi: i, args: s, bytecode: u } = a;
    if (!s || s.length === 0)
      return u;
    const d = i.find((c) => "type" in c && c.type === "constructor");
    if (!d)
      throw new e.AbiConstructorNotFoundError({ docsPath: r });
    if (!("inputs" in d))
      throw new e.AbiConstructorParamsNotFoundError({ docsPath: r });
    if (!d.inputs || d.inputs.length === 0)
      throw new e.AbiConstructorParamsNotFoundError({ docsPath: r });
    const f = (0, n.encodeAbiParameters)(d.inputs, s);
    return (0, t.concatHex)([u, f]);
  }
  return Pi;
}
var wi = {}, Im;
function Lt() {
  if (Im) return wi;
  Im = 1, Object.defineProperty(wi, "__esModule", { value: !0 }), wi.getChainContractAddress = t;
  const e = Xn();
  function t({ blockNumber: n, chain: r, contract: o }) {
    var i;
    const a = (i = r == null ? void 0 : r.contracts) == null ? void 0 : i[o];
    if (!a)
      throw new e.ChainDoesNotSupportContract({
        chain: r,
        contract: { name: o }
      });
    if (n && a.blockCreated && a.blockCreated > n)
      throw new e.ChainDoesNotSupportContract({
        blockNumber: n,
        chain: r,
        contract: {
          name: o,
          blockCreated: a.blockCreated
        }
      });
    return a.address;
  }
  return wi;
}
var Ti = {}, Rm;
function nd() {
  if (Rm) return Ti;
  Rm = 1, Object.defineProperty(Ti, "__esModule", { value: !0 }), Ti.getCallError = r;
  const e = Nt(), t = Et(), n = Vn();
  function r(o, { docsPath: a, ...i }) {
    const s = (() => {
      const u = (0, n.getNodeError)(o, i);
      return u instanceof t.UnknownNodeError ? o : u;
    })();
    return new e.CallExecutionError(s, {
      docsPath: a,
      ...i
    });
  }
  return Ti;
}
var Ai = {}, Si = {}, Om;
function Yh() {
  if (Om) return Si;
  Om = 1, Object.defineProperty(Si, "__esModule", { value: !0 }), Si.withResolvers = e;
  function e() {
    let t = () => {
    }, n = () => {
    };
    return { promise: new Promise((o, a) => {
      t = o, n = a;
    }), resolve: t, reject: n };
  }
  return Si;
}
var Bm;
function od() {
  if (Bm) return Ai;
  Bm = 1, Object.defineProperty(Ai, "__esModule", { value: !0 }), Ai.createBatchScheduler = n;
  const e = Yh(), t = /* @__PURE__ */ new Map();
  function n({ fn: r, id: o, shouldSplitBatch: a, wait: i = 0, sort: s }) {
    const u = async () => {
      const y = c();
      d();
      const g = y.map(({ args: b }) => b);
      g.length !== 0 && r(g).then((b) => {
        s && Array.isArray(b) && b.sort(s);
        for (let h = 0; h < y.length; h++) {
          const { resolve: _ } = y[h];
          _ == null || _([b[h], b]);
        }
      }).catch((b) => {
        for (let h = 0; h < y.length; h++) {
          const { reject: _ } = y[h];
          _ == null || _(b);
        }
      });
    }, d = () => t.delete(o), f = () => c().map(({ args: y }) => y), c = () => t.get(o) || [], m = (y) => t.set(o, [...c(), y]);
    return {
      flush: d,
      async schedule(y) {
        const { promise: g, resolve: b, reject: h } = (0, e.withResolvers)();
        return (a == null ? void 0 : a([...f(), y])) && u(), c().length > 0 ? (m({ args: y, resolve: b, reject: h }), g) : (m({ args: y, resolve: b, reject: h }), setTimeout(u, i), g);
      }
    };
  }
  return Ai;
}
var Pc = {}, yt = {}, Cm;
function y1() {
  if (Cm) return yt;
  Cm = 1, Object.defineProperty(yt, "__esModule", { value: !0 }), yt.OffchainLookupSenderMismatchError = yt.OffchainLookupResponseMalformedError = yt.OffchainLookupError = void 0;
  const e = Ie(), t = ie(), n = Lc();
  class r extends t.BaseError {
    constructor({ callbackSelector: s, cause: u, data: d, extraData: f, sender: c, urls: m }) {
      var y;
      super(u.shortMessage || "An error occurred while fetching for an offchain result.", {
        cause: u,
        metaMessages: [
          ...u.metaMessages || [],
          (y = u.metaMessages) != null && y.length ? "" : [],
          "Offchain Gateway Call:",
          m && [
            "  Gateway URL(s):",
            ...m.map((g) => `    ${(0, n.getUrl)(g)}`)
          ],
          `  Sender: ${c}`,
          `  Data: ${d}`,
          `  Callback selector: ${s}`,
          `  Extra data: ${f}`
        ].flat(),
        name: "OffchainLookupError"
      });
    }
  }
  yt.OffchainLookupError = r;
  class o extends t.BaseError {
    constructor({ result: s, url: u }) {
      super("Offchain gateway response is malformed. Response data must be a hex value.", {
        metaMessages: [
          `Gateway URL: ${(0, n.getUrl)(u)}`,
          `Response: ${(0, e.stringify)(s)}`
        ],
        name: "OffchainLookupResponseMalformedError"
      });
    }
  }
  yt.OffchainLookupResponseMalformedError = o;
  class a extends t.BaseError {
    constructor({ sender: s, to: u }) {
      super("Reverted sender address does not match target contract address (`to`).", {
        metaMessages: [
          `Contract address: ${u}`,
          `OffchainLookup sender address: ${s}`
        ],
        name: "OffchainLookupSenderMismatchError"
      });
    }
  }
  return yt.OffchainLookupSenderMismatchError = a, yt;
}
var qm;
function id() {
  return qm || (qm = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.offchainLookupAbiItem = e.offchainLookupSignature = void 0, e.offchainLookup = f, e.ccipRequest = c;
    const t = eo(), n = y1(), r = Qe(), o = ju(), a = Ye(), i = wt(), s = Be(), u = Oe(), d = Ie();
    e.offchainLookupSignature = "0x556f1830", e.offchainLookupAbiItem = {
      name: "OffchainLookup",
      type: "error",
      inputs: [
        {
          name: "sender",
          type: "address"
        },
        {
          name: "urls",
          type: "string[]"
        },
        {
          name: "callData",
          type: "bytes"
        },
        {
          name: "callbackFunction",
          type: "bytes4"
        },
        {
          name: "extraData",
          type: "bytes"
        }
      ]
    };
    async function f(m, { blockNumber: y, blockTag: g, data: b, to: h }) {
      const { args: _ } = (0, o.decodeErrorResult)({
        data: b,
        abi: [e.offchainLookupAbiItem]
      }), [P, j, v, E, l] = _, { ccipRead: p } = m, T = p && typeof (p == null ? void 0 : p.request) == "function" ? p.request : c;
      try {
        if (!(0, i.isAddressEqual)(h, P))
          throw new n.OffchainLookupSenderMismatchError({ sender: P, to: h });
        const w = await T({ data: v, sender: P, urls: j }), { data: I } = await (0, t.call)(m, {
          blockNumber: y,
          blockTag: g,
          data: (0, s.concat)([
            E,
            (0, a.encodeAbiParameters)([{ type: "bytes" }, { type: "bytes" }], [w, l])
          ]),
          to: h
        });
        return I;
      } catch (w) {
        throw new n.OffchainLookupError({
          callbackSelector: E,
          cause: w,
          data: b,
          extraData: l,
          sender: P,
          urls: j
        });
      }
    }
    async function c({ data: m, sender: y, urls: g }) {
      var h;
      let b = new Error("An unknown error occurred.");
      for (let _ = 0; _ < g.length; _++) {
        const P = g[_], j = P.includes("{data}") ? "GET" : "POST", v = j === "POST" ? { data: m, sender: y } : void 0, E = j === "POST" ? { "Content-Type": "application/json" } : {};
        try {
          const l = await fetch(P.replace("{sender}", y).replace("{data}", m), {
            body: JSON.stringify(v),
            headers: E,
            method: j
          });
          let p;
          if ((h = l.headers.get("Content-Type")) != null && h.startsWith("application/json") ? p = (await l.json()).data : p = await l.text(), !l.ok) {
            b = new r.HttpRequestError({
              body: v,
              details: p != null && p.error ? (0, d.stringify)(p.error) : l.statusText,
              headers: l.headers,
              status: l.status,
              url: P
            });
            continue;
          }
          if (!(0, u.isHex)(p)) {
            b = new n.OffchainLookupResponseMalformedError({
              result: p,
              url: P
            });
            continue;
          }
          return p;
        } catch (l) {
          b = new r.HttpRequestError({
            body: v,
            details: l.message,
            url: P
          });
        }
      }
      throw b;
    }
  }(Pc)), Pc;
}
var Mm;
function eo() {
  if (Mm) return vn;
  Mm = 1, Object.defineProperty(vn, "__esModule", { value: !0 }), vn.call = j, vn.getRevertErrorData = T;
  const e = /* @__PURE__ */ hu(), t = Se(), n = mr(), r = g1(), o = rd(), a = ie(), i = Xn(), s = Nt(), u = At(), d = Qn(), f = Xe(), c = Lt(), m = Y(), y = nd(), g = xr(), b = jt(), h = od(), _ = Gc(), P = Pt();
  async function j(w, I) {
    var W, D, ne, de;
    const { account: C = w.account, batch: B = !!((W = w.batch) != null && W.multicall), blockNumber: M, blockTag: A = "latest", accessList: x, blobs: H, code: F, data: $, factory: q, factoryData: S, gas: R, gasPrice: O, maxFeePerBlobGas: k, maxFeePerGas: z, maxPriorityFeePerGas: L, nonce: U, to: G, value: V, stateOverride: K, ...ee } = I, X = C ? (0, t.parseAccount)(C) : void 0;
    if (F && (q || S))
      throw new a.BaseError("Cannot provide both `code` & `factory`/`factoryData` as parameters.");
    if (F && G)
      throw new a.BaseError("Cannot provide both `code` & `to` as parameters.");
    const te = F && $, se = q && S && G && $, Z = te || se, J = te ? l({
      code: F,
      data: $
    }) : se ? p({
      data: $,
      factory: q,
      factoryData: S,
      to: G
    }) : $;
    try {
      (0, P.assertRequest)(I);
      const ce = (M ? (0, m.numberToHex)(M) : void 0) || A, Ee = (0, _.serializeStateOverride)(K), ve = (de = (ne = (D = w.chain) == null ? void 0 : D.formatters) == null ? void 0 : ne.transactionRequest) == null ? void 0 : de.format, we = (ve || b.formatTransactionRequest)({
        ...(0, g.extract)(ee, { format: ve }),
        from: X == null ? void 0 : X.address,
        accessList: x,
        blobs: H,
        data: J,
        gas: R,
        gasPrice: O,
        maxFeePerBlobGas: k,
        maxFeePerGas: z,
        maxPriorityFeePerGas: L,
        nonce: U,
        to: Z ? void 0 : G,
        value: V
      });
      if (B && v({ request: we }) && !Ee)
        try {
          return await E(w, {
            ...we,
            blockNumber: M,
            blockTag: A
          });
        } catch (Ce) {
          if (!(Ce instanceof i.ClientChainNotConfiguredError) && !(Ce instanceof i.ChainDoesNotSupportContract))
            throw Ce;
        }
      const Ae = await w.request({
        method: "eth_call",
        params: Ee ? [
          we,
          ce,
          Ee
        ] : [we, ce]
      });
      return Ae === "0x" ? { data: void 0 } : { data: Ae };
    } catch (me) {
      const ce = T(me), { offchainLookup: Ee, offchainLookupSignature: ve } = await Promise.resolve().then(() => id());
      if (w.ccipRead !== !1 && (ce == null ? void 0 : ce.slice(0, 10)) === ve && G)
        return { data: await Ee(w, { data: ce, to: G }) };
      throw Z && (ce == null ? void 0 : ce.slice(0, 10)) === "0x101bb98d" ? new s.CounterfactualDeploymentFailedError({ factory: q }) : (0, y.getCallError)(me, {
        ...I,
        account: X,
        chain: w.chain
      });
    }
  }
  function v({ request: w }) {
    const { data: I, to: C, ...B } = w;
    return !(!I || I.startsWith(r.aggregate3Signature) || !C || Object.values(B).filter((M) => typeof M < "u").length > 0);
  }
  async function E(w, I) {
    var z;
    const { batchSize: C = 1024, wait: B = 0 } = typeof ((z = w.batch) == null ? void 0 : z.multicall) == "object" ? w.batch.multicall : {}, { blockNumber: M, blockTag: A = "latest", data: x, multicallAddress: H, to: F } = I;
    let $ = H;
    if (!$) {
      if (!w.chain)
        throw new i.ClientChainNotConfiguredError();
      $ = (0, c.getChainContractAddress)({
        blockNumber: M,
        chain: w.chain,
        contract: "multicall3"
      });
    }
    const S = (M ? (0, m.numberToHex)(M) : void 0) || A, { schedule: R } = (0, h.createBatchScheduler)({
      id: `${w.uid}.${S}`,
      wait: B,
      shouldSplitBatch(L) {
        return L.reduce((G, { data: V }) => G + (V.length - 2), 0) > C * 2;
      },
      fn: async (L) => {
        const U = L.map((K) => ({
          allowFailure: !0,
          callData: K.data,
          target: K.to
        })), G = (0, f.encodeFunctionData)({
          abi: n.multicall3Abi,
          args: [U],
          functionName: "aggregate3"
        }), V = await w.request({
          method: "eth_call",
          params: [
            {
              data: G,
              to: $
            },
            S
          ]
        });
        return (0, u.decodeFunctionResult)({
          abi: n.multicall3Abi,
          args: [U],
          functionName: "aggregate3",
          data: V || "0x"
        });
      }
    }), [{ returnData: O, success: k }] = await R({ data: x, to: F });
    if (!k)
      throw new s.RawContractError({ data: O });
    return O === "0x" ? { data: void 0 } : { data: O };
  }
  function l(w) {
    const { code: I, data: C } = w;
    return (0, d.encodeDeployData)({
      abi: (0, e.parseAbi)(["constructor(bytes, bytes)"]),
      bytecode: o.deploylessCallViaBytecodeBytecode,
      args: [I, C]
    });
  }
  function p(w) {
    const { data: I, factory: C, factoryData: B, to: M } = w;
    return (0, d.encodeDeployData)({
      abi: (0, e.parseAbi)(["constructor(address, bytes, address, bytes)"]),
      bytecode: o.deploylessCallViaFactoryBytecode,
      args: [M, I, C, B]
    });
  }
  function T(w) {
    var C;
    if (!(w instanceof a.BaseError))
      return;
    const I = w.walk();
    return typeof (I == null ? void 0 : I.data) == "object" ? (C = I.data) == null ? void 0 : C.data : I.data;
  }
  return vn;
}
var xm;
function St() {
  if (xm) return Ei;
  xm = 1, Object.defineProperty(Ei, "__esModule", { value: !0 }), Ei.readContract = a;
  const e = At(), t = Xe(), n = zt(), r = le(), o = eo();
  async function a(i, s) {
    const { abi: u, address: d, args: f, functionName: c, ...m } = s, y = (0, t.encodeFunctionData)({
      abi: u,
      args: f,
      functionName: c
    });
    try {
      const { data: g } = await (0, r.getAction)(i, o.call, "call")({
        ...m,
        data: y,
        to: d
      });
      return (0, e.decodeFunctionResult)({
        abi: u,
        args: f,
        functionName: c,
        data: g || "0x"
      });
    } catch (g) {
      throw (0, n.getContractError)(g, {
        abi: u,
        address: d,
        args: f,
        docsPath: "/docs/contract/readContract",
        functionName: c
      });
    }
  }
  return Ei;
}
var Ii = {}, Fm;
function Xh() {
  if (Fm) return Ii;
  Fm = 1, Object.defineProperty(Ii, "__esModule", { value: !0 }), Ii.simulateContract = i;
  const e = Se(), t = At(), n = Xe(), r = zt(), o = le(), a = eo();
  async function i(s, u) {
    const { abi: d, address: f, args: c, dataSuffix: m, functionName: y, ...g } = u, b = g.account ? (0, e.parseAccount)(g.account) : s.account, h = (0, n.encodeFunctionData)({ abi: d, args: c, functionName: y });
    try {
      const { data: _ } = await (0, o.getAction)(s, a.call, "call")({
        batch: !1,
        data: `${h}${m ? m.replace("0x", "") : ""}`,
        to: f,
        ...g,
        account: b
      }), P = (0, t.decodeFunctionResult)({
        abi: d,
        args: c,
        functionName: y,
        data: _ || "0x"
      }), j = d.filter((v) => "name" in v && v.name === u.functionName);
      return {
        result: P,
        request: {
          abi: j,
          address: f,
          args: c,
          dataSuffix: m,
          functionName: y,
          ...g,
          account: b
        }
      };
    } catch (_) {
      throw (0, r.getContractError)(_, {
        abi: d,
        address: f,
        args: c,
        docsPath: "/docs/contract/simulateContract",
        functionName: y,
        sender: b == null ? void 0 : b.address
      });
    }
  }
  return Ii;
}
var Ri = {}, wc = {}, km;
function kr() {
  return km || (km = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.cleanupCache = e.listenersCache = void 0, e.observe = n, e.listenersCache = /* @__PURE__ */ new Map(), e.cleanupCache = /* @__PURE__ */ new Map();
    let t = 0;
    function n(r, o, a) {
      const i = ++t, s = () => e.listenersCache.get(r) || [], u = () => {
        const y = s();
        e.listenersCache.set(r, y.filter((g) => g.id !== i));
      }, d = () => {
        const y = s();
        if (!y.some((b) => b.id === i))
          return;
        const g = e.cleanupCache.get(r);
        y.length === 1 && g && g(), u();
      }, f = s();
      if (e.listenersCache.set(r, [
        ...f,
        { id: i, fns: o }
      ]), f.length > 0)
        return d;
      const c = {};
      for (const y in o)
        c[y] = (...g) => {
          var h, _;
          const b = s();
          if (b.length !== 0)
            for (const P of b)
              (_ = (h = P.fns)[y]) == null || _.call(h, ...g);
        };
      const m = a(c);
      return typeof m == "function" && e.cleanupCache.set(r, m), d;
    }
  }(wc)), wc;
}
var Oi = {}, Bi = {}, Hm;
function ad() {
  if (Hm) return Bi;
  Hm = 1, Object.defineProperty(Bi, "__esModule", { value: !0 }), Bi.wait = e;
  async function e(t) {
    return new Promise((n) => setTimeout(n, t));
  }
  return Bi;
}
var $m;
function to() {
  if ($m) return Oi;
  $m = 1, Object.defineProperty(Oi, "__esModule", { value: !0 }), Oi.poll = t;
  const e = ad();
  function t(n, { emitOnBegin: r, initialWaitTime: o, interval: a }) {
    let i = !0;
    const s = () => i = !1;
    return (async () => {
      let d;
      r && (d = await n({ unpoll: s }));
      const f = await (o == null ? void 0 : o(d)) ?? a;
      await (0, e.wait)(f);
      const c = async () => {
        i && (await n({ unpoll: s }), await (0, e.wait)(a), c());
      };
      c();
    })(), s;
  }
  return Oi;
}
var jn = {}, Tc = {}, Nm;
function h1() {
  return Nm || (Nm = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.responseCache = e.promiseCache = void 0, e.getCache = t, e.withCache = n, e.promiseCache = /* @__PURE__ */ new Map(), e.responseCache = /* @__PURE__ */ new Map();
    function t(r) {
      const o = (s, u) => ({
        clear: () => u.delete(s),
        get: () => u.get(s),
        set: (d) => u.set(s, d)
      }), a = o(r, e.promiseCache), i = o(r, e.responseCache);
      return {
        clear: () => {
          a.clear(), i.clear();
        },
        promise: a,
        response: i
      };
    }
    async function n(r, { cacheKey: o, cacheTime: a = Number.POSITIVE_INFINITY }) {
      const i = t(o), s = i.response.get();
      if (s && a > 0 && (/* @__PURE__ */ new Date()).getTime() - s.created.getTime() < a)
        return s.data;
      let u = i.promise.get();
      u || (u = r(), i.promise.set(u));
      try {
        const d = await u;
        return i.response.set({ created: /* @__PURE__ */ new Date(), data: d }), d;
      } finally {
        i.promise.clear();
      }
    }
  }(Tc)), Tc;
}
var zm;
function ro() {
  if (zm) return jn;
  zm = 1, Object.defineProperty(jn, "__esModule", { value: !0 }), jn.getBlockNumberCache = n, jn.getBlockNumber = r;
  const e = h1(), t = (o) => `blockNumber.${o}`;
  function n(o) {
    return (0, e.getCache)(t(o));
  }
  async function r(o, { cacheTime: a = o.cacheTime } = {}) {
    const i = await (0, e.withCache)(() => o.request({
      method: "eth_blockNumber"
    }), { cacheKey: t(o.uid), cacheTime: a });
    return BigInt(i);
  }
  return jn;
}
var Ci = {}, Dm;
function Cu() {
  if (Dm) return Ci;
  Dm = 1, Object.defineProperty(Ci, "__esModule", { value: !0 }), Ci.getFilterChanges = n;
  const e = Yn(), t = Tt();
  async function n(r, { filter: o }) {
    const a = "strict" in o && o.strict, i = await o.request({
      method: "eth_getFilterChanges",
      params: [o.id]
    });
    if (typeof i[0] == "string")
      return i;
    const s = i.map((u) => (0, t.formatLog)(u));
    return !("abi" in o) || !o.abi ? s : (0, e.parseEventLogs)({
      abi: o.abi,
      logs: s,
      strict: a
    });
  }
  return Ci;
}
var qi = {}, Lm;
function qu() {
  if (Lm) return qi;
  Lm = 1, Object.defineProperty(qi, "__esModule", { value: !0 }), qi.uninstallFilter = e;
  async function e(t, { filter: n }) {
    return n.request({
      method: "eth_uninstallFilter",
      params: [n.id]
    });
  }
  return qi;
}
var Um;
function Qh() {
  if (Um) return Ri;
  Um = 1, Object.defineProperty(Ri, "__esModule", { value: !0 }), Ri.watchContractEvent = g;
  const e = pe(), t = lr(), n = Jn(), r = dr(), o = Tt(), a = le(), i = kr(), s = to(), u = Ie(), d = $c(), f = ro(), c = td(), m = Cu(), y = qu();
  function g(b, h) {
    const { abi: _, address: P, args: j, batch: v = !0, eventName: E, fromBlock: l, onError: p, onLogs: T, poll: w, pollingInterval: I = b.pollingInterval, strict: C } = h;
    return (typeof w < "u" ? w : typeof l == "bigint" ? !0 : !(b.transport.type === "webSocket" || b.transport.type === "fallback" && b.transport.transports[0].config.type === "webSocket")) ? (() => {
      const x = C ?? !1, H = (0, u.stringify)([
        "watchContractEvent",
        P,
        j,
        v,
        b.uid,
        E,
        I,
        x,
        l
      ]);
      return (0, i.observe)(H, { onLogs: T, onError: p }, (F) => {
        let $;
        l !== void 0 && ($ = l - 1n);
        let q, S = !1;
        const R = (0, s.poll)(async () => {
          var O;
          if (!S) {
            try {
              q = await (0, a.getAction)(b, d.createContractEventFilter, "createContractEventFilter")({
                abi: _,
                address: P,
                args: j,
                eventName: E,
                strict: x,
                fromBlock: l
              });
            } catch {
            }
            S = !0;
            return;
          }
          try {
            let k;
            if (q)
              k = await (0, a.getAction)(b, m.getFilterChanges, "getFilterChanges")({ filter: q });
            else {
              const z = await (0, a.getAction)(b, f.getBlockNumber, "getBlockNumber")({});
              $ && $ < z ? k = await (0, a.getAction)(b, c.getContractEvents, "getContractEvents")({
                abi: _,
                address: P,
                args: j,
                eventName: E,
                fromBlock: $ + 1n,
                toBlock: z,
                strict: x
              }) : k = [], $ = z;
            }
            if (k.length === 0)
              return;
            if (v)
              F.onLogs(k);
            else
              for (const z of k)
                F.onLogs([z]);
          } catch (k) {
            q && k instanceof t.InvalidInputRpcError && (S = !1), (O = F.onError) == null || O.call(F, k);
          }
        }, {
          emitOnBegin: !0,
          interval: I
        });
        return async () => {
          q && await (0, a.getAction)(b, y.uninstallFilter, "uninstallFilter")({ filter: q }), R();
        };
      });
    })() : (() => {
      const x = C ?? !1, H = (0, u.stringify)([
        "watchContractEvent",
        P,
        j,
        v,
        b.uid,
        E,
        I,
        x
      ]);
      let F = !0, $ = () => F = !1;
      return (0, i.observe)(H, { onLogs: T, onError: p }, (q) => ((async () => {
        try {
          const S = (() => {
            if (b.transport.type === "fallback") {
              const k = b.transport.transports.find((z) => z.config.type === "webSocket");
              return k ? k.value : b.transport;
            }
            return b.transport;
          })(), R = E ? (0, r.encodeEventTopics)({
            abi: _,
            eventName: E,
            args: j
          }) : [], { unsubscribe: O } = await S.subscribe({
            params: ["logs", { address: P, topics: R }],
            onData(k) {
              var L;
              if (!F)
                return;
              const z = k.result;
              try {
                const { eventName: U, args: G } = (0, n.decodeEventLog)({
                  abi: _,
                  data: z.data,
                  topics: z.topics,
                  strict: C
                }), V = (0, o.formatLog)(z, {
                  args: G,
                  eventName: U
                });
                q.onLogs([V]);
              } catch (U) {
                let G, V;
                if (U instanceof e.DecodeLogDataMismatch || U instanceof e.DecodeLogTopicsMismatch) {
                  if (C)
                    return;
                  G = U.abiItem.name, V = (L = U.abiItem.inputs) == null ? void 0 : L.some((ee) => !("name" in ee && ee.name));
                }
                const K = (0, o.formatLog)(z, {
                  args: V ? [] : {},
                  eventName: G
                });
                q.onLogs([K]);
              }
            },
            onError(k) {
              var z;
              (z = q.onError) == null || z.call(q, k);
            }
          });
          $ = O, F || $();
        } catch (S) {
          p == null || p(S);
        }
      })(), () => $()));
    })();
  }
  return Ri;
}
var Mi = {}, Qt = {}, Gm;
function no() {
  if (Gm) return Qt;
  Gm = 1, Object.defineProperty(Qt, "__esModule", { value: !0 }), Qt.AccountTypeNotSupportedError = Qt.AccountNotFoundError = void 0;
  const e = ie();
  class t extends e.BaseError {
    constructor({ docsPath: o } = {}) {
      super([
        "Could not find an Account to execute with this Action.",
        "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client."
      ].join(`
`), {
        docsPath: o,
        docsSlug: "account",
        name: "AccountNotFoundError"
      });
    }
  }
  Qt.AccountNotFoundError = t;
  class n extends e.BaseError {
    constructor({ docsPath: o, metaMessages: a, type: i }) {
      super(`Account type "${i}" is not supported.`, {
        docsPath: o,
        metaMessages: a,
        name: "AccountTypeNotSupportedError"
      });
    }
  }
  return Qt.AccountTypeNotSupportedError = n, Qt;
}
var xi = {}, Fi = {}, Vm;
function Mu() {
  if (Vm) return Fi;
  Vm = 1, Object.defineProperty(Fi, "__esModule", { value: !0 }), Fi.assertCurrentChain = t;
  const e = Xn();
  function t({ chain: n, currentChainId: r }) {
    if (!n)
      throw new e.ChainNotFoundError();
    if (r !== n.id)
      throw new e.ChainMismatchError({ chain: n, currentChainId: r });
  }
  return Fi;
}
var ki = {}, Wm;
function e0() {
  if (Wm) return ki;
  Wm = 1, Object.defineProperty(ki, "__esModule", { value: !0 }), ki.getTransactionError = r;
  const e = Et(), t = De(), n = Vn();
  function r(o, { docsPath: a, ...i }) {
    const s = (() => {
      const u = (0, n.getNodeError)(o, i);
      return u instanceof e.UnknownNodeError ? o : u;
    })();
    return new t.TransactionExecutionError(s, {
      docsPath: a,
      ...i
    });
  }
  return ki;
}
var Hi = {}, Km;
function sd() {
  if (Km) return Hi;
  Km = 1, Object.defineProperty(Hi, "__esModule", { value: !0 }), Hi.sendRawTransaction = e;
  async function e(t, { serializedTransaction: n }) {
    return t.request({
      method: "eth_sendRawTransaction",
      params: [n]
    }, { retryCount: 0 });
  }
  return Hi;
}
var Zm;
function ud() {
  if (Zm) return xi;
  Zm = 1, Object.defineProperty(xi, "__esModule", { value: !0 }), xi.sendTransaction = b;
  const e = Se(), t = no(), n = ie(), r = zh(), o = Mu(), a = e0(), i = xr(), s = jt(), u = le(), d = Nn(), f = Pt(), c = Zn(), m = Bu(), y = sd(), g = new d.LruMap(128);
  async function b(h, _) {
    var F, $, q, S;
    const { account: P = h.account, chain: j = h.chain, accessList: v, authorizationList: E, blobs: l, data: p, gas: T, gasPrice: w, maxFeePerBlobGas: I, maxFeePerGas: C, maxPriorityFeePerGas: B, nonce: M, value: A, ...x } = _;
    if (typeof P > "u")
      throw new t.AccountNotFoundError({
        docsPath: "/docs/actions/wallet/sendTransaction"
      });
    const H = P ? (0, e.parseAccount)(P) : null;
    try {
      (0, f.assertRequest)(_);
      const R = await (async () => {
        if (_.to)
          return _.to;
        if (E && E.length > 0)
          return await (0, r.recoverAuthorizationAddress)({
            authorization: E[0]
          }).catch(() => {
            throw new n.BaseError("`to` is required. Could not infer from `authorizationList`.");
          });
      })();
      if ((H == null ? void 0 : H.type) === "json-rpc" || H === null) {
        let O;
        j !== null && (O = await (0, u.getAction)(h, c.getChainId, "getChainId")({}), (0, o.assertCurrentChain)({
          currentChainId: O,
          chain: j
        }));
        const k = (q = ($ = (F = h.chain) == null ? void 0 : F.formatters) == null ? void 0 : $.transactionRequest) == null ? void 0 : q.format, L = (k || s.formatTransactionRequest)({
          ...(0, i.extract)(x, { format: k }),
          accessList: v,
          authorizationList: E,
          blobs: l,
          chainId: O,
          data: p,
          from: H == null ? void 0 : H.address,
          gas: T,
          gasPrice: w,
          maxFeePerBlobGas: I,
          maxFeePerGas: C,
          maxPriorityFeePerGas: B,
          nonce: M,
          to: R,
          value: A
        }), U = g.get(h.uid), G = U ? "wallet_sendTransaction" : "eth_sendTransaction";
        try {
          return await h.request({
            method: G,
            params: [L]
          }, { retryCount: 0 });
        } catch (V) {
          if (U === !1)
            throw V;
          const K = V;
          if (K.name === "InvalidInputRpcError" || K.name === "InvalidParamsRpcError" || K.name === "MethodNotFoundRpcError" || K.name === "MethodNotSupportedRpcError")
            return await h.request({
              method: "wallet_sendTransaction",
              params: [L]
            }, { retryCount: 0 }).then((ee) => (g.set(h.uid, !0), ee)).catch((ee) => {
              const X = ee;
              throw X.name === "MethodNotFoundRpcError" || X.name === "MethodNotSupportedRpcError" ? (g.set(h.uid, !1), K) : X;
            });
          throw K;
        }
      }
      if ((H == null ? void 0 : H.type) === "local") {
        const O = await (0, u.getAction)(h, m.prepareTransactionRequest, "prepareTransactionRequest")({
          account: H,
          accessList: v,
          authorizationList: E,
          blobs: l,
          chain: j,
          data: p,
          gas: T,
          gasPrice: w,
          maxFeePerBlobGas: I,
          maxFeePerGas: C,
          maxPriorityFeePerGas: B,
          nonce: M,
          nonceManager: H.nonceManager,
          parameters: [...m.defaultParameters, "sidecars"],
          value: A,
          ...x,
          to: R
        }), k = (S = j == null ? void 0 : j.serializers) == null ? void 0 : S.transaction, z = await H.signTransaction(O, {
          serializer: k
        });
        return await (0, u.getAction)(h, y.sendRawTransaction, "sendRawTransaction")({
          serializedTransaction: z
        });
      }
      throw (H == null ? void 0 : H.type) === "smart" ? new t.AccountTypeNotSupportedError({
        metaMessages: [
          "Consider using the `sendUserOperation` Action instead."
        ],
        docsPath: "/docs/actions/bundler/sendUserOperation",
        type: "smart"
      }) : new t.AccountTypeNotSupportedError({
        docsPath: "/docs/actions/wallet/sendTransaction",
        type: H == null ? void 0 : H.type
      });
    } catch (R) {
      throw R instanceof t.AccountTypeNotSupportedError ? R : (0, a.getTransactionError)(R, {
        ..._,
        account: H,
        chain: _.chain || void 0
      });
    }
  }
  return xi;
}
var Jm;
function t0() {
  if (Jm) return Mi;
  Jm = 1, Object.defineProperty(Mi, "__esModule", { value: !0 }), Mi.writeContract = i;
  const e = Se(), t = no(), n = Xe(), r = zt(), o = le(), a = ud();
  async function i(s, u) {
    const { abi: d, account: f = s.account, address: c, args: m, dataSuffix: y, functionName: g, ...b } = u;
    if (typeof f > "u")
      throw new t.AccountNotFoundError({
        docsPath: "/docs/contract/writeContract"
      });
    const h = f ? (0, e.parseAccount)(f) : null, _ = (0, n.encodeFunctionData)({
      abi: d,
      args: m,
      functionName: g
    });
    try {
      return await (0, o.getAction)(s, a.sendTransaction, "sendTransaction")({
        data: `${_}${y ? y.replace("0x", "") : ""}`,
        to: c,
        account: h,
        ...b
      });
    } catch (P) {
      throw (0, r.getContractError)(P, {
        abi: d,
        address: c,
        args: m,
        docsPath: "/docs/contract/writeContract",
        functionName: g,
        sender: h == null ? void 0 : h.address
      });
    }
  }
  return Mi;
}
var Ym;
function p1() {
  if (Ym) return yr;
  Ym = 1, Object.defineProperty(yr, "__esModule", { value: !0 }), yr.getContract = u, yr.getFunctionParameters = d, yr.getEventParameters = f;
  const e = le(), t = $c(), n = Jh(), r = td(), o = St(), a = Xh(), i = Qh(), s = t0();
  function u({ abi: c, address: m, client: y }) {
    const g = y, [b, h] = g ? "public" in g && "wallet" in g ? [g.public, g.wallet] : "public" in g ? [g.public, void 0] : "wallet" in g ? [void 0, g.wallet] : [g, g] : [void 0, void 0], _ = b != null, P = h != null, j = {};
    let v = !1, E = !1, l = !1;
    for (const p of c)
      if (p.type === "function" ? p.stateMutability === "view" || p.stateMutability === "pure" ? v = !0 : E = !0 : p.type === "event" && (l = !0), v && E && l)
        break;
    return _ && (v && (j.read = new Proxy({}, {
      get(p, T) {
        return (...w) => {
          const { args: I, options: C } = d(w);
          return (0, e.getAction)(b, o.readContract, "readContract")({
            abi: c,
            address: m,
            functionName: T,
            args: I,
            ...C
          });
        };
      }
    })), E && (j.simulate = new Proxy({}, {
      get(p, T) {
        return (...w) => {
          const { args: I, options: C } = d(w);
          return (0, e.getAction)(b, a.simulateContract, "simulateContract")({
            abi: c,
            address: m,
            functionName: T,
            args: I,
            ...C
          });
        };
      }
    })), l && (j.createEventFilter = new Proxy({}, {
      get(p, T) {
        return (...w) => {
          const I = c.find((M) => M.type === "event" && M.name === T), { args: C, options: B } = f(w, I);
          return (0, e.getAction)(b, t.createContractEventFilter, "createContractEventFilter")({
            abi: c,
            address: m,
            eventName: T,
            args: C,
            ...B
          });
        };
      }
    }), j.getEvents = new Proxy({}, {
      get(p, T) {
        return (...w) => {
          const I = c.find((M) => M.type === "event" && M.name === T), { args: C, options: B } = f(w, I);
          return (0, e.getAction)(b, r.getContractEvents, "getContractEvents")({
            abi: c,
            address: m,
            eventName: T,
            args: C,
            ...B
          });
        };
      }
    }), j.watchEvent = new Proxy({}, {
      get(p, T) {
        return (...w) => {
          const I = c.find((M) => M.type === "event" && M.name === T), { args: C, options: B } = f(w, I);
          return (0, e.getAction)(b, i.watchContractEvent, "watchContractEvent")({
            abi: c,
            address: m,
            eventName: T,
            args: C,
            ...B
          });
        };
      }
    }))), P && E && (j.write = new Proxy({}, {
      get(p, T) {
        return (...w) => {
          const { args: I, options: C } = d(w);
          return (0, e.getAction)(h, s.writeContract, "writeContract")({
            abi: c,
            address: m,
            functionName: T,
            args: I,
            ...C
          });
        };
      }
    })), (_ || P) && E && (j.estimateGas = new Proxy({}, {
      get(p, T) {
        return (...w) => {
          const { args: I, options: C } = d(w), B = b ?? h;
          return (0, e.getAction)(B, n.estimateContractGas, "estimateContractGas")({
            abi: c,
            address: m,
            functionName: T,
            args: I,
            ...C,
            account: C.account ?? h.account
          });
        };
      }
    })), j.address = m, j.abi = c, j;
  }
  function d(c) {
    const m = c.length && Array.isArray(c[0]), y = m ? c[0] : [], g = (m ? c[1] : c[0]) ?? {};
    return { args: y, options: g };
  }
  function f(c, m) {
    let y = !1;
    Array.isArray(c[0]) ? y = !0 : c.length === 1 ? y = m.inputs.some((h) => h.indexed) : c.length === 2 && (y = !0);
    const g = y ? c[0] : void 0, b = (y ? c[1] : c[0]) ?? {};
    return { args: g, options: b };
  }
  return yr;
}
var Pn = {}, $i = {}, Xm;
function r0() {
  if (Xm) return $i;
  Xm = 1, Object.defineProperty($i, "__esModule", { value: !0 }), $i.uid = r;
  const e = 256;
  let t = e, n;
  function r(o = 11) {
    if (!n || t + o > e * 2) {
      n = "", t = 0;
      for (let a = 0; a < e; a++)
        n += (256 + Math.random() * 256 | 0).toString(16).substring(1);
    }
    return n.substring(t, t++ + o);
  }
  return $i;
}
var Qm;
function xu() {
  if (Qm) return Pn;
  Qm = 1, Object.defineProperty(Pn, "__esModule", { value: !0 }), Pn.createClient = n, Pn.rpcSchema = r;
  const e = Se(), t = r0();
  function n(o) {
    const { batch: a, cacheTime: i = o.pollingInterval ?? 4e3, ccipRead: s, key: u = "base", name: d = "Base Client", pollingInterval: f = 4e3, type: c = "base" } = o, m = o.chain, y = o.account ? (0, e.parseAccount)(o.account) : void 0, { config: g, request: b, value: h } = o.transport({
      chain: m,
      pollingInterval: f
    }), _ = { ...g, ...h }, P = {
      account: y,
      batch: a,
      cacheTime: i,
      ccipRead: s,
      chain: m,
      key: u,
      name: d,
      pollingInterval: f,
      request: b,
      transport: _,
      type: c,
      uid: (0, t.uid)()
    };
    function j(v) {
      return (E) => {
        const l = E(v);
        for (const T in P)
          delete l[T];
        const p = { ...v, ...l };
        return Object.assign(p, { extend: j(p) });
      };
    }
    return Object.assign(P, { extend: j(P) });
  }
  function r() {
    return null;
  }
  return Pn;
}
var Ni = {}, zi = {}, wn = {}, Ac = {}, eb;
function _1() {
  return eb || (eb = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.promiseCache = void 0, e.withDedupe = n;
    const t = Nn();
    e.promiseCache = new t.LruMap(8192);
    function n(r, { enabled: o = !0, id: a }) {
      if (!o || !a)
        return r();
      if (e.promiseCache.get(a))
        return e.promiseCache.get(a);
      const i = r().finally(() => e.promiseCache.delete(a));
      return e.promiseCache.set(a, i), i;
    }
  }(Ac)), Ac;
}
var Di = {}, tb;
function cd() {
  if (tb) return Di;
  tb = 1, Object.defineProperty(Di, "__esModule", { value: !0 }), Di.withRetry = t;
  const e = ad();
  function t(n, { delay: r = 100, retryCount: o = 2, shouldRetry: a = () => !0 } = {}) {
    return new Promise((i, s) => {
      const u = async ({ count: d = 0 } = {}) => {
        const f = async ({ error: c }) => {
          const m = typeof r == "function" ? r({ count: d, error: c }) : r;
          m && await (0, e.wait)(m), u({ count: d + 1 });
        };
        try {
          const c = await n();
          i(c);
        } catch (c) {
          if (d < o && await a({ count: d, error: c }))
            return f({ error: c });
          s(c);
        }
      };
      u();
    });
  }
  return Di;
}
var rb;
function n0() {
  if (rb) return wn;
  rb = 1, Object.defineProperty(wn, "__esModule", { value: !0 }), wn.buildRequest = s, wn.shouldRetry = u;
  const e = ie(), t = Qe(), n = lr(), r = Y(), o = _1(), a = cd(), i = Ie();
  function s(d, f = {}) {
    return async (c, m = {}) => {
      var v;
      const { dedupe: y = !1, methods: g, retryDelay: b = 150, retryCount: h = 3, uid: _ } = {
        ...f,
        ...m
      }, { method: P } = c;
      if ((v = g == null ? void 0 : g.exclude) != null && v.includes(P))
        throw new n.MethodNotSupportedRpcError(new Error("method not supported"), {
          method: P
        });
      if (g != null && g.include && !g.include.includes(P))
        throw new n.MethodNotSupportedRpcError(new Error("method not supported"), {
          method: P
        });
      const j = y ? (0, r.stringToHex)(`${_}.${(0, i.stringify)(c)}`) : void 0;
      return (0, o.withDedupe)(() => (0, a.withRetry)(async () => {
        try {
          return await d(c);
        } catch (E) {
          const l = E;
          switch (l.code) {
            case n.ParseRpcError.code:
              throw new n.ParseRpcError(l);
            case n.InvalidRequestRpcError.code:
              throw new n.InvalidRequestRpcError(l);
            case n.MethodNotFoundRpcError.code:
              throw new n.MethodNotFoundRpcError(l, { method: c.method });
            case n.InvalidParamsRpcError.code:
              throw new n.InvalidParamsRpcError(l);
            case n.InternalRpcError.code:
              throw new n.InternalRpcError(l);
            case n.InvalidInputRpcError.code:
              throw new n.InvalidInputRpcError(l);
            case n.ResourceNotFoundRpcError.code:
              throw new n.ResourceNotFoundRpcError(l);
            case n.ResourceUnavailableRpcError.code:
              throw new n.ResourceUnavailableRpcError(l);
            case n.TransactionRejectedRpcError.code:
              throw new n.TransactionRejectedRpcError(l);
            case n.MethodNotSupportedRpcError.code:
              throw new n.MethodNotSupportedRpcError(l, {
                method: c.method
              });
            case n.LimitExceededRpcError.code:
              throw new n.LimitExceededRpcError(l);
            case n.JsonRpcVersionUnsupportedError.code:
              throw new n.JsonRpcVersionUnsupportedError(l);
            case n.UserRejectedRequestError.code:
              throw new n.UserRejectedRequestError(l);
            case n.UnauthorizedProviderError.code:
              throw new n.UnauthorizedProviderError(l);
            case n.UnsupportedProviderMethodError.code:
              throw new n.UnsupportedProviderMethodError(l);
            case n.ProviderDisconnectedError.code:
              throw new n.ProviderDisconnectedError(l);
            case n.ChainDisconnectedError.code:
              throw new n.ChainDisconnectedError(l);
            case n.SwitchChainError.code:
              throw new n.SwitchChainError(l);
            case 5e3:
              throw new n.UserRejectedRequestError(l);
            default:
              throw E instanceof e.BaseError ? E : new n.UnknownRpcError(l);
          }
        }
      }, {
        delay: ({ count: E, error: l }) => {
          var p;
          if (l && l instanceof t.HttpRequestError) {
            const T = (p = l == null ? void 0 : l.headers) == null ? void 0 : p.get("Retry-After");
            if (T != null && T.match(/\d/))
              return Number.parseInt(T) * 1e3;
          }
          return ~~(1 << E) * b;
        },
        retryCount: h,
        shouldRetry: ({ error: E }) => u(E)
      }), { enabled: y, id: j });
    };
  }
  function u(d) {
    return "code" in d && typeof d.code == "number" ? d.code === -1 || d.code === n.LimitExceededRpcError.code || d.code === n.InternalRpcError.code : d instanceof t.HttpRequestError && d.status ? d.status === 403 || d.status === 408 || d.status === 413 || d.status === 429 || d.status === 500 || d.status === 502 || d.status === 503 || d.status === 504 : !0;
  }
  return wn;
}
var nb;
function oo() {
  if (nb) return zi;
  nb = 1, Object.defineProperty(zi, "__esModule", { value: !0 }), zi.createTransport = n;
  const e = n0(), t = r0();
  function n({ key: r, methods: o, name: a, request: i, retryCount: s = 3, retryDelay: u = 150, timeout: d, type: f }, c) {
    const m = (0, t.uid)();
    return {
      config: {
        key: r,
        name: a,
        request: i,
        retryCount: s,
        retryDelay: u,
        timeout: d,
        type: f
      },
      request: (0, e.buildRequest)(i, { methods: o, retryCount: s, retryDelay: u, uid: m }),
      value: c
    };
  }
  return zi;
}
var ob;
function v1() {
  if (ob) return Ni;
  ob = 1, Object.defineProperty(Ni, "__esModule", { value: !0 }), Ni.custom = t;
  const e = oo();
  function t(n, r = {}) {
    const { key: o = "custom", methods: a, name: i = "Custom Provider", retryDelay: s } = r;
    return ({ retryCount: u }) => (0, e.createTransport)({
      key: o,
      methods: a,
      name: i,
      request: n.request.bind(n),
      retryCount: r.retryCount ?? u,
      retryDelay: s,
      type: "custom"
    });
  }
  return Ni;
}
var Tn = {}, ib;
function E1() {
  if (ib) return Tn;
  ib = 1, Object.defineProperty(Tn, "__esModule", { value: !0 }), Tn.fallback = o, Tn.rankTransports = i;
  const e = Et(), t = lr(), n = ad(), r = oo();
  function o(s, u = {}) {
    const { key: d = "fallback", name: f = "Fallback", rank: c = !1, retryCount: m, retryDelay: y } = u;
    return ({ chain: g, pollingInterval: b = 4e3, timeout: h, ..._ }) => {
      let P = s, j = () => {
      };
      const v = (0, r.createTransport)({
        key: d,
        name: f,
        async request({ method: E, params: l }) {
          const p = async (T = 0) => {
            const w = P[T]({
              ..._,
              chain: g,
              retryCount: 0,
              timeout: h
            });
            try {
              const I = await w.request({
                method: E,
                params: l
              });
              return j({
                method: E,
                params: l,
                response: I,
                transport: w,
                status: "success"
              }), I;
            } catch (I) {
              if (j({
                error: I,
                method: E,
                params: l,
                transport: w,
                status: "error"
              }), a(I) || T === P.length - 1)
                throw I;
              return p(T + 1);
            }
          };
          return p();
        },
        retryCount: m,
        retryDelay: y,
        type: "fallback"
      }, {
        onResponse: (E) => j = E,
        transports: P.map((E) => E({ chain: g, retryCount: 0 }))
      });
      if (c) {
        const E = typeof c == "object" ? c : {};
        i({
          chain: g,
          interval: E.interval ?? b,
          onTransports: (l) => P = l,
          ping: E.ping,
          sampleCount: E.sampleCount,
          timeout: E.timeout,
          transports: P,
          weights: E.weights
        });
      }
      return v;
    };
  }
  function a(s) {
    return !!("code" in s && typeof s.code == "number" && (s.code === t.TransactionRejectedRpcError.code || s.code === t.UserRejectedRequestError.code || e.ExecutionRevertedError.nodeMessage.test(s.message) || s.code === 5e3));
  }
  function i({ chain: s, interval: u = 4e3, onTransports: d, ping: f, sampleCount: c = 10, timeout: m = 1e3, transports: y, weights: g = {} }) {
    const { stability: b = 0.7, latency: h = 0.3 } = g, _ = [], P = async () => {
      const j = await Promise.all(y.map(async (l) => {
        const p = l({ chain: s, retryCount: 0, timeout: m }), T = Date.now();
        let w, I;
        try {
          await (f ? f({ transport: p }) : p.request({ method: "net_listening" })), I = 1;
        } catch {
          I = 0;
        } finally {
          w = Date.now();
        }
        return { latency: w - T, success: I };
      }));
      _.push(j), _.length > c && _.shift();
      const v = Math.max(..._.map((l) => Math.max(...l.map(({ latency: p }) => p)))), E = y.map((l, p) => {
        const T = _.map((M) => M[p].latency), I = 1 - T.reduce((M, A) => M + A, 0) / T.length / v, C = _.map((M) => M[p].success), B = C.reduce((M, A) => M + A, 0) / C.length;
        return B === 0 ? [0, p] : [
          h * I + b * B,
          p
        ];
      }).sort((l, p) => p[0] - l[0]);
      d(E.map(([, l]) => y[l])), await (0, n.wait)(u), P();
    };
    P();
  }
  return Tn;
}
var Li = {}, An = {}, ab;
function dd() {
  if (ab) return An;
  ab = 1, Object.defineProperty(An, "__esModule", { value: !0 }), An.UrlRequiredError = void 0;
  const e = ie();
  class t extends e.BaseError {
    constructor() {
      super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
        docsPath: "/docs/clients/intro",
        name: "UrlRequiredError"
      });
    }
  }
  return An.UrlRequiredError = t, An;
}
var Ui = {}, Gi = {}, sb;
function fd() {
  if (sb) return Gi;
  sb = 1, Object.defineProperty(Gi, "__esModule", { value: !0 }), Gi.withTimeout = e;
  function e(t, { errorInstance: n = new Error("timed out"), timeout: r, signal: o }) {
    return new Promise((a, i) => {
      (async () => {
        let s;
        try {
          const u = new AbortController();
          r > 0 && (s = setTimeout(() => {
            o ? u.abort() : i(n);
          }, r)), a(await t({ signal: (u == null ? void 0 : u.signal) || null }));
        } catch (u) {
          (u == null ? void 0 : u.name) === "AbortError" && i(n), i(u);
        } finally {
          clearTimeout(s);
        }
      })();
    });
  }
  return Gi;
}
var Sn = {}, ub;
function o0() {
  if (ub) return Sn;
  ub = 1, Object.defineProperty(Sn, "__esModule", { value: !0 }), Sn.idCache = void 0;
  function e() {
    return {
      current: 0,
      take() {
        return this.current++;
      },
      reset() {
        this.current = 0;
      }
    };
  }
  return Sn.idCache = e(), Sn;
}
var cb;
function ld() {
  if (cb) return Ui;
  cb = 1, Object.defineProperty(Ui, "__esModule", { value: !0 }), Ui.getHttpRpcClient = o;
  const e = Qe(), t = fd(), n = Ie(), r = o0();
  function o(a, i = {}) {
    return {
      async request(s) {
        var h;
        const { body: u, onRequest: d = i.onRequest, onResponse: f = i.onResponse, timeout: c = i.timeout ?? 1e4 } = s, m = {
          ...i.fetchOptions ?? {},
          ...s.fetchOptions ?? {}
        }, { headers: y, method: g, signal: b } = m;
        try {
          const _ = await (0, t.withTimeout)(async ({ signal: j }) => {
            const v = {
              ...m,
              body: Array.isArray(u) ? (0, n.stringify)(u.map((T) => ({
                jsonrpc: "2.0",
                id: T.id ?? r.idCache.take(),
                ...T
              }))) : (0, n.stringify)({
                jsonrpc: "2.0",
                id: u.id ?? r.idCache.take(),
                ...u
              }),
              headers: {
                "Content-Type": "application/json",
                ...y
              },
              method: g || "POST",
              signal: b || (c > 0 ? j : null)
            }, E = new Request(a, v), l = await (d == null ? void 0 : d(E, v)) ?? { ...v, url: a };
            return await fetch(l.url ?? a, l);
          }, {
            errorInstance: new e.TimeoutError({ body: u, url: a }),
            timeout: c,
            signal: !0
          });
          f && await f(_);
          let P;
          if ((h = _.headers.get("Content-Type")) != null && h.startsWith("application/json"))
            P = await _.json();
          else {
            P = await _.text();
            try {
              P = JSON.parse(P || "{}");
            } catch (j) {
              if (_.ok)
                throw j;
              P = { error: P };
            }
          }
          if (!_.ok)
            throw new e.HttpRequestError({
              body: u,
              details: (0, n.stringify)(P.error) || _.statusText,
              headers: _.headers,
              status: _.status,
              url: a
            });
          return P;
        } catch (_) {
          throw _ instanceof e.HttpRequestError || _ instanceof e.TimeoutError ? _ : new e.HttpRequestError({
            body: u,
            cause: _,
            url: a
          });
        }
      }
    };
  }
  return Ui;
}
var db;
function j1() {
  if (db) return Li;
  db = 1, Object.defineProperty(Li, "__esModule", { value: !0 }), Li.http = a;
  const e = Qe(), t = dd(), n = od(), r = ld(), o = oo();
  function a(i, s = {}) {
    const { batch: u, fetchOptions: d, key: f = "http", methods: c, name: m = "HTTP JSON-RPC", onFetchRequest: y, onFetchResponse: g, retryDelay: b } = s;
    return ({ chain: h, retryCount: _, timeout: P }) => {
      const { batchSize: j = 1e3, wait: v = 0 } = typeof u == "object" ? u : {}, E = s.retryCount ?? _, l = P ?? s.timeout ?? 1e4, p = i || (h == null ? void 0 : h.rpcUrls.default.http[0]);
      if (!p)
        throw new t.UrlRequiredError();
      const T = (0, r.getHttpRpcClient)(p, {
        fetchOptions: d,
        onRequest: y,
        onResponse: g,
        timeout: l
      });
      return (0, o.createTransport)({
        key: f,
        methods: c,
        name: m,
        async request({ method: w, params: I }) {
          const C = { method: w, params: I }, { schedule: B } = (0, n.createBatchScheduler)({
            id: p,
            wait: v,
            shouldSplitBatch(H) {
              return H.length > j;
            },
            fn: (H) => T.request({
              body: H
            }),
            sort: (H, F) => H.id - F.id
          }), M = async (H) => u ? B(H) : [
            await T.request({
              body: H
            })
          ], [{ error: A, result: x }] = await M(C);
          if (A)
            throw new e.RpcRequestError({
              body: C,
              error: A,
              url: p
            });
          return x;
        },
        retryCount: E,
        retryDelay: b,
        timeout: l,
        type: "http"
      }, {
        fetchOptions: d,
        url: p
      });
    };
  }
  return Li;
}
var Vi = {}, Wi = {}, Ki = {}, Zi = {}, fb;
function md() {
  if (fb) return Zi;
  fb = 1, Object.defineProperty(Zi, "__esModule", { value: !0 }), Zi.isNullUniversalResolverError = r;
  const e = Nc(), t = ie(), n = Nt();
  function r(o, a) {
    var s, u, d, f, c, m;
    if (!(o instanceof t.BaseError))
      return !1;
    const i = o.walk((y) => y instanceof n.ContractFunctionRevertedError);
    return i instanceof n.ContractFunctionRevertedError ? !!(((s = i.data) == null ? void 0 : s.errorName) === "ResolverNotFound" || ((u = i.data) == null ? void 0 : u.errorName) === "ResolverWildcardNotSupported" || ((d = i.data) == null ? void 0 : d.errorName) === "ResolverNotContract" || ((f = i.data) == null ? void 0 : f.errorName) === "ResolverError" || ((c = i.data) == null ? void 0 : c.errorName) === "HttpError" || (m = i.reason) != null && m.includes("Wildcard on non-extended resolvers is not supported") || a === "reverse" && i.reason === e.panicReasons[50]) : !1;
  }
  return Zi;
}
var Ji = {}, Yi = {}, lb;
function i0() {
  if (lb) return Yi;
  lb = 1, Object.defineProperty(Yi, "__esModule", { value: !0 }), Yi.encodedLabelToLabelhash = t;
  const e = Oe();
  function t(n) {
    if (n.length !== 66 || n.indexOf("[") !== 0 || n.indexOf("]") !== 65)
      return null;
    const r = `0x${n.slice(1, 65)}`;
    return (0, e.isHex)(r) ? r : null;
  }
  return Yi;
}
var mb;
function bd() {
  if (mb) return Ji;
  mb = 1, Object.defineProperty(Ji, "__esModule", { value: !0 }), Ji.namehash = a;
  const e = Be(), t = be(), n = Y(), r = Me(), o = i0();
  function a(i) {
    let s = new Uint8Array(32).fill(0);
    if (!i)
      return (0, n.bytesToHex)(s);
    const u = i.split(".");
    for (let d = u.length - 1; d >= 0; d -= 1) {
      const f = (0, o.encodedLabelToLabelhash)(u[d]), c = f ? (0, t.toBytes)(f) : (0, r.keccak256)((0, t.stringToBytes)(u[d]), "bytes");
      s = (0, r.keccak256)((0, e.concat)([s, c]), "bytes");
    }
    return (0, n.bytesToHex)(s);
  }
  return Ji;
}
var Xi = {}, Qi = {}, bb;
function P1() {
  if (bb) return Qi;
  bb = 1, Object.defineProperty(Qi, "__esModule", { value: !0 }), Qi.encodeLabelhash = e;
  function e(t) {
    return `[${t.slice(2)}]`;
  }
  return Qi;
}
var ea = {}, gb;
function a0() {
  if (gb) return ea;
  gb = 1, Object.defineProperty(ea, "__esModule", { value: !0 }), ea.labelhash = o;
  const e = be(), t = Y(), n = Me(), r = i0();
  function o(a) {
    const i = new Uint8Array(32).fill(0);
    return a ? (0, r.encodedLabelToLabelhash)(a) || (0, n.keccak256)((0, e.stringToBytes)(a)) : (0, t.bytesToHex)(i);
  }
  return ea;
}
var yb;
function Fu() {
  if (yb) return Xi;
  yb = 1, Object.defineProperty(Xi, "__esModule", { value: !0 }), Xi.packetToBytes = r;
  const e = be(), t = P1(), n = a0();
  function r(o) {
    const a = o.replace(/^\.|\.$/gm, "");
    if (a.length === 0)
      return new Uint8Array(1);
    const i = new Uint8Array((0, e.stringToBytes)(a).byteLength + 2);
    let s = 0;
    const u = a.split(".");
    for (let d = 0; d < u.length; d++) {
      let f = (0, e.stringToBytes)(u[d]);
      f.byteLength > 255 && (f = (0, e.stringToBytes)((0, t.encodeLabelhash)((0, n.labelhash)(u[d])))), i[s] = f.length, i.set(f, s + 1), s += f.length + 1;
    }
    return i.byteLength !== s + 1 ? i.slice(0, s + 1) : i;
  }
  return Xi;
}
var hb;
function w1() {
  if (hb) return Ki;
  hb = 1, Object.defineProperty(Ki, "__esModule", { value: !0 }), Ki.getEnsAddress = c;
  const e = mr(), t = At(), n = Xe(), r = Lt(), o = Ht(), a = Y(), i = md(), s = bd(), u = Fu(), d = le(), f = St();
  async function c(m, { blockNumber: y, blockTag: g, coinType: b, name: h, gatewayUrls: _, strict: P, universalResolverAddress: j }) {
    let v = j;
    if (!v) {
      if (!m.chain)
        throw new Error("client chain not configured. universalResolverAddress is required.");
      v = (0, r.getChainContractAddress)({
        blockNumber: y,
        chain: m.chain,
        contract: "ensUniversalResolver"
      });
    }
    try {
      const E = (0, n.encodeFunctionData)({
        abi: e.addressResolverAbi,
        functionName: "addr",
        ...b != null ? { args: [(0, s.namehash)(h), BigInt(b)] } : { args: [(0, s.namehash)(h)] }
      }), l = {
        address: v,
        abi: e.universalResolverResolveAbi,
        functionName: "resolve",
        args: [(0, a.toHex)((0, u.packetToBytes)(h)), E],
        blockNumber: y,
        blockTag: g
      }, p = (0, d.getAction)(m, f.readContract, "readContract"), T = _ ? await p({
        ...l,
        args: [...l.args, _]
      }) : await p(l);
      if (T[0] === "0x")
        return null;
      const w = (0, t.decodeFunctionResult)({
        abi: e.addressResolverAbi,
        args: b != null ? [(0, s.namehash)(h), BigInt(b)] : void 0,
        functionName: "addr",
        data: T[0]
      });
      return w === "0x" || (0, o.trim)(w) === "0x00" ? null : w;
    } catch (E) {
      if (P)
        throw E;
      if ((0, i.isNullUniversalResolverError)(E, "resolve"))
        return null;
      throw E;
    }
  }
  return Ki;
}
var ta = {}, ra = {}, We = {}, Ke = {}, pb;
function s0() {
  if (pb) return Ke;
  pb = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.EnsAvatarUnsupportedNamespaceError = Ke.EnsAvatarUriResolutionError = Ke.EnsAvatarInvalidNftUriError = Ke.EnsAvatarInvalidMetadataError = void 0;
  const e = ie();
  class t extends e.BaseError {
    constructor({ data: i }) {
      super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
        metaMessages: [
          "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
          "",
          `Provided data: ${JSON.stringify(i)}`
        ],
        name: "EnsAvatarInvalidMetadataError"
      });
    }
  }
  Ke.EnsAvatarInvalidMetadataError = t;
  class n extends e.BaseError {
    constructor({ reason: i }) {
      super(`ENS NFT avatar URI is invalid. ${i}`, {
        name: "EnsAvatarInvalidNftUriError"
      });
    }
  }
  Ke.EnsAvatarInvalidNftUriError = n;
  class r extends e.BaseError {
    constructor({ uri: i }) {
      super(`Unable to resolve ENS avatar URI "${i}". The URI may be malformed, invalid, or does not respond with a valid image.`, { name: "EnsAvatarUriResolutionError" });
    }
  }
  Ke.EnsAvatarUriResolutionError = r;
  class o extends e.BaseError {
    constructor({ namespace: i }) {
      super(`ENS NFT avatar namespace "${i}" is not supported. Must be "erc721" or "erc1155".`, { name: "EnsAvatarUnsupportedNamespaceError" });
    }
  }
  return Ke.EnsAvatarUnsupportedNamespaceError = o, Ke;
}
var _b;
function T1() {
  if (_b) return We;
  _b = 1, Object.defineProperty(We, "__esModule", { value: !0 }), We.isImageUri = i, We.getGateway = s, We.resolveAvatarUri = u, We.getJsonImage = d, We.getMetadataAvatarUri = f, We.parseAvatarUri = c, We.parseNftUri = m, We.getNftTokenUri = y;
  const e = St(), t = s0(), n = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/, r = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/, o = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/, a = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
  async function i(g) {
    try {
      const b = await fetch(g, { method: "HEAD" });
      if (b.status === 200) {
        const h = b.headers.get("content-type");
        return h == null ? void 0 : h.startsWith("image/");
      }
      return !1;
    } catch (b) {
      return typeof b == "object" && typeof b.response < "u" || !globalThis.hasOwnProperty("Image") ? !1 : new Promise((h) => {
        const _ = new Image();
        _.onload = () => {
          h(!0);
        }, _.onerror = () => {
          h(!1);
        }, _.src = g;
      });
    }
  }
  function s(g, b) {
    return g ? g.endsWith("/") ? g.slice(0, -1) : g : b;
  }
  function u({ uri: g, gatewayUrls: b }) {
    const h = o.test(g);
    if (h)
      return { uri: g, isOnChain: !0, isEncoded: h };
    const _ = s(b == null ? void 0 : b.ipfs, "https://ipfs.io"), P = s(b == null ? void 0 : b.arweave, "https://arweave.net"), j = g.match(n), { protocol: v, subpath: E, target: l, subtarget: p = "" } = (j == null ? void 0 : j.groups) || {}, T = v === "ipns:/" || E === "ipns/", w = v === "ipfs:/" || E === "ipfs/" || r.test(g);
    if (g.startsWith("http") && !T && !w) {
      let C = g;
      return b != null && b.arweave && (C = g.replace(/https:\/\/arweave.net/g, b == null ? void 0 : b.arweave)), { uri: C, isOnChain: !1, isEncoded: !1 };
    }
    if ((T || w) && l)
      return {
        uri: `${_}/${T ? "ipns" : "ipfs"}/${l}${p}`,
        isOnChain: !1,
        isEncoded: !1
      };
    if (v === "ar:/" && l)
      return {
        uri: `${P}/${l}${p || ""}`,
        isOnChain: !1,
        isEncoded: !1
      };
    let I = g.replace(a, "");
    if (I.startsWith("<svg") && (I = `data:image/svg+xml;base64,${btoa(I)}`), I.startsWith("data:") || I.startsWith("{"))
      return {
        uri: I,
        isOnChain: !0,
        isEncoded: !1
      };
    throw new t.EnsAvatarUriResolutionError({ uri: g });
  }
  function d(g) {
    if (typeof g != "object" || !("image" in g) && !("image_url" in g) && !("image_data" in g))
      throw new t.EnsAvatarInvalidMetadataError({ data: g });
    return g.image || g.image_url || g.image_data;
  }
  async function f({ gatewayUrls: g, uri: b }) {
    try {
      const h = await fetch(b).then((P) => P.json());
      return await c({
        gatewayUrls: g,
        uri: d(h)
      });
    } catch {
      throw new t.EnsAvatarUriResolutionError({ uri: b });
    }
  }
  async function c({ gatewayUrls: g, uri: b }) {
    const { uri: h, isOnChain: _ } = u({ uri: b, gatewayUrls: g });
    if (_ || await i(h))
      return h;
    throw new t.EnsAvatarUriResolutionError({ uri: b });
  }
  function m(g) {
    let b = g;
    b.startsWith("did:nft:") && (b = b.replace("did:nft:", "").replace(/_/g, "/"));
    const [h, _, P] = b.split("/"), [j, v] = h.split(":"), [E, l] = _.split(":");
    if (!j || j.toLowerCase() !== "eip155")
      throw new t.EnsAvatarInvalidNftUriError({ reason: "Only EIP-155 supported" });
    if (!v)
      throw new t.EnsAvatarInvalidNftUriError({ reason: "Chain ID not found" });
    if (!l)
      throw new t.EnsAvatarInvalidNftUriError({
        reason: "Contract address not found"
      });
    if (!P)
      throw new t.EnsAvatarInvalidNftUriError({ reason: "Token ID not found" });
    if (!E)
      throw new t.EnsAvatarInvalidNftUriError({ reason: "ERC namespace not found" });
    return {
      chainID: Number.parseInt(v),
      namespace: E.toLowerCase(),
      contractAddress: l,
      tokenID: P
    };
  }
  async function y(g, { nft: b }) {
    if (b.namespace === "erc721")
      return (0, e.readContract)(g, {
        address: b.contractAddress,
        abi: [
          {
            name: "tokenURI",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "tokenId", type: "uint256" }],
            outputs: [{ name: "", type: "string" }]
          }
        ],
        functionName: "tokenURI",
        args: [BigInt(b.tokenID)]
      });
    if (b.namespace === "erc1155")
      return (0, e.readContract)(g, {
        address: b.contractAddress,
        abi: [
          {
            name: "uri",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "_id", type: "uint256" }],
            outputs: [{ name: "", type: "string" }]
          }
        ],
        functionName: "uri",
        args: [BigInt(b.tokenID)]
      });
    throw new t.EnsAvatarUnsupportedNamespaceError({ namespace: b.namespace });
  }
  return We;
}
var vb;
function A1() {
  if (vb) return ra;
  vb = 1, Object.defineProperty(ra, "__esModule", { value: !0 }), ra.parseAvatarRecord = t;
  const e = T1();
  async function t(r, { gatewayUrls: o, record: a }) {
    return /eip155:/i.test(a) ? n(r, { gatewayUrls: o, record: a }) : (0, e.parseAvatarUri)({ uri: a, gatewayUrls: o });
  }
  async function n(r, { gatewayUrls: o, record: a }) {
    const i = (0, e.parseNftUri)(a), s = await (0, e.getNftTokenUri)(r, { nft: i }), { uri: u, isOnChain: d, isEncoded: f } = (0, e.resolveAvatarUri)({ uri: s, gatewayUrls: o });
    if (d && (u.includes("data:application/json;base64,") || u.startsWith("{"))) {
      const m = f ? atob(u.replace("data:application/json;base64,", "")) : u, y = JSON.parse(m);
      return (0, e.parseAvatarUri)({ uri: (0, e.getJsonImage)(y), gatewayUrls: o });
    }
    let c = i.tokenID;
    return i.namespace === "erc1155" && (c = c.replace("0x", "").padStart(64, "0")), (0, e.getMetadataAvatarUri)({
      gatewayUrls: o,
      uri: u.replace(/(?:0x)?{id}/, c)
    });
  }
  return ra;
}
var na = {}, Eb;
function u0() {
  if (Eb) return na;
  Eb = 1, Object.defineProperty(na, "__esModule", { value: !0 }), na.getEnsText = f;
  const e = mr(), t = At(), n = Xe(), r = Lt(), o = Y(), a = md(), i = bd(), s = Fu(), u = le(), d = St();
  async function f(c, { blockNumber: m, blockTag: y, name: g, key: b, gatewayUrls: h, strict: _, universalResolverAddress: P }) {
    let j = P;
    if (!j) {
      if (!c.chain)
        throw new Error("client chain not configured. universalResolverAddress is required.");
      j = (0, r.getChainContractAddress)({
        blockNumber: m,
        chain: c.chain,
        contract: "ensUniversalResolver"
      });
    }
    try {
      const v = {
        address: j,
        abi: e.universalResolverResolveAbi,
        functionName: "resolve",
        args: [
          (0, o.toHex)((0, s.packetToBytes)(g)),
          (0, n.encodeFunctionData)({
            abi: e.textResolverAbi,
            functionName: "text",
            args: [(0, i.namehash)(g), b]
          })
        ],
        blockNumber: m,
        blockTag: y
      }, E = (0, u.getAction)(c, d.readContract, "readContract"), l = h ? await E({
        ...v,
        args: [...v.args, h]
      }) : await E(v);
      if (l[0] === "0x")
        return null;
      const p = (0, t.decodeFunctionResult)({
        abi: e.textResolverAbi,
        functionName: "text",
        data: l[0]
      });
      return p === "" ? null : p;
    } catch (v) {
      if (_)
        throw v;
      if ((0, a.isNullUniversalResolverError)(v, "resolve"))
        return null;
      throw v;
    }
  }
  return na;
}
var jb;
function S1() {
  if (jb) return ta;
  jb = 1, Object.defineProperty(ta, "__esModule", { value: !0 }), ta.getEnsAvatar = r;
  const e = A1(), t = le(), n = u0();
  async function r(o, { blockNumber: a, blockTag: i, assetGatewayUrls: s, name: u, gatewayUrls: d, strict: f, universalResolverAddress: c }) {
    const m = await (0, t.getAction)(o, n.getEnsText, "getEnsText")({
      blockNumber: a,
      blockTag: i,
      key: "avatar",
      name: u,
      universalResolverAddress: c,
      gatewayUrls: d,
      strict: f
    });
    if (!m)
      return null;
    try {
      return await (0, e.parseAvatarRecord)(o, {
        record: m,
        gatewayUrls: s
      });
    } catch {
      return null;
    }
  }
  return ta;
}
var oa = {}, Pb;
function I1() {
  if (Pb) return oa;
  Pb = 1, Object.defineProperty(oa, "__esModule", { value: !0 }), oa.getEnsName = s;
  const e = mr(), t = Lt(), n = Y(), r = md(), o = Fu(), a = le(), i = St();
  async function s(u, { address: d, blockNumber: f, blockTag: c, gatewayUrls: m, strict: y, universalResolverAddress: g }) {
    let b = g;
    if (!b) {
      if (!u.chain)
        throw new Error("client chain not configured. universalResolverAddress is required.");
      b = (0, t.getChainContractAddress)({
        blockNumber: f,
        chain: u.chain,
        contract: "ensUniversalResolver"
      });
    }
    const h = `${d.toLowerCase().substring(2)}.addr.reverse`;
    try {
      const _ = {
        address: b,
        abi: e.universalResolverReverseAbi,
        functionName: "reverse",
        args: [(0, n.toHex)((0, o.packetToBytes)(h))],
        blockNumber: f,
        blockTag: c
      }, P = (0, a.getAction)(u, i.readContract, "readContract"), [j, v] = m ? await P({
        ..._,
        args: [..._.args, m]
      }) : await P(_);
      return d.toLowerCase() !== v.toLowerCase() ? null : j;
    } catch (_) {
      if (y)
        throw _;
      if ((0, r.isNullUniversalResolverError)(_, "reverse"))
        return null;
      throw _;
    }
  }
  return oa;
}
var ia = {}, wb;
function R1() {
  if (wb) return ia;
  wb = 1, Object.defineProperty(ia, "__esModule", { value: !0 }), ia.getEnsResolver = a;
  const e = Lt(), t = Y(), n = Fu(), r = le(), o = St();
  async function a(i, { blockNumber: s, blockTag: u, name: d, universalResolverAddress: f }) {
    let c = f;
    if (!c) {
      if (!i.chain)
        throw new Error("client chain not configured. universalResolverAddress is required.");
      c = (0, e.getChainContractAddress)({
        blockNumber: s,
        chain: i.chain,
        contract: "ensUniversalResolver"
      });
    }
    const [m] = await (0, r.getAction)(i, o.readContract, "readContract")({
      address: c,
      abi: [
        {
          inputs: [{ type: "bytes" }],
          name: "findResolver",
          outputs: [{ type: "address" }, { type: "bytes32" }],
          stateMutability: "view",
          type: "function"
        }
      ],
      functionName: "findResolver",
      args: [(0, t.toHex)((0, n.packetToBytes)(d))],
      blockNumber: s,
      blockTag: u
    });
    return m;
  }
  return ia;
}
var aa = {}, Tb;
function O1() {
  if (Tb) return aa;
  Tb = 1, Object.defineProperty(aa, "__esModule", { value: !0 }), aa.createAccessList = i;
  const e = Se(), t = Y(), n = nd(), r = xr(), o = jt(), a = Pt();
  async function i(s, u) {
    var p, T, w;
    const { account: d = s.account, blockNumber: f, blockTag: c = "latest", blobs: m, data: y, gas: g, gasPrice: b, maxFeePerBlobGas: h, maxFeePerGas: _, maxPriorityFeePerGas: P, to: j, value: v, ...E } = u, l = d ? (0, e.parseAccount)(d) : void 0;
    try {
      (0, a.assertRequest)(u);
      const C = (f ? (0, t.numberToHex)(f) : void 0) || c, B = (w = (T = (p = s.chain) == null ? void 0 : p.formatters) == null ? void 0 : T.transactionRequest) == null ? void 0 : w.format, A = (B || o.formatTransactionRequest)({
        ...(0, r.extract)(E, { format: B }),
        from: l == null ? void 0 : l.address,
        blobs: m,
        data: y,
        gas: g,
        gasPrice: b,
        maxFeePerBlobGas: h,
        maxFeePerGas: _,
        maxPriorityFeePerGas: P,
        to: j,
        value: v
      }), x = await s.request({
        method: "eth_createAccessList",
        params: [A, C]
      });
      return {
        accessList: x.accessList,
        gasUsed: BigInt(x.gasUsed)
      };
    } catch (I) {
      throw (0, n.getCallError)(I, {
        ...u,
        account: l,
        chain: s.chain
      });
    }
  }
  return aa;
}
var sa = {}, Ab;
function B1() {
  if (Ab) return sa;
  Ab = 1, Object.defineProperty(sa, "__esModule", { value: !0 }), sa.createBlockFilter = t;
  const e = Eu();
  async function t(n) {
    const r = (0, e.createFilterRequestScope)(n, {
      method: "eth_newBlockFilter"
    }), o = await n.request({
      method: "eth_newBlockFilter"
    });
    return { id: o, request: r(o), type: "block" };
  }
  return sa;
}
var ua = {}, Sb;
function c0() {
  if (Sb) return ua;
  Sb = 1, Object.defineProperty(ua, "__esModule", { value: !0 }), ua.createEventFilter = r;
  const e = dr(), t = Y(), n = Eu();
  async function r(o, { address: a, args: i, event: s, events: u, fromBlock: d, strict: f, toBlock: c } = {}) {
    const m = u ?? (s ? [s] : void 0), y = (0, n.createFilterRequestScope)(o, {
      method: "eth_newFilter"
    });
    let g = [];
    m && (g = [m.flatMap((_) => (0, e.encodeEventTopics)({
      abi: [_],
      eventName: _.name,
      args: i
    }))], s && (g = g[0]));
    const b = await o.request({
      method: "eth_newFilter",
      params: [
        {
          address: a,
          fromBlock: typeof d == "bigint" ? (0, t.numberToHex)(d) : d,
          toBlock: typeof c == "bigint" ? (0, t.numberToHex)(c) : c,
          ...g.length ? { topics: g } : {}
        }
      ]
    });
    return {
      abi: m,
      args: i,
      eventName: s ? s.name : void 0,
      fromBlock: d,
      id: b,
      request: y(b),
      strict: !!f,
      toBlock: c,
      type: "event"
    };
  }
  return ua;
}
var ca = {}, Ib;
function d0() {
  if (Ib) return ca;
  Ib = 1, Object.defineProperty(ca, "__esModule", { value: !0 }), ca.createPendingTransactionFilter = t;
  const e = Eu();
  async function t(n) {
    const r = (0, e.createFilterRequestScope)(n, {
      method: "eth_newPendingTransactionFilter"
    }), o = await n.request({
      method: "eth_newPendingTransactionFilter"
    });
    return { id: o, request: r(o), type: "transaction" };
  }
  return ca;
}
var da = {}, Rb;
function C1() {
  if (Rb) return da;
  Rb = 1, Object.defineProperty(da, "__esModule", { value: !0 }), da.getBlobBaseFee = e;
  async function e(t) {
    const n = await t.request({
      method: "eth_blobBaseFee"
    });
    return BigInt(n);
  }
  return da;
}
var fa = {}, Ob;
function q1() {
  if (Ob) return fa;
  Ob = 1, Object.defineProperty(fa, "__esModule", { value: !0 }), fa.getBlockTransactionCount = n;
  const e = Pe(), t = Y();
  async function n(r, { blockHash: o, blockNumber: a, blockTag: i = "latest" } = {}) {
    const s = a !== void 0 ? (0, t.numberToHex)(a) : void 0;
    let u;
    return o ? u = await r.request({
      method: "eth_getBlockTransactionCountByHash",
      params: [o]
    }, { dedupe: !0 }) : u = await r.request({
      method: "eth_getBlockTransactionCountByNumber",
      params: [s || i]
    }, { dedupe: !!s }), (0, e.hexToNumber)(u);
  }
  return fa;
}
var la = {}, Bb;
function M1() {
  if (Bb) return la;
  Bb = 1, Object.defineProperty(la, "__esModule", { value: !0 }), la.getCode = t;
  const e = Y();
  async function t(n, { address: r, blockNumber: o, blockTag: a = "latest" }) {
    const i = o !== void 0 ? (0, e.numberToHex)(o) : void 0, s = await n.request({
      method: "eth_getCode",
      params: [r, i || a]
    }, { dedupe: !!i });
    if (s !== "0x")
      return s;
  }
  return la;
}
var ma = {}, In = {}, Cb;
function x1() {
  if (Cb) return In;
  Cb = 1, Object.defineProperty(In, "__esModule", { value: !0 }), In.Eip712DomainNotFoundError = void 0;
  const e = ie();
  class t extends e.BaseError {
    constructor({ address: r }) {
      super(`No EIP-712 domain found on contract "${r}".`, {
        metaMessages: [
          "Ensure that:",
          `- The contract is deployed at the address "${r}".`,
          "- `eip712Domain()` function exists on the contract.",
          "- `eip712Domain()` function matches signature to ERC-5267 specification."
        ],
        name: "Eip712DomainNotFoundError"
      });
    }
  }
  return In.Eip712DomainNotFoundError = t, In;
}
var qb;
function F1() {
  if (qb) return ma;
  qb = 1, Object.defineProperty(ma, "__esModule", { value: !0 }), ma.getEip712Domain = r;
  const e = x1(), t = le(), n = St();
  async function r(a, i) {
    const { address: s, factory: u, factoryData: d } = i;
    try {
      const [f, c, m, y, g, b, h] = await (0, t.getAction)(a, n.readContract, "readContract")({
        abi: o,
        address: s,
        functionName: "eip712Domain",
        factory: u,
        factoryData: d
      });
      return {
        domain: {
          name: c,
          version: m,
          chainId: Number(y),
          verifyingContract: g,
          salt: b
        },
        extensions: h,
        fields: f
      };
    } catch (f) {
      const c = f;
      throw c.name === "ContractFunctionExecutionError" && c.cause.name === "ContractFunctionZeroDataError" ? new e.Eip712DomainNotFoundError({ address: s }) : c;
    }
  }
  const o = [
    {
      inputs: [],
      name: "eip712Domain",
      outputs: [
        { name: "fields", type: "bytes1" },
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "chainId", type: "uint256" },
        { name: "verifyingContract", type: "address" },
        { name: "salt", type: "bytes32" },
        { name: "extensions", type: "uint256[]" }
      ],
      stateMutability: "view",
      type: "function"
    }
  ];
  return ma;
}
var ba = {}, ga = {}, Mb;
function k1() {
  if (Mb) return ga;
  Mb = 1, Object.defineProperty(ga, "__esModule", { value: !0 }), ga.formatFeeHistory = e;
  function e(t) {
    var n;
    return {
      baseFeePerGas: t.baseFeePerGas.map((r) => BigInt(r)),
      gasUsedRatio: t.gasUsedRatio,
      oldestBlock: BigInt(t.oldestBlock),
      reward: (n = t.reward) == null ? void 0 : n.map((r) => r.map((o) => BigInt(o)))
    };
  }
  return ga;
}
var xb;
function H1() {
  if (xb) return ba;
  xb = 1, Object.defineProperty(ba, "__esModule", { value: !0 }), ba.getFeeHistory = n;
  const e = Y(), t = k1();
  async function n(r, { blockCount: o, blockNumber: a, blockTag: i = "latest", rewardPercentiles: s }) {
    const u = a ? (0, e.numberToHex)(a) : void 0, d = await r.request({
      method: "eth_feeHistory",
      params: [
        (0, e.numberToHex)(o),
        u || i,
        s
      ]
    }, { dedupe: !!u });
    return (0, t.formatFeeHistory)(d);
  }
  return ba;
}
var ya = {}, Fb;
function $1() {
  if (Fb) return ya;
  Fb = 1, Object.defineProperty(ya, "__esModule", { value: !0 }), ya.getFilterLogs = n;
  const e = Yn(), t = Tt();
  async function n(r, { filter: o }) {
    const a = o.strict ?? !1, s = (await o.request({
      method: "eth_getFilterLogs",
      params: [o.id]
    })).map((u) => (0, t.formatLog)(u));
    return o.abi ? (0, e.parseEventLogs)({
      abi: o.abi,
      logs: s,
      strict: a
    }) : s;
  }
  return ya;
}
var ha = {}, pa = {}, Sc = {}, _a = {}, kb;
function f0() {
  if (kb) return _a;
  kb = 1, Object.defineProperty(_a, "__esModule", { value: !0 }), _a.defineChain = e;
  function e(t) {
    return {
      formatters: void 0,
      fees: void 0,
      serializers: void 0,
      ...t
    };
  }
  return _a;
}
var va = {}, Hb;
function l0() {
  if (Hb) return va;
  Hb = 1, Object.defineProperty(va, "__esModule", { value: !0 }), va.extractChain = e;
  function e({ chains: t, id: n }) {
    return t.find((r) => r.id === n);
  }
  return va;
}
var Tr = {}, Ea = {}, Ic = {}, $b;
function m0() {
  return $b || ($b = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.socketClientCache = void 0, e.getSocketRpcClient = a;
    const t = Qe(), n = od(), r = fd(), o = o0();
    e.socketClientCache = /* @__PURE__ */ new Map();
    async function a(i) {
      const { getSocket: s, keepAlive: u = !0, key: d = "socket", reconnect: f = !0, url: c } = i, { interval: m = 3e4 } = typeof u == "object" ? u : {}, { attempts: y = 5, delay: g = 2e3 } = typeof f == "object" ? f : {};
      let b = e.socketClientCache.get(`${d}:${c}`);
      if (b)
        return b;
      let h = 0;
      const { schedule: _ } = (0, n.createBatchScheduler)({
        id: `${d}:${c}`,
        fn: async () => {
          const v = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map();
          let l, p, T;
          async function w() {
            const I = await s({
              onClose() {
                var C, B;
                for (const M of v.values())
                  (C = M.onError) == null || C.call(M, new t.SocketClosedError({ url: c }));
                for (const M of E.values())
                  (B = M.onError) == null || B.call(M, new t.SocketClosedError({ url: c }));
                v.clear(), E.clear(), f && h < y && setTimeout(async () => {
                  h++, await w().catch(console.error);
                }, g);
              },
              onError(C) {
                var B, M;
                l = C;
                for (const A of v.values())
                  (B = A.onError) == null || B.call(A, l);
                for (const A of E.values())
                  (M = A.onError) == null || M.call(A, l);
                v.clear(), E.clear(), f && h < y && setTimeout(async () => {
                  h++, await w().catch(console.error);
                }, g);
              },
              onOpen() {
                l = void 0, h = 0;
              },
              onResponse(C) {
                const B = C.method === "eth_subscription", M = B ? C.params.subscription : C.id, A = B ? E : v, x = A.get(M);
                x && x.onResponse(C), B || A.delete(M);
              }
            });
            return p = I, u && (T && clearInterval(T), T = setInterval(() => {
              var C;
              return (C = p.ping) == null ? void 0 : C.call(p);
            }, m)), I;
          }
          return await w(), l = void 0, b = {
            close() {
              T && clearInterval(T), p.close(), e.socketClientCache.delete(`${d}:${c}`);
            },
            get socket() {
              return p;
            },
            request({ body: I, onError: C, onResponse: B }) {
              l && C && C(l);
              const M = I.id ?? o.idCache.take(), A = (x) => {
                var H;
                typeof x.id == "number" && M !== x.id || (I.method === "eth_subscribe" && typeof x.result == "string" && E.set(x.result, {
                  onResponse: A,
                  onError: C
                }), I.method === "eth_unsubscribe" && E.delete((H = I.params) == null ? void 0 : H[0]), B(x));
              };
              v.set(M, { onResponse: A, onError: C });
              try {
                p.request({
                  body: {
                    jsonrpc: "2.0",
                    id: M,
                    ...I
                  }
                });
              } catch (x) {
                C == null || C(x);
              }
            },
            requestAsync({ body: I, timeout: C = 1e4 }) {
              return (0, r.withTimeout)(() => new Promise((B, M) => this.request({
                body: I,
                onError: M,
                onResponse: B
              })), {
                errorInstance: new t.TimeoutError({ body: I, url: c }),
                timeout: C
              });
            },
            requests: v,
            subscriptions: E,
            url: c
          }, e.socketClientCache.set(`${d}:${c}`, b), [b];
        }
      }), [P, [j]] = await _();
      return j;
    }
  }(Ic)), Ic;
}
const N1 = /* @__PURE__ */ xp(Lp);
var Nb;
function gd() {
  if (Nb) return Ea;
  Nb = 1, Object.defineProperty(Ea, "__esModule", { value: !0 }), Ea.getWebSocketRpcClient = n;
  const e = Qe(), t = m0();
  async function n(r, o = {}) {
    const { keepAlive: a, reconnect: i } = o;
    return (0, t.getSocketRpcClient)({
      async getSocket({ onClose: s, onError: u, onOpen: d, onResponse: f }) {
        const c = await Promise.resolve().then(() => N1).then((h) => h.WebSocket), m = new c(r);
        function y() {
          s(), m.removeEventListener("close", y), m.removeEventListener("message", g), m.removeEventListener("error", u), m.removeEventListener("open", d);
        }
        function g({ data: h }) {
          f(JSON.parse(h));
        }
        m.addEventListener("close", y), m.addEventListener("message", g), m.addEventListener("error", u), m.addEventListener("open", d), m.readyState === c.CONNECTING && await new Promise((h, _) => {
          m && (m.onopen = h, m.onerror = _);
        });
        const { close: b } = m;
        return Object.assign(m, {
          close() {
            b.bind(m)(), s();
          },
          ping() {
            try {
              if (m.readyState === m.CLOSED || m.readyState === m.CLOSING)
                throw new e.WebSocketRequestError({
                  url: m.url,
                  cause: new e.SocketClosedError({ url: m.url })
                });
              const h = {
                jsonrpc: "2.0",
                method: "net_version",
                params: []
              };
              m.send(JSON.stringify(h));
            } catch (h) {
              u(h);
            }
          },
          request({ body: h }) {
            if (m.readyState === m.CLOSED || m.readyState === m.CLOSING)
              throw new e.WebSocketRequestError({
                body: h,
                url: m.url,
                cause: new e.SocketClosedError({ url: m.url })
              });
            return m.send(JSON.stringify(h));
          }
        });
      },
      keepAlive: a,
      reconnect: i,
      url: r
    });
  }
  return Ea;
}
var zb;
function b0() {
  if (zb) return Tr;
  zb = 1, Object.defineProperty(Tr, "__esModule", { value: !0 }), Tr.rpc = void 0, Tr.getSocket = o;
  const e = ld(), t = gd();
  function n(a, { body: i, onError: s, onResponse: u }) {
    return a.request({
      body: i,
      onError: s,
      onResponse: u
    }), a;
  }
  async function r(a, { body: i, timeout: s = 1e4 }) {
    return a.requestAsync({
      body: i,
      timeout: s
    });
  }
  async function o(a) {
    const i = await (0, t.getWebSocketRpcClient)(a);
    return Object.assign(i.socket, {
      requests: i.requests,
      subscriptions: i.subscriptions
    });
  }
  return Tr.rpc = {
    http(a, i) {
      return (0, e.getHttpRpcClient)(a).request(i);
    },
    webSocket: n,
    webSocketAsync: r
  }, Tr;
}
var er = {}, ht = {}, Db;
function g0() {
  if (Db) return ht;
  Db = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.InvalidStructTypeError = ht.InvalidPrimaryTypeError = ht.InvalidDomainError = void 0;
  const e = Ie(), t = ie();
  class n extends t.BaseError {
    constructor({ domain: i }) {
      super(`Invalid domain "${(0, e.stringify)(i)}".`, {
        metaMessages: ["Must be a valid EIP-712 domain."]
      });
    }
  }
  ht.InvalidDomainError = n;
  class r extends t.BaseError {
    constructor({ primaryType: i, types: s }) {
      super(`Invalid primary type \`${i}\` must be one of \`${JSON.stringify(Object.keys(s))}\`.`, {
        docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
        metaMessages: ["Check that the primary type is a key in `types`."]
      });
    }
  }
  ht.InvalidPrimaryTypeError = r;
  class o extends t.BaseError {
    constructor({ type: i }) {
      super(`Struct type "${i}" is invalid.`, {
        metaMessages: ["Struct type must not be a Solidity type."],
        name: "InvalidStructTypeError"
      });
    }
  }
  return ht.InvalidStructTypeError = o, ht;
}
var tr = {}, Lb;
function io() {
  if (Lb) return tr;
  Lb = 1, Object.defineProperty(tr, "__esModule", { value: !0 }), tr.hashTypedData = a, tr.hashDomain = i, tr.hashStruct = s, tr.encodeType = f;
  const e = Ye(), t = Be(), n = Y(), r = Me(), o = ku();
  function a(y) {
    const { domain: g = {}, message: b, primaryType: h } = y, _ = {
      EIP712Domain: (0, o.getTypesForEIP712Domain)({ domain: g }),
      ...y.types
    };
    (0, o.validateTypedData)({
      domain: g,
      message: b,
      primaryType: h,
      types: _
    });
    const P = ["0x1901"];
    return g && P.push(i({
      domain: g,
      types: _
    })), h !== "EIP712Domain" && P.push(s({
      data: b,
      primaryType: h,
      types: _
    })), (0, r.keccak256)((0, t.concat)(P));
  }
  function i({ domain: y, types: g }) {
    return s({
      data: y,
      primaryType: "EIP712Domain",
      types: g
    });
  }
  function s({ data: y, primaryType: g, types: b }) {
    const h = u({
      data: y,
      primaryType: g,
      types: b
    });
    return (0, r.keccak256)(h);
  }
  function u({ data: y, primaryType: g, types: b }) {
    const h = [{ type: "bytes32" }], _ = [d({ primaryType: g, types: b })];
    for (const P of b[g]) {
      const [j, v] = m({
        types: b,
        name: P.name,
        type: P.type,
        value: y[P.name]
      });
      h.push(j), _.push(v);
    }
    return (0, e.encodeAbiParameters)(h, _);
  }
  function d({ primaryType: y, types: g }) {
    const b = (0, n.toHex)(f({ primaryType: y, types: g }));
    return (0, r.keccak256)(b);
  }
  function f({ primaryType: y, types: g }) {
    let b = "";
    const h = c({ primaryType: y, types: g });
    h.delete(y);
    const _ = [y, ...Array.from(h).sort()];
    for (const P of _)
      b += `${P}(${g[P].map(({ name: j, type: v }) => `${v} ${j}`).join(",")})`;
    return b;
  }
  function c({ primaryType: y, types: g }, b = /* @__PURE__ */ new Set()) {
    const h = y.match(/^\w*/u), _ = h == null ? void 0 : h[0];
    if (b.has(_) || g[_] === void 0)
      return b;
    b.add(_);
    for (const P of g[_])
      c({ primaryType: P.type, types: g }, b);
    return b;
  }
  function m({ types: y, name: g, type: b, value: h }) {
    if (y[b] !== void 0)
      return [
        { type: "bytes32" },
        (0, r.keccak256)(u({ data: h, primaryType: b, types: y }))
      ];
    if (b === "bytes")
      return h = `0x${(h.length % 2 ? "0" : "") + h.slice(2)}`, [{ type: "bytes32" }, (0, r.keccak256)(h)];
    if (b === "string")
      return [{ type: "bytes32" }, (0, r.keccak256)((0, n.toHex)(h))];
    if (b.lastIndexOf("]") === b.length - 1) {
      const _ = b.slice(0, b.lastIndexOf("[")), P = h.map((j) => m({
        name: g,
        type: _,
        types: y,
        value: j
      }));
      return [
        { type: "bytes32" },
        (0, r.keccak256)((0, e.encodeAbiParameters)(P.map(([j]) => j), P.map(([, j]) => j)))
      ];
    }
    return [{ type: b }, h];
  }
  return tr;
}
var Ub;
function ku() {
  if (Ub) return er;
  Ub = 1, Object.defineProperty(er, "__esModule", { value: !0 }), er.serializeTypedData = d, er.validateTypedData = f, er.getTypesForEIP712Domain = c, er.domainSeparator = m;
  const e = pe(), t = Ze(), n = g0(), r = ze(), o = Ne(), a = Y(), i = vu(), s = io(), u = Ie();
  function d(g) {
    const { domain: b, message: h, primaryType: _, types: P } = g, j = (l, p) => {
      const T = { ...p };
      for (const w of l) {
        const { name: I, type: C } = w;
        C === "address" && (T[I] = T[I].toLowerCase());
      }
      return T;
    }, v = P.EIP712Domain ? b ? j(P.EIP712Domain, b) : {} : {}, E = (() => {
      if (_ !== "EIP712Domain")
        return j(P[_], h);
    })();
    return (0, u.stringify)({ domain: v, message: E, primaryType: _, types: P });
  }
  function f(g) {
    const { domain: b, message: h, primaryType: _, types: P } = g, j = (v, E) => {
      for (const l of v) {
        const { name: p, type: T } = l, w = E[p], I = T.match(i.integerRegex);
        if (I && (typeof w == "number" || typeof w == "bigint")) {
          const [M, A, x] = I;
          (0, a.numberToHex)(w, {
            signed: A === "int",
            size: Number.parseInt(x) / 8
          });
        }
        if (T === "address" && typeof w == "string" && !(0, r.isAddress)(w))
          throw new t.InvalidAddressError({ address: w });
        const C = T.match(i.bytesRegex);
        if (C) {
          const [M, A] = C;
          if (A && (0, o.size)(w) !== Number.parseInt(A))
            throw new e.BytesSizeMismatchError({
              expectedSize: Number.parseInt(A),
              givenSize: (0, o.size)(w)
            });
        }
        const B = P[T];
        B && (y(T), j(B, w));
      }
    };
    if (P.EIP712Domain && b) {
      if (typeof b != "object")
        throw new n.InvalidDomainError({ domain: b });
      j(P.EIP712Domain, b);
    }
    if (_ !== "EIP712Domain")
      if (P[_])
        j(P[_], h);
      else
        throw new n.InvalidPrimaryTypeError({ primaryType: _, types: P });
  }
  function c({ domain: g }) {
    return [
      typeof (g == null ? void 0 : g.name) == "string" && { name: "name", type: "string" },
      (g == null ? void 0 : g.version) && { name: "version", type: "string" },
      (typeof (g == null ? void 0 : g.chainId) == "number" || typeof (g == null ? void 0 : g.chainId) == "bigint") && {
        name: "chainId",
        type: "uint256"
      },
      (g == null ? void 0 : g.verifyingContract) && {
        name: "verifyingContract",
        type: "address"
      },
      (g == null ? void 0 : g.salt) && { name: "salt", type: "bytes32" }
    ].filter(Boolean);
  }
  function m({ domain: g }) {
    return (0, s.hashDomain)({
      domain: g,
      types: {
        EIP712Domain: c({ domain: g })
      }
    });
  }
  function y(g) {
    if (g === "address" || g === "bool" || g === "string" || g.startsWith("bytes") || g.startsWith("uint") || g.startsWith("int"))
      throw new n.InvalidStructTypeError({ type: g });
  }
  return er;
}
var ja = {}, Gb;
function y0() {
  if (Gb) return ja;
  Gb = 1, Object.defineProperty(ja, "__esModule", { value: !0 }), ja.decodeFunctionData = a;
  const e = pe(), t = Je(), n = cr(), r = $t(), o = _t();
  function a(i) {
    const { abi: s, data: u } = i, d = (0, t.slice)(u, 0, 4), f = s.find((c) => c.type === "function" && d === (0, n.toFunctionSelector)((0, o.formatAbiItem)(c)));
    if (!f)
      throw new e.AbiFunctionSignatureNotFoundError(d, {
        docsPath: "/docs/contract/decodeFunctionData"
      });
    return {
      functionName: f.name,
      args: "inputs" in f && f.inputs && f.inputs.length > 0 ? (0, r.decodeAbiParameters)(f.inputs, (0, t.slice)(u, 4)) : void 0
    };
  }
  return ja;
}
var Pa = {}, Vb;
function h0() {
  if (Vb) return Pa;
  Vb = 1, Object.defineProperty(Pa, "__esModule", { value: !0 }), Pa.encodeErrorResult = s;
  const e = pe(), t = Be(), n = cr(), r = Ye(), o = _t(), a = vt(), i = "/docs/contract/encodeErrorResult";
  function s(u) {
    const { abi: d, errorName: f, args: c } = u;
    let m = d[0];
    if (f) {
      const h = (0, a.getAbiItem)({ abi: d, args: c, name: f });
      if (!h)
        throw new e.AbiErrorNotFoundError(f, { docsPath: i });
      m = h;
    }
    if (m.type !== "error")
      throw new e.AbiErrorNotFoundError(void 0, { docsPath: i });
    const y = (0, o.formatAbiItem)(m), g = (0, n.toFunctionSelector)(y);
    let b = "0x";
    if (c && c.length > 0) {
      if (!m.inputs)
        throw new e.AbiErrorInputsNotFoundError(m.name, { docsPath: i });
      b = (0, r.encodeAbiParameters)(m.inputs, c);
    }
    return (0, t.concatHex)([g, b]);
  }
  return Pa;
}
var wa = {}, Wb;
function p0() {
  if (Wb) return wa;
  Wb = 1, Object.defineProperty(wa, "__esModule", { value: !0 }), wa.encodeFunctionResult = o;
  const e = pe(), t = Ye(), n = vt(), r = "/docs/contract/encodeFunctionResult";
  function o(a) {
    const { abi: i, functionName: s, result: u } = a;
    let d = i[0];
    if (s) {
      const c = (0, n.getAbiItem)({ abi: i, name: s });
      if (!c)
        throw new e.AbiFunctionNotFoundError(s, { docsPath: r });
      d = c;
    }
    if (d.type !== "function")
      throw new e.AbiFunctionNotFoundError(void 0, { docsPath: r });
    if (!d.outputs)
      throw new e.AbiFunctionOutputsNotFoundError(d.name, { docsPath: r });
    let f = Array.isArray(u) ? u : [u];
    return d.outputs.length === 0 && !f[0] && (f = []), (0, t.encodeAbiParameters)(d.outputs, f);
  }
  return wa;
}
var Ta = {}, Kb;
function _0() {
  if (Kb) return Ta;
  Kb = 1, Object.defineProperty(Ta, "__esModule", { value: !0 }), Ta.encodePacked = s;
  const e = pe(), t = Ze(), n = ze(), r = Be(), o = kt(), a = Y(), i = vu();
  function s(d, f) {
    if (d.length !== f.length)
      throw new e.AbiEncodingLengthMismatchError({
        expectedLength: d.length,
        givenLength: f.length
      });
    const c = [];
    for (let m = 0; m < d.length; m++) {
      const y = d[m], g = f[m];
      c.push(u(y, g));
    }
    return (0, r.concatHex)(c);
  }
  function u(d, f, c = !1) {
    if (d === "address") {
      const b = f;
      if (!(0, n.isAddress)(b))
        throw new t.InvalidAddressError({ address: b });
      return (0, o.pad)(b.toLowerCase(), {
        size: c ? 32 : null
      });
    }
    if (d === "string")
      return (0, a.stringToHex)(f);
    if (d === "bytes")
      return f;
    if (d === "bool")
      return (0, o.pad)((0, a.boolToHex)(f), { size: c ? 32 : 1 });
    const m = d.match(i.integerRegex);
    if (m) {
      const [b, h, _ = "256"] = m, P = Number.parseInt(_) / 8;
      return (0, a.numberToHex)(f, {
        size: c ? 32 : P,
        signed: h === "int"
      });
    }
    const y = d.match(i.bytesRegex);
    if (y) {
      const [b, h] = y;
      if (Number.parseInt(h) !== (f.length - 2) / 2)
        throw new e.BytesSizeMismatchError({
          expectedSize: Number.parseInt(h),
          givenSize: (f.length - 2) / 2
        });
      return (0, o.pad)(f, { dir: "right", size: c ? 32 : null });
    }
    const g = d.match(i.arrayRegex);
    if (g && Array.isArray(f)) {
      const [b, h] = g, _ = [];
      for (let P = 0; P < f.length; P++)
        _.push(u(h, f[P], !0));
      return _.length === 0 ? "0x" : (0, r.concatHex)(_);
    }
    throw new e.UnsupportedPackedAbiType(d);
  }
  return Ta;
}
var Ar = {}, Aa = {}, Zb;
function yd() {
  if (Zb) return Aa;
  Zb = 1, Object.defineProperty(Aa, "__esModule", { value: !0 }), Aa.isBytes = e;
  function e(t) {
    return !t || typeof t != "object" || !("BYTES_PER_ELEMENT" in t) ? !1 : t.BYTES_PER_ELEMENT === 1 && t.constructor.name === "Uint8Array";
  }
  return Aa;
}
var Jb;
function v0() {
  if (Jb) return Ar;
  Jb = 1, Object.defineProperty(Ar, "__esModule", { value: !0 }), Ar.getContractAddress = u, Ar.getCreateAddress = d, Ar.getCreate2Address = f;
  const e = Be(), t = yd(), n = kt(), r = Je(), o = be(), a = Gn(), i = Me(), s = Ue();
  function u(c) {
    return c.opcode === "CREATE2" ? f(c) : d(c);
  }
  function d(c) {
    const m = (0, o.toBytes)((0, s.getAddress)(c.from));
    let y = (0, o.toBytes)(c.nonce);
    return y[0] === 0 && (y = new Uint8Array([])), (0, s.getAddress)(`0x${(0, i.keccak256)((0, a.toRlp)([m, y], "bytes")).slice(26)}`);
  }
  function f(c) {
    const m = (0, o.toBytes)((0, s.getAddress)(c.from)), y = (0, n.pad)((0, t.isBytes)(c.salt) ? c.salt : (0, o.toBytes)(c.salt), {
      size: 32
    }), g = "bytecodeHash" in c ? (0, t.isBytes)(c.bytecodeHash) ? c.bytecodeHash : (0, o.toBytes)(c.bytecodeHash) : (0, i.keccak256)(c.bytecode, "bytes");
    return (0, s.getAddress)((0, r.slice)((0, i.keccak256)((0, e.concat)([(0, o.toBytes)("0xff"), m, y, g])), 12));
  }
  return Ar;
}
var Rc = {}, Yb;
function hd() {
  return Yb || (Yb = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.defineTransactionReceipt = e.receiptStatuses = void 0, e.formatTransactionReceipt = a;
    const t = Pe(), n = Wn(), r = Tt(), o = Kn();
    e.receiptStatuses = {
      "0x0": "reverted",
      "0x1": "success"
    };
    function a(i) {
      const s = {
        ...i,
        blockNumber: i.blockNumber ? BigInt(i.blockNumber) : null,
        contractAddress: i.contractAddress ? i.contractAddress : null,
        cumulativeGasUsed: i.cumulativeGasUsed ? BigInt(i.cumulativeGasUsed) : null,
        effectiveGasPrice: i.effectiveGasPrice ? BigInt(i.effectiveGasPrice) : null,
        gasUsed: i.gasUsed ? BigInt(i.gasUsed) : null,
        logs: i.logs ? i.logs.map((u) => (0, r.formatLog)(u)) : null,
        to: i.to ? i.to : null,
        transactionIndex: i.transactionIndex ? (0, t.hexToNumber)(i.transactionIndex) : null,
        status: i.status ? e.receiptStatuses[i.status] : null,
        type: i.type ? o.transactionType[i.type] || i.type : null
      };
      return i.blobGasPrice && (s.blobGasPrice = BigInt(i.blobGasPrice)), i.blobGasUsed && (s.blobGasUsed = BigInt(i.blobGasUsed)), s;
    }
    e.defineTransactionReceipt = (0, n.defineFormatter)("transactionReceipt", a);
  }(Rc)), Rc;
}
var Sa = {}, Xb;
function pd() {
  if (Xb) return Sa;
  Xb = 1, Object.defineProperty(Sa, "__esModule", { value: !0 }), Sa.fromRlp = a;
  const e = ie(), t = qr(), n = zn(), r = be(), o = Y();
  function a(d, f = "hex") {
    const c = (() => {
      if (typeof d == "string") {
        if (d.length > 3 && d.length % 2 !== 0)
          throw new t.InvalidHexValueError(d);
        return (0, r.hexToBytes)(d);
      }
      return d;
    })(), m = (0, n.createCursor)(c, {
      recursiveReadLimit: Number.POSITIVE_INFINITY
    });
    return i(m, f);
  }
  function i(d, f = "hex") {
    if (d.bytes.length === 0)
      return f === "hex" ? (0, o.bytesToHex)(d.bytes) : d.bytes;
    const c = d.readByte();
    if (c < 128 && d.decrementPosition(1), c < 192) {
      const y = s(d, c, 128), g = d.readBytes(y);
      return f === "hex" ? (0, o.bytesToHex)(g) : g;
    }
    const m = s(d, c, 192);
    return u(d, m, f);
  }
  function s(d, f, c) {
    if (c === 128 && f < 128)
      return 1;
    if (f <= c + 55)
      return f - c;
    if (f === c + 55 + 1)
      return d.readUint8();
    if (f === c + 55 + 2)
      return d.readUint16();
    if (f === c + 55 + 3)
      return d.readUint24();
    if (f === c + 55 + 4)
      return d.readUint32();
    throw new e.BaseError("Invalid RLP prefix");
  }
  function u(d, f, c) {
    const m = d.position, y = [];
    for (; d.position - m < f; )
      y.push(i(d, c));
    return y;
  }
  return Sa;
}
var Oc = {}, Qb;
function E0() {
  return Qb || (Qb = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.toEventSignature = void 0;
    var t = Hc();
    Object.defineProperty(e, "toEventSignature", { enumerable: !0, get: function() {
      return t.toSignature;
    } });
  }(Oc)), Oc;
}
var Bc = {}, eg;
function j0() {
  return eg || (eg = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.toFunctionSignature = void 0;
    var t = Hc();
    Object.defineProperty(e, "toFunctionSignature", { enumerable: !0, get: function() {
      return t.toSignature;
    } });
  }(Bc)), Bc;
}
var Cc = {}, tg;
function P0() {
  return tg || (tg = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.toEventHash = void 0;
    var t = _u();
    Object.defineProperty(e, "toEventHash", { enumerable: !0, get: function() {
      return t.toSignatureHash;
    } });
  }(Cc)), Cc;
}
var qc = {}, rg;
function w0() {
  return rg || (rg = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.toFunctionHash = void 0;
    var t = _u();
    Object.defineProperty(e, "toFunctionHash", { enumerable: !0, get: function() {
      return t.toSignatureHash;
    } });
  }(qc)), qc;
}
var Ia = {}, ng;
function _d() {
  if (ng) return Ia;
  ng = 1, Object.defineProperty(Ia, "__esModule", { value: !0 }), Ia.isHash = n;
  const e = Oe(), t = Ne();
  function n(r) {
    return (0, e.isHex)(r) && (0, t.size)(r) === 32;
  }
  return Ia;
}
var Ra = {}, rr = {}, og;
function z1() {
  if (og) return rr;
  og = 1, Object.defineProperty(rr, "__esModule", { value: !0 }), rr.ripemd160 = rr.RIPEMD160 = void 0;
  const e = /* @__PURE__ */ Hh(), t = /* @__PURE__ */ Or(), n = /* @__PURE__ */ new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]), r = /* @__PURE__ */ new Uint8Array(new Array(16).fill(0).map((b, h) => h)), o = /* @__PURE__ */ r.map((b) => (9 * b + 5) % 16);
  let a = [r], i = [o];
  for (let b = 0; b < 4; b++)
    for (let h of [a, i])
      h.push(h[b].map((_) => n[_]));
  const s = /* @__PURE__ */ [
    [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
    [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
    [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
    [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
    [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
  ].map((b) => new Uint8Array(b)), u = /* @__PURE__ */ a.map((b, h) => b.map((_) => s[h][_])), d = /* @__PURE__ */ i.map((b, h) => b.map((_) => s[h][_])), f = /* @__PURE__ */ new Uint32Array([
    0,
    1518500249,
    1859775393,
    2400959708,
    2840853838
  ]), c = /* @__PURE__ */ new Uint32Array([
    1352829926,
    1548603684,
    1836072691,
    2053994217,
    0
  ]);
  function m(b, h, _, P) {
    return b === 0 ? h ^ _ ^ P : b === 1 ? h & _ | ~h & P : b === 2 ? (h | ~_) ^ P : b === 3 ? h & P | _ & ~P : h ^ (_ | ~P);
  }
  const y = /* @__PURE__ */ new Uint32Array(16);
  class g extends e.HashMD {
    constructor() {
      super(64, 20, 8, !0), this.h0 = 1732584193, this.h1 = -271733879, this.h2 = -1732584194, this.h3 = 271733878, this.h4 = -1009589776;
    }
    get() {
      const { h0: h, h1: _, h2: P, h3: j, h4: v } = this;
      return [h, _, P, j, v];
    }
    set(h, _, P, j, v) {
      this.h0 = h | 0, this.h1 = _ | 0, this.h2 = P | 0, this.h3 = j | 0, this.h4 = v | 0;
    }
    process(h, _) {
      for (let B = 0; B < 16; B++, _ += 4)
        y[B] = h.getUint32(_, !0);
      let P = this.h0 | 0, j = P, v = this.h1 | 0, E = v, l = this.h2 | 0, p = l, T = this.h3 | 0, w = T, I = this.h4 | 0, C = I;
      for (let B = 0; B < 5; B++) {
        const M = 4 - B, A = f[B], x = c[B], H = a[B], F = i[B], $ = u[B], q = d[B];
        for (let S = 0; S < 16; S++) {
          const R = (0, t.rotl)(P + m(B, v, l, T) + y[H[S]] + A, $[S]) + I | 0;
          P = I, I = T, T = (0, t.rotl)(l, 10) | 0, l = v, v = R;
        }
        for (let S = 0; S < 16; S++) {
          const R = (0, t.rotl)(j + m(M, E, p, w) + y[F[S]] + x, q[S]) + C | 0;
          j = C, C = w, w = (0, t.rotl)(p, 10) | 0, p = E, E = R;
        }
      }
      this.set(this.h1 + l + w | 0, this.h2 + T + C | 0, this.h3 + I + j | 0, this.h4 + P + E | 0, this.h0 + v + p | 0);
    }
    roundClean() {
      y.fill(0);
    }
    destroy() {
      this.destroyed = !0, this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
    }
  }
  return rr.RIPEMD160 = g, rr.ripemd160 = (0, t.wrapConstructor)(() => new g()), rr;
}
var ig;
function T0() {
  if (ig) return Ra;
  ig = 1, Object.defineProperty(Ra, "__esModule", { value: !0 }), Ra.ripemd160 = o;
  const e = /* @__PURE__ */ z1(), t = Oe(), n = be(), r = Y();
  function o(a, i) {
    const s = i || "hex", u = (0, e.ripemd160)((0, t.isHex)(a, { strict: !1 }) ? (0, n.toBytes)(a) : a);
    return s === "bytes" ? u : (0, r.toHex)(u);
  }
  return Ra;
}
var Oa = {}, Ba = {}, Ca = {}, Rn = {}, ag;
function A0() {
  return ag || (ag = 1, Object.defineProperty(Rn, "__esModule", { value: !0 }), Rn.presignMessagePrefix = void 0, Rn.presignMessagePrefix = `Ethereum Signed Message:
`), Rn;
}
var sg;
function S0() {
  if (sg) return Ca;
  sg = 1, Object.defineProperty(Ca, "__esModule", { value: !0 }), Ca.toPrefixedMessage = o;
  const e = A0(), t = Be(), n = Ne(), r = Y();
  function o(a) {
    const i = typeof a == "string" ? (0, r.stringToHex)(a) : typeof a.raw == "string" ? a.raw : (0, r.bytesToHex)(a.raw), s = (0, r.stringToHex)(`${e.presignMessagePrefix}${(0, n.size)(i)}`);
    return (0, t.concat)([s, i]);
  }
  return Ca;
}
var ug;
function ao() {
  if (ug) return Ba;
  ug = 1, Object.defineProperty(Ba, "__esModule", { value: !0 }), Ba.hashMessage = n;
  const e = Me(), t = S0();
  function n(r, o) {
    return (0, e.keccak256)((0, t.toPrefixedMessage)(r), o);
  }
  return Ba;
}
var cg;
function vd() {
  if (cg) return Oa;
  cg = 1, Object.defineProperty(Oa, "__esModule", { value: !0 }), Oa.recoverMessageAddress = n;
  const e = ao(), t = Dt();
  async function n({ message: r, signature: o }) {
    return (0, t.recoverAddress)({ hash: (0, e.hashMessage)(r), signature: o });
  }
  return Oa;
}
var qa = {}, dg;
function Ed() {
  if (dg) return qa;
  dg = 1, Object.defineProperty(qa, "__esModule", { value: !0 }), qa.recoverTypedDataAddress = n;
  const e = io(), t = Dt();
  async function n(r) {
    const { domain: o, message: a, primaryType: i, signature: s, types: u } = r;
    return (0, t.recoverAddress)({
      hash: (0, e.hashTypedData)({
        domain: o,
        message: a,
        primaryType: i,
        types: u
      }),
      signature: s
    });
  }
  return qa;
}
var Ma = {}, fg;
function I0() {
  if (fg) return Ma;
  fg = 1, Object.defineProperty(Ma, "__esModule", { value: !0 }), Ma.verifyHash = r;
  const e = Ue(), t = wt(), n = Dt();
  async function r({ address: o, hash: a, signature: i }) {
    return (0, t.isAddressEqual)((0, e.getAddress)(o), await (0, n.recoverAddress)({ hash: a, signature: i }));
  }
  return Ma;
}
var xa = {}, lg;
function R0() {
  if (lg) return xa;
  lg = 1, Object.defineProperty(xa, "__esModule", { value: !0 }), xa.verifyMessage = r;
  const e = Ue(), t = wt(), n = vd();
  async function r({ address: o, message: a, signature: i }) {
    return (0, t.isAddressEqual)((0, e.getAddress)(o), await (0, n.recoverMessageAddress)({ message: a, signature: i }));
  }
  return xa;
}
var Fa = {}, mg;
function O0() {
  if (mg) return Fa;
  mg = 1, Object.defineProperty(Fa, "__esModule", { value: !0 }), Fa.verifyTypedData = r;
  const e = Ue(), t = wt(), n = Ed();
  async function r(o) {
    const { address: a, domain: i, message: s, primaryType: u, signature: d, types: f } = o;
    return (0, t.isAddressEqual)((0, e.getAddress)(a), await (0, n.recoverTypedDataAddress)({
      domain: i,
      message: s,
      primaryType: u,
      signature: d,
      types: f
    }));
  }
  return Fa;
}
var ka = {}, Ha = {}, nr = {}, bg;
function jd() {
  return bg || (bg = 1, Object.defineProperty(nr, "__esModule", { value: !0 }), nr.zeroHash = nr.erc6492MagicBytes = void 0, nr.erc6492MagicBytes = "0x6492649264926492649264926492649264926492649264926492649264926492", nr.zeroHash = "0x0000000000000000000000000000000000000000000000000000000000000000"), nr;
}
var gg;
function Hu() {
  if (gg) return Ha;
  gg = 1, Object.defineProperty(Ha, "__esModule", { value: !0 }), Ha.isErc6492Signature = n;
  const e = jd(), t = Je();
  function n(r) {
    return (0, t.sliceHex)(r, -32) === e.erc6492MagicBytes;
  }
  return Ha;
}
var yg;
function B0() {
  if (yg) return ka;
  yg = 1, Object.defineProperty(ka, "__esModule", { value: !0 }), ka.parseErc6492Signature = n;
  const e = $t(), t = Hu();
  function n(r) {
    if (!(0, t.isErc6492Signature)(r))
      return { signature: r };
    const [o, a, i] = (0, e.decodeAbiParameters)([{ type: "address" }, { type: "bytes" }, { type: "bytes" }], r);
    return { address: o, data: a, signature: i };
  }
  return ka;
}
var $a = {}, hg;
function Pd() {
  if (hg) return $a;
  hg = 1, Object.defineProperty($a, "__esModule", { value: !0 }), $a.serializeErc6492Signature = o;
  const e = jd(), t = Ye(), n = Be(), r = be();
  function o(a) {
    const { address: i, data: s, signature: u, to: d = "hex" } = a, f = (0, n.concatHex)([
      (0, t.encodeAbiParameters)([{ type: "address" }, { type: "bytes" }, { type: "bytes" }], [i, s, u]),
      e.erc6492MagicBytes
    ]);
    return d === "hex" ? f : (0, r.hexToBytes)(f);
  }
  return $a;
}
var Na = {}, pg;
function wd() {
  if (pg) return Na;
  pg = 1, Object.defineProperty(Na, "__esModule", { value: !0 }), Na.getSerializedTransactionType = r;
  const e = De(), t = Je(), n = Pe();
  function r(o) {
    const a = (0, t.sliceHex)(o, 0, 1);
    if (a === "0x04")
      return "eip7702";
    if (a === "0x03")
      return "eip4844";
    if (a === "0x02")
      return "eip1559";
    if (a === "0x01")
      return "eip2930";
    if (a !== "0x" && (0, n.hexToNumber)(a) >= 192)
      return "legacy";
    throw new e.InvalidSerializedTransactionTypeError({ serializedType: a });
  }
  return Na;
}
var Mt = {}, _g;
function $u() {
  if (_g) return Mt;
  _g = 1, Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.assertTransactionEIP7702 = c, Mt.assertTransactionEIP4844 = m, Mt.assertTransactionEIP1559 = y, Mt.assertTransactionEIP2930 = g, Mt.assertTransactionLegacy = b;
  const e = Vh(), t = Vc(), n = Ze(), r = ie(), o = Wh(), a = Xn(), i = Et(), s = ze(), u = Ne(), d = Je(), f = Pe();
  function c(h) {
    const { authorizationList: _ } = h;
    if (_)
      for (const P of _) {
        const { contractAddress: j, chainId: v } = P;
        if (!(0, s.isAddress)(j))
          throw new n.InvalidAddressError({ address: j });
        if (v < 0)
          throw new a.InvalidChainIdError({ chainId: v });
      }
    y(h);
  }
  function m(h) {
    const { blobVersionedHashes: _ } = h;
    if (_) {
      if (_.length === 0)
        throw new o.EmptyBlobError();
      for (const P of _) {
        const j = (0, u.size)(P), v = (0, f.hexToNumber)((0, d.slice)(P, 0, 1));
        if (j !== 32)
          throw new o.InvalidVersionedHashSizeError({ hash: P, size: j });
        if (v !== e.versionedHashVersionKzg)
          throw new o.InvalidVersionedHashVersionError({
            hash: P,
            version: v
          });
      }
    }
    y(h);
  }
  function y(h) {
    const { chainId: _, maxPriorityFeePerGas: P, maxFeePerGas: j, to: v } = h;
    if (_ <= 0)
      throw new a.InvalidChainIdError({ chainId: _ });
    if (v && !(0, s.isAddress)(v))
      throw new n.InvalidAddressError({ address: v });
    if (j && j > t.maxUint256)
      throw new i.FeeCapTooHighError({ maxFeePerGas: j });
    if (P && j && P > j)
      throw new i.TipAboveFeeCapError({ maxFeePerGas: j, maxPriorityFeePerGas: P });
  }
  function g(h) {
    const { chainId: _, maxPriorityFeePerGas: P, gasPrice: j, maxFeePerGas: v, to: E } = h;
    if (_ <= 0)
      throw new a.InvalidChainIdError({ chainId: _ });
    if (E && !(0, s.isAddress)(E))
      throw new n.InvalidAddressError({ address: E });
    if (P || v)
      throw new r.BaseError("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
    if (j && j > t.maxUint256)
      throw new i.FeeCapTooHighError({ maxFeePerGas: j });
  }
  function b(h) {
    const { chainId: _, maxPriorityFeePerGas: P, gasPrice: j, maxFeePerGas: v, to: E } = h;
    if (E && !(0, s.isAddress)(E))
      throw new n.InvalidAddressError({ address: E });
    if (typeof _ < "u" && _ <= 0)
      throw new a.InvalidChainIdError({ chainId: _ });
    if (P || v)
      throw new r.BaseError("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
    if (j && j > t.maxUint256)
      throw new i.FeeCapTooHighError({ maxFeePerGas: j });
  }
  return Mt;
}
var Sr = {}, vg;
function Td() {
  if (vg) return Sr;
  vg = 1, Object.defineProperty(Sr, "__esModule", { value: !0 }), Sr.parseTransaction = m, Sr.toTransactionArray = P, Sr.parseAccessList = j;
  const e = Ze(), t = De(), n = ze(), r = Ru(), o = Oe(), a = kt(), i = Ht(), s = Pe(), u = pd(), d = _d(), f = $u(), c = wd();
  function m(l) {
    const p = (0, c.getSerializedTransactionType)(l);
    return p === "eip1559" ? b(l) : p === "eip2930" ? h(l) : p === "eip4844" ? g(l) : p === "eip7702" ? y(l) : _(l);
  }
  function y(l) {
    const p = P(l), [T, w, I, C, B, M, A, x, H, F, $, q, S] = p;
    if (p.length !== 10 && p.length !== 13)
      throw new t.InvalidSerializedTransactionError({
        attributes: {
          chainId: T,
          nonce: w,
          maxPriorityFeePerGas: I,
          maxFeePerGas: C,
          gas: B,
          to: M,
          value: A,
          data: x,
          accessList: H,
          authorizationList: F,
          ...p.length > 9 ? {
            v: $,
            r: q,
            s: S
          } : {}
        },
        serializedTransaction: l,
        type: "eip7702"
      });
    const R = {
      chainId: (0, s.hexToNumber)(T),
      type: "eip7702"
    };
    return (0, o.isHex)(M) && M !== "0x" && (R.to = M), (0, o.isHex)(B) && B !== "0x" && (R.gas = (0, s.hexToBigInt)(B)), (0, o.isHex)(x) && x !== "0x" && (R.data = x), (0, o.isHex)(w) && w !== "0x" && (R.nonce = (0, s.hexToNumber)(w)), (0, o.isHex)(A) && A !== "0x" && (R.value = (0, s.hexToBigInt)(A)), (0, o.isHex)(C) && C !== "0x" && (R.maxFeePerGas = (0, s.hexToBigInt)(C)), (0, o.isHex)(I) && I !== "0x" && (R.maxPriorityFeePerGas = (0, s.hexToBigInt)(I)), H.length !== 0 && H !== "0x" && (R.accessList = j(H)), F.length !== 0 && F !== "0x" && (R.authorizationList = v(F)), (0, f.assertTransactionEIP7702)(R), { ...p.length === 13 ? E(p) : void 0, ...R };
  }
  function g(l) {
    const p = P(l), T = p.length === 4, w = T ? p[0] : p, I = T ? p.slice(1) : [], [C, B, M, A, x, H, F, $, q, S, R, O, k, z] = w, [L, U, G] = I;
    if (!(w.length === 11 || w.length === 14))
      throw new t.InvalidSerializedTransactionError({
        attributes: {
          chainId: C,
          nonce: B,
          maxPriorityFeePerGas: M,
          maxFeePerGas: A,
          gas: x,
          to: H,
          value: F,
          data: $,
          accessList: q,
          ...w.length > 9 ? {
            v: O,
            r: k,
            s: z
          } : {}
        },
        serializedTransaction: l,
        type: "eip4844"
      });
    const V = {
      blobVersionedHashes: R,
      chainId: (0, s.hexToNumber)(C),
      type: "eip4844"
    };
    return (0, o.isHex)(H) && H !== "0x" && (V.to = H), (0, o.isHex)(x) && x !== "0x" && (V.gas = (0, s.hexToBigInt)(x)), (0, o.isHex)($) && $ !== "0x" && (V.data = $), (0, o.isHex)(B) && B !== "0x" && (V.nonce = (0, s.hexToNumber)(B)), (0, o.isHex)(F) && F !== "0x" && (V.value = (0, s.hexToBigInt)(F)), (0, o.isHex)(S) && S !== "0x" && (V.maxFeePerBlobGas = (0, s.hexToBigInt)(S)), (0, o.isHex)(A) && A !== "0x" && (V.maxFeePerGas = (0, s.hexToBigInt)(A)), (0, o.isHex)(M) && M !== "0x" && (V.maxPriorityFeePerGas = (0, s.hexToBigInt)(M)), q.length !== 0 && q !== "0x" && (V.accessList = j(q)), L && U && G && (V.sidecars = (0, r.toBlobSidecars)({
      blobs: L,
      commitments: U,
      proofs: G
    })), (0, f.assertTransactionEIP4844)(V), { ...w.length === 14 ? E(w) : void 0, ...V };
  }
  function b(l) {
    const p = P(l), [T, w, I, C, B, M, A, x, H, F, $, q] = p;
    if (!(p.length === 9 || p.length === 12))
      throw new t.InvalidSerializedTransactionError({
        attributes: {
          chainId: T,
          nonce: w,
          maxPriorityFeePerGas: I,
          maxFeePerGas: C,
          gas: B,
          to: M,
          value: A,
          data: x,
          accessList: H,
          ...p.length > 9 ? {
            v: F,
            r: $,
            s: q
          } : {}
        },
        serializedTransaction: l,
        type: "eip1559"
      });
    const S = {
      chainId: (0, s.hexToNumber)(T),
      type: "eip1559"
    };
    return (0, o.isHex)(M) && M !== "0x" && (S.to = M), (0, o.isHex)(B) && B !== "0x" && (S.gas = (0, s.hexToBigInt)(B)), (0, o.isHex)(x) && x !== "0x" && (S.data = x), (0, o.isHex)(w) && w !== "0x" && (S.nonce = (0, s.hexToNumber)(w)), (0, o.isHex)(A) && A !== "0x" && (S.value = (0, s.hexToBigInt)(A)), (0, o.isHex)(C) && C !== "0x" && (S.maxFeePerGas = (0, s.hexToBigInt)(C)), (0, o.isHex)(I) && I !== "0x" && (S.maxPriorityFeePerGas = (0, s.hexToBigInt)(I)), H.length !== 0 && H !== "0x" && (S.accessList = j(H)), (0, f.assertTransactionEIP1559)(S), { ...p.length === 12 ? E(p) : void 0, ...S };
  }
  function h(l) {
    const p = P(l), [T, w, I, C, B, M, A, x, H, F, $] = p;
    if (!(p.length === 8 || p.length === 11))
      throw new t.InvalidSerializedTransactionError({
        attributes: {
          chainId: T,
          nonce: w,
          gasPrice: I,
          gas: C,
          to: B,
          value: M,
          data: A,
          accessList: x,
          ...p.length > 8 ? {
            v: H,
            r: F,
            s: $
          } : {}
        },
        serializedTransaction: l,
        type: "eip2930"
      });
    const q = {
      chainId: (0, s.hexToNumber)(T),
      type: "eip2930"
    };
    return (0, o.isHex)(B) && B !== "0x" && (q.to = B), (0, o.isHex)(C) && C !== "0x" && (q.gas = (0, s.hexToBigInt)(C)), (0, o.isHex)(A) && A !== "0x" && (q.data = A), (0, o.isHex)(w) && w !== "0x" && (q.nonce = (0, s.hexToNumber)(w)), (0, o.isHex)(M) && M !== "0x" && (q.value = (0, s.hexToBigInt)(M)), (0, o.isHex)(I) && I !== "0x" && (q.gasPrice = (0, s.hexToBigInt)(I)), x.length !== 0 && x !== "0x" && (q.accessList = j(x)), (0, f.assertTransactionEIP2930)(q), { ...p.length === 11 ? E(p) : void 0, ...q };
  }
  function _(l) {
    const p = (0, u.fromRlp)(l, "hex"), [T, w, I, C, B, M, A, x, H] = p;
    if (!(p.length === 6 || p.length === 9))
      throw new t.InvalidSerializedTransactionError({
        attributes: {
          nonce: T,
          gasPrice: w,
          gas: I,
          to: C,
          value: B,
          data: M,
          ...p.length > 6 ? {
            v: A,
            r: x,
            s: H
          } : {}
        },
        serializedTransaction: l,
        type: "legacy"
      });
    const F = {
      type: "legacy"
    };
    if ((0, o.isHex)(C) && C !== "0x" && (F.to = C), (0, o.isHex)(I) && I !== "0x" && (F.gas = (0, s.hexToBigInt)(I)), (0, o.isHex)(M) && M !== "0x" && (F.data = M), (0, o.isHex)(T) && T !== "0x" && (F.nonce = (0, s.hexToNumber)(T)), (0, o.isHex)(B) && B !== "0x" && (F.value = (0, s.hexToBigInt)(B)), (0, o.isHex)(w) && w !== "0x" && (F.gasPrice = (0, s.hexToBigInt)(w)), (0, f.assertTransactionLegacy)(F), p.length === 6)
      return F;
    const $ = (0, o.isHex)(A) && A !== "0x" ? (0, s.hexToBigInt)(A) : 0n;
    if (H === "0x" && x === "0x")
      return $ > 0 && (F.chainId = Number($)), F;
    const q = $, S = Number((q - 35n) / 2n);
    if (S > 0)
      F.chainId = S;
    else if (q !== 27n && q !== 28n)
      throw new t.InvalidLegacyVError({ v: q });
    return F.v = q, F.s = H, F.r = x, F.yParity = q % 2n === 0n ? 1 : 0, F;
  }
  function P(l) {
    return (0, u.fromRlp)(`0x${l.slice(4)}`, "hex");
  }
  function j(l) {
    const p = [];
    for (let T = 0; T < l.length; T++) {
      const [w, I] = l[T];
      if (!(0, n.isAddress)(w, { strict: !1 }))
        throw new e.InvalidAddressError({ address: w });
      p.push({
        address: w,
        storageKeys: I.map((C) => (0, d.isHash)(C) ? C : (0, i.trim)(C))
      });
    }
    return p;
  }
  function v(l) {
    const p = [];
    for (let T = 0; T < l.length; T++) {
      const [w, I, C, B, M, A] = l[T];
      p.push({
        chainId: (0, s.hexToNumber)(w),
        contractAddress: I,
        nonce: (0, s.hexToNumber)(C),
        ...E([B, M, A])
      });
    }
    return p;
  }
  function E(l) {
    const p = l.slice(-3), T = p[0] === "0x" || (0, s.hexToBigInt)(p[0]) === 0n ? 27n : 28n;
    return {
      r: (0, a.padHex)(p[1], { size: 32 }),
      s: (0, a.padHex)(p[2], { size: 32 }),
      v: T,
      yParity: T === 27n ? 0 : 1
    };
  }
  return Sr;
}
var On = {}, za = {}, Eg;
function D1() {
  if (Eg) return za;
  Eg = 1, Object.defineProperty(za, "__esModule", { value: !0 }), za.serializeAuthorizationList = n;
  const e = Y(), t = Nu();
  function n(r) {
    if (!r || r.length === 0)
      return [];
    const o = [];
    for (const a of r) {
      const { contractAddress: i, chainId: s, nonce: u, ...d } = a;
      o.push([
        s ? (0, e.toHex)(s) : "0x",
        i,
        u ? (0, e.toHex)(u) : "0x",
        ...(0, t.toYParitySignatureArray)({}, d)
      ]);
    }
    return o;
  }
  return za;
}
var Da = {}, jg;
function Ad() {
  if (jg) return Da;
  jg = 1, Object.defineProperty(Da, "__esModule", { value: !0 }), Da.serializeAccessList = r;
  const e = Ze(), t = De(), n = ze();
  function r(o) {
    if (!o || o.length === 0)
      return [];
    const a = [];
    for (let i = 0; i < o.length; i++) {
      const { address: s, storageKeys: u } = o[i];
      for (let d = 0; d < u.length; d++)
        if (u[d].length - 2 !== 64)
          throw new t.InvalidStorageKeySizeError({ storageKey: u[d] });
      if (!(0, n.isAddress)(s, { strict: !1 }))
        throw new e.InvalidAddressError({ address: s });
      a.push([s, u]);
    }
    return a;
  }
  return Da;
}
var Pg;
function Nu() {
  if (Pg) return On;
  Pg = 1, Object.defineProperty(On, "__esModule", { value: !0 }), On.serializeTransaction = y, On.toYParitySignatureArray = j;
  const e = De(), t = Su(), n = Iu(), r = Xc(), o = Ru(), a = Be(), i = Ht(), s = Y(), u = Gn(), d = D1(), f = $u(), c = Ou(), m = Ad();
  function y(v, E) {
    const l = (0, c.getTransactionType)(v);
    return l === "eip1559" ? h(v, E) : l === "eip2930" ? _(v, E) : l === "eip4844" ? b(v, E) : l === "eip7702" ? g(v, E) : P(v, E);
  }
  function g(v, E) {
    const { authorizationList: l, chainId: p, gas: T, nonce: w, to: I, value: C, maxFeePerGas: B, maxPriorityFeePerGas: M, accessList: A, data: x } = v;
    (0, f.assertTransactionEIP7702)(v);
    const H = (0, m.serializeAccessList)(A), F = (0, d.serializeAuthorizationList)(l);
    return (0, a.concatHex)([
      "0x04",
      (0, u.toRlp)([
        (0, s.toHex)(p),
        w ? (0, s.toHex)(w) : "0x",
        M ? (0, s.toHex)(M) : "0x",
        B ? (0, s.toHex)(B) : "0x",
        T ? (0, s.toHex)(T) : "0x",
        I ?? "0x",
        C ? (0, s.toHex)(C) : "0x",
        x ?? "0x",
        H,
        F,
        ...j(v, E)
      ])
    ]);
  }
  function b(v, E) {
    const { chainId: l, gas: p, nonce: T, to: w, value: I, maxFeePerBlobGas: C, maxFeePerGas: B, maxPriorityFeePerGas: M, accessList: A, data: x } = v;
    (0, f.assertTransactionEIP4844)(v);
    let H = v.blobVersionedHashes, F = v.sidecars;
    if (v.blobs && (typeof H > "u" || typeof F > "u")) {
      const k = typeof v.blobs[0] == "string" ? v.blobs : v.blobs.map((U) => (0, s.bytesToHex)(U)), z = v.kzg, L = (0, t.blobsToCommitments)({
        blobs: k,
        kzg: z
      });
      if (typeof H > "u" && (H = (0, r.commitmentsToVersionedHashes)({
        commitments: L
      })), typeof F > "u") {
        const U = (0, n.blobsToProofs)({ blobs: k, commitments: L, kzg: z });
        F = (0, o.toBlobSidecars)({ blobs: k, commitments: L, proofs: U });
      }
    }
    const $ = (0, m.serializeAccessList)(A), q = [
      (0, s.toHex)(l),
      T ? (0, s.toHex)(T) : "0x",
      M ? (0, s.toHex)(M) : "0x",
      B ? (0, s.toHex)(B) : "0x",
      p ? (0, s.toHex)(p) : "0x",
      w ?? "0x",
      I ? (0, s.toHex)(I) : "0x",
      x ?? "0x",
      $,
      C ? (0, s.toHex)(C) : "0x",
      H ?? [],
      ...j(v, E)
    ], S = [], R = [], O = [];
    if (F)
      for (let k = 0; k < F.length; k++) {
        const { blob: z, commitment: L, proof: U } = F[k];
        S.push(z), R.push(L), O.push(U);
      }
    return (0, a.concatHex)([
      "0x03",
      F ? (0, u.toRlp)([q, S, R, O]) : (0, u.toRlp)(q)
    ]);
  }
  function h(v, E) {
    const { chainId: l, gas: p, nonce: T, to: w, value: I, maxFeePerGas: C, maxPriorityFeePerGas: B, accessList: M, data: A } = v;
    (0, f.assertTransactionEIP1559)(v);
    const x = (0, m.serializeAccessList)(M), H = [
      (0, s.toHex)(l),
      T ? (0, s.toHex)(T) : "0x",
      B ? (0, s.toHex)(B) : "0x",
      C ? (0, s.toHex)(C) : "0x",
      p ? (0, s.toHex)(p) : "0x",
      w ?? "0x",
      I ? (0, s.toHex)(I) : "0x",
      A ?? "0x",
      x,
      ...j(v, E)
    ];
    return (0, a.concatHex)([
      "0x02",
      (0, u.toRlp)(H)
    ]);
  }
  function _(v, E) {
    const { chainId: l, gas: p, data: T, nonce: w, to: I, value: C, accessList: B, gasPrice: M } = v;
    (0, f.assertTransactionEIP2930)(v);
    const A = (0, m.serializeAccessList)(B), x = [
      (0, s.toHex)(l),
      w ? (0, s.toHex)(w) : "0x",
      M ? (0, s.toHex)(M) : "0x",
      p ? (0, s.toHex)(p) : "0x",
      I ?? "0x",
      C ? (0, s.toHex)(C) : "0x",
      T ?? "0x",
      A,
      ...j(v, E)
    ];
    return (0, a.concatHex)([
      "0x01",
      (0, u.toRlp)(x)
    ]);
  }
  function P(v, E) {
    const { chainId: l = 0, gas: p, data: T, nonce: w, to: I, value: C, gasPrice: B } = v;
    (0, f.assertTransactionLegacy)(v);
    let M = [
      w ? (0, s.toHex)(w) : "0x",
      B ? (0, s.toHex)(B) : "0x",
      p ? (0, s.toHex)(p) : "0x",
      I ?? "0x",
      C ? (0, s.toHex)(C) : "0x",
      T ?? "0x"
    ];
    if (E) {
      const A = (() => {
        if (E.v >= 35n)
          return (E.v - 35n) / 2n > 0 ? E.v : 27n + (E.v === 35n ? 0n : 1n);
        if (l > 0)
          return BigInt(l * 2) + BigInt(35n + E.v - 27n);
        const F = 27n + (E.v === 27n ? 0n : 1n);
        if (E.v !== F)
          throw new e.InvalidLegacyVError({ v: E.v });
        return F;
      })(), x = (0, i.trim)(E.r), H = (0, i.trim)(E.s);
      M = [
        ...M,
        (0, s.toHex)(A),
        x === "0x00" ? "0x" : x,
        H === "0x00" ? "0x" : H
      ];
    } else l > 0 && (M = [
      ...M,
      (0, s.toHex)(l),
      "0x",
      "0x"
    ]);
    return (0, u.toRlp)(M);
  }
  function j(v, E) {
    const l = E ?? v, { v: p, yParity: T } = l;
    if (typeof l.r > "u")
      return [];
    if (typeof l.s > "u")
      return [];
    if (typeof p > "u" && typeof T > "u")
      return [];
    const w = (0, i.trim)(l.r), I = (0, i.trim)(l.s);
    return [typeof T == "number" ? T ? (0, s.toHex)(1) : "0x" : p === 0n ? "0x" : p === 1n ? (0, s.toHex)(1) : p === 27n ? "0x" : (0, s.toHex)(1), w === "0x00" ? "0x" : w, I === "0x00" ? "0x" : I];
  }
  return On;
}
var La = {}, Bn = {}, wg;
function C0() {
  if (wg) return Bn;
  wg = 1, Object.defineProperty(Bn, "__esModule", { value: !0 }), Bn.InvalidDecimalNumberError = void 0;
  const e = ie();
  class t extends e.BaseError {
    constructor({ value: r }) {
      super(`Number \`${r}\` is not a valid decimal number.`, {
        name: "InvalidDecimalNumberError"
      });
    }
  }
  return Bn.InvalidDecimalNumberError = t, Bn;
}
var Tg;
function zu() {
  if (Tg) return La;
  Tg = 1, Object.defineProperty(La, "__esModule", { value: !0 }), La.parseUnits = t;
  const e = C0();
  function t(n, r) {
    if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(n))
      throw new e.InvalidDecimalNumberError({ value: n });
    let [o, a = "0"] = n.split(".");
    const i = o.startsWith("-");
    if (i && (o = o.slice(1)), a = a.replace(/(0+)$/, ""), r === 0)
      Math.round(+`.${a}`) === 1 && (o = `${BigInt(o) + 1n}`), a = "";
    else if (a.length > r) {
      const [s, u, d] = [
        a.slice(0, r - 1),
        a.slice(r - 1, r),
        a.slice(r)
      ], f = Math.round(+`${u}.${d}`);
      f > 9 ? a = `${BigInt(s) + BigInt(1)}0`.padStart(s.length + 1, "0") : a = `${s}${f}`, a.length > r && (a = a.slice(1), o = `${BigInt(o) + 1n}`), a = a.slice(0, r);
    } else
      a = a.padEnd(r, "0");
    return BigInt(`${i ? "-" : ""}${o}${a}`);
  }
  return La;
}
var Ua = {}, Ag;
function q0() {
  if (Ag) return Ua;
  Ag = 1, Object.defineProperty(Ua, "__esModule", { value: !0 }), Ua.parseEther = n;
  const e = Dn(), t = zu();
  function n(r, o = "wei") {
    return (0, t.parseUnits)(r, e.etherUnits[o]);
  }
  return Ua;
}
var Ga = {}, Sg;
function M0() {
  if (Sg) return Ga;
  Sg = 1, Object.defineProperty(Ga, "__esModule", { value: !0 }), Ga.parseGwei = n;
  const e = Dn(), t = zu();
  function n(r, o = "wei") {
    return (0, t.parseUnits)(r, e.gweiUnits[o]);
  }
  return Ga;
}
var or = {}, Ig;
function x0() {
  if (Ig) return or;
  Ig = 1, Object.defineProperty(or, "__esModule", { value: !0 }), or.nonceManager = void 0, or.createNonceManager = n, or.jsonRpc = r;
  const e = Zc(), t = Nn();
  function n(o) {
    const { source: a } = o, i = /* @__PURE__ */ new Map(), s = new t.LruMap(8192), u = /* @__PURE__ */ new Map(), d = ({ address: f, chainId: c }) => `${f}.${c}`;
    return {
      async consume({ address: f, chainId: c, client: m }) {
        const y = d({ address: f, chainId: c }), g = this.get({ address: f, chainId: c, client: m });
        this.increment({ address: f, chainId: c });
        const b = await g;
        return await a.set({ address: f, chainId: c }, b), s.set(y, b), b;
      },
      async increment({ address: f, chainId: c }) {
        const m = d({ address: f, chainId: c }), y = i.get(m) ?? 0;
        i.set(m, y + 1);
      },
      async get({ address: f, chainId: c, client: m }) {
        const y = d({ address: f, chainId: c });
        let g = u.get(y);
        return g || (g = (async () => {
          try {
            const h = await a.get({ address: f, chainId: c, client: m }), _ = s.get(y) ?? 0;
            return _ > 0 && h <= _ ? _ + 1 : (s.delete(y), h);
          } finally {
            this.reset({ address: f, chainId: c });
          }
        })(), u.set(y, g)), (i.get(y) ?? 0) + await g;
      },
      reset({ address: f, chainId: c }) {
        const m = d({ address: f, chainId: c });
        i.delete(m), u.delete(m);
      }
    };
  }
  function r() {
    return {
      async get(o) {
        const { address: a, client: i } = o;
        return (0, e.getTransactionCount)(i, {
          address: a,
          blockTag: "pending"
        });
      },
      set() {
      }
    };
  }
  return or.nonceManager = n({
    source: r()
  }), or;
}
var Rg;
function F0() {
  return Rg || (Rg = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isAddress = e.getAddress = e.getCreate2Address = e.getCreateAddress = e.getContractAddress = e.publicKeyToAddress = e.parseAccount = e.formatAbiParams = e.formatAbiItem = e.formatAbiItemWithArgs = e.encodePacked = e.parseAbiParameters = e.parseAbiParameter = e.parseAbiItem = e.parseAbi = e.getAbiItem = e.parseEventLogs = e.encodeFunctionResult = e.encodeFunctionData = e.encodeEventTopics = e.encodeErrorResult = e.encodeDeployData = e.encodeAbiParameters = e.decodeFunctionResult = e.decodeFunctionData = e.decodeEventLog = e.decodeErrorResult = e.decodeAbiParameters = e.validateTypedData = e.serializeTypedData = e.stringify = e.getWebSocketRpcClient = e.socketClientCache = e.getSocketRpcClient = e.getHttpRpcClient = e.rpc = e.getSocket = e.integerRegex = e.bytesRegex = e.arrayRegex = e.getChainContractAddress = e.extractChain = e.defineChain = e.assertCurrentChain = e.offchainLookupSignature = e.offchainLookupAbiItem = e.offchainLookup = e.ccipFetch = e.ccipRequest = e.buildRequest = void 0, e.getCallError = e.getNodeError = e.containsNodeError = e.fromRlp = e.hexToString = e.hexToNumber = e.hexToBigInt = e.hexToBool = e.fromHex = e.fromBytes = e.bytesToString = e.bytesToNumber = e.bytesToBool = e.bytesToBigint = e.bytesToBigInt = e.stringToHex = e.numberToHex = e.toHex = e.bytesToHex = e.boolToHex = e.stringToBytes = e.numberToBytes = e.hexToBytes = e.toBytes = e.boolToBytes = e.toRlp = e.extract = e.formatTransactionRequest = e.defineTransactionRequest = e.defineTransactionReceipt = e.formatLog = e.transactionType = e.formatTransaction = e.defineTransaction = e.formatBlock = e.defineBlock = e.trim = e.sliceHex = e.sliceBytes = e.slice = e.size = e.padHex = e.padBytes = e.pad = e.isHex = e.isBytes = e.concatHex = e.concatBytes = e.concat = e.isAddressEqual = void 0, e.nonceManager = e.createNonceManager = e.parseGwei = e.parseEther = e.parseUnits = e.formatUnits = e.formatGwei = e.formatEther = e.serializeAccessList = e.serializeTransaction = e.parseTransaction = e.assertTransactionLegacy = e.assertTransactionEIP2930 = e.assertTransactionEIP1559 = e.assertRequest = e.getTransactionType = e.getSerializedTransactionType = e.serializeErc6492Signature = e.isErc6492Signature = e.parseErc6492Signature = e.hashMessage = e.verifyTypedData = e.verifyMessage = e.verifyHash = e.recoverTypedDataAddress = e.recoverPublicKey = e.recoverMessageAddress = e.recoverAddress = e.hashTypedData = e.hashStruct = e.ripemd160 = e.sha256 = e.keccak256 = e.isHash = e.toFunctionHash = e.toEventHash = e.getFunctionSignature = e.toFunctionSignature = e.getEventSignature = e.toEventSignature = e.getFunctionSelector = e.toFunctionSelector = e.getEventSelector = e.toEventSelector = e.defineFormatter = e.getAction = e.getTransactionError = e.getEstimateGasError = e.getContractError = void 0;
    var t = n0();
    Object.defineProperty(e, "buildRequest", { enumerable: !0, get: function() {
      return t.buildRequest;
    } });
    var n = id();
    Object.defineProperty(e, "ccipRequest", { enumerable: !0, get: function() {
      return n.ccipRequest;
    } }), Object.defineProperty(e, "ccipFetch", { enumerable: !0, get: function() {
      return n.ccipRequest;
    } }), Object.defineProperty(e, "offchainLookup", { enumerable: !0, get: function() {
      return n.offchainLookup;
    } }), Object.defineProperty(e, "offchainLookupAbiItem", { enumerable: !0, get: function() {
      return n.offchainLookupAbiItem;
    } }), Object.defineProperty(e, "offchainLookupSignature", { enumerable: !0, get: function() {
      return n.offchainLookupSignature;
    } });
    var r = Mu();
    Object.defineProperty(e, "assertCurrentChain", { enumerable: !0, get: function() {
      return r.assertCurrentChain;
    } });
    var o = f0();
    Object.defineProperty(e, "defineChain", { enumerable: !0, get: function() {
      return o.defineChain;
    } });
    var a = l0();
    Object.defineProperty(e, "extractChain", { enumerable: !0, get: function() {
      return a.extractChain;
    } });
    var i = Lt();
    Object.defineProperty(e, "getChainContractAddress", { enumerable: !0, get: function() {
      return i.getChainContractAddress;
    } });
    var s = vu();
    Object.defineProperty(e, "arrayRegex", { enumerable: !0, get: function() {
      return s.arrayRegex;
    } }), Object.defineProperty(e, "bytesRegex", { enumerable: !0, get: function() {
      return s.bytesRegex;
    } }), Object.defineProperty(e, "integerRegex", { enumerable: !0, get: function() {
      return s.integerRegex;
    } });
    var u = b0();
    Object.defineProperty(e, "getSocket", { enumerable: !0, get: function() {
      return u.getSocket;
    } }), Object.defineProperty(e, "rpc", { enumerable: !0, get: function() {
      return u.rpc;
    } });
    var d = ld();
    Object.defineProperty(e, "getHttpRpcClient", { enumerable: !0, get: function() {
      return d.getHttpRpcClient;
    } });
    var f = m0();
    Object.defineProperty(e, "getSocketRpcClient", { enumerable: !0, get: function() {
      return f.getSocketRpcClient;
    } }), Object.defineProperty(e, "socketClientCache", { enumerable: !0, get: function() {
      return f.socketClientCache;
    } });
    var c = gd();
    Object.defineProperty(e, "getWebSocketRpcClient", { enumerable: !0, get: function() {
      return c.getWebSocketRpcClient;
    } });
    var m = Ie();
    Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return m.stringify;
    } });
    var y = ku();
    Object.defineProperty(e, "serializeTypedData", { enumerable: !0, get: function() {
      return y.serializeTypedData;
    } }), Object.defineProperty(e, "validateTypedData", { enumerable: !0, get: function() {
      return y.validateTypedData;
    } });
    var g = $t();
    Object.defineProperty(e, "decodeAbiParameters", { enumerable: !0, get: function() {
      return g.decodeAbiParameters;
    } });
    var b = ju();
    Object.defineProperty(e, "decodeErrorResult", { enumerable: !0, get: function() {
      return b.decodeErrorResult;
    } });
    var h = Jn();
    Object.defineProperty(e, "decodeEventLog", { enumerable: !0, get: function() {
      return h.decodeEventLog;
    } });
    var _ = y0();
    Object.defineProperty(e, "decodeFunctionData", { enumerable: !0, get: function() {
      return _.decodeFunctionData;
    } });
    var P = At();
    Object.defineProperty(e, "decodeFunctionResult", { enumerable: !0, get: function() {
      return P.decodeFunctionResult;
    } });
    var j = Ye();
    Object.defineProperty(e, "encodeAbiParameters", { enumerable: !0, get: function() {
      return j.encodeAbiParameters;
    } });
    var v = Qn();
    Object.defineProperty(e, "encodeDeployData", { enumerable: !0, get: function() {
      return v.encodeDeployData;
    } });
    var E = h0();
    Object.defineProperty(e, "encodeErrorResult", { enumerable: !0, get: function() {
      return E.encodeErrorResult;
    } });
    var l = dr();
    Object.defineProperty(e, "encodeEventTopics", { enumerable: !0, get: function() {
      return l.encodeEventTopics;
    } });
    var p = Xe();
    Object.defineProperty(e, "encodeFunctionData", { enumerable: !0, get: function() {
      return p.encodeFunctionData;
    } });
    var T = p0();
    Object.defineProperty(e, "encodeFunctionResult", { enumerable: !0, get: function() {
      return T.encodeFunctionResult;
    } });
    var w = Yn();
    Object.defineProperty(e, "parseEventLogs", { enumerable: !0, get: function() {
      return w.parseEventLogs;
    } });
    var I = vt();
    Object.defineProperty(e, "getAbiItem", { enumerable: !0, get: function() {
      return I.getAbiItem;
    } });
    var C = /* @__PURE__ */ hu();
    Object.defineProperty(e, "parseAbi", { enumerable: !0, get: function() {
      return C.parseAbi;
    } }), Object.defineProperty(e, "parseAbiItem", { enumerable: !0, get: function() {
      return C.parseAbiItem;
    } }), Object.defineProperty(e, "parseAbiParameter", { enumerable: !0, get: function() {
      return C.parseAbiParameter;
    } }), Object.defineProperty(e, "parseAbiParameters", { enumerable: !0, get: function() {
      return C.parseAbiParameters;
    } });
    var B = _0();
    Object.defineProperty(e, "encodePacked", { enumerable: !0, get: function() {
      return B.encodePacked;
    } });
    var M = Fh();
    Object.defineProperty(e, "formatAbiItemWithArgs", { enumerable: !0, get: function() {
      return M.formatAbiItemWithArgs;
    } });
    var A = _t();
    Object.defineProperty(e, "formatAbiItem", { enumerable: !0, get: function() {
      return A.formatAbiItem;
    } }), Object.defineProperty(e, "formatAbiParams", { enumerable: !0, get: function() {
      return A.formatAbiParams;
    } });
    var x = Se();
    Object.defineProperty(e, "parseAccount", { enumerable: !0, get: function() {
      return x.parseAccount;
    } });
    var H = kh();
    Object.defineProperty(e, "publicKeyToAddress", { enumerable: !0, get: function() {
      return H.publicKeyToAddress;
    } });
    var F = v0();
    Object.defineProperty(e, "getContractAddress", { enumerable: !0, get: function() {
      return F.getContractAddress;
    } }), Object.defineProperty(e, "getCreateAddress", { enumerable: !0, get: function() {
      return F.getCreateAddress;
    } }), Object.defineProperty(e, "getCreate2Address", { enumerable: !0, get: function() {
      return F.getCreate2Address;
    } });
    var $ = Ue();
    Object.defineProperty(e, "getAddress", { enumerable: !0, get: function() {
      return $.getAddress;
    } });
    var q = ze();
    Object.defineProperty(e, "isAddress", { enumerable: !0, get: function() {
      return q.isAddress;
    } });
    var S = wt();
    Object.defineProperty(e, "isAddressEqual", { enumerable: !0, get: function() {
      return S.isAddressEqual;
    } });
    var R = Be();
    Object.defineProperty(e, "concat", { enumerable: !0, get: function() {
      return R.concat;
    } }), Object.defineProperty(e, "concatBytes", { enumerable: !0, get: function() {
      return R.concatBytes;
    } }), Object.defineProperty(e, "concatHex", { enumerable: !0, get: function() {
      return R.concatHex;
    } });
    var O = yd();
    Object.defineProperty(e, "isBytes", { enumerable: !0, get: function() {
      return O.isBytes;
    } });
    var k = Oe();
    Object.defineProperty(e, "isHex", { enumerable: !0, get: function() {
      return k.isHex;
    } });
    var z = kt();
    Object.defineProperty(e, "pad", { enumerable: !0, get: function() {
      return z.pad;
    } }), Object.defineProperty(e, "padBytes", { enumerable: !0, get: function() {
      return z.padBytes;
    } }), Object.defineProperty(e, "padHex", { enumerable: !0, get: function() {
      return z.padHex;
    } });
    var L = Ne();
    Object.defineProperty(e, "size", { enumerable: !0, get: function() {
      return L.size;
    } });
    var U = Je();
    Object.defineProperty(e, "slice", { enumerable: !0, get: function() {
      return U.slice;
    } }), Object.defineProperty(e, "sliceBytes", { enumerable: !0, get: function() {
      return U.sliceBytes;
    } }), Object.defineProperty(e, "sliceHex", { enumerable: !0, get: function() {
      return U.sliceHex;
    } });
    var G = Ht();
    Object.defineProperty(e, "trim", { enumerable: !0, get: function() {
      return G.trim;
    } });
    var V = Au();
    Object.defineProperty(e, "defineBlock", { enumerable: !0, get: function() {
      return V.defineBlock;
    } }), Object.defineProperty(e, "formatBlock", { enumerable: !0, get: function() {
      return V.formatBlock;
    } });
    var K = Kn();
    Object.defineProperty(e, "defineTransaction", { enumerable: !0, get: function() {
      return K.defineTransaction;
    } }), Object.defineProperty(e, "formatTransaction", { enumerable: !0, get: function() {
      return K.formatTransaction;
    } }), Object.defineProperty(e, "transactionType", { enumerable: !0, get: function() {
      return K.transactionType;
    } });
    var ee = Tt();
    Object.defineProperty(e, "formatLog", { enumerable: !0, get: function() {
      return ee.formatLog;
    } });
    var X = hd();
    Object.defineProperty(e, "defineTransactionReceipt", { enumerable: !0, get: function() {
      return X.defineTransactionReceipt;
    } });
    var te = jt();
    Object.defineProperty(e, "defineTransactionRequest", { enumerable: !0, get: function() {
      return te.defineTransactionRequest;
    } }), Object.defineProperty(e, "formatTransactionRequest", { enumerable: !0, get: function() {
      return te.formatTransactionRequest;
    } });
    var se = xr();
    Object.defineProperty(e, "extract", { enumerable: !0, get: function() {
      return se.extract;
    } });
    var Z = Gn();
    Object.defineProperty(e, "toRlp", { enumerable: !0, get: function() {
      return Z.toRlp;
    } });
    var J = be();
    Object.defineProperty(e, "boolToBytes", { enumerable: !0, get: function() {
      return J.boolToBytes;
    } }), Object.defineProperty(e, "toBytes", { enumerable: !0, get: function() {
      return J.toBytes;
    } }), Object.defineProperty(e, "hexToBytes", { enumerable: !0, get: function() {
      return J.hexToBytes;
    } }), Object.defineProperty(e, "numberToBytes", { enumerable: !0, get: function() {
      return J.numberToBytes;
    } }), Object.defineProperty(e, "stringToBytes", { enumerable: !0, get: function() {
      return J.stringToBytes;
    } });
    var W = Y();
    Object.defineProperty(e, "boolToHex", { enumerable: !0, get: function() {
      return W.boolToHex;
    } }), Object.defineProperty(e, "bytesToHex", { enumerable: !0, get: function() {
      return W.bytesToHex;
    } }), Object.defineProperty(e, "toHex", { enumerable: !0, get: function() {
      return W.toHex;
    } }), Object.defineProperty(e, "numberToHex", { enumerable: !0, get: function() {
      return W.numberToHex;
    } }), Object.defineProperty(e, "stringToHex", { enumerable: !0, get: function() {
      return W.stringToHex;
    } });
    var D = zc();
    Object.defineProperty(e, "bytesToBigInt", { enumerable: !0, get: function() {
      return D.bytesToBigInt;
    } }), Object.defineProperty(e, "bytesToBigint", { enumerable: !0, get: function() {
      return D.bytesToBigInt;
    } }), Object.defineProperty(e, "bytesToBool", { enumerable: !0, get: function() {
      return D.bytesToBool;
    } }), Object.defineProperty(e, "bytesToNumber", { enumerable: !0, get: function() {
      return D.bytesToNumber;
    } }), Object.defineProperty(e, "bytesToString", { enumerable: !0, get: function() {
      return D.bytesToString;
    } }), Object.defineProperty(e, "fromBytes", { enumerable: !0, get: function() {
      return D.fromBytes;
    } });
    var ne = Pe();
    Object.defineProperty(e, "fromHex", { enumerable: !0, get: function() {
      return ne.fromHex;
    } }), Object.defineProperty(e, "hexToBool", { enumerable: !0, get: function() {
      return ne.hexToBool;
    } }), Object.defineProperty(e, "hexToBigInt", { enumerable: !0, get: function() {
      return ne.hexToBigInt;
    } }), Object.defineProperty(e, "hexToNumber", { enumerable: !0, get: function() {
      return ne.hexToNumber;
    } }), Object.defineProperty(e, "hexToString", { enumerable: !0, get: function() {
      return ne.hexToString;
    } });
    var de = pd();
    Object.defineProperty(e, "fromRlp", { enumerable: !0, get: function() {
      return de.fromRlp;
    } });
    var me = Vn();
    Object.defineProperty(e, "containsNodeError", { enumerable: !0, get: function() {
      return me.containsNodeError;
    } }), Object.defineProperty(e, "getNodeError", { enumerable: !0, get: function() {
      return me.getNodeError;
    } });
    var ce = nd();
    Object.defineProperty(e, "getCallError", { enumerable: !0, get: function() {
      return ce.getCallError;
    } });
    var Ee = zt();
    Object.defineProperty(e, "getContractError", { enumerable: !0, get: function() {
      return Ee.getContractError;
    } });
    var ve = Lh();
    Object.defineProperty(e, "getEstimateGasError", { enumerable: !0, get: function() {
      return ve.getEstimateGasError;
    } });
    var je = e0();
    Object.defineProperty(e, "getTransactionError", { enumerable: !0, get: function() {
      return je.getTransactionError;
    } });
    var we = le();
    Object.defineProperty(e, "getAction", { enumerable: !0, get: function() {
      return we.getAction;
    } });
    var Ae = Wn();
    Object.defineProperty(e, "defineFormatter", { enumerable: !0, get: function() {
      return Ae.defineFormatter;
    } });
    var Ce = Mr();
    Object.defineProperty(e, "toEventSelector", { enumerable: !0, get: function() {
      return Ce.toEventSelector;
    } }), Object.defineProperty(e, "getEventSelector", { enumerable: !0, get: function() {
      return Ce.toEventSelector;
    } });
    var Le = cr();
    Object.defineProperty(e, "toFunctionSelector", { enumerable: !0, get: function() {
      return Le.toFunctionSelector;
    } }), Object.defineProperty(e, "getFunctionSelector", { enumerable: !0, get: function() {
      return Le.toFunctionSelector;
    } });
    var xe = E0();
    Object.defineProperty(e, "toEventSignature", { enumerable: !0, get: function() {
      return xe.toEventSignature;
    } }), Object.defineProperty(e, "getEventSignature", { enumerable: !0, get: function() {
      return xe.toEventSignature;
    } });
    var It = j0();
    Object.defineProperty(e, "toFunctionSignature", { enumerable: !0, get: function() {
      return It.toFunctionSignature;
    } }), Object.defineProperty(e, "getFunctionSignature", { enumerable: !0, get: function() {
      return It.toFunctionSignature;
    } });
    var rt = P0();
    Object.defineProperty(e, "toEventHash", { enumerable: !0, get: function() {
      return rt.toEventHash;
    } });
    var Fe = w0();
    Object.defineProperty(e, "toFunctionHash", { enumerable: !0, get: function() {
      return Fe.toFunctionHash;
    } });
    var nt = _d();
    Object.defineProperty(e, "isHash", { enumerable: !0, get: function() {
      return nt.isHash;
    } });
    var et = Me();
    Object.defineProperty(e, "keccak256", { enumerable: !0, get: function() {
      return et.keccak256;
    } });
    var Ge = Jc();
    Object.defineProperty(e, "sha256", { enumerable: !0, get: function() {
      return Ge.sha256;
    } });
    var Lu = T0();
    Object.defineProperty(e, "ripemd160", { enumerable: !0, get: function() {
      return Lu.ripemd160;
    } });
    var so = io();
    Object.defineProperty(e, "hashStruct", { enumerable: !0, get: function() {
      return so.hashStruct;
    } }), Object.defineProperty(e, "hashTypedData", { enumerable: !0, get: function() {
      return so.hashTypedData;
    } });
    var Uu = Dt();
    Object.defineProperty(e, "recoverAddress", { enumerable: !0, get: function() {
      return Uu.recoverAddress;
    } });
    var Gu = vd();
    Object.defineProperty(e, "recoverMessageAddress", { enumerable: !0, get: function() {
      return Gu.recoverMessageAddress;
    } });
    var Vu = Uc();
    Object.defineProperty(e, "recoverPublicKey", { enumerable: !0, get: function() {
      return Vu.recoverPublicKey;
    } });
    var Wu = Ed();
    Object.defineProperty(e, "recoverTypedDataAddress", { enumerable: !0, get: function() {
      return Wu.recoverTypedDataAddress;
    } });
    var uo = I0();
    Object.defineProperty(e, "verifyHash", { enumerable: !0, get: function() {
      return uo.verifyHash;
    } });
    var co = R0();
    Object.defineProperty(e, "verifyMessage", { enumerable: !0, get: function() {
      return co.verifyMessage;
    } });
    var Hr = O0();
    Object.defineProperty(e, "verifyTypedData", { enumerable: !0, get: function() {
      return Hr.verifyTypedData;
    } });
    var Ku = ao();
    Object.defineProperty(e, "hashMessage", { enumerable: !0, get: function() {
      return Ku.hashMessage;
    } });
    var Zu = B0();
    Object.defineProperty(e, "parseErc6492Signature", { enumerable: !0, get: function() {
      return Zu.parseErc6492Signature;
    } });
    var Ju = Hu();
    Object.defineProperty(e, "isErc6492Signature", { enumerable: !0, get: function() {
      return Ju.isErc6492Signature;
    } });
    var Yu = Pd();
    Object.defineProperty(e, "serializeErc6492Signature", { enumerable: !0, get: function() {
      return Yu.serializeErc6492Signature;
    } });
    var Xu = wd();
    Object.defineProperty(e, "getSerializedTransactionType", { enumerable: !0, get: function() {
      return Xu.getSerializedTransactionType;
    } });
    var Qu = Ou();
    Object.defineProperty(e, "getTransactionType", { enumerable: !0, get: function() {
      return Qu.getTransactionType;
    } });
    var ec = Pt();
    Object.defineProperty(e, "assertRequest", { enumerable: !0, get: function() {
      return ec.assertRequest;
    } });
    var Ut = $u();
    Object.defineProperty(e, "assertTransactionEIP1559", { enumerable: !0, get: function() {
      return Ut.assertTransactionEIP1559;
    } }), Object.defineProperty(e, "assertTransactionEIP2930", { enumerable: !0, get: function() {
      return Ut.assertTransactionEIP2930;
    } }), Object.defineProperty(e, "assertTransactionLegacy", { enumerable: !0, get: function() {
      return Ut.assertTransactionLegacy;
    } });
    var Gt = Td();
    Object.defineProperty(e, "parseTransaction", { enumerable: !0, get: function() {
      return Gt.parseTransaction;
    } });
    var Vt = Nu();
    Object.defineProperty(e, "serializeTransaction", { enumerable: !0, get: function() {
      return Vt.serializeTransaction;
    } });
    var Wt = Ad();
    Object.defineProperty(e, "serializeAccessList", { enumerable: !0, get: function() {
      return Wt.serializeAccessList;
    } });
    var Kt = Ln();
    Object.defineProperty(e, "formatEther", { enumerable: !0, get: function() {
      return Kt.formatEther;
    } });
    var tc = fr();
    Object.defineProperty(e, "formatGwei", { enumerable: !0, get: function() {
      return tc.formatGwei;
    } });
    var rc = Pu();
    Object.defineProperty(e, "formatUnits", { enumerable: !0, get: function() {
      return rc.formatUnits;
    } });
    var nc = zu();
    Object.defineProperty(e, "parseUnits", { enumerable: !0, get: function() {
      return nc.parseUnits;
    } });
    var oc = q0();
    Object.defineProperty(e, "parseEther", { enumerable: !0, get: function() {
      return oc.parseEther;
    } });
    var ic = M0();
    Object.defineProperty(e, "parseGwei", { enumerable: !0, get: function() {
      return ic.parseGwei;
    } });
    var fo = x0();
    Object.defineProperty(e, "createNonceManager", { enumerable: !0, get: function() {
      return fo.createNonceManager;
    } }), Object.defineProperty(e, "nonceManager", { enumerable: !0, get: function() {
      return fo.nonceManager;
    } });
  }(Sc)), Sc;
}
var Og;
function L1() {
  if (Og) return pa;
  Og = 1, Object.defineProperty(pa, "__esModule", { value: !0 }), pa.formatProof = n;
  const e = F0();
  function t(r) {
    return r.map((o) => ({
      ...o,
      value: BigInt(o.value)
    }));
  }
  function n(r) {
    return {
      ...r,
      balance: r.balance ? BigInt(r.balance) : void 0,
      nonce: r.nonce ? (0, e.hexToNumber)(r.nonce) : void 0,
      storageProof: r.storageProof ? t(r.storageProof) : void 0
    };
  }
  return pa;
}
var Bg;
function U1() {
  if (Bg) return ha;
  Bg = 1, Object.defineProperty(ha, "__esModule", { value: !0 }), ha.getProof = n;
  const e = Y(), t = L1();
  async function n(r, { address: o, blockNumber: a, blockTag: i, storageKeys: s }) {
    const u = i ?? "latest", d = a !== void 0 ? (0, e.numberToHex)(a) : void 0, f = await r.request({
      method: "eth_getProof",
      params: [o, s, d || u]
    });
    return (0, t.formatProof)(f);
  }
  return ha;
}
var Va = {}, Cg;
function G1() {
  if (Cg) return Va;
  Cg = 1, Object.defineProperty(Va, "__esModule", { value: !0 }), Va.getStorageAt = t;
  const e = Y();
  async function t(n, { address: r, blockNumber: o, blockTag: a = "latest", slot: i }) {
    const s = o !== void 0 ? (0, e.numberToHex)(o) : void 0;
    return await n.request({
      method: "eth_getStorageAt",
      params: [r, i, s || a]
    });
  }
  return Va;
}
var Wa = {}, qg;
function Sd() {
  if (qg) return Wa;
  qg = 1, Object.defineProperty(Wa, "__esModule", { value: !0 }), Wa.getTransaction = r;
  const e = De(), t = Y(), n = Kn();
  async function r(o, { blockHash: a, blockNumber: i, blockTag: s, hash: u, index: d }) {
    var g, b, h;
    const f = s || "latest", c = i !== void 0 ? (0, t.numberToHex)(i) : void 0;
    let m = null;
    if (u ? m = await o.request({
      method: "eth_getTransactionByHash",
      params: [u]
    }, { dedupe: !0 }) : a ? m = await o.request({
      method: "eth_getTransactionByBlockHashAndIndex",
      params: [a, (0, t.numberToHex)(d)]
    }, { dedupe: !0 }) : m = await o.request({
      method: "eth_getTransactionByBlockNumberAndIndex",
      params: [c || f, (0, t.numberToHex)(d)]
    }, { dedupe: !!c }), !m)
      throw new e.TransactionNotFoundError({
        blockHash: a,
        blockNumber: i,
        blockTag: f,
        hash: u,
        index: d
      });
    return (((h = (b = (g = o.chain) == null ? void 0 : g.formatters) == null ? void 0 : b.transaction) == null ? void 0 : h.format) || n.formatTransaction)(m);
  }
  return Wa;
}
var Ka = {}, Mg;
function V1() {
  if (Mg) return Ka;
  Mg = 1, Object.defineProperty(Ka, "__esModule", { value: !0 }), Ka.getTransactionConfirmations = r;
  const e = le(), t = ro(), n = Sd();
  async function r(o, { hash: a, transactionReceipt: i }) {
    const [s, u] = await Promise.all([
      (0, e.getAction)(o, t.getBlockNumber, "getBlockNumber")({}),
      a ? (0, e.getAction)(o, n.getTransaction, "getTransaction")({ hash: a }) : void 0
    ]), d = (i == null ? void 0 : i.blockNumber) || (u == null ? void 0 : u.blockNumber);
    return d ? s - d + 1n : 0n;
  }
  return Ka;
}
var Za = {}, xg;
function k0() {
  if (xg) return Za;
  xg = 1, Object.defineProperty(Za, "__esModule", { value: !0 }), Za.getTransactionReceipt = n;
  const e = De(), t = hd();
  async function n(r, { hash: o }) {
    var s, u, d;
    const a = await r.request({
      method: "eth_getTransactionReceipt",
      params: [o]
    }, { dedupe: !0 });
    if (!a)
      throw new e.TransactionReceiptNotFoundError({ hash: o });
    return (((d = (u = (s = r.chain) == null ? void 0 : s.formatters) == null ? void 0 : u.transactionReceipt) == null ? void 0 : d.format) || t.formatTransactionReceipt)(a);
  }
  return Za;
}
var Ja = {}, Fg;
function W1() {
  if (Fg) return Ja;
  Fg = 1, Object.defineProperty(Ja, "__esModule", { value: !0 }), Ja.multicall = f;
  const e = mr(), t = pe(), n = ie(), r = Nt(), o = At(), a = Xe(), i = Lt(), s = zt(), u = le(), d = St();
  async function f(c, m) {
    var C;
    const { allowFailure: y = !0, batchSize: g, blockNumber: b, blockTag: h, multicallAddress: _, stateOverride: P } = m, j = m.contracts, v = g ?? (typeof ((C = c.batch) == null ? void 0 : C.multicall) == "object" && c.batch.multicall.batchSize || 1024);
    let E = _;
    if (!E) {
      if (!c.chain)
        throw new Error("client chain not configured. multicallAddress is required.");
      E = (0, i.getChainContractAddress)({
        blockNumber: b,
        chain: c.chain,
        contract: "multicall3"
      });
    }
    const l = [[]];
    let p = 0, T = 0;
    for (let B = 0; B < j.length; B++) {
      const { abi: M, address: A, args: x, functionName: H } = j[B];
      try {
        const F = (0, a.encodeFunctionData)({ abi: M, args: x, functionName: H });
        T += (F.length - 2) / 2, v > 0 && T > v && l[p].length > 0 && (p++, T = (F.length - 2) / 2, l[p] = []), l[p] = [
          ...l[p],
          {
            allowFailure: !0,
            callData: F,
            target: A
          }
        ];
      } catch (F) {
        const $ = (0, s.getContractError)(F, {
          abi: M,
          address: A,
          args: x,
          docsPath: "/docs/contract/multicall",
          functionName: H
        });
        if (!y)
          throw $;
        l[p] = [
          ...l[p],
          {
            allowFailure: !0,
            callData: "0x",
            target: A
          }
        ];
      }
    }
    const w = await Promise.allSettled(l.map((B) => (0, u.getAction)(c, d.readContract, "readContract")({
      abi: e.multicall3Abi,
      address: E,
      args: [B],
      blockNumber: b,
      blockTag: h,
      functionName: "aggregate3",
      stateOverride: P
    }))), I = [];
    for (let B = 0; B < w.length; B++) {
      const M = w[B];
      if (M.status === "rejected") {
        if (!y)
          throw M.reason;
        for (let x = 0; x < l[B].length; x++)
          I.push({
            status: "failure",
            error: M.reason,
            result: void 0
          });
        continue;
      }
      const A = M.value;
      for (let x = 0; x < A.length; x++) {
        const { returnData: H, success: F } = A[x], { callData: $ } = l[B][x], { abi: q, address: S, functionName: R, args: O } = j[I.length];
        try {
          if ($ === "0x")
            throw new t.AbiDecodingZeroDataError();
          if (!F)
            throw new r.RawContractError({ data: H });
          const k = (0, o.decodeFunctionResult)({
            abi: q,
            args: O,
            data: H,
            functionName: R
          });
          I.push(y ? { result: k, status: "success" } : k);
        } catch (k) {
          const z = (0, s.getContractError)(k, {
            abi: q,
            address: S,
            args: O,
            docsPath: "/docs/contract/multicall",
            functionName: R
          });
          if (!y)
            throw z;
          I.push({ error: z, result: void 0, status: "failure" });
        }
      }
    }
    if (I.length !== j.length)
      throw new n.BaseError("multicall results mismatch");
    return I;
  }
  return Ja;
}
var Ya = {}, Cn = {}, oe = {}, ae = {}, qn = {}, Ir = {}, Mn = {}, kg;
function K1() {
  return kg || (kg = 1, Object.defineProperty(Mn, "__esModule", { value: !0 }), Mn.version = void 0, Mn.version = "0.1.1"), Mn;
}
var Hg;
function Z1() {
  if (Hg) return Ir;
  Hg = 1, Object.defineProperty(Ir, "__esModule", { value: !0 }), Ir.getUrl = t, Ir.getVersion = n, Ir.prettyPrint = r;
  const e = K1();
  function t(o) {
    return o;
  }
  function n() {
    return e.version;
  }
  function r(o) {
    if (!o)
      return "";
    const a = Object.entries(o).map(([s, u]) => u === void 0 || u === !1 ? null : [s, u]).filter(Boolean), i = a.reduce((s, [u]) => Math.max(s, u.length), 0);
    return a.map(([s, u]) => `  ${`${s}:`.padEnd(i + 1)}  ${u}`).join(`
`);
  }
  return Ir;
}
var $g;
function H0() {
  if ($g) return qn;
  $g = 1, Object.defineProperty(qn, "__esModule", { value: !0 }), qn.BaseError = void 0;
  const e = Z1();
  class t extends Error {
    constructor(o, a = {}) {
      const i = (() => {
        var c;
        if (a.cause instanceof t) {
          if (a.cause.details)
            return a.cause.details;
          if (a.cause.shortMessage)
            return a.cause.shortMessage;
        }
        return (c = a.cause) != null && c.message ? a.cause.message : a.details;
      })(), s = a.cause instanceof t && a.cause.docsPath || a.docsPath, d = `https://oxlib.sh${s ?? ""}`, f = [
        o || "An error occurred.",
        ...a.metaMessages ? ["", ...a.metaMessages] : [],
        ...i || s ? [
          "",
          i ? `Details: ${i}` : void 0,
          s ? `See: ${d}` : void 0
        ] : []
      ].filter((c) => typeof c == "string").join(`
`);
      super(f, a.cause ? { cause: a.cause } : void 0), Object.defineProperty(this, "details", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "docs", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "docsPath", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "shortMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "cause", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "BaseError"
      }), Object.defineProperty(this, "version", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: `ox@${(0, e.getVersion)()}`
      }), this.cause = a.cause, this.details = i, this.docs = d, this.docsPath = s, this.shortMessage = o;
    }
    walk(o) {
      return n(this, o);
    }
  }
  qn.BaseError = t;
  function n(r, o) {
    return o != null && o(r) ? r : r && typeof r == "object" && "cause" in r && r.cause ? n(r.cause, o) : o ? null : r;
  }
  return qn;
}
var xn = {}, Ng;
function $0() {
  if (Ng) return xn;
  Ng = 1, Object.defineProperty(xn, "__esModule", { value: !0 }), xn.parse = t, xn.stringify = n;
  const e = "#__bigint";
  function t(r, o) {
    return JSON.parse(r, (a, i) => {
      const s = i;
      return typeof s == "string" && s.endsWith(e) ? BigInt(s.slice(0, -e.length)) : typeof o == "function" ? o(a, s) : s;
    });
  }
  function n(r, o, a) {
    return JSON.stringify(r, (i, s) => typeof o == "function" ? o(i, s) : typeof s == "bigint" ? s.toString() + e : s, a);
  }
  return xn;
}
var Mc = {}, zg;
function N0() {
  return zg || (zg = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.charCodeMap = void 0, e.assertSize = n, e.assertStartOffset = r, e.assertEndOffset = o, e.charCodeToBase16 = a, e.pad = i, e.trim = s;
    const t = D0();
    function n(u, d) {
      if (t.size(u) > d)
        throw new t.SizeOverflowError({
          givenSize: t.size(u),
          maxSize: d
        });
    }
    function r(u, d) {
      if (typeof d == "number" && d > 0 && d > t.size(u) - 1)
        throw new t.SliceOffsetOutOfBoundsError({
          offset: d,
          position: "start",
          size: t.size(u)
        });
    }
    function o(u, d, f) {
      if (typeof d == "number" && typeof f == "number" && t.size(u) !== f - d)
        throw new t.SliceOffsetOutOfBoundsError({
          offset: f,
          position: "end",
          size: t.size(u)
        });
    }
    e.charCodeMap = {
      zero: 48,
      nine: 57,
      A: 65,
      F: 70,
      a: 97,
      f: 102
    };
    function a(u) {
      if (u >= e.charCodeMap.zero && u <= e.charCodeMap.nine)
        return u - e.charCodeMap.zero;
      if (u >= e.charCodeMap.A && u <= e.charCodeMap.F)
        return u - (e.charCodeMap.A - 10);
      if (u >= e.charCodeMap.a && u <= e.charCodeMap.f)
        return u - (e.charCodeMap.a - 10);
    }
    function i(u, d = {}) {
      const { dir: f, size: c = 32 } = d;
      if (c === 0)
        return u;
      if (u.length > c)
        throw new t.SizeExceedsPaddingSizeError({
          size: u.length,
          targetSize: c,
          type: "Bytes"
        });
      const m = new Uint8Array(c);
      for (let y = 0; y < c; y++) {
        const g = f === "right";
        m[g ? y : c - y - 1] = u[g ? y : u.length - y - 1];
      }
      return m;
    }
    function s(u, d = {}) {
      const { dir: f = "left" } = d;
      let c = u, m = 0;
      for (let y = 0; y < c.length - 1 && c[f === "left" ? y : c.length - y - 1].toString() === "0"; y++)
        m++;
      return c = f === "left" ? c.slice(m) : c.slice(0, c.length - m), c;
    }
  }(Mc)), Mc;
}
var xt = {}, Dg;
function z0() {
  if (Dg) return xt;
  Dg = 1, Object.defineProperty(xt, "__esModule", { value: !0 }), xt.assertSize = t, xt.assertStartOffset = n, xt.assertEndOffset = r, xt.pad = o, xt.trim = a;
  const e = Du();
  function t(i, s) {
    if (e.size(i) > s)
      throw new e.SizeOverflowError({
        givenSize: e.size(i),
        maxSize: s
      });
  }
  function n(i, s) {
    if (typeof s == "number" && s > 0 && s > e.size(i) - 1)
      throw new e.SliceOffsetOutOfBoundsError({
        offset: s,
        position: "start",
        size: e.size(i)
      });
  }
  function r(i, s, u) {
    if (typeof s == "number" && typeof u == "number" && e.size(i) !== u - s)
      throw new e.SliceOffsetOutOfBoundsError({
        offset: u,
        position: "end",
        size: e.size(i)
      });
  }
  function o(i, s = {}) {
    const { dir: u, size: d = 32 } = s;
    if (d === 0)
      return i;
    const f = i.replace("0x", "");
    if (f.length > d * 2)
      throw new e.SizeExceedsPaddingSizeError({
        size: Math.ceil(f.length / 2),
        targetSize: d,
        type: "Hex"
      });
    return `0x${f[u === "right" ? "padEnd" : "padStart"](d * 2, "0")}`;
  }
  function a(i, s = {}) {
    const { dir: u = "left" } = s;
    let d = i.replace("0x", ""), f = 0;
    for (let c = 0; c < d.length - 1 && d[u === "left" ? c : d.length - c - 1].toString() === "0"; c++)
      f++;
    return d = u === "left" ? d.slice(f) : d.slice(0, d.length - f), d === "0" ? "0x" : u === "right" && d.length % 2 === 1 ? `0x${d}0` : `0x${d}`;
  }
  return xt;
}
var Lg;
function D0() {
  if (Lg) return ae;
  Lg = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.SizeExceedsPaddingSizeError = ae.SliceOffsetOutOfBoundsError = ae.SizeOverflowError = ae.InvalidBytesTypeError = ae.InvalidBytesBooleanError = void 0, ae.assert = u, ae.concat = d, ae.from = f, ae.fromArray = c, ae.fromBoolean = m, ae.fromHex = y, ae.fromNumber = g, ae.fromString = b, ae.isEqual = h, ae.padLeft = _, ae.padRight = P, ae.random = j, ae.size = v, ae.slice = E, ae.toBigInt = l, ae.toBoolean = p, ae.toHex = T, ae.toNumber = w, ae.toString = I, ae.trimLeft = C, ae.trimRight = B, ae.validate = M;
  const e = /* @__PURE__ */ Ft(), t = H0(), n = Du(), r = $0(), o = N0(), a = z0(), i = new TextDecoder(), s = new TextEncoder();
  function u(q) {
    if (!(q instanceof Uint8Array)) {
      if (!q)
        throw new x(q);
      if (typeof q != "object")
        throw new x(q);
      if (!("BYTES_PER_ELEMENT" in q))
        throw new x(q);
      if (q.BYTES_PER_ELEMENT !== 1 || q.constructor.name !== "Uint8Array")
        throw new x(q);
    }
  }
  function d(...q) {
    let S = 0;
    for (const O of q)
      S += O.length;
    const R = new Uint8Array(S);
    for (let O = 0, k = 0; O < q.length; O++) {
      const z = q[O];
      R.set(z, k), k += z.length;
    }
    return R;
  }
  function f(q) {
    return q instanceof Uint8Array ? q : typeof q == "string" ? y(q) : c(q);
  }
  function c(q) {
    return q instanceof Uint8Array ? q : new Uint8Array(q);
  }
  function m(q, S = {}) {
    const { size: R } = S, O = new Uint8Array(1);
    return O[0] = Number(q), typeof R == "number" ? (o.assertSize(O, R), _(O, R)) : O;
  }
  function y(q, S = {}) {
    const { size: R } = S;
    let O = q;
    R && (a.assertSize(q, R), O = n.padRight(q, R));
    let k = O.slice(2);
    k.length % 2 && (k = `0${k}`);
    const z = k.length / 2, L = new Uint8Array(z);
    for (let U = 0, G = 0; U < z; U++) {
      const V = o.charCodeToBase16(k.charCodeAt(G++)), K = o.charCodeToBase16(k.charCodeAt(G++));
      if (V === void 0 || K === void 0)
        throw new t.BaseError(`Invalid byte sequence ("${k[G - 2]}${k[G - 1]}" in "${k}").`);
      L[U] = V * 16 + K;
    }
    return L;
  }
  function g(q, S) {
    const R = n.fromNumber(q, S);
    return y(R);
  }
  function b(q, S = {}) {
    const { size: R } = S, O = s.encode(q);
    return typeof R == "number" ? (o.assertSize(O, R), P(O, R)) : O;
  }
  function h(q, S) {
    return (0, e.equalBytes)(q, S);
  }
  function _(q, S) {
    return o.pad(q, { dir: "left", size: S });
  }
  function P(q, S) {
    return o.pad(q, { dir: "right", size: S });
  }
  function j(q) {
    return crypto.getRandomValues(new Uint8Array(q));
  }
  function v(q) {
    return q.length;
  }
  function E(q, S, R, O = {}) {
    const { strict: k } = O;
    o.assertStartOffset(q, S);
    const z = q.slice(S, R);
    return k && o.assertEndOffset(z, S, R), z;
  }
  function l(q, S = {}) {
    const { size: R } = S;
    typeof R < "u" && o.assertSize(q, R);
    const O = n.fromBytes(q, S);
    return n.toBigInt(O, S);
  }
  function p(q, S = {}) {
    const { size: R } = S;
    let O = q;
    if (typeof R < "u" && (o.assertSize(O, R), O = C(O)), O.length > 1 || O[0] > 1)
      throw new A(O);
    return !!O[0];
  }
  function T(q, S = {}) {
    return n.fromBytes(q, S);
  }
  function w(q, S = {}) {
    const { size: R } = S;
    typeof R < "u" && o.assertSize(q, R);
    const O = n.fromBytes(q, S);
    return n.toNumber(O, S);
  }
  function I(q, S = {}) {
    const { size: R } = S;
    let O = q;
    return typeof R < "u" && (o.assertSize(O, R), O = B(O)), i.decode(O);
  }
  function C(q) {
    return o.trim(q, { dir: "left" });
  }
  function B(q) {
    return o.trim(q, { dir: "right" });
  }
  function M(q) {
    try {
      return u(q), !0;
    } catch {
      return !1;
    }
  }
  class A extends t.BaseError {
    constructor(S) {
      super(`Bytes value \`${S}\` is not a valid boolean.`, {
        metaMessages: [
          "The bytes array must contain a single byte of either a `0` or `1` value."
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Bytes.InvalidBytesBooleanError"
      });
    }
  }
  ae.InvalidBytesBooleanError = A;
  class x extends t.BaseError {
    constructor(S) {
      super(`Value \`${typeof S == "object" ? r.stringify(S) : S}\` of type \`${typeof S}\` is an invalid Bytes value.`, {
        metaMessages: ["Bytes values must be of type `Bytes`."]
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Bytes.InvalidBytesTypeError"
      });
    }
  }
  ae.InvalidBytesTypeError = x;
  class H extends t.BaseError {
    constructor({ givenSize: S, maxSize: R }) {
      super(`Size cannot exceed \`${R}\` bytes. Given size: \`${S}\` bytes.`), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Bytes.SizeOverflowError"
      });
    }
  }
  ae.SizeOverflowError = H;
  class F extends t.BaseError {
    constructor({ offset: S, position: R, size: O }) {
      super(`Slice ${R === "start" ? "starting" : "ending"} at offset \`${S}\` is out-of-bounds (size: \`${O}\`).`), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Bytes.SliceOffsetOutOfBoundsError"
      });
    }
  }
  ae.SliceOffsetOutOfBoundsError = F;
  class $ extends t.BaseError {
    constructor({ size: S, targetSize: R, type: O }) {
      super(`${O.charAt(0).toUpperCase()}${O.slice(1).toLowerCase()} size (\`${S}\`) exceeds padding size (\`${R}\`).`), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Bytes.SizeExceedsPaddingSizeError"
      });
    }
  }
  return ae.SizeExceedsPaddingSizeError = $, ae;
}
var Ug;
function Du() {
  if (Ug) return oe;
  Ug = 1, Object.defineProperty(oe, "__esModule", { value: !0 }), oe.SizeExceedsPaddingSizeError = oe.SliceOffsetOutOfBoundsError = oe.SizeOverflowError = oe.InvalidLengthError = oe.InvalidHexValueError = oe.InvalidHexTypeError = oe.InvalidHexBooleanError = oe.IntegerOutOfRangeError = void 0, oe.assert = u, oe.concat = d, oe.from = f, oe.fromBoolean = c, oe.fromBytes = m, oe.fromNumber = y, oe.fromString = g, oe.isEqual = b, oe.padLeft = h, oe.padRight = _, oe.random = P, oe.slice = j, oe.size = v, oe.trimLeft = E, oe.trimRight = l, oe.toBigInt = p, oe.toBoolean = T, oe.toBytes = w, oe.toNumber = I, oe.toString = C, oe.validate = B;
  const e = /* @__PURE__ */ Ft(), t = D0(), n = H0(), r = $0(), o = N0(), a = z0(), i = new TextEncoder(), s = Array.from({ length: 256 }, (R, O) => O.toString(16).padStart(2, "0"));
  function u(R, O = {}) {
    const { strict: k = !1 } = O;
    if (!R)
      throw new x(R);
    if (typeof R != "string")
      throw new x(R);
    if (k && !/^0x[0-9a-fA-F]*$/.test(R))
      throw new H(R);
    if (!R.startsWith("0x"))
      throw new H(R);
  }
  function d(...R) {
    return `0x${R.reduce((O, k) => O + k.replace("0x", ""), "")}`;
  }
  function f(R) {
    return R instanceof Uint8Array ? m(R) : Array.isArray(R) ? m(new Uint8Array(R)) : R;
  }
  function c(R, O = {}) {
    const k = `0x${Number(R)}`;
    return typeof O.size == "number" ? (a.assertSize(k, O.size), h(k, O.size)) : k;
  }
  function m(R, O = {}) {
    let k = "";
    for (let L = 0; L < R.length; L++)
      k += s[R[L]];
    const z = `0x${k}`;
    return typeof O.size == "number" ? (a.assertSize(z, O.size), _(z, O.size)) : z;
  }
  function y(R, O = {}) {
    const { signed: k, size: z } = O, L = BigInt(R);
    let U;
    z ? k ? U = (1n << BigInt(z) * 8n - 1n) - 1n : U = 2n ** (BigInt(z) * 8n) - 1n : typeof R == "number" && (U = BigInt(Number.MAX_SAFE_INTEGER));
    const G = typeof U == "bigint" && k ? -U - 1n : 0;
    if (U && L > U || L < G) {
      const ee = typeof R == "bigint" ? "n" : "";
      throw new M({
        max: U ? `${U}${ee}` : void 0,
        min: `${G}${ee}`,
        signed: k,
        size: z,
        value: `${R}${ee}`
      });
    }
    const K = `0x${(k && L < 0 ? (1n << BigInt(z * 8)) + BigInt(L) : L).toString(16)}`;
    return z ? h(K, z) : K;
  }
  function g(R, O = {}) {
    return m(i.encode(R), O);
  }
  function b(R, O) {
    return (0, e.equalBytes)(t.fromHex(R), t.fromHex(O));
  }
  function h(R, O) {
    return a.pad(R, { dir: "left", size: O });
  }
  function _(R, O) {
    return a.pad(R, { dir: "right", size: O });
  }
  function P(R) {
    return m(t.random(R));
  }
  function j(R, O, k, z = {}) {
    const { strict: L } = z;
    a.assertStartOffset(R, O);
    const U = `0x${R.replace("0x", "").slice((O ?? 0) * 2, (k ?? R.length) * 2)}`;
    return L && a.assertEndOffset(U, O, k), U;
  }
  function v(R) {
    return Math.ceil((R.length - 2) / 2);
  }
  function E(R) {
    return a.trim(R, { dir: "left" });
  }
  function l(R) {
    return a.trim(R, { dir: "right" });
  }
  function p(R, O = {}) {
    const { signed: k } = O;
    O.size && a.assertSize(R, O.size);
    const z = BigInt(R);
    if (!k)
      return z;
    const L = (R.length - 2) / 2, U = (1n << BigInt(L) * 8n) - 1n, G = U >> 1n;
    return z <= G ? z : z - U - 1n;
  }
  function T(R, O = {}) {
    O.size && a.assertSize(R, O.size);
    const k = E(R);
    if (k === "0x")
      return !1;
    if (k === "0x1")
      return !0;
    throw new A(R);
  }
  function w(R, O = {}) {
    return t.fromHex(R, O);
  }
  function I(R, O = {}) {
    const { signed: k, size: z } = O;
    return Number(!k && !z ? R : p(R, O));
  }
  function C(R, O = {}) {
    const { size: k } = O;
    let z = t.fromHex(R);
    return k && (o.assertSize(z, k), z = t.trimRight(z)), new TextDecoder().decode(z);
  }
  function B(R, O = {}) {
    const { strict: k = !1 } = O;
    try {
      return u(R, { strict: k }), !0;
    } catch {
      return !1;
    }
  }
  class M extends n.BaseError {
    constructor({ max: O, min: k, signed: z, size: L, value: U }) {
      super(`Number \`${U}\` is not in safe${L ? ` ${L * 8}-bit` : ""}${z ? " signed" : " unsigned"} integer range ${O ? `(\`${k}\` to \`${O}\`)` : `(above \`${k}\`)`}`), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Hex.IntegerOutOfRangeError"
      });
    }
  }
  oe.IntegerOutOfRangeError = M;
  class A extends n.BaseError {
    constructor(O) {
      super(`Hex value \`"${O}"\` is not a valid boolean.`, {
        metaMessages: [
          'The hex value must be `"0x0"` (false) or `"0x1"` (true).'
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Hex.InvalidHexBooleanError"
      });
    }
  }
  oe.InvalidHexBooleanError = A;
  class x extends n.BaseError {
    constructor(O) {
      super(`Value \`${typeof O == "object" ? r.stringify(O) : O}\` of type \`${typeof O}\` is an invalid hex type.`, {
        metaMessages: ['Hex types must be represented as `"0x${string}"`.']
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Hex.InvalidHexTypeError"
      });
    }
  }
  oe.InvalidHexTypeError = x;
  class H extends n.BaseError {
    constructor(O) {
      super(`Value \`${O}\` is an invalid hex value.`, {
        metaMessages: [
          'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).'
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Hex.InvalidHexValueError"
      });
    }
  }
  oe.InvalidHexValueError = H;
  class F extends n.BaseError {
    constructor(O) {
      super(`Hex value \`"${O}"\` is an odd length (${O.length - 2} nibbles).`, {
        metaMessages: ["It must be an even length."]
      }), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Hex.InvalidLengthError"
      });
    }
  }
  oe.InvalidLengthError = F;
  class $ extends n.BaseError {
    constructor({ givenSize: O, maxSize: k }) {
      super(`Size cannot exceed \`${k}\` bytes. Given size: \`${O}\` bytes.`), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Hex.SizeOverflowError"
      });
    }
  }
  oe.SizeOverflowError = $;
  class q extends n.BaseError {
    constructor({ offset: O, position: k, size: z }) {
      super(`Slice ${k === "start" ? "starting" : "ending"} at offset \`${O}\` is out-of-bounds (size: \`${z}\`).`), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Hex.SliceOffsetOutOfBoundsError"
      });
    }
  }
  oe.SliceOffsetOutOfBoundsError = q;
  class S extends n.BaseError {
    constructor({ size: O, targetSize: k, type: z }) {
      super(`${z.charAt(0).toUpperCase()}${z.slice(1).toLowerCase()} size (\`${O}\`) exceeds padding size (\`${k}\`).`), Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "Hex.SizeExceedsPaddingSizeError"
      });
    }
  }
  return oe.SizeExceedsPaddingSizeError = S, oe;
}
var Fn = {}, Gg;
function J1() {
  if (Gg) return Fn;
  Gg = 1, Object.defineProperty(Fn, "__esModule", { value: !0 }), Fn.fromRpc = t, Fn.toRpc = n;
  const e = Du();
  function t(r) {
    return {
      ...r,
      amount: BigInt(r.amount),
      index: Number(r.index),
      validatorIndex: Number(r.validatorIndex)
    };
  }
  function n(r) {
    return {
      address: r.address,
      amount: e.fromNumber(r.amount),
      index: e.fromNumber(r.index),
      validatorIndex: e.fromNumber(r.validatorIndex)
    };
  }
  return Fn;
}
var Vg;
function Y1() {
  if (Vg) return Cn;
  Vg = 1, Object.defineProperty(Cn, "__esModule", { value: !0 }), Cn.fromRpc = n, Cn.toRpc = r;
  const e = Du(), t = J1();
  function n(o) {
    return {
      ...o.baseFeePerGas && {
        baseFeePerGas: BigInt(o.baseFeePerGas)
      },
      ...o.blobBaseFee && {
        blobBaseFee: BigInt(o.blobBaseFee)
      },
      ...o.feeRecipient && {
        feeRecipient: o.feeRecipient
      },
      ...o.gasLimit && {
        gasLimit: BigInt(o.gasLimit)
      },
      ...o.number && {
        number: BigInt(o.number)
      },
      ...o.prevRandao && {
        prevRandao: BigInt(o.prevRandao)
      },
      ...o.time && {
        time: BigInt(o.time)
      },
      ...o.withdrawals && {
        withdrawals: o.withdrawals.map(t.fromRpc)
      }
    };
  }
  function r(o) {
    return {
      ...typeof o.baseFeePerGas == "bigint" && {
        baseFeePerGas: e.fromNumber(o.baseFeePerGas)
      },
      ...typeof o.blobBaseFee == "bigint" && {
        blobBaseFee: e.fromNumber(o.blobBaseFee)
      },
      ...typeof o.feeRecipient == "string" && {
        feeRecipient: o.feeRecipient
      },
      ...typeof o.gasLimit == "bigint" && {
        gasLimit: e.fromNumber(o.gasLimit)
      },
      ...typeof o.number == "bigint" && {
        number: e.fromNumber(o.number)
      },
      ...typeof o.prevRandao == "bigint" && {
        prevRandao: e.fromNumber(o.prevRandao)
      },
      ...typeof o.time == "bigint" && {
        time: e.fromNumber(o.time)
      },
      ...o.withdrawals && {
        withdrawals: o.withdrawals.map(t.toRpc)
      }
    };
  }
  return Cn;
}
var Wg;
function X1() {
  if (Wg) return Ya;
  Wg = 1, Object.defineProperty(Ya, "__esModule", { value: !0 }), Ya.simulate = b;
  const e = /* @__PURE__ */ Y1(), t = Se(), n = pe(), r = Nt(), o = Et(), a = At(), i = Xe(), s = Y(), u = zt(), d = Vn(), f = Au(), c = Tt(), m = jt(), y = Gc(), g = Pt();
  async function b(h, _) {
    const { blockNumber: P, blockTag: j = "latest", blocks: v, returnFullTransactions: E, traceTransfers: l, validation: p } = _;
    try {
      const T = [];
      for (const B of v) {
        const M = B.blockOverrides ? e.toRpc(B.blockOverrides) : void 0, A = B.calls.map((H) => {
          const F = H, $ = F.account ? (0, t.parseAccount)(F.account) : void 0, q = {
            ...F,
            data: F.abi ? (0, i.encodeFunctionData)(F) : F.data,
            from: F.from ?? ($ == null ? void 0 : $.address)
          };
          return (0, g.assertRequest)(q), (0, m.formatTransactionRequest)(q);
        }), x = B.stateOverrides ? (0, y.serializeStateOverride)(B.stateOverrides) : void 0;
        T.push({
          blockOverrides: M,
          calls: A,
          stateOverrides: x
        });
      }
      const I = (P ? (0, s.numberToHex)(P) : void 0) || j;
      return (await h.request({
        method: "eth_simulateV1",
        params: [
          { blockStateCalls: T, returnFullTransactions: E, traceTransfers: l, validation: p },
          I
        ]
      })).map((B, M) => ({
        ...(0, f.formatBlock)(B),
        calls: B.calls.map((A, x) => {
          var U, G;
          const { abi: H, args: F, functionName: $, to: q } = v[M].calls[x], S = ((U = A.error) == null ? void 0 : U.data) ?? A.returnData, R = BigInt(A.gasUsed), O = (G = A.logs) == null ? void 0 : G.map((V) => (0, c.formatLog)(V)), k = A.status === "0x1" ? "success" : "failure", z = H ? (0, a.decodeFunctionResult)({
            abi: H,
            data: S,
            functionName: $
          }) : null, L = (() => {
            var K;
            if (k === "success")
              return;
            let V;
            if (((K = A.error) == null ? void 0 : K.data) === "0x" ? V = new n.AbiDecodingZeroDataError() : A.error && (V = new r.RawContractError(A.error)), !!V)
              return (0, u.getContractError)(V, {
                abi: H ?? [],
                address: q,
                args: F,
                functionName: $ ?? "<unknown>"
              });
          })();
          return {
            data: S,
            gasUsed: R,
            logs: O,
            status: k,
            ...k === "success" ? {
              result: z
            } : {
              error: L
            }
          };
        })
      }));
    } catch (T) {
      const w = T, I = (0, d.getNodeError)(w, {});
      throw I instanceof o.UnknownNodeError ? w : I;
    }
  }
  return Ya;
}
var Xa = {}, Qa = {}, es = {}, Kg;
function L0() {
  if (Kg) return es;
  Kg = 1, Object.defineProperty(es, "__esModule", { value: !0 }), es.serializeSignature = r;
  const e = /* @__PURE__ */ Un(), t = Pe(), n = be();
  function r({ r: o, s: a, to: i = "hex", v: s, yParity: u }) {
    const d = (() => {
      if (u === 0 || u === 1)
        return u;
      if (s && (s === 27n || s === 28n || s >= 35n))
        return s % 2n === 0n ? 1 : 0;
      throw new Error("Invalid `v` or `yParity` value");
    })(), f = `0x${new e.secp256k1.Signature((0, t.hexToBigInt)(o), (0, t.hexToBigInt)(a)).toCompactHex()}${d === 0 ? "1b" : "1c"}`;
    return i === "hex" ? f : (0, n.hexToBytes)(f);
  }
  return es;
}
var Zg;
function Id() {
  if (Zg) return Qa;
  Zg = 1, Object.defineProperty(Qa, "__esModule", { value: !0 }), Qa.verifyHash = b;
  const e = mr(), t = rd(), n = Nt(), r = Qn(), o = Ue(), a = wt(), i = Oe(), s = Y(), u = le(), d = F0(), f = Hu(), c = Dt(), m = Pd(), y = L0(), g = eo();
  async function b(h, _) {
    var C, B, M;
    const { address: P, factory: j, factoryData: v, hash: E, signature: l, universalSignatureVerifierAddress: p = (M = (B = (C = h.chain) == null ? void 0 : C.contracts) == null ? void 0 : B.universalSignatureVerifier) == null ? void 0 : M.address, ...T } = _, w = (0, i.isHex)(l) ? l : typeof l == "object" && "r" in l && "s" in l ? (0, y.serializeSignature)(l) : (0, s.bytesToHex)(l), I = await (async () => !j && !v || (0, f.isErc6492Signature)(w) ? w : (0, m.serializeErc6492Signature)({
      address: j,
      data: v,
      signature: w
    }))();
    try {
      const A = p ? {
        to: p,
        data: (0, d.encodeFunctionData)({
          abi: e.universalSignatureValidatorAbi,
          functionName: "isValidSig",
          args: [P, E, I]
        }),
        ...T
      } : {
        data: (0, r.encodeDeployData)({
          abi: e.universalSignatureValidatorAbi,
          args: [P, E, I],
          bytecode: t.universalSignatureValidatorByteCode
        }),
        ...T
      }, { data: x } = await (0, u.getAction)(h, g.call, "call")(A);
      return (0, d.hexToBool)(x ?? "0x0");
    } catch (A) {
      try {
        if ((0, a.isAddressEqual)((0, o.getAddress)(P), await (0, c.recoverAddress)({ hash: E, signature: l })))
          return !0;
      } catch {
      }
      if (A instanceof n.CallExecutionError)
        return !1;
      throw A;
    }
  }
  return Qa;
}
var Jg;
function Q1() {
  if (Jg) return Xa;
  Jg = 1, Object.defineProperty(Xa, "__esModule", { value: !0 }), Xa.verifyMessage = n;
  const e = ao(), t = Id();
  async function n(r, { address: o, message: a, factory: i, factoryData: s, signature: u, ...d }) {
    const f = (0, e.hashMessage)(a);
    return (0, t.verifyHash)(r, {
      address: o,
      factory: i,
      factoryData: s,
      hash: f,
      signature: u,
      ...d
    });
  }
  return Xa;
}
var ts = {}, Yg;
function e_() {
  if (Yg) return ts;
  Yg = 1, Object.defineProperty(ts, "__esModule", { value: !0 }), ts.verifyTypedData = n;
  const e = io(), t = Id();
  async function n(r, o) {
    const { address: a, factory: i, factoryData: s, signature: u, message: d, primaryType: f, types: c, domain: m, ...y } = o, g = (0, e.hashTypedData)({ message: d, primaryType: f, types: c, domain: m });
    return (0, t.verifyHash)(r, {
      address: a,
      factory: i,
      factoryData: s,
      hash: g,
      signature: u,
      ...y
    });
  }
  return ts;
}
var rs = {}, ns = {}, Xg;
function U0() {
  if (Xg) return ns;
  Xg = 1, Object.defineProperty(ns, "__esModule", { value: !0 }), ns.watchBlockNumber = i;
  const e = Pe(), t = le(), n = kr(), r = to(), o = Ie(), a = ro();
  function i(s, { emitOnBegin: u = !1, emitMissed: d = !1, onBlockNumber: f, onError: c, poll: m, pollingInterval: y = s.pollingInterval }) {
    const g = typeof m < "u" ? m : !(s.transport.type === "webSocket" || s.transport.type === "fallback" && s.transport.transports[0].config.type === "webSocket");
    let b;
    return g ? (() => {
      const P = (0, o.stringify)([
        "watchBlockNumber",
        s.uid,
        u,
        d,
        y
      ]);
      return (0, n.observe)(P, { onBlockNumber: f, onError: c }, (j) => (0, r.poll)(async () => {
        var v;
        try {
          const E = await (0, t.getAction)(s, a.getBlockNumber, "getBlockNumber")({ cacheTime: 0 });
          if (b) {
            if (E === b)
              return;
            if (E - b > 1 && d)
              for (let l = b + 1n; l < E; l++)
                j.onBlockNumber(l, b), b = l;
          }
          (!b || E > b) && (j.onBlockNumber(E, b), b = E);
        } catch (E) {
          (v = j.onError) == null || v.call(j, E);
        }
      }, {
        emitOnBegin: u,
        interval: y
      }));
    })() : (() => {
      const P = (0, o.stringify)([
        "watchBlockNumber",
        s.uid,
        u,
        d
      ]);
      return (0, n.observe)(P, { onBlockNumber: f, onError: c }, (j) => {
        let v = !0, E = () => v = !1;
        return (async () => {
          try {
            const l = (() => {
              if (s.transport.type === "fallback") {
                const T = s.transport.transports.find((w) => w.config.type === "webSocket");
                return T ? T.value : s.transport;
              }
              return s.transport;
            })(), { unsubscribe: p } = await l.subscribe({
              params: ["newHeads"],
              onData(T) {
                var I;
                if (!v)
                  return;
                const w = (0, e.hexToBigInt)((I = T.result) == null ? void 0 : I.number);
                j.onBlockNumber(w, b), b = w;
              },
              onError(T) {
                var w;
                (w = j.onError) == null || w.call(j, T);
              }
            });
            E = p, v || E();
          } catch (l) {
            c == null || c(l);
          }
        })(), () => E();
      });
    })();
  }
  return ns;
}
var Qg;
function t_() {
  if (Qg) return rs;
  Qg = 1, Object.defineProperty(rs, "__esModule", { value: !0 }), rs.waitForTransactionReceipt = c;
  const e = Wc(), t = De(), n = le(), r = kr(), o = Yh(), a = cd(), i = Ie(), s = Fr(), u = Sd(), d = k0(), f = U0();
  async function c(m, { confirmations: y = 1, hash: g, onReplaced: b, pollingInterval: h = m.pollingInterval, retryCount: _ = 6, retryDelay: P = ({ count: v }) => ~~(1 << v) * 200, timeout: j = 18e4 }) {
    const v = (0, i.stringify)(["waitForTransactionReceipt", m.uid, g]);
    let E, l, p, T = !1;
    const { promise: w, resolve: I, reject: C } = (0, o.withResolvers)(), B = j ? setTimeout(() => C(new t.WaitForTransactionReceiptTimeoutError({ hash: g })), j) : void 0, M = (0, r.observe)(v, { onReplaced: b, resolve: I, reject: C }, (A) => {
      const x = (0, n.getAction)(m, f.watchBlockNumber, "watchBlockNumber")({
        emitMissed: !0,
        emitOnBegin: !0,
        poll: !0,
        pollingInterval: h,
        async onBlockNumber(H) {
          const F = (q) => {
            clearTimeout(B), x(), q(), M();
          };
          let $ = H;
          if (!T)
            try {
              if (p) {
                if (y > 1 && (!p.blockNumber || $ - p.blockNumber + 1n < y))
                  return;
                F(() => A.resolve(p));
                return;
              }
              if (E || (T = !0, await (0, a.withRetry)(async () => {
                E = await (0, n.getAction)(m, u.getTransaction, "getTransaction")({ hash: g }), E.blockNumber && ($ = E.blockNumber);
              }, {
                delay: P,
                retryCount: _
              }), T = !1), p = await (0, n.getAction)(m, d.getTransactionReceipt, "getTransactionReceipt")({ hash: g }), y > 1 && (!p.blockNumber || $ - p.blockNumber + 1n < y))
                return;
              F(() => A.resolve(p));
            } catch (q) {
              if (q instanceof t.TransactionNotFoundError || q instanceof t.TransactionReceiptNotFoundError) {
                if (!E) {
                  T = !1;
                  return;
                }
                try {
                  l = E, T = !0;
                  const S = await (0, a.withRetry)(() => (0, n.getAction)(m, s.getBlock, "getBlock")({
                    blockNumber: $,
                    includeTransactions: !0
                  }), {
                    delay: P,
                    retryCount: _,
                    shouldRetry: ({ error: k }) => k instanceof e.BlockNotFoundError
                  });
                  T = !1;
                  const R = S.transactions.find(({ from: k, nonce: z }) => k === l.from && z === l.nonce);
                  if (!R || (p = await (0, n.getAction)(m, d.getTransactionReceipt, "getTransactionReceipt")({
                    hash: R.hash
                  }), y > 1 && (!p.blockNumber || $ - p.blockNumber + 1n < y)))
                    return;
                  let O = "replaced";
                  R.to === l.to && R.value === l.value && R.input === l.input ? O = "repriced" : R.from === R.to && R.value === 0n && (O = "cancelled"), F(() => {
                    var k;
                    (k = A.onReplaced) == null || k.call(A, {
                      reason: O,
                      replacedTransaction: l,
                      transaction: R,
                      transactionReceipt: p
                    }), A.resolve(p);
                  });
                } catch (S) {
                  F(() => A.reject(S));
                }
              } else
                F(() => A.reject(q));
            }
        }
      });
    });
    return w;
  }
  return rs;
}
var os = {}, ey;
function r_() {
  if (ey) return os;
  ey = 1, Object.defineProperty(os, "__esModule", { value: !0 }), os.watchBlocks = a;
  const e = le(), t = kr(), n = to(), r = Ie(), o = Fr();
  function a(i, { blockTag: s = "latest", emitMissed: u = !1, emitOnBegin: d = !1, onBlock: f, onError: c, includeTransactions: m, poll: y, pollingInterval: g = i.pollingInterval }) {
    const b = typeof y < "u" ? y : !(i.transport.type === "webSocket" || i.transport.type === "fallback" && i.transport.transports[0].config.type === "webSocket"), h = m ?? !1;
    let _;
    return b ? (() => {
      const v = (0, r.stringify)([
        "watchBlocks",
        i.uid,
        s,
        u,
        d,
        h,
        g
      ]);
      return (0, t.observe)(v, { onBlock: f, onError: c }, (E) => (0, n.poll)(async () => {
        var l;
        try {
          const p = await (0, e.getAction)(i, o.getBlock, "getBlock")({
            blockTag: s,
            includeTransactions: h
          });
          if (p.number && (_ != null && _.number)) {
            if (p.number === _.number)
              return;
            if (p.number - _.number > 1 && u)
              for (let T = (_ == null ? void 0 : _.number) + 1n; T < p.number; T++) {
                const w = await (0, e.getAction)(i, o.getBlock, "getBlock")({
                  blockNumber: T,
                  includeTransactions: h
                });
                E.onBlock(w, _), _ = w;
              }
          }
          (!(_ != null && _.number) || s === "pending" && !(p != null && p.number) || p.number && p.number > _.number) && (E.onBlock(p, _), _ = p);
        } catch (p) {
          (l = E.onError) == null || l.call(E, p);
        }
      }, {
        emitOnBegin: d,
        interval: g
      }));
    })() : (() => {
      let v = !0, E = !0, l = () => v = !1;
      return (async () => {
        try {
          d && (0, e.getAction)(i, o.getBlock, "getBlock")({
            blockTag: s,
            includeTransactions: h
          }).then((w) => {
            v && E && (f(w, void 0), E = !1);
          });
          const p = (() => {
            if (i.transport.type === "fallback") {
              const w = i.transport.transports.find((I) => I.config.type === "webSocket");
              return w ? w.value : i.transport;
            }
            return i.transport;
          })(), { unsubscribe: T } = await p.subscribe({
            params: ["newHeads"],
            async onData(w) {
              if (!v)
                return;
              const I = await (0, e.getAction)(i, o.getBlock, "getBlock")({
                blockNumber: w.blockNumber,
                includeTransactions: h
              }).catch(() => {
              });
              v && (f(I, _), E = !1, _ = I);
            },
            onError(w) {
              c == null || c(w);
            }
          });
          l = T, v || l();
        } catch (p) {
          c == null || c(p);
        }
      })(), () => l();
    })();
  }
  return os;
}
var is = {}, ty;
function n_() {
  if (ty) return is;
  ty = 1, Object.defineProperty(is, "__esModule", { value: !0 }), is.watchEvent = g;
  const e = dr(), t = kr(), n = to(), r = Ie(), o = pe(), a = lr(), i = Jn(), s = Tt(), u = le(), d = c0(), f = ro(), c = Cu(), m = ed(), y = qu();
  function g(b, { address: h, args: _, batch: P = !0, event: j, events: v, fromBlock: E, onError: l, onLogs: p, poll: T, pollingInterval: w = b.pollingInterval, strict: I }) {
    const C = typeof T < "u" ? T : typeof E == "bigint" ? !0 : !(b.transport.type === "webSocket" || b.transport.type === "fallback" && b.transport.transports[0].config.type === "webSocket"), B = I ?? !1;
    return C ? (() => {
      const x = (0, r.stringify)([
        "watchEvent",
        h,
        _,
        P,
        b.uid,
        j,
        w,
        E
      ]);
      return (0, t.observe)(x, { onLogs: p, onError: l }, (H) => {
        let F;
        E !== void 0 && (F = E - 1n);
        let $, q = !1;
        const S = (0, n.poll)(async () => {
          var R;
          if (!q) {
            try {
              $ = await (0, u.getAction)(b, d.createEventFilter, "createEventFilter")({
                address: h,
                args: _,
                event: j,
                events: v,
                strict: B,
                fromBlock: E
              });
            } catch {
            }
            q = !0;
            return;
          }
          try {
            let O;
            if ($)
              O = await (0, u.getAction)(b, c.getFilterChanges, "getFilterChanges")({ filter: $ });
            else {
              const k = await (0, u.getAction)(b, f.getBlockNumber, "getBlockNumber")({});
              F && F !== k ? O = await (0, u.getAction)(b, m.getLogs, "getLogs")({
                address: h,
                args: _,
                event: j,
                events: v,
                fromBlock: F + 1n,
                toBlock: k
              }) : O = [], F = k;
            }
            if (O.length === 0)
              return;
            if (P)
              H.onLogs(O);
            else
              for (const k of O)
                H.onLogs([k]);
          } catch (O) {
            $ && O instanceof a.InvalidInputRpcError && (q = !1), (R = H.onError) == null || R.call(H, O);
          }
        }, {
          emitOnBegin: !0,
          interval: w
        });
        return async () => {
          $ && await (0, u.getAction)(b, y.uninstallFilter, "uninstallFilter")({ filter: $ }), S();
        };
      });
    })() : (() => {
      let x = !0, H = () => x = !1;
      return (async () => {
        try {
          const F = (() => {
            if (b.transport.type === "fallback") {
              const R = b.transport.transports.find((O) => O.config.type === "webSocket");
              return R ? R.value : b.transport;
            }
            return b.transport;
          })(), $ = v ?? (j ? [j] : void 0);
          let q = [];
          $ && (q = [$.flatMap((O) => (0, e.encodeEventTopics)({
            abi: [O],
            eventName: O.name,
            args: _
          }))], j && (q = q[0]));
          const { unsubscribe: S } = await F.subscribe({
            params: ["logs", { address: h, topics: q }],
            onData(R) {
              var k;
              if (!x)
                return;
              const O = R.result;
              try {
                const { eventName: z, args: L } = (0, i.decodeEventLog)({
                  abi: $ ?? [],
                  data: O.data,
                  topics: O.topics,
                  strict: B
                }), U = (0, s.formatLog)(O, { args: L, eventName: z });
                p([U]);
              } catch (z) {
                let L, U;
                if (z instanceof o.DecodeLogDataMismatch || z instanceof o.DecodeLogTopicsMismatch) {
                  if (I)
                    return;
                  L = z.abiItem.name, U = (k = z.abiItem.inputs) == null ? void 0 : k.some((V) => !("name" in V && V.name));
                }
                const G = (0, s.formatLog)(O, {
                  args: U ? [] : {},
                  eventName: L
                });
                p([G]);
              }
            },
            onError(R) {
              l == null || l(R);
            }
          });
          H = S, x || H();
        } catch (F) {
          l == null || l(F);
        }
      })(), () => H();
    })();
  }
  return is;
}
var as = {}, ry;
function o_() {
  if (ry) return as;
  ry = 1, Object.defineProperty(as, "__esModule", { value: !0 }), as.watchPendingTransactions = s;
  const e = le(), t = kr(), n = to(), r = Ie(), o = d0(), a = Cu(), i = qu();
  function s(u, { batch: d = !0, onError: f, onTransactions: c, poll: m, pollingInterval: y = u.pollingInterval }) {
    return (typeof m < "u" ? m : u.transport.type !== "webSocket") ? (() => {
      const _ = (0, r.stringify)([
        "watchPendingTransactions",
        u.uid,
        d,
        y
      ]);
      return (0, t.observe)(_, { onTransactions: c, onError: f }, (P) => {
        let j;
        const v = (0, n.poll)(async () => {
          var E;
          try {
            if (!j)
              try {
                j = await (0, e.getAction)(u, o.createPendingTransactionFilter, "createPendingTransactionFilter")({});
                return;
              } catch (p) {
                throw v(), p;
              }
            const l = await (0, e.getAction)(u, a.getFilterChanges, "getFilterChanges")({ filter: j });
            if (l.length === 0)
              return;
            if (d)
              P.onTransactions(l);
            else
              for (const p of l)
                P.onTransactions([p]);
          } catch (l) {
            (E = P.onError) == null || E.call(P, l);
          }
        }, {
          emitOnBegin: !0,
          interval: y
        });
        return async () => {
          j && await (0, e.getAction)(u, i.uninstallFilter, "uninstallFilter")({ filter: j }), v();
        };
      });
    })() : (() => {
      let _ = !0, P = () => _ = !1;
      return (async () => {
        try {
          const { unsubscribe: j } = await u.transport.subscribe({
            params: ["newPendingTransactions"],
            onData(v) {
              if (!_)
                return;
              const E = v.result;
              c([E]);
            },
            onError(v) {
              f == null || f(v);
            }
          });
          P = j, _ || P();
        } catch (j) {
          f == null || f(j);
        }
      })(), () => P();
    })();
  }
  return as;
}
var ss = {}, us = {}, ny;
function i_() {
  if (ny) return us;
  ny = 1, Object.defineProperty(us, "__esModule", { value: !0 }), us.parseSiweMessage = e;
  function e(r) {
    var g, b, h;
    const { scheme: o, statement: a, ...i } = ((g = r.match(t)) == null ? void 0 : g.groups) ?? {}, { chainId: s, expirationTime: u, issuedAt: d, notBefore: f, requestId: c, ...m } = ((b = r.match(n)) == null ? void 0 : b.groups) ?? {}, y = (h = r.split("Resources:")[1]) == null ? void 0 : h.split(`
- `).slice(1);
    return {
      ...i,
      ...m,
      ...s ? { chainId: Number(s) } : {},
      ...u ? { expirationTime: new Date(u) } : {},
      ...d ? { issuedAt: new Date(d) } : {},
      ...f ? { notBefore: new Date(f) } : {},
      ...c ? { requestId: c } : {},
      ...y ? { resources: y } : {},
      ...o ? { scheme: o } : {},
      ...a ? { statement: a } : {}
    };
  }
  const t = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/, n = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
  return us;
}
var cs = {}, oy;
function a_() {
  if (oy) return cs;
  oy = 1, Object.defineProperty(cs, "__esModule", { value: !0 }), cs.validateSiweMessage = t;
  const e = wt();
  function t(n) {
    const { address: r, domain: o, message: a, nonce: i, scheme: s, time: u = /* @__PURE__ */ new Date() } = n;
    if (o && a.domain !== o || i && a.nonce !== i || s && a.scheme !== s || a.expirationTime && u >= a.expirationTime || a.notBefore && u < a.notBefore)
      return !1;
    try {
      if (!a.address || r && !(0, e.isAddressEqual)(a.address, r))
        return !1;
    } catch {
      return !1;
    }
    return !0;
  }
  return cs;
}
var iy;
function s_() {
  if (iy) return ss;
  iy = 1, Object.defineProperty(ss, "__esModule", { value: !0 }), ss.verifySiweMessage = o;
  const e = ao(), t = i_(), n = a_(), r = Id();
  async function o(a, i) {
    const { address: s, domain: u, message: d, nonce: f, scheme: c, signature: m, time: y = /* @__PURE__ */ new Date(), ...g } = i, b = (0, t.parseSiweMessage)(d);
    if (!b.address || !(0, n.validateSiweMessage)({
      address: s,
      domain: u,
      message: b,
      nonce: f,
      scheme: c,
      time: y
    }))
      return !1;
    const _ = (0, e.hashMessage)(d);
    return (0, r.verifyHash)(a, {
      address: b.address,
      hash: _,
      signature: m,
      ...g
    });
  }
  return ss;
}
var ay;
function G0() {
  if (ay) return Wi;
  ay = 1, Object.defineProperty(Wi, "__esModule", { value: !0 }), Wi.publicActions = J;
  const e = w1(), t = S1(), n = I1(), r = R1(), o = u0(), a = eo(), i = O1(), s = B1(), u = $c(), d = c0(), f = d0(), c = Jh(), m = Gh(), y = Qc(), g = Uh(), b = Zh(), h = C1(), _ = Fr(), P = ro(), j = q1(), v = Zn(), E = M1(), l = td(), p = F1(), T = H1(), w = Cu(), I = $1(), C = Kc(), B = ed(), M = U1(), A = G1(), x = Sd(), H = V1(), F = Zc(), $ = k0(), q = W1(), S = St(), R = X1(), O = Xh(), k = qu(), z = Q1(), L = e_(), U = t_(), G = U0(), V = r_(), K = Qh(), ee = n_(), X = o_(), te = s_(), se = Bu(), Z = sd();
  function J(W) {
    return {
      call: (D) => (0, a.call)(W, D),
      createAccessList: (D) => (0, i.createAccessList)(W, D),
      createBlockFilter: () => (0, s.createBlockFilter)(W),
      createContractEventFilter: (D) => (0, u.createContractEventFilter)(W, D),
      createEventFilter: (D) => (0, d.createEventFilter)(W, D),
      createPendingTransactionFilter: () => (0, f.createPendingTransactionFilter)(W),
      estimateContractGas: (D) => (0, c.estimateContractGas)(W, D),
      estimateGas: (D) => (0, y.estimateGas)(W, D),
      getBalance: (D) => (0, b.getBalance)(W, D),
      getBlobBaseFee: () => (0, h.getBlobBaseFee)(W),
      getBlock: (D) => (0, _.getBlock)(W, D),
      getBlockNumber: (D) => (0, P.getBlockNumber)(W, D),
      getBlockTransactionCount: (D) => (0, j.getBlockTransactionCount)(W, D),
      getBytecode: (D) => (0, E.getCode)(W, D),
      getChainId: () => (0, v.getChainId)(W),
      getCode: (D) => (0, E.getCode)(W, D),
      getContractEvents: (D) => (0, l.getContractEvents)(W, D),
      getEip712Domain: (D) => (0, p.getEip712Domain)(W, D),
      getEnsAddress: (D) => (0, e.getEnsAddress)(W, D),
      getEnsAvatar: (D) => (0, t.getEnsAvatar)(W, D),
      getEnsName: (D) => (0, n.getEnsName)(W, D),
      getEnsResolver: (D) => (0, r.getEnsResolver)(W, D),
      getEnsText: (D) => (0, o.getEnsText)(W, D),
      getFeeHistory: (D) => (0, T.getFeeHistory)(W, D),
      estimateFeesPerGas: (D) => (0, m.estimateFeesPerGas)(W, D),
      getFilterChanges: (D) => (0, w.getFilterChanges)(W, D),
      getFilterLogs: (D) => (0, I.getFilterLogs)(W, D),
      getGasPrice: () => (0, C.getGasPrice)(W),
      getLogs: (D) => (0, B.getLogs)(W, D),
      getProof: (D) => (0, M.getProof)(W, D),
      estimateMaxPriorityFeePerGas: (D) => (0, g.estimateMaxPriorityFeePerGas)(W, D),
      getStorageAt: (D) => (0, A.getStorageAt)(W, D),
      getTransaction: (D) => (0, x.getTransaction)(W, D),
      getTransactionConfirmations: (D) => (0, H.getTransactionConfirmations)(W, D),
      getTransactionCount: (D) => (0, F.getTransactionCount)(W, D),
      getTransactionReceipt: (D) => (0, $.getTransactionReceipt)(W, D),
      multicall: (D) => (0, q.multicall)(W, D),
      prepareTransactionRequest: (D) => (0, se.prepareTransactionRequest)(W, D),
      readContract: (D) => (0, S.readContract)(W, D),
      sendRawTransaction: (D) => (0, Z.sendRawTransaction)(W, D),
      simulate: (D) => (0, R.simulate)(W, D),
      simulateContract: (D) => (0, O.simulateContract)(W, D),
      verifyMessage: (D) => (0, z.verifyMessage)(W, D),
      verifySiweMessage: (D) => (0, te.verifySiweMessage)(W, D),
      verifyTypedData: (D) => (0, L.verifyTypedData)(W, D),
      uninstallFilter: (D) => (0, k.uninstallFilter)(W, D),
      waitForTransactionReceipt: (D) => (0, U.waitForTransactionReceipt)(W, D),
      watchBlocks: (D) => (0, V.watchBlocks)(W, D),
      watchBlockNumber: (D) => (0, G.watchBlockNumber)(W, D),
      watchContractEvent: (D) => (0, K.watchContractEvent)(W, D),
      watchEvent: (D) => (0, ee.watchEvent)(W, D),
      watchPendingTransactions: (D) => (0, X.watchPendingTransactions)(W, D)
    };
  }
  return Wi;
}
var sy;
function u_() {
  if (sy) return Vi;
  sy = 1, Object.defineProperty(Vi, "__esModule", { value: !0 }), Vi.createPublicClient = n;
  const e = xu(), t = G0();
  function n(r) {
    const { key: o = "public", name: a = "Public Client" } = r;
    return (0, e.createClient)({
      ...r,
      key: o,
      name: a,
      type: "publicClient"
    }).extend(t.publicActions);
  }
  return Vi;
}
var ds = {}, fs = {}, ls = {}, uy;
function c_() {
  if (uy) return ls;
  uy = 1, Object.defineProperty(ls, "__esModule", { value: !0 }), ls.dropTransaction = e;
  async function e(t, { hash: n }) {
    await t.request({
      method: `${t.mode}_dropTransaction`,
      params: [n]
    });
  }
  return ls;
}
var ms = {}, cy;
function d_() {
  if (cy) return ms;
  cy = 1, Object.defineProperty(ms, "__esModule", { value: !0 }), ms.dumpState = e;
  async function e(t) {
    return t.request({
      method: `${t.mode}_dumpState`
    });
  }
  return ms;
}
var bs = {}, dy;
function f_() {
  if (dy) return bs;
  dy = 1, Object.defineProperty(bs, "__esModule", { value: !0 }), bs.getAutomine = e;
  async function e(t) {
    return t.mode === "ganache" ? await t.request({
      method: "eth_mining"
    }) : await t.request({
      method: `${t.mode}_getAutomine`
    });
  }
  return bs;
}
var gs = {}, fy;
function l_() {
  if (fy) return gs;
  fy = 1, Object.defineProperty(gs, "__esModule", { value: !0 }), gs.getTxpoolContent = e;
  async function e(t) {
    return await t.request({
      method: "txpool_content"
    });
  }
  return gs;
}
var ys = {}, ly;
function m_() {
  if (ly) return ys;
  ly = 1, Object.defineProperty(ys, "__esModule", { value: !0 }), ys.getTxpoolStatus = t;
  const e = Pe();
  async function t(n) {
    const { pending: r, queued: o } = await n.request({
      method: "txpool_status"
    });
    return {
      pending: (0, e.hexToNumber)(r),
      queued: (0, e.hexToNumber)(o)
    };
  }
  return ys;
}
var hs = {}, my;
function b_() {
  if (my) return hs;
  my = 1, Object.defineProperty(hs, "__esModule", { value: !0 }), hs.impersonateAccount = e;
  async function e(t, { address: n }) {
    await t.request({
      method: `${t.mode}_impersonateAccount`,
      params: [n]
    });
  }
  return hs;
}
var ps = {}, by;
function g_() {
  if (by) return ps;
  by = 1, Object.defineProperty(ps, "__esModule", { value: !0 }), ps.increaseTime = t;
  const e = Y();
  async function t(n, { seconds: r }) {
    return await n.request({
      method: "evm_increaseTime",
      params: [(0, e.numberToHex)(r)]
    });
  }
  return ps;
}
var _s = {}, gy;
function y_() {
  if (gy) return _s;
  gy = 1, Object.defineProperty(_s, "__esModule", { value: !0 }), _s.inspectTxpool = e;
  async function e(t) {
    return await t.request({
      method: "txpool_inspect"
    });
  }
  return _s;
}
var vs = {}, yy;
function h_() {
  if (yy) return vs;
  yy = 1, Object.defineProperty(vs, "__esModule", { value: !0 }), vs.loadState = e;
  async function e(t, { state: n }) {
    await t.request({
      method: `${t.mode}_loadState`,
      params: [n]
    });
  }
  return vs;
}
var Es = {}, hy;
function p_() {
  if (hy) return Es;
  hy = 1, Object.defineProperty(Es, "__esModule", { value: !0 }), Es.mine = t;
  const e = Y();
  async function t(n, { blocks: r, interval: o }) {
    n.mode === "ganache" ? await n.request({
      method: "evm_mine",
      params: [{ blocks: (0, e.numberToHex)(r) }]
    }) : await n.request({
      method: `${n.mode}_mine`,
      params: [(0, e.numberToHex)(r), (0, e.numberToHex)(o || 0)]
    });
  }
  return Es;
}
var js = {}, py;
function __() {
  if (py) return js;
  py = 1, Object.defineProperty(js, "__esModule", { value: !0 }), js.removeBlockTimestampInterval = e;
  async function e(t) {
    await t.request({
      method: `${t.mode}_removeBlockTimestampInterval`
    });
  }
  return js;
}
var Ps = {}, _y;
function v_() {
  if (_y) return Ps;
  _y = 1, Object.defineProperty(Ps, "__esModule", { value: !0 }), Ps.reset = e;
  async function e(t, { blockNumber: n, jsonRpcUrl: r } = {}) {
    await t.request({
      method: `${t.mode}_reset`,
      params: [{ forking: { blockNumber: Number(n), jsonRpcUrl: r } }]
    });
  }
  return Ps;
}
var ws = {}, vy;
function E_() {
  if (vy) return ws;
  vy = 1, Object.defineProperty(ws, "__esModule", { value: !0 }), ws.revert = e;
  async function e(t, { id: n }) {
    await t.request({
      method: "evm_revert",
      params: [n]
    });
  }
  return ws;
}
var Ts = {}, Ey;
function j_() {
  if (Ey) return Ts;
  Ey = 1, Object.defineProperty(Ts, "__esModule", { value: !0 }), Ts.sendUnsignedTransaction = n;
  const e = xr(), t = jt();
  async function n(r, o) {
    var v, E, l;
    const { accessList: a, data: i, from: s, gas: u, gasPrice: d, maxFeePerGas: f, maxPriorityFeePerGas: c, nonce: m, to: y, value: g, ...b } = o, h = (l = (E = (v = r.chain) == null ? void 0 : v.formatters) == null ? void 0 : E.transactionRequest) == null ? void 0 : l.format, P = (h || t.formatTransactionRequest)({
      ...(0, e.extract)(b, { format: h }),
      accessList: a,
      data: i,
      from: s,
      gas: u,
      gasPrice: d,
      maxFeePerGas: f,
      maxPriorityFeePerGas: c,
      nonce: m,
      to: y,
      value: g
    });
    return await r.request({
      method: "eth_sendUnsignedTransaction",
      params: [P]
    });
  }
  return Ts;
}
var As = {}, jy;
function P_() {
  if (jy) return As;
  jy = 1, Object.defineProperty(As, "__esModule", { value: !0 }), As.setAutomine = e;
  async function e(t, n) {
    t.mode === "ganache" ? n ? await t.request({ method: "miner_start" }) : await t.request({ method: "miner_stop" }) : await t.request({
      method: "evm_setAutomine",
      params: [n]
    });
  }
  return As;
}
var Ss = {}, Py;
function w_() {
  if (Py) return Ss;
  Py = 1, Object.defineProperty(Ss, "__esModule", { value: !0 }), Ss.setBalance = t;
  const e = Y();
  async function t(n, { address: r, value: o }) {
    n.mode === "ganache" ? await n.request({
      method: "evm_setAccountBalance",
      params: [r, (0, e.numberToHex)(o)]
    }) : await n.request({
      method: `${n.mode}_setBalance`,
      params: [r, (0, e.numberToHex)(o)]
    });
  }
  return Ss;
}
var Is = {}, wy;
function T_() {
  if (wy) return Is;
  wy = 1, Object.defineProperty(Is, "__esModule", { value: !0 }), Is.setBlockGasLimit = t;
  const e = Y();
  async function t(n, { gasLimit: r }) {
    await n.request({
      method: "evm_setBlockGasLimit",
      params: [(0, e.numberToHex)(r)]
    });
  }
  return Is;
}
var Rs = {}, Ty;
function A_() {
  if (Ty) return Rs;
  Ty = 1, Object.defineProperty(Rs, "__esModule", { value: !0 }), Rs.setBlockTimestampInterval = e;
  async function e(t, { interval: n }) {
    const r = t.mode === "hardhat" ? n * 1e3 : n;
    await t.request({
      method: `${t.mode}_setBlockTimestampInterval`,
      params: [r]
    });
  }
  return Rs;
}
var Os = {}, Ay;
function S_() {
  if (Ay) return Os;
  Ay = 1, Object.defineProperty(Os, "__esModule", { value: !0 }), Os.setCode = e;
  async function e(t, { address: n, bytecode: r }) {
    t.mode === "ganache" ? await t.request({
      method: "evm_setAccountCode",
      params: [n, r]
    }) : await t.request({
      method: `${t.mode}_setCode`,
      params: [n, r]
    });
  }
  return Os;
}
var Bs = {}, Sy;
function I_() {
  if (Sy) return Bs;
  Sy = 1, Object.defineProperty(Bs, "__esModule", { value: !0 }), Bs.setCoinbase = e;
  async function e(t, { address: n }) {
    await t.request({
      method: `${t.mode}_setCoinbase`,
      params: [n]
    });
  }
  return Bs;
}
var Cs = {}, Iy;
function R_() {
  if (Iy) return Cs;
  Iy = 1, Object.defineProperty(Cs, "__esModule", { value: !0 }), Cs.setIntervalMining = e;
  async function e(t, { interval: n }) {
    const r = t.mode === "hardhat" ? n * 1e3 : n;
    await t.request({
      method: "evm_setIntervalMining",
      params: [r]
    });
  }
  return Cs;
}
var qs = {}, Ry;
function O_() {
  if (Ry) return qs;
  Ry = 1, Object.defineProperty(qs, "__esModule", { value: !0 }), qs.setLoggingEnabled = e;
  async function e(t, n) {
    await t.request({
      method: `${t.mode}_setLoggingEnabled`,
      params: [n]
    });
  }
  return qs;
}
var Ms = {}, Oy;
function B_() {
  if (Oy) return Ms;
  Oy = 1, Object.defineProperty(Ms, "__esModule", { value: !0 }), Ms.setMinGasPrice = t;
  const e = Y();
  async function t(n, { gasPrice: r }) {
    await n.request({
      method: `${n.mode}_setMinGasPrice`,
      params: [(0, e.numberToHex)(r)]
    });
  }
  return Ms;
}
var xs = {}, By;
function C_() {
  if (By) return xs;
  By = 1, Object.defineProperty(xs, "__esModule", { value: !0 }), xs.setNextBlockBaseFeePerGas = t;
  const e = Y();
  async function t(n, { baseFeePerGas: r }) {
    await n.request({
      method: `${n.mode}_setNextBlockBaseFeePerGas`,
      params: [(0, e.numberToHex)(r)]
    });
  }
  return xs;
}
var Fs = {}, Cy;
function q_() {
  if (Cy) return Fs;
  Cy = 1, Object.defineProperty(Fs, "__esModule", { value: !0 }), Fs.setNextBlockTimestamp = t;
  const e = Y();
  async function t(n, { timestamp: r }) {
    await n.request({
      method: "evm_setNextBlockTimestamp",
      params: [(0, e.numberToHex)(r)]
    });
  }
  return Fs;
}
var ks = {}, qy;
function M_() {
  if (qy) return ks;
  qy = 1, Object.defineProperty(ks, "__esModule", { value: !0 }), ks.setNonce = t;
  const e = Y();
  async function t(n, { address: r, nonce: o }) {
    await n.request({
      method: `${n.mode}_setNonce`,
      params: [r, (0, e.numberToHex)(o)]
    });
  }
  return ks;
}
var Hs = {}, My;
function x_() {
  if (My) return Hs;
  My = 1, Object.defineProperty(Hs, "__esModule", { value: !0 }), Hs.setRpcUrl = e;
  async function e(t, n) {
    await t.request({
      method: `${t.mode}_setRpcUrl`,
      params: [n]
    });
  }
  return Hs;
}
var $s = {}, xy;
function F_() {
  if (xy) return $s;
  xy = 1, Object.defineProperty($s, "__esModule", { value: !0 }), $s.setStorageAt = t;
  const e = Y();
  async function t(n, { address: r, index: o, value: a }) {
    await n.request({
      method: `${n.mode}_setStorageAt`,
      params: [
        r,
        typeof o == "number" ? (0, e.numberToHex)(o) : o,
        a
      ]
    });
  }
  return $s;
}
var Ns = {}, Fy;
function k_() {
  if (Fy) return Ns;
  Fy = 1, Object.defineProperty(Ns, "__esModule", { value: !0 }), Ns.snapshot = e;
  async function e(t) {
    return await t.request({
      method: "evm_snapshot"
    });
  }
  return Ns;
}
var zs = {}, ky;
function H_() {
  if (ky) return zs;
  ky = 1, Object.defineProperty(zs, "__esModule", { value: !0 }), zs.stopImpersonatingAccount = e;
  async function e(t, { address: n }) {
    await t.request({
      method: `${t.mode}_stopImpersonatingAccount`,
      params: [n]
    });
  }
  return zs;
}
var Hy;
function V0() {
  if (Hy) return fs;
  Hy = 1, Object.defineProperty(fs, "__esModule", { value: !0 }), fs.testActions = A;
  const e = c_(), t = d_(), n = f_(), r = l_(), o = m_(), a = b_(), i = g_(), s = y_(), u = h_(), d = p_(), f = __(), c = v_(), m = E_(), y = j_(), g = P_(), b = w_(), h = T_(), _ = A_(), P = S_(), j = I_(), v = R_(), E = O_(), l = B_(), p = C_(), T = q_(), w = M_(), I = x_(), C = F_(), B = k_(), M = H_();
  function A({ mode: x }) {
    return (H) => {
      const F = H.extend(() => ({
        mode: x
      }));
      return {
        dropTransaction: ($) => (0, e.dropTransaction)(F, $),
        dumpState: () => (0, t.dumpState)(F),
        getAutomine: () => (0, n.getAutomine)(F),
        getTxpoolContent: () => (0, r.getTxpoolContent)(F),
        getTxpoolStatus: () => (0, o.getTxpoolStatus)(F),
        impersonateAccount: ($) => (0, a.impersonateAccount)(F, $),
        increaseTime: ($) => (0, i.increaseTime)(F, $),
        inspectTxpool: () => (0, s.inspectTxpool)(F),
        loadState: ($) => (0, u.loadState)(F, $),
        mine: ($) => (0, d.mine)(F, $),
        removeBlockTimestampInterval: () => (0, f.removeBlockTimestampInterval)(F),
        reset: ($) => (0, c.reset)(F, $),
        revert: ($) => (0, m.revert)(F, $),
        sendUnsignedTransaction: ($) => (0, y.sendUnsignedTransaction)(F, $),
        setAutomine: ($) => (0, g.setAutomine)(F, $),
        setBalance: ($) => (0, b.setBalance)(F, $),
        setBlockGasLimit: ($) => (0, h.setBlockGasLimit)(F, $),
        setBlockTimestampInterval: ($) => (0, _.setBlockTimestampInterval)(F, $),
        setCode: ($) => (0, P.setCode)(F, $),
        setCoinbase: ($) => (0, j.setCoinbase)(F, $),
        setIntervalMining: ($) => (0, v.setIntervalMining)(F, $),
        setLoggingEnabled: ($) => (0, E.setLoggingEnabled)(F, $),
        setMinGasPrice: ($) => (0, l.setMinGasPrice)(F, $),
        setNextBlockBaseFeePerGas: ($) => (0, p.setNextBlockBaseFeePerGas)(F, $),
        setNextBlockTimestamp: ($) => (0, T.setNextBlockTimestamp)(F, $),
        setNonce: ($) => (0, w.setNonce)(F, $),
        setRpcUrl: ($) => (0, I.setRpcUrl)(F, $),
        setStorageAt: ($) => (0, C.setStorageAt)(F, $),
        snapshot: () => (0, B.snapshot)(F),
        stopImpersonatingAccount: ($) => (0, M.stopImpersonatingAccount)(F, $)
      };
    };
  }
  return fs;
}
var $y;
function $_() {
  if ($y) return ds;
  $y = 1, Object.defineProperty(ds, "__esModule", { value: !0 }), ds.createTestClient = n;
  const e = xu(), t = V0();
  function n(r) {
    const { key: o = "test", name: a = "Test Client", mode: i } = r;
    return (0, e.createClient)({
      ...r,
      key: o,
      name: a,
      type: "testClient"
    }).extend((u) => ({
      mode: i,
      ...(0, t.testActions)({ mode: i })(u)
    }));
  }
  return ds;
}
var Ds = {}, Ls = {}, Ny;
function N_() {
  if (Ny) return Ls;
  Ny = 1, Object.defineProperty(Ls, "__esModule", { value: !0 }), Ls.addChain = t;
  const e = Y();
  async function t(n, { chain: r }) {
    const { id: o, name: a, nativeCurrency: i, rpcUrls: s, blockExplorers: u } = r;
    await n.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: (0, e.numberToHex)(o),
          chainName: a,
          nativeCurrency: i,
          rpcUrls: s.default.http,
          blockExplorerUrls: u ? Object.values(u).map(({ url: d }) => d) : void 0
        }
      ]
    }, { dedupe: !0, retryCount: 0 });
  }
  return Ls;
}
var Us = {}, zy;
function z_() {
  if (zy) return Us;
  zy = 1, Object.defineProperty(Us, "__esModule", { value: !0 }), Us.deployContract = n;
  const e = Qn(), t = ud();
  function n(r, o) {
    const { abi: a, args: i, bytecode: s, ...u } = o, d = (0, e.encodeDeployData)({ abi: a, args: i, bytecode: s });
    return (0, t.sendTransaction)(r, {
      ...u,
      data: d
    });
  }
  return Us;
}
var Gs = {}, Dy;
function D_() {
  if (Dy) return Gs;
  Dy = 1, Object.defineProperty(Gs, "__esModule", { value: !0 }), Gs.getAddresses = t;
  const e = Ue();
  async function t(n) {
    var o;
    return ((o = n.account) == null ? void 0 : o.type) === "local" ? [n.account.address] : (await n.request({ method: "eth_accounts" }, { dedupe: !0 })).map((a) => (0, e.checksumAddress)(a));
  }
  return Gs;
}
var Vs = {}, Ly;
function L_() {
  if (Ly) return Vs;
  Ly = 1, Object.defineProperty(Vs, "__esModule", { value: !0 }), Vs.getPermissions = e;
  async function e(t) {
    return await t.request({ method: "wallet_getPermissions" }, { dedupe: !0 });
  }
  return Vs;
}
var Ws = {}, Uy;
function U_() {
  if (Uy) return Ws;
  Uy = 1, Object.defineProperty(Ws, "__esModule", { value: !0 }), Ws.requestAddresses = t;
  const e = Ue();
  async function t(n) {
    return (await n.request({ method: "eth_requestAccounts" }, { dedupe: !0, retryCount: 0 })).map((o) => (0, e.getAddress)(o));
  }
  return Ws;
}
var Ks = {}, Gy;
function G_() {
  if (Gy) return Ks;
  Gy = 1, Object.defineProperty(Ks, "__esModule", { value: !0 }), Ks.requestPermissions = e;
  async function e(t, n) {
    return t.request({
      method: "wallet_requestPermissions",
      params: [n]
    }, { retryCount: 0 });
  }
  return Ks;
}
var Zs = {}, Vy;
function V_() {
  if (Vy) return Zs;
  Vy = 1, Object.defineProperty(Zs, "__esModule", { value: !0 }), Zs.signMessage = r;
  const e = Se(), t = no(), n = Y();
  async function r(o, { account: a = o.account, message: i }) {
    if (!a)
      throw new t.AccountNotFoundError({
        docsPath: "/docs/actions/wallet/signMessage"
      });
    const s = (0, e.parseAccount)(a);
    if (s.signMessage)
      return s.signMessage({ message: i });
    const u = typeof i == "string" ? (0, n.stringToHex)(i) : i.raw instanceof Uint8Array ? (0, n.toHex)(i.raw) : i.raw;
    return o.request({
      method: "personal_sign",
      params: [u, s.address]
    }, { retryCount: 0 });
  }
  return Zs;
}
var Js = {}, Wy;
function W_() {
  if (Wy) return Js;
  Wy = 1, Object.defineProperty(Js, "__esModule", { value: !0 }), Js.signTransaction = u;
  const e = Se(), t = no(), n = Mu(), r = Y(), o = jt(), a = le(), i = Pt(), s = Zn();
  async function u(d, f) {
    var P, j, v, E;
    const { account: c = d.account, chain: m = d.chain, ...y } = f;
    if (!c)
      throw new t.AccountNotFoundError({
        docsPath: "/docs/actions/wallet/signTransaction"
      });
    const g = (0, e.parseAccount)(c);
    (0, i.assertRequest)({
      account: g,
      ...f
    });
    const b = await (0, a.getAction)(d, s.getChainId, "getChainId")({});
    m !== null && (0, n.assertCurrentChain)({
      currentChainId: b,
      chain: m
    });
    const h = (m == null ? void 0 : m.formatters) || ((P = d.chain) == null ? void 0 : P.formatters), _ = ((j = h == null ? void 0 : h.transactionRequest) == null ? void 0 : j.format) || o.formatTransactionRequest;
    return g.signTransaction ? g.signTransaction({
      ...y,
      chainId: b
    }, { serializer: (E = (v = d.chain) == null ? void 0 : v.serializers) == null ? void 0 : E.transaction }) : await d.request({
      method: "eth_signTransaction",
      params: [
        {
          ..._(y),
          chainId: (0, r.numberToHex)(b),
          from: g.address
        }
      ]
    }, { retryCount: 0 });
  }
  return Js;
}
var Ys = {}, Ky;
function K_() {
  if (Ky) return Ys;
  Ky = 1, Object.defineProperty(Ys, "__esModule", { value: !0 }), Ys.signTypedData = r;
  const e = Se(), t = no(), n = ku();
  async function r(o, a) {
    const { account: i = o.account, domain: s, message: u, primaryType: d } = a;
    if (!i)
      throw new t.AccountNotFoundError({
        docsPath: "/docs/actions/wallet/signTypedData"
      });
    const f = (0, e.parseAccount)(i), c = {
      EIP712Domain: (0, n.getTypesForEIP712Domain)({ domain: s }),
      ...a.types
    };
    if ((0, n.validateTypedData)({ domain: s, message: u, primaryType: d, types: c }), f.signTypedData)
      return f.signTypedData({ domain: s, message: u, primaryType: d, types: c });
    const m = (0, n.serializeTypedData)({ domain: s, message: u, primaryType: d, types: c });
    return o.request({
      method: "eth_signTypedData_v4",
      params: [f.address, m]
    }, { retryCount: 0 });
  }
  return Ys;
}
var Xs = {}, Zy;
function Z_() {
  if (Zy) return Xs;
  Zy = 1, Object.defineProperty(Xs, "__esModule", { value: !0 }), Xs.switchChain = t;
  const e = Y();
  async function t(n, { id: r }) {
    await n.request({
      method: "wallet_switchEthereumChain",
      params: [
        {
          chainId: (0, e.numberToHex)(r)
        }
      ]
    }, { retryCount: 0 });
  }
  return Xs;
}
var Qs = {}, Jy;
function J_() {
  if (Jy) return Qs;
  Jy = 1, Object.defineProperty(Qs, "__esModule", { value: !0 }), Qs.watchAsset = e;
  async function e(t, n) {
    return await t.request({
      method: "wallet_watchAsset",
      params: n
    }, { retryCount: 0 });
  }
  return Qs;
}
var Yy;
function W0() {
  if (Yy) return Ds;
  Yy = 1, Object.defineProperty(Ds, "__esModule", { value: !0 }), Ds.walletActions = h;
  const e = Zn(), t = N_(), n = z_(), r = D_(), o = L_(), a = Bu(), i = U_(), s = G_(), u = sd(), d = ud(), f = V_(), c = W_(), m = K_(), y = Z_(), g = J_(), b = t0();
  function h(_) {
    return {
      addChain: (P) => (0, t.addChain)(_, P),
      deployContract: (P) => (0, n.deployContract)(_, P),
      getAddresses: () => (0, r.getAddresses)(_),
      getChainId: () => (0, e.getChainId)(_),
      getPermissions: () => (0, o.getPermissions)(_),
      prepareTransactionRequest: (P) => (0, a.prepareTransactionRequest)(_, P),
      requestAddresses: () => (0, i.requestAddresses)(_),
      requestPermissions: (P) => (0, s.requestPermissions)(_, P),
      sendRawTransaction: (P) => (0, u.sendRawTransaction)(_, P),
      sendTransaction: (P) => (0, d.sendTransaction)(_, P),
      signMessage: (P) => (0, f.signMessage)(_, P),
      signTransaction: (P) => (0, c.signTransaction)(_, P),
      signTypedData: (P) => (0, m.signTypedData)(_, P),
      switchChain: (P) => (0, y.switchChain)(_, P),
      watchAsset: (P) => (0, g.watchAsset)(_, P),
      writeContract: (P) => (0, b.writeContract)(_, P)
    };
  }
  return Ds;
}
var eu = {}, Xy;
function Y_() {
  if (Xy) return eu;
  Xy = 1, Object.defineProperty(eu, "__esModule", { value: !0 }), eu.createWalletClient = n;
  const e = xu(), t = W0();
  function n(r) {
    const { key: o = "wallet", name: a = "Wallet Client", transport: i } = r;
    return (0, e.createClient)({
      ...r,
      key: o,
      name: a,
      transport: i,
      type: "walletClient"
    }).extend(t.walletActions);
  }
  return eu;
}
var tu = {}, Qy;
function X_() {
  if (Qy) return tu;
  Qy = 1, Object.defineProperty(tu, "__esModule", { value: !0 }), tu.webSocket = a;
  const e = Qe(), t = dd(), n = b0(), r = gd(), o = oo();
  function a(i, s = {}) {
    const { keepAlive: u, key: d = "webSocket", methods: f, name: c = "WebSocket JSON-RPC", reconnect: m, retryDelay: y } = s;
    return ({ chain: g, retryCount: b, timeout: h }) => {
      var v;
      const _ = s.retryCount ?? b, P = h ?? s.timeout ?? 1e4, j = i || ((v = g == null ? void 0 : g.rpcUrls.default.webSocket) == null ? void 0 : v[0]);
      if (!j)
        throw new t.UrlRequiredError();
      return (0, o.createTransport)({
        key: d,
        methods: f,
        name: c,
        async request({ method: E, params: l }) {
          const p = { method: E, params: l }, T = await (0, r.getWebSocketRpcClient)(j, {
            keepAlive: u,
            reconnect: m
          }), { error: w, result: I } = await T.requestAsync({
            body: p,
            timeout: P
          });
          if (w)
            throw new e.RpcRequestError({
              body: p,
              error: w,
              url: j
            });
          return I;
        },
        retryCount: _,
        retryDelay: y,
        timeout: P,
        type: "webSocket"
      }, {
        getSocket() {
          return (0, n.getSocket)(j);
        },
        getRpcClient() {
          return (0, r.getWebSocketRpcClient)(j);
        },
        async subscribe({ params: E, onData: l, onError: p }) {
          const T = await (0, r.getWebSocketRpcClient)(j), { result: w } = await new Promise((I, C) => T.request({
            body: {
              method: "eth_subscribe",
              params: E
            },
            onError(B) {
              C(B), p == null || p(B);
            },
            onResponse(B) {
              if (B.error) {
                C(B.error), p == null || p(B.error);
                return;
              }
              if (typeof B.id == "number") {
                I(B);
                return;
              }
              B.method === "eth_subscription" && l(B.params);
            }
          }));
          return {
            subscriptionId: w,
            async unsubscribe() {
              return new Promise((I) => T.request({
                body: {
                  method: "eth_unsubscribe",
                  params: [w]
                },
                onResponse: I
              }));
            }
          };
        }
      });
    };
  }
  return tu;
}
var pt = {}, eh;
function Q_() {
  return eh || (eh = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.zeroAddress = pt.entryPoint07Address = pt.entryPoint06Address = void 0, pt.entryPoint06Address = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789", pt.entryPoint07Address = "0x0000000071727De22E5E9d8BAf0edAc6f37da032", pt.zeroAddress = "0x0000000000000000000000000000000000000000"), pt;
}
var kn = {}, th;
function ev() {
  if (th) return kn;
  th = 1, Object.defineProperty(kn, "__esModule", { value: !0 }), kn.ProviderRpcError = void 0;
  class e extends Error {
    constructor(n, r) {
      super(r), Object.defineProperty(this, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "details", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.code = n, this.details = r;
    }
  }
  return kn.ProviderRpcError = e, kn;
}
var ru = {}, rh;
function tv() {
  if (rh) return ru;
  rh = 1, Object.defineProperty(ru, "__esModule", { value: !0 }), ru.decodeDeployData = r;
  const e = pe(), t = $t(), n = "/docs/contract/decodeDeployData";
  function r(o) {
    const { abi: a, bytecode: i, data: s } = o;
    if (s === i)
      return { bytecode: i };
    const u = a.find((f) => "type" in f && f.type === "constructor");
    if (!u)
      throw new e.AbiConstructorNotFoundError({ docsPath: n });
    if (!("inputs" in u))
      throw new e.AbiConstructorParamsNotFoundError({ docsPath: n });
    if (!u.inputs || u.inputs.length === 0)
      throw new e.AbiConstructorParamsNotFoundError({ docsPath: n });
    return { args: (0, t.decodeAbiParameters)(u.inputs, `0x${s.replace(i, "")}`), bytecode: i };
  }
  return ru;
}
var nu = {}, nh;
function rv() {
  if (nh) return nu;
  nh = 1, Object.defineProperty(nu, "__esModule", { value: !0 }), nu.compactSignatureToSignature = n;
  const e = be(), t = Y();
  function n({ r, yParityAndS: o }) {
    const a = (0, e.hexToBytes)(o), i = a[0] & 128 ? 1 : 0, s = a;
    return i === 1 && (s[0] &= 127), { r, s: (0, t.bytesToHex)(s), yParity: i };
  }
  return nu;
}
var ou = {}, oh;
function nv() {
  if (oh) return ou;
  oh = 1, Object.defineProperty(ou, "__esModule", { value: !0 }), ou.parseCompactSignature = n;
  const e = /* @__PURE__ */ Un(), t = Y();
  function n(r) {
    const { r: o, s: a } = e.secp256k1.Signature.fromCompact(r.slice(2, 130));
    return {
      r: (0, t.numberToHex)(o, { size: 32 }),
      yParityAndS: (0, t.numberToHex)(a, { size: 32 })
    };
  }
  return ou;
}
var iu = {}, ih;
function ov() {
  if (ih) return iu;
  ih = 1, Object.defineProperty(iu, "__esModule", { value: !0 }), iu.parseSignature = n;
  const e = /* @__PURE__ */ Un(), t = Y();
  function n(r) {
    const { r: o, s: a } = e.secp256k1.Signature.fromCompact(r.slice(2, 130)), i = +`0x${r.slice(130)}`, [s, u] = (() => {
      if (i === 0 || i === 1)
        return [void 0, i];
      if (i === 27)
        return [BigInt(i), 0];
      if (i === 28)
        return [BigInt(i), 1];
      throw new Error("Invalid yParityOrV value");
    })();
    return typeof s < "u" ? {
      r: (0, t.numberToHex)(o, { size: 32 }),
      s: (0, t.numberToHex)(a, { size: 32 }),
      v: s,
      yParity: u
    } : {
      r: (0, t.numberToHex)(o, { size: 32 }),
      s: (0, t.numberToHex)(a, { size: 32 }),
      yParity: u
    };
  }
  return iu;
}
var au = {}, ah;
function iv() {
  if (ah) return au;
  ah = 1, Object.defineProperty(au, "__esModule", { value: !0 }), au.recoverTransactionAddress = o;
  const e = Me(), t = Td(), n = Nu(), r = Dt();
  async function o(a) {
    const { serializedTransaction: i, signature: s } = a, u = (0, t.parseTransaction)(i), d = s ?? {
      r: u.r,
      s: u.s,
      v: u.v,
      yParity: u.yParity
    }, f = (0, n.serializeTransaction)({
      ...u,
      r: void 0,
      s: void 0,
      v: void 0,
      yParity: void 0,
      sidecars: void 0
    });
    return await (0, r.recoverAddress)({
      hash: (0, e.keccak256)(f),
      signature: d
    });
  }
  return au;
}
var su = {}, sh;
function av() {
  if (sh) return su;
  sh = 1, Object.defineProperty(su, "__esModule", { value: !0 }), su.signatureToCompactSignature = n;
  const e = be(), t = Y();
  function n(r) {
    const { r: o, s: a, v: i, yParity: s } = r, u = Number(s ?? i - 27n);
    let d = a;
    if (u === 1) {
      const f = (0, e.hexToBytes)(a);
      f[0] |= 128, d = (0, t.bytesToHex)(f);
    }
    return { r: o, yParityAndS: d };
  }
  return su;
}
var uu = {}, uh;
function sv() {
  if (uh) return uu;
  uh = 1, Object.defineProperty(uu, "__esModule", { value: !0 }), uu.serializeCompactSignature = n;
  const e = /* @__PURE__ */ Un(), t = Pe();
  function n({ r, yParityAndS: o }) {
    return `0x${new e.secp256k1.Signature((0, t.hexToBigInt)(r), (0, t.hexToBigInt)(o)).toCompactHex()}`;
  }
  return uu;
}
var cu = {}, ch;
function uv() {
  if (ch) return cu;
  ch = 1, Object.defineProperty(cu, "__esModule", { value: !0 }), cu.sidecarsToVersionedHashes = t;
  const e = Yc();
  function t(n) {
    const { sidecars: r, version: o } = n, a = n.to ?? (typeof r[0].blob == "string" ? "hex" : "bytes"), i = [];
    for (const { commitment: s } of r)
      i.push((0, e.commitmentToVersionedHash)({
        commitment: s,
        to: a,
        version: o
      }));
    return i;
  }
  return cu;
}
var du = {}, dh;
function cv() {
  if (dh) return du;
  dh = 1, Object.defineProperty(du, "__esModule", { value: !0 }), du.fromBlobs = r;
  const e = zn(), t = be(), n = Y();
  function r(o) {
    const a = o.to ?? (typeof o.blobs[0] == "string" ? "hex" : "bytes"), i = typeof o.blobs[0] == "string" ? o.blobs.map((c) => (0, t.hexToBytes)(c)) : o.blobs, s = i.reduce((c, m) => c + m.length, 0), u = (0, e.createCursor)(new Uint8Array(s));
    let d = !0;
    for (const c of i) {
      const m = (0, e.createCursor)(c);
      for (; d && m.position < c.length; ) {
        m.incrementPosition(1);
        let y = 31;
        c.length - m.position < 31 && (y = c.length - m.position);
        for (const g in Array.from({ length: y })) {
          const b = m.readByte();
          if (b === 128 && !m.inspectBytes(m.remaining).includes(128)) {
            d = !1;
            break;
          }
          u.pushByte(b);
        }
      }
    }
    const f = u.bytes.slice(0, u.position);
    return a === "hex" ? (0, n.bytesToHex)(f) : f;
  }
  return du;
}
var fu = {}, fh;
function K0() {
  if (fh) return fu;
  fh = 1, Object.defineProperty(fu, "__esModule", { value: !0 }), fu.defineKzg = e;
  function e({ blobToKzgCommitment: t, computeBlobKzgProof: n }) {
    return {
      blobToKzgCommitment: t,
      computeBlobKzgProof: n
    };
  }
  return fu;
}
var lu = {}, lh;
function dv() {
  if (lh) return lu;
  lh = 1, Object.defineProperty(lu, "__esModule", { value: !0 }), lu.setupKzg = t;
  const e = K0();
  function t(n, r) {
    try {
      n.loadTrustedSetup(r);
    } catch (o) {
      const a = o;
      if (!a.message.includes("trusted setup is already loaded"))
        throw a;
    }
    return (0, e.defineKzg)(n);
  }
  return lu;
}
var mh;
function fv() {
  return mh || (mh = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.maxInt40 = e.maxInt32 = e.maxInt24 = e.maxInt16 = e.maxInt8 = e.weiUnits = e.gweiUnits = e.etherUnits = e.universalSignatureValidatorByteCode = e.deploylessCallViaFactoryBytecode = e.deploylessCallViaBytecodeBytecode = e.zeroAddress = e.universalSignatureValidatorAbi = e.erc4626Abi = e.erc721Abi = e.erc20Abi_bytes32 = e.erc20Abi = e.multicall3Abi = e.webSocket = e.createWalletClient = e.createTransport = e.walletActions = e.testActions = e.publicActions = e.createTestClient = e.createPublicClient = e.http = e.fallback = e.custom = e.rpcSchema = e.createClient = e.getContract = e.parseAbiParameters = e.parseAbiParameter = e.parseAbiItem = e.parseAbi = e.UnknownSignatureError = e.UnknownTypeError = e.SolidityProtectedKeywordError = e.InvalidStructSignatureError = e.InvalidSignatureError = e.InvalidParenthesisError = e.InvalidParameterError = e.InvalidModifierError = e.InvalidFunctionModifierError = e.InvalidAbiTypeParameterError = e.InvalidAbiItemError = e.InvalidAbiParametersError = e.InvalidAbiParameterError = e.CircularReferenceError = void 0, e.maxUint184 = e.maxUint176 = e.maxUint168 = e.maxUint160 = e.maxUint152 = e.maxUint144 = e.maxUint136 = e.maxUint128 = e.maxUint120 = e.maxUint112 = e.maxUint104 = e.maxUint96 = e.maxUint88 = e.maxUint80 = e.maxUint72 = e.maxUint64 = e.maxUint56 = e.maxUint48 = e.maxUint40 = e.maxUint32 = e.maxUint24 = e.maxUint16 = e.maxUint8 = e.maxInt256 = e.maxInt248 = e.maxInt240 = e.maxInt232 = e.maxInt224 = e.maxInt216 = e.maxInt208 = e.maxInt200 = e.maxInt192 = e.maxInt184 = e.maxInt176 = e.maxInt168 = e.maxInt160 = e.maxInt152 = e.maxInt144 = e.maxInt136 = e.maxInt128 = e.maxInt120 = e.maxInt112 = e.maxInt104 = e.maxInt96 = e.maxInt88 = e.maxInt80 = e.maxInt72 = e.maxInt64 = e.maxInt56 = e.maxInt48 = void 0, e.AbiEncodingLengthMismatchError = e.AbiEncodingArrayLengthMismatchError = e.AbiDecodingZeroDataError = e.AbiDecodingDataSizeTooSmallError = e.AbiDecodingDataSizeInvalidError = e.AbiConstructorParamsNotFoundError = e.AbiConstructorNotFoundError = e.presignMessagePrefix = e.zeroHash = e.minInt256 = e.minInt248 = e.minInt240 = e.minInt232 = e.minInt224 = e.minInt216 = e.minInt208 = e.minInt200 = e.minInt192 = e.minInt184 = e.minInt176 = e.minInt168 = e.minInt160 = e.minInt152 = e.minInt144 = e.minInt136 = e.minInt128 = e.minInt120 = e.minInt112 = e.minInt104 = e.minInt96 = e.minInt88 = e.minInt80 = e.minInt72 = e.minInt64 = e.minInt56 = e.minInt48 = e.minInt40 = e.minInt32 = e.minInt24 = e.minInt16 = e.minInt8 = e.maxUint256 = e.maxUint248 = e.maxUint240 = e.maxUint232 = e.maxUint224 = e.maxUint216 = e.maxUint208 = e.maxUint200 = e.maxUint192 = void 0, e.UnsupportedProviderMethodError = e.UnknownRpcError = e.UnauthorizedProviderError = e.TransactionRejectedRpcError = e.SwitchChainError = e.RpcError = e.ResourceUnavailableRpcError = e.ResourceNotFoundRpcError = e.ProviderRpcError = e.ProviderDisconnectedError = e.ParseRpcError = e.MethodNotSupportedRpcError = e.MethodNotFoundRpcError = e.LimitExceededRpcError = e.JsonRpcVersionUnsupportedError = e.InvalidRequestRpcError = e.InvalidParamsRpcError = e.InvalidInputRpcError = e.InternalRpcError = e.ChainDisconnectedError = e.MaxFeePerGasTooLowError = e.Eip1559FeesNotSupportedError = e.BaseFeeScalarError = e.CounterfactualDeploymentFailedError = e.RawContractError = e.ContractFunctionZeroDataError = e.ContractFunctionRevertedError = e.ContractFunctionExecutionError = e.CallExecutionError = e.BlockNotFoundError = e.setErrorConfig = e.BaseError = e.UnsupportedPackedAbiType = e.InvalidDefinitionTypeError = e.InvalidArrayError = e.InvalidAbiEncodingTypeError = e.InvalidAbiDecodingTypeError = e.DecodeLogTopicsMismatch = e.DecodeLogDataMismatch = e.BytesSizeMismatchError = e.AbiFunctionSignatureNotFoundError = e.AbiFunctionOutputsNotFoundError = e.AbiFunctionNotFoundError = e.AbiEventSignatureNotFoundError = e.AbiEventSignatureEmptyTopicsError = e.AbiEventNotFoundError = e.AbiErrorSignatureNotFoundError = e.AbiErrorNotFoundError = e.AbiErrorInputsNotFoundError = e.AbiEncodingBytesSizeMismatchError = void 0, e.StateAssignmentConflictError = e.AccountStateConflictError = e.UrlRequiredError = e.SliceOffsetOutOfBoundsError = e.SizeExceedsPaddingSizeError = e.WaitForTransactionReceiptTimeoutError = e.TransactionReceiptNotFoundError = e.TransactionNotFoundError = e.TransactionExecutionError = e.InvalidStorageKeySizeError = e.InvalidSerializedTransactionTypeError = e.InvalidSerializedTransactionError = e.InvalidSerializableTransactionError = e.InvalidLegacyVError = e.FeeConflictError = e.InvalidAddressError = e.WebSocketRequestError = e.SocketClosedError = e.TimeoutError = e.RpcRequestError = e.HttpRequestError = e.FilterTypeNotSupportedError = e.UnknownNodeError = e.TransactionTypeNotSupportedError = e.TipAboveFeeCapError = e.NonceTooLowError = e.NonceTooHighError = e.NonceMaxValueError = e.IntrinsicGasTooLowError = e.IntrinsicGasTooHighError = e.InsufficientFundsError = e.FeeCapTooLowError = e.FeeCapTooHighError = e.ExecutionRevertedError = e.EstimateGasExecutionError = e.InvalidDecimalNumberError = e.EnsAvatarUnsupportedNamespaceError = e.EnsAvatarInvalidNftUriError = e.EnsAvatarUriResolutionError = e.SizeOverflowError = e.InvalidHexValueError = e.InvalidHexBooleanError = e.IntegerOutOfRangeError = e.InvalidBytesBooleanError = e.InvalidChainIdError = e.ClientChainNotConfiguredError = e.ChainNotFoundError = e.ChainMismatchError = e.ChainDoesNotSupportContract = e.UserRejectedRequestError = void 0, e.recoverTypedDataAddress = e.recoverTransactionAddress = e.recoverPublicKey = e.recoverMessageAddress = e.recoverAddress = e.parseSignature = e.hexToSignature = e.parseCompactSignature = e.hexToCompactSignature = e.compactSignatureToSignature = e.hashTypedData = e.hashStruct = e.hashDomain = e.getTransactionType = e.getSerializedTransactionType = e.getCreateAddress = e.getCreate2Address = e.getContractAddress = e.getAbiItem = e.rpcTransactionType = e.formatTransactionRequest = e.defineTransactionRequest = e.formatTransactionReceipt = e.defineTransactionReceipt = e.transactionType = e.formatTransaction = e.defineTransaction = e.parseEventLogs = e.encodeFunctionResult = e.prepareEncodeFunctionData = e.encodeFunctionData = e.encodeEventTopics = e.encodeErrorResult = e.encodeDeployData = e.encodeAbiParameters = e.decodeFunctionResult = e.decodeFunctionData = e.decodeEventLog = e.decodeErrorResult = e.decodeDeployData = e.decodeAbiParameters = e.formatLog = e.formatBlock = e.defineBlock = e.namehash = e.labelhash = e.EIP1193ProviderRpcError = e.InvalidStructTypeError = e.InvalidPrimaryTypeError = e.InvalidDomainError = void 0, e.concatBytes = e.concat = e.setupKzg = e.defineKzg = e.toBlobs = e.toBlobSidecars = e.fromBlobs = e.blobsToProofs = e.sidecarsToVersionedHashes = e.commitmentsToVersionedHashes = e.commitmentToVersionedHash = e.blobsToCommitments = e.offchainLookupSignature = e.offchainLookupAbiItem = e.offchainLookup = e.ccipFetch = e.ccipRequest = e.fromBytes = e.bytesToString = e.bytesToNumber = e.bytesToBool = e.bytesToBigInt = e.toHex = e.stringToHex = e.numberToHex = e.bytesToHex = e.boolToHex = e.toBytes = e.stringToBytes = e.numberToBytes = e.hexToBytes = e.boolToBytes = e.assertTransactionLegacy = e.assertTransactionEIP2930 = e.assertTransactionEIP1559 = e.assertRequest = e.serializeErc6492Signature = e.isErc6492Signature = e.parseErc6492Signature = e.verifyTypedData = e.verifyMessage = e.verifyHash = e.toRlp = e.hexToRlp = e.bytesToRlp = e.serializeSignature = e.signatureToHex = e.serializeCompactSignature = e.compactSignatureToHex = e.signatureToCompactSignature = void 0, e.size = e.serializeTransaction = e.serializeAccessList = e.parseUnits = e.parseTransaction = e.parseGwei = e.parseEther = e.padHex = e.padBytes = e.pad = e.ripemd160 = e.sha256 = e.keccak256 = e.isHex = e.isHash = e.isBytes = e.isAddressEqual = e.isAddress = e.toPrefixedMessage = e.hashMessage = e.toFunctionHash = e.toEventHash = e.getFunctionSignature = e.toFunctionSignature = e.getEventSignature = e.toEventSignature = e.getFunctionSelector = e.toFunctionSelector = e.getEventSelector = e.toEventSelector = e.getContractError = e.getAddress = e.checksumAddress = e.fromRlp = e.hexToString = e.hexToNumber = e.hexToBool = e.hexToBigInt = e.fromHex = e.formatUnits = e.formatGwei = e.formatEther = e.withTimeout = e.withRetry = e.encodePacked = e.getChainContractAddress = e.extractChain = e.defineChain = e.assertCurrentChain = e.concatHex = void 0, e.nonceManager = e.createNonceManager = e.getTypesForEIP712Domain = e.domainSeparator = e.validateTypedData = e.serializeTypedData = e.trim = e.stringify = e.sliceHex = e.sliceBytes = e.slice = void 0;
    var t = /* @__PURE__ */ hu();
    Object.defineProperty(e, "CircularReferenceError", { enumerable: !0, get: function() {
      return t.CircularReferenceError;
    } }), Object.defineProperty(e, "InvalidAbiParameterError", { enumerable: !0, get: function() {
      return t.InvalidAbiParameterError;
    } }), Object.defineProperty(e, "InvalidAbiParametersError", { enumerable: !0, get: function() {
      return t.InvalidAbiParametersError;
    } }), Object.defineProperty(e, "InvalidAbiItemError", { enumerable: !0, get: function() {
      return t.InvalidAbiItemError;
    } }), Object.defineProperty(e, "InvalidAbiTypeParameterError", { enumerable: !0, get: function() {
      return t.InvalidAbiTypeParameterError;
    } }), Object.defineProperty(e, "InvalidFunctionModifierError", { enumerable: !0, get: function() {
      return t.InvalidFunctionModifierError;
    } }), Object.defineProperty(e, "InvalidModifierError", { enumerable: !0, get: function() {
      return t.InvalidModifierError;
    } }), Object.defineProperty(e, "InvalidParameterError", { enumerable: !0, get: function() {
      return t.InvalidParameterError;
    } }), Object.defineProperty(e, "InvalidParenthesisError", { enumerable: !0, get: function() {
      return t.InvalidParenthesisError;
    } }), Object.defineProperty(e, "InvalidSignatureError", { enumerable: !0, get: function() {
      return t.InvalidSignatureError;
    } }), Object.defineProperty(e, "InvalidStructSignatureError", { enumerable: !0, get: function() {
      return t.InvalidStructSignatureError;
    } }), Object.defineProperty(e, "SolidityProtectedKeywordError", { enumerable: !0, get: function() {
      return t.SolidityProtectedKeywordError;
    } }), Object.defineProperty(e, "UnknownTypeError", { enumerable: !0, get: function() {
      return t.UnknownTypeError;
    } }), Object.defineProperty(e, "UnknownSignatureError", { enumerable: !0, get: function() {
      return t.UnknownSignatureError;
    } }), Object.defineProperty(e, "parseAbi", { enumerable: !0, get: function() {
      return t.parseAbi;
    } }), Object.defineProperty(e, "parseAbiItem", { enumerable: !0, get: function() {
      return t.parseAbiItem;
    } }), Object.defineProperty(e, "parseAbiParameter", { enumerable: !0, get: function() {
      return t.parseAbiParameter;
    } }), Object.defineProperty(e, "parseAbiParameters", { enumerable: !0, get: function() {
      return t.parseAbiParameters;
    } });
    var n = p1();
    Object.defineProperty(e, "getContract", { enumerable: !0, get: function() {
      return n.getContract;
    } });
    var r = xu();
    Object.defineProperty(e, "createClient", { enumerable: !0, get: function() {
      return r.createClient;
    } }), Object.defineProperty(e, "rpcSchema", { enumerable: !0, get: function() {
      return r.rpcSchema;
    } });
    var o = v1();
    Object.defineProperty(e, "custom", { enumerable: !0, get: function() {
      return o.custom;
    } });
    var a = E1();
    Object.defineProperty(e, "fallback", { enumerable: !0, get: function() {
      return a.fallback;
    } });
    var i = j1();
    Object.defineProperty(e, "http", { enumerable: !0, get: function() {
      return i.http;
    } });
    var s = u_();
    Object.defineProperty(e, "createPublicClient", { enumerable: !0, get: function() {
      return s.createPublicClient;
    } });
    var u = $_();
    Object.defineProperty(e, "createTestClient", { enumerable: !0, get: function() {
      return u.createTestClient;
    } });
    var d = G0();
    Object.defineProperty(e, "publicActions", { enumerable: !0, get: function() {
      return d.publicActions;
    } });
    var f = V0();
    Object.defineProperty(e, "testActions", { enumerable: !0, get: function() {
      return f.testActions;
    } });
    var c = W0();
    Object.defineProperty(e, "walletActions", { enumerable: !0, get: function() {
      return c.walletActions;
    } });
    var m = oo();
    Object.defineProperty(e, "createTransport", { enumerable: !0, get: function() {
      return m.createTransport;
    } });
    var y = Y_();
    Object.defineProperty(e, "createWalletClient", { enumerable: !0, get: function() {
      return y.createWalletClient;
    } });
    var g = X_();
    Object.defineProperty(e, "webSocket", { enumerable: !0, get: function() {
      return g.webSocket;
    } });
    var b = mr();
    Object.defineProperty(e, "multicall3Abi", { enumerable: !0, get: function() {
      return b.multicall3Abi;
    } }), Object.defineProperty(e, "erc20Abi", { enumerable: !0, get: function() {
      return b.erc20Abi;
    } }), Object.defineProperty(e, "erc20Abi_bytes32", { enumerable: !0, get: function() {
      return b.erc20Abi_bytes32;
    } }), Object.defineProperty(e, "erc721Abi", { enumerable: !0, get: function() {
      return b.erc721Abi;
    } }), Object.defineProperty(e, "erc4626Abi", { enumerable: !0, get: function() {
      return b.erc4626Abi;
    } }), Object.defineProperty(e, "universalSignatureValidatorAbi", { enumerable: !0, get: function() {
      return b.universalSignatureValidatorAbi;
    } });
    var h = Q_();
    Object.defineProperty(e, "zeroAddress", { enumerable: !0, get: function() {
      return h.zeroAddress;
    } });
    var _ = rd();
    Object.defineProperty(e, "deploylessCallViaBytecodeBytecode", { enumerable: !0, get: function() {
      return _.deploylessCallViaBytecodeBytecode;
    } }), Object.defineProperty(e, "deploylessCallViaFactoryBytecode", { enumerable: !0, get: function() {
      return _.deploylessCallViaFactoryBytecode;
    } }), Object.defineProperty(e, "universalSignatureValidatorByteCode", { enumerable: !0, get: function() {
      return _.universalSignatureValidatorByteCode;
    } });
    var P = Dn();
    Object.defineProperty(e, "etherUnits", { enumerable: !0, get: function() {
      return P.etherUnits;
    } }), Object.defineProperty(e, "gweiUnits", { enumerable: !0, get: function() {
      return P.gweiUnits;
    } }), Object.defineProperty(e, "weiUnits", { enumerable: !0, get: function() {
      return P.weiUnits;
    } });
    var j = Vc();
    Object.defineProperty(e, "maxInt8", { enumerable: !0, get: function() {
      return j.maxInt8;
    } }), Object.defineProperty(e, "maxInt16", { enumerable: !0, get: function() {
      return j.maxInt16;
    } }), Object.defineProperty(e, "maxInt24", { enumerable: !0, get: function() {
      return j.maxInt24;
    } }), Object.defineProperty(e, "maxInt32", { enumerable: !0, get: function() {
      return j.maxInt32;
    } }), Object.defineProperty(e, "maxInt40", { enumerable: !0, get: function() {
      return j.maxInt40;
    } }), Object.defineProperty(e, "maxInt48", { enumerable: !0, get: function() {
      return j.maxInt48;
    } }), Object.defineProperty(e, "maxInt56", { enumerable: !0, get: function() {
      return j.maxInt56;
    } }), Object.defineProperty(e, "maxInt64", { enumerable: !0, get: function() {
      return j.maxInt64;
    } }), Object.defineProperty(e, "maxInt72", { enumerable: !0, get: function() {
      return j.maxInt72;
    } }), Object.defineProperty(e, "maxInt80", { enumerable: !0, get: function() {
      return j.maxInt80;
    } }), Object.defineProperty(e, "maxInt88", { enumerable: !0, get: function() {
      return j.maxInt88;
    } }), Object.defineProperty(e, "maxInt96", { enumerable: !0, get: function() {
      return j.maxInt96;
    } }), Object.defineProperty(e, "maxInt104", { enumerable: !0, get: function() {
      return j.maxInt104;
    } }), Object.defineProperty(e, "maxInt112", { enumerable: !0, get: function() {
      return j.maxInt112;
    } }), Object.defineProperty(e, "maxInt120", { enumerable: !0, get: function() {
      return j.maxInt120;
    } }), Object.defineProperty(e, "maxInt128", { enumerable: !0, get: function() {
      return j.maxInt128;
    } }), Object.defineProperty(e, "maxInt136", { enumerable: !0, get: function() {
      return j.maxInt136;
    } }), Object.defineProperty(e, "maxInt144", { enumerable: !0, get: function() {
      return j.maxInt144;
    } }), Object.defineProperty(e, "maxInt152", { enumerable: !0, get: function() {
      return j.maxInt152;
    } }), Object.defineProperty(e, "maxInt160", { enumerable: !0, get: function() {
      return j.maxInt160;
    } }), Object.defineProperty(e, "maxInt168", { enumerable: !0, get: function() {
      return j.maxInt168;
    } }), Object.defineProperty(e, "maxInt176", { enumerable: !0, get: function() {
      return j.maxInt176;
    } }), Object.defineProperty(e, "maxInt184", { enumerable: !0, get: function() {
      return j.maxInt184;
    } }), Object.defineProperty(e, "maxInt192", { enumerable: !0, get: function() {
      return j.maxInt192;
    } }), Object.defineProperty(e, "maxInt200", { enumerable: !0, get: function() {
      return j.maxInt200;
    } }), Object.defineProperty(e, "maxInt208", { enumerable: !0, get: function() {
      return j.maxInt208;
    } }), Object.defineProperty(e, "maxInt216", { enumerable: !0, get: function() {
      return j.maxInt216;
    } }), Object.defineProperty(e, "maxInt224", { enumerable: !0, get: function() {
      return j.maxInt224;
    } }), Object.defineProperty(e, "maxInt232", { enumerable: !0, get: function() {
      return j.maxInt232;
    } }), Object.defineProperty(e, "maxInt240", { enumerable: !0, get: function() {
      return j.maxInt240;
    } }), Object.defineProperty(e, "maxInt248", { enumerable: !0, get: function() {
      return j.maxInt248;
    } }), Object.defineProperty(e, "maxInt256", { enumerable: !0, get: function() {
      return j.maxInt256;
    } }), Object.defineProperty(e, "maxUint8", { enumerable: !0, get: function() {
      return j.maxUint8;
    } }), Object.defineProperty(e, "maxUint16", { enumerable: !0, get: function() {
      return j.maxUint16;
    } }), Object.defineProperty(e, "maxUint24", { enumerable: !0, get: function() {
      return j.maxUint24;
    } }), Object.defineProperty(e, "maxUint32", { enumerable: !0, get: function() {
      return j.maxUint32;
    } }), Object.defineProperty(e, "maxUint40", { enumerable: !0, get: function() {
      return j.maxUint40;
    } }), Object.defineProperty(e, "maxUint48", { enumerable: !0, get: function() {
      return j.maxUint48;
    } }), Object.defineProperty(e, "maxUint56", { enumerable: !0, get: function() {
      return j.maxUint56;
    } }), Object.defineProperty(e, "maxUint64", { enumerable: !0, get: function() {
      return j.maxUint64;
    } }), Object.defineProperty(e, "maxUint72", { enumerable: !0, get: function() {
      return j.maxUint72;
    } }), Object.defineProperty(e, "maxUint80", { enumerable: !0, get: function() {
      return j.maxUint80;
    } }), Object.defineProperty(e, "maxUint88", { enumerable: !0, get: function() {
      return j.maxUint88;
    } }), Object.defineProperty(e, "maxUint96", { enumerable: !0, get: function() {
      return j.maxUint96;
    } }), Object.defineProperty(e, "maxUint104", { enumerable: !0, get: function() {
      return j.maxUint104;
    } }), Object.defineProperty(e, "maxUint112", { enumerable: !0, get: function() {
      return j.maxUint112;
    } }), Object.defineProperty(e, "maxUint120", { enumerable: !0, get: function() {
      return j.maxUint120;
    } }), Object.defineProperty(e, "maxUint128", { enumerable: !0, get: function() {
      return j.maxUint128;
    } }), Object.defineProperty(e, "maxUint136", { enumerable: !0, get: function() {
      return j.maxUint136;
    } }), Object.defineProperty(e, "maxUint144", { enumerable: !0, get: function() {
      return j.maxUint144;
    } }), Object.defineProperty(e, "maxUint152", { enumerable: !0, get: function() {
      return j.maxUint152;
    } }), Object.defineProperty(e, "maxUint160", { enumerable: !0, get: function() {
      return j.maxUint160;
    } }), Object.defineProperty(e, "maxUint168", { enumerable: !0, get: function() {
      return j.maxUint168;
    } }), Object.defineProperty(e, "maxUint176", { enumerable: !0, get: function() {
      return j.maxUint176;
    } }), Object.defineProperty(e, "maxUint184", { enumerable: !0, get: function() {
      return j.maxUint184;
    } }), Object.defineProperty(e, "maxUint192", { enumerable: !0, get: function() {
      return j.maxUint192;
    } }), Object.defineProperty(e, "maxUint200", { enumerable: !0, get: function() {
      return j.maxUint200;
    } }), Object.defineProperty(e, "maxUint208", { enumerable: !0, get: function() {
      return j.maxUint208;
    } }), Object.defineProperty(e, "maxUint216", { enumerable: !0, get: function() {
      return j.maxUint216;
    } }), Object.defineProperty(e, "maxUint224", { enumerable: !0, get: function() {
      return j.maxUint224;
    } }), Object.defineProperty(e, "maxUint232", { enumerable: !0, get: function() {
      return j.maxUint232;
    } }), Object.defineProperty(e, "maxUint240", { enumerable: !0, get: function() {
      return j.maxUint240;
    } }), Object.defineProperty(e, "maxUint248", { enumerable: !0, get: function() {
      return j.maxUint248;
    } }), Object.defineProperty(e, "maxUint256", { enumerable: !0, get: function() {
      return j.maxUint256;
    } }), Object.defineProperty(e, "minInt8", { enumerable: !0, get: function() {
      return j.minInt8;
    } }), Object.defineProperty(e, "minInt16", { enumerable: !0, get: function() {
      return j.minInt16;
    } }), Object.defineProperty(e, "minInt24", { enumerable: !0, get: function() {
      return j.minInt24;
    } }), Object.defineProperty(e, "minInt32", { enumerable: !0, get: function() {
      return j.minInt32;
    } }), Object.defineProperty(e, "minInt40", { enumerable: !0, get: function() {
      return j.minInt40;
    } }), Object.defineProperty(e, "minInt48", { enumerable: !0, get: function() {
      return j.minInt48;
    } }), Object.defineProperty(e, "minInt56", { enumerable: !0, get: function() {
      return j.minInt56;
    } }), Object.defineProperty(e, "minInt64", { enumerable: !0, get: function() {
      return j.minInt64;
    } }), Object.defineProperty(e, "minInt72", { enumerable: !0, get: function() {
      return j.minInt72;
    } }), Object.defineProperty(e, "minInt80", { enumerable: !0, get: function() {
      return j.minInt80;
    } }), Object.defineProperty(e, "minInt88", { enumerable: !0, get: function() {
      return j.minInt88;
    } }), Object.defineProperty(e, "minInt96", { enumerable: !0, get: function() {
      return j.minInt96;
    } }), Object.defineProperty(e, "minInt104", { enumerable: !0, get: function() {
      return j.minInt104;
    } }), Object.defineProperty(e, "minInt112", { enumerable: !0, get: function() {
      return j.minInt112;
    } }), Object.defineProperty(e, "minInt120", { enumerable: !0, get: function() {
      return j.minInt120;
    } }), Object.defineProperty(e, "minInt128", { enumerable: !0, get: function() {
      return j.minInt128;
    } }), Object.defineProperty(e, "minInt136", { enumerable: !0, get: function() {
      return j.minInt136;
    } }), Object.defineProperty(e, "minInt144", { enumerable: !0, get: function() {
      return j.minInt144;
    } }), Object.defineProperty(e, "minInt152", { enumerable: !0, get: function() {
      return j.minInt152;
    } }), Object.defineProperty(e, "minInt160", { enumerable: !0, get: function() {
      return j.minInt160;
    } }), Object.defineProperty(e, "minInt168", { enumerable: !0, get: function() {
      return j.minInt168;
    } }), Object.defineProperty(e, "minInt176", { enumerable: !0, get: function() {
      return j.minInt176;
    } }), Object.defineProperty(e, "minInt184", { enumerable: !0, get: function() {
      return j.minInt184;
    } }), Object.defineProperty(e, "minInt192", { enumerable: !0, get: function() {
      return j.minInt192;
    } }), Object.defineProperty(e, "minInt200", { enumerable: !0, get: function() {
      return j.minInt200;
    } }), Object.defineProperty(e, "minInt208", { enumerable: !0, get: function() {
      return j.minInt208;
    } }), Object.defineProperty(e, "minInt216", { enumerable: !0, get: function() {
      return j.minInt216;
    } }), Object.defineProperty(e, "minInt224", { enumerable: !0, get: function() {
      return j.minInt224;
    } }), Object.defineProperty(e, "minInt232", { enumerable: !0, get: function() {
      return j.minInt232;
    } }), Object.defineProperty(e, "minInt240", { enumerable: !0, get: function() {
      return j.minInt240;
    } }), Object.defineProperty(e, "minInt248", { enumerable: !0, get: function() {
      return j.minInt248;
    } }), Object.defineProperty(e, "minInt256", { enumerable: !0, get: function() {
      return j.minInt256;
    } });
    var v = jd();
    Object.defineProperty(e, "zeroHash", { enumerable: !0, get: function() {
      return v.zeroHash;
    } });
    var E = A0();
    Object.defineProperty(e, "presignMessagePrefix", { enumerable: !0, get: function() {
      return E.presignMessagePrefix;
    } });
    var l = pe();
    Object.defineProperty(e, "AbiConstructorNotFoundError", { enumerable: !0, get: function() {
      return l.AbiConstructorNotFoundError;
    } }), Object.defineProperty(e, "AbiConstructorParamsNotFoundError", { enumerable: !0, get: function() {
      return l.AbiConstructorParamsNotFoundError;
    } }), Object.defineProperty(e, "AbiDecodingDataSizeInvalidError", { enumerable: !0, get: function() {
      return l.AbiDecodingDataSizeInvalidError;
    } }), Object.defineProperty(e, "AbiDecodingDataSizeTooSmallError", { enumerable: !0, get: function() {
      return l.AbiDecodingDataSizeTooSmallError;
    } }), Object.defineProperty(e, "AbiDecodingZeroDataError", { enumerable: !0, get: function() {
      return l.AbiDecodingZeroDataError;
    } }), Object.defineProperty(e, "AbiEncodingArrayLengthMismatchError", { enumerable: !0, get: function() {
      return l.AbiEncodingArrayLengthMismatchError;
    } }), Object.defineProperty(e, "AbiEncodingLengthMismatchError", { enumerable: !0, get: function() {
      return l.AbiEncodingLengthMismatchError;
    } }), Object.defineProperty(e, "AbiEncodingBytesSizeMismatchError", { enumerable: !0, get: function() {
      return l.AbiEncodingBytesSizeMismatchError;
    } }), Object.defineProperty(e, "AbiErrorInputsNotFoundError", { enumerable: !0, get: function() {
      return l.AbiErrorInputsNotFoundError;
    } }), Object.defineProperty(e, "AbiErrorNotFoundError", { enumerable: !0, get: function() {
      return l.AbiErrorNotFoundError;
    } }), Object.defineProperty(e, "AbiErrorSignatureNotFoundError", { enumerable: !0, get: function() {
      return l.AbiErrorSignatureNotFoundError;
    } }), Object.defineProperty(e, "AbiEventNotFoundError", { enumerable: !0, get: function() {
      return l.AbiEventNotFoundError;
    } }), Object.defineProperty(e, "AbiEventSignatureEmptyTopicsError", { enumerable: !0, get: function() {
      return l.AbiEventSignatureEmptyTopicsError;
    } }), Object.defineProperty(e, "AbiEventSignatureNotFoundError", { enumerable: !0, get: function() {
      return l.AbiEventSignatureNotFoundError;
    } }), Object.defineProperty(e, "AbiFunctionNotFoundError", { enumerable: !0, get: function() {
      return l.AbiFunctionNotFoundError;
    } }), Object.defineProperty(e, "AbiFunctionOutputsNotFoundError", { enumerable: !0, get: function() {
      return l.AbiFunctionOutputsNotFoundError;
    } }), Object.defineProperty(e, "AbiFunctionSignatureNotFoundError", { enumerable: !0, get: function() {
      return l.AbiFunctionSignatureNotFoundError;
    } }), Object.defineProperty(e, "BytesSizeMismatchError", { enumerable: !0, get: function() {
      return l.BytesSizeMismatchError;
    } }), Object.defineProperty(e, "DecodeLogDataMismatch", { enumerable: !0, get: function() {
      return l.DecodeLogDataMismatch;
    } }), Object.defineProperty(e, "DecodeLogTopicsMismatch", { enumerable: !0, get: function() {
      return l.DecodeLogTopicsMismatch;
    } }), Object.defineProperty(e, "InvalidAbiDecodingTypeError", { enumerable: !0, get: function() {
      return l.InvalidAbiDecodingTypeError;
    } }), Object.defineProperty(e, "InvalidAbiEncodingTypeError", { enumerable: !0, get: function() {
      return l.InvalidAbiEncodingTypeError;
    } }), Object.defineProperty(e, "InvalidArrayError", { enumerable: !0, get: function() {
      return l.InvalidArrayError;
    } }), Object.defineProperty(e, "InvalidDefinitionTypeError", { enumerable: !0, get: function() {
      return l.InvalidDefinitionTypeError;
    } }), Object.defineProperty(e, "UnsupportedPackedAbiType", { enumerable: !0, get: function() {
      return l.UnsupportedPackedAbiType;
    } });
    var p = ie();
    Object.defineProperty(e, "BaseError", { enumerable: !0, get: function() {
      return p.BaseError;
    } }), Object.defineProperty(e, "setErrorConfig", { enumerable: !0, get: function() {
      return p.setErrorConfig;
    } });
    var T = Wc();
    Object.defineProperty(e, "BlockNotFoundError", { enumerable: !0, get: function() {
      return T.BlockNotFoundError;
    } });
    var w = Nt();
    Object.defineProperty(e, "CallExecutionError", { enumerable: !0, get: function() {
      return w.CallExecutionError;
    } }), Object.defineProperty(e, "ContractFunctionExecutionError", { enumerable: !0, get: function() {
      return w.ContractFunctionExecutionError;
    } }), Object.defineProperty(e, "ContractFunctionRevertedError", { enumerable: !0, get: function() {
      return w.ContractFunctionRevertedError;
    } }), Object.defineProperty(e, "ContractFunctionZeroDataError", { enumerable: !0, get: function() {
      return w.ContractFunctionZeroDataError;
    } }), Object.defineProperty(e, "RawContractError", { enumerable: !0, get: function() {
      return w.RawContractError;
    } }), Object.defineProperty(e, "CounterfactualDeploymentFailedError", { enumerable: !0, get: function() {
      return w.CounterfactualDeploymentFailedError;
    } });
    var I = Tu();
    Object.defineProperty(e, "BaseFeeScalarError", { enumerable: !0, get: function() {
      return I.BaseFeeScalarError;
    } }), Object.defineProperty(e, "Eip1559FeesNotSupportedError", { enumerable: !0, get: function() {
      return I.Eip1559FeesNotSupportedError;
    } }), Object.defineProperty(e, "MaxFeePerGasTooLowError", { enumerable: !0, get: function() {
      return I.MaxFeePerGasTooLowError;
    } });
    var C = lr();
    Object.defineProperty(e, "ChainDisconnectedError", { enumerable: !0, get: function() {
      return C.ChainDisconnectedError;
    } }), Object.defineProperty(e, "InternalRpcError", { enumerable: !0, get: function() {
      return C.InternalRpcError;
    } }), Object.defineProperty(e, "InvalidInputRpcError", { enumerable: !0, get: function() {
      return C.InvalidInputRpcError;
    } }), Object.defineProperty(e, "InvalidParamsRpcError", { enumerable: !0, get: function() {
      return C.InvalidParamsRpcError;
    } }), Object.defineProperty(e, "InvalidRequestRpcError", { enumerable: !0, get: function() {
      return C.InvalidRequestRpcError;
    } }), Object.defineProperty(e, "JsonRpcVersionUnsupportedError", { enumerable: !0, get: function() {
      return C.JsonRpcVersionUnsupportedError;
    } }), Object.defineProperty(e, "LimitExceededRpcError", { enumerable: !0, get: function() {
      return C.LimitExceededRpcError;
    } }), Object.defineProperty(e, "MethodNotFoundRpcError", { enumerable: !0, get: function() {
      return C.MethodNotFoundRpcError;
    } }), Object.defineProperty(e, "MethodNotSupportedRpcError", { enumerable: !0, get: function() {
      return C.MethodNotSupportedRpcError;
    } }), Object.defineProperty(e, "ParseRpcError", { enumerable: !0, get: function() {
      return C.ParseRpcError;
    } }), Object.defineProperty(e, "ProviderDisconnectedError", { enumerable: !0, get: function() {
      return C.ProviderDisconnectedError;
    } }), Object.defineProperty(e, "ProviderRpcError", { enumerable: !0, get: function() {
      return C.ProviderRpcError;
    } }), Object.defineProperty(e, "ResourceNotFoundRpcError", { enumerable: !0, get: function() {
      return C.ResourceNotFoundRpcError;
    } }), Object.defineProperty(e, "ResourceUnavailableRpcError", { enumerable: !0, get: function() {
      return C.ResourceUnavailableRpcError;
    } }), Object.defineProperty(e, "RpcError", { enumerable: !0, get: function() {
      return C.RpcError;
    } }), Object.defineProperty(e, "SwitchChainError", { enumerable: !0, get: function() {
      return C.SwitchChainError;
    } }), Object.defineProperty(e, "TransactionRejectedRpcError", { enumerable: !0, get: function() {
      return C.TransactionRejectedRpcError;
    } }), Object.defineProperty(e, "UnauthorizedProviderError", { enumerable: !0, get: function() {
      return C.UnauthorizedProviderError;
    } }), Object.defineProperty(e, "UnknownRpcError", { enumerable: !0, get: function() {
      return C.UnknownRpcError;
    } }), Object.defineProperty(e, "UnsupportedProviderMethodError", { enumerable: !0, get: function() {
      return C.UnsupportedProviderMethodError;
    } }), Object.defineProperty(e, "UserRejectedRequestError", { enumerable: !0, get: function() {
      return C.UserRejectedRequestError;
    } });
    var B = Xn();
    Object.defineProperty(e, "ChainDoesNotSupportContract", { enumerable: !0, get: function() {
      return B.ChainDoesNotSupportContract;
    } }), Object.defineProperty(e, "ChainMismatchError", { enumerable: !0, get: function() {
      return B.ChainMismatchError;
    } }), Object.defineProperty(e, "ChainNotFoundError", { enumerable: !0, get: function() {
      return B.ChainNotFoundError;
    } }), Object.defineProperty(e, "ClientChainNotConfiguredError", { enumerable: !0, get: function() {
      return B.ClientChainNotConfiguredError;
    } }), Object.defineProperty(e, "InvalidChainIdError", { enumerable: !0, get: function() {
      return B.InvalidChainIdError;
    } });
    var M = qr();
    Object.defineProperty(e, "InvalidBytesBooleanError", { enumerable: !0, get: function() {
      return M.InvalidBytesBooleanError;
    } }), Object.defineProperty(e, "IntegerOutOfRangeError", { enumerable: !0, get: function() {
      return M.IntegerOutOfRangeError;
    } }), Object.defineProperty(e, "InvalidHexBooleanError", { enumerable: !0, get: function() {
      return M.InvalidHexBooleanError;
    } }), Object.defineProperty(e, "InvalidHexValueError", { enumerable: !0, get: function() {
      return M.InvalidHexValueError;
    } }), Object.defineProperty(e, "SizeOverflowError", { enumerable: !0, get: function() {
      return M.SizeOverflowError;
    } });
    var A = s0();
    Object.defineProperty(e, "EnsAvatarUriResolutionError", { enumerable: !0, get: function() {
      return A.EnsAvatarUriResolutionError;
    } }), Object.defineProperty(e, "EnsAvatarInvalidNftUriError", { enumerable: !0, get: function() {
      return A.EnsAvatarInvalidNftUriError;
    } }), Object.defineProperty(e, "EnsAvatarUnsupportedNamespaceError", { enumerable: !0, get: function() {
      return A.EnsAvatarUnsupportedNamespaceError;
    } });
    var x = C0();
    Object.defineProperty(e, "InvalidDecimalNumberError", { enumerable: !0, get: function() {
      return x.InvalidDecimalNumberError;
    } });
    var H = Dh();
    Object.defineProperty(e, "EstimateGasExecutionError", { enumerable: !0, get: function() {
      return H.EstimateGasExecutionError;
    } });
    var F = Et();
    Object.defineProperty(e, "ExecutionRevertedError", { enumerable: !0, get: function() {
      return F.ExecutionRevertedError;
    } }), Object.defineProperty(e, "FeeCapTooHighError", { enumerable: !0, get: function() {
      return F.FeeCapTooHighError;
    } }), Object.defineProperty(e, "FeeCapTooLowError", { enumerable: !0, get: function() {
      return F.FeeCapTooLowError;
    } }), Object.defineProperty(e, "InsufficientFundsError", { enumerable: !0, get: function() {
      return F.InsufficientFundsError;
    } }), Object.defineProperty(e, "IntrinsicGasTooHighError", { enumerable: !0, get: function() {
      return F.IntrinsicGasTooHighError;
    } }), Object.defineProperty(e, "IntrinsicGasTooLowError", { enumerable: !0, get: function() {
      return F.IntrinsicGasTooLowError;
    } }), Object.defineProperty(e, "NonceMaxValueError", { enumerable: !0, get: function() {
      return F.NonceMaxValueError;
    } }), Object.defineProperty(e, "NonceTooHighError", { enumerable: !0, get: function() {
      return F.NonceTooHighError;
    } }), Object.defineProperty(e, "NonceTooLowError", { enumerable: !0, get: function() {
      return F.NonceTooLowError;
    } }), Object.defineProperty(e, "TipAboveFeeCapError", { enumerable: !0, get: function() {
      return F.TipAboveFeeCapError;
    } }), Object.defineProperty(e, "TransactionTypeNotSupportedError", { enumerable: !0, get: function() {
      return F.TransactionTypeNotSupportedError;
    } }), Object.defineProperty(e, "UnknownNodeError", { enumerable: !0, get: function() {
      return F.UnknownNodeError;
    } });
    var $ = qh();
    Object.defineProperty(e, "FilterTypeNotSupportedError", { enumerable: !0, get: function() {
      return $.FilterTypeNotSupportedError;
    } });
    var q = Qe();
    Object.defineProperty(e, "HttpRequestError", { enumerable: !0, get: function() {
      return q.HttpRequestError;
    } }), Object.defineProperty(e, "RpcRequestError", { enumerable: !0, get: function() {
      return q.RpcRequestError;
    } }), Object.defineProperty(e, "TimeoutError", { enumerable: !0, get: function() {
      return q.TimeoutError;
    } }), Object.defineProperty(e, "SocketClosedError", { enumerable: !0, get: function() {
      return q.SocketClosedError;
    } }), Object.defineProperty(e, "WebSocketRequestError", { enumerable: !0, get: function() {
      return q.WebSocketRequestError;
    } });
    var S = Ze();
    Object.defineProperty(e, "InvalidAddressError", { enumerable: !0, get: function() {
      return S.InvalidAddressError;
    } });
    var R = De();
    Object.defineProperty(e, "FeeConflictError", { enumerable: !0, get: function() {
      return R.FeeConflictError;
    } }), Object.defineProperty(e, "InvalidLegacyVError", { enumerable: !0, get: function() {
      return R.InvalidLegacyVError;
    } }), Object.defineProperty(e, "InvalidSerializableTransactionError", { enumerable: !0, get: function() {
      return R.InvalidSerializableTransactionError;
    } }), Object.defineProperty(e, "InvalidSerializedTransactionError", { enumerable: !0, get: function() {
      return R.InvalidSerializedTransactionError;
    } }), Object.defineProperty(e, "InvalidSerializedTransactionTypeError", { enumerable: !0, get: function() {
      return R.InvalidSerializedTransactionTypeError;
    } }), Object.defineProperty(e, "InvalidStorageKeySizeError", { enumerable: !0, get: function() {
      return R.InvalidStorageKeySizeError;
    } }), Object.defineProperty(e, "TransactionExecutionError", { enumerable: !0, get: function() {
      return R.TransactionExecutionError;
    } }), Object.defineProperty(e, "TransactionNotFoundError", { enumerable: !0, get: function() {
      return R.TransactionNotFoundError;
    } }), Object.defineProperty(e, "TransactionReceiptNotFoundError", { enumerable: !0, get: function() {
      return R.TransactionReceiptNotFoundError;
    } }), Object.defineProperty(e, "WaitForTransactionReceiptTimeoutError", { enumerable: !0, get: function() {
      return R.WaitForTransactionReceiptTimeoutError;
    } });
    var O = pu();
    Object.defineProperty(e, "SizeExceedsPaddingSizeError", { enumerable: !0, get: function() {
      return O.SizeExceedsPaddingSizeError;
    } }), Object.defineProperty(e, "SliceOffsetOutOfBoundsError", { enumerable: !0, get: function() {
      return O.SliceOffsetOutOfBoundsError;
    } });
    var k = dd();
    Object.defineProperty(e, "UrlRequiredError", { enumerable: !0, get: function() {
      return k.UrlRequiredError;
    } });
    var z = Dc();
    Object.defineProperty(e, "AccountStateConflictError", { enumerable: !0, get: function() {
      return z.AccountStateConflictError;
    } }), Object.defineProperty(e, "StateAssignmentConflictError", { enumerable: !0, get: function() {
      return z.StateAssignmentConflictError;
    } });
    var L = g0();
    Object.defineProperty(e, "InvalidDomainError", { enumerable: !0, get: function() {
      return L.InvalidDomainError;
    } }), Object.defineProperty(e, "InvalidPrimaryTypeError", { enumerable: !0, get: function() {
      return L.InvalidPrimaryTypeError;
    } }), Object.defineProperty(e, "InvalidStructTypeError", { enumerable: !0, get: function() {
      return L.InvalidStructTypeError;
    } });
    var U = ev();
    Object.defineProperty(e, "EIP1193ProviderRpcError", { enumerable: !0, get: function() {
      return U.ProviderRpcError;
    } });
    var G = a0();
    Object.defineProperty(e, "labelhash", { enumerable: !0, get: function() {
      return G.labelhash;
    } });
    var V = bd();
    Object.defineProperty(e, "namehash", { enumerable: !0, get: function() {
      return V.namehash;
    } });
    var K = Au();
    Object.defineProperty(e, "defineBlock", { enumerable: !0, get: function() {
      return K.defineBlock;
    } }), Object.defineProperty(e, "formatBlock", { enumerable: !0, get: function() {
      return K.formatBlock;
    } });
    var ee = Tt();
    Object.defineProperty(e, "formatLog", { enumerable: !0, get: function() {
      return ee.formatLog;
    } });
    var X = $t();
    Object.defineProperty(e, "decodeAbiParameters", { enumerable: !0, get: function() {
      return X.decodeAbiParameters;
    } });
    var te = tv();
    Object.defineProperty(e, "decodeDeployData", { enumerable: !0, get: function() {
      return te.decodeDeployData;
    } });
    var se = ju();
    Object.defineProperty(e, "decodeErrorResult", { enumerable: !0, get: function() {
      return se.decodeErrorResult;
    } });
    var Z = Jn();
    Object.defineProperty(e, "decodeEventLog", { enumerable: !0, get: function() {
      return Z.decodeEventLog;
    } });
    var J = y0();
    Object.defineProperty(e, "decodeFunctionData", { enumerable: !0, get: function() {
      return J.decodeFunctionData;
    } });
    var W = At();
    Object.defineProperty(e, "decodeFunctionResult", { enumerable: !0, get: function() {
      return W.decodeFunctionResult;
    } });
    var D = Ye();
    Object.defineProperty(e, "encodeAbiParameters", { enumerable: !0, get: function() {
      return D.encodeAbiParameters;
    } });
    var ne = Qn();
    Object.defineProperty(e, "encodeDeployData", { enumerable: !0, get: function() {
      return ne.encodeDeployData;
    } });
    var de = h0();
    Object.defineProperty(e, "encodeErrorResult", { enumerable: !0, get: function() {
      return de.encodeErrorResult;
    } });
    var me = dr();
    Object.defineProperty(e, "encodeEventTopics", { enumerable: !0, get: function() {
      return me.encodeEventTopics;
    } });
    var ce = Xe();
    Object.defineProperty(e, "encodeFunctionData", { enumerable: !0, get: function() {
      return ce.encodeFunctionData;
    } });
    var Ee = Mh();
    Object.defineProperty(e, "prepareEncodeFunctionData", { enumerable: !0, get: function() {
      return Ee.prepareEncodeFunctionData;
    } });
    var ve = p0();
    Object.defineProperty(e, "encodeFunctionResult", { enumerable: !0, get: function() {
      return ve.encodeFunctionResult;
    } });
    var je = Yn();
    Object.defineProperty(e, "parseEventLogs", { enumerable: !0, get: function() {
      return je.parseEventLogs;
    } });
    var we = Kn();
    Object.defineProperty(e, "defineTransaction", { enumerable: !0, get: function() {
      return we.defineTransaction;
    } }), Object.defineProperty(e, "formatTransaction", { enumerable: !0, get: function() {
      return we.formatTransaction;
    } }), Object.defineProperty(e, "transactionType", { enumerable: !0, get: function() {
      return we.transactionType;
    } });
    var Ae = hd();
    Object.defineProperty(e, "defineTransactionReceipt", { enumerable: !0, get: function() {
      return Ae.defineTransactionReceipt;
    } }), Object.defineProperty(e, "formatTransactionReceipt", { enumerable: !0, get: function() {
      return Ae.formatTransactionReceipt;
    } });
    var Ce = jt();
    Object.defineProperty(e, "defineTransactionRequest", { enumerable: !0, get: function() {
      return Ce.defineTransactionRequest;
    } }), Object.defineProperty(e, "formatTransactionRequest", { enumerable: !0, get: function() {
      return Ce.formatTransactionRequest;
    } }), Object.defineProperty(e, "rpcTransactionType", { enumerable: !0, get: function() {
      return Ce.rpcTransactionType;
    } });
    var Le = vt();
    Object.defineProperty(e, "getAbiItem", { enumerable: !0, get: function() {
      return Le.getAbiItem;
    } });
    var xe = v0();
    Object.defineProperty(e, "getContractAddress", { enumerable: !0, get: function() {
      return xe.getContractAddress;
    } }), Object.defineProperty(e, "getCreate2Address", { enumerable: !0, get: function() {
      return xe.getCreate2Address;
    } }), Object.defineProperty(e, "getCreateAddress", { enumerable: !0, get: function() {
      return xe.getCreateAddress;
    } });
    var It = wd();
    Object.defineProperty(e, "getSerializedTransactionType", { enumerable: !0, get: function() {
      return It.getSerializedTransactionType;
    } });
    var rt = Ou();
    Object.defineProperty(e, "getTransactionType", { enumerable: !0, get: function() {
      return rt.getTransactionType;
    } });
    var Fe = io();
    Object.defineProperty(e, "hashDomain", { enumerable: !0, get: function() {
      return Fe.hashDomain;
    } }), Object.defineProperty(e, "hashStruct", { enumerable: !0, get: function() {
      return Fe.hashStruct;
    } }), Object.defineProperty(e, "hashTypedData", { enumerable: !0, get: function() {
      return Fe.hashTypedData;
    } });
    var nt = rv();
    Object.defineProperty(e, "compactSignatureToSignature", { enumerable: !0, get: function() {
      return nt.compactSignatureToSignature;
    } });
    var et = nv();
    Object.defineProperty(e, "hexToCompactSignature", { enumerable: !0, get: function() {
      return et.parseCompactSignature;
    } }), Object.defineProperty(e, "parseCompactSignature", { enumerable: !0, get: function() {
      return et.parseCompactSignature;
    } });
    var Ge = ov();
    Object.defineProperty(e, "hexToSignature", { enumerable: !0, get: function() {
      return Ge.parseSignature;
    } }), Object.defineProperty(e, "parseSignature", { enumerable: !0, get: function() {
      return Ge.parseSignature;
    } });
    var Lu = Dt();
    Object.defineProperty(e, "recoverAddress", { enumerable: !0, get: function() {
      return Lu.recoverAddress;
    } });
    var so = vd();
    Object.defineProperty(e, "recoverMessageAddress", { enumerable: !0, get: function() {
      return so.recoverMessageAddress;
    } });
    var Uu = Uc();
    Object.defineProperty(e, "recoverPublicKey", { enumerable: !0, get: function() {
      return Uu.recoverPublicKey;
    } });
    var Gu = iv();
    Object.defineProperty(e, "recoverTransactionAddress", { enumerable: !0, get: function() {
      return Gu.recoverTransactionAddress;
    } });
    var Vu = Ed();
    Object.defineProperty(e, "recoverTypedDataAddress", { enumerable: !0, get: function() {
      return Vu.recoverTypedDataAddress;
    } });
    var Wu = av();
    Object.defineProperty(e, "signatureToCompactSignature", { enumerable: !0, get: function() {
      return Wu.signatureToCompactSignature;
    } });
    var uo = sv();
    Object.defineProperty(e, "compactSignatureToHex", { enumerable: !0, get: function() {
      return uo.serializeCompactSignature;
    } }), Object.defineProperty(e, "serializeCompactSignature", { enumerable: !0, get: function() {
      return uo.serializeCompactSignature;
    } });
    var co = L0();
    Object.defineProperty(e, "signatureToHex", { enumerable: !0, get: function() {
      return co.serializeSignature;
    } }), Object.defineProperty(e, "serializeSignature", { enumerable: !0, get: function() {
      return co.serializeSignature;
    } });
    var Hr = Gn();
    Object.defineProperty(e, "bytesToRlp", { enumerable: !0, get: function() {
      return Hr.bytesToRlp;
    } }), Object.defineProperty(e, "hexToRlp", { enumerable: !0, get: function() {
      return Hr.hexToRlp;
    } }), Object.defineProperty(e, "toRlp", { enumerable: !0, get: function() {
      return Hr.toRlp;
    } });
    var Ku = I0();
    Object.defineProperty(e, "verifyHash", { enumerable: !0, get: function() {
      return Ku.verifyHash;
    } });
    var Zu = R0();
    Object.defineProperty(e, "verifyMessage", { enumerable: !0, get: function() {
      return Zu.verifyMessage;
    } });
    var Ju = O0();
    Object.defineProperty(e, "verifyTypedData", { enumerable: !0, get: function() {
      return Ju.verifyTypedData;
    } });
    var Yu = B0();
    Object.defineProperty(e, "parseErc6492Signature", { enumerable: !0, get: function() {
      return Yu.parseErc6492Signature;
    } });
    var Xu = Hu();
    Object.defineProperty(e, "isErc6492Signature", { enumerable: !0, get: function() {
      return Xu.isErc6492Signature;
    } });
    var Qu = Pd();
    Object.defineProperty(e, "serializeErc6492Signature", { enumerable: !0, get: function() {
      return Qu.serializeErc6492Signature;
    } });
    var ec = Pt();
    Object.defineProperty(e, "assertRequest", { enumerable: !0, get: function() {
      return ec.assertRequest;
    } });
    var Ut = $u();
    Object.defineProperty(e, "assertTransactionEIP1559", { enumerable: !0, get: function() {
      return Ut.assertTransactionEIP1559;
    } }), Object.defineProperty(e, "assertTransactionEIP2930", { enumerable: !0, get: function() {
      return Ut.assertTransactionEIP2930;
    } }), Object.defineProperty(e, "assertTransactionLegacy", { enumerable: !0, get: function() {
      return Ut.assertTransactionLegacy;
    } });
    var Gt = be();
    Object.defineProperty(e, "boolToBytes", { enumerable: !0, get: function() {
      return Gt.boolToBytes;
    } }), Object.defineProperty(e, "hexToBytes", { enumerable: !0, get: function() {
      return Gt.hexToBytes;
    } }), Object.defineProperty(e, "numberToBytes", { enumerable: !0, get: function() {
      return Gt.numberToBytes;
    } }), Object.defineProperty(e, "stringToBytes", { enumerable: !0, get: function() {
      return Gt.stringToBytes;
    } }), Object.defineProperty(e, "toBytes", { enumerable: !0, get: function() {
      return Gt.toBytes;
    } });
    var Vt = Y();
    Object.defineProperty(e, "boolToHex", { enumerable: !0, get: function() {
      return Vt.boolToHex;
    } }), Object.defineProperty(e, "bytesToHex", { enumerable: !0, get: function() {
      return Vt.bytesToHex;
    } }), Object.defineProperty(e, "numberToHex", { enumerable: !0, get: function() {
      return Vt.numberToHex;
    } }), Object.defineProperty(e, "stringToHex", { enumerable: !0, get: function() {
      return Vt.stringToHex;
    } }), Object.defineProperty(e, "toHex", { enumerable: !0, get: function() {
      return Vt.toHex;
    } });
    var Wt = zc();
    Object.defineProperty(e, "bytesToBigInt", { enumerable: !0, get: function() {
      return Wt.bytesToBigInt;
    } }), Object.defineProperty(e, "bytesToBool", { enumerable: !0, get: function() {
      return Wt.bytesToBool;
    } }), Object.defineProperty(e, "bytesToNumber", { enumerable: !0, get: function() {
      return Wt.bytesToNumber;
    } }), Object.defineProperty(e, "bytesToString", { enumerable: !0, get: function() {
      return Wt.bytesToString;
    } }), Object.defineProperty(e, "fromBytes", { enumerable: !0, get: function() {
      return Wt.fromBytes;
    } });
    var Kt = id();
    Object.defineProperty(e, "ccipRequest", { enumerable: !0, get: function() {
      return Kt.ccipRequest;
    } }), Object.defineProperty(e, "ccipFetch", { enumerable: !0, get: function() {
      return Kt.ccipRequest;
    } }), Object.defineProperty(e, "offchainLookup", { enumerable: !0, get: function() {
      return Kt.offchainLookup;
    } }), Object.defineProperty(e, "offchainLookupAbiItem", { enumerable: !0, get: function() {
      return Kt.offchainLookupAbiItem;
    } }), Object.defineProperty(e, "offchainLookupSignature", { enumerable: !0, get: function() {
      return Kt.offchainLookupSignature;
    } });
    var tc = Su();
    Object.defineProperty(e, "blobsToCommitments", { enumerable: !0, get: function() {
      return tc.blobsToCommitments;
    } });
    var rc = Yc();
    Object.defineProperty(e, "commitmentToVersionedHash", { enumerable: !0, get: function() {
      return rc.commitmentToVersionedHash;
    } });
    var nc = Xc();
    Object.defineProperty(e, "commitmentsToVersionedHashes", { enumerable: !0, get: function() {
      return nc.commitmentsToVersionedHashes;
    } });
    var oc = uv();
    Object.defineProperty(e, "sidecarsToVersionedHashes", { enumerable: !0, get: function() {
      return oc.sidecarsToVersionedHashes;
    } });
    var ic = Iu();
    Object.defineProperty(e, "blobsToProofs", { enumerable: !0, get: function() {
      return ic.blobsToProofs;
    } });
    var fo = cv();
    Object.defineProperty(e, "fromBlobs", { enumerable: !0, get: function() {
      return fo.fromBlobs;
    } });
    var X0 = Ru();
    Object.defineProperty(e, "toBlobSidecars", { enumerable: !0, get: function() {
      return X0.toBlobSidecars;
    } });
    var Q0 = Kh();
    Object.defineProperty(e, "toBlobs", { enumerable: !0, get: function() {
      return Q0.toBlobs;
    } });
    var ep = K0();
    Object.defineProperty(e, "defineKzg", { enumerable: !0, get: function() {
      return ep.defineKzg;
    } });
    var tp = dv();
    Object.defineProperty(e, "setupKzg", { enumerable: !0, get: function() {
      return tp.setupKzg;
    } });
    var ac = Be();
    Object.defineProperty(e, "concat", { enumerable: !0, get: function() {
      return ac.concat;
    } }), Object.defineProperty(e, "concatBytes", { enumerable: !0, get: function() {
      return ac.concatBytes;
    } }), Object.defineProperty(e, "concatHex", { enumerable: !0, get: function() {
      return ac.concatHex;
    } });
    var rp = Mu();
    Object.defineProperty(e, "assertCurrentChain", { enumerable: !0, get: function() {
      return rp.assertCurrentChain;
    } });
    var np = f0();
    Object.defineProperty(e, "defineChain", { enumerable: !0, get: function() {
      return np.defineChain;
    } });
    var op = l0();
    Object.defineProperty(e, "extractChain", { enumerable: !0, get: function() {
      return op.extractChain;
    } });
    var ip = Lt();
    Object.defineProperty(e, "getChainContractAddress", { enumerable: !0, get: function() {
      return ip.getChainContractAddress;
    } });
    var ap = _0();
    Object.defineProperty(e, "encodePacked", { enumerable: !0, get: function() {
      return ap.encodePacked;
    } });
    var sp = cd();
    Object.defineProperty(e, "withRetry", { enumerable: !0, get: function() {
      return sp.withRetry;
    } });
    var up = fd();
    Object.defineProperty(e, "withTimeout", { enumerable: !0, get: function() {
      return up.withTimeout;
    } });
    var cp = Ln();
    Object.defineProperty(e, "formatEther", { enumerable: !0, get: function() {
      return cp.formatEther;
    } });
    var dp = fr();
    Object.defineProperty(e, "formatGwei", { enumerable: !0, get: function() {
      return dp.formatGwei;
    } });
    var fp = Pu();
    Object.defineProperty(e, "formatUnits", { enumerable: !0, get: function() {
      return fp.formatUnits;
    } });
    var $r = Pe();
    Object.defineProperty(e, "fromHex", { enumerable: !0, get: function() {
      return $r.fromHex;
    } }), Object.defineProperty(e, "hexToBigInt", { enumerable: !0, get: function() {
      return $r.hexToBigInt;
    } }), Object.defineProperty(e, "hexToBool", { enumerable: !0, get: function() {
      return $r.hexToBool;
    } }), Object.defineProperty(e, "hexToNumber", { enumerable: !0, get: function() {
      return $r.hexToNumber;
    } }), Object.defineProperty(e, "hexToString", { enumerable: !0, get: function() {
      return $r.hexToString;
    } });
    var lp = pd();
    Object.defineProperty(e, "fromRlp", { enumerable: !0, get: function() {
      return lp.fromRlp;
    } });
    var Rd = Ue();
    Object.defineProperty(e, "checksumAddress", { enumerable: !0, get: function() {
      return Rd.checksumAddress;
    } }), Object.defineProperty(e, "getAddress", { enumerable: !0, get: function() {
      return Rd.getAddress;
    } });
    var mp = zt();
    Object.defineProperty(e, "getContractError", { enumerable: !0, get: function() {
      return mp.getContractError;
    } });
    var Od = Mr();
    Object.defineProperty(e, "toEventSelector", { enumerable: !0, get: function() {
      return Od.toEventSelector;
    } }), Object.defineProperty(e, "getEventSelector", { enumerable: !0, get: function() {
      return Od.toEventSelector;
    } });
    var Bd = cr();
    Object.defineProperty(e, "toFunctionSelector", { enumerable: !0, get: function() {
      return Bd.toFunctionSelector;
    } }), Object.defineProperty(e, "getFunctionSelector", { enumerable: !0, get: function() {
      return Bd.toFunctionSelector;
    } });
    var Cd = E0();
    Object.defineProperty(e, "toEventSignature", { enumerable: !0, get: function() {
      return Cd.toEventSignature;
    } }), Object.defineProperty(e, "getEventSignature", { enumerable: !0, get: function() {
      return Cd.toEventSignature;
    } });
    var qd = j0();
    Object.defineProperty(e, "toFunctionSignature", { enumerable: !0, get: function() {
      return qd.toFunctionSignature;
    } }), Object.defineProperty(e, "getFunctionSignature", { enumerable: !0, get: function() {
      return qd.toFunctionSignature;
    } });
    var bp = P0();
    Object.defineProperty(e, "toEventHash", { enumerable: !0, get: function() {
      return bp.toEventHash;
    } });
    var gp = w0();
    Object.defineProperty(e, "toFunctionHash", { enumerable: !0, get: function() {
      return gp.toFunctionHash;
    } });
    var yp = ao();
    Object.defineProperty(e, "hashMessage", { enumerable: !0, get: function() {
      return yp.hashMessage;
    } });
    var hp = S0();
    Object.defineProperty(e, "toPrefixedMessage", { enumerable: !0, get: function() {
      return hp.toPrefixedMessage;
    } });
    var pp = ze();
    Object.defineProperty(e, "isAddress", { enumerable: !0, get: function() {
      return pp.isAddress;
    } });
    var _p = wt();
    Object.defineProperty(e, "isAddressEqual", { enumerable: !0, get: function() {
      return _p.isAddressEqual;
    } });
    var vp = yd();
    Object.defineProperty(e, "isBytes", { enumerable: !0, get: function() {
      return vp.isBytes;
    } });
    var Ep = _d();
    Object.defineProperty(e, "isHash", { enumerable: !0, get: function() {
      return Ep.isHash;
    } });
    var jp = Oe();
    Object.defineProperty(e, "isHex", { enumerable: !0, get: function() {
      return jp.isHex;
    } });
    var Pp = Me();
    Object.defineProperty(e, "keccak256", { enumerable: !0, get: function() {
      return Pp.keccak256;
    } });
    var wp = Jc();
    Object.defineProperty(e, "sha256", { enumerable: !0, get: function() {
      return wp.sha256;
    } });
    var Tp = T0();
    Object.defineProperty(e, "ripemd160", { enumerable: !0, get: function() {
      return Tp.ripemd160;
    } });
    var sc = kt();
    Object.defineProperty(e, "pad", { enumerable: !0, get: function() {
      return sc.pad;
    } }), Object.defineProperty(e, "padBytes", { enumerable: !0, get: function() {
      return sc.padBytes;
    } }), Object.defineProperty(e, "padHex", { enumerable: !0, get: function() {
      return sc.padHex;
    } });
    var Ap = q0();
    Object.defineProperty(e, "parseEther", { enumerable: !0, get: function() {
      return Ap.parseEther;
    } });
    var Sp = M0();
    Object.defineProperty(e, "parseGwei", { enumerable: !0, get: function() {
      return Sp.parseGwei;
    } });
    var Ip = Td();
    Object.defineProperty(e, "parseTransaction", { enumerable: !0, get: function() {
      return Ip.parseTransaction;
    } });
    var Rp = zu();
    Object.defineProperty(e, "parseUnits", { enumerable: !0, get: function() {
      return Rp.parseUnits;
    } });
    var Op = Ad();
    Object.defineProperty(e, "serializeAccessList", { enumerable: !0, get: function() {
      return Op.serializeAccessList;
    } });
    var Bp = Nu();
    Object.defineProperty(e, "serializeTransaction", { enumerable: !0, get: function() {
      return Bp.serializeTransaction;
    } });
    var Cp = Ne();
    Object.defineProperty(e, "size", { enumerable: !0, get: function() {
      return Cp.size;
    } });
    var uc = Je();
    Object.defineProperty(e, "slice", { enumerable: !0, get: function() {
      return uc.slice;
    } }), Object.defineProperty(e, "sliceBytes", { enumerable: !0, get: function() {
      return uc.sliceBytes;
    } }), Object.defineProperty(e, "sliceHex", { enumerable: !0, get: function() {
      return uc.sliceHex;
    } });
    var qp = Ie();
    Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return qp.stringify;
    } });
    var Mp = Ht();
    Object.defineProperty(e, "trim", { enumerable: !0, get: function() {
      return Mp.trim;
    } });
    var lo = ku();
    Object.defineProperty(e, "serializeTypedData", { enumerable: !0, get: function() {
      return lo.serializeTypedData;
    } }), Object.defineProperty(e, "validateTypedData", { enumerable: !0, get: function() {
      return lo.validateTypedData;
    } }), Object.defineProperty(e, "domainSeparator", { enumerable: !0, get: function() {
      return lo.domainSeparator;
    } }), Object.defineProperty(e, "getTypesForEIP712Domain", { enumerable: !0, get: function() {
      return lo.getTypesForEIP712Domain;
    } });
    var Md = x0();
    Object.defineProperty(e, "createNonceManager", { enumerable: !0, get: function() {
      return Md.createNonceManager;
    } }), Object.defineProperty(e, "nonceManager", { enumerable: !0, get: function() {
      return Md.nonceManager;
    } });
  }(mc)), mc;
}
var ir = {}, bh;
function lv() {
  if (bh) return ir;
  bh = 1, Object.defineProperty(ir, "__esModule", { value: !0 }), ir.MAGIC_VALUE_BYTES = ir.MAGIC_VALUE = void 0;
  const e = "0x1626ba7e";
  ir.MAGIC_VALUE = e;
  const t = "0x20c13b0b";
  return ir.MAGIC_VALUE_BYTES = t, ir;
}
var mu = {}, Hn = {}, ar = {}, gh;
function Z0() {
  if (gh) return ar;
  gh = 1, Object.defineProperty(ar, "__esModule", { value: !0 }), ar.PermissionsError = ar.PERMISSIONS_REQUEST_REJECTED = void 0, ar.PERMISSIONS_REQUEST_REJECTED = 4001;
  class e extends Error {
    constructor(n, r, o) {
      super(n), this.code = r, this.data = o, Object.setPrototypeOf(this, e.prototype);
    }
  }
  return ar.PermissionsError = e, ar;
}
var yh;
function J0() {
  if (yh) return Hn;
  yh = 1, Object.defineProperty(Hn, "__esModule", { value: !0 }), Hn.Wallet = void 0;
  const e = ur(), t = Z0();
  class n {
    constructor(o) {
      this.communicator = o;
    }
    async getPermissions() {
      return (await this.communicator.send(e.Methods.wallet_getPermissions, void 0)).data;
    }
    async requestPermissions(o) {
      if (!this.isPermissionRequestValid(o))
        throw new t.PermissionsError("Permissions request is invalid", t.PERMISSIONS_REQUEST_REJECTED);
      try {
        return (await this.communicator.send(e.Methods.wallet_requestPermissions, o)).data;
      } catch {
        throw new t.PermissionsError("Permissions rejected", t.PERMISSIONS_REQUEST_REJECTED);
      }
    }
    isPermissionRequestValid(o) {
      return o.every((a) => typeof a == "object" ? Object.keys(a).every((i) => !!Object.values(e.RestrictedMethods).includes(i)) : !1);
    }
  }
  return Hn.Wallet = n, Hn;
}
var hh;
function mv() {
  if (hh) return mu;
  hh = 1, Object.defineProperty(mu, "__esModule", { value: !0 });
  const e = J0(), t = Z0(), n = (o, a) => a.some((i) => i.parentCapability === o), r = () => (o, a, i) => {
    const s = i.value;
    return i.value = async function() {
      const u = new e.Wallet(this.communicator);
      let d = await u.getPermissions();
      if (n(a, d) || (d = await u.requestPermissions([{ [a]: {} }])), !n(a, d))
        throw new t.PermissionsError("Permissions rejected", t.PERMISSIONS_REQUEST_REJECTED);
      return s.apply(this);
    }, i;
  };
  return mu.default = r, mu;
}
var ph;
function bv() {
  if (ph) return Jt;
  ph = 1;
  var e = Jt.__decorate || function(d, f, c, m) {
    var y = arguments.length, g = y < 3 ? f : m === null ? m = Object.getOwnPropertyDescriptor(f, c) : m, b;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") g = Reflect.decorate(d, f, c, m);
    else for (var h = d.length - 1; h >= 0; h--) (b = d[h]) && (g = (y < 3 ? b(g) : y > 3 ? b(f, c, g) : b(f, c)) || g);
    return y > 3 && g && Object.defineProperty(f, c, g), g;
  }, t = Jt.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(Jt, "__esModule", { value: !0 }), Jt.Safe = void 0;
  const n = /* @__PURE__ */ fv(), r = lv(), o = ur(), a = Fc(), i = xc(), s = t(mv());
  class u {
    constructor(f) {
      this.communicator = f;
    }
    async getChainInfo() {
      return (await this.communicator.send(o.Methods.getChainInfo, void 0)).data;
    }
    async getInfo() {
      return (await this.communicator.send(o.Methods.getSafeInfo, void 0)).data;
    }
    // There is a possibility that this method will change because we may add pagination to the endpoint
    async experimental_getBalances({ currency: f = "usd" } = {}) {
      return (await this.communicator.send(o.Methods.getSafeBalances, {
        currency: f
      })).data;
    }
    async check1271Signature(f, c = "0x") {
      const m = await this.getInfo(), y = (0, n.encodeFunctionData)({
        abi: [
          {
            constant: !1,
            inputs: [
              {
                name: "_dataHash",
                type: "bytes32"
              },
              {
                name: "_signature",
                type: "bytes"
              }
            ],
            name: "isValidSignature",
            outputs: [
              {
                name: "",
                type: "bytes4"
              }
            ],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
          }
        ],
        functionName: "isValidSignature",
        args: [f, c]
      }), g = {
        call: a.RPC_CALLS.eth_call,
        params: [
          {
            to: m.safeAddress,
            data: y
          },
          "latest"
        ]
      };
      try {
        return (await this.communicator.send(o.Methods.rpcCall, g)).data.slice(0, 10).toLowerCase() === r.MAGIC_VALUE;
      } catch {
        return !1;
      }
    }
    async check1271SignatureBytes(f, c = "0x") {
      const m = await this.getInfo(), y = (0, n.encodeFunctionData)({
        abi: [
          {
            constant: !1,
            inputs: [
              {
                name: "_data",
                type: "bytes"
              },
              {
                name: "_signature",
                type: "bytes"
              }
            ],
            name: "isValidSignature",
            outputs: [
              {
                name: "",
                type: "bytes4"
              }
            ],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
          }
        ],
        functionName: "isValidSignature",
        args: [f, c]
      }), g = {
        call: a.RPC_CALLS.eth_call,
        params: [
          {
            to: m.safeAddress,
            data: y
          },
          "latest"
        ]
      };
      try {
        return (await this.communicator.send(o.Methods.rpcCall, g)).data.slice(0, 10).toLowerCase() === r.MAGIC_VALUE_BYTES;
      } catch {
        return !1;
      }
    }
    calculateMessageHash(f) {
      return (0, n.hashMessage)(f);
    }
    calculateTypedMessageHash(f) {
      const c = typeof f.domain.chainId == "object" ? f.domain.chainId.toNumber() : Number(f.domain.chainId);
      let m = f.primaryType;
      if (!m) {
        const y = Object.values(f.types), g = Object.keys(f.types).filter((b) => y.every((h) => h.every(({ type: _ }) => _.replace("[", "").replace("]", "") !== b)));
        if (g.length === 0 || g.length > 1)
          throw new Error("Please specify primaryType");
        m = g[0];
      }
      return (0, n.hashTypedData)({
        message: f.message,
        domain: {
          ...f.domain,
          chainId: c,
          verifyingContract: f.domain.verifyingContract,
          salt: f.domain.salt
        },
        types: f.types,
        primaryType: m
      });
    }
    async getOffChainSignature(f) {
      return (await this.communicator.send(o.Methods.getOffChainSignature, f)).data;
    }
    async isMessageSigned(f, c = "0x") {
      let m;
      if (typeof f == "string" && (m = async () => {
        const y = this.calculateMessageHash(f);
        return await this.isMessageHashSigned(y, c);
      }), (0, i.isObjectEIP712TypedData)(f) && (m = async () => {
        const y = this.calculateTypedMessageHash(f);
        return await this.isMessageHashSigned(y, c);
      }), m)
        return await m();
      throw new Error("Invalid message type");
    }
    async isMessageHashSigned(f, c = "0x") {
      const m = [this.check1271Signature.bind(this), this.check1271SignatureBytes.bind(this)];
      for (const y of m)
        if (await y(f, c))
          return !0;
      return !1;
    }
    async getEnvironmentInfo() {
      return (await this.communicator.send(o.Methods.getEnvironmentInfo, void 0)).data;
    }
    async requestAddressBook() {
      return (await this.communicator.send(o.Methods.requestAddressBook, void 0)).data;
    }
  }
  return Jt.Safe = u, e([
    (0, s.default)()
  ], u.prototype, "requestAddressBook", null), Jt;
}
var _h;
function vh() {
  if (_h) return zr;
  _h = 1;
  var e = zr.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(zr, "__esModule", { value: !0 });
  const t = e(Gp()), n = Jp(), r = Yp(), o = bv(), a = J0();
  class i {
    constructor(u = {}) {
      const { allowedDomains: d = null, debug: f = !1 } = u;
      this.communicator = new t.default(d, f), this.eth = new r.Eth(this.communicator), this.txs = new n.TXs(this.communicator), this.safe = new o.Safe(this.communicator), this.wallet = new a.Wallet(this.communicator);
    }
  }
  return zr.default = i, zr;
}
var Eh;
function gv() {
  return Eh || (Eh = 1, function(e) {
    var t = br.__createBinding || (Object.create ? function(i, s, u, d) {
      d === void 0 && (d = u);
      var f = Object.getOwnPropertyDescriptor(s, u);
      (!f || ("get" in f ? !s.__esModule : f.writable || f.configurable)) && (f = { enumerable: !0, get: function() {
        return s[u];
      } }), Object.defineProperty(i, d, f);
    } : function(i, s, u, d) {
      d === void 0 && (d = u), i[d] = s[u];
    }), n = br.__exportStar || function(i, s) {
      for (var u in i) u !== "default" && !Object.prototype.hasOwnProperty.call(s, u) && t(s, i, u);
    }, r = br.__importDefault || function(i) {
      return i && i.__esModule ? i : { default: i };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.getSDKVersion = void 0;
    const o = r(vh());
    e.default = o.default, n(vh(), e), n(xc(), e), n(ur(), e), n(Sh(), e);
    var a = Ah();
    Object.defineProperty(e, "getSDKVersion", { enumerable: !0, get: function() {
      return a.getSDKVersion;
    } }), n(Fc(), e);
  }(br)), br;
}
var sr = {}, jh;
function yv() {
  if (jh) return sr;
  jh = 1, Object.defineProperty(sr, "__esModule", { value: !0 }), sr.numberToHex = sr.getLowerCase = void 0;
  function e(n) {
    return n && n.toLowerCase();
  }
  sr.getLowerCase = e;
  function t(n) {
    return `0x${n.toString(16)}`;
  }
  return sr.numberToHex = t, sr;
}
var Ph;
function hv() {
  if (Ph) return Nr;
  Ph = 1, Object.defineProperty(Nr, "__esModule", { value: !0 }), Nr.SafeAppProvider = void 0;
  const e = /* @__PURE__ */ gv(), t = $p(), n = /* @__PURE__ */ yv();
  class r extends t.EventEmitter {
    constructor(a, i) {
      super(), this.submittedTxs = /* @__PURE__ */ new Map(), this.safe = a, this.sdk = i;
    }
    async connect() {
      this.emit("connect", { chainId: this.chainId });
    }
    async disconnect() {
    }
    get chainId() {
      return this.safe.chainId;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async request(a) {
      var u, d, f, c;
      const { method: i, params: s = [] } = a;
      switch (i) {
        case "eth_accounts":
          return [this.safe.safeAddress];
        case "net_version":
        case "eth_chainId":
          return (0, n.numberToHex)(this.chainId);
        case "personal_sign": {
          const [h, _] = s;
          if (this.safe.safeAddress.toLowerCase() !== _.toLowerCase())
            throw new Error("The address or message hash is invalid");
          const P = await this.sdk.txs.signMessage(h);
          return ("signature" in P ? P.signature : void 0) || "0x";
        }
        case "eth_sign": {
          const [h, _] = s;
          if (this.safe.safeAddress.toLowerCase() !== h.toLowerCase() || !_.startsWith("0x"))
            throw new Error("The address or message hash is invalid");
          const P = await this.sdk.txs.signMessage(_);
          return ("signature" in P ? P.signature : void 0) || "0x";
        }
        case "eth_signTypedData":
        case "eth_signTypedData_v4": {
          const [h, _] = s, P = typeof _ == "string" ? JSON.parse(_) : _;
          if (this.safe.safeAddress.toLowerCase() !== h.toLowerCase())
            throw new Error("The address is invalid");
          const j = await this.sdk.txs.signTypedMessage(P);
          return ("signature" in j ? j.signature : void 0) || "0x";
        }
        case "eth_sendTransaction":
          const m = {
            ...s[0],
            value: s[0].value || "0",
            data: s[0].data || "0x"
          };
          typeof m.gas == "string" && m.gas.startsWith("0x") && (m.gas = parseInt(m.gas, 16));
          const y = await this.sdk.txs.send({
            txs: [m],
            params: { safeTxGas: m.gas }
          });
          return this.submittedTxs.set(y.safeTxHash, {
            from: this.safe.safeAddress,
            hash: y.safeTxHash,
            gas: 0,
            gasPrice: "0x00",
            nonce: 0,
            input: m.data,
            value: m.value,
            to: m.to,
            blockHash: null,
            blockNumber: null,
            transactionIndex: null
          }), y.safeTxHash;
        case "eth_blockNumber":
          return (await this.sdk.eth.getBlockByNumber(["latest"])).number;
        case "eth_getBalance":
          return this.sdk.eth.getBalance([(0, n.getLowerCase)(s[0]), s[1]]);
        case "eth_getCode":
          return this.sdk.eth.getCode([(0, n.getLowerCase)(s[0]), s[1]]);
        case "eth_getTransactionCount":
          return this.sdk.eth.getTransactionCount([(0, n.getLowerCase)(s[0]), s[1]]);
        case "eth_getStorageAt":
          return this.sdk.eth.getStorageAt([(0, n.getLowerCase)(s[0]), s[1], s[2]]);
        case "eth_getBlockByNumber":
          return this.sdk.eth.getBlockByNumber([s[0], s[1]]);
        case "eth_getBlockByHash":
          return this.sdk.eth.getBlockByHash([s[0], s[1]]);
        case "eth_getTransactionByHash":
          let b = s[0];
          try {
            b = (await this.sdk.txs.getBySafeTxHash(b)).txHash || b;
          } catch {
          }
          return this.submittedTxs.has(b) ? this.submittedTxs.get(b) : this.sdk.eth.getTransactionByHash([b]).then((h) => (h && (h.hash = s[0]), h));
        case "eth_getTransactionReceipt": {
          let h = s[0];
          try {
            h = (await this.sdk.txs.getBySafeTxHash(h)).txHash || h;
          } catch {
          }
          return this.sdk.eth.getTransactionReceipt([h]).then((_) => (_ && (_.transactionHash = s[0]), _));
        }
        case "eth_estimateGas":
          return this.sdk.eth.getEstimateGas(s[0]);
        case "eth_call":
          return this.sdk.eth.call([s[0], s[1]]);
        case "eth_getLogs":
          return this.sdk.eth.getPastLogs([s[0]]);
        case "eth_gasPrice":
          return this.sdk.eth.getGasPrice();
        case "wallet_getPermissions":
          return this.sdk.wallet.getPermissions();
        case "wallet_requestPermissions":
          return this.sdk.wallet.requestPermissions(s[0]);
        case "safe_setSettings":
          return this.sdk.eth.setSafeSettings([s[0]]);
        case "wallet_sendCalls": {
          if (s[0].from !== this.safe.safeAddress)
            throw Error("Invalid from address");
          const h = s[0].calls.map((P, j) => {
            if (P.chainId !== (0, n.numberToHex)(this.chainId))
              throw new Error(`Invalid call #${j}: Safe is not on chain ${P.chainId}`);
            if (!P.to)
              throw new Error(`Invalid call #${j}: missing "to" field`);
            return {
              to: P.to,
              data: P.data ?? "0x",
              value: P.value ?? (0, n.numberToHex)(0)
            };
          }), { safeTxHash: _ } = await this.sdk.txs.send({ txs: h });
          return _;
        }
        case "wallet_getCallsStatus": {
          const h = {
            [e.TransactionStatus.AWAITING_CONFIRMATIONS]: "PENDING",
            [e.TransactionStatus.AWAITING_EXECUTION]: "PENDING",
            [e.TransactionStatus.CANCELLED]: "CONFIRMED",
            [e.TransactionStatus.FAILED]: "CONFIRMED",
            [e.TransactionStatus.SUCCESS]: "CONFIRMED"
          }, _ = await this.sdk.txs.getBySafeTxHash(s[0]), P = h[_.txStatus];
          if (!_.txHash)
            return {
              status: P
            };
          const j = await this.sdk.eth.getTransactionReceipt([_.txHash]);
          if (!j)
            return {
              status: P
            };
          const v = ((d = (u = _.txData) == null ? void 0 : u.dataDecoded) == null ? void 0 : d.method) !== "multiSend" ? 1 : (
            // Number of batched transactions
            ((c = (f = _.txData.dataDecoded.parameters) == null ? void 0 : f[0].valueDecoded) == null ? void 0 : c.length) ?? 1
          ), E = Number(j.blockNumber), l = Number(j.gasUsed), p = Array(v).fill({
            logs: j.logs,
            status: (0, n.numberToHex)(_.txStatus === e.TransactionStatus.SUCCESS ? 1 : 0),
            chainId: (0, n.numberToHex)(this.chainId),
            blockHash: j.blockHash,
            blockNumber: (0, n.numberToHex)(E),
            gasUsed: (0, n.numberToHex)(l),
            transactionHash: _.txHash
          });
          return {
            status: P,
            receipts: p
          };
        }
        case "wallet_showCallsStatus":
          throw new Error(`"${a.method}" not supported`);
        case "wallet_getCapabilities":
          return {
            [(0, n.numberToHex)(this.chainId)]: {
              atomicBatch: {
                supported: !0
              }
            }
          };
        default:
          throw Error(`"${a.method}" not implemented`);
      }
    }
    // this method is needed for ethers v4
    // https://github.com/ethers-io/ethers.js/blob/427e16826eb15d52d25c4f01027f8db22b74b76c/src.ts/providers/web3-provider.ts#L41-L55
    send(a, i) {
      a || i("Undefined request"), this.request(a).then((s) => i(null, { jsonrpc: "2.0", id: a.id, result: s })).catch((s) => i(s, null));
    }
  }
  return Nr.SafeAppProvider = r, Nr;
}
var wh;
function pv() {
  return wh || (wh = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.SafeAppProvider = void 0;
    var t = /* @__PURE__ */ hv();
    Object.defineProperty(e, "SafeAppProvider", { enumerable: !0, get: function() {
      return t.SafeAppProvider;
    } });
  }(cc)), cc;
}
var Y0 = /* @__PURE__ */ pv();
const _v = /* @__PURE__ */ Fp(Y0), wv = /* @__PURE__ */ Np({
  __proto__: null,
  default: _v
}, [Y0]);
export {
  wv as i
};
