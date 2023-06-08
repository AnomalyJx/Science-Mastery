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

  const okButton = document.getElementById('OK');
  okButton.addEventListener('click', function() {
    // Perform desired action here
    // For example, retrieve the selected exam board value and process it
    const examBoardSelect = document.getElementById('examBoardSelect');
    const selectedExamBoard = examBoardSelect.value;
    console.log('Selected exam board:', selectedExamBoard);

    // Close the modal after performing the action
    const modal = okButton.closest('.modal');
    modal.style.display = 'none';
  });
});
