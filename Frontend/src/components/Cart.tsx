import { useCart } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>The cart is currently empty.<br></br>Click on Add to Cart to add books.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img src={item.cover} alt={item.title} className="w-16 h-24 object-cover" />
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}>-
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}>+
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700 ml-4"
                    onClick={() => removeFromCart(item.id)}>Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

