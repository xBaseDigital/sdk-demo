// src/global.d.ts

declare global {
  // Define the type for the global SDK object
  interface MyCheckoutSDK {
    init: (params: {
      grant_type: string;
      client_id: string;
      client_secret: string;
      merchantLocationId: string;
    }) => void;
    checkout: (orderDetails: any) => Promise<any>;
  }

  // Extend the window interface to include the global SDK object
  interface Window {
    MyCheckoutSDK: MyCheckoutSDK;
  }
}

// This is necessary for TypeScript to treat the file as a module and apply its changes.
export {};
