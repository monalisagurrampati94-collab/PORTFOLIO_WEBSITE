document.addEventListener("DOMContentLoaded", () => {

  // Smooth keyboard focus message
  console.log("Portfolio Website Loaded Successfully");

  // Accessible form validation
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (event) {

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      // Trim values
      const nameValue = name.value.trim();
      const emailValue = email.value.trim();
      const messageValue = message.value.trim();

      // Basic validation
      if (
        nameValue === "" ||
        emailValue === "" ||
        messageValue === ""
      ) {
        alert("Please fill in all fields.");
        event.preventDefault();
        return;
      }

      // Email validation
      const emailPattern =
        /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

      if (!emailPattern.test(emailValue)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
      }

      // Success message
      alert("Form submitted successfully!");
    });
  }

});