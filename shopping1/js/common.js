function getTextElement(elementId) {

    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseFloat(currentPhoneTotalString);
    return currentPhoneTotal;
}




function setTextElementValurById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;

}

function calculateSubTotal() {

    //calculateTotal

    const currentPhoneTotal = getTextElement('phone-total');
    const currentCaseTotal = getTextElement('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;

    setTextElementValurById('sub-total', currentSubTotal);

    //calculateTax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);

    setTextElementValurById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValurById('final-total', finalAmount);



}