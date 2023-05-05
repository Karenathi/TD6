const registerBtn = document.getElementById("register-btn");
const modal = document.getElementById("modal");
const submitBtn = document.getElementById("signup-btn");

registerBtn.addEventListener("click", () => {
  modal.style.display = "block";
});


submitBtn.addEventListener("click", (e) => {
  modal.style.display = "none"
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
  nameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
});


