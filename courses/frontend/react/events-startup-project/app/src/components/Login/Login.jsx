// TODO: build a login form with relevant fields
// TODO: call login(email, password) from useAuth() on submit
// TODO: show a clear error message if login fails
// TODO: redirect to the event list on success
import LoginForm from "../LoginForm/LoginForm";
import "./Login.css";

export default function Login({ onClose }) {
  return (
    <div className="loginOverlay">
      <div className="loginPage">
        <button className="loginCloseButton" onClick={onClose}>
          ✕
        </button>
        <h1 className="loginTitle">Login</h1>

        <LoginForm />
        
      </div>
    </div>
  );
}