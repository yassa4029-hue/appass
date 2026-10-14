const button = document.querySelector("button");
const video = document.querySelector("video");

button.addEventListener("click", () => {
if (video) {
video.style.display = "block";
video.play();
}
});
