
const profileData = {
  username: "John Doe",
  profile_picture: "./pictures/dummy_pfp.jpg",
  posts: [
    {
      img_url: "./pictures/meme1.jpg",
      caption: "Worst meme template to ever exist",
      likes: 128
    },
    {
      img_url: "./pictures/meme2.jpg",
      caption: "Ketika temen lu gagal install hadoop tapi lu berhasil",
      likes: 94
    },
    {
      img_url: "./pictures/meme3.jpg",
      caption: "Nahan ketawa kalo ada yang disablitas",
      likes: 141
    }
  ]
};

const profileNameEl = document.querySelector(".profile-name");
const profilePictureEl = document.querySelector(".profile-picture");
const postsContainer = document.querySelector(".posts");

const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const modalCaption = document.querySelector(".modal-caption");
const modalLikes = document.querySelector(".modal-likes");
const modalCloseBtn = document.querySelector(".modal-close");

function renderHeader() {
  profileNameEl.textContent = profileData.username;

  profilePictureEl.innerHTML = `
    <img src="${profileData.profile_picture}" alt="pfp">
  `;
}


function renderPosts() {
  postsContainer.innerHTML = "";

  profileData.posts.forEach((post, index) => {
    const postEl = document.createElement("div");
    postEl.classList.add("post-item");

    postEl.innerHTML = `
      <img src="${post.img_url}" alt="post">
    `;

    postEl.addEventListener("click", () => openModal(index));

    postsContainer.appendChild(postEl);
  });
}


function openModal(index) {
  const post = profileData.posts[index];

  modalImg.src = post.img_url;
  modalCaption.textContent = post.caption;
  modalLikes.textContent = `${post.likes} likes`;

  modal.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
}

modalCloseBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});


renderHeader();
renderPosts();
