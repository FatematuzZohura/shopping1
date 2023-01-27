function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const previousNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(previousNumberString);

    let newPhoneNumber;
    if (isIncrease == true) {
        newPhoneNumber = previousPhoneNumber + 1;
    } else {
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePhonePrice(newPhoneNumber) {

    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById("phone-total");
    phoneTotalElement.innerText = phoneTotalPrice;

}







document.getElementById("button-phone-plus").addEventListener('click', function() {

    const newPhoneNumber = updatePhoneNumber(true);

    updatePhonePrice(newPhoneNumber);

    calculateSubTotal();






});

document.getElementById("button-phone-minus").addEventListener('click', function() {

    const newPhoneNumber = updatePhoneNumber(false);

    updatePhonePrice(newPhoneNumber);
    calculateSubTotal();




});