window.onload = () => {
 // Part I here
    const userInput = document.getElementById('list-data');
    const setTextButton = document.getElementById('set-text');

     }
// Part II here
     
    setTextButton.onclick = () => {
        userInput.value = 'The first item for my list';}

// Part III here
listButton.onclick = () => {
    const myList = document.getElementById('my-list');
    elfCode.appendToList(myList, userInput.value);
}
}