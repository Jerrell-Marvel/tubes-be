// Data pengguna dummy untuk keperluan login
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
    e.preventDefault(); // Mencegah form dari submit secara default

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    // Cari pengguna yang cocok dengan username dan password
    const user = dummyUsers.find(
      (u) => u.username === username && u.password === password
    );

    errorMessage.textContent = ""; // Hapus pesan error sebelumnya

    if (user) {
      // Login Berhasil
      console.log("Login successful:", user.username);
      // Simulasikan pengalihan ke homepage
      alert("Login Berhasil! Mengalihkan ke halaman utama...");
      window.location.href = "../homepage/index.html"; // Sesuaikan path jika perlu
    } else {
      // Login Gagal
      errorMessage.textContent =
        "Sorry, your password was incorrect. Please double-check your password.";
      console.log("Login failed for username:", username);
      passwordInput.value = ""; // Bersihkan field password
    }
  });
});
