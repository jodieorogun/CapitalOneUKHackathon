const API_BASE = "http://localhost:5001";

async function doLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorEl  = document.getElementById("login-error");
  errorEl.style.display = "none";

  if (!username || !password) {
    showError("Please enter your username and password.");
    return;
  }

  try {
    const res  = await fetch(`${API_BASE}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();

    if (!res.ok) {
      showError(data.error || "Login failed.");
      return;
    }
    window.location.href = "index.html";
  } catch (e) {
    showError("Could not connect to the server. Is the backend running?");
  }
}

function showError(msg) {
  const el = document.getElementById("login-error");
  el.textContent = msg;
  el.style.display = "block";
}

document.addEventListener("keydown", (e) => { if (e.key === "Enter") doLogin(); });
