function renewContract(response) {
    var contractText = document.getElementById('contractText');
    var buttons = document.getElementById('buttons');

    if (response === 'yes') {
        contractText.innerHTML = "Success! Contract renewed.";
    } else if (response === 'no') {
        contractText.innerHTML = "Contract not renewed.";
        buttons.style.pointerEvents = "none"; // Disable buttons
    }
}
