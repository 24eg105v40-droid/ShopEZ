import { User, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");
const navigate = useNavigate();

const handleLogin = async () => {
  try {
    const res = await axios.post(
      "http://localhost:8000/api/auth/login",
      {
        email,
        password,
      }
    );

    localStorage.setItem("token", res.data.token);

localStorage.setItem(
  "user",
  JSON.stringify(res.data.user)
);

   setMessage("Login Successful!");

setTimeout(() => {
  navigate("/");
}, 1000);
    console.log(res.data);
  } catch (error) {
   setMessage(
  error.response?.data?.message || "Login Failed"
);
  }
};
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAF8F5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "50px",
          borderRadius: "35px",
          width: "400px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >
        <h1 style={{ marginBottom: "30px" }}>
          Welcome Back
        </h1>

        <div
          style={{
            background: "#F5F5F5",
            padding: "15px",
            borderRadius: "20px",
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <User size={18} />
         <input
  type="email"
  placeholder="Email"
  style={{
    border: "none",
    outline: "none",
    background: "transparent",
    width: "100%",
  }}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
        </div>

        <div
          style={{
            background: "#F5F5F5",
            padding: "15px",
            borderRadius: "20px",
            display: "flex",
            gap: "10px",
          }}
        >
          <Lock size={18} />
       <input
  type="password"
  placeholder="Password"
  style={{
    border: "none",
    outline: "none",
    background: "transparent",
    width: "100%",
  }}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
        </div>
{message && (
<div
  style={{
    background: "#FFE8E8",
    color: "green",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "15px",
    fontWeight: "bold",
  }}
>
  {message}
</div>
)}
       <button
  onClick={handleLogin}
  style={{
    width: "100%",
    marginTop: "30px",
    padding: "18px",
    borderRadius: "25px",
    background: "#EAE4FF",
    fontWeight: "600",
  }}
>
  Login
</button>
        <p
  style={{
    textAlign: "center",
    marginTop: "20px",
  }}
>
  Don't have an account?{" "}
  <Link to="/register">
    Register
  </Link>
</p>
      </div>
    </div>
  );
}

export default Login;