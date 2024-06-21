const BUTTONS_CONTAINER = document.querySelector('.buttonsContainer')



// creation and styling of decrement Button
const DECREMENT_BTN = document.createElement('button')
DECREMENT_BTN.textContent = '-'

DECREMENT_BTN.className = 'decrement-button btn btn-outline-danger me-4'

BUTTONS_CONTAINER.append(DECREMENT_BTN)

// creation and styling of reset Button
const RESET_BTN = document.createElement('button')
RESET_BTN.textContent = 'Reset'

RESET_BTN.className = 'reset-button btn btn-outline-danger'

BUTTONS_CONTAINER.append(RESET_BTN)

// creation and styling of increment Button
const INCREMENT_BTN = document.createElement('button')
INCREMENT_BTN.textContent = '+'

INCREMENT_BTN.className = 'increment-button btn btn-outline-danger ms-4'

BUTTONS_CONTAINER.append(INCREMENT_BTN)

// cresation of result

let result = document.createElement('div')
result.textContent = '0'

result.className = 'result-value fs-3 mt-4 mb-4'

document.querySelector('h1').after(result)

// 
// 
// 

const DECREMENT_BUTTON = document.querySelector('.decrement-button')
const RESET_BUTTON = document.querySelector('.reset-button')
const INCREMENT_BUTTON = document.querySelector('.increment-button')
let resultValue = document.querySelector('.result-value')

let currentValue = 0;

INCREMENT_BTN.addEventListener('click', () => {
    currentValue += 1
    resultValue.innerHTML = currentValue
})

RESET_BTN.addEventListener('click', () => {
    currentValue = 0
    resultValue.innerHTML = currentValue
})

DECREMENT_BTN.addEventListener('click', () => {
    currentValue -= 1
    resultValue.innerHTML = currentValue
})




