import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
function handleSubmit(event) {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  // Handle login logic here
}
return (
<form onSubmit={handleSubmit}>
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