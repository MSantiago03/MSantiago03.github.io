
function register() {
    // Get the entered username and password
    var username = document.getElementById('register-username').value;
    var password = document.getElementById('register-password').value;
    
    // Store username and password in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    
    alert('Registration successful! You can now login.');
    window.location.href = 'logon.html'; 
}

function login() { 
    //get what the user entered
    var username = document.getElementById('login-username').value;
    var password= document.getElementById('login-password').value;

    // testing
    // localStorage.setItem('username', "abc");
    // localStorage.setItem('password', "123");

    //let us get the stored values for username and password
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    //check if user has logged in correctly
    if (username == storedUsername && password == storedPassword) {
      console.log("username/password is right.")
      // localStorage.setItem(isLoggedIn, "true");
      // alert("Login successful!");
      window.location.href = "menu.html"
    } else {
      alert("Invalid username or password. Please try again")
    }
  }

  