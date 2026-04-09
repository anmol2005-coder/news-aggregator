const BASE_URL = "https://news-aggregator-mxze.onrender.com/api/auth";

// 🔐 LOGIN
export const loginUser = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      return { message: data.message || "Login failed" };
    }

    return data;
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    return { message: "Server not reachable" };
  }
};

// 📝 REGISTER
export const registerUser = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      return { message: data.message || "Registration failed" };
    }

    return data;
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    return { message: "Server not reachable" };
  }
};