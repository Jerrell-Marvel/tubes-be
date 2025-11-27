import { renderNav } from "../../global.js";

renderNav();

const postContainer = document.querySelector(".post-container");

const dummyData = [
  {
    profile_name: "Mountain_Explorer_1",
    img_url: "./dummy-img/dummy-img-1.jpg",
    caption: "A breathtaking view of the sun setting over the jagged mountain peaks.",
  },
  {
    profile_name: "City_Slicker_22",
    img_url: "./dummy-img/dummy-img-1.jpg",
    caption: "The vibrant lights of a bustling city skyline at midnight.",
  },
  {
    profile_name: "DeepWoods_Hiker",
    img_url: "./dummy-img/dummy-img-1.jpg",
    caption: "A quiet, winding path deep within an ancient, misty forest.",
  },
  {
    profile_name: "Wave_Rider_Surfer",
    img_url: "./dummy-img/dummy-img-1.jpg",
    caption: "Gentle waves lapping against the golden sand of a serene beach.",
  },
  {
    profile_name: "Arid_Traveler",
    img_url: "./dummy-img/dummy-img-1.jpg",
    caption: "A solitary saguaro cactus standing tall against the hot desert backdrop.",
  },
  {
    profile_name: "Morning_Brew_Pro",
    img_url: "./dummy-img/dummy-img-1.jpg",
    caption: "A steaming cup of coffee next to a book on a cozy wooden table.",
  },
  {
    profile_name: "Cosmic_Spectator",
    img_url: "./dummy-img/dummy-img-1.jpg",
    caption: "The mesmerizing green and purple glow of the Aurora Borealis in the night sky.",
  },
  {
    profile_name: "Classic_Car_Fan",
    img_url: "./dummy-img/dummy-img-1.jpg",
    caption: "A beautifully restored vintage car parked on a quiet street.",
  },
  {
    profile_name: "Garden_Bloom_Lover",
    img_url: "./dummy-img/dummy-img-1.jpg",
    caption: "A close-up shot of colorful flowers blooming in a spring garden.",
  },
  {
    profile_name: "Star_Sailor_001",
    img_url: "./dummy-img/dummy-img-1.jpg",
    caption: "An astronaut floating peacefully with the vast expanse of Earth visible below.",
  },
];

function renderPost({ profile_name, img_url, caption }) {
  return `
    <div class="post-card">
        <div class="post-profile">
        <a class="reset-link-style" href="/pages/profile/profile_page.html">${profile_name}</a>
        </div>

        <img src="${img_url}" alt="dummy" />

        <div class="post-actions">
            <svg class="like-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.305-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.843 1.175 1.222 1.175 2.066 0a4.21 4.21 0 0 1 3.843-1.941z"/>
            </svg>
        </div>

        <div class="post-caption">
            <p>
                <a class="caption-username reset-link-style" href="/pages/profile/profile_page.html">${profile_name}</a>
                ${caption}
            </p>
        </div>
    </div>`;
}
for (const d of dummyData) {
  postContainer.innerHTML += renderPost(d);
}
