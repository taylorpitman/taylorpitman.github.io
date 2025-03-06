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

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.skills-track');
  
  // Function to calculate total width of all items
  const calculateTotalWidth = () => {
    const items = track.querySelectorAll('.skill-item');
    const screenWidth = window.innerWidth;
    const itemsWidth = Array.from(items).reduce((total, item) => {
      const style = window.getComputedStyle(item);
      const width = item.offsetWidth +
        parseInt(style.marginLeft) +
        parseInt(style.marginRight) +
        parseInt(style.gap);
      return total + width;
    }, 0);
    
    // Ensure the width is at least the screen width
    return Math.max(screenWidth, itemsWidth);
  };

  // Function to duplicate items for seamless scroll
  const setupScroll = () => {
    // Clear existing duplicates
    track.innerHTML = track.innerHTML.split('<!-- Duplicate set -->')[0];
    
    // Add duplicate sets until we exceed screen width
    const originalItems = track.innerHTML;
    let currentWidth = 0;
    const screenWidth = window.innerWidth;
    
    while (currentWidth < screenWidth * 2) {
      track.innerHTML += originalItems;
      currentWidth += calculateTotalWidth();
    }
    
    // Calculate and set widths
    const totalWidth = calculateTotalWidth();
    track.style.width = `${totalWidth * 2}px`; // Double the width for seamless scroll
    
    // Update animation
    const styleSheet = document.styleSheets[0];
    const existingRuleIndex = Array.from(styleSheet.cssRules).findIndex(rule => rule.name === 'scroll');
    if (existingRuleIndex !== -1) {
      styleSheet.deleteRule(existingRuleIndex);
    }
    
    styleSheet.insertRule(`
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${totalWidth}px); }
      }
    `, styleSheet.cssRules.length);
  };

  // Initial setup
  setupScroll();

  // Update on resize with debounce
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(setupScroll, 100);
  });

  // Pause animation when not in viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      track.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
    });
  });
  observer.observe(document.querySelector('.skills-carousel'));
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

