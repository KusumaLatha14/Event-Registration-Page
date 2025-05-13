(function(){
  const steps = [...document.querySelectorAll('.step')];
  const dots = [...document.querySelectorAll('.dot')];
  const eventName = document.getElementById('event-name').textContent;
  const confirmMessage = document.getElementById('confirm-message');

  function showStep(index) {
    steps.forEach((s, i) => {
      s.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });

    // Focus for accessibility on active step
    if (steps[index].focus) {
      steps[index].focus();
    }
  }

  // Step controls
  document.getElementById('to-step-2').addEventListener('click', () => {
    showStep(1);
  });
  document.getElementById('to-step-3').addEventListener('click', () => {
    showStep(2);
    // Focus first input for accessibility
    document.getElementById('full-name').focus();
  });

  // Form submit handling
  const form = document.getElementById('registration-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simple validation
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const name = form['fullName'].value.trim();
    confirmMessage.textContent = `Dear ${name}, you have successfully registered for the "${eventName}". We look forward to seeing you there!`;
    showStep(3);
  });

})();
