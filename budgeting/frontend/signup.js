const API_BASE = "http://localhost:5001";

async function doSignup() {
  // TODO: Read name, email, username and password from the form inputs

  // TODO: Validate the fields, then POST { name, email, username, password } to /register
  // TODO: Handle success (redirect to login.html) and failure appropriately
}

document.addEventListener("keydown", (e) => { if (e.key === "Enter") doSignup(); });
