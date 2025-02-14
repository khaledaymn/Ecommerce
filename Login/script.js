document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    history.pushState(null, null, location.href);
    window.onpopstate = () => {
      history.pushState(null, null, location.href);
    };
  }, 0);
  
  localStorage.setItem("cartItems", JSON.stringify(""));
  
    const form = document.getElementById("loginForm")
  
    form.addEventListener("submit", (e) => {
      e.preventDefault()
  
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
      const confirmPassword = document.getElementById("confirmPassword").value
      
      if (/\d/.test(name)) {
        alert("Name should not contain numbers");
        return;
      }
  
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
      }
  
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, and a number");
        return;
      }

      if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match")
        return
      }

      const userData = {
        name: name,
        email: email
      }
  
      localStorage.setItem("userData", JSON.stringify(userData))
  
      window.location.href = "/HomePage/home.html"; 

    })
  })
  
  