// src/App.jsx
function App() {
  const handleCheckout = async () => {
    try {
      const checkoutResponse =  await window.MyCheckoutSDK.checkout({
        merchantLocationId: '9fe8b5f5-4d42-4557-8017-a2b38e7a696e', // Example data
        merchantOrderId: new Date().toString(),
        title: 'Store Title',
        description: 'Order #112s3',
        amount: 100,
        currency: 'GBP',
        email: 'tech@xbd.group',
        acceptUrl: 'https://your-site.com/accept',
        cancelUrl: 'https://your-site.com/cancel',
        callbackUrl: 'https://your-site.com/callback',
      });
      
      console.log('Checkout initiated successfully:', checkoutResponse);
    } catch (err) {
      console.error('Checkout failed:', err);
    } finally {
      console.error('Checkout :');
    }
  };

  return (
    <div>
      <h1>Checkout SDK Example</h1>
      <button onClick={handleCheckout}>Start Checkout</button>
    </div>
  );
}

export default App;
