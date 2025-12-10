// SIGNUP PROCESS
if (document.getElementById("signupForm")) {
  document
    .getElementById("signupForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      let name = this.name.value.trim();
      let email = this.email.value.trim();
      let password = this.password.value.trim();

      if (!name || !email || !password) {
        alert("All fields are required.");
        return;
      }

      let user = { name, email, password };

      localStorage.setItem("user", JSON.stringify(user));

      alert("Account created successfully!");
      window.location.href = "blog.html";
    });
}

// LOGIN PROCESS
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = this.email.value.trim();
    let password = this.password.value.trim();

    let savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No account found. Please register first.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      alert("Login successful!");
      window.location.href = "blog.html";
    } else {
      alert("Incorrect email or password.");
    }
  });
}

// BLOG PAGE GREETING
if (document.getElementById("welcome")) {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    document.getElementById("welcome").textContent =
      "Welcome to Dashboard, " + user.name + "!";
  }
}

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", logout);
}

// LOGOUT FUNCTION
function logout() {
  window.location.href = "index.html";
}

const hapus = document.getElementById("hapus");

if (hapus) {
  hapus.addEventListener("click", hapusAkun);
}

// LOGOUT FUNCTION
function hapusAkun() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}
