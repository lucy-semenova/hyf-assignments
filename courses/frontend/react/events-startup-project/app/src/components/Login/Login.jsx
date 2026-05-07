// TODO: build a login form with relevant fields
// TODO: call login(email, password) from useAuth() on submit
// TODO: show a clear error message if login fails
// TODO: redirect to the event list on success
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import  RegisterForm from "../Register/RegisterForm";
import "./Login.css";

export default function Login({ onClose }) {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="loginOverlay">
      <div className="loginPage">
        <button className="loginCloseButton" onClick={onClose}>
          ✕
        </button>
        <h1 className="loginTitle"> {showRegister ? "Register" : "Login"}</h1>

         {showRegister ? <RegisterForm /> : <LoginForm />}
<p className="switchAuthText">
          {showRegister ? "Already have an account?" : "No account?"}

          <span onClick={() => setShowRegister(!showRegister)}>
            {showRegister ? " Login" : " Register"}
          </span>
        </p>
        
      </div>
    </div>
  );
}