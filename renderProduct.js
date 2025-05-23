const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");


// const product = products[productId];


// // Make sure the product exists
// if (product) {
//   document.getElementById("product-title").innerText = product.title;

// } else {
//   document.getElementById("product-title").innerText = "Product not found";
// }


// Inside your document.ready function, after setting other product info:
const product = products[productId];

if (product.equipmentDetails) {
  const equipmentContainer = document.getElementById('equipment-details');
  let equipmentHTML = `<h3>${product.equipmentDetails.title}</h3>`;
  equipmentHTML += '<div class="equipment-grid">';
  
  product.equipmentDetails.items.forEach(item => {
    equipmentHTML += `
      <div class="equipment-item">
        <h4>${item.name}</h4>
        <p>${item.description}</p>
      </div>
    `;
  });
  
  equipmentHTML += '</div>';
  equipmentContainer.innerHTML = equipmentHTML;
} else {
  document.getElementById('equipment-details').style.display = 'none';
}