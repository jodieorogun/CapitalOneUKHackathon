const API_BASE = "http://localhost:5001";

async function doSignup() {
    const username = document.getElementById("username").value.trim();
    const password =document.getElementById("password").value.trim();
    const name =document.getElementById("name").value.trim();
    const email =document.getElementById("email").value.trim();
  if (!username ) {
    showError("Please enter your username");
    return;
  }
  if (!password ) {
    showError("Please enter your password.");
    return;
  }
  if (!name) {
    showError("Please enter your name.");
    return;
  }
    if (!email) {
    showError("Please enter your email.");
    return;
  }
  try {
    const res  = await fetch(`${API_BASE}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ username, password, email, name }),
    });
    const data = await res.json();

    if (!res.ok) {
      showError(data.error || "Login failed.");
      return;
    }
    window.location.href = "signup.html";
  } catch (e) {
    showError("Could not connect to the server. Is the backend running?");
  }
}

function showError(msg) {
  const el = document.getElementById("register");
  el.textContent = msg;
  el.style.display = "block";
}

document.addEventListener("keydown", (e) => { if (e.key === "Enter") doSignup(); });

  // TODO: Read name, email, username and password from the form inputs

  // TODO: Validate the fields, then POST { name, email, username, password } to /register
  // TODO: Handle success (redirect to login.html) and failure appropriately

