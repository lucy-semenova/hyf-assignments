import { useState } from "react";
import "./LoginForm.css";
import { useAuth } from "../../context/AuthContext";


function LoginForm() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { login } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setSuccess("");
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Password is required.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    try {
      await login(email, password);
      setSuccess("Login successful.");
    } catch (err) {
      setError(err.message);
    }
  }
return (
    <form className="loginForm" onSubmit={handleSubmit}>
           {error && <p className="errorMessage">{error}</p>}
    {success && <p className="successMessage">{success}</p>}

<input 
id="email" 
type="email" 
placeholder="Enter Email" 
value={email} 
onChange={(event) => setEmail(event.target.value)} />
    
<input 
id="password" 
type="password" 
placeholder="Enter Password" 
value={password} 
onChange={(event) => setPassword(event.target.value)} />

<button type="submit">Login</button>
</form>
);
}
export default LoginForm;