// const addToList =

window.onload = () => {

/* 
*
*
*/


    const listButton = document.getElementById('run-for-loop');

    listButton.onclick = function () {
        const myList = document.getElementById('my-list');

        for (let i = 1; i <= 5; i ++) 
        {
                
        elfCode.appendToList(myList, i);
        }

    };
}
