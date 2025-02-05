const i = async ({ grant_type: o, client_id: r, client_secret: a }) => {
  try {
    const t = new URLSearchParams();
    t.append("grant_type", o), t.append("client_id", r), t.append("client_secret", a);
    const e = await (await fetch("https://pay-sandbox.xbase.digital/identity/api/Authentication/connect/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: t.toString()
    })).json();
    if (!e.access_token)
      throw new Error("Failed to obtain access token");
    return e.access_token;
  } catch (t) {
    throw console.error("Authentication error:", t), t;
  }
}, h = async (o, r, a) => {
  try {
    const t = {
      ...o,
      merchantLocationId: a
      // Dynamically adding the merchantLocationId
    }, n = await fetch("https://pay-sandbox.xbase.digital/api/orders/authorize", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${r}`
      },
      body: JSON.stringify(t)
    });
    if (!n.ok) {
      const c = await n.text();
      return console.error("Error processing checkout:", c), { success: !1, error: c };
    }
    const e = await n.json();
    return console.log("Checkout result:", e), window.location.href = `https://checkout.staging.xbd.app/select-currency?orderId=${e.orderId}`, { success: !0, data: e };
  } catch (t) {
    return console.error("Checkout error:", t), { success: !1, error: t.message };
  }
};
let s = null;
function d({ grant_type: o, client_id: r, client_secret: a, merchantLocationId: t }) {
  return s || (s = {
    grant_type: o,
    client_id: r,
    client_secret: a,
    merchantLocationId: t,
    token: null,
    // Authenticate the user and store the token in the SDK instance
    async authenticate() {
      return this.token || (this.token = await i({
        grant_type: this.grant_type,
        client_id: this.client_id,
        client_secret: this.client_secret
      })), this.token;
    },
    // Perform the checkout using the stored parameters and token
    async checkout(n) {
      const e = await this.authenticate();
      return h(n, e, this.merchantLocationId);
    }
  }, console.log("SDK Initialized with:", s), s);
}
typeof window < "u" && (window.MyCheckoutSDK = { init: d });
const u = {
  initGlobalSdk: d,
  authenticate: i,
  processCheckout: h
};
export {
  i as authenticate,
  u as default,
  d as initGlobalSdk,
  h as processCheckout
};
