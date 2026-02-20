const tableBody = document.querySelector("#soTable tbody");
const orders = JSON.parse(localStorage.orders);

orders.forEach(order => {
  const row = `
    <tr onclick="editOrder(${order.id})">
      <td>${order.date}</td>
      <td>${order.number}</td>
      <td>${order.supplier}</td>
      <td>${order.total}</td>
      <td>${order.status}</td>
    </tr>
  `;
  tableBody.innerHTML += row;
});

function newOrder() {
  window.location = "editor.html";
}

function editOrder(id) {
  window.location = "editor.html?id=" + id;
}
