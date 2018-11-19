window.onload = () => {
    const objectliteralAction = document.getElementById('object-literal-action');
    const numbersAction = document.getElementById('numbers-action');

    objectliteralAction.onclick = () => {
        //  const displayString = 'you clicked a button';
        const objectliteralDisplay = document.getElementById('object-literal-display');
        console.log(objectliteral.getName());

        objectliteralDisplay.textContent = objectliteral.getName();
    }

    numbersAction.onclick = () => {
        const numbersDisplay = document.getElementById('numbers-display');
        numbersDisplay.textContent = numbers;
        for (let number of numbers) {
            //console.log(number);
            //numbersDisplay.textContent = number;
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(number));
            numbersDisplay.appendChild(li);
        }

    }



}

const numbers = [2, 1, 3];
const strings = ['one','JavaScript','three']

const objectliteral = {
    objectname: 'object literal is my name',

    getName: function () {
        return this.objectname;
    }
}