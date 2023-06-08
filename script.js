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
});
