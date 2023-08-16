
  const countryDropdown = document.getElementById("countryDropdown");
  const countryList = countryDropdown.querySelector(".country-list");

  // Initialize the intlTelInput plugin
  const iti = window.intlTelInput(phoneInput, {
    initialCountry: "auto",
    separateDialCode: true,
    preferredCountries: ["us", "in"], // Add preferred countries
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
  });

  // Populate country codes dropdown dynamically
  for (let i = 0; i < iti.getCountryData().length; i++) {
    const countryData = iti.getCountryData()[i];
    const countryCode = countryData.dialCode;
    const countryName = countryData.name;

    const option = document.createElement("option");
    option.value = countryCode;
    option.text = `${countryName} (${countryCode})`;
    countryList.appendChild(option);
  }

  // Update the selected country code on country change
  iti.promise.then(() => {
    const selectedCountryData = iti.getSelectedCountryData();
    const selectedCountryCode = selectedCountryData.dialCode;
    document.querySelector("#countryCode").value = selectedCountryCode;
  });

  // Add a submit event listener to the form
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (event) {
    // Your form submission code here
  });
