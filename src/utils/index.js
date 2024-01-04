/**
 * tHIS FUNCTION CALCULATES TOTAL PRICES OF A NEW ORDER
 * @param {Array} product cartProduct: Array of Objets
 * @returns {total price}
 */


export const totalPrice = (products) => {
  let total = 0;
  products.forEach((product) => (total += product.price));
  return total.toFixed(2);
};
