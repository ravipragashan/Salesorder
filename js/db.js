if (!localStorage.suppliers) {
  localStorage.suppliers = JSON.stringify([
    {
      id: 1,
      name: "Secura Engineers",
      address: "No. 24/4b Linton Grounds Peralanda",
      phone: "113679292"
    }
  ]);
}

if (!localStorage.orders) {
  localStorage.orders = JSON.stringify([]);
}
