var R = {}, _ = {}, I = {}, V;
function Be() {
  if (V) return I;
  V = 1;
  var e = I.__awaiter || function(t, s, f, o) {
    function O(h) {
      return h instanceof f ? h : new f(function(T) {
        T(h);
      });
    }
    return new (f || (f = Promise))(function(h, T) {
      function D(N) {
        try {
          v(o.next(N));
        } catch (C) {
          T(C);
        }
      }
      function M(N) {
        try {
          v(o.throw(N));
        } catch (C) {
          T(C);
        }
      }
      function v(N) {
        N.done ? h(N.value) : O(N.value).then(D, M);
      }
      v((o = o.apply(t, s || [])).next());
    });
  };
  Object.defineProperty(I, "__esModule", { value: !0 }), I.getData = I.fetchData = I.stringifyQuery = I.insertParams = void 0;
  const n = (t) => typeof t == "object" && t !== null && "code" in t && "message" in t;
  function E(t, s, f) {
    return t.replace(new RegExp(`\\{${s}\\}`, "g"), f);
  }
  function c(t, s) {
    return s ? Object.keys(s).reduce((f, o) => E(f, o, String(s[o])), t) : t;
  }
  I.insertParams = c;
  function S(t) {
    if (!t)
      return "";
    const s = new URLSearchParams();
    Object.keys(t).forEach((o) => {
      t[o] != null && s.append(o, String(t[o]));
    });
    const f = s.toString();
    return f ? `?${f}` : "";
  }
  I.stringifyQuery = S;
  function u(t) {
    return e(this, void 0, void 0, function* () {
      let s;
      try {
        s = yield t.json();
      } catch {
        s = {};
      }
      if (!t.ok) {
        const f = n(s) ? `CGW error - ${s.code}: ${s.message}` : `CGW error - status ${t.statusText}`;
        throw new Error(f);
      }
      return s;
    });
  }
  function l(t, s, f, o, O) {
    return e(this, void 0, void 0, function* () {
      const h = Object.assign({ "Content-Type": "application/json" }, o), T = {
        method: s ?? "POST",
        headers: h
      };
      O && (T.credentials = O), f != null && (T.body = typeof f == "string" ? f : JSON.stringify(f));
      const D = yield fetch(t, T);
      return u(D);
    });
  }
  I.fetchData = l;
  function g(t, s, f) {
    return e(this, void 0, void 0, function* () {
      const o = {
        method: "GET"
      };
      s && (o.headers = Object.assign(Object.assign({}, s), { "Content-Type": "application/json" })), f && (o.credentials = f);
      const O = yield fetch(t, o);
      return u(O);
    });
  }
  return I.getData = g, I;
}
var B;
function Fe() {
  if (B) return _;
  B = 1, Object.defineProperty(_, "__esModule", { value: !0 }), _.getEndpoint = _.deleteEndpoint = _.putEndpoint = _.postEndpoint = void 0;
  const e = Be();
  function n(l, g, t, s) {
    const f = (0, e.insertParams)(g, t), o = (0, e.stringifyQuery)(s);
    return `${l}${f}${o}`;
  }
  function E(l, g, t) {
    const s = n(l, g, t == null ? void 0 : t.path, t == null ? void 0 : t.query);
    return (0, e.fetchData)(s, "POST", t == null ? void 0 : t.body, t == null ? void 0 : t.headers, t == null ? void 0 : t.credentials);
  }
  _.postEndpoint = E;
  function c(l, g, t) {
    const s = n(l, g, t == null ? void 0 : t.path, t == null ? void 0 : t.query);
    return (0, e.fetchData)(s, "PUT", t == null ? void 0 : t.body, t == null ? void 0 : t.headers, t == null ? void 0 : t.credentials);
  }
  _.putEndpoint = c;
  function S(l, g, t) {
    const s = n(l, g, t == null ? void 0 : t.path, t == null ? void 0 : t.query);
    return (0, e.fetchData)(s, "DELETE", t == null ? void 0 : t.body, t == null ? void 0 : t.headers, t == null ? void 0 : t.credentials);
  }
  _.deleteEndpoint = S;
  function u(l, g, t, s) {
    if (s)
      return (0, e.getData)(s, void 0, t == null ? void 0 : t.credentials);
    const f = n(l, g, t == null ? void 0 : t.path, t == null ? void 0 : t.query);
    return (0, e.getData)(f, t == null ? void 0 : t.headers, t == null ? void 0 : t.credentials);
  }
  return _.getEndpoint = u, _;
}
var L = {}, F;
function Xe() {
  return F || (F = 1, Object.defineProperty(L, "__esModule", { value: !0 }), L.DEFAULT_BASE_URL = void 0, L.DEFAULT_BASE_URL = "https://safe-client.safe.global"), L;
}
var P = {}, X;
function me() {
  return X || (X = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ImplementationVersionState = void 0, function(n) {
      n.UP_TO_DATE = "UP_TO_DATE", n.OUTDATED = "OUTDATED", n.UNKNOWN = "UNKNOWN";
    }(e.ImplementationVersionState || (e.ImplementationVersionState = {}));
  }(P)), P;
}
var b = {}, m;
function Qe() {
  return m || (m = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.SafeAppSocialPlatforms = e.SafeAppFeatures = e.SafeAppAccessPolicyTypes = void 0, function(n) {
      n.NoRestrictions = "NO_RESTRICTIONS", n.DomainAllowlist = "DOMAIN_ALLOWLIST";
    }(e.SafeAppAccessPolicyTypes || (e.SafeAppAccessPolicyTypes = {})), function(n) {
      n.BATCHED_TRANSACTIONS = "BATCHED_TRANSACTIONS";
    }(e.SafeAppFeatures || (e.SafeAppFeatures = {})), function(n) {
      n.TWITTER = "TWITTER", n.GITHUB = "GITHUB", n.DISCORD = "DISCORD", n.TELEGRAM = "TELEGRAM";
    }(e.SafeAppSocialPlatforms || (e.SafeAppSocialPlatforms = {}));
  }(b)), b;
}
var G = {}, Q;
function $e() {
  return Q || (Q = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.LabelValue = e.StartTimeValue = e.DurationType = e.DetailedExecutionInfoType = e.TransactionListItemType = e.ConflictType = e.TransactionInfoType = e.SettingsInfoType = e.TransactionTokenType = e.TransferDirection = e.TransactionStatus = e.Operation = void 0, function(n) {
      n[n.CALL = 0] = "CALL", n[n.DELEGATE = 1] = "DELEGATE";
    }(e.Operation || (e.Operation = {})), function(n) {
      n.AWAITING_CONFIRMATIONS = "AWAITING_CONFIRMATIONS", n.AWAITING_EXECUTION = "AWAITING_EXECUTION", n.CANCELLED = "CANCELLED", n.FAILED = "FAILED", n.SUCCESS = "SUCCESS";
    }(e.TransactionStatus || (e.TransactionStatus = {})), function(n) {
      n.INCOMING = "INCOMING", n.OUTGOING = "OUTGOING", n.UNKNOWN = "UNKNOWN";
    }(e.TransferDirection || (e.TransferDirection = {})), function(n) {
      n.ERC20 = "ERC20", n.ERC721 = "ERC721", n.NATIVE_COIN = "NATIVE_COIN";
    }(e.TransactionTokenType || (e.TransactionTokenType = {})), function(n) {
      n.SET_FALLBACK_HANDLER = "SET_FALLBACK_HANDLER", n.ADD_OWNER = "ADD_OWNER", n.REMOVE_OWNER = "REMOVE_OWNER", n.SWAP_OWNER = "SWAP_OWNER", n.CHANGE_THRESHOLD = "CHANGE_THRESHOLD", n.CHANGE_IMPLEMENTATION = "CHANGE_IMPLEMENTATION", n.ENABLE_MODULE = "ENABLE_MODULE", n.DISABLE_MODULE = "DISABLE_MODULE", n.SET_GUARD = "SET_GUARD", n.DELETE_GUARD = "DELETE_GUARD";
    }(e.SettingsInfoType || (e.SettingsInfoType = {})), function(n) {
      n.TRANSFER = "Transfer", n.SETTINGS_CHANGE = "SettingsChange", n.CUSTOM = "Custom", n.CREATION = "Creation", n.SWAP_ORDER = "SwapOrder", n.TWAP_ORDER = "TwapOrder", n.SWAP_TRANSFER = "SwapTransfer", n.NATIVE_STAKING_DEPOSIT = "NativeStakingDeposit", n.NATIVE_STAKING_VALIDATORS_EXIT = "NativeStakingValidatorsExit", n.NATIVE_STAKING_WITHDRAW = "NativeStakingWithdraw";
    }(e.TransactionInfoType || (e.TransactionInfoType = {})), function(n) {
      n.NONE = "None", n.HAS_NEXT = "HasNext", n.END = "End";
    }(e.ConflictType || (e.ConflictType = {})), function(n) {
      n.TRANSACTION = "TRANSACTION", n.LABEL = "LABEL", n.CONFLICT_HEADER = "CONFLICT_HEADER", n.DATE_LABEL = "DATE_LABEL";
    }(e.TransactionListItemType || (e.TransactionListItemType = {})), function(n) {
      n.MULTISIG = "MULTISIG", n.MODULE = "MODULE";
    }(e.DetailedExecutionInfoType || (e.DetailedExecutionInfoType = {})), function(n) {
      n.AUTO = "AUTO", n.LIMIT_DURATION = "LIMIT_DURATION";
    }(e.DurationType || (e.DurationType = {})), function(n) {
      n.AT_MINING_TIME = "AT_MINING_TIME", n.AT_EPOCH = "AT_EPOCH";
    }(e.StartTimeValue || (e.StartTimeValue = {})), function(n) {
      n.Queued = "Queued", n.Next = "Next";
    }(e.LabelValue || (e.LabelValue = {}));
  }(G)), G;
}
var U = {}, $;
function Ye() {
  return $ || ($ = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.FEATURES = e.GAS_PRICE_TYPE = e.RPC_AUTHENTICATION = void 0, function(n) {
      n.API_KEY_PATH = "API_KEY_PATH", n.NO_AUTHENTICATION = "NO_AUTHENTICATION", n.UNKNOWN = "UNKNOWN";
    }(e.RPC_AUTHENTICATION || (e.RPC_AUTHENTICATION = {})), function(n) {
      n.ORACLE = "ORACLE", n.FIXED = "FIXED", n.FIXED_1559 = "FIXED1559", n.UNKNOWN = "UNKNOWN";
    }(e.GAS_PRICE_TYPE || (e.GAS_PRICE_TYPE = {})), function(n) {
      n.ERC721 = "ERC721", n.SAFE_APPS = "SAFE_APPS", n.CONTRACT_INTERACTION = "CONTRACT_INTERACTION", n.DOMAIN_LOOKUP = "DOMAIN_LOOKUP", n.SPENDING_LIMIT = "SPENDING_LIMIT", n.EIP1559 = "EIP1559", n.SAFE_TX_GAS_OPTIONAL = "SAFE_TX_GAS_OPTIONAL", n.TX_SIMULATION = "TX_SIMULATION", n.EIP1271 = "EIP1271";
    }(e.FEATURES || (e.FEATURES = {}));
  }(U)), U;
}
var W = {}, Y;
function Je() {
  return Y || (Y = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.TokenType = void 0, function(n) {
      n.ERC20 = "ERC20", n.ERC721 = "ERC721", n.NATIVE_TOKEN = "NATIVE_TOKEN", n.UNKNOWN = "UNKNOWN";
    }(e.TokenType || (e.TokenType = {}));
  }(W)), W;
}
var H = {}, J;
function ze() {
  return J || (J = 1, Object.defineProperty(H, "__esModule", { value: !0 })), H;
}
var K = {}, z;
function Ze() {
  return z || (z = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.NativeStakingStatus = e.ConfirmationViewTypes = void 0, function(n) {
      n.GENERIC = "GENERIC", n.COW_SWAP_ORDER = "COW_SWAP_ORDER", n.COW_SWAP_TWAP_ORDER = "COW_SWAP_TWAP_ORDER", n.KILN_NATIVE_STAKING_DEPOSIT = "KILN_NATIVE_STAKING_DEPOSIT", n.KILN_NATIVE_STAKING_VALIDATORS_EXIT = "KILN_NATIVE_STAKING_VALIDATORS_EXIT", n.KILN_NATIVE_STAKING_WITHDRAW = "KILN_NATIVE_STAKING_WITHDRAW";
    }(e.ConfirmationViewTypes || (e.ConfirmationViewTypes = {})), function(n) {
      n.NOT_STAKED = "NOT_STAKED", n.ACTIVATING = "ACTIVATING", n.DEPOSIT_IN_PROGRESS = "DEPOSIT_IN_PROGRESS", n.ACTIVE = "ACTIVE", n.EXIT_REQUESTED = "EXIT_REQUESTED", n.EXITING = "EXITING", n.EXITED = "EXITED", n.SLASHED = "SLASHED";
    }(e.NativeStakingStatus || (e.NativeStakingStatus = {}));
  }(K)), K;
}
var j = {}, Z;
function ke() {
  return Z || (Z = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.SafeMessageStatus = e.SafeMessageListItemType = void 0, function(n) {
      n.DATE_LABEL = "DATE_LABEL", n.MESSAGE = "MESSAGE";
    }(e.SafeMessageListItemType || (e.SafeMessageListItemType = {})), function(n) {
      n.NEEDS_CONFIRMATION = "NEEDS_CONFIRMATION", n.CONFIRMED = "CONFIRMED";
    }(e.SafeMessageStatus || (e.SafeMessageStatus = {}));
  }(j)), j;
}
var q = {}, k;
function pe() {
  return k || (k = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DeviceType = void 0, function(n) {
      n.ANDROID = "ANDROID", n.IOS = "IOS", n.WEB = "WEB";
    }(e.DeviceType || (e.DeviceType = {}));
  }(q)), q;
}
var w = {}, p;
function xe() {
  return p || (p = 1, Object.defineProperty(w, "__esModule", { value: !0 })), w;
}
var x;
function en() {
  return x || (x = 1, function(e) {
    var n = R.__createBinding || (Object.create ? function(i, a, d, r) {
      r === void 0 && (r = d);
      var A = Object.getOwnPropertyDescriptor(a, d);
      (!A || ("get" in A ? !a.__esModule : A.writable || A.configurable)) && (A = { enumerable: !0, get: function() {
        return a[d];
      } }), Object.defineProperty(i, r, A);
    } : function(i, a, d, r) {
      r === void 0 && (r = d), i[r] = a[d];
    }), E = R.__exportStar || function(i, a) {
      for (var d in i) d !== "default" && !Object.prototype.hasOwnProperty.call(a, d) && n(a, i, d);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.getAccount = e.createAccount = e.verifyAuth = e.getAuthNonce = e.getContract = e.getSafeOverviews = e.unsubscribeAll = e.unsubscribeSingle = e.registerRecoveryModule = e.deleteRegisteredEmail = e.getRegisteredEmail = e.verifyEmail = e.resendEmailVerificationCode = e.changeEmail = e.registerEmail = e.unregisterDevice = e.unregisterSafe = e.registerDevice = e.getDelegates = e.confirmSafeMessage = e.proposeSafeMessage = e.getSafeMessage = e.getSafeMessages = e.getDecodedData = e.getMasterCopies = e.getSafeApps = e.getChainConfig = e.getChainsConfig = e.getTxPreview = e.getConfirmationView = e.proposeTransaction = e.getNonces = e.postSafeGasEstimation = e.deleteTransaction = e.getTransactionDetails = e.getTransactionQueue = e.getTransactionHistory = e.getCollectiblesPage = e.getCollectibles = e.getAllOwnedSafes = e.getOwnedSafes = e.getFiatCurrencies = e.getBalances = e.getMultisigTransactions = e.getModuleTransactions = e.getIncomingTransfers = e.getSafeInfo = e.getRelayCount = e.relayTransaction = e.setBaseUrl = void 0, e.getIndexingStatus = e.putAccountDataSettings = e.getAccountDataSettings = e.getAccountDataTypes = e.deleteAccount = void 0;
    const c = Fe(), S = Xe();
    E(me(), e), E(Qe(), e), E($e(), e), E(Ye(), e), E(Je(), e), E(ze(), e), E(Ze(), e), E(ke(), e), E(pe(), e), E(xe(), e);
    let u = S.DEFAULT_BASE_URL;
    const l = (i) => {
      u = i;
    };
    e.setBaseUrl = l;
    function g(i, a) {
      return (0, c.postEndpoint)(u, "/v1/chains/{chainId}/relay", { path: { chainId: i }, body: a });
    }
    e.relayTransaction = g;
    function t(i, a) {
      return (0, c.getEndpoint)(u, "/v1/chains/{chainId}/relay/{address}", { path: { chainId: i, address: a } });
    }
    e.getRelayCount = t;
    function s(i, a) {
      return (0, c.getEndpoint)(u, "/v1/chains/{chainId}/safes/{address}", { path: { chainId: i, address: a } });
    }
    e.getSafeInfo = s;
    function f(i, a, d, r) {
      return (0, c.getEndpoint)(u, "/v1/chains/{chainId}/safes/{address}/incoming-transfers/", {
        path: { chainId: i, address: a },
        query: d
      }, r);
    }
    e.getIncomingTransfers = f;
    function o(i, a, d, r) {
      return (0, c.getEndpoint)(u, "/v1/chains/{chainId}/safes/{address}/module-transactions/", {
        path: { chainId: i, address: a },
        query: d
      }, r);
    }
    e.getModuleTransactions = o;
    function O(i, a, d, r) {
      return (0, c.getEndpoint)(u, "/v1/chains/{chainId}/safes/{address}/multisig-transactions/", {
        path: { chainId: i, address: a },
        query: d
      }, r);
    }
    e.getMultisigTransactions = O;
    function h(i, a, d = "usd", r = {}) {
      return (0, c.getEndpoint)(u, "/v1/chains/{chainId}/safes/{address}/balances/{currency}", {
        path: { chainId: i, address: a, currency: d },
        query: r
      });
    }
    e.getBalances = h;
    function T() {
      return (0, c.getEndpoint)(u, "/v1/balances/supported-fiat-codes");
    }
    e.getFiatCurrencies = T;
    function D(i, a) {
      return (0, c.getEndpoint)(u, "/v1/chains/{chainId}/owners/{address}/safes", { path: { chainId: i, address: a } });
    }
    e.getOwnedSafes = D;
    function M(i) {
      return (0, c.getEndpoint)(u, "/v1/owners/{address}/safes", { path: { address: i } });
    }
    e.getAllOwnedSafes = M;
    function v(i, a, d = {}) {
      return (0, c.getEndpoint)(u, "/v1/chains/{chainId}/safes/{address}/collectibles", {
        path: { chainId: i, address: a },
        query: d
      });
    }
    e.getCollectibles = v;
    function N(i, a, d = {}, r) {
      return (0, c.getEndpoint)(u, "/v2/chains/{chainId}/safes/{address}/collectibles", { path: { chainId: i, address: a }, query: d }, r);
    }
    e.getCollectiblesPage = N;
    function C(i, a, d = {}, r) {
      return (0, c.getEndpoint)(u, "/v1/chains/{chainId}/safes/{safe_address}/transactions/history", { path: { chainId: i, safe_address: a }, query: d }, r);
    }
    e.getTransactionHistory = C;
    function ee(i, a, d = {}, r) {
      return (0, c.getEndpoint)(u, "/v1/chains/{chainId}/safes/{safe_address}/transactions/queued", { path: { chainId: i, safe_address: a }, query: d }, r);
    }
    e.getTransactionQueue = ee;
    function ne(i, a) {
      return (0, c.getEndpoint)(u, "/v1/chains/{chainId}/transactions/{transactionId}", {
        path: { chainId: i, transactionId: a }
      });
    }
    e.getTransactionDetails = ne;
    function ie(i, a, d) {
      return (0, c.deleteEndpoint)(u, "/v1/chains/{chainId}/transactions/{safeTxHash}", {
        path: { chainId: i, safeTxHash: a },
        body: { signature: d }
      });
    }
    e.deleteTransaction = ie;
    function te(i, a, d) {
      return (0, c.postEndpoint)(u, "/v2/chains/{chainId}/safes/{safe_address}/multisig-transactions/estimations", {
        path: { chainId: i, safe_address: a },
        body: d
      });
    }
    e.postSafeGasEstimation = te;
    function ae(i, a) {
      return (0, c.getEndpoint)(u, "/v1/chains/{chainId}/safes/{safe_address}/nonces", {
        path: { chainId: i, safe_address: a }
      });
    }
    e.getNonces = ae;
    function ue(i, a, d) {
      return (0, c.postEndpoint)(u, "/v1/chains/{chainId}/transactions/{safe_address}/propose", {
        path: { chainId: i, safe_address: a },
        body: d
      });
    }
    e.proposeTransaction = ue;
    function de(i, a, d, r, A, y) {
      return (0, c.postEndpoint)(u, "/v1/chains/{chainId}/safes/{safe_address}/views/transaction-confirmation", {
        path: { chainId: i, safe_address: a },
        body: { operation: d, data: r, to: A, value: y }
      });
    }
    e.getConfirmationView = de;
    function ce(i, a, d, r, A, y) {
      return (0, c.postEndpoint)(u, "/v1/chains/{chainId}/transactions/{safe_address}/preview", {
        path: { chainId: i, safe_address: a },
        body: { operation: d, data: r, to: A, value: y }
      });
    }
    e.getTxPreview = ce;
    function se(i) {
      return (0, c.getEndpoint)(u, "/v1/chains", {
        query: i
      });
    }
    e.getChainsConfig = se;
    function re(i) {
      return (0, c.getEndpoint)(u, "/v1/chains/{chainId}", {
        path: { chainId: i }
      });
    }
    e.getChainConfig = re;
    function fe(i, a = {}) {
      return (0, c.getEndpoint)(u, "/v1/chains/{chainId}/safe-apps", {
        path: { chainId: i },
        query: a
      });
    }
    e.getSafeApps = fe;
    function oe(i) {
      return (0, c.getEndpoint)(u, "/v1/chains/{chainId}/about/master-copies", {
        path: { chainId: i }
      });
    }
    e.getMasterCopies = oe;
    function Ee(i, a, d, r) {
      return (0, c.postEndpoint)(u, "/v1/chains/{chainId}/data-decoder", {
        path: { chainId: i },
        body: { operation: a, data: d, to: r }
      });
    }
    e.getDecodedData = Ee;
    function le(i, a, d) {
      return (0, c.getEndpoint)(u, "/v1/chains/{chainId}/safes/{safe_address}/messages", { path: { chainId: i, safe_address: a }, query: {} }, d);
    }
    e.getSafeMessages = le;
    function ge(i, a) {
      return (0, c.getEndpoint)(u, "/v1/chains/{chainId}/messages/{message_hash}", {
        path: { chainId: i, message_hash: a }
      });
    }
    e.getSafeMessage = ge;
    function Ae(i, a, d) {
      return (0, c.postEndpoint)(u, "/v1/chains/{chainId}/safes/{safe_address}/messages", {
        path: { chainId: i, safe_address: a },
        body: d
      });
    }
    e.proposeSafeMessage = Ae;
    function Ie(i, a, d) {
      return (0, c.postEndpoint)(u, "/v1/chains/{chainId}/messages/{message_hash}/signatures", {
        path: { chainId: i, message_hash: a },
        body: d
      });
    }
    e.confirmSafeMessage = Ie;
    function _e(i, a = {}) {
      return (0, c.getEndpoint)(u, "/v2/chains/{chainId}/delegates", {
        path: { chainId: i },
        query: a
      });
    }
    e.getDelegates = _e;
    function Te(i) {
      return (0, c.postEndpoint)(u, "/v1/register/notifications", {
        body: i
      });
    }
    e.registerDevice = Te;
    function he(i, a, d) {
      return (0, c.deleteEndpoint)(u, "/v1/chains/{chainId}/notifications/devices/{uuid}/safes/{safe_address}", {
        path: { chainId: i, safe_address: a, uuid: d }
      });
    }
    e.unregisterSafe = he;
    function Ne(i, a) {
      return (0, c.deleteEndpoint)(u, "/v1/chains/{chainId}/notifications/devices/{uuid}", {
        path: { chainId: i, uuid: a }
      });
    }
    e.unregisterDevice = Ne;
    function Oe(i, a, d, r) {
      return (0, c.postEndpoint)(u, "/v1/chains/{chainId}/safes/{safe_address}/emails", {
        path: { chainId: i, safe_address: a },
        body: d,
        headers: r
      });
    }
    e.registerEmail = Oe;
    function Se(i, a, d, r, A) {
      return (0, c.putEndpoint)(u, "/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}", {
        path: { chainId: i, safe_address: a, signer: d },
        body: r,
        headers: A
      });
    }
    e.changeEmail = Se;
    function De(i, a, d) {
      return (0, c.postEndpoint)(u, "/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}/verify-resend", {
        path: { chainId: i, safe_address: a, signer: d },
        body: ""
      });
    }
    e.resendEmailVerificationCode = De;
    function ve(i, a, d, r) {
      return (0, c.putEndpoint)(u, "/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}/verify", {
        path: { chainId: i, safe_address: a, signer: d },
        body: r
      });
    }
    e.verifyEmail = ve;
    function Ce(i, a, d, r) {
      return (0, c.getEndpoint)(u, "/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}", {
        path: { chainId: i, safe_address: a, signer: d },
        headers: r
      });
    }
    e.getRegisteredEmail = Ce;
    function Re(i, a, d, r) {
      return (0, c.deleteEndpoint)(u, "/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}", {
        path: { chainId: i, safe_address: a, signer: d },
        headers: r
      });
    }
    e.deleteRegisteredEmail = Re;
    function Le(i, a, d) {
      return (0, c.postEndpoint)(u, "/v1/chains/{chainId}/safes/{safe_address}/recovery", {
        path: { chainId: i, safe_address: a },
        body: d
      });
    }
    e.registerRecoveryModule = Le;
    function Me(i) {
      return (0, c.deleteEndpoint)(u, "/v1/subscriptions", { query: i });
    }
    e.unsubscribeSingle = Me;
    function ye(i) {
      return (0, c.deleteEndpoint)(u, "/v1/subscriptions/all", { query: i });
    }
    e.unsubscribeAll = ye;
    function Pe(i, a) {
      return (0, c.getEndpoint)(u, "/v1/safes", {
        query: Object.assign(Object.assign({}, a), { safes: i.join(",") })
      });
    }
    e.getSafeOverviews = Pe;
    function be(i, a) {
      return (0, c.getEndpoint)(u, "/v1/chains/{chainId}/contracts/{contractAddress}", {
        path: {
          chainId: i,
          contractAddress: a
        }
      });
    }
    e.getContract = be;
    function Ge() {
      return (0, c.getEndpoint)(u, "/v1/auth/nonce", { credentials: "include" });
    }
    e.getAuthNonce = Ge;
    function Ue(i) {
      return (0, c.postEndpoint)(u, "/v1/auth/verify", {
        body: i,
        credentials: "include"
      });
    }
    e.verifyAuth = Ue;
    function We(i) {
      return (0, c.postEndpoint)(u, "/v1/accounts", {
        body: i,
        credentials: "include"
      });
    }
    e.createAccount = We;
    function He(i) {
      return (0, c.getEndpoint)(u, "/v1/accounts/{address}", {
        path: { address: i },
        credentials: "include"
      });
    }
    e.getAccount = He;
    function Ke(i) {
      return (0, c.deleteEndpoint)(u, "/v1/accounts/{address}", {
        path: { address: i },
        credentials: "include"
      });
    }
    e.deleteAccount = Ke;
    function je() {
      return (0, c.getEndpoint)(u, "/v1/accounts/data-types");
    }
    e.getAccountDataTypes = je;
    function qe(i) {
      return (0, c.getEndpoint)(u, "/v1/accounts/{address}/data-settings", {
        path: { address: i },
        credentials: "include"
      });
    }
    e.getAccountDataSettings = qe;
    function we(i, a) {
      return (0, c.putEndpoint)(u, "/v1/accounts/{address}/data-settings", {
        path: { address: i },
        body: a,
        credentials: "include"
      });
    }
    e.putAccountDataSettings = we;
    function Ve(i) {
      return (0, c.getEndpoint)(u, "/v1/chains/{chainId}/about/indexing", {
        path: { chainId: i }
      });
    }
    e.getIndexingStatus = Ve;
  }(R)), R;
}
export {
  en as r
};
