// Toggle light mode function
function toggleLightMode() {
  const body = document.body;
  const title = document.querySelector('.title');
  const menuOptions = document.querySelectorAll('.menu-option');
  const modeToggle = document.getElementById('mode-toggle');

  // Toggle light mode class on body
  body.classList.toggle('light-mode');

  // Toggle light mode class on title
  title.classList.toggle('light-mode');

  // Toggle light mode class on menu options
  menuOptions.forEach(option => {
    option.classList.toggle('light-mode');
  });

  // Toggle light mode class on mode toggle button
  modeToggle.classList.toggle('light-mode');
}

// Add event listener to mode toggle button
document.getElementById('mode-toggle').addEventListener('click', toggleLightMode);
