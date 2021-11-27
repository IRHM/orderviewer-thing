const rightMenuEl = document.getElementById("rightMenu");
const els = {
  markOrderAsCollected: document.getElementById("markOrderAsCollected"),
  orderid: document.getElementById("orderid"),
  customerid: document.getElementById("customerid"),
  customername: document.getElementById("customername"),
  invaddr: document.getElementById("invaddr"),
  delivaddr: document.getElementById("delivaddr"),
  deliverydate: document.getElementById("deliverydate"),
  respsalesperson: document.getElementById("respsalesperson"),
  collected: document.getElementById("collected"),
  comment: document.getElementById("comment"),
  totalprice: document.getElementById("totalprice"),
  productsTable: document.getElementById("productsTable")
};

// Hide print button for print
window.onbeforeprint = () => {
  rightMenuEl.style.display = "none";
};

// Show print button again once done
window.onafterprint = () => {
  rightMenuEl.style.display = "block";
};

function printOrder() {
  window.print();
}

function markOrderAsCollected() {
  const order = getOrder();
  const collected = order.collected ? false : true;

  let orders = getOrders();
  orders.filter((e) => e.orderid == order.orderid)[0].collected = collected;

  saveOrder(orders);

  // Update order details shown
  showOrderDetails();
}

function saveComment() {
  const order = getOrder();

  let orders = getOrders();
  orders.filter((e) => e.orderid == order.orderid)[0].comment = els.comment.value;

  saveOrder(orders);
}

function getOrderId() {
  const urlParams = new URLSearchParams(window.location.search);
  const orderId = urlParams.get("orderId");

  // If no order Id in the link, go back to home page
  if (!orderId) window.location = "../home/home.html";

  return orderId;
}

function getOrder() {
  return getOrders().filter((order) => order.orderid == getOrderId())[0];
}

function showOrderDetails() {
  const order = getOrder();

  els.markOrderAsCollected.innerHTML = order.collected ? "Mark Uncollected" : "Mark Collected";
  els.orderid.innerHTML = order.orderid;
  els.customerid.innerHTML = order.customerid;
  els.customername.innerHTML = order.customer;
  els.invaddr.innerHTML = order.invaddr;
  els.delivaddr.innerHTML = order.delivaddr;
  els.deliverydate.innerHTML = order.deliverydate;
  els.respsalesperson.innerHTML = order.respsalesperson;
  els.collected.innerHTML = order.collected ? order.collected : "false";
  els.comment.value = order.comment;
  els.totalprice.innerHTML = `$${order.totalprice}`;
  els.productsTable.innerHTML = `
  <tr>
    <th>Code</th>
    <th>Product</th>
    <th>Description</th>
    <th>Supplier Code</th>
    <th>Quantity</th>
    <th>Unit Price</th>
    <th>Shelf Position</th>
  </tr>`;

  order.products.forEach((product) => {
    els.productsTable.innerHTML += `
    <tr>
      <td>${product.code}</td>
      <td>${product.product}</td>
      <td>${product.description}</td>
      <td>${product.suppliercode}</td>
      <td>${product.qty}</td>
      <td>$${product.unit_price}</td>
      <td>${product.shelf_pos}</td>
    </tr>
    `;
  });
}

showOrderDetails();
