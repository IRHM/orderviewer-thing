initLocalStorage();

function initLocalStorage() {
  // If localstorage is empty, set it to default orders data
  if (!localStorage.getItem("orders")) {
    localStorage.setItem("orders", JSON.stringify(ORDERS));
  }
}

function logout() {
  localStorage.setItem("loggedin", null);
  window.location = "../index.html";
}
