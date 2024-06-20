const TITLE = document.querySelector('h1')
const BUTTONS_CONTAINER = document.querySelector('.buttonsContainer')

// creation of result
let result = document.createElement('div')
result.textContent = 0
TITLE.after(result)

result.style.cssText = `text-align: center;
color: yellowgreen;
font-size: 20px;
`

// creation and styling of decrementButton

let decrementButton = document.createElement('button')
decrementButton.textContent = '-'
BUTTONS_CONTAINER.appendChild(decrementButton)
decrementButton.style.cssText = `padding: 10px;
margin: 20px;
background-color: black;
color: white;
border-radius: 15px
`

// creation and styling of resetButton

let resetButton = document.createElement('button')
resetButton.textContent = 'Reset'
BUTTONS_CONTAINER.appendChild(resetButton)
resetButton.style.cssText = `padding: 10px;
margin: 20px;
background-color: black;
color: white;
border-radius: 15px
`


// creation and styling of incrementButton

let incrementButton = document.createElement('button')
incrementButton.textContent = '+'
BUTTONS_CONTAINER.appendChild(incrementButton)
incrementButton.style.cssText = `padding: 10px;
margin: 20px;
background-color: black;
color: white;
border-radius: 15px
`



