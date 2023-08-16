 // Add a submit event listener to the form
  const contactForm = document.getElementById("contact-form");
  const countryCodeDropdown = document.getElementById("countryCode");

  contactForm.addEventListener("submit", function (event) {
    if (!validateFields()) {
      event.preventDefault();
    }
  });

  function validateFields() {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const subjectField = document.getElementById("subject");
    const phoneField = document.getElementById("phone");
    
    if (!nameField.value || !emailField.value || !subjectField.value || !phoneField.value) {
      alert("Please fill in all required fields.");
      return false;
    }
  }});