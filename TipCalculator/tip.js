

function calcTip() {
    
    var tipPercentage = parseFloat(document.getElementById("tip").value);
    var subtotal = parseFloat(document.getElementById("subtotal").value);

    var total = document.getElementById("total");
    total.innerHTML = subtotal + (subtotal*(0.01)*tipPercentage);


    document.getElementById("total").value = subtotal + (subtotal*(0.01)*tipPercentage);

}