import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  Ticket,
  Trash2,
  ShoppingCart,
} from "lucide-react";
import "./CartPage.css";

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } =
    useCart();
  const { user } = useAuth();

  if (cartItems.length === 0) {
    return (
      <section className="cartPage">
        <Link to="/" className="backLink">
          ← Back to events
        </Link>

        <div className="cartEmpty">
          <h1>Your Cart</h1>
          <p>Your cart is empty.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="cartPage">
      <Link to="/" className="backLink">
        ← Back to events
      </Link>

      <h1>Your Cart</h1>

      <ul className="cartList">
        {cartItems.map((item) => (
          <li className="cartItem" key={item.id}>
            <h2>{item.title}</h2>

            <div className="cartInfo">
              <CalendarDays size={18} />
              <p>
                {item.date} at {item.time}
              </p>
            </div>

            <div className="cartInfo">
              <MapPin size={18} />
              <p>
                {item.venue}, {item.city}
              </p>
            </div>

            <div className="cartInfo">
              <Ticket size={18} />
              <p>{item.price === 0 ? "Free" : `${item.price} DKK`}</p>
            </div>

            <div className="cartQuantity">
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
            </div>

            <p>
              Total:{" "}
              {item.price === 0 ? "Free" : `${item.price * item.quantity} DKK`}
            </p>

            <button
              className="removeButton"
              onClick={() => removeFromCart(item.id)}
            >
              <Trash2 size={18} />
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="cartSummary">
        <h2>Total: {cartTotal === 0 ? "Free" : `${cartTotal} DKK`}</h2>

        <div className="cartSummaryActions">
          <button className="clearCartButton" onClick={clearCart}>
            Clear cart
          </button>

          <button className="checkoutButton" disabled={!user}>
            <ShoppingCart size={18} />
            Checkout
          </button>
        </div>

        {!user && (
          <p className="loginNotice">You must be logged in to checkout.</p>
        )}
      </div>
    </section>
  );
}

export default CartPage;