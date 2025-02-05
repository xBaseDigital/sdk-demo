// checkout.d.ts

declare module 'checkout' {
    interface CheckoutSDKOptions {
      grant_type: string;
      client_id: string;
      client_secret: string;
      merchantLocationId: string;
    }
  
    interface PaymentData {
      merchantOrderId: string;
      title: string;
      description: string;
      amount: number;
      currency: string;
      email: string;
      acceptUrl: string;
      cancelUrl: string;
      callbackUrl: string;
    }
  
    export default class CheckoutSDK {
      constructor(options: CheckoutSDKOptions);
      init(): Promise<void>;
      checkout(paymentData: PaymentData): Promise<void>;
    }
  }
  