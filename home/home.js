const ordersTableEl = document.getElementById("ordersTable");
const searchBarEl = document.getElementById("searchBar");

// Reset search
searchBarEl.value = "";

// Add all orders to ordersTable for first load of page
displayTable(getOrders());

function toListItem(order) {
  return `<a href="./../order/order.html?orderId=${order.orderid}"><li><b>${order.orderid}</b> ${order.customer}</li>`;
}

function search() {
  const keyword = searchBarEl.value.toLowerCase();
  let ordersToShow = getOrders();

  // If keyword is empty then dont filter
  if (keyword != null && keyword != "") {
    // Filter orders to get orders that match search

    if (keyword.startsWith("$")) {
      // If starts with '$', filter for price
      ordersToShow = ordersToShow.filter((order) => `$${order.totalprice}`.toLowerCase().includes(keyword));
    } else {
      ordersToShow = ordersToShow.filter(
        (order) =>
          order.orderid.toLowerCase().includes(keyword) ||
          order.customerid.toLowerCase().includes(keyword) ||
          order.customer.toLowerCase().includes(keyword)
      );
    }
  }

  // Reset ordersList
  ordersTableEl.innerHTML = "";

  // Update ordersList to show new filtered items
  if (ordersToShow.length > 0) {
    displayTable(ordersToShow);
  } else {
    // if no items in ordersToShow, give no orders to show message
    ordersTableEl.innerHTML = "No orders match your search";
  }
}

function displayTable(ordersToShow) {
  ordersTableEl.innerHTML += `
    <tr>
      <th>Order ID</th>
      <th>Customer ID</th>
      <th>Customer</th>
      <th>Total Price</th>
    </tr>`;

  ordersToShow.forEach((order) => {
    ordersTableEl.innerHTML += `
      <tr onclick="goToOrderDetails(${order.orderid})">
        <td>${order.orderid}</td>
        <td>${order.customerid}</td>
        <td>${order.customer}</td>
        <td>$${order.totalprice}</td>
      </tr>
      `;
  });
}

function goToOrderDetails(orderId) {
  window.location = `./../order/order.html?orderId=${orderId}`;
}
