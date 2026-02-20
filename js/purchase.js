
import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const table = document.getElementById("poTable");

async function loadPO() {
  const snapshot = await getDocs(collection(db, "purchaseOrders"));
  table.innerHTML = "";
  snapshot.forEach(doc => {
    const d = doc.data();
    table.innerHTML += `
    <tr class="border-b">
    <td class="p-2">${d.date}</td>
    <td>${d.poNumber}</td>
    <td>${d.vendor}</td>
    <td>${d.status}</td>
    <td>${d.subtotal}</td>
    </tr>`;
  });
}
loadPO();
