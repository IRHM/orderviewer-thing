initLocalStorage();

function initLocalStorage() {
  // If localstorage is empty, set it to default orders data
  if (!localStorage.getItem("orders")) {
    localStorage.setItem("orders", JSON.stringify(ORDERS));
  }
}

function getOrders() {
  return JSON.parse(localStorage.getItem("orders"));
}

function saveOrder(orders) {
  localStorage.setItem("orders", JSON.stringify(orders));
}

function logout() {
  localStorage.setItem("loggedin", null);
  window.location = "../index.html";
}
