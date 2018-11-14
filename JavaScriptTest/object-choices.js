function loader() {
    const getNamesButton = document.getElementById('getNames');
    const FunctionButton = document.getElementById('getFunctionObject');

    getNamesButton.onclick = function() {
        const name = myObject.getName();
        const getNamesDisplay = document.getElementById('getNamesDisplay');
        getNamesDisplay.textContent = name;

        const FullName = myObject.getFullName();
        const getFullNameDisplay = document.getElementById('getFullNameDisplay');
        getFullNameDisplay.textContent = FullName;
    }


    const FunctionObject = new FunctionObject();
    console.log(FunctionObject.getFullName());
    //console.log(FunctionObject.getName());
    //FunctionButton.onclick = function() {console.log()}

}
window.onload = loader;


const myObject = {
    firstName:'Jiayi',
    lastName:'Xu',
    getName: function() {
        return this.firstName + ' ' + this.lastName;
    }

};

function FunctionObject () {
    const firstName = 'Jiayi';
    const lastName = 'Xu';

    const getName = () => {
        return 'Function Object';
    }

    FunctionObject.prototype.getFullName = () => {
       // return 'This is the Full Name';
       return this.firstName + ' ' + this.lastName;
    }

}


myObject.middleName = 'None';
myObject.getFullName = function() {
    return this.firstName + ' ' + this.middleName + ' ' + this.lastName;

}



console.log(myObject.firstName);
console.log(myObject['firstName']);
console.log(myObject.getName());
console.log(myObject.middleName);
console.log(myObject.getFullName());