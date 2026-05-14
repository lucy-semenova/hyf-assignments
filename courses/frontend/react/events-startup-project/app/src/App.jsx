import { useState } from "react";
import Layout from "./components/Layout/Layout";
import EventSection from "./components/EventSection/EventSection";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Layout onLoginClick={() => setShowLogin(true)}>
        <Routes>
          <Route path="/" element={<EventSection />} />
          <Route path="/events" element={<EventSection />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Layout>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default App;
