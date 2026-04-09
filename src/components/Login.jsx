import React from "react";
import { useState } from "react";
import { loginUser } from "../api/auth";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const data = await loginUser(form);

      console.log("LOGIN RESPONSE:", data); // 🔍 DEBUG

      if (data.token) {
        // ✅ Save token + user
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // 🔥 Reload to update app state
        window.location.reload();
      } else {
        // ✅ Show real backend message
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("LOGIN ERROR:", err);
      alert("Something went wrong. Check backend.");
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
        <h2 className="text-xl font-semibold text-center">Login</h2>

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
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}