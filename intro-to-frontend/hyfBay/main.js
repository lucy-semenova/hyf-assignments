console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(items) {
const productList = document.querySelector("#product-list")

  productList.innerHTML = "";
  
  items.forEach((product) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <h2>${product.name}</h2>
      <p>Price: $${product.price}</p>
      <p>Rating: ${product.rating} / 5</p>
    `;
    productList.appendChild(li);
  });
}

renderProducts(products); 
