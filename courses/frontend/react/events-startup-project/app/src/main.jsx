import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout/Layout";
import EventSection from "./components/EventSection/EventSection";
import Login from "./components/Login/Login";
import "./main.css";


function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Layout onLoginClick={() => setShowLogin(true)}>
      <EventSection />

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </Layout>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

/*
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import EventList from "./components/EventList/EventList.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import "./main.css";
// Cart model: cart items are stored in localStorage via CartContext (no backend needed).
// At checkout, the cart is POSTed to POST /api/orders and then cleared.
// CartContext should follow the same pattern as AuthContext — see that file for reference.

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "events", element: <EventList /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
*/
