import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { register } = useAuth();

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
      await register(email, password);
      setSuccess("Registration successful.");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form className="registerForm" onSubmit={handleSubmit}>
      {error && <p className="errorMessage">{error}</p>}

      {success && <p className="successMessage">{success}</p>}

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
