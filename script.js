const API = "https://script.google.com/macros/s/AKfycbzL7AXYEby0ONxKjVg92hiPFNqxLrph89idCuMXMSadcELzvrQO1JhbUrunjap1xVim/exec"; // 🔁 replace with your Apps Script URL


// 🔐 DEVICE ID
function getDeviceId() {
  let id = localStorage.getItem("device_id");

  if (!id) {
    id = "dev_" + Math.random().toString(36).substr(2, 9);
    localStorage.setItem("device_id", id);
  }

  return id;
}


// LOGIN
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const device_id = getDeviceId();

  fetch(API, {
    method: "POST",
    body: JSON.stringify({ email, password, device_id })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      localStorage.setItem("token", data.token);
      alert("Login success");
      window.location.href = "dashboard.html";
    } else {
      alert(data.msg);
    }
  });
}


// CHECK AUTH + LOAD DATA
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("dashboard.html")) {

    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "index.html";
      return;
    }

    loadData();

    setInterval(loadData, 10000); // auto refresh
  }
});


function loadData() {
  const token = localStorage.getItem("token");

  fetch(API + "?token=" + token + "&device_id=" + getDeviceId())
    .then(res => res.json())
    .then(data => {

      if (data.error) {
        alert(data.error);
        logout();
        return;
      }

      renderTable(data);
    });
}


// TABLE
function renderTable(data) {
  let html = "<table border='1' style='width:100%; text-align:center'>";
  
  const headers = Object.keys(data[0]);

  html += "<tr>";
  headers.forEach(h => html += `<th>${h}</th>`);
  html += "</tr>";

  data.forEach(row => {
    html += "<tr>";
    headers.forEach(h => {
      let val = row[h];

      if (val === "BUY") val = "<span style='color:green'>BUY</span>";
      if (val === "SELL") val = "<span style='color:red'>SELL</span>";

      html += `<td>${val}</td>`;
    });
    html += "</tr>";
  });

  html += "</table>";

  document.getElementById("data").innerHTML = html;
}


// LOGOUT
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
