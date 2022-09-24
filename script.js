var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;

        showOutput(`Hey the loss is ${loss} and the percentage of loss is ${lossPercentage}%`);
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;

        showOutput(`Hey the profit is ${profit} and the percentage of profit is ${profitPercentage}%`);
    } else {
        showOutput("No pain no gain and no gain no pain");
    }
}

function submitHandler() {
    var ip = initialPrice.value;
    var qty = stocksQuantity.value;
    var curr = currentPrice.value;

    calculateProfitAndLoss(ip, qty, curr);
}

function showOutput(message) {
    outputBox.innerHTML = message;
}

submitBtn.addEventListener("click", submitHandler);