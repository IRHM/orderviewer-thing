const ordersListEl = document.getElementById("ordersList");
const searchBarEl = document.getElementById("searchBar");

// Reset search
searchBarEl.value = "";

// Add all orders to ordersList for first load of page
getOrders().forEach((order) => {
  ordersListEl.innerHTML += toListItem(order);
});

function toListItem(order) {
  return `<a href="./../order/order.html?orderId=${order.orderid}"><li><b>${order.orderid}</b> ${order.customer}</li>`;
}

function search() {
  const keyword = searchBarEl.value.toLowerCase();
  let ordersToShow = getOrders();

  // If keyword is empty then dont filter
  if (keyword != null && keyword != "") {
    // Filter orders to get orders that match search
    ordersToShow = ordersToShow.filter(
      (order) => order.orderid.includes(keyword) || order.customer.toLowerCase().includes(keyword)
    );
  }

  // Reset ordersList
  ordersListEl.innerHTML = "";

  // Update ordersList to show new filtered items
  let ih = "No orders match your search";

  if (ordersToShow.length > 0) {
    ih = ordersToShow.map(toListItem).join("");
  }

  ordersListEl.innerHTML = ih;
}
