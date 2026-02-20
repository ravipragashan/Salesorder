import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const table = document.getElementById("poTable");

async function loadPO() {
  const querySnapshot = await getDocs(collection(db, "purchaseOrders"));

  table.innerHTML = "";

  querySnapshot.forEach(doc => {
    const data = doc.data();
    table.innerHTML += `
      <tr class="border-b">
        <td class="p-2">${data.date}</td>
        <td>${data.poNumber}</td>
        <td>${data.vendor}</td>
        <td>${data.status}</td>
        <td>${data.subtotal}</td>
      </tr>
    `;
  });
}

loadPO();
