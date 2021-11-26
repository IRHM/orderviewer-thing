initLocalStorage();

function initLocalStorage() {
  // If localstorage is empty, set it to default orders data
  if (!localStorage.getItem("orders")) {
    localStorage.setItem("orders", JSON.stringify(ORDERS));
  }
}

// (async () => {
//   let ordersDB = await initializeLocalDB();

//   const ordersStore = ordersDB.transaction(["orders"], "readonly").objectStore("orders");
//   const ordersReq = ordersStore.getAll();

//   ordersReq.onsuccess = (event) => {
//     console.log(event);
//   };

//   ordersReq.onerror = (e) => {
//     console.log("Error", e);
//   };
// })();

// function initializeLocalDB() {
//   console.log("hi");
//   return new Promise((resolve, reject) => {
//     let req = window.indexedDB.open("app", 13);

//     req.onsuccess = (e) => {
//       console.log("Opened db", req.result);
//       resolve(req.result);
//     };

//     req.onerror = (e) => {
//       console.error("Error opening db", req.error);
//       reject(req.error);
//     };

//     // If database is just created or version is updated
//     req.onupgradeneeded = (e) => {
//       let db = e.target.result;
//       let objectStore;

//       if (!db.objectStoreNames.contains("orders")) {
//         objectStore = db.createObjectStore("orders", { keyPath: "oi", autoIncrement: true });
//       } else {
//         objectStore = e.target.transaction.objectStore("orders");
//       }

//       const ixn = objectStore.indexNames;

//       if (!ixn.contains("orderid")) objectStore.createIndex("orderid", "orderid", { unique: true });
//       if (!ixn.contains("customerid")) objectStore.createIndex("customerid", "customerid", { unique: false });
//       if (!ixn.contains("customer")) objectStore.createIndex("customer", "customer", { unique: false });
//       if (!ixn.contains("invaddr")) objectStore.createIndex("invaddr", "invaddr", { unique: false });
//       if (!ixn.contains("delivaddr")) objectStore.createIndex("delivaddr", "delivaddr", { unique: false });
//       if (!ixn.contains("deliverydate")) objectStore.createIndex("deliverydate", "deliverydate", { unique: false });
//       if (!ixn.contains("respsalesperson"))
//         objectStore.createIndex("respsalesperson", "respsalesperson", { unique: false });
//       if (!ixn.contains("comment")) objectStore.createIndex("comment", "comment", { unique: false });
//       if (!ixn.contains("totalprice")) objectStore.createIndex("totalprice", "totalprice", { unique: false });
//       if (!ixn.contains("products")) objectStore.createIndex("products", "products", { unique: false });

//       objectStore.transaction.oncomplete = function (e) {
//         let ordersObjStore = db.transaction(["orders"], "readwrite").objectStore("orders");
//         ORDERS.forEach(function (order) {
//           console.log("Adding order to store: ", order);
//           ordersObjStore.add(order);
//         });
//       };
//     };
//   });
// }

function logout() {
  localStorage.setItem("loggedin", null);
  window.location = "../index.html";
}
