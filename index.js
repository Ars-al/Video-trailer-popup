const btnEl = document.querySelector(".btn");
const videoContainerEl = document.querySelector(".video-container");
const closeiconEl = document.querySelector(".close-icon");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", () => {
    videoContainerEl.classList.remove("active");
});

closeiconEl.addEventListener("click", () => {
    videoContainerEl.classList.add("active");

    videoEl.pause();
    videoEl.currentTime = 0;
});