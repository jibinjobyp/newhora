const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");


const product = products[productId];


// Make sure the product exists
if (product) {
  document.getElementById("product-title").innerText = product.title;

} else {
  document.getElementById("product-title").innerText = "Product not found";
}
