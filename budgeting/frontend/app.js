const API_BASE = "http://localhost:5001";

async function loadDashboard() {
  try {
    const userRes = await fetch(`${API_BASE}/customer`, { credentials: "include" });
    if (userRes.status === 401) { window.location.href = "login.html"; return; }
    const user = await userRes.json();

    // TODO: Display welcome message and populate the budgets table
    // Each row needs: month/year, income, carryover, outgoings, spend percentage,
    // date created, date edited, and Edit (budget.html?id=X) / Delete buttons

    const res  = await fetch(`${API_BASE}/budgets`, { credentials: "include" });
    const data = await res.json();

  } catch (e) {
    console.error("Failed to load dashboard:", e);
  }
}

async function deleteBudget(id) {
  if (!confirm("Delete this budget?")) return;
  try {
    const res = await fetch(`${API_BASE}/budgets/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (res.ok) loadDashboard();
  } catch (e) {
    console.error("Failed to delete budget:", e);
  }
}

function editBudget(id) {
  window.location.href = `budget.html?id=${id}`;
}

async function doLogout() {
  await fetch(`${API_BASE}/logout`, { method: "POST", credentials: "include" });
  window.location.href = "login.html";
}

window.addEventListener("DOMContentLoaded", loadDashboard);
