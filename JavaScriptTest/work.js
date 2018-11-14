var person = {
    firstName: 'Jiayi',
    lastName: 'Xu',
    fullName: function () {
        'use strict';
        return this.firstName + ' ' + this.lastName;
    }

};

console.log(person.fullName());


var calculator = {
    operand01: -1,
    operand02: -1,

    add: function () {
        'use strict';
        return this.operand01 + this.operand02;
    },

    subtract: function () {
        'use strict';
        return this.operand01 - this.operand02;
    }

}

calculator.multiply = function (operand01, operand02) {
    return operand01 * operand02;
}

calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;

console.log(calculator.operand01);
console.log(calculator.operand02);
console.log(calculator.add());
console.log(calculator.subtract());