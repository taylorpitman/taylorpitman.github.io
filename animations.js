
//flip coin animation 
function flipCoin(){
    document.getElementById('flipContainer').addEventListener('click', function() {
    this.classList.toggle('flipped');
    });
}
flipCoin();

// This event listener ensures that the DOM (HTML structure) is fully loaded before the script runs.
document.addEventListener("DOMContentLoaded", function() {
  
    // Selects all elements on the page that have the class 'hidden'
    const hiddenElements = document.querySelectorAll('.hidden');
  
    // Creates a new instance of the IntersectionObserver.
    // This API watches changes in the intersection of a target element (hiddenElements) with the viewport.
    const observer = new IntersectionObserver((entries, observer) => {
      
      // This callback function executes for each observed element when it intersects (or leaves) the viewport.
      entries.forEach(entry => {
        
        // Checks if the element is intersecting the viewport (i.e., is visible in the user's view).
        if (entry.isIntersecting) {
          
          // Adds the class 'show' to the element, triggering the CSS transition to make it visible.
          entry.target.classList.add('show');
          
        } else {
            // Remove the 'show' class when the element is no longer visible
            entry.target.classList.remove('show');
          }
      });
    });

    // Loops through each element that has the class 'hidden'.
    hiddenElements.forEach(element => {
      
      // Observes each hidden element to track its visibility in the viewport.
      observer.observe(element);
    });
  });

/***********Hamburger menu*************/
function showMenu() {
  const hamburger = document.querySelector('.hamburger-container');
  hamburger.style.display = 'flex';
  hamburger.classList.add('active');
}

function hideMenu(){
    const hamburger = document.querySelector('.hamburger-container');
    hamburger.style.display = 'none';
    hamburger.classList.remove('active'); 
}
function toggleMenu() {
  const menu = document.getElementById('hamburgerMenu');
  menu.classList.toggle('open');
}
