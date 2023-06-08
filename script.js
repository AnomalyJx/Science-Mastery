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

  const okButton = document.getElementById('submitExamBoardBiology');
  okButton.addEventListener('click', function() {
    const examBoardSelect = document.getElementById('examBoardSelectBiology');
    const selectedOption = examBoardSelect.options[examBoardSelect.selectedIndex];
    const url = selectedOption.dataset.url;

    if (url) {
      window.location.href = url;
    }
  });

  const okButton = document.getElementById('submitExamBoardChemistry');
  okButton.addEventListener('click', function() {
    const examBoardSelect = document.getElementById('examBoardSelectChemistry');
    const selectedOption = examBoardSelect.options[examBoardSelect.selectedIndex];
    const url = selectedOption.dataset.url;

    if (url) {
      window.location.href = url;
    }
  });

  const okButton = document.getElementById('submitExamBoardPhysics');
  okButton.addEventListener('click', function() {
    const examBoardSelect = document.getElementById('examBoardSelectPhysics');
    const selectedOption = examBoardSelect.options[examBoardSelect.selectedIndex];
    const url = selectedOption.dataset.url;

    if (url) {
      window.location.href = url;
    }
  });

  const okButton = document.getElementById('submitExamBoardMaths');
  okButton.addEventListener('click', function() {
    const examBoardSelect = document.getElementById('examBoardSelectMaths');
    const selectedOption = examBoardSelect.options[examBoardSelect.selectedIndex];
    const url = selectedOption.dataset.url;

    if (url) {
      window.location.href = url;
    }
  });

  const okButton = document.getElementById('submitExamBoardCompSci');
  okButton.addEventListener('click', function() {
    const examBoardSelect = document.getElementById('examBoardSelectCompSci');
    const selectedOption = examBoardSelect.options[examBoardSelect.selectedIndex];
    const url = selectedOption.dataset.url;

    if (url) {
      window.location.href = url;
    }
  });

});