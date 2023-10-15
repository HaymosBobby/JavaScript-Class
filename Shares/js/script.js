const btnProcess = document.querySelector(".btn");
let shareEl = document.querySelector(".shares");
let amountEl = document.querySelector(".amount");

let totalShares, processedAmt;

totalShares = 4000;
processedAmt = 0;
shareEl.innerText = totalShares;

amountEl.innerText = processedAmt;

btnProcess.addEventListener("click", (e) => {
  let amount = document.querySelector(".no-of-unit").value;

  if (amount) {
    processedAmt = amount * 10;
    amountEl.innerText = processedAmt;

    totalShares -= amount;
    shareEl.innerText = totalShares;

    amount = 0;
    document.querySelector(".no-of-unit").value = "";
  } else {
    alert("Fill in the input");
  }
});
