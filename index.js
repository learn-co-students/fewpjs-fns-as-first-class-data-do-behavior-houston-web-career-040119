/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  let a = parseInt(string,10);
  if(a < 12){
    return "Good Morning"
  }else if(a > 12 && a < 17){
    return "Good Afternoon"
  }else{
    return "Good Evening"
  }
  
}


/* Write your implementation of displayMessage() */
function displayMessage(string){
  let message = document.getElementById('greeting');
  message.innerText = string
}
