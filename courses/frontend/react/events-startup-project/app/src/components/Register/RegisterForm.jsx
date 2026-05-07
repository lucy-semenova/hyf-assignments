import { useState } from "react";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(event) {
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

    setSuccess("Register form is valid.");
  }

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
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