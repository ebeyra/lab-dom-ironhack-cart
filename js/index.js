// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceElem = product.querySelector('.price span');
  const price = Number(priceElem.innerHTML);

  const quantityElem = product.querySelector('.quantity input');
  const quantity = Number(quantityElem.value);

  const sub = price * quantity;

  const subElem = product.querySelector('.subtotal span');
  subElem.innerHTML = sub;

  const subTotal = Number(subElem.innerHTML);

  console.log(subTotal);
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const productAll = document.querySelectorAll('.product');
  let sum = 0;
  for (let i = 0; i < productAll.length; i++) {
    updateSubtotal(productAll[i]);
    sum += updateSubtotal(productAll[i]);
  }

  // ITERATION 3
  //... your code goes here
  const totalPriceElem = document.querySelector('#total-value span');
  totalPriceElem.innerHTML = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
