let num1 = null
let num2 = null
let operator1 = null
let operator2 = null
let result = null
let point = false


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

let power = (num1, num2)=>{
    return num1**num2
}

let operate = (number1, number2, operator) =>{
    let num1 = Number(number1)
    let num2 = Number(number2)
    switch(operator){
        case '+':
            return add(num1, num2);
        case '-':
            return substract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '÷':
            return divide(num1, num2);
        case "^":
            return power(num1, num2)
    }
}


const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.primary')
const sec_display = document.querySelector('.secondary')

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        processInput(button)
        setSecondaryDisplay(button)
    })
})

let processInput = (input) =>{
    if(input.classList.contains('num')){
        processNumber(input.value)
    }else if(input.classList.contains('operator')){
        processOperator(input.value)
    }else if(input.classList.contains('equ')){
        processEquals()
    }else if(input.classList.contains('cls')){
        clear()
    }
}

let updateDisplay = (input) =>{
    display.textContent = input
}

// console.log('i got here')

let setSecondaryDisplay = (input)=>{
    let isEqualPressed = true
    if(num1 == null && num2 == null && operator1 == null){
        sec_display.textContent = ''
        console.log('i got here 1')
    }
    else{
        sec_display.innerHTML += ` ${input.value} `
        console.log('i got here 2')
    }
}

let clear = () =>{
    num1 = null
    num2 = null
    operator1 = null
    operator2 = null
    result = null
    point = false
    updateDisplay(0)
}

let processNumber = (input) =>{
    if(operator1 == null && operator2 == null && result == null){
        if(num1 == null){
            num1 = input
        }else if(num1.toString().length < 9){
            num1 += input
        }
        updateDisplay(num1)
    }else{
        if(num2 == null){
            num2 = input
        }else if(num2.toString().length<9){
            num2 += input
        }
        updateDisplay(num2)
    }
}


let processOperator = (input) =>{
    if(operator1 === null){
        operator1 = input
    }else if(operator2 === null){
        result = operate(num1, num2, operator1)
        operator2 = input
        num1 = num2
        num2 = null
        point = false
        updateDisplay(result)
    }else if(operator2!=null && num2!=null){
        result = operate(num1, num2, operator2)
        operator2 = input
        num1= num2
        num2 = null
        point = false
        updateDisplay(result)
    }else{
        operator2 = input
    }
}

let processEquals = ()=>{
    if(operator1 === null){
        updateDisplay(num1)
    }else{
        if(operator2!=null){
            result = operate(num1, num2, operator2)
        }else{
            result = operate(num1, num2, operator1)
        }
    }
    if(result === null){
        updateDisplay(0)
    }else{
        updateDisplay(result)
    }
    num1 = result
    num2 = null
    operator1 = null
    operator2 = null
    point = false
}
