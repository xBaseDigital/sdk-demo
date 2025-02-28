// src/global.d.ts

declare global {
  interface MyCheckoutSDK {
    grant_type: string;
    client_id: string;
    client_secret: string;
    merchantLocationId: string;
    token: string | null;
    authenticate: () => Promise<string>;
    checkout: (orderDetails: any) => Promise<any>;
  }

  interface Window {
    MyCheckoutSDK: MyCheckoutSDK;
  }
}

export { };