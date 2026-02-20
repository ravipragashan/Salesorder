import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

window.savePO = async function () {

  const vendor = document.getElementById("vendor").value;
  const date = document.getElementById("date").value;
  const poNumber = document.getElementById("poNumber").value;
  const subtotal = document.getElementById("subtotal").value;
  const status = document.getElementById("status").value;

  await addDoc(collection(db, "purchaseOrders"), {
    vendor,
    date,
    poNumber,
    subtotal,
    status,
    createdAt: new Date()
  });

  alert("Purchase Order Saved!");
  window.location.href = "purchase.html";
};
