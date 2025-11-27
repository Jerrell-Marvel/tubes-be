export function renderNav() {
  const mainContainer = document.querySelector(".main-container");

  const userDataString = localStorage.getItem("user_data");
  let userData = null;

  try {
    if (userDataString) {
      userData = JSON.parse(userDataString);
    }
  } catch (e) {
    console.error("Bukan JSON format cuy", e);
  }

  const logoHtml = `
      <a href="/pages/home/index.html" class="reset-link-style">
        <h1 class="nav-logo">MemeBE</h1>
      </a>
    `;

  let rightContentHtml = "";
  if (userData && userData.role === "admin") {
    rightContentHtml = `
        <div class="nav-right">
          <a href="/pages/admin/profile_page_admin.html">
             <button>Manage Post</button>
          </a>
          <button id="btn-logout" class="btn-logout">Logout</button>
        </div>
      `;
  } else if (userData) {
    rightContentHtml = `
        <div class="nav-right">
          <a href="/pages/add-post/index.html"><button>+</button></a>
          <div class="profile-wrapper">
            <span>${userData.name || "User"}</span>
            <div class="profile-pic-dummy"></div>
          </div>
          <button id="btn-logout" class="btn-logout">Logout</button>
        </div>
      `;
  } else {
    rightContentHtml = `
        <div class="nav-right">
          <a href="/pages/add-post/index.html"><button>+</button></a>
          <a href="/pages/login/index.html"><button>Login</button></a>
        </div>
      `;
  }

  // render nav
  const nav = document.createElement("nav");
  nav.className = "navbar";
  nav.innerHTML = logoHtml + rightContentHtml;
  mainContainer.prepend(nav);

  // logout
  const logoutBtn = document.getElementById("btn-logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("user_data");
      //   renderNav();
      nav.innerHTML =
        logoHtml +
        `<div class="nav-right">
          <a href="/pages/add-post/index.html"><button>+</button></a>
          <a href="/pages/login/index.html"><button>Login</button></a>
        </div>`;
    });
  }
}

// document.addEventListener("DOMContentLoaded", () => {
//   renderNav();
// });
