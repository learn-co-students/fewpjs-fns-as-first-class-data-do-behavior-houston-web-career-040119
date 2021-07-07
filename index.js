/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function displayMessage(msg){
document.getElementById("greeting").innerText = msg;
}



function greet(tstr){
  const hour = parseInt(tstr, 10);
    if ( hour < 12) return "Good Morning"
    if ( hour > 17) return "Good Evening"
    return "Good Afternoon"


}
/* Write your implementation of displayMessage() */
