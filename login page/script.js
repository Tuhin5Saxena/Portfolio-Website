document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let errorMsg = document.getElementById("errorMsg");

  // Demo validation
  if (email === "admin@example.com" && password === "123456") {
    alert("Login Successful!");
  } else {
    errorMsg.innerText = "Invalid email or password";
  }
});