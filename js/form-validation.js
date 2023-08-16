document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const submitButton = document.getElementById('submitBtn');
    const requiredFields = form.querySelectorAll('[required]');

    function checkRequiredFields() {
      let allFieldsFilled = true;
      requiredFields.forEach(field => {
        if (field.value.trim() === '') {
          allFieldsFilled = false;
        }
      });
      return allFieldsFilled;
    }

    form.addEventListener('input', function () {
      if (checkRequiredFields()) {
        submitButton.removeAttribute('disabled');
      } else {
        submitButton.setAttribute('disabled', 'disabled');
      }
    });
  });