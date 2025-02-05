// index.tsx or main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { initGlobalSdk } from '../sdk/checkout-sdk.es'; // Adjust the path as needed

window.MyCheckoutSDK = initGlobalSdk({
  grant_type: 'client_credentials',
  client_id: '6d9e8225-77a1-43cd-9873-8ff8928f231b',
  client_secret: 'dda1f206-c060-4136-ac89-30f3995f7330',
  merchantLocationId: '9fe8b5f5-4d42-4557-8017-a2b38e7a696e',
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
