/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString) {
  let g;
  let arr = timeString.split(':');
  let dec = parseInt((arr[1]/6)*10, 10);
  let time = parseFloat(parseInt(arr[0], 10) + '.' + (dec<10?'0':'') + dec);
  if (time < 12.00) { g = "Good Morning";} else if (time<17.00){ g = "Good Afternoon";} else if (time <=2400) { g = "Good Evening";} else {g = ''}
  return g
}

function displayMessage(g) {
  document.querySelector('h1').textContent = g
}
