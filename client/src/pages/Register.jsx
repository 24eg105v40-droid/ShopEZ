import { User, Mail, Lock } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");
const navigate = useNavigate();

const handleRegister = async () => {
  try {
    const res = await axios.post(
      "http://localhost:8000/api/auth/register",
      {
        name,
        email,
        password,
      }
    );

    setMessage("Registration Successful!");

setTimeout(() => {
  navigate("/");
}, 1000);
    console.log(res.data);
  } catch (error) {
    alert(error.response?.data?.message || "Registration Failed");
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
          Create Account
        </h1>

        <div style={boxStyle}>
          <User size={18} />
          <input
  type="text"
  placeholder="Name"
  style={inputStyle}
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
        </div>

        <div style={boxStyle}>
          <Mail size={18} />
          <input
  type="email"
  placeholder="Email"
  style={inputStyle}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
        </div>

        <div style={boxStyle}>
          <Lock size={18} />
          <input
  type="password"
  placeholder="Password"
  style={inputStyle}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
        </div>
{message && (
  <div
    style={{
      background: "#DDEEDF",
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
  onClick={handleRegister}
  style={{
    width: "100%",
    marginTop: "25px",
    padding: "18px",
    borderRadius: "25px",
    background: "#DDEEDF",
    fontWeight: "600",
  }}
>
  Register
</button>
      </div>
    </div>
  );
}

const boxStyle = {
  background: "#F5F5F5",
  padding: "15px",
  borderRadius: "20px",
  display: "flex",
  gap: "10px",
  marginBottom: "18px",
};

const inputStyle = {
  border: "none",
  outline: "none",
  background: "transparent",
  width: "100%",
};

export default Register;