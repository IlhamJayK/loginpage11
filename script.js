document.getElementById("loginButton").addEventListener("click", function() {
    validateLogin();
  });
  
  function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    if (email === "" || password === "") {
      alert("Masukkan email dan password");
    } else {
      alert("Email: " + email + "\nPassword: " + password);
    }
  }
