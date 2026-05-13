import { useState } from "react";
import Layout from "./components/Layout/Layout";
import EventSection from "./components/EventSection/EventSection";
import Login from "./pages/Login/Login";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Layout onLoginClick={() => setShowLogin(true)}>
      <EventSection />

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </Layout>
  );
}

export default App;