function copyUPI() {
    const upi = document.getElementById("upi");

    upi.select();
    upi.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(upi.value);

    alert("UPI ID Copied");
}

function payNow() {

    let name = document.getElementById("name").value.trim();
    let amount = document.getElementById("amount").value.trim();

    if (name === "" || amount === "") {
        alert("Please enter your Name and Amount");
        return;
    }

    document.getElementById("loader").style.display = "flex";

    const upi =
        "upi://pay?pa=BHARATPE.9QOQKOZ8Q466572@unitype&pn=SEKH%20SARIF&am=" +
        amount +
        "&cu=INR";

    setTimeout(function () {
        window.location.href = upi;
    }, 2000);
}

function paid() {

    let name = document.getElementById("name").value.trim();
    let amount = document.getElementById("amount").value.trim();
    let txn = document.getElementById("txn").value.trim();

    if (name === "" || amount === "" || txn === "") {
        alert("Please fill Name, Amount and Transaction ID");
        return;
    }

    alert(
        "Payment request submitted.\n\nName: " +
        name +
        "\nAmount: ₹" +
        amount +
        "\nTransaction ID: " +
        txn
    );
}
