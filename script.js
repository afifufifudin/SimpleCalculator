let num1
let num2
let operator


let add = (num1, num2)=>{
    return num1+num2
}

let substract = (num1, num2)=>{
    return num1-num2
}

let multiply = (num1, num2)=>{
    return num1*num2
}

let divide = (num1, num2)=>{
    return num1/num2
}

let operate = (num1, num2, operator) =>{
    switch(operator){
        case '+':
            return add(num1, num2);
        case '-':
            return substract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '÷':
            return divide(num1, num2);
    }
}