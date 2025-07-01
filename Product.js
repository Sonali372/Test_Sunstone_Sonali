const products = {
  'apple': 1.2,
  'banana': 0.5,
  'orange': 0.8
};

function getProductPrice(productId) {
  return new Promise((resolve, reject) => {
    if (products.hasOwnProperty(productId)) {
      resolve(products[productId]);
    } else {
      reject("Product not found");
    }
  });
}

getProductPrice('banana')
  .then(price => console.log("Price:", price))
  .catch(err => console.error("Error:", err));
getProductPrice('grape')
    .then(price => console.log("Price:", price))
    .catch(err => console.error("Error:", err));
getProductPrice('apple')
  .then(price => console.log("Price:", price))
  .catch(err => console.error("Error:", err));
