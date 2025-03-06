// src/sdk/checkout.d.ts

export interface SdkConfig {
  grant_type: string;
  client_id: string;
  client_secret: string;
  merchantLocationId: string;
}

export interface OrderDetails {
  amount: number;
  currency: string;
  [key: string]: any;
}

export interface CheckoutResponse {
  success: boolean;
  transactionId?: string;
  message?: string;
  [key: string]: any;
}

export interface SdkInstance {
  grant_type: string;
  client_id: string;
  client_secret: string;
  merchantLocationId: string;
  token: string | null;
  authenticate: () => Promise<string>;
  checkout: (orderDetails: OrderDetails) => Promise<CheckoutResponse>;
}

export function initGlobalSdk(config: SdkConfig): SdkInstance;
export function authenticate(config: SdkConfig): Promise<string>;
export function processCheckout(
  orderDetails: OrderDetails,
  token: string,
  merchantLocationId: string
): Promise<CheckoutResponse>;

// Update to expect SdkInstance directly
declare global {
  interface Window {
    MyCheckoutSDK: SdkInstance; // Changed from { init: typeof initGlobalSdk }
  }
}