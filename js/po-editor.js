
import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const vendorSelect = document.getElementById("vendorSelect");
const itemsBody = document.getElementById("itemsBody");

async function loadVendors() {
  const snapshot = await getDocs(collection(db, "vendors"));
  snapshot.forEach(doc => {
    const v = doc.data();
    vendorSelect.innerHTML += `<option>${v.name}</option>`;
  });
}
loadVendors();

window.addRow = function() {
  const row = document.createElement("tr");
  row.innerHTML = `
  <td><input class="border p-1"></td>
  <td><input type="number" class="border p-1 qty"></td>
  <td><input type="number" class="border p-1 rate"></td>
  <td class="total">0</td>`;
  itemsBody.appendChild(row);
  row.querySelectorAll("input").forEach(i => i.addEventListener("input", calculate));
}

function calculate() {
  let subtotal = 0;
  document.querySelectorAll("#itemsBody tr").forEach(row => {
    const qty = row.querySelector(".qty").value || 0;
    const rate = row.querySelector(".rate").value || 0;
    const total = qty * rate;
    row.querySelector(".total").innerText = total;
    subtotal += total;
  });
  document.getElementById("subtotal").innerText = subtotal;
}

window.savePO = async function() {
  const vendor = vendorSelect.value;
  const date = document.getElementById("date").value;
  const poNumber = document.getElementById("poNumber").value;
  const status = document.getElementById("status").value;
  const subtotal = document.getElementById("subtotal").innerText;

  await addDoc(collection(db, "purchaseOrders"), {
    vendor, date, poNumber, status, subtotal
  });

  alert("Purchase Order Saved");
  window.location = "purchase.html";
}
