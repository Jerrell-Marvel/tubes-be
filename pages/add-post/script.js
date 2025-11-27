const imageUpload = document.getElementById("imageUpload");
const imagePreview = document.getElementById("imagePreview");
const placeholderText = document.getElementById("placeholderText");
const postButton = document.getElementById("postButton");
const newPostForm = document.getElementById("newPostForm");
const captionInput = document.getElementById("captionInput");
const postMessage = document.getElementById("postMessage");
const imagePreviewArea = document.querySelector(".image-preview-area");

function updatePostButtonState() {
  const isImageUploaded = imageUpload.files.length > 0;
  const isCaptionFilled = captionInput.value.trim().length > 0;

  postButton.disabled = !(isImageUploaded && isCaptionFilled);
}

imageUpload.addEventListener("change", function (e) {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (event) {
      imagePreview.src = event.target.result;
      imagePreview.classList.remove("hidden");
      placeholderText.classList.add("hidden");
      updatePostButtonState();
    };

    reader.readAsDataURL(file);
  } else {
    imagePreview.src = "";
    imagePreview.classList.add("hidden");
    placeholderText.classList.remove("hidden");
    updatePostButtonState();
  }
});

imagePreviewArea.addEventListener("click", () => {
  imageUpload.click();
});

captionInput.addEventListener("input", updatePostButtonState);

newPostForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const isImageUploaded = imageUpload.files.length > 0;
  const isCaptionFilled = captionInput.value.trim().length > 0;

  if (!isImageUploaded || !isCaptionFilled) {
    postMessage.textContent = "Please upload an image and fill the caption.";
    postMessage.style.color = "red";
    postMessage.classList.remove("hidden");
    return;
  }
});
