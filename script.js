document.addEventListener('DOMContentLoaded', function() {

  const buttons = document.querySelectorAll('.menu-option');
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      const modalId = button.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      modal.style.display = 'block';
    });
  });

  const closeModalButtons = document.querySelectorAll('.close');
  closeModalButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const modal = button.closest('.modal');
      modal.style.display = 'none';
    });
  });

  const submitButtons = document.querySelectorAll('.submitExamBoard');
  submitButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const examBoardSelect = button.previousElementSibling;
      const selectedOption = examBoardSelect.options[examBoardSelect.selectedIndex];
      const url = selectedOption.dataset.url;

      if (url) {
        window.location.href = url;
      }
    });
  });

  const submitUsernameButton = document.querySelector('.submitUsername');
  submitUsernameButton.addEventListener('click', function() {
    const usernameInput = document.getElementById('username-input');
    const username = usernameInput.value;

    if (username.trim() !== '') {
      // Send the username to the server
      fetch('/saveUsername', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username })
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the server
          if (data.success) {
            alert('Username saved successfully.');
          } else {
            alert('Failed to save username.');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  });


});

