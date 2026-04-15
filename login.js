const API = "https://script.google.com/macros/s/AKfycbzL7AXYEby0ONxKjVg92hiPFNqxLrph89idCuMXMSadcELzvrQO1JhbUrunjap1xVim/exec";

function getDeviceId() {
  let id = localStorage.getItem("device_id");
  if (!id) {
    id = "dev_" + Math.random().toString(36).substr(2, 9);
    localStorage.setItem("device_id", id);
  }
  return id;
}

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
      localStorage.setItem("email", email);
      alert("Login success");
      window.location.href = "dashboard.html";
    } else {
      alert(data.msg);
    }
  });
}