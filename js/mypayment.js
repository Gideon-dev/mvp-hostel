
let subTotal = document.querySelector(".sub-total-bal");
let total = document.querySelector(".balance");
let historyTotal = document.querySelector(".h-price");

const cleanedSubTotal = parseFloat(subTotal.innerHTML);
const cleanedtotal = parseFloat(total.innerHTML);


subTotal.innerHTML = formatCurrency(cleanedSubTotal);
total.innerHTML  = formatCurrency(cleanedtotal);
historyTotal.innerHTML = formatCurrency(cleanedtotal);






function formatCurrency(amount) {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(amount);
};
  