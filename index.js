const myCheckBox = document.getElementById("myCheckBox")
const visaBtn = document.getElementById("visaBtn")
const mastercardBtn = document.getElementById("mastercardBtn")
const rupayBtn = document.getElementById("rupayBtn")
const submit = document.getElementById("submit")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")

submit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = "You are subscribed";
    }
    else{
        subResult.textContent = "You are not subscribed";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "You are paying with Visa";
    }

    else if(mastercardBtn.checked){
        paymentResult.textContent = "You are paying with MasterCard";
    }

    else if(rupayBtn.checked){
        paymentResult.textContent = "You are paying with Rupay Card";
    }

    else{
        paymentResult.textContent = "Please select a payment method"
    }
}
