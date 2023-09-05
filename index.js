document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  if (name === "" || name.length < 2) {
    alert("Name is required and must be at least 2 characters.");
    return;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (email === "" || !email.match(emailPattern)) {
    alert("Email is required and must be a valid email address.");
    return;
  }

  if (password === "" || password.length < 8) {
    alert("Password is required and must be at least 8 characters.");
    return;
  }

  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Password: " + password);
});
