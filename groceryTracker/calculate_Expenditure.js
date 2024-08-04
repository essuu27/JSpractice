function calculate_Expenditure() {
 exp1 = parseFloat(document.getElementById('groc1').value);
 exp2 = parseFloat(document.getElementById('groc2').value);
 exp3 = parseFloat(document.getElementById('groc3').value);

let totalExpense = exp1 + exp2 + exp3;
document.getElementById('result').innerText = `The total amount is: ${totalExpense}`;
}

