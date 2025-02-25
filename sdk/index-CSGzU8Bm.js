import { l as Qe, m as Ze, n as Xe, E as et } from "./index-ZTp1dUI3.js";
import { r as tt } from "./sha3-CijZRJ4X.js";
import { D as Z, _ as w, d as de, y as nt } from "./hooks.module-C3CSZ0PZ.js";
class M {
  constructor(e, n) {
    this.scope = e, this.module = n;
  }
  storeObject(e, n) {
    this.setItem(e, JSON.stringify(n));
  }
  loadObject(e) {
    const n = this.getItem(e);
    return n ? JSON.parse(n) : void 0;
  }
  setItem(e, n) {
    localStorage.setItem(this.scopedKey(e), n);
  }
  getItem(e) {
    return localStorage.getItem(this.scopedKey(e));
  }
  removeItem(e) {
    localStorage.removeItem(this.scopedKey(e));
  }
  clear() {
    const e = this.scopedKey(""), n = [];
    for (let s = 0; s < localStorage.length; s++) {
      const r = localStorage.key(s);
      typeof r == "string" && r.startsWith(e) && n.push(r);
    }
    n.forEach((s) => localStorage.removeItem(s));
  }
  scopedKey(e) {
    return `-${this.scope}${this.module ? `:${this.module}` : ""}:${e}`;
  }
  static clearAll() {
    new M("CBWSDK").clear(), new M("walletlink").clear();
  }
}
const y = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901,
    unsupportedChain: 4902
  }
}, X = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object."
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available."
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s)."
  },
  "-32603": {
    standard: "JSON RPC 2.0",
    message: "Internal JSON-RPC error."
  },
  "-32000": {
    standard: "EIP-1474",
    message: "Invalid input."
  },
  "-32001": {
    standard: "EIP-1474",
    message: "Resource not found."
  },
  "-32002": {
    standard: "EIP-1474",
    message: "Resource unavailable."
  },
  "-32003": {
    standard: "EIP-1474",
    message: "Transaction rejected."
  },
  "-32004": {
    standard: "EIP-1474",
    message: "Method not supported."
  },
  "-32005": {
    standard: "EIP-1474",
    message: "Request limit exceeded."
  },
  4001: {
    standard: "EIP-1193",
    message: "User rejected the request."
  },
  4100: {
    standard: "EIP-1193",
    message: "The requested account and/or method has not been authorized by the user."
  },
  4200: {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider."
  },
  4900: {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains."
  },
  4901: {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain."
  },
  4902: {
    standard: "EIP-3085",
    message: "Unrecognized chain ID."
  }
}, xe = "Unspecified error message.", st = "Unspecified server error.";
function se(t, e = xe) {
  if (t && Number.isInteger(t)) {
    const n = t.toString();
    if (ee(X, n))
      return X[n].message;
    if (Re(t))
      return st;
  }
  return e;
}
function it(t) {
  if (!Number.isInteger(t))
    return !1;
  const e = t.toString();
  return !!(X[e] || Re(t));
}
function rt(t, { shouldIncludeStack: e = !1 } = {}) {
  const n = {};
  if (t && typeof t == "object" && !Array.isArray(t) && ee(t, "code") && it(t.code)) {
    const s = t;
    n.code = s.code, s.message && typeof s.message == "string" ? (n.message = s.message, ee(s, "data") && (n.data = s.data)) : (n.message = se(n.code), n.data = { originalError: le(t) });
  } else
    n.code = y.rpc.internal, n.message = ue(t, "message") ? t.message : xe, n.data = { originalError: le(t) };
  return e && (n.stack = ue(t, "stack") ? t.stack : void 0), n;
}
function Re(t) {
  return t >= -32099 && t <= -32e3;
}
function le(t) {
  return t && typeof t == "object" && !Array.isArray(t) ? Object.assign({}, t) : t;
}
function ee(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function ue(t, e) {
  return typeof t == "object" && t !== null && e in t && typeof t[e] == "string";
}
const m = {
  rpc: {
    parse: (t) => S(y.rpc.parse, t),
    invalidRequest: (t) => S(y.rpc.invalidRequest, t),
    invalidParams: (t) => S(y.rpc.invalidParams, t),
    methodNotFound: (t) => S(y.rpc.methodNotFound, t),
    internal: (t) => S(y.rpc.internal, t),
    server: (t) => {
      if (!t || typeof t != "object" || Array.isArray(t))
        throw new Error("Ethereum RPC Server errors must provide single object argument.");
      const { code: e } = t;
      if (!Number.isInteger(e) || e > -32005 || e < -32099)
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
      return S(e, t);
    },
    invalidInput: (t) => S(y.rpc.invalidInput, t),
    resourceNotFound: (t) => S(y.rpc.resourceNotFound, t),
    resourceUnavailable: (t) => S(y.rpc.resourceUnavailable, t),
    transactionRejected: (t) => S(y.rpc.transactionRejected, t),
    methodNotSupported: (t) => S(y.rpc.methodNotSupported, t),
    limitExceeded: (t) => S(y.rpc.limitExceeded, t)
  },
  provider: {
    userRejectedRequest: (t) => N(y.provider.userRejectedRequest, t),
    unauthorized: (t) => N(y.provider.unauthorized, t),
    unsupportedMethod: (t) => N(y.provider.unsupportedMethod, t),
    disconnected: (t) => N(y.provider.disconnected, t),
    chainDisconnected: (t) => N(y.provider.chainDisconnected, t),
    unsupportedChain: (t) => N(y.provider.unsupportedChain, t),
    custom: (t) => {
      if (!t || typeof t != "object" || Array.isArray(t))
        throw new Error("Ethereum Provider custom errors must provide single object argument.");
      const { code: e, message: n, data: s } = t;
      if (!n || typeof n != "string")
        throw new Error('"message" must be a nonempty string');
      return new Te(e, n, s);
    }
  }
};
function S(t, e) {
  const [n, s] = Pe(e);
  return new Le(t, n || se(t), s);
}
function N(t, e) {
  const [n, s] = Pe(e);
  return new Te(t, n || se(t), s);
}
function Pe(t) {
  if (t) {
    if (typeof t == "string")
      return [t];
    if (typeof t == "object" && !Array.isArray(t)) {
      const { message: e, data: n } = t;
      if (e && typeof e != "string")
        throw new Error("Must specify string message.");
      return [e || void 0, n];
    }
  }
  return [];
}
class Le extends Error {
  constructor(e, n, s) {
    if (!Number.isInteger(e))
      throw new Error('"code" must be an integer.');
    if (!n || typeof n != "string")
      throw new Error('"message" must be a nonempty string.');
    super(n), this.code = e, s !== void 0 && (this.data = s);
  }
}
class Te extends Le {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   * `code` must be an integer in the 1000 <= 4999 range.
   */
  constructor(e, n, s) {
    if (!at(e))
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    super(e, n, s);
  }
}
function at(t) {
  return Number.isInteger(t) && t >= 1e3 && t <= 4999;
}
function ie() {
  return (t) => t;
}
const q = ie(), ot = ie(), ct = ie();
function A(t) {
  return Math.floor(t);
}
const Ne = /^[0-9]*$/, De = /^[a-f0-9]*$/;
function T(t) {
  return re(crypto.getRandomValues(new Uint8Array(t)));
}
function re(t) {
  return [...t].map((e) => e.toString(16).padStart(2, "0")).join("");
}
function z(t) {
  return new Uint8Array(t.match(/.{1,2}/g).map((e) => Number.parseInt(e, 16)));
}
function j(t, e = !1) {
  const n = t.toString("hex");
  return q(e ? `0x${n}` : n);
}
function H(t) {
  return j(te(t), !0);
}
function _(t) {
  return ct(t.toString(10));
}
function L(t) {
  return q(`0x${BigInt(t).toString(16)}`);
}
function Oe(t) {
  return t.startsWith("0x") || t.startsWith("0X");
}
function ae(t) {
  return Oe(t) ? t.slice(2) : t;
}
function je(t) {
  return Oe(t) ? `0x${t.slice(2)}` : `0x${t}`;
}
function F(t) {
  if (typeof t != "string")
    return !1;
  const e = ae(t).toLowerCase();
  return De.test(e);
}
function dt(t, e = !1) {
  if (typeof t == "string") {
    const n = ae(t).toLowerCase();
    if (De.test(n))
      return q(e ? `0x${n}` : n);
  }
  throw m.rpc.invalidParams(`"${String(t)}" is not a hexadecimal string`);
}
function oe(t, e = !1) {
  let n = dt(t, !1);
  return n.length % 2 === 1 && (n = q(`0${n}`)), e ? q(`0x${n}`) : n;
}
function P(t) {
  if (typeof t == "string") {
    const e = ae(t).toLowerCase();
    if (F(e) && e.length === 40)
      return ot(je(e));
  }
  throw m.rpc.invalidParams(`Invalid Ethereum address: ${String(t)}`);
}
function te(t) {
  if (Buffer.isBuffer(t))
    return t;
  if (typeof t == "string") {
    if (F(t)) {
      const e = oe(t, !1);
      return Buffer.from(e, "hex");
    }
    return Buffer.from(t, "utf8");
  }
  throw m.rpc.invalidParams(`Not binary data: ${String(t)}`);
}
function U(t) {
  if (typeof t == "number" && Number.isInteger(t))
    return A(t);
  if (typeof t == "string") {
    if (Ne.test(t))
      return A(Number(t));
    if (F(t))
      return A(Number(BigInt(oe(t, !0))));
  }
  throw m.rpc.invalidParams(`Not an integer: ${String(t)}`);
}
function O(t) {
  if (t !== null && (typeof t == "bigint" || ut(t)))
    return BigInt(t.toString(10));
  if (typeof t == "number")
    return BigInt(U(t));
  if (typeof t == "string") {
    if (Ne.test(t))
      return BigInt(t);
    if (F(t))
      return BigInt(oe(t, !0));
  }
  throw m.rpc.invalidParams(`Not an integer: ${String(t)}`);
}
function lt(t) {
  if (typeof t == "string")
    return JSON.parse(t);
  if (typeof t == "object")
    return t;
  throw m.rpc.invalidParams(`Not a JSON string or an object: ${String(t)}`);
}
function ut(t) {
  if (t == null || typeof t.constructor != "function")
    return !1;
  const { constructor: e } = t;
  return typeof e.config == "function" && typeof e.EUCLID == "number";
}
async function ht() {
  return crypto.subtle.generateKey({
    name: "ECDH",
    namedCurve: "P-256"
  }, !0, ["deriveKey"]);
}
async function ft(t, e) {
  return crypto.subtle.deriveKey({
    name: "ECDH",
    public: e
  }, t, {
    name: "AES-GCM",
    length: 256
  }, !1, ["encrypt", "decrypt"]);
}
async function pt(t, e) {
  const n = crypto.getRandomValues(new Uint8Array(12)), s = await crypto.subtle.encrypt({
    name: "AES-GCM",
    iv: n
  }, t, new TextEncoder().encode(e));
  return { iv: n, cipherText: s };
}
async function gt(t, { iv: e, cipherText: n }) {
  const s = await crypto.subtle.decrypt({
    name: "AES-GCM",
    iv: e
  }, t, n);
  return new TextDecoder().decode(s);
}
function Ue(t) {
  switch (t) {
    case "public":
      return "spki";
    case "private":
      return "pkcs8";
  }
}
async function We(t, e) {
  const n = Ue(t), s = await crypto.subtle.exportKey(n, e);
  return re(new Uint8Array(s));
}
async function qe(t, e) {
  const n = Ue(t), s = z(e).buffer;
  return await crypto.subtle.importKey(n, new Uint8Array(s), {
    name: "ECDH",
    namedCurve: "P-256"
  }, !0, t === "private" ? ["deriveKey"] : []);
}
async function mt(t, e) {
  const n = JSON.stringify(t, (s, r) => {
    if (!(r instanceof Error))
      return r;
    const i = r;
    return Object.assign(Object.assign({}, i.code ? { code: i.code } : {}), { message: i.message });
  });
  return pt(e, n);
}
async function bt(t, e) {
  return JSON.parse(await gt(e, t));
}
const G = {
  storageKey: "ownPrivateKey",
  keyType: "private"
}, Y = {
  storageKey: "ownPublicKey",
  keyType: "public"
}, $ = {
  storageKey: "peerPublicKey",
  keyType: "public"
};
class wt {
  constructor() {
    this.storage = new M("CBWSDK", "SCWKeyManager"), this.ownPrivateKey = null, this.ownPublicKey = null, this.peerPublicKey = null, this.sharedSecret = null;
  }
  async getOwnPublicKey() {
    return await this.loadKeysIfNeeded(), this.ownPublicKey;
  }
  // returns null if the shared secret is not yet derived
  async getSharedSecret() {
    return await this.loadKeysIfNeeded(), this.sharedSecret;
  }
  async setPeerPublicKey(e) {
    this.sharedSecret = null, this.peerPublicKey = e, await this.storeKey($, e), await this.loadKeysIfNeeded();
  }
  async clear() {
    this.ownPrivateKey = null, this.ownPublicKey = null, this.peerPublicKey = null, this.sharedSecret = null, this.storage.removeItem(Y.storageKey), this.storage.removeItem(G.storageKey), this.storage.removeItem($.storageKey);
  }
  async generateKeyPair() {
    const e = await ht();
    this.ownPrivateKey = e.privateKey, this.ownPublicKey = e.publicKey, await this.storeKey(G, e.privateKey), await this.storeKey(Y, e.publicKey);
  }
  async loadKeysIfNeeded() {
    if (this.ownPrivateKey === null && (this.ownPrivateKey = await this.loadKey(G)), this.ownPublicKey === null && (this.ownPublicKey = await this.loadKey(Y)), (this.ownPrivateKey === null || this.ownPublicKey === null) && await this.generateKeyPair(), this.peerPublicKey === null && (this.peerPublicKey = await this.loadKey($)), this.sharedSecret === null) {
      if (this.ownPrivateKey === null || this.peerPublicKey === null)
        return;
      this.sharedSecret = await ft(this.ownPrivateKey, this.peerPublicKey);
    }
  }
  // storage methods
  async loadKey(e) {
    const n = this.storage.getItem(e.storageKey);
    return n ? qe(e.keyType, n) : null;
  }
  async storeKey(e, n) {
    const s = await We(e.keyType, n);
    this.storage.setItem(e.storageKey, s);
  }
}
const K = "4.3.0", Ke = "@coinbase/wallet-sdk";
async function ce(t, e) {
  const n = Object.assign(Object.assign({}, t), { jsonrpc: "2.0", id: crypto.randomUUID() }), s = await window.fetch(e, {
    method: "POST",
    body: JSON.stringify(n),
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "X-Cbw-Sdk-Version": K,
      "X-Cbw-Sdk-Platform": Ke
    }
  }), { result: r, error: i } = await s.json();
  if (i)
    throw i;
  return r;
}
function yt() {
  return globalThis.coinbaseWalletExtension;
}
function kt() {
  var t, e;
  try {
    const n = globalThis;
    return (t = n.ethereum) !== null && t !== void 0 ? t : (e = n.top) === null || e === void 0 ? void 0 : e.ethereum;
  } catch {
    return;
  }
}
function Et({ metadata: t, preference: e }) {
  var n, s;
  const { appName: r, appLogoUrl: i, appChainIds: a } = t;
  if (e.options !== "smartWalletOnly") {
    const l = yt();
    if (l)
      return (n = l.setAppInfo) === null || n === void 0 || n.call(l, r, i, a, e), l;
  }
  const c = kt();
  if (c != null && c.isCoinbaseBrowser)
    return (s = c.setAppInfo) === null || s === void 0 || s.call(c, r, i, a, e), c;
}
function It(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw m.rpc.invalidParams({
      message: "Expected a single, non-array, object argument.",
      data: t
    });
  const { method: e, params: n } = t;
  if (typeof e != "string" || e.length === 0)
    throw m.rpc.invalidParams({
      message: "'args.method' must be a non-empty string.",
      data: t
    });
  if (n !== void 0 && !Array.isArray(n) && (typeof n != "object" || n === null))
    throw m.rpc.invalidParams({
      message: "'args.params' must be an object or array if provided.",
      data: t
    });
  switch (e) {
    case "eth_sign":
    case "eth_signTypedData_v2":
    case "eth_subscribe":
    case "eth_unsubscribe":
      throw m.provider.unsupportedMethod();
  }
}
const he = "accounts", fe = "activeChain", pe = "availableChains", ge = "walletCapabilities";
class vt {
  constructor(e) {
    var n, s, r;
    this.metadata = e.metadata, this.communicator = e.communicator, this.callback = e.callback, this.keyManager = new wt(), this.storage = new M("CBWSDK", "SCWStateManager"), this.accounts = (n = this.storage.loadObject(he)) !== null && n !== void 0 ? n : [], this.chain = this.storage.loadObject(fe) || {
      id: (r = (s = e.metadata.appChainIds) === null || s === void 0 ? void 0 : s[0]) !== null && r !== void 0 ? r : 1
    }, this.handshake = this.handshake.bind(this), this.request = this.request.bind(this), this.createRequestMessage = this.createRequestMessage.bind(this), this.decryptResponseMessage = this.decryptResponseMessage.bind(this);
  }
  async handshake(e) {
    var n, s, r, i;
    await ((s = (n = this.communicator).waitForPopupLoaded) === null || s === void 0 ? void 0 : s.call(n));
    const a = await this.createRequestMessage({
      handshake: {
        method: e.method,
        params: Object.assign({}, this.metadata, (r = e.params) !== null && r !== void 0 ? r : {})
      }
    }), c = await this.communicator.postRequestAndWaitForResponse(a);
    if ("failure" in c.content)
      throw c.content.failure;
    const l = await qe("public", c.sender);
    await this.keyManager.setPeerPublicKey(l);
    const f = (await this.decryptResponseMessage(c)).result;
    if ("error" in f)
      throw f.error;
    switch (e.method) {
      case "eth_requestAccounts": {
        const p = f.value;
        this.accounts = p, this.storage.storeObject(he, p), (i = this.callback) === null || i === void 0 || i.call(this, "accountsChanged", p);
        break;
      }
    }
  }
  async request(e) {
    var n;
    if (this.accounts.length === 0)
      switch (e.method) {
        case "wallet_sendCalls":
          return this.sendRequestToPopup(e);
        default:
          throw m.provider.unauthorized();
      }
    switch (e.method) {
      case "eth_requestAccounts":
        return (n = this.callback) === null || n === void 0 || n.call(this, "connect", { chainId: L(this.chain.id) }), this.accounts;
      case "eth_accounts":
        return this.accounts;
      case "eth_coinbase":
        return this.accounts[0];
      case "net_version":
        return this.chain.id;
      case "eth_chainId":
        return L(this.chain.id);
      case "wallet_getCapabilities":
        return this.storage.loadObject(ge);
      case "wallet_switchEthereumChain":
        return this.handleSwitchChainRequest(e);
      case "eth_ecRecover":
      case "personal_sign":
      case "wallet_sign":
      case "personal_ecRecover":
      case "eth_signTransaction":
      case "eth_sendTransaction":
      case "eth_signTypedData_v1":
      case "eth_signTypedData_v3":
      case "eth_signTypedData_v4":
      case "eth_signTypedData":
      case "wallet_addEthereumChain":
      case "wallet_watchAsset":
      case "wallet_sendCalls":
      case "wallet_showCallsStatus":
      case "wallet_grantPermissions":
        return this.sendRequestToPopup(e);
      default:
        if (!this.chain.rpcUrl)
          throw m.rpc.internal("No RPC URL set for chain");
        return ce(e, this.chain.rpcUrl);
    }
  }
  async sendRequestToPopup(e) {
    var n, s;
    await ((s = (n = this.communicator).waitForPopupLoaded) === null || s === void 0 ? void 0 : s.call(n));
    const r = await this.sendEncryptedRequest(e), a = (await this.decryptResponseMessage(r)).result;
    if ("error" in a)
      throw a.error;
    return a.value;
  }
  async cleanup() {
    var e, n;
    this.storage.clear(), await this.keyManager.clear(), this.accounts = [], this.chain = {
      id: (n = (e = this.metadata.appChainIds) === null || e === void 0 ? void 0 : e[0]) !== null && n !== void 0 ? n : 1
    };
  }
  /**
   * @returns `null` if the request was successful.
   * https://eips.ethereum.org/EIPS/eip-3326#wallet_switchethereumchain
   */
  async handleSwitchChainRequest(e) {
    var n;
    const s = e.params;
    if (!s || !(!((n = s[0]) === null || n === void 0) && n.chainId))
      throw m.rpc.invalidParams();
    const r = U(s[0].chainId);
    if (this.updateChain(r))
      return null;
    const a = await this.sendRequestToPopup(e);
    return a === null && this.updateChain(r), a;
  }
  async sendEncryptedRequest(e) {
    const n = await this.keyManager.getSharedSecret();
    if (!n)
      throw m.provider.unauthorized("No valid session found, try requestAccounts before other methods");
    const s = await mt({
      action: e,
      chainId: this.chain.id
    }, n), r = await this.createRequestMessage({ encrypted: s });
    return this.communicator.postRequestAndWaitForResponse(r);
  }
  async createRequestMessage(e) {
    const n = await We("public", await this.keyManager.getOwnPublicKey());
    return {
      id: crypto.randomUUID(),
      sender: n,
      content: e,
      timestamp: /* @__PURE__ */ new Date()
    };
  }
  async decryptResponseMessage(e) {
    var n, s;
    const r = e.content;
    if ("failure" in r)
      throw r.failure;
    const i = await this.keyManager.getSharedSecret();
    if (!i)
      throw m.provider.unauthorized("Invalid session");
    const a = await bt(r.encrypted, i), c = (n = a.data) === null || n === void 0 ? void 0 : n.chains;
    if (c) {
      const h = Object.entries(c).map(([f, p]) => ({
        id: Number(f),
        rpcUrl: p
      }));
      this.storage.storeObject(pe, h), this.updateChain(this.chain.id, h);
    }
    const l = (s = a.data) === null || s === void 0 ? void 0 : s.capabilities;
    return l && this.storage.storeObject(ge, l), a;
  }
  updateChain(e, n) {
    var s;
    const r = n ?? this.storage.loadObject(pe), i = r == null ? void 0 : r.find((a) => a.id === e);
    return i ? (i !== this.chain && (this.chain = i, this.storage.storeObject(fe, i), (s = this.callback) === null || s === void 0 || s.call(this, "chainChanged", L(i.id))), !0) : !1;
  }
}
var J, me;
function Be() {
  if (me) return J;
  me = 1;
  const { keccak_256: t } = /* @__PURE__ */ tt();
  function e(o) {
    return Buffer.allocUnsafe(o).fill(0);
  }
  function n(o) {
    return o.toString(2).length;
  }
  function s(o, u) {
    let b = o.toString(16);
    b.length % 2 !== 0 && (b = "0" + b);
    const g = b.match(/.{1,2}/g).map((k) => parseInt(k, 16));
    for (; g.length < u; )
      g.unshift(0);
    return Buffer.from(g);
  }
  function r(o, u) {
    const b = o < 0n;
    let g;
    if (b) {
      const k = (1n << BigInt(u)) - 1n;
      g = (~o & k) + 1n;
    } else
      g = o;
    return g &= (1n << BigInt(u)) - 1n, g;
  }
  function i(o, u, b) {
    const g = e(u);
    return o = c(o), b ? o.length < u ? (o.copy(g), g) : o.slice(0, u) : o.length < u ? (o.copy(g, u - o.length), g) : o.slice(-u);
  }
  function a(o, u) {
    return i(o, u, !0);
  }
  function c(o) {
    if (!Buffer.isBuffer(o))
      if (Array.isArray(o))
        o = Buffer.from(o);
      else if (typeof o == "string")
        p(o) ? o = Buffer.from(f(d(o)), "hex") : o = Buffer.from(o);
      else if (typeof o == "number")
        o = intToBuffer(o);
      else if (o == null)
        o = Buffer.allocUnsafe(0);
      else if (typeof o == "bigint")
        o = s(o);
      else if (o.toArray)
        o = Buffer.from(o.toArray());
      else
        throw new Error("invalid type");
    return o;
  }
  function l(o) {
    return o = c(o), "0x" + o.toString("hex");
  }
  function h(o, u) {
    if (o = c(o), u || (u = 256), u !== 256)
      throw new Error("unsupported");
    return Buffer.from(t(new Uint8Array(o)));
  }
  function f(o) {
    return o.length % 2 ? "0" + o : o;
  }
  function p(o) {
    return typeof o == "string" && o.match(/^0x[0-9A-Fa-f]*$/);
  }
  function d(o) {
    return typeof o == "string" && o.startsWith("0x") ? o.slice(2) : o;
  }
  return J = {
    zeros: e,
    setLength: i,
    setLengthRight: a,
    isHexString: p,
    stripHexPrefix: d,
    toBuffer: c,
    bufferToHex: l,
    keccak: h,
    bitLengthFromBigInt: n,
    bufferBEFromBigInt: s,
    twosFromBigInt: r
  }, J;
}
var V, be;
function St() {
  if (be) return V;
  be = 1;
  const t = /* @__PURE__ */ Be();
  function e(d) {
    return d.startsWith("int[") ? "int256" + d.slice(3) : d === "int" ? "int256" : d.startsWith("uint[") ? "uint256" + d.slice(4) : d === "uint" ? "uint256" : d.startsWith("fixed[") ? "fixed128x128" + d.slice(5) : d === "fixed" ? "fixed128x128" : d.startsWith("ufixed[") ? "ufixed128x128" + d.slice(6) : d === "ufixed" ? "ufixed128x128" : d;
  }
  function n(d) {
    return Number.parseInt(/^\D+(\d+)$/.exec(d)[1], 10);
  }
  function s(d) {
    var o = /^\D+(\d+)x(\d+)$/.exec(d);
    return [Number.parseInt(o[1], 10), Number.parseInt(o[2], 10)];
  }
  function r(d) {
    var o = d.match(/(.*)\[(.*?)\]$/);
    return o ? o[2] === "" ? "dynamic" : Number.parseInt(o[2], 10) : null;
  }
  function i(d) {
    var o = typeof d;
    if (o === "string" || o === "number")
      return BigInt(d);
    if (o === "bigint")
      return d;
    throw new Error("Argument is not a number");
  }
  function a(d, o) {
    var u, b, g, k;
    if (d === "address")
      return a("uint160", i(o));
    if (d === "bool")
      return a("uint8", o ? 1 : 0);
    if (d === "string")
      return a("bytes", new Buffer(o, "utf8"));
    if (l(d)) {
      if (typeof o.length > "u")
        throw new Error("Not an array?");
      if (u = r(d), u !== "dynamic" && u !== 0 && o.length > u)
        throw new Error("Elements exceed array size: " + u);
      g = [], d = d.slice(0, d.lastIndexOf("[")), typeof o == "string" && (o = JSON.parse(o));
      for (k in o)
        g.push(a(d, o[k]));
      if (u === "dynamic") {
        var I = a("uint256", o.length);
        g.unshift(I);
      }
      return Buffer.concat(g);
    } else {
      if (d === "bytes")
        return o = new Buffer(o), g = Buffer.concat([a("uint256", o.length), o]), o.length % 32 !== 0 && (g = Buffer.concat([g, t.zeros(32 - o.length % 32)])), g;
      if (d.startsWith("bytes")) {
        if (u = n(d), u < 1 || u > 32)
          throw new Error("Invalid bytes<N> width: " + u);
        return t.setLengthRight(o, 32);
      } else if (d.startsWith("uint")) {
        if (u = n(d), u % 8 || u < 8 || u > 256)
          throw new Error("Invalid uint<N> width: " + u);
        b = i(o);
        const v = t.bitLengthFromBigInt(b);
        if (v > u)
          throw new Error("Supplied uint exceeds width: " + u + " vs " + v);
        if (b < 0)
          throw new Error("Supplied uint is negative");
        return t.bufferBEFromBigInt(b, 32);
      } else if (d.startsWith("int")) {
        if (u = n(d), u % 8 || u < 8 || u > 256)
          throw new Error("Invalid int<N> width: " + u);
        b = i(o);
        const v = t.bitLengthFromBigInt(b);
        if (v > u)
          throw new Error("Supplied int exceeds width: " + u + " vs " + v);
        const C = t.twosFromBigInt(b, 256);
        return t.bufferBEFromBigInt(C, 32);
      } else if (d.startsWith("ufixed")) {
        if (u = s(d), b = i(o), b < 0)
          throw new Error("Supplied ufixed is negative");
        return a("uint256", b * BigInt(2) ** BigInt(u[1]));
      } else if (d.startsWith("fixed"))
        return u = s(d), a("int256", i(o) * BigInt(2) ** BigInt(u[1]));
    }
    throw new Error("Unsupported or invalid type: " + d);
  }
  function c(d) {
    return d === "string" || d === "bytes" || r(d) === "dynamic";
  }
  function l(d) {
    return d.lastIndexOf("]") === d.length - 1;
  }
  function h(d, o) {
    var u = [], b = [], g = 32 * d.length;
    for (var k in d) {
      var I = e(d[k]), v = o[k], C = a(I, v);
      c(I) ? (u.push(a("uint256", g)), b.push(C), g += C.length) : u.push(C);
    }
    return Buffer.concat(u.concat(b));
  }
  function f(d, o) {
    if (d.length !== o.length)
      throw new Error("Number of types are not matching the values");
    for (var u, b, g = [], k = 0; k < d.length; k++) {
      var I = e(d[k]), v = o[k];
      if (I === "bytes")
        g.push(v);
      else if (I === "string")
        g.push(new Buffer(v, "utf8"));
      else if (I === "bool")
        g.push(new Buffer(v ? "01" : "00", "hex"));
      else if (I === "address")
        g.push(t.setLength(v, 20));
      else if (I.startsWith("bytes")) {
        if (u = n(I), u < 1 || u > 32)
          throw new Error("Invalid bytes<N> width: " + u);
        g.push(t.setLengthRight(v, u));
      } else if (I.startsWith("uint")) {
        if (u = n(I), u % 8 || u < 8 || u > 256)
          throw new Error("Invalid uint<N> width: " + u);
        b = i(v);
        const C = t.bitLengthFromBigInt(b);
        if (C > u)
          throw new Error("Supplied uint exceeds width: " + u + " vs " + C);
        g.push(t.bufferBEFromBigInt(b, u / 8));
      } else if (I.startsWith("int")) {
        if (u = n(I), u % 8 || u < 8 || u > 256)
          throw new Error("Invalid int<N> width: " + u);
        b = i(v);
        const C = t.bitLengthFromBigInt(b);
        if (C > u)
          throw new Error("Supplied int exceeds width: " + u + " vs " + C);
        const Ve = t.twosFromBigInt(b, u);
        g.push(t.bufferBEFromBigInt(Ve, u / 8));
      } else
        throw new Error("Unsupported or invalid type: " + I);
    }
    return Buffer.concat(g);
  }
  function p(d, o) {
    return t.keccak(f(d, o));
  }
  return V = {
    rawEncode: h,
    solidityPack: f,
    soliditySHA3: p
  }, V;
}
var Q, we;
function Ct() {
  if (we) return Q;
  we = 1;
  const t = /* @__PURE__ */ Be(), e = /* @__PURE__ */ St(), n = {
    type: "object",
    properties: {
      types: {
        type: "object",
        additionalProperties: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              type: { type: "string" }
            },
            required: ["name", "type"]
          }
        }
      },
      primaryType: { type: "string" },
      domain: { type: "object" },
      message: { type: "object" }
    },
    required: ["types", "primaryType", "domain", "message"]
  }, s = {
    /**
     * Encodes an object by encoding and concatenating each of its members
     *
     * @param {string} primaryType - Root type
     * @param {Object} data - Object to encode
     * @param {Object} types - Type definitions
     * @returns {string} - Encoded representation of an object
     */
    encodeData(i, a, c, l = !0) {
      const h = ["bytes32"], f = [this.hashType(i, c)];
      if (l) {
        const p = (d, o, u) => {
          if (c[o] !== void 0)
            return ["bytes32", u == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : t.keccak(this.encodeData(o, u, c, l))];
          if (u === void 0)
            throw new Error(`missing value for field ${d} of type ${o}`);
          if (o === "bytes")
            return ["bytes32", t.keccak(u)];
          if (o === "string")
            return typeof u == "string" && (u = Buffer.from(u, "utf8")), ["bytes32", t.keccak(u)];
          if (o.lastIndexOf("]") === o.length - 1) {
            const b = o.slice(0, o.lastIndexOf("[")), g = u.map((k) => p(d, b, k));
            return ["bytes32", t.keccak(e.rawEncode(
              g.map(([k]) => k),
              g.map(([, k]) => k)
            ))];
          }
          return [o, u];
        };
        for (const d of c[i]) {
          const [o, u] = p(d.name, d.type, a[d.name]);
          h.push(o), f.push(u);
        }
      } else
        for (const p of c[i]) {
          let d = a[p.name];
          if (d !== void 0)
            if (p.type === "bytes")
              h.push("bytes32"), d = t.keccak(d), f.push(d);
            else if (p.type === "string")
              h.push("bytes32"), typeof d == "string" && (d = Buffer.from(d, "utf8")), d = t.keccak(d), f.push(d);
            else if (c[p.type] !== void 0)
              h.push("bytes32"), d = t.keccak(this.encodeData(p.type, d, c, l)), f.push(d);
            else {
              if (p.type.lastIndexOf("]") === p.type.length - 1)
                throw new Error("Arrays currently unimplemented in encodeData");
              h.push(p.type), f.push(d);
            }
        }
      return e.rawEncode(h, f);
    },
    /**
     * Encodes the type of an object by encoding a comma delimited list of its members
     *
     * @param {string} primaryType - Root type to encode
     * @param {Object} types - Type definitions
     * @returns {string} - Encoded representation of the type of an object
     */
    encodeType(i, a) {
      let c = "", l = this.findTypeDependencies(i, a).filter((h) => h !== i);
      l = [i].concat(l.sort());
      for (const h of l) {
        if (!a[h])
          throw new Error("No type definition specified: " + h);
        c += h + "(" + a[h].map(({ name: p, type: d }) => d + " " + p).join(",") + ")";
      }
      return c;
    },
    /**
     * Finds all types within a type definition object
     *
     * @param {string} primaryType - Root type
     * @param {Object} types - Type definitions
     * @param {Array} results - current set of accumulated types
     * @returns {Array} - Set of all types found in the type definition
     */
    findTypeDependencies(i, a, c = []) {
      if (i = i.match(/^\w*/)[0], c.includes(i) || a[i] === void 0)
        return c;
      c.push(i);
      for (const l of a[i])
        for (const h of this.findTypeDependencies(l.type, a, c))
          !c.includes(h) && c.push(h);
      return c;
    },
    /**
     * Hashes an object
     *
     * @param {string} primaryType - Root type
     * @param {Object} data - Object to hash
     * @param {Object} types - Type definitions
     * @returns {Buffer} - Hash of an object
     */
    hashStruct(i, a, c, l = !0) {
      return t.keccak(this.encodeData(i, a, c, l));
    },
    /**
     * Hashes the type of an object
     *
     * @param {string} primaryType - Root type to hash
     * @param {Object} types - Type definitions
     * @returns {string} - Hash of an object
     */
    hashType(i, a) {
      return t.keccak(this.encodeType(i, a));
    },
    /**
     * Removes properties from a message object that are not defined per EIP-712
     *
     * @param {Object} data - typed message object
     * @returns {Object} - typed message object with only allowed fields
     */
    sanitizeData(i) {
      const a = {};
      for (const c in n.properties)
        i[c] && (a[c] = i[c]);
      return a.types && (a.types = Object.assign({ EIP712Domain: [] }, a.types)), a;
    },
    /**
     * Returns the hash of a typed message as per EIP-712 for signing
     *
     * @param {Object} typedData - Types message data to sign
     * @returns {string} - sha3 hash for signing
     */
    hash(i, a = !0) {
      const c = this.sanitizeData(i), l = [Buffer.from("1901", "hex")];
      return l.push(this.hashStruct("EIP712Domain", c.domain, c.types, a)), c.primaryType !== "EIP712Domain" && l.push(this.hashStruct(c.primaryType, c.message, c.types, a)), t.keccak(Buffer.concat(l));
    }
  };
  Q = {
    TYPED_MESSAGE_SCHEMA: n,
    TypedDataUtils: s,
    hashForSignTypedDataLegacy: function(i) {
      return r(i.data);
    },
    hashForSignTypedData_v3: function(i) {
      return s.hash(i.data, !1);
    },
    hashForSignTypedData_v4: function(i) {
      return s.hash(i.data);
    }
  };
  function r(i) {
    const a = new Error("Expect argument to be non-empty array");
    if (typeof i != "object" || !i.length) throw a;
    const c = i.map(function(f) {
      return f.type === "bytes" ? t.toBuffer(f.value) : f.value;
    }), l = i.map(function(f) {
      return f.type;
    }), h = i.map(function(f) {
      if (!f.name) throw a;
      return f.type + " " + f.name;
    });
    return e.soliditySHA3(
      ["bytes32", "bytes32"],
      [
        e.soliditySHA3(new Array(i.length).fill("string"), h),
        e.soliditySHA3(l, c)
      ]
    );
  }
  return Q;
}
var _t = /* @__PURE__ */ Ct();
const B = /* @__PURE__ */ Qe(_t), Mt = "walletUsername", ne = "Addresses", At = "AppVersion";
function E(t) {
  return t.errorMessage !== void 0;
}
class xt {
  // @param secret hex representation of 32-byte secret
  constructor(e) {
    this.secret = e;
  }
  /**
   *
   * @param plainText string to be encrypted
   * returns hex string representation of bytes in the order: initialization vector (iv),
   * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes. Remaining bytes are the
   * encrypted plainText.
   */
  async encrypt(e) {
    const n = this.secret;
    if (n.length !== 64)
      throw Error("secret must be 256 bits");
    const s = crypto.getRandomValues(new Uint8Array(12)), r = await crypto.subtle.importKey("raw", z(n), { name: "aes-gcm" }, !1, ["encrypt", "decrypt"]), i = new TextEncoder(), a = await window.crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: s
    }, r, i.encode(e)), c = 16, l = a.slice(a.byteLength - c), h = a.slice(0, a.byteLength - c), f = new Uint8Array(l), p = new Uint8Array(h), d = new Uint8Array([...s, ...f, ...p]);
    return re(d);
  }
  /**
   *
   * @param cipherText hex string representation of bytes in the order: initialization vector (iv),
   * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes.
   */
  async decrypt(e) {
    const n = this.secret;
    if (n.length !== 64)
      throw Error("secret must be 256 bits");
    return new Promise((s, r) => {
      (async function() {
        const i = await crypto.subtle.importKey("raw", z(n), { name: "aes-gcm" }, !1, ["encrypt", "decrypt"]), a = z(e), c = a.slice(0, 12), l = a.slice(12, 28), h = a.slice(28), f = new Uint8Array([...h, ...l]), p = {
          name: "AES-GCM",
          iv: new Uint8Array(c)
        };
        try {
          const d = await window.crypto.subtle.decrypt(p, i, f), o = new TextDecoder();
          s(o.decode(d));
        } catch (d) {
          r(d);
        }
      })();
    });
  }
}
class Rt {
  constructor(e, n, s) {
    this.linkAPIUrl = e, this.sessionId = n;
    const r = `${n}:${s}`;
    this.auth = `Basic ${btoa(r)}`;
  }
  // mark unseen events as seen
  async markUnseenEventsAsSeen(e) {
    return Promise.all(e.map((n) => fetch(`${this.linkAPIUrl}/events/${n.eventId}/seen`, {
      method: "POST",
      headers: {
        Authorization: this.auth
      }
    }))).catch((n) => console.error("Unabled to mark event as failed:", n));
  }
  async fetchUnseenEvents() {
    var e;
    const n = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
      headers: {
        Authorization: this.auth
      }
    });
    if (n.ok) {
      const { events: s, error: r } = await n.json();
      if (r)
        throw new Error(`Check unseen events failed: ${r}`);
      const i = (e = s == null ? void 0 : s.filter((a) => a.event === "Web3Response").map((a) => ({
        type: "Event",
        sessionId: this.sessionId,
        eventId: a.id,
        event: a.event,
        data: a.data
      }))) !== null && e !== void 0 ? e : [];
      return this.markUnseenEventsAsSeen(i), i;
    }
    throw new Error(`Check unseen events failed: ${n.status}`);
  }
}
var R;
(function(t) {
  t[t.DISCONNECTED = 0] = "DISCONNECTED", t[t.CONNECTING = 1] = "CONNECTING", t[t.CONNECTED = 2] = "CONNECTED";
})(R || (R = {}));
class Pt {
  setConnectionStateListener(e) {
    this.connectionStateListener = e;
  }
  setIncomingDataListener(e) {
    this.incomingDataListener = e;
  }
  /**
   * Constructor
   * @param url WebSocket server URL
   * @param [WebSocketClass] Custom WebSocket implementation
   */
  constructor(e, n = WebSocket) {
    this.WebSocketClass = n, this.webSocket = null, this.pendingData = [], this.url = e.replace(/^http/, "ws");
  }
  /**
   * Make a websocket connection
   * @returns a Promise that resolves when connected
   */
  async connect() {
    if (this.webSocket)
      throw new Error("webSocket object is not null");
    return new Promise((e, n) => {
      var s;
      let r;
      try {
        this.webSocket = r = new this.WebSocketClass(this.url);
      } catch (i) {
        n(i);
        return;
      }
      (s = this.connectionStateListener) === null || s === void 0 || s.call(this, R.CONNECTING), r.onclose = (i) => {
        var a;
        this.clearWebSocket(), n(new Error(`websocket error ${i.code}: ${i.reason}`)), (a = this.connectionStateListener) === null || a === void 0 || a.call(this, R.DISCONNECTED);
      }, r.onopen = (i) => {
        var a;
        e(), (a = this.connectionStateListener) === null || a === void 0 || a.call(this, R.CONNECTED), this.pendingData.length > 0 && ([...this.pendingData].forEach((l) => this.sendData(l)), this.pendingData = []);
      }, r.onmessage = (i) => {
        var a, c;
        if (i.data === "h")
          (a = this.incomingDataListener) === null || a === void 0 || a.call(this, {
            type: "Heartbeat"
          });
        else
          try {
            const l = JSON.parse(i.data);
            (c = this.incomingDataListener) === null || c === void 0 || c.call(this, l);
          } catch {
          }
      };
    });
  }
  /**
   * Disconnect from server
   */
  disconnect() {
    var e;
    const { webSocket: n } = this;
    if (n) {
      this.clearWebSocket(), (e = this.connectionStateListener) === null || e === void 0 || e.call(this, R.DISCONNECTED), this.connectionStateListener = void 0, this.incomingDataListener = void 0;
      try {
        n.close();
      } catch {
      }
    }
  }
  /**
   * Send data to server
   * @param data text to send
   */
  sendData(e) {
    const { webSocket: n } = this;
    if (!n) {
      this.pendingData.push(e), this.connect();
      return;
    }
    n.send(e);
  }
  clearWebSocket() {
    const { webSocket: e } = this;
    e && (this.webSocket = null, e.onclose = null, e.onerror = null, e.onmessage = null, e.onopen = null);
  }
}
const ye = 1e4, Lt = 6e4;
class Tt {
  /**
   * Constructor
   * @param session Session
   * @param linkAPIUrl Coinbase Wallet link server URL
   * @param listener WalletLinkConnectionUpdateListener
   * @param [WebSocketClass] Custom WebSocket implementation
   */
  constructor({ session: e, linkAPIUrl: n, listener: s }) {
    this.destroyed = !1, this.lastHeartbeatResponse = 0, this.nextReqId = A(1), this._connected = !1, this._linked = !1, this.shouldFetchUnseenEventsOnConnect = !1, this.requestResolutions = /* @__PURE__ */ new Map(), this.handleSessionMetadataUpdated = (i) => {
      if (!i)
        return;
      (/* @__PURE__ */ new Map([
        ["__destroyed", this.handleDestroyed],
        ["EthereumAddress", this.handleAccountUpdated],
        ["WalletUsername", this.handleWalletUsernameUpdated],
        ["AppVersion", this.handleAppVersionUpdated],
        [
          "ChainId",
          // ChainId and JsonRpcUrl are always updated together
          (c) => i.JsonRpcUrl && this.handleChainUpdated(c, i.JsonRpcUrl)
        ]
      ])).forEach((c, l) => {
        const h = i[l];
        h !== void 0 && c(h);
      });
    }, this.handleDestroyed = (i) => {
      var a;
      i === "1" && ((a = this.listener) === null || a === void 0 || a.resetAndReload());
    }, this.handleAccountUpdated = async (i) => {
      var a;
      const c = await this.cipher.decrypt(i);
      (a = this.listener) === null || a === void 0 || a.accountUpdated(c);
    }, this.handleMetadataUpdated = async (i, a) => {
      var c;
      const l = await this.cipher.decrypt(a);
      (c = this.listener) === null || c === void 0 || c.metadataUpdated(i, l);
    }, this.handleWalletUsernameUpdated = async (i) => {
      this.handleMetadataUpdated(Mt, i);
    }, this.handleAppVersionUpdated = async (i) => {
      this.handleMetadataUpdated(At, i);
    }, this.handleChainUpdated = async (i, a) => {
      var c;
      const l = await this.cipher.decrypt(i), h = await this.cipher.decrypt(a);
      (c = this.listener) === null || c === void 0 || c.chainUpdated(l, h);
    }, this.session = e, this.cipher = new xt(e.secret), this.listener = s;
    const r = new Pt(`${n}/rpc`, WebSocket);
    r.setConnectionStateListener(async (i) => {
      let a = !1;
      switch (i) {
        case R.DISCONNECTED:
          if (!this.destroyed) {
            const c = async () => {
              await new Promise((l) => setTimeout(l, 5e3)), this.destroyed || r.connect().catch(() => {
                c();
              });
            };
            c();
          }
          break;
        case R.CONNECTED:
          a = await this.handleConnected(), this.updateLastHeartbeat(), setInterval(() => {
            this.heartbeat();
          }, ye), this.shouldFetchUnseenEventsOnConnect && this.fetchUnseenEventsAPI();
          break;
        case R.CONNECTING:
          break;
      }
      this.connected !== a && (this.connected = a);
    }), r.setIncomingDataListener((i) => {
      var a;
      switch (i.type) {
        // handle server's heartbeat responses
        case "Heartbeat":
          this.updateLastHeartbeat();
          return;
        // handle link status updates
        case "IsLinkedOK":
        case "Linked": {
          const c = i.type === "IsLinkedOK" ? i.linked : void 0;
          this.linked = c || i.onlineGuests > 0;
          break;
        }
        // handle session config updates
        case "GetSessionConfigOK":
        case "SessionConfigUpdated": {
          this.handleSessionMetadataUpdated(i.metadata);
          break;
        }
        case "Event": {
          this.handleIncomingEvent(i);
          break;
        }
      }
      i.id !== void 0 && ((a = this.requestResolutions.get(i.id)) === null || a === void 0 || a(i));
    }), this.ws = r, this.http = new Rt(n, e.id, e.key);
  }
  /**
   * Make a connection to the server
   */
  connect() {
    if (this.destroyed)
      throw new Error("instance is destroyed");
    this.ws.connect();
  }
  /**
   * Terminate connection, and mark as destroyed. To reconnect, create a new
   * instance of WalletSDKConnection
   */
  async destroy() {
    this.destroyed || (await this.makeRequest({
      type: "SetSessionConfig",
      id: A(this.nextReqId++),
      sessionId: this.session.id,
      metadata: { __destroyed: "1" }
    }, { timeout: 1e3 }), this.destroyed = !0, this.ws.disconnect(), this.listener = void 0);
  }
  get connected() {
    return this._connected;
  }
  set connected(e) {
    this._connected = e;
  }
  get linked() {
    return this._linked;
  }
  set linked(e) {
    var n, s;
    this._linked = e, e && ((n = this.onceLinked) === null || n === void 0 || n.call(this)), (s = this.listener) === null || s === void 0 || s.linkedUpdated(e);
  }
  setOnceLinked(e) {
    return new Promise((n) => {
      this.linked ? e().then(n) : this.onceLinked = () => {
        e().then(n), this.onceLinked = void 0;
      };
    });
  }
  async handleIncomingEvent(e) {
    var n;
    if (e.type !== "Event" || e.event !== "Web3Response")
      return;
    const s = await this.cipher.decrypt(e.data), r = JSON.parse(s);
    if (r.type !== "WEB3_RESPONSE")
      return;
    const { id: i, response: a } = r;
    (n = this.listener) === null || n === void 0 || n.handleWeb3ResponseMessage(i, a);
  }
  async checkUnseenEvents() {
    if (!this.connected) {
      this.shouldFetchUnseenEventsOnConnect = !0;
      return;
    }
    await new Promise((e) => setTimeout(e, 250));
    try {
      await this.fetchUnseenEventsAPI();
    } catch (e) {
      console.error("Unable to check for unseen events", e);
    }
  }
  async fetchUnseenEventsAPI() {
    this.shouldFetchUnseenEventsOnConnect = !1, (await this.http.fetchUnseenEvents()).forEach((n) => this.handleIncomingEvent(n));
  }
  /**
   * Publish an event and emit event ID when successful
   * @param event event name
   * @param unencryptedData unencrypted event data
   * @param callWebhook whether the webhook should be invoked
   * @returns a Promise that emits event ID when successful
   */
  async publishEvent(e, n, s = !1) {
    const r = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, n), { origin: location.origin, location: location.href, relaySource: "coinbaseWalletExtension" in window && window.coinbaseWalletExtension ? "injected_sdk" : "sdk" }))), i = {
      type: "PublishEvent",
      id: A(this.nextReqId++),
      sessionId: this.session.id,
      event: e,
      data: r,
      callWebhook: s
    };
    return this.setOnceLinked(async () => {
      const a = await this.makeRequest(i);
      if (a.type === "Fail")
        throw new Error(a.error || "failed to publish event");
      return a.eventId;
    });
  }
  sendData(e) {
    this.ws.sendData(JSON.stringify(e));
  }
  updateLastHeartbeat() {
    this.lastHeartbeatResponse = Date.now();
  }
  heartbeat() {
    if (Date.now() - this.lastHeartbeatResponse > ye * 2) {
      this.ws.disconnect();
      return;
    }
    try {
      this.ws.sendData("h");
    } catch {
    }
  }
  async makeRequest(e, n = { timeout: Lt }) {
    const s = e.id;
    this.sendData(e);
    let r;
    return Promise.race([
      new Promise((i, a) => {
        r = window.setTimeout(() => {
          a(new Error(`request ${s} timed out`));
        }, n.timeout);
      }),
      new Promise((i) => {
        this.requestResolutions.set(s, (a) => {
          clearTimeout(r), i(a), this.requestResolutions.delete(s);
        });
      })
    ]);
  }
  async handleConnected() {
    return (await this.makeRequest({
      type: "HostSession",
      id: A(this.nextReqId++),
      sessionId: this.session.id,
      sessionKey: this.session.key
    })).type === "Fail" ? !1 : (this.sendData({
      type: "IsLinked",
      id: A(this.nextReqId++),
      sessionId: this.session.id
    }), this.sendData({
      type: "GetSessionConfig",
      id: A(this.nextReqId++),
      sessionId: this.session.id
    }), !0);
  }
}
class Nt {
  constructor() {
    this._nextRequestId = 0, this.callbacks = /* @__PURE__ */ new Map();
  }
  makeRequestId() {
    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
    const e = this._nextRequestId, n = je(e.toString(16));
    return this.callbacks.get(n) && this.callbacks.delete(n), e;
  }
}
const ke = "session:id", Ee = "session:secret", Ie = "session:linked";
class D {
  constructor(e, n, s, r = !1) {
    this.storage = e, this.id = n, this.secret = s, this.key = Ze(Xe(`${n}, ${s} WalletLink`)), this._linked = !!r;
  }
  static create(e) {
    const n = T(16), s = T(32);
    return new D(e, n, s).save();
  }
  static load(e) {
    const n = e.getItem(ke), s = e.getItem(Ie), r = e.getItem(Ee);
    return n && r ? new D(e, n, r, s === "1") : null;
  }
  get linked() {
    return this._linked;
  }
  set linked(e) {
    this._linked = e, this.persistLinked();
  }
  save() {
    return this.storage.setItem(ke, this.id), this.storage.setItem(Ee, this.secret), this.persistLinked(), this;
  }
  persistLinked() {
    this.storage.setItem(Ie, this._linked ? "1" : "0");
  }
}
function Dt() {
  try {
    return window.frameElement !== null;
  } catch {
    return !1;
  }
}
function Ot() {
  try {
    return Dt() && window.top ? window.top.location : window.location;
  } catch {
    return window.location;
  }
}
function jt() {
  var t;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((t = window == null ? void 0 : window.navigator) === null || t === void 0 ? void 0 : t.userAgent);
}
function ze() {
  var t, e;
  return (e = (t = window == null ? void 0 : window.matchMedia) === null || t === void 0 ? void 0 : t.call(window, "(prefers-color-scheme: dark)").matches) !== null && e !== void 0 ? e : !1;
}
const Ut = '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}';
function Fe() {
  const t = document.createElement("style");
  t.type = "text/css", t.appendChild(document.createTextNode(Ut)), document.documentElement.appendChild(t);
}
function He(t) {
  var e, n, s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object") if (Array.isArray(t)) for (e = 0; e < t.length; e++) t[e] && (n = He(t[e])) && (s && (s += " "), s += n);
  else for (e in t) t[e] && (s && (s += " "), s += e);
  return s;
}
function W() {
  for (var t, e, n = 0, s = ""; n < arguments.length; ) (t = arguments[n++]) && (e = He(t)) && (s && (s += " "), s += e);
  return s;
}
const Wt = ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}", qt = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+", Kt = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=";
class Bt {
  constructor() {
    this.items = /* @__PURE__ */ new Map(), this.nextItemKey = 0, this.root = null, this.darkMode = ze();
  }
  attach(e) {
    this.root = document.createElement("div"), this.root.className = "-cbwsdk-snackbar-root", e.appendChild(this.root), this.render();
  }
  presentItem(e) {
    const n = this.nextItemKey++;
    return this.items.set(n, e), this.render(), () => {
      this.items.delete(n), this.render();
    };
  }
  clear() {
    this.items.clear(), this.render();
  }
  render() {
    this.root && Z(w(
      "div",
      null,
      w(Ge, { darkMode: this.darkMode }, Array.from(this.items.entries()).map(([e, n]) => w(zt, Object.assign({}, n, { key: e }))))
    ), this.root);
  }
}
const Ge = (t) => w(
  "div",
  { class: W("-cbwsdk-snackbar-container") },
  w("style", null, Wt),
  w("div", { class: "-cbwsdk-snackbar" }, t.children)
), zt = ({ autoExpand: t, message: e, menuItems: n }) => {
  const [s, r] = de(!0), [i, a] = de(t ?? !1);
  nt(() => {
    const l = [
      window.setTimeout(() => {
        r(!1);
      }, 1),
      window.setTimeout(() => {
        a(!0);
      }, 1e4)
    ];
    return () => {
      l.forEach(window.clearTimeout);
    };
  });
  const c = () => {
    a(!i);
  };
  return w(
    "div",
    { class: W("-cbwsdk-snackbar-instance", s && "-cbwsdk-snackbar-instance-hidden", i && "-cbwsdk-snackbar-instance-expanded") },
    w(
      "div",
      { class: "-cbwsdk-snackbar-instance-header", onClick: c },
      w("img", { src: qt, class: "-cbwsdk-snackbar-instance-header-cblogo" }),
      " ",
      w("div", { class: "-cbwsdk-snackbar-instance-header-message" }, e),
      w(
        "div",
        { class: "-gear-container" },
        !i && w(
          "svg",
          { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          w("circle", { cx: "12", cy: "12", r: "12", fill: "#F5F7F8" })
        ),
        w("img", { src: Kt, class: "-gear-icon", title: "Expand" })
      )
    ),
    n && n.length > 0 && w("div", { class: "-cbwsdk-snackbar-instance-menu" }, n.map((l, h) => w(
      "div",
      { class: W("-cbwsdk-snackbar-instance-menu-item", l.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"), onClick: l.onClick, key: h },
      w(
        "svg",
        { width: l.svgWidth, height: l.svgHeight, viewBox: "0 0 10 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        w("path", { "fill-rule": l.defaultFillRule, "clip-rule": l.defaultClipRule, d: l.path, fill: "#AAAAAA" })
      ),
      w("span", { class: W("-cbwsdk-snackbar-instance-menu-item-info", l.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red") }, l.info)
    )))
  );
};
class Ft {
  constructor() {
    this.attached = !1, this.snackbar = new Bt();
  }
  attach() {
    if (this.attached)
      throw new Error("Coinbase Wallet SDK UI is already attached");
    const e = document.documentElement, n = document.createElement("div");
    n.className = "-cbwsdk-css-reset", e.appendChild(n), this.snackbar.attach(n), this.attached = !0, Fe();
  }
  showConnecting(e) {
    let n;
    return e.isUnlinkedErrorState ? n = {
      autoExpand: !0,
      message: "Connection lost",
      menuItems: [
        {
          isRed: !1,
          info: "Reset connection",
          svgWidth: "10",
          svgHeight: "11",
          path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
          onClick: e.onResetConnection
        }
      ]
    } : n = {
      message: "Confirm on phone",
      menuItems: [
        {
          isRed: !0,
          info: "Cancel transaction",
          svgWidth: "11",
          svgHeight: "11",
          path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
          defaultFillRule: "inherit",
          defaultClipRule: "inherit",
          onClick: e.onCancel
        },
        {
          isRed: !1,
          info: "Reset connection",
          svgWidth: "10",
          svgHeight: "11",
          path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
          onClick: e.onResetConnection
        }
      ]
    }, this.snackbar.presentItem(n);
  }
}
const Ht = ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}";
class Gt {
  constructor() {
    this.root = null, this.darkMode = ze();
  }
  attach() {
    const e = document.documentElement;
    this.root = document.createElement("div"), this.root.className = "-cbwsdk-css-reset", e.appendChild(this.root), Fe();
  }
  present(e) {
    this.render(e);
  }
  clear() {
    this.render(null);
  }
  render(e) {
    this.root && (Z(null, this.root), e && Z(w(Yt, Object.assign({}, e, { onDismiss: () => {
      this.clear();
    }, darkMode: this.darkMode })), this.root));
  }
}
const Yt = ({ title: t, buttonText: e, darkMode: n, onButtonClick: s, onDismiss: r }) => {
  const i = n ? "dark" : "light";
  return w(
    Ge,
    { darkMode: n },
    w(
      "div",
      { class: "-cbwsdk-redirect-dialog" },
      w("style", null, Ht),
      w("div", { class: "-cbwsdk-redirect-dialog-backdrop", onClick: r }),
      w(
        "div",
        { class: W("-cbwsdk-redirect-dialog-box", i) },
        w("p", null, t),
        w("button", { onClick: s }, e)
      )
    )
  );
}, $t = "https://keys.coinbase.com/connect", Jt = "http://rpc.wallet.coinbase.com", ve = "https://www.walletlink.org", Vt = "https://go.cb-w.com/walletlink";
class Se {
  constructor() {
    this.attached = !1, this.redirectDialog = new Gt();
  }
  attach() {
    if (this.attached)
      throw new Error("Coinbase Wallet SDK UI is already attached");
    this.redirectDialog.attach(), this.attached = !0;
  }
  redirectToCoinbaseWallet(e) {
    const n = new URL(Vt);
    n.searchParams.append("redirect_url", Ot().href), e && n.searchParams.append("wl_url", e);
    const s = document.createElement("a");
    s.target = "cbw-opener", s.href = n.href, s.rel = "noreferrer noopener", s.click();
  }
  openCoinbaseWalletDeeplink(e) {
    this.redirectDialog.present({
      title: "Redirecting to Coinbase Wallet...",
      buttonText: "Open",
      onButtonClick: () => {
        this.redirectToCoinbaseWallet(e);
      }
    }), setTimeout(() => {
      this.redirectToCoinbaseWallet(e);
    }, 99);
  }
  showConnecting(e) {
    return () => {
      this.redirectDialog.clear();
    };
  }
}
class x {
  constructor(e) {
    this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }, this.isMobileWeb = jt(), this.linkedUpdated = (i) => {
      this.isLinked = i;
      const a = this.storage.getItem(ne);
      if (i && (this._session.linked = i), this.isUnlinkedErrorState = !1, a) {
        const c = a.split(" "), l = this.storage.getItem("IsStandaloneSigning") === "true";
        c[0] !== "" && !i && this._session.linked && !l && (this.isUnlinkedErrorState = !0);
      }
    }, this.metadataUpdated = (i, a) => {
      this.storage.setItem(i, a);
    }, this.chainUpdated = (i, a) => {
      this.chainCallbackParams.chainId === i && this.chainCallbackParams.jsonRpcUrl === a || (this.chainCallbackParams = {
        chainId: i,
        jsonRpcUrl: a
      }, this.chainCallback && this.chainCallback(a, Number.parseInt(i, 10)));
    }, this.accountUpdated = (i) => {
      this.accountsCallback && this.accountsCallback([i]), x.accountRequestCallbackIds.size > 0 && (Array.from(x.accountRequestCallbackIds.values()).forEach((a) => {
        this.invokeCallback(a, {
          method: "requestEthereumAccounts",
          result: [i]
        });
      }), x.accountRequestCallbackIds.clear());
    }, this.resetAndReload = this.resetAndReload.bind(this), this.linkAPIUrl = e.linkAPIUrl, this.storage = e.storage, this.metadata = e.metadata, this.accountsCallback = e.accountsCallback, this.chainCallback = e.chainCallback;
    const { session: n, ui: s, connection: r } = this.subscribe();
    this._session = n, this.connection = r, this.relayEventManager = new Nt(), this.ui = s, this.ui.attach();
  }
  subscribe() {
    const e = D.load(this.storage) || D.create(this.storage), { linkAPIUrl: n } = this, s = new Tt({
      session: e,
      linkAPIUrl: n,
      listener: this
    }), r = this.isMobileWeb ? new Se() : new Ft();
    return s.connect(), { session: e, ui: r, connection: s };
  }
  resetAndReload() {
    this.connection.destroy().then(() => {
      const e = D.load(this.storage);
      (e == null ? void 0 : e.id) === this._session.id && M.clearAll(), document.location.reload();
    }).catch((e) => {
    });
  }
  signEthereumTransaction(e) {
    return this.sendRequest({
      method: "signEthereumTransaction",
      params: {
        fromAddress: e.fromAddress,
        toAddress: e.toAddress,
        weiValue: _(e.weiValue),
        data: j(e.data, !0),
        nonce: e.nonce,
        gasPriceInWei: e.gasPriceInWei ? _(e.gasPriceInWei) : null,
        maxFeePerGas: e.gasPriceInWei ? _(e.gasPriceInWei) : null,
        maxPriorityFeePerGas: e.gasPriceInWei ? _(e.gasPriceInWei) : null,
        gasLimit: e.gasLimit ? _(e.gasLimit) : null,
        chainId: e.chainId,
        shouldSubmit: !1
      }
    });
  }
  signAndSubmitEthereumTransaction(e) {
    return this.sendRequest({
      method: "signEthereumTransaction",
      params: {
        fromAddress: e.fromAddress,
        toAddress: e.toAddress,
        weiValue: _(e.weiValue),
        data: j(e.data, !0),
        nonce: e.nonce,
        gasPriceInWei: e.gasPriceInWei ? _(e.gasPriceInWei) : null,
        maxFeePerGas: e.maxFeePerGas ? _(e.maxFeePerGas) : null,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas ? _(e.maxPriorityFeePerGas) : null,
        gasLimit: e.gasLimit ? _(e.gasLimit) : null,
        chainId: e.chainId,
        shouldSubmit: !0
      }
    });
  }
  submitEthereumTransaction(e, n) {
    return this.sendRequest({
      method: "submitEthereumTransaction",
      params: {
        signedTransaction: j(e, !0),
        chainId: n
      }
    });
  }
  getWalletLinkSession() {
    return this._session;
  }
  sendRequest(e) {
    let n = null;
    const s = T(8), r = (i) => {
      this.publishWeb3RequestCanceledEvent(s), this.handleErrorResponse(s, e.method, i), n == null || n();
    };
    return new Promise((i, a) => {
      n = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: r,
        onResetConnection: this.resetAndReload
        // eslint-disable-line @typescript-eslint/unbound-method
      }), this.relayEventManager.callbacks.set(s, (c) => {
        if (n == null || n(), E(c))
          return a(new Error(c.errorMessage));
        i(c);
      }), this.publishWeb3RequestEvent(s, e);
    });
  }
  publishWeb3RequestEvent(e, n) {
    const s = { type: "WEB3_REQUEST", id: e, request: n };
    this.publishEvent("Web3Request", s, !0).then((r) => {
    }).catch((r) => {
      this.handleWeb3ResponseMessage(s.id, {
        method: n.method,
        errorMessage: r.message
      });
    }), this.isMobileWeb && this.openCoinbaseWalletDeeplink(n.method);
  }
  // copied from MobileRelay
  openCoinbaseWalletDeeplink(e) {
    if (this.ui instanceof Se)
      switch (e) {
        case "requestEthereumAccounts":
        // requestEthereumAccounts is handled via popup
        case "switchEthereumChain":
          return;
        default:
          window.addEventListener("blur", () => {
            window.addEventListener("focus", () => {
              this.connection.checkUnseenEvents();
            }, { once: !0 });
          }, { once: !0 }), this.ui.openCoinbaseWalletDeeplink();
          break;
      }
  }
  publishWeb3RequestCanceledEvent(e) {
    const n = {
      type: "WEB3_REQUEST_CANCELED",
      id: e
    };
    this.publishEvent("Web3RequestCanceled", n, !1).then();
  }
  publishEvent(e, n, s) {
    return this.connection.publishEvent(e, n, s);
  }
  handleWeb3ResponseMessage(e, n) {
    if (n.method === "requestEthereumAccounts") {
      x.accountRequestCallbackIds.forEach((s) => this.invokeCallback(s, n)), x.accountRequestCallbackIds.clear();
      return;
    }
    this.invokeCallback(e, n);
  }
  handleErrorResponse(e, n, s) {
    var r;
    const i = (r = s == null ? void 0 : s.message) !== null && r !== void 0 ? r : "Unspecified error message.";
    this.handleWeb3ResponseMessage(e, {
      method: n,
      errorMessage: i
    });
  }
  invokeCallback(e, n) {
    const s = this.relayEventManager.callbacks.get(e);
    s && (s(n), this.relayEventManager.callbacks.delete(e));
  }
  requestEthereumAccounts() {
    const { appName: e, appLogoUrl: n } = this.metadata, s = {
      method: "requestEthereumAccounts",
      params: {
        appName: e,
        appLogoUrl: n
      }
    }, r = T(8);
    return new Promise((i, a) => {
      this.relayEventManager.callbacks.set(r, (c) => {
        if (E(c))
          return a(new Error(c.errorMessage));
        i(c);
      }), x.accountRequestCallbackIds.add(r), this.publishWeb3RequestEvent(r, s);
    });
  }
  watchAsset(e, n, s, r, i, a) {
    const c = {
      method: "watchAsset",
      params: {
        type: e,
        options: {
          address: n,
          symbol: s,
          decimals: r,
          image: i
        },
        chainId: a
      }
    };
    let l = null;
    const h = T(8), f = (p) => {
      this.publishWeb3RequestCanceledEvent(h), this.handleErrorResponse(h, c.method, p), l == null || l();
    };
    return l = this.ui.showConnecting({
      isUnlinkedErrorState: this.isUnlinkedErrorState,
      onCancel: f,
      onResetConnection: this.resetAndReload
      // eslint-disable-line @typescript-eslint/unbound-method
    }), new Promise((p, d) => {
      this.relayEventManager.callbacks.set(h, (o) => {
        if (l == null || l(), E(o))
          return d(new Error(o.errorMessage));
        p(o);
      }), this.publishWeb3RequestEvent(h, c);
    });
  }
  addEthereumChain(e, n, s, r, i, a) {
    const c = {
      method: "addEthereumChain",
      params: {
        chainId: e,
        rpcUrls: n,
        blockExplorerUrls: r,
        chainName: i,
        iconUrls: s,
        nativeCurrency: a
      }
    };
    let l = null;
    const h = T(8), f = (p) => {
      this.publishWeb3RequestCanceledEvent(h), this.handleErrorResponse(h, c.method, p), l == null || l();
    };
    return l = this.ui.showConnecting({
      isUnlinkedErrorState: this.isUnlinkedErrorState,
      onCancel: f,
      onResetConnection: this.resetAndReload
      // eslint-disable-line @typescript-eslint/unbound-method
    }), new Promise((p, d) => {
      this.relayEventManager.callbacks.set(h, (o) => {
        if (l == null || l(), E(o))
          return d(new Error(o.errorMessage));
        p(o);
      }), this.publishWeb3RequestEvent(h, c);
    });
  }
  switchEthereumChain(e, n) {
    const s = {
      method: "switchEthereumChain",
      params: Object.assign({ chainId: e }, { address: n })
    };
    let r = null;
    const i = T(8), a = (c) => {
      this.publishWeb3RequestCanceledEvent(i), this.handleErrorResponse(i, s.method, c), r == null || r();
    };
    return r = this.ui.showConnecting({
      isUnlinkedErrorState: this.isUnlinkedErrorState,
      onCancel: a,
      onResetConnection: this.resetAndReload
      // eslint-disable-line @typescript-eslint/unbound-method
    }), new Promise((c, l) => {
      this.relayEventManager.callbacks.set(i, (h) => {
        if (r == null || r(), E(h) && h.errorCode)
          return l(m.provider.custom({
            code: h.errorCode,
            message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
          }));
        if (E(h))
          return l(new Error(h.errorMessage));
        c(h);
      }), this.publishWeb3RequestEvent(i, s);
    });
  }
}
x.accountRequestCallbackIds = /* @__PURE__ */ new Set();
const Ce = "DefaultChainId", _e = "DefaultJsonRpcUrl";
class Ye {
  constructor(e) {
    this._relay = null, this._addresses = [], this.metadata = e.metadata, this._storage = new M("walletlink", ve), this.callback = e.callback || null;
    const n = this._storage.getItem(ne);
    if (n) {
      const s = n.split(" ");
      s[0] !== "" && (this._addresses = s.map((r) => P(r)));
    }
    this.initializeRelay();
  }
  getSession() {
    const e = this.initializeRelay(), { id: n, secret: s } = e.getWalletLinkSession();
    return { id: n, secret: s };
  }
  async handshake() {
    await this._eth_requestAccounts();
  }
  get selectedAddress() {
    return this._addresses[0] || void 0;
  }
  get jsonRpcUrl() {
    var e;
    return (e = this._storage.getItem(_e)) !== null && e !== void 0 ? e : void 0;
  }
  set jsonRpcUrl(e) {
    this._storage.setItem(_e, e);
  }
  updateProviderInfo(e, n) {
    var s;
    this.jsonRpcUrl = e;
    const r = this.getChainId();
    this._storage.setItem(Ce, n.toString(10)), U(n) !== r && ((s = this.callback) === null || s === void 0 || s.call(this, "chainChanged", L(n)));
  }
  async watchAsset(e) {
    const n = Array.isArray(e) ? e[0] : e;
    if (!n.type)
      throw m.rpc.invalidParams("Type is required");
    if ((n == null ? void 0 : n.type) !== "ERC20")
      throw m.rpc.invalidParams(`Asset of type '${n.type}' is not supported`);
    if (!(n != null && n.options))
      throw m.rpc.invalidParams("Options are required");
    if (!(n != null && n.options.address))
      throw m.rpc.invalidParams("Address is required");
    const s = this.getChainId(), { address: r, symbol: i, image: a, decimals: c } = n.options, h = await this.initializeRelay().watchAsset(n.type, r, i, c, a, s == null ? void 0 : s.toString());
    return E(h) ? !1 : !!h.result;
  }
  async addEthereumChain(e) {
    var n, s;
    const r = e[0];
    if (((n = r.rpcUrls) === null || n === void 0 ? void 0 : n.length) === 0)
      throw m.rpc.invalidParams("please pass in at least 1 rpcUrl");
    if (!r.chainName || r.chainName.trim() === "")
      throw m.rpc.invalidParams("chainName is a required field");
    if (!r.nativeCurrency)
      throw m.rpc.invalidParams("nativeCurrency is a required field");
    const i = Number.parseInt(r.chainId, 16);
    if (i === this.getChainId())
      return !1;
    const a = this.initializeRelay(), { rpcUrls: c = [], blockExplorerUrls: l = [], chainName: h, iconUrls: f = [], nativeCurrency: p } = r, d = await a.addEthereumChain(i.toString(), c, f, l, h, p);
    if (E(d))
      return !1;
    if (((s = d.result) === null || s === void 0 ? void 0 : s.isApproved) === !0)
      return this.updateProviderInfo(c[0], i), null;
    throw m.rpc.internal("unable to add ethereum chain");
  }
  async switchEthereumChain(e) {
    const n = e[0], s = Number.parseInt(n.chainId, 16), i = await this.initializeRelay().switchEthereumChain(s.toString(10), this.selectedAddress || void 0);
    if (E(i))
      throw i;
    const a = i.result;
    return a.isApproved && a.rpcUrl.length > 0 && this.updateProviderInfo(a.rpcUrl, s), null;
  }
  async cleanup() {
    this.callback = null, this._relay && this._relay.resetAndReload(), this._storage.clear();
  }
  _setAddresses(e, n) {
    var s;
    if (!Array.isArray(e))
      throw new Error("addresses is not an array");
    const r = e.map((i) => P(i));
    JSON.stringify(r) !== JSON.stringify(this._addresses) && (this._addresses = r, (s = this.callback) === null || s === void 0 || s.call(this, "accountsChanged", r), this._storage.setItem(ne, r.join(" ")));
  }
  async request(e) {
    const n = e.params || [];
    switch (e.method) {
      case "eth_accounts":
        return [...this._addresses];
      case "eth_coinbase":
        return this.selectedAddress || null;
      case "net_version":
        return this.getChainId().toString(10);
      case "eth_chainId":
        return L(this.getChainId());
      case "eth_requestAccounts":
        return this._eth_requestAccounts();
      case "eth_ecRecover":
      case "personal_ecRecover":
        return this.ecRecover(e);
      case "personal_sign":
        return this.personalSign(e);
      case "eth_signTransaction":
        return this._eth_signTransaction(n);
      case "eth_sendRawTransaction":
        return this._eth_sendRawTransaction(n);
      case "eth_sendTransaction":
        return this._eth_sendTransaction(n);
      case "eth_signTypedData_v1":
      case "eth_signTypedData_v3":
      case "eth_signTypedData_v4":
      case "eth_signTypedData":
        return this.signTypedData(e);
      case "wallet_addEthereumChain":
        return this.addEthereumChain(n);
      case "wallet_switchEthereumChain":
        return this.switchEthereumChain(n);
      case "wallet_watchAsset":
        return this.watchAsset(n);
      default:
        if (!this.jsonRpcUrl)
          throw m.rpc.internal("No RPC URL set for chain");
        return ce(e, this.jsonRpcUrl);
    }
  }
  _ensureKnownAddress(e) {
    const n = P(e);
    if (!this._addresses.map((r) => P(r)).includes(n))
      throw new Error("Unknown Ethereum address");
  }
  _prepareTransactionParams(e) {
    const n = e.from ? P(e.from) : this.selectedAddress;
    if (!n)
      throw new Error("Ethereum address is unavailable");
    this._ensureKnownAddress(n);
    const s = e.to ? P(e.to) : null, r = e.value != null ? O(e.value) : BigInt(0), i = e.data ? te(e.data) : Buffer.alloc(0), a = e.nonce != null ? U(e.nonce) : null, c = e.gasPrice != null ? O(e.gasPrice) : null, l = e.maxFeePerGas != null ? O(e.maxFeePerGas) : null, h = e.maxPriorityFeePerGas != null ? O(e.maxPriorityFeePerGas) : null, f = e.gas != null ? O(e.gas) : null, p = e.chainId ? U(e.chainId) : this.getChainId();
    return {
      fromAddress: n,
      toAddress: s,
      weiValue: r,
      data: i,
      nonce: a,
      gasPriceInWei: c,
      maxFeePerGas: l,
      maxPriorityFeePerGas: h,
      gasLimit: f,
      chainId: p
    };
  }
  async ecRecover(e) {
    const { method: n, params: s } = e;
    if (!Array.isArray(s))
      throw m.rpc.invalidParams();
    const i = await this.initializeRelay().sendRequest({
      method: "ethereumAddressFromSignedMessage",
      params: {
        message: H(s[0]),
        signature: H(s[1]),
        addPrefix: n === "personal_ecRecover"
      }
    });
    if (E(i))
      throw i;
    return i.result;
  }
  getChainId() {
    var e;
    return Number.parseInt((e = this._storage.getItem(Ce)) !== null && e !== void 0 ? e : "1", 10);
  }
  async _eth_requestAccounts() {
    var e, n;
    if (this._addresses.length > 0)
      return (e = this.callback) === null || e === void 0 || e.call(this, "connect", { chainId: L(this.getChainId()) }), this._addresses;
    const r = await this.initializeRelay().requestEthereumAccounts();
    if (E(r))
      throw r;
    if (!r.result)
      throw new Error("accounts received is empty");
    return this._setAddresses(r.result), (n = this.callback) === null || n === void 0 || n.call(this, "connect", { chainId: L(this.getChainId()) }), this._addresses;
  }
  async personalSign({ params: e }) {
    if (!Array.isArray(e))
      throw m.rpc.invalidParams();
    const n = e[1], s = e[0];
    this._ensureKnownAddress(n);
    const i = await this.initializeRelay().sendRequest({
      method: "signEthereumMessage",
      params: {
        address: P(n),
        message: H(s),
        addPrefix: !0,
        typedDataJson: null
      }
    });
    if (E(i))
      throw i;
    return i.result;
  }
  async _eth_signTransaction(e) {
    const n = this._prepareTransactionParams(e[0] || {}), r = await this.initializeRelay().signEthereumTransaction(n);
    if (E(r))
      throw r;
    return r.result;
  }
  async _eth_sendRawTransaction(e) {
    const n = te(e[0]), r = await this.initializeRelay().submitEthereumTransaction(n, this.getChainId());
    if (E(r))
      throw r;
    return r.result;
  }
  async _eth_sendTransaction(e) {
    const n = this._prepareTransactionParams(e[0] || {}), r = await this.initializeRelay().signAndSubmitEthereumTransaction(n);
    if (E(r))
      throw r;
    return r.result;
  }
  async signTypedData(e) {
    const { method: n, params: s } = e;
    if (!Array.isArray(s))
      throw m.rpc.invalidParams();
    const r = (h) => {
      const f = {
        eth_signTypedData_v1: B.hashForSignTypedDataLegacy,
        eth_signTypedData_v3: B.hashForSignTypedData_v3,
        eth_signTypedData_v4: B.hashForSignTypedData_v4,
        eth_signTypedData: B.hashForSignTypedData_v4
      };
      return j(f[n]({
        data: lt(h)
      }), !0);
    }, i = s[n === "eth_signTypedData_v1" ? 1 : 0], a = s[n === "eth_signTypedData_v1" ? 0 : 1];
    this._ensureKnownAddress(i);
    const l = await this.initializeRelay().sendRequest({
      method: "signEthereumMessage",
      params: {
        address: P(i),
        message: r(a),
        typedDataJson: JSON.stringify(a, null, 2),
        addPrefix: !1
      }
    });
    if (E(l))
      throw l;
    return l.result;
  }
  initializeRelay() {
    return this._relay || (this._relay = new x({
      linkAPIUrl: ve,
      storage: this._storage,
      metadata: this.metadata,
      accountsCallback: this._setAddresses.bind(this),
      chainCallback: this.updateProviderInfo.bind(this)
    })), this._relay;
  }
}
const $e = "SignerType", Je = new M("CBWSDK", "SignerConfigurator");
function Qt() {
  return Je.getItem($e);
}
function Zt(t) {
  Je.setItem($e, t);
}
async function Xt(t) {
  const { communicator: e, metadata: n, handshakeRequest: s, callback: r } = t;
  tn(e, n, r).catch(() => {
  });
  const i = {
    id: crypto.randomUUID(),
    event: "selectSignerType",
    data: Object.assign(Object.assign({}, t.preference), { handshakeRequest: s })
  }, { data: a } = await e.postRequestAndWaitForResponse(i);
  return a;
}
function en(t) {
  const { signerType: e, metadata: n, communicator: s, callback: r } = t;
  switch (e) {
    case "scw":
      return new vt({
        metadata: n,
        callback: r,
        communicator: s
      });
    case "walletlink":
      return new Ye({
        metadata: n,
        callback: r
      });
  }
}
async function tn(t, e, n) {
  await t.onMessage(({ event: r }) => r === "WalletLinkSessionRequest");
  const s = new Ye({
    metadata: e,
    callback: n
  });
  t.postMessage({
    event: "WalletLinkUpdate",
    data: { session: s.getSession() }
  }), await s.handshake(), t.postMessage({
    event: "WalletLinkUpdate",
    data: { connected: !0 }
  });
}
const nn = `Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.

Please see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.`, sn = () => {
  let t;
  return {
    getCrossOriginOpenerPolicy: () => t === void 0 ? "undefined" : t,
    checkCrossOriginOpenerPolicy: async () => {
      if (typeof window > "u") {
        t = "non-browser-env";
        return;
      }
      try {
        const e = `${window.location.origin}${window.location.pathname}`, n = await fetch(e, {
          method: "HEAD"
        });
        if (!n.ok)
          throw new Error(`HTTP error! status: ${n.status}`);
        const s = n.headers.get("Cross-Origin-Opener-Policy");
        t = s ?? "null", t === "same-origin" && console.error(nn);
      } catch (e) {
        console.error("Error checking Cross-Origin-Opener-Policy:", e.message), t = "error";
      }
    }
  };
}, { checkCrossOriginOpenerPolicy: rn, getCrossOriginOpenerPolicy: an } = sn(), Me = 420, Ae = 540;
function on(t) {
  const e = (window.innerWidth - Me) / 2 + window.screenX, n = (window.innerHeight - Ae) / 2 + window.screenY;
  dn(t);
  const s = `wallet_${crypto.randomUUID()}`, r = window.open(t, s, `width=${Me}, height=${Ae}, left=${e}, top=${n}`);
  if (r == null || r.focus(), !r)
    throw m.rpc.internal("Pop up window failed to open");
  return r;
}
function cn(t) {
  t && !t.closed && t.close();
}
function dn(t) {
  const e = {
    sdkName: Ke,
    sdkVersion: K,
    origin: window.location.origin,
    coop: an()
  };
  for (const [n, s] of Object.entries(e))
    t.searchParams.append(n, s.toString());
}
class ln {
  constructor({ url: e = $t, metadata: n, preference: s }) {
    this.popup = null, this.listeners = /* @__PURE__ */ new Map(), this.postMessage = async (r) => {
      (await this.waitForPopupLoaded()).postMessage(r, this.url.origin);
    }, this.postRequestAndWaitForResponse = async (r) => {
      const i = this.onMessage(({ requestId: a }) => a === r.id);
      return this.postMessage(r), await i;
    }, this.onMessage = async (r) => new Promise((i, a) => {
      const c = (l) => {
        if (l.origin !== this.url.origin)
          return;
        const h = l.data;
        r(h) && (i(h), window.removeEventListener("message", c), this.listeners.delete(c));
      };
      window.addEventListener("message", c), this.listeners.set(c, { reject: a });
    }), this.disconnect = () => {
      cn(this.popup), this.popup = null, this.listeners.forEach(({ reject: r }, i) => {
        r(m.provider.userRejectedRequest("Request rejected")), window.removeEventListener("message", i);
      }), this.listeners.clear();
    }, this.waitForPopupLoaded = async () => this.popup && !this.popup.closed ? (this.popup.focus(), this.popup) : (this.popup = on(this.url), this.onMessage(({ event: r }) => r === "PopupUnload").then(this.disconnect).catch(() => {
    }), this.onMessage(({ event: r }) => r === "PopupLoaded").then((r) => {
      this.postMessage({
        requestId: r.id,
        data: {
          version: K,
          metadata: this.metadata,
          preference: this.preference,
          location: window.location.toString()
        }
      });
    }).then(() => {
      if (!this.popup)
        throw m.rpc.internal();
      return this.popup;
    })), this.url = new URL(e), this.metadata = n, this.preference = s;
  }
}
function un(t) {
  const e = rt(hn(t), {
    shouldIncludeStack: !0
  }), n = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
  return n.searchParams.set("version", K), n.searchParams.set("code", e.code.toString()), n.searchParams.set("message", e.message), Object.assign(Object.assign({}, e), { docUrl: n.href });
}
function hn(t) {
  var e;
  if (typeof t == "string")
    return {
      message: t,
      code: y.rpc.internal
    };
  if (E(t)) {
    const n = t.errorMessage, s = (e = t.errorCode) !== null && e !== void 0 ? e : n.match(/(denied|rejected)/i) ? y.provider.userRejectedRequest : void 0;
    return Object.assign(Object.assign({}, t), {
      message: n,
      code: s,
      data: { method: t.method }
    });
  }
  return t;
}
class fn extends et {
}
var pn = function(t, e) {
  var n = {};
  for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && e.indexOf(s) < 0 && (n[s] = t[s]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, s = Object.getOwnPropertySymbols(t); r < s.length; r++)
      e.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, s[r]) && (n[s[r]] = t[s[r]]);
  return n;
};
class gn extends fn {
  constructor(e) {
    var { metadata: n } = e, s = e.preference, { keysUrl: r } = s, i = pn(s, ["keysUrl"]);
    super(), this.signer = null, this.isCoinbaseWallet = !0, this.metadata = n, this.preference = i, this.communicator = new ln({
      url: r,
      metadata: n,
      preference: i
    });
    const a = Qt();
    a && (this.signer = this.initSigner(a));
  }
  async request(e) {
    try {
      if (It(e), !this.signer)
        switch (e.method) {
          case "eth_requestAccounts": {
            const n = await this.requestSignerSelection(e), s = this.initSigner(n);
            await s.handshake(e), this.signer = s, Zt(n);
            break;
          }
          case "wallet_sendCalls": {
            const n = this.initSigner("scw");
            await n.handshake({ method: "handshake" });
            const s = await n.request(e);
            return await n.cleanup(), s;
          }
          case "wallet_getCallsStatus":
            return ce(e, Jt);
          case "net_version":
            return 1;
          // default value
          case "eth_chainId":
            return L(1);
          // default value
          default:
            throw m.provider.unauthorized("Must call 'eth_requestAccounts' before other methods");
        }
      return await this.signer.request(e);
    } catch (n) {
      const { code: s } = n;
      return s === y.provider.unauthorized && this.disconnect(), Promise.reject(un(n));
    }
  }
  /** @deprecated Use `.request({ method: 'eth_requestAccounts' })` instead. */
  async enable() {
    return console.warn('.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'), await this.request({
      method: "eth_requestAccounts"
    });
  }
  async disconnect() {
    var e;
    await ((e = this.signer) === null || e === void 0 ? void 0 : e.cleanup()), this.signer = null, M.clearAll(), this.emit("disconnect", m.provider.disconnected("User initiated disconnection"));
  }
  requestSignerSelection(e) {
    return Xt({
      communicator: this.communicator,
      preference: this.preference,
      metadata: this.metadata,
      handshakeRequest: e,
      callback: this.emit.bind(this)
    });
  }
  initSigner(e) {
    return en({
      signerType: e,
      metadata: this.metadata,
      communicator: this.communicator,
      callback: this.emit.bind(this)
    });
  }
}
function mn(t) {
  if (t) {
    if (!["all", "smartWalletOnly", "eoaOnly"].includes(t.options))
      throw new Error(`Invalid options: ${t.options}`);
    if (t.attribution && t.attribution.auto !== void 0 && t.attribution.dataSuffix !== void 0)
      throw new Error("Attribution cannot contain both auto and dataSuffix properties");
  }
}
function bn(t) {
  var e;
  const n = {
    metadata: t.metadata,
    preference: t.preference
  };
  return (e = Et(n)) !== null && e !== void 0 ? e : new gn(n);
}
const wn = {
  options: "all"
};
function In(t) {
  var e;
  new M("CBWSDK").setItem("VERSION", K), rn();
  const s = {
    metadata: {
      appName: t.appName || "Dapp",
      appLogoUrl: t.appLogoUrl || "",
      appChainIds: t.appChainIds || []
    },
    preference: Object.assign(wn, (e = t.preference) !== null && e !== void 0 ? e : {})
  };
  mn(s.preference);
  let r = null;
  return {
    getProvider: () => (r || (r = bn(s)), r)
  };
}
export {
  In as createCoinbaseWalletSDK
};
