document.getElementById("convertBtn").addEventListener("click", () => {
  const amountStr = document.getElementById("amount").value.trim();
  const currency = document.getElementById("currency").value;
  const resultField = document.getElementById("result");

  const rates = {
    eur: 4.2,
    usd: 3.9,
    gbp: 5.0
  };

  const amount = parseFloat(amountStr);
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid number!");
    resultField.value = "";
    return;
  }

  const converted = amount * rates[currency];
  resultField.value = converted.toFixed(2)  + " ₪";

  alert("Converted Amount: " + converted.toFixed(2) + " ₪");
});
