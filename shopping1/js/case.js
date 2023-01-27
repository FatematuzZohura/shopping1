function updateCase(isIncrease) {


    const caseNumber = document.getElementById('case-number-field');
    const caseNumberstring = caseNumber.value;
    const previousNumber = parseInt(caseNumberstring);

    let newCaseNumber;
    if (isIncrease == true) {
        newCaseNumber = previousNumber + 1;
    } else {

        newCaseNumber = previousNumber - 1;

    }


    caseNumber.value = newCaseNumber;
    return newCaseNumber;


}

function updateCasePrice(newCaseNumber) {

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById("case-total");
    caseTotalElement.innerText = caseTotalPrice;

}





document.getElementById('button-case-plus').addEventListener('click', function() {
    const newCaseNumber = updateCase(true);

    updateCasePrice(newCaseNumber);

    calculateSubTotal();


});

document.getElementById('button-case-minus').addEventListener('click', function() {
    const newCaseNumber = updateCase(false);

    updateCasePrice(newCaseNumber);

    calculateSubTotal();

});