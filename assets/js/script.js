const BUTTONS_CONTAINER = document.querySelector(".buttonsContainer");

// // function for new elements

function buttonsGenerator(container, numberOfButtons) {
  for (let index = 0; index < numberOfButtons; index++) {
    let newButtons = document.createElement("button");
    container.append(newButtons);
  }
}

buttonsGenerator(BUTTONS_CONTAINER, 3, "btn btn-outline-danger me-4");

// styling decrement Button

const DECREMENT_BTN = BUTTONS_CONTAINER.children[0];

DECREMENT_BTN.textContent = "-";
DECREMENT_BTN.className = "decrement-button btn btn-outline-danger me-4";

// styling Reset Button

const RESET_BTN = BUTTONS_CONTAINER.children[1];

RESET_BTN.textContent = "Reset";
RESET_BTN.className = "reset-button btn btn-outline-danger";

// styling increment Button

const INCREMENT_BTN = BUTTONS_CONTAINER.children[2];

INCREMENT_BTN.textContent = "+";
INCREMENT_BTN.className = "increment-button btn btn-outline-danger ms-4";


// styling buttons for mobile mobile touch screen 

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('touchstart', () => {
      button.style.backgroundColor = 'red';
      button.style.color = 'white'
  });
  button.addEventListener('touchend', () => {
      button.style.backgroundColor = 'white';
      button.style.color = 'red'
  });
});
 
// creation and styling of result

let result = document.createElement("div");

result.textContent = "0";
result.className = "result-value fs-3 mt-4 mb-4";

document.querySelector("h1").after(result);

//
//
//

let resultValue = document.querySelector(".result-value");

let currentValue = 0;

BUTTONS_CONTAINER.addEventListener("click", (event) => {
  let target = event.target;

  if (target.innerHTML == "+") {
    currentValue += 1;
    resultValue.innerHTML = currentValue;
  } else if (target.innerHTML == "-") {
    currentValue -= 1;
    resultValue.innerHTML = currentValue;
  } else if (target.innerHTML == "Reset") {
    currentValue = 0;
    resultValue.innerHTML = currentValue;
  }

});
