import React, { useState } from "react";
import { registerUser } from "../api/auth";

export default function Register({ setIsLogin }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const data = await registerUser(form);

      console.log("REGISTER RESPONSE:", data);

      if (data.message === "User registered successfully") {
        alert("Registered successfully! Please login.");

        // 🔥 Switch to login page
        setIsLogin(true);
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col gap-4 w-80"
      >
        <h2 className="text-xl font-semibold text-center">Register</h2>

        <input
          placeholder="Name"
          className="p-2 border rounded"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 disabled:opacity-50"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {/* 🔁 Switch to Login */}
        <p className="text-sm text-center">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setIsLogin(true)}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}