let calculator = function (){

    const add = (num1, num2) => {
            return num1 + num2

    }
    const subtract = (num1, num2) => {
            return num1 - num2

    }
    const multiply = (num1, num2) => {
            return num1 * num2

    }
    const divide = (num1, num2) => {
            return num1/ num2

    }
                    
    return {
        add,
        subtract,
        multiply,
        divide
    }

}();



//console.log(calculator.add(5,6))
export default calculator;