// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Dynamic greeting based on the time of day
function displayGreeting() {
  const currentTime = new Date().getHours();
  const greetingElement = document.createElement('div');
  const heroSection = document.querySelector('.hero-content');

  let greetingMessage = 'Welcome!';
  if (currentTime < 12) {
    greetingMessage = 'Good Morning!';
  } else if (currentTime < 18) {
    greetingMessage = 'Good Afternoon!';
  } else {
    greetingMessage = 'Good Evening!';
  }

  greetingElement.textContent = greetingMessage;
  greetingElement.style.fontSize = '1.5em';
  greetingElement.style.marginBottom = '1em';

  // Insert greeting at the top of the hero content
  heroSection.prepend(greetingElement);
}

// Call the function to display the greeting
displayGreeting();

  