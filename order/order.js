const rightMenuEl = document.getElementById("rightMenu");

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

function markOrderAsCollected() {}

function getOrderId() {
  const urlParams = new URLSearchParams(window.location.search);
  const orderId = urlParams.get("orderId");

  return orderId;
}

function getOrder() {
  const orderId = getOrderId();

  const order = getOrders().filter((order) => order.orderid == orderId)[0];

  return order;
}

function showOrderDetails() {
  const order = getOrder();

  const els = {
    orderid: document.getElementById("orderid"),
    customerid: document.getElementById("customerid"),
    customername: document.getElementById("customername"),
    invaddr: document.getElementById("invaddr"),
    delivaddr: document.getElementById("delivaddr"),
    deliverydate: document.getElementById("deliverydate"),
    respsalesperson: document.getElementById("respsalesperson"),
    comment: document.getElementById("comment"),
    totalprice: document.getElementById("totalprice"),
    productsTable: document.getElementById("productsTable")
  };

  els.orderid.innerHTML = order.orderid;
  els.customerid.innerHTML = order.customerid;
  els.customername.innerHTML = order.customer;
  els.invaddr.innerHTML = order.invaddr;
  els.delivaddr.innerHTML = order.delivaddr;
  els.deliverydate.innerHTML = order.deliverydate;
  els.respsalesperson.innerHTML = order.respsalesperson;
  els.comment.innerHTML = order.comment;
  els.totalprice.innerHTML = order.totalprice;

  order.products.forEach((product) => {
    els.productsTable.innerHTML += `
    <tr>
      <td>${product.code}</td>
      <td>${product.product}</td>
      <td>${product.description}</td>
      <td>${product.suppliercode}</td>
      <td>${product.qty}</td>
      <td>${product.unit_price}</td>
      <td>${product.shelf_pos}</td>
    </tr>
    `;
  });
}

showOrderDetails();
