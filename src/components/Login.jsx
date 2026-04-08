import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://news-aggregator-mxze.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      // save token
      localStorage.setItem("token", res.data.token);

      alert("Login successful ✅");
    } catch (err) {
      alert("Login failed ❌");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-4">
      <h2 className="text-2xl font-bold">Login</h2>

      <input
        type="email"
        placeholder="Email"
        className="p-2 border rounded w-64"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="p-2 border rounded w-64"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
};

export default Login;