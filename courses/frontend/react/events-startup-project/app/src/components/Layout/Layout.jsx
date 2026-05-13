import "./Layout.css";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Layout({ children, onLoginClick }) {
  const { user, logout } = useAuth();
  const { cartCount, clearCart } = useCart();
  const [showMenu, setShowMenu] = useState(false);

  function handleLogout() { 
    logout();
    clearCart();
    setShowMenu(false);
  }

  return (
    <div>
      <header>
        <h1 className="logo">Event Startup</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/cart">Cart ({cartCount})</Link>

          {user ? (
            <div className="accountMenu">
              <button onClick={() => setShowMenu(!showMenu)}>Account ▼</button>

              {showMenu && (
                <div className="dropdownMenu">
                   <p>{user.email}</p>
                  <Link to="/account">Profile</Link>
                  <Link to="/orders">Orders</Link>
                  <button onClick={handleLogout}>Sign out</button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={onLoginClick}>Login</button>
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
