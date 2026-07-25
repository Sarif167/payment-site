
function payNow() {
    let name = document.getElementById("name").value.trim();
    let amount = document.getElementById("amount").value.trim();

    if (name === "" || amount === "") {
        alert("Please enter your Name and Amount.");
        return;
    }

    document.getElementById("loader").style.display = "flex";

    setTimeout(function () {
        document.getElementById("loader").style.display = "none";

        let upi = "upi://pay?pa=BHARATPE.9QOQKOZ8Q466572@unitype&pn=SEKH%20SARIF&am=" + amount + "&cu=INR";

        window.location.href = upi;
    }, 2000);
}

function paid() {
    let txn = document.getElementById("txn").value.trim();

    if (txn === "") {
        alert("Please enter Transaction ID");
        return;
    }

    alert("Payment details submitted successfully.\n\nTransaction ID: " + txn);
}
