window.onload = () => {

    const myForm = document.getElementById('sort-type');

    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = document.querySelector('input[name="sorter"]:checked').value;
        if (value.toLowerCase() === 'green') {
            setColor("blueBackground");
            showChoice(value);
        } else {
            setColor("greenBackground");
            showChoice(value);
        }
        if (value.toLowerCase() === 'yellow') {
            setColor("redBackground");
            showChoice(value);
        } else {
            setColor("yellowBackground");
            showChoice(value);
        }
        if (value.toLowerCase() === 'purple') {
            setColor("purpleBackground");
            showChoice(value);
        }

    });

    let currentClass = null;

    const setColor = (className) => {
        console.log("SET CLASS TO", className);
        var element = document.getElementById("form-section");
        if (currentClass) {
            element.classList.remove(currentClass);
        }
        currentClass = className;
        element.classList.add(className);
    }
}