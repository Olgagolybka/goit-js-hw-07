const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
    const form = event.currentTarget.elements;
    const data = { 
    email: form.email.value.trim(),
    password: form.password.value.trim(),
   } 
  
  if (data.email === "" || data.password === "") {
    alert('All form fields must be filled in');
  } else {
    console.log(data);
  }
  event.currentTarget.reset();
};