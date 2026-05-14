import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./CartPage.css";
function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } =
    useCart();
  const { user } = useAuth();

  if (cartItems.length === 0) {
    return (
      <section>
        <Link to="/" className="backLink">
          ← Back to events
        </Link>
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Your Cart</h1>

      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>

            <p>
              {item.date} at {item.time}
            </p>

            <p>
              {item.venue}, {item.city}
            </p>

            <p>Price: {item.price === 0 ? "Free" : `${item.price} DKK`}</p>

            <label htmlFor={`quantity-${item.id}`}>Quantity:</label>

            <input
              id={`quantity-${item.id}`}
              type="number"
              min="1"
              value={item.quantity}
              onChange={(event) =>
                updateQuantity(item.id, Number(event.target.value))
              }
            />

            <p>
              Total:{" "}
              {item.price === 0 ? "Free" : `${item.price * item.quantity} DKK`}
            </p>

            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <h2>Total: {cartTotal === 0 ? "Free" : `${cartTotal} DKK`}</h2>

      <button onClick={clearCart}>Clear cart</button>
      {user ? (
        <button>Proceed to Checkout</button>
      ) : (
        <p>You must be logged in to checkout.</p>
      )}
    </section>
  );
}

export default CartPage;
