// Your code goes here
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('text');
  
    
    if (textElement) {
      textElement.textContent = 'This is really cool!';
    } else {
      console.error('Element with id "text" not found.');
    }
  });
  