import { useState } from "react";
import Layout from "./components/Layout/Layout";
import EventSection from "./components/EventSection/EventSection";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Layout onLoginClick={() => setShowLogin(true)}>
        <Routes>
          <Route path="/" element={<EventSection />} />
          <Route path="/events" element={<EventSection />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </Layout>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default App;
