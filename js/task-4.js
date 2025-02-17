const submittingForm = document.querySelector("form.login-form");
submittingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.target;
  const emailValue = form.elements.email.value.trim();
  const passwordValue = form.elements.password.value.trim();

  if (!emailValue || !passwordValue) {
    return alert("All form fields must be filled in");
  }
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);
  form.reset();
});
