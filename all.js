function logout() {
  localStorage.setItem("loggedin", null);
  window.location = "../index.html";
}
