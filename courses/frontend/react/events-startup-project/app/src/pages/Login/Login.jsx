import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../Register/RegisterForm";
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
