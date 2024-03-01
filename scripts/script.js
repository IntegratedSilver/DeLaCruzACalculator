let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnPlus = document.getElementById("btnPlus");
let btnMinus = document.getElementById("btnMinus");
let btnMulti = document.getElementById("btnMulti");
let btnDivide = document.getElementById("btnDivide");
let btnClear = document.getElementById("btnClear");
let btnEqual = document.getElementById("btnEqual");
let btnBs = document.getElementById("btnBs");
let displayArea = document.getElementById("displayArea");
let stringNumber = "";
let operatorSaved = "";
let num1 = 0;
let num2 = 0; 
let result = 0; 


// The following is the function that dictates the behavior of our number keys
function numberPress(btnNum){
    if(result != 0){
        resetCalc();
    }
    stringNumber += btnNum; 
    console.log(stringNumber);

    updateDisplay(); 

}

// This function handles when an operator is pressed
function opPress(op){
    // if our result is NOT 0, we can assume we are trying to continue doing math with our current result as the first number
    if(result != 0){
        operatorSaved = op; 
        num1 = result;
        stringNumber = "";
        result = 0;
    }
    // if we have our first number and have NOT started building our second number, change the operator
    else if(num1 != 0 && stringNumber == ""){
        operatorSaved = op;
    }
    // if we have our first number and we HAVE started building the second number, we want to "do math" and then continue on with our new equation
    else if(num1 != 0 && stringNumber != ""){
        doMath();
        operatorSaved = op; 
        num1 = result; 
        stringNumber = "";
        result = 0;
    }
    // by process of elimination we know that we were just building our 1st number and need to save it to continue on to building our second number
    else{
        operatorSaved = op; 
        num1 = Number(stringNumber);
        stringNumber = "";
    }
    updateDisplay(); 
}

// This is a shared function for updating our display
function updateDisplay(){
    if(operatorSaved == ""){
        displayArea.innerText = stringNumber;
    }
    else{
        displayArea.innerText = num1 + " " + operatorSaved + " " + stringNumber
    }

}

// This function clears out the saved values so we start over completely
function resetCalc(){
     stringNumber = "";
     operatorSaved = "";
     num1 = 0;
     num2 = 0; 
     result = 0; 
     updateDisplay();
}

// This even handles when the equals button is pressed to perform the appropriate math. 
btnEqual.addEventListener("click", function(){
    doMath();
    displayArea.innerText = result; 
});

btnClear.addEventListener("click", function(){
    resetCalc();
});

// Number Events
btn0.addEventListener("click", function(){
    numberPress("0");
});
btn1.addEventListener("click", function(){
    numberPress("1");
});
btn2.addEventListener("click", function(){
    numberPress("2");
});
btn3.addEventListener("click", function(){
    numberPress("3");
});
btn4.addEventListener("click", function(){
    numberPress("4");
});
btn5.addEventListener("click", function(){
    numberPress("5");
});
btn6.addEventListener("click", function(){
    numberPress("6");
});
btn7.addEventListener("click", function(){
    numberPress("7");
});
btn8.addEventListener("click", function(){
    numberPress("8");
});
btn9.addEventListener("click", function(){
    numberPress("9");
});
//Operator Events
btnPlus.addEventListener("click", function(){
    opPress("+");
});
btnMinus.addEventListener("click", function(){
    opPress("-");
});
btnMulti.addEventListener("click", function(){
    opPress("X");
});
btnDivide.addEventListener("click", function(){
    opPress("÷");
});

function doMath(){
    num2 = Number(stringNumber);
    stringNumber = "";
    switch(operatorSaved){
        case "+": 
            result = num1 + num2; 
            break; 
        
        case "-":
            result = num1 - num2;
            break; 
    
        case "X":
            result = num1 * num2;
            break; 
        
        case "÷": 
            result = num1 / num2;
            break;
    }
}

// Backspace button event listener
btnBs.addEventListener("click", function() {
    if (stringNumber.length > 0) {
        // Remove the last character from the stringNumber
        stringNumber = stringNumber.slice(0, -1);
        updateDisplay();
    }
});