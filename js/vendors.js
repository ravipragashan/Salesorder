
import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const table = document.getElementById("vendorTable");

window.addVendor = async function() {
  const name = document.getElementById("vendorName").value;
  const email = document.getElementById("vendorEmail").value;
  await addDoc(collection(db, "vendors"), { name, email });
  loadVendors();
}

async function loadVendors() {
  const snapshot = await getDocs(collection(db, "vendors"));
  table.innerHTML = "";
  snapshot.forEach(doc => {
    const v = doc.data();
    table.innerHTML += `<tr><td class="p-2">${v.name}</td><td>${v.email}</td></tr>`;
  });
}
loadVendors();
