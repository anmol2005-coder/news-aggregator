const BASE_URL = "https://news-aggregator-mxze.onrender.com/api/auth";

// LOGIN
export const loginUser = async (formData) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  return res.json();
};

// REGISTER
export const registerUser = async (formData) => {
  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  return res.json();
};