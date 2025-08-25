let expression = "";

function appendValue(val){
    expression +=  val;
    document.getElementById("result").value = expression;
}

function clearResult(){
    expression = "";
    document.getElementById("result").value = expression;
}

function calculate() {
    let operator = null;
    if (expression.includes("+")) operator = "+";
    else if (expression.includes("-")) operator = "-";
    else if (expression.includes("*")) operator = "*";
    else if (expression.includes("/")) operator = "/";

    if (!operator) {
      document.getElementById("result").value = "Error";
      expression = "";
      return;
    }

    let parts = expression.split(operator);
    if (parts.length !== 2) {
      document.getElementById("result").value = "Error";
      expression = "";
      return;
    }

    let num1 = parseFloat(parts[0]);
    let num2 = parseFloat(parts[1]);
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("result").value = "Error";
      expression = "";
      return;
    }

    let result;
    if (operator === "+") result = num1 + num2;
    if (operator === "-") result = num1 - num2;
    if (operator === "*") result = num1 * num2;
    if (operator === "/") {
      if (num2 === 0) {
        document.getElementById("result").value = "Error";
        expression = "";
        return;
      }
      result = num1 / num2;
    }

    document.getElementById("result").value = result;
    expression = result.toString(); 
}