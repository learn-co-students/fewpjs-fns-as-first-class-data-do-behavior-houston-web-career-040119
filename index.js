/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  timeString = timeString.padStart(5,0)
  if (timeString < "12:00") {
    return "Good Morning"
  }
  else if (timeString > "17:00") {
    return "Good Evening"
  }
  else {
    return "Good Afternoon"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  let message = document.getElementById("greeting")
  message.textContent = greeting
}
