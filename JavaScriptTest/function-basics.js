window.onload = () => {

    const functionCalls = document.getElementById('function-calls');
    const calluserinput = document.getElementById('call-user-input');

    functionCalls.onclick = () => {
        simplefunction();
        functionParameters("Many functions return values.");
        functionreturn();
        const returnvalue = functionreturn();
        console.log(returnvalue);
    }

    calluserinput.onclick = () => {
        const userInputParagraph = document.getElementById('show-user-input');
        const userInput = document.getElementById('user-input');
        userInputParagraph.textContent = userInput.value;
    }

}

function simplefunction() {

    const displaytext = "functions should consist of statements designed to perform a single task."
    const simpleFunction = document.getElementById('simple-function');
    console.log(displaytext)
    simpleFunction.textContent = displaytext;

}

function functionParameters(value) {

    const functionParameters = document.getElementById("function-parameters");
    console.log(value);
    functionParameters.textContent = value;

}

function functionreturn() {
    return "Many functions return values.";
}







// function functionreturn() {
//  console.log("Many functions return values.");
// }


// simplefunction();
// functionParameters("Many functions take parameters.");






//add(2, 3);
//adder();
// functionreturn();

//*function add(a, b) {

//    console.log(a + b);
//}

//function adder() {

  //  console.log(2 + 3);
//}