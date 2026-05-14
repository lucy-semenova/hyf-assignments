import "./Layout.css";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { ShoppingCart, User } from "lucide-react";

export default function Layout({ children, onLoginClick }) {
  const { user, logout } = useAuth();
  const { cartCount, clearCart } = useCart();

  function handleLogout() {
    logout();
    clearCart();
  }

  return (
    <div>
      <header className="header">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Event Startup logo" className="logoImage" />
        </Link>

        <Link to="/" className="logoText">
          EVENT STARTUP
        </Link>

        <nav className="navbar">
          <Link to="/cart" className="navButton">
            <ShoppingCart size={24} />
            <span>Cart</span>
            <span className="cartCount">{cartCount}</span>
          </Link>
          {user && (
            <>
              <Link to="/account" className="navButton">
                Account
              </Link>

              <Link to="/orders" className="navButton">
                Orders
              </Link>
            </>
          )}
          {user ? (
            <button className="navButton" onClick={handleLogout}>
              <User size={24} />
              <span>Sign out</span>
            </button>
          ) : (
            <button className="navButton" onClick={onLoginClick}>
              <User size={24} />
              <span>Login</span>
            </button>
          )}
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>© 2026 Event Startup</p>
      </footer>
    </div>
  );
}
