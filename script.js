var grossIncomeInput = document.getElementById("grossIncome");
var extraIncomeInput = document.getElementById("extraIncome");
var ageGroupInput = document.getElementById("ageGroup");
var deductionInput = document.getElementById("deduction");
var grossIncomevalue;
var submit = () => {

    grossIncomevalue = grossIncomeInput.value;
    var extraIncomevalue = extraIncomeInput.value;
    var ageGroupvalue = ageGroupInput.value;
    var deductionvalue = deductionInput.value;

    if (grossIncomevalue !== "" && extraIncomevalue !== "" && ageGroupvalue !== "" && deductionvalue !== "" && isNaN(grossIncomevalue) === false && isNaN(extraIncomevalue) == false && isNaN(deductionvalue) === false) {
        var tax_display = document.getElementById("tax_display");
        var taxinfo = document.getElementById("taxinfo")
        var taxCalculate;
        if (grossIncomevalue + extraIncomevalue - deductionvalue < 800000) {
            tax_display.innerHTML = Number(grossIncomevalue) + Number(extraIncomevalue) - Number(deductionvalue);
            taxinfo.innerHTML = "No tax will be taken since Income is less than 8 lakhs"
        } else {
            if (ageGroupvalue == "less than 40") {
                totalIncome = (Number(grossIncomevalue) + Number(extraIncomevalue) - Number(deductionvalue))
                taxCalculate = totalIncome * 0.3
                tax_display.innerHTML = totalIncome - taxCalculate;
            }
            if (ageGroupvalue == "≥ 40 & < 60") {
                totalIncome = (Number(grossIncomevalue) + Number(extraIncomevalue) - Number(deductionvalue))
                taxCalculate = totalIncome * 0.4
                tax_display.innerHTML = totalIncome - taxCalculate;
            }
            if (ageGroupvalue == "≥ 60") {
                totalIncome = (Number(grossIncomevalue) + Number(extraIncomevalue) - Number(deductionvalue))
                taxCalculate = totalIncome * 0.1
                tax_display.innerHTML = totalIncome - taxCalculate;
            }
            document.getElementById("grossIncome").value = "";
            document.getElementById("extraIncome").value = "";
            document.getElementById("ageGroup").value = "";
            document.getElementById("deduction").value = "";
        }

        document.getElementById("grossIncome_alert").style.display = "none";
        document.getElementById("extraIncome_alert").style.display = "none";
        document.getElementById("dropdown_alert").style.display = "none";
        document.getElementById("deduction_alert").style.display = "none";

    }
    else {
        if (grossIncomevalue === "" || isNaN(grossIncomevalue) == true) {
            document.getElementById("grossIncome_alert").style.display = "inline";
        } else {
            document.getElementById("grossIncome_alert").style.display = "none";
        }

        // For Second Input field 
        if (extraIncomevalue === "" || isNaN(extraIncomevalue) == true) {
            document.getElementById("extraIncome_alert").style.display = "inline";
        } else {
            document.getElementById("extraIncome_alert").style.display = "none";
        }

        // For Third Input field 
        if (ageGroupvalue === "") {
            document.getElementById("dropdown_alert").style.display = "inline";
        }

        // For fourth Input field 
        if (deductionvalue === "" || isNaN(deductionvalue) == true) {
            document.getElementById("deduction_alert").style.display = "inline";
        } else {
            document.getElementById("deduction_alert").style.display = "none";
        }
    }

    var modal = () => {
        if (grossIncomevalue != "" && extraIncomevalue != "" && ageGroupvalue != "" && deductionvalue != "") {
            "modal"
        } else {
            ""
        }
    }   
}
var submit_div = document.getElementById("submit_div")
submit_div.innerHTML = `<button class="btn btn-primary border-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
id="submit_btn" onclick="submit()">Submit form</button>`

console.log(grossIncomevalue)
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})