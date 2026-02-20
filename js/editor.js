const suppliers = JSON.parse(localStorage.suppliers);
const select = document.getElementById("supplierSelect");

suppliers.forEach(s => {
  select.innerHTML += `<option value="${s.name}">${s.name}</option>`;
});

select.addEventListener("change", () => {
  const supplier = suppliers.find(s => s.name === select.value);
  document.getElementById("supplierDetails").innerHTML =
    supplier.address + "<br>" + supplier.phone;
});

function addRow() {
  const row = `
    <tr>
      <td><input type="text" class="desc"></td>
      <td><input type="number" class="qty" oninput="calc()"></td>
      <td><input type="number" class="rate" oninput="calc()"></td>
      <td class="lineTotal">0</td>
      <td><button onclick="this.closest('tr').remove(); calc()">X</button></td>
    </tr>
  `;
  document.querySelector("#itemsTable tbody").innerHTML += row;
}

function calc() {
  let total = 0;
  document.querySelectorAll("#itemsTable tbody tr").forEach(tr => {
    const qty = tr.querySelector(".qty").value || 0;
    const rate = tr.querySelector(".rate").value || 0;
    const lineTotal = qty * rate;
    tr.querySelector(".lineTotal").innerText = lineTotal.toFixed(2);
    total += lineTotal;
  });
  document.getElementById("grandTotal").innerText = total.toFixed(2);
}

function saveOrder() {
  const orders = JSON.parse(localStorage.orders);
  const newOrder = {
    id: Date.now(),
    date: document.getElementById("date").value,
    number: document.getElementById("number").value,
    supplier: select.value,
    total: document.getElementById("grandTotal").innerText,
    status: "Draft"
  };
  orders.push(newOrder);
  localStorage.orders = JSON.stringify(orders);
  window.location = "index.html";
}
