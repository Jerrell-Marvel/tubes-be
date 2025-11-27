const dummyUsers = [
  { username: "user1", password: "password123" },
  { username: "Mountain_Explorer_1", password: "securepassword" },
  { username: "City_Slicker_22", password: "12345" },
];

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorMessage = document.getElementById("errorMessage");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    window.location.href = "../homepage/index.html";

    //   const username = usernameInput.value.trim();
    //   const password = passwordInput.value;

    //   const user = dummyUsers.find(
    //     (u) => u.username === username && u.password === password
    //   );

    //   errorMessage.textContent = "";

    //   if (user) {
    //     console.log("Login successful:", user.username);
    //     alert("Login Berhasil! Mengalihkan ke halaman utama...");
    //     window.location.href = "../homepage/index.html";
    //   } else {
    //     errorMessage.textContent =
    //       "Sorry, your password was incorrect. Please double-check your password.";
    //     console.log("Login failed for username:", username);
    //     passwordInput.value = "";
    //   }
  });
});
