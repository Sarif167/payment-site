function payNow() {
    const name = document.getElementById("name").value.trim();
    const amount = document.getElementById("amount").value.trim();

    if (name === "" || amount === "") {
        alert("Please enter your name and amount.");
        return;
    }

    const upi = "upi://pay?pa=BHARATPE.9QOQKOZ8Q466572@unitype&pn=SEKH SARIF&am=" + amount + "&cu=INR";

    document.getElementById("loader").style.display = "flex";

    setTimeout(() => {
        window.location.href = upi;
    }, 2000);
}
